"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[289],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1},i="1, What should I do if the dependent image cannot be pulled, or the inner environment cannot access docker.io?",c={unversionedId:"faq/1",id:"faq/1",title:"1, What should I do if the dependent image cannot be pulled, or the inner environment cannot access docker.io?",description:"Answer: here are two solution to solve this problem",source:"@site/docs/faq/1.md",sourceDirName:"faq",slug:"/faq/1",permalink:"/kubevpn-docs/docs/faq/1",draft:!1,editUrl:"https://github.com/KubeNetworks/kubevpn-docs/tree/master/website/docs/docs/faq/1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"faq",next:{title:"2, When use kubevpn dev, but got error code 137, how to resolve ?",permalink:"/kubevpn-docs/docs/faq/2"}},s={},l=[],u={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-what-should-i-do-if-the-dependent-image-cannot-be-pulled-or-the-inner-environment-cannot-access-dockerio"},"1, What should I do if the dependent image cannot be pulled, or the inner environment cannot access docker.io?"),(0,a.kt)("p",null,"Answer: here are two solution to solve this problem"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solution 1: In the network that can access docker.io, transfer the image in the command ",(0,a.kt)("inlineCode",{parentName:"li"},"kubevpn version")," to your own\nprivate image registry, and then add option ",(0,a.kt)("inlineCode",{parentName:"li"},"--image")," to special image when starting the command.\nExample:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"  \u279c  ~ kubevpn version\n  KubeVPN: CLI\n  Version: v1.1.14\n  Image: docker.io/naison/kubevpn:v1.1.14\n  Branch: master\n  Git commit: 87dac42dad3d8f472a9dcdfc2c6cd801551f23d1\n  Built time: 2023-01-15 04:19:45\n  Built OS/Arch: linux/amd64\n  Built Go version: go1.18.10\n  \u279c  ~\n")),(0,a.kt)("p",null,"Image is ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.io/naison/kubevpn:v1.1.14"),", transfer this image to private docker registry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"docker pull docker.io/naison/kubevpn:v1.1.14\ndocker tag docker.io/naison/kubevpn:v1.1.14 [docker registry]/[namespace]/[repo]:[tag]\ndocker push [docker registry]/[namespace]/[repo]:[tag]\n")),(0,a.kt)("p",null,"Then you can use this image, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u279c  ~ kubevpn connect --image [docker registry]/[namespace]/[repo]:[tag]\ngot cidr from cache\ntraffic manager not exist, try to create it...\npod [kubevpn-traffic-manager] status is Running\n...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solution 2: Use options ",(0,a.kt)("inlineCode",{parentName:"li"},"--transfer-image"),", enable this flags will transfer image from default image to ",(0,a.kt)("inlineCode",{parentName:"li"},"--image"),"\nspecial address automatically\u3002\nExample")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~ kubevpn connect --transfer-image --image nocalhost-team-docker.pkg.coding.net/nocalhost/public/kubevpn:v1.1.33\nPassword:\nv1.1.33: Pulling from naison/kubevpn\nDigest: sha256:970c0c82a2d9cbac1595edb56a31e8fc84e02712c00a7211762efee5f66ea70c\nStatus: Image is up to date for naison/kubevpn:v1.1.33\nThe push refers to repository [nocalhost-team-docker.pkg.coding.net/nocalhost/public/kubevpn]\n9d72fec6b077: Pushed\n12a6a77eb79e: Pushed\nc7d0f62ec57f: Pushed\n5605cea4b7c8: Pushed\n4231fec7b258: Pushed\nbabe72b5fcae: Pushed\n6caa74b4bcf0: Pushed\nb8a36d10656a: Pushed\nv1.1.33: digest: sha256:1bc5e589bec6dc279418009b5e82ce0fd29a2c0e8b9266988964035ad7fbeba5 size: 2000\ngot cidr from cache\nupdate ref count successfully\ntraffic manager already exist, reuse it\nport forward ready\ntunnel connected\ndns service ok\n\n+---------------------------------------------------------------------------+\n|    Now you can access resources in the kubernetes cluster, enjoy it :)    |\n+---------------------------------------------------------------------------+\n\n")))}p.isMDXComponent=!0}}]);