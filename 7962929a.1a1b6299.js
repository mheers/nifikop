(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(6),i=(n(0),n(599)),l=["components"],b={id:"6_nifi_usergroup",title:"NiFi UserGroup",sidebar_label:"NiFi UserGroup"},c={unversionedId:"5_references/6_nifi_usergroup",id:"version-v0.12.0/5_references/6_nifi_usergroup",isDocsHomePage:!1,title:"NiFi UserGroup",description:"NifiUserGroup is the Schema for the nifi user groups API.",source:"@site/versioned_docs/version-v0.12.0/5_references/6_nifi_usergroup.md",slug:"/5_references/6_nifi_usergroup",permalink:"/nifikop/docs/5_references/6_nifi_usergroup",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.12.0/5_references/6_nifi_usergroup.md",version:"v0.12.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660940064,sidebar_label:"NiFi UserGroup",sidebar:"version-v0.12.0/docs",previous:{title:"NiFi Dataflow",permalink:"/nifikop/docs/5_references/5_nifi_dataflow"},next:{title:"Contribution organization",permalink:"/nifikop/docs/6_contributing/0_contribution_organization"}},p=[{value:"NifiUser",id:"nifiuser",children:[]},{value:"NifiUserGroupSpec",id:"nifiusergroupspec",children:[]},{value:"NifiUserGroupStatus",id:"nifiusergroupstatus",children:[]},{value:"UserReference",id:"userreference",children:[]}],u={rightToc:p};function o(e){var t=e.components,n=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"NifiUserGroup")," is the Schema for the nifi user groups API."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiUserGroup\nmetadata:\n  name: group-test\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  usersRef:\n    - name: nc-0-node.nc-headless.nifikop.svc.cluster.local\n    - name: nc-controller.nifikop.mgt.cluster.local\n  accessPolicies:\n    - type: global\n      action: read\n      resource: /counters\n")),Object(i.b)("h2",{id:"nifiuser"},"NifiUser"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"metadata"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),Object(i.b)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects usergroups must create."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"spec"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#nifiusergroupspec"},"NifiUserGroupSpec")),Object(i.b)("td",{parentName:"tr",align:null},"defines the desired state of NifiUserGroup."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"status"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#nifiusergroupstatus"},"NifiUserGroupStatus")),Object(i.b)("td",{parentName:"tr",align:null},"defines the observed state of NifiUserGroup."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")))),Object(i.b)("h2",{id:"nifiusergroupspec"},"NifiUserGroupSpec"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"clusterRef"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/nifikop/docs/5_references/2_nifi_user#clusterreference"},"ClusterReference")),Object(i.b)("td",{parentName:"tr",align:null},"contains the reference to the NifiCluster with the one the user is linked."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"usersRef"),Object(i.b)("td",{parentName:"tr",align:null},"["," ","]",Object(i.b)("a",{parentName:"td",href:"#userref"},"UserReference")),Object(i.b)("td",{parentName:"tr",align:null},"contains the list of reference to NifiUsers that are part to the group."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"[]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"accessPolicies"),Object(i.b)("td",{parentName:"tr",align:null},"["," ","]",Object(i.b)("a",{parentName:"td",href:"/nifikop/docs/5_references/2_nifi_user#accesspolicy"},"AccessPolicy")),Object(i.b)("td",{parentName:"tr",align:null},"defines the list of access policies that will be granted to the group."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"[]")))),Object(i.b)("h2",{id:"nifiusergroupstatus"},"NifiUserGroupStatus"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"id"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"the nifi usergroup's node id."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"version"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"the last nifi usergroup's node revision version catched."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"-")))),Object(i.b)("h2",{id:"userreference"},"UserReference"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"name of the NifiUser."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"namespace"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"the NifiUser namespace location."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"-")))))}o.isMDXComponent=!0},599:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(n),d=r,m=o["".concat(l,".").concat(d)]||o[d]||s[d]||i;return n?a.a.createElement(m,b(b({ref:t},p),{},{components:n})):a.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);