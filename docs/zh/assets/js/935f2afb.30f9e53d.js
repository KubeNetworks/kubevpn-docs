"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"\u4e0b\u4e00\u7bc7","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"\u5feb\u901f\u5f00\u59cb","href":"/kubevpn-docs/zh/docs/quickstart","docId":"quickstart"},{"type":"category","label":"\u529f\u80fd","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u94fe\u63a5\u5230\u96c6\u7fa4\u7f51\u7edc","href":"/kubevpn-docs/zh/docs/functions/connect_to_k8s_cluster_network","docId":"functions/connect_to_k8s_cluster_network"},{"type":"link","label":"\u57df\u540d\u89e3\u6790\u529f\u80fd","href":"/kubevpn-docs/zh/docs/functions/domain_resolve","docId":"functions/domain_resolve"},{"type":"link","label":"\u77ed\u57df\u540d\u89e3\u6790\u529f\u80fd","href":"/kubevpn-docs/zh/docs/functions/short_domain_resolve","docId":"functions/short_domain_resolve"},{"type":"link","label":"\u53cd\u5411\u4ee3\u7406","href":"/kubevpn-docs/zh/docs/functions/reverse_proxy","docId":"functions/reverse_proxy"},{"type":"link","label":"\u53cd\u5411\u4ee3\u7406\u652f\u6301 service mesh","href":"/kubevpn-docs/zh/docs/functions/reverse_proxy_with_mesh","docId":"functions/reverse_proxy_with_mesh"},{"type":"link","label":"\u672c\u5730\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f \ud83d\udc33","href":"/kubevpn-docs/zh/docs/functions/dev_mode_in_local","docId":"functions/dev_mode_in_local"},{"type":"link","label":"DinD ( Docker in Docker ) \u5728 Docker \u4e2d\u4f7f\u7528 kubevpn","href":"/kubevpn-docs/zh/docs/functions/dind","docId":"functions/dind"},{"type":"link","label":"\u652f\u6301\u591a\u79cd\u534f\u8bae","href":"/kubevpn-docs/zh/docs/functions/multiple_protocol","docId":"functions/multiple_protocol"},{"type":"link","label":"\u652f\u6301\u4e09\u5927\u5e73\u53f0","href":"/kubevpn-docs/zh/docs/functions/cross_platform","docId":"functions/cross_platform"}],"href":"/kubevpn-docs/zh/docs/category/functions"},{"type":"category","label":"\u95ee\u7b54","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1\uff0c\u4f9d\u8d56\u7684\u955c\u50cf\u62c9\u4e0d\u4e0b\u6765\uff0c\u6216\u8005\u5185\u7f51\u73af\u5883\u65e0\u6cd5\u8bbf\u95ee docker.io \u600e\u4e48\u529e\uff1f","href":"/kubevpn-docs/zh/docs/faq/1","docId":"faq/1"},{"type":"link","label":"2\uff0c\u5728\u4f7f\u7528 kubevpn dev \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u7684\u65f6\u5019,\u6709\u51fa\u73b0\u62a5\u9519 137, \u6539\u600e\u4e48\u89e3\u51b3 ?","href":"/kubevpn-docs/zh/docs/faq/2","docId":"faq/2"},{"type":"link","label":"3\uff0c\u4f7f\u7528 WSL( Windows Sub Linux ) Docker, \u7528\u547d\u4ee4 kubevpn dev \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u7684\u65f6\u5019, \u5728 terminal \u4e2d\u65e0\u6cd5\u63d0\u793a\u94fe\u63a5\u96c6\u7fa4\u7f51\u7edc, \u8fd9\u662f\u4e3a\u4ec0\u4e48, \u5982\u4f55\u89e3\u51b3?","href":"/kubevpn-docs/zh/docs/faq/3","docId":"faq/3"},{"type":"link","label":"4\uff0c\u5728\u4f7f\u7528 kubevpn dev \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u540e\uff0c\u65e0\u6cd5\u8bbf\u95ee\u5bb9\u5668\u7f51\u7edc\uff0c\u51fa\u73b0\u9519\u8bef 172.17.0.1:443 connect refusued\uff0c\u8be5\u5982\u4f55\u89e3\u51b3\uff1f","href":"/kubevpn-docs/zh/docs/faq/4","docId":"faq/4"}],"href":"/kubevpn-docs/zh/docs/category/faq"},{"type":"link","label":"\u5173\u4e8e","href":"/kubevpn-docs/zh/docs/about","docId":"about"}],"functions":[{"type":"link","label":"\u94fe\u63a5\u5230\u96c6\u7fa4\u7f51\u7edc","href":"/kubevpn-docs/zh/docs/functions/connect_to_k8s_cluster_network","docId":"functions/connect_to_k8s_cluster_network"},{"type":"link","label":"\u57df\u540d\u89e3\u6790\u529f\u80fd","href":"/kubevpn-docs/zh/docs/functions/domain_resolve","docId":"functions/domain_resolve"},{"type":"link","label":"\u77ed\u57df\u540d\u89e3\u6790\u529f\u80fd","href":"/kubevpn-docs/zh/docs/functions/short_domain_resolve","docId":"functions/short_domain_resolve"},{"type":"link","label":"\u53cd\u5411\u4ee3\u7406","href":"/kubevpn-docs/zh/docs/functions/reverse_proxy","docId":"functions/reverse_proxy"},{"type":"link","label":"\u53cd\u5411\u4ee3\u7406\u652f\u6301 service mesh","href":"/kubevpn-docs/zh/docs/functions/reverse_proxy_with_mesh","docId":"functions/reverse_proxy_with_mesh"},{"type":"link","label":"\u672c\u5730\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f \ud83d\udc33","href":"/kubevpn-docs/zh/docs/functions/dev_mode_in_local","docId":"functions/dev_mode_in_local"},{"type":"link","label":"DinD ( Docker in Docker ) \u5728 Docker \u4e2d\u4f7f\u7528 kubevpn","href":"/kubevpn-docs/zh/docs/functions/dind","docId":"functions/dind"},{"type":"link","label":"\u652f\u6301\u591a\u79cd\u534f\u8bae","href":"/kubevpn-docs/zh/docs/functions/multiple_protocol","docId":"functions/multiple_protocol"},{"type":"link","label":"\u652f\u6301\u4e09\u5927\u5e73\u53f0","href":"/kubevpn-docs/zh/docs/functions/cross_platform","docId":"functions/cross_platform"}],"faq":[{"type":"link","label":"1\uff0c\u4f9d\u8d56\u7684\u955c\u50cf\u62c9\u4e0d\u4e0b\u6765\uff0c\u6216\u8005\u5185\u7f51\u73af\u5883\u65e0\u6cd5\u8bbf\u95ee docker.io \u600e\u4e48\u529e\uff1f","href":"/kubevpn-docs/zh/docs/faq/1","docId":"faq/1"},{"type":"link","label":"2\uff0c\u5728\u4f7f\u7528 kubevpn dev \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u7684\u65f6\u5019,\u6709\u51fa\u73b0\u62a5\u9519 137, \u6539\u600e\u4e48\u89e3\u51b3 ?","href":"/kubevpn-docs/zh/docs/faq/2","docId":"faq/2"},{"type":"link","label":"3\uff0c\u4f7f\u7528 WSL( Windows Sub Linux ) Docker, \u7528\u547d\u4ee4 kubevpn dev \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u7684\u65f6\u5019, \u5728 terminal \u4e2d\u65e0\u6cd5\u63d0\u793a\u94fe\u63a5\u96c6\u7fa4\u7f51\u7edc, \u8fd9\u662f\u4e3a\u4ec0\u4e48, \u5982\u4f55\u89e3\u51b3?","href":"/kubevpn-docs/zh/docs/faq/3","docId":"faq/3"},{"type":"link","label":"4\uff0c\u5728\u4f7f\u7528 kubevpn dev \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u540e\uff0c\u65e0\u6cd5\u8bbf\u95ee\u5bb9\u5668\u7f51\u7edc\uff0c\u51fa\u73b0\u9519\u8bef 172.17.0.1:443 connect refusued\uff0c\u8be5\u5982\u4f55\u89e3\u51b3\uff1f","href":"/kubevpn-docs/zh/docs/faq/4","docId":"faq/4"}]},"docs":{"about":{"id":"about","title":"\u5173\u4e8e","description":"\u56fe\u6807","sidebar":"docs"},"faq/1":{"id":"faq/1","title":"1\uff0c\u4f9d\u8d56\u7684\u955c\u50cf\u62c9\u4e0d\u4e0b\u6765\uff0c\u6216\u8005\u5185\u7f51\u73af\u5883\u65e0\u6cd5\u8bbf\u95ee docker.io \u600e\u4e48\u529e\uff1f","description":"\u7b54\uff1a\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u89e3\u51b3","sidebar":"faq"},"faq/2":{"id":"faq/2","title":"2\uff0c\u5728\u4f7f\u7528 kubevpn dev \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u7684\u65f6\u5019,\u6709\u51fa\u73b0\u62a5\u9519 137, \u6539\u600e\u4e48\u89e3\u51b3 ?","description":"\u8fd9\u662f\u56e0\u4e3a\u4f60\u7684 Docker-desktop \u58f0\u660e\u7684\u8d44\u6e90, \u5c0f\u4e8e container \u5bb9\u5668\u542f\u52a8\u65f6\u6240\u9700\u8981\u7684\u8d44\u6e90, \u56e0\u6b64\u88ab OOM \u6740\u6389\u4e86, \u4f60\u53ef\u4ee5\u589e\u52a0 Docker-desktop \u5bf9\u4e8e resources","sidebar":"faq"},"faq/3":{"id":"faq/3","title":"3\uff0c\u4f7f\u7528 WSL( Windows Sub Linux ) Docker, \u7528\u547d\u4ee4 kubevpn dev \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u7684\u65f6\u5019, \u5728 terminal \u4e2d\u65e0\u6cd5\u63d0\u793a\u94fe\u63a5\u96c6\u7fa4\u7f51\u7edc, \u8fd9\u662f\u4e3a\u4ec0\u4e48, \u5982\u4f55\u89e3\u51b3?","description":"\u7b54\u6848: \u8fd9\u662f\u56e0\u4e3a WSL \u7684 Docker \u4f7f\u7528\u7684\u662f \u4e3b\u673a Windows \u7684\u7f51\u7edc, \u6240\u4ee5\u5373\u4fbf\u5728 WSL \u4e2d\u542f\u52a8 container, \u8fd9\u4e2a container \u4e0d\u4f1a\u4f7f\u7528 WSL \u7684\u7f51\u7edc\uff0c\u800c\u662f\u4f7f\u7528 Windows \u7684\u7f51\u7edc\u3002","sidebar":"faq"},"faq/4":{"id":"faq/4","title":"4\uff0c\u5728\u4f7f\u7528 kubevpn dev \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u540e\uff0c\u65e0\u6cd5\u8bbf\u95ee\u5bb9\u5668\u7f51\u7edc\uff0c\u51fa\u73b0\u9519\u8bef 172.17.0.1:443 connect refusued\uff0c\u8be5\u5982\u4f55\u89e3\u51b3\uff1f","description":"\u7b54\u6848\uff1a\u5927\u6982\u7387\u662f\u56e0\u4e3a k8s \u5bb9\u5668\u7f51\u7edc\u548c docker \u7f51\u7edc\u7f51\u6bb5\u51b2\u7a81\u4e86\u3002","sidebar":"faq"},"functions/connect_to_k8s_cluster_network":{"id":"functions/connect_to_k8s_cluster_network","title":"\u94fe\u63a5\u5230\u96c6\u7fa4\u7f51\u7edc","description":"\u6709\u8fd9\u4e2a\u63d0\u793a\u51fa\u6765\u540e, \u5f53\u524d terminal \u4e0d\u8981\u5173\u95ed\uff0c\u65b0\u6253\u5f00\u4e00\u4e2a terminal, \u6267\u884c\u65b0\u7684\u64cd\u4f5c","sidebar":"functions"},"functions/cross_platform":{"id":"functions/cross_platform","title":"\u652f\u6301\u4e09\u5927\u5e73\u53f0","description":"- macOS","sidebar":"functions"},"functions/dev_mode_in_local":{"id":"functions/dev_mode_in_local","title":"\u672c\u5730\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f \ud83d\udc33","description":"\u5c06 Kubernetes pod \u8fd0\u884c\u5728\u672c\u5730\u7684 Docker \u5bb9\u5668\u4e2d\uff0c\u540c\u65f6\u914d\u5408 service mesh, \u62e6\u622a\u5e26\u6709\u6307\u5b9a header \u7684\u6d41\u91cf\u5230\u672c\u5730\uff0c\u6216\u8005\u6240\u6709\u7684\u6d41\u91cf\u5230\u672c\u5730\u3002\u8fd9\u4e2a\u5f00\u53d1\u6a21\u5f0f\u4f9d\u8d56\u4e8e\u672c\u5730 Docker\u3002","sidebar":"functions"},"functions/dind":{"id":"functions/dind","title":"DinD ( Docker in Docker ) \u5728 Docker \u4e2d\u4f7f\u7528 kubevpn","description":"\u5982\u679c\u4f60\u60f3\u5728\u672c\u5730\u4f7f\u7528 Docker in Docker (DinD) \u7684\u65b9\u5f0f\u542f\u52a8\u5f00\u53d1\u6a21\u5f0f, \u7531\u4e8e\u7a0b\u5e8f\u4f1a\u8bfb\u5199 /tmp \u76ee\u5f55\uff0c\u60a8\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u53c2\u6570 -v /tmp:/tmp, \u8fd8\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f, \u5982\u679c\u4f7f\u7528 DinD","sidebar":"functions"},"functions/domain_resolve":{"id":"functions/domain_resolve","title":"\u57df\u540d\u89e3\u6790\u529f\u80fd","description":"","sidebar":"functions"},"functions/multiple_protocol":{"id":"functions/multiple_protocol","title":"\u652f\u6301\u591a\u79cd\u534f\u8bae","description":"- TCP","sidebar":"functions"},"functions/reverse_proxy":{"id":"functions/reverse_proxy","title":"\u53cd\u5411\u4ee3\u7406","description":"","sidebar":"functions"},"functions/reverse_proxy_with_mesh":{"id":"functions/reverse_proxy_with_mesh","title":"\u53cd\u5411\u4ee3\u7406\u652f\u6301 service mesh","description":"Support HTTP, GRPC and WebSocket etc. with specific header \\"a: 1\\" will route to your local machine","sidebar":"functions"},"functions/short_domain_resolve":{"id":"functions/short_domain_resolve","title":"\u77ed\u57df\u540d\u89e3\u6790\u529f\u80fd","description":"","sidebar":"functions"},"quickstart":{"id":"quickstart","title":"\u5feb\u901f\u5f00\u59cb","description":"KubeVPN \u662f\u4e00\u4e2a\u4e91\u539f\u751f\u5f00\u53d1\u5de5\u5177, \u53ef\u4ee5\u5728\u672c\u5730\u8fde\u63a5\u4e91\u7aef kubernetes \u7f51\u7edc\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5728\u672c\u5730\u76f4\u63a5\u8bbf\u95ee\u8fdc\u7aef\u96c6\u7fa4\u7684\u670d\u52a1\u3002\u4e5f\u53ef\u4ee5\u5728\u8fdc\u7aef\u96c6\u7fa4\u8bbf\u95ee\u5230\u672c\u5730\u670d\u52a1\uff0c\u4fbf\u4e8e\u8c03\u8bd5\u53ca\u5f00\u53d1\u3002\u540c\u65f6\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5f00\u53d1\u6a21\u5f0f\uff0c\u76f4\u63a5\u5728\u672c\u5730\u4f7f\u7528 Docker \u5c06\u8fdc\u7a0b\u5bb9\u5668\u8fd0\u884c\u5728\u672c\u5730\u3002","sidebar":"docs"}}}')}}]);