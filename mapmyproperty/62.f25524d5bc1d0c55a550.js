(function(){var e={"arcgis-js-api/views/layers/support/Path":"20TT","arcgis-js-api/views/2d/layers/LayerView2D":"6i4F","arcgis-js-api/views/layers/support/ClipRect":"7MXx","arcgis-js-api/views/2d/layers/WMSLayerView2D":"ETqY","arcgis-js-api/views/layers/WMSLayerView":"GLSx","arcgis-js-api/layers/support/ExportWMSImageParameters":"UDyV","arcgis-js-api/views/layers/LayerView":"WsO6","arcgis-js-api/views/layers/support/ClipArea":"ZMIQ","arcgis-js-api/views/layers/support/Geometry":"ts8o","arcgis-js-api/layers/support/wmsUtils":"xii5"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"20TT":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(i=(function(e,t,r,n,i){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([n.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r.__decorate([n.subclass("esri.views.layers.support.Path")],t)}(i)}).apply(null,n))||(e.exports=i)},"6i4F":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("YaB4"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(i=(function(e,t,r,n,i,a,o,s,p,l,u,c){Object.defineProperty(t,"__esModule",{value:!0});var d=n.ofType({key:"type",base:p,typeMap:{rect:l,path:c,geometry:u}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new d,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new s.Container),this.handles.add([a.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),a.init(this,["layer.opacity","container"],(function(){var e,r;t.container&&(t.container.opacity=null!==(r=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==r?r:1)}),!0),a.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,n=r.minScale,i=r.maxScale;if(null!=n&&null!=i){var a=!n,o=!i;!a&&e<=n&&(a=!0),!o&&e>=i&&(o=!0),t=a&&o}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},r.__decorate([o.property({type:d,set:function(e){var t=i.referenceSetter(e,this._get("clips"),d);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([o.property()],t.prototype,"moving",void 0),r.__decorate([o.property()],t.prototype,"attached",void 0),r.__decorate([o.property()],t.prototype,"container",void 0),r.__decorate([o.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([o.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([o.property()],t.prototype,"updateRequested",void 0),r.__decorate([o.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([o.property()],t.prototype,"view",void 0),r.__decorate([o.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}).apply(null,n))||(e.exports=i)},"7MXx":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(i=(function(e,t,r,n,i){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r.__decorate([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r.__decorate([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r.__decorate([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),i=r.__decorate([n.subclass("esri.views.layers.support.ClipRect")],t)}(i)}).apply(null,n))||(e.exports=i)},ETqY:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qsST"),r("qMld"),r("Vx27"),r("N7S/"),r("UDyV"),r("bOAX"),r("6i4F"),r("wke2"),r("WsO6"),r("7XLS"),r("GLSx")],void 0===(i=(function(e,t,r,n,i,a,o,s,p,l,u,c,d,y,h){var f=i.getLogger("esri.views.2d.layers.WMSLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=new l.BitmapContainer,t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this.layer;e.supportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(a.reject(new n("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))},t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){a.isAbortError(e)||f.error(e)}))},t.prototype.attach=function(){var e=this,t=this.layer,r=this.view,n=t.imageMaxHeight,i=t.imageMaxWidth;this.strategy=new c({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:n,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new p({layer:t,view:r}),this.handles.add(this._exportWMSImageParameters.watch("version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),"wms")},t.prototype.detach=function(){this.handles.remove("wms"),this.container.removeAllChildren(),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=e.x,r=e.y,n=this.view.spatialReference,i=null,a=0,o=0;this.container.children.some((function(e){var p=e.width,l=e.height,u=e.resolution,c=e.x,d=e.y,y=c+u*p,h=d-u*l;return t>=c&&t<=y&&r<=d&&r>=h&&(i=new s({xmin:c,ymin:h,xmax:y,ymax:d,spatialReference:n}),a=p,o=l,!0)}));var p=i.width/a,l=Math.round((t-i.xmin)/p),u=Math.round((i.ymax-r)/p);return{extent:i,width:a,height:o,x:l,y:u}},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},t.prototype.fetchImage=function(e,t,n,i){return this.layer.fetchImage(e,t,n,r.__assign({timestamp:this.refreshTimestamp},i))},r.__decorate([o.property()],t.prototype,"strategy",void 0),r.__decorate([o.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),r.__decorate([o.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(h.WMSLayerView(y.RefreshableLayerView(u.LayerView2DMixin(d))))}).apply(null,n))||(e.exports=i)},GLSx:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qMld"),r("Vx27")],void 0===(i=(function(e,t,r,n,i,a){Object.defineProperty(t,"__esModule",{value:!0}),t.WMSLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.fetchPopupFeatures=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,a,o,s,p,l,u,c,d;return r.__generator(this,(function(r){if(t=this.layer,!e)return[2,i.reject(new n("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];if(!(a=t.popupEnabled))return[2,i.reject(new n("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:a}))];if(o=this.createFetchPopupFeaturesQuery(e),p=o.width,l=o.height,u=o.x,c=o.y,!((s=o.extent)&&p&&l))throw new n("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:p,height:l});return[2,(d=t.fetchFeatureInfo(s,p,l,u,c))?d.then((function(e){return[e]})):i.resolve([])]}))}))},r.__decorate([a.property()],t.prototype,"layer",void 0),r.__decorate([a.subclass("esri.layers.mixins.WMSLayerView")],t)}(e)}}).apply(null,n))||(e.exports=i)},UDyV:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("eIBl"),r("Vx27"),r("xii5")],void 0===(i=(function(e,t,r,n,i,a,o){var s={visible:"visibleSublayers"},p=[102100,3857,102113,900913],l=[3395,54004];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._layerHandles=new i,t.extent=null,t._scale=null,t.view=null,t}return r.__extends(t,e),Object.defineProperty(t.prototype,"layer",{set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new i),this._layerHandles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(s[e.propertyName])}))])))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layers",{get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibleSublayers",{get:function(){var e=this.scale,t=this.layer.sublayers,r=[];return t&&t.forEach((function t(n){var i=n.minScale,a=n.maxScale,o=n.sublayers;n.visible&&(0===e||(0===i||e<=i)&&(0===a||e>=a))&&(r.unshift(n),o&&o.forEach(t))})),r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wkid",{get:function(){var e=this.extent,t=this.layer.spatialReferences,r=e.spatialReference&&e.spatialReference.wkid;t&&-1===t.indexOf(r)&&e.spatialReference.latestWkid&&(r=e.spatialReference.latestWkid);var n=p.some((function(e){return e===r}));if(!t)return r;if(n){var i=[];t.forEach((function(e){p.indexOf(e)>-1&&i.push(e)})),i.length||t.forEach((function(e){l.indexOf(e)>-1&&i.push(e)})),r=i.length>0?i[0]:p[0]}return r},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){var e=this.extent,t=this.layer,n=this.layers,i=t.imageFormat,a=t.imageTransparency,s=t.spatialReferences,p=t.version,l=this.wkid;s&&-1===s.indexOf(l)&&e.spatialReference.latestWkid&&(l=e.spatialReference.latestWkid);var u=e.xmin,c=e.ymin,d=e.xmax,y=e.ymax,h={bbox:"1.3.0"===t.version&&o.coordsReversed(l)?c+","+u+","+y+","+d:u+","+c+","+d+","+y,format:i,request:"GetMap",service:"WMS",styles:"",transparent:a,version:p};return isNaN(l)||("1.3.0"===p?h.crs="EPSG:"+l:h.srs="EPSG:"+l),r.__assign(r.__assign({},h),{layers:n})},r.__decorate([a.property()],t.prototype,"extent",void 0),r.__decorate([a.property()],t.prototype,"layer",null),r.__decorate([a.property({readOnly:!0,dependsOn:["visibleSublayers"]})],t.prototype,"layers",null),r.__decorate([a.property({type:Number,dependsOn:["view.scale"]})],t.prototype,"scale",null),r.__decorate([a.property()],t.prototype,"view",void 0),r.__decorate([a.property({dependsOn:["layers","layer.imageTransparency"],readOnly:!0})],t.prototype,"version",null),r.__decorate([a.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],t.prototype,"visibleSublayers",null),r.__decorate([a.property()],t.prototype,"wkid",null),r.__decorate([a.subclass("esri.layers.support.ExportWMSImageParameters")],t)}(n)}).apply(null,n))||(e.exports=i)},WsO6:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(i=(function(e,t,r,n,i,a,o,s,p,l){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";throw s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+n+"', id: '"+r+"')",t),t}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspendInfo",{get:function(){return this.getSuspendInfo()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.getSuspendInfo=function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},t.prototype.isUpdating=function(){return!1},r.__decorate([l.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r.__decorate([l.property()],t.prototype,"layer",void 0),r.__decorate([l.property()],t.prototype,"parent",void 0),r.__decorate([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspended",null),r.__decorate([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspendInfo",null),r.__decorate([l.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),r.__decorate([l.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r.__decorate([l.subclass("esri.views.layers.LayerView")],t)}(a.HandleOwnerMixin(o.IdentifiableMixin(p.EsriPromiseMixin(i.EventedMixin(n)))))}).apply(null,n))||(e.exports=i)},ZMIQ:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(i=(function(e,t,r,n,i){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([i.subclass("esri.views.layers.support.ClipArea")],t)}(n.JSONSupport)}).apply(null,n))||(e.exports=i)},ts8o:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(i=(function(e,t,r,n,i,a,o,s){var p={base:a,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var n;return r.__extends(t,e),n=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({geometry:this.geometry.clone()})},r.__decorate([i.property({types:p,json:{read:o.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),n=r.__decorate([i.subclass("esri.views.layers.support.Geometry")],t)}(s)}).apply(null,n))||(e.exports=i)},xii5:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("ma1f"),r("jfWY"),r("N7S/"),r("Z4y+")],void 0===(i=(function(e,t,r,n,i,a){Object.defineProperty(t,"__esModule",{value:!0});var o=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],s={84:4326,83:4269,27:4267};function p(e){return o.some((function(t){return e>=t[0]&&e<=t[1]}))}function l(e,t){var r=t&&t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function u(e,t,r){var n=l(e,t);return n?n.textContent:r}function c(e,t,r){if(!e)return null;var n,o,s,p,l=parseFloat(e.getAttribute("minx")),u=parseFloat(e.getAttribute("miny")),c=parseFloat(e.getAttribute("maxx")),d=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(u)?-Number.MAX_VALUE:u,o=isNaN(l)?-Number.MAX_VALUE:l,s=isNaN(d)?Number.MAX_VALUE:d,p=isNaN(c)?Number.MAX_VALUE:c):(n=isNaN(l)?-Number.MAX_VALUE:l,o=isNaN(u)?-Number.MAX_VALUE:u,s=isNaN(c)?Number.MAX_VALUE:c,p=isNaN(d)?Number.MAX_VALUE:d);var y=new a({wkid:t});return new i({xmin:n,ymin:o,xmax:s,ymax:p,spatialReference:y})}function d(e,t){var r=l(t,e),i=l("DCPType",r);if(i){var a=l("HTTP",i);if(a){var o=l("Get",a);if(o){var s=function(e,t,r,n){var i=l("OnlineResource",r);return i?i.getAttribute("xlink:href"):null}(0,0,o);if(s)return s.indexOf("&")===s.length-1&&(s=s.substring(0,s.length-1)),function(e,t){var r=[],i=n.urlToObject(e);for(var a in i.query)i.query.hasOwnProperty(a)&&-1===t.indexOf(a.toLowerCase())&&r.push(a+"="+i.query[a]);return i.path+(r.length?"?"+r.join("&"):"")}(s,["service","request"])}}}return null}function y(e,t){var r=e.getElementsByTagName("Operation");if(!r||!r.length){var n=l(t,e).getElementsByTagName("Format");return Array.prototype.slice.call(n).map((function(e){return e.textContent}))}var i=Array.prototype.slice.call(r),a=[];return i.forEach((function(e){if(e.getAttribute("name")===t){var r=e.getElementsByTagName("Format");Array.prototype.slice.call(r).forEach((function(e){a.push(e.textContent)}))}})),a}function h(e,t,r){var n=function(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(n.nodeType===Node.ELEMENT_NODE&&n.nodeName===e)return n}return null}(t,e);if(!n)return r;var i=n.textContent;if(null==i||""===i)return r;var a=Number(i);return isNaN(a)?r:a}function f(e,t,r){if(!e)return null;var n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},o=l("LatLonBoundingBox",e),d=l("EX_GeographicBoundingBox",e),y=null;o&&(y=c(o,4326)),d&&((y=new i(0,0,0,0,new a({wkid:4326}))).xmin=parseFloat(u("westBoundLongitude",d,0)),y.ymin=parseFloat(u("southBoundLatitude",d,0)),y.xmax=parseFloat(u("eastBoundLongitude",d,0)),y.ymax=parseFloat(u("northBoundLatitude",d,0))),o||d||(y=new i(-180,-90,180,90,new a({wkid:4326}))),n.minScale=h(e,"MaxScaleDenominator",0),n.maxScale=h(e,"MinScaleDenominator",0);var v=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((function(e){if("Name"===e.nodeName)n.name=e.textContent||"";else if("Title"===e.nodeName)n.title=e.textContent||"";else if("Abstract"===e.nodeName)n.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var i=e.getAttribute(v);i&&0===i.indexOf("EPSG:")&&(0===(o=parseInt(i.substring(5),10))||isNaN(o)||y||(y="1.3.0"===t?c(e,o,p(o)):c(e,o)));var a=i&&i.indexOf(":");if(a&&a>-1){var o;0===(o=parseInt(i.substring(a+1,i.length),10))||isNaN(o)||(o=s[o]?s[o]:o);var u="1.3.0"===t?c(e,o,p(o)):c(e,o);n.fullExtents.push(u)}}else if(e.nodeName===v)e.textContent.split(" ").forEach((function(e){0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(s[e]&&(e=s[e]),-1===n.spatialReferences.indexOf(e)&&n.spatialReferences.push(e))}));else if("Style"!==e.nodeName||n.legendURL){if("Layer"===e.nodeName){var d=f(e,t,r);d&&(d.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(d))}}else{var h=l("LegendURL",e);if(h){var g=l("OnlineResource",h);g&&(n.legendURL=g.getAttribute("xlink:href"))}}})),n.extent=y&&y.toJSON(),n}t.parseCapabilities=function(e){if(!e)return null;var t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var n=e.documentElement;if("ServiceExceptionReport"===n.nodeName){var a=Array.prototype.slice.call(n.childNodes).map((function(e){return e.textContent})).join("\r\n");throw new r("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",a)}var o=l("Layer",n);if(!o)return null;var s,p,c,h,v="WMS_Capabilities"===n.nodeName||"WMT_MS_Capabilities"===n.nodeName?n.getAttribute("version"):"1.3.0",g=l("Service",n),m=u("Title",g,"")||u("Name",g,""),b=u("AccessConstraints",g,""),_=u("Abstract",g,""),x=parseInt(u("MaxWidth",g,5e3),10),w=parseInt(u("MaxHeight",g,5e3),10),O=l("Capability",n),N=y(n,"GetMap"),S=d(n,"GetMap"),M=f(o,v,t),R=0;if(Array.prototype.slice.call(O.childNodes).forEach((function(e){"Layer"===e.nodeName&&(0===R?s=e:1===R?(M.name&&(M.name="",M.sublayers.push(f(s,v,t))),M.sublayers.push(f(e,v,t))):M.sublayers.push(f(e,v,t)),R++)})),!M)return null;var j=M.fullExtents;if((p=M.sublayers)||(p=[]),0===p.length&&p.push(M),!(c=M.extent)){var E=new i(p[0].extent);M.extent=E.toJSON(),c=M.extent}!(h=M.spatialReferences).length&&p.length>0&&p.forEach((function(e){h.length||(h=e.spatialReferences||function e(t){var r=[];return t.sublayers.forEach((function(t){!r.length&&t.spatialReferences.length&&(r=t.spatialReferences||e(t))})),r}(e))}));var L,A=d(n,"GetFeatureInfo");if(A){var P=y(n,"GetFeatureInfo");P.indexOf("text/html")>-1?L="text/html":P.indexOf("text/plain")>-1&&(L="text/plain")}L||function e(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((function(t){e(t)})))}(M);var I=function e(t){var r=[];return t.forEach((function(t){r.push(t),t.sublayers&&t.sublayers.length&&(r=r.concat(e(t.sublayers)),delete t.sublayers)})),r}(p);return{copyright:b,description:_,extent:c,fullExtents:j,featureInfoFormat:L,featureInfoUrl:A,mapUrl:S,maxImageWidth:x,maxImageHeight:w,maxScale:M.maxScale||0,minScale:M.minScale||0,layers:I,spatialReferences:h,supportedImageFormatTypes:N,title:m,version:v}},t.coordsReversed=p,t.getPopupLayers=function(e){return e.length?e.filter((function(e){return e.popupEnabled&&e.name&&e.queryable})).map((function(e){return e.name})).join(","):""}}).apply(null,n))||(e.exports=i)}}]);