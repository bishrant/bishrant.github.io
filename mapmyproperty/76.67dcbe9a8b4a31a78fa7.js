(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/views/layers/support/Path":"20TT","arcgis-js-api/views/2d/layers/LayerView2D":"6i4F","arcgis-js-api/views/layers/support/ClipRect":"7MXx","arcgis-js-api/views/2d/layers/MapNotesLayerView2D":"LVmr","arcgis-js-api/views/layers/LayerView":"WsO6","arcgis-js-api/views/layers/support/ClipArea":"ZMIQ","arcgis-js-api/views/layers/support/Geometry":"ts8o"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"20TT":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return i(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r([n.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r([n.subclass("esri.views.layers.support.Path")],t)}(n.declared(o))}).apply(null,i))||(e.exports=n)},"6i4F":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(n=(function(e,t,r,i,n,o,p,s,a,l,u,d){Object.defineProperty(t,"__esModule",{value:!0});var c=n.ofType({key:"type",base:a,typeMap:{rect:l,path:d,geometry:u}});t.LayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new c,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.when((function(){e.requestUpdate()}),(function(){}));var t=function(){return e.notifyChange("rendering")};this.handles.add([p.init(this,"suspended",(function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)}),!0),p.init(this,["fullOpacity","container"],(function(){e.container&&(e.container.opacity=e.fullOpacity)}),!0),p.on(this,"container","post-render",t),p.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,p=!n;!o&&e<=i&&(o=!0),!p&&e>=n&&(p=!0),t=o&&p}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},i([s.property({type:c,set:function(e){var t=o.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),i([s.property()],t.prototype,"moving",void 0),i([s.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),i([s.property()],t.prototype,"attached",void 0),i([s.property()],t.prototype,"container",void 0),i([s.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),i([s.property({readOnly:!0})],t.prototype,"updateParameters",void 0),i([s.property()],t.prototype,"updateRequested",void 0),i([s.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),i([s.property()],t.prototype,"view",void 0),i([s.subclass("esri.views.2d.layers.LayerView2D")],t)}(s.declared(e))}}).apply(null,i))||(e.exports=n)},"7MXx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var o;return i(t,e),o=t,t.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),o=r([n.subclass("esri.views.layers.support.ClipRect")],t)}(n.declared(o))}).apply(null,i))||(e.exports=n)},LVmr:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("eIBl"),r("qMld"),r("Vx27"),r("YaB4"),r("6i4F"),r("apjU"),r("WsO6")],void 0===(n=(function(e,t,r,i,n,o,p,s,a,l,u){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new n,t._popupTemplates=new Map,t.container=new s.Container,t.graphicsViews=[],t}return r(t,e),t.prototype.hitTest=function(e,t){var r=this;if(this.suspended||!this.graphicsViews.length)return o.resolve();var i=this.graphicsViews.map((function(r){return r.hitTest(e,t)}));return o.all(i).then((function(e){return e.filter((function(e,t){return e&&(e.popupTemplate=r._popupTemplates.get(r.graphicsViews[t]),e.layer=r.layer,e.sourceLayer=r.layer),!!e}))[0]||null}))},t.prototype.update=function(e){if(this.graphicsViews)for(var t=0,r=this.graphicsViews;t<r.length;t++)r[t].update(e)},t.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach((function(t){var r=new l.default({view:e.view,graphics:t.source});r.renderer=t.renderer,r.container.setClips(e.clips),e._popupTemplates.set(r,t.popupTemplate),e.graphicsViews.push(r),e.container.addChild(r.container)})),this.handles.add([this.clips.on("change",(function(){return e.graphicsViews.forEach((function(t){return t.container.setClips(e.clips)}))}))])},t.prototype.detach=function(){this.container.removeAllChildren(),this.graphicsViews.forEach((function(e){e.destroy(),e.view=null,e.renderer=null})),this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},i([p.subclass("esri.views.2d.layers.MapNotesLayerView2D")],t)}(p.declared(a.LayerView2D(u)))}).apply(null,i))||(e.exports=n)},WsO6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o,p,s,a,l,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspendInfo",{get:function(){return this.getSuspendInfo()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.getSuspendInfo=function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},t.prototype.isUpdating=function(){return!1},i([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([u.property()],t.prototype,"layer",void 0),i([u.property()],t.prototype,"parent",void 0),i([u.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspended",null),i([u.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspendInfo",null),i([u.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),i([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([u.subclass("esri.views.layers.LayerView")],t)}(u.declared(p.HandleOwnerMixin(s.IdentifiableMixin(l.EsriPromiseMixin(o.EventedMixin(n))))))}).apply(null,i))||(e.exports=n)},ZMIQ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),r([o.subclass("esri.views.layers.support.ClipArea")],t)}(o.declared(n.JSONSupport))}).apply(null,i))||(e.exports=n)},ts8o:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o,p,s,a){var l={base:p,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var n;return i(t,e),n=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({geometry:this.geometry.clone()})},r([o.property({types:l,json:{read:s.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([o.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),n=r([o.subclass("esri.views.layers.support.Geometry")],t)}(o.declared(a))}).apply(null,i))||(e.exports=n)}}]);