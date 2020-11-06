(function(){var e={"arcgis-js-api/layers/mixins/ArcGISService":"2fnV","esri/layers/mixins/ArcGISService":"2fnV","arcgis-js-api/layers/ElevationLayer":"GAgw","arcgis-js-api/layers/support/LercDecoder":"M/KD","arcgis-js-api/core/LRUCache":"W6K4","esri/core/LRUCache":"W6K4","arcgis-js-api/views/3d/support/WorkerHandle":"ecY5","arcgis-js-api/core/MemCache":"r7jh","esri/core/MemCache":"r7jh"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"2fnV":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("qsST"),r("Vx27"),r("8CIp")],void 0===(o=(function(e,t,r,i,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArcGISService=void 0,t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=n.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",n.sanitizeUrl(e,i.getLogger(this.declaredClass)))},enumerable:!1,configurable:!0}),r.__decorate([o.property({dependsOn:["url"]})],t.prototype,"title",null),r.__decorate([o.property({type:String})],t.prototype,"url",null),r.__decorate([o.subclass("esri.layers.mixins.ArcGISService")],t)}(e)}}).apply(null,i))||(e.exports=o)},GAgw:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("zp6E"),r("7bfM"),r("ma1f"),r("qsST"),r("LxLY"),r("EUqE"),r("qMld"),r("jfWY"),r("Vx27"),r("MFVu"),r("0RER"),r("WhPF"),r("2fnV"),r("FEX1"),r("QJ8R"),r("EtsK"),r("M/KD"),r("2Kdy")],void 0===(o=(function(e,t,i,o,n,s,a,c,u,p,h,l,d,_,f,y,v,m,g,b){"use strict";var S=a.getLogger("esri.layers.ElevationLayer");return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this;return i.copyright=null,i.heightModelInfo=null,i.path=null,i.opacity=1,i.operationalLayerType="ArcGISTiledElevationServiceLayer",i.sourceJSON=null,i.type="elevation",i.url=null,i.version=null,i._lercDecoder=b.acquireInstance(),i}return i.__extends(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?i.__assign({url:e},t):e},t.prototype.destroy=function(){b.releaseInstance(this._lercDecoder),this._lercDecoder=null},Object.defineProperty(t.prototype,"minScale",{get:function(){},set:function(e){this.constructed&&S.warn(this.declaredClass+".minScale support has been removed (since 4.5)")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxScale",{get:function(){},set:function(e){this.constructed&&S.warn(this.declaredClass+".maxScale support has been removed (since 4.5)")},enumerable:!1,configurable:!0}),t.prototype.readVersion=function(e,t){var r=t.currentVersion;return r||(r=9.3),r},t.prototype.load=function(e){var t=this,r=c.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new s("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then((function(){return t._fetchImageService(r)}),(function(){return t._fetchImageService(r)}))),p.resolve(this)},t.prototype.fetchTile=function(e,t,r,i){var s=this;void 0===i&&(i={}),null!=i&&"number"==typeof i&&(n.deprecated(S,"Passing 'noDataValue' directly as a parameter",{replacement:"use { noDataValue } options object instead",version:"4.12"}),i={noDataValue:i});var a={responseType:"array-buffer",signal:i.signal},c={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((function(){return s._fetchTileAvailability(e,t,r,i)})).then((function(){return o(s.getTileUrl(e,t,r),a)})).then((function(e){return s._lercDecoder.decode(e.data,c,i.signal)})).then((function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}}))},t.prototype.getTileUrl=function(e,t,r){var o=!this.tilemapCache&&this.supportsBlankTile,n=h.objectToQuery(i.__assign(i.__assign({},this.parsedUrl.query),{blankTile:!o&&null}));return this.parsedUrl.path+"/tile/"+e+"/"+t+"/"+r+(n?"?"+n:"")},t.prototype.queryElevation=function(e,t){var r=this;return this._importElevationQuery().then((function(i){return(new i.ElevationQuery).query(r,e,t)}))},t.prototype.createElevationSampler=function(e,t){var r=this;return this._importElevationQuery().then((function(i){return(new i.ElevationQuery).createSampler(r,e,t)}))},t.prototype._fetchTileAvailability=function(e,t,r,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,i):p.resolve("unknown")},t.prototype._fetchImageService=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,r;return i.__generator(this,(function(n){switch(n.label){case 0:return this.sourceJSON?[2,this.sourceJSON]:(t={query:i.__assign({f:"json"},this.parsedUrl.query),responseType:"json",signal:e},[4,o(this.parsedUrl.path,t)]);case 1:return(r=n.sent()).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),[2]}}))}))},t.prototype._importElevationQuery=function(){return new Promise((function(e,t){r.e(44).then((function(){var t=[r("T16p")];e.apply(null,t)}).bind(this)).catch(t.bind(this))}))},i.__decorate([l.property({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),i.__decorate([l.property({readOnly:!0,type:d})],t.prototype,"heightModelInfo",void 0),i.__decorate([l.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),i.__decorate([l.property({type:["show","hide"]})],t.prototype,"listMode",void 0),i.__decorate([l.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],t.prototype,"minScale",null),i.__decorate([l.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],t.prototype,"maxScale",null),i.__decorate([l.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"opacity",void 0),i.__decorate([l.property({type:["ArcGISTiledElevationServiceLayer"]})],t.prototype,"operationalLayerType",void 0),i.__decorate([l.property()],t.prototype,"sourceJSON",void 0),i.__decorate([l.property({json:{read:!1},value:"elevation",readOnly:!0})],t.prototype,"type",void 0),i.__decorate([l.property(g.url)],t.prototype,"url",void 0),i.__decorate([l.property()],t.prototype,"version",void 0),i.__decorate([l.reader("version",["currentVersion"])],t.prototype,"readVersion",null),i.__decorate([l.subclass("esri.layers.ElevationLayer")],t)}(f.ArcGISCachedService(y.ArcGISService(v.OperationalLayer(m.PortalLayer(u.MultiOriginJSONMixin(_))))))}).apply(null,i))||(e.exports=o)},"M/KD":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("qMld"),r("ecY5"),r("2Kdy")],void 0===(o=(function(e,t,r,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.releaseInstance=t.acquireInstance=void 0;var n=function(e){function t(t){var r=e.call(this,"LercWorker","_decode",t,{strategy:"dedicated"})||this;return r.scheduler=t,r}return r.__extends(t,e),t.prototype.decode=function(e,t,r){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},r):i.resolve(null)},t.prototype.getTransferList=function(e){return[e.buffer]},t}(o.WorkerHandle),s=new Map;t.acquireInstance=function(e){var t=s.get(e);return t||(t={instance:new n(e),ref:0},s.set(e,t)),++t.ref,t.instance},t.releaseInstance=function(e){if(null!=e){var t=e.scheduler,r=s.get(t);r&&--r.ref<=0&&(r.instance.destroy(),s.delete(t))}}}).apply(null,i))||(e.exports=o)},W6K4:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("r7jh")],void 0===(o=(function(e,t,r){"use strict";return function(){function e(e,t){this._storage=new r.MemCacheStorage,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}return e.prototype.put=function(e,t,r){this._storage.put(e,t,r,1)},e.prototype.pop=function(e){return this._storage.pop(e)},e.prototype.get=function(e){return this._storage.get(e)},e.prototype.clear=function(){this._storage.clearAll()},e.prototype.destroy=function(){this._storage.clearAll()},Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._storage.maxSize},set:function(e){this._storage.maxSize=e},enumerable:!1,configurable:!0}),e}()}).apply(null,i))||(e.exports=o)},ecY5:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("qsST"),r("qMld"),r("8V7H")],void 0===(o=(function(e,t,r,i,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerHandle=void 0;var s=i.getLogger("esri.views.3d.support.WorkerHandle"),a=function(){function e(e,t,i,o){var a=this;void 0===o&&(o={}),this._methodName=t,this._promise=n.open(e,r.__assign(r.__assign({},o),{scheduler:i})).then((function(e){void 0===a._thread?(a._thread=e,a._promise=null):e.close()})),this._promise.catch((function(t){return s.error("Failed to initialize "+e+" worker: "+t)}))}return e.prototype.destroy=function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null},e.prototype.invoke=function(e,t){var r=this;if(void 0===t&&(t=null),this._thread){var i=this.getTransferList(e);return this._thread.invoke(this._methodName,e,{transferList:i,signal:t})}return this._promise?this._promise.then((function(){return o.throwIfAborted(t),r.invoke(e,t)})):o.reject(null)},e.prototype.broadcast=function(e,t){var r=this;return this._thread?o.all(this._thread.broadcast(t,e)).then((function(){})):this._promise?this._promise.then((function(){return r.broadcast(e,t)})):o.reject()},Object.defineProperty(e.prototype,"promise",{get:function(){return this._promise},enumerable:!1,configurable:!0}),e}();t.WorkerHandle=a}).apply(null,i))||(e.exports=o)},r7jh:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("R2Zq"),r("KBgh"),r("nRUF")],void 0===(o=(function(e,t,r,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MemCacheStorage=t.MemCache=t.MIN_PRIORITY=void 0,t.MIN_PRIORITY=-3;var n=function(){function e(e,t,r){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",r&&(this._storage.registerRemoveFunc(this._namespace,r),this._removeFunc=!0)}return Object.defineProperty(e.prototype,"namespace",{get:function(){return this._namespace.slice(0,-1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hitRate",{get:function(){return this._hit/(this._hit+this._miss)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._storage.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._storage.maxSize},enumerable:!1,configurable:!0}),e.prototype.resetHitRate=function(){this._hit=this._miss=0},e.prototype.destroy=function(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)},e.prototype.put=function(e,t,r,i){void 0===i&&(i=0),this._storage.put(this._namespace+e,t,r,i)},e.prototype.get=function(e){var t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t},e.prototype.pop=function(e){var t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t},e.prototype.updateSize=function(e,t,r){this._storage.updateSize(this._namespace+e,t,r)},e.prototype.clear=function(){this._storage.clear(this._namespace)},e.prototype.clearAll=function(){this._storage.clearAll()},e.prototype.getStats=function(){return this._storage.getStats()},e.prototype.resetStats=function(){this._storage.resetStats()},e}();t.MemCache=n;var s=function(){function e(e){void 0===e&&(e=10485760),this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new i}return e.prototype.register=function(e){this._users.push(e)},e.prototype.deregister=function(e){this._users.removeUnordered(e)},e.prototype.registerRemoveFunc=function(e,t){this._removeFuncs.push([e,t])},e.prototype.deregisterRemoveFunc=function(e){this._removeFuncs=this._removeFuncs.filter((function(t){return t[0]!==e}))},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._maxSize},set:function(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()},enumerable:!1,configurable:!0}),e.prototype.put=function(e,r,i,o){var n=this._db.get(e);if(n&&(this._size-=n.size,this._db.delete(e),n.entry!==r&&this._notifyRemoved(e,n.entry)),i>this._maxSize)this._notifyRemoved(e,r);else if(void 0!==r)if(!i||i<0)console.warn("Refusing to cache entry with invalid size "+i);else{var s=1+Math.max(o,t.MIN_PRIORITY)-t.MIN_PRIORITY;this._db.set(e,{entry:r,size:i,lifetime:s,lives:s}),this._size+=i,this._checkSizeLimit()}else console.warn("Refusing to cache undefined entry ")},e.prototype.updateSize=function(e,t,r){var i=this._db.get(e);i&&i.entry===t&&(this._size-=i.size,r>this._maxSize?this._notifyRemoved(e,t):(i.size=r,this._size+=r,this._checkSizeLimit()))},e.prototype.pop=function(e){var t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss},e.prototype.get=function(e){var t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss},e.prototype.getStats=function(){var e=this,r={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},i={},n=new Array;this._db.forEach((function(t,r){var s=t.lifetime;n[s]=(n[s]||0)+t.size,e._users.forEachSimple((function(e){var n=e.namespace;o.startsWith(r,n)&&(i[n]=(i[n]||0)+t.size)}))}));var s={};this._users.forEachSimple((function(e){var t=e.namespace;!isNaN(e.hitRate)&&e.hitRate>0?(i[t]=i[t]||0,s[t]=Math.round(100*e.hitRate)+"%"):s[t]="0%"}));var a=Object.keys(i);a.forEach((function(t){return i[t]=i[t]/e._size*100})),a.sort((function(e,t){return i[t]-i[e]})),a.forEach((function(e){return r[e]=Math.round(i[e])+"% / "+s[e]}));for(var c=n.length-1;c>=0;--c){var u=n[c];u&&(r["Priority "+(c+t.MIN_PRIORITY-1)]=Math.round(u/this.size*100)+"%")}return r},e.prototype.resetStats=function(){this._hit=this._miss=0,this._users.forEachSimple((function(e){return e.resetHitRate()}))},e.prototype.clear=function(e){var t=this;this._db.forEach((function(r,i){o.startsWith(i,e)&&(t._size-=r.size,t._db.delete(i),t._notifyRemoved(i,r.entry))}))},e.prototype.clearAll=function(){var e=this;this._db.forEach((function(t,r){return e._notifyRemoved(r,t.entry)})),this._size=0,this._db.clear()},e.prototype._getHitRate=function(){return this._hit/(this._hit+this._miss)},e.prototype._notifyRemoved=function(e,t){this._removeFuncs.forEach((function(r){o.startsWith(e,r[0])&&r[1](t)}))},e.prototype._checkSizeLimit=function(){var e=this;this._size<=this._maxSize||r.someMap(this._db,(function(t,r){return e._db.delete(r),t.lives<=1?(e._size-=t.size,e._notifyRemoved(r,t.entry)):(--t.lives,e._db.set(r,t)),e._size<=.9*e.maxSize}))},e}();t.MemCacheStorage=s}).apply(null,i))||(e.exports=o)}}]);