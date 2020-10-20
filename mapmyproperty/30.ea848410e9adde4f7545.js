(function(){var t={"arcgis-js-api/layers/graphics/data/BoundsStore":"2xGR","arcgis-js-api/symbols/support/defaultsJSON":"35hF","arcgis-js-api/core/libs/quickselect/quickselect":"FT4I","arcgis-js-api/layers/graphics/centroid":"Fzzg","arcgis-js-api/geometry/geometryAdapters/json":"H9Hv","arcgis-js-api/layers/support/FieldsIndex":"I90O","arcgis-js-api/layers/graphics/data/projectionSupport":"Q2Em","arcgis-js-api/core/libs/rbush/rbush":"jEml","arcgis-js-api/core/MemCache":"r7jh","arcgis-js-api/layers/graphics/data/FeatureStore":"rfv1","arcgis-js-api/layers/graphics/data/optimizedFeatureQueryEngineAdapter":"yLD6"},e=this||window,i=e.webpackJsonp=e.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(t):(i.absMidsWaiting=i.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"2xGR":function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i("H1tY"),i("jEml"),i("2Kdy")],void 0===(r=(function(t,e,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BoundsStore=void 0;var r={minX:0,minY:0,maxX:0,maxY:0},o=function(){function t(){var t=this;this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=n(9,i("csp-restrictions")?function(t){return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(t._indexInvalid){var e=new Array(t._idByBounds.size),i=0;t._idByBounds.forEach((function(t,n){e[i++]=n})),t._indexInvalid=!1,t._index.clear(),t._index.load(e)}else t._boundsToLoad.length&&(t._index.load(t._boundsToLoad.filter((function(e){return t._idByBounds.has(e)}))),t._boundsToLoad.length=0)}}return t.prototype.clear=function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()},t.prototype.delete=function(t){var e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))},t.prototype.forEachInBounds=function(t,e){this._loadIndex();for(var i=0,n=function(t,e){return r.minX=e[0],r.minY=e[1],r.maxX=e[2],r.maxY=e[3],t.search(r)}(this._index,t);i<n.length;i++)e(this._idByBounds.get(n[i]))},t.prototype.get=function(t){return this._boundsById.get(t)},t.prototype.has=function(t){return this._boundsById.has(t)},t.prototype.invalidateIndex=function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)},t.prototype.set=function(t,e){if(!this._indexInvalid){var i=this._boundsById.get(t);i&&(this._index.remove(i),this._idByBounds.delete(i))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))},t}();e.BoundsStore=o}).apply(null,n))||(t.exports=r)},"35hF":function(t,e,i){var n,r;n=[i.dj.c(t.i),e],void 0===(r=(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.errorPolygonSymbolJSON=e.errorPolylineSymbolJSON=e.errorPointSymbolJSON=e.defaultTextSymbolJSON=e.defaultPolygonSymbolJSON=e.defaultPolylineSymbolJSON=e.defaultPointSymbolJSON=e.defaultOutlineColor=e.defaultColor=void 0,e.defaultColor=[252,146,31,255],e.defaultOutlineColor=[153,153,153,255],e.defaultPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",size:6,color:e.defaultColor,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},e.defaultPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",width:.75,color:e.defaultColor},e.defaultPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},e.defaultTextSymbolJSON={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},e.errorPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},e.errorPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},e.errorPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}).apply(null,n))||(t.exports=r)},FT4I:function(t,e,i){var n;void 0===(n=(function(){"use strict";function t(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function e(t,e){return t<e?-1:t>e?1:0}return function(i,n,r,o,s){!function e(i,n,r,o,s){for(;o>r;){if(o-r>600){var a=o-r+1,h=n-r+1,u=Math.log(a),l=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*l*(a-l)/a)*(h-a/2<0?-1:1);e(i,n,Math.max(r,Math.floor(n-h*l/a+c)),Math.min(o,Math.floor(n+(a-h)*l/a+c)),s)}var d=i[n],f=r,p=o;for(t(i,r,n),s(i[o],d)>0&&t(i,r,o);f<p;){for(t(i,f,p),f++,p--;s(i[f],d)<0;)f++;for(;s(i[p],d)>0;)p--}0===s(i[r],d)?t(i,r,p):t(i,++p,o),p<=n&&(r=p+1),n<=p&&(o=p-1)}}(i,n,r||0,o||i.length-1,s||e)}}).apply(null,[]))||(t.exports=n)},Fzzg:function(t,e,i){var n,r;n=[i.dj.c(t.i),e],void 0===(r=(function(t,e){"use strict";function i(t,e){return t?e?4:3:e?3:2}function n(t,e,n,r,o,s,a){void 0===a&&(a=1);for(var h=i(o,s),u=n,l=n+h,c=0,d=0,f=0,p=0,m=0,_=0,y=r-1;_<y;_++,u+=h,l+=h){var g=e[u],v=e[u+1],x=e[u+2],b=e[l],S=e[l+1],M=e[l+2],I=g*S-b*v;p+=I,c+=(g+b)*I,d+=(v+S)*I,o&&(f+=(x+M)*(I=g*M-b*x),m+=I),g<t[0]&&(t[0]=g),g>t[1]&&(t[1]=g),v<t[2]&&(t[2]=v),v>t[3]&&(t[3]=v),o&&(x<t[4]&&(t[4]=x),x>t[5]&&(t[5]=x))}if(p*a>0&&(p*=-1),m*a>0&&(m*=-1),!p)return null;var B=[c,d,.5*p];return o&&(B[3]=f,B[4]=.5*m),B}function r(t,e,n,r,u){for(var l=i(r,u),c=e,d=e+l,f=0,p=0,m=0,_=0,y=0,g=n-1;y<g;y++,c+=l,d+=l){var v,x=t[c],b=t[c+1],S=t[c+2],M=t[d],I=t[d+1],B=t[d+2],z=r?s(x,b,S,M,I,B):o(x,b,M,I);z&&(f+=z,r?(p+=z*(v=h(x,b,S,M,I,B))[0],m+=z*v[1],_+=z*v[2]):(p+=z*(v=a(x,b,M,I))[0],m+=z*v[1]))}return f>0?r?[p/f,m/f,_/f]:[p/f,m/f]:n>0?r?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function o(t,e,i,n){var r=i-t,o=n-e;return Math.sqrt(r*r+o*o)}function s(t,e,i,n,r,o){var s=n-t,a=r-e,h=o-i;return Math.sqrt(s*s+a*a+h*h)}function a(t,e,i,n){return[t+.5*(i-t),e+.5*(n-e)]}function h(t,e,i,n,r,o){return[t+.5*(n-t),e+.5*(r-e),i+.5*(o-i)]}Object.defineProperty(e,"__esModule",{value:!0}),e.lineCentroid=e.getCentroidOptimizedGeometry=void 0,e.getCentroidOptimizedGeometry=function(t,e,o,s,a){if(!e||!e.lengths.length)return null;var h="upperLeft"===(null==a?void 0:a.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);for(var u=t.coords,l=[],c=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],d=e.lengths,f=e.coords,p=i(o,s),m=0,_=0,y=d;_<y.length;_++){var g=y[_],v=n(c,f,m,g,o,s,h);v&&l.push(v),m+=g*p}if(l.sort((function(t,e){var i=h*t[2]-h*e[2];return 0===i&&o&&(i=t[4]-e[4]),i})),l.length){var x=6*l[0][2];u[0]=l[0][0]/x,u[1]=l[0][1]/x,o&&(u[2]=0!=(x=6*l[0][4])?l[0][3]/x:0),(u[0]<c[0]||u[0]>c[1]||u[1]<c[2]||u[1]>c[3]||o&&(u[2]<c[4]||u[2]>c[5]))&&(u.length=0)}if(!u.length){var b=e.lengths[0]?r(f,0,d[0],o,s):null;if(!b)return null;u[0]=b[0],u[1]=b[1],o&&b.length>2&&(u[2]=b[2])}return t},e.lineCentroid=r}).apply(null,n))||(t.exports=r)},H9Hv:function(t,e,i){var n,r;n=[i.dj.c(t.i),e],void 0===(r=(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.jsonAdapter=void 0,e.jsonAdapter={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){var r=new i(t.getPointX(e),t.getPointY(e),n),o=t.hasZ(e),s=t.hasM(e);return o&&(r.z=t.getPointZ(e)),s&&(r.m=t.getPointM(e)),r},exportPolygon:function(t,e,i){return new n(t.exportPaths(e),i,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,i){return new r(t.exportPaths(e),i,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,i){return new o(t.exportPoints(e),i,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,i){var n=t.hasZ(e),r=t.hasM(e),o=new s(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),i);if(n){var a=t.getZExtent(e);o.zmin=a.vmin,o.zmax=a.vmax}if(r){var h=t.getMExtent(e);o.mmin=h.vmin,o.mmax=h.vmax}return o}};var i=function(t,e,i){this.x=t,this.y=e,this.spatialReference=i,this.z=void 0,this.m=void 0},n=function(t,e,i,n){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)},r=function(t,e,i,n){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)},o=function(t,e,i,n){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)},s=function(t,e,i,n,r){this.xmin=t,this.ymin=e,this.xmax=i,this.ymax=n,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}).apply(null,n))||(t.exports=r)},I90O:function(t,e,i){var n,r;n=[i.dj.c(t.i),e],void 0===(r=(function(t,e){"use strict";function i(t){return"date"===t.type||"esriFieldTypeDate"===t.type}function n(t){return t.toLowerCase().trim()}return function(){function t(t){if(this.fields=t,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],t){for(var e=[],r=0,o=t;r<o.length;r++){var s=o[r],a=s&&s.name;if(a){var h=n(a);this._fieldsMap.set(a,s),this._fieldsMap.set(h,s),e.push(h),i(s)&&(this.dateFields.push(s),this._dateFieldsSet.add(s))}}e.sort(),this.uid=e.join(",")}}return t.prototype.destroy=function(){this._fieldsMap.clear()},t.prototype.has=function(t){return null!=this.get(t)},t.prototype.get=function(t){return null!=t?this._fieldsMap.get(t)||this._fieldsMap.get(n(t)):void 0},t.prototype.isDateField=function(t){return this._dateFieldsSet.has(this.get(t))},t.prototype.normalizeFieldName=function(t){var e=this.get(t);if(e)return e.name},t}()}).apply(null,n))||(t.exports=r)},Q2Em:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i("zOht"),i("ma1f"),i("qMld"),i("wIC5"),i("H9Hv"),i("nrlZ"),i("vtMp")],void 0===(r=(function(t,e,i,n,r,o,s,a,h){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.projectMany=e.project=e.checkProjectionSupport=e.doesBrowserSupportProjection=void 0;var u=[0,0];function l(t,e){var i,n,r;if(!e)return null;if("x"in e){var o={x:0,y:0};return i=t(e.x,e.y,u),o.x=i[0],o.y=i[1],null!=e.z&&(o.z=e.z),null!=e.m&&(o.m=e.m),o}return"xmin"in e?(o={xmin:0,ymin:0,xmax:0,ymax:0},n=t(e.xmin,e.ymin,u),o.xmin=n[0],o.ymin=n[1],r=t(e.xmax,e.ymax,u),o.xmax=r[0],o.ymax=r[1],e.hasZ&&(o.zmin=e.zmin,o.zmax=e.zmax,o.hasZ=!0),e.hasM&&(o.mmin=e.mmin,o.mmax=e.mmax,o.hasM=!0),o):"rings"in e?{rings:c(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:c(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:d(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function c(t,e){for(var i=[],n=0,r=t;n<r.length;n++)i.push(d(r[n],e));return i}function d(t,e){for(var i=[],n=0,r=t;n<r.length;n++){var o=r[n],s=e(o[0],o[1],[0,0]);i.push(s),o.length>2&&s.push(o[2]),o.length>3&&s.push(o[3])}return i}function f(t,e){return!(!a.isValid(t)||!a.isValid(e)||a.equals(t,e)||h.canProject(t,e))}e.doesBrowserSupportProjection=function(t,e){return!f(t,e)||o.isSupported()},e.checkProjectionSupport=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var r,s,a;return i.__generator(this,(function(i){if(!e)return[2];if(Array.isArray(t)){for(r=0,s=t;r<s.length;r++)if(f((a=s[r]).geometry&&a.geometry.spatialReference,e)){if(o.isSupported())return[2,o.load()];throw new n("feature-store:unsupported-query","projection not supported",{inSpatialReference:t,outSpatialReference:e})}return[2]}if(!f(t,e))return[2];if(o.isSupported())return[2,o.load()];throw new n("feature-store:unsupported-query","projection not supported",{inSpatialReference:t,outSpatialReference:e})}))}))};var p=l.bind(null,h.lngLatToXY),m=l.bind(null,h.xyToLngLat);e.project=function(t,e,i){return t?(i||(i=e,e=t.spatialReference),a.isValid(e)&&a.isValid(i)&&!a.equals(e,i)?h.canProject(e,i)?a.isWebMercator(i)?p(t):m(t):o.projectMany(s.jsonAdapter,[t],e,i,null)[0]:t):t};var _=new(function(){function t(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return t.prototype.push=function(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var o,s=this;return i.__generator(this,(function(i){return t&&t.length&&e&&n&&!a.equals(e,n)||r.resolve(t),this._jobs.push(o={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null}),[2,r.create((function(t){o.resolve=t,null===s._timer&&(s._timer=setTimeout(s._process,10))}))]}))}))},t.prototype._process=function(){this._timer=null;var t=this._jobs.shift();if(t){var e=t.geometries,i=t.inSpatialReference,n=t.outSpatialReference,r=t.resolve;h.canProject(i,n)?a.isWebMercator(n)?r(e.map(p)):r(e.map(m)):r(o.projectMany(s.jsonAdapter,e,i,n,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},t}());e.projectMany=function(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,_.push(t,e,n)]}))}))}}).apply(null,n))||(t.exports=r)},jEml:function(t,e,i){var n,r;n=[i("FT4I")],void 0===(r=(function(t){"use strict";function e(t,i){if(!(this instanceof e))return new e(t,i);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function i(t,e,i){if(!i)return e.indexOf(t);for(var n=0;n<e.length;n++)if(i(t,e[n]))return n;return-1}function n(t,e){r(t,0,t.children.length,e,t)}function r(t,e,i,n,r){r||(r=d(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var s,a=e;a<i;a++)s=t.children[a],o(r,t.leaf?n(s):s);return r}function o(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function s(t,e){return t.minX-e.minX}function a(t,e){return t.minY-e.minY}function h(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function l(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function c(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function d(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function f(e,i,n,r,o){for(var s,a=[i,n];a.length;)(n=a.pop())-(i=a.pop())<=r||(s=i+Math.ceil((n-i)/r/2)*r,t(e,s,i,n,o),a.push(i,s,s,n))}return e.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,i=[],n=this.toBBox;if(!c(t,e))return i;for(var r,o,s,a,h=[];e;){for(r=0,o=e.children.length;r<o;r++)s=e.children[r],c(t,a=e.leaf?n(s):s)&&(e.leaf?i.push(s):l(t,a)?this._all(s,i):h.push(s));e=h.pop()}return i},collides:function(t){var e=this.data,i=this.toBBox;if(!c(t,e))return!1;for(var n,r,o,s,a=[];e;){for(n=0,r=e.children.length;n<r;n++)if(o=e.children[n],c(t,s=e.leaf?i(o):o)){if(e.leaf||l(t,s))return!0;a.push(o)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=d([]),this},remove:function(t,e){if(!t)return this;for(var n,r,o,s,a=this.data,h=this.toBBox(t),u=[],c=[];a||u.length;){if(a||(a=u.pop(),r=u[u.length-1],n=c.pop(),s=!0),a.leaf&&-1!==(o=i(t,a.children,e)))return a.children.splice(o,1),u.push(a),this._condense(u),this;s||a.leaf||!l(a,h)?r?(n++,a=r.children[n],s=!1):a=null:(u.push(a),c.push(n),n=0,r=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:s,compareMinY:a,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},_build:function(t,e,i,r){var o,s=i-e+1,a=this._maxEntries;if(s<=a)return n(o=d(t.slice(e,i+1)),this.toBBox),o;r||(r=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/Math.pow(a,r-1))),(o=d([])).leaf=!1,o.height=r;var h,u,l,c,p=Math.ceil(s/a),m=p*Math.ceil(Math.sqrt(a));for(f(t,e,i,m,this.compareMinX),h=e;h<=i;h+=m)for(f(t,h,l=Math.min(h+m-1,i),p,this.compareMinY),u=h;u<=l;u+=p)c=Math.min(u+p-1,l),o.children.push(this._build(t,u,c,r-1));return n(o,this.toBBox),o},_chooseSubtree:function(t,e,i,n){for(var r,o,s,a,u,l,c,d,f,p;n.push(e),!e.leaf&&n.length-1!==i;){for(c=d=1/0,r=0,o=e.children.length;r<o;r++)u=h(s=e.children[r]),f=t,p=s,(l=(Math.max(p.maxX,f.maxX)-Math.min(p.minX,f.minX))*(Math.max(p.maxY,f.maxY)-Math.min(p.minY,f.minY))-u)<d?(d=l,c=u<c?u:c,a=s):l===d&&u<c&&(c=u,a=s);e=a||e.children[0]}return e},_insert:function(t,e,i){var n=i?t:(0,this.toBBox)(t),r=[],s=this._chooseSubtree(n,this.data,e,r);for(s.children.push(t),o(s,n);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(n,r,e)},_split:function(t,e){var i=t[e],r=i.children.length,o=this._minEntries;this._chooseSplitAxis(i,o,r);var s=this._chooseSplitIndex(i,o,r),a=d(i.children.splice(s,i.children.length-s));a.height=i.height,a.leaf=i.leaf,n(i,this.toBBox),n(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(i,a)},_splitRoot:function(t,e){this.data=d([t,e]),this.data.height=t.height+1,this.data.leaf=!1,n(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,i){var n,o,s,a,u,l,c,d,f,p,m,_,y,g;for(l=c=1/0,n=e;n<=i-e;n++)f=o=r(t,0,n,this.toBBox),p=s=r(t,n,i,this.toBBox),m=Math.max(f.minX,p.minX),_=Math.max(f.minY,p.minY),y=Math.min(f.maxX,p.maxX),g=Math.min(f.maxY,p.maxY),a=Math.max(0,y-m)*Math.max(0,g-_),u=h(o)+h(s),a<l?(l=a,d=n,c=u<c?u:c):a===l&&u<c&&(c=u,d=n);return d},_chooseSplitAxis:function(t,e,i){var n=t.leaf?this.compareMinX:s,r=t.leaf?this.compareMinY:a;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,r)&&t.children.sort(n)},_allDistMargin:function(t,e,i,n){t.children.sort(n);var s,a,h=this.toBBox,l=r(t,0,e,h),c=r(t,i-e,i,h),d=u(l)+u(c);for(s=e;s<i-e;s++)a=t.children[s],o(l,t.leaf?h(a):a),d+=u(l);for(s=i-e-1;s>=e;s--)a=t.children[s],o(c,t.leaf?h(a):a),d+=u(c);return d},_adjustParentBBoxes:function(t,e,i){for(var n=i;n>=0;n--)o(e[n],t)},_condense:function(t){for(var e,i=t.length-1;i>=0;i--)0===t[i].children.length?i>0?(e=t[i-1].children).splice(e.indexOf(t[i]),1):this.clear():n(t[i],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}},e}).apply(null,n))||(t.exports=r)},r7jh:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i("R2Zq"),i("KBgh"),i("nRUF")],void 0===(r=(function(t,e,i,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MemCacheStorage=e.MemCache=e.MIN_PRIORITY=void 0,e.MIN_PRIORITY=-3;var o=function(){function t(t,e,i){this._namespace=t,this._storage=e,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",i&&(this._storage.registerRemoveFunc(this._namespace,i),this._removeFunc=!0)}return Object.defineProperty(t.prototype,"namespace",{get:function(){return this._namespace.slice(0,-1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hitRate",{get:function(){return this._hit/(this._hit+this._miss)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._storage.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxSize",{get:function(){return this._storage.maxSize},enumerable:!1,configurable:!0}),t.prototype.resetHitRate=function(){this._hit=this._miss=0},t.prototype.destroy=function(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)},t.prototype.put=function(t,e,i,n){void 0===n&&(n=0),this._storage.put(this._namespace+t,e,i,n)},t.prototype.get=function(t){var e=this._storage.get(this._namespace+t);return void 0===e?++this._miss:++this._hit,e},t.prototype.pop=function(t){var e=this._storage.pop(this._namespace+t);return void 0===e?++this._miss:++this._hit,e},t.prototype.updateSize=function(t,e,i){this._storage.updateSize(this._namespace+t,e,i)},t.prototype.clear=function(){this._storage.clear(this._namespace)},t.prototype.clearAll=function(){this._storage.clearAll()},t.prototype.getStats=function(){return this._storage.getStats()},t.prototype.resetStats=function(){this._storage.resetStats()},t}();e.MemCache=o;var s=function(){function t(t){void 0===t&&(t=10485760),this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new n}return t.prototype.register=function(t){this._users.push(t)},t.prototype.deregister=function(t){this._users.removeUnordered(t)},t.prototype.registerRemoveFunc=function(t,e){this._removeFuncs.push([t,e])},t.prototype.deregisterRemoveFunc=function(t){this._removeFuncs=this._removeFuncs.filter((function(e){return e[0]!==t}))},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxSize",{get:function(){return this._maxSize},set:function(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()},enumerable:!1,configurable:!0}),t.prototype.put=function(t,i,n,r){var o=this._db.get(t);if(o&&(this._size-=o.size,this._db.delete(t),o.entry!==i&&this._notifyRemoved(t,o.entry)),n>this._maxSize)this._notifyRemoved(t,i);else if(void 0!==i)if(!n||n<0)console.warn("Refusing to cache entry with invalid size "+n);else{var s=1+Math.max(r,e.MIN_PRIORITY)-e.MIN_PRIORITY;this._db.set(t,{entry:i,size:n,lifetime:s,lives:s}),this._size+=n,this._checkSizeLimit()}else console.warn("Refusing to cache undefined entry ")},t.prototype.updateSize=function(t,e,i){var n=this._db.get(t);n&&n.entry===e&&(this._size-=n.size,i>this._maxSize?this._notifyRemoved(t,e):(n.size=i,this._size+=i,this._checkSizeLimit()))},t.prototype.pop=function(t){var e=this._db.get(t);if(e)return this._size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss},t.prototype.get=function(t){var e=this._db.get(t);if(void 0!==e)return this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry;++this._miss},t.prototype.getStats=function(){var t=this,i={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},n={},o=new Array;this._db.forEach((function(e,i){var s=e.lifetime;o[s]=(o[s]||0)+e.size,t._users.forEachSimple((function(t){var o=t.namespace;r.startsWith(i,o)&&(n[o]=(n[o]||0)+e.size)}))}));var s={};this._users.forEachSimple((function(t){var e=t.namespace;!isNaN(t.hitRate)&&t.hitRate>0?(n[e]=n[e]||0,s[e]=Math.round(100*t.hitRate)+"%"):s[e]="0%"}));var a=Object.keys(n);a.forEach((function(e){return n[e]=n[e]/t._size*100})),a.sort((function(t,e){return n[e]-n[t]})),a.forEach((function(t){return i[t]=Math.round(n[t])+"% / "+s[t]}));for(var h=o.length-1;h>=0;--h){var u=o[h];u&&(i["Priority "+(h+e.MIN_PRIORITY-1)]=Math.round(u/this.size*100)+"%")}return i},t.prototype.resetStats=function(){this._hit=this._miss=0,this._users.forEachSimple((function(t){return t.resetHitRate()}))},t.prototype.clear=function(t){var e=this;this._db.forEach((function(i,n){r.startsWith(n,t)&&(e._size-=i.size,e._db.delete(n),e._notifyRemoved(n,i.entry))}))},t.prototype.clearAll=function(){var t=this;this._db.forEach((function(e,i){return t._notifyRemoved(i,e.entry)})),this._size=0,this._db.clear()},t.prototype._getHitRate=function(){return this._hit/(this._hit+this._miss)},t.prototype._notifyRemoved=function(t,e){this._removeFuncs.forEach((function(i){r.startsWith(t,i[0])&&i[1](e)}))},t.prototype._checkSizeLimit=function(){var t=this;this._size<=this._maxSize||i.someMap(this._db,(function(e,i){return t._db.delete(i),e.lives<=1?(t._size-=e.size,t._notifyRemoved(i,e.entry)):(--e.lives,t._db.set(i,e)),t._size<=.9*t.maxSize}))},t}();e.MemCacheStorage=s}).apply(null,n))||(t.exports=r)},rfv1:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i("ma1f"),i("BcWh"),i("qsST"),i("LxLY"),i("WRgd"),i("lRq4"),i("+6sX"),i("2xGR"),i("yLD6")],void 0===(r=(function(t,e,i,n,r,o,s,a,h,u,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t){this.geometryInfo=t,this._boundsStore=new u.BoundsStore,this._featuresById=new Map,this._markedIds=new Set,this.events=new n,this.featureAdapter=l.optimizedFeatureQueryEngineAdapter}return Object.defineProperty(t.prototype,"geometryType",{get:function(){return this.geometryInfo.geometryType},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasM",{get:function(){return this.geometryInfo.hasM},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasZ",{get:function(){return this.geometryInfo.hasZ},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"numFeatures",{get:function(){return this._featuresById.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fullBounds",{get:function(){var t=this;if(!this.numFeatures)return null;var e=a.create(a.NEGATIVE_INFINITY);return this._featuresById.forEach((function(i){var n=t._boundsStore.get(i.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))})),e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"storeStatistics",{get:function(){var t=0;return this._featuresById.forEach((function(e){e.geometry&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}},enumerable:!1,configurable:!0}),t.prototype.add=function(t){this._add(t),this._emitChanged()},t.prototype.addMany=function(t){for(var e=0,i=t;e<i.length;e++)this._add(i[e]);this._emitChanged()},t.prototype.clear=function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()},t.prototype.removeById=function(t){var e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null},t.prototype.removeManyById=function(t){this._boundsStore.invalidateIndex();for(var e=0,i=t;e<i.length;e++){var n=this._featuresById.get(i[e]);n&&this._remove(n)}this._emitChanged()},t.prototype.forEachBounds=function(t,e,i){for(var n=0,r=t;n<r.length;n++){var o=this._boundsStore.get(r[n].objectId);o&&e(s.fromRect(i,o))}},t.prototype.getFeature=function(t){return this._featuresById.get(t)},t.prototype.has=function(t){return this._featuresById.has(t)},t.prototype.forEach=function(t){this._featuresById.forEach((function(e){return t(e)}))},t.prototype.forEachInBounds=function(t,e){var i=this;this._boundsStore.forEachInBounds(t,(function(t){e(i._featuresById.get(t))}))},t.prototype.startMarkingUsedFeatures=function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()},t.prototype.sweep=function(){var t=this,e=!1;this._featuresById.forEach((function(i,n){t._markedIds.has(n)||(e=!0,t._remove(i))})),this._markedIds.clear(),e&&this._emitChanged()},t.prototype._emitChanged=function(){this.events.emit("changed",void 0)},t.prototype._add=function(t){if(t){var e=t.objectId;if(null!=e){var n,s=this._featuresById.get(e);if(this._markedIds.add(e),s?(t.displayId=s.displayId,n=this._boundsStore.get(e),this._boundsStore.delete(e)):o.isSome(this.onFeatureAdd)&&this.onFeatureAdd(t),!t.geometry||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);n=h.getBoundsOptimizedGeometry(n||a.create(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(e,n),this._featuresById.set(e,t)}else r.getLogger("esri.layers.graphics.data.FeatureStore").error(new i("featurestore:invalid-feature","feature id is missing",{feature:t}))}},t.prototype._remove=function(t){return o.isSome(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t},t}();e.default=c}).apply(null,n))||(t.exports=r)},yLD6:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i("Fzzg"),i("/COu"),i("Jvs9")],void 0===(r=(function(t,e,i,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.optimizedFeatureQueryEngineAdapter=void 0,e.optimizedFeatureQueryEngineAdapter={getObjectId:function(t){return t.objectId},getAttributes:function(t){return t.attributes},getAttribute:function(t,e){return t.attributes[e]},cloneWithGeometry:function(t,e){return new n.default(e,t.attributes,null,t.objectId)},getGeometry:function(t){return t.geometry},getCentroid:function(t,e){return t.centroid||(t.centroid=i.getCentroidOptimizedGeometry(new r.default,t.geometry,e.hasZ,e.hasM)),t.centroid}},e.default=e.optimizedFeatureQueryEngineAdapter}).apply(null,n))||(t.exports=r)}}]);