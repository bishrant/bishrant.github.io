(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{TPT3:function(e,r,a){"use strict";a.r(r),a.d(r,"fromUrl",function(){return i});var t=a("srIe"),n=a("zlDU"),l=a("4EHJ"),s=a("Lqtk"),o=a("VLTf"),u=a("oLSx");async function i(e){var r;const s=null==(r=e.properties)?void 0:r.customParameters,i=await async function(e,r){let a=Object(o.e)(e);if(Object(t.j)(a)&&(a=await async function(e,r){const a=await f(e,r);let n=null,s=null;const u=a.type;if("Feature Layer"===u||"Table"===u?(n="FeatureServer",s=a.id):"indexedVector"===u?n="VectorTileServer":a.hasOwnProperty("mapName")?n="MapServer":a.hasOwnProperty("bandCount")&&a.hasOwnProperty("pixelSizeX")?n="ImageServer":a.hasOwnProperty("maxRecordCount")&&a.hasOwnProperty("allowGeometryUpdates")?n="FeatureServer":a.hasOwnProperty("streamUrls")&&(n="StreamServer"),!n)return null;const i=null!=s?Object(o.f)(e):null;return{title:Object(t.k)(i)&&a.name||Object(l.k)(e),serverType:n,sublayer:s,url:{path:Object(t.k)(i)?i.serviceUrl:Object(l.J)(e).path}}}(e,r)),Object(t.j)(a))throw new n.a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:s,sublayer:i}=a;let c;const d={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(s){case"MapServer":c=null!=i?"FeatureLayer":async function(e,r){return(await f(e,r)).tileInfo}(e,r).then(e=>e?"TileLayer":"MapImageLayer");break;case"ImageServer":c=f(e,r).then(e=>{const r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":c=f(a.url.path,r).then(e=>{const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){const a=e.layers[0].layerType;if(null!=r[a])return r[a]}return"SceneLayer"});break;default:c=d[s]}const b="FeatureServer"===s,I={parsedUrl:a,Constructor:null,layerOrTableId:b?i:null,sublayerIds:null,tableIds:null},p=await c;if({FeatureLayer:!0,SceneLayer:!0}[p]&&null==i){const a=await y(e,s,r);if(b&&(I.sublayerInfos=a.layerInfos,I.tableInfos=a.tableInfos),1!==a.layerIds.length+a.tableIds.length)I.sublayerIds=a.layerIds,I.tableIds=a.tableIds;else if(b){var v,S;I.layerOrTableId=null!=(v=a.layerIds[0])?v:a.tableIds[0],I.sourceJSON=null!=(S=a.layerInfos[0])?S:a.tableInfos[0]}}return I.Constructor=await async function(e){return(0,u.a[e])()}(p),I}(e.url,s),d={...e.properties,url:e.url};if(!i.sublayerIds)return null!=i.layerOrTableId&&(d.layerId=i.layerOrTableId,d.sourceJSON=i.sourceJSON),new i.Constructor(d);const b=new(0,(await a.e(0).then(a.bind(null,"VPx4"))).default)({title:i.parsedUrl.title});return function(e,r,a){function n(e,n){const l={...a,layerId:e,sublayerTitleMode:"service-name"};return Object(t.k)(n)&&(l.sourceJSON=n),new r.Constructor(l)}r.sublayerIds.forEach(a=>{const t=n(a,c(r.sublayerInfos,a));e.add(t)}),r.tableIds.forEach(a=>{const t=n(a,c(r.tableInfos,a));e.tables.add(t)})}(b,i,d),b}function c(e,r){return e?e.find(e=>e.id===r):null}async function y(e,r,a){var t,n;let l,s=!1;if("FeatureServer"===r){const r=await async function(e,r){var a,t;let n=await f(e,r);n=n||{},n.layers=(null==(a=n.layers)?void 0:a.filter(d))||[];const l={serviceJSON:n};if(n.currentVersion<10.5)return l;const s=await f(e+"/layers",r);return l.layersJSON={layers:(null==s||null==(t=s.layers)?void 0:t.filter(d))||[],tables:(null==s?void 0:s.tables)||[]},l}(e,a);s=!!r.layersJSON,l=r.layersJSON||r.serviceJSON}else l=await f(e,a);const o=null==(t=l)?void 0:t.layers,u=null==(n=l)?void 0:n.tables;return{layerIds:(null==o?void 0:o.map(e=>e.id).reverse())||[],tableIds:(null==u?void 0:u.map(e=>e.id).reverse())||[],layerInfos:s?o:[],tableInfos:s?u:[]}}function d(e){return!e.type||"Feature Layer"===e.type}async function f(e,r){return(await Object(s.default)(e,{responseType:"json",query:{f:"json",...r}})).data}}}]);