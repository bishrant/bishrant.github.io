(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/libs/gl-matrix-2/mat4f64":"1m5D","esri/views/3d/layers/support/FastSymbolUpdates":"3w6h","esri/core/libs/gl-matrix-2/mat3f64":"51bw","esri/core/libs/gl-matrix-2/factories/mat4f64":"CIzB","esri/views/3d/support/debugFlags":"Dk48","arcgis-js-api/layers/support/FieldsIndex":"I90O","esri/layers/support/FieldsIndex":"I90O","esri/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":"iHXi","esri/views/2d/layers/features/support/AttributeStore":"lvbU"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1m5D":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("CIzB")],void 0===(o=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.mat4f64=r}).apply(null,i))||(e.exports=o)},"3w6h":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("pcDC"),r("xoE+"),r("YX1r"),r("51bw"),r("FXVB"),r("1m5D"),r("0LE5"),r("Rdxj"),r("4oaH"),r("Dk48")],void 0===(o=(function(e,t,r,i,o,n,a,s,l,u,c,p){var f;function d(e){return null!=e}function _(e){return"number"==typeof e}function h(e){return"string"==typeof e}function v(e,t){e&&e.push(t)}function y(e,t,r,i,o){var n=e.minSize,a=e.maxSize;if(e.expression)return v(o,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){var s=i.symbolSize[r];return t.minSize[r]=s,t.maxSize[r]=s,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=1,!0}if(d(e.field))return d(e.stops)?2===e.stops.length&&_(e.stops[0].size)&&_(e.stops[1].size)?(E(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,r),t.type[r]=1,!0):(v(o,"Could not convert size info: stops only supported with 2 elements"),!1):_(n)&&_(a)&&d(e.minDataValue)&&d(e.maxDataValue)?(E(n,a,e.minDataValue,e.maxDataValue,t,r),t.type[r]=1,!0):null!=c.meterIn[e.valueUnit]?(t.minSize[r]=-1/0,t.maxSize[r]=1/0,t.offset[r]=0,t.factor[r]=1/c.meterIn[e.valueUnit],t.type[r]=1,!0):"unknown"===e.valueUnit?(v(o,"Could not convert size info: proportional size not supported"),!1):(v(o,"Could not convert size info: scale-dependent size not supported"),!1);if(!d(e.field)){if(e.stops&&e.stops[0]&&_(e.stops[0].size))return t.minSize[r]=e.stops[0].size,t.maxSize[r]=e.stops[0].size,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=1,!0;if(_(n))return t.minSize[r]=n,t.maxSize[r]=n,t.offset[r]=n,t.factor[r]=0,t.type[r]=1,!0}return v(o,"Could not convert size info: unsupported variant of sizeInfo"),!1}function E(e,t,r,i,o,n){var a=Math.abs(i-r)>0?(t-e)/(i-r):0;o.minSize[n]=a>0?e:t,o.maxSize[n]=a>0?t:e,o.offset[n]=e-r*a,o.factor[n]=a}function S(e,t,r){e[4*t+0]=r.r/255,e[4*t+1]=r.g/255,e[4*t+2]=r.b/255,e[4*t+3]=r.a}function m(e,t,r){var i=2===r&&"arithmetic"===e.rotationType;t.offset[r]=i?90:0,t.factor[r]=i?-1:1,t.type[r]=1}function T(e,t,i){if(!e)return null;var o=!t.supportedTypes||!!t.supportedTypes.size,n=!t.supportedTypes||!!t.supportedTypes.color,a=!t.supportedTypes||!!t.supportedTypes.rotation,s=!!t.supportedTypes&&!!t.supportedTypes.opacity,l=e.reduce((function(e,l){if(!e)return e;if(l.valueExpression)return v(i,"Could not convert visual variables: arcade expressions not supported"),null;switch(l.type){case"size":return o?function(e,t,r,i){if(e.normalizationField||e.valueRepresentation)return v(i,"Could not convert size info: unsupported property"),null;if(null!=(o=e.field)&&!h(o))return v(i,"Could not convert size info: field is not a string"),null;var o,n;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return v(i,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size={field:e.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};switch(e.axis){case"width":return(n=y(e,t.size,0,r,i))?t:null;case"height":return(n=y(e,t.size,2,r,i))?t:null;case"depth":return(n=y(e,t.size,1,r,i))?t:null;case"width-and-depth":return(n=y(e,t.size,0,r,i))&&y(e,t.size,1,r,i),n?t:null;case null:case void 0:case"all":return(n=(n=(n=y(e,t.size,0,r,i))&&y(e,t.size,1,r,i))&&y(e,t.size,2,r,i))?t:null;default:return v(i,'Could not convert size info: unknown axis "'+e.axis+'""'),null}}(l,e,t,i):e;case"color":return n?function(e,t,r){if(e.normalizationField)return v(r,"Could not convert color info: unsupported property"),null;if(h(e.field)){if(!e.stops)return v(r,"Could not convert color info: missing stops or colors"),null;if(e.stops.length>8)return v(r,"Could not convert color info: too many color stops"),null;t.color={field:e.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(var i=e.stops,o=0;o<8;++o){var n=i[Math.min(o,i.length-1)];t.color.values[o]=n.value,S(t.color.colors,o,n.color)}}else{if(!(e.stops&&e.stops.length>=0))return v(r,"Could not convert color info: no field and no colors/stops"),null;var a=e.stops&&e.stops.length>=0&&e.stops[0].color;for(t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},o=0;o<8;o++)t.color.values[o]=1/0,S(t.color.colors,o,a)}return t}(l,e,i):e;case"opacity":return s?function(e,t,r){if(e.normalizationField)return v(r,"Could not convert opacity info: unsupported property"),null;if(h(e.field)){if(!e.stops)return v(r,"Could not convert opacity info: missing stops or opacities"),null;if(e.stops.length>8)return v(r,"Could not convert opacity info: too many opacity stops"),null;t.opacity={field:e.field,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(var i=e.stops,o=0;o<8;++o){var n=i[Math.min(o,i.length-1)];t.opacity.values[o]=n.value,t.opacity.opacityValues[o]=n.opacity}}else{if(!(e.stops&&e.stops.length>=0))return v(r,"Could not convert opacity info: no field and no opacities/stops"),null;var a=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]},o=0;o<8;o++)t.opacity.values[o]=1/0,t.opacity.opacityValues[o]=a}return t}(l,e,i):null;case"rotation":return a?function(e,t,r){if(!h(e.field))return v(r,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return v(r,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return m(e,t.rotation,0),t;case"roll":return m(e,t.rotation,1),t;case null:case void 0:case"heading":return m(e,t.rotation,2),t;default:return v(r,'Could not convert rotation info: unknown axis "'+e.axis+'""'),null}}(l,e,i):e;default:return r.neverReached(l),null}}),{size:null,color:null,opacity:null,rotation:null});return!(e.length>0&&l)||l.size||l.color||l.opacity||l.rotation?l&&l.size&&!function(e,t,r){for(var i=0;i<3;++i){var o=t.unitInMeters;1===e.type[i]&&(o*=t.modelSize[i],e.type[i]=2),e.minSize[i]=e.minSize[i]/o,e.maxSize[i]=e.maxSize[i]/o,e.offset[i]=e.offset[i]/o,e.factor[i]=e.factor[i]/o}var n;if(0!==e.type[0])n=0;else if(0!==e.type[1])n=1;else{if(0===e.type[2])return v(r,"No size axis contains a valid size or scale"),!1;n=2}for(i=0;i<3;++i)0===e.type[i]&&(e.minSize[i]=e.minSize[n],e.maxSize[i]=e.maxSize[n],e.offset[i]=e.offset[n],e.factor[i]=e.factor[n],e.type[i]=e.type[n]);return!0}(l.size,t,i)?null:l:null}function g(e){return e&&null!=e.size}function I(e,t,r){if(!!e!=!!t)return!1;if(e&&e.field!==t.field)return!1;if(e&&"rotation"===r)for(var i=e,o=t,n=0;n<3;n++)if(i.type[n]!==o.type[n]||i.offset[n]!==o.offset[n]||i.factor[n]!==o.factor[n])return!1;return!0}function b(e,t){var r={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvOpacityEnabled:!1,vvOpacityValues:null,vvOpacityOpacities:null,vvSymbolAnchor:null,vvSymbolRotationMatrix:null},i=g(e);return e&&e.size?(r.vvSizeEnabled=!0,r.vvSizeMinSize=e.size.minSize,r.vvSizeMaxSize=e.size.maxSize,r.vvSizeOffset=e.size.offset,r.vvSizeFactor=e.size.factor):e&&i&&(r.vvSizeValue=t.transformation.scale),e&&i&&(r.vvSymbolAnchor=t.transformation.anchor,r.vvSymbolRotationMatrix=n.mat3f64.create(),a.mat4.identity(z),function(e,t,r,i){void 0===i&&(i=s.mat4f64.create());var o=e||0,n=t||0,l=r||0;0!==o&&a.mat4.rotateZ(i,i,-o/180*Math.PI),0!==n&&a.mat4.rotateX(i,i,n/180*Math.PI),0!==l&&a.mat4.rotateY(i,i,l/180*Math.PI)}(t.transformation.rotation[2],t.transformation.rotation[0],t.transformation.rotation[1],z),o.mat3.fromMat4(r.vvSymbolRotationMatrix,z)),e&&e.color&&(r.vvColorEnabled=!0,r.vvColorValues=e.color.values,r.vvColorColors=e.color.colors),e&&e.opacity&&(r.vvOpacityEnabled=!0,r.vvOpacityValues=e.opacity.values,r.vvOpacityOpacities=e.opacity.opacityValues),r}Object.defineProperty(t,"__esModule",{value:!0}),t.convertVisualVariables=T,t.initFastSymbolUpdatesState=function(e,t){if(!e)return{enabled:!1};if(p.DISABLE_FAST_UPDATES)return{enabled:!1};var r=T(e.visualVariables,t);return r?{enabled:!0,visualVariables:r,materialParameters:b(r,t),requiresShaderTransformation:g(r)}:{enabled:!1}},t.updateFastSymbolUpdatesState=function(e,t,r){if(!t||!e.enabled)return!1;var i=e.visualVariables,o=T(t.visualVariables,r);return!!o&&!!(I(i.size,o.size,"size")&&I(i.color,o.color,"color")&&I(i.rotation,o.rotation,"rotation")&&I(i.opacity,o.opacity,"opacity"))&&(e.visualVariables=o,e.materialParameters=b(o,r),e.requiresShaderTransformation=g(o),!0)},t.getMaterialParams=b,function(e){var t=s.mat4f64.create(),r=u.vec3f64.create();e.evaluateModelTransform=function(e,o,n){if(!e.vvSizeEnabled)return n;a.mat4.copy(t,n);var s=e.vvSymbolRotationMatrix;a.mat4.set(z,s[0],s[1],s[2],0,s[3],s[4],s[5],0,s[6],s[7],s[8],0,0,0,0,1),a.mat4.multiply(t,t,z);for(var l=0;l<3;++l)r[l]=i.clamp(e.vvSizeOffset[l]+o[0]*e.vvSizeFactor[l],e.vvSizeMinSize[l],e.vvSizeMaxSize[l]);return a.mat4.scale(t,t,r),a.mat4.translate(t,t,e.vvSymbolAnchor),t},e.evaluateModelTransformScale=function(e,t,r){if(!t.vvSizeEnabled)return l.vec3.set(e,1,1,1);for(var o=0;o<3;++o)e[o]=i.clamp(t.vvSizeOffset[o]+r[0]*t.vvSizeFactor[o],t.vvSizeMinSize[o],t.vvSizeMaxSize[o]);return e}}(f||(f={}));var z=s.mat4f64.create();t.evaluateModelTransform=f.evaluateModelTransform,t.evaluateModelTransformScale=f.evaluateModelTransformScale}).apply(null,i))||(e.exports=o)},"51bw":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("xf8T")],void 0===(o=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.mat3f64=r}).apply(null,i))||(e.exports=o)},CIzB:function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},t.clone=function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]},t.fromValues=function(e,t,r,i,o,n,a,s,l,u,c,p,f,d,_,h){return[e,t,r,i,o,n,a,s,l,u,c,p,f,d,_,h]},t.createView=function(e,t){return new Float64Array(e,t,16)},t.IDENTITY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}).apply(null,i))||(e.exports=o)},Dk48:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("Vx27")],void 0===(o=(function(e,t,r,i,o){return new(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,t.SCENEVIEW_LOCKING_LOG=!1,t.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED=!1,t.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,t.DECONFLICTOR_SHOW_VISIBLE=!1,t.DECONFLICTOR_SHOW_INVISIBLE=!1,t.DECONFLICTOR_SHOW_GRID=!1,t.LABELS_SHOW_BORDER=!1,t.OVERLAY_DRAW_DEBUG_TEXTURE=!1,t.OVERLAY_SHOW_CENTER=!1,t.TERRAIN_DEBUG_POPUP=!1,t.TESTS_DISABLE_UPDATE_THRESHOLDS=!1,t.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1,t.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1,t.DRAW_MESH_GEOMETRY_NORMALS=!1,t.FEATURE_TILE_FETCH_SHOW_TILES=!1,t.FEATURE_TILE_TREE_SHOW_TILES=!1,t.I3S_TREE_SHOW_TILES=!1,t.I3S_SHOW_MODIFICATIONS=!1,t.ENABLE_PROFILE_DEPTH_RANGE=!1,t.DISABLE_FAST_UPDATES=!1,t.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,t.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,t.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,t}return r.__extends(t,e),r.__decorate([o.property()],t.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),r.__decorate([o.property()],t.prototype,"SCENEVIEW_LOCKING_LOG",void 0),r.__decorate([o.property()],t.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED",void 0),r.__decorate([o.property()],t.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),r.__decorate([o.property()],t.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),r.__decorate([o.property()],t.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),r.__decorate([o.property()],t.prototype,"DECONFLICTOR_SHOW_GRID",void 0),r.__decorate([o.property()],t.prototype,"LABELS_SHOW_BORDER",void 0),r.__decorate([o.property()],t.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),r.__decorate([o.property()],t.prototype,"OVERLAY_SHOW_CENTER",void 0),r.__decorate([o.property()],t.prototype,"TERRAIN_DEBUG_POPUP",void 0),r.__decorate([o.property()],t.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0),r.__decorate([o.property()],t.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0),r.__decorate([o.property()],t.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0),r.__decorate([o.property()],t.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),r.__decorate([o.property()],t.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),r.__decorate([o.property()],t.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),r.__decorate([o.property()],t.prototype,"I3S_TREE_SHOW_TILES",void 0),r.__decorate([o.property()],t.prototype,"I3S_SHOW_MODIFICATIONS",void 0),r.__decorate([o.property()],t.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0),r.__decorate([o.property()],t.prototype,"DISABLE_FAST_UPDATES",void 0),r.__decorate([o.property()],t.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),r.__decorate([o.property()],t.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),r.__decorate([o.property()],t.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),r.__decorate([o.subclass("esri.views.3d.support.DebugFlags")],t)}(i))}).apply(null,i))||(e.exports=o)},I90O:function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=(function(e,t){function r(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function i(e){return e.toLowerCase().trim()}return function(){function e(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],e){for(var t=[],o=0,n=e;o<n.length;o++){var a=n[o],s=a&&a.name;if(s){var l=i(s);this._fieldsMap.set(s,a),this._fieldsMap.set(l,a),t.push(l),r(a)&&(this.dateFields.push(a),this._dateFieldsSet.add(a))}}t.sort(),this.uid=t.join(",")}}return e.prototype.destroy=function(){this._fieldsMap.clear()},e.prototype.has=function(e){return null!=this.get(e)},e.prototype.get=function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(i(e)):void 0},e.prototype.isDateField=function(e){return this._dateFieldsSet.has(this.get(e))},e.prototype.normalizeFieldName=function(e){var t=this.get(e);if(t)return t.name},e}()}).apply(null,i))||(e.exports=o)},iHXi:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("jBNx"),r("YaB4"),r("tI6k"),r("3w6h")],void 0===(o=(function(e,t,r,i,o,n,a){Object.defineProperty(t,"__esModule",{value:!0});var s=o.enums.WGLVVFlag;function l(e){return{value:e.value,size:i.toPt(e.size)}}function u(e){return e.map((function(e){return l(e)}))}function c(e){return"string"==typeof e||"number"==typeof e?i.toPt(e):{type:"size",expression:e.expression,stops:u(e.stops)}}t.getVisualVariableSizeValueRepresentationRatio=function(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e},t.stopToSizeStop=l,t.normalizeSizeStops=u,t.normalizeSizeElement=c,t.getVisualVariablesFields=function(e){var t=e&&e.length>0?{}:null;return t&&e.forEach((function(e){e.field&&(t[e.type]=e.field)})),t};var p=function(e){for(var t=[],r=[],o=u(e),a=o.length,s=0;s<6;s++){var l=o[Math.min(s,a-1)];t.push(l.value),r.push(null==l.size?n.NAN_MAGIC_NUMBER:i.pt2px(l.size))}return{values:new Float32Array(t),sizes:new Float32Array(r)}};function f(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(o.Utils.isString(e.field)){if(!e.stops)return null;if(e.stops.length>8)return null;for(var r=e.stops,i=0;i<8;++i){var n=r[Math.min(i,r.length-1)];t.values[i]=n.value,t.opacities[i]=n.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;var a=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(i=0;i<8;i++)t.values[i]=1/0,t.opacities[i]=a}return t}t.convertVisualVariables=function(e){var t=e&&e.length>0?{}:null,i=t?{}:null;if(!t)return{vvFields:t,vvRanges:i};for(var n=0,l=e;n<l.length;n++){var d=l[n],_=d.type;if(d.field&&(t[_]=d.field),"size"===_){i.size||(i.size={});var h=d;switch(o.getTypeOfSizeVisualVariable(h)){case s.SIZE_MINMAX_VALUE:i.size.minMaxValue={minDataValue:h.minDataValue,maxDataValue:h.maxDataValue,minSize:c(h.minSize),maxSize:c(h.maxSize)};break;case s.SIZE_SCALE_STOPS:i.size.scaleStops={stops:u(h.stops)};break;case s.SIZE_FIELD_STOPS:if(h.levels){var v={};for(var y in h.levels)v[y]=p(h.levels[y]);i.size.fieldStops={type:"level-dependent",levels:v}}else i.size.fieldStops=r.__assign({type:"static"},p(h.stops));break;case s.SIZE_UNIT_VALUE:i.size.unitValue={unit:h.valueUnit,valueRepresentation:h.valueRepresentation}}}else if("color"===_){var E=a.convertVisualVariables([d],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});if(!E)continue;i.color=E.color;for(var S=0;S<32;S+=4)o.color.premultiplyAlpha(i.color.colors,S,!0)}else"opacity"===_?i.opacity=f(d):"rotation"===_&&(i.rotation={type:d.rotationType})}return{vvFields:t,vvRanges:i}}}).apply(null,i))||(e.exports=o)},lvbU:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("H1tY"),r("qsST"),r("xoE+"),r("LxLY"),r("qMld"),r("I90O"),r("sCbS"),r("YaB4"),r("WEAo"),r("tI6k"),r("iHXi"),r("2Kdy")],void 0===(o=(function(e,t,i,o,n,a,s,l,u,c,p,f,d,_,h){Object.defineProperty(t,"__esModule",{value:!0});var v=a.getLogger("esri.views.layers.2d.features.support.AttributeStore"),y=f.debug.createDebugLogger(f.debug.DEBUG_ATTR_UPDATES,v);t.LOCAL_ID_TYPE_AGGREGATE=1;var E=function(e){return(2147483648&e)>>>31},S=function(e){return 2147483647&e};t.isAggregateId=function(e){return E(e)===t.LOCAL_ID_TYPE_AGGREGATE};var m=function(e,t){return function(r,i,o){var n;try{n=t(r,i,o)}catch(e){n=NaN}return(null===n||isNaN(n)||n===1/0)&&e||n}},T={sharedArrayBuffer:n("esri-shared-array-buffer"),oesTextureFloat:n("esri-webgl-texture-float"),maxTextureSize:n("esri-webgl-max-texture-size"),atomics:n("esri-atomics")},g=function(){function e(e,t,r,i){this.texelSize=4;var o=i.pixelType,n=i.layout,a=i.textureOnly;this.textureOnly=a||!1,this.pixelType=o,this._ctype=t,this.layout=n,this._resetRange(),this._shared=e,a||(this.data=this._initData(o,r,e,t))}return Object.defineProperty(e.prototype,"buffer",{get:function(){return l.andThen(this.data,(function(e){return e.buffer}))},enumerable:!0,configurable:!0}),e.prototype.getData=function(e,t){var r=S(e);return l.unwrap(this.data)[r*this.texelSize+t]},e.prototype.setData=function(e,t,r){var i=S(e);0!=(this.layout&1<<t)?(this.data[i*this.texelSize+t]=r,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)):v.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")},e.prototype.lock=function(){5121===this.pixelType?this._shared&&T.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1):n("esri-2d-debug")&&v.error("AttributeStore-Bad-Type","Tried to unlock non integer array type with float array")},e.prototype.unlock=function(){5121===this.pixelType?this._shared&&T.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0):n("esri-2d-debug")&&v.error("AttributeStore-Bad-Type","Tried to unlock non integer array type with float array")},e.prototype.expand=function(e){if(!this.textureOnly){var t=this._initData(this.pixelType,e,this._shared,this._ctype),r=l.unwrap(this.data);t.set(r),this.data=t}},e.prototype.toMessage=function(){var e=this.dirtyStart,t=this.dirtyEnd,r=this.texelSize;if(e>t)return null;this._resetRange();var i=!(this._shared||"local"===this._ctype),o=this.pixelType,n=this.layout,a=l.unwrap(this.data);return a.slice?{start:e,end:t,data:i&&a.slice(e*r,(t+1)*r)||null,pixelType:o,layout:n}:i?{start:e,end:t,data:new(f.Utils.getPixelArrayCtor(this.pixelType))(Array.prototype.slice.call(this.data,e*r,(t+1)*r)),pixelType:o,layout:n}:{start:e,end:t,data:null,pixelType:o,layout:n}},e.prototype._initData=function(e,t,r,i){for(var o=r&&"local"!==i?SharedArrayBuffer:ArrayBuffer,n=f.Utils.getPixelArrayCtor(e),a=new n(new o(t*t*4*n.BYTES_PER_ELEMENT)),s=0;s<a.length;s+=4)a[s+1]=255;return a},e.prototype._resetRange=function(){this.dirtyStart=2147483647,this.dirtyEnd=0},e}(),I=function(){function e(e){this._attributeComputeMap=new Map,this._blocks=new Array,this._idMap=new Map,this._localToObjectId=new Map,this._filters=new Array(f.definitions.MAX_FILTERS),this._freeTexelsList=[],this._abortController=u.createAbortController(),this._hasScaleExpr=!1,this._size=32,this._idCounter=1,this._idsToHighlight=new Set;var t=T.oesTextureFloat?5126:5121;y("Creating AttributeStore "+(T.sharedArrayBuffer?"with":"without")+" shared memory"),n("esri-2d-debug")&&T.sharedArrayBuffer&&!T.atomics&&v.warn("Browser supports SharedArrayBuffer but not Atomics. Rendering may be impacted"),this._client=e,this._blockDescriptors=[{pixelType:5121,layout:1},{pixelType:5121,layout:15,textureOnly:!0},{pixelType:t,layout:15},{pixelType:t,layout:15}],this._blocks=this._blockDescriptors.map((function(){return null}))}return e.prototype.destroy=function(){this._abortController.abort()},Object.defineProperty(e.prototype,"hasScaleExpr",{get:function(){return this._hasScaleExpr},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_signal",{get:function(){return this._abortController.signal},enumerable:!0,configurable:!0}),e.prototype.invalidateResources=function(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=u.createAbortController()},e.prototype.createLocalId=function(e,t){if(void 0===t&&(t=!1),!this._idMap.has(e)){var r=function(e,t){return((t?2147483648:0)|e)>>>0}(this._getFreeTexel(),t);this._idMap.set(e,-1===r?0:r),this._localToObjectId.set(r,e)}return this._idMap.get(e)},e.prototype.addLocalId=function(e){this._getBlock(0).setData(e,0,0),this._freeTexelsList.push(S(e))},e.prototype.removeLocalId=function(e){var t=this._idMap.get(e);return this._idMap.delete(e),this._localToObjectId.delete(t),t},e.prototype.freeLocalId=function(e){var t=this._idMap.get(e);n("esri-2d-debug")&&!t&&console.debug("Called freeLocalId for an invalid id"),this._getBlock(0).setData(t,0,0),this._idMap.delete(e),this._localToObjectId.delete(t),this._freeTexelsList.push(S(t))},e.prototype.getFeatureId=function(e){return this._localToObjectId.get(e)},e.prototype.getLocalId=function(e){return this._idMap.has(e)?this._idMap.get(e):null},e.prototype.setHighlight=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,r,o,n,a,s=this;return i.__generator(this,(function(i){switch(i.label){case 0:for(this._getBlock(0).lock(),this._idsToHighlight.forEach((function(e){var t=s.getLocalId(e);if(t){var r=s._getBlock(0).getData(t,0);s._getBlock(0).setData(t,0,-2&r)}})),this._idsToHighlight.clear(),t=0,r=e;t<r.length;t++)this._idsToHighlight.add(r[t]);for(o=0;o<e.length;o++)null!=(n=this.getLocalId(e[o]))&&(a=this._getBlock(0).getData(n,0),this._getBlock(0).setData(n,0,1|a));return this._getBlock(0).unlock(),[4,this.sendUpdates()];case 1:return i.sent(),[2]}}))}))},e.prototype.addHighlight=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return[2]}))}))},e.prototype.removeHighlight=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return[2]}))}))},e.prototype.updateFilters=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,r,o,n=this;return i.__generator(this,(function(i){switch(i.label){case 0:return t=e.service,r=e.spatialReference,o=e.config.filters.map((function(i,o){return n._updateFilter(e,i,o,t,r)})),[4,u.all(o)];case 1:return i.sent(),[2]}}))}))},e.prototype.setAttributeBindings=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(r){switch(this._hasScaleExpr=!1,e.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":return[2,this._bindVVEvaluators(e.visualVariables,t)];case"dot-density":return[2,this._bindDDEvaluators(e.attributes,t)];case"heatmap":break;default:v.error(new o("attribute-store","Found invalid renderer type: "+e))}return[2]}))}))},e.prototype.setData=function(e,t,r,i){this._getBlock(t).setData(e,r,i)},e.prototype.getData=function(e,t,r){return this._getBlock(t).getData(e,r)},e.prototype.getHighlightFlag=function(e){return this._idsToHighlight.has(e)?_.HIGHLIGHT_FLAG:0},e.prototype.setAttributeData=function(e,t,r,i){var o=this,n=e;this._getBlock(0).setData(n,0,this.getFilterFlags(t));var a=T.oesTextureFloat?1:2;this._attributeComputeMap.forEach((function(e,l){var u=l*a%4,c=Math.floor(l*a/4),p=o._getBlock(c+_.ATTRIBUTE_DATA_VV),d=e(t,{$view:i},r);if(T.oesTextureFloat)p.setData(n,u,d);else if(d===f.definitions.NAN_MAGIC_NUMBER)p.setData(n,u,255),p.setData(n,u+1,255);else{var h=s.clamp(Math.round(d),-32767,32766)+32768,v=(65280&h)>>8;p.setData(n,u,255&h),p.setData(n,u+1,v)}}))},e.prototype.sendUpdates=function(){var e=this;if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=u.createResolver(),this._nextUpdate.promise;var t={blocks:this._blocks.map((function(e){return l.isSome(e)?e.toMessage():null}))};return this._currUpdate=this._createResources().then((function(){var r=function(){if(e._currUpdate=null,e._nextUpdate){var t=e._nextUpdate;e._nextUpdate=null,e.sendUpdates().then((function(){return t.resolve()}))}},i=e._client.update(t,e._signal).then(r).catch(r);return e._client.render(),i})).catch((function(t){return u.isAbortError(t)?(e._createResourcesPromise=null,e._createResources()):(v.error(new o("mapview-attribute-store","Encountered an error during client update",t)),u.resolve())})),this._currUpdate},e.prototype._createResources=function(){var e=this;if(l.isSome(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(_.ATTRIBUTE_DATA_ANIMATION),y("Initializing AttributeStore");var t={shared:T.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:l.mapMany(this._blocks,(function(e){return{textureOnly:e.textureOnly,buffer:e.buffer,pixelType:e.pixelType}}))},r=this._client.initialize(t,this._signal).catch((function(t){u.isAbortError(t)?e._createResourcesPromise=null:v.error(new o("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=r,r.then((function(){return l.isNone(e._createResourcesPromise)?e._createResources():void 0})),r},e.prototype._getBlock=function(e){var t=this._blocks[e];if(l.isSome(t))return t;y("Initializing AttributeBlock at index "+e);var r=new g(T.sharedArrayBuffer,this._client.type,this._size,this._blockDescriptors[e]);return this._blocks[e]=r,this._createResourcesPromise=null,r},e.prototype._expand=function(){if(this._size<T.maxTextureSize){var e=this._size<<=1;return y("Expanding block size to",e,this._blocks),l.forEachSome(this._blocks,(function(t){return t.expand(e)})),this._createResourcesPromise=null,this._size=e,0}return v.error(new o("mapview-limitations","Maximum number of onscreen features exceeded.")),-1},e.prototype._getFreeTexel=function(){return this._freeTexelsList.length?this._freeTexelsList.pop():this._idCounter>=this._size*this._size&&this._expand()?-1:this._idCounter++},e.prototype._updateFilter=function(e,r,o,n,a){return i.__awaiter(this,void 0,void 0,(function(){var s,u,c,p,f,d,_,h=this;return i.__generator(this,(function(i){switch(i.label){case 0:return(l.isSome(s=this._filters[o])&&s.hash)===JSON.stringify(r)?[2]:(u=1<<o+1,l.isNone(r)?(this._filters[o]=null,this._idMap.forEach((function(e){var t=h._getBlock(0).getData(e,0);h._getBlock(0).setData(e,0,t|u)})),[2]):[4,e.queryObjectIds(r)]);case 1:return c=i.sent(),r.hiddenIds&&r.hiddenIds.length&&(c=c.filter((function(e){return-1===r.hiddenIds.indexOf(e)}))),p=c.map((function(e){return h._idMap.get(e)})),[4,this._getFilter(o,n)];case 2:for(i.sent().update(r,a),this._getBlock(0).lock(),this._idMap.forEach((function(e){if(E(e)!==t.LOCAL_ID_TYPE_AGGREGATE){var r=h._getBlock(0).getData(e,0);h._getBlock(0).setData(e,0,r&~u)}})),f=0;f<p.length;f++)null!=(d=p[f])&&(_=this._getBlock(0).getData(d,0),this._getBlock(0).setData(d,0,_|u));return this._getBlock(0).unlock(),[2]}}))}))},e.prototype._getFilter=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var o,n,a;return i.__generator(this,(function(i){switch(i.label){case 0:return l.isSome(o=this._filters[e])?[2,o]:[4,new Promise((function(e,t){Promise.all([r.e(6),r.e(9),r.e(59)]).then((function(){var t=[r("Z0JH")];e.apply(null,t)}).bind(this)).catch(t.bind(this))}))];case 1:return n=i.sent().default,a=new n({geometryType:t.geometryType,hasM:!1,hasZ:!1,timeInfo:t.timeInfo,fieldsIndex:new c(t.fields)}),this._filters[e]=a,[2,a]}}))}))},e.prototype.isVisible=function(e){return!!(2&this._getBlock(0).getData(e.localId,0))},e.prototype.getFilterFlags=function(e){for(var r=0,i=E(e.localId)===t.LOCAL_ID_TYPE_AGGREGATE?254:255,o=0;o<this._filters.length;o++){var n=this._filters[o];r|=(i&1<<o&&!l.isNone(n)&&!n.check(e)?0:1)<<o}var a=this.getFeatureId(e.localId);return r<<1|this.getHighlightFlag(a)},e.prototype._bindVVEvaluators=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var r=this;return i.__generator(this,(function(o){switch(o.label){case 0:return this._attributeComputeMap.clear(),l.isSome(e)?[4,u.all(e.map((function(e){return i.__awaiter(r,void 0,void 0,(function(){var r,o;return i.__generator(this,(function(i){switch(i.label){case 0:return r=f.Utils.getVVType(e.type),[4,this._createGetValueFunction(e,t)];case 1:return o=i.sent(),l.isSome(o)&&this._attributeComputeMap.set(r,o),[2]}}))}))})))]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2]}}))}))},e.prototype._bindDDEvaluators=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var r,o,n,a=this;return i.__generator(this,(function(i){switch(i.label){case 0:return this._attributeComputeMap.clear(),e.length>f.definitions.DOT_DENSITY_MAX_FIELDS&&v.warn("mapview-invalid-value","DotDensityRenderer supports a maximum of "+f.definitions.DOT_DENSITY_MAX_FIELDS+" attribtues, but found "+e.length),[4,u.all(e.map((function(e){return a._createNormalizedFunction(e,t)})))];case 1:for(r=i.sent().map((function(e){return m(0,e)})),o=0;o<f.definitions.DOT_DENSITY_MAX_FIELDS;o++)(n=o<e.length&&r[o])?this._attributeComputeMap.set(o,n):this._attributeComputeMap.has(o)&&this._attributeComputeMap.delete(o);return[2]}}))}))},e.prototype._createGetValueFunction=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var r,o,n,a,s;return i.__generator(this,(function(i){switch(i.label){case 0:return"size"!==e.type?[3,2]:(r=f.getTypeOfSizeVisualVariable(e))===f.enums.WGLVVFlag.SIZE_SCALE_STOPS?[2,null]:(o=m,n=[f.definitions.NAN_MAGIC_NUMBER],[4,this._createNormalizedFunction(e,t,r===f.enums.WGLVVFlag.SIZE_UNIT_VALUE&&function(t){return h.getVisualVariableSizeValueRepresentationRatio(t,e.valueRepresentation)})]);case 1:return[2,o.apply(void 0,n.concat([i.sent()]))];case 2:return a=m,s=[f.definitions.NAN_MAGIC_NUMBER],[4,this._createNormalizedFunction(e,t)];case 3:return[2,a.apply(void 0,s.concat([i.sent()]))]}}))}))},e.prototype._createNormalizedFunction=function(e,t,r){return i.__awaiter(this,void 0,void 0,(function(){var n,a,s;return i.__generator(this,(function(i){switch(i.label){case 0:return(n=e.field)?"string"==typeof n?(a=e.normalizationField)?[2,function(e){if(e.attributes[n]&&e.attributes[a]){var t=e.attributes[n]/e.attributes[a];return r?r(t):t}}]:[2,r?function(e){return r(e.attributes[n])}:function(e){return e.attributes[n]}]:(v.error(new o("mapview-rendering:invalid-type","The field for a vv must be a string or a number, but got "+typeof n)),[2,function(){}]):e.valueExpression?(this._hasScaleExpr=this._hasScaleExpr||-1!==e.valueExpression.indexOf("scale"),[4,p.createVVExpression(e.valueExpression,t.spatialReference,t.fields)]):[3,2];case 1:return s=i.sent(),[2,d.callWithOptimizedFeature.bind(null,s)];case 2:return v.error("Unable to create a normalized function for visual variable: "+e),[2,function(){}]}}))}))},e}();t.default=I}).apply(null,i))||(e.exports=o)}}]);