(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/LercWorker":"S+mV"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"S+mV":function(e,t,n){var r,o;r=[n.dj.c(e.i),t,n("2Atf"),n("xhoE"),n("qMld"),n("8V7H")],void 0===(o=(function(e,t,r,o,i,c){function u(){return i.create((function(e){return n.e(117).then((function(){var t=[n("Rc7o")];e.apply(null,t)}).bind(this)).catch(n.oe)}))}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.prototype._decode=function(e){return u().then((function(t){var n=(0,t.decode)(e.buffer,e.options);return{result:n,transferList:[n.pixelData.buffer]}}))},e}(),s=function(e){function t(t){var n=e.call(this)||this;return n.scheduler=t,n._threadInitialized=i.create((function(e){c.open("LercWorker",{strategy:"dedicated",scheduler:t}).then((function(t){void 0===n._thread?(n._thread=t,e()):(t.close(),e())}),(function(){return e()}))})),n}return o(t,e),t.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},Object.defineProperty(t.prototype,"test",{get:function(){return{threadInitialized:this._threadInitialized}},enumerable:!0,configurable:!0}),t.prototype.decode=function(e,t,n){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_decode",{buffer:e,options:t},{transferList:[e],signal:n}):u().then((function(r){var o=r.decode;return i.throwIfAborted(n),o(e,t)})):i.resolve(null)},t}(a);t.LercWorkerMaster=s;var d=new Map;t.acquireInstance=function(e){var t=d.get(e);return t||(t={instance:new s(e),ref:0},d.set(e,t)),++t.ref,t.instance},t.releaseInstance=function(e){if(null!=e){var t=e.scheduler,n=d.get(t);n&&--n.ref<=0&&(n.instance.destroy(),d.delete(t))}},t.default=function(){return new a}}).apply(null,r))||(e.exports=o)}}]);