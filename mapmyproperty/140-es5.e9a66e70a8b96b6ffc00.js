!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?e(Object(a),!0).forEach(function(e){r(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var a=l(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{JlDE:function(e,r,c){"use strict";c.r(r);var l=c("pO5D"),s=(c("wSAH"),c("srIe")),u=(c("6S2I"),c("WbKI")),p=c("Gj5k"),f=c("r88o"),b=c("04ZG"),y=c("Cduq"),d=c("zlDU"),O=c("4EHJ"),v=(c("ju1D"),c("9AIY"),c("WZb1")),h=(c("4GrV"),c("Lqtk")),j=c("pqNC"),g=c("5pQd"),_=c("VLTf"),m=c("IvSi"),w=c("uRH/"),S=c("PVlI"),k=c("mXvl"),P=c("iyhF"),T=c("DbUH"),R=c("jhcG"),D=c("WmKv"),W=c("kJYu"),I=c("tIWS"),U=c("MD9Z"),A=c("6dDx"),J=c("1Ana"),L=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(p,e);var r,c,l,u=i(p);function p(){var e;n(this,p);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=u.call.apply(u,[this].concat(r))).listMode="show",e.isReference=null,e.operationalLayerType="ArcGISTiledMapServiceLayer",e.resampling=!0,e.sourceJSON=null,e.spatialReference=null,e.path=null,e.sublayers=null,e.type="tile",e.url=null,e}return r=p,(c=[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?t({url:e},r):e}},{key:"load",value:function(e){var t=this,r=Object(s.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then(function(){return t._fetchService(r)},function(){return t._fetchService(r)})),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e,t=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return t&&this._getDefaultAttribution(this._getMapName(t))}},{key:"readSpatialReference",value:function(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&v.a.fromJSON(e)}},{key:"writeSublayers",value:function(e,r,n,a){if(this.loaded&&e){var o=e.slice().reverse().flatten(function(e){var t=e.sublayers;return t&&t.toArray().reverse()}).toArray(),i=[],c=t({writeSublayerStructure:!1},a);o.forEach(function(e){var t=e.write({},c);i.push(t)}),i.some(function(e){return Object.keys(e).length>1})&&(r.layers=i)}}},{key:"tileServers",get:function(){return this._getDefaultTileServers(this.parsedUrl.path)}},{key:"castTileServers",value:function(e){return Array.isArray(e)?e.map(function(e){return Object(O.J)(e).path}):null}},{key:"fetchTile",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=n.signal,o=n.timestamp,i=this.getTileUrl(e,t,r),c={responseType:"image",signal:a};return null!=o&&(c.query={_ts:n.timestamp}),Object(h.default)(i,c).then(function(e){return e.data})}},{key:"getTileUrl",value:function(e,r,n){var a=!this.tilemapCache&&this.supportsBlankTile,o=Object(O.D)(t(t({},this.parsedUrl.query),{},{blankTile:!a&&null},this.customParameters)),i=this.tileServers;return"".concat(i&&i.length?i[r%i.length]:this.parsedUrl.path,"/tile/").concat(e,"/").concat(r,"/").concat(n).concat(o?"?"+o:"")}},{key:"_fetchService",value:function(e){var r=this;return new Promise(function(n,a){if(r.sourceJSON){if(null!=r.sourceJSON.bandCount&&null!=r.sourceJSON.pixelSizeX)throw new d.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");n({data:r.sourceJSON})}else{if(!r.parsedUrl)throw new d.a("tile-layer:undefined-url","layer's url is not defined");var o=Object(_.e)(r.parsedUrl.path);if(Object(s.k)(o)&&"ImageServer"===o.serverType)throw new d.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");Object(h.default)(r.parsedUrl.path,{query:t(t({f:"json"},r.parsedUrl.query),r.customParameters),responseType:"json",signal:e}).then(n,a)}}).then(function(t){if(t.ssl&&(r.url=r.url.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!Object(_.c)(r.url))return r._fetchServerVersion(r.url,e).then(function(e){r.read({currentVersion:e})}).catch(function(){})})}},{key:"_fetchServerVersion",value:function(e,r){if(!Object(_.b)(e))return Promise.reject();var n=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return Object(h.default)(n,{query:t({f:"json"},this.customParameters),responseType:"json",signal:r}).then(function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new d.a("tile-layer:version-not-available")})}},{key:"_getMapName",value:function(e){var t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}},{key:"_getDefaultAttribution",value:function(e){if(e){var t;e=e.toLowerCase();for(var r=0,n=L.length;r<n;r++)if((t=L[r]).toLowerCase().indexOf(e)>-1)return Object(O.z)("//static.arcgis.com/attribution/"+t)}}},{key:"_getDefaultTileServers",value:function(e){var t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),r=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||r?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}}])&&a(r.prototype,c),l&&a(r,l),p}(Object(k.a)(Object(J.a)(Object(D.a)(Object(R.a)(Object(w.a)(Object(T.a)(Object(I.a)(Object(U.a)(Object(S.a)(Object(g.a)(Object(W.b)(Object(P.a)(j.a)))))))))))));Object(l.a)([Object(u.b)({readOnly:!0})],C.prototype,"attributionDataUrl",null),Object(l.a)([Object(u.b)({type:["show","hide","hide-children"]})],C.prototype,"listMode",void 0),Object(l.a)([Object(u.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],C.prototype,"isReference",void 0),Object(l.a)([Object(u.b)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],C.prototype,"operationalLayerType",void 0),Object(l.a)([Object(u.b)({type:Boolean})],C.prototype,"resampling",void 0),Object(l.a)([Object(u.b)()],C.prototype,"sourceJSON",void 0),Object(l.a)([Object(u.b)({type:v.a})],C.prototype,"spatialReference",void 0),Object(l.a)([Object(f.a)("spatialReference",["spatialReference","tileInfo"])],C.prototype,"readSpatialReference",null),Object(l.a)([Object(u.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],C.prototype,"path",void 0),Object(l.a)([Object(u.b)({readOnly:!0})],C.prototype,"sublayers",void 0),Object(l.a)([Object(y.a)("sublayers",{layers:{type:[A.a]}})],C.prototype,"writeSublayers",null),Object(l.a)([Object(u.b)({json:{read:!1,write:!1}})],C.prototype,"popupEnabled",void 0),Object(l.a)([Object(u.b)()],C.prototype,"tileServers",null),Object(l.a)([Object(p.a)("tileServers")],C.prototype,"castTileServers",null),Object(l.a)([Object(u.b)({readOnly:!0,json:{read:!1}})],C.prototype,"type",void 0),Object(l.a)([Object(u.b)(m.n)],C.prototype,"url",void 0),C=Object(l.a)([Object(b.a)("esri.layers.TileLayer")],C),r.default=C}}])}();