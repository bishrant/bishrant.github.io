!function(){function e(e,t,n,i,r,a,o){try{var s=e[a](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(i,r)}function t(e,n,i){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,n,i||e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{NloG:function(e,t,i){"use strict";var o=i("pO5D"),c=(i("wSAH"),i("6S2I")),u=(i("zqDF"),i("WbKI")),l=i("04ZG"),p=(i("4EHJ"),i("ju1D"),i("9AIY"),i("/CmD")),d=i("zm0L"),y=i("pdg3"),h=i("+rMe"),f=i("kJYu"),b=function(e){a(i,e);var t=s(i);function i(e){var r;return n(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return r(i,[{key:"initialize",value:function(){var e=this;this.when().catch(function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw c.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(n,"')"),t),t}})}},{key:"fullOpacity",get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}(Object(f.b)(Object(y.a)(Object(h.b)(d.a.EventedMixin(p.a)))));Object(o.a)([Object(u.b)()],b.prototype,"fullOpacity",null),Object(o.a)([Object(u.b)()],b.prototype,"layer",void 0),Object(o.a)([Object(u.b)()],b.prototype,"parent",void 0),Object(o.a)([Object(u.b)({readOnly:!0})],b.prototype,"suspended",null),Object(o.a)([Object(u.b)({readOnly:!0})],b.prototype,"suspendInfo",null),Object(o.a)([Object(u.b)({readOnly:!0})],b.prototype,"legendEnabled",null),Object(o.a)([Object(u.b)({type:Boolean,readOnly:!0})],b.prototype,"updating",null),Object(o.a)([Object(u.b)()],b.prototype,"visible",null),b=Object(o.a)([Object(l.a)("esri.views.layers.LayerView")],b),t.a=b},Vm2Q:function(e,i,o){"use strict";o.d(i,"a",function(){return I});var c,l=o("pO5D"),p=(o("wSAH"),o("6S2I"),o("zqDF"),o("WbKI")),d=o("04ZG"),y=(o("4EHJ"),o("ju1D"),o("9AIY"),o("LE9a")),h=o("fX31"),f=o("N5XI"),b=o("ZuQG"),v=o("L1EH"),O=o("AMBt"),j=o("N2DF"),g=o("OvF4"),w=o("Ehki"),m=o("qatw");o("4GrV");var k={base:j.a,key:"type",typeMap:{extent:g.a,polygon:w.a}},R=c=function(e){a(i,e);var t=s(i);function i(){var e;return n(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return r(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new c({geometry:this.geometry.clone()})}}]),i}(b.a);Object(l.a)([Object(p.b)({types:k,json:{read:m.a,write:!0}})],R.prototype,"geometry",void 0),Object(l.a)([Object(p.b)({readOnly:!0})],R.prototype,"version",null);var q=R=c=Object(l.a)([Object(d.a)("esri.views.layers.support.Geometry")],R),_=function(e){a(i,e);var t=s(i);function i(){var e;return n(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return r(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(b.a);Object(l.a)([Object(p.b)({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),Object(l.a)([Object(p.b)({readOnly:!0})],_.prototype,"version",null),_=Object(l.a)([Object(d.a)("esri.views.layers.support.Path")],_);var D=y.a.ofType({key:"type",base:b.a,typeMap:{rect:v.a,path:_,geometry:q}}),I=function(e){var i=function(e){a(o,e);var i=s(o);function o(){var e;return n(this,o),(e=i.apply(this,arguments)).clips=new D,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return r(o,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new O.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(f.init)(this,"suspended",function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()},!0),Object(f.init)(this,["layer.opacity","container"],function(){var e,n;t.container&&(t.container.opacity=null!=(e=null==(n=t.layer)?void 0:n.opacity)?e:1)},!0),Object(f.init)(this,["layer.blendMode"],function(e){t.container&&(t.container.blendMode=e)},!0),Object(f.init)(this,["layer.effect"],function(e){t.container&&(t.container.effect=e)},!0),this.clips.on("change",function(){t.container.clips=t.clips,t.notifyChange("clips")})]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then(function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)},function(){}):this.when().then(function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)},function(){})}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}},{key:"isVisibleAtScale",value:function(e){var t=!0,n=this.layer,i=n.minScale,r=n.maxScale;if(null!=i&&null!=r){var a=!i,o=!r;!a&&e<=i&&(a=!0),!o&&e>=r&&(o=!0),t=a&&o}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!t(u(o.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),o}(e);return Object(l.a)([Object(p.b)({type:D,set:function(e){var t=Object(h.b)(e,this._get("clips"),D);this._set("clips",t)}})],i.prototype,"clips",void 0),Object(l.a)([Object(p.b)()],i.prototype,"moving",void 0),Object(l.a)([Object(p.b)()],i.prototype,"attached",void 0),Object(l.a)([Object(p.b)()],i.prototype,"container",void 0),Object(l.a)([Object(p.b)()],i.prototype,"suspended",void 0),Object(l.a)([Object(p.b)({readOnly:!0})],i.prototype,"updateParameters",void 0),Object(l.a)([Object(p.b)()],i.prototype,"updateRequested",void 0),Object(l.a)([Object(p.b)()],i.prototype,"updating",null),Object(l.a)([Object(p.b)()],i.prototype,"view",void 0),i=Object(l.a)([Object(d.a)("esri.views.2d.layers.LayerView2D")],i)}},uWmW:function(t,i,o){"use strict";o.r(i);var c=o("pO5D"),u=(o("wSAH"),o("6S2I")),l=(o("zqDF"),o("WbKI")),p=o("04ZG"),d=(o("4EHJ"),o("ju1D"),o("9AIY"),o("9MzC")),y=o("bHqs"),h=o("NloG"),f=o("LTnl"),b=o("Vm2Q"),v=o("vbiG"),O=u.a.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D"),j=function(t){a(u,t);var i,o,c=s(u);function u(){return n(this,u),c.apply(this,arguments)}return r(u,[{key:"hitTest",value:function(){return null}},{key:"update",value:function(e){this.strategy.update(e).catch(function(e){Object(d.m)(e)||O.error(e)}),this.notifyChange("updating")}},{key:"attach",value:function(){this._bitmapContainer=new f.a,this.container.addChild(this._bitmapContainer),this.strategy=new v.a({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}},{key:"detach",value:function(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"fetchBitmapData",value:function(e,t,n){return this.layer.fetchImage(e,t,n,{timestamp:this.refreshTimestamp})}},{key:"doRefresh",value:(i=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}},e,this)}),o=function(){var t=this,n=arguments;return new Promise(function(r,a){var o=i.apply(t,n);function s(t){e(o,r,a,s,c,"next",t)}function c(t){e(o,r,a,s,c,"throw",t)}s(void 0)})},function(){return o.apply(this,arguments)})},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}}]),u}(Object(y.a)(Object(b.a)(h.a)));Object(c.a)([Object(l.b)()],j.prototype,"strategy",void 0),Object(c.a)([Object(l.b)()],j.prototype,"updating",void 0),j=Object(c.a)([Object(p.a)("esri.views.2d.layers.BaseDynamicLayerView2D")],j),i.default=j}}])}();