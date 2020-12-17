(function(){var e={"esri/layers/support/arcgisLayers":"KY+9"},r=this||window,n=r.webpackJsonp=r.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{"KY+9":function(e,r,n){var t,a;t=[n.dj.c(e.i),r,n("zOht"),n("zp6E"),n("KY0m"),n("ma1f"),n("LxLY"),n("8CIp"),n("FayN"),n("2Kdy")],void 0===(a=(function(e,r,t,a,s,i,l,u,o){"use strict";function c(e,r){return e?s.find(e,(function(e){return e.id===r})):null}function d(e){var r,n;return t.__awaiter(this,void 0,void 0,(function(){var a,s,l,o,c,d,f,v,p,I,_;return t.__generator(this,(function(w){switch(w.label){case 0:if(!(a=u.parse(e)))throw new i("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});switch(l=a.sublayer,c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},s=a.serverType){case"MapServer":o=null!=l?"FeatureLayer":function(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){switch(r.label){case 0:return[4,h(e)];case 1:return[2,r.sent().tileInfo]}}))}))}(e).then((function(e){return e?"TileLayer":"MapImageLayer"}));break;case"ImageServer":o=h(e).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"ImageryTileLayer":"ImageryLayer"}));break;case"SceneServer":o=h(a.url.path).then((function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var n=e.layers[0].layerType;if(null!=r[n])return r[n]}return"SceneLayer"}));break;default:o=c[s]}return d={FeatureLayer:!0,SceneLayer:!0},v={parsedUrl:a,Constructor:null,layerOrTableId:(f="FeatureServer"===s)?l:null,sublayerIds:null,tableIds:null},[4,o];case 1:return p=w.sent(),d[p]&&null==l?[4,y(e,s)]:[3,3];case 2:I=w.sent(),f&&(v.sublayerInfos=I.layerInfos,v.tableInfos=I.tableInfos),1!==I.layerIds.length+I.tableIds.length?(v.sublayerIds=I.layerIds,v.tableIds=I.tableIds):f&&(v.layerOrTableId=null!==(r=I.layerIds[0])&&void 0!==r?r:I.tableIds[0],v.sourceJSON=null!==(n=I.layerInfos[0])&&void 0!==n?n:I.tableInfos[0]),w.label=3;case 3:return _=v,[4,b(p)];case 4:return _.Constructor=w.sent(),[2,v]}}))}))}function y(e,r){return t.__awaiter(this,void 0,void 0,(function(){var n,a,s,i,l;return t.__generator(this,(function(t){switch(t.label){case 0:return a=!1,"FeatureServer"!==r?[3,2]:[4,v(e)];case 1:return s=t.sent(),a=!!s.layersJSON,n=s.layersJSON||s.serviceJSON,[3,4];case 2:return[4,h(e)];case 3:n=t.sent(),t.label=4;case 4:return l=null==n?void 0:n.tables,[2,{layerIds:(null==(i=null==n?void 0:n.layers)?void 0:i.map((function(e){return e.id})).reverse())||[],tableIds:(null==l?void 0:l.map((function(e){return e.id})).reverse())||[],layerInfos:a?i:[],tableInfos:a?l:[]}]}}))}))}function f(e){return!e.type||"Feature Layer"===e.type}function v(e){var r,n;return t.__awaiter(this,void 0,void 0,(function(){var a,s,i;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,h(e)];case 1:return(a=(a=t.sent())||{}).layers=(null===(r=a.layers)||void 0===r?void 0:r.filter(f))||[],s={serviceJSON:a},a.currentVersion<10.5?[2,s]:[4,h(e+"/layers")];case 2:return i=t.sent(),s.layersJSON={layers:(null===(n=null==i?void 0:i.layers)||void 0===n?void 0:n.filter(f))||[],tables:(null==i?void 0:i.tables)||[]},[2,s]}}))}))}function b(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){return[2,(0,o.layerLookupMap[e])()]}))}))}function h(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){switch(r.label){case 0:return[4,a(e,{responseType:"json",query:{f:"json"}})];case 1:return[2,r.sent().data]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.fromUrl=void 0,r.fromUrl=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,a,s,i;return t.__generator(this,(function(u){switch(u.label){case 0:return[4,d(e.url)];case 1:return r=u.sent(),a=t.__assign(t.__assign({},e.properties),{url:e.url}),r.sublayerIds?[4,new Promise((function(e,r){n.e(1).then((function(){var r=[n("lAGb")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))]:(null!=r.layerOrTableId&&(a.layerId=r.layerOrTableId,a.sourceJSON=r.sourceJSON),[2,new r.Constructor(a)]);case 2:return s=u.sent(),function(e,r,n){function a(e,a){var s=t.__assign(t.__assign({},n),{layerId:e,sublayerTitleMode:"service-name"});return l.isSome(a)&&(s.sourceJSON=a),new r.Constructor(s)}r.sublayerIds.forEach((function(n){var t=a(n,c(r.sublayerInfos,n));e.add(t)})),r.tableIds.forEach((function(n){var t=a(n,c(r.tableInfos,n));e.tables.add(t)}))}(i=new s({title:r.parsedUrl.title}),r,a),[2,i]}}))}))}}).apply(null,t))||(e.exports=a)}}]);