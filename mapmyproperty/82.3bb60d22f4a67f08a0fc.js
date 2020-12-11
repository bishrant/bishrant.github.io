(function(){var e={"arcgis-js-api/layers/graphics/data/QueryEngineCapabilities":"4/qq","esri/layers/graphics/data/QueryEngineCapabilities":"4/qq","esri/layers/graphics/sources/CSVSource":"7Xx+","esri/layers/CSVLayer":"zwOT"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"4/qq":function(e,t,r){var o,i;o=[r.dj.c(e.i),t],void 0===(i=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.queryCapabilities=void 0,t.queryCapabilities={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}).apply(null,o))||(e.exports=i)},"7Xx+":function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("H1tY"),r("R7Ts"),r("LxLY"),r("qMld"),r("8V7H"),r("Vx27"),r("w1v0")],void 0===(i=(function(e,t,r,o,i,n,s,p,a,u,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(t){var r=e.call(this,t)||this;return r.type="csv",r}return r.__extends(t,e),t.prototype.load=function(e){var t=s.isSome(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),p.resolve(this)},t.prototype.destroy=function(){var e;null===(e=this._connection)||void 0===e||e.close(),this._connection=null},t.prototype.openPorts=function(){var e=this;return this.load().then((function(){return e._connection.openPorts()}))},t.prototype.queryFeatures=function(e,t){var r=this;return void 0===t&&(t={}),this.load(t).then((function(){return r._connection.invoke("queryFeatures",e?e.toJSON():null,t)})).then((function(e){return l.fromJSON(e)}))},t.prototype.queryFeaturesJSON=function(e,t){var r=this;return void 0===t&&(t={}),this.load(t).then((function(){return r._connection.invoke("queryFeatures",e?e.toJSON():null,t)}))},t.prototype.queryFeatureCount=function(e,t){var r=this;return void 0===t&&(t={}),this.load(t).then((function(){return r._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}))},t.prototype.queryObjectIds=function(e,t){var r=this;return void 0===t&&(t={}),this.load(t).then((function(){return r._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}))},t.prototype.queryExtent=function(e,t){var r=this;return void 0===t&&(t={}),this.load(t).then((function(){return r._connection.invoke("queryExtent",e?e.toJSON():null,t)})).then((function(e){return{count:e.count,extent:o.Extent.fromJSON(e.extent)}}))},t.prototype._startWorker=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,o;return r.__generator(this,(function(r){switch(r.label){case 0:return t=this,[4,a.open("CSVSourceWorker",{strategy:i("feature-layers-workers")?"dedicated":"local",signal:e})];case 1:return t._connection=r.sent(),[4,this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((function(e){return e.toJSON()})),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e})];case 2:return o=r.sent(),this.locationInfo=o.locationInfo,this.sourceJSON=o.layerDefinition,this.columnDelimiter=o.columnDelimiter,[2]}}))}))},r.__decorate([u.property()],t.prototype,"type",void 0),r.__decorate([u.property()],t.prototype,"url",void 0),r.__decorate([u.property()],t.prototype,"delimiter",void 0),r.__decorate([u.property()],t.prototype,"fields",void 0),r.__decorate([u.property()],t.prototype,"latitudeField",void 0),r.__decorate([u.property()],t.prototype,"longitudeField",void 0),r.__decorate([u.property()],t.prototype,"spatialReference",void 0),r.__decorate([u.property()],t.prototype,"timeInfo",void 0),r.__decorate([u.property()],t.prototype,"locationInfo",void 0),r.__decorate([u.property()],t.prototype,"sourceJSON",void 0),r.__decorate([u.property()],t.prototype,"columnDelimiter",void 0),r.__decorate([u.subclass("esri.layers.graphics.sources.CSVSource")],t)}(n);t.default=d}).apply(null,o))||(e.exports=i)},zwOT:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("Vx27"),r("Zvuv"),r("4/qq"),r("7Xx+"),r("ojLd"),r("IpeC")],void 0===(i=(function(e,t,r,o,i,n,s,p,a,u){"use strict";return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this;return i.delimiter=null,i.editingEnabled=!0,i.fields=null,i.latitudeField=null,i.locationType="coordinates",i.longitudeField=null,i.operationalLayerType="CSV",i.outFields=["*"],i.path=null,i.portalItem=null,i.spatialReference=o.SpatialReference.WGS84,i.source=null,i.type="csv",i}return r.__extends(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r.__assign({url:e},t):e},Object.defineProperty(t.prototype,"capabilities",{get:function(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:s.queryCapabilities,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasService",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isTable",{get:function(){return this.loaded&&null==this.geometryType},enumerable:!1,configurable:!0}),t.prototype.readWebMapLabelsVisible=function(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)},Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",e)},enumerable:!1,configurable:!0}),t.prototype.createGraphicsSource=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return t=new p.default({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url}),this._set("source",t),[4,t.load({signal:e})];case 1:return r.sent(),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),[2,t]}}))}))},t.prototype.queryFeatures=function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(u.from(e)||r.createQuery())})).then((function(e){if(e&&e.features)for(var t=0,o=e.features;t<o.length;t++){var i=o[t];i.layer=i.sourceLayer=r}return e}))},t.prototype.queryObjectIds=function(e,t){var r=this;return this.load().then((function(){return r.source.queryObjectIds(u.from(e)||r.createQuery())}))},t.prototype.queryFeatureCount=function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatureCount(u.from(e)||r.createQuery())}))},t.prototype.queryExtent=function(e,t){var r=this;return this.load().then((function(){return r.source.queryExtent(u.from(e)||r.createQuery())}))},t.prototype._verifyFields=function(){},t.prototype._verifySource=function(){},t.prototype._hasMemorySource=function(){return!0},r.__decorate([i.property({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],t.prototype,"capabilities",null),r.__decorate([i.property({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],t.prototype,"delimiter",void 0),r.__decorate([i.property({type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"editingEnabled",void 0),r.__decorate([i.property({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],t.prototype,"fields",void 0),r.__decorate([i.property({readOnly:!0})],t.prototype,"hasService",null),r.__decorate([i.property({type:Boolean,readOnly:!0,dependsOn:["loaded"]})],t.prototype,"isTable",null),r.__decorate([i.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],t.prototype,"readWebMapLabelsVisible",null),r.__decorate([i.property({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],t.prototype,"latitudeField",void 0),r.__decorate([i.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([i.property({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],t.prototype,"locationType",void 0),r.__decorate([i.property({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],t.prototype,"longitudeField",void 0),r.__decorate([i.property({type:["CSV"]})],t.prototype,"operationalLayerType",void 0),r.__decorate([i.property()],t.prototype,"outFields",void 0),r.__decorate([i.property({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],t.prototype,"path",void 0),r.__decorate([i.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",void 0),r.__decorate([i.property({json:{read:!1},cast:null,type:p.default,readOnly:!0})],t.prototype,"source",void 0),r.__decorate([i.property({json:{read:!1},value:"csv",readOnly:!0})],t.prototype,"type",void 0),r.__decorate([i.property({json:{read:a.read,write:{isRequired:!0,ignoreOrigin:!0,writer:a.write}}})],t.prototype,"url",null),r.__decorate([i.subclass("esri.layers.CSVLayer")],t)}(n)}).apply(null,o))||(e.exports=i)}}]);