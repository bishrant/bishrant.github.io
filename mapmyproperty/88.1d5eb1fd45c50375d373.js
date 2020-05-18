(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/tasks/RouteTask":"PMnE","arcgis-js-api/tasks/support/RouteResultsContainer":"g5xi","arcgis-js-api/tasks/support/RouteResult":"qOTR"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{PMnE:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("qKT0"),t("9opi"),t("2Atf"),t("zp6E"),t("qMld"),t("a4MF"),t("nRUF"),t("Vx27"),t("fw2w"),t("FPqO"),t("SA66"),t("g5xi")],void 0===(i=(function(e,r,t,o,i,s,n,a,p,u,l,c,y,f){var d=a.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});return function(e){function r(r){return e.call(this,r)||this}return o(r,e),r.prototype.solve=function(e,r){var t=this,o=[],a=[],u={},c={};return e.stops&&e.stops.features&&this._collectGeometries(e.stops.features,a,"stops.features",u),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,a,"pointBarriers.features",u),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,a,"polylineBarriers.features",u),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,a,"polygonBarriers.features",u),l.normalizeCentralMeridian(a).then((function(e){for(var r in u){var i=u[r];o.push(r),c[r]=e.slice(i[0],i[1])}return t._isInputGeometryZAware(c,o)?t.getServiceDescription():n.resolve({dontCheck:!0})})).then((function(n){("dontCheck"in n?n.dontCheck:n.hasZ)||t._dropZValuesOffInputGeometry(c,o);var a=function(r){c[r].forEach((function(t,o){e.get(r)[o].geometry=t}))};for(var u in c)a(u);var l={query:i({},t.parsedUrl.query,{f:"json"},d.toQueryParams(e))};(t.requestOptions||r)&&(l=i({},t.requestOptions,r,l));var y=t.parsedUrl.path,f=p.endsWith(y,"/solve")?y:y+"/solve";return s(f,l)})).then((function(e){return t._handleSolveResponse(e)}))},r.prototype._collectGeometries=function(e,r,t,o){o[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},r.prototype._handleSolveResponse=function(e){var r,t=[],o=[],i=e.data,s=i.directions,n=i.routes,a=void 0===n?{}:n,p=a.features,u=void 0===p?[]:p,l=a.spatialReference,c=i.stops,y=void 0===c?{}:c,d=y.features,m=void 0===d?[]:d,v=y.spatialReference,h=i.barriers,B=i.polygonBarriers,g=i.polylineBarriers,R=i.messages,b="esri.tasks.RouteTask.NULL_ROUTE_NAME",N=!0,w=u&&(void 0===l?null:l)||m&&(void 0===v?null:v)||h&&h.spatialReference||B&&B.spatialReference||g&&g.spatialReference;(void 0===s?[]:s).forEach((function(e){t.push(r=e.routeName),o[r]={directions:e}})),u.forEach((function(e){-1===t.indexOf(r=e.attributes.Name)&&(t.push(r),o[r]={}),e.geometry&&(e.geometry.spatialReference=w),o[r].route=e})),m.forEach((function(e){-1===t.indexOf(r=e.attributes.RouteName||b)&&(t.push(r),o[r]={}),r!==b&&(N=!1),e.geometry&&(e.geometry.spatialReference=w),null==o[r].stops&&(o[r].stops=[]),o[r].stops.push(e)})),m.length>0&&!0===N&&(o[t[0]].stops=o[b].stops,delete o[b],t.splice(t.indexOf(b),1));var k=t.map((function(e){return o[e].routeName=e===b?null:e,o[e]}));return f.fromJSON({routeResults:k,pointBarriers:h,polygonBarriers:B,polylineBarriers:g,messages:R})},t([u.subclass("esri.tasks.RouteTask")],r)}(u.declared(y.NAServiceDescriptionMixin(c)))}).apply(null,o))||(e.exports=i)},g5xi:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("9opi"),t("qKT0"),t("jZlN"),t("ycL1"),t("Vx27"),t("BPYA"),t("w1v0"),t("VIp5"),t("qOTR")],void 0===(i=(function(e,r,t,o,i,s,n,a,p,u,l){function c(e){return e&&p.fromJSON(e).features.map((function(e){return e}))}return function(e){function r(r){var t=e.call(this,r)||this;return t.barriers=null,t.messages=null,t.pointBarriers=null,t.polylineBarriers=null,t.polygonBarriers=null,t.routeResults=null,t}return t(r,e),r.prototype.readPointBarriers=function(e,r){return c(r.barriers||r.pointBarriers)},r.prototype.readPolylineBarriers=function(e){return c(e)},r.prototype.readPolygonBarriers=function(e){return c(e)},o([n.property({aliasOf:"pointBarriers"})],r.prototype,"barriers",void 0),o([n.property({type:[u]})],r.prototype,"messages",void 0),o([n.property({type:[i]})],r.prototype,"pointBarriers",void 0),o([a.reader("pointBarriers",["barriers","pointBarriers"])],r.prototype,"readPointBarriers",null),o([n.property({type:[i]})],r.prototype,"polylineBarriers",void 0),o([a.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),o([n.property({type:[i]})],r.prototype,"polygonBarriers",void 0),o([a.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),o([n.property({type:[l]})],r.prototype,"routeResults",void 0),o([n.subclass("esri.tasks.support.RouteResultsContainer")],r)}(n.declared(s.JSONSupport))}).apply(null,o))||(e.exports=i)},qOTR:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t("qKT0"),t("9opi"),t("jZlN"),t("ycL1"),t("Vx27"),t("mEoI")],void 0===(i=(function(e,r,t,o,i,s,n,a){return function(e){function r(r){var t=e.call(this,r)||this;return t.directions=null,t.route=null,t.routeName=null,t.stops=null,t}return o(r,e),t([n.property({type:a,json:{write:!0}})],r.prototype,"directions",void 0),t([n.property({type:i,json:{write:!0}})],r.prototype,"route",void 0),t([n.property({type:String,json:{write:!0}})],r.prototype,"routeName",void 0),t([n.property({type:[i],json:{write:!0}})],r.prototype,"stops",void 0),t([n.subclass("esri.tasks.support.RouteResult")],r)}(n.declared(s.JSONSupport))}).apply(null,o))||(e.exports=i)}}]);