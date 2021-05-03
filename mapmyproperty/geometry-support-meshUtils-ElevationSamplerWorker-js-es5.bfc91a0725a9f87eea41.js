!function(){function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(f){return void n(f)}u.done?t(c):Promise.resolve(c).then(r,o)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{CVnL:function(t,o,a){"use strict";a.r(o),a.d(o,"ElevationSamplerWorker",(function(){return f}));var i=a("wSAH"),u=a("srIe"),c=a("zna6"),f=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var o,a,f,l,h;return o=t,(a=[{key:"createIndex",value:(l=regeneratorRuntime.mark((function e(t,n){var r,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new Array,t.vertexAttributes&&t.vertexAttributes.position){e.next=3;break}return e.abrupt("return",new c.a);case 3:if(o=this.createMeshData(t),!Object(u.k)(n)){e.next=10;break}return e.next=7,n.invoke("createIndexThread",o,{transferList:r});case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=this.createIndexThread(o).result;case 11:return a=e.t0,e.abrupt("return",this.createPooledRBush().fromJSON(a));case 13:case"end":return e.stop()}}),e,this)})),h=function(){var e=this,t=arguments;return new Promise((function(r,o){var a=l.apply(e,t);function i(e){n(a,r,o,i,u,"next",e)}function u(e){n(a,r,o,i,u,"throw",e)}i(void 0)}))},function(e,t){return h.apply(this,arguments)})},{key:"createIndexThread",value:function(e){var t=new Float64Array(e.position),n=this.createPooledRBush();return e.components?this.createIndexComponentsThread(n,t,e.components.map((function(e){return new Uint32Array(e)}))):this.createIndexAllThread(n,t)}},{key:"createIndexAllThread",value:function(e,t){for(var n=new Array(t.length/9),r=0,o=0;o<t.length;o+=9)n[r++]=s(t,o+0,o+3,o+6);return e.load(n),{result:e.toJSON()}}},{key:"createIndexComponentsThread",value:function(t,n,r){var o,a=0,i=e(r);try{for(i.s();!(o=i.n()).done;)a+=o.value.length/3}catch(v){i.e(v)}finally{i.f()}var u,c=new Array(a),f=0,l=e(r);try{for(l.s();!(u=l.n()).done;)for(var h=u.value,p=0;p<h.length;p+=3)c[f++]=s(n,3*h[p+0],3*h[p+1],3*h[p+2])}catch(v){l.e(v)}finally{l.f()}return t.load(c),{result:t.toJSON()}}},{key:"createMeshData",value:function(e){var t=e.vertexAttributes.position.buffer;return!e.components||e.components.some((function(e){return!e.faces}))?{position:t}:{position:t,components:e.components.map((function(e){return e.faces}))}}},{key:"createPooledRBush",value:function(){return new c.a(9,Object(i.a)("csp-restrictions")?function(e){return e}:[".minX",".minY",".maxX",".maxY"])}}])&&r(o.prototype,a),f&&r(o,f),t}();function s(e,t,n,r){return{minX:Math.min(e[t+0],e[n+0],e[r+0]),maxX:Math.max(e[t+0],e[n+0],e[r+0]),minY:Math.min(e[t+1],e[n+1],e[r+1]),maxY:Math.max(e[t+1],e[n+1],e[r+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[n+0],e[n+1],e[n+2]],p2:[e[r+0],e[r+1],e[r+2]]}}o.default=f},RjdO:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("X2wA"),o=Object(r.b)((function(e){var t;void 0!==(t=function(){function e(n,r,o,a,i){for(;a>o;){if(a-o>600){var u=a-o+1,c=r-o+1,f=Math.log(u),s=.5*Math.exp(2*f/3),l=.5*Math.sqrt(f*s*(u-s)/u)*(c-u/2<0?-1:1);e(n,r,Math.max(o,Math.floor(r-c*s/u+l)),Math.min(a,Math.floor(r+(u-c)*s/u+l)),i)}var h=n[r],p=o,v=a;for(t(n,o,r),i(n[a],h)>0&&t(n,o,a);p<v;){for(t(n,p,v),p++,v--;i(n[p],h)<0;)p++;for(;i(n[v],h)>0;)v--}0===i(n[o],h)?t(n,o,v):t(n,++v,a),v<=r&&(o=v+1),r<=v&&(a=v-1)}}function t(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function n(e,t){return e<t?-1:e>t?1:0}return function(t,r,o,a,i){e(t,r,o||0,a||t.length-1,i||n)}}())&&(e.exports=t)}))}}])}();