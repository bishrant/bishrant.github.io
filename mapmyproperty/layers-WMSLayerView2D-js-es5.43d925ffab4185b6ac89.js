!function(){function e(t,n,r){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(t,n,r||t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{JTUT:function(e,a,u){"use strict";u.r(a);var p,l,h=u("pO5D"),y=(u("wSAH"),u("6S2I")),d=(u("zqDF"),u("WbKI")),f=u("04ZG"),b=u("zlDU"),v=(u("4EHJ"),u("ju1D"),u("9AIY"),u("9MzC")),O=u("OvF4"),g=u("bHqs"),j=u("NloG"),m=u("IvSi"),w=u("uAeW"),k=u("LTnl"),P=u("Vm2Q"),x=u("vbiG"),R=y.a.getLogger("esri.views.2d.layers.WMSLayerView2D"),I=function(e){s(l,e);var a,u,p=c(l);function l(){return i(this,l),p.apply(this,arguments)}return o(l,[{key:"initialize",value:function(){var e=this.layer,t=this.view;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new b.a("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}},{key:"hitTest",value:function(){return null}},{key:"update",value:function(e){this.strategy.update(e).catch((function(e){Object(v.m)(e)||R.error(e)}))}},{key:"attach",value:function(){var e=this,t=this.layer,n=t.imageMaxHeight,r=t.imageMaxWidth;this._bitmapContainer=new k.a,this.container.addChild(this._bitmapContainer),this.strategy=new x.a({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:n,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(function(){return e.requestUpdate()})),"exportImageVersion")}},{key:"detach",value:function(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"createFetchPopupFeaturesQuery",value:function(e){var t=this.view,n=this._bitmapContainer,r=e.x,i=e.y,a=t.spatialReference,o=null,s=0,u=0;if(n.children.some((function(e){var t=e.width,n=e.height,c=e.resolution,p=e.x,l=e.y,h=p+c*t,y=l-c*n;return r>=p&&r<=h&&i<=l&&i>=y&&(o=new O.a({xmin:p,ymin:y,xmax:h,ymax:l,spatialReference:a}),s=t,u=n,!0)})),!o)return null;var c=o.width/s,p=Math.round((r-o.xmin)/c),l=Math.round((o.ymax-i)/c);return{extent:o,width:s,height:u,x:p,y:l}}},{key:"doRefresh",value:(a=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})),u=function(){var e=this,t=arguments;return new Promise((function(n,i){var o=a.apply(e,t);function s(e){r(o,n,i,s,u,"next",e)}function u(e){r(o,n,i,s,u,"throw",e)}s(void 0)}))},function(){return u.apply(this,arguments)})},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"fetchImage",value:function(e,r,i,a){return this.layer.fetchImage(e,r,i,function(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({timeExtent:this.timeExtent,timestamp:this.refreshTimestamp},a))}}]),l}((p=Object(g.a)(Object(P.a)(j.a)),l=function(e){s(n,e);var t=c(n);function n(){return i(this,n),t.apply(this,arguments)}return o(n,[{key:"initialize",value:function(){this.exportImageParameters=new w.a({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters.destroy(),this.exportImageParameters=null}},{key:"exportImageVersion",get:function(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}},{key:"fetchPopupFeatures",value:function(e){var t=this.layer;if(!e)return Promise.reject(new b.a("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));var n=t.popupEnabled;if(!n)return Promise.reject(new b.a("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n}));var r=this.createFetchPopupFeaturesQuery(e);if(!r)return Promise.resolve([]);var i=r.extent,a=r.width,o=r.height,s=r.x,u=r.y;if(!(i&&a&&o))throw new b.a("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:a,height:o});var c=t.fetchFeatureInfo(i,a,o,s,u);return Promise.resolve(c?[c]:[])}}]),n}(p),Object(h.a)([Object(d.b)()],l.prototype,"exportImageParameters",void 0),Object(h.a)([Object(d.b)({readOnly:!0})],l.prototype,"exportImageVersion",null),Object(h.a)([Object(d.b)()],l.prototype,"layer",void 0),Object(h.a)([Object(d.b)(m.a)],l.prototype,"timeExtent",void 0),l=Object(h.a)([Object(f.a)("esri.layers.mixins.WMSLayerView")],l)));Object(h.a)([Object(d.b)()],I.prototype,"strategy",void 0),Object(h.a)([Object(d.b)()],I.prototype,"updating",void 0),I=Object(h.a)([Object(f.a)("esri.views.2d.layers.WMSLayerView2D")],I),a.default=I},NloG:function(e,t,n){"use strict";var r=n("pO5D"),a=(n("wSAH"),n("6S2I")),u=(n("zqDF"),n("WbKI")),p=n("04ZG"),l=(n("4EHJ"),n("ju1D"),n("9AIY"),n("/CmD")),h=n("zm0L"),y=n("pdg3"),d=n("+rMe"),f=n("kJYu"),b=function(e){s(n,e);var t=c(n);function n(e){var r;return i(this,n),(r=t.call(this,e)).layer=null,r.parent=null,r}return o(n,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";throw a.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(n,"')"),t),t}}))}},{key:"fullOpacity",get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),n}(Object(f.b)(Object(y.a)(Object(d.b)(h.a.EventedMixin(l.a)))));Object(r.a)([Object(u.b)()],b.prototype,"fullOpacity",null),Object(r.a)([Object(u.b)()],b.prototype,"layer",void 0),Object(r.a)([Object(u.b)()],b.prototype,"parent",void 0),Object(r.a)([Object(u.b)({readOnly:!0})],b.prototype,"suspended",null),Object(r.a)([Object(u.b)({readOnly:!0})],b.prototype,"suspendInfo",null),Object(r.a)([Object(u.b)({readOnly:!0})],b.prototype,"legendEnabled",null),Object(r.a)([Object(u.b)({type:Boolean,readOnly:!0})],b.prototype,"updating",null),Object(r.a)([Object(u.b)()],b.prototype,"visible",null),b=Object(r.a)([Object(p.a)("esri.views.layers.LayerView")],b),t.a=b},Vm2Q:function(t,n,r){"use strict";r.d(n,"a",(function(){return q}));var a,u=r("pO5D"),p=(r("wSAH"),r("6S2I"),r("zqDF"),r("WbKI")),h=r("04ZG"),y=(r("4EHJ"),r("ju1D"),r("9AIY"),r("LE9a")),d=r("fX31"),f=r("N5XI"),b=r("ZuQG"),v=r("L1EH"),O=r("AMBt"),g=r("N2DF"),j=r("OvF4"),m=r("Ehki"),w=r("qatw");r("4GrV");var k={base:g.a,key:"type",typeMap:{extent:j.a,polygon:m.a}},P=a=function(e){s(n,e);var t=c(n);function n(){var e;return i(this,n),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return o(n,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new a({geometry:this.geometry.clone()})}}]),n}(b.a);Object(u.a)([Object(p.b)({types:k,json:{read:w.a,write:!0}})],P.prototype,"geometry",void 0),Object(u.a)([Object(p.b)({readOnly:!0})],P.prototype,"version",null);var x=P=a=Object(u.a)([Object(h.a)("esri.views.layers.support.Geometry")],P),R=function(e){s(n,e);var t=c(n);function n(){var e;return i(this,n),(e=t.apply(this,arguments)).type="path",e.path=[],e}return o(n,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),n}(b.a);Object(u.a)([Object(p.b)({type:[[[Number]]],json:{write:!0}})],R.prototype,"path",void 0),Object(u.a)([Object(p.b)({readOnly:!0})],R.prototype,"version",null),R=Object(u.a)([Object(h.a)("esri.views.layers.support.Path")],R);var I=y.a.ofType({key:"type",base:b.a,typeMap:{rect:v.a,path:R,geometry:x}}),q=function(t){var n=function(t){s(r,t);var n=c(r);function r(){var e;return i(this,r),(e=n.apply(this,arguments)).clips=new I,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return o(r,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new O.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(f.init)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),Object(f.init)(this,["layer.opacity","container"],(function(){var e,n;t.container&&(t.container.opacity=null!=(e=null==(n=t.layer)?void 0:n.opacity)?e:1)}),!0),Object(f.init)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),Object(f.init)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}},{key:"isVisibleAtScale",value:function(e){var t=!0,n=this.layer,r=n.minScale,i=n.maxScale;if(null!=r&&null!=i){var a=!r,o=!i;!a&&e<=r&&(a=!0),!o&&e>=i&&(o=!0),t=a&&o}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!e(l(r.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),r}(t);return Object(u.a)([Object(p.b)({type:I,set:function(e){var t=Object(d.b)(e,this._get("clips"),I);this._set("clips",t)}})],n.prototype,"clips",void 0),Object(u.a)([Object(p.b)()],n.prototype,"moving",void 0),Object(u.a)([Object(p.b)()],n.prototype,"attached",void 0),Object(u.a)([Object(p.b)()],n.prototype,"container",void 0),Object(u.a)([Object(p.b)()],n.prototype,"suspended",void 0),Object(u.a)([Object(p.b)({readOnly:!0})],n.prototype,"updateParameters",void 0),Object(u.a)([Object(p.b)()],n.prototype,"updateRequested",void 0),Object(u.a)([Object(p.b)()],n.prototype,"updating",null),Object(u.a)([Object(p.b)()],n.prototype,"view",void 0),n=Object(u.a)([Object(h.a)("esri.views.2d.layers.LayerView2D")],n)}}}])}();