(function(){var e={"esri/views/3d/support/buffer/InterleavedLayout":"2B1V","arcgis-js-api/views/3d/support/buffer/InterleavedLayout":"2B1V","arcgis-js-api/views/3d/support/buffer/types":"GntT","arcgis-js-api/views/3d/support/buffer/internals/Vec4":"MI3s","arcgis-js-api/views/3d/support/buffer/BufferView":"VfPl","arcgis-js-api/views/3d/support/buffer/internals/Vec2":"bduU","arcgis-js-api/views/3d/support/buffer/internals/Mat4":"fHyw","arcgis-js-api/views/3d/support/buffer/internals/Vec3":"hQPx","arcgis-js-api/views/3d/support/buffer/internals/Mat3":"pIuP","arcgis-js-api/views/3d/support/buffer/internals/Scalar":"zlCF"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2B1V":function(e,t,r){var f,i;f=[r.dj.c(e.i),t,r("VfPl"),r("GntT")],void 0===(i=(function(e,t,r,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.newLayout=t.InterleavedLayout=t.InterleavedBuffer=void 0;var i=function(){function e(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(var r=0,f=e.fieldNames;r<f.length;r++){var i=f[r],n=e.fields.get(i);this[i]=new n.constructor(this.buffer,n.offset,this.stride)}}return Object.defineProperty(e.prototype,"stride",{get:function(){return this.layout.stride},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"count",{get:function(){return this.buffer.byteLength/this.stride},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"byteLength",{get:function(){return this.buffer.byteLength},enumerable:!1,configurable:!0}),e.prototype.getField=function(e,t){var r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null},e.prototype.slice=function(t,r){return new e(this.layout,this.buffer.slice(t*this.stride,r*this.stride))},e.prototype.copyFrom=function(e,t,r,f){var i=this.stride;if(i%4==0){var n=new Uint32Array(e.buffer,t*i,f*i/4);new Uint32Array(this.buffer,r*i,f*i/4).set(n)}else n=new Uint8Array(e.buffer,t*i,f*i),new Uint8Array(this.buffer,r*i,f*i).set(n)},e}();t.InterleavedBuffer=i;var n=function(){function e(){this.stride=0,this.fields=new Map,this.fieldNames=[]}return e.prototype.vec2f=function(e,t){return this.appendField(e,r.BufferViewVec2f,t),this},e.prototype.vec2f64=function(e,t){return this.appendField(e,r.BufferViewVec2f64,t),this},e.prototype.vec3f=function(e,t){return this.appendField(e,r.BufferViewVec3f,t),this},e.prototype.vec3f64=function(e,t){return this.appendField(e,r.BufferViewVec3f64,t),this},e.prototype.vec4f=function(e,t){return this.appendField(e,r.BufferViewVec4f,t),this},e.prototype.vec4f64=function(e,t){return this.appendField(e,r.BufferViewVec4f64,t),this},e.prototype.mat3f=function(e,t){return this.appendField(e,r.BufferViewMat3f,t),this},e.prototype.mat3f64=function(e,t){return this.appendField(e,r.BufferViewMat3f64,t),this},e.prototype.mat4f=function(e,t){return this.appendField(e,r.BufferViewMat4f,t),this},e.prototype.mat4f64=function(e,t){return this.appendField(e,r.BufferViewMat4f64,t),this},e.prototype.vec4u8=function(e,t){return this.appendField(e,r.BufferViewVec4u8,t),this},e.prototype.f32=function(e,t){return this.appendField(e,r.BufferViewFloat,t),this},e.prototype.f64=function(e,t){return this.appendField(e,r.BufferViewFloat64,t),this},e.prototype.u8=function(e,t){return this.appendField(e,r.BufferViewUint8,t),this},e.prototype.u16=function(e,t){return this.appendField(e,r.BufferViewUint16,t),this},e.prototype.i8=function(e,t){return this.appendField(e,r.BufferViewInt8,t),this},e.prototype.vec2i8=function(e,t){return this.appendField(e,r.BufferViewVec2i8,t),this},e.prototype.vec2i16=function(e,t){return this.appendField(e,r.BufferViewVec2i16,t),this},e.prototype.vec2u8=function(e,t){return this.appendField(e,r.BufferViewVec2u8,t),this},e.prototype.vec4u16=function(e,t){return this.appendField(e,r.BufferViewVec4u16,t),this},e.prototype.u32=function(e,t){return this.appendField(e,r.BufferViewUint32,t),this},e.prototype.appendField=function(e,t,r){var i=t.ElementCount*f.elementTypeSize(t.ElementType);this.fields.set(e,{size:i,constructor:t,offset:this.stride,optional:r}),this.stride+=i,this.fieldNames.push(e)},e.prototype.alignTo=function(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this},e.prototype.hasField=function(e){return this.fieldNames.indexOf(e)>=0},e.prototype.createBuffer=function(e){return new i(this,e)},e.prototype.createView=function(e){return new i(this,e)},e.prototype.clone=function(){var t=new e;return t.stride=this.stride,t.fields=new Map,this.fields.forEach((function(e,r){return t.fields.set(r,e)})),t.fieldNames=this.fieldNames.slice(),t.BufferType=this.BufferType,t},e}();t.InterleavedLayout=n,t.newLayout=function(){return new n}}).apply(null,f))||(e.exports=i)},GntT:function(e,t,r){var f,i;f=[r.dj.c(e.i),t,r("pcDC")],void 0===(i=(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maximumValue=t.isInteger=t.isSigned=t.elementTypeSize=void 0,t.elementTypeSize=function(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return void r.neverReached(e)}},t.isSigned=function(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return void r.neverReached(e)}},t.isInteger=function(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return void r.neverReached(e)}},t.maximumValue=function(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return void r.neverReached(e)}}}).apply(null,f))||(e.exports=i)},MI3s:function(e,t,r){var f,i;f=[r.dj.c(e.i),t,r("2fXB")],void 0===(i=(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BufferViewVec4Impl=void 0;var f=function(){function e(e,t,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=4;var n=this.TypedArrayConstructor;void 0===f&&(f=4*n.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==i?new n(t,u):new n(t,u,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec4.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2],this.typedBuffer[e*this.typedBufferStride+3])},e.prototype.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2],this.typedBuffer[e*this.typedBufferStride+3]=t[3]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.setValues=function(e,t,r,f,i){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=f,this.typedBuffer[e*this.typedBufferStride+3]=i},e.prototype.copyFrom=function(e,t,r){var f=this.typedBuffer,i=t.typedBuffer,n=e*this.typedBufferStride,u=r*t.typedBufferStride;f[n]=i[u],f[n+1]=i[u+1],f[n+2]=i[u+2],f[n+3]=i[u+3]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!1,configurable:!0}),e.ElementCount=4,e}();t.BufferViewVec4Impl=f}).apply(null,f))||(e.exports=i)},VfPl:function(e,t,r){var f,i;f=[r.dj.c(e.i),t,r("zOht"),r("pIuP"),r("fHyw"),r("zlCF"),r("bduU"),r("hQPx"),r("MI3s")],void 0===(i=(function(e,t,r,f,i,n,u,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BufferViewVec4i32=t.BufferViewVec3i32=t.BufferViewVec2i32=t.BufferViewInt32=t.BufferViewVec4i16=t.BufferViewVec3i16=t.BufferViewVec2i16=t.BufferViewInt16=t.BufferViewVec4i8=t.BufferViewVec3i8=t.BufferViewVec2i8=t.BufferViewInt8=t.BufferViewVec4u32=t.BufferViewVec3u32=t.BufferViewVec2u32=t.BufferViewUint32=t.BufferViewVec4u16=t.BufferViewVec3u16=t.BufferViewVec2u16=t.BufferViewUint16=t.BufferViewVec4u8=t.BufferViewVec3u8=t.BufferViewVec2u8=t.BufferViewUint8=t.BufferViewVec4f64=t.BufferViewVec3f64=t.BufferViewVec2f64=t.BufferViewFloat64=t.BufferViewMat4f64=t.BufferViewMat4f=t.BufferViewMat3f64=t.BufferViewMat3f=t.BufferViewVec4f=t.BufferViewVec3f=t.BufferViewVec2f=t.BufferViewFloat=void 0;var p=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float32Array,t,r,f,i)||this;return n.elementType="f32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(n.BufferViewScalarImpl);t.BufferViewFloat=p;var y=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float32Array,t,r,f,i)||this;return n.elementType="f32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(u.BufferViewVec2Impl);t.BufferViewVec2f=y;var d=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float32Array,t,r,f,i)||this;return n.elementType="f32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(s.BufferViewVec3Impl);t.BufferViewVec3f=d;var c=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float32Array,t,r,f,i)||this;return n.elementType="f32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(o.BufferViewVec4Impl);t.BufferViewVec4f=c;var a=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float32Array,t,r,f,i)||this;return n.elementType="f32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(f.BufferViewMat3Impl);t.BufferViewMat3f=a;var l=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float64Array,t,r,f,i)||this;return n.elementType="f64",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(f.BufferViewMat3Impl);t.BufferViewMat3f64=l;var h=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float32Array,t,r,f,i)||this;return n.elementType="f32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(i.BufferViewMat4Impl);t.BufferViewMat4f=h;var B=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float64Array,t,r,f,i)||this;return n.elementType="f64",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(i.BufferViewMat4Impl);t.BufferViewMat4f64=B;var V=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float64Array,t,r,f,i)||this;return n.elementType="f64",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(n.BufferViewScalarImpl);t.BufferViewFloat64=V;var w=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float64Array,t,r,f,i)||this;return n.elementType="f64",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(u.BufferViewVec2Impl);t.BufferViewVec2f64=w;var b=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float64Array,t,r,f,i)||this;return n.elementType="f64",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(s.BufferViewVec3Impl);t.BufferViewVec3f64=b;var v=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Float64Array,t,r,f,i)||this;return n.elementType="f64",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(o.BufferViewVec4Impl);t.BufferViewVec4f64=v;var m=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint8Array,t,r,f,i)||this;return n.elementType="u8",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(n.BufferViewScalarImpl);t.BufferViewUint8=m;var T=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint8Array,t,r,f,i)||this;return n.elementType="u8",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(u.BufferViewVec2Impl);t.BufferViewVec2u8=T;var E=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint8Array,t,r,f,i)||this;return n.elementType="u8",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(s.BufferViewVec3Impl);t.BufferViewVec3u8=E;var _=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint8Array,t,r,f,i)||this;return n.elementType="u8",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(o.BufferViewVec4Impl);t.BufferViewVec4u8=_;var S=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint16Array,t,r,f,i)||this;return n.elementType="u16",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(n.BufferViewScalarImpl);t.BufferViewUint16=S;var g=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint16Array,t,r,f,i)||this;return n.elementType="u16",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(u.BufferViewVec2Impl);t.BufferViewVec2u16=g;var A=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint16Array,t,r,f,i)||this;return n.elementType="u16",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(s.BufferViewVec3Impl);t.BufferViewVec3u16=A;var O=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint16Array,t,r,f,i)||this;return n.elementType="u16",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(o.BufferViewVec4Impl);t.BufferViewVec4u16=O;var I=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint32Array,t,r,f,i)||this;return n.elementType="u32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(n.BufferViewScalarImpl);t.BufferViewUint32=I;var L=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint32Array,t,r,f,i)||this;return n.elementType="u32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(u.BufferViewVec2Impl);t.BufferViewVec2u32=L;var M=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint32Array,t,r,f,i)||this;return n.elementType="u32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(s.BufferViewVec3Impl);t.BufferViewVec3u32=M;var x=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Uint32Array,t,r,f,i)||this;return n.elementType="u32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(o.BufferViewVec4Impl);t.BufferViewVec4u32=x;var F=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int8Array,t,r,f,i)||this;return n.elementType="i8",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(n.BufferViewScalarImpl);t.BufferViewInt8=F;var P=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int8Array,t,r,f,i)||this;return n.elementType="i8",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(u.BufferViewVec2Impl);t.BufferViewVec2i8=P;var C=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int8Array,t,r,f,i)||this;return n.elementType="i8",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(s.BufferViewVec3Impl);t.BufferViewVec3i8=C;var j=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int8Array,t,r,f,i)||this;return n.elementType="i8",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(o.BufferViewVec4Impl);t.BufferViewVec4i8=j;var N=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int16Array,t,r,f,i)||this;return n.elementType="i16",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(n.BufferViewScalarImpl);t.BufferViewInt16=N;var R=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int16Array,t,r,f,i)||this;return n.elementType="i16",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(u.BufferViewVec2Impl);t.BufferViewVec2i16=R;var U=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int16Array,t,r,f,i)||this;return n.elementType="i16",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(s.BufferViewVec3Impl);t.BufferViewVec3i16=U;var Y=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int16Array,t,r,f,i)||this;return n.elementType="i16",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(o.BufferViewVec4Impl);t.BufferViewVec4i16=Y;var z=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int32Array,t,r,f,i)||this;return n.elementType="i32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(n.BufferViewScalarImpl);t.BufferViewInt32=z;var k=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int32Array,t,r,f,i)||this;return n.elementType="i32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(u.BufferViewVec2Impl);t.BufferViewVec2i32=k;var J=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int32Array,t,r,f,i)||this;return n.elementType="i32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(s.BufferViewVec3Impl);t.BufferViewVec3i32=J;var G=function(e){function t(t,r,f,i){void 0===r&&(r=0);var n=e.call(this,Int32Array,t,r,f,i)||this;return n.elementType="i32",n}return r.__extends(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(o.BufferViewVec4Impl);t.BufferViewVec4i32=G}).apply(null,f))||(e.exports=i)},bduU:function(e,t,r){var f,i;f=[r.dj.c(e.i),t,r("W9tT")],void 0===(i=(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BufferViewVec2Impl=void 0;var f=function(){function e(e,t,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=2;var n=this.TypedArrayConstructor;void 0===f&&(f=2*n.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==i?new n(t,u):new n(t,u,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec2.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1])},e.prototype.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.setValues=function(e,t,r){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r},e.prototype.copyFrom=function(e,t,r){var f=this.typedBuffer,i=t.typedBuffer,n=e*this.typedBufferStride,u=r*t.typedBufferStride;f[n]=i[u],f[n+1]=i[u+1]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!1,configurable:!0}),e.ElementCount=2,e}();t.BufferViewVec2Impl=f}).apply(null,f))||(e.exports=i)},fHyw:function(e,t,r){var f,i;f=[r.dj.c(e.i),t],void 0===(i=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BufferViewMat4Impl=void 0;var r=function(){function e(e,t,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=16;var n=this.TypedArrayConstructor;void 0===f&&(f=16*n.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==i?new n(t,u):new n(t,u,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getMat=function(e,t){for(var r=e*this.typedBufferStride,f=0;f<16;f++)t[f]=this.typedBuffer[r+f];return t},e.prototype.setMat=function(e,t){for(var r=e*this.typedBufferStride,f=0;f<16;f++)this.typedBuffer[r+f]=t[f]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.copyFrom=function(e,t,r){for(var f=this.typedBuffer,i=t.typedBuffer,n=e*this.typedBufferStride,u=r*t.typedBufferStride,s=0;s<16;++s)f[n+s]=i[u+s]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!1,configurable:!0}),e.ElementCount=16,e}();t.BufferViewMat4Impl=r}).apply(null,f))||(e.exports=i)},hQPx:function(e,t,r){var f,i;f=[r.dj.c(e.i),t,r("0LE5")],void 0===(i=(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BufferViewVec3Impl=void 0;var f=function(){function e(e,t,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=3;var n=this.TypedArrayConstructor;void 0===f&&(f=3*n.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==i?new n(t,u):new n(t,u,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec3.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2])},e.prototype.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.setValues=function(e,t,r,f){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=f},e.prototype.copyFrom=function(e,t,r){var f=this.typedBuffer,i=t.typedBuffer,n=e*this.typedBufferStride,u=r*t.typedBufferStride;f[n]=i[u],f[n+1]=i[u+1],f[n+2]=i[u+2]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!1,configurable:!0}),e.ElementCount=3,e}();t.BufferViewVec3Impl=f}).apply(null,f))||(e.exports=i)},pIuP:function(e,t,r){var f,i;f=[r.dj.c(e.i),t],void 0===(i=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BufferViewMat3Impl=void 0;var r=function(){function e(e,t,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=9;var n=this.TypedArrayConstructor;void 0===f&&(f=9*n.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==i?new n(t,u):new n(t,u,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getMat=function(e,t){for(var r=e*this.typedBufferStride,f=0;f<9;f++)t[f]=this.typedBuffer[r+f];return t},e.prototype.setMat=function(e,t){for(var r=e*this.typedBufferStride,f=0;f<9;f++)this.typedBuffer[r+f]=t[f]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.copyFrom=function(e,t,r){for(var f=this.typedBuffer,i=t.typedBuffer,n=e*this.typedBufferStride,u=r*t.typedBufferStride,s=0;s<9;++s)f[n+s]=i[u+s]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!1,configurable:!0}),e.ElementCount=9,e}();t.BufferViewMat3Impl=r}).apply(null,f))||(e.exports=i)},zlCF:function(e,t,r){var f,i;f=[r.dj.c(e.i),t],void 0===(i=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BufferViewScalarImpl=void 0;var r=function(){function e(e,t,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=1;var n=this.TypedArrayConstructor;void 0===f&&(f=n.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.typedBuffer=null==i?new n(t,u):new n(t,u,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=f/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.get=function(e){return this.typedBuffer[e*this.typedBufferStride]},e.prototype.set=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!1,configurable:!0}),e.ElementCount=1,e}();t.BufferViewScalarImpl=r}).apply(null,f))||(e.exports=i)}}]);