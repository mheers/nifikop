(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{121:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return i})),a.d(e,"default",(function(){return j}));var n=a(2),b=a(6),r=(a(0),a(422)),l={id:"5_nifi_dataflow",title:"NiFi Dataflow",sidebar_label:"NiFi Dataflow"},c={unversionedId:"5_references/5_nifi_dataflow",id:"version-v0.6.0/5_references/5_nifi_dataflow",isDocsHomePage:!1,title:"NiFi Dataflow",description:"NifiDataflow is the Schema for the NiFi dataflow API.",source:"@site/versioned_docs/version-v0.6.0/5_references/5_nifi_dataflow.md",slug:"/5_references/5_nifi_dataflow",permalink:"/nifikop/docs/v0.6.0/5_references/5_nifi_dataflow",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.0/5_references/5_nifi_dataflow.md",version:"v0.6.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1617027075,sidebar_label:"NiFi Dataflow",sidebar:"version-v0.6.0/docs",previous:{title:"NiFi Parameter Context",permalink:"/nifikop/docs/v0.6.0/5_references/4_nifi_parameter_context"},next:{title:"NiFi UserGroup",permalink:"/nifikop/docs/v0.6.0/5_references/6_nifi_usergroup"}},i=[{value:"NifiDataflow",id:"nifidataflow",children:[]},{value:"NifiDataflowsSpec",id:"nifidataflowsspec",children:[]},{value:"NifiDataflowStatus",id:"nifidataflowstatus",children:[]},{value:"DataflowUpdateStrategy",id:"dataflowupdatestrategy",children:[]},{value:"DataflowState",id:"dataflowstate",children:[]},{value:"UpdateRequest",id:"updaterequest",children:[]},{value:"DropRequest",id:"droprequest",children:[]},{value:"DataflowUpdateRequestType",id:"dataflowupdaterequesttype",children:[]}],O={rightToc:i};function j(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"NifiDataflow")," is the Schema for the NiFi dataflow API."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiDataflow\nmetadata:\n  name: dataflow-lifecycle\nspec:\n  parentProcessGroupID: "16cfd2ec-0174-1000-0000-00004b9b35cc"\n  bucketId: "01ced6cc-0378-4893-9403-f6c70d080d4f"\n  flowId: "9b2fb465-fb45-49e7-94fe-45b16b642ac9"\n  flowVersion: 2\n  runOnce: false\n  skipInvalidControllerService: true\n  skipInvalidComponent: true\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  registryClientRef:\n    name: squidflow\n    namespace: nifikop\n  parameterContextRef:\n    name: dataflow-lifecycle\n    namespace: nifikop\n  updateStrategy: drain\n')),Object(r.b)("h2",{id:"nifidataflow"},"NifiDataflow"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"metadata"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"}),"ObjectMetadata")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"is metadata that all persisted resources must have, which includes all objects dataflows must create."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spec"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#NifiDataflowspec"}),"NifiDataflowSpec")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the desired state of NifiDataflow."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#NifiDataflowstatus"}),"NifiDataflowStatus")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the observed state of NifiDataflow."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(r.b)("h2",{id:"nifidataflowsspec"},"NifiDataflowsSpec"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parentProcessGroupID"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the UUID of the parent process group where you want to deploy your dataflow, if not set deploy at root level."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucketId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the UUID of the Bucket containing the flow."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flowId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the UUID of the flow to run."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flowVersion"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*int32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the version of the flow to run, if not present or equals to -1, then the latest version of flow will be used."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"runOnce"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if the flow will be ran once or continuously checked."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"skipInvalidControllerService"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether the flow is considered as ran if some controller services are still invalid or not."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"skipInvalidComponent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether the flow is considered as ran if some components are still invalid or not."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"updateStrategy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#dataflowupdatestrategy"}),"DataflowUpdateStrategy")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the way the operator will deal with data when a dataflow will be updated : Drop or Drain"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"drain")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clusterRef"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/v0.6.0/5_references/2_nifi_user#clusterreference"}),"ClusterReference")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the reference to the NifiCluster with the one the user is linked."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parameterContextRef"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/v0.6.0/5_references/4_nifi_parameter_context#parametercontextreference"}),"ParameterContextReference")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the reference to the ParameterContext with the one the dataflow is linked."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clusterRef"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/v0.6.0/5_references/3_nifi_registry_client#registryclientreference"}),"RegistryClientReference")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the reference to the NifiRegistry with the one the dataflow is linked."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h2",{id:"nifidataflowstatus"},"NifiDataflowStatus"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"processGroupID"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"process Group ID."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#dataflowstate"}),"DataflowState"),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the dataflow current state."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"latestUpdateRequest"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#updaterequest"}),"UpdateRequest")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the latest update request sent."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"latestDropRequest"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#droprequest"}),"DropRequest")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the latest queue drop request sent."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h2",{id:"dataflowupdatestrategy"},"DataflowUpdateStrategy"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DrainStrategy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"drain"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"leads to shutting down only input components (Input processors, remote input process group) and dropping all flowfiles from the flow.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DropStrategy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"drop"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"leads to shutting down all components and dropping all flowfiles from the flow.")))),Object(r.b)("h2",{id:"dataflowstate"},"DataflowState"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataflowStateCreated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Created"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the status of a NifiDataflow as created.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataflowStateStarting"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starting"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the status of a NifiDataflow as starting.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataflowStateRan"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ran"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the status of a NifiDataflow as running.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataflowStateOutOfSync"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OutOfSync"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ddescribes the status of a NifiDataflow as out of sync.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataflowStateInSync"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"InSync"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the status of a NifiDataflow as in sync.")))),Object(r.b)("h2",{id:"updaterequest"},"UpdateRequest"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#dataflowupdaterequesttype"}),"DataflowUpdateRequestType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the type of versioned flow update request."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the id of the update request."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uri"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the uri for this request."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lastUpdated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the last time this request was updated."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"complete"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether or not this request has completed."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"failureReason"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"an explication of why the request failed, or null if this request has not failed."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"percentCompleted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the percentage complete of the request, between 0 and 100."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the state of the request."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h2",{id:"droprequest"},"DropRequest"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"connectionId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the connection id."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the id for this drop request."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uri"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the uri for this request."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lastUpdated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the last time this request was updated."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"finished"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether the request has finished."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"failureReason"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"an explication of why the request failed, or null if this request has not failed."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"percentCompleted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the percentage complete of the request, between 0 and 100."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currentCount"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the number of flow files currently queued."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currentSize"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the size of flow files currently queued in bytes."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"current"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the count and size of flow files currently queued."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"originalCount"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the number of flow files to be dropped as a result of this request."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"originalSize"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the size of flow files to be dropped as a result of this request in bytes."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"original"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the count and size of flow files to be dropped as a result of this request."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"droppedCount"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the number of flow files that have been dropped thus far."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"droppedSize"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the size of flow files currently queued in bytes."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dropped"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the count and size of flow files that have been dropped thus far."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the state of the request."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h2",{id:"dataflowupdaterequesttype"},"DataflowUpdateRequestType"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RevertRequestType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Revert"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines a revert changes request.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UpdateRequestType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Update"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines an update version request.")))))}j.isMDXComponent=!0},422:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return o}));var n=a(0),b=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}var O=b.a.createContext({}),j=function(t){var e=b.a.useContext(O),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=j(t.components);return b.a.createElement(O.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},u=b.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,O=i(t,["components","mdxType","originalType","parentName"]),d=j(a),u=n,o=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return a?b.a.createElement(o,c(c({ref:e},O),{},{components:a})):b.a.createElement(o,c({ref:e},O))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,l=new Array(r);l[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var O=2;O<r;O++)l[O]=a[O];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);