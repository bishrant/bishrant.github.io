(function(){var e={"esri/views/2d/layers/features/processors/HeatmapProcessor":"lw41"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{lw41:function(e,t,i){var r,s;r=[i.dj.c(e.i),t,i("zOht"),i("H1tY"),i("LxLY"),i("Vx27"),i("CYRa"),i("Wf0m"),i("68TM")],void 0===(s=(function(e,t,i,r,s,n,o,a,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="heatmap",t._tileKeyToFeatureSets=new Map,t}return i.__extends(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])},t.prototype.update=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var s;return i.__generator(this,(function(i){return"heatmap"!==(s=t.schema.processors[0]).type?(r("esri-2d-debug")&&console.debug("Tried to update symbol processor with schema of type",s.type),[2]):o.diff(this._schema,s)?(e.mesh=!0,this._schema=s,[2]):[2]}))}))},t.prototype.onTileUpdate=function(e){for(var t=0,i=e.removed;t<i.length;t++)this._tileKeyToFeatureSets.delete(i[t].key.id)},t.prototype.onTileData=function(e,t,r){return i.__awaiter(this,void 0,void 0,(function(){var n,o,d,p,u;return i.__generator(this,(function(c){return this._tileKeyToFeatureSets.has(e.key.id)&&"replace"!==t.type||this._tileKeyToFeatureSets.set(e.key.id,new Map),n=this._tileKeyToFeatureSets.get(e.key.id),s.isSome(t.addOrUpdate)&&n.set(t.addOrUpdate.instance,t),o=t.end,n.forEach((function(e){return o=o||e.end})),o?(d=[],n.forEach((function(e){s.isSome(e.addOrUpdate)&&d.push(e.addOrUpdate)})),p=a.calculateHeatmapIntensityInfoReaders(d,this._schema.mesh,512,512),u=[p.matrix],[2,this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:p},i.__assign(i.__assign({},r),{transferList:u}))]):[2]}))}))},t.prototype.onTileError=function(e,t,i){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},i)},i.__decorate([n.subclass("esri.views.2d.layers.features.processors.HeatmapProcessor")],t)}(d.default);t.default=p}).apply(null,r))||(e.exports=s)}}]);