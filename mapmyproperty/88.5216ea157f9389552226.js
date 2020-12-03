(function(){var e={"esri/symbols/support/symbolLayerUtils":"5ba0","esri/symbols/support/symbolLayerUtils3D":"5wSx"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"5ba0":function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("ma1f"),t("ZHL0"),t("LxLY"),t("qMld"),t("WRgd"),t("5wSx"),t("2Kdy")],void 0===(n=(function(e,r,i,n,o,u,s,c,a,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.computeObjectLayerResourceSize=r.computeIconLayerResourceSize=r.computeLayerSize=r.computeLayerResourceSize=r.clearBoundingBoxCache=void 0;var _=d();function d(){return new u(50)}function f(e,r){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){if(e.resource.href)return[2,(i=e.resource.href,n(i,{responseType:"image"}).then((function(e){return e.data}))).then((function(e){return[e.width,e.height]}))];var i;if(e.resource.primitive)return s.isSome(r)?[2,[r,r]]:[2,[256,256]];throw new o("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}))}))}function y(e,r){return f(e,r).then((function(r){if(null==e.size)return r;var t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}function p(e,r){return function(e,r){return i.__awaiter(this,void 0,void 0,(function(){var n,u,d,f,y;return i.__generator(this,(function(i){switch(i.label){case 0:return e.isPrimitive?[3,3]:void 0!==(u=_.get(n=e.resource.href))?[2,c.resolve(u)]:[4,new Promise((function(e,r){Promise.all([t.e(2),t.e(3),t.e(15),t.e(17),t.e(47)]).then((function(){var r=[t("cMCQ")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))];case 1:return[4,i.sent().fetch(n,{disableTextures:!0})];case 2:return d=i.sent(),_.put(n,d.referenceBoundingBox),[2,d.referenceBoundingBox];case 3:if(f=null,e.resource&&e.resource.primitive&&(f=a.create(l.objectSymbolLayerPrimitiveBoundingBox(e.resource.primitive)),s.isSome(r)))for(y=0;y<f.length;y++)f[y]*=r;return[2,f?c.resolve(f):c.reject(new o("symbol:invalid-resource","The symbol does not have a valid resource"))]}}))}))}(e,r).then((function(e){return a.size(e)}))}function h(e,r){return i.__awaiter(this,void 0,void 0,(function(){var t;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,p(e,r)];case 1:return t=i.sent(),[2,l.objectSymbolLayerSizeWithResourceSize(t,e)]}}))}))}r.clearBoundingBoxCache=function(){_=d()},r.computeLayerResourceSize=function(e,r){if("icon"===e.type)return f(e,r);if("object"===e.type)return p(e,r);throw new o("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")},r.computeLayerSize=function(e,r){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){if("icon"===e.type)return[2,y(e,r)];if("object"===e.type)return[2,h(e,r)];throw new o("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}))}))},r.computeIconLayerResourceSize=f,r.computeObjectLayerResourceSize=p}).apply(null,i))||(e.exports=n)},"5wSx":function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t("pcDC"),t("Rdxj"),t("WRgd")],void 0===(n=(function(e,r,t,i,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.objectSymbolLayerPrimitiveBoundingBox=r.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON=r.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER=r.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE=r.objectSymbolLayerSizeWithResourceSize=void 0,r.objectSymbolLayerSizeWithResourceSize=function(e,r){var t=r.width,n=r.depth,o=r.height,u=r.isPrimitive?10:1;if(null==t&&null==o&&null==n)return[u*e[0],u*e[1],u*e[2]];for(var s,c=i.vec3f64.fromValues(t,n,o),a=0;a<3;a++){var l=c[a];if(null!=l){s=l/e[a];break}}for(a=0;a<3;a++)null==c[a]&&(c[a]=e[a]*s);return c},r.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE=n.fromValues(-.5,-.5,-.5,.5,.5,.5),r.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER=n.fromValues(-.5,-.5,0,.5,.5,1),r.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON=n.fromValues(-.5,-.5,0,.5,.5,.5),r.objectSymbolLayerPrimitiveBoundingBox=function(e){switch(e){case"sphere":case"cube":case"diamond":return r.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE;case"cylinder":case"cone":case"inverted-cone":return r.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER;case"tetrahedron":return r.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON;default:return void t.neverReached(e)}}}).apply(null,i))||(e.exports=n)}}]);