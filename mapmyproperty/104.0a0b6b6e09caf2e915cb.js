(function(){var e={"esri/layers/UnknownLayer":"N1SI"},r=this||window,n=r.webpackJsonp=r.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{N1SI:function(e,r,n){var o,t;o=[n.dj.c(e.i),r,n("zOht"),n("ma1f"),n("EUqE"),n("qMld"),n("afW+"),n("Vx27"),n("0RER"),n("QJ8R")],void 0===(t=(function(e,r,n,o,t,i,s,a,p,u){"use strict";return function(e){function r(r){var n=e.call(this,r)||this;return n.resourceInfo=null,n.type="unknown",n}return n.__extends(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(i.create((function(r,n){s.schedule((function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),t="Unknown layer type";r&&(t+=" "+r),n(new o("layer:unknown-layer-type",t,{layerType:r}))}))})))},r.prototype.read=function(r,n){e.prototype.read.call(this,{resourceInfo:r},n)},r.prototype.write=function(){return null},n.__decorate([a.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),n.__decorate([a.property({type:["show","hide"]})],r.prototype,"listMode",void 0),n.__decorate([a.property({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),n.__decorate([a.subclass("esri.layers.UnknownLayer")],r)}(u.PortalLayer(t.MultiOriginJSONMixin(p)))}).apply(null,o))||(e.exports=t)}}]);