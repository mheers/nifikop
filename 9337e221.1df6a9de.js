(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{364:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return o})),a.d(e,"default",(function(){return u}));var n=a(2),r=a(6),l=(a(0),a(599)),b=["components"],i={id:"5_node_state",title:"Node state",sidebar_label:"Node state"},c={unversionedId:"5_references/1_nifi_cluster/5_node_state",id:"version-v0.11.0/5_references/1_nifi_cluster/5_node_state",isDocsHomePage:!1,title:"Node state",description:"Holds information about nifi state",source:"@site/versioned_docs/version-v0.11.0/5_references/1_nifi_cluster/5_node_state.md",slug:"/5_references/1_nifi_cluster/5_node_state",permalink:"/nifikop/docs/v0.11.0/5_references/1_nifi_cluster/5_node_state",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/5_references/1_nifi_cluster/5_node_state.md",version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655925825,sidebar_label:"Node state",sidebar:"version-v0.11.0/docs",previous:{title:"Node",permalink:"/nifikop/docs/v0.11.0/5_references/1_nifi_cluster/4_node"},next:{title:"Listeners Config",permalink:"/nifikop/docs/v0.11.0/5_references/1_nifi_cluster/6_listeners_config"}},o=[{value:"NodeState",id:"nodestate",children:[]},{value:"GracefulActionState",id:"gracefulactionstate",children:[]},{value:"ConfigurationState",id:"configurationstate",children:[]},{value:"InitClusterNode",id:"initclusternode",children:[]},{value:"State",id:"state",children:[{value:"Upscale",id:"upscale",children:[]},{value:"Downscale",id:"downscale",children:[]}]},{value:"ActionStep",id:"actionstep",children:[]}],d={rightToc:o};function u(t){var e=t.components,a=Object(r.a)(t,b);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Holds information about nifi state"),Object(l.b)("h2",{id:"nodestate"},"NodeState"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"gracefulActionState"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#gracefulactionstate"},"GracefulActionState")),Object(l.b)("td",{parentName:"tr",align:null},"holds info about nifi cluster action status."),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"configurationState"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#configurationstate"},"ConfigurationState")),Object(l.b)("td",{parentName:"tr",align:null},"holds info about the config."),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"initClusterNode"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#initclusternode"},"InitClusterNode")),Object(l.b)("td",{parentName:"tr",align:null},"contains if this nodes was part of the initial cluster."),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"gracefulactionstate"},"GracefulActionState"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"errorMessage"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"holds the information what happened with Nifi Cluster."),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},'""')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"actionStep"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#actionstep"},"ActionStep")),Object(l.b)("td",{parentName:"tr",align:null},"holds info about the action step ran."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"taskStarted"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"hold the time when the execution started."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},'""')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"actionState"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#state"},"State")),Object(l.b)("td",{parentName:"tr",align:null},"holds the information about Action state."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")))),Object(l.b)("h2",{id:"configurationstate"},"ConfigurationState"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ConfigInSync"),Object(l.b)("td",{parentName:"tr",align:null},"ConfigInSync"),Object(l.b)("td",{parentName:"tr",align:null},"states that the generated nodeConfig is in sync with the Node")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ConfigOutOfSync"),Object(l.b)("td",{parentName:"tr",align:null},"ConfigOutOfSync"),Object(l.b)("td",{parentName:"tr",align:null},"states that the generated nodeConfig is out of sync with the Node")))),Object(l.b)("h2",{id:"initclusternode"},"InitClusterNode"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"IsInitClusterNode"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"states the node is part of initial cluster setup")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NotInitClusterNode"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null},"states the node is not part of initial cluster setup")))),Object(l.b)("h2",{id:"state"},"State"),Object(l.b)("h3",{id:"upscale"},"Upscale"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GracefulUpscaleRequired"),Object(l.b)("td",{parentName:"tr",align:null},"GracefulUpscaleRequired"),Object(l.b)("td",{parentName:"tr",align:null},"states that a node upscale is required.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GracefulUpscaleRunning"),Object(l.b)("td",{parentName:"tr",align:null},"GracefulUpscaleRunning"),Object(l.b)("td",{parentName:"tr",align:null},"states that the node upscale task is still running.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GracefulUpscaleSucceeded"),Object(l.b)("td",{parentName:"tr",align:null},"GracefulUpscaleSucceeded"),Object(l.b)("td",{parentName:"tr",align:null},"states the node is updated gracefully.")))),Object(l.b)("h3",{id:"downscale"},"Downscale"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GracefulDownscaleRequired"),Object(l.b)("td",{parentName:"tr",align:null},"GracefulDownscaleRequired"),Object(l.b)("td",{parentName:"tr",align:null},"states that a node downscale is required")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GracefulDownscaleRunning"),Object(l.b)("td",{parentName:"tr",align:null},"GracefulDownscaleRunning"),Object(l.b)("td",{parentName:"tr",align:null},"states that the node downscale is still running in")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GracefulUpscaleSucceeded"),Object(l.b)("td",{parentName:"tr",align:null},"GracefulUpscaleSucceeded"),Object(l.b)("td",{parentName:"tr",align:null},"states the node is updated gracefully")))),Object(l.b)("h2",{id:"actionstep"},"ActionStep"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DisconnectNodeAction"),Object(l.b)("td",{parentName:"tr",align:null},"DISCONNECTING"),Object(l.b)("td",{parentName:"tr",align:null},"states that the NiFi node is disconnecting from NiFi Cluster.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DisconnectStatus"),Object(l.b)("td",{parentName:"tr",align:null},"DISCONNECTED"),Object(l.b)("td",{parentName:"tr",align:null},"states that the NiFi node is disconnected from NiFi Cluster.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"OffloadNodeAction"),Object(l.b)("td",{parentName:"tr",align:null},"OFFLOADING"),Object(l.b)("td",{parentName:"tr",align:null},"states that the NiFi node is offloading data to NiFi Cluster.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"OffloadStatus"),Object(l.b)("td",{parentName:"tr",align:null},"OFFLOADED"),Object(l.b)("td",{parentName:"tr",align:null},"states that the NiFi node offloaded data to NiFi Cluster.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RemovePodAction"),Object(l.b)("td",{parentName:"tr",align:null},"POD_REMOVING"),Object(l.b)("td",{parentName:"tr",align:null},"states that the NiFi node pod and object related are removing by operator.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RemovePodStatus"),Object(l.b)("td",{parentName:"tr",align:null},"POD_REMOVED"),Object(l.b)("td",{parentName:"tr",align:null},"states that the NiFi node pod and object related have been removed by operator.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RemoveNodeAction"),Object(l.b)("td",{parentName:"tr",align:null},"REMOVING"),Object(l.b)("td",{parentName:"tr",align:null},"states that the NiFi node is removing from NiFi Cluster.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RemoveStatus"),Object(l.b)("td",{parentName:"tr",align:null},"REMOVED"),Object(l.b)("td",{parentName:"tr",align:null},"states that the NiFi node is removed from NiFi Cluster.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ConnectNodeAction"),Object(l.b)("td",{parentName:"tr",align:null},"CONNECTING"),Object(l.b)("td",{parentName:"tr",align:null},"states that the NiFi node is connecting to the NiFi Cluster.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ConnectStatus"),Object(l.b)("td",{parentName:"tr",align:null},"CONNECTED"),Object(l.b)("td",{parentName:"tr",align:null},"states that the NiFi node is connected to the NiFi Cluster.")))))}u.isMDXComponent=!0},599:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=r.a.createContext({}),d=function(t){var e=r.a.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return r.a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},s=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,b=t.parentName,o=c(t,["components","mdxType","originalType","parentName"]),u=d(a),s=n,O=u["".concat(b,".").concat(s)]||u[s]||p[s]||l;return a?r.a.createElement(O,i(i({ref:e},o),{},{components:a})):r.a.createElement(O,i({ref:e},o))}));function O(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,b=new Array(l);b[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);