(function(){(this||window).webpackJsonp.registerAbsMids({"esri/tasks/support/Query":"IpeC","arcgis-js-api/tasks/support/Query":"IpeC","arcgis-js-api/tasks/support/StatisticDefinition":"aZmZ","esri/tasks/support/QuantizationParameters":"lAK8","arcgis-js-api/tasks/support/QuantizationParameters":"lAK8","esri/renderers/visualVariables/support/sizeVariableUtils":"o5TS","arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils":"o5TS"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[94,93],{IpeC:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("9opi"),r("qKT0"),r("TMur"),r("TMur"),r("+AWJ"),r("9gfz"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27"),r("1dvD"),r("Lzvl"),r("HqJa"),r("lAK8"),r("aZmZ")],void 0===(o=(function(t,e,r,i,o,n,s,a,p,l,u,y,d,c,m,v,w){var h=new p.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),f=new p.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(t){function e(e){var r=t.call(this,e)||this;return r.cacheHint=!1,r.datumTransformation=null,r.distance=void 0,r.gdbVersion=null,r.geometry=null,r.geometryPrecision=void 0,r.groupByFieldsForStatistics=null,r.having=null,r.historicMoment=null,r.maxAllowableOffset=void 0,r.maxRecordCountFactor=1,r.multipatchOption=null,r.num=void 0,r.objectIds=null,r.orderByFields=null,r.outFields=null,r.outSpatialReference=null,r.outStatistics=null,r.parameterValues=null,r.pixelSize=null,r.quantizationParameters=null,r.rangeValues=null,r.relationParameter=null,r.resultType=null,r.returnCentroid=!1,r.returnDistinctValues=!1,r.returnExceededLimitFeatures=!0,r.returnGeometry=!1,r.returnQueryGeometry=!1,r.returnM=void 0,r.returnZ=void 0,r.source=null,r.spatialRelationship="intersects",r.start=void 0,r.sqlFormat=null,r.text=null,r.timeExtent=null,r.units=null,r.where=null,r}var p;return r(e,t),p=e,e.from=function(t){return d.ensureClass(p,t)},e.prototype.castDatumTransformation=function(t){return"number"==typeof t||"object"==typeof t?t:null},e.prototype.writeHistoricMoment=function(t,e){e.historicMoment=t&&t.getTime()},e.prototype.writeParameterValues=function(t,e){if(t){var r={};for(var i in t){var o=t[i];r[i]=Array.isArray(o)?o.map((function(t){return t instanceof Date?t.getTime():t})):o instanceof Date?o.getTime():o}e.parameterValues=r}},e.prototype.writeStart=function(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1"},e.prototype.writeWhere=function(t,e){e.where=t||"1=1"},e.prototype.clone=function(){return new p(u.clone({cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,source:this.source,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))},e.MAX_MAX_RECORD_COUNT_FACTOR=5,i([y.property({type:Boolean,json:{write:!0,default:!1}})],e.prototype,"cacheHint",void 0),i([y.property({json:{write:!0}})],e.prototype,"datumTransformation",void 0),i([y.cast("datumTransformation")],e.prototype,"castDatumTransformation",null),i([y.property({type:Number,json:{write:{overridePolicy:function(t){return{enabled:t>0}}}}})],e.prototype,"distance",void 0),i([y.property({type:String,json:{write:!0}})],e.prototype,"gdbVersion",void 0),i([y.property({types:n.geometryTypes,json:{read:c.fromJSON,write:!0}})],e.prototype,"geometry",void 0),i([y.property({type:Number,json:{write:!0}})],e.prototype,"geometryPrecision",void 0),i([y.property({type:[String],json:{write:!0}})],e.prototype,"groupByFieldsForStatistics",void 0),i([y.property({type:String,json:{write:!0}})],e.prototype,"having",void 0),i([y.property({type:Date})],e.prototype,"historicMoment",void 0),i([y.writer("historicMoment")],e.prototype,"writeHistoricMoment",null),i([y.property({type:Number,json:{write:!0}})],e.prototype,"maxAllowableOffset",void 0),i([y.property({type:Number,cast:function(t){return t<1?1:t>p.MAX_MAX_RECORD_COUNT_FACTOR?p.MAX_MAX_RECORD_COUNT_FACTOR:t},json:{write:{overridePolicy:function(t){return{enabled:t>1}}}}})],e.prototype,"maxRecordCountFactor",void 0),i([y.property({type:String,json:{write:!0}})],e.prototype,"multipatchOption",void 0),i([y.property({type:Number,json:{read:{source:"resultRecordCount"}}})],e.prototype,"num",void 0),i([y.property({type:[Number],json:{write:!0}})],e.prototype,"objectIds",void 0),i([y.property({type:[String],json:{write:!0}})],e.prototype,"orderByFields",void 0),i([y.property({type:[String],json:{write:!0}})],e.prototype,"outFields",void 0),i([y.property({type:o.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],e.prototype,"outSpatialReference",void 0),i([y.property({type:[w],json:{write:!0}})],e.prototype,"outStatistics",void 0),i([y.property({json:{write:!0}})],e.prototype,"parameterValues",void 0),i([y.writer("parameterValues")],e.prototype,"writeParameterValues",null),i([y.property({types:s.symbolTypes,json:{read:m.read,write:!0}})],e.prototype,"pixelSize",void 0),i([y.property({type:v.default,json:{write:!0}})],e.prototype,"quantizationParameters",void 0),i([y.property({type:[Object],json:{write:!0}})],e.prototype,"rangeValues",void 0),i([y.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy:function(){return{enabled:"relation"===this.spatialRelationship}}}}})],e.prototype,"relationParameter",void 0),i([y.property({type:String,json:{write:!0}})],e.prototype,"resultType",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],e.prototype,"returnCentroid",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],e.prototype,"returnDistinctValues",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:!t}}}}})],e.prototype,"returnExceededLimitFeatures",void 0),i([y.property({type:Boolean,json:{write:!0}})],e.prototype,"returnGeometry",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],e.prototype,"returnQueryGeometry",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],e.prototype,"returnM",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],e.prototype,"returnZ",void 0),i([y.property({json:{write:!0}})],e.prototype,"source",void 0),i([y.property({type:String,json:{read:{source:"spatialRel",reader:h.read},write:{target:"spatialRel",writer:h.write}}})],e.prototype,"spatialRelationship",void 0),i([y.property({type:Number,json:{read:{source:"resultOffset"}}})],e.prototype,"start",void 0),i([y.writer("start"),y.writer("num")],e.prototype,"writeStart",null),i([y.property({type:String,json:{write:!0}})],e.prototype,"sqlFormat",void 0),i([y.property({type:String,json:{write:!0}})],e.prototype,"text",void 0),i([y.property({type:a,json:{write:!0}})],e.prototype,"timeExtent",void 0),i([y.property({type:String,json:{read:f.read,write:{writer:f.write,overridePolicy:function(t){return{enabled:t&&this.distance>0}}}}})],e.prototype,"units",void 0),i([y.property({type:String,json:{write:{overridePolicy:function(t){return{enabled:null!=t||this.start>0}}}}})],e.prototype,"where",void 0),i([y.writer("where")],e.prototype,"writeWhere",null),p=i([y.subclass("esri.tasks.support.Query")],e)}(y.declared(l.JSONSupport))}).apply(null,i))||(t.exports=o)},aZmZ:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27")],void 0===(o=(function(t,e,r,i,o,n){return function(t){function e(e){var r=t.call(this,e)||this;return r.maxPointCount=void 0,r.maxRecordCount=void 0,r.maxVertexCount=void 0,r.onStatisticField=null,r.outStatisticFieldName=null,r.statisticType=null,r}var o;return r(e,t),o=e,e.prototype.clone=function(){return new o({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType})},i([n.property({type:Number,json:{write:!0}})],e.prototype,"maxPointCount",void 0),i([n.property({type:Number,json:{write:!0}})],e.prototype,"maxRecordCount",void 0),i([n.property({type:Number,json:{write:!0}})],e.prototype,"maxVertexCount",void 0),i([n.property({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),i([n.property({type:String,json:{write:!0}})],e.prototype,"outStatisticFieldName",void 0),i([n.property({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),o=i([n.subclass("esri.tasks.support.StatisticDefinition")],e)}(n.declared(o.JSONSupport))}).apply(null,i))||(t.exports=o)},lAK8:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("9opi"),r("qKT0"),r("TMur"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27")],void 0===(o=(function(t,e,r,i,o,n,s,a,p){Object.defineProperty(e,"__esModule",{value:!0});var l=new n.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),u=function(t){function e(e){var r=t.call(this,e)||this;return r.extent=null,r.mode="view",r.originPosition="upper-left",r.tolerance=1,r}var n;return r(e,t),n=e,e.prototype.clone=function(){return new n(a.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))},i([p.property({type:o.Extent,json:{write:!0}})],e.prototype,"extent",void 0),i([p.property({type:["view","edit"],json:{write:!0}})],e.prototype,"mode",void 0),i([p.property({type:String,json:{read:l.read,write:l.write}})],e.prototype,"originPosition",void 0),i([p.property({type:Number,json:{write:!0}})],e.prototype,"tolerance",void 0),n=i([p.subclass("esri.tasks.support.QuantizationParameters")],e)}(p.declared(s.JSONSupport));e.default=u}).apply(null,i))||(t.exports=o)},o5TS:function(t,e,r){var i,o;i=[r.dj.c(t.i),e],void 0===(o=(function(t,e){function r(t){return t.valueExpression?"expression":t.field&&"string"==typeof t.field?"field":"unknown"}Object.defineProperty(e,"__esModule",{value:!0}),e.isSizeVariable=function(t){return t&&"esri.renderers.visualVariables.SizeVariable"===t.declaredClass},e.isValidNumber=function(t){return null!=t&&!isNaN(t)&&isFinite(t)},e.getInputValueType=r,e.getTransformationType=function(t,e){return"unknown"===(e||r(t))?"constant":t.stops?"stops":null!=t.minSize&&null!=t.maxSize&&null!=t.minDataValue&&null!=t.maxDataValue?"clamped-linear":"unknown"===(t.valueUnit||"unknown")?null!=t.minSize&&null!=t.minDataValue?t.minSize&&t.minDataValue?"proportional":"additive":"identity":"real-world-size"}}).apply(null,i))||(t.exports=o)}}]);