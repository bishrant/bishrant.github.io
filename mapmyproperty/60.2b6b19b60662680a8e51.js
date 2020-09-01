(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/data/timeSupport":"/61J","esri/layers/graphics/centroid":"Fzzg","esri/layers/graphics/data/spatialQuerySupport":"V1i6","esri/layers/graphics/data/attributeSupport":"Ytki","esri/layers/graphics/data/FeatureFilter":"Z0JH","arcgis-js-api/core/ItemCache":"ZHL0","esri/core/ItemCache":"ZHL0","esri/layers/graphics/contains":"gT/q","esri/layers/graphics/data/optimizedFeatureQueryEngineAdapter":"yLD6","esri/layers/graphics/data/utils":"zDti","esri/core/sql/WhereClauseCache":"ztx9"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"/61J":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeExtent=function(e,t){if(!e)return null;var r=t.featureAdapter,i=e.startTimeField,n=e.endTimeField,o=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach((function(e){var t=r.getAttribute(e,i),a=r.getAttribute(e,n);null==t||isNaN(t)||(o=Math.min(o,t)),null==a||isNaN(a)||(s=Math.max(s,a))}));else{var a=i||n;t.forEach((function(e){var t=r.getAttribute(e,a);null==t||isNaN(t)||(o=Math.min(o,t),s=Math.max(s,t))}))}return{start:o,end:s}},t.getTimeOperator=function(e,t,r){if(!t||!e)return null;var i=e.startTimeField,n=e.endTimeField;if(!i&&!n)return null;var o=t.start,s=t.end;return null===o&&null===s?null:void 0===o&&void 0===s?function(){return!1}:i&&n?function(e,t,r,i,n){if(null!=i&&null!=n&&i===n){var o=i;return function(i){return o>=e.getAttribute(i,t)&&o<=e.getAttribute(i,r)}}return null!=i&&null!=n?function(o){return s=i,a=n,u=e.getAttribute(o,t),l=e.getAttribute(o,r),!(u>a||l<s);var s,a,u,l}:null!=i?function(t){return!(e.getAttribute(t,r)<i)}:null!=n?function(r){return!(e.getAttribute(r,t)>n)}:void 0}(r,i,n,o,s):function(e,t,r,i){return null!=r&&null!=i&&r===i?function(i){return e.getAttribute(i,t)===r}:null!=r&&null!=i?function(n){return e.getAttribute(n,t)>=r&&e.getAttribute(n,t)<=i}:null!=r?function(i){return e.getAttribute(i,t)>=r}:null!=i?function(r){return e.getAttribute(r,t)<=i}:void 0}(r,i||n,o,s)}}).apply(null,i))||(e.exports=n)},Fzzg:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){function r(e,t){return e?t?4:3:t?3:2}function i(e,t,i,n,o,s){for(var a=r(o,s),u=i,l=i+a,c=0,p=0,f=0,d=0,h=0,y=0,g=n-1;y<g;y++,u+=a,l+=a){var m=t[u],v=t[u+1],_=t[u+2],I=t[l],S=t[l+1],w=t[l+2],b=m*S-I*v;d+=b,c+=(m+I)*b,p+=(v+S)*b,o&&(f+=(_+w)*(b=m*w-I*_),h+=b),m<e[0]&&(e[0]=m),m>e[1]&&(e[1]=m),v<e[2]&&(e[2]=v),v>e[3]&&(e[3]=v),o&&(_<e[4]&&(e[4]=_),_>e[5]&&(e[5]=_))}if(d>0&&(d*=-1),h>0&&(h*=-1),!d)return null;var T=[c,p,.5*d];return o&&(T[3]=f,T[4]=.5*h),T}function n(e,t,i,n,l){for(var c=r(n,l),p=t,f=t+c,d=0,h=0,y=0,g=0,m=0,v=i-1;m<v;m++,p+=c,f+=c){var _,I=e[p],S=e[p+1],w=e[p+2],b=e[f],T=e[f+1],F=e[f+2],E=n?s(I,S,w,b,T,F):o(I,S,b,T);E&&(d+=E,n?(h+=E*(_=u(I,S,w,b,T,F))[0],y+=E*_[1],g+=E*_[2]):(h+=E*(_=a(I,S,b,T))[0],y+=E*_[1]))}return d>0?n?[h/d,y/d,g/d]:[h/d,y/d]:i>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function o(e,t,r,i){var n=r-e,o=i-t;return Math.sqrt(n*n+o*o)}function s(e,t,r,i,n,o){var s=i-e,a=n-t,u=o-r;return Math.sqrt(s*s+a*a+u*u)}function a(e,t,r,i){return[e+.5*(r-e),t+.5*(i-t)]}function u(e,t,r,i,n,o){return[e+.5*(i-e),t+.5*(n-t),r+.5*(o-r)]}Object.defineProperty(t,"__esModule",{value:!0}),t.getCentroidOptimizedGeometry=function(e,t,o,s){if(!t||!t.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);for(var a=e.coords,u=[],l=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],c=t.lengths,p=t.coords,f=r(o,s),d=0,h=0,y=c;h<y.length;h++){var g=y[h],m=i(l,p,d,g,o,s);m&&u.push(m),d+=g*f}if(u.sort((function(e,t){var r=e[2]-t[2];return 0===r&&o&&(r=e[4]-t[4]),r})),u.length){var v=6*u[0][2];a[0]=u[0][0]/v,a[1]=u[0][1]/v,o&&(a[2]=0!=(v=6*u[0][4])?u[0][3]/v:0),(a[0]<l[0]||a[0]>l[1]||a[1]<l[2]||a[1]>l[3]||o&&(a[2]<l[4]||a[2]>l[5]))&&(a.length=0)}if(!a.length){var _=t.lengths[0]?n(p,0,c[0],o,s):null;if(!_)return null;a[0]=_[0],a[1]=_[1],o&&_.length>2&&(a[2]=_[2])}return e},t.lineCentroid=n}).apply(null,i))||(e.exports=n)},V1i6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qMld"),r("k1EI"),r("Thzy"),r("Lzvl"),r("nrlZ"),r("gT/q"),r("+6sX"),r("Jvs9"),r("Q2Em"),r("zDti"),r("2Kdy")],void 0===(n=(function(e,t,i,n,o,s,a,u,l,c,p,f,d,h){Object.defineProperty(t,"__esModule",{value:!0});var y={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},g={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},m={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},v={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function _(){return new Promise((function(e,t){r.e(1).then((function(){var t=[r("tNTp")];e.apply(null,t)}).bind(this)).catch(t.bind(this))}))}t.importGeometryEngine=_,t.getGeodesicBufferOperator=function(){return _().then((function(e){return e.geodesicBuffer}))},t.getSpatialQueryOperator=function(e,t,r,i,n){if(u.isPolygon(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var l=p.convertFromPolygon(new f.default,t,!1,!1);return o.resolve((function(e){return c.polygonContainsPoint(l,!1,!1,e)}))}if(u.isPolygon(t)&&"esriGeometryMultipoint"===r){var d=p.convertFromPolygon(new f.default,t,!1,!1);if("esriSpatialRelContains"===e)return o.resolve((function(e){return c.polygonContainsMultipoint(d,!1,!1,e,i,n)}))}if(u.isExtent(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return o.resolve((function(e){return s.extentContainsPoint(t,h.getGeometry(r,i,n,e))}));if(u.isExtent(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return o.resolve((function(e){return s.extentContainsMultipoint(t,h.getGeometry(r,i,n,e))}));if(u.isExtent(t)&&"esriSpatialRelIntersects"===e){var g=a.getExtentIntersector(r);return o.resolve((function(e){return g(t,h.getGeometry(r,i,n,e))}))}return _().then((function(o){var s=o[y[e]].bind(null,t.spatialReference,t);return function(e){return s(h.getGeometry(r,i,n,e))}}))},t.checkSpatialQuerySupport=function(e,t,r){return i.__awaiter(this,void 0,void 0,(function(){var o,s;return i.__generator(this,(function(i){if(o=e.spatialRel,!(s=e.geometry))return[2];if(!0!==g[o])throw new n("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if(!l.isValid(s.spatialReference)||!l.isValid(r))return[2];if(!function(e){return!0===m[u.getJsonType(e)]}(s))throw new n("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===v[e]}(t))throw new n("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});return e.outSR?[2,d.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR)]:[2]}))}))},t.canQueryWithRBush=function(e){if(u.isExtent(e))return!0;if(u.isPolygon(e)){for(var t=0,r=e.rings;t<r.length;t++){var i=r[t];if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}return!0}return!1}}).apply(null,i))||(e.exports=n)},Ytki:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("ma1f"),r("ULaq"),r("ztx9")],void 0===(n=(function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0});var o=new n.WhereClauseCache(50,500),s="feature-store:unsupported-query",a=i.SetFromValues(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function u(e,t){return e?o.get(e,t):null}function l(e,t,i,n){void 0===n&&(n=!0);for(var o=[],a=0,p=t;a<p.length;a++){var f=p[a];if("*"!==f&&!e.has(f))if(n){var d=c(f);try{var h=u(d,e);if(!h)throw new r(s,"invalid SQL expression",{where:d});if(!h.isStandardized)throw new r(s,"expression is not standard",{clause:h});l(e,h.fieldNames,"expression contains missing fields")}catch(e){var y=e&&e.details;if(y&&(y.clause||y.where))throw e;y&&y.missingFields?o.push.apply(o,y.missingFields):o.push(f)}}else o.push(f)}if(o.length)throw new r(s,i,{missingFields:o})}function c(e){return e.split(" as ")[0]}t.validateWhere=function(e,t){if(!t)return!0;var i=o.get(t,e);if(!i)throw new r(s,"invalid SQL expression",{where:t});if(!i.isStandardized)throw new r(s,"where clause is not standard",{where:t});return l(e,i.fieldNames,"where clause contains missing fields"),!0},t.validateHaving=function(e,t,i){if(!t)return!0;var n=o.get(t,e);if(!n)throw new r(s,"invalid SQL expression",{having:t});if(!n.isAggregate)throw new r(s,"having does not contain a valid aggregate function",{having:t});if(l(e,n.fieldNames,"having contains missing fields"),!n.getExpressions().every((function(t){var r=t.aggregateType,n=t.field,o=e.has(n)&&e.get(n).name;return i.some((function(t){var i=t.onStatisticField,n=t.statisticType;return(e.has(i)&&e.get(i).name)===o&&n.toLowerCase().trim()===r}))})))throw new r(s,"expressions in having should also exist in outStatistics",{having:t});return!0},t.getWhereClause=u,t.validateFields=l,t.getExpressionFromFieldName=c,t.getAliasFromFieldName=function(e){return e.split(" as ")[1]},t.hasInvalidFieldType=function(e,t){var r=t.get(e);return!!r&&!a.has(r.type)}}).apply(null,i))||(e.exports=n)},Z0JH:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qsST"),r("LxLY"),r("qMld"),r("ULaq"),r("lRq4"),r("hBh5"),r("Ytki"),r("yLD6"),r("V1i6"),r("/61J"),r("zDti"),r("IpeC")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,c,p,f,d,h,y){Object.defineProperty(t,"__esModule",{value:!0});var g=n.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),m=function(){function e(e){var t=this;this._geometryBounds=u.create(),this._idToVisibility=new Map,this.check=function(e){var r=e.objectId,i=t._idToVisibility,n=t._applyFilter(e);return i.set(r,n?3:2),!!(1&i.get(r))},this._serviceInfo=e}return Object.defineProperty(e.prototype,"hash",{get:function(){return this._hash},enumerable:!0,configurable:!0}),e.prototype.clear=function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}},e.prototype.invalidate=function(){var e=this;this._idToVisibility.forEach((function(t,r){e._idToVisibility.set(r,0)}))},e.prototype.setKnownIds=function(e){for(var t=0,r=e;t<r.length;t++)this._idToVisibility.set(r[t],1)},e.prototype.setTrue=function(e){var t=this,r=[],i=[],n=a.SetFromValues(e);return this._idToVisibility.forEach((function(e,o){var s=!!(1&t._idToVisibility.get(o)),a=n.has(o);!s&&a?r.push(o):s&&!a&&i.push(o),t._idToVisibility.set(o,a?3:0)})),{show:r,hide:i}},e.prototype.createQuery=function(){var e=this;return y.fromJSON({geometry:e.geometry,spatialRel:e.spatialRel,where:e.where,timeExtent:e.timeExtent,objectIds:e.objectIds})},e.prototype.update=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i;return r.__generator(this,(function(r){switch(r.label){case 0:return this._hash=JSON.stringify(e),[4,h.normalizeQueryLike(e,null,t)];case 1:return i=r.sent(),[4,s.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])];case 2:return r.sent(),[2]}}))}))},e.prototype._setAttributeFilter=function(e){if(!e||!e.where)return this._clause=null,void(this.where=null);var t=c.getWhereClause(e.where,this._serviceInfo.fieldsIndex);if(t.isStandardized)this._clause=t;else{var r=new i("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",t);g.error(r)}this.where=e.where},e.prototype._setIdFilter=function(e){this._idsToShow=e&&e.objectIds&&a.SetFromValues(e.objectIds),this._idsToHide=e&&e.hiddenIds&&a.SetFromValues(e.hiddenIds),this.objectIds=e&&e.objectIds},e.prototype._setGeometryFilter=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i,n;return r.__generator(this,(function(r){switch(r.label){case 0:return e&&e.geometry?[4,f.getSpatialQueryOperator(i=e.spatialRel||"esriSpatialRelIntersects",t=e.geometry,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM)]:(this._spatialQueryOperator=null,this.geometry=null,this.spatialRel=null,[2]);case 1:return n=r.sent(),l.getBoundsXY(this._geometryBounds,t),this._spatialQueryOperator=n,this.geometry=t,this.spatialRel=i,[2]}}))}))},e.prototype._setTimeFilter=function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=d.getTimeOperator(this._serviceInfo.timeInfo,e.timeExtent,p.optimizedFeatureQueryEngineAdapter);else{var t=new i("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);g.error(t)}},e.prototype._applyFilter=function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)},e.prototype._filterByExpression=function(e){return!this.where||this._clause.testFeature(e)},e.prototype._filterById=function(e){return(!this._idsToHide||!this._idsToHide.has(e.objectId))&&(!this._idsToShow||this._idsToShow.has(e.objectId))},e.prototype._filterByGeometry=function(e){return!this.geometry||!!this._earlyGeometryReject(e)&&this._spatialQueryOperator(e.geometry)},e.prototype._filterByTime=function(e){return!o.isSome(this._timeOperator)||this._timeOperator(e)},e.prototype._earlyGeometryReject=function(e){return!(!e.geometry||!e.geometry.coords.length)&&(!e.centroid||"esriSpatialRelContains"!==this.spatialRel||u.containsPoint(this._geometryBounds,e.centroid.coords))},e.prototype._resetAllHiddenIds=function(){var e=this,t=[];return this._idToVisibility.forEach((function(r,i){1&r||(e._idToVisibility.set(i,1),t.push(i))})),t},e}();t.default=m}).apply(null,i))||(e.exports=n)},ZHL0:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("r7jh")],void 0===(n=(function(e,t,r){return function(){function e(e,t){this._storage=new r.MemCacheStorage,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}return e.prototype.put=function(e,t){this._storage.put(e,t,1,1)},e.prototype.pop=function(e){return this._storage.pop(e)},e.prototype.get=function(e){return this._storage.get(e)},e.prototype.clear=function(){this._storage.clearAll()},e.prototype.destroy=function(){this._storage.clearAll()},e}()}).apply(null,i))||(e.exports=n)},"gT/q":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){function r(e,t){return e?t?4:3:t?3:2}function i(e,t,i,o,s){if(!e)return!1;for(var a=r(t,i),u=e.coords,l=!1,c=0,p=0,f=e.lengths;p<f.length;p++){var d=f[p];l=n(l,u,a,c,d,o,s),c+=d*a}return l}function n(e,t,r,i,n,o,s){for(var a=e,u=i,l=i,c=i+n*r;l<c;l+=r){(u=l+r)===c&&(u=i);var p=t[l],f=t[l+1],d=t[u+1];(f<s&&d>=s||d<s&&f>=s)&&p+(s-f)/(d-f)*(t[u]-p)<o&&(a=!a)}return a}Object.defineProperty(t,"__esModule",{value:!0}),t.polygonContainsPoint=function(e,t,r,n){return i(e,t,r,n.coords[0],n.coords[1])},t.polygonContainsMultipoint=function(e,t,n,o,s,a){var u=r(s,a),l=o.coords,c=o.lengths;if(!c)return!1;for(var p=0,f=0;p<c.length;p++,f+=u)if(!i(e,t,n,l[f],l[f+1]))return!1;return!0},t.polygonContainsCoords=i}).apply(null,i))||(e.exports=n)},yLD6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("Fzzg"),r("/COu"),r("Jvs9")],void 0===(n=(function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0}),t.optimizedFeatureQueryEngineAdapter={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new i.default(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return e.centroid||(e.centroid=r.getCentroidOptimizedGeometry(new n.default,e.geometry,t.hasZ,t.hasM)),e.centroid}},t.default=t.optimizedFeatureQueryEngineAdapter}).apply(null,i))||(e.exports=n)},zDti:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ImIS"),r("LxLY"),r("8uEs"),r("d466"),r("Lzvl"),r("fw2w"),r("nrlZ"),r("Fzzg"),r("+6sX"),r("Jvs9"),r("Q2Em"),r("V1i6")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,c,p,f,d,h){Object.defineProperty(t,"__esModule",{value:!0});var y=new i.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});t.QUERY_ENGINE_EMPTY_RESULT=Object.freeze({});var g=new f.default,m=new f.default,v=new f.default,_={esriGeometryPoint:p.convertToPoint,esriGeometryPolyline:p.convertToPolyline,esriGeometryPolygon:p.convertToPolygon,esriGeometryMultipoint:p.convertToMultipoint};function I(e,t,r,i,n){void 0===i&&(i=e.hasZ),void 0===n&&(n=e.hasM);var o=e.hasZ&&i,s=e.hasM&&n;if(r){var a=p.quantizeOptimizedGeometry(v,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return p.convertToPoint(a,o,s)}return p.convertToPoint(t,o,s)}function S(e,i,o){return r.__awaiter(this,void 0,void 0,(function(){var l,c,p,f,h,y;return r.__generator(this,(function(r){switch(r.label){case 0:return e?(e.where=l=(l=e.where)&&l.trim(),(!l||/^1 *= *1$/.test(l)||i&&i===l)&&(e.where=null),e.geometry?[4,w(e)]:[2,e]):[2,null];case 1:return c=r.sent(),e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel&&(p=e.geometry.spatialReference,(c=s.getGeometryExtent(c)).spatialReference=p),e.geometry=c,[4,d.checkProjectionSupport(c.spatialReference,o)];case 2:return r.sent(),[4,u.normalizeCentralMeridian(a.fromJSON(c))];case 3:if(f=r.sent()[0],n.isNone(f))throw t.QUERY_ENGINE_EMPTY_RESULT;return h=f.toJSON(),[4,d.project(h,h.spatialReference,o)];case 4:if(!(y=r.sent()))throw t.QUERY_ENGINE_EMPTY_RESULT;return y.spatialReference=o,e.geometry=y,[2,e]}}))}))}function w(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i,n,s,a,u,c;return r.__generator(this,(function(r){switch(r.label){case 0:return t=e.geometry,n=e.units,null==(i=e.distance)||"vertexAttributes"in t?[2,t]:(s=t.spatialReference,a=n?y.fromJSON(n):o.getUnitString(s),s&&(l.isGeographic(s)||l.isWebMercator(s))?(c=t,[3,3]):[3,1]);case 1:return[4,d.checkProjectionSupport(s,l.WGS84).then((function(){return d.project(t,l.WGS84)}))];case 2:c=r.sent(),r.label=3;case 3:return u=c,[4,h.getGeodesicBufferOperator()];case 4:return[2,r.sent()(u.spatialReference,u,i,a)]}}))}))}t.transformCentroid=I,t.getCentroid=function(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=c.getCentroidOptimizedGeometry(new f.default,t.geometry,e.hasZ,e.hasM)),I(e,t.centroid,r)):null},t.getGeometry=function(e,t,r,i,n,o,s,a){void 0===s&&(s=t),void 0===a&&(a=r);var u=t&&s,l=r&&a,c=i?"coords"in i?i:i.geometry:null;if(!c)return null;if(n){var f=p.generalizeOptimizedGeometry(m,c,t,r,e,n,s,a);return o&&(f=p.quantizeOptimizedGeometry(v,f,u,l,e,o)),_[e](f,u,l)}return o?(f=p.quantizeOptimizedGeometry(v,c,t,r,e,o,s,a),_[e](f,u,l)):(p.removeZMValues(g,c,t,r,s,a),_[e](g,u,l))},t.normalizeQuery=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var n,o,s,a,u;return r.__generator(this,(function(r){if(o=e.orderByFields,s=e.groupByFieldsForStatistics,a=e.outStatistics,n=e.outFields)for(u=0;u<n.length;u++)n[u]=n[u].trim();if(o)for(u=0;u<o.length;u++)o[u]=o[u].trim();if(s)for(u=0;u<s.length;u++)s[u]=s[u].trim();if(a)for(u=0;u<a.length;u++)a[u].onStatisticField&&(a[u].onStatisticField=a[u].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),[2,S(e,t,i)]}))}))},t.normalizeFilter=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,S(e,t,i)]}))}))},t.normalizeQueryLike=S,t.cleanFromGeometryEngine=function(e){return e&&b in e?JSON.parse(JSON.stringify(e,T)):e};var b="_geVersion",T=function(e,t){return e!==b?t:void 0}}).apply(null,i))||(e.exports=n)},ztx9:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("ZHL0"),r("1eyA")],void 0===(n=(function(e,t,r,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this._cache=new r(e),this._invalidCache=new r(t)}return e.prototype.get=function(e,t){var r=t.uid+":"+e,n=this._cache.get(r);if(n)return n;if(void 0!==this._invalidCache.get(r))return null;try{var o=i.WhereClause.create(e,t);return this._cache.put(r,o),o}catch(e){return this._invalidCache.put(r,null),null}},e}();t.WhereClauseCache=n}).apply(null,i))||(e.exports=n)}}]);