(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/arcgisLayers":"KY+9"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{"KY+9":function(e,r,n){var t,a;t=[n.dj.c(e.i),r,n("zOht"),n("zp6E"),n("ma1f"),n("8CIp"),n("FayN"),n("2Kdy")],void 0===(a=(function(e,r,t,a,i,s,u){function o(e){return t.__awaiter(this,void 0,void 0,(function(){var r,n,a,u,o,f,d,h,p,v;return t.__generator(this,(function(_){switch(_.label){case 0:if(!(r=s.parse(e)))throw new i("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});switch(a=r.sublayer,o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},n=r.serverType){case"MapServer":u=null!=a?"FeatureLayer":function(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){switch(r.label){case 0:return[4,y(e)];case 1:return[2,r.sent().tileInfo]}}))}))}(e).then((function(e){return e?"TileLayer":"MapImageLayer"}));break;case"ImageServer":u=y(e).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"ImageryTileLayer":"ImageryLayer"}));break;case"SceneServer":u=y(r.url.path).then((function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var n=e.layers[0].layerType;if(null!=r[n])return r[n]}return"SceneLayer"}));break;default:u=o[n]}return f={FeatureLayer:!0,SceneLayer:!0},d={parsedUrl:r,Constructor:null,sublayerIds:null},[4,u];case 1:return h=_.sent(),f[h]&&null==a?[4,c(e)]:[3,3];case 2:1!==(p=_.sent()).length&&(d.sublayerIds=p),_.label=3;case 3:return v=d,[4,l(h)];case 4:return v.Constructor=_.sent(),[2,d]}}))}))}function c(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(n){switch(n.label){case 0:return[4,y(e)];case 1:return(r=n.sent())&&Array.isArray(r.layers)?[2,r.layers.map((function(e){return e.id})).reverse()]:[2,[]]}}))}))}function l(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){return[2,(0,u.layerLookupMap[e])()]}))}))}function y(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){switch(r.label){case 0:return[4,a(e,{responseType:"json",query:{f:"json"}})];case 1:return[2,r.sent().data]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.fromUrl=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,a,i,s;return t.__generator(this,(function(u){switch(u.label){case 0:return[4,o(e.url)];case 1:return r=u.sent(),a=t.__assign(t.__assign({},e.properties),{url:e.url}),r.sublayerIds?[4,new Promise((function(e,r){n.e(25).then((function(){var r=[n("lAGb")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))]:[2,new r.Constructor(a)];case 2:return i=u.sent(),s=new i({title:r.parsedUrl.title}),function(e,r){return e.sublayerIds.map((function(n){return new e.Constructor(t.__assign(t.__assign({},r),{layerId:n,sublayerTitleMode:"service-name"}))}))}(r,a).forEach((function(e){return s.add(e)})),[2,s]}}))}))}}).apply(null,t))||(e.exports=a)}}]);