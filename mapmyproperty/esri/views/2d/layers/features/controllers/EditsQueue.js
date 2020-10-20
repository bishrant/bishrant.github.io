define(["require","exports","tslib","../../../../../core/Accessor","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators","@dojo/framework/shim/Promise"],(function(e,t,r,o,n,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EditsQueue=void 0;var i=function(e){function t(t){var r=e.call(this,t)||this;return r._queue=[],r._onGoingRequest=null,r._abortController=n.createAbortController(),r}return r.__extends(t,e),t.prototype.destroy=function(){this.clear()},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.destroyed&&(this._queue.length>0||null!=this._onGoingRequest)},enumerable:!1,configurable:!0}),t.prototype.clear=function(){if(this.destroyed)throw new Error("instance is already destroyed");for(var e=this._queue.pop();e;)e.resolver.reject(n.createAbortError()),e=this._queue.pop();this._queue.length=0,this._abortController.abort(),this._abortController=n.createAbortController()},t.prototype.push=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,o=this;return r.__generator(this,(function(r){if(this.destroyed)throw new Error("instance is already destroyed");return t=n.createResolver(),this._queue.push({event:e,resolver:t}),this.notifyChange("updating"),Promise.resolve().then((function(){o._processNext()})),[2,t.promise]}))}))},t.prototype._processNext=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,o,n,s,i,u,a,c,d,h,l,p,f,_,g,y,v,b,q,w,E=this;return r.__generator(this,(function(r){switch(r.label){case 0:if(this._onGoingRequest)return[2];for(e=[],t=new Set,o=new Set,n=new Set,s=this._queue.shift();s;){for(u=(i=s.event).addedFeatures,a=i.deletedFeatures,c=i.updatedFeatures,e.push(s.resolver),d=0,h=u;d<h.length;d++)b=(l=h[d]).objectId,l.error||(t.add(b),o.add(b),n.delete(b));for(p=0,f=c;p<f.length;p++)b=(_=f[p]).objectId,_.error||(o.add(b),n.delete(b));for(g=0,y=a;g<y.length;g++)b=(v=y[g]).objectId,v.error||(t.has(b)?t.delete(b):n.add(b),o.delete(b));s=this._queue.shift()}return o.size||n.size?(q=[],w=[],o.size&&o.forEach((function(e){q.push(e)})),n.size&&n.forEach((function(e){w.push(e)})),this._onGoingRequest=Promise.resolve().then((function(){return E.processEdits(q,w,{signal:E._abortController.signal})})).catch((function(){})),this.notifyChange("updating"),[4,this._onGoingRequest]):(this.notifyChange("updating"),e.forEach((function(e){return e()})),[2]);case 1:return r.sent(),this._onGoingRequest=null,this.notifyChange("updating"),e.forEach((function(e){return e()})),this._queue.length>0&&this._processNext(),[2]}}))}))},r.__decorate([s.property({constructOnly:!0})],t.prototype,"processEdits",void 0),r.__decorate([s.property({readOnly:!0})],t.prototype,"updating",null),r.__decorate([s.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],t)}(o);t.EditsQueue=i}));