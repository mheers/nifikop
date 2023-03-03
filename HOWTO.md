# Add new fields to the CRD spec

- add field to:
    - api/v1/nificluster_types.go
    - api/v1alpha1/nificluster_types.go
    - api/v1alpha1/nificluster_conversion.go
- run `make generate` to update the generated code
- run `make manifests` to update the CRD manifests
- run `make docker-build` to build the operator image
- `docker tag ghcr.io/konpyutaika/docker-images/nifikop:1.0.0-feature_auto-import-cacerts mheers/nifikop:1.0.0-feature_auto-import-cacerts`
- `docker push mheers/nifikop:1.0.0-feature_auto-import-cacerts`
- run `make helm-package` to build the helm chart
- on docker hub create a PAT (personal access token) with `write:packages` scope
- run `helm registry login registry-1.docker.io -u mheers` to login to docker hub
- run `helm push nifikop-1.0.0.tgz oci://registry-1.docker.io/mheers` to push the helm chart to docker hub
