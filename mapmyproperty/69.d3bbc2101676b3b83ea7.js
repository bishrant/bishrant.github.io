(function(){var e={"arcgis-js-api/layers/BaseTileLayer":"8rsy","arcgis-js-api/core/MultiOriginJSONSupport":"EUqE","arcgis-js-api/layers/support/commonProperties":"EtsK","arcgis-js-api/layers/mixins/OperationalLayer":"FEX1","arcgis-js-api/layers/BingMapsLayer":"V7mb","arcgis-js-api/layers/mixins/RefreshableLayer":"WaJo","arcgis-js-api/layers/mixins/operationalLayers":"hk3y","arcgis-js-api/core/accessorSupport/MultiOriginStore":"rU+N"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"8rsy":function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("ma1f"),t("Vx27"),t("N7S/"),t("Z4y+"),t("lRq4"),t("0RER"),t("WaJo"),t("OXmT"),t("pMLx")],void 0===(o=(function(e,r,t,i,o,a,n,s,l,p,u,c,y){var d={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.tileInfo=y.create({spatialReference:s.WebMercator,size:256}),r.type="base-tile",r.fullExtent=new n(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,s.WebMercator),r.spatialReference=s.WebMercator,r}return t.__extends(r,e),r.prototype.getTileBounds=function(e,r,t,i){var o=i||l.create();return d.level=e,d.row=r,d.col=t,d.extent=o,this.tileInfo.updateTileInfo(d),d.extent=null,o},r.prototype.fetchTile=function(e,r,t,o){void 0===o&&(o={});var a=o.signal,n=o.timestamp,s=this.getTileUrl(e,r,t),l={responseType:"image",signal:a};return null!=n&&(l.query={_ts:o.timestamp}),i(s,l).then((function(e){return e.data}))},r.prototype.getTileUrl=function(){throw new o("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")},t.__decorate([a.property({type:y})],r.prototype,"tileInfo",void 0),t.__decorate([a.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t.__decorate([a.property({readOnly:!0,value:"base-tile"})],r.prototype,"type",void 0),t.__decorate([a.property()],r.prototype,"fullExtent",void 0),t.__decorate([a.property()],r.prototype,"spatialReference",void 0),t.__decorate([a.subclass("esri.layers.BaseTileLayer")],r)}(c.ScaleRangeLayer(u.RefreshableLayer(p)))}).apply(null,i))||(e.exports=o)},EUqE:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("Gtr7"),t("Vx27"),t("rU+N"),t("ZEeX"),t("Ab+N"),t("o2T8"),t("Kg8D")],void 0===(o=(function(e,r,t,i,o,a,n,s,l,p){function u(e){return l.getProperties(e).store}Object.defineProperty(r,"__esModule",{value:!0}),r.MultiOriginJSONMixin=function(e){var r=function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this,o=l.getProperties(i),n=o.metadatas,s=o.store,p=new a.default;return o.store=p,s.keys().forEach((function(e){p.set(e,s.get(e),0)})),Object.keys(n).forEach((function(e){o.internalGet(e)&&p.set(e,o.internalGet(e),0)})),i}return t.__extends(r,e),r.prototype.clear=function(e,r){return void 0===r&&(r="user"),u(this).delete(e,n.nameToId(r))},r.prototype.read=function(e,r){s.default(this,e,r)},r.prototype.write=function(e,r){return p.default(this,e=e||{},r),e},r.prototype.getAtOrigin=function(e,r){var t=u(this),i=n.nameToId(r);if("string"==typeof e)return t.get(e,i);var o={};return e.forEach((function(e){o[e]=t.get(e,i)})),o},r.prototype.setAtOrigin=function(e,r,t){l.getProperties(this).setAtOrigin(e,r,n.nameToId(t))},r.prototype.originOf=function(e){return n.idToName(this.originIdOf(e))},r.prototype.originIdOf=function(e){return u(this).originOf(e)},r.prototype.revert=function(e,r){var t=u(this),i=n.nameToId(r),o=l.getProperties(this);("string"==typeof e?"*"===e?t.keys(i):[e]:e).forEach((function(e){o.propertyInvalidated(e),t.revert(e,i),o.propertyCommitted(e)}))},r.prototype.removeOrigin=function(e){for(var r=u(this),t=n.nameToId(e),i=0,o=r.keys(t);i<o.length;i++){var a=o[i];r.originOf(a)===t&&r.set(a,r.get(a,t),6)}},r.prototype.updateOrigin=function(e,r){for(var t=u(this),i=n.nameToId(r),o=this.get(e),a=i+1;a<7;++a)t.delete(e,a);t.set(e,o,i)},r.prototype.toJSON=function(e){return this.write(null,e)},t.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(e);return r.prototype.toJSON.isDefaultToJSON=!0,r};var c=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),t.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(r.MultiOriginJSONMixin(i));r.MultiOriginJSONSupport=c}).apply(null,i))||(e.exports=o)},EtsK:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("o2T8"),t("Kg8D"),t("ojLd"),t("5ldw"),t("3fUp")],void 0===(o=(function(e,r,t,i,o,a,n,s){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){if(null!=r.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return r.screenSizePerspective;i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||o.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},i))&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,value:!0,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:n,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},r.opacityDrawingInfo=t.__assign(t.__assign({},r.opacity),{json:t.__assign(t.__assign({},r.opacity.json),{origins:{"web-document":t.__assign(t.__assign({},r.opacity.json.origins["web-document"]),{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?s.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:s.transparencyToOpacity(r.drawingInfo.transparency)}}})})}).apply(null,i))||(e.exports=o)},FEX1:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("Vx27"),t("Ab+N"),t("Kg8D"),t("hk3y"),t("EtsK"),t("2Kdy")],void 0===(o=(function(e,r,t,i,o,a,n,s,l){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return t.__extends(r,e),r.prototype.writeListMode=function(e,r,t,i){(i&&"ground"===i.layerContainerType||e&&n.willPropertyWrite(this,t,{},i))&&(r[t]=e)},r.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},r.prototype.writeTitle=function(e,r){r.title=e||"Layer"},r.prototype.read=function(r,t){var i=this;t&&(t.layer=this),a.readLoadable(this,r,(function(t){return e.prototype.read.call(i,r,t)}),t)},r.prototype.write=function(r,o){if(o&&o.origin){var a=o.origin+"/"+(o.layerContainerType||"operational-layers"),n=s.supportedTypes[a],l=n&&n[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===a&&(l=!1),!l)return o.messages&&o.messages.push(new i("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+a+"'",{layer:this})),null}var p=e.prototype.write.call(this,r,t.__assign(t.__assign({},o),{layer:this})),u=!!o&&!!o.messages&&!!o.messages.filter((function(e){return e instanceof i&&"web-document-write:property-required"===e.name})).length;return!this.url&&u?null:p},r.prototype.beforeSave=function(){},t.__decorate([o.property({json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],r.prototype,"blendMode",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),t.__decorate([o.property({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],r.prototype,"listMode",void 0),t.__decorate([o.writer("listMode")],r.prototype,"writeListMode",null),t.__decorate([o.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],r.prototype,"operationalLayerType",void 0),t.__decorate([o.writer("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),t.__decorate([o.property(l.opacity)],r.prototype,"opacity",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"title",void 0),t.__decorate([o.writer("title")],r.prototype,"writeTitle",null),t.__decorate([o.property({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],r.prototype,"visible",void 0),t.__decorate([o.subclass("esri.layers.mixins.OperationalLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},V7mb:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("ma1f"),t("ImIS"),t("LxLY"),t("EUqE"),t("qMld"),t("Vx27"),t("Z4y+"),t("8rsy"),t("FEX1"),t("pMLx")],void 0===(o=(function(e,r,t,i,o,a,n,s,l,p,u,c,y,d){var g=new a.default({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});return function(e){function r(r){var t=e.call(this,r)||this;return t.type="bing-maps",t.tileInfo=new d({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:u.WebMercator},spatialReference:u.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),t.key=null,t.style="road",t.culture="en-US",t.region=null,t.portalUrl=null,t.hasAttributionData=!0,t}return t.__extends(r,e),Object.defineProperty(r.prototype,"bingMetadata",{get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"copyright",{get:function(){return n.isSome(this.bingMetadata)?this.bingMetadata.copyright:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bingLogo",{get:function(){return n.isSome(this.bingMetadata)?this.bingMetadata.brandLogoUri:null},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=this;return this.addResolvingPromise(this.key?this._getMetadata():this.portalUrl?this._getPortalBingKey().then((function(){return r._getMetadata()})):l.reject(new o("bingmapslayer:load","Bing layer must have bing key."))),l.resolve(this)},r.prototype.getTileUrl=function(e,r,t){if(!this.loaded||n.isNone(this.bingMetadata))return null;var i=this.bingMetadata.resourceSets[0].resources[0],o=i.imageUrlSubdomains[r%i.imageUrlSubdomains.length],a=this._getQuadKey(e,r,t);return i.imageUrl.replace("{subdomain}",o).replace("{quadkey}",a)},r.prototype.fetchAttributionData=function(){return t.__awaiter(this,void 0,void 0,(function(){var e=this;return t.__generator(this,(function(r){return[2,this.load().then((function(){return n.isNone(e.bingMetadata)?null:{contributors:e.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}}))]}))}))},r.prototype._getMetadata=function(){var e=this;return i("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+{road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style],{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(r){var t=r.data;if(200!==t.statusCode)throw new o("bingmapslayer:getmetadata",t.statusDescription);if(e.bingMetadata=t,0===e.bingMetadata.resourceSets.length)throw new o("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new o("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new o("bingmapslayer:getmetadata",e.message)}))},r.prototype._getPortalBingKey=function(){var e=this;return i(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(r){if(!r.data.bingKey)throw new o("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");e.key=r.data.bingKey})).catch((function(e){throw new o("bingmapslayer:getportalbingkey",e.message)}))},r.prototype._getQuadKey=function(e,r,t){for(var i="",o=e;o>0;o--){var a=0,n=1<<o-1;0!=(t&n)&&(a+=1),0!=(r&n)&&(a+=2),i+=a.toString()}return i},t.__decorate([p.property({json:{read:!1,write:!1},value:null})],r.prototype,"bingMetadata",null),t.__decorate([p.property({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],r.prototype,"type",void 0),t.__decorate([p.property({type:d})],r.prototype,"tileInfo",void 0),t.__decorate([p.property({type:String,readOnly:!0,dependsOn:["bingMetadata"],json:{read:!1,write:!1}})],r.prototype,"copyright",null),t.__decorate([p.property({type:String,json:{write:!1,read:!1}})],r.prototype,"key",void 0),t.__decorate([p.property({type:String,json:{write:{target:"layerType",writer:g.write},read:{source:"layerType",reader:g.read}}})],r.prototype,"style",void 0),t.__decorate([p.property({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"],readOnly:!0,json:{read:{source:"layerType"}}})],r.prototype,"operationalLayerType",void 0),t.__decorate([p.property({type:String,json:{write:!1,read:!1}})],r.prototype,"culture",void 0),t.__decorate([p.property({type:String,json:{write:!1,read:!1}})],r.prototype,"region",void 0),t.__decorate([p.property({type:String,json:{write:!0,read:!0}})],r.prototype,"portalUrl",void 0),t.__decorate([p.property({type:Boolean,json:{write:!1,read:!1}})],r.prototype,"hasAttributionData",void 0),t.__decorate([p.property({type:String,readOnly:!0,dependsOn:["bingMetadata"]})],r.prototype,"bingLogo",null),t.__decorate([p.subclass("esri.layers.BingMapsLayer")],r)}(y.OperationalLayer(s.MultiOriginJSONMixin(c)))}).apply(null,i))||(e.exports=o)},WaJo:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("Vx27")],void 0===(o=(function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0}),r.RefreshableLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshInterval=0,r}return t.__extends(r,e),r.prototype.refresh=function(){this.emit("refresh")},t.__decorate([i.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],r.prototype,"refreshInterval",void 0),t.__decorate([i.subclass("esri.layers.mixins.RefreshableLayer")],r)}(e)}}).apply(null,i))||(e.exports=o)},hk3y:function(e,r,t){var i,o;i=[t.dj.c(e.i),r],void 0===(o=(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}}}).apply(null,i))||(e.exports=o)},"rU+N":function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("KY0m"),t("rg9i")],void 0===(o=(function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(){this._propertyOriginMap=new Map,this._originStores=new Array(7),this._values=new Map}return e.prototype.clone=function(r){var t=new e,o=this._originStores[0];o&&o.forEach((function(e,r){t.set(r,i.clone(e),0)}));for(var a=function(e){var o=n._originStores[e];o&&o.forEach((function(o,a){r&&r.has(a)||t.set(a,i.clone(o),e)}))},n=this,s=2;s<7;s++)a(s);return t},e.prototype.get=function(e,r){var t=void 0===r?this._values:this._originStores[r];return t?t.get(e):void 0},e.prototype.keys=function(e){var r=null==e?this._values:this._originStores[e];return r?t.keysOfMap(r):[]},e.prototype.set=function(e,r,t){void 0===t&&(t=6);var i=this._originStores[t];if(i||(i=new Map,this._originStores[t]=i),i.set(e,r),!this._values.has(e)||this._propertyOriginMap.get(e)<=t){var o=this._values.get(e);return this._values.set(e,r),this._propertyOriginMap.set(e,t),o!==r}return!1},e.prototype.delete=function(e,r){void 0===r&&(r=6);var t=this._originStores[r];if(t){var i=t.get(e);if(t.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===r){this._values.delete(e);for(var o=r-1;o>=0;o--){var a=this._originStores[o];if(a&&a.has(e)){this._values.set(e,a.get(e)),this._propertyOriginMap.set(e,o);break}}}return i}},e.prototype.has=function(e,r){var t=void 0===r?this._values:this._originStores[r];return!!t&&t.has(e)},e.prototype.revert=function(e,r){for(;r>0&&!this.has(e,r);)--r;var t=this._originStores[r],i=t&&t.get(e),o=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,r),o!==i},e.prototype.originOf=function(e){return this._propertyOriginMap.get(e)||0},e.prototype.forEach=function(e){this._values.forEach(e)},e}();r.default=o}).apply(null,i))||(e.exports=o)}}]);