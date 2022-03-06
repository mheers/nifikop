(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(422)),c={id:"1_ssl",title:"Securing NiFi with SSL",sidebar_label:"SSL"},s={unversionedId:"3_tasks/2_security/1_ssl",id:"version-v0.6.0/3_tasks/2_security/1_ssl",isDocsHomePage:!1,title:"Securing NiFi with SSL",description:"The NiFi operator makes securing your NiFi cluster with SSL. You may provide your own certificates, or instruct the operator to create them for from your cluster configuration.",source:"@site/versioned_docs/version-v0.6.0/3_tasks/2_security/1_ssl.md",slug:"/3_tasks/2_security/1_ssl",permalink:"/nifikop/docs/v0.6.0/3_tasks/2_security/1_ssl",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.0/3_tasks/2_security/1_ssl.md",version:"v0.6.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1621195971,sidebar_label:"SSL",sidebar:"version-v0.6.0/docs",previous:{title:"Cluster Scaling",permalink:"/nifikop/docs/v0.6.0/3_tasks/1_nifi_cluster/2_cluster_scaling"},next:{title:"OpenId Connect",permalink:"/nifikop/docs/v0.6.0/3_tasks/2_security/2_authentication/1_oidc"}},l=[{value:"Using an existing Issuer",id:"using-an-existing-issuer",children:[{value:"Example : Let&#39;s encrypt",id:"example--lets-encrypt",children:[]}]},{value:"Create SSL credentials",id:"create-ssl-credentials",children:[]}],o={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"NiFi operator")," makes securing your NiFi cluster with SSL. You may provide your own certificates, or instruct the operator to create them for from your cluster configuration."),Object(i.b)("p",null,"Below this is an example configuration required to secure your cluster with SSL : "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiCluster\n...\nspec:\n  ...\n...\nspec:\n  ...\n  managedAdminUsers:\n    - identity : "alexandre.guitton@orange.com"\n      name: "aguitton"\n  ...\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - nifistandard2.trycatchlearn.fr:8443\n        ...\n  ...\n  listenersConfig:\n    internalListeners:\n      - type: "https"\n        name: "https"\n        containerPort: 8443\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n    sslSecrets:\n      tlsSecretName: "test-nifikop"\n      create: true\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"managedAdminUsers")," : list of users account which will be configured as admin into NiFi cluster, please check ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../4_nifi_user_group#managed-groups-for-simple-setup"}))," for more information."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"readOnlyConfig.nifiProperties.webProxyHosts")," : A list of allowed HTTP Host header values to consider when NiFi is running securely and will be receiving requests to a different host","[:port]"," than it is bound to. ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties"}),"web-properties"))),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"listenersConfig.sslSecrets.create")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", the operator will look for the secret at ",Object(i.b)("inlineCode",{parentName:"p"},"listenersConfig.sslSecrets.tlsSecretName")," and expect these values :"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"key"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"caCert"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The CA certificate")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"caKey"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The CA private key")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clientCert"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A client certificate (this will be used by operator for NiFI operations)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clientKey"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The private key for clientCert")))),Object(i.b)("h2",{id:"using-an-existing-issuer"},"Using an existing Issuer"),Object(i.b)("p",null,"As described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/nifikop/docs/v0.6.0/5_references/1_nifi_cluster/6_listeners_config#sslsecrets"}),"Reference section"),", instead of using a self-signed certificate as CA, you can use an existing one.\nIn order to do so, you only have to refer it into your ",Object(i.b)("inlineCode",{parentName:"p"},"Spec.ListenerConfig.SslSecrets.IssuerRef")," field. "),Object(i.b)("h3",{id:"example--lets-encrypt"},"Example : Let's encrypt"),Object(i.b)("p",null,"Let's say you have an existing DNS server, with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/external-dns"}),"external dns")," deployed into your cluster's namespace.\nYou can easily use Let's encrypt as authority for your certificate. "),Object(i.b)("p",null,"To do this, you have to : "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create an issuer : ")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: cert-manager.io/v1alpha2\nkind: Issuer\nmetadata:\n  name: letsencrypt-staging\nspec:\n  acme:\n    # You must replace this email address with your own.\n    # Let\'s Encrypt will use this to contact you about expiring\n    # certificates, and issues related to your account.\n    email: <your email address>\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      # Secret resource used to store the account\'s private key.\n      name: example-issuer-account-key\n    # Add a single challenge solver, HTTP01 using nginx\n    solvers:\n      - http01:\n          ingress:\n            ingressTemplate:\n              metadata:\n                annotations:\n                  "external-dns.alpha.kubernetes.io/ttl": "5"\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Setup External dns and correctly create your issuer into your cluster configuration : ")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiCluster\n...\nspec:\n  ...\n  clusterSecure: true\n  siteToSiteSecure: true\n  ...\n  listenersConfig:\n    clusterDomain: <DNS zone name>\n    useExternalDNS: true\n    ...\n    sslSecrets:\n      tlsSecretName: "test-nifikop"\n      create: true\n      issuerRef:\n        name: letsencrypt-staging\n        kind: Issuer\n')),Object(i.b)("h2",{id:"create-ssl-credentials"},"Create SSL credentials"),Object(i.b)("p",null,"You may use ",Object(i.b)("inlineCode",{parentName:"p"},"NifiUser")," resource to create new certificates for your applications, allowing them to query your Nifi cluster."),Object(i.b)("p",null,"To create a new client you will need to generate new certificates sign by the CA. The operator can automate this for you using the ",Object(i.b)("inlineCode",{parentName:"p"},"NifiUser")," CRD : "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"cat << EOF | kubectl apply -n nifi -f -\napiVersion:  nifi.orange.com/v1alpha1\nkind: NifiUser\nmetadata:\n  name: example-client\n  namespace: nifi\nspec:\n  clusterRef:\n    name: nifi\n  secretName: example-client-secret\nEOF\n")),Object(i.b)("p",null,"This will create a user and store its credentials in the secret ",Object(i.b)("inlineCode",{parentName:"p"},"example-client-secret"),". The secret contains these fields : "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"key"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ca.crt"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The CA certificate")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tls.crt"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The user certificate")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tls.key"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The user private key")))),Object(i.b)("p",null,"You can then mount these secret to your pod. Alternatively, you can write them to your local machine by running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl get secret example-client-secret -o jsonpath=\"{['data']['ca\\.crt']}\" | base64 -d > ca.crt\nkubectl get secret example-client-secret -o jsonpath=\"{['data']['tls\\.crt']}\" | base64 -d > tls.crt\nkubectl get secret example-client-secret -o jsonpath=\"{['data']['tls\\.key']}\" | base64 -d > tls.key\n")),Object(i.b)("p",null,"The operator can also include a Java keystore format (JKS) with your user secret if you'd like. Add ",Object(i.b)("inlineCode",{parentName:"p"},"includeJKS"),": ",Object(i.b)("inlineCode",{parentName:"p"},"true")," to the ",Object(i.b)("inlineCode",{parentName:"p"},"spec")," like shown above, and then the user-secret will gain these additional fields :"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"key"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tls.jks"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The java keystore containing both the user keys and the CA (use this for your keystore AND truststore)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pass.txt"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The password to decrypt the JKS (this will be randomly generated)")))))}b.isMDXComponent=!0},422:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,s(s({ref:t},o),{},{components:n})):r.a.createElement(m,s({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var o=2;o<i;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);