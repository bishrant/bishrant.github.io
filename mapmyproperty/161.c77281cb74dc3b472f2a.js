(function(){var e={"arcgis-js-api/views/2d/layers/StreamLayerView2D":"rLOj"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{rLOj:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("LxLY"),r("Vx27"),r("w1v0"),r("/Ck8"),r("+MAT")],void 0===(i=(function(e,t,r,n,i,o,a,s,c){"use strict";function p(e,t){if(i.isNone(e)&&i.isNone(t))return null;var r={};return i.isSome(t)&&(r.geometry=t.toJSON()),i.isSome(e)&&(r.where=e),r}return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._enabledDataReceived=!1,t.errorString=null,t.connectionStatus="disconnected",t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.handles.add([this.layer.watch("purgeOptions",(function(){return e._update()}))])},t.prototype.destroy=function(){this.connectionStatus="disconnected"},Object.defineProperty(t.prototype,"connectionError",{get:function(){if(this.errorString)return new n("stream-controller",this.errorString)},enumerable:!1,configurable:!0}),t.prototype.on=function(t,r){"data-received"===t&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));var n=e.prototype.on.call(this,t,r),i=this;return{remove:function(){n.remove(),"data-received"===t&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}},t.prototype.queryLatestObservations=function(e,t){var r=this;if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new n("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((function(e){var t=a.fromJSON(e);return t.features.forEach((function(e){e.layer=r.layer,e.sourceLayer=r.layer})),t}))},t.prototype._createClientOptions=function(){var t=this,n=e.prototype._createClientOptions.call(this);return r.__assign(r.__assign({},n),{setProperty:function(e){t.set(e.propertyName,e.value)}})},t.prototype._createTileRendererHash=function(t){var r=JSON.stringify(this.layer.purgeOptions)+"."+JSON.stringify(p(this.layer.definitionExpression,this.layer.geometryDefinition))+")";return e.prototype._createTileRendererHash.call(this,t)+r},t.prototype._createServiceOptions=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,n,i,o,a;return r.__generator(this,(function(r){return t=(e=this.layer).objectIdField,n=e.fields.map((function(e){return e.toJSON()})),i=c.toJSONGeometryType(e.geometryType),o=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null,[2,{type:"stream",fields:n,geometryType:i,objectIdField:t,timeInfo:o,source:this.layer.parsedUrl,serviceFilter:p(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:a,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval}]}))}))},r.__decorate([o.property()],t.prototype,"errorString",void 0),r.__decorate([o.property({dependsOn:["errorString"],readOnly:!0})],t.prototype,"connectionError",null),r.__decorate([o.property()],t.prototype,"connectionStatus",void 0),r.__decorate([o.subclass("esri.views.2d.layers.StreamLayerView2D")],t)}(s)}).apply(null,n))||(e.exports=i)}}]);