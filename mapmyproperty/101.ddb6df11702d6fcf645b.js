(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/requireUtils":"ADZV","arcgis-js-api/core/requireUtils":"ADZV","esri/layers/support/LercWorker":"S+mV","arcgis-js-api/layers/support/LercWorker":"S+mV"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{ADZV:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("7bfM"),r("qsST"),r("qMld")],void 0===(i=(function(e,t,r,n,i){Object.defineProperty(t,"__esModule",{value:!0});var o=n.getLogger("esri.core.requireUtils");t.when=function e(t,n){return r.deprecatedFunction(o,"when",{moduleName:"requireUtils",replacement:"Use `promiseUtils.create()` instead.",version:"4.10",warnOnce:!0}),Array.isArray(n)?i.create((function(e){t(n,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];e(t)}))})):e(t,[n]).then((function(e){return e[0]}))},t.getAbsMid=function(e,t,r){return t.toAbsMid?t.toAbsMid(e):r.id.replace(/\/[^\/]*$/gi,"/")+e}}).apply(null,n))||(e.exports=i)},"S+mV":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("2Atf"),r("xhoE"),r("qMld"),r("ADZV"),r("8V7H"),r.dj.m(e)],void 0===(i=(function(e,t,n,i,o,c,u,s){function a(){return o.create((function(e){return r.e(118).then((function(){var t=[r("Rc7o")];e.apply(null,t)}).bind(this)).catch(r.oe)}))}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(){}return e.prototype._decode=function(e){return a().then((function(t){var r=(0,t.decode)(e.buffer,e.options);return{result:r,transferList:[r.pixelData.buffer]}}))},e}(),l=function(t){function r(r){var n=t.call(this)||this;return n.scheduler=r,n._threadInitialized=o.create((function(t){u.open(c.getAbsMid("./LercWorker",e,s),{strategy:"dedicated",scheduler:r}).then((function(e){void 0===n._thread?(n._thread=e,t()):(e.close(),t())}),(function(){return t()}))})),n}return i(r,t),r.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},Object.defineProperty(r.prototype,"test",{get:function(){return{threadInitialized:this._threadInitialized}},enumerable:!0,configurable:!0}),r.prototype.decode=function(e,t,r){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_decode",{buffer:e,options:t},{transferList:[e],signal:r}):a().then((function(n){var i=n.decode;return o.throwIfAborted(r),i(e,t)})):o.resolve(null)},r}(d);t.LercWorkerMaster=l;var f=new Map;t.acquireInstance=function(e){var t=f.get(e);return t||(t={instance:new l(e),ref:0},f.set(e,t)),++t.ref,t.instance},t.releaseInstance=function(e){if(null!=e){var t=e.scheduler,r=f.get(t);r&&--r.ref<=0&&(r.instance.destroy(),f.delete(t))}},t.default=function(){return new d}}).apply(null,n))||(e.exports=i)}}]);