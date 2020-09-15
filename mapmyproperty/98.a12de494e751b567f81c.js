(function(){var e={"arcgis-js-api/tasks/support/ServiceAreaSolveResult":"YVts","arcgis-js-api/tasks/ServiceAreaTask":"sEKs"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{YVts:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("TMur"),t("jZlN"),t("ycL1"),t("LxLY"),t("Vx27"),t("Z4y+"),t("VIp5")],void 0===(i=(function(e,r,t,o,i,a,s,n,l,p){function u(e){return e.features.map((function(r){var t=l.fromJSON(e.spatialReference),o=i.fromJSON(r);return s.unwrap(o.geometry).spatialReference=t,o}))}function c(e){return e.features.map((function(r){return r.geometry.spatialReference=e.spatialReference,o.fromJSON(r.geometry)}))}return function(e){function r(r){var t=e.call(this,r)||this;return t.facilities=null,t.messages=null,t.pointBarriers=null,t.polylineBarriers=null,t.polygonBarriers=null,t.serviceAreaPolylines=null,t.serviceAreaPolygons=null,t}return t.__extends(r,e),r.prototype.readFacilities=function(e){return c(e)},r.prototype.readPointBarriers=function(e,r){return c(r.barriers)},r.prototype.readPolylineBarriers=function(e){return c(e)},r.prototype.readPolygonBarriers=function(e){return c(e)},r.prototype.readIncidents=function(e,r){return u(r.saPolylines)},r.prototype.readServiceAreaPolygons=function(e,r){return u(r.saPolygons)},t.__decorate([n.property({type:[o.Point]})],r.prototype,"facilities",void 0),t.__decorate([n.reader("facilities")],r.prototype,"readFacilities",null),t.__decorate([n.property({type:[p]})],r.prototype,"messages",void 0),t.__decorate([n.property({type:[o.Point]})],r.prototype,"pointBarriers",void 0),t.__decorate([n.reader("pointBarriers",["barriers"])],r.prototype,"readPointBarriers",null),t.__decorate([n.property({type:[o.Polyline]})],r.prototype,"polylineBarriers",void 0),t.__decorate([n.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),t.__decorate([n.property({type:[o.Polygon]})],r.prototype,"polygonBarriers",void 0),t.__decorate([n.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),t.__decorate([n.property({type:[i]})],r.prototype,"serviceAreaPolylines",void 0),t.__decorate([n.reader("serviceAreaPolylines",["saPolylines"])],r.prototype,"readIncidents",null),t.__decorate([n.property({type:[i]})],r.prototype,"serviceAreaPolygons",void 0),t.__decorate([n.reader("serviceAreaPolygons",["saPolygons"])],r.prototype,"readServiceAreaPolygons",null),t.__decorate([n.subclass("esri.tasks.support.ServiceAreaSolveResult")],r)}(a.JSONSupport)}).apply(null,o))||(e.exports=i)},sEKs:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("qMld"),t("a4MF"),t("Vx27"),t("fw2w"),t("FPqO"),t("SA66"),t("YVts")],void 0===(i=(function(e,r,t,o,i,a,s,n,l,p,u){var c=a.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});return function(e){function r(r){var t=e.call(this,r)||this;return t.url=null,t}return t.__extends(r,e),r.prototype.solve=function(e,r){var a=this,s=[],l=[],p={},y={};return e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,l,"facilities.features",p),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,l,"pointBarriers.features",p),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,l,"polylineBarriers.features",p),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,l,"polygonBarriers.features",p),n.normalizeCentralMeridian(l).then((function(e){for(var r in p){var t=p[r];s.push(r),y[r]=e.slice(t[0],t[1])}return a._isInputGeometryZAware(y,s)?a.getServiceDescription():i.resolve({dontCheck:!0})})).then((function(i){("dontCheck"in i?i.dontCheck:i.hasZ)||a._dropZValuesOffInputGeometry(y,s);var n=function(r){y[r].forEach((function(t,o){e.get(r)[o].geometry=t}))};for(var l in y)n(l);var p={query:t.__assign(t.__assign(t.__assign({},a.parsedUrl.query),{f:"json"}),c.toQueryParams(e))};return(a.requestOptions||r)&&(p=t.__assign(t.__assign(t.__assign({},a.requestOptions),r),p)),o(a.parsedUrl.path+"/solveServiceArea",p)})).then((function(e){return u.fromJSON(e.data)}))},r.prototype._collectGeometries=function(e,r,t,o){o[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},t.__decorate([s.property()],r.prototype,"url",void 0),t.__decorate([s.subclass("esri.tasks.ServiceAreaTask")],r)}(p.NAServiceDescriptionMixin(l))}).apply(null,o))||(e.exports=i)}}]);