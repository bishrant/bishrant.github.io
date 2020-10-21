(function(){var e={"arcgis-js-api/portal/support/layersLoader":"6hwa","arcgis-js-api/renderers/support/styleUtils":"PhdM"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{"6hwa":function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("ma1f"),t("qMld"),t("FayN"),t("Qwus"),t("OECU"),t("PhdM")],void 0===(a=(function(e,r,t,n,a,i,o,l,u,s){"use strict";function d(e,r){return t.__awaiter(this,void 0,void 0,(function(){var n,a,i,o,l,d;return t.__generator(this,(function(t){switch(t.label){case 0:return i=(a=(n=e.instance).portalItem).url,o=a.title,l=u.createForItem(a),"group"===n.type?(n.read({title:o},l),[2,p(n,e)]):(i&&n.read({url:i},l),[4,f(e,r)]);case 1:return(d=t.sent())&&n.read(d,l),n.resourceReferences={portalItem:a,paths:l.readResourcePaths},n.read({title:o},l),[2,s.loadStyleRenderer(n,l)]}}))}))}function p(e,r){var t,l,u=e.portalItem.type;switch(u){case"Feature Service":t=o.layerLookupMap.FeatureLayer;break;case"Stream Service":t=o.layerLookupMap.StreamLayer;break;case"Scene Service":t=o.layerLookupMap.SceneLayer;break;case"Feature Collection":t=o.layerLookupMap.FeatureLayer;break;default:throw new a("portal:unsupported-item-type-as-group","The item type '"+u+"' is not supported as a 'GroupLayer'")}return t().then((function(e){return l=e,f(r)})).then((function(r){return y(r)>0?c(e,l,r):function(e,r){return e.portalItem.url?n(e.portalItem.url,{responseType:"json",query:{f:"json"}}).then((function(t){var n,a,i=t.data;function o(e){return{id:e.id,name:e.name}}i&&c(e,r,{layers:null===(n=i.layers)||void 0===n?void 0:n.map(o),tables:null===(a=i.tables)||void 0===a?void 0:a.map(o)})})):i.resolve()}(e,l)}))}function c(e,r,t){var n=t.layers||[],a=t.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((function(e){var r;"Table"===(null===(r=null==e?void 0:e.layerDefinition)||void 0===r?void 0:r.type)&&a.push(e)})),n=n.filter((function(e){var r;return"Table"!==(null===(r=null==e?void 0:e.layerDefinition)||void 0===r?void 0:r.type)}))),n.reverse().forEach((function(n){var a=v(e,r,t,n);e.add(a)})),a.reverse().forEach((function(n){var a=v(e,r,t,n);e.tables.add(a)}))}function v(e,r,t,n){var a=new r({portalItem:e.portalItem,layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var i={origin:"portal-item",portal:e.portalItem.portal||l.getDefault()};a.read(n,i);var o=t.showLegend;null!=o&&a.read({showLegend:o},i)}return a}function f(e,r){if(!1===e.supportsData)return i.resolve();var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then((function(e){var r,n=e;if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){var a=!0;return e&&y(n)>0&&(null==t.layerId&&(t.layerId=function(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}(n)),(r=function(e,r){var t=e.layers;if(t)for(var n=0;n<t.length;n++)if(t[n].id===r)return t[n];var a=e.tables;if(a)for(n=0;n<a.length;n++)if(a[n].id===r)return a[n];return null}(n,t.layerId))&&(1===y(n)&&(a=!1),null!=e.showLegend&&(r.showLegend=e.showLegend))),a&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),r}return e}))}function y(e){var r,t,n,a;return(null!==(t=null===(r=null==e?void 0:e.layers)||void 0===r?void 0:r.length)&&void 0!==t?t:0)+(null!==(a=null===(n=null==e?void 0:e.tables)||void 0===n?void 0:n.length)&&void 0!==a?a:0)}Object.defineProperty(r,"__esModule",{value:!0}),r.load=void 0,r.load=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var n;return t.__generator(this,(function(t){switch(t.label){case 0:return(n=e.instance.portalItem)&&n.id?[4,n.load(r)]:[2,i.resolve()];case 1:return t.sent(),function(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}(e),[2,d(e,r)]}}))}))}}).apply(null,n))||(e.exports=a)},PhdM:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t("zOht"),t("WYKK"),t("qMld"),t("V2ZO")],void 0===(a=(function(e,r,t,n,a,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.loadStyleRenderer=void 0,r.loadStyleRenderer=function(e,r,o){return t.__awaiter(this,void 0,void 0,(function(){var l,u,s;return t.__generator(this,(function(t){switch(t.label){case 0:return(l=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin))&&"unique-value"===l.type&&l.styleOrigin?[4,n.result(l.populateFromStyle())]:[3,2];case 1:u=t.sent(),a.throwIfAborted(o),!1===u.ok&&(s=u.error,r&&r.messages&&r.messages.push(new i("renderer:style-reference","Failed to create unique value renderer from style reference: "+s.message,{error:s,context:r})),e.clear("renderer",r.origin)),t.label=2;case 2:return[2]}}))}))}}).apply(null,n))||(e.exports=a)}}]);