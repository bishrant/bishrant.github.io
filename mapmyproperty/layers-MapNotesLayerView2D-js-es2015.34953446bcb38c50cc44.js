(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{NloG:function(e,t,i){"use strict";var s=i("pO5D"),a=(i("wSAH"),i("6S2I")),r=(i("zqDF"),i("WbKI")),n=i("04ZG"),o=(i("4EHJ"),i("ju1D"),i("9AIY"),i("/CmD")),h=i("zm0L"),c=i("pdg3"),l=i("+rMe"),p=i("kJYu");let d=class extends(Object(p.b)(Object(c.a)(Object(l.b)(h.a.EventedMixin(o.a))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw a.a.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}})}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};Object(s.a)([Object(r.b)()],d.prototype,"fullOpacity",null),Object(s.a)([Object(r.b)()],d.prototype,"layer",void 0),Object(s.a)([Object(r.b)()],d.prototype,"parent",void 0),Object(s.a)([Object(r.b)({readOnly:!0})],d.prototype,"suspended",null),Object(s.a)([Object(r.b)({readOnly:!0})],d.prototype,"suspendInfo",null),Object(s.a)([Object(r.b)({readOnly:!0})],d.prototype,"legendEnabled",null),Object(s.a)([Object(r.b)({type:Boolean,readOnly:!0})],d.prototype,"updating",null),Object(s.a)([Object(r.b)()],d.prototype,"visible",null),d=Object(s.a)([Object(n.a)("esri.views.layers.LayerView")],d),t.a=d},Vm2Q:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var s,a=i("pO5D"),r=(i("wSAH"),i("6S2I"),i("zqDF"),i("WbKI")),n=i("04ZG"),o=(i("4EHJ"),i("ju1D"),i("9AIY"),i("LE9a")),h=i("fX31"),c=i("N5XI"),l=i("ZuQG"),p=i("L1EH"),d=i("AMBt"),u=i("N2DF"),b=i("OvF4"),y=i("Ehki"),g=i("qatw");i("4GrV");const O={base:u.a,key:"type",typeMap:{extent:b.a,polygon:y.a}};let w=s=class extends l.a{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new s({geometry:this.geometry.clone()})}};Object(a.a)([Object(r.b)({types:O,json:{read:g.a,write:!0}})],w.prototype,"geometry",void 0),Object(a.a)([Object(r.b)({readOnly:!0})],w.prototype,"version",null),w=s=Object(a.a)([Object(n.a)("esri.views.layers.support.Geometry")],w);var v=w;let j=class extends l.a{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};Object(a.a)([Object(r.b)({type:[[[Number]]],json:{write:!0}})],j.prototype,"path",void 0),Object(a.a)([Object(r.b)({readOnly:!0})],j.prototype,"version",null),j=Object(a.a)([Object(n.a)("esri.views.layers.support.Path")],j);const f=o.a.ofType({key:"type",base:l.a,typeMap:{rect:p.a,path:j,geometry:v}}),m=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new f,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new d.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(c.init)(this,"suspended",e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},!0),Object(c.init)(this,["layer.opacity","container"],()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)},!0),Object(c.init)(this,["layer.blendMode"],e=>{this.container&&(this.container.blendMode=e)},!0),Object(c.init)(this,["layer.effect"],e=>{this.container&&(this.container.effect=e)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,a=i.maxScale;if(null!=s&&null!=a){let i=!s,r=!a;!i&&e<=s&&(i=!0),!r&&e>=a&&(r=!0),t=i&&r}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return Object(a.a)([Object(r.b)({type:f,set(e){const t=Object(h.b)(e,this._get("clips"),f);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(a.a)([Object(r.b)()],t.prototype,"moving",void 0),Object(a.a)([Object(r.b)()],t.prototype,"attached",void 0),Object(a.a)([Object(r.b)()],t.prototype,"container",void 0),Object(a.a)([Object(r.b)()],t.prototype,"suspended",void 0),Object(a.a)([Object(r.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(a.a)([Object(r.b)()],t.prototype,"updateRequested",void 0),Object(a.a)([Object(r.b)()],t.prototype,"updating",null),Object(a.a)([Object(r.b)()],t.prototype,"view",void 0),t=Object(a.a)([Object(n.a)("esri.views.2d.layers.LayerView2D")],t),t}},eRoJ:function(e,t,i){"use strict";i.r(t);var s=i("pO5D"),a=(i("wSAH"),i("srIe")),r=(i("6S2I"),i("zqDF"),i("WbKI"),i("04ZG")),n=(i("4EHJ"),i("ju1D"),i("9AIY"),i("LE9a")),o=i("jWBI"),h=i("N5XI"),c=i("NloG"),l=i("Vh9r"),p=i("q03O"),d=i("Vm2Q");const u="sublayers",b="layerView",y=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends(Object(d.a)(c.a)){async fetchPopupFeatures(e){return(await Promise.all(Array.from(this.graphicsViews(),t=>t.searchFeatures(e).then(e=>e.filter(e=>!!e.popupTemplate))))).flat()}*graphicsViews(){Object(a.k)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():Object(a.k)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,t){if(this.suspended)return null;const i=Array.from(this.graphicsViews(),async i=>{const s=await i.hitTest(e,t);if(s){if(Object(a.k)(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);!s.popupTemplate&&e.popupTemplate&&(s.popupTemplate=e.popupTemplate)}return s}return null});return(await Promise.all(i)).filter(e=>!!e)[0]||null}highlight(e){let t;if("number"==typeof e?t=[e]:e instanceof o.a?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map(e=>e&&e.uid):n.a.isCollection(e)&&(t=e.map(e=>e&&e.uid).toArray()),t=t.filter(e=>null!=e),!t.length)return y;for(const i of this.graphicsViews())i.addHighlight(t);return{remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(t)}}}update(e){for(const t of this.graphicsViews())t.processUpdate(e)}attach(){const e=this.view,t=()=>this.requestUpdate(),i=this.layer.featureCollections;if(Object(a.k)(i)&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of i){const i=new p.a(this.view.featuresTilingScheme);i.fadeTransitionEnabled=!0;const a=new l.a({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:i});this._graphicsViewsFeatureCollectionMap.set(a,s),this.container.addChild(a.container),this.handles.add([Object(h.init)(s,"visible",e=>a.container.visible=e),Object(h.init)(a,"updating",()=>this.notifyChange("updating"))],b)}}else Object(a.k)(this.layer.sublayers)&&this.handles.add(Object(h.on)(this.layer,"sublayers","change",()=>this._createGraphicsViews(),()=>this._createGraphicsViews(),()=>this._destroyGraphicsViews()),u)}detach(){this._destroyGraphicsViews(),this.handles.remove(u)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(b);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),Object(a.j)(this.layer.sublayers))return;const e=[],t=this.view,i=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new p.a(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const r=new l.a({view:t,graphics:s.graphics,requestUpdateCallback:i,container:a});this.handles.add([s.on("graphic-update",r.graphicUpdateHandler),Object(h.init)(s,"visible",e=>r.container.visible=e),Object(h.init)(r,"updating",()=>this.notifyChange("updating"))],b),this.container.addChild(r.container),e.push(r)}this._graphicsViews=e}};g=Object(s.a)([Object(r.a)("esri.views.2d.layers.MapNotesLayerView2D")],g),t.default=g}}]);