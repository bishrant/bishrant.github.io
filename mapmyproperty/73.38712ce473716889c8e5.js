(function(){var e={"arcgis-js-api/renderers/support/clickToleranceUtils":"/E+R","arcgis-js-api/views/layers/support/popupUtils":"I6zq","esri/views/support/drapedUtils":"NbdF","arcgis-js-api/views/support/drapedUtils":"NbdF","arcgis-js-api/views/2d/layers/MapImageLayerView2D":"bT5A","arcgis-js-api/views/layers/MapImageLayerView":"xNtg"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"/E+R":function(e,t,r){var a,i;a=[r.dj.c(e.i),t],void 0===(i=(function(e,t){"use strict";function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function a(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,a=0;a<e.length;a++){var i=e[a].size;"number"==typeof i&&(t+=i,r++)}return t/r}(e.stops):t}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=void 0,t.calculateTolerance=function(e){var t=e&&e.renderer,i="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return i;var n="visualVariables"in t?function(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.minSize;return(a(t.maxSize,e)+a(r,e))/2})),i=0,n=r.length;if(0===n)return e;for(var s=0;s<n;s++)i+=r[s];var o=Math.floor(i/n);return Math.max(o,e)}(i,t.visualVariables):i;if("simple"===t.type)return r(n,t.symbol);if("unique-value"===t.type){var s=n;return t.uniqueValueInfos.forEach((function(e){s=r(s,e.symbol)})),s}if("class-breaks"===t.type){var o=n;return t.classBreakInfos.forEach((function(e){o=r(o,e.symbol)})),o}return n}}).apply(null,a))||(e.exports=i)},I6zq:function(e,t,r){var a,i;a=[r.dj.c(e.i),t,r("zOht"),r("ll/V"),r("LxLY"),r("k7g7")],void 0===(i=(function(e,t,r,a,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFetchPopupTemplate=t.getRequiredFields=void 0,t.getRequiredFields=function(e,t){return void 0===t&&(t=e.popupTemplate),r.__awaiter(this,void 0,void 0,(function(){var s,o,u,p,l,c,d,f;return r.__generator(this,(function(h){switch(h.label){case 0:return i.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return s=h.sent(),o=t.lastEditInfoEnabled,u=e.objectIdField,p=e.typeIdField,l=e.globalIdField,c=e.relationships,a.includes(s,"*")?[2,["*"]]:o?[4,n.getFeatureEditFields(e)]:[3,3];case 2:return d=h.sent(),[3,4];case 3:d=[],h.label=4;case 4:return f=n.fixFields(e.fields,r.__spreadArrays(s,d)),p&&f.push(p),f&&u&&n.hasField(e.fields,u)&&-1===f.indexOf(u)&&f.push(u),f&&l&&n.hasField(e.fields,l)&&-1===f.indexOf(l)&&f.push(l),c&&c.forEach((function(t){var r=t.keyField;f&&r&&n.hasField(e.fields,r)&&-1===f.indexOf(r)&&f.push(r)})),[2,f]}}))}))},t.getFetchPopupTemplate=function(e,t){return e.popupTemplate?e.popupTemplate:i.isSome(t)&&t.defaultPopupTemplateEnabled&&i.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}).apply(null,a))||(e.exports=i)},NbdF:function(e,t,r){var a,i;a=[r.dj.c(e.i),t,r("TMur"),r("LxLY"),r("8uEs"),r("/E+R")],void 0===(i=(function(e,t,r,a,i,n){"use strict";function s(e,t,a,n){var s;if(void 0===n&&(n=new r.Extent),"2d"===a.type)s=t*a.resolution;else if("3d"===a.type){var o=a.basemapTerrain,u=o.overlayManager,p=u?u.overlayPixelSizeInMapUnits(e):1;s=o&&!o.spatialReference.equals(a.spatialReference)?i.getMetersPerUnitForSR(o.spatialReference)/i.getMetersPerUnitForSR(a.spatialReference):t*p}var l=e.x-s,c=e.y-s,d=e.x+s,f=e.y+s,h=a.spatialReference;return n.xmin=Math.min(l,d),n.ymin=Math.min(c,f),n.xmax=Math.max(l,d),n.ymax=Math.max(c,f),n.spatialReference=h,n}Object.defineProperty(t,"__esModule",{value:!0}),t.intersectsDrapedGeometry=t.createQueryGeometry=void 0,t.createQueryGeometry=s,t.intersectsDrapedGeometry=function(e,t,r){var i=r.toMap(e);return a.isNone(i)?null:s(i,n.calculateTolerance(),r,o).intersects(t)?i:null};var o=new r.Extent}).apply(null,a))||(e.exports=i)},bT5A:function(e,t,r){var a,i;a=[r.dj.c(e.i),t,r("zOht"),r("qsST"),r("qMld"),r("8MXS"),r("Vx27"),r("VTDq"),r("bOAX"),r("6i4F"),r("wke2"),r("WsO6"),r("xNtg"),r("7XLS"),r("NbdF")],void 0===(i=(function(e,t,r,a,i,n,s,o,u,p,l,c,d,f,h){"use strict";var m=a.getLogger("esri.views.2d.layers.MapImageLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageVersion=-1,t}return r.__extends(t,e),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){i.isAbortError(e)||m.error(e)}))},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxWidth,a=t.imageMaxHeight,i=t.version,s=i>=10.3,p=i>=10;this._bitmapContainer=new u.BitmapContainer,this.container.addChild(this._bitmapContainer),this.strategy=new l({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:a,imageRotationSupported:s,imageNormalizationSupported:p,hidpi:!0}),this.imageParameters=new o.ExportImageParameters({view:this.view,layer:this.layer}),this.handles.add(n.init(this.imageParameters,"version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),"mapimagelayerview-update")},t.prototype.detach=function(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this.imageParameters.destroy(),this.imageParameters=null,this._exportImageVersion=-1,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return h.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},t.prototype.fetchImage=function(e,t,a,i){return this.layer.fetchImage(e,t,a,r.__assign({timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp},i))},r.__decorate([s.property()],t.prototype,"strategy",void 0),r.__decorate([s.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),r.__decorate([s.subclass("esri.views.2d.layers.MapImageLayerView2D")],t)}(d.MapImageLayerView(f.RefreshableLayerView(p.LayerView2DMixin(c))))}).apply(null,a))||(e.exports=i)},xNtg:function(e,t,r){var a,i;a=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("LxLY"),r("qMld"),r("Vx27"),r("/E+R"),r("sCbS"),r("I6zq")],void 0===(i=(function(e,t,r,a,i,n,s,o,u,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MapImageLayerView=void 0,t.MapImageLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.fetchPopupFeatures=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var s,u,l,c,d,f,h=this;return r.__generator(this,(function(m){switch(m.label){case 0:return s=this.layer,e?(u=this.get("view.scale"),l=[],c=function(e){return r.__awaiter(h,void 0,void 0,(function(){var a,n,s;return r.__generator(this,(function(o){return a=0===e.minScale||u<=e.minScale,n=0===e.maxScale||u>=e.maxScale,e.visible&&a&&n&&(e.sublayers?e.sublayers.forEach(c):e.popupEnabled&&(s=p.getFetchPopupTemplate(e,r.__assign(r.__assign({},t),{defaultPopupTemplateEnabled:!1})),i.isSome(s)&&l.push({sublayer:e,popupTemplate:s}))),[2]}))}))},d=s.sublayers.toArray().map(c),[4,n.all(d)]):[2,n.reject(new a("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s}))];case 1:return m.sent(),f=l.map((function(a){var n=a.sublayer,s=a.popupTemplate;return r.__awaiter(h,void 0,void 0,(function(){var a,u,l,c,d,f;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,n.load().catch((function(){}))];case 1:return r.sent(),a=n.createQuery(),u=i.isSome(t)?t.event:null,l=o.calculateTolerance({renderer:n.renderer,event:u}),c=this.createFetchPopupFeaturesQueryGeometry(e,l),a.geometry=c,d=a,[4,p.getRequiredFields(n,s)];case 2:return d.outFields=r.sent(),[4,this._loadArcadeModules(s)];case 3:return(f=r.sent())&&f.arcadeUtils.hasGeometryOperations(s)||(a.maxAllowableOffset=c.width/l),[4,n.queryFeatures(a)];case 4:return[2,r.sent().features]}}))}))})),[4,n.eachAlways(f)];case 2:return[2,m.sent().reduce((function(e,t){return t.value?r.__spreadArrays(e,t.value):e}),[]).filter((function(e){return null!=e}))]}}))}))},t.prototype.canResume=function(){var t,r;return!(!e.prototype.canResume.call(this)||null!==(r=null===(t=this.imageParameters)||void 0===t?void 0:t.timeExtent)&&void 0!==r&&r.isEmpty)},t.prototype._loadArcadeModules=function(e){if(e.get("expressionInfos.length"))return u.loadArcade()},r.__decorate([s.property()],t.prototype,"imageParameters",void 0),r.__decorate([s.property()],t.prototype,"layer",void 0),r.__decorate([s.property({dependsOn:["imageParameters.timeExtent"]})],t.prototype,"suspended",void 0),r.__decorate([s.subclass("esri.views.layers.MapImageLayerView")],t)}(e)}}).apply(null,a))||(e.exports=i)}}]);