(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/support/Path":"20TT","esri/views/2d/layers/LayerView2D":"6i4F","esri/views/layers/support/ClipRect":"7MXx","esri/views/2d/layers/GroupLayerView2D":"Fu14","esri/views/layers/GroupLayerView":"Mr8S","esri/views/layers/LayerView":"WsO6","esri/views/layers/support/ClipArea":"ZMIQ","esri/views/2d/engine/webgl/GroupContainer":"onKL","esri/views/layers/support/Geometry":"ts8o"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"20TT":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r.__decorate([i.subclass("esri.views.layers.support.Path")],t)}(n)}).apply(null,i))||(e.exports=n)},"6i4F":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("YaB4"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(n=(function(e,t,r,i,n,o,s,a,p,l,d,u){Object.defineProperty(t,"__esModule",{value:!0});var c=i.ofType({key:"type",base:p,typeMap:{rect:l,path:u,geometry:d}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new c,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new a.Container),this.handles.add([o.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),o.init(this,["layer.opacity","container"],(function(){var e,r;t.container&&(t.container.opacity=null!==(r=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==r?r:1)}),!0),o.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,s=!n;!o&&e<=i&&(o=!0),!s&&e>=n&&(s=!0),t=o&&s}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},r.__decorate([s.property({type:c,set:function(e){var t=n.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([s.property()],t.prototype,"moving",void 0),r.__decorate([s.property()],t.prototype,"attached",void 0),r.__decorate([s.property()],t.prototype,"container",void 0),r.__decorate([s.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([s.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([s.property()],t.prototype,"updateRequested",void 0),r.__decorate([s.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([s.property()],t.prototype,"view",void 0),r.__decorate([s.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}).apply(null,i))||(e.exports=n)},"7MXx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),n=r.__decorate([i.subclass("esri.views.layers.support.ClipRect")],t)}(n)}).apply(null,i))||(e.exports=n)},Fu14:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("onKL"),r("6i4F"),r("Mr8S")],void 0===(n=(function(e,t,r,i,n,o,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=new n.GroupContainer,t}return r.__extends(t,e),t.prototype.attach=function(){var e=this;this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(function(){return e._updateStageChildren()})),"grouplayerview2d")},t.prototype.detach=function(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()},t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){},t.prototype._updateStageChildren=function(){var e=this;this.container.removeAllChildren(),this.layerViews.forEach((function(t,r){return e.container.addChildAt(t.container,r)}))},r.__decorate([i.subclass("esri.views.2d.layers.GroupLayerView2D")],t)}(o.LayerView2DMixin(s))}).apply(null,i))||(e.exports=n)},Mr8S:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("K2Kz"),r("Vx27"),r("WsO6")],void 0===(n=(function(e,t,r,i,n,o,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.layerViews=new i,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.handles.add([this.layerViews.on("change",(function(t){return e._layerViewsChangeHandler(t)})),this.layerViews.on("after-changes",(function(){return e._layerViewsAfterChangesHandler()})),this.layer.watch("visibilityMode",(function(){return e._visibilityModeHandler()}),!0),this.watch("visible",(function(){return e._visibleHandler()}),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()},Object.defineProperty(t.prototype,"layerViews",{set:function(e){this._set("layerViews",n.referenceSetter(e,this._get("layerViews")))},enumerable:!0,configurable:!0}),t.prototype.isUpdating=function(){return this.layerViews.some((function(e){return e.updating}))},t.prototype._hasLayerViewVisibleOverrides=function(){return this.layerViews.some((function(e){return e._isOverridden("visible")}))},t.prototype._findLayerViewForLayer=function(e){return e&&this.layerViews.find((function(t){return t.layer===e}))},t.prototype._firstVisibleOnLayerOrder=function(){var e=this,t=this.layer.layers.find((function(t){var r=e._findLayerViewForLayer(t);return r&&r.visible}));return t&&this._findLayerViewForLayer(t)},t.prototype._enforceExclusiveVisibility=function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((function(t){t.visible=t===e})))},t.prototype._layerViewsChangeHandler=function(e){var t=this;this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((function(e){return e.watch("visible",(function(r){return t._layerViewVisibleHandler(r,e)}),!0)})).toArray(),"grouplayerview:visible");var r=e.added[e.added.length-1],i=null;r&&r.visible&&(i=r),this._enforceVisibility(i)},t.prototype._layerViewsAfterChangesHandler=function(){var e=this;this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((function(t){return t.watch("updating",(function(){return e._updateUpdating()}),!0)})).toArray(),"grouplayerview:updating"),this._updateUpdating()},t.prototype._enforceVisibility=function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var t=this.visible;this.layerViews.forEach((function(e){e.visible=t}));break;case"exclusive":this._enforceExclusiveVisibility(e)}},t.prototype._visibilityModeHandler=function(){this._enforceVisibility()},t.prototype._layerViewVisibleHandler=function(e,t){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(t.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&t)}},t.prototype._visibleHandler=function(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null===(e=this.layer)||void 0===e?void 0:e.visibilityMode)&&this._enforceVisibility()},t.prototype._updateUpdating=function(){this.notifyChange("updating")},r.__decorate([o.property({cast:n.castForReferenceSetter})],t.prototype,"layerViews",null),r.__decorate([o.property()],t.prototype,"view",void 0),r.__decorate([o.subclass("esri.views.layers.GroupLayerView")],t)}(s)}).apply(null,i))||(e.exports=n)},WsO6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o,s,a,p,l){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspendInfo",{get:function(){return this.getSuspendInfo()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.getSuspendInfo=function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},t.prototype.isUpdating=function(){return!1},r.__decorate([l.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r.__decorate([l.property()],t.prototype,"layer",void 0),r.__decorate([l.property()],t.prototype,"parent",void 0),r.__decorate([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspended",null),r.__decorate([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspendInfo",null),r.__decorate([l.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),r.__decorate([l.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r.__decorate([l.subclass("esri.views.layers.LayerView")],t)}(o.HandleOwnerMixin(s.IdentifiableMixin(p.EsriPromiseMixin(n.EventedMixin(i)))))}).apply(null,i))||(e.exports=n)},ZMIQ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,i,n){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([n.subclass("esri.views.layers.support.ClipArea")],t)}(i.JSONSupport)}).apply(null,i))||(e.exports=n)},onKL:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("DJpR"),r("/U66")],void 0===(n=(function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._lastWidth=0,t._lastHeight=0,t}return r.__extends(t,e),t.prototype.dispose=function(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)},t.prototype.doRender=function(e){var t=this.createRenderParams(e),r=t.context,i=t.painter,n=t.profiler;this._prevFBO=r.getBoundFramebufferObject(),n.recordContainerStart(this.name);var o=this._getFbo(t),s=i.getRenderTarget();r.bindFramebuffer(o),i.setRenderTarget(o),r.setDepthWriteEnabled(!0),r.setClearColor(0,0,0,0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);for(var a=0,p=this.children;a<p.length;a++)p[a].processRender(t);i.setRenderTarget(s),r.bindFramebuffer(this._prevFBO),i.beforeRenderLayer(t,this._clippingInfos?255:0,this.opacity),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),i.blitTexture(r,o.colorTexture,9728),i.compositeLayer(t,this.opacity),n.recordContainerEnd()},t.prototype.createRenderParams=function(t){return r.__assign(r.__assign({},e.prototype.createRenderParams.call(this,t)),{blendMode:this.blendMode,globalOpacity:1})},t.prototype._getFbo=function(e){var t=e.context,r=e.painter,n=t.getViewport(),o=n.width,s=n.height;if(o!==this._lastWidth||s!==this._lastHeight)if(this._lastWidth=o,this._lastHeight=s,this._renderTarget)this._renderTarget.resize(o,s);else{var a={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:o,height:s},p=r.getSharedStencilBuffer();this._renderTarget=new i.FramebufferObject(t,{colorTarget:0,depthStencilTarget:3},a,p)}return this._renderTarget},t}(n.default);t.GroupContainer=o}).apply(null,i))||(e.exports=n)},ts8o:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o,s,a){var p={base:o,key:"type",typeMap:{extent:i.Extent,polygon:i.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var i;return r.__extends(t,e),i=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({geometry:this.geometry.clone()})},r.__decorate([n.property({types:p,json:{read:s.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),i=r.__decorate([n.subclass("esri.views.layers.support.Geometry")],t)}(a)}).apply(null,i))||(e.exports=n)}}]);