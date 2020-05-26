(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/UnknownLayer":"N1SI","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[103,44,116],{N1SI:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ma1f"),r("EUqE"),r("qMld"),r("afW+"),r("Vx27"),r("0RER"),r("QJ8R")],void 0===(n=(function(e,t,r,o,n,i,a,s,l,p,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.resourceInfo=null,r.type="unknown",r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(a.create((function(t,r){s.schedule((function(){var t=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),o="Unknown layer type";t&&(o+=" "+t),r(new n("layer:unknown-layer-type",o,{layerType:t}))}))})))},t.prototype.read=function(e,t){this.inherited(arguments,[{resourceInfo:e},t])},t.prototype.write=function(){return null},o([l.property({readOnly:!0})],t.prototype,"resourceInfo",void 0),o([l.property({type:["show","hide"]})],t.prototype,"listMode",void 0),o([l.property({json:{read:!1},readOnly:!0,value:"unknown"})],t.prototype,"type",void 0),o([l.subclass("esri.layers.UnknownLayer")],t)}(l.declared(u.PortalLayer(i.MultiOriginJSONMixin(p))))}).apply(null,o))||(e.exports=n)},QJ8R:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(n=(function(e,t,o,n,i,a,s,l,p,u,d,c,y){Object.defineProperty(t,"__esModule",{value:!0});var h=l.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new y({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return a(this,void 0,void 0,(function(){var o,n;return i(this,(function(i){switch(i.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,p.create((function(e){return Promise.all([r.e(0),r.e(98)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(r.oe)}))];case 2:return o=i.sent(),p.throwIfAborted(t),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,i.sent()];case 4:throw n=i.sent(),h.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+n),n;case 5:return[2]}}))}))},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||c.getDefault());return r&&o&&!u.hasSamePortal(o.restUrl,r.restUrl)?(t.messages&&t.messages.push(new s("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},n([d.property({type:y})],t.prototype,"portalItem",null),n([d.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),n([d.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),n([d.subclass("esri.layers.mixins.PortalLayer")],t)}(d.declared(e))}}).apply(null,o))||(e.exports=n)}}]);