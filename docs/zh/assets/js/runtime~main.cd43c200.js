(()=>{"use strict";var e,t,r,a,f,o={},n={};function b(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,b),r.loaded=!0,r.exports}b.m=o,b.c=n,e=[],b.O=(t,r,a,f)=>{if(!r){var o=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],f=e[i][2];for(var n=!0,c=0;c<r.length;c++)(!1&f||o>=f)&&Object.keys(b.O).every((e=>b.O[e](r[c])))?r.splice(c--,1):(n=!1,f<o&&(o=f));if(n){e.splice(i--,1);var d=a();void 0!==d&&(t=d)}}return t}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[r,a,f]},b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var f=Object.create(null);b.r(f);var o={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,b.d(f,o),f},b.d=(e,t)=>{for(var r in t)b.o(t,r)&&!b.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((t,r)=>(b.f[r](e,t),t)),[])),b.u=e=>"assets/js/"+({22:"322be501",53:"935f2afb",54:"b148ab3d",85:"1f391b9e",92:"79f2be4e",174:"a5f64b4f",220:"2a48e475",233:"15b9fa68",237:"1df93b7f",270:"46821e8a",414:"393be207",439:"3b248578",507:"e1ac9cc1",514:"1be78505",627:"439f9a04",777:"49bfbb5b",808:"b83da85f",817:"14eb3368",819:"c2fe4ef9",822:"c7703fc7",881:"47dca80d",910:"5984e926",914:"83eb5555",918:"17896441",936:"e0bfcdc5",976:"9c767731"}[e]||e)+"."+{22:"be5a7edd",53:"30f9e53d",54:"ac8c2026",85:"e3fcbb89",92:"4db1d5a7",174:"d65b99d0",220:"726f289a",233:"842c4009",237:"a1e03b7b",270:"64abc019",414:"1c93380a",439:"26c76684",455:"7ef2992a",507:"7d125e7c",514:"bad2f6bc",627:"d8caf2a5",777:"dc0c2b90",808:"0415663a",817:"7e4da71a",819:"2912135e",822:"364ebc4d",881:"49998781",910:"aefe6edf",914:"d16174e0",918:"416fb698",936:"7c773b84",972:"b43202c5",976:"33155f43"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},f="website:",b.l=(e,t,r,o)=>{if(a[e])a[e].push(t);else{var n,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var u=d[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+r){n=u;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,b.nc&&n.setAttribute("nonce",b.nc),n.setAttribute("data-webpack",f+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var f=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),f&&f.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),c&&document.head.appendChild(n)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/kubevpn-docs/zh/",b.gca=function(e){return e={17896441:"918","322be501":"22","935f2afb":"53",b148ab3d:"54","1f391b9e":"85","79f2be4e":"92",a5f64b4f:"174","2a48e475":"220","15b9fa68":"233","1df93b7f":"237","46821e8a":"270","393be207":"414","3b248578":"439",e1ac9cc1:"507","1be78505":"514","439f9a04":"627","49bfbb5b":"777",b83da85f:"808","14eb3368":"817",c2fe4ef9:"819",c7703fc7:"822","47dca80d":"881","5984e926":"910","83eb5555":"914",e0bfcdc5:"936","9c767731":"976"}[e]||e,b.p+b.u(e)},(()=>{var e={303:0,532:0};b.f.j=(t,r)=>{var a=b.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var f=new Promise(((r,f)=>a=e[t]=[r,f]));r.push(a[2]=f);var o=b.p+b.u(t),n=new Error;b.l(o,(r=>{if(b.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var f=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+f+": "+o+")",n.name="ChunkLoadError",n.type=f,n.request=o,a[1](n)}}),"chunk-"+t,t)}},b.O.j=t=>0===e[t];var t=(t,r)=>{var a,f,o=r[0],n=r[1],c=r[2],d=0;if(o.some((t=>0!==e[t]))){for(a in n)b.o(n,a)&&(b.m[a]=n[a]);if(c)var i=c(b)}for(t&&t(r);d<o.length;d++)f=o[d],b.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return b.O(i)},r=self.webpackChunkwebsite=self.webpackChunkwebsite||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();