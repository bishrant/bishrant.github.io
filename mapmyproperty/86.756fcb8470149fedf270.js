(function(){var e={"arcgis-js-api/renderers/support/clickToleranceUtils":"/E+R","arcgis-js-api/views/support/drapedUtils":"NbdF","arcgis-js-api/views/layers/TileLayerView":"wlZv","arcgis-js-api/views/2d/layers/TileLayerView2D":"yJSC"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"/E+R":function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=(function(e,t){"use strict";function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,i=0,r=0;r<e.length;r++){var n=e[r].size;"number"==typeof n&&(t+=n,i++)}return t/i}(e.stops):t}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=void 0,t.calculateTolerance=function(e){var t=e&&e.renderer,n="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return n;var a="visualVariables"in t?function(e,t){if(!t)return e;var i=t.filter((function(e){return"size"===e.type})).map((function(t){var i=t.minSize;return(r(t.maxSize,e)+r(i,e))/2})),n=0,a=i.length;if(0===a)return e;for(var s=0;s<a;s++)n+=i[s];var o=Math.floor(n/a);return Math.max(o,e)}(n,t.visualVariables):n;if("simple"===t.type)return i(a,t.symbol);if("unique-value"===t.type){var s=a;return t.uniqueValueInfos.forEach((function(e){s=i(s,e.symbol)})),s}if("class-breaks"===t.type){var o=a;return t.classBreakInfos.forEach((function(e){o=i(o,e.symbol)})),o}return a}}).apply(null,r))||(e.exports=n)},NbdF:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("TMur"),i("LxLY"),i("8uEs"),i("/E+R")],void 0===(n=(function(e,t,i,r,n,a){"use strict";function s(e,t,r,a){var s;if(void 0===a&&(a=new i.Extent),"2d"===r.type)s=t*r.resolution;else if("3d"===r.type){var o=r.basemapTerrain,l=o.overlayManager,u=l?l.overlayPixelSizeInMapUnits(e):1;s=o&&!o.spatialReference.equals(r.spatialReference)?n.getMetersPerUnitForSR(o.spatialReference)/n.getMetersPerUnitForSR(r.spatialReference):t*u}var c=e.x-s,h=e.y-s,p=e.x+s,f=e.y+s,y=r.spatialReference;return a.xmin=Math.min(c,p),a.ymin=Math.min(h,f),a.xmax=Math.max(c,p),a.ymax=Math.max(h,f),a.spatialReference=y,a}Object.defineProperty(t,"__esModule",{value:!0}),t.intersectsDrapedGeometry=t.createQueryGeometry=void 0,t.createQueryGeometry=s,t.intersectsDrapedGeometry=function(e,t,i){var n=i.toMap(e);return r.isNone(n)?null:s(n,a.calculateTolerance(),i,o).intersects(t)?n:null};var o=new i.Extent}).apply(null,r))||(e.exports=n)},wlZv:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("zOht"),i("ma1f"),i("LxLY"),i("qMld"),i("Vx27"),i("/E+R")],void 0===(n=(function(e,t,i,r,n,a,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TileLayerView=void 0,t.TileLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.fetchPopupFeatures=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var s,l,u,c=this;return i.__generator(this,(function(h){return s=this.layer,e?"tile"!==s.type?[2,a.reject(new r("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:s.type}))]:(l=this.get("view.scale"),u=s.allSublayers.toArray().filter((function(e){return e.popupTemplate&&e.popupEnabled&&e.visible&&(0===e.minScale||l<=e.minScale)&&(0===e.maxScale||l>=e.maxScale)})),[2,a.eachAlways(u.map((function(r){return i.__awaiter(c,void 0,void 0,(function(){var a,s,l,u;return i.__generator(this,(function(i){switch(i.label){case 0:return a=r.createQuery(),s=n.isSome(t)?t.event:null,l=o.calculateTolerance({renderer:r.renderer,event:s}),a.geometry=this.createFetchPopupFeaturesQueryGeometry(e,l),u=a,[4,r.popupTemplate.getRequiredFields()];case 1:return u.outFields=i.sent(),[4,r.queryFeatures(a)];case 2:return[2,i.sent().features]}}))}))}))).then((function(e){return[].concat.apply([],e.map((function(e){return e.value})).filter(Boolean))}))]):[2,a.reject(new r("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s}))]}))}))},i.__decorate([s.property()],t.prototype,"layer",void 0),i.__decorate([s.subclass("esri.layers.mixins.TileLayerView")],t)}(e)}}).apply(null,r))||(e.exports=n)},yJSC:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("zOht"),i("ma1f"),i("qsST"),i("LxLY"),i("qMld"),i("Vx27"),i("APHm"),i("6i4F"),i("M3W5"),i("f3JK"),i("EBSo"),i("ovos"),i("WsO6"),i("7XLS"),i("wlZv"),i("NbdF")],void 0===(n=(function(e,t,i,r,n,a,s,o,l,u,c,h,p,f,y,d,v,m){"use strict";var w=n.getLogger("esri.views.2d.layers.TileLayerView2D"),_=[0,0];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._tileStrategy=null,t._fetchQueue=null,t.layer=null,t}return i.__extends(t,e),t.prototype.initialize=function(){var e,t=this,i=this.layer.tileInfo,n=i&&i.spatialReference;n||(e=new r("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),n.equals(this.view.spatialReference)||(e=new r("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(function(){t.refresh()})),e&&this.addResolvingPromise(s.reject(e))},Object.defineProperty(t.prototype,"resampling",{get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling},enumerable:!1,configurable:!0}),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},t.prototype.attach=function(){var t=this,i="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new c(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:i&&10*i.length||10,process:function(e,i){return t.fetchTile(e,i)}}),this._tileStrategy=new f({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(e){return t.acquireTile(e)},releaseTile:function(e){return t.releaseTile(e)},tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),e.prototype.attach.call(this)},t.prototype.detach=function(){e.prototype.detach.call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return m.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){return i.__awaiter(this,void 0,void 0,(function(){var e=this;return i.__generator(this,(function(t){return this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(t){return e._enqueueTileFetch(t)})),this.notifyChange("updating")),[2]}))}))},t.prototype.isUpdating=function(){var e;return(null===(e=this._fetchQueue)||void 0===e?void 0:e.length)>0},t.prototype.acquireTile=function(e){var t,i,r=this._bitmapView.createTile(e),n=r.bitmap;return t=this._tileInfoView.getTileCoords(_,r.key),n.x=t[0],n.y=t[1],n.resolution=this._tileInfoView.getTileResolution(r.key),n.width=(i=this._tileInfoView.tileInfo.size)[0],n.height=i[1],this._enqueueTileFetch(r),this._bitmapView.addChild(r),this.requestUpdate(),r},t.prototype.releaseTile=function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()},t.prototype.fetchTile=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var r,n,o,l,u,c,p,f,y;return i.__generator(this,(function(i){switch(i.label){case 0:if(r="tilemapCache"in this.layer?this.layer.tilemapCache:null,n=!a.isNone(t)&&t.signal,r)return[3,4];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._fetchImage(e,n)];case 2:return[2,i.sent()];case 3:if(o=i.sent(),!s.isAbortError(o)&&!this.resampling)return[2,this._createBlankImage()];throw o;case 4:l=new h(0,0,0,0),i.label=5;case 5:return i.trys.push([5,8,,10]),[4,r.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:n})];case 6:return i.sent(),l.level===e.level||this.resampling?[4,this._fetchImage(l,n)]:[2,this._createBlankImage()];case 7:return u=i.sent(),[3,10];case 8:if(c=i.sent(),s.isAbortError(c))throw c;return[4,this._fetchImage(e,n)];case 9:return u=i.sent(),[3,10];case 10:return p=l.level,f=l.row,y=l.col,this.resampling&&p!==e.level?[2,this._resampleImage(u,p,f,y,e.level,e.row,e.col)]:[2,u]}}))}))},t.prototype._enqueueTileFetch=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,r,n=this;return i.__generator(this,(function(i){switch(i.label){case 0:if(this._fetchQueue.has(e.key.id))return[2];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._fetchQueue.push(e.key)];case 2:return t=i.sent(),e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(function(){return n.requestUpdate()})),[3,4];case 3:return r=i.sent(),s.isAbortError(r)||w.error(r),[3,4];case 4:return this.requestUpdate(),[2]}}))}))},t.prototype._fetchImage=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})]}))}))},t.prototype._resampleImage=function(e,t,i,r,n,a,s){var o=this._tileInfoView.tileInfo.size,l=this._tileInfoView.getTileResolution(t),u=this._tileInfoView.getTileResolution(n),c=this._tileInfoView.getLODInfoAt(n),h=c.getXForColumn(s),p=c.getYForRow(a),f=(c=this._tileInfoView.getLODInfoAt(t)).getXForColumn(r),y=c.getYForRow(i),d=Math.round((h-f)/l),v=Math.round(-(p-y)/l),m=Math.round(o[0]*(u/l)),w=Math.round(o[1]*(u/l)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,d,v,m,w,0,0,o[0],o[1]),_},t.prototype._createBlankImage=function(){var e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return t.width=e[0],t.height=e[1],t},i.__decorate([o.property({dependsOn:["layer.resampling?"]})],t.prototype,"resampling",null),i.__decorate([o.subclass("esri.views.2d.layers.TileLayerView2D")],t)}(v.TileLayerView(d.RefreshableLayerView(l.BitmapTileLayerView2D(u.LayerView2DMixin(y)))))}).apply(null,r))||(e.exports=n)}}]);