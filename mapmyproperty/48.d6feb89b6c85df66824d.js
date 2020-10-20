(function(){var n={"arcgis-js-api/arcade/functions/geomasync":"G6wh","arcgis-js-api/geometry/geometryEngineAsync":"wfTL"},e=this||window,t=e.webpackJsonp=e.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(n):(t.absMidsWaiting=t.absMidsWaiting||[]).push(n)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{G6wh:function(n,e,t){var r,i;r=[t.dj.c(n.i),e,t("urqW"),t("WoOE"),t("gfOZ"),t("GeVF"),t("N7S/"),t("YADd"),t("wfTL"),t("t78F"),t("oxlp"),t("Vt+U"),t("aYWh"),t("Lzvl")],void 0===(i=(function(n,e,t,r,i,o,a,u,s,c,l,f,d,g){"use strict";function h(n){return 0===t.version.indexOf("4.")?f.fromExtent(n):new f({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function m(n){if(i.pcCheck(n,2,2),n[0]instanceof u&&n[1]instanceof u);else if(n[0]instanceof u&&null===n[1]);else if(n[1]instanceof u&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}Object.defineProperty(e,"__esModule",{value:!0}),e.registerFunctions=void 0,e.registerFunctions=function(n){"async"===n.mode&&(n.functions.disjoint=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return m(t=i.autoCastFeatureToGeometry(t)),null===t[0]||null===t[1]||s.disjoint(t[0],t[1])}))},n.functions.intersects=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return m(t=i.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&s.intersects(t[0],t[1])}))},n.functions.touches=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return m(t=i.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&s.touches(t[0],t[1])}))},n.functions.crosses=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return m(t=i.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&s.crosses(t[0],t[1])}))},n.functions.within=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return m(t=i.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&s.within(t[0],t[1])}))},n.functions.contains=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return m(t=i.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&s.contains(t[0],t[1])}))},n.functions.overlaps=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return m(t=i.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&s.overlaps(t[0],t[1])}))},n.functions.equals=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return i.pcCheck(t,2,2),t[0]===t[1]||(t[0]instanceof u&&t[1]instanceof u?s.equals(t[0],t[1]):!(!i.isDate(t[0])||!i.isDate(t[1]))&&t[0].getTime()===t[1].getTime())}))},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,3,3),t[0]instanceof u&&t[1]instanceof u)return s.relate(t[0],t[1],i.toString(t[2]));if(t[0]instanceof u&&null===t[1])return!1;if(t[1]instanceof u&&null===t[0])return!1;if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return m(t=i.autoCastFeatureToGeometry(t)),null===t[0]||null===t[1]?null:s.intersect(t[0],t[1])}))},n.functions.union=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,o){var a=[];if(0===(o=i.autoCastFeatureToGeometry(o)).length)throw new Error("Function called with wrong number of Parameters");if(1===o.length)if(i.isArray(o[0])){for(var c=i.autoCastFeatureToGeometry(o[0]),l=0;l<c.length;l++)if(null!==c[l]){if(!(c[l]instanceof u))throw new Error("Illegal Argument");a.push(c[l])}}else{if(!i.isImmutableArray(o[0])){if(o[0]instanceof u)return i.fixSpatialReference(r.cloneGeometry(o[0]),e.spatialReference);if(null===o[0])return null;throw new Error("Illegal Argument")}var f=i.autoCastFeatureToGeometry(o[0].toArray());for(l=0;l<f.length;l++)if(null!==f[l]){if(!(f[l]instanceof u))throw new Error("Illegal Argument");a.push(f[l])}}else for(l=0;l<o.length;l++)if(null!==o[l]){if(!(o[l]instanceof u))throw new Error("Illegal Argument");a.push(o[l])}return 0===a.length?null:s.union(a)}))},n.functions.difference=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return m(t=i.autoCastFeatureToGeometry(t)),null!==t[0]&&null===t[1]?r.cloneGeometry(t[0]):null===t[0]?null:s.difference(t[0],t[1])}))},n.functions.symmetricdifference=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return m(t=i.autoCastFeatureToGeometry(t)),null===t[0]&&null===t[1]?null:null===t[0]?r.cloneGeometry(t[1]):null===t[1]?r.cloneGeometry(t[0]):s.symmetricDifference(t[0],t[1])}))},n.functions.clip=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,2,2),!(t[1]instanceof a)&&null!==t[1])throw new Error("Illegal Argument");if(null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");return null===t[1]?null:s.clip(t[0],t[1])}))},n.functions.cut=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,2,2),!(t[1]instanceof d)&&null!==t[1])throw new Error("Illegal Argument");if(null===t[0])return[];if(!(t[0]instanceof u))throw new Error("Illegal Argument");return null===t[1]?[r.cloneGeometry(t[0])]:s.cut(t[0],t[1])}))},n.functions.area=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,o){if(i.pcCheck(o,1,2),null===(o=i.autoCastFeatureToGeometry(o))[0])return 0;if(i.isFeatureSet(o[0]))return o[0].sumArea(r.convertSquareUnitsToCode(i.defaultUndefined(o[1],-1)),!1,e.abortSignal).then((function(n){if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(i.isArray(o[0])||i.isImmutableArray(o[0])){var a=i.autoCastArrayOfPointsToPolygon(o[0],e.spatialReference);return null===a?0:s.planarArea(a,r.convertSquareUnitsToCode(i.defaultUndefined(o[1],-1)))}if(!(o[0]instanceof u))throw new Error("Illegal Argument");return s.planarArea(o[0],r.convertSquareUnitsToCode(i.defaultUndefined(o[1],-1)))}))},n.functions.areageodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,o){if(i.pcCheck(o,1,2),null===(o=i.autoCastFeatureToGeometry(o))[0])return 0;if(i.isFeatureSet(o[0]))return o[0].sumArea(r.convertSquareUnitsToCode(i.defaultUndefined(o[1],-1)),!0,e.abortSignal).then((function(n){if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(i.isArray(o[0])||i.isImmutableArray(o[0])){var a=i.autoCastArrayOfPointsToPolygon(o[0],e.spatialReference);return null===a?0:s.geodesicArea(a,r.convertSquareUnitsToCode(i.defaultUndefined(o[1],-1)))}if(!(o[0]instanceof u))throw new Error("Illegal Argument");return s.geodesicArea(o[0],r.convertSquareUnitsToCode(i.defaultUndefined(o[1],-1)))}))},n.functions.length=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,o){if(i.pcCheck(o,1,2),null===(o=i.autoCastFeatureToGeometry(o))[0])return 0;if(i.isFeatureSet(o[0]))return o[0].sumLength(r.convertLinearUnitsToCode(i.defaultUndefined(o[1],-1)),!1,e.abortSignal).then((function(n){if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(i.isArray(o[0])||i.isImmutableArray(o[0])){var a=i.autoCastArrayOfPointsToPolyline(o[0],e.spatialReference);return null===a?0:s.planarLength(a,r.convertLinearUnitsToCode(i.defaultUndefined(o[1],-1)))}if(!(o[0]instanceof u))throw new Error("Illegal Argument");return s.planarLength(o[0],r.convertLinearUnitsToCode(i.defaultUndefined(o[1],-1)))}))},n.functions.lengthgeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,o){if(i.pcCheck(o,1,2),null===(o=i.autoCastFeatureToGeometry(o))[0])return 0;if(i.isFeatureSet(o[0]))return o[0].sumLength(r.convertLinearUnitsToCode(i.defaultUndefined(o[1],-1)),!0,e.abortSignal).then((function(n){if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(i.isArray(o[0])||i.isImmutableArray(o[0])){var a=i.autoCastArrayOfPointsToPolyline(o[0],e.spatialReference);return null===a?0:s.geodesicLength(a,r.convertLinearUnitsToCode(i.defaultUndefined(o[1],-1)))}if(!(o[0]instanceof u))throw new Error("Illegal Argument");return s.geodesicLength(o[0],r.convertLinearUnitsToCode(i.defaultUndefined(o[1],-1)))}))},n.functions.distance=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,o){o=i.autoCastFeatureToGeometry(o),i.pcCheck(o,2,3);var a=o[0];(i.isArray(o[0])||i.isImmutableArray(o[0]))&&(a=i.autoCastArrayOfPointsToMultiPoint(o[0],e.spatialReference));var c=o[1];if((i.isArray(o[1])||i.isImmutableArray(o[1]))&&(c=i.autoCastArrayOfPointsToMultiPoint(o[1],e.spatialReference)),!(a instanceof u))throw new Error("Illegal Argument");if(!(c instanceof u))throw new Error("Illegal Argument");return s.distance(a,c,r.convertLinearUnitsToCode(i.defaultUndefined(o[2],-1)))}))},n.functions.distancegeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,2,3);var o=t[0],a=t[1];if(!(o instanceof l))throw new Error("Illegal Argument");if(!(a instanceof l))throw new Error("Illegal Argument");var u=new d({paths:[],spatialReference:o.spatialReference});return u.addPath([o,a]),s.geodesicLength(u,r.convertLinearUnitsToCode(i.defaultUndefined(t[2],-1)))}))},n.functions.densify=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,2,3),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");var o=i.toNumber(t[1]);if(isNaN(o))throw new Error("Illegal Argument");if(o<=0)throw new Error("Illegal Argument");return t[0]instanceof f||t[0]instanceof d?s.densify(t[0],o,r.convertLinearUnitsToCode(i.defaultUndefined(t[2],-1))):t[0]instanceof a?s.densify(h(t[0]),o,r.convertLinearUnitsToCode(i.defaultUndefined(t[2],-1))):t[0]}))},n.functions.densifygeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,2,3),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");var o=i.toNumber(t[1]);if(isNaN(o))throw new Error("Illegal Argument");if(o<=0)throw new Error("Illegal Argument");return t[0]instanceof f||t[0]instanceof d?s.geodesicDensify(t[0],o,r.convertLinearUnitsToCode(i.defaultUndefined(t[2],-1))):t[0]instanceof a?s.geodesicDensify(h(t[0]),o,r.convertLinearUnitsToCode(i.defaultUndefined(t[2],-1))):t[0]}))},n.functions.generalize=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,2,4),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");var o=i.toNumber(t[1]);if(isNaN(o))throw new Error("Illegal Argument");return s.generalize(t[0],o,i.toBoolean(i.defaultUndefined(t[2],!0)),r.convertLinearUnitsToCode(i.defaultUndefined(t[3],-1)))}))},n.functions.buffer=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,2,3),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");var o=i.toNumber(t[1]);if(isNaN(o))throw new Error("Illegal Argument");return 0===o?r.cloneGeometry(t[0]):s.buffer(t[0],o,r.convertLinearUnitsToCode(i.defaultUndefined(t[2],-1)))}))},n.functions.buffergeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,2,3),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");var o=i.toNumber(t[1]);if(isNaN(o))throw new Error("Illegal Argument");return 0===o?r.cloneGeometry(t[0]):s.geodesicBuffer(t[0],o,r.convertLinearUnitsToCode(i.defaultUndefined(t[2],-1)))}))},n.functions.offset=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,2,6),null===t[0])return null;if(!(t[0]instanceof f||t[0]instanceof d))throw new Error("Illegal Argument");var o=i.toNumber(t[1]);if(isNaN(o))throw new Error("Illegal Argument");var a=i.toNumber(i.defaultUndefined(t[4],10));if(isNaN(a))throw new Error("Illegal Argument");var u=i.toNumber(i.defaultUndefined(t[5],0));if(isNaN(u))throw new Error("Illegal Argument");return s.offset(t[0],o,r.convertLinearUnitsToCode(i.defaultUndefined(t[2],-1)),i.toString(i.defaultUndefined(t[3],"round")).toLowerCase(),a,u)}))},n.functions.rotate=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,2,3);var r=t[0];if(null===r)return null;if(!(r instanceof u))throw new Error("Illegal Argument");r instanceof a&&(r=f.fromExtent(r));var o=i.toNumber(t[1]);if(isNaN(o))throw new Error("Illegal Argument");var c=i.defaultUndefined(t[2],null);if(null===c)return s.rotate(r,o);if(c instanceof l)return s.rotate(r,o,c);throw new Error("Illegal Argument")}))},n.functions.centroid=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,s){if(s=i.autoCastFeatureToGeometry(s),i.pcCheck(s,1,1),null===s[0])return null;var g=s[0];if((i.isArray(s[0])||i.isImmutableArray(s[0]))&&(g=i.autoCastArrayOfPointsToMultiPoint(s[0],e.spatialReference)),null===g)return null;if(!(g instanceof u))throw new Error("Illegal Argument");return g instanceof l?i.fixSpatialReference(r.cloneGeometry(s[0]),e.spatialReference):g instanceof f?g.centroid:g instanceof d?o.centroidPolyline(g):g instanceof c?o.centroidMultiPoint(g):g instanceof a?g.center:null}))},n.functions.multiparttosinglepart=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,o){o=i.autoCastFeatureToGeometry(o),i.pcCheck(o,1,1);var h=[];if(null===o[0])return null;if(!(o[0]instanceof u))throw new Error("Illegal Argument");return o[0]instanceof l||o[0]instanceof a?[i.fixSpatialReference(r.cloneGeometry(o[0]),e.spatialReference)]:s.simplify(o[0]).then((function(n){if(n instanceof f){for(var t=[],a=[],u=0;u<n.rings.length;u++)if(n.isClockwise(n.rings[u])){var s=g.fromJSON({rings:[n.rings[u]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(s)}else a.push({ring:n.rings[u],pt:n.getPoint(u,0)});for(var l=0;l<a.length;l++)for(var m=0;m<t.length;m++)if(t[m].contains(a[l].pt)){t[m].addRing(a[l].ring);break}return t}if(n instanceof d){var w=[];for(u=0;u<n.paths.length;u++){var y=g.fromJSON({paths:[n.paths[u]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});w.push(y)}return w}if(o[0]instanceof c){var p=i.fixSpatialReference(r.cloneGeometry(o[0]),e.spatialReference);for(u=0;u<p.points.length;u++)h.push(p.getPoint(u));return h}return null}))}))},n.functions.issimple=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,1,1),null===t[0])return!0;if(!(t[0]instanceof u))throw new Error("Illegal Argument");return s.isSimple(t[0])}))},n.functions.simplify=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,1,1),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");return s.simplify(t[0])}))})}}).apply(null,r))||(n.exports=i)},wfTL:function(n,e,t){var r,i;r=[t.dj.c(n.i),e,t("zOht"),t("TMur"),t("8V7H")],void 0===(i=(function(n,e,t,r,i){"use strict";function o(n){var e;return Array.isArray(n)?null===(e=n[0])||void 0===e?void 0:e.spatialReference:null==n?void 0:n.spatialReference}function a(n){return n?Array.isArray(n)?n.map(a):n.toJSON?n.toJSON():n:n}function u(n){return Array.isArray(n)?n.map((function(n){return r.fromJSON(n)})):r.fromJSON(n)}var s;function c(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(n){return s||(s=i.open("geometryEngineWorker",{strategy:"distributed"})),[2,s]}))}))}function l(n,e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,c()];case 1:return[2,t.sent().invoke("executeGEOperation",{operation:n,parameters:a(e)})]}}))}))}function f(n){return"xmin"in n?n.center:"x"in n?n:n.extent.center}Object.defineProperty(e,"__esModule",{value:!0}),e.geodesicLength=e.geodesicArea=e.planarLength=e.planarArea=e.geodesicDensify=e.densify=e.generalize=e.flipVertical=e.flipHorizontal=e.rotate=e.nearestVertices=e.nearestVertex=e.nearestCoordinate=e.geodesicBuffer=e.buffer=e.offset=e.union=e.intersect=e.symmetricDifference=e.difference=e.convexHull=e.simplify=e.isSimple=e.relate=e.overlaps=e.disjoint=e.within=e.touches=e.intersects=e.equals=e.distance=e.crosses=e.contains=e.cut=e.clip=e.extendedSpatialReferenceInfo=void 0,e.extendedSpatialReferenceInfo=function(n){return l("extendedSpatialReferenceInfo",[n])},e.clip=function(n,e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("clip",[o(n),n,e])];case 1:return[2,u(t.sent())]}}))}))},e.cut=function(n,e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("cut",[o(n),n,e])];case 1:return[2,u(t.sent())]}}))}))},e.contains=function(n,e){return l("contains",[o(n),n,e])},e.crosses=function(n,e){return l("crosses",[o(n),n,e])},e.distance=function(n,e,t){return l("distance",[o(n),n,e,t])},e.equals=function(n,e){return l("equals",[o(n),n,e])},e.intersects=function(n,e){return l("intersects",[o(n),n,e])},e.touches=function(n,e){return l("touches",[o(n),n,e])},e.within=function(n,e){return l("within",[o(n),n,e])},e.disjoint=function(n,e){return l("disjoint",[o(n),n,e])},e.overlaps=function(n,e){return l("overlaps",[o(n),n,e])},e.relate=function(n,e,t){return l("relate",[o(n),n,e,t])},e.isSimple=function(n){return l("isSimple",[o(n),n])},e.simplify=function(n){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(e){switch(e.label){case 0:return[4,l("simplify",[o(n),n])];case 1:return[2,u(e.sent())]}}))}))},e.convexHull=function(n,e){return void 0===e&&(e=!1),t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("convexHull",[o(n),n,e])];case 1:return[2,u(t.sent())]}}))}))},e.difference=function(n,e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("difference",[o(n),n,e])];case 1:return[2,u(t.sent())]}}))}))},e.symmetricDifference=function(n,e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("symmetricDifference",[o(n),n,e])];case 1:return[2,u(t.sent())]}}))}))},e.intersect=function(n,e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("intersect",[o(n),n,e])];case 1:return[2,u(t.sent())]}}))}))},e.union=function(n,e){return void 0===e&&(e=null),t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("union",[o(r=function(n,e){var t;return Array.isArray(n)?t=n:((t=[]).push(n),null!=e&&t.push(e)),t}(n,e)),r])];case 1:return[2,u(t.sent())]}}))}))},e.offset=function(n,e,r,i,a,s){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("offset",[o(n),n,e,r,i,a,s])];case 1:return[2,u(t.sent())]}}))}))},e.buffer=function(n,e,r,i){return void 0===i&&(i=!1),t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("buffer",[o(n),n,e,r,i])];case 1:return[2,u(t.sent())]}}))}))},e.geodesicBuffer=function(n,e,r,i,a,s){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("geodesicBuffer",[o(n),n,e,r,i,a,s])];case 1:return[2,u(t.sent())]}}))}))},e.nearestCoordinate=function(n,e,i){return void 0===i&&(i=!0),t.__awaiter(this,void 0,void 0,(function(){var a;return t.__generator(this,(function(u){switch(u.label){case 0:return[4,l("nearestCoordinate",[o(n),n,e,i])];case 1:return a=u.sent(),[2,t.__assign(t.__assign({},a),{coordinate:r.Point.fromJSON(a.coordinate)})]}}))}))},e.nearestVertex=function(n,e){return t.__awaiter(this,void 0,void 0,(function(){var i;return t.__generator(this,(function(a){switch(a.label){case 0:return[4,l("nearestVertex",[o(n),n,e])];case 1:return i=a.sent(),[2,t.__assign(t.__assign({},i),{coordinate:r.Point.fromJSON(i.coordinate)})]}}))}))},e.nearestVertices=function(n,e,i,a){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(u){switch(u.label){case 0:return[4,l("nearestVertices",[o(n),n,e,i,a])];case 1:return[2,u.sent().map((function(n){return t.__assign(t.__assign({},n),{coordinate:r.Point.fromJSON(n.coordinate)})}))]}}))}))},e.rotate=function(n,e,r){return t.__awaiter(this,void 0,void 0,(function(){var i,o,a,u;return t.__generator(this,(function(t){switch(t.label){case 0:if(null==n)throw new Error("Illegal Argument Exception");return i=n.spatialReference,r=null!=r?r:f(n),u=(a=n.constructor).fromJSON,[4,l("rotate",[i,n,e,r])];case 1:return(o=u.apply(a,[t.sent()])).spatialReference=i,[2,o]}}))}))},e.flipHorizontal=function(n,e){return t.__awaiter(this,void 0,void 0,(function(){var r,i,o,a;return t.__generator(this,(function(t){switch(t.label){case 0:if(null==n)throw new Error("Illegal Argument Exception");return r=n.spatialReference,e=null!=e?e:f(n),a=(o=n.constructor).fromJSON,[4,l("flipHorizontal",[r,n,e])];case 1:return(i=a.apply(o,[t.sent()])).spatialReference=r,[2,i]}}))}))},e.flipVertical=function(n,e){return t.__awaiter(this,void 0,void 0,(function(){var r,i,o,a;return t.__generator(this,(function(t){switch(t.label){case 0:if(null==n)throw new Error("Illegal Argument Exception");return r=n.spatialReference,e=null!=e?e:f(n),a=(o=n.constructor).fromJSON,[4,l("flipVertical",[r,n,e])];case 1:return(i=a.apply(o,[t.sent()])).spatialReference=r,[2,i]}}))}))},e.generalize=function(n,e,r,i){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("generalize",[o(n),n,e,r,i])];case 1:return[2,u(t.sent())]}}))}))},e.densify=function(n,e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("densify",[o(n),n,e,r])];case 1:return[2,u(t.sent())]}}))}))},e.geodesicDensify=function(n,e,r,i){return void 0===i&&(i=0),t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,l("geodesicDensify",[o(n),n,e,r,i])];case 1:return[2,u(t.sent())]}}))}))},e.planarArea=function(n,e){return l("planarArea",[o(n),n,e])},e.planarLength=function(n,e){return l("planarLength",[o(n),n,e])},e.geodesicArea=function(n,e,t){return l("geodesicArea",[o(n),n,e,t])},e.geodesicLength=function(n,e,t){return l("geodesicLength",[o(n),n,e,t])}}).apply(null,r))||(n.exports=i)}}]);