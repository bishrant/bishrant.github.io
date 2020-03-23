(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/mixins/PortalLayer":"QJ8R","esri/layers/mixins/RefreshableLayer":"WaJo"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[108,25,44,104,105,106,107,109,115,116],{QJ8R:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(o=(function(e,t,i,o,a,s,n,l,p,u,d,c,h){Object.defineProperty(t,"__esModule",{value:!0});var m=l.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new h({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return s(this,void 0,void 0,(function(){var i,o;return a(this,(function(a){switch(a.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];a.label=1;case 1:return a.trys.push([1,4,,5]),[4,p.create((function(e){return Promise.all([r.e(0),r.e(98)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(r.oe)}))];case 2:return i=a.sent(),p.throwIfAborted(t),[4,i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,a.sent()];case 4:throw o=a.sent(),m.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+o),o;case 5:return[2]}}))}))},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||c.getDefault());return r&&i&&!u.hasSamePortal(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new n("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},o([d.property({type:h})],t.prototype,"portalItem",null),o([d.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),o([d.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),o([d.subclass("esri.layers.mixins.PortalLayer")],t)}(d.declared(e))}}).apply(null,i))||(e.exports=o)},WaJo:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Vx27")],void 0===(o=(function(e,t,r,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.RefreshableLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshInterval=0,t}return r(t,e),t.prototype.refresh=function(){this.emit("refresh")},i([o.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),i([o.subclass("esri.layers.mixins.RefreshableLayer")],t)}(o.declared(e))}}).apply(null,i))||(e.exports=o)}}]);