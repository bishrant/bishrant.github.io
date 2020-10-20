(function(){var e={"arcgis-js-api/views/2d/layers/imagery/ImageryView2D":"8ZbO","arcgis-js-api/layers/support/commonProperties":"EtsK","esri/layers/support/commonProperties":"EtsK","arcgis-js-api/views/layers/support/popupUtils":"I6zq","arcgis-js-api/views/2d/layers/imagery/ImageryGraphicsView2D":"JZEF","esri/core/LRUCache":"W6K4","arcgis-js-api/core/LRUCache":"W6K4","arcgis-js-api/views/2d/layers/ImageryLayerView2D":"Zruw","arcgis-js-api/views/layers/ImageryLayerView":"yx9Y"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"8ZbO":function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("zOht"),i("jZlN"),i("qsST"),i("qMld"),i("jBNx"),i("Vx27"),i("SAwq"),i("bOAX"),i("1Mg+"),i("Ob6M"),i("6i4F"),i("wke2"),i("WsO6")],void 0===(n=(function(e,t,i,r,n,a,o,s,p,l,u,c,d,y,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=n.getLogger("esri.views.2d.layers.imagery.ImageryView2D"),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=new u.Container,t.type="Imagery",t._bitmapView=null,t}return i.__extends(t,e),Object.defineProperty(t.prototype,"updating",{get:function(){var e;return null===(e=this.strategy)||void 0===e?void 0:e.updating},enumerable:!1,configurable:!0}),t.prototype.update=function(e){this.strategy.update(e).catch((function(e){a.isAbortError(e)||f.error(e)}))},t.prototype.detach=function(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()},t.prototype.hitTest=function(e,t){if(this.suspended)return a.resolve(null);var i=this.view.toMap(o.createScreenPoint(e,t));return a.resolve(new r({attributes:{},geometry:i,layer:this.layer}))},t.prototype.attach=function(){var e=this,t=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new l.BitmapContainer,this.strategy=new y({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:i,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}})},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){},t.prototype.install=function(e){this.container.addChild(this._bitmapView),e.addChild(this.container)},t.prototype.uninstall=function(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)},t.prototype.redraw=function(){var e=this;this.strategy.updateExports((function(t){t.source instanceof HTMLImageElement?t.requestRender():e.layer.applyRenderer({pixelBlock:t.source.pixelBlock}).then((function(i){var r=t.source;r.pixelBlock=i.pixelBlock,r.filter=function(t){return e.layer.applyFilter(t)},e.container.requestRender()}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},t.prototype.getPixelData=function(){if(this.updating)return null;var e=this.strategy.container.children;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){var t=this.view.extent,i=e.map((function(e){return e.source})).filter((function(e){return e.extent&&e.extent.intersects(t)})).map((function(e){return{extent:e.extent,pixelBlock:e.originalPixelBlock}})),r=p.mosaicPixelData(i,t);return r?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null},t.prototype._fetchImage=function(e,t,i,r){var n=this;return(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,r).then((function(e){return e.imageElement?e.imageElement:n.layer.applyRenderer(e.pixelData,{signal:r.signal}).then((function(t){var i=new c.default(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return i.filter=function(e){return n.layer.applyFilter(e)},i}))}))},i.__decorate([s.property()],t.prototype,"container",void 0),i.__decorate([s.property()],t.prototype,"layer",void 0),i.__decorate([s.property()],t.prototype,"strategy",void 0),i.__decorate([s.property()],t.prototype,"timeExtent",void 0),i.__decorate([s.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",null),i.__decorate([s.enumeration({imagery:"Imagery"})],t.prototype,"type",void 0),i.__decorate([s.subclass("esri.views.2d.layers.imagery.ImageryView2D")],t)}(d.LayerView2DMixin(h));t.default=g}).apply(null,r))||(e.exports=n)},EtsK:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("zOht"),i("9gfz"),i("o2T8"),i("Kg8D"),i("ojLd"),i("5ldw"),i("3fUp")],void 0===(n=(function(e,t,i,r,n,a,o,s,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.combinedViewLayerTimeExtentProperty=t.opacityDrawingInfo=t.opacity=t.readOnlyService=t.elevationInfo=t.legendEnabled=t.url=t.labelsVisible=t.popupEnabled=t.screenSizePerspectiveEnabled=void 0,t.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;n.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,t,i,r){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||a.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},r))&&(t[i]=e)}}}}}},t.popupEnabled={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:function(e,t){return!t.disablePopup}},write:{enabled:!0,writer:function(e,t,i){t[i]=!e}}}},t.labelsVisible={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},t.url={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:o.write}}},t.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},t.elevationInfo={value:null,type:s,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}},t.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},t.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},t.opacityDrawingInfo=i.__assign(i.__assign({},t.opacity),{json:i.__assign(i.__assign({},t.opacity.json),{origins:{"web-document":i.__assign(i.__assign({},t.opacity.json.origins["web-document"]),{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,t,i){return i&&"service"!==i.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?p.transparencyToOpacity(t.layerDefinition.drawingInfo.transparency):void 0:p.transparencyToOpacity(t.drawingInfo.transparency)}}})}),t.combinedViewLayerTimeExtentProperty={type:r,dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get:function(){var e,t;if(!(null===(e=this.layer)||void 0===e?void 0:e.timeInfo))return null;var i=null===(t=this.view)||void 0===t?void 0:t.timeExtent,r=this.layer.timeExtent,n=this.layer.useViewTime?i&&r?i.intersection(r):i||r:r;if(!n||n.isEmpty)return n;var a=this.layer.timeOffset,o=a?n.offset(-a.value,a.unit):n,s=this._get("timeExtent");return o.equals(s)?s:o}}}).apply(null,r))||(e.exports=n)},I6zq:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("zOht"),i("ll/V"),i("LxLY"),i("k7g7")],void 0===(n=(function(e,t,i,r,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFetchPopupTemplate=t.getRequiredFields=void 0,t.getRequiredFields=function(e,t){return void 0===t&&(t=e.popupTemplate),i.__awaiter(this,void 0,void 0,(function(){var o,s,p,l,u,c,d,y;return i.__generator(this,(function(h){switch(h.label){case 0:return n.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return o=h.sent(),s=t.lastEditInfoEnabled,p=e.objectIdField,l=e.typeIdField,u=e.globalIdField,c=e.relationships,r.includes(o,"*")?[2,["*"]]:s?[4,a.getFeatureEditFields(e)]:[3,3];case 2:return d=h.sent(),[3,4];case 3:d=[],h.label=4;case 4:return y=a.fixFields(e.fields,i.__spreadArrays(o,d)),l&&y.push(l),y&&p&&a.hasField(e.fields,p)&&-1===y.indexOf(p)&&y.push(p),y&&u&&a.hasField(e.fields,u)&&-1===y.indexOf(u)&&y.push(u),c&&c.forEach((function(t){var i=t.keyField;y&&i&&a.hasField(e.fields,i)&&-1===y.indexOf(i)&&y.push(i)})),[2,y]}}))}))},t.getFetchPopupTemplate=function(e,t){return e.popupTemplate?e.popupTemplate:n.isSome(t)&&t.defaultPopupTemplateEnabled&&n.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}).apply(null,r))||(e.exports=n)},JZEF:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("zOht"),i("jZlN"),i("qsST"),i("qMld"),i("jBNx"),i("Vx27"),i("N7S/"),i("ssiz"),i("1Mg+"),i("6i4F"),i("apjU"),i("WsO6")],void 0===(n=(function(e,t,i,r,n,a,o,s,p,l,u,c,d,y){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=n.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D"),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=new u.Container,t._graphicsView=null,t.type="Graphics",t._graphics=new l.default,t._updateGraphics=a.debounce((function(e,r){return i.__awaiter(t,void 0,void 0,(function(){var t,n,o,s,l,u,c,d,y,h=this;return i.__generator(this,(function(i){switch(i.label){case 0:return e.stationary?(n=new p({xmin:(t=e.state).extent.xmin,ymin:t.extent.ymin,xmax:t.extent.xmax,ymax:t.extent.ymax,spatialReference:t.spatialReference}),o=e.state.size[0],s=e.state.size[1],(l={}).timeExtent=this.timeExtent,l.requestAsImageElement=!1,l.signal=r,u=this._getVectorFieldExportParams({extent:n,width:o,height:s}),[4,this.layer.fetchImage(u.extent,u.width,u.height,l)]):[2];case 1:return c=i.sent(),"vector-field"!==(d=this.layer.renderer).type?[3,4]:(this._pixelData={extent:u.extent,pixelBlock:c.pixelData.pixelBlock},[4,d.getGraphicsFromPixelData(c.pixelData,"vector-uv"===this.layer.rasterInfo.dataType)]);case 2:return y=i.sent(),this._graphicsView.update(e),[4,a.after(0).then((function(){h._graphics.set("items",y)}))];case 3:i.sent(),i.label=4;case 4:return[2]}}))}))})),t}return i.__extends(t,e),Object.defineProperty(t.prototype,"updating",{get:function(){var e;return null===(e=this._graphicsView)||void 0===e?void 0:e.updating},enumerable:!1,configurable:!0}),t.prototype.update=function(e){this._updateGraphics(e).catch((function(e){a.isAbortError(e)||h.error(e)}))},t.prototype.hitTest=function(e,t){if(this.suspended)return a.resolve(null);var i=this.view.toMap(o.createScreenPoint(e,t));return a.resolve(new r({attributes:{},geometry:i,layer:this.layer}))},t.prototype.attach=function(){var e=this;this._graphicsView=new d.default({view:this.view,graphics:this._graphics,requestUpdateCallback:function(){return e.requestUpdate()}})},t.prototype.detach=function(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){},t.prototype.install=function(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)},t.prototype.uninstall=function(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)},t.prototype.isUpdating=function(){return this._graphicsView.updating||this.updateRequested},t.prototype.getPixelData=function(){return this.updating?null:this._pixelData},t.prototype.redraw=function(){},t.prototype._getVectorFieldExportParams=function(e){var t,i,r,n=e.extent,a=e.width,o=e.height,s=this.layer,p=null===(t=s.fullExtent)||void 0===t?void 0:t.xmin,l=null===(i=s.fullExtent)||void 0===i?void 0:i.ymax;"vector-field"===s.renderer.type&&(r=s.renderer.symbolTileSize),r=Math.max(r||0,30),a=Math.ceil(a*(1/r)),o=Math.ceil(o*(1/r));var u=(n.xmax-n.xmin)/a,c=(n.ymax-n.ymin)/o;return n.xmin=p+Math.floor((n.xmin-p)/u)*u,n.xmax=p+Math.ceil((n.xmax-p)/u)*u,n.ymin=l+Math.floor((n.ymin-l)/c)*c,n.ymax=l+Math.ceil((n.ymax-l)/c)*c,{extent:n,width:a,height:o}},i.__decorate([s.property()],t.prototype,"container",void 0),i.__decorate([s.property()],t.prototype,"layer",void 0),i.__decorate([s.property()],t.prototype,"timeExtent",void 0),i.__decorate([s.property({dependsOn:["_graphicsView.updating"]})],t.prototype,"updating",null),i.__decorate([s.property()],t.prototype,"_graphicsView",void 0),i.__decorate([s.enumeration({graphics:"Graphics"})],t.prototype,"type",void 0),i.__decorate([s.subclass("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],t)}(c.LayerView2DMixin(y));t.default=f}).apply(null,r))||(e.exports=n)},W6K4:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("r7jh")],void 0===(n=(function(e,t,i){"use strict";return function(){function e(e,t){this._storage=new i.MemCacheStorage,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}return e.prototype.put=function(e,t,i){this._storage.put(e,t,i,1)},e.prototype.pop=function(e){return this._storage.pop(e)},e.prototype.get=function(e){return this._storage.get(e)},e.prototype.clear=function(){this._storage.clearAll()},e.prototype.destroy=function(){this._storage.clearAll()},Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._storage.maxSize},set:function(e){this._storage.maxSize=e},enumerable:!1,configurable:!0}),e}()}).apply(null,r))||(e.exports=n)},Zruw:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("zOht"),i("qMld"),i("8MXS"),i("Vx27"),i("6i4F"),i("JZEF"),i("8ZbO"),i("yx9Y"),i("WsO6"),i("7XLS")],void 0===(n=(function(e,t,i,r,n,a,o,s,p,l,u,c){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageVersion=-1,t}return i.__extends(t,e),Object.defineProperty(t.prototype,"pixelData",{get:function(){return this.updating?null:this.subview.getPixelData()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!(this.subview&&!this.subview.updating)},enumerable:!1,configurable:!0}),t.prototype.hitTest=function(e,t){return this.suspended||!this.subview?r.resolve(null):this.subview.hitTest(e,t)},t.prototype.update=function(e){var t;null===(t=this.subview)||void 0===t||t.update(e)},t.prototype.attach=function(){var e=this;this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([n.init(this,"layer.exportImageServiceParameters.version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),this.watch("timeExtent",(function(){e.subview.timeExtent=e.timeExtent,e.requestUpdate()})),this.layer.on("redraw",(function(){return e.subview.redraw()})),n.watch(this.layer,"renderer",(function(){return e._setSubView()}))],"imagerylayerview-update")},t.prototype.detach=function(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return!this.subview||this.subview.isUpdating()},t.prototype._setSubView=function(){var e,t,i,r="Imagery";"vector-field"===(null===(e=this.layer.renderer)||void 0===e?void 0:e.type)&&"lerc"===this.layer.format&&(r="Graphics"),this.subview&&this.subview.type===r||(null===(t=this.subview)||void 0===t||t.uninstall(this.container),null===(i=this.subview)||void 0===i||i.destroy(),this.subview="Imagery"===r?new p.default({layer:this.layer,view:this.view}):new s.default({layer:this.layer,view:this.view}),this.subview.attach(),this.subview.install(this.container)),this.requestUpdate()},i.__decorate([a.property({dependsOn:["updating"]})],t.prototype,"pixelData",null),i.__decorate([a.property({readOnly:!0,dependsOn:["subview.updating"]})],t.prototype,"updating",null),i.__decorate([a.property()],t.prototype,"subview",void 0),i.__decorate([a.subclass("esri.views.2d.layers.ImageryLayerView2D")],t)}(l.ImageryLayerView(c.RefreshableLayerView(o.LayerView2DMixin(u))))}).apply(null,r))||(e.exports=n)},yx9Y:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("zOht"),i("ma1f"),i("LxLY"),i("qMld"),i("Vx27"),i("oxlp"),i("EtsK"),i("IpeC"),i("I6zq")],void 0===(n=(function(e,t,i,r,n,a,o,s,p,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageryLayerView=void 0,t.ImageryLayerView=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.view=null,t}return i.__extends(t,e),t.prototype.fetchPopupFeatures=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var o,p,c,d,y,h,f,g;return i.__generator(this,(function(i){switch(i.label){case 0:if(o=this.layer,!e)return[2,a.reject(new r("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}))];if(p=o.popupEnabled,c=u.getFetchPopupTemplate(o,t),!p||!n.isSome(c))throw new r("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:c});return[4,c.getRequiredFields()];case 1:return d=i.sent(),(y=new l).geometry=e,y.outFields=d,y.outSpatialReference=e.spatialReference,h=this.view.resolution,f="2d"===this.view.type?new s(h,h,this.view.spatialReference):new s(.5*h,.5*h,this.view.spatialReference),[2,o.queryVisibleRasters(y,{returnDomainValues:!0,returnTopmostRaster:(g=c.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1}).returnTopmostRaster,pixelSize:f,showNoDataRecords:g.showNoDataRecords}).then((function(e){return e}))]}}))}))},t.prototype.canResume=function(){var t;return!(!e.prototype.canResume.call(this)||null!==(t=this.timeExtent)&&void 0!==t&&t.isEmpty)},i.__decorate([o.property()],t.prototype,"layer",void 0),i.__decorate([o.property({dependsOn:["timeExtent"]})],t.prototype,"suspended",void 0),i.__decorate([o.property(p.combinedViewLayerTimeExtentProperty)],t.prototype,"timeExtent",void 0),i.__decorate([o.property()],t.prototype,"view",void 0),i.__decorate([o.subclass("esri.views.layers.ImageryLayerView")],t)}(e)}}).apply(null,r))||(e.exports=n)}}]);