!function(){function e(e,t,n,i,r,a,o){try{var s=e[a](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(i,r)}function t(e,n,i){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,n,i||e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{NloG:function(e,t,i){"use strict";var o=i("pO5D"),c=(i("wSAH"),i("6S2I")),u=(i("zqDF"),i("WbKI")),l=i("04ZG"),p=(i("4EHJ"),i("ju1D"),i("9AIY"),i("/CmD")),h=i("zm0L"),d=i("pdg3"),y=i("+rMe"),f=i("kJYu"),v=function(e){a(i,e);var t=s(i);function i(e){var r;return n(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return r(i,[{key:"initialize",value:function(){var e=this;this.when().catch(function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw c.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(n,"')"),t),t}})}},{key:"fullOpacity",get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}(Object(f.b)(Object(d.a)(Object(y.b)(h.a.EventedMixin(p.a)))));Object(o.a)([Object(u.b)()],v.prototype,"fullOpacity",null),Object(o.a)([Object(u.b)()],v.prototype,"layer",void 0),Object(o.a)([Object(u.b)()],v.prototype,"parent",void 0),Object(o.a)([Object(u.b)({readOnly:!0})],v.prototype,"suspended",null),Object(o.a)([Object(u.b)({readOnly:!0})],v.prototype,"suspendInfo",null),Object(o.a)([Object(u.b)({readOnly:!0})],v.prototype,"legendEnabled",null),Object(o.a)([Object(u.b)({type:Boolean,readOnly:!0})],v.prototype,"updating",null),Object(o.a)([Object(u.b)()],v.prototype,"visible",null),v=Object(o.a)([Object(l.a)("esri.views.layers.LayerView")],v),t.a=v},Vm2Q:function(e,i,o){"use strict";o.d(i,"a",function(){return E});var c,l=o("pO5D"),p=(o("wSAH"),o("6S2I"),o("zqDF"),o("WbKI")),h=o("04ZG"),d=(o("4EHJ"),o("ju1D"),o("9AIY"),o("LE9a")),y=o("fX31"),f=o("N5XI"),v=o("ZuQG"),b=o("L1EH"),g=o("AMBt"),O=o("N2DF"),w=o("OvF4"),j=o("Ehki"),m=o("qatw");o("4GrV");var k={base:O.a,key:"type",typeMap:{extent:w.a,polygon:j.a}},R=c=function(e){a(i,e);var t=s(i);function i(){var e;return n(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return r(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new c({geometry:this.geometry.clone()})}}]),i}(v.a);Object(l.a)([Object(p.b)({types:k,json:{read:m.a,write:!0}})],R.prototype,"geometry",void 0),Object(l.a)([Object(p.b)({readOnly:!0})],R.prototype,"version",null);var V=R=c=Object(l.a)([Object(h.a)("esri.views.layers.support.Geometry")],R),q=function(e){a(i,e);var t=s(i);function i(){var e;return n(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return r(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(v.a);Object(l.a)([Object(p.b)({type:[[[Number]]],json:{write:!0}})],q.prototype,"path",void 0),Object(l.a)([Object(p.b)({readOnly:!0})],q.prototype,"version",null),q=Object(l.a)([Object(h.a)("esri.views.layers.support.Path")],q);var I=d.a.ofType({key:"type",base:v.a,typeMap:{rect:b.a,path:q,geometry:V}}),E=function(e){var i=function(e){a(o,e);var i=s(o);function o(){var e;return n(this,o),(e=i.apply(this,arguments)).clips=new I,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return r(o,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new g.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(f.init)(this,"suspended",function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()},!0),Object(f.init)(this,["layer.opacity","container"],function(){var e,n;t.container&&(t.container.opacity=null!=(e=null==(n=t.layer)?void 0:n.opacity)?e:1)},!0),Object(f.init)(this,["layer.blendMode"],function(e){t.container&&(t.container.blendMode=e)},!0),Object(f.init)(this,["layer.effect"],function(e){t.container&&(t.container.effect=e)},!0),this.clips.on("change",function(){t.container.clips=t.clips,t.notifyChange("clips")})]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then(function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)},function(){}):this.when().then(function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)},function(){})}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}},{key:"isVisibleAtScale",value:function(e){var t=!0,n=this.layer,i=n.minScale,r=n.maxScale;if(null!=i&&null!=r){var a=!i,o=!r;!a&&e<=i&&(a=!0),!o&&e>=r&&(o=!0),t=a&&o}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!t(u(o.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),o}(e);return Object(l.a)([Object(p.b)({type:I,set:function(e){var t=Object(y.b)(e,this._get("clips"),I);this._set("clips",t)}})],i.prototype,"clips",void 0),Object(l.a)([Object(p.b)()],i.prototype,"moving",void 0),Object(l.a)([Object(p.b)()],i.prototype,"attached",void 0),Object(l.a)([Object(p.b)()],i.prototype,"container",void 0),Object(l.a)([Object(p.b)()],i.prototype,"suspended",void 0),Object(l.a)([Object(p.b)({readOnly:!0})],i.prototype,"updateParameters",void 0),Object(l.a)([Object(p.b)()],i.prototype,"updateRequested",void 0),Object(l.a)([Object(p.b)()],i.prototype,"updating",null),Object(l.a)([Object(p.b)()],i.prototype,"view",void 0),i=Object(l.a)([Object(h.a)("esri.views.2d.layers.LayerView2D")],i)}},xw90:function(t,i,o){"use strict";o.r(i);var c=o("pO5D"),u=(o("wSAH"),o("6S2I"),o("zqDF"),o("WbKI")),l=o("04ZG"),p=(o("4EHJ"),o("ju1D"),o("9AIY"),o("LE9a")),h=o("jWBI"),d=o("NloG"),y=o("Vh9r"),f=o("q03O"),v=o("Vm2Q"),b={remove:function(){},pause:function(){},resume:function(){}},g=function(t){a(u,t);var i,o,c=s(u);function u(){return n(this,u),c.apply(this,arguments)}return r(u,[{key:"initialize",value:function(){var e=this;this.graphicsView=new y.a({requestUpdateCallback:function(){return e.requestUpdate()},view:this.view,graphics:this.layer.graphics,container:new f.a(this.view.featuresTilingScheme)})}},{key:"attach",value:function(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}},{key:"detach",value:function(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}},{key:"hitTest",value:function(e,t){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,t)}},{key:"fetchPopupFeatures",value:(i=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.graphicsView){e.next=2;break}return e.abrupt("return",this.graphicsView.searchFeatures(t).then(function(e){return e.filter(function(e){return!!e.popupTemplate})}));case 2:case"end":return e.stop()}},e,this)}),o=function(){var t=this,n=arguments;return new Promise(function(r,a){var o=i.apply(t,n);function s(t){e(o,r,a,s,c,"next",t)}function c(t){e(o,r,a,s,c,"throw",t)}s(void 0)})},function(e){return o.apply(this,arguments)})},{key:"update",value:function(e){this.graphicsView.processUpdate(e)}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){this.graphicsView.viewChange()}},{key:"moveEnd",value:function(){}},{key:"isUpdating",value:function(){return!this.graphicsView||this.graphicsView.updating}},{key:"highlight",value:function(e){var t,n=this;return"number"==typeof e?t=[e]:e instanceof h.a?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map(function(e){return e&&e.uid}):p.a.isCollection(e)&&(t=e.map(function(e){return e&&e.uid}).toArray()),(t=t.filter(function(e){return null!=e})).length?(this.graphicsView.addHighlight(t),{remove:function(){return n.graphicsView.removeHighlight(t)}}):b}},{key:"queryGraphics",value:function(){return Promise.resolve(this.graphicsView.graphics)}}]),u}(Object(v.a)(d.a));Object(c.a)([Object(u.b)()],g.prototype,"graphicsView",void 0),Object(c.a)([Object(u.b)()],g.prototype,"updating",void 0),g=Object(c.a)([Object(l.a)("esri.views.2d.layers.GraphicsLayerView2D")],g),i.default=g}}])}();