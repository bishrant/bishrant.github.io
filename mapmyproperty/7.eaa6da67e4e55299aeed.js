(function(){var e={"arcgis-js-api/core/MultiOriginJSONSupport":"EUqE","esri/core/MultiOriginJSONSupport":"EUqE","arcgis-js-api/layers/support/commonProperties":"EtsK","esri/layers/support/commonProperties":"EtsK","arcgis-js-api/layers/mixins/OperationalLayer":"FEX1","esri/layers/mixins/OperationalLayer":"FEX1","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R","esri/layers/mixins/PortalLayer":"QJ8R","esri/support/popupUtils":"begh","esri/layers/mixins/operationalLayers":"hk3y","esri/core/accessorSupport/MultiOriginStore":"rU+N"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EUqE:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("Vx27"),r("rU+N"),r("ZEeX"),r("Ab+N"),r("o2T8"),r("Kg8D")],void 0===(o=(function(e,t,r,i,o,n,a,s,l,p){function c(e){return l.getProperties(e).store}Object.defineProperty(t,"__esModule",{value:!0}),t.MultiOriginJSONMixin=function(e){var t=function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this,o=l.getProperties(i),a=o.metadatas,s=o.store,p=new n.default;return o.store=p,s.keys().forEach((function(e){p.set(e,s.get(e),0)})),Object.keys(a).forEach((function(e){o.internalGet(e)&&p.set(e,o.internalGet(e),0)})),i}return r.__extends(t,e),t.prototype.clear=function(e,t){return void 0===t&&(t="user"),c(this).delete(e,a.nameToId(t))},t.prototype.read=function(e,t){s.default(this,e,t)},t.prototype.write=function(e,t){return p.default(this,e=e||{},t),e},t.prototype.getAtOrigin=function(e,t){var r=c(this),i=a.nameToId(t);if("string"==typeof e)return r.get(e,i);var o={};return e.forEach((function(e){o[e]=r.get(e,i)})),o},t.prototype.setAtOrigin=function(e,t,r){l.getProperties(this).setAtOrigin(e,t,a.nameToId(r))},t.prototype.originOf=function(e){return a.idToName(this.originIdOf(e))},t.prototype.originIdOf=function(e){return c(this).originOf(e)},t.prototype.revert=function(e,t){var r=c(this),i=a.nameToId(t),o=l.getProperties(this);("string"==typeof e?"*"===e?r.keys(i):[e]:e).forEach((function(e){o.propertyInvalidated(e),r.revert(e,i),o.propertyCommitted(e)}))},t.prototype.removeOrigin=function(e){for(var t=c(this),r=a.nameToId(e),i=0,o=t.keys(r);i<o.length;i++){var n=o[i];t.originOf(n)===r&&t.set(n,t.get(n,r),6)}},t.prototype.updateOrigin=function(e,t){for(var r=c(this),i=a.nameToId(t),o=this.get(e),n=i+1;n<7;++n)r.delete(e,n);r.set(e,o,i)},t.prototype.toJSON=function(e){return this.write(null,e)},r.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],t)}(e);return t.prototype.toJSON.isDefaultToJSON=!0,t};var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([o.subclass("esri.core.MultiOriginJSONSupport")],t)}(t.MultiOriginJSONMixin(i));t.MultiOriginJSONSupport=u}).apply(null,i))||(e.exports=o)},EtsK:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("o2T8"),r("Kg8D"),r("ojLd"),r("5ldw"),r("3fUp")],void 0===(o=(function(e,t,r,i,o,n,a,s){Object.defineProperty(t,"__esModule",{value:!0}),t.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,t,r,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||o.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},i))&&(t[r]=e)}}}}}},t.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,t){return!t.disablePopup}},write:{target:"disablePopup",writer:function(e,t,r){t[r]=!e}}}},t.labelsVisible={type:Boolean,value:!0,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},t.url={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}},t.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},t.elevationInfo={value:null,type:a,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},t.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},t.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},t.opacityDrawingInfo=r.__assign(r.__assign({},t.opacity),{json:r.__assign(r.__assign({},t.opacity.json),{origins:{"web-document":r.__assign(r.__assign({},t.opacity.json.origins["web-document"]),{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,t,r){return r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?s.transparencyToOpacity(t.layerDefinition.drawingInfo.transparency):void 0:s.transparencyToOpacity(t.drawingInfo.transparency)}}})})}).apply(null,i))||(e.exports=o)},FEX1:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("Vx27"),r("Ab+N"),r("Kg8D"),r("hk3y"),r("EtsK"),r("2Kdy")],void 0===(o=(function(e,t,r,i,o,n,a,s,l){Object.defineProperty(t,"__esModule",{value:!0}),t.OperationalLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.title="Layer",t}return r.__extends(t,e),t.prototype.writeListMode=function(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&a.willPropertyWrite(this,r,{},i))&&(t[r]=e)},t.prototype.writeOperationalLayerType=function(e,t){e&&(t.layerType=e)},t.prototype.writeTitle=function(e,t){t.title=e||"Layer"},t.prototype.read=function(t,r){var i=this;r&&(r.layer=this),n.readLoadable(this,t,(function(r){return e.prototype.read.call(i,t,r)}),r)},t.prototype.write=function(t,o){if(o&&o.origin){var n=o.origin+"/"+(o.layerContainerType||"operational-layers"),a=s.supportedTypes[n],l=a&&a[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===n&&(l=!1),!l)return o.messages&&o.messages.push(new i("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+n+"'",{layer:this})),null}var p=e.prototype.write.call(this,t,r.__assign(r.__assign({},o),{layer:this})),c=!!o&&!!o.messages&&!!o.messages.filter((function(e){return e instanceof i&&"web-document-write:property-required"===e.name})).length;return!this.url&&c?null:p},t.prototype.beforeSave=function(){},r.__decorate([o.property({json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),r.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),r.__decorate([o.property({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),r.__decorate([o.writer("listMode")],t.prototype,"writeListMode",null),r.__decorate([o.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),r.__decorate([o.writer("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),r.__decorate([o.property(l.opacity)],t.prototype,"opacity",void 0),r.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"title",void 0),r.__decorate([o.writer("title")],t.prototype,"writeTitle",null),r.__decorate([o.property({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],t.prototype,"visible",void 0),r.__decorate([o.subclass("esri.layers.mixins.OperationalLayer")],t)}(e)}}).apply(null,i))||(e.exports=o)},QJ8R:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF"),r("2Kdy")],void 0===(o=(function(e,t,i,o,n,a,s,l,p,c){Object.defineProperty(t,"__esModule",{value:!0});var u=n.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.resourceReferences={portalItem:null,paths:[]},t}return i.__extends(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new c({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var o,n;return i.__generator(this,(function(i){switch(i.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,new Promise((function(e,t){Promise.all([r.e(1),r.e(150)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(t.bind(this))}))];case 2:return o=i.sent(),a.throwIfAborted(t),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,i.sent()];case 4:throw n=i.sent(),u.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+n),n;case 5:return[2]}}))}))},t.prototype.read=function(t,r){r&&(r.layer=this),e.prototype.read.call(this,t,r)},t.prototype.write=function(t,r){var n=r&&r.portal,a=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||p.getDefault());return n&&a&&!s.hasSamePortal(a.restUrl,n.restUrl)?(r.messages&&r.messages.push(new o("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):e.prototype.write.call(this,t,i.__assign(i.__assign({},r),{layer:this}))},i.__decorate([l.property({type:c})],t.prototype,"portalItem",null),i.__decorate([l.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),i.__decorate([l.writer("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),i.__decorate([l.property()],t.prototype,"resourceReferences",void 0),i.__decorate([l.subclass("esri.layers.mixins.PortalLayer")],t)}(e)}}).apply(null,i))||(e.exports=o)},begh:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("ifLZ"),r("k7g7"),r("O4In"),r("Ctes"),r("BwRt")],void 0===(o=(function(e,t,r,i,o,n,a){Object.defineProperty(t,"__esModule",{value:!0});var s=["oid","global-id"],l=["oid","global-id","guid"];t.createPopupTemplate=function(e,t){var n=e.displayField,a=e.fields,s=e.title;if(!a)return null;var l=f({editFieldsInfo:e.editFieldsInfo,fields:a,objectIdField:e.objectIdField},t);if(!l.length)return null;var p=function(e){var t=i.getDisplayFieldName(e),r=e.titleBase;return t?r+": {"+t.trim()+"}":r}({titleBase:s,fields:a,displayField:n}),c=[new o.FieldsContent,new o.AttachmentsContent];return new r({title:p,content:c,fieldInfos:l})};var p=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],c=function(e,t){var r=t.editFieldsInfo,i=t.objectIdField,o=t.visibleFieldNames;return o?o.has(e.name):!(d(e.name,r)||i&&e.name===i||s.indexOf(e.type)>-1||p.some((function(t){return t.test(e.name)})))};function u(e,t){return"oid"===e.type?-1:"oid"===t.type?1:v(e)?-1:v(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function d(e,t){if(!e||!t)return!1;var r=t.creationDateField,i=t.creatorField,o=t.editDateField,n=t.editorField;return-1!==[r&&r.toLowerCase(),i&&i.toLowerCase(),o&&o.toLowerCase(),n&&n.toLowerCase()].indexOf(e.toLowerCase())}function y(e,t){return e.editable&&-1===l.indexOf(e.type)&&!d(e.name,t)}function f(e,t){var r=e.editFieldsInfo,i=e.objectIdField;return function(e,t){var r=e;return t&&(e=e.filter((function(e){return-1===t.indexOf(e.type)}))),e===r&&(e=e.slice()),e.sort(u),e}(e.fields,(null==t?void 0:t.ignoreFieldTypes)||h).map((function(e){return new n({fieldName:e.name,isEditable:y(e,r),label:e.alias,format:g(e),visible:c(e,{editFieldsInfo:r,objectIdField:i,visibleFieldNames:null==t?void 0:t.visibleFieldNames})})}))}function g(e){switch(e.type){case"small-integer":case"integer":case"single":return new a({digitSeparator:!0,places:0});case"double":return new a({digitSeparator:!0,places:2});case"date":return new a({dateFormat:"long-month-day-year"});default:return null}}function v(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}t.createFieldsContent=function(e,t){return new o.FieldsContent({fieldInfos:f(e,t).filter((function(e){return e.visible}))})},t.createFieldInfos=f;var h=["geometry","blob","raster","guid","xml"]}).apply(null,i))||(e.exports=o)},hk3y:function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}}}).apply(null,i))||(e.exports=o)},"rU+N":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("KY0m"),r("rg9i")],void 0===(o=(function(e,t,r,i){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this._propertyOriginMap=new Map,this._originStores=new Array(7),this._values=new Map}return e.prototype.clone=function(t){var r=new e,o=this._originStores[0];o&&o.forEach((function(e,t){r.set(t,i.clone(e),0)}));for(var n=function(e){var o=a._originStores[e];o&&o.forEach((function(o,n){t&&t.has(n)||r.set(n,i.clone(o),e)}))},a=this,s=2;s<7;s++)n(s);return r},e.prototype.get=function(e,t){var r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0},e.prototype.keys=function(e){var t=null==e?this._values:this._originStores[e];return t?r.keysOfMap(t):[]},e.prototype.set=function(e,t,r){void 0===r&&(r=6);var i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||this._propertyOriginMap.get(e)<=r){var o=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),o!==t}return!1},e.prototype.delete=function(e,t){void 0===t&&(t=6);var r=this._originStores[t];if(r){var i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(var o=t-1;o>=0;o--){var n=this._originStores[o];if(n&&n.has(e)){this._values.set(e,n.get(e)),this._propertyOriginMap.set(e,o);break}}}return i}},e.prototype.has=function(e,t){var r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)},e.prototype.revert=function(e,t){for(;t>0&&!this.has(e,t);)--t;var r=this._originStores[t],i=r&&r.get(e),o=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),o!==i},e.prototype.originOf=function(e){return this._propertyOriginMap.get(e)||0},e.prototype.forEach=function(e){this._values.forEach(e)},e}();t.default=o}).apply(null,i))||(e.exports=o)}}]);