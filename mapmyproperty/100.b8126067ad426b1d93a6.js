(function(){var e={"esri/layers/RouteLayer":"BdvN"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{BdvN:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("EUqE"),r("qMld"),r("Vx27"),r("Zvuv"),r("0RER"),r("FEX1"),r("QJ8R")],void 0===(n=(function(e,t,r,o,n,i,a,l,u,p,s){"use strict";return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.type="route",o}return r.__extends(t,e),Object.defineProperty(t.prototype,"barrierLines",{get:function(){return this._getNamedFeatureLayer("PolylineBarriers")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"barrierPoints",{get:function(){return this._getNamedFeatureLayer("Barriers")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"barrierPolygons",{get:function(){return this._getNamedFeatureLayer("PolygonBarriers")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"directionLines",{get:function(){return this._getNamedFeatureLayer("DirectionLines")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"directionPoints",{get:function(){return this._getNamedFeatureLayer("DirectionPoints")},enumerable:!1,configurable:!0}),t.prototype.readFeatureCollectionsFromItem=function(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((function(e){var t=new l;return t.read(e,r),t}))},t.prototype.readFeatureCollectionsFromWebMap=function(e,t,r){return t.featureCollection.layers.map((function(e){var t=new l;return t.read(e,r),t}))},Object.defineProperty(t.prototype,"fullExtent",{get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return e?e.union(t.fullExtent):t.fullExtent}),null):null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxScale",{get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return null==e?t.maxScale:Math.min(e,t.maxScale)}),null):0},set:function(e){this.featureCollections.forEach((function(t){t.maxScale=e})),this._set("maxScale",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"minScale",{get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return null==e?t.minScale:Math.min(e,t.minScale)}),null):0},set:function(e){this.featureCollections.forEach((function(t){t.minScale=e})),this._set("minScale",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"routeInfo",{get:function(){return this._getNamedFeatureLayer("RouteInfo")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"stops",{get:function(){return this._getNamedFeatureLayer("Stops")},enumerable:!1,configurable:!0}),t.prototype.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),i.resolve(this)},t.prototype._getNamedFeatureLayer=function(e){if(this.featureCollections)return this.featureCollections.find((function(t){return t.title===e}))},r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"barrierLines",null),r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"barrierPoints",null),r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"barrierPolygons",null),r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"directionLines",null),r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"directionPoints",null),r.__decorate([a.property({type:o.ofType(l)})],t.prototype,"featureCollections",void 0),r.__decorate([a.reader("portal-item","featureCollections",["layers"])],t.prototype,"readFeatureCollectionsFromItem",null),r.__decorate([a.reader("web-map","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollectionsFromWebMap",null),r.__decorate([a.property({dependsOn:["featureCollections"],readOnly:!0})],t.prototype,"fullExtent",null),r.__decorate([a.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"maxScale",null),r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"minScale",null),r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"routeInfo",null),r.__decorate([a.property({dependsOn:["featureCollections"]})],t.prototype,"stops",null),r.__decorate([a.property({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),r.__decorate([a.subclass("esri.layers.RouteLayer")],t)}(p.OperationalLayer(s.PortalLayer(n.MultiOriginJSONMixin(u))))}).apply(null,o))||(e.exports=n)}}]);