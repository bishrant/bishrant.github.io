!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t,r,n,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,i)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var i=f(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return l(this,r)}}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{t0D6:function(e,r,o){"use strict";o.r(r);var u=o("pO5D"),l=(o("wSAH"),o("6S2I"),o("zqDF"),o("WbKI")),f=o("04ZG"),p=(o("4EHJ"),o("ju1D"),o("9AIY"),o("kglp")),b=o("Lqtk"),y=o("qNUd"),O=o("u3Ia"),j=o("o6Le"),d=o("ZKYY"),v=o("srIe"),m=o("r88o"),h=o("ag7Y"),g=o("WZb1"),B=o("SuVq"),w=o("Ehki"),P=o("UhwK"),k=(o("4GrV"),o("jWBI")),R=o("8prj"),S=o("54nt"),A=o("eKLr");function N(e){return R.default.fromJSON(e).features.map((function(e){return e.geometry}))}var C=function(e){c(r,e);var t=s(r);function r(e){var n;return i(this,r),(n=t.call(this,e)).directions=null,n.facilities=null,n.incidents=null,n.messages=null,n.pointBarriers=null,n.polylineBarriers=null,n.polygonBarriers=null,n.routes=null,n}return a(r,[{key:"readFacilities",value:function(e){return N(e)}},{key:"readIncidents",value:function(e){return N(e)}},{key:"readPointBarriers",value:function(e,t){return N(t.barriers)}},{key:"readPolylineBarriers",value:function(e){return N(e)}},{key:"readPolygonBarriers",value:function(e){return N(e)}},{key:"readRoutes",value:function(e){return function(e){return e.features.map((function(t){var r=g.a.fromJSON(e.spatialReference),n=k.a.fromJSON(t);return Object(v.k)(n.geometry)&&(n.geometry.spatialReference=r),n}))}(e)}}]),r}(h.a);Object(u.a)([Object(l.b)({type:[A.a]})],C.prototype,"directions",void 0),Object(u.a)([Object(l.b)({type:[B.a]})],C.prototype,"facilities",void 0),Object(u.a)([Object(m.a)("facilities")],C.prototype,"readFacilities",null),Object(u.a)([Object(l.b)({type:[B.a]})],C.prototype,"incidents",void 0),Object(u.a)([Object(m.a)("incidents")],C.prototype,"readIncidents",null),Object(u.a)([Object(l.b)({type:[S.a]})],C.prototype,"messages",void 0),Object(u.a)([Object(l.b)({type:[B.a]})],C.prototype,"pointBarriers",void 0),Object(u.a)([Object(m.a)("pointBarriers",["barriers"])],C.prototype,"readPointBarriers",null),Object(u.a)([Object(l.b)({type:[P.a]})],C.prototype,"polylineBarriers",void 0),Object(u.a)([Object(m.a)("polylineBarriers")],C.prototype,"readPolylineBarriers",null),Object(u.a)([Object(l.b)({type:[w.a]})],C.prototype,"polygonBarriers",void 0),Object(u.a)([Object(m.a)("polygonBarriers")],C.prototype,"readPolygonBarriers",null),Object(u.a)([Object(l.b)({type:[k.a]})],C.prototype,"routes",void 0),Object(u.a)([Object(m.a)("routes")],C.prototype,"readRoutes",null);var D=C=Object(u.a)([Object(f.a)("esri.tasks.support.ClosestFacilitySolveResult")],C),E=Object(j.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0}),I=o("OvWd"),_=function(e){c(o,e);var r=s(o);function o(e){var t;return i(this,o),(t=r.call(this,e)).url=null,t}return a(o,[{key:"solve",value:function(e,r){return(i=regeneratorRuntime.mark((function e(r,n,i){var o,a,c,u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],a=[],c={},u={},s=Object(O.c)(r),e.abrupt("return",(n.incidents&&n.incidents.features&&Object(d.a)(n.incidents.features,a,"incidents.features",c),n.facilities&&n.facilities.features&&Object(d.a)(n.facilities.features,a,"facilities.features",c),n.pointBarriers&&n.pointBarriers.features&&Object(d.a)(n.pointBarriers.features,a,"pointBarriers.features",c),n.polylineBarriers&&n.polylineBarriers.features&&Object(d.a)(n.polylineBarriers.features,a,"polylineBarriers.features",c),n.polygonBarriers&&n.polygonBarriers.features&&Object(d.a)(n.polygonBarriers.features,a,"polygonBarriers.features",c),Object(y.a)(a).then((function(e){for(var t in c){var r=c[t];o.push(t),u[t]=e.slice(r[0],r[1])}return Object(d.e)(u,o)?Object(d.c)(s.path):Promise.resolve({dontCheck:!0})})).then((function(e){("dontCheck"in e?e.dontCheck:e.hasZ)||Object(d.b)(u,o);var r=function(e){u[e].forEach((function(t,r){n.get(e)[r].geometry=t}))};for(var a in u)r(a);var c={query:t(t({},s.query),{},{f:"json"},E.toQueryParams(n))};return i&&(c=t(t({},i),c)),Object(b.default)(s.path+"/solveClosestFacility",c)})).then((function(e){return D.fromJSON(e.data)}))));case 2:case"end":return e.stop()}}),e)})),o=function(){var e=this,t=arguments;return new Promise((function(r,o){var a=i.apply(e,t);function c(e){n(a,r,o,c,u,"next",e)}function u(e){n(a,r,o,c,u,"throw",e)}c(void 0)}))},function(e,t,r){return o.apply(this,arguments)})(this.url,e,r);var i,o}}]),o}(Object(I.a)(p.a));Object(u.a)([Object(l.b)()],_.prototype,"url",void 0),_=Object(u.a)([Object(f.a)("esri.tasks.ClosestFacilityTask")],_),r.default=_}}])}();