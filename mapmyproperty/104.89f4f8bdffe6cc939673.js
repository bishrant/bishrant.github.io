(function(){var e={"esri/layers/MapNotesLayer":"2OQv"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"2OQv":function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("EUqE"),r("qMld"),r("Vx27"),r("Zvuv"),r("0RER"),r("Pnm5"),r("FEX1"),r("QJ8R")],void 0===(n=(function(e,t,r,o,n,l,a,i,u,s,c,p){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.type="map-notes",r}return r.__extends(t,e),Object.defineProperty(t.prototype,"fullExtent",{get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return e?e.union(t.fullExtent):t.fullExtent}),null):null},enumerable:!1,configurable:!0}),t.prototype.readFeatureCollectionsFromItem=function(e,t,r){return t.layers.map((function(e){var t=new i;return t.read(e,r),t}))},t.prototype.readFeatureCollectionsFromWebMap=function(e,t,r){return t.featureCollection.layers.map((function(e){var t=new i;return t.read(e,r),t}))},Object.defineProperty(t.prototype,"minScale",{get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return null==e?t.minScale:Math.min(e,t.minScale)}),null):0},set:function(e){this.featureCollections.forEach((function(t){t.minScale=e})),this._set("minScale",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxScale",{get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return null==e?t.maxScale:Math.min(e,t.maxScale)}),null):0},set:function(e){this.featureCollections.forEach((function(t){t.maxScale=e})),this._set("maxScale",e)},enumerable:!1,configurable:!0}),t.prototype.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),l.resolve(this)},r.__decorate([a.property({dependsOn:["featureCollections"],readOnly:!0})],t.prototype,"fullExtent",null),r.__decorate([a.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([a.property({type:o.ofType(i)})],t.prototype,"featureCollections",void 0),r.__decorate([a.reader("portal-item","featureCollections",["layers"])],t.prototype,"readFeatureCollectionsFromItem",null),r.__decorate([a.reader("web-map","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollectionsFromWebMap",null),r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"minScale",null),r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"maxScale",null),r.__decorate([a.property({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),r.__decorate([a.subclass("esri.layers.MapNotesLayer")],t)}(s.BlendLayer(c.OperationalLayer(p.PortalLayer(n.MultiOriginJSONMixin(u)))))}).apply(null,o))||(e.exports=n)}}]);