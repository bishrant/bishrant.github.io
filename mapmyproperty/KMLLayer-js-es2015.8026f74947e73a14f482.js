(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"9fxc":function(e,t,s){"use strict";s.r(t);var r,l=s("pO5D"),i=(s("wSAH"),s("srIe")),a=(s("6S2I"),s("zqDF")),o=s("WbKI"),b=s("r88o"),n=s("04ZG"),u=s("Cduq"),c=s("4EHJ"),y=(s("ju1D"),s("9AIY"),s("WZb1")),h=s("OvF4"),p=(s("4GrV"),s("LE9a")),O=s("TRCY"),j=s("pqNC"),d=s("5pQd"),v=s("IvSi"),f=s("uRH/"),m=s("mXvl"),w=s("DbUH"),S=s("jhcG"),g=s("WmKv"),E=s("BGvB"),k=s("s7YA"),_=s("Gj5k"),x=s("ag7Y"),L=s("zm0L"),F=s("bV/r"),I=s("N5XI");let M=r=class extends(L.a.EventedMixin(Object(x.b)(F.a))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){Object(I.whenOnce)(this,"networkLink").then(()=>Object(I.whenTrueOnce)(this,"visible")).then(()=>this.load())}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=Object(i.k)(e)?e.signal:null,s=this._fetchService(this._get("networkLink").href,t).then(e=>{const t=Object(E.a)(e.sublayers);this.fullExtent=h.a.fromJSON(t),this.sourceJSON=e;const s=Object(a.m)(p.a.ofType(r),Object(E.e)(r,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(s),Promise.resolve(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this._sublayersHandles.forEach(e=>e.remove()),this._sublayersHandles=null),e&&(e.forEach(e=>{e.parent=this,e.layer=this.layer}),this._sublayersHandles=[e.on("after-add",({item:e})=>{e.parent=this,e.layer=this.layer}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})]),this._set("sublayers",e)}castSublayers(e){return Object(a.m)(p.a.ofType(r),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return Object(E.b)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(e=>Object(E.d)(e.data))}};Object(l.a)([Object(o.b)()],M.prototype,"description",void 0),Object(l.a)([Object(o.b)()],M.prototype,"id",void 0),Object(l.a)([Object(o.b)({readOnly:!0,value:null})],M.prototype,"networkLink",void 0),Object(l.a)([Object(o.b)({json:{write:{allowNull:!0}}})],M.prototype,"parent",void 0),Object(l.a)([Object(o.b)({value:null,json:{write:{allowNull:!0}}})],M.prototype,"sublayers",null),Object(l.a)([Object(_.a)("sublayers")],M.prototype,"castSublayers",null),Object(l.a)([Object(o.b)({value:null,json:{read:{source:"name",reader:e=>Object(k.d)(e)}}})],M.prototype,"title",void 0),Object(l.a)([Object(o.b)({value:!0})],M.prototype,"visible",null),Object(l.a)([Object(b.a)("visible",["visibility"])],M.prototype,"readVisible",null),Object(l.a)([Object(o.b)()],M.prototype,"sourceJSON",void 0),Object(l.a)([Object(o.b)({value:null})],M.prototype,"layer",null),Object(l.a)([Object(o.b)({type:h.a})],M.prototype,"fullExtent",void 0),M=r=Object(l.a)([Object(n.a)("esri.layers.support.KMLSublayer")],M);var C=M;const N=["kml","xml"];let H=class extends(Object(m.a)(Object(S.a)(Object(g.a)(Object(f.a)(Object(w.a)(Object(d.a)(j.a))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new O.a({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=y.a.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",(e,t)=>{t&&t.forEach(e=>{e.parent=null,e.layer=null}),e&&e.forEach(e=>{e.parent=this,e.layer=this})},!0),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,s){return Object(E.e)(C,t,s,this._visibleFolders)}writeSublayers(e,t){const s=[],r=e.toArray();for(;r.length;){const e=r[0];e.networkLink||(e.visible&&s.push(e.id),e.sublayers&&r.push(...e.sublayers.toArray())),r.shift()}t.visibleFolders=s}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(c.k)(this.url,N)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],s=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(s))};return e&&e.forEach(s),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=Object(i.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:Object(E.b)(this.url,this.outSpatialReference,this.refreshInterval,e)),s=Object(E.d)(t.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const t=s=>{if(s.sublayers)for(const r of s.sublayers.items)t(r),r.visible&&r.fullExtent&&(e?e.union(r.fullExtent):e=r.fullExtent.clone())};return t(this),e}};Object(l.a)([Object(o.b)({readOnly:!0})],H.prototype,"allSublayers",void 0),Object(l.a)([Object(o.b)({type:y.a})],H.prototype,"outSpatialReference",void 0),Object(l.a)([Object(o.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],H.prototype,"path",void 0),Object(l.a)([Object(o.b)({readOnly:!0,json:{read:!1,write:!1}})],H.prototype,"legendEnabled",void 0),Object(l.a)([Object(o.b)({type:["show","hide","hide-children"]})],H.prototype,"listMode",void 0),Object(l.a)([Object(o.b)({type:["KML"]})],H.prototype,"operationalLayerType",void 0),Object(l.a)([Object(o.b)({})],H.prototype,"resourceInfo",void 0),Object(l.a)([Object(o.b)({type:p.a.ofType(C),json:{write:{ignoreOrigin:!0}}})],H.prototype,"sublayers",void 0),Object(l.a)([Object(b.a)(["web-map","portal-item"],"sublayers",["visibleFolders"])],H.prototype,"readSublayersFromItemOrWebMap",null),Object(l.a)([Object(b.a)("service","sublayers",["sublayers"])],H.prototype,"readSublayers",null),Object(l.a)([Object(u.a)("sublayers")],H.prototype,"writeSublayers",null),Object(l.a)([Object(o.b)({readOnly:!0,json:{read:!1}})],H.prototype,"type",void 0),Object(l.a)([Object(o.b)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],H.prototype,"title",null),Object(l.a)([Object(o.b)(v.n)],H.prototype,"url",void 0),Object(l.a)([Object(o.b)({readOnly:!0})],H.prototype,"visibleSublayers",null),Object(l.a)([Object(o.b)({type:h.a})],H.prototype,"extent",void 0),Object(l.a)([Object(o.b)()],H.prototype,"fullExtent",null),H=Object(l.a)([Object(n.a)("esri.layers.KMLLayer")],H),t.default=H}}]);