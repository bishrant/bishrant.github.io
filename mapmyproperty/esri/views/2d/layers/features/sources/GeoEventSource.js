define(["require","exports","tslib","../../../../../core/has","../../../../../core/maybe","../../../../../core/libs/rbush/rbush","../../../../../layers/graphics/featureConversionUtils","../../../../../layers/graphics/OptimizedGeometry","../../../../../layers/graphics/data/StreamFeatureManager","../../../../../layers/graphics/sources/connections/GeoEventConnection","../../../../../layers/graphics/sources/connections/WebSocketConnection","./DataTileSource","../support/FeatureSetReaderJSON"],(function(e,t,n,r,o,i,a,u,c,s,d,f,p){"use strict";function h(e,t){var n=e.weakClone(),r=a.quantizeX(t,e.geometry.coords[0]),o=a.quantizeY(t,e.geometry.coords[1]);return n.geometry=new u.default([],[r,o]),n}function l(e,t){var n=i(9,function(e){switch(e){case"esriGeometryPoint":return function(e){return{minX:e.geometry.coords[0],minY:e.geometry.coords[1],maxX:e.geometry.coords[0],maxY:e.geometry.coords[1]}};default:return function(e){var t=1/0,n=1/0,r=-1/0,o=-1/0;return e.geometry.forEachVertex((function(e,i){t=Math.min(t,e),n=Math.min(n,i),r=Math.max(r,e),o=Math.max(o,i)})),{minX:t,minY:n,maxX:r,maxY:o}}}}(t));return n.load(e),n}function m(e,t){return e.search({minX:t.bounds[0],minY:t.bounds[1],maxX:t.bounds[2],maxY:t.bounds[3]})}Object.defineProperty(t,"__esModule",{value:!0}),t.GeoEventSource=void 0;var y=function(){function e(e,t){this.onUpdate=e,this._geometryType=t,this._objectIdToFeature=new Map}return Object.defineProperty(e.prototype,"_features",{get:function(){var e=[];return this._objectIdToFeature.forEach((function(t){return e.push(t)})),e},enumerable:!1,configurable:!0}),e.prototype.add=function(e){this._objectIdToFeature.set(e.objectId,e),this._index=null},e.prototype.get=function(e){return this._objectIdToFeature.has(e)?this._objectIdToFeature.get(e):null},e.prototype.forEach=function(e){this._objectIdToFeature.forEach(e)},e.prototype.search=function(e){return this._index||(this._index=l(this._features,this._geometryType)),m(this._index,e)},e.prototype.removeById=function(e){var t=this._objectIdToFeature.get(e);return t?(this._objectIdToFeature.delete(e),this._index=null,t):null},e.prototype.update=function(e,t){this.onUpdate(e,t)},Object.defineProperty(e.prototype,"size",{get:function(){return this._objectIdToFeature.size},enumerable:!1,configurable:!0}),e}(),_=function(e){function t(t){var n=e.call(this,t)||this;n.type="geoevent",n._dataReceiveEventEnabled=!1,n._updateInfo={websocket:0,client:0};var r=t.outSR,o=t.serviceInfo,i=o.geometryType,f=o.objectIdField,p=o.timeInfo,l=o.purgeOptions,m=o.source,_=o.spatialReference,b=o.serviceFilter,v=o.maxReconnectionAttempts,g=o.maxReconnectionInterval,I=new y(n._onUpdate.bind(n),i),T=new c.default(I,f,p,l),F=function(e,t,n,r,o,i,a){var u=0===e.path.indexOf("wss://")||0===e.path.indexOf("ws://"),c={source:e,sourceSpatialReference:t,spatialReference:n,geometryType:r,filter:o,maxReconnectionAttempts:i,maxReconnectionInterval:a};return u?new d.WebSocketConnection(c):new s.default(c)}(m,_,r,i,b,v,g);n._store=I,n._manager=T,n._connection=F,n._quantize=function(e){switch(e){case"esriGeometryPoint":return h;case"esriGeometryPolygon":case"esriGeometryPolyline":default:return function(t,n){var r=t.weakClone(),o=new u.default,i=a.quantizeOptimizedGeometry(o,t.geometry,!1,!1,e,n,!1,!1);return r.geometry=i,r}}}(i),n._handles=[n._connection.on("feature",(function(e){return n._onFeature(e)})),n._connection.watch("connectionStatus",(function(e){return n.events.emit("connectionStatus",e)})),n._connection.watch("errorString",(function(e){return n.events.emit("errorString",e)}))];var w=performance.now();return n._updateIntervalId=setInterval((function(){var e=performance.now(),r=e-w;if(r>2500){w=e;var o=Math.round(n._updateInfo.client/(r/1e3)),i=Math.round(n._updateInfo.websocket/(r/1e3));n._updateInfo.client=0,n._updateInfo.websocket=0,n.events.emit("updateRate",{client:o,websocket:i})}t.canAcceptRequest()&&n._manager.checkForUpdates()}),16),n}return n.__extends(t,e),t.prototype.destroy=function(){clearInterval(this._updateIntervalId),this._handles.forEach((function(e){return e.remove()})),this._connection.destroy()},t.prototype._fetchDataTile=function(){},t.prototype.enableEvent=function(e,t){"data-received"===e&&(this._dataReceiveEventEnabled=t)},Object.defineProperty(t.prototype,"updating",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype.subscribe=function(t){e.prototype.subscribe.call(this,t);var n=this._getTileFeatures(t);this._onRequest({tile:t,id:t.key.id,features:n,end:!0},"new")},t.prototype.unsubscribe=function(t){e.prototype.unsubscribe.call(this,t)},t.prototype.forEachRequest=function(e,t){var n=this._subscriptions.get(e),r=n.tile,o=n.signal;t({tile:r,id:e,features:this._getTileFeatures(r),end:!0},{signal:o})},t.prototype.resend=function(e){return n.__awaiter(this,void 0,void 0,(function(){var t=this;return n.__generator(this,(function(n){return this._subscriptions.forEach((function(n){var r=n.tile,o={tile:r,id:r.id,features:t._getTileFeatures(r),end:!0};t._onRequest(o,"update",e)})),[2]}))}))},t.prototype._getTileFeatures=function(e){var t=this,n=this._store.search(e).map((function(n){return t._quantize(n,e.transform)}));return p.FeatureSetReaderJSON.fromOptimizedFeatures(n,this.geometryType,e.transform)},t.prototype._onFeature=function(e){this._updateInfo.websocket++;try{this._dataReceiveEventEnabled&&this.events.emit("feature",e);var t=a.convertFromFeature(e,this.geometryType,!1,!1,this._serviceInfo.objectIdField);this._manager.add(t)}catch(e){r("esri-2d-debug")&&console.debug(e)}},t.prototype._onUpdate=function(e,t){return n.__awaiter(this,void 0,void 0,(function(){var r,i,a=this;return n.__generator(this,(function(n){return r=o.andThen(e,(function(e){return l(e,a.geometryType)})),i=o.andThen(t,(function(e){return l(e,a.geometryType)})),o.isSome(e)&&(this._updateInfo.client+=e.length),this._subscriptions.forEach((function(e,t){var n=e.tile,u=o.andThen(r,(function(e){return m(e,n)})),c=o.andThen(u,(function(e){return e.map((function(e){return a._quantize(e,n.transform)}))})),s=o.andThen(c,(function(e){return p.FeatureSetReaderJSON.fromOptimizedFeatures(e,a.geometryType,n.transform)})),d=o.andThen(i,(function(e){return m(e,n)})),f=o.andThen(d,(function(e){return e.map((function(e){return e.objectId}))}));a._onRequest({tile:n,id:t,features:s,remove:o.unwrapOr(f,[]),end:!0},"update")})),[2]}))}))},t}(f.DataTileSource);t.GeoEventSource=_}));