(function(){var e={"arcgis-js-api/renderers/support/clickToleranceUtils":"/E+R","arcgis-js-api/views/layers/support/Path":"20TT","arcgis-js-api/views/2d/layers/LayerView2D":"6i4F","arcgis-js-api/views/layers/support/ClipRect":"7MXx","arcgis-js-api/views/layers/support/popupUtils":"I6zq","arcgis-js-api/layers/support/sublayerUtils":"IlDW","arcgis-js-api/views/support/drapedUtils":"NbdF","arcgis-js-api/views/layers/LayerView":"WsO6","arcgis-js-api/views/layers/support/ClipArea":"ZMIQ","arcgis-js-api/views/2d/layers/MapImageLayerView2D":"bT5A","arcgis-js-api/views/layers/support/Geometry":"ts8o","arcgis-js-api/views/layers/MapImageLayerView":"xNtg"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"/E+R":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,i=0;i<e.length;i++){var n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}(e.stops):t}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=function(e){var t=e&&e.renderer,n="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return n;var a="visualVariables"in t?function(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.minSize;return(i(t.maxSize,e)+i(r,e))/2})),n=0,a=r.length;if(0===a)return e;for(var o=0;o<a;o++)n+=r[o];var s=Math.floor(n/a);return Math.max(s,e)}(n,t.visualVariables):n;if("simple"===t.type)return r(a,t.symbol);if("unique-value"===t.type){var o=a;return t.uniqueValueInfos.forEach((function(e){o=r(o,e.symbol)})),o}if("class-breaks"===t.type){var s=a;return t.classBreakInfos.forEach((function(e){s=r(s,e.symbol)})),s}return a}}).apply(null,i))||(e.exports=n)},"20TT":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r.__decorate([i.subclass("esri.views.layers.support.Path")],t)}(n)}).apply(null,i))||(e.exports=n)},"6i4F":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("YaB4"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(n=(function(e,t,r,i,n,a,o,s,p,u,l,d){Object.defineProperty(t,"__esModule",{value:!0});var c=i.ofType({key:"type",base:p,typeMap:{rect:u,path:d,geometry:l}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new c,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new s.Container),this.handles.add([a.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),a.init(this,["layer.opacity","container"],(function(){var e,r;t.container&&(t.container.opacity=null!==(r=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==r?r:1)}),!0),a.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var a=!i,o=!n;!a&&e<=i&&(a=!0),!o&&e>=n&&(o=!0),t=a&&o}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},r.__decorate([o.property({type:c,set:function(e){var t=n.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([o.property()],t.prototype,"moving",void 0),r.__decorate([o.property()],t.prototype,"attached",void 0),r.__decorate([o.property()],t.prototype,"container",void 0),r.__decorate([o.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([o.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([o.property()],t.prototype,"updateRequested",void 0),r.__decorate([o.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([o.property()],t.prototype,"view",void 0),r.__decorate([o.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}).apply(null,i))||(e.exports=n)},"7MXx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),n=r.__decorate([i.subclass("esri.views.layers.support.ClipRect")],t)}(n)}).apply(null,i))||(e.exports=n)},I6zq:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ll/V"),r("LxLY"),r("k7g7")],void 0===(n=(function(e,t,r,i,n,a){Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=function(e,t){return void 0===t&&(t=e.popupTemplate),r.__awaiter(this,void 0,void 0,(function(){var o,s,p,u,l,d,c,y;return r.__generator(this,(function(f){switch(f.label){case 0:return n.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return o=f.sent(),s=t.lastEditInfoEnabled,p=e.objectIdField,u=e.typeIdField,l=e.globalIdField,d=e.relationships,i.includes(o,"*")?[2,["*"]]:s?[4,a.getFeatureEditFields(e)]:[3,3];case 2:return c=f.sent(),[3,4];case 3:c=[],f.label=4;case 4:return y=a.fixFields(e.fields,r.__spreadArrays(o,c)),u&&y.push(u),y&&p&&a.hasField(e.fields,p)&&-1===y.indexOf(p)&&y.push(p),y&&l&&a.hasField(e.fields,l)&&-1===y.indexOf(l)&&y.push(l),d&&d.forEach((function(t){var r=t.keyField;y&&r&&a.hasField(e.fields,r)&&-1===y.indexOf(r)&&y.push(r)})),[2,y]}}))}))},t.getFetchPopupTemplate=function(e,t){return e.popupTemplate?e.popupTemplate:n.isSome(t)&&t.defaultPopupTemplateEnabled&&n.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}).apply(null,i))||(e.exports=n)},IlDW:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("BZGX")],void 0===(n=(function(e,t,r){function i(e,t){if(!e||!e.length)return!0;var r=t.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).map((function(e){return e.id})).toArray();if(e.length>r.length)return!1;for(var i=0,n=r.length,a=0,o=e;a<o.length;a++){for(var s=o[a].id;i<n&&r[i]!==s;)i++;if(i>=n)return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.shouldWriteSublayerStructure=function(e,t,r){return t.flatten((function(e){return e.sublayers})).length!==e.length||!!e.some((function(e){return e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r}))||!i(e,t)},t.isExportDynamic=function(e,t,n){return!!e.some((function(e){var t=e.source;return!(!t||t.type===r.MAPLAYER&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===n.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!i(e,t)},t.isSublayerOverhaul=function(e){return!!e&&e.some((function(e){return null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale}))}}).apply(null,i))||(e.exports=n)},NbdF:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("TMur"),r("LxLY"),r("8uEs"),r("/E+R")],void 0===(n=(function(e,t,r,i,n,a){function o(e,t,i,a){var o;if(void 0===a&&(a=new r.Extent),"2d"===i.type)o=t*i.resolution;else if("3d"===i.type){var s=i.basemapTerrain,p=s.overlayManager,u=p?p.overlayPixelSizeInMapUnits(e):1;o=s&&!s.spatialReference.equals(i.spatialReference)?n.getMetersPerUnitForSR(s.spatialReference)/n.getMetersPerUnitForSR(i.spatialReference):t*u}var l=e.x-o,d=e.y-o,c=e.x+o,y=e.y+o,f=i.spatialReference;return a.xmin=Math.min(l,c),a.ymin=Math.min(d,y),a.xmax=Math.max(l,c),a.ymax=Math.max(d,y),a.spatialReference=f,a}Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=o,t.intersectsDrapedGeometry=function(e,t,r){var n=r.toMap(e);return i.isNone(n)?null:o(n,a.calculateTolerance(),r,s).intersects(t)?n:null};var s=new r.Extent}).apply(null,i))||(e.exports=n)},WsO6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,a,o,s,p,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspendInfo",{get:function(){return this.getSuspendInfo()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.getSuspendInfo=function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},t.prototype.isUpdating=function(){return!1},r.__decorate([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r.__decorate([u.property()],t.prototype,"layer",void 0),r.__decorate([u.property()],t.prototype,"parent",void 0),r.__decorate([u.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspended",null),r.__decorate([u.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspendInfo",null),r.__decorate([u.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),r.__decorate([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r.__decorate([u.subclass("esri.views.layers.LayerView")],t)}(a.HandleOwnerMixin(o.IdentifiableMixin(p.EsriPromiseMixin(n.EventedMixin(i)))))}).apply(null,i))||(e.exports=n)},ZMIQ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([n.subclass("esri.views.layers.support.ClipArea")],t)}(i.JSONSupport)}).apply(null,i))||(e.exports=n)},bT5A:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("qsST"),r("qMld"),r("8MXS"),r("Vx27"),r("VTDq"),r("bOAX"),r("6i4F"),r("wke2"),r("WsO6"),r("xNtg"),r("7XLS"),r("NbdF")],void 0===(n=(function(e,t,r,i,n,a,o,s,p,u,l,d,c,y,f){var h=i.getLogger("esri.views.2d.layers.MapImageLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageVersion=-1,t.container=new p.BitmapContainer,t}return r.__extends(t,e),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){n.isAbortError(e)||h.error(e)}))},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxWidth,i=t.imageMaxHeight,n=t.version,o=n>=10.3,p=n>=10;this.strategy=new l({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:i,imageRotationSupported:o,imageNormalizationSupported:p,hidpi:!0}),this.imageParameters=new s.ExportImageParameters({view:this.view,layer:this.layer}),this.handles.add(a.init(this.imageParameters,"version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),"mapimagelayerview-update")},t.prototype.detach=function(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this.imageParameters.layer=null,this.imageParameters.destroy(),this.imageParameters=null,this._exportImageVersion=-1,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return f.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},t.prototype.fetchImage=function(e,t,i,n){return this.layer.fetchImage(e,t,i,r.__assign({timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp},n))},r.__decorate([o.property()],t.prototype,"strategy",void 0),r.__decorate([o.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),r.__decorate([o.subclass("esri.views.2d.layers.MapImageLayerView2D")],t)}(c.MapImageLayerView(y.RefreshableLayerView(u.LayerView2DMixin(d))))}).apply(null,i))||(e.exports=n)},ts8o:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,a,o,s){var p={base:a,key:"type",typeMap:{extent:i.Extent,polygon:i.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var i;return r.__extends(t,e),i=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({geometry:this.geometry.clone()})},r.__decorate([n.property({types:p,json:{read:o.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),i=r.__decorate([n.subclass("esri.views.layers.support.Geometry")],t)}(s)}).apply(null,i))||(e.exports=n)},xNtg:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("LxLY"),r("qMld"),r("Vx27"),r("/E+R"),r("sCbS"),r("I6zq")],void 0===(n=(function(e,t,r,i,n,a,o,s,p,u){Object.defineProperty(t,"__esModule",{value:!0}),t.MapImageLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.fetchPopupFeatures=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,p,l,d,c,y,f=this;return r.__generator(this,(function(h){switch(h.label){case 0:return o=this.layer,e?(p=this.get("view.scale"),l=[],d=function(e){return r.__awaiter(f,void 0,void 0,(function(){var i,a,o;return r.__generator(this,(function(s){return i=0===e.minScale||p<=e.minScale,a=0===e.maxScale||p>=e.maxScale,e.visible&&i&&a&&(e.sublayers?e.sublayers.forEach(d):e.popupEnabled&&(o=u.getFetchPopupTemplate(e,r.__assign(r.__assign({},t),{defaultPopupTemplateEnabled:!1})),n.isSome(o)&&l.push({sublayer:e,popupTemplate:o}))),[2]}))}))},c=o.sublayers.toArray().map(d),[4,a.all(c)]):[2,a.reject(new i("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}))];case 1:return h.sent(),y=l.map((function(i){var a=i.sublayer,o=i.popupTemplate;return r.__awaiter(f,void 0,void 0,(function(){var i,p,l,d,c,y;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,a.load().catch((function(){}))];case 1:return r.sent(),i=a.createQuery(),p=n.isSome(t)?t.event:null,l=s.calculateTolerance({renderer:a.renderer,event:p}),d=this.createFetchPopupFeaturesQueryGeometry(e,l),i.geometry=d,c=i,[4,u.getRequiredFields(a,o)];case 2:return c.outFields=r.sent(),[4,this._loadArcadeModules(o)];case 3:return(y=r.sent())&&y.arcadeUtils.hasGeometryOperations(o)||(i.maxAllowableOffset=d.width/l),[4,a.queryFeatures(i)];case 4:return[2,r.sent().features]}}))}))})),[4,a.eachAlways(y)];case 2:return[2,h.sent().reduce((function(e,t){return t.value?r.__spreadArrays(e,t.value):e}),[]).filter((function(e){return null!=e}))]}}))}))},t.prototype.canResume=function(){var t,r;return!(!e.prototype.canResume.call(this)||null!==(r=null===(t=this.imageParameters)||void 0===t?void 0:t.timeExtent)&&void 0!==r&&r.isEmpty)},t.prototype._loadArcadeModules=function(e){if(e.get("expressionInfos.length"))return p.loadArcade()},r.__decorate([o.property()],t.prototype,"imageParameters",void 0),r.__decorate([o.property()],t.prototype,"layer",void 0),r.__decorate([o.property({dependsOn:["imageParameters.timeExtent"]})],t.prototype,"suspended",void 0),r.__decorate([o.subclass("esri.views.layers.MapImageLayerView")],t)}(e)}}).apply(null,i))||(e.exports=n)}}]);