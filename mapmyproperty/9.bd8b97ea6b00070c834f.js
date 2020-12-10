(function(){var e={"esri/core/libs/gl-matrix-2/mat4f64":"1m5D","arcgis-js-api/core/libs/gl-matrix-2/mat4f64":"1m5D","arcgis-js-api/views/3d/layers/support/FastSymbolUpdates":"3w6h","arcgis-js-api/core/libs/gl-matrix-2/mat3f64":"51bw","arcgis-js-api/views/2d/engine/webgl/util/debug":"AbdV","arcgis-js-api/core/libs/gl-matrix-2/factories/mat4f64":"CIzB","arcgis-js-api/views/3d/support/debugFlags":"Dk48","arcgis-js-api/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":"iHXi","arcgis-js-api/core/CircularArray":"zIqJ"},t=this||window,o=t.webpackJsonp=t.webpackJsonp||[];o.registerAbsMids?o.registerAbsMids(e):(o.absMidsWaiting=o.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1m5D":function(e,t,o){var i,r;i=[o.dj.c(e.i),t,o("CIzB")],void 0===(r=(function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mat4f64=void 0,t.mat4f64=o}).apply(null,i))||(e.exports=r)},"3w6h":function(e,t,o){var i,r;i=[o.dj.c(e.i),t,o("pcDC"),o("xoE+"),o("YX1r"),o("51bw"),o("FXVB"),o("1m5D"),o("0LE5"),o("Rdxj"),o("4oaH"),o("Dk48")],void 0===(r=(function(e,t,o,i,r,a,n,s,l,u,p,c){"use strict";var f;function v(e){return null!=e}function d(e){return"number"==typeof e}function _(e){return"string"==typeof e}function S(e,t){e&&e.push(t)}function E(e,t,o,i,r){var a=e.minSize,n=e.maxSize;if(e.expression)return S(r,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){var s=i.symbolSize[o];return t.minSize[o]=s,t.maxSize[o]=s,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=1,!0}if(v(e.field))return v(e.stops)?2===e.stops.length&&d(e.stops[0].size)&&d(e.stops[1].size)?(y(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,o),t.type[o]=1,!0):(S(r,"Could not convert size info: stops only supported with 2 elements"),!1):d(a)&&d(n)&&v(e.minDataValue)&&v(e.maxDataValue)?(y(a,n,e.minDataValue,e.maxDataValue,t,o),t.type[o]=1,!0):null!=p.meterIn[e.valueUnit]?(t.minSize[o]=-1/0,t.maxSize[o]=1/0,t.offset[o]=0,t.factor[o]=1/p.meterIn[e.valueUnit],t.type[o]=1,!0):"unknown"===e.valueUnit?(S(r,"Could not convert size info: proportional size not supported"),!1):(S(r,"Could not convert size info: scale-dependent size not supported"),!1);if(!v(e.field)){if(e.stops&&e.stops[0]&&d(e.stops[0].size))return t.minSize[o]=e.stops[0].size,t.maxSize[o]=e.stops[0].size,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=1,!0;if(d(a))return t.minSize[o]=a,t.maxSize[o]=a,t.offset[o]=a,t.factor[o]=0,t.type[o]=1,!0}return S(r,"Could not convert size info: unsupported variant of sizeInfo"),!1}function y(e,t,o,i,r,a){var n=Math.abs(i-o)>0?(t-e)/(i-o):0;r.minSize[a]=n>0?e:t,r.maxSize[a]=n>0?t:e,r.offset[a]=e-o*n,r.factor[a]=n}function z(e,t,o){e[4*t+0]=o.r/255,e[4*t+1]=o.g/255,e[4*t+2]=o.b/255,e[4*t+3]=o.a}function m(e,t,o){var i=2===o&&"arithmetic"===e.rotationType;t.offset[o]=i?90:0,t.factor[o]=i?-1:1,t.type[o]=1}function I(e,t,i){if(!e)return null;var r=!t.supportedTypes||!!t.supportedTypes.size,a=!t.supportedTypes||!!t.supportedTypes.color,n=!t.supportedTypes||!!t.supportedTypes.rotation,s=!!t.supportedTypes&&!!t.supportedTypes.opacity,l=e.reduce((function(e,l){if(!e)return e;if(l.valueExpression)return S(i,"Could not convert visual variables: arcade expressions not supported"),null;switch(l.type){case"size":return r?function(e,t,o,i){if(e.normalizationField||e.valueRepresentation)return S(i,"Could not convert size info: unsupported property"),null;if(null!=(r=e.field)&&!_(r))return S(i,"Could not convert size info: field is not a string"),null;var r,a;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return S(i,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size={field:e.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};switch(e.axis){case"width":return(a=E(e,t.size,0,o,i))?t:null;case"height":return(a=E(e,t.size,2,o,i))?t:null;case"depth":return(a=E(e,t.size,1,o,i))?t:null;case"width-and-depth":return(a=E(e,t.size,0,o,i))&&E(e,t.size,1,o,i),a?t:null;case null:case void 0:case"all":return(a=(a=(a=E(e,t.size,0,o,i))&&E(e,t.size,1,o,i))&&E(e,t.size,2,o,i))?t:null;default:return S(i,'Could not convert size info: unknown axis "'+e.axis+'""'),null}}(l,e,t,i):e;case"color":return a?function(e,t,o){if(e.normalizationField)return S(o,"Could not convert color info: unsupported property"),null;if(_(e.field)){if(!e.stops)return S(o,"Could not convert color info: missing stops or colors"),null;if(e.stops.length>8)return S(o,"Could not convert color info: too many color stops"),null;t.color={field:e.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(var i=e.stops,r=0;r<8;++r){var a=i[Math.min(r,i.length-1)];t.color.values[r]=a.value,z(t.color.colors,r,a.color)}}else{if(!(e.stops&&e.stops.length>=0))return S(o,"Could not convert color info: no field and no colors/stops"),null;var n=e.stops&&e.stops.length>=0&&e.stops[0].color;for(t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},r=0;r<8;r++)t.color.values[r]=1/0,z(t.color.colors,r,n)}return t}(l,e,i):e;case"opacity":return s?function(e,t,o){if(e.normalizationField)return S(o,"Could not convert opacity info: unsupported property"),null;if(_(e.field)){if(!e.stops)return S(o,"Could not convert opacity info: missing stops or opacities"),null;if(e.stops.length>8)return S(o,"Could not convert opacity info: too many opacity stops"),null;t.opacity={field:e.field,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(var i=e.stops,r=0;r<8;++r){var a=i[Math.min(r,i.length-1)];t.opacity.values[r]=a.value,t.opacity.opacityValues[r]=a.opacity}}else{if(!(e.stops&&e.stops.length>=0))return S(o,"Could not convert opacity info: no field and no opacities/stops"),null;var n=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]},r=0;r<8;r++)t.opacity.values[r]=1/0,t.opacity.opacityValues[r]=n}return t}(l,e,i):null;case"rotation":return n?function(e,t,o){if(!_(e.field))return S(o,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return S(o,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return m(e,t.rotation,0),t;case"roll":return m(e,t.rotation,1),t;case null:case void 0:case"heading":return m(e,t.rotation,2),t;default:return S(o,'Could not convert rotation info: unknown axis "'+e.axis+'""'),null}}(l,e,i):e;default:return o.neverReached(l),null}}),{size:null,color:null,opacity:null,rotation:null});return!(e.length>0&&l)||l.size||l.color||l.opacity||l.rotation?l&&l.size&&!function(e,t,o){for(var i=0;i<3;++i){var r=t.unitInMeters;1===e.type[i]&&(r*=t.modelSize[i],e.type[i]=2),e.minSize[i]=e.minSize[i]/r,e.maxSize[i]=e.maxSize[i]/r,e.offset[i]=e.offset[i]/r,e.factor[i]=e.factor[i]/r}var a;if(0!==e.type[0])a=0;else if(0!==e.type[1])a=1;else{if(0===e.type[2])return S(o,"No size axis contains a valid size or scale"),!1;a=2}for(i=0;i<3;++i)0===e.type[i]&&(e.minSize[i]=e.minSize[a],e.maxSize[i]=e.maxSize[a],e.offset[i]=e.offset[a],e.factor[i]=e.factor[a],e.type[i]=e.type[a]);return!0}(l.size,t,i)?null:l:null}function T(e){return e&&null!=e.size}function O(e,t,o){if(!!e!=!!t)return!1;if(e&&e.field!==t.field)return!1;if(e&&"rotation"===o)for(var i=e,r=t,a=0;a<3;a++)if(i.type[a]!==r.type[a]||i.offset[a]!==r.offset[a]||i.factor[a]!==r.factor[a])return!1;return!0}function R(e,t){var o={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvOpacityEnabled:!1,vvOpacityValues:null,vvOpacityOpacities:null,vvSymbolAnchor:null,vvSymbolRotationMatrix:null},i=T(e);return e&&e.size?(o.vvSizeEnabled=!0,o.vvSizeMinSize=e.size.minSize,o.vvSizeMaxSize=e.size.maxSize,o.vvSizeOffset=e.size.offset,o.vvSizeFactor=e.size.factor):e&&i&&(o.vvSizeValue=t.transformation.scale),e&&i&&(o.vvSymbolAnchor=t.transformation.anchor,o.vvSymbolRotationMatrix=a.mat3f64.create(),n.mat4.identity(h),function(e,t,o,i){void 0===i&&(i=s.mat4f64.create());var r=e||0,a=t||0,l=o||0;0!==r&&n.mat4.rotateZ(i,i,-r/180*Math.PI),0!==a&&n.mat4.rotateX(i,i,a/180*Math.PI),0!==l&&n.mat4.rotateY(i,i,l/180*Math.PI)}(t.transformation.rotation[2],t.transformation.rotation[0],t.transformation.rotation[1],h),r.mat3.fromMat4(o.vvSymbolRotationMatrix,h)),e&&e.color&&(o.vvColorEnabled=!0,o.vvColorValues=e.color.values,o.vvColorColors=e.color.colors),e&&e.opacity&&(o.vvOpacityEnabled=!0,o.vvOpacityValues=e.opacity.values,o.vvOpacityOpacities=e.opacity.opacityValues),o}Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateModelTransformScale=t.evaluateModelTransform=t.getMaterialParams=t.updateFastSymbolUpdatesState=t.initFastSymbolUpdatesState=t.convertVisualVariables=void 0,t.convertVisualVariables=I,t.initFastSymbolUpdatesState=function(e,t){if(!e)return{enabled:!1};if(c.DISABLE_FAST_UPDATES)return{enabled:!1};var o=I(e.visualVariables,t);return o?{enabled:!0,visualVariables:o,materialParameters:R(o,t),requiresShaderTransformation:T(o)}:{enabled:!1}},t.updateFastSymbolUpdatesState=function(e,t,o){if(!t||!e.enabled)return!1;var i=e.visualVariables,r=I(t.visualVariables,o);return!!r&&!!(O(i.size,r.size,"size")&&O(i.color,r.color,"color")&&O(i.rotation,r.rotation,"rotation")&&O(i.opacity,r.opacity,"opacity"))&&(e.visualVariables=r,e.materialParameters=R(r,o),e.requiresShaderTransformation=T(r),!0)},t.getMaterialParams=R,function(e){var t=s.mat4f64.create(),o=u.vec3f64.create();e.evaluateModelTransform=function(e,r,a){if(!e.vvSizeEnabled)return a;n.mat4.copy(t,a);var s=e.vvSymbolRotationMatrix;n.mat4.set(h,s[0],s[1],s[2],0,s[3],s[4],s[5],0,s[6],s[7],s[8],0,0,0,0,1),n.mat4.multiply(t,t,h);for(var l=0;l<3;++l)o[l]=i.clamp(e.vvSizeOffset[l]+r[0]*e.vvSizeFactor[l],e.vvSizeMinSize[l],e.vvSizeMaxSize[l]);return n.mat4.scale(t,t,o),n.mat4.translate(t,t,e.vvSymbolAnchor),t},e.evaluateModelTransformScale=function(e,t,o){if(!t.vvSizeEnabled)return l.vec3.set(e,1,1,1);for(var r=0;r<3;++r)e[r]=i.clamp(t.vvSizeOffset[r]+o[0]*t.vvSizeFactor[r],t.vvSizeMinSize[r],t.vvSizeMaxSize[r]);return e}}(f||(f={}));var h=s.mat4f64.create();t.evaluateModelTransform=f.evaluateModelTransform,t.evaluateModelTransformScale=f.evaluateModelTransformScale}).apply(null,i))||(e.exports=r)},"51bw":function(e,t,o){var i,r;i=[o.dj.c(e.i),t,o("xf8T")],void 0===(r=(function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mat3f64=void 0,t.mat3f64=o}).apply(null,i))||(e.exports=r)},AbdV:function(e,t,o){var i,r;i=[o.dj.c(e.i),t,o("zOht")],void 0===(r=(function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEBUG_ATTR_UPDATES=t.createDebugLogger=void 0,t.createDebugLogger=function(e,t){return e&&function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return t.warn.apply(t,o.__spreadArrays(["DEBUG:"],e))}||function(){return null}},t.DEBUG_ATTR_UPDATES=!1}).apply(null,i))||(e.exports=r)},CIzB:function(e,t,o){var i,r;i=[o.dj.c(e.i),t],void 0===(r=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IDENTITY=t.createView=t.fromValues=t.clone=t.create=void 0,t.create=function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},t.clone=function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]},t.fromValues=function(e,t,o,i,r,a,n,s,l,u,p,c,f,v,d,_){return[e,t,o,i,r,a,n,s,l,u,p,c,f,v,d,_]},t.createView=function(e,t){return new Float64Array(e,t,16)},t.IDENTITY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}).apply(null,i))||(e.exports=r)},Dk48:function(e,t,o){var i,r;i=[o.dj.c(e.i),t,o("zOht"),o("Gtr7"),o("Vx27")],void 0===(r=(function(e,t,o,i,r){"use strict";return new(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,t.SCENEVIEW_LOCKING_LOG=!1,t.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED=!1,t.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,t.DECONFLICTOR_SHOW_VISIBLE=!1,t.DECONFLICTOR_SHOW_INVISIBLE=!1,t.DECONFLICTOR_SHOW_GRID=!1,t.LABELS_SHOW_BORDER=!1,t.OVERLAY_DRAW_DEBUG_TEXTURE=!1,t.OVERLAY_SHOW_CENTER=!1,t.SHOW_POI=!1,t.TERRAIN_DEBUG_POPUP=!1,t.TESTS_DISABLE_UPDATE_THRESHOLDS=!1,t.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1,t.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1,t.DRAW_MESH_GEOMETRY_NORMALS=!1,t.FEATURE_TILE_FETCH_SHOW_TILES=!1,t.FEATURE_TILE_TREE_SHOW_TILES=!1,t.I3S_TREE_SHOW_TILES=!1,t.I3S_SHOW_MODIFICATIONS=!1,t.ENABLE_PROFILE_DEPTH_RANGE=!1,t.DISABLE_FAST_UPDATES=!1,t.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,t.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,t.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,t}return o.__extends(t,e),o.__decorate([r.property()],t.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),o.__decorate([r.property()],t.prototype,"SCENEVIEW_LOCKING_LOG",void 0),o.__decorate([r.property()],t.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED",void 0),o.__decorate([r.property()],t.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),o.__decorate([r.property()],t.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),o.__decorate([r.property()],t.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),o.__decorate([r.property()],t.prototype,"DECONFLICTOR_SHOW_GRID",void 0),o.__decorate([r.property()],t.prototype,"LABELS_SHOW_BORDER",void 0),o.__decorate([r.property()],t.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),o.__decorate([r.property()],t.prototype,"OVERLAY_SHOW_CENTER",void 0),o.__decorate([r.property()],t.prototype,"SHOW_POI",void 0),o.__decorate([r.property()],t.prototype,"TERRAIN_DEBUG_POPUP",void 0),o.__decorate([r.property()],t.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0),o.__decorate([r.property()],t.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0),o.__decorate([r.property()],t.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0),o.__decorate([r.property()],t.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),o.__decorate([r.property()],t.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),o.__decorate([r.property()],t.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),o.__decorate([r.property()],t.prototype,"I3S_TREE_SHOW_TILES",void 0),o.__decorate([r.property()],t.prototype,"I3S_SHOW_MODIFICATIONS",void 0),o.__decorate([r.property()],t.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0),o.__decorate([r.property()],t.prototype,"DISABLE_FAST_UPDATES",void 0),o.__decorate([r.property()],t.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),o.__decorate([r.property()],t.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),o.__decorate([r.property()],t.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),o.__decorate([r.subclass("esri.views.3d.support.DebugFlags")],t)}(i))}).apply(null,i))||(e.exports=r)},iHXi:function(e,t,o){var i,r;i=[o.dj.c(e.i),t,o("zOht"),o("jBNx"),o("4F/P"),o("tI6k"),o("JNkf"),o("G59t"),o("3w6h")],void 0===(r=(function(e,t,o,i,r,a,n,s,l){"use strict";function u(e){return{value:e.value,size:i.toPt(e.size)}}function p(e){return e.map((function(e){return u(e)}))}function c(e){return"string"==typeof e||"number"==typeof e?i.toPt(e):{type:"size",expression:e.expression,stops:p(e.stops)}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertVisualVariables=t.getVisualVariablesFields=t.normalizeSizeElement=t.normalizeSizeStops=t.stopToSizeStop=t.getVisualVariableSizeValueRepresentationRatio=void 0,t.getVisualVariableSizeValueRepresentationRatio=function(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e},t.stopToSizeStop=u,t.normalizeSizeStops=p,t.normalizeSizeElement=c,t.getVisualVariablesFields=function(e){var t=e&&e.length>0?{}:null;return t&&e.forEach((function(e){e.field&&(t[e.type]=e.field)})),t};var f=function(e){for(var t=[],o=[],r=p(e),n=r.length,s=0;s<6;s++){var l=r[Math.min(s,n-1)];t.push(l.value),o.push(null==l.size?a.NAN_MAGIC_NUMBER:i.pt2px(l.size))}return{values:new Float32Array(t),sizes:new Float32Array(o)}};function v(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;if(e.stops.length>8)return null;for(var o=e.stops,i=0;i<8;++i){var r=o[Math.min(i,o.length-1)];t.values[i]=r.value,t.opacities[i]=r.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;var a=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(i=0;i<8;i++)t.values[i]=1/0,t.opacities[i]=a}return t}t.convertVisualVariables=function(e){var t=e&&e.length>0?{}:null,i=t?{}:null;if(!t)return{vvFields:t,vvRanges:i};for(var a=0,u=e;a<u.length;a++){var d=u[a],_=d.type;if(d.field&&(t[_]=d.field),"size"===_){i.size||(i.size={});var S=d;switch(s.getTypeOfSizeVisualVariable(S)){case n.WGLVVFlag.SIZE_MINMAX_VALUE:i.size.minMaxValue={minDataValue:S.minDataValue,maxDataValue:S.maxDataValue,minSize:c(S.minSize),maxSize:c(S.maxSize)};break;case n.WGLVVFlag.SIZE_SCALE_STOPS:i.size.scaleStops={stops:p(S.stops)};break;case n.WGLVVFlag.SIZE_FIELD_STOPS:if(S.levels){var E={};for(var y in S.levels)E[y]=f(S.levels[y]);i.size.fieldStops={type:"level-dependent",levels:E}}else i.size.fieldStops=o.__assign({type:"static"},f(S.stops));break;case n.WGLVVFlag.SIZE_UNIT_VALUE:i.size.unitValue={unit:S.valueUnit,valueRepresentation:S.valueRepresentation}}}else if("color"===_){var z=l.convertVisualVariables([d],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});if(!z)continue;i.color=z.color;for(var m=0;m<32;m+=4)r.premultiplyAlpha(i.color.colors,m,!0)}else"opacity"===_?i.opacity=v(d):"rotation"===_&&(i.rotation={type:d.rotationType})}return{vvFields:t,vvRanges:i}}}).apply(null,i))||(e.exports=r)},zIqJ:function(e,t,o){var i,r;i=[o.dj.c(e.i),t,o("LxLY")],void 0===(r=(function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.size=0,this._start=0,this.maxSize=e,this._buffer=isFinite(e)?new Array(e):[]}return Object.defineProperty(e.prototype,"entries",{get:function(){return this._buffer},enumerable:!1,configurable:!0}),e.prototype.enqueue=function(e){if(this.size===this.maxSize){var t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=e:this._buffer[this._start+this.size++]=e,null},e.prototype.dequeue=function(){if(0===this.size)return null;var e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e},e.prototype.clear=function(){for(;o.isSome(this.dequeue()););},e}();t.default=i}).apply(null,i))||(e.exports=r)}}]);