(function(){var e={"esri/tasks/RouteTask":"PMnE","esri/tasks/support/RouteResultsContainer":"g5xi","esri/tasks/support/RouteResult":"qOTR"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{PMnE:function(e,r,t){var o,s;o=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("qMld"),t("a4MF"),t("nRUF"),t("Vx27"),t("fw2w"),t("FPqO"),t("SA66"),t("g5xi")],void 0===(s=(function(e,r,t,o,s,i,n,a,p,u,l,c){"use strict";var d=i.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});return function(e){function r(r){return e.call(this,r)||this}return t.__extends(r,e),r.prototype.solve=function(e,r){var i=this,a=[],u=[],l={},c={};return e.stops&&e.stops.features&&this._collectGeometries(e.stops.features,u,"stops.features",l),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,u,"pointBarriers.features",l),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,u,"polylineBarriers.features",l),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,u,"polygonBarriers.features",l),p.normalizeCentralMeridian(u).then((function(e){for(var r in l){var t=l[r];a.push(r),c[r]=e.slice(t[0],t[1])}return i._isInputGeometryZAware(c,a)?i.getServiceDescription():s.resolve({dontCheck:!0})})).then((function(s){("dontCheck"in s?s.dontCheck:s.hasZ)||i._dropZValuesOffInputGeometry(c,a);var p=function(r){c[r].forEach((function(t,o){e.get(r)[o].geometry=t}))};for(var u in c)p(u);var l={query:t.__assign(t.__assign(t.__assign({},i.parsedUrl.query),{f:"json"}),d.toQueryParams(e))};(i.requestOptions||r)&&(l=t.__assign(t.__assign(t.__assign({},i.requestOptions),r),l));var y=i.parsedUrl.path,f=n.endsWith(y,"/solve")?y:y+"/solve";return o(f,l)})).then((function(e){return i._handleSolveResponse(e)}))},r.prototype._collectGeometries=function(e,r,t,o){o[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},r.prototype._handleSolveResponse=function(e){var r,t=[],o=[],s=e.data,i=s.directions,n=s.routes,a=void 0===n?{}:n,p=a.features,u=void 0===p?[]:p,l=a.spatialReference,d=s.stops,y=void 0===d?{}:d,f=y.features,_=void 0===f?[]:f,m=y.spatialReference,v=s.barriers,g=s.polygonBarriers,h=s.polylineBarriers,B=s.messages,R="esri.tasks.RouteTask.NULL_ROUTE_NAME",b=!0,w=u&&(void 0===l?null:l)||_&&(void 0===m?null:m)||v&&v.spatialReference||g&&g.spatialReference||h&&h.spatialReference;(void 0===i?[]:i).forEach((function(e){t.push(r=e.routeName),o[r]={directions:e}})),u.forEach((function(e){-1===t.indexOf(r=e.attributes.Name)&&(t.push(r),o[r]={}),e.geometry&&(e.geometry.spatialReference=w),o[r].route=e})),_.forEach((function(e){-1===t.indexOf(r=e.attributes.RouteName||R)&&(t.push(r),o[r]={}),r!==R&&(b=!1),e.geometry&&(e.geometry.spatialReference=w),null==o[r].stops&&(o[r].stops=[]),o[r].stops.push(e)})),_.length>0&&!0===b&&(o[t[0]].stops=o[R].stops,delete o[R],t.splice(t.indexOf(R),1));var N=t.map((function(e){return o[e].routeName=e===R?null:e,o[e]}));return c.fromJSON({routeResults:N,pointBarriers:v,polygonBarriers:g,polylineBarriers:h,messages:B})},t.__decorate([a.subclass("esri.tasks.RouteTask")],r)}(l.NAServiceDescriptionMixin(u))}).apply(null,o))||(e.exports=s)},g5xi:function(e,r,t){var o,s;o=[t.dj.c(e.i),r,t("zOht"),t("jZlN"),t("ycL1"),t("Vx27"),t("BPYA"),t("w1v0"),t("VIp5"),t("qOTR")],void 0===(s=(function(e,r,t,o,s,i,n,a,p,u){"use strict";function l(e){return e&&a.fromJSON(e).features.map((function(e){return e}))}return function(e){function r(r){var t=e.call(this,r)||this;return t.barriers=null,t.messages=null,t.pointBarriers=null,t.polylineBarriers=null,t.polygonBarriers=null,t.routeResults=null,t}return t.__extends(r,e),r.prototype.readPointBarriers=function(e,r){return l(r.barriers||r.pointBarriers)},r.prototype.readPolylineBarriers=function(e){return l(e)},r.prototype.readPolygonBarriers=function(e){return l(e)},t.__decorate([i.property({aliasOf:"pointBarriers"})],r.prototype,"barriers",void 0),t.__decorate([i.property({type:[p]})],r.prototype,"messages",void 0),t.__decorate([i.property({type:[o]})],r.prototype,"pointBarriers",void 0),t.__decorate([n.reader("pointBarriers",["barriers","pointBarriers"])],r.prototype,"readPointBarriers",null),t.__decorate([i.property({type:[o]})],r.prototype,"polylineBarriers",void 0),t.__decorate([n.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),t.__decorate([i.property({type:[o]})],r.prototype,"polygonBarriers",void 0),t.__decorate([n.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),t.__decorate([i.property({type:[u]})],r.prototype,"routeResults",void 0),t.__decorate([i.subclass("esri.tasks.support.RouteResultsContainer")],r)}(s.JSONSupport)}).apply(null,o))||(e.exports=s)},qOTR:function(e,r,t){var o,s;o=[t.dj.c(e.i),r,t("zOht"),t("jZlN"),t("ycL1"),t("Vx27"),t("mEoI")],void 0===(s=(function(e,r,t,o,s,i,n){"use strict";return function(e){function r(r){var t=e.call(this,r)||this;return t.directions=null,t.route=null,t.routeName=null,t.stops=null,t}return t.__extends(r,e),t.__decorate([i.property({type:n,json:{write:!0}})],r.prototype,"directions",void 0),t.__decorate([i.property({type:o,json:{write:!0}})],r.prototype,"route",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],r.prototype,"routeName",void 0),t.__decorate([i.property({type:[o],json:{write:!0}})],r.prototype,"stops",void 0),t.__decorate([i.subclass("esri.tasks.support.RouteResult")],r)}(s.JSONSupport)}).apply(null,o))||(e.exports=s)}}]);