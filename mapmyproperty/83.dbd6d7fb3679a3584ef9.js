(function(){var t={"arcgis-js-api/core/MultiOriginJSONSupport":"EUqE","esri/core/MultiOriginJSONSupport":"EUqE","esri/layers/UnknownLayer":"N1SI","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R","esri/layers/mixins/PortalLayer":"QJ8R","esri/core/accessorSupport/MultiOriginStore":"rU+N"},e=this||window,r=e.webpackJsonp=e.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(t):(r.absMidsWaiting=r.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{EUqE:function(t,e,r){var o,i;o=[r.dj.c(t.i),e,r("zOht"),r("Gtr7"),r("Vx27"),r("rU+N"),r("ZEeX"),r("Ab+N"),r("o2T8"),r("Kg8D")],void 0===(i=(function(t,e,r,o,i,n,s,a,p,u){function l(t){return p.getProperties(t).store}Object.defineProperty(e,"__esModule",{value:!0}),e.MultiOriginJSONMixin=function(t){var e=function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var o=t.apply(this,e)||this,i=p.getProperties(o),s=i.metadatas,a=i.store,u=new n.default;return i.store=u,a.keys().forEach((function(t){u.set(t,a.get(t),0)})),Object.keys(s).forEach((function(t){i.internalGet(t)&&u.set(t,i.internalGet(t),0)})),o}return r.__extends(e,t),e.prototype.clear=function(t,e){return void 0===e&&(e="user"),l(this).delete(t,s.nameToId(e))},e.prototype.read=function(t,e){a.default(this,t,e)},e.prototype.write=function(t,e){return u.default(this,t=t||{},e),t},e.prototype.getAtOrigin=function(t,e){var r=l(this),o=s.nameToId(e);if("string"==typeof t)return r.get(t,o);var i={};return t.forEach((function(t){i[t]=r.get(t,o)})),i},e.prototype.setAtOrigin=function(t,e,r){p.getProperties(this).setAtOrigin(t,e,s.nameToId(r))},e.prototype.originOf=function(t){return s.idToName(this.originIdOf(t))},e.prototype.originIdOf=function(t){return l(this).originOf(t)},e.prototype.revert=function(t,e){var r=l(this),o=s.nameToId(e),i=p.getProperties(this);("string"==typeof t?"*"===t?r.keys(o):[t]:t).forEach((function(t){i.propertyInvalidated(t),r.revert(t,o),i.propertyCommitted(t)}))},e.prototype.removeOrigin=function(t){for(var e=l(this),r=s.nameToId(t),o=0,i=e.keys(r);o<i.length;o++){var n=i[o];e.originOf(n)===r&&e.set(n,e.get(n,r),6)}},e.prototype.updateOrigin=function(t,e){for(var r=l(this),o=s.nameToId(e),i=this.get(t),n=o+1;n<7;++n)r.delete(t,n);r.set(t,i,o)},e.prototype.toJSON=function(t){return this.write(null,t)},r.__decorate([i.subclass("esri.core.MultiOriginJSONSupport")],e)}(t);return e.prototype.toJSON.isDefaultToJSON=!0,e};var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),r.__decorate([i.subclass("esri.core.MultiOriginJSONSupport")],e)}(e.MultiOriginJSONMixin(o));e.MultiOriginJSONSupport=c}).apply(null,o))||(t.exports=i)},N1SI:function(t,e,r){var o,i;o=[r.dj.c(t.i),e,r("zOht"),r("ma1f"),r("EUqE"),r("qMld"),r("afW+"),r("Vx27"),r("0RER"),r("QJ8R")],void 0===(i=(function(t,e,r,o,i,n,s,a,p,u){return function(t){function e(e){var r=t.call(this,e)||this;return r.resourceInfo=null,r.type="unknown",r}return r.__extends(e,t),e.prototype.initialize=function(){var t=this;this.addResolvingPromise(n.create((function(e,r){s.schedule((function(){var e=t.resourceInfo&&(t.resourceInfo.layerType||t.resourceInfo.type),i="Unknown layer type";e&&(i+=" "+e),r(new o("layer:unknown-layer-type",i,{layerType:e}))}))})))},e.prototype.read=function(e,r){t.prototype.read.call(this,{resourceInfo:e},r)},e.prototype.write=function(){return null},r.__decorate([a.property({readOnly:!0})],e.prototype,"resourceInfo",void 0),r.__decorate([a.property({type:["show","hide"]})],e.prototype,"listMode",void 0),r.__decorate([a.property({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),r.__decorate([a.subclass("esri.layers.UnknownLayer")],e)}(u.PortalLayer(i.MultiOriginJSONMixin(p)))}).apply(null,o))||(t.exports=i)},QJ8R:function(t,e,r){var o,i;o=[r.dj.c(t.i),e,r("zOht"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF"),r("2Kdy")],void 0===(i=(function(t,e,o,i,n,s,a,p,u,l){Object.defineProperty(e,"__esModule",{value:!0});var c=n.getLogger("esri.layers.mixins.PortalLayer");e.PortalLayer=function(t){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.resourceReferences={portalItem:null,paths:[]},e}return o.__extends(e,t),Object.defineProperty(e.prototype,"portalItem",{set:function(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))},enumerable:!0,configurable:!0}),e.prototype.readPortalItem=function(t,e,r){if(e.itemId)return new l({id:e.itemId,portal:r&&r.portal})},e.prototype.writePortalItem=function(t,e){t&&t.id&&(e.itemId=t.id)},e.prototype.loadFromPortal=function(t,e){return o.__awaiter(this,void 0,void 0,(function(){var i,n;return o.__generator(this,(function(o){switch(o.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];o.label=1;case 1:return o.trys.push([1,4,,5]),[4,new Promise((function(t,e){Promise.all([r.e(1),r.e(145)]).then((function(){var e=[r("6hwa")];t.apply(null,e)}).bind(this)).catch(e.bind(this))}))];case 2:return i=o.sent(),s.throwIfAborted(e),[4,i.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},e)];case 3:return[2,o.sent()];case 4:throw n=o.sent(),c.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+n),n;case 5:return[2]}}))}))},e.prototype.read=function(e,r){r&&(r.layer=this),t.prototype.read.call(this,e,r)},e.prototype.write=function(e,r){var n=r&&r.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||u.getDefault());return n&&s&&!a.hasSamePortal(s.restUrl,n.restUrl)?(r.messages&&r.messages.push(new i("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):t.prototype.write.call(this,e,o.__assign(o.__assign({},r),{layer:this}))},o.__decorate([p.property({type:l})],e.prototype,"portalItem",null),o.__decorate([p.reader("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),o.__decorate([p.writer("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),o.__decorate([p.property()],e.prototype,"resourceReferences",void 0),o.__decorate([p.subclass("esri.layers.mixins.PortalLayer")],e)}(t)}}).apply(null,o))||(t.exports=i)},"rU+N":function(t,e,r){var o,i;o=[r.dj.c(t.i),e,r("KY0m"),r("rg9i")],void 0===(i=(function(t,e,r,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this._propertyOriginMap=new Map,this._originStores=new Array(7),this._values=new Map}return t.prototype.clone=function(e){var r=new t,i=this._originStores[0];i&&i.forEach((function(t,e){r.set(e,o.clone(t),0)}));for(var n=function(t){var i=s._originStores[t];i&&i.forEach((function(i,n){e&&e.has(n)||r.set(n,o.clone(i),t)}))},s=this,a=2;a<7;a++)n(a);return r},t.prototype.get=function(t,e){var r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0},t.prototype.keys=function(t){var e=null==t?this._values:this._originStores[t];return e?r.keysOfMap(e):[]},t.prototype.set=function(t,e,r){void 0===r&&(r=6);var o=this._originStores[r];if(o||(o=new Map,this._originStores[r]=o),o.set(t,e),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){var i=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),i!==e}return!1},t.prototype.delete=function(t,e){void 0===e&&(e=6);var r=this._originStores[e];if(r){var o=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(var i=e-1;i>=0;i--){var n=this._originStores[i];if(n&&n.has(t)){this._values.set(t,n.get(t)),this._propertyOriginMap.set(t,i);break}}}return o}},t.prototype.has=function(t,e){var r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)},t.prototype.revert=function(t,e){for(;e>0&&!this.has(t,e);)--e;var r=this._originStores[e],o=r&&r.get(t),i=this._values.get(t);return this._values.set(t,o),this._propertyOriginMap.set(t,e),i!==o},t.prototype.originOf=function(t){return this._propertyOriginMap.get(t)||0},t.prototype.forEach=function(t){this._values.forEach(t)},t}();e.default=i}).apply(null,o))||(t.exports=i)}}]);