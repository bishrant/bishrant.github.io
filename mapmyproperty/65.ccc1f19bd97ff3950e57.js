(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/views/layers/support/Path":"20TT","arcgis-js-api/views/2d/layers/LayerView2D":"6i4F","arcgis-js-api/views/layers/support/ClipRect":"7MXx","arcgis-js-api/views/layers/support/popupUtils":"I6zq","arcgis-js-api/views/layers/LayerView":"WsO6","arcgis-js-api/views/layers/support/ClipArea":"ZMIQ","arcgis-js-api/views/2d/layers/ImageryLayerView2D":"Zruw","arcgis-js-api/views/layers/support/Geometry":"ts8o","arcgis-js-api/views/layers/ImageryLayerView":"yx9Y"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"20TT":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r.__decorate([i.subclass("esri.views.layers.support.Path")],t)}(n)}).apply(null,i))||(e.exports=n)},"6i4F":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("YaB4"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,l,u,d){Object.defineProperty(t,"__esModule",{value:!0});var c=i.ofType({key:"type",base:p,typeMap:{rect:l,path:d,geometry:u}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new c,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new s.Container),this.handles.add([o.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),o.init(this,["layer.opacity","container"],(function(){var e,r;t.container&&(t.container.opacity=null!==(r=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==r?r:1)}),!0),o.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,a=!n;!o&&e<=i&&(o=!0),!a&&e>=n&&(a=!0),t=o&&a}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},r.__decorate([a.property({type:c,set:function(e){var t=n.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([a.property()],t.prototype,"moving",void 0),r.__decorate([a.property()],t.prototype,"attached",void 0),r.__decorate([a.property()],t.prototype,"container",void 0),r.__decorate([a.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([a.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([a.property()],t.prototype,"updateRequested",void 0),r.__decorate([a.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([a.property()],t.prototype,"view",void 0),r.__decorate([a.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}).apply(null,i))||(e.exports=n)},"7MXx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),n=r.__decorate([i.subclass("esri.views.layers.support.ClipRect")],t)}(n)}).apply(null,i))||(e.exports=n)},I6zq:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ll/V"),r("LxLY"),r("k7g7")],void 0===(n=(function(e,t,r,i,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=function(e,t){return void 0===t&&(t=e.popupTemplate),r.__awaiter(this,void 0,void 0,(function(){var a,s,p,l,u,d,c,y;return r.__generator(this,(function(h){switch(h.label){case 0:return n.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return a=h.sent(),s=t.lastEditInfoEnabled,p=e.objectIdField,l=e.typeIdField,u=e.globalIdField,d=e.relationships,i.includes(a,"*")?[2,["*"]]:s?[4,o.getFeatureEditFields(e)]:[3,3];case 2:return c=h.sent(),[3,4];case 3:c=[],h.label=4;case 4:return y=o.fixFields(e.fields,r.__spreadArrays(a,c)),l&&y.push(l),y&&p&&o.hasField(e.fields,p)&&-1===y.indexOf(p)&&y.push(p),y&&u&&o.hasField(e.fields,u)&&-1===y.indexOf(u)&&y.push(u),d&&d.forEach((function(t){var r=t.keyField;y&&r&&o.hasField(e.fields,r)&&-1===y.indexOf(r)&&y.push(r)})),[2,y]}}))}))},t.getFetchPopupTemplate=function(e,t){return e.popupTemplate?e.popupTemplate:n.isSome(t)&&t.defaultPopupTemplateEnabled&&n.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}).apply(null,i))||(e.exports=n)},WsO6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,l){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspendInfo",{get:function(){return this.getSuspendInfo()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.getSuspendInfo=function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},t.prototype.isUpdating=function(){return!1},r.__decorate([l.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r.__decorate([l.property()],t.prototype,"layer",void 0),r.__decorate([l.property()],t.prototype,"parent",void 0),r.__decorate([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspended",null),r.__decorate([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspendInfo",null),r.__decorate([l.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),r.__decorate([l.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r.__decorate([l.subclass("esri.views.layers.LayerView")],t)}(o.HandleOwnerMixin(a.IdentifiableMixin(p.EsriPromiseMixin(n.EventedMixin(i)))))}).apply(null,i))||(e.exports=n)},ZMIQ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([n.subclass("esri.views.layers.support.ClipArea")],t)}(i.JSONSupport)}).apply(null,i))||(e.exports=n)},Zruw:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("jZlN"),r("qsST"),r("qMld"),r("jBNx"),r("8MXS"),r("Vx27"),r("SAwq"),r("YaB4"),r("Ob6M"),r("6i4F"),r("wke2"),r("yx9Y"),r("WsO6"),r("7XLS")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,l,u,d,c,y,h,f,v){var g=n.getLogger("esri.views.2d.layers.ImageryLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageVersion=-1,t.container=new u.BitmapContainer,t}return r.__extends(t,e),Object.defineProperty(t.prototype,"pixelData",{get:function(){if(this.updating)return null;var e=this.strategy.container.children;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){var t=this.view.extent,r=e.map((function(e){return e.source})).filter((function(e){return e.extent&&e.extent.intersects(t)})).map((function(e){return{extent:e.extent,pixelBlock:e.originalPixelBlock}})),i=l.mosaicPixelData(r,t);return i?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(e,t){if(this.suspended)return o.resolve(null);var r=this.view.toMap(a.createScreenPoint(e,t));return o.resolve(new i({attributes:{},geometry:r,layer:this.layer}))},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){o.isAbortError(e)||g.error(e)}))},t.prototype.attach=function(){var e=this;this.layer.increaseRasterJobHandlerUsage(),this.strategy=new y({container:this.container,imageNormalizationSupported:this.layer.version>=10,imageMaxHeight:this.layer.version>=10.1?this.layer.imageMaxHeight:2048,imageMaxWidth:this.layer.version>=10.1?this.layer.imageMaxWidth:2048,fetchSource:this.fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}}),this.handles.add([s.init(this,"layer.exportImageServiceParameters.version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),this.watch("timeExtent",(function(){return e.requestUpdate()})),this.layer.on("redraw",(function(){e.strategy.updateExports((function(t){t.source instanceof HTMLImageElement?t.requestRender():e.layer.applyRenderer({pixelBlock:t.source.pixelBlock}).then((function(r){var i=t.source;i.pixelBlock=r.pixelBlock,i.filter=function(t){return e.layer.applyFilter(t)},e.container.requestRender()}))}))}))],"imagerylayerview-update"),this.container&&(this.container.blendMode=this.layer.blendMode)},t.prototype.detach=function(){this.layer.decreaseRasterJobHandlerUsage(),this.strategy.destroy(),this.container.removeAllChildren(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},t.prototype.fetchImage=function(e,t,r,i){var n=this;return this._exportImageVersion=this.get("layer.exportImageServiceParameters.version"),(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((function(e){return e.imageElement?e.imageElement:n.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((function(t){var r=new d.default(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=function(e){return n.layer.applyFilter(e)},r}))}))},r.__decorate([p.property({dependsOn:["updating"]})],t.prototype,"pixelData",null),r.__decorate([p.property()],t.prototype,"strategy",void 0),r.__decorate([p.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),r.__decorate([p.subclass("esri.views.2d.layers.ImageryLayerView2D")],t)}(h.ImageryLayerView(v.RefreshableLayerView(c.LayerView2DMixin(f))))}).apply(null,i))||(e.exports=n)},ts8o:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o,a,s){var p={base:o,key:"type",typeMap:{extent:i.Extent,polygon:i.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var i;return r.__extends(t,e),i=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({geometry:this.geometry.clone()})},r.__decorate([n.property({types:p,json:{read:a.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),i=r.__decorate([n.subclass("esri.views.layers.support.Geometry")],t)}(s)}).apply(null,i))||(e.exports=n)},yx9Y:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("LxLY"),r("qMld"),r("Vx27"),r("oxlp"),r("ml7j"),r("IpeC"),r("I6zq")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,l,u){Object.defineProperty(t,"__esModule",{value:!0}),t.ImageryLayerView=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.view=null,t}return r.__extends(t,e),t.prototype.fetchPopupFeatures=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var a,p,d,c,y,h,f,v;return r.__generator(this,(function(r){switch(r.label){case 0:if(a=this.layer,!e)return[2,o.reject(new i("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}))];if(p=a.popupEnabled,d=u.getFetchPopupTemplate(a,t),!p||!n.isSome(d))throw new i("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:d});return[4,d.getRequiredFields()];case 1:return c=r.sent(),(y=new l).geometry=e,y.outFields=c,y.outSpatialReference=e.spatialReference,h=this.view.resolution,f="2d"===this.view.type?new s(h,h,this.view.spatialReference):new s(.5*h,.5*h,this.view.spatialReference),[2,a.queryVisibleRasters(y,{returnDomainValues:!0,returnTopmostRaster:(v=d.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1}).returnTopmostRaster,pixelSize:f,showNoDataRecords:v.showNoDataRecords}).then((function(e){return e}))]}}))}))},t.prototype.canResume=function(){var t;return!(!e.prototype.canResume.call(this)||null!==(t=this.timeExtent)&&void 0!==t&&t.isEmpty)},r.__decorate([a.property()],t.prototype,"layer",void 0),r.__decorate([a.property({dependsOn:["timeExtent"]})],t.prototype,"suspended",void 0),r.__decorate([a.property(p.combinedViewLayerTimeExtentProperty)],t.prototype,"timeExtent",void 0),r.__decorate([a.property()],t.prototype,"view",void 0),r.__decorate([a.subclass("esri.views.layers.ImageryLayerView")],t)}(e)}}).apply(null,i))||(e.exports=n)}}]);