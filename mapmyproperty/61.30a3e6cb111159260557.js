(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/MultiOriginJSONSupport":"EUqE","esri/layers/support/commonProperties":"EtsK","esri/layers/mixins/OperationalLayer":"FEX1","esri/layers/mixins/PortalLayer":"QJ8R","esri/layers/mixins/RefreshableLayer":"WaJo","esri/layers/support/KMLSublayer":"bIi9","esri/layers/KMLLayer":"hPxN","esri/layers/mixins/operationalLayers":"hk3y","esri/core/accessorSupport/MultiOriginStore":"rU+N"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{EUqE:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("Gtr7"),t("Vx27"),t("rU+N"),t("ZEeX"),t("Ab+N"),t("o2T8"),t("Kg8D")],void 0===(o=(function(e,r,t,i,o,n,a,s,l,p){function u(e){return l.getProperties(e).store}Object.defineProperty(r,"__esModule",{value:!0}),r.MultiOriginJSONMixin=function(e){var r=function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this,o=l.getProperties(i),a=o.metadatas,s=o.store,p=new n.default;return o.store=p,s.keys().forEach((function(e){p.set(e,s.get(e),0)})),Object.keys(a).forEach((function(e){o.internalGet(e)&&p.set(e,o.internalGet(e),0)})),i}return t.__extends(r,e),r.prototype.clear=function(e,r){return void 0===r&&(r="user"),u(this).delete(e,a.nameToId(r))},r.prototype.read=function(e,r){s.default(this,e,r)},r.prototype.write=function(e,r){return p.default(this,e=e||{},r),e},r.prototype.getAtOrigin=function(e,r){var t=u(this),i=a.nameToId(r);if("string"==typeof e)return t.get(e,i);var o={};return e.forEach((function(e){o[e]=t.get(e,i)})),o},r.prototype.setAtOrigin=function(e,r,t){l.getProperties(this).setAtOrigin(e,r,a.nameToId(t))},r.prototype.originOf=function(e){return a.idToName(this.originIdOf(e))},r.prototype.originIdOf=function(e){return u(this).originOf(e)},r.prototype.revert=function(e,r){var t=u(this),i=a.nameToId(r),o=l.getProperties(this);("string"==typeof e?"*"===e?t.keys(i):[e]:e).forEach((function(e){o.propertyInvalidated(e),t.revert(e,i),o.propertyCommitted(e)}))},r.prototype.removeOrigin=function(e){for(var r=u(this),t=a.nameToId(e),i=0,o=r.keys(t);i<o.length;i++){var n=o[i];r.originOf(n)===t&&r.set(n,r.get(n,t),6)}},r.prototype.updateOrigin=function(e,r){for(var t=u(this),i=a.nameToId(r),o=this.get(e),n=i+1;n<7;++n)t.delete(e,n);t.set(e,o,i)},r.prototype.toJSON=function(e){return this.write(null,e)},t.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(e);return r.prototype.toJSON.isDefaultToJSON=!0,r};var y=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),t.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(r.MultiOriginJSONMixin(i));r.MultiOriginJSONSupport=y}).apply(null,i))||(e.exports=o)},EtsK:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("o2T8"),t("Kg8D"),t("ojLd"),t("5ldw"),t("3fUp")],void 0===(o=(function(e,r,t,i,o,n,a,s){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){if(null!=r.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return r.screenSizePerspective;i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||o.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},i))&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,value:!0,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:a,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},r.opacityDrawingInfo=t.__assign(t.__assign({},r.opacity),{json:t.__assign(t.__assign({},r.opacity.json),{origins:{"web-document":t.__assign(t.__assign({},r.opacity.json.origins["web-document"]),{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?s.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:s.transparencyToOpacity(r.drawingInfo.transparency)}}})})}).apply(null,i))||(e.exports=o)},FEX1:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("Vx27"),t("Ab+N"),t("Kg8D"),t("hk3y"),t("EtsK"),t("2Kdy")],void 0===(o=(function(e,r,t,i,o,n,a,s,l){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return t.__extends(r,e),r.prototype.writeListMode=function(e,r,t,i){(i&&"ground"===i.layerContainerType||e&&a.willPropertyWrite(this,t,{},i))&&(r[t]=e)},r.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},r.prototype.writeTitle=function(e,r){r.title=e||"Layer"},r.prototype.read=function(r,t){var i=this;t&&(t.layer=this),n.readLoadable(this,r,(function(t){return e.prototype.read.call(i,r,t)}),t)},r.prototype.write=function(r,o){if(o&&o.origin){var n=o.origin+"/"+(o.layerContainerType||"operational-layers"),a=s.supportedTypes[n],l=a&&a[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===n&&(l=!1),!l)return o.messages&&o.messages.push(new i("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+n+"'",{layer:this})),null}var p=e.prototype.write.call(this,r,t.__assign(t.__assign({},o),{layer:this})),u=!!o&&!!o.messages&&!!o.messages.filter((function(e){return e instanceof i&&"web-document-write:property-required"===e.name})).length;return!this.url&&u?null:p},r.prototype.beforeSave=function(){},t.__decorate([o.property({json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],r.prototype,"blendMode",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),t.__decorate([o.property({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],r.prototype,"listMode",void 0),t.__decorate([o.writer("listMode")],r.prototype,"writeListMode",null),t.__decorate([o.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],r.prototype,"operationalLayerType",void 0),t.__decorate([o.writer("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),t.__decorate([o.property(l.opacity)],r.prototype,"opacity",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"title",void 0),t.__decorate([o.writer("title")],r.prototype,"writeTitle",null),t.__decorate([o.property({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],r.prototype,"visible",void 0),t.__decorate([o.subclass("esri.layers.mixins.OperationalLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},QJ8R:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("qsST"),t("qMld"),t("jfWY"),t("Vx27"),t("Qwus"),t("QmTF"),t("2Kdy")],void 0===(o=(function(e,r,i,o,n,a,s,l,p,u){Object.defineProperty(r,"__esModule",{value:!0});var y=n.getLogger("esri.layers.mixins.PortalLayer");r.PortalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.resourceReferences={portalItem:null,paths:[]},r}return i.__extends(r,e),Object.defineProperty(r.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),r.prototype.readPortalItem=function(e,r,t){if(r.itemId)return new u({id:r.itemId,portal:t&&t.portal})},r.prototype.writePortalItem=function(e,r){e&&e.id&&(r.itemId=e.id)},r.prototype.loadFromPortal=function(e,r){return i.__awaiter(this,void 0,void 0,(function(){var o,n;return i.__generator(this,(function(i){switch(i.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,new Promise((function(e,r){Promise.all([t.e(1),t.e(150)]).then((function(){var r=[t("6hwa")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))];case 2:return o=i.sent(),a.throwIfAborted(r),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},r)];case 3:return[2,i.sent()];case 4:throw n=i.sent(),y.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+n),n;case 5:return[2]}}))}))},r.prototype.read=function(r,t){t&&(t.layer=this),e.prototype.read.call(this,r,t)},r.prototype.write=function(r,t){var n=t&&t.portal,a=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||p.getDefault());return n&&a&&!s.hasSamePortal(a.restUrl,n.restUrl)?(t.messages&&t.messages.push(new o("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):e.prototype.write.call(this,r,i.__assign(i.__assign({},t),{layer:this}))},i.__decorate([l.property({type:u})],r.prototype,"portalItem",null),i.__decorate([l.reader("web-document","portalItem",["itemId"])],r.prototype,"readPortalItem",null),i.__decorate([l.writer("web-document","portalItem",{itemId:{type:String}})],r.prototype,"writePortalItem",null),i.__decorate([l.property()],r.prototype,"resourceReferences",void 0),i.__decorate([l.subclass("esri.layers.mixins.PortalLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},WaJo:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("Vx27")],void 0===(o=(function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0}),r.RefreshableLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshInterval=0,r}return t.__extends(r,e),r.prototype.refresh=function(){this.emit("refresh")},t.__decorate([i.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],r.prototype,"refreshInterval",void 0),t.__decorate([i.subclass("esri.layers.mixins.RefreshableLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},bIi9:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("TMur"),t("y4WC"),t("BcWh"),t("ycL1"),t("R7Ts"),t("LxLY"),t("qMld"),t("8MXS"),t("Vx27"),t("1dvD"),t("N3Jt")],void 0===(o=(function(e,r,t,i,o,n,a,s,l,p,u,y,c,d){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._sublayersHandles=null,r.description=null,r.id=null,r.networkLink=null,r.title=null,r.sourceJSON=null,r.fullExtent=null,r}var n;return t.__extends(r,e),n=r,r.prototype.initialize=function(){var e=this;u.whenOnce(this,"networkLink").then((function(){return u.whenTrueOnce(e,"visible")})).then((function(){return e.load()}))},r.prototype.load=function(e){var r=this;if(this.networkLink){var t=l.isSome(e)?e.signal:null,a=this._fetchService(this._get("networkLink").href,t).then((function(e){var t=d.computeExtent(e.sublayers);r.fullExtent=i.Extent.fromJSON(t),r.sourceJSON=e;var a=c.default(o.ofType(n),d.sublayersFromJSON(n,e));r.sublayers?r.sublayers.addMany(a):r.sublayers=a,r.layer.emit("sublayer-update"),r.layer&&r.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(a),p.resolve(this)}},Object.defineProperty(r.prototype,"sublayers",{set:function(e){var r=this,t=this._get("sublayers");t&&(t.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=r,e.layer=r.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var t=e.item;t.parent=r,t.layer=r.layer})),e.on("after-remove",(function(e){var r=e.item;r.parent=null,r.layer=null}))]),this._set("sublayers",e)},enumerable:!0,configurable:!0}),r.prototype.castSublayers=function(e){return c.default(o.ofType(n),e)},Object.defineProperty(r.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))},enumerable:!0,configurable:!0}),r.prototype.readVisible=function(e,r){return!!r.visibility},Object.defineProperty(r.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(r){return r.layer=e}))},enumerable:!0,configurable:!0}),r.prototype._fetchService=function(e,r){return d.fetchService(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((function(e){return d.parseKML(e.data)}))},t.__decorate([y.property()],r.prototype,"description",void 0),t.__decorate([y.property()],r.prototype,"id",void 0),t.__decorate([y.property({readOnly:!0,value:null})],r.prototype,"networkLink",void 0),t.__decorate([y.property({json:{write:{allowNull:!0}}})],r.prototype,"parent",void 0),t.__decorate([y.property({value:null,json:{write:{allowNull:!0}}})],r.prototype,"sublayers",null),t.__decorate([y.cast("sublayers")],r.prototype,"castSublayers",null),t.__decorate([y.property({value:null,json:{read:{source:"name"}}})],r.prototype,"title",void 0),t.__decorate([y.property({value:!0})],r.prototype,"visible",null),t.__decorate([y.reader("visible",["visibility"])],r.prototype,"readVisible",null),t.__decorate([y.property()],r.prototype,"sourceJSON",void 0),t.__decorate([y.property({value:null})],r.prototype,"layer",null),t.__decorate([y.property({type:i.Extent})],r.prototype,"fullExtent",void 0),n=t.__decorate([y.subclass("esri.layers.support.KMLSublayer")],r)}(n.EventedMixin(a.JSONSupportMixin(s)))}).apply(null,i))||(e.exports=o)},hPxN:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("TMur"),t("y4WC"),t("6Ej+"),t("LxLY"),t("EUqE"),t("qMld"),t("Vx27"),t("Z4y+"),t("0RER"),t("FEX1"),t("QJ8R"),t("WaJo"),t("OXmT"),t("bIi9"),t("N3Jt")],void 0===(o=(function(e,r,t,i,o,n,a,s,l,p,u,y,c,d,f,h,v,g){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this;return i._visibleFolders=[],i.allSublayers=new n({root:i,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),i.outSpatialReference=u.WGS84,i.path=null,i.operationalLayerType="KML",i.sublayers=null,i.type="kml",i.url=null,i}return t.__extends(r,e),r.prototype.initialize=function(){var e=this;this.watch("sublayers",(function(r,t){t&&t.forEach((function(e){e.parent=null,e.layer=null})),r&&r.forEach((function(r){r.parent=e,r.layer=e}))}),!0),this.on("sublayer-update",(function(){return e.notifyChange("fullExtent")}))},r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t.__assign({url:e},r):e},r.prototype.readSublayersFromItemOrWebMap=function(e,r){this._visibleFolders=r.visibleFolders},r.prototype.readSublayers=function(e,r,t){return g.sublayersFromJSON(v,r,t,this._visibleFolders)},r.prototype.writeSublayers=function(e,r){for(var t=[],i=e.toArray();i.length;){var o=i[0];o.networkLink||(o.visible&&t.push(o.id),o.sublayers&&i.push.apply(i,o.sublayers.toArray())),i.shift()}r.visibleFolders=t},Object.defineProperty(r.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=this.url.substring(this.url.lastIndexOf("/")+1,this.parsedUrl.path.lastIndexOf("."));return 0===e.length&&(e="KML"),e}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this.sublayers,r=[];return e&&e.forEach((function e(t){t.visible&&(r.push(t),t.sublayers&&t.sublayers.forEach(e))})),r},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"fullExtent",{get:function(){return this._recomputeFullExtent()},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=this,t=a.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then((function(){return r._fetchService(t)}))),l.resolve(this)},r.prototype._fetchService=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,i,o=this;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l.resolve().then((function(){return o.resourceInfo?{ssl:!1,data:o.resourceInfo}:g.fetchService(o.url,o.outSpatialReference,o.refreshInterval,e)}))];case 1:return r=t.sent(),(i=g.parseKML(r.data))&&this.read(i,{origin:"service"}),[2]}}))}))},r.prototype._recomputeFullExtent=function(){var e=null;return this.extent&&(e=this.extent.clone()),function r(t){if(t.sublayers)for(var i=0,o=t.sublayers.items;i<o.length;i++){var n=o[i];r(n),n.visible&&n.fullExtent&&(e?e.union(n.fullExtent):e=n.fullExtent.clone())}}(this),e},t.__decorate([p.property({readOnly:!0})],r.prototype,"allSublayers",void 0),t.__decorate([p.property({type:u})],r.prototype,"outSpatialReference",void 0),t.__decorate([p.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),t.__decorate([p.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),t.__decorate([p.property({type:["KML"]})],r.prototype,"operationalLayerType",void 0),t.__decorate([p.property({type:o.ofType(v),json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),t.__decorate([p.reader(["web-map","portal-item"],"sublayers",["visibleFolders"])],r.prototype,"readSublayersFromItemOrWebMap",null),t.__decorate([p.reader("service","sublayers",["sublayers"])],r.prototype,"readSublayers",null),t.__decorate([p.writer("sublayers")],r.prototype,"writeSublayers",null),t.__decorate([p.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),t.__decorate([p.property({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],r.prototype,"title",null),t.__decorate([p.property()],r.prototype,"url",void 0),t.__decorate([p.property({readOnly:!0,dependsOn:["sublayers"]})],r.prototype,"visibleSublayers",null),t.__decorate([p.property({type:i.Extent})],r.prototype,"extent",void 0),t.__decorate([p.property({dependsOn:["extent"]})],r.prototype,"fullExtent",null),t.__decorate([p.subclass("esri.layers.KMLLayer")],r)}(f.RefreshableLayer(h.ScaleRangeLayer(c.OperationalLayer(d.PortalLayer(s.MultiOriginJSONMixin(y))))))}).apply(null,i))||(e.exports=o)},hk3y:function(e,r,t){var i,o;i=[t.dj.c(e.i),r],void 0===(o=(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}}}).apply(null,i))||(e.exports=o)},"rU+N":function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("KY0m"),t("rg9i")],void 0===(o=(function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(){this._propertyOriginMap=new Map,this._originStores=new Array(7),this._values=new Map}return e.prototype.clone=function(r){var t=new e,o=this._originStores[0];o&&o.forEach((function(e,r){t.set(r,i.clone(e),0)}));for(var n=function(e){var o=a._originStores[e];o&&o.forEach((function(o,n){r&&r.has(n)||t.set(n,i.clone(o),e)}))},a=this,s=2;s<7;s++)n(s);return t},e.prototype.get=function(e,r){var t=void 0===r?this._values:this._originStores[r];return t?t.get(e):void 0},e.prototype.keys=function(e){var r=null==e?this._values:this._originStores[e];return r?t.keysOfMap(r):[]},e.prototype.set=function(e,r,t){void 0===t&&(t=6);var i=this._originStores[t];if(i||(i=new Map,this._originStores[t]=i),i.set(e,r),!this._values.has(e)||this._propertyOriginMap.get(e)<=t){var o=this._values.get(e);return this._values.set(e,r),this._propertyOriginMap.set(e,t),o!==r}return!1},e.prototype.delete=function(e,r){void 0===r&&(r=6);var t=this._originStores[r];if(t){var i=t.get(e);if(t.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===r){this._values.delete(e);for(var o=r-1;o>=0;o--){var n=this._originStores[o];if(n&&n.has(e)){this._values.set(e,n.get(e)),this._propertyOriginMap.set(e,o);break}}}return i}},e.prototype.has=function(e,r){var t=void 0===r?this._values:this._originStores[r];return!!t&&t.has(e)},e.prototype.revert=function(e,r){for(;r>0&&!this.has(e,r);)--r;var t=this._originStores[r],i=t&&t.get(e),o=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,r),o!==i},e.prototype.originOf=function(e){return this._propertyOriginMap.get(e)||0},e.prototype.forEach=function(e){this._values.forEach(e)},e}();r.default=o}).apply(null,i))||(e.exports=o)}}]);