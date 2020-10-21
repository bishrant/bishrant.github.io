(function(){var e={"arcgis-js-api/arcade/functions/featuresetgeom":"59NQ","arcgis-js-api/layers/support/FieldsIndex":"I90O"},t=this||window,n=t.webpackJsonp=t.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"59NQ":function(e,t,n){var r,i;r=[n.dj.c(e.i),t,n("WoOE"),n("gfOZ"),n("VM5u"),n("20W2"),n("qMld"),n("YADd"),n("wfTL")],void 0===(i=(function(e,t,n,r,i,s,a,o,u){"use strict";function l(e){return e instanceof o}function c(e,t,c,f,p){return p(e,t,(function(e,t,p){if(p.length<2)return f(new Error("Missing Parameters"));if(null===(p=r.autoCastFeatureToGeometry(p))[0]&&null===p[1])return a.resolve(!1);if(r.isFeatureSet(p[0]))return p[1]instanceof o?a.resolve(new i({parentfeatureset:p[0],relation:c,relationGeom:p[1]})):null===p[1]?a.resolve(new s({parentfeatureset:p[0]})):f("Spatial Relation cannot accept this parameter type");if(l(p[0])){if(l(p[1])){var d=null;switch(c){case"esriSpatialRelEnvelopeIntersects":d=u.intersects(n.shapeExtent(p[0]),n.shapeExtent(p[1]));break;case"esriSpatialRelIntersects":d=u.intersects(p[0],p[1]);break;case"esriSpatialRelContains":d=u.contains(p[0],p[1]);break;case"esriSpatialRelOverlaps":d=u.overlaps(p[0],p[1]);break;case"esriSpatialRelWithin":d=u.within(p[0],p[1]);break;case"esriSpatialRelTouches":d=u.touches(p[0],p[1]);break;case"esriSpatialRelCrosses":d=u.crosses(p[0],p[1])}return null!==d?d:a.reject(new Error("Unrecognised Relationship"))}return r.isFeatureSet(p[1])?a.resolve(new i({parentfeatureset:p[1],relation:c,relationGeom:p[0]})):null===p[1]?a.resolve(!1):f("Spatial Relation cannot accept this parameter type")}return null!==p[0]?f("Spatial Relation cannot accept this parameter type"):r.isFeatureSet(p[1])?a.resolve(new s({parentfeatureset:p[1]})):p[1]instanceof o||null===p[1]?a.resolve(!1):void 0}))}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=void 0,t.registerFunctions=function(e){"async"===e.mode&&(e.functions.intersects=function(t,n){return c(t,n,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,n){return c(t,n,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(t,n){return c(t,n,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(t,n){return c(t,n,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(t,n){return c(t,n,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(t,n){return c(t,n,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(t,n){return c(t,n,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=r.autoCastFeatureToGeometry(n),r.pcCheck(n,3,3),l(n[0])&&l(n[1]))return u.relate(n[0],n[1],r.toString(n[2]));if(n[0]instanceof o&&null===n[1])return!1;if(n[1]instanceof o&&null===n[0])return!1;if(r.isFeatureSet(n[0])&&null===n[1])return new s({parentfeatureset:n[0]});if(r.isFeatureSet(n[1])&&null===n[0])return new s({parentfeatureset:n[1]});if(r.isFeatureSet(n[0])&&n[1]instanceof o)return n[0].relate(n[1],r.toString(n[2]));if(r.isFeatureSet(n[1])&&n[0]instanceof o)return n[1].relate(n[0],r.toString(n[2]));if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")}))})}}).apply(null,r))||(e.exports=i)},I90O:function(e,t,n){var r,i;r=[n.dj.c(e.i),t],void 0===(i=(function(e,t){"use strict";function n(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function r(e){return e.toLowerCase().trim()}return function(){function e(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],e){for(var t=[],i=0,s=e;i<s.length;i++){var a=s[i],o=a&&a.name;if(o){var u=r(o);this._fieldsMap.set(o,a),this._fieldsMap.set(u,a),t.push(u),n(a)&&(this.dateFields.push(a),this._dateFieldsSet.add(a))}}t.sort(),this.uid=t.join(",")}}return e.prototype.destroy=function(){this._fieldsMap.clear()},e.prototype.has=function(e){return null!=this.get(e)},e.prototype.get=function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(r(e)):void 0},e.prototype.isDateField=function(e){return this._dateFieldsSet.has(this.get(e))},e.prototype.normalizeFieldName=function(e){var t=this.get(e);if(t)return t.name},e}()}).apply(null,r))||(e.exports=i)}}]);