(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{"1kEK":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const s={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){const s=new i(t.getPointX(e),t.getPointY(e),n),r=t.hasZ(e),o=t.hasM(e);return r&&(s.z=t.getPointZ(e)),o&&(s.m=t.getPointM(e)),s},exportPolygon:function(t,e,n){return new r(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new o(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new a(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){const s=t.hasZ(e),i=t.hasM(e),r=new c(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(s){const n=t.getZExtent(e);r.zmin=n.vmin,r.zmax=n.vmax}if(i){const n=t.getMExtent(e);r.mmin=n.vmin,r.mmax=n.vmax}return r}};class i{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class r{constructor(t,e,n,s){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class o{constructor(t,e,n,s){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class a{constructor(t,e,n,s){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class c{constructor(t,e,n,s,i){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=s,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},"2X7Z":function(t,e,n){"use strict";function s(t,e){return t?e?4:3:e?3:2}function i(t,e,n,i,a){if(!e||!e.lengths.length)return null;const c="upperLeft"===(null==a?void 0:a.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const u=t.coords,h=[],l=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:m,coords:d}=e,p=s(n,i);let f=0;for(const s of m){const t=r(l,d,f,s,n,i,c);t&&h.push(t),f+=s*p}if(h.sort((t,e)=>{let s=c*t[2]-c*e[2];return 0===s&&n&&(s=t[4]-e[4]),s}),h.length){let t=6*h[0][2];u[0]=h[0][0]/t,u[1]=h[0][1]/t,n&&(t=6*h[0][4],u[2]=0!==t?h[0][3]/t:0),(u[0]<l[0]||u[0]>l[1]||u[1]<l[2]||u[1]>l[3]||n&&(u[2]<l[4]||u[2]>l[5]))&&(u.length=0)}if(!u.length){const t=e.lengths[0]?o(d,0,m[0],n,i):null;if(!t)return null;u[0]=t[0],u[1]=t[1],n&&t.length>2&&(u[2]=t[2])}return t}function r(t,e,n,i,r,o,a=1){const c=s(r,o);let u=n,h=n+c,l=0,m=0,d=0,p=0,f=0;for(let s=0,y=i-1;s<y;s++,u+=c,h+=c){const n=e[u],s=e[u+1],i=e[u+2],o=e[h],a=e[h+1],c=e[h+2];let x=n*a-o*s;p+=x,l+=(n+o)*x,m+=(s+a)*x,r&&(x=n*c-o*i,d+=(i+c)*x,f+=x),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),s<t[2]&&(t[2]=s),s>t[3]&&(t[3]=s),r&&(i<t[4]&&(t[4]=i),i>t[5]&&(t[5]=i))}if(p*a>0&&(p*=-1),f*a>0&&(f*=-1),!p)return null;const x=[l,m,.5*p];return r&&(x[3]=d,x[4]=.5*f),x}function o(t,e,n,i,r){const o=s(i,r);let l=e,m=e+o,d=0,p=0,f=0,x=0;for(let s=0,y=n-1;s<y;s++,l+=o,m+=o){const e=t[l],n=t[l+1],s=t[l+2],r=t[m],o=t[m+1],y=t[m+2],b=i?c(e,n,s,r,o,y):a(e,n,r,o);if(b)if(d+=b,i){const t=h(e,n,s,r,o,y);p+=b*t[0],f+=b*t[1],x+=b*t[2]}else{const t=u(e,n,r,o);p+=b*t[0],f+=b*t[1]}}return d>0?i?[p/d,f/d,x/d]:[p/d,f/d]:n>0?i?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function a(t,e,n,s){const i=n-t,r=s-e;return Math.sqrt(i*i+r*r)}function c(t,e,n,s,i,r){const o=s-t,a=i-e,c=r-n;return Math.sqrt(o*o+a*a+c*c)}function u(t,e,n,s){return[t+.5*(n-t),e+.5*(s-e)]}function h(t,e,n,s,i,r){return[t+.5*(s-t),e+.5*(i-e),n+.5*(r-n)]}n.d(e,"a",(function(){return i}))},HsO1:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return x}));var s=n("f4Nx"),i=n("l4ZG"),r=n("gYg2"),o=n("1kEK");const a=[0,0];function c(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,a),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,a),[n.xmax,n.ymax]=t(e.xmax,e.ymax,a),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:u(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:u(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:h(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function u(t,e){const n=[];for(const s of t)n.push(h(s,e));return n}function h(t,e){const n=[];for(const s of t){const t=e(s[0],s[1],[0,0]);n.push(t),s.length>2&&t.push(s[2]),s.length>3&&t.push(s[3])}return n}async function l(t,e){if(!e)return;const n=Array.isArray(t)?t.map(t=>{var e;return null==(e=t.geometry)?void 0:e.spatialReference}):[t];await Object(r.f)(n.map(t=>({source:t,dest:e})))}const m=c.bind(null,i.c),d=c.bind(null,i.f);function p(t,e,n){return t?(n||(n=e,e=t.spatialReference),Object(s.i)(e)&&Object(s.i)(n)&&!Object(s.c)(e,n)?Object(i.a)(e,n)?Object(s.m)(n)?m(t):d(t):Object(r.m)(o.a,[t],e,n,null)[0]:t):t}const f=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n){!t||!t.length||!e||!n||Object(s.c)(e,n);const i={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null};return this._jobs.push(i),new Promise(t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:a,resolve:c}=t;Object(i.a)(n,a)?Object(s.m)(a)?c(e.map(m)):c(e.map(d)):c(Object(r.m)(o.a,e,n,a,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};async function x(t,e,n){return f.push(t,e,n)}},RXWn:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var s=n("f4Nx"),i=n("PNY3"),r=n("KLE9"),o=n("qatw"),a=n("kYAx"),c=n("9w8m");function u(t){if(!t)return null;if("mesh"===t.type)return t.toJSON();let e=null;const n=t.spatialReference,a=Object(s.d)(n);if(!a)return t.toJSON();const u=n.isWebMercator?102100:4326,m=c.a[u].maxX,d=c.a[u].minX,p=c.a[u].plus180Line,y=c.a[u].minus180Line;let b;const g=t.toJSON();if(Object(o.f)(g))b=l(g,m,d);else if(Object(o.e)(g))g.points=g.points.map(t=>l(t,m,d)),b=g;else if(Object(o.d)(g))b=h(g,a);else if(Object(o.g)(g)||Object(o.h)(g)){const t=x;Object(r.a)(t,g);const n={xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3]},s=Object(c.d)(n.xmin,d)*(2*m),o=0===s?g:function(t,e){const n=Object(c.b)(t);for(const s of n)for(const t of s)t[0]+=e;return t}(g,s);n.xmin+=s,n.xmax+=s,Object(i.a)(n,p)&&n.xmax!==m||Object(i.a)(n,y)&&n.xmin!==d?e=o:b=o}else b=t.toJSON();return null!==e?(new f).cut(e,m):b}function h(t,e){if(!e)return t;const n=function(t,e){const n=[],{ymin:s,ymax:i}=t,r=t.xmax-t.xmin,o=t.xmin,a=t.xmax;let c;const[u,h]=e.valid;c=m(t.xmin,e);const l=c.x,p=c.frameId;c=m(t.xmax,e);const f=c.x,x=c.frameId,y=l===f&&r>0;if(r>2*h){const t={xmin:o<a?l:f,ymin:s,xmax:h,ymax:i},e={xmin:u,ymin:s,xmax:o<a?f:l,ymax:i},r={xmin:0,ymin:s,xmax:h,ymax:i},c={xmin:u,ymin:s,xmax:0,ymax:i},m=[],y=[];d(t,r)&&m.push(p),d(t,c)&&y.push(p),d(e,r)&&m.push(x),d(e,c)&&y.push(x);for(let n=p+1;n<x;n++)m.push(n),y.push(n);n.push({extent:t,frameIds:[p]},{extent:e,frameIds:[x]},{extent:r,frameIds:m},{extent:c,frameIds:y})}else l>f||y?n.push({extent:{xmin:l,ymin:s,xmax:h,ymax:i},frameIds:[p]},{extent:{xmin:u,ymin:s,xmax:f,ymax:i},frameIds:[x]}):n.push({extent:{xmin:l,ymin:s,xmax:f,ymax:i},frameIds:[p]});return n}(t,e).map(t=>t.extent);return n.length<2?n[0]||t:n.length>2?(t.xmin=e.valid[0],t.xmax=e.valid[1],t):{rings:n.map(t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]])}}function l(t,e,n){if(Array.isArray(t)){const s=t[0];if(s>e){const n=Object(c.d)(s,e);t[0]=s+n*(-2*e)}else if(s<n){const e=Object(c.d)(s,n);t[0]=s+e*(-2*n)}}else{const s=t.x;if(s>e){const n=Object(c.d)(s,e);t.x+=n*(-2*e)}else if(s<n){const e=Object(c.d)(s,n);t.x+=e*(-2*n)}}return t}function m(t,e){const[n,s]=e.valid,i=2*s;let r,o=0;return t>s?(r=Math.ceil(Math.abs(t-s)/i),t-=r*i,o=r):t<n&&(r=Math.ceil(Math.abs(t-n)/i),t+=r*i,o=-r),{x:t,frameId:o}}function d(t,e){const{xmin:n,ymin:s,xmax:i,ymax:r}=e;return p(t,n,s)&&p(t,n,r)&&p(t,i,r)&&p(t,i,s)}function p(t,e,n){return e>=t.xmin&&e<=t.xmax&&n>=t.ymin&&n<=t.ymax}class f{cut(t,e){let n;if(t.rings)this.closed=!0,n=t.rings,this.minPts=4;else{if(!t.paths)return null;this.closed=!1,n=t.paths,this.minPts=2}const s=n.length,i=-2*e;for(let r=0;r<s;r++){const t=n[r];if(t&&t.length>=this.minPts){const e=[];for(const n of t)e.push([n[0]+i,n[1]]);n.push(e)}}return this.closed?t.rings=n:t.paths=n,t}}const x=Object(a.g)()},RjdO:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var s=n("X2wA"),i=Object(s.b)((function(t){var e;void 0!==(e=function(){function t(n,s,i,r,o){for(;r>i;){if(r-i>600){var a=r-i+1,c=s-i+1,u=Math.log(a),h=.5*Math.exp(2*u/3),l=.5*Math.sqrt(u*h*(a-h)/a)*(c-a/2<0?-1:1);t(n,s,Math.max(i,Math.floor(s-c*h/a+l)),Math.min(r,Math.floor(s+(a-c)*h/a+l)),o)}var m=n[s],d=i,p=r;for(e(n,i,s),o(n[r],m)>0&&e(n,i,r);d<p;){for(e(n,d,p),d++,p--;o(n[d],m)<0;)d++;for(;o(n[p],m)>0;)p--}0===o(n[i],m)?e(n,i,p):e(n,++p,r),p<=s&&(i=p+1),s<=p&&(r=p-1)}}function e(t,e,n){var s=t[e];t[e]=t[n],t[n]=s}function n(t,e){return t<e?-1:t>e?1:0}return function(e,s,i,r,o){t(e,s,i||0,r||e.length-1,o||n)}}())&&(t.exports=e)}))},sjSM:function(t,e,n){"use strict";n.r(e),n.d(e,"GraphicsSnappingSource",(function(){return I}));var s=n("pO5D"),i=(n("wSAH"),n("srIe")),r=(n("6S2I"),n("zqDF"),n("WbKI")),o=n("04ZG"),a=(n("4EHJ"),n("ju1D"),n("9AIY"),n("tQ+6")),c=n("9MzC"),u=n("/CmD"),h=n("SuVq"),l=n("Ehki"),m=n("dOLD"),d=n("gYg2"),p=n("k5I3"),f=n("ZlUD"),x=n("kJYu"),y=n("ZwYu"),b=n("RXWn"),g=n("ZRfE"),O=n("ZBG3"),j=n("Wf2p");let I=class extends(Object(x.b)(u.a)){constructor(t){super(t),this.availability=1,this.sources={multipoint:null,point:null,polygon:null,polyline:null},this.loadedWkids=new Set,this.loadedWkts=new Set,this.pendingAdds=[]}get updating(){return this.updatingHandles.updating}get layer(){return this.layerSource.layer}destroy(){const t=this.pendingAdds;this.pendingAdds.length=0;for(const e of t)e.task.abort();this.mapSources(t=>this.destroySource(t))}initialize(){this.handles.add([this.layer.on("graphic-update",t=>this.onGraphicUpdate(t)),this.updatingHandles.addOnCollectionChange(this.layer.graphics,t=>this.onGraphicsChanged(t))]),this.addMany(this.layer.graphics.toArray())}async fetchCandidates(t,e){const n=(await Object(c.k)(this.mapSources(n=>n.queryEngine.executeQueryForSnapping({point:t.coordinateHelper.toPoint(t.point,new h.a).toJSON(),distance:t.distance,types:t.types,query:Object(i.k)(t.filter)?t.filter.createQuery().toJSON():{where:"1=1"}},e).then(({candidates:t})=>t)))).flat().map(e=>Object(j.a)(e,t.coordinateHelper));return Object(y.e)(t.point,n),{candidates:n}}refresh(){}onGraphicUpdate(t){switch(t.property){case"geometry":case"visible":this.remove(t.graphic),this.addMany([t.graphic])}}onGraphicsChanged(t){for(const e of t.removed)this.remove(e);this.addMany(t.added)}addMany(t){const e=[],n=new Map;for(const s of t)Object(i.j)(s.geometry)||(this.needsInitializeProjection(s.geometry.spatialReference)?(e.push(s.geometry.spatialReference),n.set(s.uid,s)):this.add(s));this.createPendingAdd(e,n)}createPendingAdd(t,e){if(!t.length)return;const n=Object(c.h)(async n=>{await Object(d.f)(t.map(t=>({source:t,dest:this.spatialReference})),{signal:n}),this.markLoadedSpatialReferences(t);for(const[,t]of e)this.add(t)});this.updatingHandles.addPromise(n.promise);const s={task:n,graphics:e},i=()=>Object(a.j)(this.pendingAdds,s);n.promise.then(i,i),this.pendingAdds.push(s)}markLoadedSpatialReferences(t){for(const e of t)null!=e.wkid&&this.loadedWkids.add(e.wkid),null!=e.wkt&&this.loadedWkts.add(e.wkt)}add(t){if(Object(i.j)(t.geometry)||!t.visible)return;let e=t.geometry;if("mesh"===e.type)return;"extent"===e.type&&(e=l.a.fromExtent(e));const n=this.ensureSource(e.type);if(Object(i.j)(n))return;const s=this.createOptimizedFeature(t.uid,e);Object(i.k)(s)&&n.featureStore.add(s)}needsInitializeProjection(t){return!(null!=t.wkid&&this.loadedWkids.has(t.wkid)||null!=t.wkt&&this.loadedWkts.has(t.wkt)||Object(d.b)(t,this.spatialReference))}createOptimizedFeature(t,e){const n=Object(d.j)(Object(b.a)(e),this.spatialReference);return n?new p.a(Object(f.d)(n,!1,!1),{[v]:t},null,t):null}ensureSource(t){const e=this.sources[t];if(Object(i.k)(e))return e;const n=this.createSource(t);return this.sources[t]=n,n}createSource(t){const e=m.a.toJSON(t),n=new g.a({geometryType:e,hasZ:!1,hasM:!1});return{featureStore:n,queryEngine:new O.a({featureStore:n,fields:[{name:v,type:"esriFieldTypeOID",alias:v}],geometryType:e,hasM:!1,hasZ:!1,objectIdField:v,spatialReference:this.spatialReference,scheduler:Object(i.k)(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:t}}remove(t){this.mapSources(e=>this.removeFromSource(e,t));for(const e of this.pendingAdds)e.graphics.delete(t.uid),0===e.graphics.size&&e.task.abort()}removeFromSource(t,e){t.featureStore.has(e.uid)&&t.featureStore.removeById(e.uid)}destroySource(t){t.queryEngine.destroy(),this.sources[t.type]=null}mapSources(t){const{point:e,polygon:n,polyline:s,multipoint:r}=this.sources,o=[];return Object(i.k)(e)&&o.push(t(e)),Object(i.k)(n)&&o.push(t(n)),Object(i.k)(s)&&o.push(t(s)),Object(i.k)(r)&&o.push(t(r)),o}};Object(s.a)([Object(r.b)({constructOnly:!0})],I.prototype,"spatialReference",void 0),Object(s.a)([Object(r.b)({constructOnly:!0})],I.prototype,"layerSource",void 0),Object(s.a)([Object(r.b)({constructOnly:!0})],I.prototype,"view",void 0),Object(s.a)([Object(r.b)({readOnly:!0})],I.prototype,"updating",null),Object(s.a)([Object(r.b)({readOnly:!0})],I.prototype,"availability",void 0),I=Object(s.a)([Object(o.a)("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],I);const v="OBJECTID"}}]);