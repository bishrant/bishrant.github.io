(function(){var e={"esri/layers/support/KMLSublayer":"bIi9","esri/layers/KMLLayer":"hPxN"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{bIi9:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("y4WC"),r("BcWh"),r("ycL1"),r("R7Ts"),r("LxLY"),r("qMld"),r("8MXS"),r("Vx27"),r("1dvD"),r("N3Jt")],void 0===(n=(function(e,t,r,o,n,i,l,a,s,u,p,y,c,d){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._sublayersHandles=null,t.description=null,t.id=null,t.networkLink=null,t.title=null,t.sourceJSON=null,t.fullExtent=null,t}var i;return r.__extends(t,e),i=t,t.prototype.initialize=function(){var e=this;p.whenOnce(this,"networkLink").then((function(){return p.whenTrueOnce(e,"visible")})).then((function(){return e.load()}))},t.prototype.load=function(e){var t=this;if(this.networkLink){var r=s.isSome(e)?e.signal:null,l=this._fetchService(this._get("networkLink").href,r).then((function(e){var r=d.computeExtent(e.sublayers);t.fullExtent=o.Extent.fromJSON(r),t.sourceJSON=e;var l=c.default(n.ofType(i),d.sublayersFromJSON(i,e));t.sublayers?t.sublayers.addMany(l):t.sublayers=l,t.layer.emit("sublayer-update"),t.layer&&t.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(l),u.resolve(this)}},Object.defineProperty(t.prototype,"sublayers",{set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))]),this._set("sublayers",e)},enumerable:!1,configurable:!0}),t.prototype.castSublayers=function(e){return c.default(n.ofType(i),e)},Object.defineProperty(t.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))},enumerable:!1,configurable:!0}),t.prototype.readVisible=function(e,t){return!!t.visibility},Object.defineProperty(t.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))},enumerable:!1,configurable:!0}),t.prototype._fetchService=function(e,t){return d.fetchService(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((function(e){return d.parseKML(e.data)}))},r.__decorate([y.property()],t.prototype,"description",void 0),r.__decorate([y.property()],t.prototype,"id",void 0),r.__decorate([y.property({readOnly:!0,value:null})],t.prototype,"networkLink",void 0),r.__decorate([y.property({json:{write:{allowNull:!0}}})],t.prototype,"parent",void 0),r.__decorate([y.property({value:null,json:{write:{allowNull:!0}}})],t.prototype,"sublayers",null),r.__decorate([y.cast("sublayers")],t.prototype,"castSublayers",null),r.__decorate([y.property({value:null,json:{read:{source:"name"}}})],t.prototype,"title",void 0),r.__decorate([y.property({value:!0})],t.prototype,"visible",null),r.__decorate([y.reader("visible",["visibility"])],t.prototype,"readVisible",null),r.__decorate([y.property()],t.prototype,"sourceJSON",void 0),r.__decorate([y.property({value:null})],t.prototype,"layer",null),r.__decorate([y.property({type:o.Extent})],t.prototype,"fullExtent",void 0),i=r.__decorate([y.subclass("esri.layers.support.KMLSublayer")],t)}(i.EventedMixin(l.JSONSupportMixin(a)))}).apply(null,o))||(e.exports=n)},hPxN:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("y4WC"),r("6Ej+"),r("LxLY"),r("EUqE"),r("qMld"),r("Vx27"),r("Z4y+"),r("0RER"),r("Pnm5"),r("FEX1"),r("QJ8R"),r("WaJo"),r("OXmT"),r("bIi9"),r("N3Jt")],void 0===(n=(function(e,t,r,o,n,i,l,a,s,u,p,y,c,d,f,b,h,_,v){"use strict";return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o._visibleFolders=[],o.allSublayers=new i({root:o,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),o.outSpatialReference=p.WGS84,o.path=null,o.operationalLayerType="KML",o.sublayers=null,o.type="kml",o.url=null,o}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.watch("sublayers",(function(t,r){r&&r.forEach((function(e){e.parent=null,e.layer=null})),t&&t.forEach((function(t){t.parent=e,t.layer=e}))}),!0),this.on("sublayer-update",(function(){return e.notifyChange("fullExtent")}))},t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r.__assign({url:e},t):e},t.prototype.readSublayersFromItemOrWebMap=function(e,t){this._visibleFolders=t.visibleFolders},t.prototype.readSublayers=function(e,t,r){return v.sublayersFromJSON(_,t,r,this._visibleFolders)},t.prototype.writeSublayers=function(e,t){for(var r=[],o=e.toArray();o.length;){var n=o[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&o.push.apply(o,n.sublayers.toArray())),o.shift()}t.visibleFolders=r},Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=this.url.substring(this.url.lastIndexOf("/")+1,this.parsedUrl.path.lastIndexOf("."));return 0===e.length&&(e="KML"),e}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visibleSublayers",{get:function(){var e=this.sublayers,t=[];return e&&e.forEach((function e(r){r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(e))})),t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fullExtent",{get:function(){return this._recomputeFullExtent()},enumerable:!1,configurable:!0}),t.prototype.load=function(e){var t=this,r=l.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then((function(){return t._fetchService(r)}))),s.resolve(this)},t.prototype._fetchService=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,o,n=this;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,s.resolve().then((function(){return n.resourceInfo?{ssl:!1,data:n.resourceInfo}:v.fetchService(n.url,n.outSpatialReference,n.refreshInterval,e)}))];case 1:return t=r.sent(),(o=v.parseKML(t.data))&&this.read(o,{origin:"service"}),[2]}}))}))},t.prototype._recomputeFullExtent=function(){var e=null;return this.extent&&(e=this.extent.clone()),function t(r){if(r.sublayers)for(var o=0,n=r.sublayers.items;o<n.length;o++){var i=n[o];t(i),i.visible&&i.fullExtent&&(e?e.union(i.fullExtent):e=i.fullExtent.clone())}}(this),e},r.__decorate([u.property({readOnly:!0})],t.prototype,"allSublayers",void 0),r.__decorate([u.property({type:p})],t.prototype,"outSpatialReference",void 0),r.__decorate([u.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),r.__decorate([u.property({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),r.__decorate([u.property({type:["KML"]})],t.prototype,"operationalLayerType",void 0),r.__decorate([u.property({type:n.ofType(_),json:{write:{ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),r.__decorate([u.reader(["web-map","portal-item"],"sublayers",["visibleFolders"])],t.prototype,"readSublayersFromItemOrWebMap",null),r.__decorate([u.reader("service","sublayers",["sublayers"])],t.prototype,"readSublayers",null),r.__decorate([u.writer("sublayers")],t.prototype,"writeSublayers",null),r.__decorate([u.property({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),r.__decorate([u.property({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],t.prototype,"title",null),r.__decorate([u.property()],t.prototype,"url",void 0),r.__decorate([u.property({readOnly:!0,dependsOn:["sublayers"]})],t.prototype,"visibleSublayers",null),r.__decorate([u.property({type:o.Extent})],t.prototype,"extent",void 0),r.__decorate([u.property({dependsOn:["extent"]})],t.prototype,"fullExtent",null),r.__decorate([u.subclass("esri.layers.KMLLayer")],t)}(c.BlendLayer(b.RefreshableLayer(h.ScaleRangeLayer(d.OperationalLayer(f.PortalLayer(a.MultiOriginJSONMixin(y)))))))}).apply(null,o))||(e.exports=n)}}]);