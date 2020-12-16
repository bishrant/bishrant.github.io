(function(){var e={"esri/tasks/support/ClosestFacilitySolveResult":"LNSq","esri/tasks/ClosestFacilityTask":"ytPa"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{LNSq:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("TMur"),t("jZlN"),t("ycL1"),t("LxLY"),t("Vx27"),t("BPYA"),t("Z4y+"),t("mEoI"),t("w1v0"),t("VIp5")],void 0===(o=(function(e,r,t,i,o,n,s,a,p,l,u,c,d){"use strict";function y(e){return c.fromJSON(e).features.map((function(e){return e.geometry}))}return function(e){function r(r){var t=e.call(this,r)||this;return t.directions=null,t.facilities=null,t.incidents=null,t.messages=null,t.pointBarriers=null,t.polylineBarriers=null,t.polygonBarriers=null,t.routes=null,t}return t.__extends(r,e),r.prototype.readFacilities=function(e){return y(e)},r.prototype.readIncidents=function(e){return y(e)},r.prototype.readPointBarriers=function(e,r){return y(r.barriers)},r.prototype.readPolylineBarriers=function(e){return y(e)},r.prototype.readPolygonBarriers=function(e){return y(e)},r.prototype.readRoutes=function(e){return function(e){return e.features.map((function(r){var t=l.fromJSON(e.spatialReference),i=o.fromJSON(r);return s.isSome(i.geometry)&&(i.geometry.spatialReference=t),i}))}(e)},t.__decorate([a.property({type:[u]})],r.prototype,"directions",void 0),t.__decorate([a.property({type:[i.Point]})],r.prototype,"facilities",void 0),t.__decorate([p.reader("facilities")],r.prototype,"readFacilities",null),t.__decorate([a.property({type:[i.Point]})],r.prototype,"incidents",void 0),t.__decorate([p.reader("incidents")],r.prototype,"readIncidents",null),t.__decorate([a.property({type:[d]})],r.prototype,"messages",void 0),t.__decorate([a.property({type:[i.Point]})],r.prototype,"pointBarriers",void 0),t.__decorate([p.reader("pointBarriers",["barriers"])],r.prototype,"readPointBarriers",null),t.__decorate([a.property({type:[i.Polyline]})],r.prototype,"polylineBarriers",void 0),t.__decorate([p.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),t.__decorate([a.property({type:[i.Polygon]})],r.prototype,"polygonBarriers",void 0),t.__decorate([p.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),t.__decorate([a.property({type:[o]})],r.prototype,"routes",void 0),t.__decorate([p.reader("routes")],r.prototype,"readRoutes",null),t.__decorate([a.subclass("esri.tasks.support.ClosestFacilitySolveResult")],r)}(n.JSONSupport)}).apply(null,i))||(e.exports=o)},ytPa:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("qMld"),t("a4MF"),t("Vx27"),t("fw2w"),t("FPqO"),t("SA66"),t("LNSq")],void 0===(o=(function(e,r,t,i,o,n,s,a,p,l,u){"use strict";var c=n.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});return function(e){function r(r){var t=e.call(this,r)||this;return t.url=null,t}return t.__extends(r,e),r.prototype.solve=function(e,r){var n=this,s=[],p=[],l={},d={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,p,"incidents.features",l),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,p,"facilities.features",l),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,p,"pointBarriers.features",l),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,p,"polylineBarriers.features",l),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,p,"polygonBarriers.features",l),a.normalizeCentralMeridian(p).then((function(e){for(var r in l){var t=l[r];s.push(r),d[r]=e.slice(t[0],t[1])}return n._isInputGeometryZAware(d,s)?n.getServiceDescription():o.resolve({dontCheck:!0})})).then((function(o){("dontCheck"in o?o.dontCheck:o.hasZ)||n._dropZValuesOffInputGeometry(d,s);var a=function(r){d[r].forEach((function(t,i){e.get(r)[i].geometry=t}))};for(var p in d)a(p);var l={query:t.__assign(t.__assign(t.__assign({},n.parsedUrl.query),{f:"json"}),c.toQueryParams(e))};return(n.requestOptions||r)&&(l=t.__assign(t.__assign(t.__assign({},n.requestOptions),r),l)),i(n.parsedUrl.path+"/solveClosestFacility",l)})).then((function(e){return u.fromJSON(e.data)}))},r.prototype._collectGeometries=function(e,r,t,i){i[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},t.__decorate([s.property()],r.prototype,"url",void 0),t.__decorate([s.subclass("esri.tasks.ClosestFacilityTask")],r)}(l.NAServiceDescriptionMixin(p))}).apply(null,i))||(e.exports=o)}}]);