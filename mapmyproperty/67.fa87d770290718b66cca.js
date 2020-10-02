(function(){var e={"esri/layers/ogc/ogcFeatureUtils":"GI9R","esri/views/2d/layers/features/support/DataTile":"KgG2","esri/core/SetPool":"L6z/","esri/views/2d/layers/features/support/DataTileFeaturesIndex":"W1uT","esri/views/2d/layers/features/controllers/EditsQueue":"ak1O","esri/views/2d/layers/features/support/TileUpdateQueue":"sOkP","esri/views/2d/layers/features/controllers/OnDemandController":"uqzM"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{GI9R:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("zp6E"),r("KY0m"),r("ma1f"),r("qsST"),r("nrlZ"),r("+6sX"),r("xJgq"),r("Q2Em"),r("Q2Em"),r("9K5t"),r("DaHD"),r("I90O"),r("Q3lp"),r("w1v0")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,d,c,h,f,p,_,y){Object.defineProperty(t,"__esModule",{value:!0});var g=s.getLogger("esri.layers.graphics.sources.ogcfeature");function v(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,m(e,t,i)];case 1:return n=r.sent(),[2,u.convertToFeatureSet(n)]}}))}))}function m(e,t,n){var o;return r.__awaiter(this,void 0,void 0,(function(){var s,f,p,_,y,g,v,m,b,T,I,w,F,S,x,q,O,E,Q,j,C,P,G,k,N,D,R,B,M,A;return r.__generator(this,(function(z){switch(z.label){case 0:return s=e.capabilities.query.maxRecordCount,f=e.layerDefinition,p=e.url+"/collections/"+e.collectionId+"/items",_=t.num,y=t.outSpatialReference,g=t.start,v=t.timeExtent,m=t.where,b=c.project(t.geometry,a.WGS84),T=function(e){return e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:null}(b),I=function(e){if(!e)return null;var t=e.start,r=e.end;return(t?t.toISOString():"..")+"/"+(r?r.toISOString():"..")}(v),w=function(e){return e&&"1=1"!==e?e:null}(m),F=null!=g?g:0,S=null!=_?_:null!=g&&void 0!==g?10:s,[4,i(p,r.__assign(r.__assign({},n),{query:{bbox:T,datetime:I,query:w,limit:S,startindex:F,f:"application/geo+json"}}))];case 1:if(x=z.sent().data,q=null===(o=x.links)||void 0===o?void 0:o.filter((function(e){return"next"===e.rel})),O=0!==(null==q?void 0:q.length),E=f.fields,Q=f.globalIdField,j=f.hasM,k=h.createOptimizedFeatures(x,{geometryType:G=f.geometryType,hasZ:C=f.hasZ,objectIdFieldName:P=f.objectIdField}),!a.equals(y,a.WGS84))for(N=0,D=k;N<D.length;N++)(M=D[N]).geometry&&(M.geometry=u.convertFromGeometry(d.project(u.convertToGeometry(M.geometry,G,C,!1),a.WGS84,y)));for(R=0,B=k;R<B.length;R++)(M=B[R]).objectId=M.attributes[P];return(A=new l.default).exceededTransferLimit=O,A.features=k,A.fields=E,A.geometryType=G,A.globalIdFieldName=Q,A.hasM=j,A.hasZ=C,A.objectIdFieldName=P,A.spatialReference=y||a.WGS84,[2,A]}}))}))}t.getCollectionDefinition=function(e,t,s,u,l){return void 0===l&&(l=5),r.__awaiter(this,void 0,void 0,(function(){var c,y,v,m,b,T,I,w,F,S,x,q,O,E,Q;return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,d.checkProjectionSupport(a.WGS84,s.spatialReference)];case 1:return r.sent(),[3,3];case 2:throw r.sent(),new o("ogc-feature-layer:projection-not-supported","Projection not supported");case 3:return[4,i(e+"/collections/"+t+"/items",{signal:u,query:{limit:l,f:"application/geo+json"}})];case 4:return c=r.sent().data,[4,h.validateGeoJSON(c)];case 5:if(r.sent(),y=h.inferLayerProperties(c,{geometryType:s.geometryType}),m=null!=s.hasZ?s.hasZ:y.hasZ,b=y.geometryType,T=s.objectIdField||y.objectIdFieldName||"OBJECTID",I=s.timeInfo,w=n.find(v=s.fields||y.fields||[],(function(e){return e.name===T})))w.type="esriFieldTypeOID",w.editable=!1,w.nullable=!1;else{if(!y.objectIdFieldType)throw new o("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");v.unshift({name:T,alias:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(T!==y.objectIdFieldName&&(x=n.find(v,(function(e){return e.name===y.objectIdFieldName})))&&(x.type="esriFieldTypeInteger"),!b)throw new o("ogc-feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");for(v===y.fields&&y.unknownFields.length>0&&g.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:y.unknownFields}}),F=0,S=v;F<S.length;F++){if(null==(x=S[F]).name&&(x.name=x.alias),null==x.alias&&(x.alias=x.name),"esriFieldTypeOID"!==x.type&&"esriFieldTypeGlobalID"!==x.type&&(x.editable=null==x.editable||!!x.editable,x.nullable=null==x.nullable||!!x.nullable),!x.name)throw new o("ogc-feature-layer:invalid-field-name","field name is missing",{field:x});if(-1===_.kebabDict.jsonValues.indexOf(x.type))throw new o("ogc-feature-layer:invalid-field-type",'invalid type for field "'+x.name+'"',{field:x})}return I&&(q=new p(v),I.startTimeField&&((O=q.get(I.startTimeField))?(I.startTimeField=O.name,O.type="esriFieldTypeDate"):I.startTimeField=null),I.endTimeField&&((E=q.get(I.endTimeField))?(I.endTimeField=E.name,E.type="esriFieldTypeDate"):I.endTimeField=null),I.trackIdField&&((Q=q.get(I.trackIdField))?I.trackIdField=Q.name:(I.trackIdField=null,g.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:I}}))),I.startTimeField||I.endTimeField||(g.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:I}}),I=null)),[2,{drawingInfo:f.createDrawingInfo(b),geometryType:b,fields:v,hasZ:!!m,objectIdField:T,timeInfo:I}]}}))}))},t.getServerCollection=function(e,t,n,o){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,i(e+"/collections/"+t,{signal:o,query:{f:n}})];case 1:return[2,r.sent().data]}}))}))},t.getServerCollections=function(e,t,n){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,i(e+"/collections",{signal:n,query:{f:t}})];case 1:return[2,r.sent().data]}}))}))},t.getServerConformance=function(e,t,n){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,i(e+"/conformance",{signal:n,query:{f:t}})];case 1:return[2,r.sent().data]}}))}))},t.getServerLandingPage=function(e,t,n){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,i(e,{signal:n,query:{f:t}})];case 1:return[2,r.sent().data]}}))}))},t.queryFeatureSet=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,v(e,t,i)];case 1:return n=r.sent(),[2,y.fromJSON(n)]}}))}))},t.queryFeatureSetJSON=v,t.queryOptimizedFeatureSet=m}).apply(null,i))||(e.exports=n)},KgG2:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.displayTile=null,this.tile=null,this.done=!1,this.queryInfoHash=null,this.returnExceeded=!1}return Object.defineProperty(e.prototype,"key",{get:function(){return this.tile.key},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.tile.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bounds",{get:function(){return this.tile.bounds},enumerable:!0,configurable:!0}),e}();t.default=r}).apply(null,i))||(e.exports=n)},"L6z/":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._pool=[],this._set=new Set}return e.prototype.acquire=function(){if(0===this._pool.length)return new Set;var e=this._pool.pop();return this._set.delete(e),e},e.prototype.release=function(e){e&&!this._set.has(e)&&(e.clear(),this._pool.length<5e4&&(this._pool.push(e),this._set.add(e)))},e.acquire=function(){return i.acquire()},e.release=function(e){return i.release(e)},e}();t.default=r;var i=new r}).apply(null,i))||(e.exports=n)},W1uT:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("L6z/"),r("rfv1"),r("fUL3")],void 0===(n=(function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0});var o=[],s=new Set,a=function(){function e(){this._tileById=new Map,this._tilesToFeatures=new Map,this._featureToTiles=new Map}return e.prototype.destroy=function(){this.clear()},e.prototype.add=function(e){var t=this;if(!this.has(e.id)){var i=e;this._tileById.set(i.id,i),this._tilesToFeatures.set(i,r.default.acquire()),this._tilesToFeatures.forEach((function(e,r){i!==r&&(n.isParentOf(i,r)?e.forEach((function(e){t._link(i,e)})):n.isChildOf(i,r)&&t.featureStore.forEachInBounds(i.bounds,(function(r){e.has(r.objectId)&&t._link(i,r.objectId)})))}))}},e.prototype.clear=function(){this._tilesToFeatures.forEach((function(e){return r.default.release(e)})),this._tilesToFeatures.clear(),this._featureToTiles.forEach((function(e){return r.default.release(e)})),this._featureToTiles.clear(),this._tileById.clear()},e.prototype.delete=function(e){var t=this,r=this.get(e.id);o.length=0,this._tilesToFeatures.get(r).forEach((function(e){var i=t._featureToTiles.get(e);i.has(r)&&1===i.size?o.push(e):t._unlink(r,e)}));for(var i=0,n=o;i<n.length;i++)this._unlink(r,n[i]);this.featureStore.removeManyById(o),this._tilesToFeatures.delete(r),this._tileById.delete(r.id),o.length=0},e.prototype.forEach=function(e,t){return this._tileById.forEach(e,t)},e.prototype.get=function(e){return this._tileById.get(e)},e.prototype.has=function(e){return this._tileById.has(e)},e.prototype.setTileFeatures=function(e,t){var i=this,n=this.get(e.id);this._tilesToFeatures.has(n)||(this._tileById.set(n.id,n),this._tilesToFeatures.set(n,r.default.acquire()));for(var a=0,u=t;a<u.length;a++)s.add(u[a].objectId);o.length=0,this._tilesToFeatures.get(n).forEach((function(e){if(!s.has(e)){var t=i._featureToTiles.get(e);t.has(n)&&1===t.size?o.push(e):i._unlink(n,e)}}));for(var l=0,d=o;l<d.length;l++)this._unlink(n,d[l]);this.featureStore.removeManyById(o),this.featureStore.addMany(t),s.forEach((function(e){i._link(n,e)})),s.clear(),o.length=0},e.prototype.addOrUpdateFeatures=function(e){for(var t=this,r=new Set,n=new i.default({geometryType:this.featureStore.geometryType,hasM:this.featureStore.hasM,hasZ:this.featureStore.hasZ}),o=0,s=this.deleteFeaturesById(e.map((function(e){return e.objectId})));o<s.length;o++)r.add(s[o]);n.addMany(e),this._tileById.forEach((function(e){n.forEachInBounds(e.bounds,(function(i){t._link(e,i.objectId),r.add(e)}))})),this.featureStore.addMany(e);var a=[];return r.forEach((function(e){return a.push(e)})),a},e.prototype.deleteFeaturesById=function(e){for(var t=this,i=new Set,n=function(e){var n=o._featureToTiles.get(e);n&&(n.forEach((function(r){i.add(r),t._tilesToFeatures.get(r).delete(e)})),r.default.release(n),o._featureToTiles.delete(e))},o=this,s=0,a=e;s<a.length;s++)n(a[s]);this.featureStore.removeManyById(e);var u=[];return i.forEach((function(e){return u.push(e)})),u},e.prototype._link=function(e,t){this._featureToTiles.get(t)||this._featureToTiles.set(t,r.default.acquire()),this._featureToTiles.get(t).add(e),this._tilesToFeatures.get(e).add(t)},e.prototype._unlink=function(e,t){this._featureToTiles.get(t).delete(e),this._tilesToFeatures.get(e).delete(t),0===this._featureToTiles.get(t).size&&(r.default.release(this._featureToTiles.get(t)),this._featureToTiles.delete(t))},e}();t.default=a}).apply(null,i))||(e.exports=n)},ak1O:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("qMld"),r("Vx27"),r("2Kdy")],void 0===(n=(function(e,t,r,i,n,o){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var r=e.call(this,t)||this;return r._queue=[],r._onGoingRequest=null,r._abortController=n.createAbortController(),r}return r.__extends(t,e),t.prototype.destroy=function(){this.clear()},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.destroyed&&(this._queue.length>0||null!=this._onGoingRequest)},enumerable:!0,configurable:!0}),t.prototype.clear=function(){if(this.destroyed)throw new Error("instance is already destroyed");for(var e=this._queue.pop();e;)e.resolver.reject(n.createAbortError()),e=this._queue.pop();this._queue.length=0,this._abortController.abort(),this._abortController=n.createAbortController()},t.prototype.push=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i=this;return r.__generator(this,(function(r){if(this.destroyed)throw new Error("instance is already destroyed");return t=n.createResolver(),this._queue.push({event:e,resolver:t}),this.notifyChange("updating"),Promise.resolve().then((function(){i._processNext()})),[2,t.promise]}))}))},t.prototype._processNext=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,i,n,o,s,a,u,l,d,c,h,f,p,_,y,g,v,m,b,T,I=this;return r.__generator(this,(function(r){switch(r.label){case 0:if(this._onGoingRequest)return[2];for(e=[],t=new Set,i=new Set,n=new Set,o=this._queue.shift();o;){for(a=(s=o.event).addedFeatures,u=s.deletedFeatures,l=s.updatedFeatures,e.push(o.resolver),d=0,c=a;d<c.length;d++)m=(h=c[d]).objectId,h.error||(t.add(m),i.add(m),n.delete(m));for(f=0,p=l;f<p.length;f++)m=(_=p[f]).objectId,_.error||(i.add(m),n.delete(m));for(y=0,g=u;y<g.length;y++)m=(v=g[y]).objectId,v.error||(t.has(m)?t.delete(m):n.add(m),i.delete(m));o=this._queue.shift()}return i.size||n.size?(b=[],T=[],i.size&&i.forEach((function(e){b.push(e)})),n.size&&n.forEach((function(e){T.push(e)})),this._onGoingRequest=Promise.resolve().then((function(){return I.processEdits(b,T,{signal:I._abortController.signal})})).catch((function(){})),this.notifyChange("updating"),[4,this._onGoingRequest]):(this.notifyChange("updating"),e.forEach((function(e){return e()})),[2]);case 1:return r.sent(),this._onGoingRequest=null,this.notifyChange("updating"),e.forEach((function(e){return e()})),this._queue.length>0&&this._processNext(),[2]}}))}))},r.__decorate([o.property({constructOnly:!0})],t.prototype,"processEdits",void 0),r.__decorate([o.property({readOnly:!0})],t.prototype,"updating",null),r.__decorate([o.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],t)}(i);t.EditsQueue=s}).apply(null,i))||(e.exports=n)},sOkP:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("qMld"),r("afW+"),r("Vx27"),r("W9tT"),r("ked+")],void 0===(n=(function(e,t,r,i,n,o,s,a,u){Object.defineProperty(t,"__esModule",{value:!0});var l=[0,0],d=function(e){function t(t){var r=e.call(this,t)||this;return r._queue=new Map,r._isPaused=!1,r._scheduledNextHandle=null,r._timestamp=Date.now(),r.tileInfoView=null,r._next=r._next.bind(r),r._finalize=r._finalize.bind(r),r}return r.__extends(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._queue.size>0||null!=this._onGoingTile},enumerable:!0,configurable:!0}),t.prototype.abort=function(e){this._onGoingTile&&this._onGoingTile.tileId===e&&(this._onGoingTile.abortController.abort(),this._onGoingTile=null),this._queue.delete(e),this._scheduleNext(),this.notifyChange("updating")},t.prototype.clear=function(){this._queue.clear(),this._onGoingTile&&(this._onGoingTile.abortController.abort(),this._onGoingTile=null),this._cancelNext(),this.notifyChange("updating")},t.prototype.has=function(e){return this._queue.has(e)},t.prototype.isOngoing=function(e){return this._onGoingTile&&this._onGoingTile.tileId===e},t.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},t.prototype.push=function(e,t){if(!this._queue.has(e)){var r=n.createAbortController();this._queue.set(e,{tileId:e,key:u.TileKey.pool.acquire(e),timestamp:t||this._timestamp,abortController:r}),this._scheduleNext(),this.notifyChange("updating")}},t.prototype.refresh=function(){this._timestamp=Date.now(),this.reset()},t.prototype.reset=function(){var e=this._onGoingTile;e&&this.push(e.tileId,this._timestamp),this.notifyChange("updating")},t.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext()),this.notifyChange("updating")},t.prototype._finalize=function(){this._onGoingTile=null,this.notifyChange("updating"),this._scheduleNext()},t.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},t.prototype._scheduleNext=function(){this._isPaused||this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingTile||(this._scheduledNextHandle=o.schedule(this._next))},t.prototype._next=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,i,n;return r.__generator(this,(function(r){switch(r.label){case 0:if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingTile)return this._scheduledNextHandle=null,[2];if(this._scheduledNextHandle=null,e=this._peek(),t=e.abortController.signal,i=e.tileId,u.TileKey.pool.release(e.key),this._queue.delete(i),this._onGoingTile=e,n=this.process(i,this._timestamp,{signal:t}),this.notifyChange("updating"),!function(e){return e&&"function"==typeof e.then}(n))return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,n];case 2:case 3:return r.sent(),[3,4];case 4:return this._finalize(),[2]}}))}))},t.prototype._peek=function(){var e=this;if(!this.state)throw new Error("state not set");var t=this.tileInfoView,r=this.state.center,i=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,o=null;return this._queue.forEach((function(s){t.getTileCoords(l,s.key);var u=e._timestamp-s.timestamp;if(isNaN(u))(d=a.vec2.distance(l,r))<n&&(n=d,o=s);else if(u===i){var d;(d=a.vec2.distance(l,r))<n&&(n=d,o=s)}else u>i&&(i=u,n=Number.POSITIVE_INFINITY,o=s)})),o},r.__decorate([s.property({readOnly:!0})],t.prototype,"length",null),r.__decorate([s.property({constructOnly:!0})],t.prototype,"process",void 0),r.__decorate([s.property()],t.prototype,"state",void 0),r.__decorate([s.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),r.__decorate([s.property({readOnly:!0})],t.prototype,"updating",null),r.__decorate([s.subclass("esri.views.2d.layers.features.support.TileUpdateQueue")],t)}(i);t.default=d}).apply(null,i))||(e.exports=n)},uqzM:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("QVms"),r("ma1f"),r("H1tY"),r("qsST"),r("qMld"),r("8MXS"),r("8V7H"),r("Vx27"),r("N7S/"),r("Lzvl"),r("+6sX"),r("GI9R"),r("B16N"),r("lAK8"),r("YaB4"),r("Btct"),r("ak1O"),r("KgG2"),r("W1uT"),r("fUL3"),r("sOkP"),r("EBSo")],void 0===(n=(function(e,t,r,i,n,o,s,a,u,l,d,c,h,f,p,_,y,g,v,m,b,T,I,w,F){Object.defineProperty(t,"__esModule",{value:!0});var S=s.getLogger("esri.views.2d.layers.features.controllers.OnDemandController"),x=o("esri-featurelayer-webgl"),q=o("esri-mobile"),O={maxDrillLevel:x&&"object"==typeof x&&null!=x.maxDrillLevel?x.maxDrillLevel:q?1:4,maxRecordCountFactor:x&&"object"==typeof x&&null!=x.maxRecordCountFactor?x.maxRecordCountFactor:q?1:3,enablePBFQuery:!x||"object"!=typeof x||null==x.enablePBFQuery||x.enablePBFQuery},E=new Set,Q=[],j=function(){function e(e,t){var r=this;this.objectIdField=t,l.openWithPorts(e).then((function(e){return r.client=e}))}return e.prototype.destroy=function(){this.client.close(),this.client=null},e.prototype.executeQuery=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this.client.invoke("queryFeatures",e.toJSON(),t)];case 1:return i=r.sent(),[2,f.convertFromFeatureSet(i,this.objectIdField)]}}))}))},e}(),C=function(){function e(e,t){this.source=e,this.sourceSpatialReference=t}return e.prototype.destroy=function(){},e.prototype.executeQuery=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,_.executeQueryPBF(this.source,e,{type:"optimized",sourceSpatialReference:this.sourceSpatialReference},t)];case 1:return[2,r.sent().data]}}))}))},e}(),P=function(){function e(e,t,r){this.source=e,this.objectIdField=t,this.sourceSpatialReference=r}return e.prototype.destroy=function(){},e.prototype.executeQuery=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,_.executeQuery(this.source,e,this.sourceSpatialReference,t)];case 1:return i=r.sent().data,[2,f.convertFromFeatureSet(i,this.objectIdField)]}}))}))},e}(),G=function(){function e(e,t){this.source=e,this.objectIdField=t}return e.prototype.destroy=function(){},e.prototype.executeQuery=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,p.queryOptimizedFeatureSet(this.source,e,t)]}))}))},e}(),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="on-demand",t._queryInfoHash=null,t._dataTileIndex=new T.default,t._editsQueue=new m.EditsQueue({processEdits:t._processEdits.bind(t)}),t._featuresInFlight=new Map,t.service=null,t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this,t=this._createFeatureStore();t.onFeatureAdd=this.onFeatureAdd.bind(this),t.onFeatureRemove=this.onFeatureRemove.bind(this),this._set("featureStore",t),this._dataTileIndex.featureStore=this.featureStore,this._dataTileIndex.forEach((function(e){return e.done=!1})),this._fetchQueue=new F({concurrency:10,strategy:"center-first",tileInfoView:this.tileStore.tileScheme,process:function(t,i){return r.__awaiter(e,void 0,void 0,(function(){var e;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this._fetchTile(t,this.queryInfo,i)];case 1:return e=r.sent(),[2,{dataTile:t,featureSet:e}]}}))}))}}),this._patchQueue=new F({concurrency:10,strategy:"center-first",tileInfoView:this.tileStore.tileScheme,process:function(t,r){return e._fetchTile(t.dataTile,t.queryInfo,r)}}),this._updateQueue=new w.default({tileInfoView:this.tileStore.tileScheme,process:function(t,r,i){return e._updateTile(t,r,i)}});var i,n=this.service,o=n.capabilities,s=n.source,a=n.objectIdField,u=n.spatialReference;this.sourceAdapter=(i=s)&&i.capabilities&&i.collectionId&&i.layerDefinition&&i.url?new G(s,a):Array.isArray(s)?new j(s,a):O.enablePBFQuery&&o.query.supportsFormatPBF?new C(s,u):new P(s,a,u),this.handles.add([this.watch("updating",(function(t){return!t&&e.onIdle()}))]),this.featureStore.events.on("valueRangesChanged",(function(t){e.remoteClient.invoke("emitEvent",{name:"valueRangesChanged",event:{valueRanges:t.valueRanges}})}))},t.prototype.destroy=function(){this._fetchQueue.clear(),this._patchQueue.clear(),this._updateQueue.clear(),this._editsQueue.destroy(),this.queryEngine.destroy(),this.sourceAdapter.destroy()},Object.defineProperty(t.prototype,"queryEngine",{get:function(){return this._createQueryEngine(this.featureStore)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.viewState||this._fetchQueue.updating||this._patchQueue.updating||this._updateQueue.updating||this._editsQueue.updating},enumerable:!0,configurable:!0}),t.prototype.update=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,n,o,s,a,u,l=this;return r.__generator(this,(function(r){switch(r.label){case 0:return this.validateConfig(e),i=JSON.stringify(this.config.filters),n=this.renderer.getAttributeHash(),o=e.availableFields.filter((function(e){return-1===l.availableFields.indexOf(e)})),s=this.config.definitionExpression,this._set("config",e),s!==this.config.definitionExpression&&this._set("queryEngine",this._createQueryEngine(this.featureStore)),[4,this.updatePixelBuffer()];case 1:return r.sent(),a=i!==JSON.stringify(e.filters),u=n!==this.renderer.getAttributeHash(),t?u?[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]:[3,3]:[3,6];case 2:r.sent(),r.label=3;case 3:return[4,this.attributeStore.updateFilters(this)];case 4:return r.sent(),[4,this.featureStore.update(a,e,this.service.fields)];case 5:return r.sent(),this.refresh(),[2];case 6:return o.length?[4,this._handleAttributeChange(o)]:[3,8];case 7:r.sent(),r.label=8;case 8:return"heatmap"===this.renderer.type?[2]:u?[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]:[3,10];case 9:r.sent(),this.featureStore.forEach((function(e){return l.attributeStore.setAttributeData(e.localId,e,l.geometryInfo,l.viewParams)})),r.label=10;case 10:return[4,this.attributeStore.updateFilters(this)];case 11:return r.sent(),[4,this.featureStore.update(a,e,this.service.fields)];case 12:return r.sent(),[4,this.attributeStore.sendUpdates()];case 13:return r.sent(),[2]}}))}))},t.prototype.invalidate=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t;return r.__generator(this,(function(r){for(e=0,t=this.tileStore.tiles;e<t.length;e++)this._updateQueue.push(t[e].id,Date.now());return[2]}))}))},t.prototype.onIdle=function(){this.featureStore.sweepClusters()},t.prototype.onEdits=function(e){var t=this;return this._fetchQueue.pause(),this._fetchQueue.reset(),this._editsQueue.push(e).then((function(){t._editsQueue.updating||t._fetchQueue.resume()}))},t.prototype.queryFeatures=function(e){return this.queryEngine.executeQuery(e)},t.prototype.queryFeatureCount=function(e){return this.queryEngine.executeQueryForCount(e)},t.prototype.queryObjectIds=function(e){return this.queryEngine.executeQueryForIds(e)},t.prototype.queryExtent=function(e){return this.queryEngine.executeQueryForExtent(e)},t.prototype.queryStatistics=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,i,n=this;return r.__generator(this,(function(o){switch(o.label){case 0:return e=0,t=0,i=0,[4,a.all(this.tileStore.tiles.map((function(o){return r.__awaiter(n,void 0,void 0,(function(){var n,s,a,u,l,d,c,f;return r.__generator(this,(function(r){switch(r.label){case 0:return s={pixelBuffer:this._pixelBuffer,returnGeometry:(n=this.queryInfo).returnGeometry,returnCentroid:n.returnCentroid,returnOutline:this.returnOutline},a=performance.now(),[4,this.featureStore.executeTileQuery(o,this.spatialReference,s)];case 1:for(u=r.sent().features,l=performance.now(),i+=l-a,e+=u.length,d=0,c=u;d<c.length;d++)(f=c[d]).geometry&&(h.isPolygon(f.geometry)?t+=f.geometry.rings.reduce((function(e,t){return e+t.length}),0):h.isPolyline(f.geometry)&&(t+=f.geometry.paths.reduce((function(e,t){return e+t.length}),0)));return[2]}}))}))})))];case 1:return o.sent(),[2,r.__assign(r.__assign({},this.featureStore.storeStatistics),{displayedFeatureCount:e,displayedVertexCount:t,displayPreProcessTime:i})]}}))}))},t.prototype.refresh=function(){return r.__awaiter(this,void 0,void 0,(function(){var e=this;return r.__generator(this,(function(t){switch(t.label){case 0:return this._queryInfoHash=Math.random().toString(),this._dataTileIndex.clear(),this._fetchQueue.pause(),this._updateQueue.pause(),this._editsQueue.clear(),this._fetchQueue.clear(),[4,u.whenFalseOnce(this._fetchQueue,"updating")];case 1:return t.sent(),this._updateQueue.clear(),[4,u.whenFalseOnce(this._updateQueue,"updating")];case 2:return t.sent(),this.featureStore.startMarkingUsedFeatures(),this._manageTiles(this.tileStore.tiles),this._fetchQueue.resume(),[4,u.whenFalseOnce(this._fetchQueue,"updating")];case 3:return t.sent(),this.featureStore.sweep(),this.featureStore.forEach((function(t){return e.attributeStore.setAttributeData(t.localId,t,e.geometryInfo,e.viewParams)})),this.attributeStore.sendUpdates(),this._updateQueue.resume(),[2]}}))}))},t.prototype.setViewState=function(t){var r=this,i=this.viewState&&this.viewState.scale;e.prototype.setViewState.call(this,t),this._fetchQueue.state=t,this._updateQueue.state=t,i!==this.viewState.scale&&this.attributeStore.hasScaleExpr&&(this.featureStore.forEach((function(e){return r.attributeStore.setAttributeData(e.localId,e,r.geometryInfo,r.viewParams)})),this.attributeStore.sendUpdates()),this.featureStore.setScale(this.viewState.scale)},t.prototype.getAggregate=function(e){return this.featureStore.getAggregate(e)},t.prototype.getAggregateValueRanges=function(){return this.featureStore.getAggregateValueRanges()},t.prototype.onTileUpdate=function(e){this._manageTiles(e.added,e.removed),this.featureStore.onTileUpdate(e)},t.prototype.onFeatureAdd=function(e){if(this._featuresInFlight.has(e.objectId)){var t=this._featuresInFlight.get(e.objectId).attributes;e.attributes=r.__assign(r.__assign({},t),e.attributes),this._featuresInFlight.delete(e.objectId)}e.localId=this.attributeStore.createLocalId(e.objectId),this.attributeStore.setAttributeData(e.localId,e,this.geometryInfo,this.viewParams)},t.prototype._handleAttributeChange=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return[4,this._fetchChangedFields(e)];case 1:return t.sent(),[2]}}))}))},t.prototype._fetchChangedTileFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i;return r.__generator(this,(function(r){return(i=this._dataTileIndex.get(e.id))?[2,this._fetchChangedTileFieldsDrill(i,t)]:[2]}))}))},t.prototype._fetchChangedTileFieldsDrill=function(e,t,i){return void 0===i&&(i=0),r.__awaiter(this,void 0,void 0,(function(){var n,o,s,u,l,d,c,h,f=this;return r.__generator(this,(function(p){switch(p.label){case 0:return n=r.__assign(r.__assign({},this.queryInfo),{returnGeometry:!1,returnCentroid:!1,outFields:t.concat([this.service.objectIdField])}),e.returnExceeded=e.returnExceeded||i>=O.maxDrillLevel,[4,this._patchQueue.push({key:e.key,dataTile:e,queryInfo:n})];case 1:return(o=p.sent()).exceededTransferLimit&&i<O.maxDrillLevel?(s=e.tile.createChildTiles(),u=s.map((function(t){var r=new b.default;return r.tile=t,r.displayTile=e.displayTile,r})),[4,a.all(u.map((function(e){return f._fetchChangedTileFieldsDrill(e,t,i+1)})))]):[3,3];case 2:return p.sent(),[2];case 3:for(l=0,d=o.features;l<d.length;l++)this.featureStore.has((c=d[l]).objectId)?(h=this.featureStore.getFeature(c.objectId)).attributes=r.__assign(r.__assign({},h.attributes),c.attributes):this._featuresInFlight.set(c.objectId,c);return[2]}}))}))},t.prototype._fetchChangedTileFieldsPaged=function(e,t,i){return void 0===i&&(i=0),r.__awaiter(this,void 0,void 0,(function(){var n,o,s,a,u,l,d;return r.__generator(this,(function(c){switch(c.label){case 0:return n=this.service.tileMaxRecordCount*(this.service.capabilities.query.supportsMaxRecordCountFactor?1:O.maxRecordCountFactor),o=r.__assign(r.__assign({},this.queryInfo),{returnGeometry:!1,returnCentroid:!1,outFields:t.concat([this.service.objectIdField]),resultOffset:i*n,num:n}),e.returnExceeded=!0,[4,this._patchQueue.push({key:e.key,dataTile:e,queryInfo:o})];case 1:for(s=c.sent(),a=0,u=s.features;a<u.length;a++)this.featureStore.has((l=u[a]).objectId)?(d=this.featureStore.getFeature(l.objectId)).attributes=r.__assign(r.__assign({},d.attributes),l.attributes):this._featuresInFlight.set(l.objectId,l);return s.exceededTransferLimit?[2,this._fetchChangedTileFieldsPaged(e,t,i+1)]:[2]}}))}))},t.prototype._fetchChangedFields=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i=this;return r.__generator(this,(function(r){switch(r.label){case 0:return t=this.tileStore.tiles.map((function(t){return i._fetchChangedTileFields(t,e)})),[4,a.all(t)];case 1:return r.sent(),[2]}}))}))},t.prototype._manageTiles=function(e,t){void 0===t&&(t=null);for(var r=this._dataTileIndex,i=this._fetchQueue,n=this._updateQueue,o="esriGeometryPoint"===this.service.geometryType,s=function(e){var t=r.get(e.id);t?(t.displayTile=e,o?r.forEach((function(r){I.isChildOf(r,t)&&(r.displayTile=e)})):t.done=!1):((t=new b.default).tile=e.clone(),t.displayTile=e,r.add(t)),a._processDataTile(t)},a=this,u=0,l=e;u<l.length;u++)s(h=l[u]);if(t)for(var d=0,c=t;d<c.length;d++){var h=c[d];E.add(h),n.abort(h.id)}r.forEach((function(e){E.has(e.displayTile)&&Q.push(e)}));for(var f=0,p=Q;f<p.length;f++){var _=p[f];i.abort(_.id),r.delete(_)}Q.length=0,E.clear()},t.prototype._processDataTile=function(e){var t=this,r=e.key,i=this._fetchQueue,o=r.id,s=this._queryInfoHash,u=r.level-e.displayTile.key.level>=O.maxDrillLevel;if(this._dataTileIndex.add(e),e.done||i.has(o)){if(e.queryInfoHash!==s||e.returnExceeded!==u)if(e.done)e.done=!1;else{if(!i.isOngoing(o))return e.queryInfoHash=s,void(e.returnExceeded=u);i.abort(o)}}else e.queryInfoHash=s,e.returnExceeded=u;e.done?this._invalidateTile(e.displayTile):i.has(o)||i.push(e).then((function(e){return t._handleResponse(e.dataTile,e.featureSet)})).catch((function(r){a.isAbortError(r)||(S.error(new n("featurelayer-controller:tile-error","Encountered an error when handling tile response",r)),e.done=!0,t._invalidateTile(e.displayTile))}))},t.prototype._handleResponse=function(e,t){if(e.done=!0,f.hydrateOptimizedFeatureSet(t),t.exceededTransferLimit)if(e.returnExceeded)this._dataTileIndex.setTileFeatures(e,t.features),this._deleteChildrenDataTiles(e);else{for(var r=e.tile.createChildTiles(),n=0,o=r;n<o.length;n++){var s=o[n],a=new b.default;a.tile=s,a.displayTile=e.displayTile,this._processDataTile(a)}i.release(r)}else this._dataTileIndex.setTileFeatures(e,t.features),this._deleteChildrenDataTiles(e);this._invalidateTile(e.tile)},t.prototype._deleteChildrenDataTiles=function(e){this._dataTileIndex.forEach((function(t){I.isChildOf(t,e)&&Q.push(t)}));for(var t=0,r=Q;t<r.length;t++){var i=r[t];this._fetchQueue.abort(i.id),this._dataTileIndex.delete(i)}Q.length=0},t.prototype._createQuery=function(e,t,r,i,n,o){var s=this.service.geometryType,a=this._createDefaultQuery(i);return a.maxRecordCountFactor=n,a.returnExceededLimitFeatures=o,a.resultType="tile",a.geometry=e,this.service.capabilities.query.supportsQuantization?(a.quantizationParameters=new y.default({mode:"view",originPosition:"upper-left",tolerance:r,extent:t}),"esriGeometryPolyline"===s&&(a.maxAllowableOffset=r)):"esriGeometryPolyline"!==s&&"esriGeometryPolygon"!==s||(a.maxAllowableOffset=r),a},t.prototype._fetchTile=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var n,o,s,a,u,l,d,h;return r.__generator(this,(function(r){switch(r.label){case 0:return n=new c({xmin:e.bounds[0],ymin:e.bounds[1],xmax:e.bounds[2],ymax:e.bounds[3],spatialReference:this.spatialReference}),a=this._createQuery(n,(s="esriGeometryPoint"===(o=this.service.geometryType)?e.tile:e.displayTile).extent,s.resolution,t,O.maxRecordCountFactor,e.returnExceeded),[4,this.sourceAdapter.executeQuery(a,i)];case 1:if((u=r.sent()).transform&&"esriGeometryPolygon"===o)for(l=0,d=u.features;l<d.length;l++)(h=d[l]).geometry=f.removeCollinearVectices(h.geometry,h.geometry,o,!1,!1);return[2,u]}}))}))},t.prototype._invalidateTile=function(e){for(var t=this._updateQueue,r=0,i=this.tileStore.intersections(e,this._pixelBuffer);r<i.length;r++){var n=i[r].tile;t.push(n.id,n.updateTimestamp)}},t.prototype._updateTile=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var n,o,s,u,l,d,c,h,f=this;return r.__generator(this,(function(r){switch(r.label){case 0:return n=this.tileStore.get(e),[4,this.featureStore.executeTileQuery(n,this.spatialReference,{pixelBuffer:this._pixelBuffer,returnGeometry:(o=this.queryInfo).returnGeometry,returnCentroid:o.returnCentroid,returnOutline:this.returnOutline})];case 1:return s=r.sent(),u=s.features,l=s.objectIds,[4,this.attributeStore.sendUpdates()];case 2:return r.sent(),d={geometryType:this.service.geometryType,features:u,fields:this.service.fields,objectIdFieldName:this.service.objectIdField,transform:n.transform},c=[],h=!0,this._dataTileIndex.forEach((function(e){n.id!==e.id&&I.isChildOf(e,n)&&h&&!e.done&&(h=!1)})),h&&n&&n.objectIds.forEach((function(e){if(!l.has(e)){var t=f.attributeStore.getLocalId(e);c.push(t)}})),l.forEach((function(e){n.objectIds.add(e)})),n.updateTimestamp=t,[2,this.processor.onTileData(n,{clear:!0,addOrUpdate:d.features,remove:c,transformParams:g.Utils.getTransformParams(d)},i).catch((function(e){a.isAbortError(e)||S.error("update-tile",e)}))]}}))}))},t.prototype._processEdits=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var n,o,s,u,l,d=this;return r.__generator(this,(function(c){switch(c.label){case 0:return n=this._createTempQueryEngine(),o=this._createObjectIdsQuery(e),e.length?[4,this.sourceAdapter.executeQuery(o)]:[3,2];case 1:s=c.sent(),f.hydrateOptimizedFeatureSet(s),this._dataTileIndex.addOrUpdateFeatures(s.features),n.featureStore.addMany(s.features),c.label=2;case 2:return u=t.concat(e).map((function(e){return d.attributeStore.getLocalId(e)})),this._dataTileIndex.deleteFeaturesById(t),this.attributeStore.sendUpdates(),l=r.__assign(r.__assign({},this.queryInfo),{pixelBuffer:this._pixelBuffer,returnOutline:this.returnOutline}),this.tileStore.tiles.map((function(e){return r.__awaiter(d,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,n.featureStore.executeTileQuery(e,this.spatialReference,l)];case 1:return t=r.sent().features,[2,this.processor.onTileData(e,{addOrUpdate:t,remove:u,transformParams:{transform:e.transform,hasZ:!1,hasM:!1}},i).catch((function(e){a.isAbortError(e)||S.error("update-tile",e)}))]}}))}))})),n.destroy(),[2]}}))}))},t.prototype._createObjectIdsQuery=function(e){var t=this._createDefaultQuery(this.queryInfo);return t.objectIds=e,t},r.__decorate([d.property()],t.prototype,"_fetchQueue",void 0),r.__decorate([d.property()],t.prototype,"_patchQueue",void 0),r.__decorate([d.property()],t.prototype,"_updateQueue",void 0),r.__decorate([d.property()],t.prototype,"_editsQueue",void 0),r.__decorate([d.property({readOnly:!0})],t.prototype,"featureStore",void 0),r.__decorate([d.property({constructOnly:!0})],t.prototype,"service",void 0),r.__decorate([d.property()],t.prototype,"sourceAdapter",void 0),r.__decorate([d.property({readOnly:!0,dependsOn:["featureStore","service"]})],t.prototype,"queryEngine",null),r.__decorate([d.property({dependsOn:["viewState","_fetchQueue.updating","_updateQueue.updating","_patchQueue.updating","_editsQueue.updating"]})],t.prototype,"updating",null),r.__decorate([d.subclass("esri.views.2d.layers.features.controllers.OnDemandController")],t)}(v.default);t.default=k}).apply(null,i))||(e.exports=n)}}]);