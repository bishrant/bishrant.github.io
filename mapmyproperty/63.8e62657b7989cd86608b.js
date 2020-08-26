(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/libs/gl-matrix-2/mat4f64":"1m5D","arcgis-js-api/core/libs/gl-matrix-2/mat4f64":"1m5D","esri/views/3d/layers/support/FastSymbolUpdates":"3w6h","esri/core/libs/gl-matrix-2/mat3f64":"51bw","arcgis-js-api/core/libs/gl-matrix-2/mat3f64":"51bw","arcgis-js-api/core/libs/gl-matrix-2/factories/mat4f64":"CIzB","esri/views/3d/support/debugFlags":"Dk48","arcgis-js-api/views/3d/support/debugFlags":"Dk48","arcgis-js-api/views/2d/layers/features/tileRenderers/SymbolTileRenderer":"IBem","arcgis-js-api/views/2d/layers/features/tileRenderers/support/WGLFeatureView":"IYkq","arcgis-js-api/views/2d/engine/FeatureContainer":"N0+q","arcgis-js-api/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":"iHXi","esri/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":"iHXi"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"1m5D":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("CIzB")],void 0===(o=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.mat4f64=r}).apply(null,i))||(e.exports=o)},"3w6h":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("pcDC"),r("xoE+"),r("YX1r"),r("51bw"),r("FXVB"),r("1m5D"),r("0LE5"),r("Rdxj"),r("4oaH"),r("Dk48")],void 0===(o=(function(e,t,r,i,o,a,n,s,l,u,p,c){var f;function d(e){return null!=e}function v(e){return"number"==typeof e}function _(e){return"string"==typeof e}function y(e,t){e&&e.push(t)}function h(e,t,r,i,o){var a=e.minSize,n=e.maxSize;if(e.expression)return y(o,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){var s=i.symbolSize[r];return t.minSize[r]=s,t.maxSize[r]=s,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=1,!0}if(d(e.field))return d(e.stops)?2===e.stops.length&&v(e.stops[0].size)&&v(e.stops[1].size)?(S(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,r),t.type[r]=1,!0):(y(o,"Could not convert size info: stops only supported with 2 elements"),!1):v(a)&&v(n)&&d(e.minDataValue)&&d(e.maxDataValue)?(S(a,n,e.minDataValue,e.maxDataValue,t,r),t.type[r]=1,!0):null!=p.meterIn[e.valueUnit]?(t.minSize[r]=-1/0,t.maxSize[r]=1/0,t.offset[r]=0,t.factor[r]=1/p.meterIn[e.valueUnit],t.type[r]=1,!0):"unknown"===e.valueUnit?(y(o,"Could not convert size info: proportional size not supported"),!1):(y(o,"Could not convert size info: scale-dependent size not supported"),!1);if(!d(e.field)){if(e.stops&&e.stops[0]&&v(e.stops[0].size))return t.minSize[r]=e.stops[0].size,t.maxSize[r]=e.stops[0].size,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=1,!0;if(v(a))return t.minSize[r]=a,t.maxSize[r]=a,t.offset[r]=a,t.factor[r]=0,t.type[r]=1,!0}return y(o,"Could not convert size info: unsupported variant of sizeInfo"),!1}function S(e,t,r,i,o,a){var n=Math.abs(i-r)>0?(t-e)/(i-r):0;o.minSize[a]=n>0?e:t,o.maxSize[a]=n>0?t:e,o.offset[a]=e-r*n,o.factor[a]=n}function E(e,t,r){e[4*t+0]=r.r/255,e[4*t+1]=r.g/255,e[4*t+2]=r.b/255,e[4*t+3]=r.a}function m(e,t,r){var i=2===r&&"arithmetic"===e.rotationType;t.offset[r]=i?90:0,t.factor[r]=i?-1:1,t.type[r]=1}function T(e,t,i){if(!e)return null;var o=!t.supportedTypes||!!t.supportedTypes.size,a=!t.supportedTypes||!!t.supportedTypes.color,n=!t.supportedTypes||!!t.supportedTypes.rotation,s=!!t.supportedTypes&&!!t.supportedTypes.opacity,l=e.reduce((function(e,l){if(!e)return e;if(l.valueExpression)return y(i,"Could not convert visual variables: arcade expressions not supported"),null;switch(l.type){case"size":return o?function(e,t,r,i){if(e.normalizationField||e.valueRepresentation)return y(i,"Could not convert size info: unsupported property"),null;if(null!=(o=e.field)&&!_(o))return y(i,"Could not convert size info: field is not a string"),null;var o,a;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return y(i,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size={field:e.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};switch(e.axis){case"width":return(a=h(e,t.size,0,r,i))?t:null;case"height":return(a=h(e,t.size,2,r,i))?t:null;case"depth":return(a=h(e,t.size,1,r,i))?t:null;case"width-and-depth":return(a=h(e,t.size,0,r,i))&&h(e,t.size,1,r,i),a?t:null;case null:case void 0:case"all":return(a=(a=(a=h(e,t.size,0,r,i))&&h(e,t.size,1,r,i))&&h(e,t.size,2,r,i))?t:null;default:return y(i,'Could not convert size info: unknown axis "'+e.axis+'""'),null}}(l,e,t,i):e;case"color":return a?function(e,t,r){if(e.normalizationField)return y(r,"Could not convert color info: unsupported property"),null;if(_(e.field)){if(!e.stops)return y(r,"Could not convert color info: missing stops or colors"),null;if(e.stops.length>8)return y(r,"Could not convert color info: too many color stops"),null;t.color={field:e.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(var i=e.stops,o=0;o<8;++o){var a=i[Math.min(o,i.length-1)];t.color.values[o]=a.value,E(t.color.colors,o,a.color)}}else{if(!(e.stops&&e.stops.length>=0))return y(r,"Could not convert color info: no field and no colors/stops"),null;var n=e.stops&&e.stops.length>=0&&e.stops[0].color;for(t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},o=0;o<8;o++)t.color.values[o]=1/0,E(t.color.colors,o,n)}return t}(l,e,i):e;case"opacity":return s?function(e,t,r){if(e.normalizationField)return y(r,"Could not convert opacity info: unsupported property"),null;if(_(e.field)){if(!e.stops)return y(r,"Could not convert opacity info: missing stops or opacities"),null;if(e.stops.length>8)return y(r,"Could not convert opacity info: too many opacity stops"),null;t.opacity={field:e.field,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(var i=e.stops,o=0;o<8;++o){var a=i[Math.min(o,i.length-1)];t.opacity.values[o]=a.value,t.opacity.opacityValues[o]=a.opacity}}else{if(!(e.stops&&e.stops.length>=0))return y(r,"Could not convert opacity info: no field and no opacities/stops"),null;var n=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]},o=0;o<8;o++)t.opacity.values[o]=1/0,t.opacity.opacityValues[o]=n}return t}(l,e,i):null;case"rotation":return n?function(e,t,r){if(!_(e.field))return y(r,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return y(r,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return m(e,t.rotation,0),t;case"roll":return m(e,t.rotation,1),t;case null:case void 0:case"heading":return m(e,t.rotation,2),t;default:return y(r,'Could not convert rotation info: unknown axis "'+e.axis+'""'),null}}(l,e,i):e;default:return r.neverReached(l),null}}),{size:null,color:null,opacity:null,rotation:null});return!(e.length>0&&l)||l.size||l.color||l.opacity||l.rotation?l&&l.size&&!function(e,t,r){for(var i=0;i<3;++i){var o=t.unitInMeters;1===e.type[i]&&(o*=t.modelSize[i],e.type[i]=2),e.minSize[i]=e.minSize[i]/o,e.maxSize[i]=e.maxSize[i]/o,e.offset[i]=e.offset[i]/o,e.factor[i]=e.factor[i]/o}var a;if(0!==e.type[0])a=0;else if(0!==e.type[1])a=1;else{if(0===e.type[2])return y(r,"No size axis contains a valid size or scale"),!1;a=2}for(i=0;i<3;++i)0===e.type[i]&&(e.minSize[i]=e.minSize[a],e.maxSize[i]=e.maxSize[a],e.offset[i]=e.offset[a],e.factor[i]=e.factor[a],e.type[i]=e.type[a]);return!0}(l.size,t,i)?null:l:null}function I(e){return e&&null!=e.size}function b(e,t,r){if(!!e!=!!t)return!1;if(e&&e.field!==t.field)return!1;if(e&&"rotation"===r)for(var i=e,o=t,a=0;a<3;a++)if(i.type[a]!==o.type[a]||i.offset[a]!==o.offset[a]||i.factor[a]!==o.factor[a])return!1;return!0}function z(e,t){var r={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvOpacityEnabled:!1,vvOpacityValues:null,vvOpacityOpacities:null,vvSymbolAnchor:null,vvSymbolRotationMatrix:null},i=I(e);return e&&e.size?(r.vvSizeEnabled=!0,r.vvSizeMinSize=e.size.minSize,r.vvSizeMaxSize=e.size.maxSize,r.vvSizeOffset=e.size.offset,r.vvSizeFactor=e.size.factor):e&&i&&(r.vvSizeValue=t.transformation.scale),e&&i&&(r.vvSymbolAnchor=t.transformation.anchor,r.vvSymbolRotationMatrix=a.mat3f64.create(),n.mat4.identity(R),function(e,t,r,i){void 0===i&&(i=s.mat4f64.create());var o=e||0,a=t||0,l=r||0;0!==o&&n.mat4.rotateZ(i,i,-o/180*Math.PI),0!==a&&n.mat4.rotateX(i,i,a/180*Math.PI),0!==l&&n.mat4.rotateY(i,i,l/180*Math.PI)}(t.transformation.rotation[2],t.transformation.rotation[0],t.transformation.rotation[1],R),o.mat3.fromMat4(r.vvSymbolRotationMatrix,R)),e&&e.color&&(r.vvColorEnabled=!0,r.vvColorValues=e.color.values,r.vvColorColors=e.color.colors),e&&e.opacity&&(r.vvOpacityEnabled=!0,r.vvOpacityValues=e.opacity.values,r.vvOpacityOpacities=e.opacity.opacityValues),r}Object.defineProperty(t,"__esModule",{value:!0}),t.convertVisualVariables=T,t.initFastSymbolUpdatesState=function(e,t){if(!e)return{enabled:!1};if(c.DISABLE_FAST_UPDATES)return{enabled:!1};var r=T(e.visualVariables,t);return r?{enabled:!0,visualVariables:r,materialParameters:z(r,t),requiresShaderTransformation:I(r)}:{enabled:!1}},t.updateFastSymbolUpdatesState=function(e,t,r){if(!t||!e.enabled)return!1;var i=e.visualVariables,o=T(t.visualVariables,r);return!!o&&!!(b(i.size,o.size,"size")&&b(i.color,o.color,"color")&&b(i.rotation,o.rotation,"rotation")&&b(i.opacity,o.opacity,"opacity"))&&(e.visualVariables=o,e.materialParameters=z(o,r),e.requiresShaderTransformation=I(o),!0)},t.getMaterialParams=z,function(e){var t=s.mat4f64.create(),r=u.vec3f64.create();e.evaluateModelTransform=function(e,o,a){if(!e.vvSizeEnabled)return a;n.mat4.copy(t,a);var s=e.vvSymbolRotationMatrix;n.mat4.set(R,s[0],s[1],s[2],0,s[3],s[4],s[5],0,s[6],s[7],s[8],0,0,0,0,1),n.mat4.multiply(t,t,R);for(var l=0;l<3;++l)r[l]=i.clamp(e.vvSizeOffset[l]+o[0]*e.vvSizeFactor[l],e.vvSizeMinSize[l],e.vvSizeMaxSize[l]);return n.mat4.scale(t,t,r),n.mat4.translate(t,t,e.vvSymbolAnchor),t},e.evaluateModelTransformScale=function(e,t,r){if(!t.vvSizeEnabled)return l.vec3.set(e,1,1,1);for(var o=0;o<3;++o)e[o]=i.clamp(t.vvSizeOffset[o]+r[0]*t.vvSizeFactor[o],t.vvSizeMinSize[o],t.vvSizeMaxSize[o]);return e}}(f||(f={}));var R=s.mat4f64.create();t.evaluateModelTransform=f.evaluateModelTransform,t.evaluateModelTransformScale=f.evaluateModelTransformScale}).apply(null,i))||(e.exports=o)},"51bw":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("xf8T")],void 0===(o=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.mat3f64=r}).apply(null,i))||(e.exports=o)},CIzB:function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},t.clone=function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]},t.fromValues=function(e,t,r,i,o,a,n,s,l,u,p,c,f,d,v,_){return[e,t,r,i,o,a,n,s,l,u,p,c,f,d,v,_]},t.createView=function(e,t){return new Float64Array(e,t,16)},t.IDENTITY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}).apply(null,i))||(e.exports=o)},Dk48:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("Vx27")],void 0===(o=(function(e,t,r,i,o){return new(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,t.SCENEVIEW_LOCKING_LOG=!1,t.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED=!1,t.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,t.DECONFLICTOR_SHOW_VISIBLE=!1,t.DECONFLICTOR_SHOW_INVISIBLE=!1,t.DECONFLICTOR_SHOW_GRID=!1,t.LABELS_SHOW_BORDER=!1,t.OVERLAY_DRAW_DEBUG_TEXTURE=!1,t.OVERLAY_SHOW_CENTER=!1,t.TERRAIN_DEBUG_POPUP=!1,t.TESTS_DISABLE_UPDATE_THRESHOLDS=!1,t.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1,t.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1,t.DRAW_MESH_GEOMETRY_NORMALS=!1,t.FEATURE_TILE_FETCH_SHOW_TILES=!1,t.FEATURE_TILE_TREE_SHOW_TILES=!1,t.I3S_TREE_SHOW_TILES=!1,t.I3S_SHOW_MODIFICATIONS=!1,t.ENABLE_PROFILE_DEPTH_RANGE=!1,t.DISABLE_FAST_UPDATES=!1,t.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,t.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,t.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,t}return r.__extends(t,e),r.__decorate([o.property()],t.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),r.__decorate([o.property()],t.prototype,"SCENEVIEW_LOCKING_LOG",void 0),r.__decorate([o.property()],t.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED",void 0),r.__decorate([o.property()],t.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),r.__decorate([o.property()],t.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),r.__decorate([o.property()],t.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),r.__decorate([o.property()],t.prototype,"DECONFLICTOR_SHOW_GRID",void 0),r.__decorate([o.property()],t.prototype,"LABELS_SHOW_BORDER",void 0),r.__decorate([o.property()],t.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),r.__decorate([o.property()],t.prototype,"OVERLAY_SHOW_CENTER",void 0),r.__decorate([o.property()],t.prototype,"TERRAIN_DEBUG_POPUP",void 0),r.__decorate([o.property()],t.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0),r.__decorate([o.property()],t.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0),r.__decorate([o.property()],t.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0),r.__decorate([o.property()],t.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),r.__decorate([o.property()],t.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),r.__decorate([o.property()],t.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),r.__decorate([o.property()],t.prototype,"I3S_TREE_SHOW_TILES",void 0),r.__decorate([o.property()],t.prototype,"I3S_SHOW_MODIFICATIONS",void 0),r.__decorate([o.property()],t.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0),r.__decorate([o.property()],t.prototype,"DISABLE_FAST_UPDATES",void 0),r.__decorate([o.property()],t.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),r.__decorate([o.property()],t.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),r.__decorate([o.property()],t.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),r.__decorate([o.subclass("esri.views.3d.support.DebugFlags")],t)}(i))}).apply(null,i))||(e.exports=o)},IBem:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("lRq4"),r("YaB4"),r("NfUe"),r("Rt18"),r("iHXi"),r("IYkq")],void 0===(o=(function(e,t,r,i,o,a,n,s,l,u){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.install=function(e){var t=new u.WGLFeatureView(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)},t.prototype.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.destroy()},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},t.prototype.onConfigUpdate=function(e){var t=null;if("visualVariables"in e){var r=(n.simplifyVVRenderer(e).visualVariables||[]).map((function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=l.convertVisualVariables(r)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()},t.prototype.onTileError=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)},t.prototype.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()},t.prototype.lockAttributeTextureUpload=function(){this.featuresView.attributeView.lockTextureUpload()},t.prototype.unlockAttributeTextureUpload=function(){this.featuresView.attributeView.unlockTextureUpload()},t.prototype.getMaterialItems=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){return[2,this.featuresView.getMaterialItems(e)]}))}))},t.prototype.invalidateLabels=function(){this.featuresView.hasLabels&&(this.tiles.forEach((function(e){return e.isDirty=!0})),this.layerView.view.labelManager.requestUpdate())},t.prototype.createTile=function(e){var t=this.tileInfoView.getTileBounds(o.create(),e),r=new a.WGLTile(e,t);return this.featuresView.hasLabels&&this.layerView.view.labelManager.addTile(this.layerView,r),r},t.prototype.disposeTile=function(e){this.featuresView.removeChild(e),this.featuresView.hasLabels&&this.layerView.view.labelManager.removeTile(this.layerView,e.key.id),e.destroy(),this.layerView.view.labelManager.requestUpdate()},r.__decorate([i.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],t)}(s.default);t.default=p}).apply(null,i))||(e.exports=o)},IYkq:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("qMld"),r("YaB4"),r("N0+q"),r("JNkf")],void 0===(o=(function(e,t,r,i,o,a,n){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t,r,i){var o=e.call(this,t)||this;return o._pointToCallbacks=new Map,o._layer=i,o._layerView=r,o}return r.__extends(t,e),t.prototype.renderChildren=function(t){this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView),e.prototype.renderChildren.call(this,t)},t.prototype.hitTest=function(e,t){var r=[e,t],o=i.createResolver();return this._pointToCallbacks.set(r,o),this.requestRender(),o.promise},t.prototype.doRender=function(t){var r=this._layer,i=t.state.scale;i<=(r.minScale||1/0)&&i>=r.maxScale&&e.prototype.doRender.call(this,t)},Object.defineProperty(t.prototype,"hasAnimation",{get:function(){return this.hasLabels},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasLabels",{get:function(){var e=this._layer.featureReduction;return!!(this._layer.labelingInfo&&this._layer.labelingInfo.length||e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelsVisible",{get:function(){return this._layer.labelsVisible},enumerable:!0,configurable:!0}),t.prototype.prepareRenderPasses=function(t){var i=this,a=t.registerRenderPass({name:"label",brushes:[o.brushes.Label],target:function(){return i._layer.labelsVisible?i.children:null},drawPhase:n.WGLDrawPhase.LABEL|n.WGLDrawPhase.LABEL_ALPHA}),s=t.registerRenderPass({name:"geometry",brushes:[o.brushes.Fill,o.brushes.Line,o.brushes.Marker,o.brushes.Text],target:function(){return i.children},effects:[{apply:t.effects.highlight,enable:function(){return!!i._layerView.hasHighlight()}},{apply:t.effects.hittest,enable:function(){return!!i._pointToCallbacks.size},args:function(){return i._pointToCallbacks}}]});return r.__spreadArrays(e.prototype.prepareRenderPasses.call(this,t),[s,a])},t}(a.FeatureContainer);t.WGLFeatureView=s}).apply(null,i))||(e.exports=o)},"N0+q":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("qMld"),r("qMld"),r("lRq4"),r("YaB4")],void 0===(o=(function(e,t,r,i,o,a,n){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var r=e.call(this,t)||this;return r._rendererInfo=new n.WGLRendererInfo,r._attachedResolver=i.createResolver(),r.attributeView=new n.AttributeStoreView,r}return r.__extends(t,e),t.prototype.destroy=function(){this.removeAllChildren(),this.children.forEach((function(e){return e.destroy()})),this.attributeView.destroy()},t.prototype.whenAttached=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,this._attachedResolver.promise];case 1:return e.sent(),[2]}}))}))},t.prototype.setRendererInfo=function(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender()},t.prototype.getMaterialItems=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,a;return r.__generator(this,(function(r){switch(r.label){case 0:return e&&0!==e.length?[4,this.whenAttached()]:[2,null];case 1:return r.sent(),i=this.stage.painter.textureManager,a=e.map((function(e){return i.rasterizeItem(e.symbol,e.glyphIds,t)})),[4,o.all(a)];case 2:return[2,r.sent().map((function(t,r){return{id:e[r].id,mosaicItem:t}}))]}}))}))},t.prototype.onTileData=function(e,t){if(t.addOrUpdate&&"tileDisplayData"in t.addOrUpdate)e.setData(t,this.hasLabels,this.labelsVisible);else{var i=t.addOrUpdate&&n.TileData.decode(t.addOrUpdate),o=r.__assign(r.__assign({},t),{addOrUpdate:i});e.setData(o,this.hasLabels,this.labelsVisible)}this.contains(e)||this.addChild(e),this.requestRender()},t.prototype.onTileError=function(e){e.clear(),this.contains(e)||this.addChild(e)},t.prototype.renderChildren=function(t){this._rendererInfo.update(t.state),this.attributeView.bindTextures(this.stage.context),e.prototype.renderChildren.call(this,t)},t.prototype.createTile=function(e){var t=this._tileInfoView.getTileBounds(a.create(),e);return new n.WGLTile(e,t)},t.prototype.destroyTile=function(e){this.removeChild(e),e.destroy()},t.prototype.createRenderParams=function(t){return r.__assign(r.__assign({},e.prototype.createRenderParams.call(this,t)),{rendererInfo:this._rendererInfo,attributeView:this.attributeView})},t.prototype.onAttach=function(){e.prototype.onAttach.call(this),this._attachedResolver()},t.prototype.onDetach=function(){e.prototype.onDetach.call(this),this._attachedResolver=i.createResolver()},t}(n.TileContainer);t.FeatureContainer=s}).apply(null,i))||(e.exports=o)},iHXi:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("jBNx"),r("YaB4"),r("tI6k"),r("3w6h")],void 0===(o=(function(e,t,r,i,o,a,n){Object.defineProperty(t,"__esModule",{value:!0});var s=o.enums.WGLVVFlag;function l(e){return{value:e.value,size:i.toPt(e.size)}}function u(e){return e.map((function(e){return l(e)}))}function p(e){return"string"==typeof e||"number"==typeof e?i.toPt(e):{type:"size",expression:e.expression,stops:u(e.stops)}}t.getVisualVariableSizeValueRepresentationRatio=function(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e},t.stopToSizeStop=l,t.normalizeSizeStops=u,t.normalizeSizeElement=p,t.getVisualVariablesFields=function(e){var t=e&&e.length>0?{}:null;return t&&e.forEach((function(e){e.field&&(t[e.type]=e.field)})),t};var c=function(e){for(var t=[],r=[],o=u(e),n=o.length,s=0;s<6;s++){var l=o[Math.min(s,n-1)];t.push(l.value),r.push(null==l.size?a.NAN_MAGIC_NUMBER:i.pt2px(l.size))}return{values:new Float32Array(t),sizes:new Float32Array(r)}};function f(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(o.Utils.isString(e.field)){if(!e.stops)return null;if(e.stops.length>8)return null;for(var r=e.stops,i=0;i<8;++i){var a=r[Math.min(i,r.length-1)];t.values[i]=a.value,t.opacities[i]=a.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;var n=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(i=0;i<8;i++)t.values[i]=1/0,t.opacities[i]=n}return t}t.convertVisualVariables=function(e){var t=e&&e.length>0?{}:null,i=t?{}:null;if(!t)return{vvFields:t,vvRanges:i};for(var a=0,l=e;a<l.length;a++){var d=l[a],v=d.type;if(d.field&&(t[v]=d.field),"size"===v){i.size||(i.size={});var _=d;switch(o.getTypeOfSizeVisualVariable(_)){case s.SIZE_MINMAX_VALUE:i.size.minMaxValue={minDataValue:_.minDataValue,maxDataValue:_.maxDataValue,minSize:p(_.minSize),maxSize:p(_.maxSize)};break;case s.SIZE_SCALE_STOPS:i.size.scaleStops={stops:u(_.stops)};break;case s.SIZE_FIELD_STOPS:if(_.levels){var y={};for(var h in _.levels)y[h]=c(_.levels[h]);i.size.fieldStops={type:"level-dependent",levels:y}}else i.size.fieldStops=r.__assign({type:"static"},c(_.stops));break;case s.SIZE_UNIT_VALUE:i.size.unitValue={unit:_.valueUnit,valueRepresentation:_.valueRepresentation}}}else if("color"===v){var S=n.convertVisualVariables([d],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});if(!S)continue;i.color=S.color;for(var E=0;E<32;E+=4)o.color.premultiplyAlpha(i.color.colors,E,!0)}else"opacity"===v?i.opacity=f(d):"rotation"===v&&(i.rotation={type:d.rotationType})}return{vvFields:t,vvRanges:i}}}).apply(null,i))||(e.exports=o)}}]);