(function(){var i={"arcgis-js-api/layers/GroupLayer":"lAGb"},e=this||window,t=e.webpackJsonp=e.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(i):(t.absMidsWaiting=t.absMidsWaiting||[]).push(i)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{lAGb:function(i,e,t){var r,s;r=[t.dj.c(i.i),e,t("zOht"),t("sS22"),t("LxLY"),t("EUqE"),t("qMld"),t("Vx27"),t("o2T8"),t("0RER"),t("Pnm5"),t("FEX1"),t("QJ8R"),t("jr4D"),t("4hBI"),t("36Aa"),t("2Kdy")],void 0===(s=(function(i,e,t,r,s,o,n,a,l,p,y,c,d,u,h,b){"use strict";return function(i){function e(e){var t=i.call(this,e)||this;return t._visibilityHandles={},t.fullExtent=void 0,t.operationalLayerType="GroupLayer",t.spatialReference=void 0,t.type="group",t._visibilityWatcher=t._visibilityWatcher.bind(t),t}return t.__extends(e,i),e.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},e.prototype._writeLayers=function(i,e,t,r){var o=[];if(!i)return o;i.forEach((function(i){var e=b.getLayerJSON(i,r.webmap?r.webmap.getLayerJSONFromResourceInfo(i):null,r);s.isSome(e)&&e.layerType&&o.push(e)})),e.layers=o},Object.defineProperty(e.prototype,"portalItem",{set:function(i){this._set("portalItem",i)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"visibilityMode",{set:function(i){var e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)},enumerable:!1,configurable:!0}),e.prototype.load=function(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),n.resolve(this)},e.prototype.loadAll=function(){var i=this;return r.loadAll(this,(function(e){e(i.layers)}))},e.prototype.layerAdded=function(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)},e.prototype.layerRemoved=function(i){var e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},e.prototype._turnOffOtherLayers=function(i){this.layers.forEach((function(e){e!==i&&(e.visible=!1)}))},e.prototype._enforceVisibility=function(i,e){if(l.getProperties(this).initialized){var t=this.layers,r=t.find((function(i){return i.visible}));switch(i){case"exclusive":t.length&&!r&&((r=t.getItemAt(0)).visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach((function(i){i.visible=e}))}}},e.prototype._visibleWatcher=function(i){"inherited"===this.visibilityMode&&this.layers.forEach((function(e){e.visible=i}))},e.prototype._visibilityWatcher=function(i,e,t,r){var s=r;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(s):this._isAnyLayerVisible()||(s.visible=!0);break;case"inherited":s.visible=this.visible}},e.prototype._isAnyLayerVisible=function(){return this.layers.some((function(i){return i.visible}))},t.__decorate([a.property()],e.prototype,"fullExtent",void 0),t.__decorate([a.property({json:{read:!1,write:{ignoreOrigin:!0}}})],e.prototype,"layers",void 0),t.__decorate([a.writer("layers")],e.prototype,"_writeLayers",null),t.__decorate([a.property({type:["GroupLayer"]})],e.prototype,"operationalLayerType",void 0),t.__decorate([a.property({json:{origins:{"web-document":{read:!1,write:!1}}}})],e.prototype,"portalItem",null),t.__decorate([a.property()],e.prototype,"spatialReference",void 0),t.__decorate([a.property({json:{read:!1},readOnly:!0,value:"group"})],e.prototype,"type",void 0),t.__decorate([a.property({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],e.prototype,"visibilityMode",null),t.__decorate([a.subclass("esri.layers.GroupLayer")],e)}(y.BlendLayer(c.OperationalLayer(d.PortalLayer(h.TablesMixin(u.LayersMixin(o.MultiOriginJSONMixin(p)))))))}).apply(null,r))||(i.exports=s)}}]);