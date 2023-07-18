"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[439],{3905:(n,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>b});var t=r(7294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function i(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var u=t.createContext({}),c=function(n){var e=t.useContext(u),r=e;return n&&(r="function"==typeof n?n(e):a(a({},e),n)),r},p=function(n){var e=c(n.components);return t.createElement(u.Provider,{value:e},n.children)},l="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,i=n.originalType,u=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),l=c(r),m=o,b=l["".concat(u,".").concat(m)]||l[m]||d[m]||i;return r?t.createElement(b,a(a({ref:e},p),{},{components:r})):t.createElement(b,a({ref:e},p))}));function b(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=n,s[l]="string"==typeof n?n:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7750:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const i={sidebar_position:7},a="DinD ( Docker in Docker ) \u5728 Docker \u4e2d\u4f7f\u7528 kubevpn",s={unversionedId:"functions/dind",id:"functions/dind",title:"DinD ( Docker in Docker ) \u5728 Docker \u4e2d\u4f7f\u7528 kubevpn",description:"\u5982\u679c\u4f60\u60f3\u5728\u672c\u5730\u4f7f\u7528 Docker in Docker (DinD) \u7684\u65b9\u5f0f\u542f\u52a8\u5f00\u53d1\u6a21\u5f0f, \u7531\u4e8e\u7a0b\u5e8f\u4f1a\u8bfb\u5199 /tmp \u76ee\u5f55\uff0c\u60a8\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u53c2\u6570 -v /tmp:/tmp, \u8fd8\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f, \u5982\u679c\u4f7f\u7528 DinD",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/functions/dind.md",sourceDirName:"functions",slug:"/functions/dind",permalink:"/kubevpn-docs/zh/docs/functions/dind",draft:!1,editUrl:"https://github.com/KubeNetworks/kubevpn-docs/tree/master/website/docs/docs/functions/dind.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"functions",previous:{title:"\u672c\u5730\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f \ud83d\udc33",permalink:"/kubevpn-docs/zh/docs/functions/dev_mode_in_local"},next:{title:"\u652f\u6301\u591a\u79cd\u534f\u8bae",permalink:"/kubevpn-docs/zh/docs/functions/multiple_protocol"}},u={},c=[],p={toc:c},l="wrapper";function d(n){let{components:e,...r}=n;return(0,o.kt)(l,(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dind--docker-in-docker--\u5728-docker-\u4e2d\u4f7f\u7528-kubevpn"},"DinD ( Docker in Docker ) \u5728 Docker \u4e2d\u4f7f\u7528 kubevpn"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u672c\u5730\u4f7f\u7528 Docker in Docker (DinD) \u7684\u65b9\u5f0f\u542f\u52a8\u5f00\u53d1\u6a21\u5f0f, \u7531\u4e8e\u7a0b\u5e8f\u4f1a\u8bfb\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp")," \u76ee\u5f55\uff0c\u60a8\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"-v /tmp:/tmp"),", \u8fd8\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f, \u5982\u679c\u4f7f\u7528 DinD\n\u6a21\u5f0f\uff0c\u4e3a\u4e86\u5171\u4eab\u5bb9\u5668\u7f51\u7edc\u548c pid, \u8fd8\u9700\u8981\u6307\u5b9a\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--network")),(0,o.kt)("p",null,"\u4f8b\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --privileged -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp -v /Users/naison/.kube/config:/root/.kube/config naison/kubevpn:v1.1.21\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  ~ docker run -it --privileged -c authors -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp -v /Users/naison/.kube/vke:/root/.kube/config -v /Users/naison/Desktop/kubevpn/bin:/app naison/kubevpn:v1.1.21\nroot@4d0c3c4eae2b:/# hostname\n4d0c3c4eae2b\nroot@4d0c3c4eae2b:/# kubevpn -n kube-system --image naison/kubevpn:v1.1.21 --headers user=naison --network container:4d0c3c4eae2b --entrypoint /bin/bash dev deployment/authors\n\n----------------------------------------------------------------------------------\n    Warn: Use sudo to execute command kubevpn can not use user env KUBECONFIG.\n    Because of sudo user env and user env are different.\n    Current env KUBECONFIG value:\n----------------------------------------------------------------------------------\n\ngot cidr from cache\ntraffic manager not exist, try to create it...\npod [kubevpn-traffic-manager] status is Pending\nContainer Reason Message\n\npod [kubevpn-traffic-manager] status is Pending\nContainer     Reason            Message\ncontrol-plane ContainerCreating\nvpn           ContainerCreating\nwebhook       ContainerCreating\n\npod [kubevpn-traffic-manager] status is Running\nContainer     Reason           Message\ncontrol-plane ContainerRunning\nvpn           ContainerRunning\nwebhook       ContainerRunning\n\nupdate ref count successfully\nWaiting for deployment "authors" rollout to finish: 1 old replicas are pending termination...\nWaiting for deployment "authors" rollout to finish: 1 old replicas are pending termination...\ndeployment "authors" successfully rolled out\nport forward ready\ntunnel connected\ndns service ok\ntar: removing leading \'/\' from member names\n/tmp/3122262358661539581:/var/run/secrets/kubernetes.io/serviceaccount\ntar: Removing leading \'/\' from member names\ntar: Removing leading \'/\' from hard link targets\n/tmp/7677066538742627822:/var/run/secrets/kubernetes.io/serviceaccount\nlatest: Pulling from naison/authors\nDigest: sha256:2e7b2d6a4c6143cde888fcdb70ba091d533e11de70e13e151adff7510a5d52d4\nStatus: Downloaded newer image for naison/authors:latest\nCreated container: authors_kube-system_kubevpn_c68e4\nWait container authors_kube-system_kubevpn_c68e4 to be running...\nContainer authors_kube-system_kubevpn_c68e4 is running now\nCreated container: nginx_kube-system_kubevpn_c68e7\nWait container nginx_kube-system_kubevpn_c68e7 to be running...\nContainer nginx_kube-system_kubevpn_c68e7 is running now\n/opt/microservices # ps -ef\nPID   USER     TIME  COMMAND\n    1 root      0:00 {bash} /usr/bin/qemu-x86_64 /bin/bash /bin/bash\n   60 root      0:07 {kubevpn} /usr/bin/qemu-x86_64 kubevpn kubevpn dev deployment/authors -n kube-system --image naison/kubevpn:v1.1.21 --headers user=naison --parent\n   73 root      0:00 {tail} /usr/bin/qemu-x86_64 /usr/bin/tail tail -f /dev/null\n   80 root      0:00 {nginx} /usr/bin/qemu-x86_64 /usr/sbin/nginx nginx -g daemon off;\n   92 root      0:00 {sh} /usr/bin/qemu-x86_64 /bin/sh /bin/sh\n  156 101       0:00 {nginx} /usr/bin/qemu-x86_64 /usr/sbin/nginx nginx -g daemon off;\n  158 101       0:00 {nginx} /usr/bin/qemu-x86_64 /usr/sbin/nginx nginx -g daemon off;\n  160 101       0:00 {nginx} /usr/bin/qemu-x86_64 /usr/sbin/nginx nginx -g daemon off;\n  162 101       0:00 {nginx} /usr/bin/qemu-x86_64 /usr/sbin/nginx nginx -g daemon off;\n  164 root      0:00 ps -ef\n/opt/microservices # ls\napp\n/opt/microservices # apk add curl\nfetch https://dl-cdn.alpinelinux.org/alpine/v3.14/main/x86_64/APKINDEX.tar.gz\nfetch https://dl-cdn.alpinelinux.org/alpine/v3.14/community/x86_64/APKINDEX.tar.gz\n(1/4) Installing brotli-libs (1.0.9-r5)\n(2/4) Installing nghttp2-libs (1.43.0-r0)\n(3/4) Installing libcurl (7.79.1-r5)\n(4/4) Installing curl (7.79.1-r5)\nExecuting busybox-1.33.1-r3.trigger\nOK: 8 MiB in 19 packages\n/opt/microservices # curl localhost:80\n<!DOCTYPE html>\n<html>\n<head>\n<title>Welcome to nginx!</title>\n<style>\nhtml { color-scheme: light dark; }\nbody { width: 35em; margin: 0 auto;\nfont-family: Tahoma, Verdana, Arial, sans-serif; }\n</style>\n</head>\n<body>\n<h1>Welcome to nginx!</h1>\n<p>If you see this page, the nginx web server is successfully installed and\nworking. Further configuration is required.</p>\n\n<p>For online documentation and support please refer to\n<a href="http://nginx.org/">nginx.org</a>.<br/>\nCommercial support is available at\n<a href="http://nginx.com/">nginx.com</a>.</p>\n\n<p><em>Thank you for using nginx.</em></p>\n</body>\n</html>\n/opt/microservices # ls\napp\n/opt/microservices # exit\nprepare to exit, cleaning up\nupdate ref count successfully\nref-count is zero, prepare to clean up resource\nclean up successful\nroot@4d0c3c4eae2b:/# exit\nexit\n')))}d.isMDXComponent=!0}}]);