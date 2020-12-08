(function(){var e={"arcgis-js-api/portal/support/layersLoader":"6hwa"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{"6hwa":function(e,r,t){var a,n;a=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("ma1f"),t("qMld"),t("FayN"),t("Qwus"),t("OECU"),t("PhdM")],void 0===(n=(function(e,r,t,a,n,o,i,l,u,s){"use strict";function d(e,r){return t.__awaiter(this,void 0,void 0,(function(){var a,n,o,i,l,d;return t.__generator(this,(function(t){switch(t.label){case 0:return o=(n=(a=e.instance).portalItem).url,i=n.title,l=u.createForItem(n),"group"===a.type?(a.read({title:i},l),[2,p(a,e)]):(o&&a.read({url:o},l),[4,f(e,r)]);case 1:return(d=t.sent())&&a.read(d,l),a.resourceReferences={portalItem:n,paths:l.readResourcePaths},a.read({title:i},l),[2,s.loadStyleRenderer(a,l)]}}))}))}function p(e,r){var t,l,u=e.portalItem.type;switch(u){case"Feature Service":t=i.layerLookupMap.FeatureLayer;break;case"Stream Service":t=i.layerLookupMap.StreamLayer;break;case"Scene Service":t=i.layerLookupMap.SceneLayer;break;case"Feature Collection":t=i.layerLookupMap.FeatureLayer;break;default:throw new n("portal:unsupported-item-type-as-group","The item type '"+u+"' is not supported as a 'GroupLayer'")}return t().then((function(e){return l=e,f(r)})).then((function(r){return y(r)>0?c(e,l,r):function(e,r){return e.portalItem.url?a(e.portalItem.url,{responseType:"json",query:{f:"json"}}).then((function(t){var a,n,o=t.data;function i(e){return{id:e.id,name:e.name}}o&&c(e,r,{layers:null===(a=o.layers)||void 0===a?void 0:a.map(i),tables:null===(n=o.tables)||void 0===n?void 0:n.map(i)})})):o.resolve()}(e,l)}))}function c(e,r,t){var a=t.layers||[],n=t.tables||[];"Feature Collection"===e.portalItem.type&&(a.forEach((function(e){var r;"Table"===(null===(r=null==e?void 0:e.layerDefinition)||void 0===r?void 0:r.type)&&n.push(e)})),a=a.filter((function(e){var r;return"Table"!==(null===(r=null==e?void 0:e.layerDefinition)||void 0===r?void 0:r.type)}))),a.reverse().forEach((function(a){var n=v(e,r,t,a);e.add(n)})),n.reverse().forEach((function(a){var n=v(e,r,t,a);e.tables.add(n)}))}function v(e,r,t,a){var n=new r({portalItem:e.portalItem,layerId:a.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var o={origin:"portal-item",portal:e.portalItem.portal||l.getDefault()};n.read(a,o);var i=t.showLegend;null!=i&&n.read({showLegend:i},o)}return n}function f(e,r){if(!1===e.supportsData)return o.resolve();var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then((function(e){var r,a=e;if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){var n=!0;return e&&y(a)>0&&(null==t.layerId&&(t.layerId=function(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}(a)),(r=function(e,r){var t=e.layers;if(t)for(var a=0;a<t.length;a++)if(t[a].id===r)return t[a];var n=e.tables;if(n)for(a=0;a<n.length;a++)if(n[a].id===r)return n[a];return null}(a,t.layerId))&&(1===y(a)&&(n=!1),null!=e.showLegend&&(r.showLegend=e.showLegend))),n&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),r}return e}))}function y(e){var r,t,a,n;return(null!==(t=null===(r=null==e?void 0:e.layers)||void 0===r?void 0:r.length)&&void 0!==t?t:0)+(null!==(n=null===(a=null==e?void 0:e.tables)||void 0===a?void 0:a.length)&&void 0!==n?n:0)}Object.defineProperty(r,"__esModule",{value:!0}),r.load=void 0,r.load=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var a;return t.__generator(this,(function(t){switch(t.label){case 0:return(a=e.instance.portalItem)&&a.id?[4,a.load(r)]:[2,o.resolve()];case 1:return t.sent(),function(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new n("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}(e),[2,d(e,r)]}}))}))}}).apply(null,a))||(e.exports=n)}}]);