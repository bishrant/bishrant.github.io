(function(){var e={"esri/layers/support/BuildingFilterBlock":"/9KT","esri/layers/support/BuildingFilterModeWireFrame":"1UK1","esri/layers/support/BuildingFilterAuthoringInfoCheckbox":"4a5X","esri/layers/support/BuildingFilterModeXRay":"DtfD","esri/layers/support/BuildingSummaryStatistics":"EPMy","esri/layers/support/BuildingFilterModeSolid":"JApJ","esri/layers/support/BuildingFilterMode":"KScw","esri/layers/buildingSublayers/BuildingComponentSublayer":"Q56x","esri/layers/buildingSublayers/BuildingGroupSublayer":"VN8a","esri/layers/buildingSublayers/BuildingSublayer":"Vsc6","esri/layers/support/BuildingFilterAuthoringInfoType":"Vx5u","esri/layers/support/BuildingFilterAuthoringInfo":"ZRt/","esri/layers/BuildingSceneLayer":"gRqF","esri/layers/support/BuildingFilterAuthoringInfoBlock":"hBBj","esri/layers/support/BuildingFilter":"z01C"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"/9KT":function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("ycL1"),t("rg9i"),t("Vx27"),t("KScw"),t("JApJ"),t("1UK1"),t("DtfD")],void 0===(i=(function(e,r,t,o,i,n,s,a,p,l){"use strict";var u={nonNullable:!0,types:{key:"type",base:s,typeMap:{solid:a,"wire-frame":p,"x-ray":l}},json:{read:function(e){switch(e&&e.type){case"solid":return a.fromJSON(e);case"wireFrame":return p.fromJSON(e);case"x-ray":return l.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterExpression=null,r.filterMode=new a,r.title="",r}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){return new o({filterExpression:this.filterExpression,filterMode:i.clone(this.filterMode),title:this.title})},t.__decorate([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"filterExpression",void 0),t.__decorate([n.property(u)],r.prototype,"filterMode",void 0),t.__decorate([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"title",void 0),o=t.__decorate([n.subclass("esri.layers.support.BuildingFilterBlock")],r)}(o.JSONSupport)}).apply(null,o))||(e.exports=i)},"1UK1":function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("rg9i"),t("Vx27"),t("KScw"),t("DoiH")],void 0===(i=(function(e,r,t,o,i,n,s){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="wire-frame",r.edges=null,r}var n;return t.__extends(r,e),n=r,r.prototype.clone=function(){return new n({edges:o.clone(this.edges)})},t.__decorate([i.enumeration({wireFrame:"wire-frame"})],r.prototype,"type",void 0),t.__decorate([i.property(s.symbol3dEdgesProperty)],r.prototype,"edges",void 0),n=t.__decorate([i.subclass("esri.layers.support.BuildingFilterModeWireFrame")],r)}(n)}).apply(null,o))||(e.exports=i)},"4a5X":function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("y4WC"),t("rg9i"),t("Vx27"),t("ZRt/"),t("hBBj")],void 0===(i=(function(e,r,t,o,i,n,s,a){"use strict";var p=o.ofType(a);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="checkbox",r}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){return new o({filterBlocks:i.clone(this.filterBlocks)})},t.__decorate([n.property({type:["checkbox"]})],r.prototype,"type",void 0),t.__decorate([n.property({type:p,json:{write:!0}})],r.prototype,"filterBlocks",void 0),o=t.__decorate([n.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],r)}(s)}).apply(null,o))||(e.exports=i)},DtfD:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("Vx27"),t("KScw")],void 0===(i=(function(e,r,t,o,i){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="x-ray",r}var i;return t.__extends(r,e),i=r,r.prototype.clone=function(){return new i},t.__decorate([o.property({type:["x-ray"],readOnly:!0,json:{write:!0}})],r.prototype,"type",void 0),i=t.__decorate([o.subclass("esri.layers.support.BuildingFilterModeXRay")],r)}(i)}).apply(null,o))||(e.exports=i)},EPMy:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("ycL1"),t("R7Ts"),t("qsST"),t("LxLY"),t("SZNs"),t("qMld"),t("Vx27")],void 0===(i=(function(e,r,t,o,i,n,s,a,p,l,u){"use strict";var y=s.getLogger("esri.layers.support.BuildingSummaryStatistics"),d=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.fieldName=null,r.modelName=null,r.label=null,r.min=null,r.max=null,r.mostFrequentValues=null,r.subLayerIds=null,r}return t.__extends(r,e),t.__decorate([u.property({type:String})],r.prototype,"fieldName",void 0),t.__decorate([u.property({type:String})],r.prototype,"modelName",void 0),t.__decorate([u.property({type:String})],r.prototype,"label",void 0),t.__decorate([u.property({type:Number})],r.prototype,"min",void 0),t.__decorate([u.property({type:Number})],r.prototype,"max",void 0),t.__decorate([u.property({json:{read:function(e){return Array.isArray(e)&&(e.every((function(e){return"string"==typeof e}))||e.every((function(e){return"number"==typeof e})))?e.slice():null}}})],r.prototype,"mostFrequentValues",void 0),t.__decorate([u.property({type:[Number]})],r.prototype,"subLayerIds",void 0),t.__decorate([u.subclass("esri.layers.support.BuildingFieldStatistics")],r)}(i.JSONSupport);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.url=null,r}return t.__extends(r,e),Object.defineProperty(r.prototype,"fields",{get:function(){return this.loaded?this._get("fields"):(y.error("building summary statistics are not loaded"),null)},enumerable:!1,configurable:!0}),r.prototype.load=function(e){var r=a.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),l.resolve(this)},r.prototype._fetchService=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,o(this.url,{query:{f:"json"},responseType:"json",signal:e})];case 1:return r=t.sent(),this.read(r.data,{origin:"service"}),[2]}}))}))},t.__decorate([u.property({constructOnly:!0,type:String})],r.prototype,"url",void 0),t.__decorate([u.property({readOnly:!0,type:[d],json:{read:{source:"summary"}}})],r.prototype,"fields",null),t.__decorate([u.subclass("esri.layers.support.BuildingSummaryStatistics")],r)}(n.LoadableMixin(p.EsriPromiseMixin(i.JSONSupport)))}).apply(null,o))||(e.exports=i)},JApJ:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("Vx27"),t("KScw")],void 0===(i=(function(e,r,t,o,i){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="solid",r}var i;return t.__extends(r,e),i=r,r.prototype.clone=function(){return new i},t.__decorate([o.property({type:["solid"],readOnly:!0,json:{write:!0}})],r.prototype,"type",void 0),i=t.__decorate([o.subclass("esri.layers.support.BuildingFilterModeSolid")],r)}(i)}).apply(null,o))||(e.exports=i)},KScw:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("ycL1"),t("Vx27")],void 0===(i=(function(e,r,t,o,i){"use strict";return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),t.__decorate([i.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),t.__decorate([i.subclass("esri.layers.support.BuildingFilterMode")],r)}(o.JSONSupport)}).apply(null,o))||(e.exports=i)},Q56x:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("ifLZ"),t("OXG3"),t("zp6E"),t("ma1f"),t("ImIS"),t("R7Ts"),t("LxLY"),t("SZNs"),t("qMld"),t("Vx27"),t("N7S/"),t("Z4y+"),t("Zvuv"),t("Vsc6"),t("EtsK"),t("ZJpS"),t("I90O"),t("OjNT"),t("begh"),t("5ldw"),t("IpeC")],void 0===(i=(function(e,r,t,o,i,n,s,a,p,l,u,y,d,c,f,_,v,h,g,b,m,S,w,O){"use strict";var x=g.defineFieldProperties();return function(e){function r(r){var t=e.call(this,r)||this;return t.type="building-component",t.nodePages=null,t.materialDefinitions=null,t.textureSetDefinitions=null,t.geometryDefinitions=null,t.serviceUpdateTimeStamp=null,t.fields=null,t.associatedLayer=null,t.outFields=null,t.listMode="show",t.renderer=null,t.definitionExpression=null,t.popupEnabled=!0,t.popupTemplate=null,t.layerType="3d-object",t}return t.__extends(r,e),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fieldsIndex",{get:function(){return new b(this.fields)},enumerable:!1,configurable:!0}),r.prototype.readAssociatedLayer=function(e,r){var t=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return l.isSome(t)&&"number"==typeof o?new _({portalItem:t,layerId:o}):null},Object.defineProperty(r.prototype,"objectIdField",{get:function(){if(null!=this.fields)for(var e=0,r=this.fields;e<r.length;e++){var t=r[e];if("oid"===t.type)return t.name}return null},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!1,configurable:!0}),r.prototype.load=function(e){var r=l.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),y.resolve(this)},r.prototype.createPopupTemplate=function(e){return S.createPopupTemplate(this,e)},r.prototype._fetchService=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,n(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})];case 1:return r=t.sent(),this.read(r.data,{origin:"service",url:this.parsedUrl}),[2]}}))}))},r.prototype.getField=function(e){return this.fieldsIndex.get(e)},r.prototype.getFieldDomain=function(e){var r=this.getField(e);return r&&r.domain?r.domain:null},Object.defineProperty(r.prototype,"geometryType",{get:function(){return"3d-object"===this.layerType?"mesh":"point"},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"profile",{get:function(){return"3d-object"===this.layerType?"mesh-pyramids":"points"},enumerable:!1,configurable:!0}),r.prototype.createQuery=function(){var e=new O;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e},r.prototype.queryExtent=function(e,r){var t=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryExtent(e||t.createQuery(),r)}))},r.prototype.queryFeatureCount=function(e,r){var t=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryFeatureCount(e||t.createQuery(),r)}))},r.prototype.queryFeatures=function(e,r){var t=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryFeatures(e||t.createQuery(),r)})).then((function(e){if(e&&e.features)for(var r=0,o=e.features;r<o.length;r++){var i=o[r];i.layer=t.layer,i.sourceLayer=t}return e}))},r.prototype.queryObjectIds=function(e,r){var t=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryObjectIds(e||t.createQuery(),r)}))},r.prototype.getFieldUsageInfo=function(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:l.isSome(this.associatedLayer)}},r.prototype._getAssociatedLayerForQuery=function(){var e=this.associatedLayer;return l.isSome(e)&&e.loaded?y.resolve(e):this._loadAssociatedLayerForQuery()},r.prototype._loadAssociatedLayerForQuery=function(){return t.__awaiter(this,void 0,void 0,(function(){var e;return t.__generator(this,(function(r){switch(r.label){case 0:return[4,this.load()];case 1:if(r.sent(),l.isNone(this.associatedLayer))throw new s("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.associatedLayer.load()];case 3:return r.sent(),[3,5];case 4:throw e=r.sent(),new s("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e});case 5:return[2,this.associatedLayer]}}))}))},t.__decorate([d.property({readOnly:!0,dependsOn:["layer","id"]})],r.prototype,"parsedUrl",null),t.__decorate([d.property({type:m.I3SNodePageDefinition,readOnly:!0})],r.prototype,"nodePages",void 0),t.__decorate([d.property({type:[m.I3SMaterialDefinition],readOnly:!0})],r.prototype,"materialDefinitions",void 0),t.__decorate([d.property({type:[m.I3STextureSetDefinition],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),t.__decorate([d.property({type:[m.I3SGeometryDefinition],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),t.__decorate([d.property({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),t.__decorate([d.property({readOnly:!0})],r.prototype,"store",void 0),t.__decorate([d.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],r.prototype,"rootNode",void 0),t.__decorate([d.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),t.__decorate([d.property(x.fields)],r.prototype,"fields",void 0),t.__decorate([d.property({readOnly:!0,dependsOn:["fields"]})],r.prototype,"fieldsIndex",null),t.__decorate([d.property({readOnly:!0,type:_})],r.prototype,"associatedLayer",void 0),t.__decorate([d.reader("service","associatedLayer",["associatedLayerID"])],r.prototype,"readAssociatedLayer",null),t.__decorate([d.property(x.outFields)],r.prototype,"outFields",void 0),t.__decorate([d.property({type:String,dependsOn:["fields"],readOnly:!0})],r.prototype,"objectIdField",null),t.__decorate([d.property({readOnly:!0,type:c,aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),t.__decorate([d.property({readOnly:!0,type:f,aliasOf:"layer.spatialReference"})],r.prototype,"spatialReference",void 0),t.__decorate([d.property({readOnly:!0,aliasOf:"layer.version"})],r.prototype,"version",void 0),t.__decorate([d.property({readOnly:!0,type:w,aliasOf:"layer.elevationInfo"})],r.prototype,"elevationInfo",void 0),t.__decorate([d.property({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],r.prototype,"minScale",void 0),t.__decorate([d.property({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],r.prototype,"maxScale",void 0),t.__decorate([d.property({type:["hide","show"],json:{write:!0}})],r.prototype,"listMode",void 0),t.__decorate([d.property({types:i.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],r.prototype,"renderer",void 0),t.__decorate([d.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],r.prototype,"definitionExpression",void 0),t.__decorate([d.property(h.popupEnabled)],r.prototype,"popupEnabled",void 0),t.__decorate([d.property({type:o,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),t.__decorate([d.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],r.prototype,"normalReferenceFrame",void 0),t.__decorate([d.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],r.prototype,"defaultPopupTemplate",null),t.__decorate([d.property({json:{write:!1}}),d.enumeration(new a.default({"3DObject":"3d-object",Point:"point"}))],r.prototype,"layerType",void 0),t.__decorate([d.property({dependsOn:["layerType"]})],r.prototype,"geometryType",null),t.__decorate([d.property({dependsOn:["layerType"]})],r.prototype,"profile",null),t.__decorate([d.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],r)}(p.LoadableMixin(u.EsriPromiseMixin(v)))}).apply(null,o))||(e.exports=i)},VN8a:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("y4WC"),t("sS22"),t("V2ZO"),t("Vx27"),t("Q56x"),t("Vsc6")],void 0===(i=(function(e,r,t,o,i,n,s,a,p){"use strict";var l={type:o,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:u}}},read:!1}};function u(e,r,t){if(e&&Array.isArray(e))return new o(e.map((function(e){var r=function(e){return"group"===e.layerType?y:a}(e);if(r){var o=new r;return o.read(e,t),o}t&&t.messages&&e&&t.messages.push(new n("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t}))})))}var y=function(e){function r(r){var t=e.call(this,r)||this;return t.type="building-group",t.listMode="show",t.sublayers=null,t}var o;return t.__extends(r,e),o=r,r.prototype.loadAll=function(){var e=this;return i.loadAllChildren(this,(function(r){return o.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&r(e)}))}))},t.__decorate([s.property({type:["hide","show","hide-children"],json:{write:!0}})],r.prototype,"listMode",void 0),t.__decorate([s.property(l)],r.prototype,"sublayers",void 0),o=t.__decorate([s.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],r)}(p);return function(e){e.sublayersProperty=l,e.readSublayers=u,e.forEachSublayer=function e(r,t){r.forEach((function(r){t(r),"building-group"===r.type&&e(r.sublayers,t)}))}}(y||(y={})),y}).apply(null,o))||(e.exports=i)},Vsc6:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("NfRO"),t("EUqE"),t("Vx27"),t("EtsK")],void 0===(i=(function(e,r,t,o,i,n,s){"use strict";return function(e){function r(r){var t=e.call(this,r)||this;return t.title="",t.id=-1,t.modelName=null,t.isEmpty=null,t.visible=!0,t.opacity=1,t}return t.__extends(r,e),r.prototype.readTitle=function(e,r){return"string"==typeof r.alias?r.alias:"string"==typeof r.name?r.name:""},r.prototype.readIdOnlyOnce=function(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0},t.__decorate([n.property({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],r.prototype,"title",void 0),t.__decorate([n.reader("service","title",["alias","name"])],r.prototype,"readTitle",null),t.__decorate([n.property()],r.prototype,"layer",void 0),t.__decorate([n.property({type:Number,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],r.prototype,"id",void 0),t.__decorate([n.reader("service","id")],r.prototype,"readIdOnlyOnce",null),t.__decorate([n.property(s.readOnlyService(String))],r.prototype,"modelName",void 0),t.__decorate([n.property(s.readOnlyService(Boolean))],r.prototype,"isEmpty",void 0),t.__decorate([n.property({type:Boolean,json:{name:"visibility",write:!0}})],r.prototype,"visible",void 0),t.__decorate([n.property({type:Number,json:{write:!0}})],r.prototype,"opacity",void 0),t.__decorate([n.subclass("esri.layers.buildingSublayers.BuildingSublayer")],r)}(o.IdentifiableMixin(i.MultiOriginJSONSupport))}).apply(null,o))||(e.exports=i)},Vx5u:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("ycL1"),t("rg9i"),t("Vx27")],void 0===(i=(function(e,r,t,o,i,n){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterType=null,r.filterValues=null,r}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){return new o({filterType:this.filterType,filterValues:i.clone(this.filterValues)})},t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"filterType",void 0),t.__decorate([n.property({type:[String],json:{write:!0}})],r.prototype,"filterValues",void 0),o=t.__decorate([n.subclass("esri.layers.support.BuildingFilterAuthoringInfoType")],r)}(o.JSONSupport)}).apply(null,o))||(e.exports=i)},"ZRt/":function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("ycL1"),t("Vx27")],void 0===(i=(function(e,r,t,o,i){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type=null,r}return t.__extends(r,e),t.__decorate([i.property({type:String,readOnly:!0,json:{write:!0}})],r.prototype,"type",void 0),t.__decorate([i.subclass("esri.layers.support.BuildingFilterAuthoringInfo")],r)}(o.JSONSupport)}).apply(null,o))||(e.exports=i)},gRqF:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("y4WC"),t("6Ej+"),t("ma1f"),t("rg9i"),t("sS22"),t("qsST"),t("LxLY"),t("EUqE"),t("qMld"),t("jfWY"),t("Vx27"),t("N7S/"),t("Z4y+"),t("0RER"),t("Q56x"),t("VN8a"),t("2fnV"),t("FEX1"),t("QJ8R"),t("OXmT"),t("JNpq"),t("z01C"),t("EPMy"),t("EtsK"),t("y5xs")],void 0===(i=(function(e,r,t,o,i,n,s,a,p,l,u,y,d,c,f,_,v,h,g,b,m,S,w,O,x,j,I,F){"use strict";var T=p.getLogger("esri.layers.BuildingSceneLayer"),B=o.ofType(x),L=s.clone(g.sublayersProperty);return L.json.origins["web-scene"]={type:[h],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}},L.json.origins["portal-item"]={type:[h],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}},function(e){function r(r){var t=e.call(this,r)||this;return t.operationalLayerType="BuildingSceneLayer",t.allSublayers=new i({root:t,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),t.sublayers=null,t.sublayerOverrides=null,t.filters=new B,t.activeFilterId=null,t.summaryStatistics=null,t.outFields=null,t.type="building-scene",t}return t.__extends(r,e),r.prototype.normalizeCtorArgs=function(e){return"string"==typeof e?{url:e}:e},r.prototype.destroy=function(){this.allSublayers.destroy()},r.prototype.readSublayers=function(e,r,t){var o=this,i=g.readSublayers(e,r,t);return g.forEachSublayer(i,(function(e){return e.layer=o})),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i},r.prototype.applySublayerOverrides=function(e,r){var t=r.overrides,o=r.context;g.forEachSublayer(e,(function(e){return e.read(t.get(e.id),o)}))},r.prototype.readSublayerOverrides=function(e,r){for(var t=new Map,o=0,i=e;o<i.length;o++){var s=i[o];null!=s&&"object"==typeof s&&"number"==typeof s.id?t.set(s.id,s):r.messages.push(new n("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}))}return{overrides:t,context:r}},r.prototype.writeSublayerOverrides=function(e,r,t){var o=[];g.forEachSublayer(this.sublayers,(function(e){var r=e.write({},t);Object.keys(r).length>1&&o.push(r)})),o.length>0&&(r.sublayers=o)},r.prototype.writeUnappliedOverrides=function(e,r){r.sublayers=[],e.overrides.forEach((function(e){r.sublayers.push(s.clone(e))}))},r.prototype.write=function(r,t){return r=e.prototype.write.call(this,r,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,r,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,r)),r},r.prototype.read=function(r,t){if(e.prototype.read.call(this,r,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=r&&Array.isArray(r.sublayers)){var o=this.readSublayerOverrides(r.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,o):this.sublayerOverrides=o}},r.prototype.readSummaryStatistics=function(e,r){if("string"==typeof r.statisticsHRef){var t=d.join(this.parsedUrl.path,r.statisticsHRef);return new j({url:t})}return null},Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!1,configurable:!0}),r.prototype.load=function(e){var r=this,t=l.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch((function(){})).then((function(){return r._fetchService(t)})).then((function(){return r._fetchAssociatedFeatureService(t)}));return this.addResolvingPromise(o),y.resolve(this)},r.prototype.loadAll=function(){var e=this;return a.loadAll(this,(function(r){g.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&r(e)})),e.summaryStatistics&&r(e.summaryStatistics)}))},r.prototype.saveAs=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var o=this;return t.__generator(this,(function(i){return[2,this._debouncedSaveOperations(1,t.__assign(t.__assign({},r),{getTypeKeywords:function(){return o._getTypeKeywords()},portalItemLayerType:"building-scene"}),e)]}))}))},r.prototype.save=function(){return t.__awaiter(this,void 0,void 0,(function(){var e=this;return t.__generator(this,(function(r){return[2,this._debouncedSaveOperations(0,{getTypeKeywords:function(){return e._getTypeKeywords()},portalItemLayerType:"building-scene"})]}))}))},r.prototype.validateLayer=function(e){if(!e.layerType||"Building"!==e.layerType)throw new n("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})},r.prototype._getTypeKeywords=function(){return["Building"]},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&T.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&T.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))},r.prototype._fetchAssociatedFeatureService=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,o,i;return t.__generator(this,(function(t){switch(t.label){case 0:r=new F.FetchAssociatedFeatureLayer(this.parsedUrl,this.portalItem,e),t.label=1;case 1:return t.trys.push([1,3,,4]),o=this,[4,r.fetchPortalItem()];case 2:return o.associatedFeatureServiceItem=t.sent(),[3,4];case 3:return i=t.sent(),T.warn("Associated feature service item could not be loaded",i),[3,4];case 4:return[2]}}))}))},t.__decorate([c.property({type:["BuildingSceneLayer"]})],r.prototype,"operationalLayerType",void 0),t.__decorate([c.property({readOnly:!0})],r.prototype,"allSublayers",void 0),t.__decorate([c.property(L)],r.prototype,"sublayers",void 0),t.__decorate([c.reader("service","sublayers")],r.prototype,"readSublayers",null),t.__decorate([c.property({type:B,nonNullable:!0,json:{write:!0}})],r.prototype,"filters",void 0),t.__decorate([c.property({type:String,json:{write:!0}})],r.prototype,"activeFilterId",void 0),t.__decorate([c.property({readOnly:!0,type:j})],r.prototype,"summaryStatistics",void 0),t.__decorate([c.reader("summaryStatistics",["statisticsHRef"])],r.prototype,"readSummaryStatistics",null),t.__decorate([c.property({type:[String],json:{read:!1}})],r.prototype,"outFields",void 0),t.__decorate([c.property(I.readOnlyService(f))],r.prototype,"fullExtent",void 0),t.__decorate([c.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),t.__decorate([c.property(I.readOnlyService(_))],r.prototype,"spatialReference",void 0),t.__decorate([c.property(I.elevationInfo)],r.prototype,"elevationInfo",null),t.__decorate([c.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t.__decorate([c.property()],r.prototype,"associatedFeatureServiceItem",void 0),t.__decorate([c.subclass("esri.layers.BuildingSceneLayer")],r)}(O.SceneService(b.ArcGISService(m.OperationalLayer(S.PortalLayer(w.ScaleRangeLayer(u.MultiOriginJSONMixin(v)))))))}).apply(null,o))||(e.exports=i)},hBBj:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("y4WC"),t("ycL1"),t("rg9i"),t("Vx27"),t("Vx5u")],void 0===(i=(function(e,r,t,o,i,n,s,a){"use strict";var p=o.ofType(a);return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){return new o({filterTypes:n.clone(this.filterTypes)})},t.__decorate([s.property({type:p,json:{write:!0}})],r.prototype,"filterTypes",void 0),o=t.__decorate([s.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],r)}(i.JSONSupport)}).apply(null,o))||(e.exports=i)},z01C:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("y4WC"),t("ycL1"),t("rg9i"),t("V42v"),t("Vx27"),t("ZRt/"),t("4a5X"),t("/9KT")],void 0===(i=(function(e,r,t,o,i,n,s,a,p,l,u){"use strict";var y=o.ofType(u);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.filterBlocks=null,r.id=s.generateUUID(),r.name=null,r}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){return new o({description:this.description,filterBlocks:n.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:n.clone(this.filterAuthoringInfo)})},t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),t.__decorate([a.property({type:y,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"filterBlocks",void 0),t.__decorate([a.property({types:{key:"type",base:p,typeMap:{checkbox:l}},json:{read:function(e){switch(e&&e.type){case"checkbox":return l.fromJSON(e);default:return null}},write:!0}})],r.prototype,"filterAuthoringInfo",void 0),t.__decorate([a.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"id",void 0),t.__decorate([a.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"name",void 0),o=t.__decorate([a.subclass("esri.layers.support.BuildingFilter")],r)}(i.JSONSupport)}).apply(null,o))||(e.exports=i)}}]);