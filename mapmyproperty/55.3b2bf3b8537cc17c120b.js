(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/views/3d/support/buffer/InterleavedLayout":"2B1V","arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker":"8fHt","arcgis-js-api/views/3d/support/meshProcessing":"BIt0","arcgis-js-api/views/3d/support/buffer/workerHelper":"Fsr7","arcgis-js-api/views/3d/support/buffer/types":"GntT","arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters":"HSGS","arcgis-js-api/views/3d/support/buffer/internals/Vec4":"MI3s","arcgis-js-api/views/3d/support/buffer/glUtil":"MzcX","arcgis-js-api/views/3d/support/buffer/BufferView":"VfPl","arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts":"W7eI","arcgis-js-api/views/3d/support/buffer/internals/Vec2":"bduU","arcgis-js-api/views/3d/support/buffer/internals/Mat4":"fHyw","arcgis-js-api/views/3d/support/buffer/internals/Vec3":"hQPx","arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing":"kfwU","arcgis-js-api/views/3d/support/buffer/internals/Mat3":"pIuP","arcgis-js-api/views/3d/support/buffer/internals/Scalar":"zlCF"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"2B1V":function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("VfPl"),r("GntT")],void 0===(f=(function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(var r=0,n=e.fieldNames;r<n.length;r++){var f=n[r],i=e.fields.get(f);this[f]=new i.constructor(this.buffer,i.offset,this.stride)}}return Object.defineProperty(e.prototype,"stride",{get:function(){return this.layout.stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"count",{get:function(){return this.buffer.byteLength/this.stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byteLength",{get:function(){return this.buffer.byteLength},enumerable:!0,configurable:!0}),e.prototype.getField=function(e,t){var r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null},e.prototype.slice=function(t,r){return new e(this.layout,this.buffer.slice(t*this.stride,r*this.stride))},e.prototype.copyFrom=function(e,t,r,n){var f=this.stride;if(f%4==0){var i=new Uint32Array(e.buffer,t*f,n*f/4);new Uint32Array(this.buffer,r*f,n*f/4).set(i)}else i=new Uint8Array(e.buffer,t*f,n*f),new Uint8Array(this.buffer,r*f,n*f).set(i)},e}();t.InterleavedBuffer=f;var i=function(){function e(){this.stride=0,this.fields=new Map,this.fieldNames=[]}return e.prototype.vec2f=function(e,t){return this.appendField(e,r.BufferViewVec2f,t),this},e.prototype.vec2f64=function(e,t){return this.appendField(e,r.BufferViewVec2f64,t),this},e.prototype.vec3f=function(e,t){return this.appendField(e,r.BufferViewVec3f,t),this},e.prototype.vec3f64=function(e,t){return this.appendField(e,r.BufferViewVec3f64,t),this},e.prototype.vec4f=function(e,t){return this.appendField(e,r.BufferViewVec4f,t),this},e.prototype.vec4f64=function(e,t){return this.appendField(e,r.BufferViewVec4f64,t),this},e.prototype.mat3f=function(e,t){return this.appendField(e,r.BufferViewMat3f,t),this},e.prototype.mat3f64=function(e,t){return this.appendField(e,r.BufferViewMat3f64,t),this},e.prototype.mat4f=function(e,t){return this.appendField(e,r.BufferViewMat4f,t),this},e.prototype.mat4f64=function(e,t){return this.appendField(e,r.BufferViewMat4f64,t),this},e.prototype.vec4u8=function(e,t){return this.appendField(e,r.BufferViewVec4u8,t),this},e.prototype.f32=function(e,t){return this.appendField(e,r.BufferViewFloat,t),this},e.prototype.f64=function(e,t){return this.appendField(e,r.BufferViewFloat64,t),this},e.prototype.u8=function(e,t){return this.appendField(e,r.BufferViewUint8,t),this},e.prototype.u16=function(e,t){return this.appendField(e,r.BufferViewUint16,t),this},e.prototype.i8=function(e,t){return this.appendField(e,r.BufferViewInt8,t),this},e.prototype.vec2i8=function(e,t){return this.appendField(e,r.BufferViewVec2i8,t),this},e.prototype.vec2i16=function(e,t){return this.appendField(e,r.BufferViewVec2i16,t),this},e.prototype.vec2u8=function(e,t){return this.appendField(e,r.BufferViewVec2u8,t),this},e.prototype.vec4u16=function(e,t){return this.appendField(e,r.BufferViewVec4u16,t),this},e.prototype.u32=function(e,t){return this.appendField(e,r.BufferViewUint32,t),this},e.prototype.appendField=function(e,t,r){var f=t.ElementCount*n.elementTypeSize(t.ElementType);this.fields.set(e,{size:f,constructor:t,offset:this.stride,optional:r}),this.stride+=f,this.fieldNames.push(e)},e.prototype.alignTo=function(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this},e.prototype.hasField=function(e){return this.fieldNames.indexOf(e)>=0},e.prototype.createBuffer=function(e){return new f(this,e)},e.prototype.createView=function(e){return new f(this,e)},e.prototype.clone=function(){var t=new e;return t.stride=this.stride,t.fields=new Map,this.fields.forEach((function(e,r){return t.fields.set(r,e)})),t.fieldNames=this.fieldNames.slice(),t.BufferType=this.BufferType,t},e}();t.InterleavedLayout=i,t.newLayout=function(){return new i}}).apply(null,n))||(e.exports=f)},"8fHt":function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("HZ3d"),r("Q2wQ"),r("rusB"),r("jmRc"),r("BIt0"),r("Fsr7"),r("W7eI"),r("HSGS"),r("kfwU")],void 0===(f=(function(e,t,r,n,f,i,u,o,s,a,c){return function(){function e(){this.regularWriter=new a.RegularEdgeBufferWriter,this.silhouetteWriter=new a.SilhouetteEdgeBufferWriter}return e.prototype.process=function(e,t){return r(this,void 0,void 0,(function(){var r,f,i;return n(this,(function(n){switch(n.label){case 0:return t?(r=new Array,f=this.packInput(e,r),[4,t.invoke("wrappedWork",f,{transferList:r})]):[3,2];case 1:return i=n.sent(),[2,this.unpackOutput(i)];case 2:return[2,this.work(e)]}}))}))},e.prototype.wrappedWork=function(e){return r(this,void 0,void 0,(function(){var t,r,f;return n(this,(function(n){return t=this.unpackInput(e),r=this.work(t),f=new Array,this.packInputTransferables(t,f),[2,{result:this.packOutput(r,f),transferList:f}]}))}))},e.prototype.work=function(e){var t=this.extractEdgeInformation(e.data,e.skipDeduplicate,e.originalIndices);return this.regularWriter.updateSettings(e.writerSettings),this.silhouetteWriter.updateSettings(e.writerSettings),c.extractEdges(t,this.regularWriter,this.silhouetteWriter)},e.prototype.packInputTransferables=function(e,t){t.push(e.data.buffer)},e.prototype.packInput=function(e,t){this.packInputTransferables(e,t);var r={dataBuffer:e.data.buffer,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate};return e.originalIndices&&(r.originalIndicesBuffer=e.originalIndices.buffer,r.originalIndicesType=f.isUint32Array(e.originalIndices)?"Uint32Array":"Uint16Array"),r},e.prototype.unpackInput=function(e){return{data:s.EdgeInputBufferLayout.createView(e.dataBuffer),originalIndices:"Uint32Array"===e.originalIndicesType?new Uint32Array(e.originalIndicesBuffer):"Uint16Array"===e.originalIndicesType?new Uint16Array(e.originalIndicesBuffer):void 0,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}},e.prototype.packOutput=function(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:o.packInterleavedBuffer(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:o.packInterleavedBuffer(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}},e.prototype.unpackOutput=function(e){return{regular:{instancesData:o.unpackInterleavedBuffer(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:o.unpackInterleavedBuffer(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}},e.prototype.extractEdgeInformation=function(e,t,r){if(t&&r)return{faces:r,neighbors:f=u.computeNeighbors(r,e.count),vertices:e};var n=i.default(e.buffer,e.stride/4,{originalIndices:r}),f=u.computeNeighbors(n.indices,n.uniqueCount);return{faces:n.indices,neighbors:f,vertices:s.EdgeInputBufferLayout.createView(n.buffer)}},e}()}).apply(null,n))||(e.exports=f)},BIt0:function(e,t,r){var n,f;n=[r.dj.c(e.i),t],void 0===(f=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.computeNeighbors=function(e,t){for(var r=e.length/3,n=new Uint32Array(t+1),f=new Uint32Array(t+1),i=function(e,t){e<t?n[e+1]++:f[t+1]++},u=0;u<r;u++){var o=e[3*u],s=e[3*u+1],a=e[3*u+2];i(o,s),i(s,a),i(a,o)}var c=0,p=0;for(u=0;u<t;u++){var y=n[u+1],d=f[u+1];n[u+1]=c,f[u+1]=p,c+=y,p+=d}var l=new Uint32Array(6*r),h=n[t],v=function(e,t,r){if(e<t){var i=n[e+1]++;l[2*i]=t,l[2*i+1]=r}else i=f[t+1]++,l[2*h+2*i]=e,l[2*h+2*i+1]=r};for(u=0;u<r;u++)a=e[3*u+2],v(o=e[3*u],s=e[3*u+1],u),v(s,a,u),v(a,o,u);var B=function(e,t){for(var r=2*e,n=t-e,f=1;f<n;f++){for(var i=l[r+2*f],u=l[r+2*f+1],o=f-1;o>=0&&l[r+2*o]>i;o--)l[r+2*o+2]=l[r+2*o],l[r+2*o+3]=l[r+2*o+1];l[r+2*o+2]=i,l[r+2*o+3]=u}};for(u=0;u<t;u++)B(n[u],n[u+1]),B(h+f[u],h+f[u+1]);var w=new Int32Array(3*r),m=function(t,r){return t===e[3*r]?0:t===e[3*r+1]?1:t===e[3*r+2]?2:-1},g=function(e,t){var r=m(e,t);w[3*t+r]=-1},b=function(e,t,r,n){var f=m(e,t);w[3*t+f]=n;var i=m(r,n);w[3*n+i]=t};for(u=0;u<t;u++){for(var V=n[u],E=n[u+1],T=f[u],I=f[u+1];V<E&&T<I;){var S=l[2*V];S===(A=l[2*h+2*T])?(b(u,l[2*V+1],A,l[2*h+2*T+1]),V++,T++):S<A?(g(u,l[2*V+1]),V++):(g(A,l[2*h+2*T+1]),T++)}for(;V<E;)g(u,l[2*V+1]),V++;for(;T<I;){var A;g(A=l[2*h+2*T],l[2*h+2*T+1]),T++}}return w}}).apply(null,n))||(e.exports=f)},Fsr7:function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("2Atf"),r("VfPl"),r("2B1V")],void 0===(f=(function(e,t,r,n,f){function i(e){var t=new Array;return e.fields.forEach((function(e,n){var f=r({},e,{constructor:s(e.constructor)});t.push([n,f])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}function u(e){var t=f.newLayout();return t.stride=e.stride,t.fieldNames=e.fieldNames,e.fields.forEach((function(e){return t.fields.set(e[0],r({},e[1],{constructor:(n=e[1].constructor,a.get(n))}));var n})),t}Object.defineProperty(t,"__esModule",{value:!0}),t.packInterleavedBuffer=function(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:i(e.layout)}},t.unpackInterleavedBuffer=function(e){return u(e.layout).createView(e.buffer)},t.packLayout=i,t.unpackLayout=u;var o=[n.BufferViewFloat,n.BufferViewVec2f,n.BufferViewVec3f,n.BufferViewVec4f,n.BufferViewMat3f,n.BufferViewMat4f,n.BufferViewFloat64,n.BufferViewVec2f64,n.BufferViewVec3f64,n.BufferViewVec4f64,n.BufferViewMat3f64,n.BufferViewMat4f64,n.BufferViewUint8,n.BufferViewVec2u8,n.BufferViewVec3u8,n.BufferViewVec4u8,n.BufferViewUint16,n.BufferViewVec2u16,n.BufferViewVec3u16,n.BufferViewVec4u16,n.BufferViewUint32,n.BufferViewVec2u32,n.BufferViewVec3u32,n.BufferViewVec4u32,n.BufferViewInt8,n.BufferViewVec2i8,n.BufferViewVec3i8,n.BufferViewVec4i8,n.BufferViewInt16,n.BufferViewVec2i16,n.BufferViewVec3i16,n.BufferViewVec4i16,n.BufferViewInt32,n.BufferViewVec2i32,n.BufferViewVec3i32,n.BufferViewVec4i32];function s(e){return e.ElementType+"_"+e.ElementCount}var a=new Map;o.forEach((function(e){return a.set(s(e),e)}))}).apply(null,n))||(e.exports=f)},GntT:function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("pcDC")],void 0===(f=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.elementTypeSize=function(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return void r.neverReached(e)}},t.isSigned=function(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return void r.neverReached(e)}},t.isInteger=function(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return void r.neverReached(e)}},t.maximumValue=function(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return void r.neverReached(e)}}}).apply(null,n))||(e.exports=f)},HSGS:function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("2Atf"),r("xhoE"),r("4w2c"),r("0LE5"),r("Rdxj"),r("MzcX"),r("W7eI")],void 0===(f=(function(e,t,r,n,f,i,u,o,s){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.prototype.updateSettings=function(e){this.settings=e},e.prototype.write=function(e,t,r){var n=function(e){var t=c;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],y[0]=5381;for(var r=0;r<p.length;r++)y[0]=31*y[0]+p[r];return y[0]}(r);d.seed=n;var f,i,u=d.getIntRange(0,255),o=d.getIntRange(0,this.settings.variants-1),s=d.getFloat(),a=255*(.5*(i=(f=-(1-Math.min(s/.7,1))+Math.max(0,s-.7)/(1-.7))<0?-1:1,Math.pow(Math.abs(f),1.2)*i)+.5);e.position0.setVec(t,r.position0),e.position1.setVec(t,r.position1),e.componentIndex.set(t,r.componentIndex),e.variantOffset.set(t,u),e.variantStroke.set(t,o),e.variantExtension.set(t,a)},e.prototype.trim=function(e,t){return e.slice(0,t)},e}();t.CommonBufferWriter=a;var c=new Float32Array(6),p=new Uint32Array(c.buffer),y=new Uint32Array(1),d=new f,l=function(){function e(){this.commonWriter=new a}return e.prototype.updateSettings=function(e){this.commonWriter.updateSettings(e)},e.prototype.allocate=function(e){return s.RegularEdgeInstancesLayout.createBuffer(e)},e.prototype.write=function(e,t,r){this.commonWriter.write(e,t,r),i.vec3.add(v,r.faceNormal0,r.faceNormal1),i.vec3.normalize(v,v),e.normal.setVec(t,v)},e.prototype.trim=function(e,t){return this.commonWriter.trim(e,t)},e.Layout=s.RegularEdgeInstancesLayout,e.glLayout=o.glLayout(s.RegularEdgeInstancesLayout,{divisor:1}),e}();t.RegularEdgeBufferWriter=l;var h=function(){function e(){this.commonWriter=new a}return e.prototype.updateSettings=function(e){this.commonWriter.updateSettings(e)},e.prototype.allocate=function(e){return s.SilhouetteEdgeInstancesLayout.createBuffer(e)},e.prototype.write=function(e,t,r){this.commonWriter.write(e,t,r),e.normalA.setVec(t,r.faceNormal0),e.normalB.setVec(t,r.faceNormal1)},e.prototype.trim=function(e,t){return this.commonWriter.trim(e,t)},e.Layout=s.SilhouetteEdgeInstancesLayout,e.glLayout=o.glLayout(s.SilhouetteEdgeInstancesLayout,{divisor:1}),e}();t.SilhouetteEdgeBufferWriter=h;var v=u.vec3f64.create()}).apply(null,n))||(e.exports=f)},MI3s:function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("2fXB")],void 0===(f=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,r,n,f){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=4;var i=this.TypedArrayConstructor;void 0===n&&(n=4*i.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,u):new i(t,u,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec4.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2],this.typedBuffer[e*this.typedBufferStride+3])},e.prototype.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2],this.typedBuffer[e*this.typedBufferStride+3]=t[3]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.setValues=function(e,t,r,n,f){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=n,this.typedBuffer[e*this.typedBufferStride+3]=f},e.prototype.copyFrom=function(e,t,r){var n=this.typedBuffer,f=t.typedBuffer,i=e*this.typedBufferStride,u=r*t.typedBufferStride;n[i]=f[u],n[i+1]=f[u+1],n[i+2]=f[u+2],n[i+3]=f[u+3]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=4,e}();t.BufferViewVec4Impl=n}).apply(null,n))||(e.exports=f)},MzcX:function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("2Atf")],void 0===(f=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n={divisor:0};t.glLayout=function(e,t){void 0===t&&(t={}),t=r({},n,t);var i=e.stride;return e.fieldNames.filter((function(t){var r=e.fields.get(t).optional;return!(r&&r.glPadding)})).map((function(r){var n=e.fields.get(r),u=n.constructor.ElementCount,o=function(e){var t=f[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}(n.constructor.ElementType);return{name:r,stride:i,count:u,type:o,offset:n.offset,normalized:!(!n.optional||!n.optional.glNormalized),divisor:t.divisor}}))};var f={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126}}).apply(null,n))||(e.exports=f)},VfPl:function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("xhoE"),r("pIuP"),r("fHyw"),r("zlCF"),r("bduU"),r("hQPx"),r("MI3s")],void 0===(f=(function(e,t,r,n,f,i,u,o,s){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float32Array,t,r,n,f)||this;return i.elementType="f32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(i.BufferViewScalarImpl);t.BufferViewFloat=a;var c=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float32Array,t,r,n,f)||this;return i.elementType="f32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(u.BufferViewVec2Impl);t.BufferViewVec2f=c;var p=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float32Array,t,r,n,f)||this;return i.elementType="f32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(o.BufferViewVec3Impl);t.BufferViewVec3f=p;var y=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float32Array,t,r,n,f)||this;return i.elementType="f32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(s.BufferViewVec4Impl);t.BufferViewVec4f=y;var d=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float32Array,t,r,n,f)||this;return i.elementType="f32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(n.BufferViewMat3Impl);t.BufferViewMat3f=d;var l=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float64Array,t,r,n,f)||this;return i.elementType="f64",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(n.BufferViewMat3Impl);t.BufferViewMat3f64=l;var h=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float32Array,t,r,n,f)||this;return i.elementType="f32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(f.BufferViewMat4Impl);t.BufferViewMat4f=h;var v=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float64Array,t,r,n,f)||this;return i.elementType="f64",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(f.BufferViewMat4Impl);t.BufferViewMat4f64=v;var B=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float64Array,t,r,n,f)||this;return i.elementType="f64",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(i.BufferViewScalarImpl);t.BufferViewFloat64=B;var w=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float64Array,t,r,n,f)||this;return i.elementType="f64",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(u.BufferViewVec2Impl);t.BufferViewVec2f64=w;var m=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float64Array,t,r,n,f)||this;return i.elementType="f64",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(o.BufferViewVec3Impl);t.BufferViewVec3f64=m;var g=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Float64Array,t,r,n,f)||this;return i.elementType="f64",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(s.BufferViewVec4Impl);t.BufferViewVec4f64=g;var b=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint8Array,t,r,n,f)||this;return i.elementType="u8",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(i.BufferViewScalarImpl);t.BufferViewUint8=b;var V=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint8Array,t,r,n,f)||this;return i.elementType="u8",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(u.BufferViewVec2Impl);t.BufferViewVec2u8=V;var E=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint8Array,t,r,n,f)||this;return i.elementType="u8",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(o.BufferViewVec3Impl);t.BufferViewVec3u8=E;var T=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint8Array,t,r,n,f)||this;return i.elementType="u8",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(s.BufferViewVec4Impl);t.BufferViewVec4u8=T;var I=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint16Array,t,r,n,f)||this;return i.elementType="u16",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(i.BufferViewScalarImpl);t.BufferViewUint16=I;var S=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint16Array,t,r,n,f)||this;return i.elementType="u16",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(u.BufferViewVec2Impl);t.BufferViewVec2u16=S;var A=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint16Array,t,r,n,f)||this;return i.elementType="u16",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(o.BufferViewVec3Impl);t.BufferViewVec3u16=A;var L=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint16Array,t,r,n,f)||this;return i.elementType="u16",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(s.BufferViewVec4Impl);t.BufferViewVec4u16=L;var O=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint32Array,t,r,n,f)||this;return i.elementType="u32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(i.BufferViewScalarImpl);t.BufferViewUint32=O;var M=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint32Array,t,r,n,f)||this;return i.elementType="u32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(u.BufferViewVec2Impl);t.BufferViewVec2u32=M;var _=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint32Array,t,r,n,f)||this;return i.elementType="u32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(o.BufferViewVec3Impl);t.BufferViewVec3u32=_;var P=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Uint32Array,t,r,n,f)||this;return i.elementType="u32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(s.BufferViewVec4Impl);t.BufferViewVec4u32=P;var F=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int8Array,t,r,n,f)||this;return i.elementType="i8",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(i.BufferViewScalarImpl);t.BufferViewInt8=F;var j=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int8Array,t,r,n,f)||this;return i.elementType="i8",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(u.BufferViewVec2Impl);t.BufferViewVec2i8=j;var N=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int8Array,t,r,n,f)||this;return i.elementType="i8",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(o.BufferViewVec3Impl);t.BufferViewVec3i8=N;var x=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int8Array,t,r,n,f)||this;return i.elementType="i8",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(s.BufferViewVec4Impl);t.BufferViewVec4i8=x;var C=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int16Array,t,r,n,f)||this;return i.elementType="i16",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(i.BufferViewScalarImpl);t.BufferViewInt16=C;var U=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int16Array,t,r,n,f)||this;return i.elementType="i16",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(u.BufferViewVec2Impl);t.BufferViewVec2i16=U;var R=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int16Array,t,r,n,f)||this;return i.elementType="i16",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(o.BufferViewVec3Impl);t.BufferViewVec3i16=R;var k=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int16Array,t,r,n,f)||this;return i.elementType="i16",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(s.BufferViewVec4Impl);t.BufferViewVec4i16=k;var W=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int32Array,t,r,n,f)||this;return i.elementType="i32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(i.BufferViewScalarImpl);t.BufferViewInt32=W;var Y=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int32Array,t,r,n,f)||this;return i.elementType="i32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(u.BufferViewVec2Impl);t.BufferViewVec2i32=Y;var z=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int32Array,t,r,n,f)||this;return i.elementType="i32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(o.BufferViewVec3Impl);t.BufferViewVec3i32=z;var D=function(e){function t(t,r,n,f){void 0===r&&(r=0);var i=e.call(this,Int32Array,t,r,n,f)||this;return i.elementType="i32",i}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(s.BufferViewVec4Impl);t.BufferViewVec4i32=D}).apply(null,n))||(e.exports=f)},W7eI:function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("MzcX"),r("2B1V")],void 0===(f=(function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EdgeInputBufferLayout=n.newLayout().vec3f("position").u16("componentIndex").u16("_padding"),t.VertexLayout=n.newLayout().vec2u8("sideness"),t.glVertexLayout=r.glLayout(t.VertexLayout),t.CommonInstancesLayout=n.newLayout().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0}),t.RegularEdgeInstancesLayout=t.CommonInstancesLayout.clone().vec3f("normal"),t.SilhouetteEdgeInstancesLayout=t.CommonInstancesLayout.clone().vec3f("normalA").vec3f("normalB"),t.EdgeShaderAttributeLocations={position0:0,position1:1,componentIndex:2,variantOffset:4,variantStroke:5,variantExtension:6,normal:7,normalA:7,normalB:8,sideness:9}}).apply(null,n))||(e.exports=f)},bduU:function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("W9tT")],void 0===(f=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,r,n,f){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=2;var i=this.TypedArrayConstructor;void 0===n&&(n=2*i.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,u):new i(t,u,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec2.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1])},e.prototype.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.setValues=function(e,t,r){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r},e.prototype.copyFrom=function(e,t,r){var n=this.typedBuffer,f=t.typedBuffer,i=e*this.typedBufferStride,u=r*t.typedBufferStride;n[i]=f[u],n[i+1]=f[u+1]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=2,e}();t.BufferViewVec2Impl=n}).apply(null,n))||(e.exports=f)},fHyw:function(e,t,r){var n,f;n=[r.dj.c(e.i),t],void 0===(f=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,r,n,f){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=16;var i=this.TypedArrayConstructor;void 0===n&&(n=16*i.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,u):new i(t,u,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getMat=function(e,t){for(var r=e*this.typedBufferStride,n=0;n<16;n++)t[n]=this.typedBuffer[r+n];return t},e.prototype.setMat=function(e,t){for(var r=e*this.typedBufferStride,n=0;n<16;n++)this.typedBuffer[r+n]=t[n]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.copyFrom=function(e,t,r){for(var n=this.typedBuffer,f=t.typedBuffer,i=e*this.typedBufferStride,u=r*t.typedBufferStride,o=0;o<16;++o)n[i+o]=f[u+o]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=16,e}();t.BufferViewMat4Impl=r}).apply(null,n))||(e.exports=f)},hQPx:function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("0LE5")],void 0===(f=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,r,n,f){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=3;var i=this.TypedArrayConstructor;void 0===n&&(n=3*i.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,u):new i(t,u,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec3.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2])},e.prototype.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.setValues=function(e,t,r,n){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=n},e.prototype.copyFrom=function(e,t,r){var n=this.typedBuffer,f=t.typedBuffer,i=e*this.typedBufferStride,u=r*t.typedBufferStride;n[i]=f[u],n[i+1]=f[u+1],n[i+2]=f[u+2]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=3,e}();t.BufferViewVec3Impl=n}).apply(null,n))||(e.exports=f)},kfwU:function(e,t,r){var n,f;n=[r.dj.c(e.i),t,r("KY0m"),r("xoE+"),r("rusB"),r("0LE5"),r("Rdxj"),r("AzkI")],void 0===(f=(function(e,t,r,n,f,i,u,o){function s(e,t){return e.cosAngle<t}function a(e,t){return e.cosAngle>t}function c(e,t){var r=n.acosClamped(e.cosAngle),f=p.fwd,u=p.ortho;return o.directionFromTo(f,e.position1,e.position0),r*(i.vec3.dot(i.vec3.cross(u,e.faceNormal0,e.faceNormal1),f)>0?-1:1)>t}Object.defineProperty(t,"__esModule",{value:!0}),t.extractEdges=function(e,t,u,o){void 0===o&&(o=d);var l=e.vertices.position,h=e.vertices.componentIndex,v=n.deg2rad(o.anglePlanar),B=n.deg2rad(o.angleSignificantEdge),w=Math.cos(B),m=Math.cos(v),g=p.edge,b=g.position0,V=g.position1,E=g.faceNormal0,T=g.faceNormal1,I=function(e){for(var t=e.faces.length/3,r=e.vertices.position,n=e.faces,f=y.v0,u=y.v1,o=y.v2,s=new Float32Array(3*t),a=0;a<t;a++){var c=n[3*a+1],p=n[3*a+2];r.getVec(n[3*a+0],f),r.getVec(c,u),r.getVec(p,o),i.vec3.subtract(u,u,f),i.vec3.subtract(o,o,f),i.vec3.cross(f,u,o),i.vec3.normalize(f,f),s[3*a+0]=f[0],s[3*a+1]=f[1],s[3*a+2]=f[2]}return s}(e),S=function(e){for(var t=e.faces.length/3,r=e.faces,n=e.neighbors,f=0,i=0;i<t;i++){var u=n[3*i+0],o=n[3*i+1],s=n[3*i+2],a=r[3*i+0],c=r[3*i+1],p=r[3*i+2];f+=-1===u||a<c?1:0,f+=-1===o||c<p?1:0,f+=-1===s||p<a?1:0}var y=new Int32Array(4*f),d=0;for(i=0;i<t;i++)o=n[3*i+1],s=n[3*i+2],a=r[3*i+0],c=r[3*i+1],p=r[3*i+2],(-1===(u=n[3*i+0])||a<c)&&(y[d++]=a,y[d++]=c,y[d++]=i,y[d++]=u),(-1===o||c<p)&&(y[d++]=c,y[d++]=p,y[d++]=i,y[d++]=o),(-1===s||p<a)&&(y[d++]=p,y[d++]=a,y[d++]=i,y[d++]=s);return y}(e),A=S.length/4,L=t.allocate(A),O=0,M=u.allocate(A),_=0,P=0,F=0,j=r.range(0,A),N=new Float32Array(A);f.forEach(N,(function(e,t,r){l.getVec(S[4*t+0],b),l.getVec(S[4*t+1],V),r[t]=i.vec3.distance(b,V)})),j.sort((function(e,t){return N[t]-N[e]}));for(var x=new Array,C=new Array,U=0;U<A;U++){var R=j[U],k=N[R],W=S[4*R+0],Y=S[4*R+1],z=S[4*R+2],D=S[4*R+3],H=-1===D;if(l.getVec(W,b),l.getVec(Y,V),H)i.vec3.set(E,I[3*z+0],I[3*z+1],I[3*z+2]),i.vec3.copy(T,E),g.componentIndex=h.get(W),g.cosAngle=i.vec3.dot(E,T);else{if(i.vec3.set(E,I[3*z+0],I[3*z+1],I[3*z+2]),i.vec3.set(T,I[3*D+0],I[3*D+1],I[3*D+2]),g.componentIndex=h.get(W),g.cosAngle=i.vec3.dot(E,T),a(g,m))continue;g.cosAngle<-.9999&&i.vec3.copy(T,E)}P+=k,F++,H||s(g,w)?(t.write(L,O++,g),x.push(k)):c(g,v)&&(u.write(M,_++,g),C.push(k))}var G=new Float32Array(x.reverse()),Q=new Float32Array(C.reverse());return{regular:{instancesData:t.trim(L,O),lodInfo:{lengths:G}},silhouette:{instancesData:u.trim(M,_),lodInfo:{lengths:Q}},averageEdgeLength:P/F}};var p={edge:{position0:u.vec3f64.create(),position1:u.vec3f64.create(),faceNormal0:u.vec3f64.create(),faceNormal1:u.vec3f64.create(),componentIndex:0,cosAngle:0},ortho:u.vec3f64.create(),fwd:u.vec3f64.create()},y={v0:u.vec3f64.create(),v1:u.vec3f64.create(),v2:u.vec3f64.create()},d={anglePlanar:4,angleSignificantEdge:35}}).apply(null,n))||(e.exports=f)},pIuP:function(e,t,r){var n,f;n=[r.dj.c(e.i),t],void 0===(f=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,r,n,f){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=9;var i=this.TypedArrayConstructor;void 0===n&&(n=9*i.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,u):new i(t,u,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getMat=function(e,t){for(var r=e*this.typedBufferStride,n=0;n<9;n++)t[n]=this.typedBuffer[r+n];return t},e.prototype.setMat=function(e,t){for(var r=e*this.typedBufferStride,n=0;n<9;n++)this.typedBuffer[r+n]=t[n]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.copyFrom=function(e,t,r){for(var n=this.typedBuffer,f=t.typedBuffer,i=e*this.typedBufferStride,u=r*t.typedBufferStride,o=0;o<9;++o)n[i+o]=f[u+o]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=9,e}();t.BufferViewMat3Impl=r}).apply(null,n))||(e.exports=f)},zlCF:function(e,t,r){var n,f;n=[r.dj.c(e.i),t],void 0===(f=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,r,n,f){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=1;var i=this.TypedArrayConstructor;void 0===n&&(n=i.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==f?new i(t,u):new i(t,u,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.get=function(e){return this.typedBuffer[e*this.typedBufferStride]},e.prototype.set=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=1,e}();t.BufferViewScalarImpl=r}).apply(null,n))||(e.exports=f)}}]);