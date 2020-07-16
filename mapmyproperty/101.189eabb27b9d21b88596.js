(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/tasks/support/ClosestFacilitySolveResult":"LNSq","arcgis-js-api/tasks/ClosestFacilityTask":"ytPa"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{LNSq:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("9opi"),t("qKT0"),t("TMur"),t("jZlN"),t("ycL1"),t("LxLY"),t("Vx27"),t("BPYA"),t("Z4y+"),t("mEoI"),t("w1v0"),t("VIp5")],void 0===(o=(function(e,r,t,i,o,n,s,a,p,l,u,c,y,f){function d(e){return y.fromJSON(e).features.map((function(e){return e.geometry}))}return function(e){function r(r){var t=e.call(this,r)||this;return t.directions=null,t.facilities=null,t.incidents=null,t.messages=null,t.pointBarriers=null,t.polylineBarriers=null,t.polygonBarriers=null,t.routes=null,t}return t(r,e),r.prototype.readFacilities=function(e){return d(e)},r.prototype.readIncidents=function(e){return d(e)},r.prototype.readPointBarriers=function(e,r){return d(r.barriers)},r.prototype.readPolylineBarriers=function(e){return d(e)},r.prototype.readPolygonBarriers=function(e){return d(e)},r.prototype.readRoutes=function(e){return function(e){return e.features.map((function(r){var t=u.fromJSON(e.spatialReference),i=n.fromJSON(r);return a.isSome(i.geometry)&&(i.geometry.spatialReference=t),i}))}(e)},i([p.property({type:c})],r.prototype,"directions",void 0),i([p.property({type:[o.Point]})],r.prototype,"facilities",void 0),i([l.reader("facilities")],r.prototype,"readFacilities",null),i([p.property({type:[o.Point]})],r.prototype,"incidents",void 0),i([l.reader("incidents")],r.prototype,"readIncidents",null),i([p.property({type:[f]})],r.prototype,"messages",void 0),i([p.property({type:[o.Point]})],r.prototype,"pointBarriers",void 0),i([l.reader("pointBarriers",["barriers"])],r.prototype,"readPointBarriers",null),i([p.property({type:[o.Polyline]})],r.prototype,"polylineBarriers",void 0),i([l.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),i([p.property({type:[o.Polygon]})],r.prototype,"polygonBarriers",void 0),i([l.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),i([p.property({type:[n]})],r.prototype,"routes",void 0),i([l.reader("routes")],r.prototype,"readRoutes",null),i([p.subclass("esri.tasks.support.ClosestFacilitySolveResult")],r)}(p.declared(s.JSONSupport))}).apply(null,i))||(e.exports=o)},ytPa:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("2Atf"),t("9opi"),t("qKT0"),t("zp6E"),t("qMld"),t("a4MF"),t("Vx27"),t("fw2w"),t("FPqO"),t("SA66"),t("LNSq")],void 0===(o=(function(e,r,t,i,o,n,s,a,p,l,u,c,y){var f=a.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});return function(e){function r(r){var t=e.call(this,r)||this;return t.url=null,t}return i(r,e),r.prototype.solve=function(e,r){var i=this,o=[],a=[],p={},u={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,a,"incidents.features",p),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,a,"facilities.features",p),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,a,"pointBarriers.features",p),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,a,"polylineBarriers.features",p),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,a,"polygonBarriers.features",p),l.normalizeCentralMeridian(a).then((function(e){for(var r in p){var t=p[r];o.push(r),u[r]=e.slice(t[0],t[1])}return i._isInputGeometryZAware(u,o)?i.getServiceDescription():s.resolve({dontCheck:!0})})).then((function(s){("dontCheck"in s?s.dontCheck:s.hasZ)||i._dropZValuesOffInputGeometry(u,o);var a=function(r){u[r].forEach((function(t,i){e.get(r)[i].geometry=t}))};for(var p in u)a(p);var l={query:t({},i.parsedUrl.query,{f:"json"},f.toQueryParams(e))};return(i.requestOptions||r)&&(l=t({},i.requestOptions,r,l)),n(i.parsedUrl.path+"/solveClosestFacility",l)})).then((function(e){return y.fromJSON(e.data)}))},r.prototype._collectGeometries=function(e,r,t,i){i[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},o([p.property()],r.prototype,"url",void 0),o([p.subclass("esri.tasks.ClosestFacilityTask")],r)}(p.declared(c.NAServiceDescriptionMixin(u)))}).apply(null,i))||(e.exports=o)}}]);