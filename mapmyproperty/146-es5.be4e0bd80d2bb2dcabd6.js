!function(){function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function r(r){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?e(Object(a),!0).forEach(function(e){t(r,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r,t,n,a,u,s){try{var o=e[u](s),c=o.value}catch(l){return void t(l)}o.done?r(c):Promise.resolve(c).then(n,a)}function a(e){return function(){var r=this,t=arguments;return new Promise(function(a,u){var s=e.apply(r,t);function o(e){n(s,a,u,o,c,"next",e)}function c(e){n(s,a,u,o,c,"throw",e)}o(void 0)})}}(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{TPT3:function(e,t,n){"use strict";n.r(t),n.d(t,"fromUrl",function(){return p});var u=n("srIe"),s=n("zlDU"),o=n("4EHJ"),c=n("Lqtk"),l=n("VLTf"),i=n("oLSx");function p(e){return f.apply(this,arguments)}function f(){return(f=a(regeneratorRuntime.mark(function e(t){var c,p,f,d,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p=null==(c=t.properties)?void 0:c.customParameters,e.next=3,function(){var e=a(regeneratorRuntime.mark(function e(r,t){var n,c,p,f,y,d,v,m,O,w,I,g;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(l.e)(r),e.t0=Object(u.j)(n),!e.t0){e.next=6;break}return e.next=5,function(){var e=a(regeneratorRuntime.mark(function e(r,t){var n,a,s,c,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(r,t);case 2:if(n=e.sent,a=null,s=null,"Feature Layer"===(c=n.type)||"Table"===c?(a="FeatureServer",s=n.id):"indexedVector"===c?a="VectorTileServer":n.hasOwnProperty("mapName")?a="MapServer":n.hasOwnProperty("bandCount")&&n.hasOwnProperty("pixelSizeX")?a="ImageServer":n.hasOwnProperty("maxRecordCount")&&n.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":n.hasOwnProperty("streamUrls")&&(a="StreamServer"),a){e.next=7;break}return e.abrupt("return",null);case 7:return i=null!=s?Object(l.f)(r):null,e.abrupt("return",{title:Object(u.k)(i)&&n.name||Object(o.k)(r),serverType:a,sublayer:s,url:{path:Object(u.k)(i)?i.serviceUrl:Object(o.J)(r).path}});case 9:case"end":return e.stop()}},e)}));return function(r,t){return e.apply(this,arguments)}}()(r,t);case 5:n=e.sent;case 6:if(!Object(u.j)(n)){e.next=8;break}throw new s.a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 8:p=(c=n).serverType,f=c.sublayer,d={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},e.t1=p,e.next="MapServer"===e.t1?13:"ImageServer"===e.t1?15:"SceneServer"===e.t1?17:19;break;case 13:return y=null!=f?"FeatureLayer":function(){var e=a(regeneratorRuntime.mark(function e(r,t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(r,t);case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}},e)}));return function(r,t){return e.apply(this,arguments)}}()(r,t).then(function(e){return e?"TileLayer":"MapImageLayer"}),e.abrupt("break",20);case 15:return y=h(r,t).then(function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}),e.abrupt("break",20);case 17:return y=h(n.url.path,t).then(function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var t=e.layers[0].layerType;if(null!=r[t])return r[t]}return"SceneLayer"}),e.abrupt("break",20);case 19:y=d[p];case 20:return m={parsedUrl:n,Constructor:null,layerOrTableId:(v="FeatureServer"===p)?f:null,sublayerIds:null,tableIds:null},e.next=24,y;case 24:if(!{FeatureLayer:!0,SceneLayer:!0}[O=e.sent]||null!=f){e.next=30;break}return e.next=28,b(r,p,t);case 28:w=e.sent,v&&(m.sublayerInfos=w.layerInfos,m.tableInfos=w.tableInfos),1!==w.layerIds.length+w.tableIds.length?(m.sublayerIds=w.layerIds,m.tableIds=w.tableIds):v&&(m.layerOrTableId=null!=(I=w.layerIds[0])?I:w.tableIds[0],m.sourceJSON=null!=(g=w.layerInfos[0])?g:w.tableInfos[0]);case 30:return e.next=32,function(){var e=a(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.a[r])());case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()(O);case 32:return m.Constructor=e.sent,e.abrupt("return",m);case 34:case"end":return e.stop()}},e)}));return function(r,t){return e.apply(this,arguments)}}()(t.url,p);case 3:if(f=e.sent,d=r(r({},t.properties),{},{url:t.url}),f.sublayerIds){e.next=7;break}return e.abrupt("return",(null!=f.layerOrTableId&&(d.layerId=f.layerOrTableId,d.sourceJSON=f.sourceJSON),new f.Constructor(d)));case 7:return e.next=10,n.e(0).then(n.bind(null,"VPx4"));case 10:return e.t0=e.sent.default,e.t1={title:f.parsedUrl.title},v=new e.t0(e.t1),e.abrupt("return",(function(e,t,n){function a(e,a){var s=r(r({},n),{},{layerId:e,sublayerTitleMode:"service-name"});return Object(u.k)(a)&&(s.sourceJSON=a),new t.Constructor(s)}t.sublayerIds.forEach(function(r){var n=a(r,y(t.sublayerInfos,r));e.add(n)}),t.tableIds.forEach(function(r){var n=a(r,y(t.tableInfos,r));e.tables.add(n)})}(v,f,d),v));case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(e,r){return e?e.find(function(e){return e.id===r}):null}function b(e,r,t){return d.apply(this,arguments)}function d(){return(d=a(regeneratorRuntime.mark(function e(r,t,n){var u,s,o,c,l,i,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=!1,"FeatureServer"!==t){e.next=8;break}return e.next=4,function(){var e=a(regeneratorRuntime.mark(function e(r,t){var n,a,u,s,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(r,t);case 2:if((u=(u=e.sent)||{}).layers=(null==(n=u.layers)?void 0:n.filter(v))||[],s={serviceJSON:u},!(u.currentVersion<10.5)){e.next=7;break}return e.abrupt("return",s);case 7:return e.next=9,h(r+"/layers",t);case 9:return o=e.sent,e.abrupt("return",(s.layersJSON={layers:(null==o||null==(a=o.layers)?void 0:a.filter(v))||[],tables:(null==o?void 0:o.tables)||[]},s));case 11:case"end":return e.stop()}},e)}));return function(r,t){return e.apply(this,arguments)}}()(r,n);case 4:l=e.sent,c=!!l.layersJSON,o=l.layersJSON||l.serviceJSON,e.next=11;break;case 8:return e.next=10,h(r,n);case 10:o=e.sent;case 11:return i=null==(u=o)?void 0:u.layers,p=null==(s=o)?void 0:s.tables,e.abrupt("return",{layerIds:(null==i?void 0:i.map(function(e){return e.id}).reverse())||[],tableIds:(null==p?void 0:p.map(function(e){return e.id}).reverse())||[],layerInfos:c?i:[],tableInfos:c?p:[]});case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(e){return!e.type||"Feature Layer"===e.type}function h(e,r){return m.apply(this,arguments)}function m(){return(m=a(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.default)(t,{responseType:"json",query:r({f:"json"},n)});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}}}])}();