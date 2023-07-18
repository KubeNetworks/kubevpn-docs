"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="\u53cd\u5411\u4ee3\u7406\u652f\u6301 service mesh",c={unversionedId:"functions/reverse_proxy_with_mesh",id:"functions/reverse_proxy_with_mesh",title:"\u53cd\u5411\u4ee3\u7406\u652f\u6301 service mesh",description:'Support HTTP, GRPC and WebSocket etc. with specific header "a: 1" will route to your local machine',source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/functions/reverse_proxy_with_mesh.md",sourceDirName:"functions",slug:"/functions/reverse_proxy_with_mesh",permalink:"/kubevpn-docs/zh/docs/functions/reverse_proxy_with_mesh",draft:!1,editUrl:"https://github.com/KubeNetworks/kubevpn-docs/tree/master/website/docs/docs/functions/reverse_proxy_with_mesh.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"functions",previous:{title:"\u53cd\u5411\u4ee3\u7406",permalink:"/kubevpn-docs/zh/docs/functions/reverse_proxy"},next:{title:"\u672c\u5730\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f \ud83d\udc33",permalink:"/kubevpn-docs/zh/docs/functions/dev_mode_in_local"}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u53cd\u5411\u4ee3\u7406\u652f\u6301-service-mesh"},"\u53cd\u5411\u4ee3\u7406\u652f\u6301 service mesh"),(0,o.kt)("p",null,"Support HTTP, GRPC and WebSocket etc. with specific header ",(0,o.kt)("inlineCode",{parentName:"p"},'"a: 1"')," will route to your local machine"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  ~ kubevpn proxy deployment/productpage --headers a=1\ngot cidr from cache\ntraffic manager not exist, try to create it...\npod [kubevpn-traffic-manager] status is Running\nContainer     Reason           Message\ncontrol-plane ContainerRunning\nvpn           ContainerRunning\nwebhook       ContainerRunning\n\nupdate ref count successfully\nWaiting for deployment "productpage" rollout to finish: 1 out of 2 new replicas have been updated...\nWaiting for deployment "productpage" rollout to finish: 1 out of 2 new replicas have been updated...\nWaiting for deployment "productpage" rollout to finish: 1 out of 2 new replicas have been updated...\nWaiting for deployment "productpage" rollout to finish: 1 old replicas are pending termination...\nWaiting for deployment "productpage" rollout to finish: 1 old replicas are pending termination...\ndeployment "productpage" successfully rolled out\nport forward ready\nyour ip is 223.254.0.101\ntunnel connected\ndns service ok\n\n---------------------------------------------------------------------------\n    Now you can access resources in the kubernetes cluster, enjoy it :)\n---------------------------------------------------------------------------\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  ~ curl productpage:9080\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Simple Bookstore App</title>\n<meta charset="utf-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  ~ curl productpage:9080 -H "a: 1"\nHello world!%\n')))}d.isMDXComponent=!0}}]);