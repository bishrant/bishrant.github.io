(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/mixins/ArcGISService":"2fnV","esri/symbols/support/defaultsJSON":"35hF","esri/layers/support/LabelClass":"5WBt","esri/layers/support/layerSourceUtils":"BZGX","arcgis-js-api/tasks/support/Query":"IpeC","esri/tasks/support/Query":"IpeC","esri/layers/support/labelUtils":"L924","esri/renderers":"OXG3","esri/layers/mixins/PortalLayer":"QJ8R","esri/layers/mixins/RefreshableLayer":"WaJo","arcgis-js-api/tasks/support/StatisticDefinition":"aZmZ","esri/tasks/support/StatisticDefinition":"aZmZ","arcgis-js-api/symbols/support/defaults":"dXKx","esri/symbols/support/defaults":"dXKx","esri/tasks/support/QuantizationParameters":"lAK8","esri/layers/support/LabelExpressionInfo":"nsnX","esri/renderers/visualVariables/support/sizeVariableUtils":"o5TS","arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils":"o5TS"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[62,25,44,63,93,94,104,105,106,107,108,109,115,116],{"2fnV":function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("qsST"),r("Vx27"),r("8CIp")],void 0===(i=(function(e,t,r,o,i,n,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i.getLogger("esri.layers.mixins.ArcGISService");t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=a.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",a.sanitizeUrl(e,l))},enumerable:!0,configurable:!0}),o([n.property({dependsOn:["url"]})],t.prototype,"title",null),o([n.property({type:String})],t.prototype,"url",null),o([n.subclass("esri.layers.mixins.ArcGISService")],t)}(n.declared(e))}}).apply(null,o))||(e.exports=i)},"35hF":function(e,t,r){var o,i;o=[r.dj.c(e.i),t],void 0===(i=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultColor=[252,146,31,255],t.defaultOutlineColor=[153,153,153,255],t.defaultPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",size:6,color:t.defaultColor,outline:{width:.75,color:[153,153,153,255]}},t.defaultPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",width:.75,color:t.defaultColor},t.defaultPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{width:.75,color:[255,255,255,191]}},t.defaultTextSymbolJSON={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},t.errorPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},t.errorPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},t.errorPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}).apply(null,o))||(e.exports=i)},"5WBt":function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Q2wQ"),r("HZ3d"),r("+AWJ"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27"),r("nsnX"),r("L924"),r("5Lc7"),r("dXKx"),r("HqJa")],void 0===(i=(function(e,t,r,o,i,n,a,l,s,p,u,c,y,d,m,f){function S(e){return!e||"service"!==e.origin&&(!e.layer||!d.isOfType(e.layer,"map-image"))}function b(e){if(!e)return null;var t=w.exec(e);return t&&(t[1]||t[3])||null}var v=new l.default({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0}),h=/^\s*\{([^}]+)\}\s*$/i,w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]))\s*$/i;return function(e){function t(t){var r=e.call(this,t)||this;return r.name=null,r.labelExpression=null,r.labelExpressionInfo=null,r.labelPlacement=null,r.maxScale=0,r.minScale=0,r.symbol=m.defaultTextSymbol2D,r.useCodedValues=void 0,r.where=null,r}var i;return o(t,e),i=t,t.evaluateWhere=function(e,t){var r=function(e,t,r){switch(t){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1};try{if(null==e)return!0;var o=e.split(" ");if(3===o.length)return r(t[o[0]],o[1],o[2]);if(7===o.length){var i=r(t[o[0]],o[1],o[2]),n=o[3],a=r(t[o[4]],o[5],o[6]);switch(n){case"AND":return i&&a;case"OR":return i||a}}return!1}catch(t){console.log("Error.: can't parse = "+e)}},t.prototype.readLabelExpression=function(e,t){var r=t.labelExpressionInfo;if(!r||!r.value&&!r.expression)return e},t.prototype.writeLabelExpression=function(e,t,r,o){if(this.labelExpressionInfo&&S(o))if(null!=this.labelExpressionInfo.value)e=function(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){var i=b(this.labelExpressionInfo.expression);i&&(e="["+i+"]")}null!=e&&(t[r]=e)},t.prototype.writeLabelExpressionInfo=function(e,t,r,o){if(null==e&&null!=this.labelExpression&&S(o))e=new c({expression:this.getLabelExpressionArcade()});else if(!e)return;var i=e.toJSON(o);i.expression&&(t[r]=i)},t.prototype.writeMaxScale=function(e,t){(e||this.minScale)&&(t.maxScale=e)},t.prototype.writeMinScale=function(e,t){(e||this.maxScale)&&(t.minScale=e)},t.prototype.getLabelExpression=function(){var e={expression:"",type:"none"};return this.labelExpressionInfo?this.labelExpressionInfo.value?(e.expression=this.labelExpressionInfo.value,e.type="conventional"):this.labelExpressionInfo.expression&&(e.expression=this.labelExpressionInfo.expression,e.type="arcade"):null!=this.labelExpression&&(e.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(this.labelExpression),e.type="conventional"),e},t.prototype.getLabelExpressionArcade=function(){var e=this.getLabelExpression();if(!e)return null;switch(e.type){case"conventional":return y.convertTemplatedStringToArcade(e.expression);case"arcade":return e.expression}return null},t.prototype.getLabelExpressionSingleField=function(){var e=this.getLabelExpression();if(!e)return null;switch(e.type){case"conventional":return function(e){var t=e.match(h);return t&&t[1].trim()||null}(e.expression);case"arcade":return b(e.expression)}return null},t.prototype.clone=function(){return new i({labelExpression:this.labelExpression,labelExpressionInfo:p.clone(this.labelExpressionInfo),labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,symbol:p.clone(this.symbol),where:this.where,useCodedValues:this.useCodedValues})},r([u.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),r([u.property({type:String,json:{write:{allowNull:!0}}})],t.prototype,"labelExpression",void 0),r([u.reader("labelExpression")],t.prototype,"readLabelExpression",null),r([u.writer("labelExpression")],t.prototype,"writeLabelExpression",null),r([u.property({type:c,json:{write:{overridePolicy:function(e,t,r){return S(r)?{allowNull:!0}:{enabled:!1}}}}})],t.prototype,"labelExpressionInfo",void 0),r([u.writer("labelExpressionInfo")],t.prototype,"writeLabelExpressionInfo",null),r([u.property({type:v.apiValues,json:{type:v.jsonValues,read:v.read,write:v.write}})],t.prototype,"labelPlacement",void 0),r([u.property({type:Number})],t.prototype,"maxScale",void 0),r([u.writer("maxScale")],t.prototype,"writeMaxScale",null),r([u.property({type:Number})],t.prototype,"minScale",void 0),r([u.writer("minScale")],t.prototype,"writeMinScale",null),r([u.property({types:a.symbolTypesLabel,json:{origins:{"web-scene":{types:a.symbolTypesLabel3D,read:f.read,write:f.writeTarget,default:null}},read:f.read,write:f.writeTarget,default:null}})],t.prototype,"symbol",void 0),r([u.property({type:Boolean,json:{write:!0}})],t.prototype,"useCodedValues",void 0),r([u.property({type:String,json:{write:!0}})],t.prototype,"where",void 0),i=r([u.subclass("esri.layers.support.LabelClass")],t)}(u.declared(s.JSONSupport))}).apply(null,o))||(e.exports=i)},BZGX:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("ImIS"),r("rg9i")],void 0===(i=(function(e,t,r,o){function i(e){return null!=e&&e.hasOwnProperty("mapLayerId")}function n(e){return null!=e&&e.hasOwnProperty("dataSource")}Object.defineProperty(t,"__esModule",{value:!0}),t.MAPLAYER="map-layer",t.DATALAYER="data-layer";var a=new r.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),l=new r.default({mapLayer:t.MAPLAYER,dataLayer:t.DATALAYER}),s=new r.default({joinTable:"join-table",queryTable:"query-table"}),p=new r.default({esriLeftOuterJoin:"left-outer-join",esriLeftInnerJoin:"left-inner-join"});t.isMapLayerSource=i,t.isDataLayerSource=n,t.castSource=function e(r){return r?(i(r)&&(r.type=t.MAPLAYER),n(r)&&(r.type=t.DATALAYER,r.dataSource.type||function(t){t.workspaceId?t.type=t.gdbVersion?"table":t.query||t.oidFields?"query-table":"raster":t.leftTableKey&&t.rightTableKey&&t.leftTableSource&&t.rightTableSource&&(t.type="join-table",t.leftTableSource=e(t.leftTableSource),t.rightTableSource=e(t.rightTableSource))}(r.dataSource)),r):r},t.sourceToJSON=function e(r){var i={};return r.type===t.MAPLAYER?(i.mapLayerId=r.mapLayerId,r.gdbVersion&&(i.gdbVersion=r.gdbVersion)):r.type===t.DATALAYER&&(r.fields&&(i.fields=r.fields),i.dataSource=function(t){var r;switch(t.type){case"table":r={dataSourceName:t.dataSourceName,workspaceId:t.workspaceId,gdbVersion:t.gdbVersion};break;case"query-table":r={geometryType:a.toJSON(t.geometryType),workspaceId:t.workspaceId,query:t.query,oidFields:t.oidFields,spatialReference:t.spatialReference};break;case"join-table":r={leftTableSource:e(t.leftTableSource),rightTableSource:e(t.rightTableSource),leftTableKey:t.leftTableKey,rightTableKey:t.rightTableKey,joinType:p.toJSON(t.joinType)};break;case"raster":r={workspaceId:t.workspaceId,dataSourceName:t.dataSourceName}}return r.type=s.toJSON(t.type),o.fixJson(r)}(r.dataSource)),i.type=l.toJSON(r.type),o.fixJson(i)},t.sourceFromJSON=function e(r){var i={};return l.fromJSON(r.type)===t.MAPLAYER?(i.mapLayerId=r.mapLayerId,r.gdbVersion&&(i.gdbVersion=r.gdbVersion)):l.fromJSON(r.type)===t.DATALAYER&&(r.fields&&(i.fields=r.fields),i.dataSource=function(t){var r;switch(t.type){case"table":r={dataSourceName:t.dataSourceName,workspaceId:t.workspaceId,gdbVersion:t.gdbVersion};break;case"queryTable":r={geometryType:a.fromJSON(t.geometryType),workspaceId:t.workspaceId,query:t.query,oidFields:t.oidFields,spatialReference:t.spatialReference};break;case"joinTable":r={leftTableSource:e(t.leftTableSource),rightTableSource:e(t.rightTableSource),leftTableKey:t.leftTableKey,rightTableKey:t.rightTableKey,joinType:p.fromJSON(t.joinType)};break;case"raster":r={workspaceId:t.workspaceId,dataSourceName:t.dataSourceName}}return r.type=s.fromJSON(t.type),o.fixJson(r)}(r.dataSource)),i.type=l.fromJSON(r.type),o.fixJson(i)}}).apply(null,o))||(e.exports=i)},IpeC:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("TMur"),r("TMur"),r("+AWJ"),r("9gfz"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27"),r("1dvD"),r("Lzvl"),r("HqJa"),r("lAK8"),r("aZmZ")],void 0===(i=(function(e,t,r,o,i,n,a,l,s,p,u,c,y,d,m,f,S){var b=new s.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),v=new s.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.cacheHint=!1,r.datumTransformation=null,r.distance=void 0,r.gdbVersion=null,r.geometry=null,r.geometryPrecision=void 0,r.groupByFieldsForStatistics=null,r.having=null,r.historicMoment=null,r.maxAllowableOffset=void 0,r.maxRecordCountFactor=1,r.multipatchOption=null,r.num=void 0,r.objectIds=null,r.orderByFields=null,r.outFields=null,r.outSpatialReference=null,r.outStatistics=null,r.parameterValues=null,r.pixelSize=null,r.quantizationParameters=null,r.rangeValues=null,r.relationParameter=null,r.resultType=null,r.returnCentroid=!1,r.returnDistinctValues=!1,r.returnExceededLimitFeatures=!0,r.returnGeometry=!1,r.returnQueryGeometry=!1,r.returnM=void 0,r.returnZ=void 0,r.source=null,r.spatialRelationship="intersects",r.start=void 0,r.sqlFormat=null,r.text=null,r.timeExtent=null,r.units=null,r.where=null,r}var s;return r(t,e),s=t,t.from=function(e){return y.ensureClass(s,e)},t.prototype.castDatumTransformation=function(e){return"number"==typeof e||"object"==typeof e?e:null},t.prototype.writeHistoricMoment=function(e,t){t.historicMoment=e&&e.getTime()},t.prototype.writeParameterValues=function(e,t){if(e){var r={};for(var o in e){var i=e[o];r[o]=Array.isArray(i)?i.map((function(e){return e instanceof Date?e.getTime():e})):i instanceof Date?i.getTime():i}t.parameterValues=r}},t.prototype.writeStart=function(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"},t.prototype.writeWhere=function(e,t){t.where=e||"1=1"},t.prototype.clone=function(){return new s(u.clone({cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,source:this.source,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))},t.MAX_MAX_RECORD_COUNT_FACTOR=5,o([c.property({type:Boolean,json:{write:!0,default:!1}})],t.prototype,"cacheHint",void 0),o([c.property({json:{write:!0}})],t.prototype,"datumTransformation",void 0),o([c.cast("datumTransformation")],t.prototype,"castDatumTransformation",null),o([c.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),o([c.property({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),o([c.property({types:n.geometryTypes,json:{read:d.fromJSON,write:!0}})],t.prototype,"geometry",void 0),o([c.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),o([c.property({type:[String],json:{write:!0}})],t.prototype,"groupByFieldsForStatistics",void 0),o([c.property({type:String,json:{write:!0}})],t.prototype,"having",void 0),o([c.property({type:Date})],t.prototype,"historicMoment",void 0),o([c.writer("historicMoment")],t.prototype,"writeHistoricMoment",null),o([c.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),o([c.property({type:Number,cast:function(e){return e<1?1:e>s.MAX_MAX_RECORD_COUNT_FACTOR?s.MAX_MAX_RECORD_COUNT_FACTOR:e},json:{write:{overridePolicy:function(e){return{enabled:e>1}}}}})],t.prototype,"maxRecordCountFactor",void 0),o([c.property({type:String,json:{write:!0}})],t.prototype,"multipatchOption",void 0),o([c.property({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),o([c.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),o([c.property({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),o([c.property({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),o([c.property({type:i.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),o([c.property({type:[S],json:{write:!0}})],t.prototype,"outStatistics",void 0),o([c.property({json:{write:!0}})],t.prototype,"parameterValues",void 0),o([c.writer("parameterValues")],t.prototype,"writeParameterValues",null),o([c.property({types:a.symbolTypes,json:{read:m.read,write:!0}})],t.prototype,"pixelSize",void 0),o([c.property({type:f.default,json:{write:!0}})],t.prototype,"quantizationParameters",void 0),o([c.property({type:[Object],json:{write:!0}})],t.prototype,"rangeValues",void 0),o([c.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy:function(){return{enabled:"relation"===this.spatialRelationship}}}}})],t.prototype,"relationParameter",void 0),o([c.property({type:String,json:{write:!0}})],t.prototype,"resultType",void 0),o([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnCentroid",void 0),o([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnDistinctValues",void 0),o([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:!e}}}}})],t.prototype,"returnExceededLimitFeatures",void 0),o([c.property({type:Boolean,json:{write:!0}})],t.prototype,"returnGeometry",void 0),o([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnQueryGeometry",void 0),o([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnM",void 0),o([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnZ",void 0),o([c.property({json:{write:!0}})],t.prototype,"source",void 0),o([c.property({type:String,json:{read:{source:"spatialRel",reader:b.read},write:{target:"spatialRel",writer:b.write}}})],t.prototype,"spatialRelationship",void 0),o([c.property({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),o([c.writer("start"),c.writer("num")],t.prototype,"writeStart",null),o([c.property({type:String,json:{write:!0}})],t.prototype,"sqlFormat",void 0),o([c.property({type:String,json:{write:!0}})],t.prototype,"text",void 0),o([c.property({type:l,json:{write:!0}})],t.prototype,"timeExtent",void 0),o([c.property({type:String,json:{read:v.read,write:{writer:v.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),o([c.property({type:String,json:{write:{overridePolicy:function(e){return{enabled:null!=e||this.start>0}}}}})],t.prototype,"where",void 0),o([c.writer("where")],t.prototype,"writeWhere",null),s=o([c.subclass("esri.tasks.support.Query")],t)}(c.declared(p.JSONSupport))}).apply(null,o))||(e.exports=i)},L924:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("nRUF")],void 0===(i=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o="__begin__",i="__end__",n=new RegExp(o,"ig"),a=new RegExp(i,"ig"),l=new RegExp("^"+o,"i"),s=new RegExp(i+"$","i");t.convertTemplatedStringToArcade=function(e){var t;return e?(t=r.replace(e,(function(e){return o+'$feature["'+e+'"]'+i})),t=l.test(t)?t.replace(l,""):'"'+t,t=(t=s.test(t)?t.replace(s,""):t+'"').replace(n,'" + ').replace(a,' + "')):t='""',t}}).apply(null,o))||(e.exports=i)},OXG3:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("Z/W+"),r("Vtuk"),r("PHoo"),r("fU8o"),r("mLnd"),r("osTG"),r("nHUP"),r("hz/Y")],void 0===(i=(function(e,t,r,o,i,n,a,l,s,p){Object.defineProperty(t,"__esModule",{value:!0}),t.ClassBreaksRenderer=r,t.DictionaryRenderer=o,t.DotDensityRenderer=i,t.HeatmapRenderer=n,t.BaseRenderer=a,t.SimpleRenderer=l,t.UniqueValueRenderer=s,t.isRenderer=function(e){return e instanceof t.BaseRenderer},t.read=p.read,t.write=p.write,t.fromJSON=p.fromJSON,t.rendererTypes={key:"type",base:t.BaseRenderer,typeMap:{heatmap:t.HeatmapRenderer,simple:t.SimpleRenderer,"unique-value":t.UniqueValueRenderer,"class-breaks":t.ClassBreaksRenderer,"dot-density":t.DotDensityRenderer,dictionary:t.DictionaryRenderer}},t.webSceneRendererTypes={key:"type",base:t.BaseRenderer,typeMap:{simple:t.SimpleRenderer,"unique-value":t.UniqueValueRenderer,"class-breaks":t.ClassBreaksRenderer}}}).apply(null,o))||(e.exports=i)},QJ8R:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(i=(function(e,t,o,i,n,a,l,s,p,u,c,y,d){Object.defineProperty(t,"__esModule",{value:!0});var m=s.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new d({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return a(this,void 0,void 0,(function(){var o,i;return n(this,(function(n){switch(n.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,p.create((function(e){return Promise.all([r.e(0),r.e(98)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(r.oe)}))];case 2:return o=n.sent(),p.throwIfAborted(t),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,n.sent()];case 4:throw i=n.sent(),m.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+i),i;case 5:return[2]}}))}))},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||y.getDefault());return r&&o&&!u.hasSamePortal(o.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},i([c.property({type:d})],t.prototype,"portalItem",null),i([c.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),i([c.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),i([c.subclass("esri.layers.mixins.PortalLayer")],t)}(c.declared(e))}}).apply(null,o))||(e.exports=i)},WaJo:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Vx27")],void 0===(i=(function(e,t,r,o,i){Object.defineProperty(t,"__esModule",{value:!0}),t.RefreshableLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshInterval=0,t}return r(t,e),t.prototype.refresh=function(){this.emit("refresh")},o([i.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),o([i.subclass("esri.layers.mixins.RefreshableLayer")],t)}(i.declared(e))}}).apply(null,o))||(e.exports=i)},aZmZ:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27")],void 0===(i=(function(e,t,r,o,i,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.maxPointCount=void 0,r.maxRecordCount=void 0,r.maxVertexCount=void 0,r.onStatisticField=null,r.outStatisticFieldName=null,r.statisticType=null,r}var i;return r(t,e),i=t,t.prototype.clone=function(){return new i({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType})},o([n.property({type:Number,json:{write:!0}})],t.prototype,"maxPointCount",void 0),o([n.property({type:Number,json:{write:!0}})],t.prototype,"maxRecordCount",void 0),o([n.property({type:Number,json:{write:!0}})],t.prototype,"maxVertexCount",void 0),o([n.property({type:String,json:{write:!0}})],t.prototype,"onStatisticField",void 0),o([n.property({type:String,json:{write:!0}})],t.prototype,"outStatisticFieldName",void 0),o([n.property({type:String,json:{write:!0}})],t.prototype,"statisticType",void 0),i=o([n.subclass("esri.tasks.support.StatisticDefinition")],t)}(n.declared(i.JSONSupport))}).apply(null,o))||(e.exports=i)},dXKx:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("pcDC"),r("LxLY"),r("x7Wq"),r("CF4u"),r("NsXp"),r("Z91k"),r("35hF")],void 0===(i=(function(e,t,r,o,i,n,a,l,s){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultPointSymbol2D=a.fromJSON(s.defaultPointSymbolJSON),t.defaultPolylineSymbol2D=n.fromJSON(s.defaultPolylineSymbolJSON),t.defaultPolygonSymbol2D=i.fromJSON(s.defaultPolygonSymbolJSON),t.defaultTextSymbol2D=l.fromJSON(s.defaultTextSymbolJSON),t.getDefaultSymbol2D=function(e){if(o.isNone(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return t.defaultPointSymbol2D;case"polyline":return t.defaultPolylineSymbol2D;case"polygon":case"extent":return t.defaultPolygonSymbol2D;default:r.neverReached(e)}return null},t.errorPointSymbol2D=a.fromJSON(s.errorPointSymbolJSON),t.errorPolylineSymbol2D=n.fromJSON(s.errorPolylineSymbolJSON),t.errorPolygonSymbol2D=i.fromJSON(s.errorPolygonSymbolJSON)}).apply(null,o))||(e.exports=i)},lAK8:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("TMur"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27")],void 0===(i=(function(e,t,r,o,i,n,a,l,s){Object.defineProperty(t,"__esModule",{value:!0});var p=new n.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),u=function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.mode="view",r.originPosition="upper-left",r.tolerance=1,r}var n;return r(t,e),n=t,t.prototype.clone=function(){return new n(l.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))},o([s.property({type:i.Extent,json:{write:!0}})],t.prototype,"extent",void 0),o([s.property({type:["view","edit"],json:{write:!0}})],t.prototype,"mode",void 0),o([s.property({type:String,json:{read:p.read,write:p.write}})],t.prototype,"originPosition",void 0),o([s.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),n=o([s.subclass("esri.tasks.support.QuantizationParameters")],t)}(s.declared(a.JSONSupport));t.default=u}).apply(null,o))||(e.exports=i)},nsnX:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27"),r("L924")],void 0===(i=(function(e,t,r,o,i,n,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.value=null,t.expression=null,t}var i;return r(t,e),i=t,t.prototype.readExpression=function(e,t){return t.value?a.convertTemplatedStringToArcade(t.value):e},t.prototype.writeExpression=function(e,t,r){null!=this.value&&(e=a.convertTemplatedStringToArcade(this.value)),t[r]=e},t.prototype.clone=function(){return new i({value:this.value,expression:this.expression})},o([n.property({json:{read:!1,write:!1}})],t.prototype,"value",void 0),o([n.property({type:String,json:{write:{allowNull:!0}}})],t.prototype,"expression",void 0),o([n.reader("expression",["expression","value"])],t.prototype,"readExpression",null),o([n.writer("expression")],t.prototype,"writeExpression",null),i=o([n.subclass("esri.layers.support.LabelExpressionInfo")],t)}(n.declared(i.JSONSupport))}).apply(null,o))||(e.exports=i)},o5TS:function(e,t,r){var o,i;o=[r.dj.c(e.i),t],void 0===(i=(function(e,t){function r(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}Object.defineProperty(t,"__esModule",{value:!0}),t.isSizeVariable=function(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass},t.isValidNumber=function(e){return null!=e&&!isNaN(e)&&isFinite(e)},t.getInputValueType=r,t.getTransformationType=function(e,t){return"unknown"===(t||r(e))?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===(e.valueUnit||"unknown")?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}}).apply(null,o))||(e.exports=i)}}]);