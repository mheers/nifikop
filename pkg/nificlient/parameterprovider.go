package nificlient

import (
	nigoapi "github.com/konpyutaika/nigoapi/pkg/nifi"
	"go.uber.org/zap"
)

func (n *nifiClient) GetParameterProviders() ([]nigoapi.ParameterProviderEntity, error) {
	// Get nigoapi client, favoring the one associated to the coordinator node.
	client, context := n.privilegeCoordinatorClient()
	if client == nil {
		n.log.Error("Error during creating node client", zap.Error(ErrNoNodeClientsAvailable))
		return nil, ErrNoNodeClientsAvailable
	}

	// Request on Nifi Rest API to get the parameter providers informations
	ppEntity, rsp, body, err := client.FlowApi.GetParameterProviders(context)
	if err := errorGetOperation(rsp, body, err, n.log); err != nil {
		return nil, err
	}

	return ppEntity.ParameterProviders, nil
}

func (n *nifiClient) GetParameterProvider(id string) (*nigoapi.ParameterProviderEntity, error) {
	// Get nigoapi client, favoring the one associated to the coordinator node.
	client, context := n.privilegeCoordinatorClient()
	if client == nil {
		n.log.Error("Error during creating node client", zap.Error(ErrNoNodeClientsAvailable))
		return nil, ErrNoNodeClientsAvailable
	}

	// Request on Nifi Rest API to get the parameter context informations
	ppEntity, rsp, body, err := client.ParameterProvidersApi.GetParameterProvider(context, id)
	if err := errorGetOperation(rsp, body, err, n.log); err != nil {
		return nil, err
	}

	return &ppEntity, nil
}

func (n *nifiClient) CreateParameterProvider(entity nigoapi.ParameterProviderEntity) (*nigoapi.ParameterProviderEntity, error) {
	// Get nigoapi client, favoring the one associated to the coordinator node.
	client, context := n.privilegeCoordinatorClient()
	if client == nil {
		n.log.Error("Error during creating node client", zap.Error(ErrNoNodeClientsAvailable))
		return nil, ErrNoNodeClientsAvailable
	}

	// Request on Nifi Rest API to create the parameter context
	pcEntity, rsp, body, err := client.ControllerApi.CreateParameterProvider(context, entity)
	if err := errorCreateOperation(rsp, body, err, n.log); err != nil {
		return nil, err
	}

	return &pcEntity, nil
}
