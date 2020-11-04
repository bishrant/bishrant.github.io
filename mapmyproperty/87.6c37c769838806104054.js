(function(){var t={"arcgis-js-api/layers/UnsupportedLayer":"9ZiH","esri/core/MultiOriginJSONSupport":"EUqE","arcgis-js-api/core/MultiOriginJSONSupport":"EUqE","esri/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/core/ReadOnlyMultiOriginJSONSupport":"j8uw","arcgis-js-api/core/accessorSupport/MultiOriginStore":"rU+N"},e=this||window,r=e.webpackJsonp=e.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(t):(r.absMidsWaiting=r.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"9ZiH":function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("zOht"),r("ma1f"),r("rg9i"),r("EUqE"),r("qMld"),r("afW+"),r("Vx27"),r("0RER"),r("QJ8R")],void 0===(o=(function(t,e,r,i,o,n,s,a,p,u,l){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.resourceInfo=null,r.type="unsupported",r}return r.__extends(e,t),e.prototype.initialize=function(){var t=this;this.addResolvingPromise(s.create((function(e,r){a.schedule((function(){var e=t.resourceInfo&&(t.resourceInfo.layerType||t.resourceInfo.type),o="Unsupported layer type";e&&(o+=" "+e),r(new i("layer:unsupported-layer-type",o,{layerType:e}))}))})))},e.prototype.read=function(e,r){var i={resourceInfo:e};null!=e.id&&(i.id=e.id),null!=e.title&&(i.title=e.title),t.prototype.read.call(this,i,r)},e.prototype.write=function(t){return o.mixin(t||{},this.resourceInfo,{id:this.id})},r.__decorate([p.property({readOnly:!0})],e.prototype,"resourceInfo",void 0),r.__decorate([p.property({type:["show","hide"]})],e.prototype,"listMode",void 0),r.__decorate([p.property({json:{read:!1},readOnly:!0,value:"unsupported"})],e.prototype,"type",void 0),r.__decorate([p.subclass("esri.layers.UnsupportedLayer")],e)}(l.PortalLayer(n.MultiOriginJSONMixin(u)))}).apply(null,i))||(t.exports=o)},EUqE:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("zOht"),r("Gtr7"),r("j8uw"),r("ZEeX"),r("o2T8"),r("Kg8D"),r("Dv6O")],void 0===(o=(function(t,e,r,i,o,n,s,a,p){"use strict";function u(t){return s.getProperties(t).store}Object.defineProperty(e,"__esModule",{value:!0}),e.MultiOriginJSONSupport=e.MultiOriginJSONMixin=void 0,e.MultiOriginJSONMixin=function(t){return function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.apply(this,e)||this}return r.__extends(e,t),r.__decorate([p.subclass("esri.core.MultiOriginJSONSupport")],e)}(function(t){var e=function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.apply(this,e)||this}return r.__extends(e,t),e.prototype.clear=function(t,e){return void 0===e&&(e="user"),u(this).delete(t,n.nameToId(e))},e.prototype.write=function(t,e){return void 0===t&&(t={}),a.default(this,t=t||{},e),t},e.prototype.setAtOrigin=function(t,e,r){s.getProperties(this).setAtOrigin(t,e,n.nameToId(r))},e.prototype.removeOrigin=function(t){for(var e=u(this),r=n.nameToId(t),i=0,o=e.keys(r);i<o.length;i++){var s=o[i];e.originOf(s)===r&&e.set(s,e.get(s,r),6)}},e.prototype.updateOrigin=function(t,e){for(var r=u(this),i=n.nameToId(e),o=this.get(t),s=i+1;s<n.OriginIdNum;++s)r.delete(t,s);r.set(t,o,i)},e.prototype.toJSON=function(t){return this.write({},t)},r.__decorate([p.subclass("esri.core.WriteableMultiOriginJSONSupport")],e)}(t);return e.prototype.toJSON.isDefaultToJSON=!0,e}(o.ReadOnlyMultiOriginJSONMixin(t)))};var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),r.__decorate([p.subclass("esri.core.MultiOriginJSONSupport")],e)}(e.MultiOriginJSONMixin(i));e.MultiOriginJSONSupport=l}).apply(null,i))||(t.exports=o)},QJ8R:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("zOht"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF"),r("2Kdy")],void 0===(o=(function(t,e,i,o,n,s,a,p,u,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PortalLayer=void 0;var c=n.getLogger("esri.layers.mixins.PortalLayer");e.PortalLayer=function(t){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.resourceReferences={portalItem:null,paths:[]},e}return i.__extends(e,t),e.prototype.destroy=function(){var t;null===(t=this.portalItem)||void 0===t||t.destroy(),this.portalItem=null},Object.defineProperty(e.prototype,"portalItem",{set:function(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))},enumerable:!1,configurable:!0}),e.prototype.readPortalItem=function(t,e,r){if(e.itemId)return new l({id:e.itemId,portal:r&&r.portal})},e.prototype.writePortalItem=function(t,e){t&&t.id&&(e.itemId=t.id)},e.prototype.loadFromPortal=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var o,n;return i.__generator(this,(function(i){switch(i.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,new Promise((function(t,e){Promise.all([r.e(1),r.e(106)]).then((function(){var e=[r("6hwa")];t.apply(null,e)}).bind(this)).catch(e.bind(this))}))];case 2:return o=i.sent(),s.throwIfAborted(e),[4,o.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},e)];case 3:return[2,i.sent()];case 4:throw n=i.sent(),c.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+n),n;case 5:return[2]}}))}))},e.prototype.read=function(e,r){r&&(r.layer=this),t.prototype.read.call(this,e,r)},e.prototype.write=function(e,r){var n=r&&r.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||u.getDefault());return n&&s&&!a.hasSamePortal(s.restUrl,n.restUrl)?(r.messages&&r.messages.push(new o("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):t.prototype.write.call(this,e,i.__assign(i.__assign({},r),{layer:this}))},i.__decorate([p.property({type:l})],e.prototype,"portalItem",null),i.__decorate([p.reader("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),i.__decorate([p.writer("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),i.__decorate([p.property()],e.prototype,"resourceReferences",void 0),i.__decorate([p.subclass("esri.layers.mixins.PortalLayer")],e)}(t)}}).apply(null,i))||(t.exports=o)},j8uw:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("zOht"),r("Gtr7"),r("LxLY"),r("rU+N"),r("ZEeX"),r("Ab+N"),r("o2T8"),r("Dv6O")],void 0===(o=(function(t,e,r,i,o,n,s,a,p,u){"use strict";function l(t){return p.getProperties(t).store}Object.defineProperty(e,"__esModule",{value:!0}),e.ReadOnlyMultiOriginJSONSupport=e.ReadOnlyMultiOriginJSONMixin=void 0,e.ReadOnlyMultiOriginJSONMixin=function(t){return function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var i=t.apply(this,e)||this,s=o.assumeNonNull(p.getProperties(i)),a=s.metadatas,u=s.store,l=new n.default;return s.store=l,u.keys().forEach((function(t){l.set(t,u.get(t),0)})),Object.keys(a).forEach((function(t){s.internalGet(t)&&l.set(t,s.internalGet(t),0)})),i}return r.__extends(e,t),e.prototype.read=function(t,e){a.default(this,t,e)},e.prototype.getAtOrigin=function(t,e){var r=l(this),i=s.nameToId(e);if("string"==typeof t)return r.get(t,i);var o={};return t.forEach((function(t){o[t]=r.get(t,i)})),o},e.prototype.originOf=function(t){return s.idToName(this.originIdOf(t))},e.prototype.originIdOf=function(t){return l(this).originOf(t)},e.prototype.revert=function(t,e){var r=l(this),i=s.nameToId(e),o=p.getProperties(this);("string"==typeof t?"*"===t?r.keys(i):[t]:t).forEach((function(t){o.propertyInvalidated(t),r.revert(t,i),o.propertyCommitted(t)}))},r.__decorate([u.subclass("esri.core.ReadOnlyMultiOriginJSONSupport")],e)}(t)};var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),r.__decorate([u.subclass("esri.core.ReadOnlyMultiOriginJSONSupport")],e)}(e.ReadOnlyMultiOriginJSONMixin(i));e.ReadOnlyMultiOriginJSONSupport=c}).apply(null,i))||(t.exports=o)},"rU+N":function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("KY0m"),r("rg9i"),r("LxLY"),r("ZEeX")],void 0===(o=(function(t,e,r,i,o,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(){this._propertyOriginMap=new Map,this._originStores=new Array(n.OriginIdNum),this._values=new Map}return t.prototype.clone=function(e){var r=new t,o=this._originStores[0];o&&o.forEach((function(t,e){r.set(e,i.clone(t),0)}));for(var s=function(t){var o=a._originStores[t];o&&o.forEach((function(o,n){e&&e.has(n)||r.set(n,i.clone(o),t)}))},a=this,p=2;p<n.OriginIdNum;p++)s(p);return r},t.prototype.get=function(t,e){var r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0},t.prototype.keys=function(t){var e=null==t?this._values:this._originStores[t];return e?r.keysOfMap(e):[]},t.prototype.set=function(t,e,r){void 0===r&&(r=6);var i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||o.assumeNonNull(this._propertyOriginMap.get(t))<=r){var n=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),n!==e}return!1},t.prototype.delete=function(t,e){void 0===e&&(e=6);var r=this._originStores[e];if(r){var i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(var o=e-1;o>=0;o--){var n=this._originStores[o];if(n&&n.has(t)){this._values.set(t,n.get(t)),this._propertyOriginMap.set(t,o);break}}}return i}},t.prototype.has=function(t,e){var r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)},t.prototype.revert=function(t,e){for(;e>0&&!this.has(t,e);)--e;var r=this._originStores[e],i=r&&r.get(t),o=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,e),o!==i},t.prototype.originOf=function(t){return this._propertyOriginMap.get(t)||0},t.prototype.forEach=function(t){this._values.forEach(t)},t}();e.default=s}).apply(null,i))||(t.exports=o)}}]);