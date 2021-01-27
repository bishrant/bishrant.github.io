(function(){var e={"arcgis-js-api/layers/GeoRSSLayer":"Hpgp"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{Hpgp:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("0J3i"),r("zp6E"),r("+AWJ"),r("LxLY"),r("EUqE"),r("qMld"),r("Vx27"),r("0RER"),r("Pnm5"),r("FEX1"),r("QJ8R"),r("WaJo"),r("OXmT"),r("EtsK"),r("x7Wq"),r("CF4u")],void 0===(i=(function(e,t,r,o,i,n,l,a,p,s,u,c,y,d,S,f,_,v,h){"use strict";return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.description=null,o.title=null,o.lineSymbol=null,o.pointSymbol=null,o.polygonSymbol=null,o.outSpatialReference=null,o.url=null,o.type="geo-rss",o}return r.__extends(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r.__assign({url:e},t):e},t.prototype.readFeatureCollections=function(e,t){return t.featureCollection.layers.forEach((function(e){var t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers},t.prototype.load=function(e){var t=this,r=l.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)}))),p.resolve(this)},t.prototype._fetchService=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,i(o.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e})];case 1:return t=r.sent().data,this.read(t,{origin:"service"}),[2]}}))}))},r.__decorate([s.property()],t.prototype,"description",void 0),r.__decorate([s.property()],t.prototype,"title",void 0),r.__decorate([s.property()],t.prototype,"featureCollections",void 0),r.__decorate([s.reader("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),r.__decorate([s.property({type:h})],t.prototype,"lineSymbol",void 0),r.__decorate([s.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([s.property({types:n.symbolTypes})],t.prototype,"pointSymbol",void 0),r.__decorate([s.property({type:v})],t.prototype,"polygonSymbol",void 0),r.__decorate([s.property()],t.prototype,"outSpatialReference",void 0),r.__decorate([s.property(_.url)],t.prototype,"url",void 0),r.__decorate([s.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),r.__decorate([s.subclass("esri.layers.GeoRSSLayer")],t)}(c.BlendLayer(S.RefreshableLayer(y.OperationalLayer(d.PortalLayer(f.ScaleRangeLayer(a.MultiOriginJSONMixin(u)))))))}).apply(null,o))||(e.exports=i)}}]);