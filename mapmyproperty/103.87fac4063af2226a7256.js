(function(){var e={"esri/layers/UnsupportedLayer":"9ZiH"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"9ZiH":function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("rg9i"),t("EUqE"),t("qMld"),t("afW+"),t("Vx27"),t("0RER"),t("QJ8R")],void 0===(i=(function(e,r,t,o,i,n,s,p,a,u,d){"use strict";return function(e){function r(r){var t=e.call(this,r)||this;return t.resourceInfo=null,t.type="unsupported",t}return t.__extends(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(s.create((function(r,t){p.schedule((function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),i="Unsupported layer type";r&&(i+=" "+r),t(new o("layer:unsupported-layer-type",i,{layerType:r}))}))})))},r.prototype.read=function(r,t){var o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),e.prototype.read.call(this,o,t)},r.prototype.write=function(e){return i.mixin(e||{},this.resourceInfo,{id:this.id})},t.__decorate([a.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),t.__decorate([a.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t.__decorate([a.property({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),t.__decorate([a.subclass("esri.layers.UnsupportedLayer")],r)}(d.PortalLayer(n.MultiOriginJSONMixin(u)))}).apply(null,o))||(e.exports=i)}}]);