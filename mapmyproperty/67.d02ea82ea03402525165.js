(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/data/timeSupport":"/61J","esri/layers/graphics/centroid":"Fzzg","esri/tasks/support/Query":"IpeC","arcgis-js-api/tasks/support/Query":"IpeC","esri/layers/graphics/data/spatialQuerySupport":"V1i6","esri/layers/graphics/data/attributeSupport":"Ytki","esri/layers/graphics/data/FeatureFilter":"Z0JH","arcgis-js-api/core/ItemCache":"ZHL0","esri/core/ItemCache":"ZHL0","arcgis-js-api/tasks/support/StatisticDefinition":"aZmZ","esri/layers/graphics/contains":"gT/q","esri/layers/graphics/data/optimizedFeatureQueryEngineAdapter":"yLD6","esri/layers/graphics/data/utils":"zDti","esri/core/sql/WhereClauseCache":"ztx9"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"/61J":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeExtent=function(e,t){if(!e)return null;var r=t.featureAdapter,i=e.startTimeField,n=e.endTimeField,o=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach((function(e){var t=r.getAttribute(e,i),a=r.getAttribute(e,n);null==t||isNaN(t)||(o=Math.min(o,t)),null==a||isNaN(a)||(s=Math.max(s,a))}));else{var a=i||n;t.forEach((function(e){var t=r.getAttribute(e,a);null==t||isNaN(t)||(o=Math.min(o,t),s=Math.max(s,t))}))}return{start:o,end:s}},t.getTimeOperator=function(e,t,r){if(!t||!e)return null;var i=e.startTimeField,n=e.endTimeField;if(!i&&!n)return null;var o=t.start,s=t.end;return null==o&&null==s?null:i&&n?function(e,t,r,i,n){if(null!=i&&null!=n&&i===n){var o=i;return function(i){return o>=e.getAttribute(i,t)&&o<=e.getAttribute(i,r)}}return null!=i&&null!=n?function(o){return function(e,t,r,i){return!(r>t||i<e)}(i,n,e.getAttribute(o,t),e.getAttribute(o,r))}:null!=i?function(t){return!(e.getAttribute(t,r)<i)}:null!=n?function(r){return!(e.getAttribute(r,t)>n)}:void 0}(r,i,n,o,s):function(e,t,r,i){return null!=r&&null!=i&&r===i?function(i){return e.getAttribute(i,t)===r}:null!=r&&null!=i?function(n){return e.getAttribute(n,t)>=r&&e.getAttribute(n,t)<=i}:null!=r?function(i){return e.getAttribute(i,t)>=r}:null!=i?function(r){return e.getAttribute(r,t)<=i}:void 0}(r,i||n,o,s)}}).apply(null,i))||(e.exports=n)},Fzzg:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){function r(e,t){return e?t?4:3:t?3:2}function i(e,t,i,n,o,s){for(var a=r(o,s),u=i,l=i+a,p=0,c=0,d=0,y=0,h=0,f=0,m=n-1;f<m;f++,u+=a,l+=a){var v=t[u],g=t[u+1],S=t[u+2],w=t[l],_=t[l+1],T=t[l+2],b=v*_-w*g;y+=b,p+=(v+w)*b,c+=(g+_)*b,o&&(d+=(S+T)*(b=v*T-w*S),h+=b),v<e[0]&&(e[0]=v),v>e[1]&&(e[1]=v),g<e[2]&&(e[2]=g),g>e[3]&&(e[3]=g),o&&(S<e[4]&&(e[4]=S),S>e[5]&&(e[5]=S))}if(y>0&&(y*=-1),h>0&&(h*=-1),!y)return null;var I=[p,c,.5*y];return o&&(I[3]=d,I[4]=.5*h),I}function n(e,t,i,n,l){for(var p=r(n,l),c=t,d=t+p,y=0,h=0,f=0,m=0,v=0,g=i-1;v<g;v++,c+=p,d+=p){var S=e[c],w=e[c+1],_=e[c+2],T=e[d],b=e[d+1],I=e[d+2],R=n?s(S,w,_,T,b,I):o(S,w,T,b);if(R)if(y+=R,n)h+=R*(F=u(S,w,_,T,b,I))[0],f+=R*F[1],m+=R*F[2];else{var F;h+=R*(F=a(S,w,T,b))[0],f+=R*F[1]}}return y>0?n?[h/y,f/y,m/y]:[h/y,f/y]:i>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function o(e,t,r,i){var n=r-e,o=i-t;return Math.sqrt(n*n+o*o)}function s(e,t,r,i,n,o){var s=i-e,a=n-t,u=o-r;return Math.sqrt(s*s+a*a+u*u)}function a(e,t,r,i){return[e+.5*(r-e),t+.5*(i-t)]}function u(e,t,r,i,n,o){return[e+.5*(i-e),t+.5*(n-t),r+.5*(o-r)]}Object.defineProperty(t,"__esModule",{value:!0}),t.getCentroidOptimizedGeometry=function(e,t,o,s){if(!t||!t.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);for(var a=e.coords,u=[],l=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],p=t.lengths,c=t.coords,d=r(o,s),y=0,h=0,f=p;h<f.length;h++){var m=f[h],v=i(l,c,y,m,o,s);v&&u.push(v),y+=m*d}if(u.sort((function(e,t){var r=e[2]-t[2];return 0===r&&o&&(r=e[4]-t[4]),r})),u.length){var g=6*u[0][2];a[0]=u[0][0]/g,a[1]=u[0][1]/g,o&&(a[2]=0!=(g=6*u[0][4])?u[0][3]/g:0),(a[0]<l[0]||a[0]>l[1]||a[1]<l[2]||a[1]>l[3]||o&&(a[2]<l[4]||a[2]>l[5]))&&(a.length=0)}if(!a.length){var S=t.lengths[0]?n(c,0,p[0],o,s):null;if(!S)return null;a[0]=S[0],a[1]=S[1],o&&S.length>2&&(a[2]=S[2])}return e},t.lineCentroid=n}).apply(null,i))||(e.exports=n)},IpeC:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("TMur"),r("TMur"),r("+AWJ"),r("9gfz"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27"),r("1dvD"),r("Lzvl"),r("HqJa"),r("lAK8"),r("aZmZ")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,p,c,d,y,h,f,m){var v=new u.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),g=new u.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.cacheHint=!1,r.datumTransformation=null,r.distance=void 0,r.gdbVersion=null,r.geometry=null,r.geometryPrecision=void 0,r.groupByFieldsForStatistics=null,r.having=null,r.historicMoment=null,r.maxAllowableOffset=void 0,r.maxRecordCountFactor=1,r.multipatchOption=null,r.num=void 0,r.objectIds=null,r.orderByFields=null,r.outFields=null,r.outSpatialReference=null,r.outStatistics=null,r.parameterValues=null,r.pixelSize=null,r.quantizationParameters=null,r.rangeValues=null,r.relationParameter=null,r.resultType=null,r.returnCentroid=!1,r.returnDistinctValues=!1,r.returnExceededLimitFeatures=!0,r.returnGeometry=!1,r.returnQueryGeometry=!1,r.returnM=void 0,r.returnZ=void 0,r.source=null,r.spatialRelationship="intersects",r.start=void 0,r.sqlFormat=null,r.text=null,r.timeExtent=null,r.units=null,r.where=null,r}var u;return r(t,e),u=t,t.from=function(e){return d.ensureClass(u,e)},t.prototype.castDatumTransformation=function(e){return"number"==typeof e||"object"==typeof e?e:null},t.prototype.writeHistoricMoment=function(e,t){t.historicMoment=e&&e.getTime()},t.prototype.writeParameterValues=function(e,t){if(e){var r={};for(var i in e){var n=e[i];r[i]=Array.isArray(n)?n.map((function(e){return e instanceof Date?e.getTime():e})):n instanceof Date?n.getTime():n}t.parameterValues=r}},t.prototype.writeStart=function(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"},t.prototype.writeWhere=function(e,t){t.where=e||"1=1"},t.prototype.clone=function(){return new u(p.clone({cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,source:this.source,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))},t.MAX_MAX_RECORD_COUNT_FACTOR=5,i([c.property({type:Boolean,json:{write:!0,default:!1}})],t.prototype,"cacheHint",void 0),i([c.property({json:{write:!0}})],t.prototype,"datumTransformation",void 0),i([c.cast("datumTransformation")],t.prototype,"castDatumTransformation",null),i([c.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),i([c.property({types:o.geometryTypes,json:{read:y.fromJSON,write:!0}})],t.prototype,"geometry",void 0),i([c.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"groupByFieldsForStatistics",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"having",void 0),i([c.property({type:Date})],t.prototype,"historicMoment",void 0),i([c.writer("historicMoment")],t.prototype,"writeHistoricMoment",null),i([c.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),i([c.property({type:Number,cast:function(e){return e<1?1:e>u.MAX_MAX_RECORD_COUNT_FACTOR?u.MAX_MAX_RECORD_COUNT_FACTOR:e},json:{write:{overridePolicy:function(e){return{enabled:e>1}}}}})],t.prototype,"maxRecordCountFactor",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"multipatchOption",void 0),i([c.property({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),i([c.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),i([c.property({type:n.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),i([c.property({type:[m],json:{write:!0}})],t.prototype,"outStatistics",void 0),i([c.property({json:{write:!0}})],t.prototype,"parameterValues",void 0),i([c.writer("parameterValues")],t.prototype,"writeParameterValues",null),i([c.property({types:s.symbolTypes,json:{read:h.read,write:!0}})],t.prototype,"pixelSize",void 0),i([c.property({type:f.default,json:{write:!0}})],t.prototype,"quantizationParameters",void 0),i([c.property({type:[Object],json:{write:!0}})],t.prototype,"rangeValues",void 0),i([c.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy:function(){return{enabled:"relation"===this.spatialRelationship}}}}})],t.prototype,"relationParameter",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"resultType",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnCentroid",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnDistinctValues",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:!e}}}}})],t.prototype,"returnExceededLimitFeatures",void 0),i([c.property({type:Boolean,json:{write:!0}})],t.prototype,"returnGeometry",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnQueryGeometry",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnM",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnZ",void 0),i([c.property({json:{write:!0}})],t.prototype,"source",void 0),i([c.property({type:String,json:{read:{source:"spatialRel",reader:v.read},write:{target:"spatialRel",writer:v.write}}})],t.prototype,"spatialRelationship",void 0),i([c.property({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),i([c.writer("start"),c.writer("num")],t.prototype,"writeStart",null),i([c.property({type:String,json:{write:!0}})],t.prototype,"sqlFormat",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"text",void 0),i([c.property({type:a,json:{write:!0}})],t.prototype,"timeExtent",void 0),i([c.property({type:String,json:{read:g.read,write:{writer:g.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),i([c.property({type:String,json:{write:{overridePolicy:function(e){return{enabled:null!=e||this.start>0}}}}})],t.prototype,"where",void 0),i([c.writer("where")],t.prototype,"writeWhere",null),u=i([c.subclass("esri.tasks.support.Query")],t)}(c.declared(l.JSONSupport))}).apply(null,i))||(e.exports=n)},V1i6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qMld"),r("k1EI"),r("Thzy"),r("Lzvl"),r("nrlZ"),r("gT/q"),r("+6sX"),r("Jvs9"),r("Q2Em"),r("zDti")],void 0===(n=(function(e,t,i,n,o,s,a,u,l,p,c,d,y,h,f){function m(){return s.create((function(e){return Promise.resolve().then((function(){var t=[r("21p4")];e.apply(null,t)}).bind(this)).catch(r.oe)}))}Object.defineProperty(t,"__esModule",{value:!0});var v="feature-store:unsupported-query",g={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},w={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},_={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};t.importGeometryEngine=m,t.getGeodesicBufferOperator=function(){return m().then((function(e){return e.geodesicBuffer}))},t.getSpatialQueryOperator=function(e,t,r){if(l.isPolygon(t)&&"esriGeometryPoint"===r.geometryType&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var i=d.convertFromPolygon(new y.default,t,!1,!1);return s.resolve((function(e){return c.polygonContainsPoint(i,!1,!1,e)}))}if(l.isPolygon(t)&&"esriGeometryMultipoint"===r.geometryType){var n=d.convertFromPolygon(new y.default,t,!1,!1);if("esriSpatialRelContains"===e)return s.resolve((function(e){return c.polygonContainsMultipoint(n,!1,!1,e,r.hasZ,r.hasM)}))}if(l.isExtent(t)&&"esriGeometryPoint"===r.geometryType&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return s.resolve((function(e){return a.extentContainsPoint(t,f.getGeometry(r,e))}));if(l.isExtent(t)&&"esriGeometryMultipoint"===r.geometryType&&"esriSpatialRelContains"===e)return s.resolve((function(e){return a.extentContainsMultipoint(t,f.getGeometry(r,e))}));if(l.isExtent(t)&&"esriSpatialRelIntersects"===e){var o=u.getExtentIntersector(r.geometryType);return s.resolve((function(e){return o(t,f.getGeometry(r,e))}))}return m().then((function(i){var n=i[g[e]].bind(null,t);return function(e){return n(f.getGeometry(r,e))}}))},t.checkSpatialQuerySupport=function(e,t,r){return n(this,void 0,void 0,(function(){var n,s;return i(this,(function(i){if(n=e.spatialRel,!(s=e.geometry))return[2];if(!function(e){return!0===S[e]}(n))throw new o(v,"Unsupported query spatial relationship",{query:e});if(!p.isValid(s.spatialReference)||!p.isValid(r))return[2];if(!function(e){return!0===w[l.getJsonType(e)]}(s))throw new o(v,"Unsupported query geometry type",{query:e});if(!function(e){return!0===_[e]}(t))throw new o(v,"Unsupported layer geometry type",{query:e});return e.outSR?[2,h.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR)]:[2]}))}))},t.canQueryWithRBush=function(e){if(l.isExtent(e))return!0;if(l.isPolygon(e)){for(var t=0,r=e.rings;t<r.length;t++){var i=r[t];if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}return!0}return!1}}).apply(null,i))||(e.exports=n)},Ytki:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("2Atf"),r("ma1f"),r("9sIV"),r("ztx9")],void 0===(n=(function(e,t,r,i,n,o){function s(e,t){return e?l.get(e,t):null}function a(e,t,r,n){void 0===n&&(n=!0);for(var o=[],l=0,c=t;l<c.length;l++){var d=c[l];if("*"!==d&&!e.has(d))if(n){var y=u(d);try{var h=s(y,e);if(!h)throw new i(p,"invalid SQL expression",{where:y});if(!h.isStandardized)throw new i(p,"expression is not standard",{clause:h});a(e,h.fieldNames,"expression contains missing fields")}catch(e){var f=e&&e.details;if(f&&(f.clause||f.where))throw e;f&&f.missingFields?o.push.apply(o,f.missingFields):o.push(d)}}else o.push(d)}if(o.length)throw new i(p,r,{missingFields:o})}function u(e){return e.split(c)[0]}Object.defineProperty(t,"__esModule",{value:!0});var l=new o.WhereClauseCache(50,500),p="feature-store:unsupported-query",c=" as ",d=n.createSetFromValues(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);t.validateWhere=function(e,t){if(!t)return!0;var r=l.get(t,e);if(!r)throw new i(p,"invalid SQL expression",{where:t});if(!r.isStandardized)throw new i(p,"where clause is not standard",{where:t});return a(e,r.fieldNames,"where clause contains missing fields"),!0},t.validateHaving=function(e,t,r){if(!t)return!0;var n=l.get(t,e);if(!n)throw new i(p,"invalid SQL expression",{having:t});if(!n.isAggregate)throw new i(p,"having does not contain a valid aggregate function",{having:t});if(a(e,n.fieldNames,"having contains missing fields"),!n.getExpressions().every((function(t){var i=t.aggregateType,n=t.field,o=e.has(n)&&e.get(n).name;return r.some((function(t){var r=t.onStatisticField,n=t.statisticType;return(e.has(r)&&e.get(r).name)===o&&n.toLowerCase().trim()===i}))})))throw new i(p,"expressions in having should also exist in outStatistics",{having:t});return!0},t.getWhereClause=s,t.validateFields=a,t.getExpressionFromFieldName=u,t.getAliasFromFieldName=function(e){return e.split(c)[1]},t.hasInvalidFieldType=function(e,t){var r=t.get(e);return!!r&&!d.has(r.type)}}).apply(null,i))||(e.exports=n)},Z0JH:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("HZ3d"),r("2Atf"),r("Q2wQ"),r("ma1f"),r("9sIV"),r("qsST"),r("LxLY"),r("qMld"),r("lRq4"),r("hBh5"),r("Ytki"),r("yLD6"),r("V1i6"),r("/61J"),r("zDti"),r("IpeC")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,p,c,d,y,h,f,m,v){Object.defineProperty(t,"__esModule",{value:!0});var g=a.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),S=function(){function e(e){var t=this;this._geometryBounds=p.create(),this._idToVisibility=new Map,this.check=function(e){var r=e.objectId,i=t._idToVisibility,n=t._applyFilter(e);return i.set(r,n?3:2),!!(1&i.get(r))},this._serviceInfo=e}return Object.defineProperty(e.prototype,"hash",{get:function(){return this._hash},enumerable:!0,configurable:!0}),e.prototype.clear=function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}},e.prototype.invalidate=function(){var e=this;this._idToVisibility.forEach((function(t,r){e._idToVisibility.set(r,0)}))},e.prototype.setKnownIds=function(e){for(var t=0,r=e;t<r.length;t++)this._idToVisibility.set(r[t],1)},e.prototype.setTrue=function(e){var t=this,r=[],i=[],n=s.createSetFromValues(e);return this._idToVisibility.forEach((function(e,o){var s=!!(1&t._idToVisibility.get(o)),a=n.has(o);!s&&a?r.push(o):s&&!a&&i.push(o),t._idToVisibility.set(o,a?3:0)})),{show:r,hide:i}},e.prototype.createQuery=function(){var e=this;return v.fromJSON({geometry:e.geometry,spatialRel:e.spatialRel,where:e.where,timeExtent:e.timeExtent,objectIds:e.objectIds})},e.prototype.update=function(e,t){return r(this,void 0,void 0,(function(){var r;return n(this,(function(i){switch(i.label){case 0:return this._hash=JSON.stringify(e),[4,m.normalizeQueryLike(e,null,t)];case 1:return r=i.sent(),[4,l.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])];case 2:return i.sent(),[2]}}))}))},e.prototype._setAttributeFilter=function(e){if(!e||!e.where)return this._clause=null,void(this.where=null);var t=d.getWhereClause(e.where,this._serviceInfo.fieldsIndex);if(t.isStandardized)this._clause=t;else{var r=new o("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",t);g.error(r)}this.where=e.where},e.prototype._setIdFilter=function(e){this._idsToShow=e&&e.objectIds&&s.createSetFromValues(e.objectIds),this._idsToHide=e&&e.hiddenIds&&s.createSetFromValues(e.hiddenIds),this.objectIds=e&&e.objectIds},e.prototype._setGeometryFilter=function(e){return r(this,void 0,void 0,(function(){var t,r,i;return n(this,(function(n){switch(n.label){case 0:return e&&e.geometry?[4,h.getSpatialQueryOperator(r=e.spatialRel||"esriSpatialRelIntersects",t=e.geometry,this._serviceInfo)]:(this._spatialQueryOperator=null,this.geometry=null,this.spatialRel=null,[2]);case 1:return i=n.sent(),c.getBoundsXY(this._geometryBounds,t),this._spatialQueryOperator=i,this.geometry=t,this.spatialRel=r,[2]}}))}))},e.prototype._setTimeFilter=function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent){if(!this._serviceInfo.timeInfo){var t=new o("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);return void g.error(t)}this.timeExtent=e.timeExtent,this._timeOperator=f.getTimeOperator(this._serviceInfo.timeInfo,e.timeExtent,y.optimizedFeatureQueryEngineAdapter)}},e.prototype._applyFilter=function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)},e.prototype._filterByExpression=function(e){return!this.where||this._clause.testFeature(e)},e.prototype._filterById=function(e){return(!this._idsToHide||!this._idsToHide.has(e.objectId))&&(!this._idsToShow||this._idsToShow.has(e.objectId))},e.prototype._filterByGeometry=function(e){return!this.geometry||!!this._earlyGeometryReject(e)&&this._spatialQueryOperator(e.geometry)},e.prototype._filterByTime=function(e){return!u.isSome(this._timeOperator)||this._timeOperator(e)},e.prototype._earlyGeometryReject=function(e){return!(!e.geometry||!e.geometry.coords.length)&&(!e.centroid||"esriSpatialRelContains"!==this.spatialRel||p.containsPoint(this._geometryBounds,e.centroid.coords))},e.prototype._resetAllHiddenIds=function(){var e=this,t=[];return this._idToVisibility.forEach((function(r,i){1&r||(e._idToVisibility.set(i,1),t.push(i))})),t},e}();t.default=S}).apply(null,i))||(e.exports=n)},ZHL0:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("r7jh")],void 0===(n=(function(e,t,r){return function(){function e(e,t){this._storage=new r.MemCacheStorage,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}return e.prototype.put=function(e,t){this._storage.put(e,t,1,1)},e.prototype.pop=function(e){return this._storage.pop(e)},e.prototype.get=function(e){return this._storage.get(e)},e.prototype.clear=function(){this._storage.clearAll()},e.prototype.destroy=function(){this._storage.clearAll()},e}()}).apply(null,i))||(e.exports=n)},aZmZ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(t){var r=e.call(this,t)||this;return r.maxPointCount=void 0,r.maxRecordCount=void 0,r.maxVertexCount=void 0,r.onStatisticField=null,r.outStatisticFieldName=null,r.statisticType=null,r}var n;return r(t,e),n=t,t.prototype.clone=function(){return new n({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType})},i([o.property({type:Number,json:{write:!0}})],t.prototype,"maxPointCount",void 0),i([o.property({type:Number,json:{write:!0}})],t.prototype,"maxRecordCount",void 0),i([o.property({type:Number,json:{write:!0}})],t.prototype,"maxVertexCount",void 0),i([o.property({type:String,json:{write:!0}})],t.prototype,"onStatisticField",void 0),i([o.property({type:String,json:{write:!0}})],t.prototype,"outStatisticFieldName",void 0),i([o.property({type:String,json:{write:!0}})],t.prototype,"statisticType",void 0),n=i([o.subclass("esri.tasks.support.StatisticDefinition")],t)}(o.declared(n.JSONSupport))}).apply(null,i))||(e.exports=n)},"gT/q":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){function r(e,t){return e?t?4:3:t?3:2}function i(e,t,i,o,s){if(!e)return!1;for(var a=r(t,i),u=e.coords,l=!1,p=0,c=0,d=e.lengths;c<d.length;c++){var y=d[c];l=n(l,u,a,p,y,o,s),p+=y*a}return l}function n(e,t,r,i,n,o,s){for(var a=e,u=i,l=i,p=i+n*r;l<p;l+=r){(u=l+r)===p&&(u=i);var c=t[l],d=t[l+1],y=t[u+1];(d<s&&y>=s||y<s&&d>=s)&&c+(s-d)/(y-d)*(t[u]-c)<o&&(a=!a)}return a}Object.defineProperty(t,"__esModule",{value:!0}),t.polygonContainsPoint=function(e,t,r,n){return i(e,t,r,n.coords[0],n.coords[1])},t.polygonContainsMultipoint=function(e,t,n,o,s,a){var u=r(s,a),l=o.coords,p=o.lengths;if(!p)return!1;for(var c=0,d=0;c<p.length;c++,d+=u)if(!i(e,t,n,l[d],l[d+1]))return!1;return!0},t.polygonContainsCoords=i}).apply(null,i))||(e.exports=n)},yLD6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("Fzzg"),r("/COu"),r("Jvs9")],void 0===(n=(function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0}),t.optimizedFeatureQueryEngineAdapter={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new i.default(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return e.centroid||(e.centroid=r.getCentroidOptimizedGeometry(new n.default,e.geometry,t.hasZ,t.hasM)),e.centroid}},t.default=t.optimizedFeatureQueryEngineAdapter}).apply(null,i))||(e.exports=n)},zDti:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("Q2wQ"),r("HZ3d"),r("ImIS"),r("LxLY"),r("qMld"),r("8uEs"),r("d466"),r("Lzvl"),r("fw2w"),r("nrlZ"),r("Fzzg"),r("+6sX"),r("Jvs9"),r("Q2Em"),r("V1i6")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,p,c,d,y,h,f,m){function v(e,t,r,i,n){void 0===i&&(i=e.hasZ),void 0===n&&(n=e.hasM);var o=e.hasZ&&i,s=e.hasM&&n;if(r){var a=y.quantizeOptimizedGeometry(b,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return y.convertToPoint(a,o,s)}return y.convertToPoint(t,o,s)}function g(e,n,s){return i(this,void 0,void 0,(function(){var i,a,c,d,y,h;return r(this,(function(r){switch(r.label){case 0:return e?(e.where=i=(i=e.where)&&i.trim(),(!i||/^1 *= *1$/.test(i)||n&&n===i)&&(e.where=null),e.geometry?[4,S(e)]:[2,e]):[2,null];case 1:return a=r.sent(),e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel&&(c=e.geometry.spatialReference,(a=u.getGeometryExtent(a)).spatialReference=c),e.geometry=a,[4,f.checkProjectionSupport(a.spatialReference,s)];case 2:return r.sent(),[4,p.normalizeCentralMeridian(l.fromJSON(a))];case 3:if(d=r.sent()[0],o.isNone(d))throw t.QUERY_ENGINE_EMPTY_RESULT;return y=d.toJSON(),[4,f.project(y,y.spatialReference,s)];case 4:if(!(h=r.sent()))throw t.QUERY_ENGINE_EMPTY_RESULT;return h.spatialReference=s,e.geometry=h,[2,e]}}))}))}function S(e){return i(this,void 0,void 0,(function(){var t,i,n,o,u,l,p,d,y;return r(this,(function(r){switch(r.label){case 0:return t=e.geometry,n=e.units,null==(i=e.distance)?[2,s.resolve(t)]:(o=t.spatialReference,u=n&&w.fromJSON(n)||a.getUnitString(o),o&&(c.isGeographic(o)||c.isWebMercator(o))?(p=t,[3,3]):[3,1]);case 1:return[4,f.checkProjectionSupport(o,c.WGS84).then((function(){return f.project(t,c.WGS84)}))];case 2:p=r.sent(),r.label=3;case 3:return l=p,[4,m.getGeodesicBufferOperator()];case 4:return d=r.sent(),[2,(y=d(l,i,u))?y.toJSON():null]}}))}))}Object.defineProperty(t,"__esModule",{value:!0});var w=new n.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});t.QUERY_ENGINE_EMPTY_RESULT=Object.freeze({});var _=new h.default,T=new h.default,b=new h.default,I={esriGeometryPoint:y.convertToPoint,esriGeometryPolyline:y.convertToPolyline,esriGeometryPolygon:y.convertToPolygon,esriGeometryMultipoint:y.convertToMultipoint};t.transformCentroid=v,t.getCentroid=function(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=d.getCentroidOptimizedGeometry(new h.default,t.geometry,e.hasZ,e.hasM)),v(e,t.centroid,r)):null},t.getGeometry=function(e,t,r,i,n,o){void 0===n&&(n=e.hasZ),void 0===o&&(o=e.hasM);var s=e.hasZ&&n,a=e.hasM&&o,u=t?"coords"in t?t:t.geometry:null;if(!u)return null;if(r){var l=y.generalizeOptimizedGeometry(T,u,e.hasZ,e.hasM,e.geometryType,r,n,o);return i&&(l=y.quantizeOptimizedGeometry(b,l,s,a,e.geometryType,i)),I[e.geometryType](l,s,a)}return i?(l=y.quantizeOptimizedGeometry(b,u,e.hasZ,e.hasM,e.geometryType,i,n,o),I[e.geometryType](l,s,a)):(y.removeZMValues(_,u,e.hasZ,e.hasM,n,o),I[e.geometryType](_,s,a))},t.normalizeQuery=function(e,t,n){return i(this,void 0,void 0,(function(){var i,o,s,a,u;return r(this,(function(r){if(o=e.orderByFields,s=e.groupByFieldsForStatistics,a=e.outStatistics,i=e.outFields)for(u=0;u<i.length;u++)i[u]=i[u].trim();if(o)for(u=0;u<o.length;u++)o[u]=o[u].trim();if(s)for(u=0;u<s.length;u++)s[u]=s[u].trim();if(a)for(u=0;u<a.length;u++)a[u].onStatisticField&&(a[u].onStatisticField=a[u].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),[2,g(e,t,n)]}))}))},t.normalizeFilter=function(e,t,n){return i(this,void 0,void 0,(function(){return r(this,(function(r){return[2,g(e,t,n)]}))}))},t.normalizeQueryLike=g,t.cleanFromGeometryEngine=function(e){return e&&R in e?JSON.parse(JSON.stringify(e,F)):e};var R="_geVersion",F=function(e,t){return e!==R?t:void 0}}).apply(null,i))||(e.exports=n)},ztx9:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("ZHL0"),r("1eyA")],void 0===(n=(function(e,t,r,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this._cache=new r(e),this._invalidCache=new r(t)}return e.prototype.get=function(e,t){var r=t.uid+":"+e,n=this._cache.get(r);if(n)return n;if(void 0!==this._invalidCache.get(r))return null;try{var o=i.WhereClause.create(e,t);return this._cache.put(r,o),o}catch(e){return this._invalidCache.put(r,null),null}},e}();t.WhereClauseCache=n}).apply(null,i))||(e.exports=n)}}]);