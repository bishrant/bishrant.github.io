(function(){var e={"esri/core/workers/request":"98YE"},s=this||window,r=s.webpackJsonp=s.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"98YE":function(e,s,r){var t,n;t=[r.dj.c(e.i),s,r("zOht"),r("ma1f"),r("J3YA")],void 0===(n=(function(e,s,r,t,n){"use strict";var a;Object.defineProperty(s,"__esModule",{value:!0}),s.execute=void 0,s.execute=function(e,s){void 0===s&&(s={});var i=s.responseType;i?"json"!==i&&"text"!==i&&"blob"!==i&&"array-buffer"!==i&&(i="text"):i="json";var o=s&&s.signal;return delete s.signal,n.invokeStaticMessage("request",{url:e,options:s},{signal:o}).then((function(n){var o,u,c,l,p=n.data;if(p&&!("json"!==i&&"text"!==i&&"blob"!==i||(o=new Blob([p]),"json"!==i&&"text"!==i||(a||(a=new FileReaderSync),u=a.readAsText(o),"json"!==i)))){try{c=JSON.parse(u||null)}catch(n){var b=r.__assign(r.__assign({},n),{url:e,requestOptions:s});throw new t("request:server",n.message,b)}if(c.error)throw b=r.__assign(r.__assign({},c.error),{url:e,requestOptions:s}),new t("request:server",c.error.message,b)}switch(i){case"json":l=c;break;case"text":l=u;break;case"blob":l=o;break;default:l=p}return{data:l,requestOptions:s,ssl:n.ssl,url:e}}))}}).apply(null,t))||(e.exports=n)}}]);