(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{t0D6:function(e,t,r){"use strict";r.r(t);var a=r("pO5D"),i=(r("wSAH"),r("6S2I"),r("zqDF"),r("WbKI")),s=r("04ZG"),o=(r("4EHJ"),r("ju1D"),r("9AIY"),r("kglp")),n=r("Lqtk"),c=r("qNUd"),l=r("u3Ia"),u=r("o6Le"),p=r("ZKYY"),b=r("srIe"),y=r("r88o"),O=r("ag7Y"),d=r("WZb1"),j=r("SuVq"),f=r("Ehki"),m=r("UhwK"),B=(r("4GrV"),r("jWBI")),h=r("8prj"),g=r("54nt"),v=r("eKLr");function k(e){return h.default.fromJSON(e).features.map(e=>e.geometry)}let S=class extends O.a{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return k(e)}readIncidents(e){return k(e)}readPointBarriers(e,t){return k(t.barriers)}readPolylineBarriers(e){return k(e)}readPolygonBarriers(e){return k(e)}readRoutes(e){return function(e){return e.features.map(t=>{const r=d.a.fromJSON(e.spatialReference),a=B.a.fromJSON(t);return Object(b.k)(a.geometry)&&(a.geometry.spatialReference=r),a})}(e)}};Object(a.a)([Object(i.b)({type:[v.a]})],S.prototype,"directions",void 0),Object(a.a)([Object(i.b)({type:[j.a]})],S.prototype,"facilities",void 0),Object(a.a)([Object(y.a)("facilities")],S.prototype,"readFacilities",null),Object(a.a)([Object(i.b)({type:[j.a]})],S.prototype,"incidents",void 0),Object(a.a)([Object(y.a)("incidents")],S.prototype,"readIncidents",null),Object(a.a)([Object(i.b)({type:[g.a]})],S.prototype,"messages",void 0),Object(a.a)([Object(i.b)({type:[j.a]})],S.prototype,"pointBarriers",void 0),Object(a.a)([Object(y.a)("pointBarriers",["barriers"])],S.prototype,"readPointBarriers",null),Object(a.a)([Object(i.b)({type:[m.a]})],S.prototype,"polylineBarriers",void 0),Object(a.a)([Object(y.a)("polylineBarriers")],S.prototype,"readPolylineBarriers",null),Object(a.a)([Object(i.b)({type:[f.a]})],S.prototype,"polygonBarriers",void 0),Object(a.a)([Object(y.a)("polygonBarriers")],S.prototype,"readPolygonBarriers",null),Object(a.a)([Object(i.b)({type:[B.a]})],S.prototype,"routes",void 0),Object(a.a)([Object(y.a)("routes")],S.prototype,"readRoutes",null),S=Object(a.a)([Object(s.a)("esri.tasks.support.ClosestFacilitySolveResult")],S);var A=S;const P=Object(u.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});var R=r("OvWd");let w=class extends(Object(R.a)(o.a)){constructor(e){super(e),this.url=null}solve(e,t){return async function(e,t,r){const a=[],i=[],s={},o={},u=Object(l.c)(e);return t.incidents&&t.incidents.features&&Object(p.a)(t.incidents.features,i,"incidents.features",s),t.facilities&&t.facilities.features&&Object(p.a)(t.facilities.features,i,"facilities.features",s),t.pointBarriers&&t.pointBarriers.features&&Object(p.a)(t.pointBarriers.features,i,"pointBarriers.features",s),t.polylineBarriers&&t.polylineBarriers.features&&Object(p.a)(t.polylineBarriers.features,i,"polylineBarriers.features",s),t.polygonBarriers&&t.polygonBarriers.features&&Object(p.a)(t.polygonBarriers.features,i,"polygonBarriers.features",s),Object(c.a)(i).then(e=>{for(const t in s){const r=s[t];a.push(t),o[t]=e.slice(r[0],r[1])}return Object(p.e)(o,a)?Object(p.c)(u.path):Promise.resolve({dontCheck:!0})}).then(e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||Object(p.b)(o,a);for(const r in o)o[r].forEach((e,a)=>{t.get(r)[a].geometry=e});let i={query:{...u.query,f:"json",...P.toQueryParams(t)}};return r&&(i={...r,...i}),Object(n.default)(`${u.path}/solveClosestFacility`,i)}).then(e=>A.fromJSON(e.data))}(this.url,e,t)}};Object(a.a)([Object(i.b)()],w.prototype,"url",void 0),w=Object(a.a)([Object(s.a)("esri.tasks.ClosestFacilityTask")],w),t.default=w}}]);