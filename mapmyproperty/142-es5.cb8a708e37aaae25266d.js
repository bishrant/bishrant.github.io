!function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,r,n){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,r,n||e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var u=c(this).constructor;r=Reflect.construct(n,arguments,u)}else r=n.apply(this,arguments);return o(this,r)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{GN2T:function(o,u,i){"use strict";i.r(u);var a=i("pO5D"),f=(i("wSAH"),i("6S2I"),i("zqDF"),i("WbKI")),l=i("04ZG"),p=i("zlDU"),s=(i("4EHJ"),i("ju1D"),i("9AIY"),i("WBXD")),y=i("pqNC"),b=i("5pQd"),d=i("DbUH"),O=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(l,o);var u,i,a,f=n(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=f.call(this,e)).resourceInfo=null,t.type="unsupported",t}return u=l,(i=[{key:"initialize",value:function(){var e=this;this.addResolvingPromise(new Promise(function(t,r){Object(s.b)(function(){var t=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),n="Unsupported layer type";t&&(n+=" "+t),r(new p.a("layer:unsupported-layer-type",n,{layerType:t}))})}))}},{key:"read",value:function(e,r){var n={resourceInfo:e};null!=e.id&&(n.id=e.id),null!=e.title&&(n.title=e.title),t(c(l.prototype),"read",this).call(this,n,r)}},{key:"write",value:function(e){return Object.assign(e||{},this.resourceInfo,{id:this.id})}}])&&e(u.prototype,i),a&&e(u,a),l}(Object(d.a)(Object(b.a)(y.a)));Object(a.a)([Object(f.b)({readOnly:!0})],O.prototype,"resourceInfo",void 0),Object(a.a)([Object(f.b)({type:["show","hide"]})],O.prototype,"listMode",void 0),Object(a.a)([Object(f.b)({json:{read:!1},readOnly:!0,value:"unsupported"})],O.prototype,"type",void 0),O=Object(a.a)([Object(l.a)("esri.layers.UnsupportedLayer")],O),u.default=O}}])}();