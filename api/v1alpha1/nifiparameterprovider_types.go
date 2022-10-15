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

package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// EDIT THIS FILE!  THIS IS SCAFFOLDING FOR YOU TO OWN!
// NOTE: json tags are required.  Any new fields you add must have json tags for the fields to be serialized.

// NifiParameterProviderSpec defines the desired state of NifiParameterProvider
type NifiParameterProviderSpec struct {
	// the Type of the Parameter Provider.
	Type ParameterProviderType `json:"type"`
	// contains the reference to the NifiCluster with the one the parameter context is linked.
	ClusterRef ClusterReference `json:"clusterRef,omitempty"`
	// configuration for a File Parameter Provider
	FileProviderConfig *FileProviderConfiguration `json:"fileProviderConfig,omitempty"`
}

type FileProviderConfiguration struct {
	// A comma-separated list of directory absolute paths that will map to named parameter groups. Each directory that contains files will map to a parameter group, named after the innermost directory in the path. Files inside the directory will map to parameter names, whose values are the content of each respective file.
	GroupDirectories string `json:"groupDirectories"`
	// 	The maximum byte size of a parameter value. Since parameter values are pulled from the contents of files, this is a safeguard that can prevent memory issues if large files are included.
	// +kubebuilder:default="256 B"
	ValueByteLimit string `json:"valueByteLimit,omitempty"`
	// Indicates how parameter values are encoded inside Parameter files.
	// +kubebuilder:validation:Enum={"plaintext","base64"}
	// +kubebuilder:default="base64"
	ValueEncoding string `json:"valueEncoding,omitempty"`
}

// NifiParameterProviderStatus defines the observed state of NifiParameterProvider
type NifiParameterProviderStatus struct {
	// the nifi parameter provider id.
	Id string `json:"id"`
}

//+kubebuilder:object:root=true
//+kubebuilder:subresource:status

// NifiParameterProvider is the Schema for the nifiparameterproviders API
type NifiParameterProvider struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	Spec   NifiParameterProviderSpec   `json:"spec,omitempty"`
	Status NifiParameterProviderStatus `json:"status,omitempty"`
}

//+kubebuilder:object:root=true

// NifiParameterProviderList contains a list of NifiParameterProvider
type NifiParameterProviderList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []NifiParameterProvider `json:"items"`
}

func init() {
	SchemeBuilder.Register(&NifiParameterProvider{}, &NifiParameterProviderList{})
}

func (d *NifiParameterProviderSpec) GetNifiType() ParameterProviderNifiType {
	switch d.Type {
	case AwsSecretsManagerParameterProviderType:
		return AwsSecretsManagerParameterProviderNifiType
	case DatabaseParameterProviderType:
		return DatabaseParameterProviderNifiType
	case EnvironmentVariableParameterProviderType:
		return EnvironmentVariableParameterProviderNifiType
	case FileParameterProviderType:
		return FileParameterProviderNifiType
	case GcpSecretManagerParameterProviderType:
		return GcpSecretManagerParameterProviderNifiType
	case HashiCorpVaultParameterProviderType:
		return HashiCorpVaultParameterProviderNifiType
	default:
		return UnknownProviderNifiType
	}
}

func (d *NifiParameterProviderSpec) IsTypeValid() bool {
	return d.GetNifiType() != UnknownProviderNifiType
}
