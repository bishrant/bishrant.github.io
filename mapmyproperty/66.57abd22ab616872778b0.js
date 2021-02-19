(function(){var e={"arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker":"8fHt","arcgis-js-api/views/3d/support/meshProcessing":"BIt0","arcgis-js-api/views/3d/support/buffer/workerHelper":"Fsr7","arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters":"HSGS","esri/views/3d/support/buffer/glUtil":"MzcX","arcgis-js-api/views/3d/support/buffer/glUtil":"MzcX","arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts":"W7eI","arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing":"kfwU"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"8fHt":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("LxLY"),r("rusB"),r("jmRc"),r("BIt0"),r("Fsr7"),r("W7eI"),r("HSGS"),r("kfwU")],void 0===(i=(function(e,t,r,n,i,o,a,u,s,f,c){"use strict";return function(){function e(){this.regularWriter=new f.RegularEdgeBufferWriter,this.silhouetteWriter=new f.SilhouetteEdgeBufferWriter}return e.prototype.process=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,o,a;return r.__generator(this,(function(r){switch(r.label){case 0:return n.isNone(t)?[2,this.work(e)]:(i=new Array,o=this.packInput(e,i),[4,t.invoke("wrappedWork",o,{transferList:i})]);case 1:return a=r.sent(),[2,this.unpackOutput(a)]}}))}))},e.prototype.wrappedWork=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n,i;return r.__generator(this,(function(r){return t=this.unpackInput(e),n=this.work(t),i=new Array,this.packInputTransferables(t,i),[2,{result:this.packOutput(n,i),transferList:i}]}))}))},e.prototype.work=function(e){var t=this.extractEdgeInformation(e.data,e.skipDeduplicate,e.originalIndices);return this.regularWriter.updateSettings(e.writerSettings),this.silhouetteWriter.updateSettings(e.writerSettings),c.extractEdges(t,this.regularWriter,this.silhouetteWriter)},e.prototype.packInputTransferables=function(e,t){t.push(e.data.buffer)},e.prototype.packInput=function(e,t){this.packInputTransferables(e,t);var r={dataBuffer:e.data.buffer,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate};return e.originalIndices&&(r.originalIndicesBuffer=e.originalIndices.buffer,r.originalIndicesType=i.isUint32Array(e.originalIndices)?"Uint32Array":"Uint16Array"),r},e.prototype.unpackInput=function(e){return{data:s.EdgeInputBufferLayout.createView(e.dataBuffer),originalIndices:"Uint32Array"===e.originalIndicesType?new Uint32Array(e.originalIndicesBuffer):"Uint16Array"===e.originalIndicesType?new Uint16Array(e.originalIndicesBuffer):void 0,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}},e.prototype.packOutput=function(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:u.packInterleavedBuffer(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:u.packInterleavedBuffer(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}},e.prototype.unpackOutput=function(e){return{regular:{instancesData:u.unpackInterleavedBuffer(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:u.unpackInterleavedBuffer(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}},e.prototype.extractEdgeInformation=function(e,t,r){if(t&&r)return{faces:r,neighbors:i=a.computeNeighbors(r,e.count),vertices:e};var n=o.default(e.buffer,e.stride/4,{originalIndices:r}),i=a.computeNeighbors(n.indices,n.uniqueCount);return{faces:n.indices,neighbors:i,vertices:s.EdgeInputBufferLayout.createView(n.buffer)}},e}()}).apply(null,n))||(e.exports=i)},BIt0:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.computeNeighbors=void 0,t.computeNeighbors=function(e,t){for(var r=e.length/3,n=new Uint32Array(t+1),i=new Uint32Array(t+1),o=function(e,t){e<t?n[e+1]++:i[t+1]++},a=0;a<r;a++){var u=e[3*a],s=e[3*a+1],f=e[3*a+2];o(u,s),o(s,f),o(f,u)}var c=0,l=0;for(a=0;a<t;a++){var d=n[a+1],p=i[a+1];n[a+1]=c,i[a+1]=l,c+=d,l+=p}var g=new Uint32Array(6*r),v=n[t],w=function(e,t,r){if(e<t){var o=n[e+1]++;g[2*o]=t,g[2*o+1]=r}else o=i[t+1]++,g[2*v+2*o]=e,g[2*v+2*o+1]=r};for(a=0;a<r;a++)f=e[3*a+2],w(u=e[3*a],s=e[3*a+1],a),w(s,f,a),w(f,u,a);var y=function(e,t){for(var r=2*e,n=t-e,i=1;i<n;i++){for(var o=g[r+2*i],a=g[r+2*i+1],u=i-1;u>=0&&g[r+2*u]>o;u--)g[r+2*u+2]=g[r+2*u],g[r+2*u+3]=g[r+2*u+1];g[r+2*u+2]=o,g[r+2*u+3]=a}};for(a=0;a<t;a++)y(n[a],n[a+1]),y(v+i[a],v+i[a+1]);var h=new Int32Array(3*r),m=function(t,r){return t===e[3*r]?0:t===e[3*r+1]?1:t===e[3*r+2]?2:-1},I=function(e,t){var r=m(e,t);h[3*t+r]=-1},V=function(e,t,r,n){var i=m(e,t);h[3*t+i]=n;var o=m(r,n);h[3*n+o]=t};for(a=0;a<t;a++){for(var B=n[a],b=n[a+1],L=i[a],E=i[a+1];B<b&&L<E;){var k=g[2*B];k===(A=g[2*v+2*L])?(V(a,g[2*B+1],A,g[2*v+2*L+1]),B++,L++):k<A?(I(a,g[2*B+1]),B++):(I(A,g[2*v+2*L+1]),L++)}for(;B<b;)I(a,g[2*B+1]),B++;for(;L<E;){var A;I(A=g[2*v+2*L],g[2*v+2*L+1]),L++}}return h}}).apply(null,n))||(e.exports=i)},Fsr7:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("VfPl"),r("2B1V")],void 0===(i=(function(e,t,r,n,i){"use strict";function o(e){var t=new Array;return e.fields.forEach((function(e,n){var i=r.__assign(r.__assign({},e),{constructor:s(e.constructor)});t.push([n,i])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}function a(e){var t=i.newLayout();return t.stride=e.stride,t.fieldNames=e.fieldNames,e.fields.forEach((function(e){return t.fields.set(e[0],r.__assign(r.__assign({},e[1]),{constructor:(n=e[1].constructor,f.get(n))}));var n})),t}Object.defineProperty(t,"__esModule",{value:!0}),t.unpackLayout=t.packLayout=t.unpackInterleavedBuffer=t.packInterleavedBuffer=void 0,t.packInterleavedBuffer=function(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:o(e.layout)}},t.unpackInterleavedBuffer=function(e){return a(e.layout).createView(e.buffer)},t.packLayout=o,t.unpackLayout=a;var u=[n.BufferViewFloat,n.BufferViewVec2f,n.BufferViewVec3f,n.BufferViewVec4f,n.BufferViewMat3f,n.BufferViewMat4f,n.BufferViewFloat64,n.BufferViewVec2f64,n.BufferViewVec3f64,n.BufferViewVec4f64,n.BufferViewMat3f64,n.BufferViewMat4f64,n.BufferViewUint8,n.BufferViewVec2u8,n.BufferViewVec3u8,n.BufferViewVec4u8,n.BufferViewUint16,n.BufferViewVec2u16,n.BufferViewVec3u16,n.BufferViewVec4u16,n.BufferViewUint32,n.BufferViewVec2u32,n.BufferViewVec3u32,n.BufferViewVec4u32,n.BufferViewInt8,n.BufferViewVec2i8,n.BufferViewVec3i8,n.BufferViewVec4i8,n.BufferViewInt16,n.BufferViewVec2i16,n.BufferViewVec3i16,n.BufferViewVec4i16,n.BufferViewInt32,n.BufferViewVec2i32,n.BufferViewVec3i32,n.BufferViewVec4i32];function s(e){return e.ElementType+"_"+e.ElementCount}var f=new Map;u.forEach((function(e){return f.set(s(e),e)}))}).apply(null,n))||(e.exports=i)},HSGS:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("4w2c"),r("0LE5"),r("Rdxj"),r("MzcX"),r("W7eI")],void 0===(i=(function(e,t,r,n,i,o,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SilhouetteEdgeBufferWriter=t.RegularEdgeBufferWriter=t.CommonBufferWriter=void 0;var u=function(){function e(){}return e.prototype.updateSettings=function(e){this.settings=e},e.prototype.write=function(e,t,r){var n=function(e){var t=s;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],c[0]=5381;for(var r=0;r<f.length;r++)c[0]=31*c[0]+f[r];return c[0]}(r);l.seed=n;var i,o,a=l.getIntRange(0,255),u=l.getIntRange(0,this.settings.variants-1),d=l.getFloat(),p=255*(.5*(o=(i=-(1-Math.min(d/.7,1))+Math.max(0,d-.7)/(1-.7))<0?-1:1,Math.pow(Math.abs(i),1.2)*o)+.5);e.position0.setVec(t,r.position0),e.position1.setVec(t,r.position1),e.componentIndex.set(t,r.componentIndex),e.variantOffset.set(t,a),e.variantStroke.set(t,u),e.variantExtension.set(t,p)},e.prototype.trim=function(e,t){return e.slice(0,t)},e}();t.CommonBufferWriter=u;var s=new Float32Array(6),f=new Uint32Array(s.buffer),c=new Uint32Array(1),l=new r,d=function(){function e(){this.commonWriter=new u}return e.prototype.updateSettings=function(e){this.commonWriter.updateSettings(e)},e.prototype.allocate=function(e){return a.RegularEdgeInstancesLayout.createBuffer(e)},e.prototype.write=function(e,t,r){this.commonWriter.write(e,t,r),n.vec3.add(g,r.faceNormal0,r.faceNormal1),n.vec3.normalize(g,g),e.normal.setVec(t,g)},e.prototype.trim=function(e,t){return this.commonWriter.trim(e,t)},e.Layout=a.RegularEdgeInstancesLayout,e.glLayout=o.glLayout(a.RegularEdgeInstancesLayout,{divisor:1}),e}();t.RegularEdgeBufferWriter=d;var p=function(){function e(){this.commonWriter=new u}return e.prototype.updateSettings=function(e){this.commonWriter.updateSettings(e)},e.prototype.allocate=function(e){return a.SilhouetteEdgeInstancesLayout.createBuffer(e)},e.prototype.write=function(e,t,r){this.commonWriter.write(e,t,r),e.normalA.setVec(t,r.faceNormal0),e.normalB.setVec(t,r.faceNormal1)},e.prototype.trim=function(e,t){return this.commonWriter.trim(e,t)},e.Layout=a.SilhouetteEdgeInstancesLayout,e.glLayout=o.glLayout(a.SilhouetteEdgeInstancesLayout,{divisor:1}),e}();t.SilhouetteEdgeBufferWriter=p;var g=i.vec3f64.create()}).apply(null,n))||(e.exports=i)},MzcX:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht")],void 0===(i=(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.glLayout=void 0;var n={divisor:0};t.glLayout=function(e,t){void 0===t&&(t={}),t=r.__assign(r.__assign({},n),t);var o=e.stride;return e.fieldNames.filter((function(t){var r=e.fields.get(t).optional;return!(r&&r.glPadding)})).map((function(r){var n=e.fields.get(r),a=n.constructor.ElementCount,u=function(e){var t=i[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}(n.constructor.ElementType);return{name:r,stride:o,count:a,type:u,offset:n.offset,normalized:!(!n.optional||!n.optional.glNormalized),divisor:t.divisor}}))};var i={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126}}).apply(null,n))||(e.exports=i)},W7eI:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("MzcX"),r("2B1V")],void 0===(i=(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EdgeShaderAttributeLocations=t.SilhouetteEdgeInstancesLayout=t.RegularEdgeInstancesLayout=t.CommonInstancesLayout=t.glVertexLayout=t.VertexLayout=t.EdgeInputBufferLayout=void 0,t.EdgeInputBufferLayout=n.newLayout().vec3f("position").u16("componentIndex").u16("_padding"),t.VertexLayout=n.newLayout().vec2u8("sideness"),t.glVertexLayout=r.glLayout(t.VertexLayout),t.CommonInstancesLayout=n.newLayout().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0}),t.RegularEdgeInstancesLayout=t.CommonInstancesLayout.clone().vec3f("normal"),t.SilhouetteEdgeInstancesLayout=t.CommonInstancesLayout.clone().vec3f("normalA").vec3f("normalB"),t.EdgeShaderAttributeLocations={position0:0,position1:1,componentIndex:2,variantOffset:4,variantStroke:5,variantExtension:6,normal:7,normalA:7,normalB:8,sideness:9}}).apply(null,n))||(e.exports=i)},kfwU:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("KY0m"),r("xoE+"),r("rusB"),r("0LE5"),r("Rdxj"),r("AzkI")],void 0===(i=(function(e,t,r,n,i,o,a,u){"use strict";function s(e,t){return e.cosAngle<t}function f(e,t){return e.cosAngle>t}function c(e,t){var r=n.acosClamped(e.cosAngle),i=l.fwd,a=l.ortho;return u.directionFromTo(i,e.position1,e.position0),r*(o.vec3.dot(o.vec3.cross(a,e.faceNormal0,e.faceNormal1),i)>0?-1:1)>t}Object.defineProperty(t,"__esModule",{value:!0}),t.extractEdges=void 0,t.extractEdges=function(e,t,a,u){void 0===u&&(u=p);var g=e.vertices.position,v=e.vertices.componentIndex,w=n.deg2rad(u.anglePlanar),y=n.deg2rad(u.angleSignificantEdge),h=Math.cos(y),m=Math.cos(w),I=l.edge,V=I.position0,B=I.position1,b=I.faceNormal0,L=I.faceNormal1,E=function(e){for(var t=e.faces.length/3,r=e.vertices.position,n=e.faces,i=d.v0,a=d.v1,u=d.v2,s=new Float32Array(3*t),f=0;f<t;f++){var c=n[3*f+1],l=n[3*f+2];r.getVec(n[3*f+0],i),r.getVec(c,a),r.getVec(l,u),o.vec3.subtract(a,a,i),o.vec3.subtract(u,u,i),o.vec3.cross(i,a,u),o.vec3.normalize(i,i),s[3*f+0]=i[0],s[3*f+1]=i[1],s[3*f+2]=i[2]}return s}(e),k=function(e){for(var t=e.faces.length/3,r=e.faces,n=e.neighbors,i=0,o=0;o<t;o++){var a=n[3*o+0],u=n[3*o+1],s=n[3*o+2],f=r[3*o+0],c=r[3*o+1],l=r[3*o+2];i+=-1===a||f<c?1:0,i+=-1===u||c<l?1:0,i+=-1===s||l<f?1:0}var d=new Int32Array(4*i),p=0;for(o=0;o<t;o++)u=n[3*o+1],s=n[3*o+2],f=r[3*o+0],c=r[3*o+1],l=r[3*o+2],(-1===(a=n[3*o+0])||f<c)&&(d[p++]=f,d[p++]=c,d[p++]=o,d[p++]=a),(-1===u||c<l)&&(d[p++]=c,d[p++]=l,d[p++]=o,d[p++]=u),(-1===s||l<f)&&(d[p++]=l,d[p++]=f,d[p++]=o,d[p++]=s);return d}(e),A=k.length/4,_=t.allocate(A),x=0,S=a.allocate(A),W=0,M=0,j=0,N=r.range(0,A),U=new Float32Array(A);i.forEach(U,(function(e,t,r){g.getVec(k[4*t+0],V),g.getVec(k[4*t+1],B),r[t]=o.vec3.distance(V,B)})),N.sort((function(e,t){return U[t]-U[e]}));for(var R=new Array,O=new Array,z=0;z<A;z++){var D=N[z],P=U[D],F=k[4*D+0],C=k[4*D+1],T=k[4*D+2],H=k[4*D+3],X=-1===H;if(g.getVec(F,V),g.getVec(C,B),X)o.vec3.set(b,E[3*T+0],E[3*T+1],E[3*T+2]),o.vec3.copy(L,b),I.componentIndex=v.get(F),I.cosAngle=o.vec3.dot(b,L);else{if(o.vec3.set(b,E[3*T+0],E[3*T+1],E[3*T+2]),o.vec3.set(L,E[3*H+0],E[3*H+1],E[3*H+2]),I.componentIndex=v.get(F),I.cosAngle=o.vec3.dot(b,L),f(I,m))continue;I.cosAngle<-.9999&&o.vec3.copy(L,b)}M+=P,j++,X||s(I,h)?(t.write(_,x++,I),R.push(P)):c(I,w)&&(a.write(S,W++,I),O.push(P))}var G=new Float32Array(R.reverse()),J=new Float32Array(O.reverse());return{regular:{instancesData:t.trim(_,x),lodInfo:{lengths:G}},silhouette:{instancesData:a.trim(S,W),lodInfo:{lengths:J}},averageEdgeLength:M/j}};var l={edge:{position0:a.vec3f64.create(),position1:a.vec3f64.create(),faceNormal0:a.vec3f64.create(),faceNormal1:a.vec3f64.create(),componentIndex:0,cosAngle:0},ortho:a.vec3f64.create(),fwd:a.vec3f64.create()},d={v0:a.vec3f64.create(),v1:a.vec3f64.create(),v2:a.vec3f64.create()},p={anglePlanar:4,angleSignificantEdge:35}}).apply(null,n))||(e.exports=i)}}]);