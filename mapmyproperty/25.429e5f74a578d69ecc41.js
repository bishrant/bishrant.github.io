(function(){var t={"esri/layers/graphics/data/BoundsStore":"2xGR","esri/core/libs/quickselect/quickselect":"FT4I","esri/layers/graphics/centroid":"Fzzg","esri/geometry/geometryAdapters/json":"H9Hv","arcgis-js-api/layers/graphics/data/projectionSupport":"Q2Em","esri/layers/graphics/data/projectionSupport":"Q2Em","arcgis-js-api/core/libs/rbush/rbush":"jEml","esri/core/libs/rbush/rbush":"jEml","esri/layers/graphics/data/FeatureStore":"rfv1","esri/layers/graphics/data/optimizedFeatureQueryEngineAdapter":"yLD6"},e=this||window,n=e.webpackJsonp=e.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(t):(n.absMidsWaiting=n.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"2xGR":function(t,e,n){var i,r;i=[n.dj.c(t.i),e,n("H1tY"),n("jEml"),n("2Kdy")],void 0===(r=(function(t,e,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BoundsStore=void 0;var r={minX:0,minY:0,maxX:0,maxY:0},o=function(){function t(){var t=this;this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=i(9,n("csp-restrictions")?function(t){return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(t._indexInvalid){var e=new Array(t._idByBounds.size),n=0;t._idByBounds.forEach((function(t,i){e[n++]=i})),t._indexInvalid=!1,t._index.clear(),t._index.load(e)}else t._boundsToLoad.length&&(t._index.load(t._boundsToLoad.filter((function(e){return t._idByBounds.has(e)}))),t._boundsToLoad.length=0)}}return t.prototype.clear=function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()},t.prototype.delete=function(t){var e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))},t.prototype.forEachInBounds=function(t,e){this._loadIndex();for(var n=0,i=function(t,e){return r.minX=e[0],r.minY=e[1],r.maxX=e[2],r.maxY=e[3],t.search(r)}(this._index,t);n<i.length;n++)e(this._idByBounds.get(i[n]))},t.prototype.get=function(t){return this._boundsById.get(t)},t.prototype.has=function(t){return this._boundsById.has(t)},t.prototype.invalidateIndex=function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)},t.prototype.set=function(t,e){if(!this._indexInvalid){var n=this._boundsById.get(t);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))},t}();e.BoundsStore=o}).apply(null,i))||(t.exports=r)},FT4I:function(t,e,n){var i;void 0===(i=(function(){"use strict";function t(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function e(t,e){return t<e?-1:t>e?1:0}return function(n,i,r,o,s){!function e(n,i,r,o,s){for(;o>r;){if(o-r>600){var a=o-r+1,h=i-r+1,u=Math.log(a),d=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*d*(a-d)/a)*(h-a/2<0?-1:1);e(n,i,Math.max(r,Math.floor(i-h*d/a+c)),Math.min(o,Math.floor(i+(a-h)*d/a+c)),s)}var l=n[i],f=r,p=o;for(t(n,r,i),s(n[o],l)>0&&t(n,r,o);f<p;){for(t(n,f,p),f++,p--;s(n[f],l)<0;)f++;for(;s(n[p],l)>0;)p--}0===s(n[r],l)?t(n,r,p):t(n,++p,o),p<=i&&(r=p+1),i<=p&&(o=p-1)}}(n,i,r||0,o||n.length-1,s||e)}}).apply(null,[]))||(t.exports=i)},Fzzg:function(t,e,n){var i,r;i=[n.dj.c(t.i),e],void 0===(r=(function(t,e){"use strict";function n(t,e){return t?e?4:3:e?3:2}function i(t,e,i,r,o,s,a){void 0===a&&(a=1);for(var h=n(o,s),u=i,d=i+h,c=0,l=0,f=0,p=0,m=0,g=0,_=r-1;g<_;g++,u+=h,d+=h){var v=e[u],y=e[u+1],x=e[u+2],I=e[d],b=e[d+1],M=e[d+2],B=v*b-I*y;p+=B,c+=(v+I)*B,l+=(y+b)*B,o&&(f+=(x+M)*(B=v*M-I*x),m+=B),v<t[0]&&(t[0]=v),v>t[1]&&(t[1]=v),y<t[2]&&(t[2]=y),y>t[3]&&(t[3]=y),o&&(x<t[4]&&(t[4]=x),x>t[5]&&(t[5]=x))}if(p*a>0&&(p*=-1),m*a>0&&(m*=-1),!p)return null;var j=[c,l,.5*p];return o&&(j[3]=f,j[4]=.5*m),j}function r(t,e,i,r,u){for(var d=n(r,u),c=e,l=e+d,f=0,p=0,m=0,g=0,_=0,v=i-1;_<v;_++,c+=d,l+=d){var y,x=t[c],I=t[c+1],b=t[c+2],M=t[l],B=t[l+1],j=t[l+2],Y=r?s(x,I,b,M,B,j):o(x,I,M,B);Y&&(f+=Y,r?(p+=Y*(y=h(x,I,b,M,B,j))[0],m+=Y*y[1],g+=Y*y[2]):(p+=Y*(y=a(x,I,M,B))[0],m+=Y*y[1]))}return f>0?r?[p/f,m/f,g/f]:[p/f,m/f]:i>0?r?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function o(t,e,n,i){var r=n-t,o=i-e;return Math.sqrt(r*r+o*o)}function s(t,e,n,i,r,o){var s=i-t,a=r-e,h=o-n;return Math.sqrt(s*s+a*a+h*h)}function a(t,e,n,i){return[t+.5*(n-t),e+.5*(i-e)]}function h(t,e,n,i,r,o){return[t+.5*(i-t),e+.5*(r-e),n+.5*(o-n)]}Object.defineProperty(e,"__esModule",{value:!0}),e.lineCentroid=e.getCentroidOptimizedGeometry=void 0,e.getCentroidOptimizedGeometry=function(t,e,o,s,a){if(!e||!e.lengths.length)return null;var h="upperLeft"===(null==a?void 0:a.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);for(var u=t.coords,d=[],c=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],l=e.lengths,f=e.coords,p=n(o,s),m=0,g=0,_=l;g<_.length;g++){var v=_[g],y=i(c,f,m,v,o,s,h);y&&d.push(y),m+=v*p}if(d.sort((function(t,e){var n=h*t[2]-h*e[2];return 0===n&&o&&(n=t[4]-e[4]),n})),d.length){var x=6*d[0][2];u[0]=d[0][0]/x,u[1]=d[0][1]/x,o&&(u[2]=0!=(x=6*d[0][4])?d[0][3]/x:0),(u[0]<c[0]||u[0]>c[1]||u[1]<c[2]||u[1]>c[3]||o&&(u[2]<c[4]||u[2]>c[5]))&&(u.length=0)}if(!u.length){var I=e.lengths[0]?r(f,0,l[0],o,s):null;if(!I)return null;u[0]=I[0],u[1]=I[1],o&&I.length>2&&(u[2]=I[2])}return t},e.lineCentroid=r}).apply(null,i))||(t.exports=r)},H9Hv:function(t,e,n){var i,r;i=[n.dj.c(t.i),e],void 0===(r=(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.jsonAdapter=void 0,e.jsonAdapter={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,i){var r=new n(t.getPointX(e),t.getPointY(e),i),o=t.hasZ(e),s=t.hasM(e);return o&&(r.z=t.getPointZ(e)),s&&(r.m=t.getPointM(e)),r},exportPolygon:function(t,e,n){return new i(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new r(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new o(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){var i=t.hasZ(e),r=t.hasM(e),o=new s(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(i){var a=t.getZExtent(e);o.zmin=a.vmin,o.zmax=a.vmax}if(r){var h=t.getMExtent(e);o.mmin=h.vmin,o.mmax=h.vmax}return o}};var n=function(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0},i=function(t,e,n,i){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)},r=function(t,e,n,i){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)},o=function(t,e,n,i){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)},s=function(t,e,n,i,r){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}).apply(null,i))||(t.exports=r)},Q2Em:function(t,e,n){var i,r;i=[n.dj.c(t.i),e,n("zOht"),n("ma1f"),n("qMld"),n("wIC5"),n("H9Hv"),n("nrlZ"),n("vtMp")],void 0===(r=(function(t,e,n,i,r,o,s,a,h){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.projectMany=e.project=e.checkProjectionSupport=e.doesBrowserSupportProjection=void 0;var u=[0,0];function d(t,e){var n,i,r;if(!e)return null;if("x"in e){var o={x:0,y:0};return n=t(e.x,e.y,u),o.x=n[0],o.y=n[1],null!=e.z&&(o.z=e.z),null!=e.m&&(o.m=e.m),o}return"xmin"in e?(o={xmin:0,ymin:0,xmax:0,ymax:0},i=t(e.xmin,e.ymin,u),o.xmin=i[0],o.ymin=i[1],r=t(e.xmax,e.ymax,u),o.xmax=r[0],o.ymax=r[1],e.hasZ&&(o.zmin=e.zmin,o.zmax=e.zmax,o.hasZ=!0),e.hasM&&(o.mmin=e.mmin,o.mmax=e.mmax,o.hasM=!0),o):"rings"in e?{rings:c(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:c(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:l(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function c(t,e){for(var n=[],i=0,r=t;i<r.length;i++)n.push(l(r[i],e));return n}function l(t,e){for(var n=[],i=0,r=t;i<r.length;i++){var o=r[i],s=e(o[0],o[1],[0,0]);n.push(s),o.length>2&&s.push(o[2]),o.length>3&&s.push(o[3])}return n}function f(t,e){return!(!a.isValid(t)||!a.isValid(e)||a.equals(t,e)||h.canProject(t,e))}e.doesBrowserSupportProjection=function(t,e){return!f(t,e)||o.isSupported()},e.checkProjectionSupport=function(t,e){return n.__awaiter(this,void 0,void 0,(function(){var r,s,a;return n.__generator(this,(function(n){if(!e)return[2];if(Array.isArray(t)){for(r=0,s=t;r<s.length;r++)if(f((a=s[r]).geometry&&a.geometry.spatialReference,e)){if(o.isSupported())return[2,o.load()];throw new i("feature-store:unsupported-query","projection not supported",{inSpatialReference:t,outSpatialReference:e})}return[2]}if(!f(t,e))return[2];if(o.isSupported())return[2,o.load()];throw new i("feature-store:unsupported-query","projection not supported",{inSpatialReference:t,outSpatialReference:e})}))}))};var p=d.bind(null,h.lngLatToXY),m=d.bind(null,h.xyToLngLat);e.project=function(t,e,n){return t?(n||(n=e,e=t.spatialReference),a.isValid(e)&&a.isValid(n)&&!a.equals(e,n)?h.canProject(e,n)?a.isWebMercator(n)?p(t):m(t):o.projectMany(s.jsonAdapter,[t],e,n,null)[0]:t):t};var g=new(function(){function t(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return t.prototype.push=function(t,e,i){return n.__awaiter(this,void 0,void 0,(function(){var o,s=this;return n.__generator(this,(function(n){return t&&t.length&&e&&i&&!a.equals(e,i)||r.resolve(t),this._jobs.push(o={geometries:t,inSpatialReference:e,outSpatialReference:i,resolve:null}),[2,r.create((function(t){o.resolve=t,null===s._timer&&(s._timer=setTimeout(s._process,10))}))]}))}))},t.prototype._process=function(){this._timer=null;var t=this._jobs.shift();if(t){var e=t.geometries,n=t.inSpatialReference,i=t.outSpatialReference,r=t.resolve;h.canProject(n,i)?a.isWebMercator(i)?r(e.map(p)):r(e.map(m)):r(o.projectMany(s.jsonAdapter,e,n,i,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},t}());e.projectMany=function(t,e,i){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){return[2,g.push(t,e,i)]}))}))}}).apply(null,i))||(t.exports=r)},jEml:function(t,e,n){var i,r;i=[n("FT4I")],void 0===(r=(function(t){"use strict";function e(t,n){if(!(this instanceof e))return new e(t,n);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}function n(t,e,n){if(!n)return e.indexOf(t);for(var i=0;i<e.length;i++)if(n(t,e[i]))return i;return-1}function i(t,e){r(t,0,t.children.length,e,t)}function r(t,e,n,i,r){r||(r=l(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var s,a=e;a<n;a++)s=t.children[a],o(r,t.leaf?i(s):s);return r}function o(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function s(t,e){return t.minX-e.minX}function a(t,e){return t.minY-e.minY}function h(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function c(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function l(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function f(e,n,i,r,o){for(var s,a=[n,i];a.length;)(i=a.pop())-(n=a.pop())<=r||(s=n+Math.ceil((i-n)/r/2)*r,t(e,s,n,i,o),a.push(n,s,s,i))}return e.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,n=[],i=this.toBBox;if(!c(t,e))return n;for(var r,o,s,a,h=[];e;){for(r=0,o=e.children.length;r<o;r++)s=e.children[r],c(t,a=e.leaf?i(s):s)&&(e.leaf?n.push(s):d(t,a)?this._all(s,n):h.push(s));e=h.pop()}return n},collides:function(t){var e=this.data,n=this.toBBox;if(!c(t,e))return!1;for(var i,r,o,s,a=[];e;){for(i=0,r=e.children.length;i<r;i++)if(o=e.children[i],c(t,s=e.leaf?n(o):o)){if(e.leaf||d(t,s))return!0;a.push(o)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=l([]),this},remove:function(t,e){if(!t)return this;for(var i,r,o,s,a=this.data,h=this.toBBox(t),u=[],c=[];a||u.length;){if(a||(a=u.pop(),r=u[u.length-1],i=c.pop(),s=!0),a.leaf&&-1!==(o=n(t,a.children,e)))return a.children.splice(o,1),u.push(a),this._condense(u),this;s||a.leaf||!d(a,h)?r?(i++,a=r.children[i],s=!1):a=null:(u.push(a),c.push(i),i=0,r=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:s,compareMinY:a,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var n=[];t;)t.leaf?e.push.apply(e,t.children):n.push.apply(n,t.children),t=n.pop();return e},_build:function(t,e,n,r){var o,s=n-e+1,a=this._maxEntries;if(s<=a)return i(o=l(t.slice(e,n+1)),this.toBBox),o;r||(r=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/Math.pow(a,r-1))),(o=l([])).leaf=!1,o.height=r;var h,u,d,c,p=Math.ceil(s/a),m=p*Math.ceil(Math.sqrt(a));for(f(t,e,n,m,this.compareMinX),h=e;h<=n;h+=m)for(f(t,h,d=Math.min(h+m-1,n),p,this.compareMinY),u=h;u<=d;u+=p)c=Math.min(u+p-1,d),o.children.push(this._build(t,u,c,r-1));return i(o,this.toBBox),o},_chooseSubtree:function(t,e,n,i){for(var r,o,s,a,u,d,c,l,f,p;i.push(e),!e.leaf&&i.length-1!==n;){for(c=l=1/0,r=0,o=e.children.length;r<o;r++)u=h(s=e.children[r]),f=t,p=s,(d=(Math.max(p.maxX,f.maxX)-Math.min(p.minX,f.minX))*(Math.max(p.maxY,f.maxY)-Math.min(p.minY,f.minY))-u)<l?(l=d,c=u<c?u:c,a=s):d===l&&u<c&&(c=u,a=s);e=a||e.children[0]}return e},_insert:function(t,e,n){var i=n?t:(0,this.toBBox)(t),r=[],s=this._chooseSubtree(i,this.data,e,r);for(s.children.push(t),o(s,i);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(i,r,e)},_split:function(t,e){var n=t[e],r=n.children.length,o=this._minEntries;this._chooseSplitAxis(n,o,r);var s=this._chooseSplitIndex(n,o,r),a=l(n.children.splice(s,n.children.length-s));a.height=n.height,a.leaf=n.leaf,i(n,this.toBBox),i(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(n,a)},_splitRoot:function(t,e){this.data=l([t,e]),this.data.height=t.height+1,this.data.leaf=!1,i(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,n){var i,o,s,a,u,d,c,l,f,p,m,g,_,v;for(d=c=1/0,i=e;i<=n-e;i++)f=o=r(t,0,i,this.toBBox),p=s=r(t,i,n,this.toBBox),m=Math.max(f.minX,p.minX),g=Math.max(f.minY,p.minY),_=Math.min(f.maxX,p.maxX),v=Math.min(f.maxY,p.maxY),a=Math.max(0,_-m)*Math.max(0,v-g),u=h(o)+h(s),a<d?(d=a,l=i,c=u<c?u:c):a===d&&u<c&&(c=u,l=i);return l},_chooseSplitAxis:function(t,e,n){var i=t.leaf?this.compareMinX:s,r=t.leaf?this.compareMinY:a;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,r)&&t.children.sort(i)},_allDistMargin:function(t,e,n,i){t.children.sort(i);var s,a,h=this.toBBox,d=r(t,0,e,h),c=r(t,n-e,n,h),l=u(d)+u(c);for(s=e;s<n-e;s++)a=t.children[s],o(d,t.leaf?h(a):a),l+=u(d);for(s=n-e-1;s>=e;s--)a=t.children[s],o(c,t.leaf?h(a):a),l+=u(c);return l},_adjustParentBBoxes:function(t,e,n){for(var i=n;i>=0;i--)o(e[i],t)},_condense:function(t){for(var e,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(e=t[n-1].children).splice(e.indexOf(t[n]),1):this.clear():i(t[n],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}},e}).apply(null,i))||(t.exports=r)},rfv1:function(t,e,n){var i,r;i=[n.dj.c(t.i),e,n("ma1f"),n("BcWh"),n("qsST"),n("LxLY"),n("WRgd"),n("lRq4"),n("+6sX"),n("2xGR"),n("yLD6")],void 0===(r=(function(t,e,n,i,r,o,s,a,h,u,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t){this.geometryInfo=t,this._boundsStore=new u.BoundsStore,this._featuresById=new Map,this._markedIds=new Set,this.events=new i,this.featureAdapter=d.optimizedFeatureQueryEngineAdapter}return Object.defineProperty(t.prototype,"geometryType",{get:function(){return this.geometryInfo.geometryType},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasM",{get:function(){return this.geometryInfo.hasM},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasZ",{get:function(){return this.geometryInfo.hasZ},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"numFeatures",{get:function(){return this._featuresById.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fullBounds",{get:function(){var t=this;if(!this.numFeatures)return null;var e=a.create(a.NEGATIVE_INFINITY);return this._featuresById.forEach((function(n){var i=t._boundsStore.get(n.objectId);i&&(e[0]=Math.min(i[0],e[0]),e[1]=Math.min(i[1],e[1]),e[2]=Math.max(i[2],e[2]),e[3]=Math.max(i[3],e[3]))})),e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"storeStatistics",{get:function(){var t=0;return this._featuresById.forEach((function(e){e.geometry&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}},enumerable:!1,configurable:!0}),t.prototype.add=function(t){this._add(t),this._emitChanged()},t.prototype.addMany=function(t){for(var e=0,n=t;e<n.length;e++)this._add(n[e]);this._emitChanged()},t.prototype.clear=function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()},t.prototype.removeById=function(t){var e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null},t.prototype.removeManyById=function(t){this._boundsStore.invalidateIndex();for(var e=0,n=t;e<n.length;e++){var i=this._featuresById.get(n[e]);i&&this._remove(i)}this._emitChanged()},t.prototype.forEachBounds=function(t,e,n){for(var i=0,r=t;i<r.length;i++){var o=this._boundsStore.get(r[i].objectId);o&&e(s.fromRect(n,o))}},t.prototype.getFeature=function(t){return this._featuresById.get(t)},t.prototype.has=function(t){return this._featuresById.has(t)},t.prototype.forEach=function(t){this._featuresById.forEach((function(e){return t(e)}))},t.prototype.forEachInBounds=function(t,e){var n=this;this._boundsStore.forEachInBounds(t,(function(t){e(n._featuresById.get(t))}))},t.prototype.startMarkingUsedFeatures=function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()},t.prototype.sweep=function(){var t=this,e=!1;this._featuresById.forEach((function(n,i){t._markedIds.has(i)||(e=!0,t._remove(n))})),this._markedIds.clear(),e&&this._emitChanged()},t.prototype._emitChanged=function(){this.events.emit("changed",void 0)},t.prototype._add=function(t){if(t){var e=t.objectId;if(null!=e){var i,s=this._featuresById.get(e);if(this._markedIds.add(e),s?(t.displayId=s.displayId,i=this._boundsStore.get(e),this._boundsStore.delete(e)):o.isSome(this.onFeatureAdd)&&this.onFeatureAdd(t),!t.geometry||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);i=h.getBoundsOptimizedGeometry(i||a.create(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(e,i),this._featuresById.set(e,t)}else r.getLogger("esri.layers.graphics.data.FeatureStore").error(new n("featurestore:invalid-feature","feature id is missing",{feature:t}))}},t.prototype._remove=function(t){return o.isSome(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t},t}();e.default=c}).apply(null,i))||(t.exports=r)},yLD6:function(t,e,n){var i,r;i=[n.dj.c(t.i),e,n("Fzzg"),n("/COu"),n("Jvs9")],void 0===(r=(function(t,e,n,i,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.optimizedFeatureQueryEngineAdapter=void 0,e.optimizedFeatureQueryEngineAdapter={getObjectId:function(t){return t.objectId},getAttributes:function(t){return t.attributes},getAttribute:function(t,e){return t.attributes[e]},cloneWithGeometry:function(t,e){return new i.default(e,t.attributes,null,t.objectId)},getGeometry:function(t){return t.geometry},getCentroid:function(t,e){return t.centroid||(t.centroid=n.getCentroidOptimizedGeometry(new r.default,t.geometry,e.hasZ,e.hasM)),t.centroid}},e.default=e.optimizedFeatureQueryEngineAdapter}).apply(null,i))||(t.exports=r)}}]);