(function(){var e={"arcgis-js-api/views/2d/layers/WMSLayerView2D":"ETqY","arcgis-js-api/views/layers/WMSLayerView":"GLSx"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{ETqY:function(e,t,i){var r,a;r=[i.dj.c(e.i),t,i("zOht"),i("ma1f"),i("qsST"),i("qMld"),i("Vx27"),i("N7S/"),i("UDyV"),i("bOAX"),i("6i4F"),i("wke2"),i("WsO6"),i("7XLS"),i("GLSx")],void 0===(a=(function(e,t,i,r,a,n,o,s,p,u,h,c,d,y,l){"use strict";var f=a.getLogger("esri.views.2d.layers.WMSLayerView2D");return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.initialize=function(){var e=this.layer;e.supportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(n.reject(new r("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))},t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){n.isAbortError(e)||f.error(e)}))},t.prototype.attach=function(){var e=this,t=this.layer,i=this.view,r=t.imageMaxHeight,a=t.imageMaxWidth;this._bitmapContainer=new u.BitmapContainer,this.container.addChild(this._bitmapContainer),this.strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new p({layer:t,view:i}),this.handles.add(this._exportWMSImageParameters.watch("version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),"wms")},t.prototype.detach=function(){this.handles.remove("wms"),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=e.x,i=e.y,r=this.view.spatialReference,a=null,n=0,o=0;this._bitmapContainer.children.some((function(e){var p=e.width,u=e.height,h=e.resolution,c=e.x,d=e.y,y=c+h*p,l=d-h*u;return t>=c&&t<=y&&i<=d&&i>=l&&(a=new s({xmin:c,ymin:l,xmax:y,ymax:d,spatialReference:r}),n=p,o=u,!0)}));var p=a.width/n,u=Math.round((t-a.xmin)/p),h=Math.round((a.ymax-i)/p);return{extent:a,width:n,height:o,x:u,y:h}},t.prototype.doRefresh=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},t.prototype.fetchImage=function(e,t,r,a){return this.layer.fetchImage(e,t,r,i.__assign({timeExtent:this._exportWMSImageParameters.timeExtent,timestamp:this.refreshTimestamp},a))},i.__decorate([o.property()],t.prototype,"strategy",void 0),i.__decorate([o.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),i.__decorate([o.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(l.WMSLayerView(y.RefreshableLayerView(h.LayerView2DMixin(d))))}).apply(null,r))||(e.exports=a)},GLSx:function(e,t,i){var r,a;r=[i.dj.c(e.i),t,i("zOht"),i("ma1f"),i("qMld"),i("Vx27")],void 0===(a=(function(e,t,i,r,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WMSLayerView=void 0,t.WMSLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.fetchPopupFeatures=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,n,o,s,p,u,h,c,d;return i.__generator(this,(function(i){if(t=this.layer,!e)return[2,a.reject(new r("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];if(!(n=t.popupEnabled))return[2,a.reject(new r("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n}))];if(o=this.createFetchPopupFeaturesQuery(e),p=o.width,u=o.height,h=o.x,c=o.y,!((s=o.extent)&&p&&u))throw new r("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:p,height:u});return[2,(d=t.fetchFeatureInfo(s,p,u,h,c))?d.then((function(e){return[e]})):a.resolve([])]}))}))},i.__decorate([n.property()],t.prototype,"layer",void 0),i.__decorate([n.subclass("esri.layers.mixins.WMSLayerView")],t)}(e)}}).apply(null,r))||(e.exports=a)}}]);