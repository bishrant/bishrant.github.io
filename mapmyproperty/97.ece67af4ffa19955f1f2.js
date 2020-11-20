(function(){var e={"arcgis-js-api/arcade/functions/featuresetgeom":"59NQ"},n=this||window,t=n.webpackJsonp=n.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"59NQ":function(e,n,t){var r,i;r=[t.dj.c(e.i),n,t("WoOE"),t("gfOZ"),t("VM5u"),t("20W2"),t("qMld"),t("YADd"),t("wfTL")],void 0===(i=(function(e,n,t,r,i,a,s,o,u){"use strict";function l(e){return e instanceof o}function c(e,n,c,f,p){return p(e,n,(function(e,n,p){if(p.length<2)return f(new Error("Missing Parameters"));if(null===(p=r.autoCastFeatureToGeometry(p))[0]&&null===p[1])return s.resolve(!1);if(r.isFeatureSet(p[0]))return p[1]instanceof o?s.resolve(new i({parentfeatureset:p[0],relation:c,relationGeom:p[1]})):null===p[1]?s.resolve(new a({parentfeatureset:p[0]})):f("Spatial Relation cannot accept this parameter type");if(l(p[0])){if(l(p[1])){var d=null;switch(c){case"esriSpatialRelEnvelopeIntersects":d=u.intersects(t.shapeExtent(p[0]),t.shapeExtent(p[1]));break;case"esriSpatialRelIntersects":d=u.intersects(p[0],p[1]);break;case"esriSpatialRelContains":d=u.contains(p[0],p[1]);break;case"esriSpatialRelOverlaps":d=u.overlaps(p[0],p[1]);break;case"esriSpatialRelWithin":d=u.within(p[0],p[1]);break;case"esriSpatialRelTouches":d=u.touches(p[0],p[1]);break;case"esriSpatialRelCrosses":d=u.crosses(p[0],p[1])}return null!==d?d:s.reject(new Error("Unrecognised Relationship"))}return r.isFeatureSet(p[1])?s.resolve(new i({parentfeatureset:p[1],relation:c,relationGeom:p[0]})):null===p[1]?s.resolve(!1):f("Spatial Relation cannot accept this parameter type")}return null!==p[0]?f("Spatial Relation cannot accept this parameter type"):r.isFeatureSet(p[1])?s.resolve(new a({parentfeatureset:p[1]})):p[1]instanceof o||null===p[1]?s.resolve(!1):void 0}))}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=void 0,n.registerFunctions=function(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return c(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return c(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return c(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return c(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return c(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return c(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return c(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,(function(e,n,t){if(t=r.autoCastFeatureToGeometry(t),r.pcCheck(t,3,3),l(t[0])&&l(t[1]))return u.relate(t[0],t[1],r.toString(t[2]));if(t[0]instanceof o&&null===t[1])return!1;if(t[1]instanceof o&&null===t[0])return!1;if(r.isFeatureSet(t[0])&&null===t[1])return new a({parentfeatureset:t[0]});if(r.isFeatureSet(t[1])&&null===t[0])return new a({parentfeatureset:t[1]});if(r.isFeatureSet(t[0])&&t[1]instanceof o)return t[0].relate(t[1],r.toString(t[2]));if(r.isFeatureSet(t[1])&&t[0]instanceof o)return t[1].relate(t[0],r.toString(t[2]));if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))})}}).apply(null,r))||(e.exports=i)}}]);