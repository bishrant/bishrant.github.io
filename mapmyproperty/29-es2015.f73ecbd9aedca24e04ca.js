(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"5Q/x":function(e,a,r){"use strict";r.r(a),r.d(a,"populateOperationalLayers",function(){return u}),r("wSAH");var t=r("9MzC"),y=r("LE9a"),i=r("p+Gi"),n=r("YOx9"),L=r("oLSx"),c=r("Dfpg");async function o(e,a,r,t){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===r)return!0;if(e.itemId){const r=new i.default({id:e.itemId,portal:a});return await r.load(),"Feature Collection"===r.type&&Object(c.a)(r,t)}return!1}var l=r("XJLX");async function u(e,a,r){if(!a)return;const y=[];for(const t of a){const e=f(t,r);y.push("GroupLayer"===t.layerType?G(e,t,r):e)}const i=await Object(t.j)(y);for(const t of i)!t.value||r.filter&&!r.filter(t.value)||e.add(t.value)}const p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},S={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},d={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},I={ArcGISFeatureLayer:"FeatureLayer"},T={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function f(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&g(a)&&await async function(e,a,r){const t=L.a.FeatureLayer,y=await t(),i=a.featureCollection,n=i.showLegend,c=i.layers.map(e=>{const a=new y;return a.read(e,r),null!=n&&a.read({showLegend:n},r),a});e.layers.addMany(c)}(t,a,r.context),await Object(n.a)(t,r.context),t}(await async function(e,a){const r=a.context,t=function(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=S;break;case"ground":a=s;break;default:a=p}break;default:switch(e.layerContainerType){case"basemap":a=T;break;case"tables":a=I;break;default:a=d}}return a}(r);let y=e.layerType||e.type;!y&&a&&a.defaultLayerType&&(y=a.defaultLayerType);const n=t[y];let c=n?L.a[n]:L.a.UnknownLayer;const u=r&&r.portal;if(M(e)){if(e.itemId){const a=new i.default({id:e.itemId,portal:u});await a.load();const r=(await Object(l.selectLayerClassPath)(a)).className||"UnknownLayer";c=L.a[r]}}else"ArcGISFeatureLayer"===y&&(await function(e,a){return o(e,a,"notes","Map Notes")}(e,u)?c=L.a.MapNotesLayer:await function(e,a){return o(e,a,"route","Route Layer")}(e,u)?c=L.a.RouteLayer:g(e)&&(c=L.a.GroupLayer));return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(c=L.a.WMTSLayer),c()}(e,a),e,a)}function g(e){if("ArcGISFeatureLayer"!==e.layerType||M(e))return!1;const a=e.featureCollection;return!!(a&&a.layers&&a.layers.length>1)}function M(e){return"Feature Collection"===e.type}async function G(e,a,r){const t=new y.a,i=u(t,Array.isArray(a.layers)?a.layers:[],r),n=await e;if(await i,"group"===n.type)return n.layers.addMany(t),n}}}]);