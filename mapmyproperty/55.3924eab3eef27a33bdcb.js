(function(){var e={"esri/views/2d/engine/webgl/util/Writer":"3vQA","arcgis-js-api/views/2d/engine/webgl/util/Writer":"3vQA","esri/views/2d/engine/webgl/util/Reader":"Ed/z","arcgis-js-api/views/2d/layers/features/tileRenderers/SymbolTileRenderer":"IBem","arcgis-js-api/views/2d/layers/features/tileRenderers/support/WGLFeatureView":"IYkq","arcgis-js-api/views/2d/engine/webgl/WGLDisplayObject":"azm3","esri/views/2d/engine/webgl/WGLDisplayObject":"azm3","esri/views/2d/engine/webgl/mesh/MeshData":"cF6f","arcgis-js-api/views/2d/engine/webgl/mesh/MeshData":"cF6f","esri/views/2d/engine/webgl/collisions/Metric":"fVTS","arcgis-js-api/views/2d/engine/webgl/collisions/Metric":"fVTS","esri/views/2d/engine/webgl/util/serializationUtils":"flWe","arcgis-js-api/views/2d/engine/webgl/util/serializationUtils":"flWe","esri/views/2d/engine/webgl/WGLDisplayRecord":"hNI9","arcgis-js-api/views/2d/engine/webgl/WGLDisplayRecord":"hNI9","arcgis-js-api/views/2d/engine/webgl/mesh/VertexBuffer":"ph8t","arcgis-js-api/views/2d/engine/webgl/MeshData":"yai7"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"3vQA":function(e,t,i){var r,s;r=[i.dj.c(e.i),t],void 0===(s=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this._pos=0;var i=t?this._roundToNearest(t,e.BYTES_PER_ELEMENT):40;this._array=new ArrayBuffer(i),this._buffer=new e(this._array),this._ctor=e}return Object.defineProperty(e.prototype,"length",{get:function(){return this._pos},enumerable:!1,configurable:!0}),e.prototype._roundToNearest=function(e,t){var i=Math.round(e);return i+(t-i%t)},e.prototype._ensureSize=function(e){if(this._pos+e>=this._buffer.length){var t=this._roundToNearest(1.5*(this._array.byteLength+e*this._buffer.BYTES_PER_ELEMENT),this._buffer.BYTES_PER_ELEMENT),i=new ArrayBuffer(t),r=new this._ctor(i);r.set(this._buffer,0),this._array=i,this._buffer=r}},e.prototype.writeF32=function(e){this._ensureSize(1);var t=this._pos;return new Float32Array(this._array,4*this._pos,1)[0]=e,this._pos++,t},e.prototype.push=function(e){this._ensureSize(1);var t=this._pos;return this._buffer[this._pos++]=e,t},e.prototype.writeFixed=function(e){this._buffer[this._pos++]=e},e.prototype.setValue=function(e,t){this._buffer[e]=t},e.prototype.getValue=function(e){return this._buffer[e]},e.prototype.incr=function(e){this._buffer[e]++},e.prototype.decr=function(e){this._buffer[e]--},e.prototype.writeRegion=function(e){this._ensureSize(e.length);var t=this._pos;return this._buffer.set(e,this._pos),this._pos+=e.length,t},e.prototype.buffer=function(){var e=this._array.slice(0,4*this._pos);return this.destroy(),e},e.prototype.toArray=function(){for(var e=this._array,t=[],i=0;i<e.byteLength/4;i++)t.push(e[i]);return t},e.prototype.seek=function(e){this._pos=e},e.prototype.destroy=function(){this._array=null,this._buffer=null},e}();t.default=i}).apply(null,r))||(e.exports=s)},"Ed/z":function(e,t,i){var r,s;r=[i.dj.c(e.i),t],void 0===(s=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this._pos=0,this._buffer=e,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer)}return e.prototype.readInt32=function(){return this._i32View[this._pos++]},e.prototype.readF32=function(){return this._f32View[this._pos++]},e}();t.default=i}).apply(null,r))||(e.exports=s)},IBem:function(e,t,i){var r,s;r=[i.dj.c(e.i),t,i("zOht"),i("H1tY"),i("Vx27"),i("lRq4"),i("AP+j"),i("NfUe"),i("Rt18"),i("iHXi"),i("IYkq")],void 0===(s=(function(e,t,i,r,s,n,o,a,u,h,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.install=function(e){var t=new l.WGLFeatureView(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)},t.prototype.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.destroy()},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},t.prototype.onConfigUpdate=function(e){var t=null;if("visualVariables"in e){var i=(a.simplifyVVRenderer(e).visualVariables||[]).map((function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=h.convertVisualVariables(i)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()},t.prototype.onTileError=function(e){var t=this.tiles.get(e.tileKey);r("esri-2d-debug")&&console.debug(e.tileKey,e.error),t&&this.featuresView.onTileError(t)},t.prototype.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()},t.prototype.lockGPUUploads=function(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((function(e){return e.lockUploads()}))},t.prototype.unlockGPUUploads=function(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((function(e){return e.unlockUploads()}))},t.prototype.getMaterialItems=function(e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){return[2,this.featuresView.getMaterialItems(e)]}))}))},t.prototype.invalidateLabels=function(){this.featuresView.hasLabels&&(this.tiles.forEach((function(e){return e.isDirty=!0})),this.layerView.view.labelManager.requestUpdate())},t.prototype.createTile=function(e){var t=this.tileInfoView.getTileBounds(n.create(),e),i=new o.WGLTile(e,t);return this.featuresView.hasLabels&&this.layerView.view.labelManager.addTile(this.layerView,i),i},t.prototype.disposeTile=function(e){this.featuresView.removeChild(e),this.featuresView.hasLabels&&this.layerView.view.labelManager.removeTile(this.layerView,e.key.id),e.destroy(),this.layerView.view.labelManager.requestUpdate()},i.__decorate([s.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],t)}(u.default);t.default=f}).apply(null,r))||(e.exports=s)},IYkq:function(e,t,i){var r,s;r=[i.dj.c(e.i),t,i("zOht"),i("qMld"),i("itWS"),i("N0+q"),i("JNkf")],void 0===(s=(function(e,t,i,r,s,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WGLFeatureView=void 0;var a=function(e){function t(t,i,r){var s=e.call(this,t)||this;return s._pointToCallbacks=new Map,s._layer=r,s._layerView=i,s}return i.__extends(t,e),t.prototype.renderChildren=function(t){this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView),e.prototype.renderChildren.call(this,t)},t.prototype.hitTest=function(e,t){var i=[e,t],s=r.createResolver();return this._pointToCallbacks.set(i,s),this.requestRender(),s.promise},t.prototype.doRender=function(t){var i=this._layer,r=t.state.scale;r<=(i.minScale||1/0)&&r>=i.maxScale&&e.prototype.doRender.call(this,t)},Object.defineProperty(t.prototype,"hasAnimation",{get:function(){return this.hasLabels},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasLabels",{get:function(){var e=this._layer.featureReduction;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!(e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelsVisible",{get:function(){return this._layer.labelsVisible},enumerable:!1,configurable:!0}),t.prototype.prepareRenderPasses=function(t){var r=this,n=t.registerRenderPass({name:"label",brushes:[s.brushes.label],target:function(){return r.hasLabels?r.children:null},drawPhase:o.WGLDrawPhase.LABEL|o.WGLDrawPhase.LABEL_ALPHA}),a=t.registerRenderPass({name:"geometry",brushes:[s.brushes.fill,s.brushes.line,s.brushes.marker,s.brushes.text],target:function(){return r.children},effects:[{apply:t.effects.highlight,enable:function(){return!!r._layerView.hasHighlight()}},{apply:t.effects.hittest,enable:function(){return!!r._pointToCallbacks.size},args:function(){return r._pointToCallbacks}}]});return i.__spreadArrays(e.prototype.prepareRenderPasses.call(this,t),[a,n])},t}(n.FeatureContainer);t.WGLFeatureView=a}).apply(null,r))||(e.exports=s)},azm3:function(e,t,i){var r,s;r=[i.dj.c(e.i),t,i("hNI9"),i("fVTS"),i("flWe")],void 0===(s=(function(e,t,i,r,s){"use strict";return function(){function e(e){this.insertAfter=null,this.id=e,this.displayRecords=[],this.metrics=[]}return e.prototype.copy=function(){var t=new e(this.id);return t.set(this),t},e.prototype.clone=function(){var t=new e(this.id);return t.displayRecords=this.displayRecords.map((function(e){return e.clone()})),t.metrics=this.metrics.map((function(e){return e.clone()})),t.insertAfter=this.insertAfter,t},e.prototype.set=function(e){this.id=e.id,this.displayRecords=e.displayRecords,this.metrics=e.metrics,this.insertAfter=e.insertAfter},e.prototype.serialize=function(e){return e.push(this.id),s.serializeList(e,this.metrics),s.serializeList(e,this.displayRecords),e},e.deserialize=function(t){var n=t.readInt32(),o=new e(n),a={id:n},u=s.deserializeList(t,r.default);return u.length&&(o.metrics=u),o.displayRecords=s.deserializeList(t,i,a),o},e}()}).apply(null,r))||(e.exports=s)},cF6f:function(e,t,i){var r,s;r=[i.dj.c(e.i),t,i("azm3"),i("hNI9"),i("fVTS"),i("Ed/z"),i("flWe"),i("3vQA")],void 0===(s=(function(e,t,i,r,s,n,o,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MeshData=void 0;var u=function(){function e(e,t){this.vertexVectorsMap=e,this._currentIndex=-1,this._currentRecordOffset=0,this._currentMetricOffset=0;var i=4*(8*t.records+1),r=4*(20*t.metrics+1);this._bufDisplayObjects=new a.default(Uint32Array,4*(4*t.features+1)+4),this._bufDisplayRecords=new a.default(Uint32Array,i+4),this._bufMetrics=new a.default(Uint32Array,r+4),this._bufDisplayObjects.push(0),this._bufDisplayRecords.push(0),this._bufMetrics.push(0)}return Object.defineProperty(e.prototype,"vertexBuffersMap",{get:function(){if(!this._vertexBuffersMap){this._vertexBuffersMap={};for(var e=0;e<this.vertexVectorsMap.length;e++)this._vertexBuffersMap[e]=this.vertexVectorsMap[e].intoBuffers();this.vertexVectorsMap=null}return this._vertexBuffersMap},enumerable:!1,configurable:!0}),e.prototype.get=function(e){return this.vertexVectorsMap[e]},e.prototype.currentDisplayRecordCount=function(){return this._bufDisplayRecords[this._currentRecordOffset]},e.prototype.writeDisplayObject=function(e,t){this._bufDisplayObjects.incr(0),this._currentIndex=this._bufDisplayObjects.push(e),this._bufDisplayObjects.push(t),this._bufDisplayObjects.push(0),this._bufDisplayObjects.push(0),this._currentRecordOffset=0,this._currentMetricOffset=0},e.prototype.hasDisplayRecords=function(){return!(0===this._currentRecordOffset)},e.prototype.endDisplayObject=function(){this.hasDisplayRecords()||this._rollbackDisplayObject()},e.prototype.writeDisplayRecord=function(e,t,i,r,s,n,o,a){void 0===o&&(o=0),void 0===a&&(a=0),0===this._currentRecordOffset&&(this._currentRecordOffset=this._bufDisplayRecords.push(0),this._bufDisplayObjects.setValue(this._currentIndex+2,this._currentRecordOffset)),this._bufDisplayRecords.incr(this._currentRecordOffset),this._bufDisplayRecords.push(e),this._bufDisplayRecords.push(t),this._bufDisplayRecords.push(i),this._bufDisplayRecords.push(r),this._bufDisplayRecords.push(s),this._bufDisplayRecords.push(n),this._bufDisplayRecords.push(o),this._bufDisplayRecords.push(a)},e.prototype.writeMetrics=function(e){0===this._currentMetricOffset&&(this._bufDisplayObjects.setValue(this._currentIndex+3,this._bufMetrics.length),this._currentMetricOffset=this._bufMetrics.length),o.serializeList(this._bufMetrics,e)},e.deserializeDisplayObjects=function(e){var t=e.bufMetrics,a=e.bufRecords,u=new n.default(e.bufDisplayObjects),h=new n.default(a),l=new n.default(t),f=[],c=u.readInt32();for(h.readInt32(),l.readInt32();c--;){var p=u.readInt32(),d=u.readInt32(),y=u.readInt32(),b=u.readInt32(),v=new i(p);0!==d&&(v.insertAfter=d),0!==y&&(v.displayRecords=o.deserializeList(h,r,{id:p})),0!==b&&(v.metrics=o.deserializeList(l,s.default)),f.push(v)}return f},e.prototype.encode=function(e,t){for(var i={},r=0;r<this.vertexVectorsMap.length;r++){var s=this.vertexVectorsMap[r];i[r]={},s.transfer(i[r],t)}e.bufDisplayObjects=this._bufDisplayObjects.buffer(),e.bufRecords=this._bufDisplayRecords.buffer(),e.bufMetrics=this._bufMetrics.buffer(),t.push(e.bufDisplayObjects),t.push(e.bufMetrics),t.push(e.bufRecords),e.vertexBuffersMap=i,this.destroy()},e.prototype.destroy=function(){this.vertexVectorsMap=null,this._bufDisplayObjects=null,this._bufDisplayRecords=null,this._bufMetrics=null},e.prototype._rollbackDisplayObject=function(){this._bufDisplayObjects.decr(0),this._bufDisplayObjects.seek(this._bufDisplayObjects.length-4),this._currentIndex=this._bufDisplayObjects.length},e}();t.MeshData=u}).apply(null,r))||(e.exports=s)},fVTS:function(e,t,i){var r,s;r=[i.dj.c(e.i),t,i("qsST"),i("ab6c"),i("tI6k"),i("x84Q"),i("flWe")],void 0===(s=(function(e,t,i,r,s,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i.getLogger("esri/views/2d/engine/webgl/collisions/Metric"),u=function(){function e(e,t,i,s,n){this.id=e,this.range=t,this.boxes=null,this.minZoom=-1,this.size=0,this.directionX=0,this.directionY=0,this.offsetX=0,this.offsetY=0,this.placementPadding=0,this.anchor=r.vec2f32.fromValues(i,s),this.baseZoom=n}return e.prototype.add=function(e,t,i){e.x=e.x+t,e.y=e.y+i,this.bounds?this.boxes?(this.boxes.push(e),this.bounds.extend(e)):(this.boxes=[this.bounds,e],this.bounds=this.bounds.clone(),this.bounds.extend(e)):this.bounds=e},e.prototype.computeIndex=function(){var e=this.anchor[1],t=Math.floor(this.anchor[0]/s.COLLISION_BUCKET_SIZE),i=Math.floor(e/s.COLLISION_BUCKET_SIZE);this.xBucket=t,this.yBucket=i;var r=s.TILE_SIZE/s.COLLISION_BUCKET_SIZE;if(this.hasVV)return this.xOverflow=r,void(this.yOverflow=r);this.xOverflow=Math.min(r,Math.ceil(2*this.bounds.width/s.COLLISION_BUCKET_SIZE)),this.yOverflow=Math.min(r,Math.ceil(2*this.bounds.height/s.COLLISION_BUCKET_SIZE))},e.prototype.findCollisionDelta=function(e){var t=this.bounds.findCollisionDelta(e.bounds),i=this.boxes&&this.boxes.length,r=e.boxes&&e.boxes.length;return Math.abs(t)>s.COLLISION_MAX_ZOOM_DELTA||!i&&!r?t:i&&r?this._boxesToBoxes(e):i?this._boxesToBox(e):this._boxToBoxes(e)},e.prototype.computeVVOffset=function(e,t){t||a.error("mapview-labeling","Unable to compute label offset. Expected an evaluator function but found "+t);var i=this.size;if(this.hasVV){var r=t(e);i=isNaN(r)||null==r||r===1/0?this.size:r}this._computeOffset(i)},e.prototype.setPlacementOffset=function(e,t,i,r,s){this.hasVV=e,this.size=t,this.placementPadding=Math.round(i),this.directionX=r,this.directionY=s},e.prototype.clone=function(){var t=new e(this.id,this.range,this.anchor[0],this.anchor[1],this.baseZoom);return t.minZoom=this.minZoom,this.bounds&&(t.bounds=this.bounds.clone()),this.boxes&&(t.boxes=this.boxes.map((function(e){return e.clone()}))),t.xBucket=this.xBucket,t.yBucket=this.yBucket,t.xOverflow=this.xOverflow,t.yOverflow=this.yOverflow,t.hasVV=this.hasVV,t.size=this.size,t.directionX=this.directionX,t.directionY=this.directionY,t.offsetX=this.offsetX,t.offsetY=this.offsetY,t},e.prototype._boxToBoxes=function(e){for(var t=-1/0,i=0,r=e.boxes;i<r.length;i++){var s=this.bounds.findCollisionDelta(r[i]);t=Math.max(s,t)}return t},e.prototype._boxesToBox=function(e){for(var t=this.boxes[0].findCollisionDelta(e.bounds),i=1;i<this.boxes.length;i++){var r=this.boxes[i].findCollisionDelta(e.bounds);t=Math.max(r,t)}return t},e.prototype._boxesToBoxes=function(e){for(var t=-1/0,i=0;i<this.boxes.length;i++)for(var r=this.boxes[i],s=0,n=e.boxes;s<n.length;s++){var o=r.findCollisionDelta(n[s]);t=Math.max(o,t)}return t},e.prototype._computeOffset=function(e){this.offsetX=this.directionX*(e/2+this.placementPadding),this.offsetY=this.directionY*(e/2+this.placementPadding)},e.prototype.serialize=function(e){return e.push(this.id),this.bounds.serialize(e),e.push(this.range.from),e.push(this.range.count),e.push(this.anchor[0]),e.push(this.anchor[1]),e.push(this.baseZoom),e.push(this.hasVV?1:0),e.push(this.size),e.writeF32(this.directionX),e.writeF32(this.directionY),e.push(this.offsetX),e.push(this.offsetY),e.push(this.placementPadding),o.serializeList(e,this.boxes),e},e.deserialize=function(t){var i=t.readInt32(),r=n.default.deserialize(t),s={from:t.readInt32(),count:t.readInt32()},a=t.readInt32(),u=t.readInt32(),h=t.readInt32(),l=t.readInt32(),f=t.readInt32(),c=t.readF32(),p=t.readF32(),d=t.readInt32(),y=t.readInt32(),b=t.readInt32(),v=o.deserializeList(t,n.default),_=new e(i,s,a,u,h);return _.bounds=r,_.boxes=v,_.setPlacementOffset(!!l,f,b,c,p),_.offsetX=d,_.offsetY=y,_.computeIndex(),l||_._computeOffset(f),_},e}();t.default=u}).apply(null,r))||(e.exports=s)},flWe:function(e,t,i){var r,s;r=[i.dj.c(e.i),t],void 0===(s=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deserializeList=t.serializeList=void 0,t.serializeList=function(e,t){if(null!==t){e.push(t.length);for(var i=0,r=t;i<r.length;i++)r[i].serialize(e);return e}e.push(0)},t.deserializeList=function(e,t,i){for(var r=e.readInt32(),s=new Array(r),n=0;n<s.length;n++)s[n]=t.deserialize(e,i);return s}}).apply(null,r))||(e.exports=s)},hNI9:function(e,t,i){var r,s;r=[i.dj.c(e.i),t,i("yai7"),i("apbF")],void 0===(s=(function(e,t,i,r){"use strict";return function(){function e(e,t,i,r,s){void 0===r&&(r=0),void 0===s&&(s=0),this.id=e,this.geometryType=t,this.materialKey=i,this.minZoom=r,this.maxZoom=s,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}return Object.defineProperty(e.prototype,"sortKey",{get:function(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return this.copy()},e.prototype.copy=function(){var t=new e(this.id,this.geometryType,this.materialKey);return t.vertexFrom=this.vertexFrom,t.vertexCount=this.vertexCount,t.indexFrom=this.indexFrom,t.indexCount=this.indexCount,t.zOrder=this.zOrder,t.symbolLevel=this.symbolLevel,t.meshData=this.meshData,t.minZoom=this.minZoom,t.maxZoom=this.maxZoom,t},e.prototype.setMeshDataFromBuffers=function(e,t,s){var n=new i;for(var o in t){for(var a=t[o].stride,u=t[o].data,h=[],l=r.strideToPackingFactor(a),f=0;f<a*e.vertexCount/l;++f)h[f]=u[f+a*e.vertexFrom/l];n.vertexData.set(o,h)}for(n.indexData.length=0,f=0;f<e.indexCount;++f)n.indexData[f]=s[f+e.indexFrom]-e.vertexFrom;n.vertexCount=e.vertexCount,this.meshData=n},e.prototype.readMeshDataFromBuffers=function(e,t){for(var s in this.meshData?this.meshData.clear():this.meshData=new i,e){for(var n=e[s].stride,o=e[s].data,a=[],u=r.strideToPackingFactor(n),h=0;h<n*this.vertexCount/u;++h)a[h]=o[h+n*this.vertexFrom/u];this.meshData.vertexData.set(s,a)}for(this.meshData.indexData.length=0,h=0;h<this.indexCount;++h)this.meshData.indexData[h]=t[h+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount},e.prototype.writeMeshDataToBuffers=function(e,t,i,s){for(var n in t)for(var o=t[n].stride,a=this.meshData.vertexData.get(n),u=t[n].data,h=r.strideToPackingFactor(o),l=0;l<o*this.meshData.vertexCount/h;++l)u[l+o*e/h]=a[l];for(l=0;l<this.meshData.indexData.length;++l)s[l+i]=this.meshData.indexData[l]+e;this.vertexFrom=e,this.vertexCount=this.meshData.vertexCount,this.indexFrom=i,this.indexCount=this.meshData.indexData.length},e.writeAllMeshDataToBuffers=function(e,t,i){for(var r=0,s=0,n=0,o=e;n<o.length;n++){var a=o[n];a.writeMeshDataToBuffers(r,t,s,i),r+=a.vertexCount,s+=a.indexCount}},e.prototype._computeSortKey=function(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType},e.prototype.serialize=function(e){return e.push(this.geometryType),e.push(this.materialKey),e.push(this.vertexFrom),e.push(this.vertexCount),e.push(this.indexFrom),e.push(this.indexCount),e.push(this.minZoom),e.push(this.maxZoom),e},e.deserialize=function(t,i){var r=t.readInt32(),s=t.readInt32(),n=new e(i.id,r,s);return n.vertexFrom=t.readInt32(),n.vertexCount=t.readInt32(),n.indexFrom=t.readInt32(),n.indexCount=t.readInt32(),n.minZoom=t.readInt32(),n.maxZoom=t.readInt32(),n},e}()}).apply(null,r))||(e.exports=s)},ph8t:function(e,t,i){var r,s;r=[i.dj.c(e.i),t,i("apbF")],void 0===(s=(function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VertexBuffers=void 0;var r=function(){function e(e,t,i){this.data=e,this.stride=t,this.vertexCount=i}return e.decode=function(t){return new e(i.allocateTypedArrayBufferwithData(t.data,t.stride),t.stride,t.vertexCount)},e.fromVertexVector=function(t){return new e(i.allocateTypedArrayBufferwithData(t.data.buffer(),t.stride),t.stride,t.vertexCount)},e}();t.default=r;var s=function(){function e(e,t,i){this.geometryType=e,this.indexBuffer=new Uint32Array(t),this.namedBuffers=i}return e.decode=function(t){var i=t.geometryType,s=t.indexBuffer,n={};for(var o in t.namedBuffers)n[o]=r.decode(t.namedBuffers[o]);return new e(i,s,n)},e.fromVertexVectors=function(t){var i=t.geometryType,s=t.indexVector.buffer(),n={};for(var o in t.namedVectors)n[o]=r.fromVertexVector(t.namedVectors[o]);return new e(i,s,n)},e}();t.VertexBuffers=s}).apply(null,r))||(e.exports=s)},yai7:function(e,t,i){var r,s;r=[i.dj.c(e.i),t],void 0===(s=(function(e,t){"use strict";return function(){function e(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}return e.prototype.clear=function(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]},e.prototype.update=function(e,t,i){for(var r in e)this.vertexData.set(r,e[r]);for(var r in this.vertexData)null===e[r]&&this.vertexData.delete(r);this.vertexCount=t,this.indexData=i},e}()}).apply(null,r))||(e.exports=s)}}]);