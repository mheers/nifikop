/*
Copyright 2020.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"reflect"

	"github.com/banzaicloud/k8s-objectmatcher/patch"
	"github.com/konpyutaika/nifikop/api/v1alpha1"
	"github.com/konpyutaika/nifikop/pkg/clientwrappers/parameterprovider"
	"github.com/konpyutaika/nifikop/pkg/k8sutil"
	"github.com/konpyutaika/nifikop/pkg/nificlient/config"
	"github.com/konpyutaika/nifikop/pkg/util"
	"github.com/konpyutaika/nifikop/pkg/util/clientconfig"
	"go.uber.org/zap"
	corev1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/tools/record"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/reconcile"
)

var parameterProviderFinalizer string = fmt.Sprintf("nifiparameterproviders.%s/finalizer", v1alpha1.GroupVersion.Group)

// NifiParameterProviderReconciler reconciles a NifiParameterProvider object
type NifiParameterProviderReconciler struct {
	client.Client
	Log             zap.Logger
	Scheme          *runtime.Scheme
	Recorder        record.EventRecorder
	RequeueInterval int
	RequeueOffset   int
}

//+kubebuilder:rbac:groups=nifi.konpyutaika.com,resources=nifiparameterproviders,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=nifi.konpyutaika.com,resources=nifiparameterproviders/status,verbs=get;update;patch
//+kubebuilder:rbac:groups=nifi.konpyutaika.com,resources=nifiparameterproviders/finalizers,verbs=update

// Reconcile is part of the main kubernetes reconciliation loop which aims to
// move the current state of the cluster closer to the desired state.
// TODO(user): Modify the Reconcile function to compare the state specified by
// the NifiParameterProvider object against the actual cluster state, and then
// perform operations to make the cluster state reflect the state specified by
// the user.
//
// For more details, check Reconcile and its Result here:
// - https://pkg.go.dev/sigs.k8s.io/controller-runtime@v0.12.2/pkg/reconcile
func (r *NifiParameterProviderReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	interval := util.GetRequeueInterval(r.RequeueInterval, r.RequeueOffset)
	var err error

	// Fetch the NifiParameterProvider instance
	instance := &v1alpha1.NifiParameterProvider{}
	if err = r.Client.Get(ctx, req.NamespacedName, instance); err != nil {
		if apierrors.IsNotFound(err) {
			// Request object not found, could have been deleted after reconcile request.
			return Reconciled()
		}
		// Error reading the object - requeue the request.
		return RequeueWithError(r.Log, err.Error(), err)
	}

	// Get the last configuration viewed by the operator.
	o, err := patch.DefaultAnnotator.GetOriginalConfiguration(instance)
	// Create it if not exist.
	if o == nil {
		if err := patch.DefaultAnnotator.SetLastAppliedAnnotation(instance); err != nil {
			return RequeueWithError(r.Log, "could not apply last state to annotation for parameter provider "+instance.Name, err)
		}
		if err := r.Client.Update(ctx, instance); err != nil {
			return RequeueWithError(r.Log, "failed to update NifiParameterProvider "+instance.Name, err)
		}
		o, err = patch.DefaultAnnotator.GetOriginalConfiguration(instance)
	}

	// Check if the cluster reference changed.
	original := &v1alpha1.NifiParameterProvider{}
	current := instance.DeepCopy()
	json.Unmarshal(o, original)
	if !v1alpha1.ClusterRefsEquals([]v1alpha1.ClusterReference{original.Spec.ClusterRef, instance.Spec.ClusterRef}) {
		instance.Spec.ClusterRef = original.Spec.ClusterRef
	}

	// Prepare cluster connection configurations
	var clientConfig *clientconfig.NifiConfig
	var clusterConnect clientconfig.ClusterConnect

	// Get the client config manager associated to the cluster ref.
	clusterRef := instance.Spec.ClusterRef
	clusterRef.Namespace = GetClusterRefNamespace(instance.Namespace, instance.Spec.ClusterRef)
	configManager := config.GetClientConfigManager(r.Client, clusterRef)

	// Generate the connect object
	if clusterConnect, err = configManager.BuildConnect(); err != nil {
		// This shouldn't trigger anymore, but leaving it here as a safetybelt
		if k8sutil.IsMarkedForDeletion(instance.ObjectMeta) {
			r.Log.Error("Cluster is already gone, there is nothing we can do",
				zap.String("clusterName", clusterRef.Name),
				zap.String("parameterProvider", instance.Name))
			if err = r.removeFinalizer(ctx, instance); err != nil {
				return RequeueWithError(r.Log, "failed to remove finalizer for parameter provider "+instance.Name, err)
			}
			return Reconciled()
		}
		// If the referenced cluster no more exist, just skip the deletion requirement in cluster ref change case.
		if !v1alpha1.ClusterRefsEquals([]v1alpha1.ClusterReference{instance.Spec.ClusterRef, current.Spec.ClusterRef}) {
			if err := patch.DefaultAnnotator.SetLastAppliedAnnotation(current); err != nil {
				return RequeueWithError(r.Log, "could not apply last state to annotation for parameter provider "+instance.Name, err)
			}
			if err := r.Client.Update(ctx, current); err != nil {
				return RequeueWithError(r.Log, "failed to update NifiParameterProvider "+instance.Name, err)
			}
			return RequeueAfter(interval)
		}

		msg := fmt.Sprintf("Failed to lookup reference cluster for parameter provider %s : %s in %s",
			instance.Name, instance.Spec.ClusterRef.Name, clusterRef.Namespace)
		r.Recorder.Event(instance, corev1.EventTypeWarning, "ReferenceClusterError", msg)

		// the cluster does not exist - should have been caught pre-flight
		return RequeueWithError(r.Log, msg, err)
	}

	// Generate the client configuration.
	clientConfig, err = configManager.BuildConfig()
	if err != nil {
		r.Recorder.Event(instance, corev1.EventTypeWarning, "ReferenceClusterError",
			fmt.Sprintf("Failed to create HTTP client for the referenced cluster for parameter context %s : %s in %s",
				instance.Name, instance.Spec.ClusterRef.Name, clusterRef.Namespace))
		// the cluster is gone, so just remove the finalizer
		if k8sutil.IsMarkedForDeletion(instance.ObjectMeta) {
			if err = r.removeFinalizer(ctx, instance); err != nil {
				return RequeueWithError(r.Log, fmt.Sprintf("failed to remove finalizer from NifiParameterProvider %s", instance.Name), err)
			}
			return Reconciled()
		}
		// the cluster does not exist - should have been caught pre-flight
		return RequeueWithError(r.Log, "failed to create HTTP client the for referenced cluster", err)
	}

	// Check if marked for deletion and if so run finalizers
	if k8sutil.IsMarkedForDeletion(instance.ObjectMeta) {
		return r.checkFinalizers(ctx, instance, clientConfig)
	}

	// Ensure the cluster is ready to receive actions
	if !clusterConnect.IsReady(r.Log) {
		r.Log.Debug("Cluster is not ready yet, will wait until it is.",
			zap.String("clusterName", clusterRef.Name),
			zap.String("parameterContext", instance.Name))
		r.Recorder.Event(instance, corev1.EventTypeNormal, "ReferenceClusterNotReady",
			fmt.Sprintf("The referenced cluster is not ready yet : %s in %s",
				instance.Spec.ClusterRef.Name, clusterConnect.Id()))

		// the cluster does not exist - should have been caught pre-flight
		return RequeueAfter(interval)
	}

	// Ìn case of the cluster reference changed.
	if !v1alpha1.ClusterRefsEquals([]v1alpha1.ClusterReference{instance.Spec.ClusterRef, current.Spec.ClusterRef}) {
		// Delete the resource on the previous cluster.
		// if err := parametercontext.RemoveParameterContext(instance, parameterSecrets, parameterContextRefs, clientConfig); err != nil {
		// 	r.Recorder.Event(instance, corev1.EventTypeWarning, "RemoveError",
		// 		fmt.Sprintf("Failed to delete NifiParameterContext %s from cluster %s before moving in %s",
		// 			instance.Name, original.Spec.ClusterRef.Name, original.Spec.ClusterRef.Name))
		// 	return RequeueWithError(r.Log, "Failed to delete NifiParameterContext before moving "+instance.Name, err)
		// }
		// // Update the last view configuration to the current one.
		// if err := patch.DefaultAnnotator.SetLastAppliedAnnotation(current); err != nil {
		// 	return RequeueWithError(r.Log, "could not apply last state to annotation for parameter context "+instance.Name, err)
		// }
		// if err := r.Client.Update(ctx, current); err != nil {
		// 	return RequeueWithError(r.Log, "failed to update NifiParameterContext "+instance.Name, err)
		// }
		return RequeueAfter(interval)
	}

	r.Recorder.Event(instance, corev1.EventTypeNormal, "Reconciling",
		fmt.Sprintf("Reconciling parameter context %s", instance.Name))

	// Check if the NiFi parameter context already exist
	exist, err := parameterprovider.ExistParameterProvider(instance, clientConfig)
	if err != nil {
		return RequeueWithError(r.Log, "failure checking for existing parameter context with name "+instance.Name, err)
	}

	if !exist {
		// Create NiFi parameter provider
		r.Recorder.Event(instance, corev1.EventTypeNormal, "Creating",
			fmt.Sprintf("Creating parameter provider %s", instance.Name))

		// Create NiFi parameter provider
		status, err := parameterprovider.CreateParameterProvider(instance, clientConfig)
		if err != nil {
			return RequeueWithError(r.Log, "failure creating parameter provider "+instance.Name, err)
		}

		instance.Status = *status
		if err := r.Client.Status().Update(ctx, instance); err != nil {
			return RequeueWithError(r.Log, "failed to update status for NifiParameterProvider "+instance.Name, err)
		}

		r.Recorder.Event(instance, corev1.EventTypeNormal, "Created",
			fmt.Sprintf("Created parameter provider %s", instance.Name))
	}

	// Sync ParameterProvider resource with NiFi side component
	r.Recorder.Event(instance, corev1.EventTypeNormal, "Synchronizing",
		fmt.Sprintf("Synchronizing parameter provider %s", instance.Name))
	// status, err := parametercontext.SyncParameterContext(instance, parameterSecrets, parameterContextRefs, clientConfig)
	// if status != nil {
	// 	instance.Status = *status
	// 	if err := r.Client.Status().Update(ctx, instance); err != nil {
	// 		return RequeueWithError(r.Log, "failed to update status for NifiParameterContext "+instance.Name, err)
	// 	}
	// }
	// if err != nil {
	// 	switch errors.Cause(err).(type) {
	// 	case errorfactory.NifiParameterContextUpdateRequestRunning:
	// 		return RequeueAfter(interval)
	// 	default:
	// 		r.Recorder.Event(instance, corev1.EventTypeNormal, "SynchronizingFailed",
	// 			fmt.Sprintf("Synchronizing parameter context %s failed", instance.Name))
	// 		return RequeueWithError(r.Log, "failed to sync NifiParameterContext "+instance.Name, err)
	// 	}
	// }

	r.Recorder.Event(instance, corev1.EventTypeNormal, "Synchronized",
		fmt.Sprintf("Synchronized parameter provider %s", instance.Name))

	// Ensure NifiCluster label
	if instance, err = r.ensureClusterLabel(ctx, clusterConnect, instance); err != nil {
		return RequeueWithError(r.Log, "failed to ensure NifiCluster label on parameter provider "+current.Name, err)
	}

	// Ensure finalizer for cleanup on deletion
	if !util.StringSliceContains(instance.GetFinalizers(), parameterProviderFinalizer) {
		r.Log.Debug("Adding Finalizer for NifiParameterProvider",
			zap.String("parameterProvider", instance.Name))
		instance.SetFinalizers(append(instance.GetFinalizers(), parameterProviderFinalizer))
	}

	// Push any changes
	if instance, err = r.updateAndFetchLatest(ctx, instance); err != nil {
		return RequeueWithError(r.Log, "failed to update NifiParameterProvider "+current.Name, err)
	}

	r.Recorder.Event(instance, corev1.EventTypeNormal, "Reconciled",
		fmt.Sprintf("Reconciling parameter provider %s", instance.Name))

	r.Log.Debug("Ensured Parameter Provider",
		zap.String("parameterProvider", instance.Name))

	return RequeueAfter(interval)
}

// SetupWithManager sets up the controller with the Manager.
func (r *NifiParameterProviderReconciler) SetupWithManager(mgr ctrl.Manager) error {
	logCtr, err := GetLogConstructor(mgr, &v1alpha1.NifiParameterProvider{})
	if err != nil {
		return err
	}
	return ctrl.NewControllerManagedBy(mgr).
		For(&v1alpha1.NifiParameterProvider{}).
		WithLogConstructor(logCtr).
		Complete(r)
}

func (r *NifiParameterProviderReconciler) ensureClusterLabel(ctx context.Context, cluster clientconfig.ClusterConnect,
	parameterProvider *v1alpha1.NifiParameterProvider) (*v1alpha1.NifiParameterProvider, error) {

	labels := ApplyClusterReferenceLabel(cluster, parameterProvider.GetLabels())
	if !reflect.DeepEqual(labels, parameterProvider.GetLabels()) {
		parameterProvider.SetLabels(labels)
		return r.updateAndFetchLatest(ctx, parameterProvider)
	}
	return parameterProvider, nil
}

func (r *NifiParameterProviderReconciler) updateAndFetchLatest(ctx context.Context,
	parameterProvider *v1alpha1.NifiParameterProvider) (*v1alpha1.NifiParameterProvider, error) {

	typeMeta := parameterProvider.TypeMeta
	err := r.Client.Update(ctx, parameterProvider)
	if err != nil {
		return nil, err
	}
	parameterProvider.TypeMeta = typeMeta
	return parameterProvider, nil
}

func (r *NifiParameterProviderReconciler) checkFinalizers(
	ctx context.Context,
	parameterProvider *v1alpha1.NifiParameterProvider,
	config *clientconfig.NifiConfig) (reconcile.Result, error) {
	r.Log.Info("NiFi parameter provider is marked for deletion. Removing finalizers.",
		zap.String("parameterProvider", parameterProvider.Name))
	var err error
	if util.StringSliceContains(parameterProvider.GetFinalizers(), parameterProviderFinalizer) {
		if err = r.finalizeNifiParameterContext(parameterProvider, config); err != nil {
			return RequeueWithError(r.Log, "failed to finalize parameter provider "+parameterProvider.Name, err)
		}
		if err = r.removeFinalizer(ctx, parameterProvider); err != nil {
			return RequeueWithError(r.Log, "failed to remove finalizer from parameter provider "+parameterProvider.Name, err)
		}
	}
	return Reconciled()
}

func (r *NifiParameterProviderReconciler) removeFinalizer(ctx context.Context, parameterProvider *v1alpha1.NifiParameterProvider) error {
	r.Log.Debug("Removing finalizer for NifiParameterProvider",
		zap.String("paramaterContext", parameterProvider.Name))
	parameterProvider.SetFinalizers(util.StringSliceRemove(parameterProvider.GetFinalizers(), parameterContextFinalizer))
	_, err := r.updateAndFetchLatest(ctx, parameterProvider)
	return err
}

func (r *NifiParameterProviderReconciler) finalizeNifiParameterContext(
	parameterProvider *v1alpha1.NifiParameterProvider,
	config *clientconfig.NifiConfig) error {

	// if err := parametercontext.RemoveParameterContext(parameterProvider, config); err != nil {
	// 	return err
	// }
	r.Log.Info("Deleted NifiParameterProvider",
		zap.String("parameterProvider", parameterProvider.Name))

	return nil
}
