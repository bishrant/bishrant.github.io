(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/views/2d/layers/features/processors/HeatmapProcessor":"lw41"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{lw41:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("Vx27"),r("Wf0m"),r("68TM")],void 0===(n=(function(e,t,r,i,n,o,a,s,p){Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="heatmap",t.updating=!1,t}return r(t,e),t.prototype.update=function(e){return o(this,void 0,void 0,(function(){return n(this,(function(t){return this._set("config",e),[2]}))}))},t.prototype.onTileData=function(e,t,r){if(t&&t.addOrUpdate&&t.addOrUpdate.length>0){var i=s.calculateHeatmapIntensityInfo(t.addOrUpdate,this.config.renderer,512,512);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:i},{transferList:[i.matrix]})}return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:null},r)},t.prototype.onTileError=function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)},i([a.property()],t.prototype,"config",void 0),i([a.property()],t.prototype,"updating",void 0),i([a.subclass("esri.views.2d.layers.features.processors.HeatmapProcessor")],t)}(a.declared(p.default));t.default=d}).apply(null,i))||(e.exports=n)}}]);