(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{"IIJ+":function(e,r,t){"use strict";t.r(r);var a=t("pO5D"),i=(t("wSAH"),t("6S2I"),t("zqDF"),t("WbKI")),s=t("04ZG"),o=(t("4EHJ"),t("ju1D"),t("9AIY"),t("kglp")),n=t("Lqtk"),l=t("qNUd"),c=t("u3Ia"),p=t("o6Le"),u=t("ZKYY"),b=t("srIe"),y=t("r88o"),O=t("ag7Y"),j=t("WZb1"),f=t("SuVq"),d=t("Ehki"),B=t("UhwK"),v=t("qatw"),g=(t("4GrV"),t("jWBI")),h=t("54nt");function m(e){return e.features.map(r=>{const t=j.a.fromJSON(e.spatialReference),a=g.a.fromJSON(r);return Object(b.q)(a.geometry).spatialReference=t,a})}function P(e){return e.features.map(r=>(r.geometry.spatialReference=e.spatialReference,Object(v.a)(r.geometry)))}let A=class extends O.a{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return P(e)}readPointBarriers(e,r){return P(r.barriers)}readPolylineBarriers(e){return P(e)}readPolygonBarriers(e){return P(e)}readIncidents(e,r){return m(r.saPolylines)}readServiceAreaPolygons(e,r){return m(r.saPolygons)}};Object(a.a)([Object(i.b)({type:[f.a]})],A.prototype,"facilities",void 0),Object(a.a)([Object(y.a)("facilities")],A.prototype,"readFacilities",null),Object(a.a)([Object(i.b)({type:[h.a]})],A.prototype,"messages",void 0),Object(a.a)([Object(i.b)({type:[f.a]})],A.prototype,"pointBarriers",void 0),Object(a.a)([Object(y.a)("pointBarriers",["barriers"])],A.prototype,"readPointBarriers",null),Object(a.a)([Object(i.b)({type:[B.a]})],A.prototype,"polylineBarriers",void 0),Object(a.a)([Object(y.a)("polylineBarriers")],A.prototype,"readPolylineBarriers",null),Object(a.a)([Object(i.b)({type:[d.a]})],A.prototype,"polygonBarriers",void 0),Object(a.a)([Object(y.a)("polygonBarriers")],A.prototype,"readPolygonBarriers",null),Object(a.a)([Object(i.b)({type:[g.a]})],A.prototype,"serviceAreaPolylines",void 0),Object(a.a)([Object(y.a)("serviceAreaPolylines",["saPolylines"])],A.prototype,"readIncidents",null),Object(a.a)([Object(i.b)({type:[g.a]})],A.prototype,"serviceAreaPolygons",void 0),Object(a.a)([Object(y.a)("serviceAreaPolygons",["saPolygons"])],A.prototype,"readServiceAreaPolygons",null),A=Object(a.a)([Object(s.a)("esri.tasks.support.ServiceAreaSolveResult")],A);var S=A;const k=Object(p.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});var w=t("OvWd");let I=class extends(Object(w.a)(o.a)){constructor(e){super(e),this.url=null}solve(e,r){return async function(e,r,t){const a=[],i=[],s={},o={},p=Object(c.c)(e);return r.facilities&&r.facilities.features&&Object(u.a)(r.facilities.features,i,"facilities.features",s),r.pointBarriers&&r.pointBarriers.features&&Object(u.a)(r.pointBarriers.features,i,"pointBarriers.features",s),r.polylineBarriers&&r.polylineBarriers.features&&Object(u.a)(r.polylineBarriers.features,i,"polylineBarriers.features",s),r.polygonBarriers&&r.polygonBarriers.features&&Object(u.a)(r.polygonBarriers.features,i,"polygonBarriers.features",s),Object(l.a)(i).then(e=>{for(const r in s){const t=s[r];a.push(r),o[r]=e.slice(t[0],t[1])}return Object(u.e)(o,a)?Object(u.c)(p.path).catch(()=>({dontCheck:!0})):Promise.resolve({dontCheck:!0})}).then(e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||Object(u.b)(o,a);for(const t in o)o[t].forEach((e,a)=>{r.get(t)[a].geometry=e});let i={query:{...p.query,f:"json",...k.toQueryParams(r)}};return t&&(i={...t,...i}),Object(n.default)(p.path+"/solveServiceArea",i)}).then(e=>S.fromJSON(e.data))}(this.url,e,r)}};Object(a.a)([Object(i.b)()],I.prototype,"url",void 0),I=Object(a.a)([Object(s.a)("esri.tasks.ServiceAreaTask")],I),r.default=I}}]);