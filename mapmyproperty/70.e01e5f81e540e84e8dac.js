(function(){var e={"arcgis-js-api/core/MultiOriginJSONSupport":"EUqE","arcgis-js-api/layers/support/commonProperties":"EtsK","arcgis-js-api/layers/mixins/OperationalLayer":"FEX1","arcgis-js-api/layers/GeoRSSLayer":"Hpgp","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/layers/mixins/RefreshableLayer":"WaJo","arcgis-js-api/layers/mixins/operationalLayers":"hk3y","arcgis-js-api/core/accessorSupport/MultiOriginStore":"rU+N"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{EUqE:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("Gtr7"),t("Vx27"),t("rU+N"),t("ZEeX"),t("Ab+N"),t("o2T8"),t("Kg8D")],void 0===(o=(function(e,r,t,i,o,n,a,s,p,l){function c(e){return p.getProperties(e).store}Object.defineProperty(r,"__esModule",{value:!0}),r.MultiOriginJSONMixin=function(e){var r=function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this,o=p.getProperties(i),a=o.metadatas,s=o.store,l=new n.default;return o.store=l,s.keys().forEach((function(e){l.set(e,s.get(e),0)})),Object.keys(a).forEach((function(e){o.internalGet(e)&&l.set(e,o.internalGet(e),0)})),i}return t.__extends(r,e),r.prototype.clear=function(e,r){return void 0===r&&(r="user"),c(this).delete(e,a.nameToId(r))},r.prototype.read=function(e,r){s.default(this,e,r)},r.prototype.write=function(e,r){return l.default(this,e=e||{},r),e},r.prototype.getAtOrigin=function(e,r){var t=c(this),i=a.nameToId(r);if("string"==typeof e)return t.get(e,i);var o={};return e.forEach((function(e){o[e]=t.get(e,i)})),o},r.prototype.setAtOrigin=function(e,r,t){p.getProperties(this).setAtOrigin(e,r,a.nameToId(t))},r.prototype.originOf=function(e){return a.idToName(this.originIdOf(e))},r.prototype.originIdOf=function(e){return c(this).originOf(e)},r.prototype.revert=function(e,r){var t=c(this),i=a.nameToId(r),o=p.getProperties(this);("string"==typeof e?"*"===e?t.keys(i):[e]:e).forEach((function(e){o.propertyInvalidated(e),t.revert(e,i),o.propertyCommitted(e)}))},r.prototype.removeOrigin=function(e){for(var r=c(this),t=a.nameToId(e),i=0,o=r.keys(t);i<o.length;i++){var n=o[i];r.originOf(n)===t&&r.set(n,r.get(n,t),6)}},r.prototype.updateOrigin=function(e,r){for(var t=c(this),i=a.nameToId(r),o=this.get(e),n=i+1;n<7;++n)t.delete(e,n);t.set(e,o,i)},r.prototype.toJSON=function(e){return this.write(null,e)},t.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(e);return r.prototype.toJSON.isDefaultToJSON=!0,r};var u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),t.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(r.MultiOriginJSONMixin(i));r.MultiOriginJSONSupport=u}).apply(null,i))||(e.exports=o)},EtsK:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("o2T8"),t("Kg8D"),t("ojLd"),t("5ldw"),t("3fUp")],void 0===(o=(function(e,r,t,i,o,n,a,s){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){if(null!=r.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return r.screenSizePerspective;i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||o.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},i))&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,value:!0,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:a,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},r.opacityDrawingInfo=t.__assign(t.__assign({},r.opacity),{json:t.__assign(t.__assign({},r.opacity.json),{origins:{"web-document":t.__assign(t.__assign({},r.opacity.json.origins["web-document"]),{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?s.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:s.transparencyToOpacity(r.drawingInfo.transparency)}}})})}).apply(null,i))||(e.exports=o)},FEX1:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("Vx27"),t("Ab+N"),t("Kg8D"),t("hk3y"),t("EtsK"),t("2Kdy")],void 0===(o=(function(e,r,t,i,o,n,a,s,p){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return t.__extends(r,e),r.prototype.writeListMode=function(e,r,t,i){(i&&"ground"===i.layerContainerType||e&&a.willPropertyWrite(this,t,{},i))&&(r[t]=e)},r.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},r.prototype.writeTitle=function(e,r){r.title=e||"Layer"},r.prototype.read=function(r,t){var i=this;t&&(t.layer=this),n.readLoadable(this,r,(function(t){return e.prototype.read.call(i,r,t)}),t)},r.prototype.write=function(r,o){if(o&&o.origin){var n=o.origin+"/"+(o.layerContainerType||"operational-layers"),a=s.supportedTypes[n],p=a&&a[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===n&&(p=!1),!p)return o.messages&&o.messages.push(new i("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+n+"'",{layer:this})),null}var l=e.prototype.write.call(this,r,t.__assign(t.__assign({},o),{layer:this})),c=!!o&&!!o.messages&&!!o.messages.filter((function(e){return e instanceof i&&"web-document-write:property-required"===e.name})).length;return!this.url&&c?null:l},r.prototype.beforeSave=function(){},t.__decorate([o.property({json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],r.prototype,"blendMode",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),t.__decorate([o.property({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],r.prototype,"listMode",void 0),t.__decorate([o.writer("listMode")],r.prototype,"writeListMode",null),t.__decorate([o.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],r.prototype,"operationalLayerType",void 0),t.__decorate([o.writer("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),t.__decorate([o.property(p.opacity)],r.prototype,"opacity",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"title",void 0),t.__decorate([o.writer("title")],r.prototype,"writeTitle",null),t.__decorate([o.property({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],r.prototype,"visible",void 0),t.__decorate([o.subclass("esri.layers.mixins.OperationalLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},Hpgp:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("0J3i"),t("zp6E"),t("+AWJ"),t("LxLY"),t("EUqE"),t("qMld"),t("Vx27"),t("0RER"),t("FEX1"),t("QJ8R"),t("WaJo"),t("OXmT"),t("EtsK"),t("x7Wq"),t("CF4u"),t("HqJa")],void 0===(o=(function(e,r,t,i,o,n,a,s,p,l,c,u,y,d,f,g,v,h,_){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this;return i.description=null,i.title=null,i.lineSymbol=null,i.pointSymbol=null,i.polygonSymbol=null,i.outSpatialReference=null,i.url=null,i.type="geo-rss",i}return t.__extends(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t.__assign({url:e},r):e},r.prototype.readFeatureCollections=function(e,r){return r.featureCollection.layers.forEach((function(e){var r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&r.outline&&-1!==r.outline.style.indexOf("esriSFS")&&(r.outline.style="esriSLSSolid")})),r.featureCollection.layers},r.prototype.load=function(e){var r=this,t=a.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((function(){return r._fetchService(t)}),(function(){return r._fetchService(t)}))),p.resolve(this)},r.prototype._fetchService=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,o(i.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e})];case 1:return r=t.sent().data,this.read(r,{origin:"service"}),[2]}}))}))},t.__decorate([l.property()],r.prototype,"description",void 0),t.__decorate([l.property()],r.prototype,"title",void 0),t.__decorate([l.property()],r.prototype,"featureCollections",void 0),t.__decorate([l.reader("service","featureCollections",["featureCollection.layers"])],r.prototype,"readFeatureCollections",null),t.__decorate([l.property({type:h})],r.prototype,"lineSymbol",void 0),t.__decorate([l.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t.__decorate([l.property({types:n.symbolTypes,json:{read:_.read}})],r.prototype,"pointSymbol",void 0),t.__decorate([l.property({type:v})],r.prototype,"polygonSymbol",void 0),t.__decorate([l.property()],r.prototype,"outSpatialReference",void 0),t.__decorate([l.property(g.url)],r.prototype,"url",void 0),t.__decorate([l.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],r.prototype,"type",void 0),t.__decorate([l.subclass("esri.layers.GeoRSSLayer")],r)}(d.RefreshableLayer(u.OperationalLayer(y.PortalLayer(f.ScaleRangeLayer(s.MultiOriginJSONMixin(c))))))}).apply(null,i))||(e.exports=o)},QJ8R:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("qsST"),t("qMld"),t("jfWY"),t("Vx27"),t("Qwus"),t("QmTF"),t("2Kdy")],void 0===(o=(function(e,r,i,o,n,a,s,p,l,c){Object.defineProperty(r,"__esModule",{value:!0});var u=n.getLogger("esri.layers.mixins.PortalLayer");r.PortalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.resourceReferences={portalItem:null,paths:[]},r}return i.__extends(r,e),Object.defineProperty(r.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),r.prototype.readPortalItem=function(e,r,t){if(r.itemId)return new c({id:r.itemId,portal:t&&t.portal})},r.prototype.writePortalItem=function(e,r){e&&e.id&&(r.itemId=e.id)},r.prototype.loadFromPortal=function(e,r){return i.__awaiter(this,void 0,void 0,(function(){var o,n;return i.__generator(this,(function(i){switch(i.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,new Promise((function(e,r){Promise.all([t.e(1),t.e(150)]).then((function(){var r=[t("6hwa")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))];case 2:return o=i.sent(),a.throwIfAborted(r),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},r)];case 3:return[2,i.sent()];case 4:throw n=i.sent(),u.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+n),n;case 5:return[2]}}))}))},r.prototype.read=function(r,t){t&&(t.layer=this),e.prototype.read.call(this,r,t)},r.prototype.write=function(r,t){var n=t&&t.portal,a=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||l.getDefault());return n&&a&&!s.hasSamePortal(a.restUrl,n.restUrl)?(t.messages&&t.messages.push(new o("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):e.prototype.write.call(this,r,i.__assign(i.__assign({},t),{layer:this}))},i.__decorate([p.property({type:c})],r.prototype,"portalItem",null),i.__decorate([p.reader("web-document","portalItem",["itemId"])],r.prototype,"readPortalItem",null),i.__decorate([p.writer("web-document","portalItem",{itemId:{type:String}})],r.prototype,"writePortalItem",null),i.__decorate([p.property()],r.prototype,"resourceReferences",void 0),i.__decorate([p.subclass("esri.layers.mixins.PortalLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},WaJo:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("Vx27")],void 0===(o=(function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0}),r.RefreshableLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshInterval=0,r}return t.__extends(r,e),r.prototype.refresh=function(){this.emit("refresh")},t.__decorate([i.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],r.prototype,"refreshInterval",void 0),t.__decorate([i.subclass("esri.layers.mixins.RefreshableLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},hk3y:function(e,r,t){var i,o;i=[t.dj.c(e.i),r],void 0===(o=(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}}}).apply(null,i))||(e.exports=o)},"rU+N":function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("KY0m"),t("rg9i")],void 0===(o=(function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(){this._propertyOriginMap=new Map,this._originStores=new Array(7),this._values=new Map}return e.prototype.clone=function(r){var t=new e,o=this._originStores[0];o&&o.forEach((function(e,r){t.set(r,i.clone(e),0)}));for(var n=function(e){var o=a._originStores[e];o&&o.forEach((function(o,n){r&&r.has(n)||t.set(n,i.clone(o),e)}))},a=this,s=2;s<7;s++)n(s);return t},e.prototype.get=function(e,r){var t=void 0===r?this._values:this._originStores[r];return t?t.get(e):void 0},e.prototype.keys=function(e){var r=null==e?this._values:this._originStores[e];return r?t.keysOfMap(r):[]},e.prototype.set=function(e,r,t){void 0===t&&(t=6);var i=this._originStores[t];if(i||(i=new Map,this._originStores[t]=i),i.set(e,r),!this._values.has(e)||this._propertyOriginMap.get(e)<=t){var o=this._values.get(e);return this._values.set(e,r),this._propertyOriginMap.set(e,t),o!==r}return!1},e.prototype.delete=function(e,r){void 0===r&&(r=6);var t=this._originStores[r];if(t){var i=t.get(e);if(t.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===r){this._values.delete(e);for(var o=r-1;o>=0;o--){var n=this._originStores[o];if(n&&n.has(e)){this._values.set(e,n.get(e)),this._propertyOriginMap.set(e,o);break}}}return i}},e.prototype.has=function(e,r){var t=void 0===r?this._values:this._originStores[r];return!!t&&t.has(e)},e.prototype.revert=function(e,r){for(;r>0&&!this.has(e,r);)--r;var t=this._originStores[r],i=t&&t.get(e),o=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,r),o!==i},e.prototype.originOf=function(e){return this._propertyOriginMap.get(e)||0},e.prototype.forEach=function(e){this._values.forEach(e)},e}();r.default=o}).apply(null,i))||(e.exports=o)}}]);