(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/core/workers/request":"98YE"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"98YE":function(e,s,r){var t,n;t=[r.dj.c(e.i),s,r("zOht"),r("ma1f"),r("J3YA")],void 0===(n=(function(e,s,r,t,n){var a;Object.defineProperty(s,"__esModule",{value:!0}),s.execute=function(e,s){void 0===s&&(s={});var o=s.responseType;o?"json"!==o&&"text"!==o&&"blob"!==o&&"array-buffer"!==o&&(o="text"):o="json";var i=s&&s.signal;return delete s.signal,n.invokeStaticMessage("request",{url:e,options:s},{signal:i}).then((function(n){var i,u,l,c,p=n.data;if(p&&!("json"!==o&&"text"!==o&&"blob"!==o||(i=new Blob([p]),"json"!==o&&"text"!==o||(a||(a=new FileReaderSync),u=a.readAsText(i),"json"!==o)))){try{l=JSON.parse(u||null)}catch(n){var w=r.__assign(r.__assign({},n),{url:e,requestOptions:s});throw new t("request:server",n.message,w)}if(l.error)throw w=r.__assign(r.__assign({},l.error),{url:e,requestOptions:s}),new t("request:server",l.error.message,w)}switch(o){case"json":c=l;break;case"text":c=u;break;case"blob":c=i;break;default:c=p}return{data:c,requestOptions:s,ssl:n.ssl,url:e}}))}}).apply(null,t))||(e.exports=n)}}]);