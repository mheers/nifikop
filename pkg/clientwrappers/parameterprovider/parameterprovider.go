package parameterprovider

import (
	"github.com/konpyutaika/nifikop/api/v1alpha1"
	"github.com/konpyutaika/nifikop/pkg/clientwrappers"
	"github.com/konpyutaika/nifikop/pkg/common"
	"github.com/konpyutaika/nifikop/pkg/nificlient"
	"github.com/konpyutaika/nifikop/pkg/util/clientconfig"
	nigoapi "github.com/konpyutaika/nigoapi/pkg/nifi"
)

var log = common.CustomLogger().Named("parameterprovider-method")

func ExistParameterProvider(parameterProvider *v1alpha1.NifiParameterProvider, config *clientconfig.NifiConfig) (bool, error) {

	if parameterProvider.Status.Id == "" {
		return false, nil
	}

	nClient, err := common.NewClusterConnection(log, config)
	if err != nil {
		return false, err
	}

	entity, err := nClient.GetParameterProvider(parameterProvider.Status.Id)
	if err := clientwrappers.ErrorGetOperation(log, err, "Get parameter-provider"); err != nil {
		if err == nificlient.ErrNifiClusterReturned404 {
			return false, nil
		}
		return false, err
	}

	return entity != nil, nil
}

func CreateParameterProvider(
	parameterProvider *v1alpha1.NifiParameterProvider,
	config *clientconfig.NifiConfig) (*v1alpha1.NifiParameterProviderStatus, error) {

	nClient, err := common.NewClusterConnection(log, config)
	if err != nil {
		return nil, err
	}

	scratchEntity := nigoapi.ParameterProviderEntity{}
	updateParameterProviderEntity(parameterProvider, &scratchEntity)

	entity, err := nClient.CreateParameterProvider(scratchEntity)
	if err := clientwrappers.ErrorCreateOperation(log, err, "Create parameter-provider"); err != nil {
		return nil, err
	}

	parameterProvider.Status.Id = entity.Id
	// parameterProvider.Status.Version = *entity.Revision.Version

	return &parameterProvider.Status, nil
}

func updateParameterProviderEntity(parameterProvider *v1alpha1.NifiParameterProvider, entity *nigoapi.ParameterProviderEntity) {

	var defaultVersion int64 = 0

	if entity == nil {
		entity = &nigoapi.ParameterProviderEntity{}
	}

	if entity.Component == nil {
		entity.Revision = &nigoapi.RevisionDto{
			Version: &defaultVersion,
		}
	}

	if entity.Component == nil {
		entity.Component = &nigoapi.ParameterProviderDto{}
	}

	entity.Component.Name = parameterProvider.Name
	entity.Component.Type_ = string(parameterProvider.Spec.GetNifiType())

	if parameterProvider.Spec.GetNifiType() == v1alpha1.FileParameterProviderNifiType {
		entity.Component.Properties = map[string]string{
			"parameter-group-directories": parameterProvider.Spec.FileProviderConfig.GroupDirectories,
			"parameter-value-byte-limit":  parameterProvider.Spec.FileProviderConfig.ValueByteLimit,
			"parameter-value-encoding":    parameterProvider.Spec.FileProviderConfig.ValueEncoding,
		}
	}
}

func SyncParameterProvider(
	parameterProvider *v1alpha1.NifiParameterProvider,
	config *clientconfig.NifiConfig) (*v1alpha1.NifiParameterProviderStatus, error) {

	nClient, err := common.NewClusterConnection(log, config)
	if err != nil {
		return nil, err
	}

	entity, err := nClient.GetParameterProvider(parameterProvider.Status.Id)
	if err := clientwrappers.ErrorGetOperation(log, err, "Get parameter-provider"); err != nil {
		return nil, err
	}

	if !parameterProviderIsSync(parameterProvider, entity) {
		updateParameterProviderEntity(parameterProvider, entity)
		entity, err = nClient.UpdateParameterProvider(*entity)
		if err := clientwrappers.ErrorUpdateOperation(log, err, "Update parameter-provider"); err != nil {
			return nil, err
		}
	}

	status := parameterProvider.Status
	// status.Version = entity.Revision.Version
	status.Id = entity.Id

	return &status, nil
}

func parameterProviderIsSync(
	parameterProvider *v1alpha1.NifiParameterProvider,
	entity *nigoapi.ParameterProviderEntity) bool {

	e := nigoapi.ParameterProviderEntity{}
	updateParameterProviderEntity(parameterProvider, &e)

	if e.Component.Type_ != entity.Component.Type_ {
		return false
	}

	if (parameterProvider.Spec.GetNifiType() == v1alpha1.FileParameterProviderNifiType) &&
		(e.Component.Properties["parameter-group-directories"] != entity.Component.Properties["parameter-group-directories"] ||
			e.Component.Properties["parameter-value-byte-limit"] != entity.Component.Properties["parameter-value-byte-limit"] ||
			e.Component.Properties["parameter-value-encoding"] != entity.Component.Properties["parameter-value-encoding"]) {
		return false
	}

	return e.Component.Name == entity.Component.Name
}
