(function(){var e={"arcgis-js-api/renderers/support/styleUtils":"PhdM","esri/renderers/support/styleUtils":"PhdM","arcgis-js-api/portal/support/layersCreator":"RDRC","arcgis-js-api/portal/support/featureCollectionUtils":"pOAQ"},r=this||window,a=r.webpackJsonp=r.webpackJsonp||[];a.registerAbsMids?a.registerAbsMids(e):(a.absMidsWaiting=a.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{PhdM:function(e,r,a){var t,i;t=[a.dj.c(e.i),r,a("zOht"),a("WYKK"),a("qMld"),a("V2ZO")],void 0===(i=(function(e,r,a,t,i,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.loadStyleRenderer=void 0,r.loadStyleRenderer=function(e,r,o){return a.__awaiter(this,void 0,void 0,(function(){var y,s,l;return a.__generator(this,(function(a){switch(a.label){case 0:return(y=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin))&&"unique-value"===y.type&&y.styleOrigin?[4,t.result(y.populateFromStyle())]:[3,2];case 1:s=a.sent(),i.throwIfAborted(o),!1===s.ok&&(l=s.error,r&&r.messages&&r.messages.push(new n("renderer:style-reference","Failed to create unique value renderer from style reference: "+l.message,{error:l,context:r})),e.clear("renderer",r.origin)),a.label=2;case 2:return[2]}}))}))}}).apply(null,t))||(e.exports=i)},RDRC:function(e,r,a){var t,i;t=[a.dj.c(e.i),r,a("zOht"),a("y4WC"),a("H1tY"),a("qMld"),a("FayN"),a("QmTF"),a("pOAQ"),a("uLAD"),a("PhdM")],void 0===(i=(function(e,r,a,t,i,n,o,y,s,l,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.populateOperationalLayers=r.createLayer=void 0;var c=i("esri-debug-messages"),L={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},p={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},d={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},S={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},g={ArcGISFeatureLayer:"FeatureLayer"},v={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function f(e,r,t){return a.__awaiter(this,void 0,void 0,(function(){var i;return a.__generator(this,(function(a){switch(a.label){case 0:return(i=new e).read(r,t.context),"group"===i.type&&T(r)?[4,b(i,r,t.context)]:[3,2];case 1:a.sent(),a.label=2;case 2:return[4,u.loadStyleRenderer(i,t.context)];case 3:return a.sent(),[2,i]}}))}))}function M(e,r){return a.__awaiter(this,void 0,void 0,(function(){return a.__generator(this,(function(a){switch(a.label){case 0:return[4,I(e,r)];case 1:return[2,f(a.sent(),e,r)]}}))}))}function I(e,r){return a.__awaiter(this,void 0,void 0,(function(){var t,i,n,u,c,f,M,I;return a.__generator(this,(function(a){switch(a.label){case 0:return i=function(e){var r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=d;break;case"ground":r=p;break;default:r=L}break;default:switch(e.layerContainerType){case"basemap":r=v;break;case"tables":r=g;break;default:r=S}}return r}(t=r.context),!(n=e.layerType||e.type)&&r&&r.defaultLayerType&&(n=r.defaultLayerType),c=(u=i[n])?o.layerLookupMap[u]:o.layerLookupMap.UnknownLayer,f=t&&t.portal,h(e)?e.itemId?[4,(M=new y({id:e.itemId,portal:f})).load()]:[3,3]:[3,4];case 1:return a.sent(),[4,l.selectLayerClassPath(M)];case 2:I=a.sent(),c=o.layerLookupMap[I.className||"UnknownLayer"],a.label=3;case 3:return[3,8];case 4:return"ArcGISFeatureLayer"!==n?[3,8]:[4,s.isMapNotesLayer(e,f)];case 5:return a.sent()?(c=o.layerLookupMap.MapNotesLayer,[3,8]):[3,6];case 6:return[4,s.isRouteLayer(e,f)];case 7:a.sent()?c=o.layerLookupMap.RouteLayer:T(e)&&(c=o.layerLookupMap.GroupLayer),a.label=8;case 8:return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(c=o.layerLookupMap.WMTSLayer),[2,c()]}}))}))}function T(e){if("ArcGISFeatureLayer"!==e.layerType||h(e))return!1;var r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function h(e){return"Feature Collection"===e.type}function w(e,r,i){return a.__awaiter(this,void 0,void 0,(function(){var n,o,y;return a.__generator(this,(function(a){switch(a.label){case 0:return n=new t,o=m(n,Array.isArray(r.layers)?r.layers:[],i),[4,e];case 1:return y=a.sent(),[4,o];case 2:return a.sent(),"group"===y.type?(y.layers.addMany(n),[2,y]):[2,void 0]}}))}))}function b(e,r,t){return a.__awaiter(this,void 0,void 0,(function(){var i,n,y,s;return a.__generator(this,(function(a){switch(a.label){case 0:return[4,(0,o.layerLookupMap.FeatureLayer)()];case 1:return i=a.sent(),y=(n=r.featureCollection).showLegend,s=n.layers.map((function(e){var r=new i;return r.read(e,t),null!=y&&r.read({showLegend:y},t),r})),e.layers.addMany(s),[2]}}))}))}function m(e,r,t){return a.__awaiter(this,void 0,void 0,(function(){var i,o,y,s,l,u,L,p,d;return a.__generator(this,(function(a){switch(a.label){case 0:if(!r)return[2];for(i=[],o=0,y=r;o<y.length;o++)l=M(s=y[o],t),i.push("GroupLayer"===s.layerType?w(l,s,t):l);return[4,n.eachAlways(i)];case 1:for(u=a.sent(),L=0,p=u;L<p.length;L++)d=p[L],c&&d.error?console.error(d.error.toString?d.error.toString():d.error):!d.value||t.filter&&!t.filter(d.value)||e.add(d.value);return[2]}}))}))}r.createLayer=M,r.populateOperationalLayers=function(e,r,t){return a.__awaiter(this,void 0,void 0,(function(){return a.__generator(this,(function(a){return[2,m(e,r,t)]}))}))}}).apply(null,t))||(e.exports=i)},pOAQ:function(e,r,a){var t,i;t=[a.dj.c(e.i),r,a("zOht"),a("QmTF"),a("WYOF")],void 0===(i=(function(e,r,a,t,i){"use strict";function n(e,r,n,o){return a.__awaiter(this,void 0,void 0,(function(){var y;return a.__generator(this,(function(a){switch(a.label){case 0:return e.layerType&&"ArcGISFeatureLayer"===e.layerType?e.url?[2,!1]:e.featureCollectionType&&e.featureCollectionType===n?[2,!0]:e.itemId?[4,(y=new t({id:e.itemId,portal:r})).load()]:[3,2]:[2,!1];case 1:return a.sent(),[2,"Feature Collection"===y.type&&i.hasTypeKeyword(y,o)];case 2:return[2,!1]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.isRouteLayer=r.isMapNotesLayer=void 0,r.isMapNotesLayer=function(e,r){return n(e,r,"notes","Map Notes")},r.isRouteLayer=function(e,r){return n(e,r,"route","Route Layer")}}).apply(null,t))||(e.exports=i)}}]);