(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/mixins/ArcGISService":"2fnV","esri/layers/mixins/ArcGISService":"2fnV","arcgis-js-api/symbols/support/defaultsJSON":"35hF","esri/layers/support/LabelClass":"5WBt","arcgis-js-api/layers/support/LabelClass":"5WBt","arcgis-js-api/layers/support/layerSourceUtils":"BZGX","esri/tasks/support/Query":"IpeC","arcgis-js-api/tasks/support/Query":"IpeC","arcgis-js-api/layers/support/labelUtils":"L924","esri/renderers":"OXG3","arcgis-js-api/renderers":"OXG3","esri/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R","esri/layers/StreamLayer":"QiYT","arcgis-js-api/layers/StreamLayer":"QiYT","esri/layers/mixins/RefreshableLayer":"WaJo","arcgis-js-api/layers/mixins/RefreshableLayer":"WaJo","arcgis-js-api/tasks/support/StatisticDefinition":"aZmZ","arcgis-js-api/symbols/support/defaults":"dXKx","arcgis-js-api/views/layers/support/FeatureFilter":"e4th","esri/tasks/support/QuantizationParameters":"lAK8","arcgis-js-api/tasks/support/QuantizationParameters":"lAK8","arcgis-js-api/layers/support/LabelExpressionInfo":"nsnX","arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils":"o5TS"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[34,25,44,62,63,93,94,104,105,106,107,108,109,115,116],{"2fnV":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("qsST"),r("Vx27"),r("8CIp")],void 0===(o=(function(e,t,r,i,o,n,a){Object.defineProperty(t,"__esModule",{value:!0});var s=o.getLogger("esri.layers.mixins.ArcGISService");t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=a.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",a.sanitizeUrl(e,s))},enumerable:!0,configurable:!0}),i([n.property({dependsOn:["url"]})],t.prototype,"title",null),i([n.property({type:String})],t.prototype,"url",null),i([n.subclass("esri.layers.mixins.ArcGISService")],t)}(n.declared(e))}}).apply(null,i))||(e.exports=o)},"35hF":function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultColor=[252,146,31,255],t.defaultOutlineColor=[153,153,153,255],t.defaultPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",size:6,color:t.defaultColor,outline:{width:.75,color:[153,153,153,255]}},t.defaultPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",width:.75,color:t.defaultColor},t.defaultPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{width:.75,color:[255,255,255,191]}},t.defaultTextSymbolJSON={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},t.errorPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},t.errorPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},t.errorPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}).apply(null,i))||(e.exports=o)},"5WBt":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Q2wQ"),r("HZ3d"),r("+AWJ"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27"),r("nsnX"),r("L924"),r("5Lc7"),r("dXKx"),r("HqJa")],void 0===(o=(function(e,t,r,i,o,n,a,s,l,p,u,c,y,d,f,m){function h(e){return!e||"service"!==e.origin&&(!e.layer||!d.isOfType(e.layer,"map-image"))}function S(e){if(!e)return null;var t=w.exec(e);return t&&(t[1]||t[3])||null}var v=new s.default({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0}),b=/^\s*\{([^}]+)\}\s*$/i,w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]))\s*$/i;return function(e){function t(t){var r=e.call(this,t)||this;return r.name=null,r.labelExpression=null,r.labelExpressionInfo=null,r.labelPlacement=null,r.maxScale=0,r.minScale=0,r.symbol=f.defaultTextSymbol2D,r.useCodedValues=void 0,r.where=null,r}var o;return i(t,e),o=t,t.evaluateWhere=function(e,t){var r=function(e,t,r){switch(t){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1};try{if(null==e)return!0;var i=e.split(" ");if(3===i.length)return r(t[i[0]],i[1],i[2]);if(7===i.length){var o=r(t[i[0]],i[1],i[2]),n=i[3],a=r(t[i[4]],i[5],i[6]);switch(n){case"AND":return o&&a;case"OR":return o||a}}return!1}catch(t){console.log("Error.: can't parse = "+e)}},t.prototype.readLabelExpression=function(e,t){var r=t.labelExpressionInfo;if(!r||!r.value&&!r.expression)return e},t.prototype.writeLabelExpression=function(e,t,r,i){if(this.labelExpressionInfo&&h(i))if(null!=this.labelExpressionInfo.value)e=function(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){var o=S(this.labelExpressionInfo.expression);o&&(e="["+o+"]")}null!=e&&(t[r]=e)},t.prototype.writeLabelExpressionInfo=function(e,t,r,i){if(null==e&&null!=this.labelExpression&&h(i))e=new c({expression:this.getLabelExpressionArcade()});else if(!e)return;var o=e.toJSON(i);o.expression&&(t[r]=o)},t.prototype.writeMaxScale=function(e,t){(e||this.minScale)&&(t.maxScale=e)},t.prototype.writeMinScale=function(e,t){(e||this.maxScale)&&(t.minScale=e)},t.prototype.getLabelExpression=function(){var e={expression:"",type:"none"};return this.labelExpressionInfo?this.labelExpressionInfo.value?(e.expression=this.labelExpressionInfo.value,e.type="conventional"):this.labelExpressionInfo.expression&&(e.expression=this.labelExpressionInfo.expression,e.type="arcade"):null!=this.labelExpression&&(e.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(this.labelExpression),e.type="conventional"),e},t.prototype.getLabelExpressionArcade=function(){var e=this.getLabelExpression();if(!e)return null;switch(e.type){case"conventional":return y.convertTemplatedStringToArcade(e.expression);case"arcade":return e.expression}return null},t.prototype.getLabelExpressionSingleField=function(){var e=this.getLabelExpression();if(!e)return null;switch(e.type){case"conventional":return function(e){var t=e.match(b);return t&&t[1].trim()||null}(e.expression);case"arcade":return S(e.expression)}return null},t.prototype.clone=function(){return new o({labelExpression:this.labelExpression,labelExpressionInfo:p.clone(this.labelExpressionInfo),labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,symbol:p.clone(this.symbol),where:this.where,useCodedValues:this.useCodedValues})},r([u.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),r([u.property({type:String,json:{write:{allowNull:!0}}})],t.prototype,"labelExpression",void 0),r([u.reader("labelExpression")],t.prototype,"readLabelExpression",null),r([u.writer("labelExpression")],t.prototype,"writeLabelExpression",null),r([u.property({type:c,json:{write:{overridePolicy:function(e,t,r){return h(r)?{allowNull:!0}:{enabled:!1}}}}})],t.prototype,"labelExpressionInfo",void 0),r([u.writer("labelExpressionInfo")],t.prototype,"writeLabelExpressionInfo",null),r([u.property({type:v.apiValues,json:{type:v.jsonValues,read:v.read,write:v.write}})],t.prototype,"labelPlacement",void 0),r([u.property({type:Number})],t.prototype,"maxScale",void 0),r([u.writer("maxScale")],t.prototype,"writeMaxScale",null),r([u.property({type:Number})],t.prototype,"minScale",void 0),r([u.writer("minScale")],t.prototype,"writeMinScale",null),r([u.property({types:a.symbolTypesLabel,json:{origins:{"web-scene":{types:a.symbolTypesLabel3D,read:m.read,write:m.writeTarget,default:null}},read:m.read,write:m.writeTarget,default:null}})],t.prototype,"symbol",void 0),r([u.property({type:Boolean,json:{write:!0}})],t.prototype,"useCodedValues",void 0),r([u.property({type:String,json:{write:!0}})],t.prototype,"where",void 0),o=r([u.subclass("esri.layers.support.LabelClass")],t)}(u.declared(l.JSONSupport))}).apply(null,i))||(e.exports=o)},BZGX:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("ImIS"),r("rg9i")],void 0===(o=(function(e,t,r,i){function o(e){return null!=e&&e.hasOwnProperty("mapLayerId")}function n(e){return null!=e&&e.hasOwnProperty("dataSource")}Object.defineProperty(t,"__esModule",{value:!0}),t.MAPLAYER="map-layer",t.DATALAYER="data-layer";var a=new r.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),s=new r.default({mapLayer:t.MAPLAYER,dataLayer:t.DATALAYER}),l=new r.default({joinTable:"join-table",queryTable:"query-table"}),p=new r.default({esriLeftOuterJoin:"left-outer-join",esriLeftInnerJoin:"left-inner-join"});t.isMapLayerSource=o,t.isDataLayerSource=n,t.castSource=function e(r){return r?(o(r)&&(r.type=t.MAPLAYER),n(r)&&(r.type=t.DATALAYER,r.dataSource.type||function(t){t.workspaceId?t.type=t.gdbVersion?"table":t.query||t.oidFields?"query-table":"raster":t.leftTableKey&&t.rightTableKey&&t.leftTableSource&&t.rightTableSource&&(t.type="join-table",t.leftTableSource=e(t.leftTableSource),t.rightTableSource=e(t.rightTableSource))}(r.dataSource)),r):r},t.sourceToJSON=function e(r){var o={};return r.type===t.MAPLAYER?(o.mapLayerId=r.mapLayerId,r.gdbVersion&&(o.gdbVersion=r.gdbVersion)):r.type===t.DATALAYER&&(r.fields&&(o.fields=r.fields),o.dataSource=function(t){var r;switch(t.type){case"table":r={dataSourceName:t.dataSourceName,workspaceId:t.workspaceId,gdbVersion:t.gdbVersion};break;case"query-table":r={geometryType:a.toJSON(t.geometryType),workspaceId:t.workspaceId,query:t.query,oidFields:t.oidFields,spatialReference:t.spatialReference};break;case"join-table":r={leftTableSource:e(t.leftTableSource),rightTableSource:e(t.rightTableSource),leftTableKey:t.leftTableKey,rightTableKey:t.rightTableKey,joinType:p.toJSON(t.joinType)};break;case"raster":r={workspaceId:t.workspaceId,dataSourceName:t.dataSourceName}}return r.type=l.toJSON(t.type),i.fixJson(r)}(r.dataSource)),o.type=s.toJSON(r.type),i.fixJson(o)},t.sourceFromJSON=function e(r){var o={};return s.fromJSON(r.type)===t.MAPLAYER?(o.mapLayerId=r.mapLayerId,r.gdbVersion&&(o.gdbVersion=r.gdbVersion)):s.fromJSON(r.type)===t.DATALAYER&&(r.fields&&(o.fields=r.fields),o.dataSource=function(t){var r;switch(t.type){case"table":r={dataSourceName:t.dataSourceName,workspaceId:t.workspaceId,gdbVersion:t.gdbVersion};break;case"queryTable":r={geometryType:a.fromJSON(t.geometryType),workspaceId:t.workspaceId,query:t.query,oidFields:t.oidFields,spatialReference:t.spatialReference};break;case"joinTable":r={leftTableSource:e(t.leftTableSource),rightTableSource:e(t.rightTableSource),leftTableKey:t.leftTableKey,rightTableKey:t.rightTableKey,joinType:p.fromJSON(t.joinType)};break;case"raster":r={workspaceId:t.workspaceId,dataSourceName:t.dataSourceName}}return r.type=l.fromJSON(t.type),i.fixJson(r)}(r.dataSource)),o.type=s.fromJSON(r.type),i.fixJson(o)}}).apply(null,i))||(e.exports=o)},IpeC:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("TMur"),r("TMur"),r("+AWJ"),r("9gfz"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27"),r("1dvD"),r("Lzvl"),r("HqJa"),r("lAK8"),r("aZmZ")],void 0===(o=(function(e,t,r,i,o,n,a,s,l,p,u,c,y,d,f,m,h){var S=new l.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),v=new l.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.cacheHint=!1,r.datumTransformation=null,r.distance=void 0,r.gdbVersion=null,r.geometry=null,r.geometryPrecision=void 0,r.groupByFieldsForStatistics=null,r.having=null,r.historicMoment=null,r.maxAllowableOffset=void 0,r.maxRecordCountFactor=1,r.multipatchOption=null,r.num=void 0,r.objectIds=null,r.orderByFields=null,r.outFields=null,r.outSpatialReference=null,r.outStatistics=null,r.parameterValues=null,r.pixelSize=null,r.quantizationParameters=null,r.rangeValues=null,r.relationParameter=null,r.resultType=null,r.returnCentroid=!1,r.returnDistinctValues=!1,r.returnExceededLimitFeatures=!0,r.returnGeometry=!1,r.returnQueryGeometry=!1,r.returnM=void 0,r.returnZ=void 0,r.source=null,r.spatialRelationship="intersects",r.start=void 0,r.sqlFormat=null,r.text=null,r.timeExtent=null,r.units=null,r.where=null,r}var l;return r(t,e),l=t,t.from=function(e){return y.ensureClass(l,e)},t.prototype.castDatumTransformation=function(e){return"number"==typeof e||"object"==typeof e?e:null},t.prototype.writeHistoricMoment=function(e,t){t.historicMoment=e&&e.getTime()},t.prototype.writeParameterValues=function(e,t){if(e){var r={};for(var i in e){var o=e[i];r[i]=Array.isArray(o)?o.map((function(e){return e instanceof Date?e.getTime():e})):o instanceof Date?o.getTime():o}t.parameterValues=r}},t.prototype.writeStart=function(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"},t.prototype.writeWhere=function(e,t){t.where=e||"1=1"},t.prototype.clone=function(){return new l(u.clone({cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,source:this.source,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))},t.MAX_MAX_RECORD_COUNT_FACTOR=5,i([c.property({type:Boolean,json:{write:!0,default:!1}})],t.prototype,"cacheHint",void 0),i([c.property({json:{write:!0}})],t.prototype,"datumTransformation",void 0),i([c.cast("datumTransformation")],t.prototype,"castDatumTransformation",null),i([c.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),i([c.property({types:n.geometryTypes,json:{read:d.fromJSON,write:!0}})],t.prototype,"geometry",void 0),i([c.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"groupByFieldsForStatistics",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"having",void 0),i([c.property({type:Date})],t.prototype,"historicMoment",void 0),i([c.writer("historicMoment")],t.prototype,"writeHistoricMoment",null),i([c.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),i([c.property({type:Number,cast:function(e){return e<1?1:e>l.MAX_MAX_RECORD_COUNT_FACTOR?l.MAX_MAX_RECORD_COUNT_FACTOR:e},json:{write:{overridePolicy:function(e){return{enabled:e>1}}}}})],t.prototype,"maxRecordCountFactor",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"multipatchOption",void 0),i([c.property({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),i([c.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),i([c.property({type:o.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),i([c.property({type:[h],json:{write:!0}})],t.prototype,"outStatistics",void 0),i([c.property({json:{write:!0}})],t.prototype,"parameterValues",void 0),i([c.writer("parameterValues")],t.prototype,"writeParameterValues",null),i([c.property({types:a.symbolTypes,json:{read:f.read,write:!0}})],t.prototype,"pixelSize",void 0),i([c.property({type:m.default,json:{write:!0}})],t.prototype,"quantizationParameters",void 0),i([c.property({type:[Object],json:{write:!0}})],t.prototype,"rangeValues",void 0),i([c.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy:function(){return{enabled:"relation"===this.spatialRelationship}}}}})],t.prototype,"relationParameter",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"resultType",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnCentroid",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnDistinctValues",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:!e}}}}})],t.prototype,"returnExceededLimitFeatures",void 0),i([c.property({type:Boolean,json:{write:!0}})],t.prototype,"returnGeometry",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnQueryGeometry",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnM",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnZ",void 0),i([c.property({json:{write:!0}})],t.prototype,"source",void 0),i([c.property({type:String,json:{read:{source:"spatialRel",reader:S.read},write:{target:"spatialRel",writer:S.write}}})],t.prototype,"spatialRelationship",void 0),i([c.property({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),i([c.writer("start"),c.writer("num")],t.prototype,"writeStart",null),i([c.property({type:String,json:{write:!0}})],t.prototype,"sqlFormat",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"text",void 0),i([c.property({type:s,json:{write:!0}})],t.prototype,"timeExtent",void 0),i([c.property({type:String,json:{read:v.read,write:{writer:v.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),i([c.property({type:String,json:{write:{overridePolicy:function(e){return{enabled:null!=e||this.start>0}}}}})],t.prototype,"where",void 0),i([c.writer("where")],t.prototype,"writeWhere",null),l=i([c.subclass("esri.tasks.support.Query")],t)}(c.declared(p.JSONSupport))}).apply(null,i))||(e.exports=o)},L924:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("nRUF")],void 0===(o=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i="__begin__",o="__end__",n=new RegExp(i,"ig"),a=new RegExp(o,"ig"),s=new RegExp("^"+i,"i"),l=new RegExp(o+"$","i");t.convertTemplatedStringToArcade=function(e){var t;return e?(t=r.replace(e,(function(e){return i+'$feature["'+e+'"]'+o})),t=s.test(t)?t.replace(s,""):'"'+t,t=(t=l.test(t)?t.replace(l,""):t+'"').replace(n,'" + ').replace(a,' + "')):t='""',t}}).apply(null,i))||(e.exports=o)},OXG3:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("Z/W+"),r("Vtuk"),r("PHoo"),r("fU8o"),r("mLnd"),r("osTG"),r("nHUP"),r("hz/Y")],void 0===(o=(function(e,t,r,i,o,n,a,s,l,p){Object.defineProperty(t,"__esModule",{value:!0}),t.ClassBreaksRenderer=r,t.DictionaryRenderer=i,t.DotDensityRenderer=o,t.HeatmapRenderer=n,t.BaseRenderer=a,t.SimpleRenderer=s,t.UniqueValueRenderer=l,t.isRenderer=function(e){return e instanceof t.BaseRenderer},t.read=p.read,t.write=p.write,t.fromJSON=p.fromJSON,t.rendererTypes={key:"type",base:t.BaseRenderer,typeMap:{heatmap:t.HeatmapRenderer,simple:t.SimpleRenderer,"unique-value":t.UniqueValueRenderer,"class-breaks":t.ClassBreaksRenderer,"dot-density":t.DotDensityRenderer,dictionary:t.DictionaryRenderer}},t.webSceneRendererTypes={key:"type",base:t.BaseRenderer,typeMap:{simple:t.SimpleRenderer,"unique-value":t.UniqueValueRenderer,"class-breaks":t.ClassBreaksRenderer}}}).apply(null,i))||(e.exports=o)},QJ8R:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(o=(function(e,t,i,o,n,a,s,l,p,u,c,y,d){Object.defineProperty(t,"__esModule",{value:!0});var f=l.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new d({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return a(this,void 0,void 0,(function(){var i,o;return n(this,(function(n){switch(n.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,p.create((function(e){return Promise.all([r.e(0),r.e(98)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(r.oe)}))];case 2:return i=n.sent(),p.throwIfAborted(t),[4,i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,n.sent()];case 4:throw o=n.sent(),f.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+o),o;case 5:return[2]}}))}))},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||y.getDefault());return r&&i&&!u.hasSamePortal(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new s("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},o([c.property({type:d})],t.prototype,"portalItem",null),o([c.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),o([c.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),o([c.subclass("esri.layers.mixins.PortalLayer")],t)}(c.declared(e))}}).apply(null,i))||(e.exports=o)},QiYT:function(e,t,r){var i,o;i=[r.dj.c(e.i),r("H1tY"),r("rg9i"),r("qsST"),r("qMld"),r("Z4y+"),r("N7S/"),r("Zvuv"),r("8CIp"),r("e4th")],void 0===(o=(function(e,t,i,o,n,a,s,l,p,u){var c=o.getLogger("esri.layers.StreamLayer");return l.createSubclass({declaredClass:"esri.layers.StreamLayer",constructor:function(e){this._set("type","stream"),this._set("operationalLayerType","ArcGISStreamLayer"),this.outFields=["*"],"WebSocket"in window||(this.loadError=new Error("WebSocket is not supported in this browser"),console.log("WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))},normalizeCtorArgs:function(e,t){return"string"==typeof e?i.mixin({},{url:e},t):e&&e.sourceJSON?i.mixin({},{collectionLayer:e},t):(e&&e.filter&&(e.filter=this._makeFilter({where:e.filter.where||null,geometry:e.filter.geometry||null}),delete e.geometryDefinition,delete e.definitionExpression),e)},properties:{definitionExpression:{value:null,get:function(){return this.filter.where},set:function(e){var t=this._makeFilter({where:e});this._set("filter",t),this.notifyChange("definitionExpression")}},listMode:{type:["show","hide"]},geometryDefinition:{value:null,get:function(){return this.filter.geometry},set:function(e){var t=this._makeFilter({geometry:e});this._set("filter",t),this.notifyChange("geometryDefinition")}},filter:{value:null,type:u,constructOnly:!1},maxReconnectAttempts:10,maximumTrackPoints:1,operationalLayerType:{type:["ArcGISStreamLayer"],value:"ArcGISStreamLayer"},purgeOptions:{value:{},set:function(e){var t=this._get("purgeOptions"),r={},i=!1;if(e&&"object"==typeof e&&t!==e)return e.hasOwnProperty("displayCount")&&e.displayCount>0&&(r.displayCount=e.displayCount,i=!0),e.hasOwnProperty("age")&&e.age>=0&&(r.age=e.age,i=!0),i?this._set("purgeOptions",r):void 0}},socketDirection:"subscribe",sourceJSON:null,spatialReference:{value:a.WGS84,type:a,json:{origins:{service:{read:{source:"spatialReference"}}}}},type:{value:"stream",json:{read:!1}},url:{set:function(e){var t=p.sanitizeUrlWithLayerId(this,e,c);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}}},createGraphicsSource:function(){return n.create((function(e){Promise.all([r.e(7),r.e(10),r.e(86)]).then((function(){var t=[r("mtZs")];e.apply(null,t)}).bind(this)).catch(r.oe)})).then((function(e){var t=new e({layer:this});return t.when((function(){return this.emit("graphics-source-create",{graphicsSource:t}),t}).bind(this))}).bind(this))},loadFromPortal:function(e){return e=i.mixin(e,{supportedTypes:["Stream Service"]}),this.inherited(arguments,[e])},_initLayerProperties:function(e){this.source=e;var r=this.source.relatedFeaturesInfo,o=i.mixin({},e.sourceJSON,r?{objectIdField:r.joinField}:{});r&&(this.source.relatedFeaturesInfo.outFields=this.outFields?this.outFields.splice(0):null),this.sourceJSON=e.sourceJSON,this.read(o,{origin:"service",url:this.parsedUrl}),r&&r.outFields&&"*"!==r.outFields[0]&&(r.outFields=r.outFields.map((function(e){return e.toLowerCase()}))),this._verifyFields(),this.useQueryTimestamp=t("ie")||t("safari")},_makeFilter:function(e){var t;if(e){var r,i=e.hasOwnProperty("where")?e.where:this.filter.where;if(e.hasOwnProperty("geometry")){if((r=e.geometry)&&!r.hasOwnProperty("xmin"))throw console.log("geometry is not an extent: ",r),new Error("Cannot set filter. Only Extent is supported for the geometry filter");r&&!r.declaredClass&&(r=new s(r))}else r=this.filter&&this.filter.geometry||null;t={where:i,geometry:r}}else t={geometry:null,where:null};return t},_readObjectIdField:function(e){if(e.objectIdField)return e.objectIdField;if(e.fields){for(var t,r=e.fields,i=0,o=r.length;i<o;i++){var n=r[i];if("esriFieldTypeOID"===n.type){t=n.name;break}}if(!t){var a=1,s=[];if(r.forEach((function(e){"objectid"===e.name.split("_")[0]&&s.push(e.name)})),s.length)for(;-1!==s.indexOf("objectid_"+a);)a+=1;t="objectid_"+a}return t}},_verifyFields:function(){}})}).apply(null,i))||(e.exports=o)},WaJo:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Vx27")],void 0===(o=(function(e,t,r,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.RefreshableLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshInterval=0,t}return r(t,e),t.prototype.refresh=function(){this.emit("refresh")},i([o.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),i([o.subclass("esri.layers.mixins.RefreshableLayer")],t)}(o.declared(e))}}).apply(null,i))||(e.exports=o)},aZmZ:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27")],void 0===(o=(function(e,t,r,i,o,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.maxPointCount=void 0,r.maxRecordCount=void 0,r.maxVertexCount=void 0,r.onStatisticField=null,r.outStatisticFieldName=null,r.statisticType=null,r}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType})},i([n.property({type:Number,json:{write:!0}})],t.prototype,"maxPointCount",void 0),i([n.property({type:Number,json:{write:!0}})],t.prototype,"maxRecordCount",void 0),i([n.property({type:Number,json:{write:!0}})],t.prototype,"maxVertexCount",void 0),i([n.property({type:String,json:{write:!0}})],t.prototype,"onStatisticField",void 0),i([n.property({type:String,json:{write:!0}})],t.prototype,"outStatisticFieldName",void 0),i([n.property({type:String,json:{write:!0}})],t.prototype,"statisticType",void 0),o=i([n.subclass("esri.tasks.support.StatisticDefinition")],t)}(n.declared(o.JSONSupport))}).apply(null,i))||(e.exports=o)},dXKx:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("pcDC"),r("LxLY"),r("x7Wq"),r("CF4u"),r("NsXp"),r("Z91k"),r("35hF")],void 0===(o=(function(e,t,r,i,o,n,a,s,l){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultPointSymbol2D=a.fromJSON(l.defaultPointSymbolJSON),t.defaultPolylineSymbol2D=n.fromJSON(l.defaultPolylineSymbolJSON),t.defaultPolygonSymbol2D=o.fromJSON(l.defaultPolygonSymbolJSON),t.defaultTextSymbol2D=s.fromJSON(l.defaultTextSymbolJSON),t.getDefaultSymbol2D=function(e){if(i.isNone(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return t.defaultPointSymbol2D;case"polyline":return t.defaultPolylineSymbol2D;case"polygon":case"extent":return t.defaultPolygonSymbol2D;default:r.neverReached(e)}return null},t.errorPointSymbol2D=a.fromJSON(l.errorPointSymbolJSON),t.errorPolylineSymbol2D=n.fromJSON(l.errorPolylineSymbolJSON),t.errorPolygonSymbol2D=o.fromJSON(l.errorPolygonSymbolJSON)}).apply(null,i))||(e.exports=o)},e4th:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("2Atf"),r("TMur"),r("9gfz"),r("9sIV"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27"),r("Lzvl"),r("IpeC")],void 0===(o=(function(e,t,r,i,o,n,a,s,l,p,u,c,y,d){var f=new l.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),m=new l.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.where=null,r.geometry=null,r.spatialRelationship="intersects",r.hiddenIds=new Set,r.distance=void 0,r.objectIds=null,r.units=null,r.timeExtent=null,r.enabled=!1,r}var l;return i(t,e),l=t,t.prototype.writeWhere=function(e,t){t.where=e||"1=1"},t.prototype.enable=function(){this._set("enabled",!0)},t.prototype.createQuery=function(e){void 0===e&&(e={});var t=this,r=t.where,i=t.spatialRelationship,n=t.timeExtent,a=t.objectIds,s=t.units,l=t.distance;return new d(o({geometry:u.clone(t.geometry),objectIds:u.clone(a),spatialRelationship:i,timeExtent:u.clone(n),where:r,units:s,distance:l},e))},t.prototype.clone=function(){var e=this,t=e.where,r=e.geometry,i=e.spatialRelationship,o=e.hiddenIds,n=e.timeExtent,a=e.objectIds,s=e.units,p=e.distance,c=new Set;return o.forEach((function(e){return c.add(e)})),new l({geometry:u.clone(r),hiddenIds:c,objectIds:u.clone(a),spatialRelationship:i,timeExtent:u.clone(n),where:t,units:s,distance:p})},r([c.property({type:String})],t.prototype,"where",void 0),r([c.writer("where")],t.prototype,"writeWhere",null),r([c.property({types:n.geometryTypes,json:{read:y.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([c.property({type:String,json:{read:{source:"spatialRel",reader:f.read},write:{target:"spatialRel",writer:f.write}}})],t.prototype,"spatialRelationship",void 0),r([c.property({json:{write:function(e,t,r){return t[r]=s.valuesOfSet(e)},read:function(e){return s.createSetFromValues(e)}}})],t.prototype,"hiddenIds",void 0),r([c.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),r([c.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r([c.property({type:String,json:{read:m.read,write:{writer:m.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),r([c.property({type:a,json:{write:!0}})],t.prototype,"timeExtent",void 0),r([c.property({readOnly:!0})],t.prototype,"enabled",void 0),l=r([c.subclass("esri.views.layers.support.FeatureFilter")],t)}(c.declared(p.JSONSupport))}).apply(null,i))||(e.exports=o)},lAK8:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("TMur"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27")],void 0===(o=(function(e,t,r,i,o,n,a,s,l){Object.defineProperty(t,"__esModule",{value:!0});var p=new n.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),u=function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.mode="view",r.originPosition="upper-left",r.tolerance=1,r}var n;return r(t,e),n=t,t.prototype.clone=function(){return new n(s.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))},i([l.property({type:o.Extent,json:{write:!0}})],t.prototype,"extent",void 0),i([l.property({type:["view","edit"],json:{write:!0}})],t.prototype,"mode",void 0),i([l.property({type:String,json:{read:p.read,write:p.write}})],t.prototype,"originPosition",void 0),i([l.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),n=i([l.subclass("esri.tasks.support.QuantizationParameters")],t)}(l.declared(a.JSONSupport));t.default=u}).apply(null,i))||(e.exports=o)},nsnX:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27"),r("L924")],void 0===(o=(function(e,t,r,i,o,n,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.value=null,t.expression=null,t}var o;return r(t,e),o=t,t.prototype.readExpression=function(e,t){return t.value?a.convertTemplatedStringToArcade(t.value):e},t.prototype.writeExpression=function(e,t,r){null!=this.value&&(e=a.convertTemplatedStringToArcade(this.value)),t[r]=e},t.prototype.clone=function(){return new o({value:this.value,expression:this.expression})},i([n.property({json:{read:!1,write:!1}})],t.prototype,"value",void 0),i([n.property({type:String,json:{write:{allowNull:!0}}})],t.prototype,"expression",void 0),i([n.reader("expression",["expression","value"])],t.prototype,"readExpression",null),i([n.writer("expression")],t.prototype,"writeExpression",null),o=i([n.subclass("esri.layers.support.LabelExpressionInfo")],t)}(n.declared(o.JSONSupport))}).apply(null,i))||(e.exports=o)},o5TS:function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=(function(e,t){function r(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}Object.defineProperty(t,"__esModule",{value:!0}),t.isSizeVariable=function(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass},t.isValidNumber=function(e){return null!=e&&!isNaN(e)&&isFinite(e)},t.getInputValueType=r,t.getTransformationType=function(e,t){return"unknown"===(t||r(e))?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===(e.valueUnit||"unknown")?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}}).apply(null,i))||(e.exports=o)}}]);