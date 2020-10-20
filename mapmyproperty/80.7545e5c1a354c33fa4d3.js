(function(){var e={"arcgis-js-api/layers/graphics/data/timeSupport":"/61J","arcgis-js-api/views/2d/layers/features/support/whereUtils":"C1b1","arcgis-js-api/layers/graphics/data/spatialQuerySupport":"V1i6","arcgis-js-api/layers/graphics/data/FeatureFilter":"Z0JH","arcgis-js-api/layers/graphics/contains":"gT/q","arcgis-js-api/layers/graphics/data/utils":"zDti"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"/61J":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeOperator=t.getTimeExtent=void 0,t.getTimeExtent=function(e,t){if(!e)return null;var r=t.featureAdapter,i=e.startTimeField,n=e.endTimeField,o=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach((function(e){var t=r.getAttribute(e,i),a=r.getAttribute(e,n);null==t||isNaN(t)||(o=Math.min(o,t)),null==a||isNaN(a)||(s=Math.max(s,a))}));else{var a=i||n;t.forEach((function(e){var t=r.getAttribute(e,a);null==t||isNaN(t)||(o=Math.min(o,t),s=Math.max(s,t))}))}return{start:o,end:s}},t.getTimeOperator=function(e,t,r){if(!t||!e)return null;var i=e.startTimeField,n=e.endTimeField;if(!i&&!n)return null;var o=t.start,s=t.end;return null===o&&null===s?null:void 0===o&&void 0===s?function(){return!1}:i&&n?function(e,t,r,i,n){return null!=i&&null!=n?function(o){var s=e.getAttribute(o,t),a=e.getAttribute(o,r);return(null==s||s<=n)&&(null==a||a>=i)}:null!=i?function(t){var n=e.getAttribute(t,r);return null==n||n>=i}:null!=n?function(r){var i=e.getAttribute(r,t);return null==i||i<=n}:void 0}(r,i,n,o,s):function(e,t,r,i){return null!=r&&null!=i&&r===i?function(i){return e.getAttribute(i,t)===r}:null!=r&&null!=i?function(n){var o=e.getAttribute(n,t);return o>=r&&o<=i}:null!=r?function(i){return e.getAttribute(i,t)>=r}:null!=i?function(r){return e.getAttribute(r,t)<=i}:void 0}(r,i||n,o,s)}}).apply(null,i))||(e.exports=n)},C1b1:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qsST"),r("2Kdy")],void 0===(n=(function(e,t,i,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createWhereClause=void 0;var s=o.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:function(e,t){return e.field(t)}};t.createWhereClause=function(t,o){return i.__awaiter(this,void 0,void 0,(function(){var u,l,c;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,new Promise((function(e,t){r.e(13).then((function(){var t=[r("1eyA")];e.apply(null,t)}).bind(this)).catch(t.bind(this))}))];case 1:u=i.sent();try{return(l=u.WhereClause.create(t,o)).isStandardized||(c=new n("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",l),s.error(c)),[2,function(e){var t=e.readArcadeFeature();return l.testFeature(t,a)}]}catch(e){return s.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",t),[2,function(e){return!0}]}return[2]}}))}))}}).apply(null,i))||(e.exports=n)},V1i6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qMld"),r("k1EI"),r("Thzy"),r("Lzvl"),r("nrlZ"),r("gT/q"),r("+6sX"),r("Jvs9"),r("Q2Em"),r("zDti"),r("2Kdy")],void 0===(n=(function(e,t,i,n,o,s,a,u,l,c,p,f,d,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canQueryWithRBush=t.checkSpatialQuerySupport=t.getSpatialQueryOperator=t.getGeodesicBufferOperator=t.importGeometryEngine=void 0;var y={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},m={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},v={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},g={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function _(){return new Promise((function(e,t){r.e(1).then((function(){var t=[r("tNTp")];e.apply(null,t)}).bind(this)).catch(t.bind(this))}))}t.importGeometryEngine=_,t.getGeodesicBufferOperator=function(){return _().then((function(e){return e.geodesicBuffer}))},t.getSpatialQueryOperator=function(e,t,r,i,n){if(u.isPolygon(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var l=p.convertFromPolygon(new f.default,t,!1,!1);return o.resolve((function(e){return c.polygonContainsPoint(l,!1,!1,e)}))}if(u.isPolygon(t)&&"esriGeometryMultipoint"===r){var d=p.convertFromPolygon(new f.default,t,!1,!1);if("esriSpatialRelContains"===e)return o.resolve((function(e){return c.polygonContainsMultipoint(d,!1,!1,e,i,n)}))}if(u.isExtent(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return o.resolve((function(e){return s.extentContainsPoint(t,h.getGeometry(r,i,n,e))}));if(u.isExtent(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return o.resolve((function(e){return s.extentContainsMultipoint(t,h.getGeometry(r,i,n,e))}));if(u.isExtent(t)&&"esriSpatialRelIntersects"===e){var m=a.getExtentIntersector(r);return o.resolve((function(e){return m(t,h.getGeometry(r,i,n,e))}))}return _().then((function(o){var s=o[y[e]].bind(null,t.spatialReference,t);return function(e){return s(h.getGeometry(r,i,n,e))}}))},t.checkSpatialQuerySupport=function(e,t,r){return i.__awaiter(this,void 0,void 0,(function(){var o,s;return i.__generator(this,(function(i){if(o=e.spatialRel,!(s=e.geometry))return[2];if(!0!==m[o])throw new n("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if(!l.isValid(s.spatialReference)||!l.isValid(r))return[2];if(!function(e){return!0===v[u.getJsonType(e)]}(s))throw new n("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===g[e]}(t))throw new n("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});return e.outSR?[2,d.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR)]:[2]}))}))},t.canQueryWithRBush=function(e){if(u.isExtent(e))return!0;if(u.isPolygon(e)){for(var t=0,r=e.rings;t<r.length;t++){var i=r[t];if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}return!0}return!1}}).apply(null,i))||(e.exports=n)},Z0JH:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qsST"),r("LxLY"),r("qMld"),r("ULaq"),r("lRq4"),r("hBh5"),r("V1i6"),r("/61J"),r("zDti"),r("IpeC"),r("7+6c"),r("C1b1")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,c,p,f,d,h,y){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var m=n.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),v=function(){function e(e){this._geometryBounds=u.create(),this._idToVisibility=new Map,this._serviceInfo=e}return Object.defineProperty(e.prototype,"hash",{get:function(){return this._hash},enumerable:!1,configurable:!0}),e.prototype.check=function(e){return this._applyFilter(e)},e.prototype.clear=function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}},e.prototype.invalidate=function(){var e=this;this._idToVisibility.forEach((function(t,r){e._idToVisibility.set(r,0)}))},e.prototype.setKnownIds=function(e){for(var t=0,r=e;t<r.length;t++)this._idToVisibility.set(r[t],1)},e.prototype.setTrue=function(e){var t=this,r=[],i=[],n=a.SetFromValues(e);return this._idToVisibility.forEach((function(e,o){var s=!!(1&t._idToVisibility.get(o)),a=n.has(o);!s&&a?r.push(o):s&&!a&&i.push(o),t._idToVisibility.set(o,a?3:0)})),{show:r,hide:i}},e.prototype.createQuery=function(){var e=this;return d.fromJSON({geometry:e.geometry,spatialRel:e.spatialRel,where:e.where,timeExtent:e.timeExtent,objectIds:e.objectIds})},e.prototype.update=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i;return r.__generator(this,(function(r){switch(r.label){case 0:return this._hash=JSON.stringify(e),[4,f.normalizeQueryLike(e,null,t)];case 1:return i=r.sent(),[4,s.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])];case 2:return r.sent(),[2]}}))}))},e.prototype._setAttributeFilter=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return e&&e.where?(t=this,[4,y.createWhereClause(e.where,this._serviceInfo.fieldsIndex)]):(this._clause=null,this.where=null,[2]);case 1:return t._clause=r.sent(),this.where=e.where,[2]}}))}))},e.prototype._setIdFilter=function(e){this._idsToShow=e&&e.objectIds&&a.SetFromValues(e.objectIds),this._idsToHide=e&&e.hiddenIds&&a.SetFromValues(e.hiddenIds),this.objectIds=e&&e.objectIds},e.prototype._setGeometryFilter=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i,n;return r.__generator(this,(function(r){switch(r.label){case 0:return e&&e.geometry?[4,c.getSpatialQueryOperator(i=e.spatialRel||"esriSpatialRelIntersects",t=e.geometry,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM)]:(this._spatialQueryOperator=null,this.geometry=null,this.spatialRel=null,[2]);case 1:return n=r.sent(),l.getBoundsXY(this._geometryBounds,t),this._spatialQueryOperator=n,this.geometry=t,this.spatialRel=i,[2]}}))}))},e.prototype._setTimeFilter=function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=p.getTimeOperator(this._serviceInfo.timeInfo,e.timeExtent,h.featureAdapter);else{var t=new i("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.error(t)}},e.prototype._applyFilter=function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)},e.prototype._filterByExpression=function(e){return!this.where||this._clause(e)},e.prototype._filterById=function(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))},e.prototype._filterByGeometry=function(e){if(!this.geometry)return!0;var t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)},e.prototype._filterByTime=function(e){return!o.isSome(this._timeOperator)||this._timeOperator(e)},e.prototype._resetAllHiddenIds=function(){var e=this,t=[];return this._idToVisibility.forEach((function(r,i){1&r||(e._idToVisibility.set(i,1),t.push(i))})),t},e}();t.default=v}).apply(null,i))||(e.exports=n)},"gT/q":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){"use strict";function r(e,t){return e?t?4:3:t?3:2}function i(e,t,i,o,s){if(!e)return!1;for(var a=r(t,i),u=e.coords,l=!1,c=0,p=0,f=e.lengths;p<f.length;p++){var d=f[p];l=n(l,u,a,c,d,o,s),c+=d*a}return l}function n(e,t,r,i,n,o,s){for(var a=e,u=i,l=i,c=i+n*r;l<c;l+=r){(u=l+r)===c&&(u=i);var p=t[l],f=t[l+1],d=t[u+1];(f<s&&d>=s||d<s&&f>=s)&&p+(s-f)/(d-f)*(t[u]-p)<o&&(a=!a)}return a}Object.defineProperty(t,"__esModule",{value:!0}),t.polygonContainsCoords=t.polygonContainsMultipoint=t.polygonContainsPoint=void 0,t.polygonContainsPoint=function(e,t,r,n){return i(e,t,r,n.coords[0],n.coords[1])},t.polygonContainsMultipoint=function(e,t,n,o,s,a){var u=r(s,a),l=o.coords,c=o.lengths;if(!c)return!1;for(var p=0,f=0;p<c.length;p++,f+=u)if(!i(e,t,n,l[f],l[f+1]))return!1;return!0},t.polygonContainsCoords=i}).apply(null,i))||(e.exports=n)},zDti:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ImIS"),r("LxLY"),r("8uEs"),r("d466"),r("Lzvl"),r("fw2w"),r("nrlZ"),r("Fzzg"),r("+6sX"),r("Jvs9"),r("Q2Em"),r("V1i6")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,c,p,f,d,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cleanFromGeometryEngine=t.normalizeQueryLike=t.normalizeFilter=t.normalizeQuery=t.getGeometry=t.getCentroid=t.transformCentroid=t.QUERY_ENGINE_EMPTY_RESULT=void 0;var y=new i.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});t.QUERY_ENGINE_EMPTY_RESULT=Object.freeze({});var m=new f.default,v=new f.default,g=new f.default,_={esriGeometryPoint:p.convertToPoint,esriGeometryPolyline:p.convertToPolyline,esriGeometryPolygon:p.convertToPolygon,esriGeometryMultipoint:p.convertToMultipoint};function S(e,t,r,i,n){void 0===i&&(i=e.hasZ),void 0===n&&(n=e.hasM);var o=e.hasZ&&i,s=e.hasM&&n;if(r){var a=p.quantizeOptimizedGeometry(g,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return p.convertToPoint(a,o,s)}return p.convertToPoint(t,o,s)}function w(e,i,o){return r.__awaiter(this,void 0,void 0,(function(){var l,c,p,f,h,y;return r.__generator(this,(function(r){switch(r.label){case 0:return e?(e.where=l=(l=e.where)&&l.trim(),(!l||/^1 *= *1$/.test(l)||i&&i===l)&&(e.where=null),e.geometry?[4,b(e)]:[2,e]):[2,null];case 1:return c=r.sent(),e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel&&(p=e.geometry.spatialReference,(c=s.getGeometryExtent(c)).spatialReference=p),e.geometry=c,[4,d.checkProjectionSupport(c.spatialReference,o)];case 2:return r.sent(),[4,u.normalizeCentralMeridian(a.fromJSON(c))];case 3:if(f=r.sent()[0],n.isNone(f))throw t.QUERY_ENGINE_EMPTY_RESULT;return h=f.toJSON(),[4,d.project(h,h.spatialReference,o)];case 4:if(!(y=r.sent()))throw t.QUERY_ENGINE_EMPTY_RESULT;return y.spatialReference=o,e.geometry=y,[2,e]}}))}))}function b(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i,n,s,a,u,c;return r.__generator(this,(function(r){switch(r.label){case 0:return t=e.geometry,n=e.units,null==(i=e.distance)||"vertexAttributes"in t?[2,t]:(s=t.spatialReference,a=n?y.fromJSON(n):o.getUnitString(s),s&&(l.isGeographic(s)||l.isWebMercator(s))?(c=t,[3,3]):[3,1]);case 1:return[4,d.checkProjectionSupport(s,l.WGS84).then((function(){return d.project(t,l.WGS84)}))];case 2:c=r.sent(),r.label=3;case 3:return u=c,[4,h.getGeodesicBufferOperator()];case 4:return[2,r.sent()(u.spatialReference,u,i,a)]}}))}))}t.transformCentroid=S,t.getCentroid=function(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=c.getCentroidOptimizedGeometry(new f.default,t.geometry,e.hasZ,e.hasM)),S(e,t.centroid,r)):null},t.getGeometry=function(e,t,r,i,n,o,s,a){void 0===s&&(s=t),void 0===a&&(a=r);var u=t&&s,l=r&&a,c=i?"coords"in i?i:i.geometry:null;if(!c)return null;if(n){var f=p.generalizeOptimizedGeometry(v,c,t,r,e,n,s,a);return o&&(f=p.quantizeOptimizedGeometry(g,f,u,l,e,o)),_[e](f,u,l)}return o?(f=p.quantizeOptimizedGeometry(g,c,t,r,e,o,s,a),_[e](f,u,l)):(p.removeZMValues(m,c,t,r,s,a),_[e](m,u,l))},t.normalizeQuery=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var n,o,s,a,u;return r.__generator(this,(function(r){if(o=e.orderByFields,s=e.groupByFieldsForStatistics,a=e.outStatistics,n=e.outFields)for(u=0;u<n.length;u++)n[u]=n[u].trim();if(o)for(u=0;u<o.length;u++)o[u]=o[u].trim();if(s)for(u=0;u<s.length;u++)s[u]=s[u].trim();if(a)for(u=0;u<a.length;u++)a[u].onStatisticField&&(a[u].onStatisticField=a[u].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),[2,w(e,t,i)]}))}))},t.normalizeFilter=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,w(e,t,i)]}))}))},t.normalizeQueryLike=w,t.cleanFromGeometryEngine=function(e){return e&&R in e?JSON.parse(JSON.stringify(e,T)):e};var R="_geVersion",T=function(e,t){return e!==R?t:void 0}}).apply(null,i))||(e.exports=n)}}]);