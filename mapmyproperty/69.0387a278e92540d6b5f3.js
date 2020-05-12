(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/libs/gl-matrix-2/vec4":"2fXB","arcgis-js-api/core/libs/gl-matrix-2/vec4":"2fXB","esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker":"8fHt","esri/views/3d/support/meshProcessing":"BIt0","esri/views/3d/support/buffer/workerHelper":"Fsr7","esri/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters":"HSGS","esri/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts":"W7eI","arcgis-js-api/geometry/support/meshUtils/deduplicate":"jmRc","esri/geometry/support/meshUtils/deduplicate":"jmRc","esri/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing":"kfwU"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"2fXB":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("bH65")],void 0===(i=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.vec4=r}).apply(null,n))||(e.exports=i)},"8fHt":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("HZ3d"),r("Q2wQ"),r("rusB"),r("jmRc"),r("BIt0"),r("Fsr7"),r("W7eI"),r("HSGS"),r("kfwU")],void 0===(i=(function(e,t,r,n,i,o,a,u,f,c,s){return function(){function e(){this.regularWriter=new c.RegularEdgeBufferWriter,this.silhouetteWriter=new c.SilhouetteEdgeBufferWriter}return e.prototype.process=function(e,t){return r(this,void 0,void 0,(function(){var r,i,o;return n(this,(function(n){switch(n.label){case 0:return t?(r=new Array,i=this.packInput(e,r),[4,t.invoke("wrappedWork",i,{transferList:r})]):[3,2];case 1:return o=n.sent(),[2,this.unpackOutput(o)];case 2:return[2,this.work(e)]}}))}))},e.prototype.wrappedWork=function(e){return r(this,void 0,void 0,(function(){var t,r,i;return n(this,(function(n){return t=this.unpackInput(e),r=this.work(t),i=new Array,this.packInputTransferables(t,i),[2,{result:this.packOutput(r,i),transferList:i}]}))}))},e.prototype.work=function(e){var t=this.extractEdgeInformation(e.data,e.skipDeduplicate,e.originalIndices);return this.regularWriter.updateSettings(e.writerSettings),this.silhouetteWriter.updateSettings(e.writerSettings),s.extractEdges(t,this.regularWriter,this.silhouetteWriter)},e.prototype.packInputTransferables=function(e,t){t.push(e.data.buffer)},e.prototype.packInput=function(e,t){this.packInputTransferables(e,t);var r={dataBuffer:e.data.buffer,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate};return e.originalIndices&&(r.originalIndicesBuffer=e.originalIndices.buffer,r.originalIndicesType=i.isUint32Array(e.originalIndices)?"Uint32Array":"Uint16Array"),r},e.prototype.unpackInput=function(e){return{data:f.EdgeInputBufferLayout.createView(e.dataBuffer),originalIndices:"Uint32Array"===e.originalIndicesType?new Uint32Array(e.originalIndicesBuffer):"Uint16Array"===e.originalIndicesType?new Uint16Array(e.originalIndicesBuffer):void 0,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}},e.prototype.packOutput=function(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:u.packInterleavedBuffer(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:u.packInterleavedBuffer(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}},e.prototype.unpackOutput=function(e){return{regular:{instancesData:u.unpackInterleavedBuffer(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:u.unpackInterleavedBuffer(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}},e.prototype.extractEdgeInformation=function(e,t,r){if(t&&r)return{faces:r,neighbors:i=a.computeNeighbors(r,e.count),vertices:e};var n=o.default(e.buffer,e.stride/4,{originalIndices:r}),i=a.computeNeighbors(n.indices,n.uniqueCount);return{faces:n.indices,neighbors:i,vertices:f.EdgeInputBufferLayout.createView(n.buffer)}},e}()}).apply(null,n))||(e.exports=i)},BIt0:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.computeNeighbors=function(e,t){for(var r=e.length/3,n=new Uint32Array(t+1),i=new Uint32Array(t+1),o=function(e,t){e<t?n[e+1]++:i[t+1]++},a=0;a<r;a++){var u=e[3*a],f=e[3*a+1],c=e[3*a+2];o(u,f),o(f,c),o(c,u)}var s=0,l=0;for(a=0;a<t;a++){var d=n[a+1],p=i[a+1];n[a+1]=s,i[a+1]=l,s+=d,l+=p}var g=new Uint32Array(6*r),v=n[t],w=function(e,t,r){if(e<t){var o=n[e+1]++;g[2*o]=t,g[2*o+1]=r}else o=i[t+1]++,g[2*v+2*o]=e,g[2*v+2*o+1]=r};for(a=0;a<r;a++)c=e[3*a+2],w(u=e[3*a],f=e[3*a+1],a),w(f,c,a),w(c,u,a);var h=function(e,t){for(var r=2*e,n=t-e,i=1;i<n;i++){for(var o=g[r+2*i],a=g[r+2*i+1],u=i-1;u>=0&&g[r+2*u]>o;u--)g[r+2*u+2]=g[r+2*u],g[r+2*u+3]=g[r+2*u+1];g[r+2*u+2]=o,g[r+2*u+3]=a}};for(a=0;a<t;a++)h(n[a],n[a+1]),h(v+i[a],v+i[a+1]);var y=new Int32Array(3*r),m=function(t,r){return t===e[3*r]?0:t===e[3*r+1]?1:t===e[3*r+2]?2:-1},V=function(e,t){var r=m(e,t);y[3*t+r]=-1},I=function(e,t,r,n){var i=m(e,t);y[3*t+i]=n;var o=m(r,n);y[3*n+o]=t};for(a=0;a<t;a++){for(var B=n[a],b=n[a+1],A=i[a],k=i[a+1];B<b&&A<k;){var E=g[2*B];E===(L=g[2*v+2*A])?(I(a,g[2*B+1],L,g[2*v+2*A+1]),B++,A++):E<L?(V(a,g[2*B+1]),B++):(V(L,g[2*v+2*A+1]),A++)}for(;B<b;)V(a,g[2*B+1]),B++;for(;A<k;){var L;V(L=g[2*v+2*A],g[2*v+2*A+1]),A++}}return y}}).apply(null,n))||(e.exports=i)},Fsr7:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("2Atf"),r("VfPl"),r("2B1V")],void 0===(i=(function(e,t,r,n,i){function o(e){var t=new Array;return e.fields.forEach((function(e,n){var i=r({},e,{constructor:f(e.constructor)});t.push([n,i])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}function a(e){var t=i.newLayout();return t.stride=e.stride,t.fieldNames=e.fieldNames,e.fields.forEach((function(e){return t.fields.set(e[0],r({},e[1],{constructor:(n=e[1].constructor,c.get(n))}));var n})),t}Object.defineProperty(t,"__esModule",{value:!0}),t.packInterleavedBuffer=function(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:o(e.layout)}},t.unpackInterleavedBuffer=function(e){return a(e.layout).createView(e.buffer)},t.packLayout=o,t.unpackLayout=a;var u=[n.BufferViewFloat,n.BufferViewVec2f,n.BufferViewVec3f,n.BufferViewVec4f,n.BufferViewMat3f,n.BufferViewMat4f,n.BufferViewFloat64,n.BufferViewVec2f64,n.BufferViewVec3f64,n.BufferViewVec4f64,n.BufferViewMat3f64,n.BufferViewMat4f64,n.BufferViewUint8,n.BufferViewVec2u8,n.BufferViewVec3u8,n.BufferViewVec4u8,n.BufferViewUint16,n.BufferViewVec2u16,n.BufferViewVec3u16,n.BufferViewVec4u16,n.BufferViewUint32,n.BufferViewVec2u32,n.BufferViewVec3u32,n.BufferViewVec4u32,n.BufferViewInt8,n.BufferViewVec2i8,n.BufferViewVec3i8,n.BufferViewVec4i8,n.BufferViewInt16,n.BufferViewVec2i16,n.BufferViewVec3i16,n.BufferViewVec4i16,n.BufferViewInt32,n.BufferViewVec2i32,n.BufferViewVec3i32,n.BufferViewVec4i32];function f(e){return e.ElementType+"_"+e.ElementCount}var c=new Map;u.forEach((function(e){return c.set(f(e),e)}))}).apply(null,n))||(e.exports=i)},HSGS:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("2Atf"),r("xhoE"),r("4w2c"),r("0LE5"),r("Rdxj"),r("MzcX"),r("W7eI")],void 0===(i=(function(e,t,r,n,i,o,a,u,f){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(){}return e.prototype.updateSettings=function(e){this.settings=e},e.prototype.write=function(e,t,r){var n=function(e){var t=s;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],d[0]=5381;for(var r=0;r<l.length;r++)d[0]=31*d[0]+l[r];return d[0]}(r);p.seed=n;var i,o,a=p.getIntRange(0,255),u=p.getIntRange(0,this.settings.variants-1),f=p.getFloat(),c=255*(.5*(o=(i=-(1-Math.min(f/.7,1))+Math.max(0,f-.7)/(1-.7))<0?-1:1,Math.pow(Math.abs(i),1.2)*o)+.5);e.position0.setVec(t,r.position0),e.position1.setVec(t,r.position1),e.componentIndex.set(t,r.componentIndex),e.variantOffset.set(t,a),e.variantStroke.set(t,u),e.variantExtension.set(t,c)},e.prototype.trim=function(e,t){return e.slice(0,t)},e}();t.CommonBufferWriter=c;var s=new Float32Array(6),l=new Uint32Array(s.buffer),d=new Uint32Array(1),p=new i,g=function(){function e(){this.commonWriter=new c}return e.prototype.updateSettings=function(e){this.commonWriter.updateSettings(e)},e.prototype.allocate=function(e){return f.RegularEdgeInstancesLayout.createBuffer(e)},e.prototype.write=function(e,t,r){this.commonWriter.write(e,t,r),o.vec3.add(w,r.faceNormal0,r.faceNormal1),o.vec3.normalize(w,w),e.normal.setVec(t,w)},e.prototype.trim=function(e,t){return this.commonWriter.trim(e,t)},e.Layout=f.RegularEdgeInstancesLayout,e.glLayout=u.glLayout(f.RegularEdgeInstancesLayout,{divisor:1}),e}();t.RegularEdgeBufferWriter=g;var v=function(){function e(){this.commonWriter=new c}return e.prototype.updateSettings=function(e){this.commonWriter.updateSettings(e)},e.prototype.allocate=function(e){return f.SilhouetteEdgeInstancesLayout.createBuffer(e)},e.prototype.write=function(e,t,r){this.commonWriter.write(e,t,r),e.normalA.setVec(t,r.faceNormal0),e.normalB.setVec(t,r.faceNormal1)},e.prototype.trim=function(e,t){return this.commonWriter.trim(e,t)},e.Layout=f.SilhouetteEdgeInstancesLayout,e.glLayout=u.glLayout(f.SilhouetteEdgeInstancesLayout,{divisor:1}),e}();t.SilhouetteEdgeBufferWriter=v;var w=a.vec3f64.create()}).apply(null,n))||(e.exports=i)},W7eI:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("MzcX"),r("2B1V")],void 0===(i=(function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EdgeInputBufferLayout=n.newLayout().vec3f("position").u16("componentIndex").u16("_padding"),t.VertexLayout=n.newLayout().vec2u8("sideness"),t.glVertexLayout=r.glLayout(t.VertexLayout),t.CommonInstancesLayout=n.newLayout().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0}),t.RegularEdgeInstancesLayout=t.CommonInstancesLayout.clone().vec3f("normal"),t.SilhouetteEdgeInstancesLayout=t.CommonInstancesLayout.clone().vec3f("normalA").vec3f("normalB"),t.EdgeShaderAttributeLocations={position0:0,position1:1,componentIndex:2,variantOffset:4,variantStroke:5,variantExtension:6,normal:7,normalA:7,normalB:8,sideness:9}}).apply(null,n))||(e.exports=i)},jmRc:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("xoE+")],void 0===(i=(function(e,t,r){function n(e,t,n){var f=e.byteLength/(4*t),c=new Uint32Array(e,0,f*t),s=new Uint32Array(f),l=n&&n.minReduction||0,d=n&&n.originalIndices||null,p=n&&n.componentOffsets||null,g=0;if(p)for(var v=0;v<p.length-1;v++){var w=p[v+1]-p[v];w>g&&(g=w)}else g=f;var h=Math.floor(1.1*g)+1;for((null==u||u.length<2*h)&&(u=new Uint32Array(r.nextHighestPowerOfTwo(2*h))),v=0;v<2*h;v++)u[v]=0;var y=0,m=!!p&&!!d,V=m?d.length:f,I=m?new Uint32Array(d.length):null,B=0!==l?Math.ceil(7.84*1.96/(l*l)*l*(1-l)):V,b=1,A=p?p[1]:V;for(v=0;v<V;v++){if(v===B){var k=1-y/v;if(k+1.96*Math.sqrt(k*(1-k)/v)<l)return null;B*=2}if(v===A){for(var E=0;E<2*h;E++)u[E]=0;if(d)for(var L=p[b-1];L<p[b];L++)I[L]=s[d[L]];A=p[++b]}for(var x=m?d[v]:v,S=a(c,N=x*t,t),W=S%h,U=y;0!==u[2*W+1];){if(u[2*W]===S){var M=u[2*W+1]-1;if(i(c,N,M*t,t)){U=s[M];break}}++W>=h&&(W-=h)}U===y&&(u[2*W]=S,u[2*W+1]=x+1,y++),s[x]=U}if(0!==l&&1-y/f<l)return null;if(m){for(v=p[b-1];v<I.length;v++)I[v]=s[d[v]];s=I}var j=new Uint32Array(t*y);for(y=0,v=0;v<V;v++){var N;s[v]===y&&(o(c,N=(m?d[v]:v)*t,j,y*t,t),y++)}if(d&&!m){var R=new Uint32Array(d.length);for(v=0;v<R.length;v++)R[v]=s[d[v]];s=R}return{buffer:j.buffer,indices:s,uniqueCount:y}}function i(e,t,r,n){for(var i=0;i<n;i++)if(e[t+i]!==e[r+i])return!1;return!0}function o(e,t,r,n,i){for(var o=0;o<i;o++)r[n+o]=e[t+o]}function a(e,t,r){for(var n=0,i=0;i<r;i++)n=(n=e[t+i]+n|0)+(n<<11)+(n>>>2)|0;return n>>>0}Object.defineProperty(t,"__esModule",{value:!0}),t.deduplicate=n;var u=null;t.default=n}).apply(null,n))||(e.exports=i)},kfwU:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("KY0m"),r("xoE+"),r("rusB"),r("0LE5"),r("Rdxj"),r("AzkI")],void 0===(i=(function(e,t,r,n,i,o,a,u){function f(e,t){return e.cosAngle<t}function c(e,t){return e.cosAngle>t}function s(e,t){var r=n.acosClamped(e.cosAngle),i=l.fwd,a=l.ortho;return u.directionFromTo(i,e.position1,e.position0),r*(o.vec3.dot(o.vec3.cross(a,e.faceNormal0,e.faceNormal1),i)>0?-1:1)>t}Object.defineProperty(t,"__esModule",{value:!0}),t.extractEdges=function(e,t,a,u){void 0===u&&(u=p);var g=e.vertices.position,v=e.vertices.componentIndex,w=n.deg2rad(u.anglePlanar),h=n.deg2rad(u.angleSignificantEdge),y=Math.cos(h),m=Math.cos(w),V=l.edge,I=V.position0,B=V.position1,b=V.faceNormal0,A=V.faceNormal1,k=function(e){for(var t=e.faces.length/3,r=e.vertices.position,n=e.faces,i=d.v0,a=d.v1,u=d.v2,f=new Float32Array(3*t),c=0;c<t;c++){var s=n[3*c+1],l=n[3*c+2];r.getVec(n[3*c+0],i),r.getVec(s,a),r.getVec(l,u),o.vec3.subtract(a,a,i),o.vec3.subtract(u,u,i),o.vec3.cross(i,a,u),o.vec3.normalize(i,i),f[3*c+0]=i[0],f[3*c+1]=i[1],f[3*c+2]=i[2]}return f}(e),E=function(e){for(var t=e.faces.length/3,r=e.faces,n=e.neighbors,i=0,o=0;o<t;o++){var a=n[3*o+0],u=n[3*o+1],f=n[3*o+2],c=r[3*o+0],s=r[3*o+1],l=r[3*o+2];i+=-1===a||c<s?1:0,i+=-1===u||s<l?1:0,i+=-1===f||l<c?1:0}var d=new Int32Array(4*i),p=0;for(o=0;o<t;o++)u=n[3*o+1],f=n[3*o+2],c=r[3*o+0],s=r[3*o+1],l=r[3*o+2],(-1===(a=n[3*o+0])||c<s)&&(d[p++]=c,d[p++]=s,d[p++]=o,d[p++]=a),(-1===u||s<l)&&(d[p++]=s,d[p++]=l,d[p++]=o,d[p++]=u),(-1===f||l<c)&&(d[p++]=l,d[p++]=c,d[p++]=o,d[p++]=f);return d}(e),L=E.length/4,x=t.allocate(L),S=0,W=a.allocate(L),U=0,M=0,j=0,N=r.range(0,L),R=new Float32Array(L);i.forEach(R,(function(e,t,r){g.getVec(E[4*t+0],I),g.getVec(E[4*t+1],B),r[t]=o.vec3.distance(I,B)})),N.sort((function(e,t){return R[t]-R[e]}));for(var _=new Array,O=new Array,P=0;P<L;P++){var D=N[P],F=R[D],H=E[4*D+0],T=E[4*D+1],C=E[4*D+2],z=E[4*D+3],X=-1===z;if(g.getVec(H,I),g.getVec(T,B),X)o.vec3.set(b,k[3*C+0],k[3*C+1],k[3*C+2]),o.vec3.copy(A,b),V.componentIndex=v.get(H),V.cosAngle=o.vec3.dot(b,A);else{if(o.vec3.set(b,k[3*C+0],k[3*C+1],k[3*C+2]),o.vec3.set(A,k[3*z+0],k[3*z+1],k[3*z+2]),V.componentIndex=v.get(H),V.cosAngle=o.vec3.dot(b,A),c(V,m))continue;V.cosAngle<-.9999&&o.vec3.copy(A,b)}M+=F,j++,X||f(V,y)?(t.write(x,S++,V),_.push(F)):s(V,w)&&(a.write(W,U++,V),O.push(F))}var q=new Float32Array(_.reverse()),G=new Float32Array(O.reverse());return{regular:{instancesData:t.trim(x,S),lodInfo:{lengths:q}},silhouette:{instancesData:a.trim(W,U),lodInfo:{lengths:G}},averageEdgeLength:M/j}};var l={edge:{position0:a.vec3f64.create(),position1:a.vec3f64.create(),faceNormal0:a.vec3f64.create(),faceNormal1:a.vec3f64.create(),componentIndex:0,cosAngle:0},ortho:a.vec3f64.create(),fwd:a.vec3f64.create()},d={v0:a.vec3f64.create(),v1:a.vec3f64.create(),v2:a.vec3f64.create()},p={anglePlanar:4,angleSignificantEdge:35}}).apply(null,n))||(e.exports=i)}}]);