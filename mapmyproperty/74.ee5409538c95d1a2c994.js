(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/libs/gl-matrix-2/mat4f64":"1m5D","arcgis-js-api/core/libs/gl-matrix-2/mat4f64":"1m5D","arcgis-js-api/views/3d/layers/support/FastSymbolUpdates":"3w6h","esri/core/libs/gl-matrix-2/mat3f64":"51bw","arcgis-js-api/core/libs/gl-matrix-2/mat3f64":"51bw","arcgis-js-api/core/libs/gl-matrix-2/factories/mat4f64":"CIzB","arcgis-js-api/views/3d/support/debugFlags":"Dk48","arcgis-js-api/views/2d/layers/features/tileRenderers/SymbolTileRenderer":"IBem","arcgis-js-api/views/2d/layers/features/tileRenderers/support/WGLFeatureView":"IYkq","arcgis-js-api/views/2d/engine/FeatureContainer":"N0+q","arcgis-js-api/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":"iHXi"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"1m5D":function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i("CIzB")],void 0===(o=(function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mat4f64=i}).apply(null,r))||(e.exports=o)},"3w6h":function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i("pcDC"),i("xoE+"),i("YX1r"),i("51bw"),i("FXVB"),i("1m5D"),i("0LE5"),i("Rdxj"),i("4oaH"),i("Dk48")],void 0===(o=(function(e,t,i,r,o,n,a,s,l,u,p,f){function c(e){return null!=e}function d(e){return"number"==typeof e}function v(e){return"string"==typeof e}function y(e,t){e&&e.push(t),E(t)}function S(e){L&&console.warn("[FastSymbolUpdates] "+e)}function E(e){L&&console.info("[FastSymbolUpdates] "+e)}function h(e,t,i,r,o){var n=e.minSize,a=e.maxSize;if(e.expression)return y(o,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){var s=r.symbolSize[i];return t.minSize[i]=s,t.maxSize[i]=s,t.offset[i]=t.minSize[i],t.factor[i]=0,t.type[i]=1,!0}if(c(e.field))return c(e.stops)?2===e.stops.length&&d(e.stops[0].size)&&d(e.stops[1].size)?(_(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,i),t.type[i]=1,!0):(y(o,"Could not convert size info: stops only supported with 2 elements"),!1):d(n)&&d(a)&&c(e.minDataValue)&&c(e.maxDataValue)?(_(n,a,e.minDataValue,e.maxDataValue,t,i),t.type[i]=1,!0):null!=p.meterIn[e.valueUnit]?(t.minSize[i]=-1/0,t.maxSize[i]=1/0,t.offset[i]=0,t.factor[i]=1/p.meterIn[e.valueUnit],t.type[i]=1,!0):"unknown"===e.valueUnit?(y(o,"Could not convert size info: proportional size not supported"),!1):(y(o,"Could not convert size info: scale-dependent size not supported"),!1);if(!c(e.field)){if(e.stops&&e.stops[0]&&d(e.stops[0].size))return t.minSize[i]=e.stops[0].size,t.maxSize[i]=e.stops[0].size,t.offset[i]=t.minSize[i],t.factor[i]=0,t.type[i]=1,!0;if(d(n))return t.minSize[i]=n,t.maxSize[i]=n,t.offset[i]=n,t.factor[i]=0,t.type[i]=1,!0}return y(o,"Could not convert size info: unsupported variant of sizeInfo"),!1}function _(e,t,i,r,o,n){var a=Math.abs(r-i)>0?(t-e)/(r-i):0;o.minSize[n]=a>0?e:t,o.maxSize[n]=a>0?t:e,o.offset[n]=e-i*a,o.factor[n]=a}function T(e,t,i){e[4*t+0]=i.r/255,e[4*t+1]=i.g/255,e[4*t+2]=i.b/255,e[4*t+3]=i.a}function m(e,t,i){var r=2===i&&"arithmetic"===e.rotationType;t.offset[i]=r?90:0,t.factor[i]=r?-1:1,t.type[i]=1}function I(e,t,r){if(!e)return null;var o=!t.supportedTypes||!!t.supportedTypes.size,n=!t.supportedTypes||!!t.supportedTypes.color,a=!t.supportedTypes||!!t.supportedTypes.rotation,s=!!t.supportedTypes&&!!t.supportedTypes.opacity;L&&(r=r||[]);var l=e.reduce((function(e,l){if(!e)return e;if(l.valueExpression)return y(r,"Could not convert visual variables: arcade expressions not supported"),null;switch(l.type){case"size":return o?function(e,t,i,r){if(e.normalizationField||e.valueRepresentation)return y(r,"Could not convert size info: unsupported property"),null;if(!function(e){return null==e||v(e)}(e.field))return y(r,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return y(r,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size={field:e.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};var o;switch(e.axis){case"width":return(o=h(e,t.size,0,i,r))?t:null;case"height":return(o=h(e,t.size,2,i,r))?t:null;case"depth":return(o=h(e,t.size,1,i,r))?t:null;case"width-and-depth":return(o=h(e,t.size,0,i,r))&&h(e,t.size,1,i,r),o?t:null;case null:case void 0:case"all":return(o=(o=(o=h(e,t.size,0,i,r))&&h(e,t.size,1,i,r))&&h(e,t.size,2,i,r))?t:null;default:return y(r,'Could not convert size info: unknown axis "'+e.axis+'""'),null}}(l,e,t,r):e;case"color":return n?function(e,t,i){if(e.normalizationField)return y(i,"Could not convert color info: unsupported property"),null;if(v(e.field)){if(!e.stops)return y(i,"Could not convert color info: missing stops or colors"),null;if(e.stops.length>8)return y(i,"Could not convert color info: too many color stops"),null;t.color={field:e.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(var r=e.stops,o=0;o<8;++o){var n=r[Math.min(o,r.length-1)];t.color.values[o]=n.value,T(t.color.colors,o,n.color)}}else{if(!(e.stops&&e.stops.length>=0))return y(i,"Could not convert color info: no field and no colors/stops"),null;var a=e.stops&&e.stops.length>=0&&e.stops[0].color;for(t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},o=0;o<8;o++)t.color.values[o]=1/0,T(t.color.colors,o,a)}return t}(l,e,r):e;case"opacity":return s?function(e,t,i){if(e.normalizationField)return y(i,"Could not convert opacity info: unsupported property"),null;if(v(e.field)){if(!e.stops)return y(i,"Could not convert opacity info: missing stops or opacities"),null;if(e.stops.length>8)return y(i,"Could not convert opacity info: too many opacity stops"),null;t.opacity={field:e.field,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(var r=e.stops,o=0;o<8;++o){var n=r[Math.min(o,r.length-1)];t.opacity.values[o]=n.value,t.opacity.opacityValues[o]=n.opacity}}else{if(!(e.stops&&e.stops.length>=0))return y(i,"Could not convert opacity info: no field and no opacities/stops"),null;var a=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]},o=0;o<8;o++)t.opacity.values[o]=1/0,t.opacity.opacityValues[o]=a}return t}(l,e,r):null;case"rotation":return a?function(e,t,i){if(!v(e.field))return y(i,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return y(i,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return m(e,t.rotation,0),t;case"roll":return m(e,t.rotation,1),t;case null:case void 0:case"heading":return m(e,t.rotation,2),t;default:return y(i,'Could not convert rotation info: unknown axis "'+e.axis+'""'),null}}(l,e,r):e;default:return i.neverReached(l),null}}),{size:null,color:null,opacity:null,rotation:null});return!(e.length>0&&l)||l.size||l.color||l.opacity||l.rotation?l&&l.size&&!function(e,t,i){for(var r=0;r<3;++r){var o=t.unitInMeters;1===e.type[r]&&(o*=t.modelSize[r],e.type[r]=2),e.minSize[r]=e.minSize[r]/o,e.maxSize[r]=e.maxSize[r]/o,e.offset[r]=e.offset[r]/o,e.factor[r]=e.factor[r]/o}var n;if(0!==e.type[0])n=0;else if(0!==e.type[1])n=1;else{if(0===e.type[2])return y(i,"No size axis contains a valid size or scale"),!1;n=2}for(r=0;r<3;++r)0===e.type[r]&&(e.minSize[r]=e.minSize[n],e.maxSize[r]=e.maxSize[n],e.offset[r]=e.offset[n],e.factor[r]=e.factor[n],e.type[r]=e.type[n]);return!0}(l.size,t,r)?null:l:null}function b(e){return e&&null!=e.size}function z(e,t,i){if(!!e!=!!t)return S("State update failed ({$name} enabled/disabled)"),!1;if(e&&e.field!==t.field)return S("State update failed ({$name} field changed)"),!1;if(e&&"rotation"===i)for(var r=e,o=t,n=0;n<3;n++)if(r.type[n]!==o.type[n]||r.offset[n]!==o.offset[n]||r.factor[n]!==o.factor[n])return!1;return!0}function R(e,t){var i={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvOpacityEnabled:!1,vvOpacityValues:null,vvOpacityOpacities:null,vvSymbolAnchor:null,vvSymbolRotationMatrix:null},r=b(e);return e&&e.size?(i.vvSizeEnabled=!0,i.vvSizeMinSize=e.size.minSize,i.vvSizeMaxSize=e.size.maxSize,i.vvSizeOffset=e.size.offset,i.vvSizeFactor=e.size.factor):e&&r&&(i.vvSizeValue=t.transformation.scale),e&&r&&(i.vvSymbolAnchor=t.transformation.anchor,i.vvSymbolRotationMatrix=n.mat3f64.create(),a.mat4.identity(O),function(e,t,i,r){void 0===r&&(r=s.mat4f64.create());var o=e||0,n=t||0,l=i||0;0!==o&&a.mat4.rotateZ(r,r,-o/180*Math.PI),0!==n&&a.mat4.rotateX(r,r,n/180*Math.PI),0!==l&&a.mat4.rotateY(r,r,l/180*Math.PI)}(t.transformation.rotation[2],t.transformation.rotation[0],t.transformation.rotation[1],O),o.mat3.fromMat4(i.vvSymbolRotationMatrix,O)),e&&e.color&&(i.vvColorEnabled=!0,i.vvColorValues=e.color.values,i.vvColorColors=e.color.colors),e&&e.opacity&&(i.vvOpacityEnabled=!0,i.vvOpacityValues=e.opacity.values,i.vvOpacityOpacities=e.opacity.opacityValues),i}Object.defineProperty(t,"__esModule",{value:!0});var V,L=!1;t.convertVisualVariables=I,t.initFastSymbolUpdatesState=function(e,t){if(!e)return S("State not initialized, fast updates disabled (no renderer)"),{enabled:!1};if(f.DISABLE_FAST_UPDATES)return S("State not initialized, fast updates disabled (DISABLE_FAST_SYMBOL_UPDATES set)"),{enabled:!1};var i=I(e.visualVariables,t);return i?(E("State initialized, fast updates enabled"),{enabled:!0,visualVariables:i,materialParameters:R(i,t),requiresShaderTransformation:b(i)}):(S("State not initialized, fast updates disabled (conversion failed)"),{enabled:!1})},t.updateFastSymbolUpdatesState=function(e,t,i){if(!t||!e.enabled)return!1;var r=e.visualVariables,o=I(t.visualVariables,i);return o?!!(z(r.size,o.size,"size")&&z(r.color,o.color,"color")&&z(r.rotation,o.rotation,"rotation")&&z(r.opacity,o.opacity,"opacity"))&&(e.visualVariables=o,e.materialParameters=R(o,i),e.requiresShaderTransformation=b(o),E("State updated"),!0):(S("State update failed (conversion failed)"),!1)},t.getMaterialParams=R,function(e){var t=s.mat4f64.create(),i=u.vec3f64.create();e.evaluateModelTransform=function(e,o,n){if(!e.vvSizeEnabled)return n;a.mat4.copy(t,n);var s=e.vvSymbolRotationMatrix;a.mat4.set(O,s[0],s[1],s[2],0,s[3],s[4],s[5],0,s[6],s[7],s[8],0,0,0,0,1),a.mat4.multiply(t,t,O);for(var l=0;l<3;++l)i[l]=r.clamp(e.vvSizeOffset[l]+o[0]*e.vvSizeFactor[l],e.vvSizeMinSize[l],e.vvSizeMaxSize[l]);return a.mat4.scale(t,t,i),a.mat4.translate(t,t,e.vvSymbolAnchor),t},e.evaluateModelTransformScale=function(e,t,i){if(!t.vvSizeEnabled)return l.vec3.set(e,1,1,1);for(var o=0;o<3;++o)e[o]=r.clamp(t.vvSizeOffset[o]+i[0]*t.vvSizeFactor[o],t.vvSizeMinSize[o],t.vvSizeMaxSize[o]);return e}}(V||(V={}));var O=s.mat4f64.create();t.evaluateModelTransform=V.evaluateModelTransform,t.evaluateModelTransformScale=V.evaluateModelTransformScale}).apply(null,r))||(e.exports=o)},"51bw":function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i("xf8T")],void 0===(o=(function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mat3f64=i}).apply(null,r))||(e.exports=o)},CIzB:function(e,t,i){var r,o;r=[i.dj.c(e.i),t],void 0===(o=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},t.clone=function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]},t.fromValues=function(e,t,i,r,o,n,a,s,l,u,p,f,c,d,v,y){return[e,t,i,r,o,n,a,s,l,u,p,f,c,d,v,y]},t.createView=function(e,t){return new Float64Array(e,t,16)},t.IDENTITY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}).apply(null,r))||(e.exports=o)},Dk48:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i("9opi"),i("qKT0"),i("Gtr7"),i("Vx27")],void 0===(o=(function(e,t,i,r,o,n){return new(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,t.SCENEVIEW_LOCKING_LOG=!1,t.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED=!1,t.HIGHLIGHTS_VISUALIZE_BLOCKS=!1,t.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,t.DECONFLICTOR_SHOW_OUTLINES=!1,t.DECONFLICTOR_SHOW_OUTLINES_INVISIBLE=!1,t.DECONFLICTOR_SHOW_GRID=!1,t.LABELS_SHOW_BORDER=!1,t.OVERLAY_DRAW_TEST_TEXTURE=!1,t.OVERLAY_SHOW_CENTER=!1,t.TESTS_DISABLE_UPDATE_THRESHOLDS=!1,t.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1,t.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1,t.DRAW_MESH_GEOMETRY_NORMALS=!1,t.FEATURE_TILE_FETCH_SHOW_TILES=!1,t.FEATURE_TILE_TREE_SHOW_TILES=!1,t.TERRAIN_TILE_TREE_SHOW_TILES=!1,t.I3S_TREE_SHOW_TILES=!1,t.ENABLE_PROFILE_DEPTH_RANGE=!1,t.DISABLE_FAST_UPDATES=!1,t.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,t.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,t.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,t}return i(t,e),r([n.property()],t.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),r([n.property()],t.prototype,"SCENEVIEW_LOCKING_LOG",void 0),r([n.property()],t.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED",void 0),r([n.property()],t.prototype,"HIGHLIGHTS_VISUALIZE_BLOCKS",void 0),r([n.property()],t.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),r([n.property()],t.prototype,"DECONFLICTOR_SHOW_OUTLINES",void 0),r([n.property()],t.prototype,"DECONFLICTOR_SHOW_OUTLINES_INVISIBLE",void 0),r([n.property()],t.prototype,"DECONFLICTOR_SHOW_GRID",void 0),r([n.property()],t.prototype,"LABELS_SHOW_BORDER",void 0),r([n.property()],t.prototype,"OVERLAY_DRAW_TEST_TEXTURE",void 0),r([n.property()],t.prototype,"OVERLAY_SHOW_CENTER",void 0),r([n.property()],t.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0),r([n.property()],t.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0),r([n.property()],t.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0),r([n.property()],t.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),r([n.property()],t.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),r([n.property()],t.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),r([n.property()],t.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),r([n.property()],t.prototype,"I3S_TREE_SHOW_TILES",void 0),r([n.property()],t.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0),r([n.property()],t.prototype,"DISABLE_FAST_UPDATES",void 0),r([n.property()],t.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),r([n.property()],t.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),r([n.property()],t.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),r([n.subclass("esri.views.3d.support.DebugFlags")],t)}(n.declared(o)))}).apply(null,r))||(e.exports=o)},IBem:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i("9opi"),i("qKT0"),i("2Atf"),i("Q2wQ"),i("HZ3d"),i("Vx27"),i("lRq4"),i("YaB4"),i("NfUe"),i("Rt18"),i("iHXi"),i("IYkq")],void 0===(o=(function(e,t,i,r,o,n,a,s,l,u,p,f,c,d){Object.defineProperty(t,"__esModule",{value:!0});var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.install=function(e){var t=new d.WGLFeatureView(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)},t.prototype.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.destroy()},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},t.prototype.onConfigUpdate=function(e,t){var i=null;if("visualVariables"in e){var r=(p.simplifyVVRenderer(e).visualVariables||[]).map((function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));i=c.convertVisualVariables(r)}this.featuresView.setRendererInfo(e,i,this.layerView.effects),this.featuresView.setClips(this.layerView.clips)},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()},t.prototype.onTileError=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)},t.prototype.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()},t.prototype.lockAttributeTextureUpload=function(){this.featuresView.attributeView.lockTextureUpload()},t.prototype.unlockAttributeTextureUpload=function(){this.featuresView.attributeView.unlockTextureUpload()},t.prototype.getMaterialItems=function(e){return a(this,void 0,void 0,(function(){return n(this,(function(t){return[2,this.featuresView.getMaterialItems(e)]}))}))},t.prototype.invalidateLabels=function(){this.layer.labelingInfo&&this.layer.labelsVisible&&(this.tiles.forEach((function(e){return e.isDirty=!0})),this.layerView.view.labelManager.requestUpdate())},t.prototype.createTile=function(e){var t=this.tileInfoView.getTileBounds(l.create(),e),i=new u.WGLTile(e,t);return this.layer.labelingInfo&&this.layerView.view.labelManager.addTile(this.layerView,i),i},t.prototype.disposeTile=function(e){this.featuresView.removeChild(e),this.layer.labelingInfo&&this.layerView.view.labelManager.removeTile(this.layerView,e.key.id),e.destroy(),this.layerView.view.labelManager.requestUpdate()},r([s.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],t)}(s.declared(f.default));t.default=v}).apply(null,r))||(e.exports=o)},IYkq:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i("2Atf"),i("xhoE"),i("Q2wQ"),i("HZ3d"),i("qMld"),i("YaB4"),i("N0+q"),i("JNkf")],void 0===(o=(function(e,t,i,r,o,n,a,s,l,u){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t,i,r){var o=e.call(this,t,i.clips)||this;return o._pointToCallbacks=new Map,o._layer=r,o._layerView=i,o}return r(t,e),t.prototype.renderChildren=function(t){this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView),e.prototype.renderChildren.call(this,t)},t.prototype.hitTest=function(e,t){var i=[e,t],r=a.createResolver();return this._pointToCallbacks.set(i,r),this.requestRender(),r.promise},t.prototype.doRender=function(t){var i=this._layer,r=t.state.scale;r<=(i.minScale||1/0)&&r>=i.maxScale&&e.prototype.doRender.call(this,t)},Object.defineProperty(t.prototype,"hasAnimation",{get:function(){return this.hasLabels},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasLabels",{get:function(){return!(!this._layer.labelingInfo||!this._layer.labelingInfo.length)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelsVisible",{get:function(){return this._layer.labelsVisible},enumerable:!0,configurable:!0}),t.prototype.prepareRenderPasses=function(t){var i=this,r=t.registerRenderPass({name:"label",brushes:[s.brushes.Label],target:function(){return i._layer.labelsVisible?i.children:null},drawPhase:u.WGLDrawPhase.LABEL|u.WGLDrawPhase.LABEL_ALPHA}),o=t.registerRenderPass({name:"geometry",brushes:[s.brushes.Fill,s.brushes.Line,s.brushes.Marker,s.brushes.Text],target:function(){return i.children},effects:[{apply:t.effects.highlight,enable:function(){return!!i._layerView.hasHighlight()}},{apply:t.effects.hittest,enable:function(){return!!i._pointToCallbacks.size},args:function(){return i._pointToCallbacks}}]});return e.prototype.prepareRenderPasses.call(this,t).concat([o,r])},t}(l.FeatureContainer);t.WGLFeatureView=p}).apply(null,r))||(e.exports=o)},"N0+q":function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i("Q2wQ"),i("HZ3d"),i("xhoE"),i("2Atf"),i("qMld"),i("qMld"),i("lRq4"),i("YaB4")],void 0===(o=(function(e,t,i,r,o,n,a,s,l,u){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t,i){var r=e.call(this,t,i)||this;return r._rendererInfo=new u.WGLRendererInfo,r.attributeView=new u.AttributeStoreView,r}return o(t,e),t.prototype.destroy=function(){this.removeAllChildren(),this.children.forEach((function(e){return e.destroy()})),this.attributeView.destroy()},t.prototype.whenAttached=function(){var e=this;return this.attached?a.resolve():a.create((function(t){return e.once("attached",(function(){return t()}))}))},t.prototype.setRendererInfo=function(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()},t.prototype.getMaterialItems=function(e,t){return r(this,void 0,void 0,(function(){var r,o;return i(this,(function(i){switch(i.label){case 0:return e&&0!==e.length?[4,this.whenAttached()]:[2,null];case 1:return i.sent(),r=this.stage.painter.textureManager,o=e.map((function(e){return r.rasterizeItem(e.symbol,e.glyphIds,t)})),[4,s.all(o)];case 2:return[2,i.sent().map((function(t,i){return{id:e[i].id,mosaicItem:t}}))]}}))}))},t.prototype.onTileData=function(e,t){if(t.addOrUpdate&&"tileDisplayData"in t.addOrUpdate)e.setData(t,this.hasLabels,this.labelsVisible);else{var i=t.addOrUpdate&&u.TileData.decode(t.addOrUpdate),r=n({},t,{addOrUpdate:i});e.setData(r,this.hasLabels,this.labelsVisible)}this.contains(e)||this.addChild(e),this.requestRender()},t.prototype.onTileError=function(e){e.clear(),this.contains(e)||this.addChild(e)},t.prototype.renderChildren=function(t){this._rendererInfo.update(t.state),this.attributeView.bindTextures(this.stage.context),e.prototype.renderChildren.call(this,t)},t.prototype.createTile=function(e){var t=this._tileInfoView.getTileBounds(l.create(),e);return new u.WGLTile(e,t)},t.prototype.destroyTile=function(e){this.removeChild(e),e.destroy()},t.prototype.attach=function(){return this._initializeExtensions(),e.prototype.attach.call(this)},t.prototype.createRenderParams=function(t){return n({},e.prototype.createRenderParams.call(this,t),{rendererInfo:this._rendererInfo,attributeView:this.attributeView})},t.prototype._initializeExtensions=function(){},t}(u.TileContainer);t.FeatureContainer=p}).apply(null,r))||(e.exports=o)},iHXi:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i("2Atf"),i("jBNx"),i("YaB4"),i("tI6k"),i("3w6h")],void 0===(o=(function(e,t,i,r,o,n,a){function s(e){return{value:e.value,size:r.toPt(e.size)}}function l(e){return e.map((function(e){return s(e)}))}function u(e){return"string"==typeof e||"number"==typeof e?r.toPt(e):{type:"size",expression:e.expression,stops:l(e.stops)}}function p(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(o.Utils.isString(e.field)){if(!e.stops)return null;if(e.stops.length>8)return null;for(var i=e.stops,r=0;r<8;++r){var n=i[Math.min(r,i.length-1)];t.values[r]=n.value,t.opacities[r]=n.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;var a=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(r=0;r<8;r++)t.values[r]=1/0,t.opacities[r]=a}return t}Object.defineProperty(t,"__esModule",{value:!0});var f=o.enums.WGLVVFlag;t.getVisualVariableSizeValueRepresentationRatio=function(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e},t.stopToSizeStop=s,t.normalizeSizeStops=l,t.normalizeSizeElement=u,t.getVisualVariablesFields=function(e){var t=e&&e.length>0?{}:null;return t&&e.forEach((function(e){e.field&&(t[e.type]=e.field)})),t};var c=function(e){for(var t=[],i=[],o=l(e),a=o.length,s=0;s<6;s++){var u=o[Math.min(s,a-1)];t.push(u.value),i.push(null==u.size?n.NAN_MAGIC_NUMBER:r.pt2px(u.size))}return{values:new Float32Array(t),sizes:new Float32Array(i)}};t.convertVisualVariables=function(e){var t=e&&e.length>0?{}:null,r=t?{}:null;if(!t)return{vvFields:t,vvRanges:r};for(var n=0,s=e;n<s.length;n++){var d=s[n],v=d.type;if(d.field&&(t[v]=d.field),"size"===v){r.size||(r.size={});var y=d;switch(o.getTypeOfSizeVisualVariable(y)){case f.SIZE_MINMAX_VALUE:r.size.minMaxValue={minDataValue:y.minDataValue,maxDataValue:y.maxDataValue,minSize:u(y.minSize),maxSize:u(y.maxSize)};break;case f.SIZE_SCALE_STOPS:r.size.scaleStops={stops:l(y.stops)};break;case f.SIZE_FIELD_STOPS:if(y.levels){var S={};for(var E in y.levels)S[E]=c(y.levels[E]);r.size.fieldStops={type:"level-dependent",levels:S}}else r.size.fieldStops=i({type:"static"},c(y.stops));break;case f.SIZE_UNIT_VALUE:r.size.unitValue={unit:y.valueUnit,valueRepresentation:y.valueRepresentation}}}else if("color"===v){var h=a.convertVisualVariables([d],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});r.color=h.color;for(var _=0;_<32;_+=4)o.color.premultiplyAlpha(r.color.colors,_,!0)}else"opacity"===v?r.opacity=p(d):"rotation"===v&&(r.rotation={type:d.rotationType})}return{vvFields:t,vvRanges:r}}}).apply(null,r))||(e.exports=o)}}]);