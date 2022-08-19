(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{563:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(6),a=(r(0),r(599)),o=["components"],s={id:"2_k3d",title:"K3D",sidebar_label:"K3D"},l={unversionedId:"2_setup/2_platform_setup/2_k3d",id:"version-v0.11.0/2_setup/2_platform_setup/2_k3d",isDocsHomePage:!1,title:"K3D",description:"Follow these instructions to prepare k3d for NiFiKop installation with sufficient resources to run NiFiKop and some basic applications.",source:"@site/versioned_docs/version-v0.11.0/2_setup/2_platform_setup/2_k3d.md",slug:"/2_setup/2_platform_setup/2_k3d",permalink:"/nifikop/docs/v0.11.0/2_setup/2_platform_setup/2_k3d",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/2_setup/2_platform_setup/2_k3d.md",version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655925825,sidebar_label:"K3D",sidebar:"version-v0.11.0/docs",previous:{title:"Google Kubernetes Engine",permalink:"/nifikop/docs/v0.11.0/2_setup/2_platform_setup/1_gke"},next:{title:"Customizable install with Helm",permalink:"/nifikop/docs/v0.11.0/2_setup/3_install/1_customizable_install_with_helm"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation steps",id:"installation-steps",children:[]}],c={rightToc:p};function u(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Follow these instructions to prepare k3d for NiFiKop installation with sufficient resources to run NiFiKop and some basic applications."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Administrative privileges are required to run k3d.")),Object(a.b)("h2",{id:"installation-steps"},"Installation steps"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Install the latest version of ",Object(a.b)("a",{parentName:"p",href:"https://k3d.io/v5.3.0/#installation"},"k3d"),", version 5.3.0 or later.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create your Kubernetes cluster. This example uses Kubernetes version 1.21.10. You can change the version to any Kubernetes version supported by NiFiKop by altering the --kubernetes-version value:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-sh"},"k3d cluster create --image rancher/k3s:v1.21.10-k3s1 --wait\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Expose your NiFi cluster:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-sh"},'k3d cluster edit k3s-default --port-add "<nifi_cluster_port>:<nifi_cluster_port>@loadbalancer"\n')))))}u.isMDXComponent=!0},599:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return r?i.a.createElement(f,s(s({ref:t},p),{},{components:r})):i.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);