(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/MultiOriginJSONSupport":"EUqE","esri/layers/support/commonProperties":"EtsK","esri/layers/mixins/OperationalLayer":"FEX1","esri/layers/mixins/PortalLayer":"QJ8R","esri/layers/mixins/RefreshableLayer":"WaJo","esri/layers/WebTileLayer":"a2fw","esri/layers/mixins/operationalLayers":"hk3y","esri/core/accessorSupport/MultiOriginStore":"rU+N","esri/layers/support/WMTSLayerInfo":"zBTX"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{EUqE:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("Gtr7"),t("Vx27"),t("rU+N"),t("ZEeX"),t("Ab+N"),t("o2T8"),t("Kg8D")],void 0===(o=(function(e,r,t,i,o,n,a,l,s,p){function u(e){return s.getProperties(e).store}Object.defineProperty(r,"__esModule",{value:!0}),r.MultiOriginJSONMixin=function(e){var r=function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this,o=s.getProperties(i),a=o.metadatas,l=o.store,p=new n.default;return o.store=p,l.keys().forEach((function(e){p.set(e,l.get(e),0)})),Object.keys(a).forEach((function(e){o.internalGet(e)&&p.set(e,o.internalGet(e),0)})),i}return t.__extends(r,e),r.prototype.clear=function(e,r){return void 0===r&&(r="user"),u(this).delete(e,a.nameToId(r))},r.prototype.read=function(e,r){l.default(this,e,r)},r.prototype.write=function(e,r){return p.default(this,e=e||{},r),e},r.prototype.getAtOrigin=function(e,r){var t=u(this),i=a.nameToId(r);if("string"==typeof e)return t.get(e,i);var o={};return e.forEach((function(e){o[e]=t.get(e,i)})),o},r.prototype.setAtOrigin=function(e,r,t){s.getProperties(this).setAtOrigin(e,r,a.nameToId(t))},r.prototype.originOf=function(e){return a.idToName(this.originIdOf(e))},r.prototype.originIdOf=function(e){return u(this).originOf(e)},r.prototype.revert=function(e,r){var t=u(this),i=a.nameToId(r),o=s.getProperties(this);("string"==typeof e?"*"===e?t.keys(i):[e]:e).forEach((function(e){o.propertyInvalidated(e),t.revert(e,i),o.propertyCommitted(e)}))},r.prototype.removeOrigin=function(e){for(var r=u(this),t=a.nameToId(e),i=0,o=r.keys(t);i<o.length;i++){var n=o[i];r.originOf(n)===t&&r.set(n,r.get(n,t),6)}},r.prototype.updateOrigin=function(e,r){for(var t=u(this),i=a.nameToId(r),o=this.get(e),n=i+1;n<7;++n)t.delete(e,n);t.set(e,o,i)},r.prototype.toJSON=function(e){return this.write(null,e)},t.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(e);return r.prototype.toJSON.isDefaultToJSON=!0,r};var c=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),t.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(r.MultiOriginJSONMixin(i));r.MultiOriginJSONSupport=c}).apply(null,i))||(e.exports=o)},EtsK:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("o2T8"),t("Kg8D"),t("ojLd"),t("5ldw"),t("3fUp")],void 0===(o=(function(e,r,t,i,o,n,a,l){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){if(null!=r.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return r.screenSizePerspective;i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||o.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},i))&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,value:!0,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:a,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},r.opacityDrawingInfo=t.__assign(t.__assign({},r.opacity),{json:t.__assign(t.__assign({},r.opacity.json),{origins:{"web-document":t.__assign(t.__assign({},r.opacity.json.origins["web-document"]),{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?l.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:l.transparencyToOpacity(r.drawingInfo.transparency)}}})})}).apply(null,i))||(e.exports=o)},FEX1:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("Vx27"),t("Ab+N"),t("Kg8D"),t("hk3y"),t("EtsK"),t("2Kdy")],void 0===(o=(function(e,r,t,i,o,n,a,l,s){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return t.__extends(r,e),r.prototype.writeListMode=function(e,r,t,i){(i&&"ground"===i.layerContainerType||e&&a.willPropertyWrite(this,t,{},i))&&(r[t]=e)},r.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},r.prototype.writeTitle=function(e,r){r.title=e||"Layer"},r.prototype.read=function(r,t){var i=this;t&&(t.layer=this),n.readLoadable(this,r,(function(t){return e.prototype.read.call(i,r,t)}),t)},r.prototype.write=function(r,o){if(o&&o.origin){var n=o.origin+"/"+(o.layerContainerType||"operational-layers"),a=l.supportedTypes[n],s=a&&a[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===n&&(s=!1),!s)return o.messages&&o.messages.push(new i("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+n+"'",{layer:this})),null}var p=e.prototype.write.call(this,r,t.__assign(t.__assign({},o),{layer:this})),u=!!o&&!!o.messages&&!!o.messages.filter((function(e){return e instanceof i&&"web-document-write:property-required"===e.name})).length;return!this.url&&u?null:p},r.prototype.beforeSave=function(){},t.__decorate([o.property({json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],r.prototype,"blendMode",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),t.__decorate([o.property({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],r.prototype,"listMode",void 0),t.__decorate([o.writer("listMode")],r.prototype,"writeListMode",null),t.__decorate([o.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],r.prototype,"operationalLayerType",void 0),t.__decorate([o.writer("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),t.__decorate([o.property(s.opacity)],r.prototype,"opacity",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"title",void 0),t.__decorate([o.writer("title")],r.prototype,"writeTitle",null),t.__decorate([o.property({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],r.prototype,"visible",void 0),t.__decorate([o.subclass("esri.layers.mixins.OperationalLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},QJ8R:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("qsST"),t("qMld"),t("jfWY"),t("Vx27"),t("Qwus"),t("QmTF"),t("2Kdy")],void 0===(o=(function(e,r,i,o,n,a,l,s,p,u){Object.defineProperty(r,"__esModule",{value:!0});var c=n.getLogger("esri.layers.mixins.PortalLayer");r.PortalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.resourceReferences={portalItem:null,paths:[]},r}return i.__extends(r,e),Object.defineProperty(r.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),r.prototype.readPortalItem=function(e,r,t){if(r.itemId)return new u({id:r.itemId,portal:t&&t.portal})},r.prototype.writePortalItem=function(e,r){e&&e.id&&(r.itemId=e.id)},r.prototype.loadFromPortal=function(e,r){return i.__awaiter(this,void 0,void 0,(function(){var o,n;return i.__generator(this,(function(i){switch(i.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,new Promise((function(e,r){Promise.all([t.e(1),t.e(150)]).then((function(){var r=[t("6hwa")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))];case 2:return o=i.sent(),a.throwIfAborted(r),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},r)];case 3:return[2,i.sent()];case 4:throw n=i.sent(),c.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+n),n;case 5:return[2]}}))}))},r.prototype.read=function(r,t){t&&(t.layer=this),e.prototype.read.call(this,r,t)},r.prototype.write=function(r,t){var n=t&&t.portal,a=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||p.getDefault());return n&&a&&!l.hasSamePortal(a.restUrl,n.restUrl)?(t.messages&&t.messages.push(new o("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):e.prototype.write.call(this,r,i.__assign(i.__assign({},t),{layer:this}))},i.__decorate([s.property({type:u})],r.prototype,"portalItem",null),i.__decorate([s.reader("web-document","portalItem",["itemId"])],r.prototype,"readPortalItem",null),i.__decorate([s.writer("web-document","portalItem",{itemId:{type:String}})],r.prototype,"writePortalItem",null),i.__decorate([s.property()],r.prototype,"resourceReferences",void 0),i.__decorate([s.subclass("esri.layers.mixins.PortalLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},WaJo:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("Vx27")],void 0===(o=(function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0}),r.RefreshableLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshInterval=0,r}return t.__extends(r,e),r.prototype.refresh=function(){this.emit("refresh")},t.__decorate([i.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],r.prototype,"refreshInterval",void 0),t.__decorate([i.subclass("esri.layers.mixins.RefreshableLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},a2fw:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("TMur"),t("zp6E"),t("ma1f"),t("rg9i"),t("EUqE"),t("qMld"),t("nRUF"),t("jfWY"),t("jfWY"),t("Vx27"),t("0RER"),t("FEX1"),t("QJ8R"),t("WaJo"),t("OXmT"),t("r2fF"),t("pMLx"),t("zBTX")],void 0===(o=(function(e,r,t,i,o,n,a,l,s,p,u,c,y,d,f,v,g,h,m,_,w){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var o=e.apply(this,r)||this;return o.copyright="",o.fullExtent=new i.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,i.SpatialReference.WebMercator),o.legendEnabled=!1,o.isReference=null,o.popupEnabled=!1,o.spatialReference=i.SpatialReference.WebMercator,o.subDomains=null,o.tileInfo=new _({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new i.Point({x:-20037508.342787,y:20037508.342787,spatialReference:i.SpatialReference.WebMercator}),spatialReference:i.SpatialReference.WebMercator,lods:[new m({level:0,scale:591657527.591555,resolution:156543.033928}),new m({level:1,scale:295828763.795777,resolution:78271.5169639999}),new m({level:2,scale:147914381.897889,resolution:39135.7584820001}),new m({level:3,scale:73957190.948944,resolution:19567.8792409999}),new m({level:4,scale:36978595.474472,resolution:9783.93962049996}),new m({level:5,scale:18489297.737236,resolution:4891.96981024998}),new m({level:6,scale:9244648.868618,resolution:2445.98490512499}),new m({level:7,scale:4622324.434309,resolution:1222.99245256249}),new m({level:8,scale:2311162.217155,resolution:611.49622628138}),new m({level:9,scale:1155581.108577,resolution:305.748113140558}),new m({level:10,scale:577790.554289,resolution:152.874056570411}),new m({level:11,scale:288895.277144,resolution:76.4370282850732}),new m({level:12,scale:144447.638572,resolution:38.2185141425366}),new m({level:13,scale:72223.819286,resolution:19.1092570712683}),new m({level:14,scale:36111.909643,resolution:9.55462853563415}),new m({level:15,scale:18055.954822,resolution:4.77731426794937}),new m({level:16,scale:9027.977411,resolution:2.38865713397468}),new m({level:17,scale:4513.988705,resolution:1.19432856685505}),new m({level:18,scale:2256.994353,resolution:.597164283559817}),new m({level:19,scale:1128.497176,resolution:.298582141647617})]}),o.type="web-tile",o.urlTemplate=null,o.wmtsInfo=null,o}return t.__extends(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?a.mixin({urlTemplate:e},r||{}):e},r.prototype.load=function(e){var r=this,t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(r.urlTemplate)if(r.spatialReference.equals(r.tileInfo.spatialReference)){var t=new u.Url(r.urlTemplate);r.subDomains&&r.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new n("web-tile-layer:load","WebTileLayer (title: '"+r.title+"', id: '"+r.id+"') "+e)}));return this.addResolvingPromise(t),s.resolve(this)},Object.defineProperty(r.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var r=0,t=this.tileInfo.lods;r<t.length;r++){var i=t[r];e[i.level]=i.levelValue||i.level}return e},enumerable:!0,configurable:!0}),r.prototype.readSpatialReference=function(e,r){return e||r.fullExtent&&r.fullExtent.spatialReference&&i.SpatialReference.fromJSON(r.fullExtent.spatialReference)},Object.defineProperty(r.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],r=this.subDomains,t=new u.Url(this.urlTemplate),i=t.scheme?t.scheme+"://":"//",o=i+t.authority+"/";if(-1===t.authority.indexOf("{subDomain}"))e.push(o);else if(r&&r.length>0&&t.authority.split(".").length>1)for(var n=0,a=r;n<a.length;n++)e.push(i+t.authority.replace(/\{subDomain\}/gi,a[n])+"/");return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,r=new u.Url(e);return e.substring(((r.scheme?r.scheme+"://":"//")+r.authority+"/").length)},enumerable:!0,configurable:!0}),r.prototype.readUrlTemplate=function(e,r){return e||r.templateUrl},r.prototype.writeUrlTemplate=function(e,r){e&&c.isProtocolRelative(e)&&(e="https:"+e),r.templateUrl=e?c.normalize(e):e},r.prototype.fetchTile=function(e,r,t,i){void 0===i&&(i={});var n=i.signal,a=i.timestamp,l=this.getTileUrl(e,r,t),s={responseType:"image",signal:n};return null!=a&&(s.query={_ts:i.timestamp}),o(l,s).then((function(e){return e.data}))},r.prototype.getTileUrl=function(e,r,t){var i=this.levelValues[e];return(this.tileServers[r%this.tileServers.length]+p.replace(this.urlPath,{level:i,col:t,row:r})).replace(/\{level\}/gi,""+i).replace(/\{row\}/gi,""+r).replace(/\{col\}/gi,""+t)},t.__decorate([y.property({type:String,value:"",json:{write:!0}})],r.prototype,"copyright",void 0),t.__decorate([y.property({type:i.Extent,json:{write:!0}})],r.prototype,"fullExtent",void 0),t.__decorate([y.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"legendEnabled",void 0),t.__decorate([y.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t.__decorate([y.property({dependsOn:["tileInfo"]})],r.prototype,"levelValues",null),t.__decorate([y.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),t.__decorate([y.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],r.prototype,"operationalLayerType",void 0),t.__decorate([y.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),t.__decorate([y.property({type:i.SpatialReference})],r.prototype,"spatialReference",void 0),t.__decorate([y.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],r.prototype,"readSpatialReference",null),t.__decorate([y.property({type:[String],json:{write:!0}})],r.prototype,"subDomains",void 0),t.__decorate([y.property({type:_,json:{write:!0}})],r.prototype,"tileInfo",void 0),t.__decorate([y.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],r.prototype,"tileServers",null),t.__decorate([y.property({json:{read:!1}})],r.prototype,"type",void 0),t.__decorate([y.property({dependsOn:["urlTemplate"]})],r.prototype,"urlPath",null),t.__decorate([y.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],r.prototype,"urlTemplate",void 0),t.__decorate([y.reader("urlTemplate",["urlTemplate","templateUrl"])],r.prototype,"readUrlTemplate",null),t.__decorate([y.writer("urlTemplate",{templateUrl:{type:String}})],r.prototype,"writeUrlTemplate",null),t.__decorate([y.property({type:w.default,json:{write:!0}})],r.prototype,"wmtsInfo",void 0),t.__decorate([y.subclass("esri.layers.WebTileLayer")],r)}(g.RefreshableLayer(h.ScaleRangeLayer(f.OperationalLayer(v.PortalLayer(l.MultiOriginJSONMixin(d))))))}).apply(null,i))||(e.exports=o)},hk3y:function(e,r,t){var i,o;i=[t.dj.c(e.i),r],void 0===(o=(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}}}).apply(null,i))||(e.exports=o)},"rU+N":function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("KY0m"),t("rg9i")],void 0===(o=(function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(){this._propertyOriginMap=new Map,this._originStores=new Array(7),this._values=new Map}return e.prototype.clone=function(r){var t=new e,o=this._originStores[0];o&&o.forEach((function(e,r){t.set(r,i.clone(e),0)}));for(var n=function(e){var o=a._originStores[e];o&&o.forEach((function(o,n){r&&r.has(n)||t.set(n,i.clone(o),e)}))},a=this,l=2;l<7;l++)n(l);return t},e.prototype.get=function(e,r){var t=void 0===r?this._values:this._originStores[r];return t?t.get(e):void 0},e.prototype.keys=function(e){var r=null==e?this._values:this._originStores[e];return r?t.keysOfMap(r):[]},e.prototype.set=function(e,r,t){void 0===t&&(t=6);var i=this._originStores[t];if(i||(i=new Map,this._originStores[t]=i),i.set(e,r),!this._values.has(e)||this._propertyOriginMap.get(e)<=t){var o=this._values.get(e);return this._values.set(e,r),this._propertyOriginMap.set(e,t),o!==r}return!1},e.prototype.delete=function(e,r){void 0===r&&(r=6);var t=this._originStores[r];if(t){var i=t.get(e);if(t.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===r){this._values.delete(e);for(var o=r-1;o>=0;o--){var n=this._originStores[o];if(n&&n.has(e)){this._values.set(e,n.get(e)),this._propertyOriginMap.set(e,o);break}}}return i}},e.prototype.has=function(e,r){var t=void 0===r?this._values:this._originStores[r];return!!t&&t.has(e)},e.prototype.revert=function(e,r){for(;r>0&&!this.has(e,r);)--r;var t=this._originStores[r],i=t&&t.get(e),o=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,r),o!==i},e.prototype.originOf=function(e){return this._propertyOriginMap.get(e)||0},e.prototype.forEach=function(e){this._values.forEach(e)},e}();r.default=o}).apply(null,i))||(e.exports=o)},zBTX:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("ycL1"),t("rg9i"),t("Vx27")],void 0===(o=(function(e,r,t,i,o,n){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(r){return e.call(this,r)||this}var i;return t.__extends(r,e),i=r,r.prototype.clone=function(){return new i({customLayerParameters:o.clone(this.customLayerParameters),customParameters:o.clone(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})},t.__decorate([n.property({json:{type:Object,write:!0}})],r.prototype,"customLayerParameters",void 0),t.__decorate([n.property({json:{type:Object,write:!0}})],r.prototype,"customParameters",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"layerIdentifier",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"tileMatrixSet",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"url",void 0),i=t.__decorate([n.subclass("esri.layer.support.WMTSLayerInfo")],r)}(i.JSONSupport);r.WMTSLayerInfo=a,r.default=a}).apply(null,i))||(e.exports=o)}}]);