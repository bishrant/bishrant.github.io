(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/renderers/support/clickToleranceUtils":"/E+R","arcgis-js-api/views/layers/support/Path":"20TT","arcgis-js-api/views/2d/layers/LayerView2D":"6i4F","arcgis-js-api/views/layers/support/ClipRect":"7MXx","arcgis-js-api/views/support/drapedUtils":"NbdF","arcgis-js-api/views/layers/LayerView":"WsO6","arcgis-js-api/views/layers/support/ClipArea":"ZMIQ","arcgis-js-api/views/layers/support/Geometry":"ts8o","arcgis-js-api/views/layers/TileLayerView":"wlZv","arcgis-js-api/views/2d/layers/TileLayerView2D":"yJSC"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"/E+R":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,i=0;i<e.length;i++){var n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}(e.stops):t}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=function(e){var t=e&&e.renderer,n="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return n;var o="visualVariables"in t?function(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.minSize;return(i(t.maxSize,e)+i(r,e))/2})),n=0,o=r.length;if(0===o)return e;for(var a=0;a<o;a++)n+=r[a];var s=Math.floor(n/o);return Math.max(s,e)}(n,t.visualVariables):n;if("simple"===t.type)return r(o,t.symbol);if("unique-value"===t.type){var a=o;return t.uniqueValueInfos.forEach((function(e){a=r(a,e.symbol)})),a}if("class-breaks"===t.type){var s=o;return t.classBreakInfos.forEach((function(e){s=r(s,e.symbol)})),s}return o}}).apply(null,i))||(e.exports=n)},"20TT":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r.__decorate([i.subclass("esri.views.layers.support.Path")],t)}(n)}).apply(null,i))||(e.exports=n)},"6i4F":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("YaB4"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(n=(function(e,t,r,i,n,o,a,s,l,p,u,c){Object.defineProperty(t,"__esModule",{value:!0});var d=i.ofType({key:"type",base:l,typeMap:{rect:p,path:c,geometry:u}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new d,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new s.Container),this.handles.add([o.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),o.init(this,["layer.opacity","container"],(function(){var e,r;t.container&&(t.container.opacity=null!==(r=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==r?r:1)}),!0),o.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,a=!n;!o&&e<=i&&(o=!0),!a&&e>=n&&(a=!0),t=o&&a}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},r.__decorate([a.property({type:d,set:function(e){var t=n.referenceSetter(e,this._get("clips"),d);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([a.property()],t.prototype,"moving",void 0),r.__decorate([a.property()],t.prototype,"attached",void 0),r.__decorate([a.property()],t.prototype,"container",void 0),r.__decorate([a.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([a.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([a.property()],t.prototype,"updateRequested",void 0),r.__decorate([a.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([a.property()],t.prototype,"view",void 0),r.__decorate([a.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}).apply(null,i))||(e.exports=n)},"7MXx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),n=r.__decorate([i.subclass("esri.views.layers.support.ClipRect")],t)}(n)}).apply(null,i))||(e.exports=n)},NbdF:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("TMur"),r("LxLY"),r("8uEs"),r("/E+R")],void 0===(n=(function(e,t,r,i,n,o){function a(e,t,i,o){var a;if(void 0===o&&(o=new r.Extent),"2d"===i.type)a=t*i.resolution;else if("3d"===i.type){var s=i.basemapTerrain,l=s.overlayManager,p=l?l.overlayPixelSizeInMapUnits(e):1;a=s&&!s.spatialReference.equals(i.spatialReference)?n.getMetersPerUnitForSR(s.spatialReference)/n.getMetersPerUnitForSR(i.spatialReference):t*p}var u=e.x-a,c=e.y-a,d=e.x+a,y=e.y+a,h=i.spatialReference;return o.xmin=Math.min(u,d),o.ymin=Math.min(c,y),o.xmax=Math.max(u,d),o.ymax=Math.max(c,y),o.spatialReference=h,o}Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=a,t.intersectsDrapedGeometry=function(e,t,r){var n=r.toMap(e);return i.isNone(n)?null:a(n,o.calculateTolerance(),r,s).intersects(t)?n:null};var s=new r.Extent}).apply(null,i))||(e.exports=n)},WsO6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o,a,s,l,p){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspendInfo",{get:function(){return this.getSuspendInfo()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.getSuspendInfo=function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},t.prototype.isUpdating=function(){return!1},r.__decorate([p.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r.__decorate([p.property()],t.prototype,"layer",void 0),r.__decorate([p.property()],t.prototype,"parent",void 0),r.__decorate([p.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspended",null),r.__decorate([p.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspendInfo",null),r.__decorate([p.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),r.__decorate([p.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r.__decorate([p.subclass("esri.views.layers.LayerView")],t)}(o.HandleOwnerMixin(a.IdentifiableMixin(l.EsriPromiseMixin(n.EventedMixin(i)))))}).apply(null,i))||(e.exports=n)},ZMIQ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([n.subclass("esri.views.layers.support.ClipArea")],t)}(i.JSONSupport)}).apply(null,i))||(e.exports=n)},ts8o:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o,a,s){var l={base:o,key:"type",typeMap:{extent:i.Extent,polygon:i.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var i;return r.__extends(t,e),i=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({geometry:this.geometry.clone()})},r.__decorate([n.property({types:l,json:{read:a.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),i=r.__decorate([n.subclass("esri.views.layers.support.Geometry")],t)}(s)}).apply(null,i))||(e.exports=n)},wlZv:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("LxLY"),r("qMld"),r("Vx27"),r("/E+R")],void 0===(n=(function(e,t,r,i,n,o,a,s){Object.defineProperty(t,"__esModule",{value:!0}),t.TileLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.fetchPopupFeatures=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var a,l,p,u=this;return r.__generator(this,(function(c){return a=this.layer,e?"tile"!==a.type?[2,o.reject(new i("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type}))]:(l=this.get("view.scale"),p=a.allSublayers.toArray().filter((function(e){return e.popupTemplate&&e.popupEnabled&&e.visible&&(0===e.minScale||l<=e.minScale)&&(0===e.maxScale||l>=e.maxScale)})),[2,o.eachAlways(p.map((function(i){return r.__awaiter(u,void 0,void 0,(function(){var o,a,l,p;return r.__generator(this,(function(r){switch(r.label){case 0:return o=i.createQuery(),a=n.isSome(t)?t.event:null,l=s.calculateTolerance({renderer:i.renderer,event:a}),o.geometry=this.createFetchPopupFeaturesQueryGeometry(e,l),p=o,[4,i.popupTemplate.getRequiredFields()];case 1:return p.outFields=r.sent(),[4,i.queryFeatures(o)];case 2:return[2,r.sent().features]}}))}))}))).then((function(e){return[].concat.apply([],e.map((function(e){return e.value})).filter(Boolean))}))]):[2,o.reject(new i("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}))]}))}))},r.__decorate([a.property()],t.prototype,"layer",void 0),r.__decorate([a.subclass("esri.layers.mixins.TileLayerView")],t)}(e)}}).apply(null,i))||(e.exports=n)},yJSC:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qsST"),r("LxLY"),r("qMld"),r("Vx27"),r("1Mg+"),r("APHm"),r("6i4F"),r("M3W5"),r("f3JK"),r("EBSo"),r("ovos"),r("WsO6"),r("7XLS"),r("wlZv"),r("NbdF")],void 0===(n=(function(e,t,r,i,n,o,a,s,l,p,u,c,d,y,h,f,v,_,g){var w=n.getLogger("esri.views.2d.layers.TileLayerView2D"),m=[0,0];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._tileStrategy=null,t._fetchQueue=null,t.container=new l.Container,t.layer=null,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this,r=this.layer.tileInfo,n=r&&r.spatialReference;n||(e=new i("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),n.equals(this.view.spatialReference)||(e=new i("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(function(){t.refresh()})),e&&this.addResolvingPromise(a.reject(e))},Object.defineProperty(t.prototype,"resampling",{get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},t.prototype.attach=function(){var t=this,r="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new c(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new y({tileInfoView:this._tileInfoView,concurrency:r&&10*r.length||10,process:function(e,r){return t.fetchTile(e,r)}}),this._tileStrategy=new h({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(e){return t.acquireTile(e)},releaseTile:function(e){return t.releaseTile(e)},tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),e.prototype.attach.call(this)},t.prototype.detach=function(){e.prototype.detach.call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return g.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){var e=this;return r.__generator(this,(function(t){return this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(t){return e._enqueueTileFetch(t)})),this.notifyChange("updating")),[2]}))}))},t.prototype.isUpdating=function(){return this._fetchQueue.length>0},t.prototype.acquireTile=function(e){var t,r,i=this._bitmapView.createTile(e),n=i.bitmap;return t=this._tileInfoView.getTileCoords(m,i.key),n.x=t[0],n.y=t[1],n.resolution=this._tileInfoView.getTileResolution(i.key),n.width=(r=this._tileInfoView.tileInfo.size)[0],n.height=r[1],this._enqueueTileFetch(i),this.requestUpdate(),i},t.prototype.releaseTile=function(e){var t=this;this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){e.destroy(),t.requestUpdate()})),this.requestUpdate()},t.prototype.fetchTile=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,n,s,l,p,u,c,y,h;return r.__generator(this,(function(r){switch(r.label){case 0:if(i="tilemapCache"in this.layer?this.layer.tilemapCache:null,n=!o.isNone(t)&&t.signal,i)return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._fetchImage(e,n)];case 2:return[2,r.sent()];case 3:if(s=r.sent(),!a.isAbortError(s)&&!this.resampling)return[2,this._createBlankImage()];throw s;case 4:l=d.pool.acquire(),r.label=5;case 5:return r.trys.push([5,8,,10]),[4,i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:n})];case 6:return r.sent(),l.level===e.level||this.resampling?[4,this._fetchImage(l,n)]:[2,this._createBlankImage()];case 7:return p=r.sent(),[3,10];case 8:if(u=r.sent(),a.isAbortError(u))throw d.pool.release(l),u;return[4,this._fetchImage(e,n)];case 9:return p=r.sent(),[3,10];case 10:return c=l.level,y=l.row,h=l.col,d.pool.release(l),this.resampling&&c!==e.level?[2,this._resampleImage(p,c,y,h,e.level,e.row,e.col)]:[2,p]}}))}))},t.prototype._enqueueTileFetch=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i,n=this;return r.__generator(this,(function(r){switch(r.label){case 0:if(this._fetchQueue.has(e.key.id))return[2];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._fetchQueue.push(e.key)];case 2:return t=r.sent(),e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(function(){return n.requestUpdate()})),this._bitmapView.addChild(e),[3,4];case 3:return i=r.sent(),a.isAbortError(i)||w.error(i),[3,4];case 4:return this.requestUpdate(),[2]}}))}))},t.prototype._fetchImage=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})]}))}))},t.prototype._resampleImage=function(e,t,r,i,n,o,a){var s=this._tileInfoView.tileInfo.size,l=this._tileInfoView.getTileResolution(t),p=this._tileInfoView.getTileResolution(n),u=this._tileInfoView.getLODInfoAt(n),c=u.getXForColumn(a),d=u.getYForRow(o),y=(u=this._tileInfoView.getLODInfoAt(t)).getXForColumn(i),h=u.getYForRow(r),f=Math.round((c-y)/l),v=Math.round(-(d-h)/l),_=Math.round(s[0]*(p/l)),g=Math.round(s[1]*(p/l)),w=this._createBlankImage();return w.getContext("2d").drawImage(e,f,v,_,g,0,0,s[0],s[1]),w},t.prototype._createBlankImage=function(){var e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return t.width=e[0],t.height=e[1],t},r.__decorate([s.property({dependsOn:["layer.resampling?"]})],t.prototype,"resampling",null),r.__decorate([s.subclass("esri.views.2d.layers.TileLayerView2D")],t)}(_.TileLayerView(v.RefreshableLayerView(p.BitmapTileLayerView2D(u.LayerView2DMixin(f)))))}).apply(null,i))||(e.exports=n)}}]);