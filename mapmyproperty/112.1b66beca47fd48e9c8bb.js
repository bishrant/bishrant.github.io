(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/support/arcgisLayers":"KY+9"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{"KY+9":function(e,r,n){var t,a;t=[n.dj.c(e.i),r,n("2Atf"),n("Q2wQ"),n("HZ3d"),n("zp6E"),n("ma1f"),n("8CIp"),n("FayN"),n("2Kdy")],void 0===(a=(function(e,r,t,a,i,s,u,o,c){function l(e){return i(this,void 0,void 0,(function(){var r,n,t,s,c,l,h,p,v,b;return a(this,(function(w){switch(w.label){case 0:if(!(r=o.parse(e)))throw new u("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});switch(t=r.sublayer,c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},n=r.serverType){case"MapServer":s=null!=t?"FeatureLayer":function(e){return i(this,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return[4,d(e)];case 1:return[2,r.sent().tileInfo]}}))}))}(e).then((function(e){return e?"TileLayer":"MapImageLayer"}));break;case"ImageServer":s=d(e).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"}));break;case"SceneServer":s=d(r.url.path).then((function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var n=e.layers[0].layerType;if(null!=r[n])return r[n]}return"SceneLayer"}));break;default:s=c[n]}return l={FeatureLayer:!0,SceneLayer:!0},h={parsedUrl:r,Constructor:null,sublayerIds:null},[4,s];case 1:return p=w.sent(),l[p]&&null==t?[4,y(e)]:[3,3];case 2:1!==(v=w.sent()).length&&(h.sublayerIds=v),w.label=3;case 3:return b=h,[4,f(p)];case 4:return b.Constructor=w.sent(),[2,h]}}))}))}function y(e){return i(this,void 0,void 0,(function(){var r;return a(this,(function(n){switch(n.label){case 0:return[4,d(e)];case 1:return(r=n.sent())&&Array.isArray(r.layers)?[2,r.layers.map((function(e){return e.id})).reverse()]:[2,[]]}}))}))}function f(e){return i(this,void 0,void 0,(function(){return a(this,(function(r){return[2,(0,c.layerLookupMap[e])()]}))}))}function d(e){return i(this,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return[4,s(e,{responseType:"json",query:{f:"json"}})];case 1:return[2,r.sent().data]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.fromUrl=function(e){return i(this,void 0,void 0,(function(){var r,i,s,u;return a(this,(function(a){switch(a.label){case 0:return[4,l(e.url)];case 1:return r=a.sent(),i=t({},e.properties,{url:e.url}),r.sublayerIds?[4,new Promise((function(e,r){Promise.all([n.e(0),n.e(33)]).then((function(){var r=[n("lAGb")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))]:[2,new r.Constructor(i)];case 2:return s=a.sent(),u=new s({title:r.parsedUrl.title}),function(e,r){return e.sublayerIds.map((function(n){return new e.Constructor(t({},r,{layerId:n,sublayerTitleMode:"service-name"}))}))}(r,i).forEach((function(e){return u.add(e)})),[2,u]}}))}))}}).apply(null,t))||(e.exports=a)}}]);