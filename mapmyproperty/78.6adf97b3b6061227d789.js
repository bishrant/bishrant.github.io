(function(){var e={"arcgis-js-api/views/layers/support/Path":"20TT","arcgis-js-api/views/2d/layers/LayerView2D":"6i4F","arcgis-js-api/views/layers/support/ClipRect":"7MXx","arcgis-js-api/views/2d/layers/GeoRSSLayerView2D":"KGrj","arcgis-js-api/views/layers/LayerView":"WsO6","arcgis-js-api/views/layers/support/ClipArea":"ZMIQ","arcgis-js-api/views/layers/support/Geometry":"ts8o"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"20TT":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!1,configurable:!0}),r.__decorate([i.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r.__decorate([i.subclass("esri.views.layers.support.Path")],t)}(n)}).apply(null,i))||(e.exports=n)},"6i4F":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("1Mg+"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(n=(function(e,t,r,i,n,o,p,s,a,l,u,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LayerView2DMixin=void 0;var c=i.ofType({key:"type",base:a,typeMap:{rect:l,path:d,geometry:u}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new c,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new s.Container),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([o.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),o.init(this,["layer.opacity","container"],(function(){var e,r;t.container&&(t.container.opacity=null!==(r=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==r?r:1)}),!0),o.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),o.init(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!1,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,p=!n;!o&&e<=i&&(o=!0),!p&&e>=n&&(p=!0),t=o&&p}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},r.__decorate([p.property({type:c,set:function(e){var t=n.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([p.property()],t.prototype,"moving",void 0),r.__decorate([p.property()],t.prototype,"attached",void 0),r.__decorate([p.property()],t.prototype,"container",void 0),r.__decorate([p.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([p.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([p.property()],t.prototype,"updateRequested",void 0),r.__decorate([p.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([p.property()],t.prototype,"view",void 0),r.__decorate([p.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}).apply(null,i))||(e.exports=n)},"7MXx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!1,configurable:!0}),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),n=r.__decorate([i.subclass("esri.views.layers.support.ClipRect")],t)}(n)}).apply(null,i))||(e.exports=n)},KGrj:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("jZlN"),r("ifLZ"),r("y4WC"),r("qMld"),r("8MXS"),r("Vx27"),r("osTG"),r("hz/Y"),r("w1v0"),r("6i4F"),r("apjU"),r("WsO6")],void 0===(n=(function(e,t,r,i,n,o,p,s,a,l,u,d,c,y,h){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._graphicsViewMap={},t._popupTemplates=new Map,t.graphicsViews=[],t}return r.__extends(t,e),t.prototype.hitTest=function(e,t){var r=this;if(this.suspended||!this.graphicsViews.length)return p.resolve();var i=this.graphicsViews.reverse().map((function(r){return r.hitTest(e,t)}));return p.all(i).then((function(e){return e.filter((function(e,t){return e&&(e.popupTemplate=r._popupTemplates.get(r.graphicsViews[t]),e.layer=r.layer,e.sourceLayer=r.layer),!!e}))[0]||null}))},t.prototype.update=function(e){if(this.graphicsViews)for(var t=0,r=this.graphicsViews;t<r.length;t++)r[t].processUpdate(e)},t.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach((function(t){var r,p=d.fromJSON(t.featureSet),s=new(o.ofType(i))(p.features);if(e._graphicsViewMap[p.geometryType])(r=e._graphicsViewMap[p.geometryType]).graphics.addMany(s);else{var a=t.layerDefinition.drawingInfo,l=t.popupInfo?n.fromJSON(t.popupInfo):null,c=u.fromJSON(a.renderer);r=new y.default({requestUpdateCallback:function(){return e.requestUpdate()},view:e.view,graphics:s,renderer:c}),e._graphicsViewMap[p.geometryType]=r,e._popupTemplates.set(r,l),"polygon"!==p.geometryType||e.layer.polygonSymbol?"polyline"!==p.geometryType||e.layer.lineSymbol?"point"!==p.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=c.symbol):e.layer.lineSymbol=c.symbol:e.layer.polygonSymbol=c.symbol,e.graphicsViews.push(r),e.container.addChild(r.container)}})),this.handles.add([s.init(this.layer,"polygonSymbol",(function(t){e._graphicsViewMap.polygon.renderer=new l({symbol:t})})),s.init(this.layer,"lineSymbol",(function(t){e._graphicsViewMap.polyline.renderer=new l({symbol:t})})),s.init(this.layer,"pointSymbol",(function(t){e._graphicsViewMap.point.renderer=new l({symbol:t})}))])},t.prototype.detach=function(){this.container.removeAllChildren();for(var e=0,t=this.graphicsViews;e<t.length;e++){var r=t[e];r.destroy(),r.view=null,r.renderer=null}this.graphicsViews.length=0},t.prototype.moveStart=function(){},t.prototype.moveEnd=function(){},t.prototype.viewChange=function(){for(var e=0,t=this.graphicsViews;e<t.length;e++)t[e].viewChange()},r.__decorate([a.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],t)}(c.LayerView2DMixin(h))}).apply(null,i))||(e.exports=n)},WsO6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o,p,s,a,l){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}}))},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"suspendInfo",{get:function(){return this.getSuspendInfo()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"legendEnabled",{get:function(){return!this.suspended&&!0===this.layer.legendEnabled},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!1,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.getSuspendInfo=function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},t.prototype.isUpdating=function(){return!1},r.__decorate([l.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r.__decorate([l.property()],t.prototype,"layer",void 0),r.__decorate([l.property()],t.prototype,"parent",void 0),r.__decorate([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspended",null),r.__decorate([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspendInfo",null),r.__decorate([l.property({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],t.prototype,"legendEnabled",null),r.__decorate([l.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),r.__decorate([l.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r.__decorate([l.subclass("esri.views.layers.LayerView")],t)}(o.HandleOwnerMixin(p.IdentifiableMixin(a.EsriPromiseMixin(n.EventedMixin(i)))))}).apply(null,i))||(e.exports=n)},ZMIQ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,i,n){"use strict";return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([n.subclass("esri.views.layers.support.ClipArea")],t)}(i.JSONSupport)}).apply(null,i))||(e.exports=n)},ts8o:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o,p,s){"use strict";var a={base:o,key:"type",typeMap:{extent:i.Extent,polygon:i.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var i;return r.__extends(t,e),i=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new i({geometry:this.geometry.clone()})},r.__decorate([n.property({types:a,json:{read:p.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),i=r.__decorate([n.subclass("esri.views.layers.support.Geometry")],t)}(s)}).apply(null,i))||(e.exports=n)}}]);