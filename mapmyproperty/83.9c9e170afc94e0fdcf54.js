(function(){var e={"esri/layers/support/RangeInfo":"h2t1","esri/layers/SceneLayer":"yf9t"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{h2t1:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RangeInfo=void 0;var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name=null,t.field=null,t.currentRangeExtent=null,t.fullRangeExtent=null,t.type="rangeInfo",t}return r.__extends(t,e),r.__decorate([n.property({type:String,json:{read:!0,write:!0}})],t.prototype,"name",void 0),r.__decorate([n.property({type:String,json:{read:!0,write:!0}})],t.prototype,"field",void 0),r.__decorate([n.property({type:[Number],json:{read:!0,write:!0}})],t.prototype,"currentRangeExtent",void 0),r.__decorate([n.property({type:[Number],json:{read:!0,write:!0}})],t.prototype,"fullRangeExtent",void 0),r.__decorate([n.property({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),r.__decorate([n.subclass("esri.layers.support.RangeInfo")],t)}(o.JSONSupport);t.RangeInfo=i,t.default=i}).apply(null,o))||(e.exports=n)},yf9t:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("ifLZ"),r("OXG3"),r("zp6E"),r("ma1f"),r("qsST"),r("LxLY"),r("EUqE"),r("qMld"),r("jfWY"),r("8MXS"),r("Vx27"),r("o2T8"),r("0RER"),r("2fnV"),r("FEX1"),r("QJ8R"),r("OXmT"),r("JNpq"),r("EtsK"),r("EtsK"),r("aWt5"),r("fQaS"),r("y5xs"),r("ZJpS"),r("I90O"),r("k7g7"),r("OjNT"),r("5WBt"),r("UN5d"),r("h2t1"),r("PhdM"),r("begh"),r("IpeC"),r("2Kdy")],void 0===(n=(function(e,t,r,o,n,i,a,s,p,l,d,u,y,c,f,h,g,v,_,m,b,w,I,S,L,O,j,F,P,x,T,E,D,R,N,A){"use strict";var q=["3DObject","Point"],U=s.getLogger("esri.layers.SceneLayer"),M=j.defineFieldProperties(),Q=function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.featureReduction=null,o.rangeInfos=null,o.operationalLayerType="ArcGISSceneServiceLayer",o.type="scene",o.fields=null,o.outFields=null,o.nodePages=null,o.materialDefinitions=null,o.textureSetDefinitions=null,o.geometryDefinitions=null,o.serviceUpdateTimeStamp=null,o.definitionExpression=null,o.path=null,o.labelsVisible=!0,o.labelingInfo=null,o.legendEnabled=!0,o.cachedDrawingInfo={color:!1},o.popupEnabled=!0,o.popupTemplate=null,o.objectIdField=null,o.objectIdFilter=null,o._fieldUsageInfo={},o.screenSizePerspectiveEnabled=!0,o}return r.__extends(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r.__assign({url:e},t):e},t.prototype.getField=function(e){return this.fieldsIndex.get(e)},t.prototype.getFieldDomain=function(e){var t=this.getField(e);return t&&t.domain?t.domain:null},Object.defineProperty(t.prototype,"fieldsIndex",{get:function(){return new F(this.fields)},enumerable:!1,configurable:!0}),t.prototype.readNodePages=function(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:x.I3SNodePageDefinition.fromJSON(e,r)},Object.defineProperty(t.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"geometryType",{get:function(){return V[this.profile]||"mesh"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"renderer",{set:function(e){P.fixRendererFields(e,this.fields),this._set("renderer",e)},enumerable:!1,configurable:!0}),t.prototype.readCachedDrawingInfo=function(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e},Object.defineProperty(t.prototype,"defaultPopupTemplate",{get:function(){return p.isSome(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null},enumerable:!1,configurable:!0}),t.prototype.readObjectIdField=function(e,t){return!e&&t.fields&&t.fields.some((function(t){return"esriFieldTypeOID"===t.type&&(e=t.name),!!e})),e||void 0},t.prototype.readProfile=function(e,t){var r=t.store.profile;return null!=r&&k[r]?k[r]:(U.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")},t.prototype.load=function(e){var t=this,r=p.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)})).then((function(){return d.all([t._verifyRootNodeAndUpdateExtent(t.nodePages,r),t._setAssociatedFeatureLayer(r)])})).then((function(){return t._validateElevationInfo()})).then((function(){return t._applyAssociatedLayerOverrides()})).then((function(){return t._populateFieldUsageInfo()})).then((function(){return R.loadStyleRenderer(t,{origin:"service"},r)})).then((function(){return P.fixRendererFields(t.renderer,t.fields)}));return this.addResolvingPromise(o),d.resolve(this)},t.prototype.createQuery=function(){var e=new A;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e},t.prototype.queryExtent=function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryExtent(e||r.createQuery(),t)}))},t.prototype.queryFeatureCount=function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryFeatureCount(e||r.createQuery(),t)}))},t.prototype.queryFeatures=function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryFeatures(e||r.createQuery(),t)})).then((function(e){if(e&&e.features)for(var t=0,o=e.features;t<o.length;t++){var n=o[t];n.layer=r,n.sourceLayer=r}return e}))},t.prototype.queryObjectIds=function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryObjectIds(e||r.createQuery(),t)}))},t.prototype.getFieldUsageInfo=function(e){var t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(U.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)},t.prototype.createPopupTemplate=function(e){return N.createPopupTemplate(this,e)},t.prototype._getAssociatedLayerForQuery=function(){var e=this.associatedLayer;return p.isSome(e)&&e.loaded?d.resolve(e):this._loadAssociatedLayerForQuery()},t.prototype._loadAssociatedLayerForQuery=function(){return r.__awaiter(this,void 0,void 0,(function(){var e;return r.__generator(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:if(t.sent(),p.isNone(this.associatedLayer))throw new a("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});t.label=2;case 2:return t.trys.push([2,4,,5]),[4,this.associatedLayer.load()];case 3:return t.sent(),[3,5];case 4:throw e=t.sent(),new a("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e});case 5:return[2,this.associatedLayer]}}))}))},t.prototype.hasCachedStatistics=function(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((function(t){return t.name===e}))},t.prototype.queryCachedStatistics=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,n,s,p,l;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this.load(t)];case 1:if(r.sent(),!this.statisticsInfo)throw new a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");if(!(o=this.fieldsIndex.get(e)))throw new a("scenelayer:field-unexisting","Field '"+e+"' does not exist on the layer");for(n=0,s=this.statisticsInfo;n<s.length;n++)if((p=s[n]).name===o.name)return l=u.join(this.parsedUrl.path,p.href),[2,i(l,{query:{f:"json"},responseType:"json",signal:t?t.signal:null}).then((function(e){return e.data}))];throw new a("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}}))}))},t.prototype.saveAs=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o=this;return r.__generator(this,(function(n){return[2,this._debouncedSaveOperations(1,r.__assign(r.__assign({},t),{getTypeKeywords:function(){return o._getTypeKeywords()},portalItemLayerType:"scene"}),e)]}))}))},t.prototype.save=function(){return r.__awaiter(this,void 0,void 0,(function(){var e=this;return r.__generator(this,(function(t){return[2,this._debouncedSaveOperations(0,{getTypeKeywords:function(){return e._getTypeKeywords()},portalItemLayerType:"scene"})]}))}))},t.prototype.validateLayer=function(e){if(e.layerType&&-1===q.indexOf(e.layerType))throw new a("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});!function(e,t){var r=!1,o=!1;if(null==e)r=!0,o=!0;else{var n=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,o=n;break;case"vertex-reference-frame":r=!0,o=!n;break;default:r=!1}}if(!r)throw new a("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!o)throw new a("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)},t.prototype._getTypeKeywords=function(){var e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new a("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e},t.prototype._populateFieldUsageInfo=function(){if(this._fieldUsageInfo={},this.fields)for(var e=function(e){var r=!(!t.attributeStorageInfo||!t.attributeStorageInfo.some((function(t){return t.name===e.name}))),o=!!(p.isSome(t.associatedLayer)&&t.associatedLayer.fields&&t.associatedLayer.fields.some((function(t){return t&&e.name===t.name})));t._fieldUsageInfo[e.name]={supportsLabelingInfo:r,supportsRenderer:r,supportsPopupTemplate:r||o,supportsLayerQuery:o}},t=this,r=0,o=this.fields;r<o.length;r++)e(o[r])},t.prototype._applyAssociatedLayerOverrides=function(){if(!p.isNone(this.associatedLayer)){if(this.associatedLayer.fields){for(var e=null,t=0,r=this.associatedLayer.fields;t<r.length;t++){var o=r[t];this.getField(o.name)||(e||(e=this.fields?this.fields.slice():[]),e.push(o.clone()))}e&&this._set("fields",e)}for(var n=["popupTemplate","popupEnabled"],i=f.getProperties(this),a=0;a<n.length;a++){var s=n[a];this._buddyIsMoreImportant(s)&&(i.setDefaultOrigin(this.associatedLayer.originOf(s)),i.set(s,this.associatedLayer[s]),i.setDefaultOrigin("user"))}}},t.prototype._setAssociatedFeatureLayer=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,o,n;return r.__generator(this,(function(r){switch(r.label){case 0:if(-1===["mesh-pyramids","points"].indexOf(this.profile))return[2];t=new O.FetchAssociatedFeatureLayer(this.parsedUrl,this.portalItem,e),r.label=1;case 1:return r.trys.push([1,3,,4]),o=this,[4,t.fetch()];case 2:return o.associatedLayer=r.sent(),[3,4];case 3:return n=r.sent(),d.isAbortError(n)||this._logWarningOnPopupEnabled(),[3,4];case 4:return[2]}}))}))},t.prototype._logWarningOnPopupEnabled=function(){var e=this;y.whenValidOnce(this,["popupTemplate","popupEnabled"],(function(){return e.popupEnabled&&null!=e.popupTemplate})).then((function(){return function(){var t="this SceneLayer: "+e.title;null==e.attributeStorageInfo?U.warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on "+t):U.info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on "+t)}}))},t.prototype._buddyIsMoreImportant=function(e){if(p.isNone(this.associatedLayer))return!1;var t=this.originIdOf(e),r=this.associatedLayer.originIdOf(e);return null!=r&&r<=2?null==t||t<2:null!=r&&r<=3&&(null==t||t<3)},t.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&U.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&U.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))},r.__decorate([c.property({types:{key:"type",base:S.default,typeMap:{selection:L}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],t.prototype,"featureReduction",void 0),r.__decorate([c.property({type:[D.default],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],t.prototype,"rangeInfos",void 0),r.__decorate([c.property({json:{read:!1}})],t.prototype,"associatedLayer",void 0),r.__decorate([c.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([c.property({type:["ArcGISSceneServiceLayer"]})],t.prototype,"operationalLayerType",void 0),r.__decorate([c.property({json:{read:!1},readOnly:!0})],t.prototype,"type",void 0),r.__decorate([c.property(r.__assign(r.__assign({},M.fields),{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],t.prototype,"fields",void 0),r.__decorate([c.property({readOnly:!0,dependsOn:["fields"]})],t.prototype,"fieldsIndex",null),r.__decorate([c.property(M.outFields)],t.prototype,"outFields",void 0),r.__decorate([c.property({type:x.I3SNodePageDefinition,readOnly:!0,json:{read:!1}})],t.prototype,"nodePages",void 0),r.__decorate([c.reader("service","nodePages",["nodePages","pointNodePages"])],t.prototype,"readNodePages",null),r.__decorate([c.property({type:[x.I3SMaterialDefinition],readOnly:!0})],t.prototype,"materialDefinitions",void 0),r.__decorate([c.property({type:[x.I3STextureSetDefinition],readOnly:!0})],t.prototype,"textureSetDefinitions",void 0),r.__decorate([c.property({type:[x.I3SGeometryDefinition],readOnly:!0})],t.prototype,"geometryDefinitions",void 0),r.__decorate([c.property({readOnly:!0})],t.prototype,"serviceUpdateTimeStamp",void 0),r.__decorate([c.property({readOnly:!0})],t.prototype,"attributeStorageInfo",void 0),r.__decorate([c.property({readOnly:!0})],t.prototype,"statisticsInfo",void 0),r.__decorate([c.property({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:!0}})],t.prototype,"definitionExpression",void 0),r.__decorate([c.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),r.__decorate([c.property(w.elevationInfo)],t.prototype,"elevationInfo",null),r.__decorate([c.property({type:String,dependsOn:["profile"]})],t.prototype,"geometryType",null),r.__decorate([c.property(w.labelsVisible)],t.prototype,"labelsVisible",void 0),r.__decorate([c.property({type:[T],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:E.reader},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:E.reader},write:!0}})],t.prototype,"labelingInfo",void 0),r.__decorate([c.property(w.legendEnabled)],t.prototype,"legendEnabled",void 0),r.__decorate([c.property(w.opacityDrawingInfo)],t.prototype,"opacity",void 0),r.__decorate([c.property({types:n.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],t.prototype,"renderer",null),r.__decorate([c.property({json:{read:!1}})],t.prototype,"cachedDrawingInfo",void 0),r.__decorate([c.reader("service","cachedDrawingInfo")],t.prototype,"readCachedDrawingInfo",null),r.__decorate([c.property(w.popupEnabled)],t.prototype,"popupEnabled",void 0),r.__decorate([c.property({type:o,json:{name:"popupInfo",write:!0}})],t.prototype,"popupTemplate",void 0),r.__decorate([c.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo","associatedLayer"]})],t.prototype,"defaultPopupTemplate",null),r.__decorate([c.property({type:String,json:{read:!1}})],t.prototype,"objectIdField",void 0),r.__decorate([c.reader("service","objectIdField",["objectIdField","fields"])],t.prototype,"readObjectIdField",null),r.__decorate([c.property({json:{read:!1}})],t.prototype,"objectIdFilter",void 0),r.__decorate([c.property({type:String,json:{read:!1}})],t.prototype,"profile",void 0),r.__decorate([c.reader("service","profile",["store.profile"])],t.prototype,"readProfile",null),r.__decorate([c.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],t.prototype,"normalReferenceFrame",void 0),r.__decorate([c.property(I.screenSizePerspectiveEnabled)],t.prototype,"screenSizePerspectiveEnabled",void 0),r.__decorate([c.subclass("esri.layers.SceneLayer")],t)}(b.SceneService(g.ArcGISService(v.OperationalLayer(_.PortalLayer(m.ScaleRangeLayer(l.MultiOriginJSONMixin(h))))))),k={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},V={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};return Q}).apply(null,o))||(e.exports=n)}}]);