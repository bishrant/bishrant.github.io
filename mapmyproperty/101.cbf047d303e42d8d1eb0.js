(function(){var e={"arcgis-js-api/core/workers/request":"98YE"},s=this||window,r=s.webpackJsonp=s.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"98YE":function(e,s,r){var t,n;t=[r.dj.c(e.i),s,r("zOht"),r("ma1f"),r("J3YA")],void 0===(n=(function(e,s,r,t,n){var a;Object.defineProperty(s,"__esModule",{value:!0}),s.execute=function(e,s){void 0===s&&(s={});var i=s.responseType;i?"json"!==i&&"text"!==i&&"blob"!==i&&"array-buffer"!==i&&(i="text"):i="json";var o=s&&s.signal;return delete s.signal,n.invokeStaticMessage("request",{url:e,options:s},{signal:o}).then((function(n){var o,u,l,c,p=n.data;if(p&&!("json"!==i&&"text"!==i&&"blob"!==i||(o=new Blob([p]),"json"!==i&&"text"!==i||(a||(a=new FileReaderSync),u=a.readAsText(o),"json"!==i)))){try{l=JSON.parse(u||null)}catch(n){var b=r.__assign(r.__assign({},n),{url:e,requestOptions:s});throw new t("request:server",n.message,b)}if(l.error)throw b=r.__assign(r.__assign({},l.error),{url:e,requestOptions:s}),new t("request:server",l.error.message,b)}switch(i){case"json":c=l;break;case"text":c=u;break;case"blob":c=o;break;default:c=p}return{data:c,requestOptions:s,ssl:n.ssl,url:e}}))}}).apply(null,t))||(e.exports=n)}}]);