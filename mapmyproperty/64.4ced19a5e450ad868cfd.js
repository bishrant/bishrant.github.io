(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/graphics/data/timeSupport":"/61J","arcgis-js-api/layers/graphics/centroid":"Fzzg","arcgis-js-api/layers/graphics/data/spatialQuerySupport":"V1i6","arcgis-js-api/layers/graphics/data/attributeSupport":"Ytki","arcgis-js-api/layers/graphics/data/FeatureFilter":"Z0JH","arcgis-js-api/core/ItemCache":"ZHL0","arcgis-js-api/layers/graphics/contains":"gT/q","arcgis-js-api/layers/graphics/data/optimizedFeatureQueryEngineAdapter":"yLD6","arcgis-js-api/layers/graphics/data/utils":"zDti","arcgis-js-api/core/sql/WhereClauseCache":"ztx9"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"/61J":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeExtent=function(e,t){if(!e)return null;var r=t.featureAdapter,i=e.startTimeField,n=e.endTimeField,o=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach((function(e){var t=r.getAttribute(e,i),a=r.getAttribute(e,n);null==t||isNaN(t)||(o=Math.min(o,t)),null==a||isNaN(a)||(s=Math.max(s,a))}));else{var a=i||n;t.forEach((function(e){var t=r.getAttribute(e,a);null==t||isNaN(t)||(o=Math.min(o,t),s=Math.max(s,t))}))}return{start:o,end:s}},t.getTimeOperator=function(e,t,r){if(!t||!e)return null;var i=e.startTimeField,n=e.endTimeField;if(!i&&!n)return null;var o=t.start,s=t.end;return null==o&&null==s?null:i&&n?function(e,t,r,i,n){if(null!=i&&null!=n&&i===n){var o=i;return function(i){return o>=e.getAttribute(i,t)&&o<=e.getAttribute(i,r)}}return null!=i&&null!=n?function(o){return s=i,a=n,u=e.getAttribute(o,t),l=e.getAttribute(o,r),!(u>a||l<s);var s,a,u,l}:null!=i?function(t){return!(e.getAttribute(t,r)<i)}:null!=n?function(r){return!(e.getAttribute(r,t)>n)}:void 0}(r,i,n,o,s):function(e,t,r,i){return null!=r&&null!=i&&r===i?function(i){return e.getAttribute(i,t)===r}:null!=r&&null!=i?function(n){return e.getAttribute(n,t)>=r&&e.getAttribute(n,t)<=i}:null!=r?function(i){return e.getAttribute(i,t)>=r}:null!=i?function(r){return e.getAttribute(r,t)<=i}:void 0}(r,i||n,o,s)}}).apply(null,i))||(e.exports=n)},Fzzg:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){function r(e,t){return e?t?4:3:t?3:2}function i(e,t,i,n,o,s){for(var a=r(o,s),u=i,l=i+a,c=0,p=0,f=0,d=0,h=0,y=0,g=n-1;y<g;y++,u+=a,l+=a){var m=t[u],v=t[u+1],_=t[u+2],I=t[l],S=t[l+1],T=t[l+2],w=m*S-I*v;d+=w,c+=(m+I)*w,p+=(v+S)*w,o&&(f+=(_+T)*(w=m*T-I*_),h+=w),m<e[0]&&(e[0]=m),m>e[1]&&(e[1]=m),v<e[2]&&(e[2]=v),v>e[3]&&(e[3]=v),o&&(_<e[4]&&(e[4]=_),_>e[5]&&(e[5]=_))}if(d>0&&(d*=-1),h>0&&(h*=-1),!d)return null;var b=[c,p,.5*d];return o&&(b[3]=f,b[4]=.5*h),b}function n(e,t,i,n,l){for(var c=r(n,l),p=t,f=t+c,d=0,h=0,y=0,g=0,m=0,v=i-1;m<v;m++,p+=c,f+=c){var _,I=e[p],S=e[p+1],T=e[p+2],w=e[f],b=e[f+1],F=e[f+2],E=n?s(I,S,T,w,b,F):o(I,S,w,b);E&&(d+=E,n?(h+=E*(_=u(I,S,T,w,b,F))[0],y+=E*_[1],g+=E*_[2]):(h+=E*(_=a(I,S,w,b))[0],y+=E*_[1]))}return d>0?n?[h/d,y/d,g/d]:[h/d,y/d]:i>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function o(e,t,r,i){var n=r-e,o=i-t;return Math.sqrt(n*n+o*o)}function s(e,t,r,i,n,o){var s=i-e,a=n-t,u=o-r;return Math.sqrt(s*s+a*a+u*u)}function a(e,t,r,i){return[e+.5*(r-e),t+.5*(i-t)]}function u(e,t,r,i,n,o){return[e+.5*(i-e),t+.5*(n-t),r+.5*(o-r)]}Object.defineProperty(t,"__esModule",{value:!0}),t.getCentroidOptimizedGeometry=function(e,t,o,s){if(!t||!t.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);for(var a=e.coords,u=[],l=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],c=t.lengths,p=t.coords,f=r(o,s),d=0,h=0,y=c;h<y.length;h++){var g=y[h],m=i(l,p,d,g,o,s);m&&u.push(m),d+=g*f}if(u.sort((function(e,t){var r=e[2]-t[2];return 0===r&&o&&(r=e[4]-t[4]),r})),u.length){var v=6*u[0][2];a[0]=u[0][0]/v,a[1]=u[0][1]/v,o&&(a[2]=0!=(v=6*u[0][4])?u[0][3]/v:0),(a[0]<l[0]||a[0]>l[1]||a[1]<l[2]||a[1]>l[3]||o&&(a[2]<l[4]||a[2]>l[5]))&&(a.length=0)}if(!a.length){var _=t.lengths[0]?n(p,0,c[0],o,s):null;if(!_)return null;a[0]=_[0],a[1]=_[1],o&&_.length>2&&(a[2]=_[2])}return e},t.lineCentroid=n}).apply(null,i))||(e.exports=n)},V1i6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qMld"),r("k1EI"),r("Thzy"),r("Lzvl"),r("nrlZ"),r("gT/q"),r("+6sX"),r("Jvs9"),r("Q2Em"),r("zDti")],void 0===(n=(function(e,t,i,n,o,s,a,u,l,c,p,f,d,h,y){Object.defineProperty(t,"__esModule",{value:!0});var g={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},m={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},v={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},_={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function I(){return s.create((function(e){return Promise.resolve().then((function(){var t=[r("21p4")];e.apply(null,t)}).bind(this)).catch(r.oe)}))}t.importGeometryEngine=I,t.getGeodesicBufferOperator=function(){return I().then((function(e){return e.geodesicBuffer}))},t.getSpatialQueryOperator=function(e,t,r){if(l.isPolygon(t)&&"esriGeometryPoint"===r.geometryType&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var i=f.convertFromPolygon(new d.default,t,!1,!1);return s.resolve((function(e){return p.polygonContainsPoint(i,!1,!1,e)}))}if(l.isPolygon(t)&&"esriGeometryMultipoint"===r.geometryType){var n=f.convertFromPolygon(new d.default,t,!1,!1);if("esriSpatialRelContains"===e)return s.resolve((function(e){return p.polygonContainsMultipoint(n,!1,!1,e,r.hasZ,r.hasM)}))}if(l.isExtent(t)&&"esriGeometryPoint"===r.geometryType&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return s.resolve((function(e){return a.extentContainsPoint(t,y.getGeometry(r,e))}));if(l.isExtent(t)&&"esriGeometryMultipoint"===r.geometryType&&"esriSpatialRelContains"===e)return s.resolve((function(e){return a.extentContainsMultipoint(t,y.getGeometry(r,e))}));if(l.isExtent(t)&&"esriSpatialRelIntersects"===e){var o=u.getExtentIntersector(r.geometryType);return s.resolve((function(e){return o(t,y.getGeometry(r,e))}))}return I().then((function(i){var n=i[g[e]].bind(null,t);return function(e){return n(y.getGeometry(r,e))}}))},t.checkSpatialQuerySupport=function(e,t,r){return n(this,void 0,void 0,(function(){var n,s;return i(this,(function(i){if(n=e.spatialRel,!(s=e.geometry))return[2];if(!0!==m[n])throw new o("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if(!c.isValid(s.spatialReference)||!c.isValid(r))return[2];if(!function(e){return!0===v[l.getJsonType(e)]}(s))throw new o("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===_[e]}(t))throw new o("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});return e.outSR?[2,h.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR)]:[2]}))}))},t.canQueryWithRBush=function(e){if(l.isExtent(e))return!0;if(l.isPolygon(e)){for(var t=0,r=e.rings;t<r.length;t++){var i=r[t];if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}return!0}return!1}}).apply(null,i))||(e.exports=n)},Ytki:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("2Atf"),r("ma1f"),r("ULaq"),r("ztx9")],void 0===(n=(function(e,t,r,i,n,o){Object.defineProperty(t,"__esModule",{value:!0});var s=new o.WhereClauseCache(50,500),a="feature-store:unsupported-query",u=n.createSetFromValues(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function l(e,t){return e?s.get(e,t):null}function c(e,t,r,n){void 0===n&&(n=!0);for(var o=[],s=0,u=t;s<u.length;s++){var f=u[s];if("*"!==f&&!e.has(f))if(n){var d=p(f);try{var h=l(d,e);if(!h)throw new i(a,"invalid SQL expression",{where:d});if(!h.isStandardized)throw new i(a,"expression is not standard",{clause:h});c(e,h.fieldNames,"expression contains missing fields")}catch(e){var y=e&&e.details;if(y&&(y.clause||y.where))throw e;y&&y.missingFields?o.push.apply(o,y.missingFields):o.push(f)}}else o.push(f)}if(o.length)throw new i(a,r,{missingFields:o})}function p(e){return e.split(" as ")[0]}t.validateWhere=function(e,t){if(!t)return!0;var r=s.get(t,e);if(!r)throw new i(a,"invalid SQL expression",{where:t});if(!r.isStandardized)throw new i(a,"where clause is not standard",{where:t});return c(e,r.fieldNames,"where clause contains missing fields"),!0},t.validateHaving=function(e,t,r){if(!t)return!0;var n=s.get(t,e);if(!n)throw new i(a,"invalid SQL expression",{having:t});if(!n.isAggregate)throw new i(a,"having does not contain a valid aggregate function",{having:t});if(c(e,n.fieldNames,"having contains missing fields"),!n.getExpressions().every((function(t){var i=t.aggregateType,n=t.field,o=e.has(n)&&e.get(n).name;return r.some((function(t){var r=t.onStatisticField,n=t.statisticType;return(e.has(r)&&e.get(r).name)===o&&n.toLowerCase().trim()===i}))})))throw new i(a,"expressions in having should also exist in outStatistics",{having:t});return!0},t.getWhereClause=l,t.validateFields=c,t.getExpressionFromFieldName=p,t.getAliasFromFieldName=function(e){return e.split(" as ")[1]},t.hasInvalidFieldType=function(e,t){var r=t.get(e);return!!r&&!u.has(r.type)}}).apply(null,i))||(e.exports=n)},Z0JH:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("HZ3d"),r("2Atf"),r("Q2wQ"),r("ma1f"),r("qsST"),r("LxLY"),r("qMld"),r("ULaq"),r("lRq4"),r("hBh5"),r("Ytki"),r("yLD6"),r("V1i6"),r("/61J"),r("zDti"),r("IpeC")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,c,p,f,d,h,y,g,m){Object.defineProperty(t,"__esModule",{value:!0});var v=s.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),_=function(){function e(e){var t=this;this._geometryBounds=c.create(),this._idToVisibility=new Map,this.check=function(e){var r=e.objectId,i=t._idToVisibility,n=t._applyFilter(e);return i.set(r,n?3:2),!!(1&i.get(r))},this._serviceInfo=e}return Object.defineProperty(e.prototype,"hash",{get:function(){return this._hash},enumerable:!0,configurable:!0}),e.prototype.clear=function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}},e.prototype.invalidate=function(){var e=this;this._idToVisibility.forEach((function(t,r){e._idToVisibility.set(r,0)}))},e.prototype.setKnownIds=function(e){for(var t=0,r=e;t<r.length;t++)this._idToVisibility.set(r[t],1)},e.prototype.setTrue=function(e){var t=this,r=[],i=[],n=l.createSetFromValues(e);return this._idToVisibility.forEach((function(e,o){var s=!!(1&t._idToVisibility.get(o)),a=n.has(o);!s&&a?r.push(o):s&&!a&&i.push(o),t._idToVisibility.set(o,a?3:0)})),{show:r,hide:i}},e.prototype.createQuery=function(){var e=this;return m.fromJSON({geometry:e.geometry,spatialRel:e.spatialRel,where:e.where,timeExtent:e.timeExtent,objectIds:e.objectIds})},e.prototype.update=function(e,t){return r(this,void 0,void 0,(function(){var r;return n(this,(function(i){switch(i.label){case 0:return this._hash=JSON.stringify(e),[4,g.normalizeQueryLike(e,null,t)];case 1:return r=i.sent(),[4,u.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])];case 2:return i.sent(),[2]}}))}))},e.prototype._setAttributeFilter=function(e){if(!e||!e.where)return this._clause=null,void(this.where=null);var t=f.getWhereClause(e.where,this._serviceInfo.fieldsIndex);if(t.isStandardized)this._clause=t;else{var r=new o("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",t);v.error(r)}this.where=e.where},e.prototype._setIdFilter=function(e){this._idsToShow=e&&e.objectIds&&l.createSetFromValues(e.objectIds),this._idsToHide=e&&e.hiddenIds&&l.createSetFromValues(e.hiddenIds),this.objectIds=e&&e.objectIds},e.prototype._setGeometryFilter=function(e){return r(this,void 0,void 0,(function(){var t,r,i;return n(this,(function(n){switch(n.label){case 0:return e&&e.geometry?[4,h.getSpatialQueryOperator(r=e.spatialRel||"esriSpatialRelIntersects",t=e.geometry,this._serviceInfo)]:(this._spatialQueryOperator=null,this.geometry=null,this.spatialRel=null,[2]);case 1:return i=n.sent(),p.getBoundsXY(this._geometryBounds,t),this._spatialQueryOperator=i,this.geometry=t,this.spatialRel=r,[2]}}))}))},e.prototype._setTimeFilter=function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=y.getTimeOperator(this._serviceInfo.timeInfo,e.timeExtent,d.optimizedFeatureQueryEngineAdapter);else{var t=new o("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);v.error(t)}},e.prototype._applyFilter=function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)},e.prototype._filterByExpression=function(e){return!this.where||this._clause.testFeature(e)},e.prototype._filterById=function(e){return(!this._idsToHide||!this._idsToHide.has(e.objectId))&&(!this._idsToShow||this._idsToShow.has(e.objectId))},e.prototype._filterByGeometry=function(e){return!this.geometry||!!this._earlyGeometryReject(e)&&this._spatialQueryOperator(e.geometry)},e.prototype._filterByTime=function(e){return!a.isSome(this._timeOperator)||this._timeOperator(e)},e.prototype._earlyGeometryReject=function(e){return!(!e.geometry||!e.geometry.coords.length)&&(!e.centroid||"esriSpatialRelContains"!==this.spatialRel||c.containsPoint(this._geometryBounds,e.centroid.coords))},e.prototype._resetAllHiddenIds=function(){var e=this,t=[];return this._idToVisibility.forEach((function(r,i){1&r||(e._idToVisibility.set(i,1),t.push(i))})),t},e}();t.default=_}).apply(null,i))||(e.exports=n)},ZHL0:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("r7jh")],void 0===(n=(function(e,t,r){return function(){function e(e,t){this._storage=new r.MemCacheStorage,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}return e.prototype.put=function(e,t){this._storage.put(e,t,1,1)},e.prototype.pop=function(e){return this._storage.pop(e)},e.prototype.get=function(e){return this._storage.get(e)},e.prototype.clear=function(){this._storage.clearAll()},e.prototype.destroy=function(){this._storage.clearAll()},e}()}).apply(null,i))||(e.exports=n)},"gT/q":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){function r(e,t){return e?t?4:3:t?3:2}function i(e,t,i,o,s){if(!e)return!1;for(var a=r(t,i),u=e.coords,l=!1,c=0,p=0,f=e.lengths;p<f.length;p++){var d=f[p];l=n(l,u,a,c,d,o,s),c+=d*a}return l}function n(e,t,r,i,n,o,s){for(var a=e,u=i,l=i,c=i+n*r;l<c;l+=r){(u=l+r)===c&&(u=i);var p=t[l],f=t[l+1],d=t[u+1];(f<s&&d>=s||d<s&&f>=s)&&p+(s-f)/(d-f)*(t[u]-p)<o&&(a=!a)}return a}Object.defineProperty(t,"__esModule",{value:!0}),t.polygonContainsPoint=function(e,t,r,n){return i(e,t,r,n.coords[0],n.coords[1])},t.polygonContainsMultipoint=function(e,t,n,o,s,a){var u=r(s,a),l=o.coords,c=o.lengths;if(!c)return!1;for(var p=0,f=0;p<c.length;p++,f+=u)if(!i(e,t,n,l[f],l[f+1]))return!1;return!0},t.polygonContainsCoords=i}).apply(null,i))||(e.exports=n)},yLD6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("Fzzg"),r("/COu"),r("Jvs9")],void 0===(n=(function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0}),t.optimizedFeatureQueryEngineAdapter={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new i.default(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return e.centroid||(e.centroid=r.getCentroidOptimizedGeometry(new n.default,e.geometry,t.hasZ,t.hasM)),e.centroid}},t.default=t.optimizedFeatureQueryEngineAdapter}).apply(null,i))||(e.exports=n)},zDti:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("Q2wQ"),r("HZ3d"),r("ImIS"),r("LxLY"),r("qMld"),r("8uEs"),r("d466"),r("Lzvl"),r("fw2w"),r("nrlZ"),r("Fzzg"),r("+6sX"),r("Jvs9"),r("Q2Em"),r("V1i6")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,c,p,f,d,h,y,g){Object.defineProperty(t,"__esModule",{value:!0});var m=new n.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});t.QUERY_ENGINE_EMPTY_RESULT=Object.freeze({});var v=new h.default,_=new h.default,I=new h.default,S={esriGeometryPoint:d.convertToPoint,esriGeometryPolyline:d.convertToPolyline,esriGeometryPolygon:d.convertToPolygon,esriGeometryMultipoint:d.convertToMultipoint};function T(e,t,r,i,n){void 0===i&&(i=e.hasZ),void 0===n&&(n=e.hasM);var o=e.hasZ&&i,s=e.hasM&&n;if(r){var a=d.quantizeOptimizedGeometry(I,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return d.convertToPoint(a,o,s)}return d.convertToPoint(t,o,s)}function w(e,n,s){return i(this,void 0,void 0,(function(){var i,a,p,f,d,h;return r(this,(function(r){switch(r.label){case 0:return e?(e.where=i=(i=e.where)&&i.trim(),(!i||/^1 *= *1$/.test(i)||n&&n===i)&&(e.where=null),e.geometry?[4,b(e)]:[2,e]):[2,null];case 1:return a=r.sent(),e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel&&(p=e.geometry.spatialReference,(a=u.getGeometryExtent(a)).spatialReference=p),e.geometry=a,[4,y.checkProjectionSupport(a.spatialReference,s)];case 2:return r.sent(),[4,c.normalizeCentralMeridian(l.fromJSON(a))];case 3:if(f=r.sent()[0],o.isNone(f))throw t.QUERY_ENGINE_EMPTY_RESULT;return d=f.toJSON(),[4,y.project(d,d.spatialReference,s)];case 4:if(!(h=r.sent()))throw t.QUERY_ENGINE_EMPTY_RESULT;return h.spatialReference=s,e.geometry=h,[2,e]}}))}))}function b(e){return i(this,void 0,void 0,(function(){var t,i,n,o,u,l,c,f,d;return r(this,(function(r){switch(r.label){case 0:return t=e.geometry,n=e.units,null==(i=e.distance)?[2,s.resolve(t)]:(o=t.spatialReference,u=n&&m.fromJSON(n)||a.getUnitString(o),o&&(p.isGeographic(o)||p.isWebMercator(o))?(c=t,[3,3]):[3,1]);case 1:return[4,y.checkProjectionSupport(o,p.WGS84).then((function(){return y.project(t,p.WGS84)}))];case 2:c=r.sent(),r.label=3;case 3:return l=c,[4,g.getGeodesicBufferOperator()];case 4:return f=r.sent(),[2,(d=f(l,i,u))?d.toJSON():null]}}))}))}t.transformCentroid=T,t.getCentroid=function(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=f.getCentroidOptimizedGeometry(new h.default,t.geometry,e.hasZ,e.hasM)),T(e,t.centroid,r)):null},t.getGeometry=function(e,t,r,i,n,o){void 0===n&&(n=e.hasZ),void 0===o&&(o=e.hasM);var s=e.hasZ&&n,a=e.hasM&&o,u=t?"coords"in t?t:t.geometry:null;if(!u)return null;if(r){var l=d.generalizeOptimizedGeometry(_,u,e.hasZ,e.hasM,e.geometryType,r,n,o);return i&&(l=d.quantizeOptimizedGeometry(I,l,s,a,e.geometryType,i)),S[e.geometryType](l,s,a)}return i?(l=d.quantizeOptimizedGeometry(I,u,e.hasZ,e.hasM,e.geometryType,i,n,o),S[e.geometryType](l,s,a)):(d.removeZMValues(v,u,e.hasZ,e.hasM,n,o),S[e.geometryType](v,s,a))},t.normalizeQuery=function(e,t,n){return i(this,void 0,void 0,(function(){var i,o,s,a,u;return r(this,(function(r){if(o=e.orderByFields,s=e.groupByFieldsForStatistics,a=e.outStatistics,i=e.outFields)for(u=0;u<i.length;u++)i[u]=i[u].trim();if(o)for(u=0;u<o.length;u++)o[u]=o[u].trim();if(s)for(u=0;u<s.length;u++)s[u]=s[u].trim();if(a)for(u=0;u<a.length;u++)a[u].onStatisticField&&(a[u].onStatisticField=a[u].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),[2,w(e,t,n)]}))}))},t.normalizeFilter=function(e,t,n){return i(this,void 0,void 0,(function(){return r(this,(function(r){return[2,w(e,t,n)]}))}))},t.normalizeQueryLike=w,t.cleanFromGeometryEngine=function(e){return e&&F in e?JSON.parse(JSON.stringify(e,E)):e};var F="_geVersion",E=function(e,t){return e!==F?t:void 0}}).apply(null,i))||(e.exports=n)},ztx9:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("ZHL0"),r("1eyA")],void 0===(n=(function(e,t,r,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this._cache=new r(e),this._invalidCache=new r(t)}return e.prototype.get=function(e,t){var r=t.uid+":"+e,n=this._cache.get(r);if(n)return n;if(void 0!==this._invalidCache.get(r))return null;try{var o=i.WhereClause.create(e,t);return this._cache.put(r,o),o}catch(e){return this._invalidCache.put(r,null),null}},e}();t.WhereClauseCache=n}).apply(null,i))||(e.exports=n)}}]);