(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/mixins/PortalLayer":"QJ8R"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[110,34],{QJ8R:function(t,e,r){var a,o;a=[r.dj.c(t.i),e,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(o=(function(t,e,a,o,i,s,n,l,p,u,d,h,c){Object.defineProperty(e,"__esModule",{value:!0});var m=l.getLogger("esri.layers.mixins.PortalLayer");e.PortalLayer=function(t){return function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),Object.defineProperty(e.prototype,"portalItem",{set:function(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))},enumerable:!0,configurable:!0}),e.prototype.readPortalItem=function(t,e,r){if(e.itemId)return new c({id:e.itemId,portal:r&&r.portal})},e.prototype.writePortalItem=function(t,e){t&&t.id&&(e.itemId=t.id)},e.prototype.loadFromPortal=function(t,e){return s(this,void 0,void 0,(function(){var a,o;return i(this,(function(i){switch(i.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,p.create((function(t){return Promise.all([r.e(0),r.e(88)]).then((function(){var e=[r("6hwa")];t.apply(null,e)}).bind(this)).catch(r.oe)}))];case 2:return a=i.sent(),p.throwIfAborted(e),[4,a.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},e)];case 3:return[2,i.sent()];case 4:throw o=i.sent(),m.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+o),o;case 5:return[2]}}))}))},e.prototype.read=function(t,e){var r=arguments;e&&(e.layer=this),this.inherited(r)},e.prototype.write=function(t,e){var r=e&&e.portal,a=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||h.getDefault());return r&&a&&!u.hasSamePortal(a.restUrl,r.restUrl)?(e.messages&&e.messages.push(new n("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},o([d.property({type:c})],e.prototype,"portalItem",null),o([d.reader("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),o([d.writer("portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),o([d.subclass("esri.layers.mixins.PortalLayer")],e)}(d.declared(t))}}).apply(null,a))||(t.exports=o)}}]);