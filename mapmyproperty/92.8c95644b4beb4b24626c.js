(function(){var e={"esri/libs/i3s/I3SWorker":"2yzH","esri/views/3d/layers/SceneLayerWorker":"3sea"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"2yzH":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("KFwS"),r("H1tY"),r("qMld"),r("2Kdy")],void 0===(i=(function(e,t,n,i,o){"use strict";function s(e){return n.getAssetUrl("esri/libs/i3s/"+e)}var a;Object.defineProperty(t,"__esModule",{value:!0}),t.getWorkerModule=void 0,t.getWorkerModule=function(){if(!a){var e=i("esri-wasm")?new Promise((function(e,t){r.e(159).then((function(){var t=[r("zBD6")];e.apply(null,t)}).bind(this)).catch(t.bind(this))})):new Promise((function(e,t){r.e(83).then((function(){var t=[r("2N0j")];e.apply(null,t)}).bind(this)).catch(t.bind(this))}));a=o.create((function(t){return e.then((function(e){var r=e({locateFile:s,onRuntimeInitialized:function(){return t(r)}});delete r.then}))})).catch((function(e){return o.reject(e)}))}return a}}).apply(null,n))||(e.exports=i)},"3sea":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("LxLY"),r("qMld"),r("rusB"),r("2yzH")],void 0===(i=(function(e,t,r,n,i,o,s){"use strict";var a,u;function f(e){for(var t=e.modifications,r=u._malloc(8*t.length),n=new Float64Array(u.HEAPU8.buffer,r,t.length),i=0;i<t.length;++i)n[i]=t[i];u.setModifications(e.context,r,t.length,e.isGeodetic),u._free(r)}function c(e,t){if(!u)return null;var r=e.context,i=e.localOrigin,s=e.globalTrafo,a=e.mbs,f=e.obb,c=e.elevationOffset,l=e.geometryBuffer,d=e.geometryDescriptor,y=e.indexToVertexProjector,h=e.vertexToRenderProjector,p=u._malloc(l.byteLength),m=u._malloc(33*Float64Array.BYTES_PER_ELEMENT),v=new Uint8Array(u.HEAPU8.buffer,p,l.byteLength);v.set(new Uint8Array(l));var _=new Float64Array(u.HEAPU8.buffer,m,33);b(_,i);var g=_.byteOffset+3*_.BYTES_PER_ELEMENT,w=new Float64Array(_.buffer,g);b(w,s),g+=16*_.BYTES_PER_ELEMENT,b(w=new Float64Array(_.buffer,g),a),g+=4*_.BYTES_PER_ELEMENT,n.isSome(f)&&(b(w=new Float64Array(_.buffer,g),f.center),g+=3*_.BYTES_PER_ELEMENT,b(w=new Float64Array(_.buffer,g),f.halfSize),g+=3*_.BYTES_PER_ELEMENT,b(w=new Float64Array(_.buffer,g),f.quaternion));var E=d,M={isDraco:!1,isLegacy:!1,color:e.layouts.some((function(e){return e.some((function(e){return"color"===e.name}))})),normal:e.needNormals&&e.layouts.some((function(e){return e.some((function(e){return"normalCompressed"===e.name}))})),uv0:e.layouts.some((function(e){return e.some((function(e){return"uv0"===e.name}))})),uvRegion:e.layouts.some((function(e){return e.some((function(e){return"uvRegion"===e.name}))})),featureIndex:E.featureIndex},A=u.process(r,!!e.obb,p,v.byteLength,E,M,m,c,y,h,e.normalReferenceFrame);if(u._free(m),u._free(p),A.error.length>0)throw"i3s.wasm: "+A.error;if(A.discarded)return null;var L=A.componentOffsets.length>0?o.slice(A.componentOffsets):null,S=A.featureIds.length>0?o.slice(A.featureIds):null,P=o.slice(A.interleavedVertedData).buffer,O=o.slice(1===A.indicesType?new Uint16Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/2):new Uint32Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/4)),T=o.slice(A.positions),F=o.slice(1===A.positionIndicesType?new Uint16Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/2):new Uint32Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/4)),I={layout:e.layouts[0],interleavedVertexData:P,indices:O,hasColors:A.hasColors,hasModifications:A.hasModifications,positionData:{data:T,indices:F}};return S&&t.push(S.buffer),L&&t.push(L.buffer),t.push(P),t.push(O.buffer),t.push(T.buffer),t.push(F.buffer),{componentOffsets:L,featureIds:S,transformedGeometry:I,obb:A.obb}}function l(e){var t=e.context,r=e.buffer,n=u._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,o=new Float64Array(u.HEAPU8.buffer,n,i),s=new Float64Array(r);o.set(s),u.filterOBBs(t,n,i),s.set(o),u._free(n)}function d(e){u&&u.destroy(e)}function b(e,t){for(var r=0;r<t.length;++r)e[r]=t[r]}function y(){return u?i.resolve():(a||(a=s.getWorkerModule().then((function(e){u=e,a=null}))),a)}Object.defineProperty(t,"__esModule",{value:!0}),t.test=t.ensureWASM=t.filterObbsForModificationsSync=t.interpretObbModificationResults=t.setModificationsSync=t.destroyContext=t.setLegacySchema=t.setModifications=t.filterObbsForModifications=t.dracoDecompressPointCloudData=t.process=void 0,t.process=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,y()];case 1:return r.sent(),[2,{result:c(e,t=[e.geometryBuffer]),transferList:t}]}}))}))},t.dracoDecompressPointCloudData=function(e){var t;return r.__awaiter(this,void 0,void 0,(function(){var n,i,s,a,f,c,l,d;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,y()];case 1:if(r.sent(),n=[e.geometryBuffer],a=u._malloc(s=(i=e.geometryBuffer).byteLength),(f=new Uint8Array(u.HEAPU8.buffer,a,s)).set(new Uint8Array(i)),c=u.dracoDecompressPointCloudData(a,f.byteLength),u._free(a),c.error.length>0)throw"i3s.wasm: "+c.error;return l=(null===(t=c.featureIds)||void 0===t?void 0:t.length)>0?o.slice(c.featureIds):null,d=o.slice(c.positions),l&&n.push(l.buffer),n.push(d.buffer),[2,{result:{positions:d,featureIds:l},transferList:n}]}}))}))},t.filterObbsForModifications=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,y()];case 1:return r.sent(),l(e),[2,{result:t={buffer:e.buffer},transferList:[t.buffer]}]}}))}))},t.setModifications=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return[4,y()];case 1:return t.sent(),f(e),[2]}}))}))},t.setLegacySchema=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return[4,y()];case 1:return t.sent(),u.setLegacySchema(e.context,e.jsonSchema),[2]}}))}))},t.destroyContext=function(e){d(e)},t.setModificationsSync=f,t.interpretObbModificationResults=function(e){return 0===e?0:1===e?1:2===e?2:3},t.filterObbsForModificationsSync=l,t.ensureWASM=y,t.test={transform:c,destroy:d}}).apply(null,n))||(e.exports=i)}}]);