(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/views/2d/layers/features/support/DataTile":"KgG2","arcgis-js-api/core/SetPool":"L6z/","arcgis-js-api/views/2d/layers/features/support/DataTileFeaturesIndex":"W1uT","arcgis-js-api/views/2d/layers/features/controllers/EditsQueue":"ak1O","arcgis-js-api/views/2d/layers/features/support/TileUpdateQueue":"sOkP","arcgis-js-api/views/2d/layers/features/controllers/OnDemandController":"uqzM"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{KgG2:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.displayTile=null,this.tile=null,this.done=!1,this.queryInfoHash=null,this.returnExceeded=!1}return Object.defineProperty(e.prototype,"key",{get:function(){return this.tile.key},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.tile.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bounds",{get:function(){return this.tile.bounds},enumerable:!0,configurable:!0}),e}();t.default=r}).apply(null,i))||(e.exports=n)},"L6z/":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._pool=[],this._set=new Set}return e.prototype.acquire=function(){if(0===this._pool.length)return new Set;var e=this._pool.pop();return this._set.delete(e),e},e.prototype.release=function(e){e&&!this._set.has(e)&&(e.clear(),this._pool.length<5e4&&(this._pool.push(e),this._set.add(e)))},e.acquire=function(){return i.acquire()},e.release=function(e){return i.release(e)},e}();t.default=r;var i=new r}).apply(null,i))||(e.exports=n)},W1uT:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("L6z/"),r("rfv1"),r("fUL3")],void 0===(n=(function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0});var s=[],o=new Set,u=function(){function e(){this._tileById=new Map,this._tilesToFeatures=new Map,this._featureToTiles=new Map}return e.prototype.destroy=function(){this.clear()},e.prototype.add=function(e){var t=this;if(!this.has(e.id)){var i=e;this._tileById.set(i.id,i),this._tilesToFeatures.set(i,r.default.acquire()),this._tilesToFeatures.forEach((function(e,r){i!==r&&(n.isParentOf(i,r)?e.forEach((function(e){t._link(i,e)})):n.isChildOf(i,r)&&t.featureStore.forEachInBounds(i.bounds,(function(r){e.has(r.objectId)&&t._link(i,r.objectId)})))}))}},e.prototype.clear=function(){this._tilesToFeatures.forEach((function(e){return r.default.release(e)})),this._tilesToFeatures.clear(),this._featureToTiles.forEach((function(e){return r.default.release(e)})),this._featureToTiles.clear(),this._tileById.clear()},e.prototype.delete=function(e){var t=this,r=this.get(e.id);s.length=0,this._tilesToFeatures.get(r).forEach((function(e){var i=t._featureToTiles.get(e);i.has(r)&&1===i.size?s.push(e):t._unlink(r,e)}));for(var i=0,n=s;i<n.length;i++)this._unlink(r,n[i]);this.featureStore.removeManyById(s),this._tilesToFeatures.delete(r),this._tileById.delete(r.id),s.length=0},e.prototype.forEach=function(e,t){return this._tileById.forEach(e,t)},e.prototype.get=function(e){return this._tileById.get(e)},e.prototype.has=function(e){return this._tileById.has(e)},e.prototype.setTileFeatures=function(e,t){var i=this,n=this.get(e.id);this._tilesToFeatures.has(n)||(this._tileById.set(n.id,n),this._tilesToFeatures.set(n,r.default.acquire()));for(var u=0,a=t;u<a.length;u++)o.add(a[u].objectId);s.length=0,this._tilesToFeatures.get(n).forEach((function(e){if(!o.has(e)){var t=i._featureToTiles.get(e);t.has(n)&&1===t.size?s.push(e):i._unlink(n,e)}}));for(var l=0,h=s;l<h.length;l++)this._unlink(n,h[l]);this.featureStore.removeManyById(s),this.featureStore.addMany(t),o.forEach((function(e){i._link(n,e)})),o.clear(),s.length=0},e.prototype.addOrUpdateFeatures=function(e){for(var t=this,r=new Set,n=new i.default({geometryType:this.featureStore.geometryType,hasM:this.featureStore.hasM,hasZ:this.featureStore.hasZ}),s=0,o=this.deleteFeaturesById(e.map((function(e){return e.objectId})));s<o.length;s++)r.add(o[s]);n.addMany(e),this._tileById.forEach((function(e){n.forEachInBounds(e.bounds,(function(i){t._link(e,i.objectId),r.add(e)}))})),this.featureStore.addMany(e);var u=[];return r.forEach((function(e){return u.push(e)})),u},e.prototype.deleteFeaturesById=function(e){for(var t=this,i=new Set,n=function(e){var n=s._featureToTiles.get(e);n&&(n.forEach((function(r){i.add(r),t._tilesToFeatures.get(r).delete(e)})),r.default.release(n),s._featureToTiles.delete(e))},s=this,o=0,u=e;o<u.length;o++)n(u[o]);this.featureStore.removeManyById(e);var a=[];return i.forEach((function(e){return a.push(e)})),a},e.prototype._link=function(e,t){this._featureToTiles.get(t)||this._featureToTiles.set(t,r.default.acquire()),this._featureToTiles.get(t).add(e),this._tilesToFeatures.get(e).add(t)},e.prototype._unlink=function(e,t){this._featureToTiles.get(t).delete(e),this._tilesToFeatures.get(e).delete(t),0===this._featureToTiles.get(t).size&&(r.default.release(this._featureToTiles.get(t)),this._featureToTiles.delete(t))},e}();t.default=u}).apply(null,i))||(e.exports=n)},ak1O:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("Q2wQ"),r("HZ3d"),r("9opi"),r("Gtr7"),r("qMld"),r("Vx27"),r("2Kdy")],void 0===(n=(function(e,t,r,i,n,s,o,u,a){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t){var r=e.call(this,t)||this;return r._queue=[],r._onGoingRequest=null,r._abortController=u.createAbortController(),r}return s(t,e),t.prototype.destroy=function(){this.clear()},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.destroyed&&(this._queue.length>0||null!=this._onGoingRequest)},enumerable:!0,configurable:!0}),t.prototype.clear=function(){if(this.destroyed)throw new Error("instance is already destroyed");for(var e=this._queue.pop();e;)e.resolver.reject(u.createAbortError()),e=this._queue.pop();this._queue.length=0,this._abortController.abort(),this._abortController=u.createAbortController()},t.prototype.push=function(e){return n(this,void 0,void 0,(function(){var t,r=this;return i(this,(function(i){if(this.destroyed)throw new Error("instance is already destroyed");return t=u.createResolver(),this._queue.push({event:e,resolver:t}),this.notifyChange("updating"),Promise.resolve().then((function(){r._processNext()})),[2,t.promise]}))}))},t.prototype._processNext=function(){return n(this,void 0,void 0,(function(){var e,t,r,n,s,o,u,a,l,h,c,d,f,p,y,_,g,v,b,T,m,I=this;return i(this,(function(i){switch(i.label){case 0:if(this._onGoingRequest)return[2];for(e=[],t=new Set,r=new Set,n=new Set,s=this._queue.shift();s;){for(u=(o=s.event).addedFeatures,a=o.deletedFeatures,l=o.updatedFeatures,e.push(s.resolver),h=0,c=u;h<c.length;h++)b=(d=c[h]).objectId,d.error||(t.add(b),r.add(b),n.delete(b));for(f=0,p=l;f<p.length;f++)b=(y=p[f]).objectId,y.error||(r.add(b),n.delete(b));for(_=0,g=a;_<g.length;_++)b=(v=g[_]).objectId,v.error||(t.has(b)?t.delete(b):n.add(b),r.delete(b));s=this._queue.shift()}return r.size||n.size?(T=[],m=[],r.size&&r.forEach((function(e){T.push(e)})),n.size&&n.forEach((function(e){m.push(e)})),this._onGoingRequest=Promise.resolve().then((function(){return I.processEdits(T,m,{signal:I._abortController.signal})})).catch((function(){})),this.notifyChange("updating"),[4,this._onGoingRequest]):(this.notifyChange("updating"),e.forEach((function(e){return e()})),[2]);case 1:return i.sent(),this._onGoingRequest=null,this.notifyChange("updating"),e.forEach((function(e){return e()})),this._queue.length>0&&this._processNext(),[2]}}))}))},r([a.property({constructOnly:!0})],t.prototype,"processEdits",void 0),r([a.property({readOnly:!0})],t.prototype,"updating",null),r([a.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],t)}(a.declared(o));t.EditsQueue=l}).apply(null,i))||(e.exports=n)},sOkP:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("Gtr7"),r("qMld"),r("afW+"),r("Vx27"),r("W9tT"),r("ked+")],void 0===(n=(function(e,t,r,i,n,s,o,u,a,l,h,c){Object.defineProperty(t,"__esModule",{value:!0});var d=[0,0],f=function(e){function t(t){var r=e.call(this,t)||this;return r._queue=new Map,r._isPaused=!1,r._scheduledNextHandle=null,r._timestamp=Date.now(),r.tileInfoView=null,r._next=r._next.bind(r),r._finalize=r._finalize.bind(r),r}return r(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._queue.size>0||null!=this._onGoingTile},enumerable:!0,configurable:!0}),t.prototype.abort=function(e){this._onGoingTile&&this._onGoingTile.tileId===e&&(this._onGoingTile.abortController.abort(),this._onGoingTile=null),this._queue.delete(e),this._scheduleNext(),this.notifyChange("updating")},t.prototype.clear=function(){this._queue.clear(),this._onGoingTile&&(this._onGoingTile.abortController.abort(),this._onGoingTile=null),this._cancelNext(),this.notifyChange("updating")},t.prototype.has=function(e){return this._queue.has(e)},t.prototype.isOngoing=function(e){return this._onGoingTile&&this._onGoingTile.tileId===e},t.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},t.prototype.push=function(e,t){if(!this._queue.has(e)){var r=u.createAbortController();this._queue.set(e,{tileId:e,key:c.TileKey.pool.acquire(e),timestamp:t||this._timestamp,abortController:r}),this._scheduleNext(),this.notifyChange("updating")}},t.prototype.refresh=function(){this._timestamp=Date.now(),this.reset()},t.prototype.reset=function(){var e=this._onGoingTile;e&&this.push(e.tileId,this._timestamp),this.notifyChange("updating")},t.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext()),this.notifyChange("updating")},t.prototype._finalize=function(){this._onGoingTile=null,this.notifyChange("updating"),this._scheduleNext()},t.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},t.prototype._scheduleNext=function(){this._isPaused||this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingTile||(this._scheduledNextHandle=a.schedule(this._next))},t.prototype._next=function(){return s(this,void 0,void 0,(function(){var e,t,r,i;return n(this,(function(n){switch(n.label){case 0:if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingTile)return this._scheduledNextHandle=null,[2];if(this._scheduledNextHandle=null,e=this._peek(),t=e.abortController.signal,r=e.tileId,c.TileKey.pool.release(e.key),this._queue.delete(r),this._onGoingTile=e,i=this.process(r,this._timestamp,{signal:t}),this.notifyChange("updating"),!function(e){return e&&"function"==typeof e.then}(i))return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,i];case 2:case 3:return n.sent(),[3,4];case 4:return this._finalize(),[2]}}))}))},t.prototype._peek=function(){var e=this;if(!this.state)throw new Error("state not set");var t=this.tileInfoView,r=this.state.center,i=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,s=null;return this._queue.forEach((function(o){t.getTileCoords(d,o.key);var u=e._timestamp-o.timestamp;if(isNaN(u))(a=h.vec2.distance(d,r))<n&&(n=a,s=o);else if(u===i){var a;(a=h.vec2.distance(d,r))<n&&(n=a,s=o)}else u>i&&(i=u,n=Number.POSITIVE_INFINITY,s=o)})),s},i([l.property({readOnly:!0})],t.prototype,"length",null),i([l.property({constructOnly:!0})],t.prototype,"process",void 0),i([l.property()],t.prototype,"state",void 0),i([l.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),i([l.property({readOnly:!0})],t.prototype,"updating",null),i([l.subclass("esri.views.2d.layers.features.support.TileUpdateQueue")],t)}(l.declared(o));t.default=f}).apply(null,i))||(e.exports=n)},uqzM:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("2Atf"),r("Q2wQ"),r("HZ3d"),r("QVms"),r("ma1f"),r("H1tY"),r("qsST"),r("VCyw"),r("qMld"),r("8MXS"),r("8V7H"),r("Vx27"),r("N7S/"),r("Lzvl"),r("+6sX"),r("B16N"),r("lAK8"),r("YaB4"),r("Btct"),r("ak1O"),r("KgG2"),r("W1uT"),r("fUL3"),r("sOkP"),r("EBSo")],void 0===(n=(function(e,t,r,i,n,s,o,u,a,l,h,c,d,f,p,y,_,g,v,b,T,m,I,x,S,w,F,Q,E){Object.defineProperty(t,"__esModule",{value:!0});var q=h.getLogger("esri.views.2d.layers.features.controllers.OnDemandController"),C=l("esri-featurelayer-webgl"),O=l("esri-mobile"),j={maxDrillLevel:C&&"object"==typeof C&&null!=C.maxDrillLevel?C.maxDrillLevel:O?1:4,maxRecordCountFactor:C&&"object"==typeof C&&null!=C.maxRecordCountFactor?C.maxRecordCountFactor:O?1:3,enablePBFQuery:!C||"object"!=typeof C||null==C.enablePBFQuery||C.enablePBFQuery},P=new Set,G=[],N=function(){function e(e,t){this.objectIdField=t,this.client=p.openWithPorts(e)}return e.prototype.destroy=function(){this.client.close(),this.client=null},e.prototype.executeQuery=function(e,t){return o(this,void 0,void 0,(function(){var r;return s(this,(function(i){switch(i.label){case 0:return[4,this.client.invoke("queryFeatures",e.toJSON(),t)];case 1:return r=i.sent(),[2,v.convertFromFeatureSet(r,this.objectIdField)]}}))}))},e}(),A=function(){function e(e,t){this.source=e,this.sourceSpatialReference=t}return e.prototype.destroy=function(){},e.prototype.executeQuery=function(e,t){return o(this,void 0,void 0,(function(){return s(this,(function(r){switch(r.label){case 0:return[4,b.executeQueryPBF(this.source,e,{type:"optimized",sourceSpatialReference:this.sourceSpatialReference},t)];case 1:return[2,r.sent().data]}}))}))},e}(),B=function(){function e(e,t,r){this.source=e,this.objectIdField=t,this.sourceSpatialReference=r}return e.prototype.destroy=function(){},e.prototype.executeQuery=function(e,t){return o(this,void 0,void 0,(function(){var r;return s(this,(function(i){switch(i.label){case 0:return[4,b.executeQuery(this.source,e,this.sourceSpatialReference,t)];case 1:return r=i.sent().data,[2,v.convertFromFeatureSet(r,this.objectIdField)]}}))}))},e}(),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="on-demand",t._queryInfoHash=null,t._dataTileIndex=new w.default,t._editsQueue=new x.EditsQueue({processEdits:t._processEdits.bind(t)}),t._featuresInFlight=new Map,t.service=null,t}return r(t,e),t.prototype.initialize=function(){var e=this,t=this._createFeatureStore();t.onFeatureAdd=this.onFeatureAdd.bind(this),t.onFeatureRemove=this.onFeatureRemove.bind(this),this._set("featureStore",t),this._dataTileIndex.featureStore=this.featureStore,this._dataTileIndex.forEach((function(e){return e.done=!1})),this._fetchQueue=new E({concurrency:10,strategy:"center-first",tileInfoView:this.tileStore.tileScheme,process:function(t,r){return o(e,void 0,void 0,(function(){var e;return s(this,(function(i){switch(i.label){case 0:return[4,this._fetchTile(t,this.queryInfo,r)];case 1:return e=i.sent(),this._handleResponse(t,e),[2,e]}}))}))}}),this._patchQueue=new E({concurrency:10,strategy:"center-first",tileInfoView:this.tileStore.tileScheme,process:function(t,r){return e._fetchTile(t.dataTile,t.queryInfo,r)}}),this._updateQueue=new Q.default({tileInfoView:this.tileStore.tileScheme,process:function(t,r,i){return e._updateTile(t,r,i)}});var r=this.service,i=r.capabilities,n=r.source,u=r.objectIdField,a=r.spatialReference;this.sourceAdapter=Array.isArray(n)?new N(n,u):j.enablePBFQuery&&i.query.supportsFormatPBF?new A(n,a):new B(n,u,a),this.handles.add([this.watch("updating",(function(t){return!t&&e.onIdle()}))]),this.featureStore.events.on("valueRangesChanged",(function(t){e.remoteClient.invoke("emitEvent",{name:"valueRangesChanged",event:{valueRanges:t.valueRanges}})}))},t.prototype.destroy=function(){this._fetchQueue.clear(),this._patchQueue.clear(),this._updateQueue.clear(),this._editsQueue.destroy(),this.queryEngine.destroy(),this.sourceAdapter.destroy()},Object.defineProperty(t.prototype,"queryEngine",{get:function(){return this._createQueryEngine(this.featureStore)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.viewState||this._fetchQueue.updating||this._patchQueue.updating||this._updateQueue.updating||this._editsQueue.updating},enumerable:!0,configurable:!0}),t.prototype.update=function(e,t){return o(this,void 0,void 0,(function(){var r,i,n,o,u,a,l=this;return s(this,(function(s){switch(s.label){case 0:return this.validateConfig(e),r=JSON.stringify(this.config.filters),i=this.renderer.getAttributeHash(),n=e.availableFields.filter((function(e){return-1===l.availableFields.indexOf(e)})),o=this.config.definitionExpression,this._set("config",e),o!==this.config.definitionExpression&&this._set("queryEngine",this._createQueryEngine(this.featureStore)),[4,this.updatePixelBuffer()];case 1:return s.sent(),u=r!==JSON.stringify(e.filters),a=i!==this.renderer.getAttributeHash(),t?a?[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]:[3,3]:[3,6];case 2:s.sent(),s.label=3;case 3:return[4,this.attributeStore.updateFilters(this)];case 4:return s.sent(),[4,this.featureStore.update(u,e,this.service.fields)];case 5:return s.sent(),this.refresh(),[2];case 6:return n.length?[4,this._handleAttributeChange(n)]:[3,8];case 7:s.sent(),s.label=8;case 8:return"heatmap"===this.renderer.type?[2]:a?[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]:[3,10];case 9:s.sent(),this.featureStore.forEach((function(e){return l.attributeStore.setAttributeData(e.localId,e,l.geometryInfo,l.viewParams)})),s.label=10;case 10:return[4,this.attributeStore.updateFilters(this)];case 11:return s.sent(),[4,this.featureStore.update(u,e,this.service.fields)];case 12:return s.sent(),[4,this.attributeStore.sendUpdates()];case 13:return s.sent(),[2]}}))}))},t.prototype.invalidate=function(){return o(this,void 0,void 0,(function(){var e,t;return s(this,(function(r){for(e=0,t=this.tileStore.tiles;e<t.length;e++)this._updateQueue.push(t[e].id,Date.now());return[2]}))}))},t.prototype.onIdle=function(){this.featureStore.sweepClusters()},t.prototype.onEdits=function(e){var t=this;return this._fetchQueue.pause(),this._fetchQueue.reset(),this._editsQueue.push(e).then((function(){t._editsQueue.updating||t._fetchQueue.resume()}))},t.prototype.queryFeatures=function(e){return this.queryEngine.executeQuery(e)},t.prototype.queryFeatureCount=function(e){return this.queryEngine.executeQueryForCount(e)},t.prototype.queryObjectIds=function(e){return this.queryEngine.executeQueryForIds(e)},t.prototype.queryExtent=function(e){return this.queryEngine.executeQueryForExtent(e)},t.prototype.queryStatistics=function(){return o(this,void 0,void 0,(function(){var e,t,r,i=this;return s(this,(function(u){switch(u.label){case 0:return e=0,t=0,r=0,[4,d.all(this.tileStore.tiles.map((function(n){return o(i,void 0,void 0,(function(){var i,o,u,a,l,h,d,f;return s(this,(function(s){switch(s.label){case 0:return o={pixelBuffer:this._pixelBuffer,returnGeometry:(i=this.queryInfo).returnGeometry,returnCentroid:i.returnCentroid,returnOutline:this.returnOutline},u=c(),[4,this.featureStore.executeTileQuery(n,this.spatialReference,o)];case 1:for(a=s.sent().features,l=c(),r+=l-u,e+=a.length,h=0,d=a;h<d.length;h++)(f=d[h]).geometry&&(g.isPolygon(f.geometry)?t+=f.geometry.rings.reduce((function(e,t){return e+t.length}),0):g.isPolyline(f.geometry)&&(t+=f.geometry.paths.reduce((function(e,t){return e+t.length}),0)));return[2]}}))}))})))];case 1:return u.sent(),[2,n({},this.featureStore.storeStatistics,{displayedFeatureCount:e,displayedVertexCount:t,displayPreProcessTime:r})]}}))}))},t.prototype.refresh=function(){return o(this,void 0,void 0,(function(){var e=this;return s(this,(function(t){switch(t.label){case 0:return this._queryInfoHash=Math.random().toString(),this._dataTileIndex.clear(),this._fetchQueue.pause(),this._updateQueue.pause(),this._editsQueue.clear(),this._fetchQueue.clear(),[4,f.whenFalseOnce(this._fetchQueue,"updating")];case 1:return t.sent(),this._updateQueue.clear(),[4,f.whenFalseOnce(this._updateQueue,"updating")];case 2:return t.sent(),this.featureStore.startMarkingUsedFeatures(),this._manageTiles(this.tileStore.tiles),this._fetchQueue.resume(),[4,f.whenFalseOnce(this._fetchQueue,"updating")];case 3:return t.sent(),this.featureStore.sweep(),this.featureStore.forEach((function(t){return e.attributeStore.setAttributeData(t.localId,t,e.geometryInfo,e.viewParams)})),this.attributeStore.sendUpdates(),this._updateQueue.resume(),[2]}}))}))},t.prototype.setViewState=function(e){var t=this,r=this.viewState&&this.viewState.scale;this.inherited(arguments),this._fetchQueue.state=e,this._updateQueue.state=e,r!==this.viewState.scale&&this.attributeStore.hasScaleExpr&&(this.featureStore.forEach((function(e){return t.attributeStore.setAttributeData(e.localId,e,t.geometryInfo,t.viewParams)})),this.attributeStore.sendUpdates()),this.featureStore.setScale(this.viewState.scale)},t.prototype.getAggregate=function(e){return this.featureStore.getAggregate(e)},t.prototype.getAggregateValueRanges=function(){return this.featureStore.getAggregateValueRanges()},t.prototype.onTileUpdate=function(e){this._manageTiles(e.added,e.removed),this.featureStore.onTileUpdate(e)},t.prototype.onFeatureAdd=function(e){if(this._featuresInFlight.has(e.objectId)){var t=this._featuresInFlight.get(e.objectId).attributes;e.attributes=n({},t,e.attributes),this._featuresInFlight.delete(e.objectId)}e.localId=this.attributeStore.createLocalId(e.objectId),this.attributeStore.setAttributeData(e.localId,e,this.geometryInfo,this.viewParams)},t.prototype._handleAttributeChange=function(e){return o(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this._fetchChangedFields(e)];case 1:return t.sent(),[2]}}))}))},t.prototype._fetchChangedTileFields=function(e,t){return o(this,void 0,void 0,(function(){var r;return s(this,(function(i){return(r=this._dataTileIndex.get(e.id))?[2,this._fetchChangedTileFieldsDrill(r,t)]:[2]}))}))},t.prototype._fetchChangedTileFieldsDrill=function(e,t,r){return void 0===r&&(r=0),o(this,void 0,void 0,(function(){var i,o,u,a,l,h,c,f,p=this;return s(this,(function(s){switch(s.label){case 0:return i=n({},this.queryInfo,{returnGeometry:!1,returnCentroid:!1,outFields:t.concat([this.service.objectIdField])}),e.returnExceeded=e.returnExceeded||r>=j.maxDrillLevel,[4,this._patchQueue.push({key:e.key,dataTile:e,queryInfo:i})];case 1:return(o=s.sent()).exceededTransferLimit&&r<j.maxDrillLevel?(u=e.tile.createChildTiles(),a=u.map((function(t){var r=new S.default;return r.tile=t,r.displayTile=e.displayTile,r})),[4,d.all(a.map((function(e){return p._fetchChangedTileFieldsDrill(e,t,r+1)})))]):[3,3];case 2:return s.sent(),[2];case 3:for(l=0,h=o.features;l<h.length;l++)this.featureStore.has((c=h[l]).objectId)?(f=this.featureStore.getFeature(c.objectId)).attributes=n({},f.attributes,c.attributes):this._featuresInFlight.set(c.objectId,c);return[2]}}))}))},t.prototype._fetchChangedTileFieldsPaged=function(e,t,r){return void 0===r&&(r=0),o(this,void 0,void 0,(function(){var i,o,u,a,l,h,c;return s(this,(function(s){switch(s.label){case 0:return i=this.service.tileMaxRecordCount*(this.service.capabilities.query.supportsMaxRecordCountFactor?1:j.maxRecordCountFactor),o=n({},this.queryInfo,{returnGeometry:!1,returnCentroid:!1,outFields:t.concat([this.service.objectIdField]),resultOffset:r*i,num:i}),e.returnExceeded=!0,[4,this._patchQueue.push({key:e.key,dataTile:e,queryInfo:o})];case 1:for(u=s.sent(),a=0,l=u.features;a<l.length;a++)this.featureStore.has((h=l[a]).objectId)?(c=this.featureStore.getFeature(h.objectId)).attributes=n({},c.attributes,h.attributes):this._featuresInFlight.set(h.objectId,h);return u.exceededTransferLimit?[2,this._fetchChangedTileFieldsPaged(e,t,r+1)]:[2]}}))}))},t.prototype._fetchChangedFields=function(e){return o(this,void 0,void 0,(function(){var t,r=this;return s(this,(function(i){switch(i.label){case 0:return t=this.tileStore.tiles.map((function(t){return r._fetchChangedTileFields(t,e)})),[4,d.all(t)];case 1:return i.sent(),[2]}}))}))},t.prototype._manageTiles=function(e,t){void 0===t&&(t=null);for(var r=this._dataTileIndex,i=this._fetchQueue,n=this._updateQueue,s="esriGeometryPoint"===this.service.geometryType,o=function(e){var t=r.get(e.id);t?(t.displayTile=e,s?r.forEach((function(r){F.isChildOf(r,t)&&(r.displayTile=e)})):t.done=!1):((t=new S.default).tile=e.clone(),t.displayTile=e,r.add(t)),u._processDataTile(t)},u=this,a=0,l=e;a<l.length;a++)o(d=l[a]);if(t)for(var h=0,c=t;h<c.length;h++){var d=c[h];P.add(d),n.abort(d.id)}r.forEach((function(e){P.has(e.displayTile)&&G.push(e)}));for(var f=0,p=G;f<p.length;f++){var y=p[f];i.abort(y.id),r.delete(y)}G.length=0,P.clear()},t.prototype._processDataTile=function(e){var t=this,r=e.key,i=this._fetchQueue,n=r.id,s=this._queryInfoHash,o=r.level-e.displayTile.key.level>=j.maxDrillLevel;if(this._dataTileIndex.add(e),e.done||i.has(n)){if(e.queryInfoHash!==s||e.returnExceeded!==o)if(e.done)e.done=!1;else{if(!i.isOngoing(n))return e.queryInfoHash=s,void(e.returnExceeded=o);i.abort(n)}}else e.queryInfoHash=s,e.returnExceeded=o;e.done?this._invalidateTile(e.displayTile):i.has(n)||i.push(e).catch((function(r){d.isAbortError(r)||(q.error(new a("featurelayer-controller:tile-error","Encountered an error when handling tile response",r)),e.done=!0,t._invalidateTile(e.displayTile))}))},t.prototype._handleResponse=function(e,t){if(e.done=!0,v.hydrateOptimizedFeatureSet(t),t.exceededTransferLimit)if(e.returnExceeded)this._dataTileIndex.setTileFeatures(e,t.features),this._deleteChildrenDataTiles(e);else{for(var r=e.tile.createChildTiles(),i=0,n=r;i<n.length;i++){var s=n[i],o=new S.default;o.tile=s,o.displayTile=e.displayTile,this._processDataTile(o)}u.release(r)}else this._dataTileIndex.setTileFeatures(e,t.features),this._deleteChildrenDataTiles(e);this._invalidateTile(e.tile)},t.prototype._deleteChildrenDataTiles=function(e){this._dataTileIndex.forEach((function(t){F.isChildOf(t,e)&&G.push(t)}));for(var t=0,r=G;t<r.length;t++){var i=r[t];this._fetchQueue.abort(i.id),this._dataTileIndex.delete(i)}G.length=0},t.prototype._createQuery=function(e,t,r,i,n,s){var o=this.service.geometryType,u=this._createDefaultQuery(i);return u.maxRecordCountFactor=n,u.returnExceededLimitFeatures=s,u.resultType="tile",u.geometry=e,this.service.capabilities.query.supportsQuantization?(u.quantizationParameters=new T.default({mode:"view",originPosition:"upper-left",tolerance:r,extent:t}),"esriGeometryPolyline"===o&&(u.maxAllowableOffset=r)):"esriGeometryPolyline"!==o&&"esriGeometryPolygon"!==o||(u.maxAllowableOffset=r),u},t.prototype._fetchTile=function(e,t,r){return o(this,void 0,void 0,(function(){var i,n,o,u,a,l,h,c;return s(this,(function(s){switch(s.label){case 0:return i=new _({xmin:e.bounds[0],ymin:e.bounds[1],xmax:e.bounds[2],ymax:e.bounds[3],spatialReference:this.spatialReference}),u=this._createQuery(i,(o="esriGeometryPoint"===(n=this.service.geometryType)?e.tile:e.displayTile).extent,o.resolution,t,j.maxRecordCountFactor,e.returnExceeded),[4,this.sourceAdapter.executeQuery(u,r)];case 1:if((a=s.sent()).transform&&"esriGeometryPolygon"===n)for(l=0,h=a.features;l<h.length;l++)(c=h[l]).geometry=v.removeCollinearVectices(c.geometry,c.geometry,n,!1,!1);return[2,a]}}))}))},t.prototype._invalidateTile=function(e){for(var t=this._updateQueue,r=0,i=this.tileStore.intersections(e,this._pixelBuffer);r<i.length;r++){var n=i[r].tile;t.push(n.id,n.updateTimestamp)}},t.prototype._updateTile=function(e,t,r){return o(this,void 0,void 0,(function(){var i,n,o,u,a,l,h,c,f=this;return s(this,(function(s){switch(s.label){case 0:return i=this.tileStore.get(e),[4,this.featureStore.executeTileQuery(i,this.spatialReference,{pixelBuffer:this._pixelBuffer,returnGeometry:(n=this.queryInfo).returnGeometry,returnCentroid:n.returnCentroid,returnOutline:this.returnOutline})];case 1:return o=s.sent(),u=o.features,a=o.objectIds,[4,this.attributeStore.sendUpdates()];case 2:return s.sent(),l={geometryType:this.service.geometryType,features:u,fields:this.service.fields,objectIdFieldName:this.service.objectIdField,transform:i.transform},h=[],c=!0,this._dataTileIndex.forEach((function(e){i.id!==e.id&&F.isChildOf(e,i)&&c&&!e.done&&(c=!1)})),c&&i&&i.objectIds.forEach((function(e){if(!a.has(e)){var t=f.attributeStore.getLocalId(e);h.push(t)}})),a.forEach((function(e){i.objectIds.add(e)})),i.updateTimestamp=t,[2,this.processor.onTileData(i,{clear:!0,addOrUpdate:l.features,remove:h,transformParams:m.Utils.getTransformParams(l)},r).catch((function(e){d.isAbortError(e)||q.error("update-tile",e)}))]}}))}))},t.prototype._processEdits=function(e,t,r){return o(this,void 0,void 0,(function(){var i,u,a,l,h,c=this;return s(this,(function(f){switch(f.label){case 0:return i=this._createTempQueryEngine(),u=this._createObjectIdsQuery(e),e.length?[4,this.sourceAdapter.executeQuery(u)]:[3,2];case 1:a=f.sent(),v.hydrateOptimizedFeatureSet(a),this._dataTileIndex.addOrUpdateFeatures(a.features),i.featureStore.addMany(a.features),f.label=2;case 2:return l=t.concat(e).map((function(e){return c.attributeStore.getLocalId(e)})),this._dataTileIndex.deleteFeaturesById(t),this.attributeStore.sendUpdates(),h=n({},this.queryInfo,{pixelBuffer:this._pixelBuffer,returnOutline:this.returnOutline}),this.tileStore.tiles.map((function(e){return o(c,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:return[4,i.featureStore.executeTileQuery(e,this.spatialReference,h)];case 1:return t=n.sent().features,[2,this.processor.onTileData(e,{addOrUpdate:t,remove:l,transformParams:{transform:e.transform,hasZ:!1,hasM:!1}},r).catch((function(e){d.isAbortError(e)||q.error("update-tile",e)}))]}}))}))})),i.destroy(),[2]}}))}))},t.prototype._createObjectIdsQuery=function(e){var t=this._createDefaultQuery(this.queryInfo);return t.objectIds=e,t},i([y.property()],t.prototype,"_fetchQueue",void 0),i([y.property()],t.prototype,"_patchQueue",void 0),i([y.property()],t.prototype,"_updateQueue",void 0),i([y.property()],t.prototype,"_editsQueue",void 0),i([y.property({readOnly:!0})],t.prototype,"featureStore",void 0),i([y.property({constructOnly:!0})],t.prototype,"service",void 0),i([y.property()],t.prototype,"sourceAdapter",void 0),i([y.property({readOnly:!0,dependsOn:["featureStore","service"]})],t.prototype,"queryEngine",null),i([y.property({dependsOn:["viewState","_fetchQueue.updating","_updateQueue.updating","_patchQueue.updating","_editsQueue.updating"]})],t.prototype,"updating",null),i([y.subclass("esri.views.2d.layers.features.controllers.OnDemandController")],t)}(y.declared(I.default));t.default=k}).apply(null,i))||(e.exports=n)}}]);