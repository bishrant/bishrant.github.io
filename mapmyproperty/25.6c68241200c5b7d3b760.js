(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/mixins/RefreshableLayer":"WaJo","esri/layers/mixins/RefreshableLayer":"WaJo"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[25,116],{WaJo:function(e,r,i){var n,s;n=[i.dj.c(e.i),r,i("9opi"),i("qKT0"),i("Vx27")],void 0===(s=(function(e,r,i,n,s){Object.defineProperty(r,"__esModule",{value:!0}),r.RefreshableLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshInterval=0,r}return i(r,e),r.prototype.refresh=function(){this.emit("refresh")},n([s.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],r.prototype,"refreshInterval",void 0),n([s.subclass("esri.layers.mixins.RefreshableLayer")],r)}(s.declared(e))}}).apply(null,n))||(e.exports=s)}}]);