package nificlient

import (
	"fmt"
	"net/http"
	"testing"

	"github.com/jarcoal/httpmock"
	nigoapi "github.com/konpyutaika/nigoapi/pkg/nifi"
	"github.com/stretchr/testify/assert"
)

func TestGetFlowRegistryClient(t *testing.T) {
	assert := assert.New(t)

	id := "16cfd2ec-0174-1000-0000-00004b9b35cc"

	entity, err := testGetFlowRegistryClient(t, id, 200)
	assert.Nil(err)
	assert.NotNil(entity)

	entity, err = testGetFlowRegistryClient(t, id, 404)
	assert.IsType(ErrNifiClusterReturned404, err)
	assert.Nil(entity)

	entity, err = testGetFlowRegistryClient(t, id, 500)
	assert.IsType(ErrNifiClusterNotReturned200, err)
	assert.Nil(entity)
}

func testGetFlowRegistryClient(t *testing.T, id string, status int) (*nigoapi.FlowRegistryClientEntity, error) {

	cluster := testClusterMock(t)

	client, err := testClientFromCluster(cluster, false)
	if err != nil {
		return nil, err
	}

	httpmock.Activate()
	defer httpmock.DeactivateAndReset()

	url := nifiAddress(cluster, fmt.Sprintf("/controller/registry-clients/%s", id))
	httpmock.RegisterResponder(http.MethodGet, url,
		func(req *http.Request) (*http.Response, error) {
			return httpmock.NewJsonResponse(
				status,
				MockFlowRegistryClient(id, "registry-mock", "description", "http://uri.com:8888"))
		})

	return client.GetFlowRegistryClient(id)
}

func TestCreateFlowRegistryClient(t *testing.T) {
	assert := assert.New(t)

	mockEntity := MockFlowRegistryClient("16cfd2ec-0174-1000-0000-00004b9b35cc", "mock", "description", "http://uri:8888")

	entity, err := testCreateFlowRegistryClient(t, &mockEntity, 201)
	assert.Nil(err)
	assert.NotNil(entity)

	entity, err = testCreateFlowRegistryClient(t, &mockEntity, 404)
	assert.IsType(ErrNifiClusterReturned404, err)
	assert.Nil(entity)

	entity, err = testCreateFlowRegistryClient(t, &mockEntity, 500)
	assert.IsType(ErrNifiClusterNotReturned200, err)
	assert.Nil(entity)
}

func testCreateFlowRegistryClient(t *testing.T, entity *nigoapi.FlowRegistryClientEntity, status int) (*nigoapi.FlowRegistryClientEntity, error) {

	cluster := testClusterMock(t)

	client, err := testClientFromCluster(cluster, false)
	if err != nil {
		return nil, err
	}

	httpmock.Activate()
	defer httpmock.DeactivateAndReset()

	url := nifiAddress(cluster, fmt.Sprintf("/controller/registry-clients"))
	httpmock.RegisterResponder(http.MethodPost, url,
		func(req *http.Request) (*http.Response, error) {
			return httpmock.NewJsonResponse(
				status,
				entity)
		})

	return client.CreateFlowRegistryClient(*entity)
}

func TestUpdateFlowRegistryClient(t *testing.T) {
	assert := assert.New(t)

	mockEntity := MockFlowRegistryClient("16cfd2ec-0174-1000-0000-00004b9b35cc", "mock", "description", "http://uri:8888")

	entity, err := testUpdateFlowRegistryClient(t, &mockEntity, 200)
	assert.Nil(err)
	assert.NotNil(entity)

	entity, err = testUpdateFlowRegistryClient(t, &mockEntity, 404)
	assert.IsType(ErrNifiClusterReturned404, err)
	assert.Nil(entity)

	entity, err = testUpdateFlowRegistryClient(t, &mockEntity, 500)
	assert.IsType(ErrNifiClusterNotReturned200, err)
	assert.Nil(entity)
}

func testUpdateFlowRegistryClient(t *testing.T, entity *nigoapi.FlowRegistryClientEntity, status int) (*nigoapi.FlowRegistryClientEntity, error) {

	cluster := testClusterMock(t)

	client, err := testClientFromCluster(cluster, false)
	if err != nil {
		return nil, err
	}

	httpmock.Activate()
	defer httpmock.DeactivateAndReset()

	url := nifiAddress(cluster, fmt.Sprintf("/controller/registry-clients/%s", entity.Id))
	httpmock.RegisterResponder(http.MethodPut, url,
		func(req *http.Request) (*http.Response, error) {
			return httpmock.NewJsonResponse(
				status,
				entity)
		})

	return client.UpdateFlowRegistryClient(*entity)
}

func TestRemoveFlowRegistryClient(t *testing.T) {
	assert := assert.New(t)

	mockEntity := MockFlowRegistryClient("16cfd2ec-0174-1000-0000-00004b9b35cc", "mock", "description", "http://uri:8888")

	err := testRemoveFlowRegistryClient(t, &mockEntity, 200)
	assert.Nil(err)

	err = testRemoveFlowRegistryClient(t, &mockEntity, 404)
	assert.Nil(err)

	err = testRemoveFlowRegistryClient(t, &mockEntity, 500)
	assert.IsType(ErrNifiClusterNotReturned200, err)
}

func testRemoveFlowRegistryClient(t *testing.T, entity *nigoapi.FlowRegistryClientEntity, status int) error {

	cluster := testClusterMock(t)

	client, err := testClientFromCluster(cluster, false)
	if err != nil {
		return err
	}

	httpmock.Activate()
	defer httpmock.DeactivateAndReset()

	url := nifiAddress(cluster, fmt.Sprintf("/controller/registry-clients/%s", entity.Id))
	httpmock.RegisterResponder(http.MethodDelete, url,
		func(req *http.Request) (*http.Response, error) {
			return httpmock.NewJsonResponse(
				status,
				entity)
		})

	return client.RemoveFlowRegistryClient(*entity)
}

func MockFlowRegistryClient(id, name, description, uri string) nigoapi.FlowRegistryClientEntity {
	var version int64 = 10
	return nigoapi.FlowRegistryClientEntity{
		Id: id,
		Component: &nigoapi.FlowRegistryClientDto{
			Id:          id,
			Name:        name,
			Description: description,
			Uri:         uri,
		},
		Revision: &nigoapi.RevisionDto{Version: &version},
	}
}
