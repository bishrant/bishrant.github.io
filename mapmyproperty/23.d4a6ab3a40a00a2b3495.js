(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/mixins/ArcGISService":"2fnV","arcgis-js-api/layers/mixins/ArcGISService":"2fnV","esri/core/MultiOriginJSONSupport":"EUqE","arcgis-js-api/core/MultiOriginJSONSupport":"EUqE","esri/layers/support/commonProperties":"EtsK","arcgis-js-api/layers/support/commonProperties":"EtsK","esri/layers/mixins/OperationalLayer":"FEX1","arcgis-js-api/layers/mixins/OperationalLayer":"FEX1","arcgis-js-api/layers/ElevationLayer":"GAgw","arcgis-js-api/layers/support/LercDecoder":"M/KD","esri/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/views/3d/support/WorkerHandle":"ecY5","arcgis-js-api/layers/mixins/operationalLayers":"hk3y","arcgis-js-api/core/accessorSupport/MultiOriginStore":"rU+N"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2fnV":function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("qsST"),t("Vx27"),t("8CIp")],void 0===(o=(function(e,r,t,i,o,n){Object.defineProperty(r,"__esModule",{value:!0}),r.ArcGISService=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),Object.defineProperty(r.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=n.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"url",{set:function(e){this._set("url",n.sanitizeUrl(e,i.getLogger(this.declaredClass)))},enumerable:!0,configurable:!0}),t.__decorate([o.property({dependsOn:["url"]})],r.prototype,"title",null),t.__decorate([o.property({type:String})],r.prototype,"url",null),t.__decorate([o.subclass("esri.layers.mixins.ArcGISService")],r)}(e)}}).apply(null,i))||(e.exports=o)},EUqE:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("Gtr7"),t("Vx27"),t("rU+N"),t("ZEeX"),t("Ab+N"),t("o2T8"),t("Kg8D")],void 0===(o=(function(e,r,t,i,o,n,a,s,p,l){function c(e){return p.getProperties(e).store}Object.defineProperty(r,"__esModule",{value:!0}),r.MultiOriginJSONMixin=function(e){var r=function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this,o=p.getProperties(i),a=o.metadatas,s=o.store,l=new n.default;return o.store=l,s.keys().forEach((function(e){l.set(e,s.get(e),0)})),Object.keys(a).forEach((function(e){o.internalGet(e)&&l.set(e,o.internalGet(e),0)})),i}return t.__extends(r,e),r.prototype.clear=function(e,r){return void 0===r&&(r="user"),c(this).delete(e,a.nameToId(r))},r.prototype.read=function(e,r){s.default(this,e,r)},r.prototype.write=function(e,r){return l.default(this,e=e||{},r),e},r.prototype.getAtOrigin=function(e,r){var t=c(this),i=a.nameToId(r);if("string"==typeof e)return t.get(e,i);var o={};return e.forEach((function(e){o[e]=t.get(e,i)})),o},r.prototype.setAtOrigin=function(e,r,t){p.getProperties(this).setAtOrigin(e,r,a.nameToId(t))},r.prototype.originOf=function(e){return a.idToName(this.originIdOf(e))},r.prototype.originIdOf=function(e){return c(this).originOf(e)},r.prototype.revert=function(e,r){var t=c(this),i=a.nameToId(r),o=p.getProperties(this);("string"==typeof e?"*"===e?t.keys(i):[e]:e).forEach((function(e){o.propertyInvalidated(e),t.revert(e,i),o.propertyCommitted(e)}))},r.prototype.removeOrigin=function(e){for(var r=c(this),t=a.nameToId(e),i=0,o=r.keys(t);i<o.length;i++){var n=o[i];r.originOf(n)===t&&r.set(n,r.get(n,t),6)}},r.prototype.updateOrigin=function(e,r){for(var t=c(this),i=a.nameToId(r),o=this.get(e),n=i+1;n<7;++n)t.delete(e,n);t.set(e,o,i)},r.prototype.toJSON=function(e){return this.write(null,e)},t.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(e);return r.prototype.toJSON.isDefaultToJSON=!0,r};var u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),t.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(r.MultiOriginJSONMixin(i));r.MultiOriginJSONSupport=u}).apply(null,i))||(e.exports=o)},EtsK:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("o2T8"),t("Kg8D"),t("ojLd"),t("5ldw"),t("3fUp")],void 0===(o=(function(e,r,t,i,o,n,a,s){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){if(null!=r.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return r.screenSizePerspective;i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||o.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},i))&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,value:!0,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:a,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},r.opacityDrawingInfo=t.__assign(t.__assign({},r.opacity),{json:t.__assign(t.__assign({},r.opacity.json),{origins:{"web-document":t.__assign(t.__assign({},r.opacity.json.origins["web-document"]),{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?s.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:s.transparencyToOpacity(r.drawingInfo.transparency)}}})})}).apply(null,i))||(e.exports=o)},FEX1:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("Vx27"),t("Ab+N"),t("Kg8D"),t("hk3y"),t("EtsK"),t("2Kdy")],void 0===(o=(function(e,r,t,i,o,n,a,s,p){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return t.__extends(r,e),r.prototype.writeListMode=function(e,r,t,i){(i&&"ground"===i.layerContainerType||e&&a.willPropertyWrite(this,t,{},i))&&(r[t]=e)},r.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},r.prototype.writeTitle=function(e,r){r.title=e||"Layer"},r.prototype.read=function(r,t){var i=this;t&&(t.layer=this),n.readLoadable(this,r,(function(t){return e.prototype.read.call(i,r,t)}),t)},r.prototype.write=function(r,o){if(o&&o.origin){var n=o.origin+"/"+(o.layerContainerType||"operational-layers"),a=s.supportedTypes[n],p=a&&a[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===n&&(p=!1),!p)return o.messages&&o.messages.push(new i("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+n+"'",{layer:this})),null}var l=e.prototype.write.call(this,r,t.__assign(t.__assign({},o),{layer:this})),c=!!o&&!!o.messages&&!!o.messages.filter((function(e){return e instanceof i&&"web-document-write:property-required"===e.name})).length;return!this.url&&c?null:l},r.prototype.beforeSave=function(){},t.__decorate([o.property({json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],r.prototype,"blendMode",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),t.__decorate([o.property({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],r.prototype,"listMode",void 0),t.__decorate([o.writer("listMode")],r.prototype,"writeListMode",null),t.__decorate([o.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],r.prototype,"operationalLayerType",void 0),t.__decorate([o.writer("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),t.__decorate([o.property(p.opacity)],r.prototype,"opacity",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"title",void 0),t.__decorate([o.writer("title")],r.prototype,"writeTitle",null),t.__decorate([o.property({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],r.prototype,"visible",void 0),t.__decorate([o.subclass("esri.layers.mixins.OperationalLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},GAgw:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("7bfM"),t("ma1f"),t("qsST"),t("LxLY"),t("EUqE"),t("qMld"),t("jfWY"),t("Vx27"),t("MFVu"),t("0RER"),t("WhPF"),t("2fnV"),t("FEX1"),t("QJ8R"),t("EtsK"),t("M/KD"),t("2Kdy")],void 0===(o=(function(e,r,i,o,n,a,s,p,l,c,u,d,y,h,f,g,v,_,m,S){var w=s.getLogger("esri.layers.ElevationLayer");return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this;return i.copyright=null,i.heightModelInfo=null,i.path=null,i.opacity=1,i.operationalLayerType="ArcGISTiledElevationServiceLayer",i.sourceJSON=null,i.type="elevation",i.url=null,i.version=null,i._lercDecoder=S.acquireInstance(),i}return i.__extends(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?i.__assign({url:e},r):e},r.prototype.destroy=function(){S.releaseInstance(this._lercDecoder),this._lercDecoder=null},Object.defineProperty(r.prototype,"minScale",{get:function(){},set:function(e){this.constructed&&w.warn(this.declaredClass+".minScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxScale",{get:function(){},set:function(e){this.constructed&&w.warn(this.declaredClass+".maxScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0}),r.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=9.3),t},r.prototype.load=function(e){var r=this,t=p.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then((function(){return r._fetchImageService(t)}),(function(){return r._fetchImageService(t)}))),c.resolve(this)},r.prototype.fetchTile=function(e,r,t,i){var a=this;void 0===i&&(i={}),null!=i&&"number"==typeof i&&(n.deprecated(w,"Passing 'noDataValue' directly as a parameter",{replacement:"use { noDataValue } options object instead",version:"4.12"}),i={noDataValue:i});var s={responseType:"array-buffer",signal:i.signal},p={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((function(){return a._fetchTileAvailability(e,r,t,i)})).then((function(){return o(a.getTileUrl(e,r,t),s)})).then((function(e){return a._lercDecoder.decode(e.data,p,i.signal)})).then((function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}}))},r.prototype.getTileUrl=function(e,r,t){var o=!this.tilemapCache&&this.supportsBlankTile,n=u.objectToQuery(i.__assign(i.__assign({},this.parsedUrl.query),{blankTile:!o&&null}));return this.parsedUrl.path+"/tile/"+e+"/"+r+"/"+t+(n?"?"+n:"")},r.prototype.queryElevation=function(e,r){var t=this;return this._importElevationQuery().then((function(i){return(new i.ElevationQuery).query(t,e,r)}))},r.prototype.createElevationSampler=function(e,r){var t=this;return this._importElevationQuery().then((function(i){return(new i.ElevationQuery).createSampler(t,e,r)}))},r.prototype._fetchTileAvailability=function(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):c.resolve("unknown")},r.prototype._fetchImageService=function(e){return i.__awaiter(this,void 0,void 0,(function(){var r,t;return i.__generator(this,(function(n){switch(n.label){case 0:return this.sourceJSON?[2,this.sourceJSON]:(r={query:i.__assign({f:"json"},this.parsedUrl.query),responseType:"json",signal:e},[4,o(this.parsedUrl.path,r)]);case 1:return(t=n.sent()).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),[2]}}))}))},r.prototype._importElevationQuery=function(){return new Promise((function(e,r){t.e(28).then((function(){var r=[t("T16p")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))},i.__decorate([d.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),i.__decorate([d.property({readOnly:!0,type:y})],r.prototype,"heightModelInfo",void 0),i.__decorate([d.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),i.__decorate([d.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i.__decorate([d.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"minScale",null),i.__decorate([d.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"maxScale",null),i.__decorate([d.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),i.__decorate([d.property({type:["ArcGISTiledElevationServiceLayer"]})],r.prototype,"operationalLayerType",void 0),i.__decorate([d.property()],r.prototype,"sourceJSON",void 0),i.__decorate([d.property({json:{read:!1},value:"elevation",readOnly:!0})],r.prototype,"type",void 0),i.__decorate([d.property(m.url)],r.prototype,"url",void 0),i.__decorate([d.property()],r.prototype,"version",void 0),i.__decorate([d.reader("version",["currentVersion"])],r.prototype,"readVersion",null),i.__decorate([d.subclass("esri.layers.ElevationLayer")],r)}(f.ArcGISCachedService(g.ArcGISService(v.OperationalLayer(_.PortalLayer(l.MultiOriginJSONMixin(h))))))}).apply(null,i))||(e.exports=o)},"M/KD":function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("qMld"),t("ecY5"),t("2Kdy")],void 0===(o=(function(e,r,t,i,o){Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){function r(r){var t=e.call(this,"LercWorker","_decode",r,{strategy:"dedicated"})||this;return t.scheduler=r,t}return t.__extends(r,e),r.prototype.decode=function(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):i.resolve(null)},r.prototype.getTransferList=function(e){return[e.buffer]},r}(o.WorkerHandle),a=new Map;r.acquireInstance=function(e){var r=a.get(e);return r||(r={instance:new n(e),ref:0},a.set(e,r)),++r.ref,r.instance},r.releaseInstance=function(e){if(null!=e){var r=e.scheduler,t=a.get(r);t&&--t.ref<=0&&(t.instance.destroy(),a.delete(r))}}}).apply(null,i))||(e.exports=o)},QJ8R:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("qsST"),t("qMld"),t("jfWY"),t("Vx27"),t("Qwus"),t("QmTF"),t("2Kdy")],void 0===(o=(function(e,r,i,o,n,a,s,p,l,c){Object.defineProperty(r,"__esModule",{value:!0});var u=n.getLogger("esri.layers.mixins.PortalLayer");r.PortalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.resourceReferences={portalItem:null,paths:[]},r}return i.__extends(r,e),Object.defineProperty(r.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),r.prototype.readPortalItem=function(e,r,t){if(r.itemId)return new c({id:r.itemId,portal:t&&t.portal})},r.prototype.writePortalItem=function(e,r){e&&e.id&&(r.itemId=e.id)},r.prototype.loadFromPortal=function(e,r){return i.__awaiter(this,void 0,void 0,(function(){var o,n;return i.__generator(this,(function(i){switch(i.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,new Promise((function(e,r){Promise.all([t.e(1),t.e(149)]).then((function(){var r=[t("6hwa")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))];case 2:return o=i.sent(),a.throwIfAborted(r),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},r)];case 3:return[2,i.sent()];case 4:throw n=i.sent(),u.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+n),n;case 5:return[2]}}))}))},r.prototype.read=function(r,t){t&&(t.layer=this),e.prototype.read.call(this,r,t)},r.prototype.write=function(r,t){var n=t&&t.portal,a=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||l.getDefault());return n&&a&&!s.hasSamePortal(a.restUrl,n.restUrl)?(t.messages&&t.messages.push(new o("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):e.prototype.write.call(this,r,i.__assign(i.__assign({},t),{layer:this}))},i.__decorate([p.property({type:c})],r.prototype,"portalItem",null),i.__decorate([p.reader("web-document","portalItem",["itemId"])],r.prototype,"readPortalItem",null),i.__decorate([p.writer("web-document","portalItem",{itemId:{type:String}})],r.prototype,"writePortalItem",null),i.__decorate([p.property()],r.prototype,"resourceReferences",void 0),i.__decorate([p.subclass("esri.layers.mixins.PortalLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},ecY5:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("qsST"),t("qMld"),t("8V7H")],void 0===(o=(function(e,r,t,i,o,n){Object.defineProperty(r,"__esModule",{value:!0});var a=i.getLogger("esri.views.3d.support.WorkerHandle"),s=function(){function e(e,r,i,o){var s=this;void 0===o&&(o={}),this._methodName=r,this._promise=n.open(e,t.__assign(t.__assign({},o),{scheduler:i})).then((function(e){void 0===s._thread?(s._thread=e,s._promise=null):e.close()})),this._promise.catch((function(r){return a.error("Failed to initialize "+e+" worker: "+r)}))}return e.prototype.destroy=function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null},e.prototype.invoke=function(e,r){var t=this;if(void 0===r&&(r=null),this._thread){var i=this.getTransferList(e);return this._thread.invoke(this._methodName,e,{transferList:i,signal:r})}return this._promise?this._promise.then((function(){return o.throwIfAborted(r),t.invoke(e,r)})):o.reject(null)},e.prototype.broadcast=function(e,r){var t=this;return this._thread?o.all(this._thread.broadcast(r,e)).then((function(){})):this._promise?this._promise.then((function(){return t.broadcast(e,r)})):o.reject()},Object.defineProperty(e.prototype,"promise",{get:function(){return this._promise},enumerable:!0,configurable:!0}),e}();r.WorkerHandle=s}).apply(null,i))||(e.exports=o)},hk3y:function(e,r,t){var i,o;i=[t.dj.c(e.i),r],void 0===(o=(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}}}).apply(null,i))||(e.exports=o)},"rU+N":function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("KY0m"),t("rg9i")],void 0===(o=(function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(){this._propertyOriginMap=new Map,this._originStores=new Array(7),this._values=new Map}return e.prototype.clone=function(r){var t=new e,o=this._originStores[0];o&&o.forEach((function(e,r){t.set(r,i.clone(e),0)}));for(var n=function(e){var o=a._originStores[e];o&&o.forEach((function(o,n){r&&r.has(n)||t.set(n,i.clone(o),e)}))},a=this,s=2;s<7;s++)n(s);return t},e.prototype.get=function(e,r){var t=void 0===r?this._values:this._originStores[r];return t?t.get(e):void 0},e.prototype.keys=function(e){var r=null==e?this._values:this._originStores[e];return r?t.keysOfMap(r):[]},e.prototype.set=function(e,r,t){void 0===t&&(t=6);var i=this._originStores[t];if(i||(i=new Map,this._originStores[t]=i),i.set(e,r),!this._values.has(e)||this._propertyOriginMap.get(e)<=t){var o=this._values.get(e);return this._values.set(e,r),this._propertyOriginMap.set(e,t),o!==r}return!1},e.prototype.delete=function(e,r){void 0===r&&(r=6);var t=this._originStores[r];if(t){var i=t.get(e);if(t.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===r){this._values.delete(e);for(var o=r-1;o>=0;o--){var n=this._originStores[o];if(n&&n.has(e)){this._values.set(e,n.get(e)),this._propertyOriginMap.set(e,o);break}}}return i}},e.prototype.has=function(e,r){var t=void 0===r?this._values:this._originStores[r];return!!t&&t.has(e)},e.prototype.revert=function(e,r){for(;r>0&&!this.has(e,r);)--r;var t=this._originStores[r],i=t&&t.get(e),o=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,r),o!==i},e.prototype.originOf=function(e){return this._propertyOriginMap.get(e)||0},e.prototype.forEach=function(e){this._values.forEach(e)},e}();r.default=o}).apply(null,i))||(e.exports=o)}}]);