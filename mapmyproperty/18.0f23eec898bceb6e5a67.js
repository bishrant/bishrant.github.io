(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/mixins/ArcGISService":"2fnV","esri/layers/support/TilemapCache":"Cobz","esri/layers/ElevationLayer":"GAgw","esri/layers/mixins/PortalLayer":"QJ8R","esri/layers/support/LercWorker":"S+mV","esri/layers/mixins/ArcGISCachedService":"WhPF","esri/layers/support/serviceTileInfoProperty":"ddAr","esri/layers/support/Tilemap":"xojL"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[18,33,37,84,112,114],{"2fnV":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("qsST"),r("Vx27"),r("8CIp")],void 0===(n=(function(e,t,r,i,n,a,o){Object.defineProperty(t,"__esModule",{value:!0}),t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=o.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",o.sanitizeUrl(e,n.getLogger(this.declaredClass)))},enumerable:!0,configurable:!0}),i([a.property({dependsOn:["url"]})],t.prototype,"title",null),i([a.property({type:String})],t.prototype,"url",null),i([a.subclass("esri.layers.mixins.ArcGISService")],t)}(a.declared(e))}}).apply(null,i))||(e.exports=n)},Cobz:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("zp6E"),r("Gtr7"),r("ma1f"),r("eIBl"),r("qsST"),r("W6K4"),r("KBgh"),r("qMld"),r("afW+"),r("jfWY"),r("8MXS"),r("Vx27"),r("xojL")],void 0===(n=(function(e,t,r,i,n,a,o,l,s,p,u,c,h,f,d,y,v,m,b,g){Object.defineProperty(t,"__esModule",{value:!0}),t.TILEMAP_SIZE_EXP=5;var w=c.getLogger("esri.layers.support.TilemapCache"),_=function(e){function s(t){var r=e.call(this,t)||this;return r._handles=new u,r._pendingTilemapRequests={},r._availableLevels={},r.levels=5,r.cacheByteSize=2097152,r.request=l,r._prefetchingEnabled=!0,r}var c;return i(s,e),c=s,s.prototype.initialize=function(){var e=this;this._tilemapCache=new h(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],(function(){return e._initializeTilemapDefinition()})),m.init(this,"layer.tileInfo.lods",(function(t){return e._initializeAvailableLevels(t)}),!0)]),this._initializeTilemapDefinition()},s.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},s.prototype.castLevels=function(e){return e<=2?(w.error("Minimum levels for Tilemap is 3, but got ",e),3):e},Object.defineProperty(s.prototype,"size",{get:function(){return 1<<this.levels},enumerable:!0,configurable:!0}),s.prototype.fetchTilemap=function(e,t,i,n){var a=this;if(!this._availableLevels[e])return d.reject(new p("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"));var o=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,i,o);if(l)return d.resolve(l);var s=n&&n.signal;return n=r({},n,{signal:null}),d.create((function(e,t){d.onAbort(s,(function(){return t(d.createAbortError())}));var r=g.tilemapDefinitionId(o),i=a._pendingTilemapRequests[r];if(!i){i=g.Tilemap.fromDefinition(o,n).then((function(e){return a._tilemapCache.put(r,e,e.byteSize),e}));var l=function(){return delete a._pendingTilemapRequests[r]};a._pendingTilemapRequests[r]=i,i.then(l,l)}i.then(e,t)}))},s.prototype.getAvailability=function(e,t,r){if(!this._availableLevels[e])return"unavailable";var i=this._tilemapFromCache(e,t,r,this._tmpTilemapDefinition);return i?i.getAvailability(t,r):"unknown"},s.prototype.getAvailabilityUpsample=function(e,t,r,i){i.level=e,i.row=t,i.col=r;var n=this.layer.tileInfo;for(n.updateTileInfo(i);;){var a=this.getAvailability(i.level,i.row,i.col);if("unavailable"!==a)return a;if(!n.upsampleTile(i))return"unavailable"}},s.prototype.fetchAvailability=function(e,t,r,i){return this._availableLevels[e]?this.fetchTilemap(e,t,r,i).catch((function(e){return e})).then((function(i){if(i instanceof g.Tilemap){var n=i.getAvailability(t,r);return"unavailable"===n?d.reject(new p("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:r})):n}if(d.isAbortError(i))throw i;return"unknown"})):d.reject(new p("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"))},s.prototype.fetchAvailabilityUpsample=function(e,t,r,i,n){var a=this;i.level=e,i.row=t,i.col=r;var o=this.layer.tileInfo;o.updateTileInfo(i);var l=this.fetchAvailability(e,t,r,n).catch((function(e){if(d.isAbortError(e))throw e;if(o.upsampleTile(i))return a.fetchAvailabilityUpsample(i.level,i.row,i.col,i);throw e}));return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,r,n,l),l},s.prototype._fetchAvailabilityUpsamplePrefetch=function(e,t,i,n,l,s){return o(this,void 0,void 0,(function(){var o,p,u,h,f,v,m,b,g;return a(this,(function(a){switch(a.label){case 0:if(!this._prefetchingEnabled)return[2];if(this._handles.has(o="prefetch-"+e))return[2];p=d.createAbortController(),s.then((function(){return p.abort()}),(function(){return p.abort()})),u=!1,this._handles.add({remove:function(){u||(u=!0,p.abort())}},o),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,y.waitTicks(10,p.signal)];case 2:case 3:return a.sent(),[3,4];case 4:if(u||(u=!0,this._handles.remove(o)),d.isAborted(p))return[2];for(h={id:e,level:t,row:i,col:n},f=r({},l,{signal:p.signal}),v=this.layer.tileInfo,m=function(e){var t=b.fetchAvailability(h.level,h.row,h.col,f);c._prefetches.push(t);var r=function(){c._prefetches.removeUnordered(t)};t.then(r,r)},b=this,g=0;c._prefetches.length<c._maxPrefetch&&v.upsampleTile(h);++g)m();return[2]}}))}))},s.prototype._initializeTilemapDefinition=function(){if(this.layer.parsedUrl){var e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?v.objectToQuery(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}},s.prototype._tilemapFromCache=function(e,t,r,i){var n=this._getTilemapDefinition(e,t,r,i),a=g.tilemapDefinitionId(n);return this._tilemapCache.get(a)},s.prototype._getTilemapDefinition=function(e,r,i,n){n.level=e;var a=e>t.TILEMAP_SIZE_EXP;return n.row=a?r-r%this.size:r,n.col=a?i-i%this.size:i,n},s.prototype._initializeAvailableLevels=function(e){var t=this;this._availableLevels={},e&&e.forEach((function(e){return t._availableLevels[e.level]=!0}))},Object.defineProperty(s.prototype,"test",{get:function(){var e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:function(t,r,i){return!!e._tilemapFromCache(t,r,i,e._tmpTilemapDefinition)}}},enumerable:!0,configurable:!0}),s._maxPrefetch=4,s._prefetches=new f({initialSize:c._maxPrefetch}),n([b.property({constructOnly:!0,type:Number})],s.prototype,"levels",void 0),n([b.cast("levels")],s.prototype,"castLevels",null),n([b.property({readOnly:!0,dependsOn:["levels"],type:Number})],s.prototype,"size",null),n([b.property({constructOnly:!0,type:Number})],s.prototype,"cacheByteSize",void 0),n([b.property({constructOnly:!0})],s.prototype,"layer",void 0),n([b.property({constructOnly:!0})],s.prototype,"request",void 0),c=n([b.subclass("esri.layers.support.TilemapCache")],s)}(b.declared(s));t.TilemapCache=_}).apply(null,i))||(e.exports=n)},GAgw:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("zp6E"),r("7bfM"),r("ma1f"),r("qsST"),r("LxLY"),r("EUqE"),r("qMld"),r("jfWY"),r("Vx27"),r("MFVu"),r("0RER"),r("WhPF"),r("2fnV"),r("FEX1"),r("QJ8R"),r("EtsK"),r("S+mV")],void 0===(n=(function(e,t,i,n,a,o,l,s,p,u,c,h,f,d,y,v,m,b,g,w,_,S,T,I){var A=c.getLogger("esri.layers.ElevationLayer");return function(e){function t(t){var r=e.call(this,t)||this;return r.copyright=null,r.heightModelInfo=null,r.path=null,r.opacity=1,r.operationalLayerType="ArcGISTiledElevationServiceLayer",r.sourceJSON=null,r.type="elevation",r.url=null,r.version=null,r._lercWorker=I.acquireInstance(),r}return n(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?i({url:e},t):e},t.prototype.destroy=function(){I.releaseInstance(this._lercWorker),this._lercWorker=null},Object.defineProperty(t.prototype,"minScale",{get:function(){},set:function(e){this.constructed&&A.warn(this.declaredClass+".minScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxScale",{get:function(){},set:function(e){this.constructed&&A.warn(this.declaredClass+".maxScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0}),t.prototype.readVersion=function(e,t){var r=t.currentVersion;return r||(r=9.3),r},t.prototype.load=function(e){var t=this,r=h.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new u("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then((function(){return t._fetchImageService(r)}),(function(){return t._fetchImageService(r)}))),d.resolve(this)},t.prototype.fetchTile=function(e,t,r,i){var n=this;void 0===i&&(i={}),null!=i&&"number"==typeof i&&(p.deprecated(A,"Passing 'noDataValue' directly as a parameter",{replacement:"use { noDataValue } options object instead",version:"4.12"}),i={noDataValue:i});var a={responseType:"array-buffer",signal:i.signal},o={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((function(){return n._fetchTileAvailability(e,t,r,i)})).then((function(){return s(n.getTileUrl(e,t,r),a)})).then((function(e){return n._lercWorker.decode(e.data,o,i.signal)})).then((function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}}))},t.prototype.getTileUrl=function(e,t,r){var n=y.objectToQuery(i({},this.parsedUrl.query,{blankTile:!(!this.tilemapCache&&this.supportsBlankTile)&&null}));return this.parsedUrl.path+"/tile/"+e+"/"+t+"/"+r+(n?"?"+n:"")},t.prototype.queryElevation=function(e,t){var r=this;return this._importElevationQuery().then((function(i){return(new i.ElevationQuery).query(r,e,t)}))},t.prototype.createElevationSampler=function(e,t){var r=this;return this._importElevationQuery().then((function(i){return(new i.ElevationQuery).createSampler(r,e,t)}))},t.prototype._fetchTileAvailability=function(e,t,r,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,i):d.resolve("unknown")},t.prototype._fetchImageService=function(e){return l(this,void 0,void 0,(function(){var t,r;return o(this,(function(n){switch(n.label){case 0:return this.sourceJSON?[2,this.sourceJSON]:(t={query:i({f:"json"},this.parsedUrl.query),responseType:"json",signal:e},[4,s(this.parsedUrl.path,t)]);case 1:return(r=n.sent()).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),[2]}}))}))},t.prototype._importElevationQuery=function(){return d.create((function(e){r.e(35).then((function(){var t=[r("T16p")];e.apply(null,t)}).bind(this)).catch(r.oe)}))},a([v.property({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),a([v.property({readOnly:!0,type:m})],t.prototype,"heightModelInfo",void 0),a([v.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),a([v.property({type:["show","hide"]})],t.prototype,"listMode",void 0),a([v.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],t.prototype,"minScale",null),a([v.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],t.prototype,"maxScale",null),a([v.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"opacity",void 0),a([v.property({type:["ArcGISTiledElevationServiceLayer"]})],t.prototype,"operationalLayerType",void 0),a([v.property()],t.prototype,"sourceJSON",void 0),a([v.property({json:{read:!1},value:"elevation",readOnly:!0})],t.prototype,"type",void 0),a([v.property(T.url)],t.prototype,"url",void 0),a([v.property()],t.prototype,"version",void 0),a([v.reader("version",["currentVersion"])],t.prototype,"readVersion",null),a([v.subclass("esri.layers.ElevationLayer")],t)}(v.declared(g.ArcGISCachedService(w.ArcGISService(_.OperationalLayer(S.PortalLayer(f.MultiOriginJSONMixin(b)))))))}).apply(null,i))||(e.exports=n)},QJ8R:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(n=(function(e,t,i,n,a,o,l,s,p,u,c,h,f){Object.defineProperty(t,"__esModule",{value:!0});var d=s.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new f({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return o(this,void 0,void 0,(function(){var i,n;return a(this,(function(a){switch(a.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];a.label=1;case 1:return a.trys.push([1,4,,5]),[4,p.create((function(e){return Promise.all([r.e(0),r.e(90)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(r.oe)}))];case 2:return i=a.sent(),p.throwIfAborted(t),[4,i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,a.sent()];case 4:throw n=a.sent(),d.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+n),n;case 5:return[2]}}))}))},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||h.getDefault());return r&&i&&!u.hasSamePortal(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},n([c.property({type:f})],t.prototype,"portalItem",null),n([c.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),n([c.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),n([c.subclass("esri.layers.mixins.PortalLayer")],t)}(c.declared(e))}}).apply(null,i))||(e.exports=n)},"S+mV":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("2Atf"),r("xhoE"),r("qMld"),r("8V7H")],void 0===(n=(function(e,t,i,n,a,o){function l(){return a.create((function(e){return r.e(117).then((function(){var t=[r("Rc7o")];e.apply(null,t)}).bind(this)).catch(r.oe)}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){}return e.prototype._decode=function(e){return l().then((function(t){var r=(0,t.decode)(e.buffer,e.options);return{result:r,transferList:[r.pixelData.buffer]}}))},e}(),p=function(e){function t(t){var r=e.call(this)||this;return r.scheduler=t,r._threadInitialized=a.create((function(e){o.open("LercWorker",{strategy:"dedicated",scheduler:t}).then((function(t){void 0===r._thread?(r._thread=t,e()):(t.close(),e())}),(function(){return e()}))})),r}return n(t,e),t.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},Object.defineProperty(t.prototype,"test",{get:function(){return{threadInitialized:this._threadInitialized}},enumerable:!0,configurable:!0}),t.prototype.decode=function(e,t,r){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_decode",{buffer:e,options:t},{transferList:[e],signal:r}):l().then((function(i){var n=i.decode;return a.throwIfAborted(r),n(e,t)})):a.resolve(null)},t}(s);t.LercWorkerMaster=p;var u=new Map;t.acquireInstance=function(e){var t=u.get(e);return t||(t={instance:new p(e),ref:0},u.set(e,t)),++t.ref,t.instance},t.releaseInstance=function(e){if(null!=e){var t=e.scheduler,r=u.get(t);r&&--r.ref<=0&&(r.instance.destroy(),u.delete(t))}},t.default=function(){return new s}}).apply(null,i))||(e.exports=n)},WhPF:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("TMur"),r("Vx27"),r("ddAr"),r("Cobz")],void 0===(n=(function(e,t,r,i,n,a,o,l,s){Object.defineProperty(t,"__esModule",{value:!0}),t.ArcGISCachedService=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.copyright=null,t.minScale=0,t.maxScale=0,t.spatialReference=null,t.tileInfo=null,t.tilemapCache=null,t}return i(t,e),t.prototype.readMinScale=function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0},t.prototype.readMaxScale=function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0},Object.defineProperty(t.prototype,"supportsBlankTile",{get:function(){return this.version>=10.2},enumerable:!0,configurable:!0}),t.prototype.readTilemapCache=function(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new s.TilemapCache({layer:this}):null},n([o.property({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),n([o.property()],t.prototype,"minScale",void 0),n([o.reader("service","minScale")],t.prototype,"readMinScale",null),n([o.property()],t.prototype,"maxScale",void 0),n([o.reader("service","maxScale")],t.prototype,"readMaxScale",null),n([o.property({type:a.SpatialReference})],t.prototype,"spatialReference",void 0),n([o.property({readOnly:!0,dependsOn:["version"]})],t.prototype,"supportsBlankTile",null),n([o.property(l.serviceTileInfoProperty)],t.prototype,"tileInfo",void 0),n([o.property()],t.prototype,"tilemapCache",void 0),n([o.reader("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),n([o.property()],t.prototype,"version",void 0),n([o.subclass("esri.layers.mixins.ArcGISCachedService")],t)}(o.declared(e))}}).apply(null,i))||(e.exports=n)},ddAr:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("2Atf"),r("pMLx")],void 0===(n=(function(e,t,r,i){function n(e,t,n,a){if(!e)return null;var o=t.minScale,l=t.maxScale,s=t.minLOD,p=t.maxLOD;if(null!=s&&null!=p)return i.fromJSON(a&&a.ignoreMinMaxLOD?e:r({},e,{lods:e.lods.filter((function(e){var t=e.level;return null!=t&&t>=s&&t<=p}))}));if(0!==o&&0!==l){var u=function(e){return Math.round(1e4*e)/1e4},c=o?u(o):1/0,h=l?u(l):-1/0;return i.fromJSON(r({},e,{lods:e.lods.filter((function(e){var t=u(e.scale);return t<=c&&t>=h}))}))}return i.fromJSON(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.serviceTileInfoProperty={type:i,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:n}}}}},t.readServiceTileInfo=n}).apply(null,i))||(e.exports=n)},xojL:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("2Atf"),r("zp6E"),r("KY0m"),r("ma1f"),r("rg9i")],void 0===(n=(function(e,t,r,i,n,a,o){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}return e.prototype.getAvailability=function(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;var r=(e-this.location.top)*this.location.width+(t-this.location.left),i=r>>3,n=this._tileAvailabilityBitSet;return i<0||i>n.length?"unknown":n[i]&1<<r%8?"available":"unavailable"},e.prototype._updateFromData=function(e){for(var t=!0,r=!0,i=Math.ceil(this.location.width*this.location.height/8),n=new Uint8Array(i),a=0,o=0;o<e.length;o++){var l=o%8;e[o]?(r=!1,n[a]|=1<<l):t=!1,7===l&&++a}r?this._allAvailability="unavailable":t?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)},e.fromDefinition=function(t,o){var l=t.service.request||i,p=t.row,u=t.col,c=t.width,h=t.height,f={query:{f:"json"}};return o=o?r({},f,o):f,l(s(t),o).then((function(e){return e.data})).catch((function(e){if(e&&e.details&&422===e.details.httpStatus)return{location:{top:p,left:u,width:c,height:h},valid:!0,data:n.constant(c*h,0)};throw e})).then((function(t){if(t.location&&(t.location.top!==p||t.location.left!==u||t.location.width!==c||t.location.height!==h))throw new a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:p,left:u,width:c,height:h}});return e.fromJSON(t)}))},e.fromJSON=function(t){e.validateJSON(t);var r=new e;return r.location=Object.freeze(o.clone(t.location)),r._updateFromData(t.data),Object.freeze(r)},e.validateJSON=function(e){if(!e||!e.location)throw new a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")},e}();function s(e){var t;if("vector-tile"===e.service.type)t=e.service.url+"/tilemap/"+e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height;else{var r=e.service.tileServers;t=(r&&r.length?r[e.row%r.length]:e.service.url)+"/tilemap/"+e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height}var i=e.service.query;return i&&(t=t+"?"+i),t}t.Tilemap=l,t.tilemapDefinitionId=function(e){return e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height},t.tilemapDefinitionUrl=s,t.default=l}).apply(null,i))||(e.exports=n)}}]);