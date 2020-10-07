(function(){var t={"arcgis-js-api/core/libs/gl-matrix-2/mat4f64":"1m5D","arcgis-js-api/views/3d/layers/support/FastSymbolUpdates":"3w6h","arcgis-js-api/core/libs/gl-matrix-2/mat3f64":"51bw","arcgis-js-api/core/libs/gl-matrix-2/factories/mat4f64":"CIzB","arcgis-js-api/views/3d/support/debugFlags":"Dk48","esri/layers/support/FieldsIndex":"I90O","arcgis-js-api/layers/support/FieldsIndex":"I90O","arcgis-js-api/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":"iHXi","esri/views/2d/layers/features/support/AttributeStore":"lvbU","arcgis-js-api/views/2d/layers/features/support/AttributeStore":"lvbU"},e=this||window,r=e.webpackJsonp=e.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(t):(r.absMidsWaiting=r.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1m5D":function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("CIzB")],void 0===(o=(function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.mat4f64=r}).apply(null,i))||(t.exports=o)},"3w6h":function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("pcDC"),r("xoE+"),r("YX1r"),r("51bw"),r("FXVB"),r("1m5D"),r("0LE5"),r("Rdxj"),r("4oaH"),r("Dk48")],void 0===(o=(function(t,e,r,i,o,a,n,s,l,u,c,p){var f;function d(t){return null!=t}function _(t){return"number"==typeof t}function h(t){return"string"==typeof t}function v(t,e){t&&t.push(e)}function y(t,e,r,i,o){var a=t.minSize,n=t.maxSize;if(t.expression)return v(o,"Could not convert size info: expression not supported"),!1;if(t.useSymbolValue){var s=i.symbolSize[r];return e.minSize[r]=s,e.maxSize[r]=s,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=1,!0}if(d(t.field))return d(t.stops)?2===t.stops.length&&_(t.stops[0].size)&&_(t.stops[1].size)?(E(t.stops[0].size,t.stops[1].size,t.stops[0].value,t.stops[1].value,e,r),e.type[r]=1,!0):(v(o,"Could not convert size info: stops only supported with 2 elements"),!1):_(a)&&_(n)&&d(t.minDataValue)&&d(t.maxDataValue)?(E(a,n,t.minDataValue,t.maxDataValue,e,r),e.type[r]=1,!0):null!=c.meterIn[t.valueUnit]?(e.minSize[r]=-1/0,e.maxSize[r]=1/0,e.offset[r]=0,e.factor[r]=1/c.meterIn[t.valueUnit],e.type[r]=1,!0):"unknown"===t.valueUnit?(v(o,"Could not convert size info: proportional size not supported"),!1):(v(o,"Could not convert size info: scale-dependent size not supported"),!1);if(!d(t.field)){if(t.stops&&t.stops[0]&&_(t.stops[0].size))return e.minSize[r]=t.stops[0].size,e.maxSize[r]=t.stops[0].size,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=1,!0;if(_(a))return e.minSize[r]=a,e.maxSize[r]=a,e.offset[r]=a,e.factor[r]=0,e.type[r]=1,!0}return v(o,"Could not convert size info: unsupported variant of sizeInfo"),!1}function E(t,e,r,i,o,a){var n=Math.abs(i-r)>0?(e-t)/(i-r):0;o.minSize[a]=n>0?t:e,o.maxSize[a]=n>0?e:t,o.offset[a]=t-r*n,o.factor[a]=n}function S(t,e,r){t[4*e+0]=r.r/255,t[4*e+1]=r.g/255,t[4*e+2]=r.b/255,t[4*e+3]=r.a}function m(t,e,r){var i=2===r&&"arithmetic"===t.rotationType;e.offset[r]=i?90:0,e.factor[r]=i?-1:1,e.type[r]=1}function g(t,e,i){if(!t)return null;var o=!e.supportedTypes||!!e.supportedTypes.size,a=!e.supportedTypes||!!e.supportedTypes.color,n=!e.supportedTypes||!!e.supportedTypes.rotation,s=!!e.supportedTypes&&!!e.supportedTypes.opacity,l=t.reduce((function(t,l){if(!t)return t;if(l.valueExpression)return v(i,"Could not convert visual variables: arcade expressions not supported"),null;switch(l.type){case"size":return o?function(t,e,r,i){if(t.normalizationField||t.valueRepresentation)return v(i,"Could not convert size info: unsupported property"),null;if(null!=(o=t.field)&&!h(o))return v(i,"Could not convert size info: field is not a string"),null;var o,a;if(e.size){if(t.field)if(e.size.field){if(t.field!==e.size.field)return v(i,"Could not convert size info: multiple fields in use"),null}else e.size.field=t.field}else e.size={field:t.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};switch(t.axis){case"width":return(a=y(t,e.size,0,r,i))?e:null;case"height":return(a=y(t,e.size,2,r,i))?e:null;case"depth":return(a=y(t,e.size,1,r,i))?e:null;case"width-and-depth":return(a=y(t,e.size,0,r,i))&&y(t,e.size,1,r,i),a?e:null;case null:case void 0:case"all":return(a=(a=(a=y(t,e.size,0,r,i))&&y(t,e.size,1,r,i))&&y(t,e.size,2,r,i))?e:null;default:return v(i,'Could not convert size info: unknown axis "'+t.axis+'""'),null}}(l,t,e,i):t;case"color":return a?function(t,e,r){if(t.normalizationField)return v(r,"Could not convert color info: unsupported property"),null;if(h(t.field)){if(!t.stops)return v(r,"Could not convert color info: missing stops or colors"),null;if(t.stops.length>8)return v(r,"Could not convert color info: too many color stops"),null;e.color={field:t.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(var i=t.stops,o=0;o<8;++o){var a=i[Math.min(o,i.length-1)];e.color.values[o]=a.value,S(e.color.colors,o,a.color)}}else{if(!(t.stops&&t.stops.length>=0))return v(r,"Could not convert color info: no field and no colors/stops"),null;var n=t.stops&&t.stops.length>=0&&t.stops[0].color;for(e.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},o=0;o<8;o++)e.color.values[o]=1/0,S(e.color.colors,o,n)}return e}(l,t,i):t;case"opacity":return s?function(t,e,r){if(t.normalizationField)return v(r,"Could not convert opacity info: unsupported property"),null;if(h(t.field)){if(!t.stops)return v(r,"Could not convert opacity info: missing stops or opacities"),null;if(t.stops.length>8)return v(r,"Could not convert opacity info: too many opacity stops"),null;e.opacity={field:t.field,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(var i=t.stops,o=0;o<8;++o){var a=i[Math.min(o,i.length-1)];e.opacity.values[o]=a.value,e.opacity.opacityValues[o]=a.opacity}}else{if(!(t.stops&&t.stops.length>=0))return v(r,"Could not convert opacity info: no field and no opacities/stops"),null;var n=t.stops&&t.stops.length>=0&&t.stops[0].opacity;for(e.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]},o=0;o<8;o++)e.opacity.values[o]=1/0,e.opacity.opacityValues[o]=n}return e}(l,t,i):null;case"rotation":return n?function(t,e,r){if(!h(t.field))return v(r,"Could not convert rotation info: field is not a string"),null;if(e.rotation){if(t.field)if(e.rotation.field){if(t.field!==e.rotation.field)return v(r,"Could not convert rotation info: multiple fields in use"),null}else e.rotation.field=t.field}else e.rotation={field:t.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(t.axis){case"tilt":return m(t,e.rotation,0),e;case"roll":return m(t,e.rotation,1),e;case null:case void 0:case"heading":return m(t,e.rotation,2),e;default:return v(r,'Could not convert rotation info: unknown axis "'+t.axis+'""'),null}}(l,t,i):t;default:return r.neverReached(l),null}}),{size:null,color:null,opacity:null,rotation:null});return!(t.length>0&&l)||l.size||l.color||l.opacity||l.rotation?l&&l.size&&!function(t,e,r){for(var i=0;i<3;++i){var o=e.unitInMeters;1===t.type[i]&&(o*=e.modelSize[i],t.type[i]=2),t.minSize[i]=t.minSize[i]/o,t.maxSize[i]=t.maxSize[i]/o,t.offset[i]=t.offset[i]/o,t.factor[i]=t.factor[i]/o}var a;if(0!==t.type[0])a=0;else if(0!==t.type[1])a=1;else{if(0===t.type[2])return v(r,"No size axis contains a valid size or scale"),!1;a=2}for(i=0;i<3;++i)0===t.type[i]&&(t.minSize[i]=t.minSize[a],t.maxSize[i]=t.maxSize[a],t.offset[i]=t.offset[a],t.factor[i]=t.factor[a],t.type[i]=t.type[a]);return!0}(l.size,e,i)?null:l:null}function T(t){return t&&null!=t.size}function b(t,e,r){if(!!t!=!!e)return!1;if(t&&t.field!==e.field)return!1;if(t&&"rotation"===r)for(var i=t,o=e,a=0;a<3;a++)if(i.type[a]!==o.type[a]||i.offset[a]!==o.offset[a]||i.factor[a]!==o.factor[a])return!1;return!0}function I(t,e){var r={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvOpacityEnabled:!1,vvOpacityValues:null,vvOpacityOpacities:null,vvSymbolAnchor:null,vvSymbolRotationMatrix:null},i=T(t);return t&&t.size?(r.vvSizeEnabled=!0,r.vvSizeMinSize=t.size.minSize,r.vvSizeMaxSize=t.size.maxSize,r.vvSizeOffset=t.size.offset,r.vvSizeFactor=t.size.factor):t&&i&&(r.vvSizeValue=e.transformation.scale),t&&i&&(r.vvSymbolAnchor=e.transformation.anchor,r.vvSymbolRotationMatrix=a.mat3f64.create(),n.mat4.identity(z),function(t,e,r,i){void 0===i&&(i=s.mat4f64.create());var o=t||0,a=e||0,l=r||0;0!==o&&n.mat4.rotateZ(i,i,-o/180*Math.PI),0!==a&&n.mat4.rotateX(i,i,a/180*Math.PI),0!==l&&n.mat4.rotateY(i,i,l/180*Math.PI)}(e.transformation.rotation[2],e.transformation.rotation[0],e.transformation.rotation[1],z),o.mat3.fromMat4(r.vvSymbolRotationMatrix,z)),t&&t.color&&(r.vvColorEnabled=!0,r.vvColorValues=t.color.values,r.vvColorColors=t.color.colors),t&&t.opacity&&(r.vvOpacityEnabled=!0,r.vvOpacityValues=t.opacity.values,r.vvOpacityOpacities=t.opacity.opacityValues),r}Object.defineProperty(e,"__esModule",{value:!0}),e.convertVisualVariables=g,e.initFastSymbolUpdatesState=function(t,e){if(!t)return{enabled:!1};if(p.DISABLE_FAST_UPDATES)return{enabled:!1};var r=g(t.visualVariables,e);return r?{enabled:!0,visualVariables:r,materialParameters:I(r,e),requiresShaderTransformation:T(r)}:{enabled:!1}},e.updateFastSymbolUpdatesState=function(t,e,r){if(!e||!t.enabled)return!1;var i=t.visualVariables,o=g(e.visualVariables,r);return!!o&&!!(b(i.size,o.size,"size")&&b(i.color,o.color,"color")&&b(i.rotation,o.rotation,"rotation")&&b(i.opacity,o.opacity,"opacity"))&&(t.visualVariables=o,t.materialParameters=I(o,r),t.requiresShaderTransformation=T(o),!0)},e.getMaterialParams=I,function(t){var e=s.mat4f64.create(),r=u.vec3f64.create();t.evaluateModelTransform=function(t,o,a){if(!t.vvSizeEnabled)return a;n.mat4.copy(e,a);var s=t.vvSymbolRotationMatrix;n.mat4.set(z,s[0],s[1],s[2],0,s[3],s[4],s[5],0,s[6],s[7],s[8],0,0,0,0,1),n.mat4.multiply(e,e,z);for(var l=0;l<3;++l)r[l]=i.clamp(t.vvSizeOffset[l]+o[0]*t.vvSizeFactor[l],t.vvSizeMinSize[l],t.vvSizeMaxSize[l]);return n.mat4.scale(e,e,r),n.mat4.translate(e,e,t.vvSymbolAnchor),e},t.evaluateModelTransformScale=function(t,e,r){if(!e.vvSizeEnabled)return l.vec3.set(t,1,1,1);for(var o=0;o<3;++o)t[o]=i.clamp(e.vvSizeOffset[o]+r[0]*e.vvSizeFactor[o],e.vvSizeMinSize[o],e.vvSizeMaxSize[o]);return t}}(f||(f={}));var z=s.mat4f64.create();e.evaluateModelTransform=f.evaluateModelTransform,e.evaluateModelTransformScale=f.evaluateModelTransformScale}).apply(null,i))||(t.exports=o)},"51bw":function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("xf8T")],void 0===(o=(function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.mat3f64=r}).apply(null,i))||(t.exports=o)},CIzB:function(t,e,r){var i,o;i=[r.dj.c(t.i),e],void 0===(o=(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.create=function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},e.clone=function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]},e.fromValues=function(t,e,r,i,o,a,n,s,l,u,c,p,f,d,_,h){return[t,e,r,i,o,a,n,s,l,u,c,p,f,d,_,h]},e.createView=function(t,e){return new Float64Array(t,e,16)},e.IDENTITY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}).apply(null,i))||(t.exports=o)},Dk48:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("zOht"),r("Gtr7"),r("Vx27")],void 0===(o=(function(t,e,r,i,o){return new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,e.SCENEVIEW_LOCKING_LOG=!1,e.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED=!1,e.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,e.DECONFLICTOR_SHOW_VISIBLE=!1,e.DECONFLICTOR_SHOW_INVISIBLE=!1,e.DECONFLICTOR_SHOW_GRID=!1,e.LABELS_SHOW_BORDER=!1,e.OVERLAY_DRAW_DEBUG_TEXTURE=!1,e.OVERLAY_SHOW_CENTER=!1,e.TERRAIN_DEBUG_POPUP=!1,e.TESTS_DISABLE_UPDATE_THRESHOLDS=!1,e.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1,e.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1,e.DRAW_MESH_GEOMETRY_NORMALS=!1,e.FEATURE_TILE_FETCH_SHOW_TILES=!1,e.FEATURE_TILE_TREE_SHOW_TILES=!1,e.I3S_TREE_SHOW_TILES=!1,e.I3S_SHOW_MODIFICATIONS=!1,e.ENABLE_PROFILE_DEPTH_RANGE=!1,e.DISABLE_FAST_UPDATES=!1,e.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,e.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,e.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,e}return r.__extends(e,t),r.__decorate([o.property()],e.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),r.__decorate([o.property()],e.prototype,"SCENEVIEW_LOCKING_LOG",void 0),r.__decorate([o.property()],e.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED",void 0),r.__decorate([o.property()],e.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),r.__decorate([o.property()],e.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),r.__decorate([o.property()],e.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),r.__decorate([o.property()],e.prototype,"DECONFLICTOR_SHOW_GRID",void 0),r.__decorate([o.property()],e.prototype,"LABELS_SHOW_BORDER",void 0),r.__decorate([o.property()],e.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),r.__decorate([o.property()],e.prototype,"OVERLAY_SHOW_CENTER",void 0),r.__decorate([o.property()],e.prototype,"TERRAIN_DEBUG_POPUP",void 0),r.__decorate([o.property()],e.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0),r.__decorate([o.property()],e.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0),r.__decorate([o.property()],e.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0),r.__decorate([o.property()],e.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),r.__decorate([o.property()],e.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),r.__decorate([o.property()],e.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),r.__decorate([o.property()],e.prototype,"I3S_TREE_SHOW_TILES",void 0),r.__decorate([o.property()],e.prototype,"I3S_SHOW_MODIFICATIONS",void 0),r.__decorate([o.property()],e.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0),r.__decorate([o.property()],e.prototype,"DISABLE_FAST_UPDATES",void 0),r.__decorate([o.property()],e.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),r.__decorate([o.property()],e.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),r.__decorate([o.property()],e.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),r.__decorate([o.subclass("esri.views.3d.support.DebugFlags")],e)}(i))}).apply(null,i))||(t.exports=o)},I90O:function(t,e,r){var i,o;i=[r.dj.c(t.i),e],void 0===(o=(function(t,e){function r(t){return"date"===t.type||"esriFieldTypeDate"===t.type}function i(t){return t.toLowerCase().trim()}return function(){function t(t){if(this.fields=t,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],t){for(var e=[],o=0,a=t;o<a.length;o++){var n=a[o],s=n&&n.name;if(s){var l=i(s);this._fieldsMap.set(s,n),this._fieldsMap.set(l,n),e.push(l),r(n)&&(this.dateFields.push(n),this._dateFieldsSet.add(n))}}e.sort(),this.uid=e.join(",")}}return t.prototype.destroy=function(){this._fieldsMap.clear()},t.prototype.has=function(t){return null!=this.get(t)},t.prototype.get=function(t){return null!=t?this._fieldsMap.get(t)||this._fieldsMap.get(i(t)):void 0},t.prototype.isDateField=function(t){return this._dateFieldsSet.has(this.get(t))},t.prototype.normalizeFieldName=function(t){var e=this.get(t);if(e)return e.name},t}()}).apply(null,i))||(t.exports=o)},iHXi:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("zOht"),r("jBNx"),r("YaB4"),r("tI6k"),r("3w6h")],void 0===(o=(function(t,e,r,i,o,a,n){Object.defineProperty(e,"__esModule",{value:!0});var s=o.enums.WGLVVFlag;function l(t){return{value:t.value,size:i.toPt(t.size)}}function u(t){return t.map((function(t){return l(t)}))}function c(t){return"string"==typeof t||"number"==typeof t?i.toPt(t):{type:"size",expression:t.expression,stops:u(t.stops)}}e.getVisualVariableSizeValueRepresentationRatio=function(t,e){if(!t||!e)return t;switch(e){case"radius":case"distance":return 2*t;case"diameter":case"width":return t;case"area":return Math.sqrt(t)}return t},e.stopToSizeStop=l,e.normalizeSizeStops=u,e.normalizeSizeElement=c,e.getVisualVariablesFields=function(t){var e=t&&t.length>0?{}:null;return e&&t.forEach((function(t){t.field&&(e[t.type]=t.field)})),e};var p=function(t){for(var e=[],r=[],o=u(t),n=o.length,s=0;s<6;s++){var l=o[Math.min(s,n-1)];e.push(l.value),r.push(null==l.size?a.NAN_MAGIC_NUMBER:i.pt2px(l.size))}return{values:new Float32Array(e),sizes:new Float32Array(r)}};function f(t){var e={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(o.Utils.isString(t.field)){if(!t.stops)return null;if(t.stops.length>8)return null;for(var r=t.stops,i=0;i<8;++i){var a=r[Math.min(i,r.length-1)];e.values[i]=a.value,e.opacities[i]=a.opacity}}else{if(!(t.stops&&t.stops.length>=0))return null;var n=t.stops&&t.stops.length>=0&&t.stops[0].opacity;for(i=0;i<8;i++)e.values[i]=1/0,e.opacities[i]=n}return e}e.convertVisualVariables=function(t){var e=t&&t.length>0?{}:null,i=e?{}:null;if(!e)return{vvFields:e,vvRanges:i};for(var a=0,l=t;a<l.length;a++){var d=l[a],_=d.type;if(d.field&&(e[_]=d.field),"size"===_){i.size||(i.size={});var h=d;switch(o.getTypeOfSizeVisualVariable(h)){case s.SIZE_MINMAX_VALUE:i.size.minMaxValue={minDataValue:h.minDataValue,maxDataValue:h.maxDataValue,minSize:c(h.minSize),maxSize:c(h.maxSize)};break;case s.SIZE_SCALE_STOPS:i.size.scaleStops={stops:u(h.stops)};break;case s.SIZE_FIELD_STOPS:if(h.levels){var v={};for(var y in h.levels)v[y]=p(h.levels[y]);i.size.fieldStops={type:"level-dependent",levels:v}}else i.size.fieldStops=r.__assign({type:"static"},p(h.stops));break;case s.SIZE_UNIT_VALUE:i.size.unitValue={unit:h.valueUnit,valueRepresentation:h.valueRepresentation}}}else if("color"===_){var E=n.convertVisualVariables([d],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});if(!E)continue;i.color=E.color;for(var S=0;S<32;S+=4)o.color.premultiplyAlpha(i.color.colors,S,!0)}else"opacity"===_?i.opacity=f(d):"rotation"===_&&(i.rotation={type:d.rotationType})}return{vvFields:e,vvRanges:i}}}).apply(null,i))||(t.exports=o)},lvbU:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r("zOht"),r("ma1f"),r("H1tY"),r("qsST"),r("xoE+"),r("LxLY"),r("qMld"),r("I90O"),r("sCbS"),r("YaB4"),r("WEAo"),r("tI6k"),r("iHXi"),r("2Kdy")],void 0===(o=(function(t,e,i,o,a,n,s,l,u,c,p,f,d,_,h){Object.defineProperty(e,"__esModule",{value:!0});var v=n.getLogger("esri.views.layers.2d.features.support.AttributeStore"),y=f.debug.createDebugLogger(f.debug.DEBUG_ATTR_UPDATES,v);e.LOCAL_ID_TYPE_AGGREGATE=1;var E=function(t){return(2147483648&t)>>>31},S=function(t){return 2147483647&t};e.isAggregateId=function(t){return E(t)===e.LOCAL_ID_TYPE_AGGREGATE};var m=function(t,e){return function(r,i,o){var a;try{a=e(r,i,o)}catch(t){a=NaN}return(null===a||isNaN(a)||a===1/0)&&t||a}},g={sharedArrayBuffer:a("esri-shared-array-buffer"),oesTextureFloat:a("esri-webgl-texture-float"),maxTextureSize:a("esri-webgl-max-texture-size"),atomics:a("esri-atomics")},T=function(){function t(t,e,r,i){this.texelSize=4;var o=i.pixelType,a=i.layout,n=i.textureOnly;this.textureOnly=n||!1,this.pixelType=o,this._ctype=e,this.layout=a,this._resetRange(),this._shared=t,n||(this.data=this._initData(o,r,t,e))}return Object.defineProperty(t.prototype,"buffer",{get:function(){return l.andThen(this.data,(function(t){return t.buffer}))},enumerable:!0,configurable:!0}),t.prototype.getData=function(t,e){var r=S(t);return l.unwrap(this.data)[r*this.texelSize+e]},t.prototype.setData=function(t,e,r){var i=S(t);0!=(this.layout&1<<e)?(this.data[i*this.texelSize+e]=r,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)):v.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")},t.prototype.lock=function(){5121===this.pixelType?this._shared&&g.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1):a("esri-2d-debug")&&v.error("AttributeStore-Bad-Type","Tried to unlock non integer array type with float array")},t.prototype.unlock=function(){5121===this.pixelType?this._shared&&g.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0):a("esri-2d-debug")&&v.error("AttributeStore-Bad-Type","Tried to unlock non integer array type with float array")},t.prototype.expand=function(t){if(!this.textureOnly){var e=this._initData(this.pixelType,t,this._shared,this._ctype),r=l.unwrap(this.data);e.set(r),this.data=e}},t.prototype.toMessage=function(){var t=this.dirtyStart,e=this.dirtyEnd,r=this.texelSize;if(t>e)return null;this._resetRange();var i=!(this._shared||"local"===this._ctype),o=this.pixelType,a=this.layout,n=l.unwrap(this.data);return n.slice?{start:t,end:e,data:i&&n.slice(t*r,(e+1)*r)||null,pixelType:o,layout:a}:i?{start:t,end:e,data:new(f.Utils.getPixelArrayCtor(this.pixelType))(Array.prototype.slice.call(this.data,t*r,(e+1)*r)),pixelType:o,layout:a}:{start:t,end:e,data:null,pixelType:o,layout:a}},t.prototype._initData=function(t,e,r,i){for(var o=r&&"local"!==i?SharedArrayBuffer:ArrayBuffer,a=f.Utils.getPixelArrayCtor(t),n=new a(new o(e*e*4*a.BYTES_PER_ELEMENT)),s=0;s<n.length;s+=4)n[s+1]=255;return n},t.prototype._resetRange=function(){this.dirtyStart=2147483647,this.dirtyEnd=0},t}(),b=function(){function t(t){this._attributeComputeMap=new Map,this._blocks=new Array,this._idMap=new Map,this._localToObjectId=new Map,this._filters=new Array(f.definitions.MAX_FILTERS),this._freeTexelsList=[],this._abortController=u.createAbortController(),this._hasScaleExpr=!1,this._size=32,this._idCounter=1,this._idsToHighlight=new Set;var e=g.oesTextureFloat?5126:5121;y("Creating AttributeStore "+(g.sharedArrayBuffer?"with":"without")+" shared memory"),a("esri-2d-debug")&&g.sharedArrayBuffer&&!g.atomics&&v.warn("Browser supports SharedArrayBuffer but not Atomics. Rendering may be impacted"),this._client=t,this._blockDescriptors=[{pixelType:5121,layout:1},{pixelType:5121,layout:15,textureOnly:!0},{pixelType:e,layout:15},{pixelType:e,layout:15}],this._blocks=this._blockDescriptors.map((function(){return null}))}return t.prototype.destroy=function(){this._abortController.abort()},Object.defineProperty(t.prototype,"hasScaleExpr",{get:function(){return this._hasScaleExpr},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_signal",{get:function(){return this._abortController.signal},enumerable:!0,configurable:!0}),t.prototype.invalidateResources=function(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=u.createAbortController()},t.prototype.createLocalId=function(t,e){if(void 0===e&&(e=!1),!this._idMap.has(t)){var r=function(t,e){return((e?2147483648:0)|t)>>>0}(this._getFreeTexel(),e);this._idMap.set(t,-1===r?0:r),this._localToObjectId.set(r,t)}return this._idMap.get(t)},t.prototype.addLocalId=function(t){this._getBlock(0).setData(t,0,0),this._freeTexelsList.push(S(t))},t.prototype.removeLocalId=function(t){var e=this._idMap.get(t);return this._idMap.delete(t),this._localToObjectId.delete(e),e},t.prototype.freeLocalId=function(t){var e=this._idMap.get(t);a("esri-2d-debug")&&!e&&console.debug("Called freeLocalId for an invalid id"),this._getBlock(0).setData(e,0,0),this._idMap.delete(t),this._localToObjectId.delete(e),this._freeTexelsList.push(S(e))},t.prototype.getFeatureId=function(t){return this._localToObjectId.get(t)},t.prototype.getLocalId=function(t){return this._idMap.has(t)?this._idMap.get(t):null},t.prototype.setHighlight=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,r,o,a,n,s=this;return i.__generator(this,(function(i){switch(i.label){case 0:for(this._getBlock(0).lock(),this._idsToHighlight.forEach((function(t){var e=s.getLocalId(t);if(e){var r=s._getBlock(0).getData(e,0);s._getBlock(0).setData(e,0,-2&r)}})),this._idsToHighlight.clear(),e=0,r=t;e<r.length;e++)this._idsToHighlight.add(r[e]);for(o=0;o<t.length;o++)null!=(a=this.getLocalId(t[o]))&&(n=this._getBlock(0).getData(a,0),this._getBlock(0).setData(a,0,1|n));return this._getBlock(0).unlock(),[4,this.sendUpdates()];case 1:return i.sent(),[2]}}))}))},t.prototype.addHighlight=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){return[2]}))}))},t.prototype.removeHighlight=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){return[2]}))}))},t.prototype.updateFilters=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,r,o,a=this;return i.__generator(this,(function(i){switch(i.label){case 0:return e=t.service,r=t.spatialReference,o=t.config.filters.map((function(i,o){return a._updateFilter(t,i,o,e,r)})),[4,u.all(o)];case 1:return i.sent(),[2]}}))}))},t.prototype.setAttributeBindings=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(r){switch(this._hasScaleExpr=!1,t.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":return[2,this._bindVVEvaluators(t.visualVariables,e)];case"dot-density":return[2,this._bindDDEvaluators(t.attributes,e)];case"heatmap":break;default:v.error(new o("attribute-store","Found invalid renderer type: "+t))}return[2]}))}))},t.prototype.setData=function(t,e,r,i){this._getBlock(e).setData(t,r,i)},t.prototype.getData=function(t,e,r){return this._getBlock(e).getData(t,r)},t.prototype.getHighlightFlag=function(t){return this._idsToHighlight.has(t)?_.HIGHLIGHT_FLAG:0},t.prototype.setAttributeData=function(t,e,r,i){var o=this,a=t;this._getBlock(0).setData(a,0,this.getFilterFlags(e));var n=g.oesTextureFloat?1:2;this._attributeComputeMap.forEach((function(t,l){var u=l*n%4,c=Math.floor(l*n/4),p=o._getBlock(c+_.ATTRIBUTE_DATA_VV),d=t(e,{$view:i},r);if(g.oesTextureFloat)p.setData(a,u,d);else if(d===f.definitions.NAN_MAGIC_NUMBER)p.setData(a,u,255),p.setData(a,u+1,255);else{var h=s.clamp(Math.round(d),-32767,32766)+32768,v=(65280&h)>>8;p.setData(a,u,255&h),p.setData(a,u+1,v)}}))},t.prototype.sendUpdates=function(){var t=this;if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=u.createResolver(),this._nextUpdate.promise;var e={blocks:this._blocks.map((function(t){return l.isSome(t)?t.toMessage():null}))};return this._currUpdate=this._createResources().then((function(){var r=function(){if(t._currUpdate=null,t._nextUpdate){var e=t._nextUpdate;t._nextUpdate=null,t.sendUpdates().then((function(){return e.resolve()}))}},i=t._client.update(e,t._signal).then(r).catch(r);return t._client.render(),i})).catch((function(e){return u.isAbortError(e)?(t._createResourcesPromise=null,t._createResources()):(v.error(new o("mapview-attribute-store","Encountered an error during client update",e)),u.resolve())})),this._currUpdate},t.prototype._createResources=function(){var t=this;if(l.isSome(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(_.ATTRIBUTE_DATA_ANIMATION),y("Initializing AttributeStore");var e={shared:g.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:l.mapMany(this._blocks,(function(t){return{textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType}}))},r=this._client.initialize(e,this._signal).catch((function(e){u.isAbortError(e)?t._createResourcesPromise=null:v.error(new o("mapview-attribute-store","Encountered an error during client initialization",e))}));return this._createResourcesPromise=r,r.then((function(){return l.isNone(t._createResourcesPromise)?t._createResources():void 0})),r},t.prototype._getBlock=function(t){var e=this._blocks[t];if(l.isSome(e))return e;y("Initializing AttributeBlock at index "+t);var r=new T(g.sharedArrayBuffer,this._client.type,this._size,this._blockDescriptors[t]);return this._blocks[t]=r,this._createResourcesPromise=null,r},t.prototype._expand=function(){if(this._size<g.maxTextureSize){var t=this._size<<=1;return y("Expanding block size to",t,this._blocks),l.forEachSome(this._blocks,(function(e){return e.expand(t)})),this._createResourcesPromise=null,this._size=t,0}return v.error(new o("mapview-limitations","Maximum number of onscreen features exceeded.")),-1},t.prototype._getFreeTexel=function(){return this._freeTexelsList.length?this._freeTexelsList.pop():this._idCounter>=this._size*this._size&&this._expand()?-1:this._idCounter++},t.prototype._updateFilter=function(t,r,o,a,n){return i.__awaiter(this,void 0,void 0,(function(){var s,u,c,p,f,d,_,h=this;return i.__generator(this,(function(i){switch(i.label){case 0:return(l.isSome(s=this._filters[o])&&s.hash)===JSON.stringify(r)?[2]:(u=1<<o+1,l.isNone(r)?(this._filters[o]=null,this._idMap.forEach((function(t){var e=h._getBlock(0).getData(t,0);h._getBlock(0).setData(t,0,e|u)})),[2]):[4,t.queryObjectIds(r)]);case 1:return c=i.sent(),r.hiddenIds&&r.hiddenIds.length&&(c=c.filter((function(t){return-1===r.hiddenIds.indexOf(t)}))),p=c.map((function(t){return h._idMap.get(t)})),[4,this._getFilter(o,a)];case 2:for(i.sent().update(r,n),this._getBlock(0).lock(),this._idMap.forEach((function(t){if(E(t)!==e.LOCAL_ID_TYPE_AGGREGATE){var r=h._getBlock(0).getData(t,0);h._getBlock(0).setData(t,0,r&~u)}})),f=0;f<p.length;f++)null!=(d=p[f])&&(_=this._getBlock(0).getData(d,0),this._getBlock(0).setData(d,0,_|u));return this._getBlock(0).unlock(),[2]}}))}))},t.prototype._getFilter=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var o,a,n;return i.__generator(this,(function(i){switch(i.label){case 0:return l.isSome(o=this._filters[t])?[2,o]:[4,new Promise((function(t,e){Promise.all([r.e(6),r.e(9),r.e(58)]).then((function(){var e=[r("Z0JH")];t.apply(null,e)}).bind(this)).catch(e.bind(this))}))];case 1:return a=i.sent().default,n=new a({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new c(e.fields)}),this._filters[t]=n,[2,n]}}))}))},t.prototype.isVisible=function(t){return!!(2&this._getBlock(0).getData(t.localId,0))},t.prototype.getFilterFlags=function(t){for(var r=0,i=E(t.localId)===e.LOCAL_ID_TYPE_AGGREGATE?254:255,o=0;o<this._filters.length;o++){var a=this._filters[o];r|=(i&1<<o&&!l.isNone(a)&&!a.check(t)?0:1)<<o}var n=this.getFeatureId(t.localId);return r<<1|this.getHighlightFlag(n)},t.prototype._bindVVEvaluators=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var r=this;return i.__generator(this,(function(o){switch(o.label){case 0:return this._attributeComputeMap.clear(),l.isSome(t)?[4,u.all(t.map((function(t){return i.__awaiter(r,void 0,void 0,(function(){var r,o;return i.__generator(this,(function(i){switch(i.label){case 0:return r=f.Utils.getVVType(t.type),[4,this._createGetValueFunction(t,e)];case 1:return o=i.sent(),l.isSome(o)&&this._attributeComputeMap.set(r,o),[2]}}))}))})))]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2]}}))}))},t.prototype._bindDDEvaluators=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var r,o,a,n=this;return i.__generator(this,(function(i){switch(i.label){case 0:return this._attributeComputeMap.clear(),t.length>f.definitions.DOT_DENSITY_MAX_FIELDS&&v.warn("mapview-invalid-value","DotDensityRenderer supports a maximum of "+f.definitions.DOT_DENSITY_MAX_FIELDS+" attribtues, but found "+t.length),[4,u.all(t.map((function(t){return n._createNormalizedFunction(t,e)})))];case 1:for(r=i.sent().map((function(t){return m(0,t)})),o=0;o<f.definitions.DOT_DENSITY_MAX_FIELDS;o++)(a=o<t.length&&r[o])?this._attributeComputeMap.set(o,a):this._attributeComputeMap.has(o)&&this._attributeComputeMap.delete(o);return[2]}}))}))},t.prototype._createGetValueFunction=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var r,o,a,n,s;return i.__generator(this,(function(i){switch(i.label){case 0:return"size"!==t.type?[3,2]:(r=f.getTypeOfSizeVisualVariable(t))===f.enums.WGLVVFlag.SIZE_SCALE_STOPS?[2,null]:(o=m,a=[f.definitions.NAN_MAGIC_NUMBER],[4,this._createNormalizedFunction(t,e,r===f.enums.WGLVVFlag.SIZE_UNIT_VALUE&&function(e){return h.getVisualVariableSizeValueRepresentationRatio(e,t.valueRepresentation)})]);case 1:return[2,o.apply(void 0,a.concat([i.sent()]))];case 2:return n=m,s=[f.definitions.NAN_MAGIC_NUMBER],[4,this._createNormalizedFunction(t,e)];case 3:return[2,n.apply(void 0,s.concat([i.sent()]))]}}))}))},t.prototype._createNormalizedFunction=function(t,e,r){return i.__awaiter(this,void 0,void 0,(function(){var a,n,s;return i.__generator(this,(function(i){switch(i.label){case 0:return(a=t.field)?"string"==typeof a?(n=t.normalizationField)?[2,function(t){if(t.attributes[a]&&t.attributes[n]){var e=t.attributes[a]/t.attributes[n];return r?r(e):e}}]:[2,r?function(t){return r(t.attributes[a])}:function(t){return t.attributes[a]}]:(v.error(new o("mapview-rendering:invalid-type","The field for a vv must be a string or a number, but got "+typeof a)),[2,function(){}]):t.valueExpression?(this._hasScaleExpr=this._hasScaleExpr||-1!==t.valueExpression.indexOf("scale"),[4,p.createVVExpression(t.valueExpression,e.spatialReference,e.fields)]):[3,2];case 1:return s=i.sent(),[2,d.callWithOptimizedFeature.bind(null,s)];case 2:return v.error("Unable to create a normalized function for visual variable: "+t),[2,function(){}]}}))}))},t}();e.default=b}).apply(null,i))||(t.exports=o)}}]);