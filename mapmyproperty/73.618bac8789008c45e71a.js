(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/features/controllers":"+G7i","arcgis-js-api/views/2d/layers/features/support/TileStore":"6kSU","esri/views/2d/layers/features/support/TileStore":"6kSU","esri/core/libs/quickselect/quickselect":"FT4I","esri/views/2d/layers/features/processors":"R3Fd","esri/views/2d/layers/features/support/Tile":"fUL3","arcgis-js-api/core/libs/rbush/rbush":"jEml","esri/core/libs/rbush/rbush":"jEml","esri/views/2d/layers/features/Pipeline":"par7"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"+G7i":function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i("ma1f"),i("qMld"),i("2Kdy")],void 0===(r=(function(t,e,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.loadControllerModule=function(t){switch(t){case"on-demand":return new Promise((function(t,e){Promise.all([i.e(3),i.e(2),i.e(4),i.e(5),i.e(6),i.e(8),i.e(9),i.e(13),i.e(25),i.e(1),i.e(72)]).then((function(){var e=[i("uqzM")];t.apply(null,e)}).bind(this)).catch(e.bind(this))}));case"stream":return new Promise((function(t,e){Promise.all([i.e(3),i.e(2),i.e(4),i.e(5),i.e(6),i.e(7),i.e(8),i.e(9),i.e(10),i.e(13),i.e(25),i.e(55)]).then((function(){var e=[i("A4oT")];t.apply(null,e)}).bind(this)).catch(e.bind(this))}));default:return r.reject(new n("mapview-controller:bad-type","Unable to create controller for unknown type: "+t))}}}).apply(null,n))||(t.exports=r)},"6kSU":function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i("zOht"),i("BcWh"),i("H1tY"),i("jEml"),i("fUL3"),i("7Lgj"),i("f3JK")],void 0===(r=(function(t,e,i,n,r,o,s,a,l){Object.defineProperty(e,"__esModule",{value:!0});var h={added:[],removed:[]},u=new Set,c=new l(0,0,0,0),d=function(t){function e(e){var i=t.call(this)||this;return i._tiles=new Map,i._index=o(9,r("csp-restrictions")?function(t){return{minX:t.bounds[0],minY:t.bounds[1],maxX:t.bounds[2],maxY:t.bounds[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),i.tiles=[],i.tileScheme=e,i}return i.__extends(e,t),e.prototype.destroy=function(){this._tiles.clear()},e.prototype.clear=function(){this._tiles.clear(),this._index.clear()},e.prototype.has=function(t){return this._tiles.has(t)},e.prototype.get=function(t){return this._tiles.get(t)},e.prototype.findByKey=function(t){return this._tiles.get(t.id)},e.prototype.intersections=function(t,e){var i="string"==typeof t?this.get(t):t;if(!i)return[];for(var n=e*i.resolution,r=i.bounds[0]-n,o=i.bounds[1]-n,s=i.bounds[2]+n,a=i.bounds[3]+n,l=[],h=0,u=this._index.search({minX:r,minY:o,maxX:s,maxY:a});h<u.length;h++){var c=u[h],d=c.bounds.slice();d[0]=Math.max(d[0],r),d[1]=Math.max(d[1],o),d[2]=Math.min(d[2],s),d[3]=Math.min(d[3],a),d[2]-d[0]>0&&d[3]-d[1]>0&&l.push({bounds:d,tile:c})}return l},e.prototype.boundsIntersections=function(t){return this._index.search({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]})},e.prototype.setViewState=function(t){var e=this.tileScheme.getTileCoverage(t,0);if(e){var i=e.spans,n=e.lodInfo,r=n.level;if(i.length>0)for(var o=0,l=i;o<l.length;o++)for(var d=l[o],f=d.row,p=d.colTo,m=d.colFrom;m<=p;m++){var v=c.set(r,f,n.normalizeCol(m),n.getWorldForColumn(m)).id;if(u.add(v),!this.has(v)){var _=new s.default(this.tileScheme,v);this._tiles.set(v,_),this._index.insert(_),this.tiles.push(_),h.added.push(_)}}for(var g=this.tiles.length-1;g>=0;g--)u.has((_=this.tiles[g]).id)||(this._tiles.delete(_.id),this.tiles.splice(g,1),this._index.remove(_),h.removed.push(_));(h.added.length||h.removed.length)&&this.emit("update",h),a.pool.release(e),u.clear(),h.added.length=0,h.removed.length=0}},e}(n);e.default=d}).apply(null,n))||(t.exports=r)},FT4I:function(t,e,i){var n;void 0===(n=(function(){"use strict";function t(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function e(t,e){return t<e?-1:t>e?1:0}return function(i,n,r,o,s){!function e(i,n,r,o,s){for(;o>r;){if(o-r>600){var a=o-r+1,l=n-r+1,h=Math.log(a),u=.5*Math.exp(2*h/3),c=.5*Math.sqrt(h*u*(a-u)/a)*(l-a/2<0?-1:1);e(i,n,Math.max(r,Math.floor(n-l*u/a+c)),Math.min(o,Math.floor(n+(a-l)*u/a+c)),s)}var d=i[n],f=r,p=o;for(t(i,r,n),s(i[o],d)>0&&t(i,r,o);f<p;){for(t(i,f,p),f++,p--;s(i[f],d)<0;)f++;for(;s(i[p],d)>0;)p--}0===s(i[r],d)?t(i,r,p):t(i,++p,o),p<=n&&(r=p+1),n<=p&&(o=p-1)}}(i,n,r||0,o||i.length-1,s||e)}}).apply(null,[]))||(t.exports=n)},R3Fd:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i("2Kdy")],void 0===(r=(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.loadProcessorModule=function(t){return new Promise("heatmap"===t?function(t,e){Promise.all([i.e(1),i.e(152)]).then((function(){var e=[i("lw41")];t.apply(null,e)}).bind(this)).catch(e.bind(this))}:function(t,e){Promise.all([i.e(3),i.e(2),i.e(4),i.e(5),i.e(8),i.e(1),i.e(82)]).then((function(){var e=[i("dh9Z")];t.apply(null,e)}).bind(this)).catch(e.bind(this))})}}).apply(null,n))||(t.exports=r)},fUL3:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i("QVms"),i("N7S/"),i("lRq4"),i("lAK8"),i("f3JK")],void 0===(r=(function(t,e,i,n,r,o,s){function a(t,e){var i=t.bounds,n=e.bounds;return t.key.id!==e.key.id&&t.key.world===e.key.world&&i[0]<=n[0]&&i[1]<=n[1]&&i[2]>=n[2]&&i[3]>=n[3]}Object.defineProperty(e,"__esModule",{value:!0}),e.isParentOf=a,e.isChildOf=function(t,e){return a(e,t)};var l=function(){function t(t,e){this.bounds=r.create(),this.key=new s(0,0,0,0),this.objectIds=new Set,this.key.set(e);var i=t.getLODInfoAt(this.key);this.tileInfoView=t,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=i.resolution,this.scale=i.scale,this.level=i.level,this.needsClear=!0}return Object.defineProperty(t.prototype,"id",{get:function(){return this.key.id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"extent",{get:function(){return n.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transform",{get:function(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new t(this.tileInfoView,this.id)},t.prototype.createChildTiles=function(){for(var e=this.key.getChildKeys(),n=i.acquire(),r=0;r<e.length;r++)n[r]=new t(this.tileInfoView,e[r]);return n},t.prototype.getQuantizationParameters=function(){return o.default.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})},t}();e.Tile=l,e.default=l}).apply(null,n))||(t.exports=r)},jEml:function(t,e,i){var n,r;n=[i("FT4I")],void 0===(r=(function(t){"use strict";function e(t,i){if(!(this instanceof e))return new e(t,i);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function i(t,e,i){if(!i)return e.indexOf(t);for(var n=0;n<e.length;n++)if(i(t,e[n]))return n;return-1}function n(t,e){r(t,0,t.children.length,e,t)}function r(t,e,i,n,r){r||(r=d(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var s,a=e;a<i;a++)s=t.children[a],o(r,t.leaf?n(s):s);return r}function o(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function s(t,e){return t.minX-e.minX}function a(t,e){return t.minY-e.minY}function l(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function h(t){return t.maxX-t.minX+(t.maxY-t.minY)}function u(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function c(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function d(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function f(e,i,n,r,o){for(var s,a=[i,n];a.length;)(n=a.pop())-(i=a.pop())<=r||(s=i+Math.ceil((n-i)/r/2)*r,t(e,s,i,n,o),a.push(i,s,s,n))}return e.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,i=[],n=this.toBBox;if(!c(t,e))return i;for(var r,o,s,a,l=[];e;){for(r=0,o=e.children.length;r<o;r++)s=e.children[r],c(t,a=e.leaf?n(s):s)&&(e.leaf?i.push(s):u(t,a)?this._all(s,i):l.push(s));e=l.pop()}return i},collides:function(t){var e=this.data,i=this.toBBox;if(!c(t,e))return!1;for(var n,r,o,s,a=[];e;){for(n=0,r=e.children.length;n<r;n++)if(o=e.children[n],c(t,s=e.leaf?i(o):o)){if(e.leaf||u(t,s))return!0;a.push(o)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=d([]),this},remove:function(t,e){if(!t)return this;for(var n,r,o,s,a=this.data,l=this.toBBox(t),h=[],c=[];a||h.length;){if(a||(a=h.pop(),r=h[h.length-1],n=c.pop(),s=!0),a.leaf&&-1!==(o=i(t,a.children,e)))return a.children.splice(o,1),h.push(a),this._condense(h),this;s||a.leaf||!u(a,l)?r?(n++,a=r.children[n],s=!1):a=null:(h.push(a),c.push(n),n=0,r=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:s,compareMinY:a,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},_build:function(t,e,i,r){var o,s=i-e+1,a=this._maxEntries;if(s<=a)return n(o=d(t.slice(e,i+1)),this.toBBox),o;r||(r=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/Math.pow(a,r-1))),(o=d([])).leaf=!1,o.height=r;var l,h,u,c,p=Math.ceil(s/a),m=p*Math.ceil(Math.sqrt(a));for(f(t,e,i,m,this.compareMinX),l=e;l<=i;l+=m)for(f(t,l,u=Math.min(l+m-1,i),p,this.compareMinY),h=l;h<=u;h+=p)c=Math.min(h+p-1,u),o.children.push(this._build(t,h,c,r-1));return n(o,this.toBBox),o},_chooseSubtree:function(t,e,i,n){for(var r,o,s,a,h,u,c,d,f,p;n.push(e),!e.leaf&&n.length-1!==i;){for(c=d=1/0,r=0,o=e.children.length;r<o;r++)h=l(s=e.children[r]),f=t,p=s,(u=(Math.max(p.maxX,f.maxX)-Math.min(p.minX,f.minX))*(Math.max(p.maxY,f.maxY)-Math.min(p.minY,f.minY))-h)<d?(d=u,c=h<c?h:c,a=s):u===d&&h<c&&(c=h,a=s);e=a||e.children[0]}return e},_insert:function(t,e,i){var n=i?t:(0,this.toBBox)(t),r=[],s=this._chooseSubtree(n,this.data,e,r);for(s.children.push(t),o(s,n);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(n,r,e)},_split:function(t,e){var i=t[e],r=i.children.length,o=this._minEntries;this._chooseSplitAxis(i,o,r);var s=this._chooseSplitIndex(i,o,r),a=d(i.children.splice(s,i.children.length-s));a.height=i.height,a.leaf=i.leaf,n(i,this.toBBox),n(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(i,a)},_splitRoot:function(t,e){this.data=d([t,e]),this.data.height=t.height+1,this.data.leaf=!1,n(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,i){var n,o,s,a,h,u,c,d,f,p,m,v,_,g;for(u=c=1/0,n=e;n<=i-e;n++)f=o=r(t,0,n,this.toBBox),p=s=r(t,n,i,this.toBBox),m=Math.max(f.minX,p.minX),v=Math.max(f.minY,p.minY),_=Math.min(f.maxX,p.maxX),g=Math.min(f.maxY,p.maxY),a=Math.max(0,_-m)*Math.max(0,g-v),h=l(o)+l(s),a<u?(u=a,d=n,c=h<c?h:c):a===u&&h<c&&(c=h,d=n);return d},_chooseSplitAxis:function(t,e,i){var n=t.leaf?this.compareMinX:s,r=t.leaf?this.compareMinY:a;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,r)&&t.children.sort(n)},_allDistMargin:function(t,e,i,n){t.children.sort(n);var s,a,l=this.toBBox,u=r(t,0,e,l),c=r(t,i-e,i,l),d=h(u)+h(c);for(s=e;s<i-e;s++)a=t.children[s],o(u,t.leaf?l(a):a),d+=h(u);for(s=i-e-1;s>=e;s--)a=t.children[s],o(c,t.leaf?l(a):a),d+=h(c);return d},_adjustParentBBoxes:function(t,e,i){for(var n=i;n>=0;n--)o(e[n],t)},_condense:function(t){for(var e,i=t.length-1;i>=0;i--)0===t[i].children.length?i>0?(e=t[i-1].children).splice(e.indexOf(t[i]),1):this.clear():n(t[i],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}},e}).apply(null,n))||(t.exports=r)},par7:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i("zOht"),i("Gtr7"),i("ma1f"),i("H1tY"),i("qsST"),i("qMld"),i("Vx27"),i("pMLx"),i("u+Ml"),i("+G7i"),i("R3Fd"),i("6kSU"),i("M3W5")],void 0===(r=(function(t,e,i,n,r,o,s,a,l,h,u,c,d,f,p){Object.defineProperty(e,"__esModule",{value:!0});var m=s.getLogger("esri.views.2d.layers.features.Pipeline"),v=new Set;e.getInstances=function(){return v};var _=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.controller=null,e.processor=null,e.remoteClient=null,e.tileStore=null,e.service=null,e.viewState=null,e}return i.__extends(e,t),e.prototype.initialize=function(){var t=this;this.watch("updating",(function(e){t.remoteClient.invoke("setUpdating",e)})),o("esri-performance-tests")&&!o("esri-workers")&&v.add(this)},e.prototype.destroy=function(){o("esri-performance-tests")&&!o("esri-workers")&&v.delete(this),this.controller&&this.controller.destroy(),this.processor&&this.processor.destroy()},Object.defineProperty(e.prototype,"updating",{get:function(){var t=this.controller,e=this.processor;return!t||!e||t.updating||e.updating||!1},enumerable:!0,configurable:!0}),e.prototype.startup=function(t){var e=t.service,n=t.config,r=t.tileInfo,o=t.options;return i.__awaiter(this,void 0,void 0,(function(){var t;return i.__generator(this,(function(i){switch(i.label){case 0:return this.service=e,this.tileStore||(t=new p(h.fromJSON(r)),this.tileStore=new f.default(t)),[4,this._configure(n,o)];case 1:return i.sent(),this.viewState&&(this.tileStore.clear(),this.tileStore.setViewState(this.viewState)),[2]}}))}))},e.prototype.update=function(t){var e=t.config,n=t.options;return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return this.processor&&this.controller?n.layerFilterChanged||n.invalidateFeatureData||n.invalidateMesh?[4,this.controller.update(e,n.layerFilterChanged)]:[3,2]:(m.error(new r("mapview-pipeline","Tried to update an unconfigured pipeline.")),[2]);case 1:t.sent(),t.label=2;case 2:return n.invalidateMesh?[4,this.processor.update(e)]:[3,4];case 3:t.sent(),this.controller.invalidate(),t.label=4;case 4:return[4,this.remoteClient.invoke("setUpdating",this.updating)];case 5:return t.sent(),[2]}}))}))},e.prototype.setViewState=function(t){var e=u.fromJSON(t);this._set("viewState",e),this.tileStore&&this.tileStore.setViewState(e),this.controller&&this.controller.setViewState(e)},e.prototype._configure=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){switch(i.label){case 0:return[4,a.all([this._handleControllerConfig(t),this._handleProcessorConfig(t)])];case 1:return i.sent(),this.controller.processor=this.processor,this.viewState&&this.controller.setViewState(this.viewState),[4,this.update({config:t,options:e})];case 2:return i.sent(),[2]}}))}))},e.prototype._handleControllerConfig=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,this._createController(this.service,t)];case 1:return[4,(e=i.sent()).startup()];case 2:return i.sent(),[2,e]}}))}))},e.prototype._handleProcessorConfig=function(t){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return[2,this._createProcessor(this.service,t)]}))}))},e.prototype._createController=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s;return i.__generator(this,(function(i){switch(i.label){case 0:return this.controller&&this.controller.destroy(),[4,c.loadControllerModule(t.type)];case 1:return n=i.sent().default,o=(r=this).tileStore,s=new n({service:t,config:e,tileStore:o,remoteClient:r.remoteClient}),this.controller=s,[2,s]}}))}))},e.prototype._createProcessor=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,d.loadProcessorModule(e.renderer.type)];case 1:return n=i.sent().default,o=(r=this).remoteClient,s=new n({service:t,config:e,tileStore:r.tileStore,remoteClient:o}),this.processor&&this.processor.destroy(),this.processor=s,[2,s]}}))}))},i.__decorate([l.property()],e.prototype,"controller",void 0),i.__decorate([l.property()],e.prototype,"processor",void 0),i.__decorate([l.property({dependsOn:["controller.updating","processor.updating"]})],e.prototype,"updating",null),i.__decorate([l.property()],e.prototype,"viewState",void 0),i.__decorate([l.subclass("esri.views.2d.layers.features.Pipeline")],e)}(n);e.default=_}).apply(null,n))||(t.exports=r)}}]);