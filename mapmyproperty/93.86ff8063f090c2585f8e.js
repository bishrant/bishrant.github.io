(function(){var e={"esri/core/devEnvironmentUtils":"J/1E","esri/support/featureFlags":"XsEe","esri/symbols/support/styleUtils":"baLB"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"J/1E":function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("J3YA")],void 0===(o=(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isTelemetryDevEnvironment=t.adjustStaticAGOUrl=t.isDevEnvironment=void 0,t.isDevEnvironment=function(e){return e=e||r.location.hostname,s.some((function(t){return null!=(null==e?void 0:e.match(t))}))},t.adjustStaticAGOUrl=function(e,t){return e&&(t=t||r.location.hostname)?null!=t.match(n)||null!=t.match(a)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(o)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e},t.isTelemetryDevEnvironment=function(e){return e=e||r.location.hostname,[/^zrh-.+?\.esri\.com$/].concat(s).some((function(t){return null!=(null==e?void 0:e.match(t))}))};var n=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,a=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,s=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,o,/^jsapps.esri.com$/,a,l]}).apply(null,n))||(e.exports=o)},XsEe:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("H1tY")],void 0===(o=(function(e,t,r){"use strict";function n(e,t){return!!r("enable-feature:"+e+"/"+t)}Object.defineProperty(t,"__esModule",{value:!0}),t.enableWebStyleForceWOSR=t.hasEnableFeature=void 0,t.hasEnableFeature=n,t.enableWebStyleForceWOSR=function(){return n("jschmid","force-wosr")}}).apply(null,n))||(e.exports=o)},baLB:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("zp6E"),r("+AWJ"),r("KY0m"),r("J/1E"),r("ma1f"),r("qMld"),r("jfWY"),r("Qwus"),r("kW9H"),r("XsEe"),r("ojLd"),r("HqJa"),r("pYVR"),r("dtI/")],void 0===(o=(function(e,t,r,n,o,a,l,s,i,u,c,m,y,f,d,b,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styleNameFromItem=t.fetchSymbolFromStyle=t.resolveWebStyleSymbol=t.fetchStyle=void 0;var v={};function h(e,t,r){return e.styleUrl?function(e,t){return g(e,t).then((function(t){return{data:t.data,baseUrl:u.removeFile(e),styleUrl:e}}))}(e.styleUrl,r):e.styleName?function(e,t,r){var n,o=t.portal||c.getDefault(),a=o.url+" - "+(o.user&&o.user.username)+" - "+e;return v[a]||(v[a]=function(e,t,r){return t.load(r).then((function(){var n=new m({disableExtraQuery:!0,query:"owner:"+j+" AND type:"+N+' AND typekeywords:"'+e+'"'});return t.queryItems(n,r)})).then((function(t){var n=t.results,o=null,a=e.toLowerCase();if(n&&Array.isArray(n))for(var l=0,i=n;l<i.length;l++){var u=i[l];if(u.typeKeywords.some((function(e){return e.toLowerCase()===a}))&&u.type===N&&u.owner===j){o=u;break}}if(!o)throw new s("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e});return o.load(r)}))}(e,o,r).then((function(e){return n=e,e.fetchData()})).then((function(t){return{data:t,baseUrl:n.itemUrl,styleName:e}}))),v[a]}(e.styleName,t,r):i.reject(new s("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function w(e,t,r,n,c){var m=e.data,v={portal:r.portal,url:u.urlToObject(e.baseUrl),origin:"portal-item"},h=a.find(m.items,(function(e){return e.name===t}));if(!h)return i.reject(new s("symbolstyleutils:symbol-name-not-found","The symbol name '"+t+"' could not be found",{symbolName:t}));var w=f.fromJSON(function(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!y.enableWebStyleForceWOSR())for(var r=0,n=e.formatInfos;r<n.length;r++){var o=n[r];if("gltf"===o.type)return o.href}return e.webRef}(h,n),v),j=h.thumbnail&&h.thumbnail.href,N=h.thumbnail&&h.thumbnail.imageData;l.isDevEnvironment()&&(w=l.adjustStaticAGOUrl(w),j=l.adjustStaticAGOUrl(j));var E={portal:r.portal,url:u.urlToObject(u.removeFile(w)),origin:"portal-item"};return g(w,c).then((function(a){var l="cimRef"===n?S(a.data):a.data,s=d.fromJSON(l,E);if(s&&o.isSymbol3D(s)){if(j){var i=f.fromJSON(j,v);s.thumbnail=new p.default({url:i})}else N&&(s.thumbnail=new p.default({url:"data:image/png;base64,"+N}));e.styleUrl?s.styleOrigin=new b({portal:r.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new b({portal:r.portal,styleName:e.styleName,name:t}))}return s}))}function S(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function g(e,t){var o=r.__assign({responseType:"json",query:{f:"json"}},t);return n(u.normalize(e),o)}t.fetchStyle=h,t.resolveWebStyleSymbol=function(e,t,r,n){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,r){var n=E.replace(/\{SymbolName\}/gi,e.name);return g(n,r).then((function(e){var r=S(e.data);return d.fromJSON(r,{portal:t.portal,url:u.urlToObject(u.removeFile(n)),origin:"portal-item"})}))}(e,t,n):h(e,t,n).then((function(o){return w(o,e.name,t,r,n)})):i.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))},t.fetchSymbolFromStyle=w,t.styleNameFromItem=function(e){for(var t=0,r=e.typeKeywords;t<r.length;t++){var n=r[t];if(/^Esri.*Style$/.test(n)&&"Esri Style"!==n)return n}};var j="esri_en",N="Style",E="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"}).apply(null,n))||(e.exports=o)}}]);