(function(){var e={"arcgis-js-api/geometry/geometryAdapters/json":"H9Hv","esri/geometry/geometryAdapters/json":"H9Hv","esri/geometry/support/GeographicTransformationStep":"MbkH","esri/geometry/support/GeographicTransformation":"OkCb","esri/layers/graphics/data/projectionSupport":"Q2Em","arcgis-js-api/layers/graphics/data/projectionSupport":"Q2Em","esri/geometry/pe":"w7fK","esri/geometry/projection":"wIC5","arcgis-js-api/geometry/projection":"wIC5"},t=this||window,n=t.webpackJsonp=t.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{H9Hv:function(e,t,n){var r,o;r=[n.dj.c(e.i),t],void 0===(o=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.jsonAdapter={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,r){var o=new n(e.getPointX(t),e.getPointY(t),r),i=e.hasZ(t),_=e.hasM(t);return i&&(o.z=e.getPointZ(t)),_&&(o.m=e.getPointM(t)),o},exportPolygon:function(e,t,n){return new r(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new o(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new i(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){var r=e.hasZ(t),o=e.hasM(t),i=new _(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(r){var p=e.getZExtent(t);i.zmin=p.vmin,i.zmax=p.vmax}if(o){var s=e.getMExtent(t);i.mmin=s.vmin,i.mmax=s.vmax}return i}};var n=function(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0},r=function(e,t,n,r){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)},o=function(e,t,n,r){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)},i=function(e,t,n,r){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)},_=function(e,t,n,r,o){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=r,this.spatialReference=o,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}).apply(null,r))||(e.exports=o)},MbkH:function(e,t,n){var r,o;r=[n.dj.c(e.i),t],void 0===(o=(function(e,t){var n=0;return function(){function e(e){void 0===e&&(e=null),this.uid=n++,e?(this._wkt=void 0!==e.wkt?e.wkt:null,this._wkid=void 0!==e.wkid?e.wkid:-1,this._isInverse=void 0!==e.isInverse&&!0===e.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}return e.fromGE=function(t){var n=new e;return n._wkt=t.wkt,n._wkid=t.wkid,n._isInverse=t.isInverse,n},Object.defineProperty(e.prototype,"wkt",{get:function(){return this._wkt},set:function(e){this._wkt=e,this.uid=n++},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"wkid",{get:function(){return this._wkid},set:function(e){this._wkid=e,this.uid=n++},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isInverse",{get:function(){return this._isInverse},set:function(e){this._isInverse=e,this.uid=n++},enumerable:!0,configurable:!0}),e.prototype.getInverse=function(){var t=new e;return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t},e}()}).apply(null,r))||(e.exports=o)},OkCb:function(e,t,n){var r,o;r=[n.dj.c(e.i),t,n("MbkH")],void 0===(o=(function(e,t,n){return function(){function e(e){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,e&&e.steps)for(var t=0,r=e.steps;t<r.length;t++){var o=r[t];this.steps.push(o instanceof n?o:new n({wkid:o.wkid,wkt:o.wkt,isInverse:o.isInverse}))}}return e.cacheKey=function(e,t){return[null!=e.wkid?e.wkid.toString():"-1",null!=e.wkt?e.wkt.toString():"",null!=t.wkid?t.wkid.toString():"-1",null!=t.wkt?t.wkt.toString():""].join(",")},e.fromGE=function(t){for(var r=new e,o="",i=0,_=t.steps;i<_.length;i++){var p=n.fromGE(_[i]);r.steps.push(p),o+=p.uid.toString()+","}return r._cached_projection={},r._gtlistentry=null,r._chain=o,r},e.prototype.getInverse=function(){var t=new e;t.steps=[];for(var n=this.steps.length-1;n>=0;n--)t.steps.push(this.steps[n].getInverse());return t},e.prototype.getGTListEntry=function(){for(var e="",t=0,n=this.steps;t<n.length;t++)e+=n[t].uid.toString()+",";return e!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=e),this._gtlistentry},e.prototype.assignCachedGe=function(t,n,r){this._cached_projection[e.cacheKey(t,n)]=r},e.prototype.getCachedGeTransformation=function(t,n){for(var r="",o=0,i=this.steps;o<i.length;o++)r+=i[o].uid.toString()+",";r!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=r);var _=this._cached_projection[e.cacheKey(t,n)];return void 0===_?null:_},e}()}).apply(null,r))||(e.exports=o)},Q2Em:function(e,t,n){var r,o;r=[n.dj.c(e.i),t,n("zOht"),n("ma1f"),n("qMld"),n("wIC5"),n("H9Hv"),n("nrlZ"),n("vtMp")],void 0===(o=(function(e,t,n,r,o,i,_,p,s){Object.defineProperty(t,"__esModule",{value:!0});var a=[0,0];function u(e,t){var n,r,o;if(!t)return null;if("x"in t){var i={x:0,y:0};return n=e(t.x,t.y,a),i.x=n[0],i.y=n[1],null!=t.z&&(i.z=t.z),null!=t.m&&(i.m=t.m),i}return"xmin"in t?(i={xmin:0,ymin:0,xmax:0,ymax:0},r=e(t.xmin,t.ymin,a),i.xmin=r[0],i.ymin=r[1],o=e(t.xmax,t.ymax,a),i.xmax=o[0],i.ymax=o[1],t.hasZ&&(i.zmin=t.zmin,i.zmax=t.zmax,i.hasZ=!0),t.hasM&&(i.mmin=t.mmin,i.mmax=t.mmax,i.hasM=!0),i):"rings"in t?{rings:c(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:c(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:P(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:void 0}function c(e,t){for(var n=[],r=0,o=e;r<o.length;r++)n.push(P(o[r],t));return n}function P(e,t){for(var n=[],r=0,o=e;r<o.length;r++){var i=o[r],_=t(i[0],i[1],[0,0]);n.push(_),i.length>2&&_.push(i[2]),i.length>3&&_.push(i[3])}return n}function f(e,t){return!(!p.isValid(e)||!p.isValid(t)||p.equals(e,t)||s.canProject(e,t))}t.doesBrowserSupportProjection=function(e,t){return!f(e,t)||i.isSupported()},t.checkProjectionSupport=function(e,t){return n.__awaiter(this,void 0,void 0,(function(){var o,_,p;return n.__generator(this,(function(n){if(!t)return[2];if(Array.isArray(e)){for(o=0,_=e;o<_.length;o++)if(f((p=_[o]).geometry&&p.geometry.spatialReference,t)){if(i.isSupported())return[2,i.load()];throw new r("feature-store:unsupported-query","projection not supported",{inSpatialReference:e,outSpatialReference:t})}return[2]}if(!f(e,t))return[2];if(i.isSupported())return[2,i.load()];throw new r("feature-store:unsupported-query","projection not supported",{inSpatialReference:e,outSpatialReference:t})}))}))};var l=u.bind(null,s.lngLatToXY),h=u.bind(null,s.xyToLngLat);t.project=function(e,t,n){return e?(n||(n=t,t=e.spatialReference),p.isValid(t)&&p.isValid(n)&&!p.equals(t,n)?s.canProject(t,n)?p.isWebMercator(n)?l(e):h(e):i.projectMany(_.jsonAdapter,[e],t,n,null)[0]:e):e};var g=new(function(){function e(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e,t,r){return n.__awaiter(this,void 0,void 0,(function(){var i,_=this;return n.__generator(this,(function(n){return e&&e.length&&t&&r&&!p.equals(t,r)||o.resolve(e),this._jobs.push(i={geometries:e,inSpatialReference:t,outSpatialReference:r,resolve:null}),[2,o.create((function(e){i.resolve=e,null===_._timer&&(_._timer=setTimeout(_._process,10))}))]}))}))},e.prototype._process=function(){this._timer=null;var e=this._jobs.shift();if(e){var t=e.geometries,n=e.inSpatialReference,r=e.outSpatialReference,o=e.resolve;s.canProject(n,r)?p.isWebMercator(r)?o(t.map(l)):o(t.map(h)):o(i.projectMany(_.jsonAdapter,t,n,r,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},e}());t.projectMany=function(e,t,r){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){return[2,g.push(e,t,r)]}))}))}}).apply(null,r))||(e.exports=o)},w7fK:function(e,t,n){var r,o;r=[n.dj.c(e.i),t,n("zOht"),n("KFwS"),n("H1tY"),n("qMld"),n("2Kdy")],void 0===(o=(function(e,t,r,o,i,_){var p,s,a,u,c,P;function f(e){function n(e,t,n){e[t]=n(e[t])}t._pe=e,s.init(),a.init(),u.init(),c.init(),P.init(),t.PeGCSExtent=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(n,e),n.prototype.destroy=function(){t._pe.destroy(this)},n}(t._pe.PeGCSExtent);for(var o=0,i=[t._pe.PeDatum,t._pe.PeGeogcs,t._pe.PeGeogtran,t._pe.PeObject,t._pe.PeParameter,t._pe.PePrimem,t._pe.PeProjcs,t._pe.PeSpheroid,t._pe.PeUnit];o<i.length;o++)n(i[o].prototype,"getName",(function(e){return function(){return e.call(this,new Array(s.PE_NAME_MAX))}}));for(var _=0,p=[t._pe.PeGeogtran,t._pe.PeProjcs];_<p.length;_++)n(p[_].prototype,"getParameters",(function(e){return function(){for(var n=new Array(s.PE_PARM_MAX),r=e.call(this),o=0;o<n.length;o++){var i=t._pe.getValue(r,"*");n[o]=i?t._pe.wrapPointer(i,t._pe.PeParameter):null,r+=Int32Array.BYTES_PER_ELEMENT}return n}}));n(t._pe.PeHorizon.prototype,"getCoord",(function(e){return function(){var t=this.getSize();if(!t)return null;var n=[];return E(n,t,e.call(this)),n}})),n(t._pe.PeGTlistExtendedEntry.prototype,"getEntries",(function(e){var n=t._pe._pe_getPeGTlistExtendedGTsSize();return function(){var r=null,o=e.call(this);if(!t._pe.compare(o,t._pe.NULL)){r=[o];var i=this.getSteps();if(i>1)for(var _=t._pe.getPointer(o),p=1;p<i;p++)r.push(t._pe.wrapPointer(_+n*p,t._pe.PeGTlistExtendedGTs))}return r}}));var f=t._pe._pe_getPeHorizonSize(),l=function(e){return function(){var n=this._cache;if(n||(n=new Map,this._cache=n),n.has(e))return n.get(e);var r=null,o=e.call(this);if(!t._pe.compare(o,t._pe.NULL)){r=[o];var i=o.getNump();if(i>1)for(var _=t._pe.getPointer(o),p=1;p<i;p++)r.push(t._pe.wrapPointer(_+f*p,t._pe.PeHorizon))}return n.set(e,r),r}};n(t._pe.PeProjcs.prototype,"horizonGcsGenerate",l),n(t._pe.PeProjcs.prototype,"horizonPcsGenerate",l),t._pe.PeObject.prototype.toString=function(e){void 0===e&&(e=s.PE_STR_OPTS_NONE),t._pe.ensureCache.prepare();var n=t._pe.getPointer(this),r=t._pe.ensureInt8(new Array(s.PE_BUFFER_MAX));return t._pe.UTF8ToString(t._pe._pe_object_to_string_ext(n,e,r))}}function l(e){if(e){var n=t._pe.getClass(e);if(n){var r=t._pe.getCache(n);if(r){var o=t._pe.getPointer(e);o&&delete r[o]}}}}function h(e,n){for(var r=[],o=new Array(n),i=0;i<e;i++)r.push(t._pe.ensureInt8(o));return r}function g(e){var t;return Array.isArray(e[0])?(t=[],e.forEach((function(e){t.push(e[0],e[1])}))):t=e,t}function E(e,n,r,o){if(void 0===o&&(o=!1),o)for(var i=0;i<2*n;i++)e[i]=t._pe.getValue(r+i*Float64Array.BYTES_PER_ELEMENT,"double");else{var _=0===e.length;for(i=0;i<n;i++)_&&(e[i]=new Array(2)),e[i][0]=t._pe.getValue(r,"double"),e[i][1]=t._pe.getValue(r+Float64Array.BYTES_PER_ELEMENT,"double"),r+=2*Float64Array.BYTES_PER_ELEMENT}}Object.defineProperty(t,"__esModule",{value:!0}),t._pe=null,t.isLoaded=function(){return!!t._pe},t.isSupported=function(){return!!i("esri-wasm")},t.load=function(){return p||(p=_.create((function(e,t){new Promise((function(e,t){n.e(91).then((function(){var t=[n("dxOQ")];e.apply(null,t)}).bind(this)).catch(t.bind(this))})).then((function(n){n({locateFile:function(e){return o.getAssetUrl("esri/geometry/support/"+e)},onAbort:function(e){t(new Error(e))}}).then((function(t){f(t),e()}))}))})))},function(e){function n(e,n,r){t._pe.ensureCache.prepare();var o=g(r),i=r===o,_=t._pe.ensureFloat64(o),p=t._pe._pe_geog_to_proj(t._pe.getPointer(e),n,_);return p&&E(r,n,_,i),p}function r(e,t,n){return o(e,t,n,0)}function o(e,n,r,o){t._pe.ensureCache.prepare();var i=g(r),_=r===i,p=t._pe.ensureFloat64(i),s=t._pe._pe_proj_to_geog_center(t._pe.getPointer(e),n,p,o);return s&&E(r,n,p,_),s}e.geogToProj=n,e.projGeog=function(e,t,o,i){switch(i){case s.PE_TRANSFORM_P_TO_G:return r(e,t,o);case s.PE_TRANSFORM_G_TO_P:return n(e,t,o)}return 0},e.projToGeog=r,e.projToGeogCenter=o}(t.PeCSTransformations||(t.PeCSTransformations={})),function(e){e.init=function(){e.PE_BUFFER_MAX=t._pe.PeDefs.prototype.PE_BUFFER_MAX,e.PE_NAME_MAX=t._pe.PeDefs.prototype.PE_NAME_MAX,e.PE_MGRS_MAX=t._pe.PeDefs.prototype.PE_MGRS_MAX,e.PE_USNG_MAX=t._pe.PeDefs.prototype.PE_USNG_MAX,e.PE_DD_MAX=t._pe.PeDefs.prototype.PE_DD_MAX,e.PE_DDM_MAX=t._pe.PeDefs.prototype.PE_DDM_MAX,e.PE_DMS_MAX=t._pe.PeDefs.prototype.PE_DMS_MAX,e.PE_UTM_MAX=t._pe.PeDefs.prototype.PE_UTM_MAX,e.PE_PARM_MAX=t._pe.PeDefs.prototype.PE_PARM_MAX,e.PE_TYPE_NONE=t._pe.PeDefs.prototype.PE_TYPE_NONE,e.PE_TYPE_GEOGCS=t._pe.PeDefs.prototype.PE_TYPE_GEOGCS,e.PE_TYPE_PROJCS=t._pe.PeDefs.prototype.PE_TYPE_PROJCS,e.PE_TYPE_GEOGTRAN=t._pe.PeDefs.prototype.PE_TYPE_GEOGTRAN,e.PE_TYPE_COORDSYS=t._pe.PeDefs.prototype.PE_TYPE_COORDSYS,e.PE_TYPE_UNIT=t._pe.PeDefs.prototype.PE_TYPE_UNIT,e.PE_STR_OPTS_NONE=t._pe.PeDefs.prototype.PE_STR_OPTS_NONE,e.PE_STR_AUTH_NONE=t._pe.PeDefs.prototype.PE_STR_AUTH_NONE,e.PE_STR_AUTH_TOP=t._pe.PeDefs.prototype.PE_STR_AUTH_TOP,e.PE_STR_NAME_CANON=t._pe.PeDefs.prototype.PE_STR_NAME_CANON,e.PE_PARM_X0=t._pe.PeDefs.prototype.PE_PARM_X0,e.PE_PARM_ND=t._pe.PeDefs.prototype.PE_PARM_ND,e.PE_TRANSFORM_1_TO_2=t._pe.PeDefs.prototype.PE_TRANSFORM_1_TO_2,e.PE_TRANSFORM_2_TO_1=t._pe.PeDefs.prototype.PE_TRANSFORM_2_TO_1,e.PE_TRANSFORM_P_TO_G=t._pe.PeDefs.prototype.PE_TRANSFORM_P_TO_G,e.PE_TRANSFORM_G_TO_P=t._pe.PeDefs.prototype.PE_TRANSFORM_G_TO_P,e.PE_HORIZON_RECT=t._pe.PeDefs.prototype.PE_HORIZON_RECT,e.PE_HORIZON_POLY=t._pe.PeDefs.prototype.PE_HORIZON_POLY,e.PE_HORIZON_LINE=t._pe.PeDefs.prototype.PE_HORIZON_LINE,e.PE_HORIZON_DELTA=t._pe.PeDefs.prototype.PE_HORIZON_DELTA}}(s=t.PeDefs||(t.PeDefs={})),function(e){var n={},r={};function o(e,r){var o=null,_=n[e];if(_||(n[e]=_={}),_.hasOwnProperty(String(r)))o=_[r];else{var p=t._pe.PeFactory.prototype.factoryByType(e,r);t._pe.compare(p,t._pe.NULL)||(_[r]=o=p)}return i(o)}function i(e){if(e){var n=e.getType();switch(n){case s.PE_TYPE_GEOGCS:e=t._pe.castObject(e,t._pe.PeGeogcs);break;case s.PE_TYPE_PROJCS:e=t._pe.castObject(e,t._pe.PeProjcs);break;case s.PE_TYPE_GEOGTRAN:e=t._pe.castObject(e,t._pe.PeGeogtran);break;default:n&s.PE_TYPE_UNIT&&(e=t._pe.castObject(e,t._pe.PeUnit))}}return e}e.initialize=function(){t._pe.PeFactory.prototype.initialize(null)},e.coordsys=function(e){return o(s.PE_TYPE_COORDSYS,e)},e.factoryByType=o,e.fromString=function(e,n){var o=null,_=r[e];if(_||(r[e]=_={}),_.hasOwnProperty(n))o=_[n];else{var p=t._pe.PeFactory.prototype.fromString(e,n);t._pe.compare(p,t._pe.NULL)||(_[n]=o=p)}return i(o)},e.geogcs=function(e){return o(s.PE_TYPE_GEOGCS,e)},e.geogtran=function(e){return o(s.PE_TYPE_GEOGTRAN,e)},e.getCode=function(e){return t._pe.PeFactory.prototype.getCode(e)},e.projcs=function(e){return o(s.PE_TYPE_PROJCS,e)},e.unit=function(e){return o(s.PE_TYPE_UNIT,e)}}(t.PeFactory||(t.PeFactory={})),t.PeGCSExtent=null,function(e){var n;e.init=function(){e.PE_GTLIST_OPTS_COMMON=t._pe.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,n=t._pe._pe_getPeGTlistExtendedEntrySize()},e.getGTlist=function(e,r,o,i,_,p){var s=null,a=new t._pe.PeInteger(p);try{var u=t._pe.PeGTlistExtended.prototype.getGTlist(e,r,o,i,_,a);if((p=a.val)&&(s=[u],p>1))for(var c=t._pe.getPointer(u),P=1;P<p;P++)s.push(t._pe.wrapPointer(c+n*P,t._pe.PeGTlistExtendedEntry))}finally{t._pe.destroy(a)}return s}}(a=t.PeGTlistExtended||(t.PeGTlistExtended={})),function(e){e.destroy=function(e){if(e&&e.length){for(var n=0,r=e;n<r.length;n++){var o=r[n];l(o),o.getEntries().forEach((function(e){l(e);var t=e.getGeogtran();l(t),t.getParameters().forEach(l),[t.getGeogcs1(),t.getGeogcs2()].forEach((function(e){l(e);var t=e.getDatum();l(t),l(t.getSpheroid()),l(e.getPrimem()),l(e.getUnit())}))}))}t._pe.PeGTlistExtendedEntry.prototype.Delete(e[0])}}}(t.PeGTlistExtendedEntry||(t.PeGTlistExtendedEntry={})),function(e){e.geogToGeog=function(e,n,r,o,i){t._pe.ensureCache.prepare();var _=g(r),p=r===_,s=t._pe.ensureFloat64(_),a=0;o&&(a=t._pe.ensureFloat64(o));var u=t._pe._pe_geog_to_geog(t._pe.getPointer(e),n,s,a,i);return u&&E(r,n,s,p),u}}(t.PeGTTransformations||(t.PeGTTransformations={})),function(e){function n(e,n,r,o,i,_){var p,a;switch(t._pe.ensureCache.prepare(),e){case"dd":p=t._pe._pe_geog_to_dd,a=s.PE_DD_MAX;break;case"ddm":p=t._pe._pe_geog_to_ddm,a=s.PE_DDM_MAX;break;case"dms":p=t._pe._pe_geog_to_dms,a=s.PE_DMS_MAX}var u=0;n&&(u=t._pe.getPointer(n));var c=g(o),P=t._pe.ensureFloat64(c),f=h(r,a),l=p(u,r,P,i,t._pe.ensureInt32(f));if(l)for(var E=0;E<r;E++)_[E]=t._pe.UTF8ToString(f[E]);return l}function r(e,n,r,o,i){var _;switch(t._pe.ensureCache.prepare(),e){case"dd":_=t._pe._pe_dd_to_geog;break;case"ddm":_=t._pe._pe_ddm_to_geog;break;case"dms":_=t._pe._pe_dms_to_geog}var p=0;n&&(p=t._pe.getPointer(n));var s=o.map((function(e){return t._pe.ensureString(e)})),a=t._pe.ensureInt32(s),u=t._pe.ensureFloat64(new Array(2*r)),c=_(p,r,a,u);return c&&E(i,r,u),c}e.geog_to_dms=function(e,t,r,o,i){return n("dms",e,t,r,o,i)},e.dms_to_geog=function(e,t,n,o){return r("dms",e,t,n,o)},e.geog_to_ddm=function(e,t,r,o,i){return n("ddm",e,t,r,o,i)},e.ddm_to_geog=function(e,t,n,o){return r("ddm",e,t,n,o)},e.geog_to_dd=function(e,t,r,o,i){return n("dd",e,t,r,o,i)},e.dd_to_geog=function(e,t,n,o){return r("dd",e,t,n,o)}}(t.PeNotationDms||(t.PeNotationDms={})),function(e){e.init=function(){e.PE_MGRS_STYLE_NEW=t._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=t._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=t._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=t._pe.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=t._pe.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES},e.geog_to_mgrs_extended=function(e,n,r,o,i,_,p){t._pe.ensureCache.prepare();var a=0;e&&(a=t._pe.getPointer(e));var u=g(r),c=t._pe.ensureFloat64(u),P=h(n,s.PE_MGRS_MAX),f=t._pe.ensureInt32(P),l=t._pe._pe_geog_to_mgrs_extended(a,n,c,o,i,_,f);if(l)for(var E=0;E<n;E++)p[E]=t._pe.UTF8ToString(P[E]);return l},e.mgrs_to_geog_extended=function(e,n,r,o,i){t._pe.ensureCache.prepare();var _=0;e&&(_=t._pe.getPointer(e));var p=r.map((function(e){return t._pe.ensureString(e)})),s=t._pe.ensureInt32(p),a=t._pe.ensureFloat64(new Array(2*n)),u=t._pe._pe_mgrs_to_geog_extended(_,n,s,o,a);return u&&E(i,n,a),u}}(u=t.PeNotationMgrs||(t.PeNotationMgrs={})),function(e){e.geog_to_usng=function(e,n,r,o,i,_,p){t._pe.ensureCache.prepare();var a=0;e&&(a=t._pe.getPointer(e));var u=g(r),c=t._pe.ensureFloat64(u),P=h(n,s.PE_MGRS_MAX),f=t._pe.ensureInt32(P),l=t._pe._pe_geog_to_usng(a,n,c,o,i,_,f);if(l)for(var E=0;E<n;E++)p[E]=t._pe.UTF8ToString(P[E]);return l},e.usng_to_geog=function(e,n,r,o){t._pe.ensureCache.prepare();var i=0;e&&(i=t._pe.getPointer(e));var _=r.map((function(e){return t._pe.ensureString(e)})),p=t._pe.ensureInt32(_),s=t._pe.ensureFloat64(new Array(2*n)),a=t._pe._pe_usng_to_geog(i,n,p,s);return a&&E(o,n,s),a}}(t.PeNotationUsng||(t.PeNotationUsng={})),function(e){e.init=function(){e.PE_UTM_OPTS_NONE=t._pe.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=t._pe.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=t._pe.PeNotationUtm.prototype.PE_UTM_OPTS_NS},e.geog_to_utm=function(e,n,r,o,i){t._pe.ensureCache.prepare();var _=0;e&&(_=t._pe.getPointer(e));var p=g(r),a=t._pe.ensureFloat64(p),u=h(n,s.PE_UTM_MAX),c=t._pe.ensureInt32(u),P=t._pe._pe_geog_to_utm(_,n,a,o,c);if(P)for(var f=0;f<n;f++)i[f]=t._pe.UTF8ToString(u[f]);return P},e.utm_to_geog=function(e,n,r,o,i){t._pe.ensureCache.prepare();var _=0;e&&(_=t._pe.getPointer(e));var p=r.map((function(e){return t._pe.ensureString(e)})),s=t._pe.ensureInt32(p),a=t._pe.ensureFloat64(new Array(2*n)),u=t._pe._pe_utm_to_geog(_,n,s,o,a);return u&&E(i,n,a),u}}(c=t.PeNotationUtm||(t.PeNotationUtm={})),function(e){var n=new Map;e.init=function(){e.PE_PCSINFO_OPTION_NONE=t._pe.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=t._pe.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=t._pe.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=t._pe.PePCSInfo.prototype.PE_POLE_POINT},e.generate=function(r,o){var i,_;return void 0===o&&(o=e.PE_PCSINFO_OPTION_DOMAIN),n.has(r)&&(_=n.get(r))[o]&&(i=_[o]),i||(i=t._pe.PePCSInfo.prototype.generate(r,o),_||n.set(r,_=[]),_[o]=i),i}}(P=t.PePCSInfo||(t.PePCSInfo={})),function(e){e.version_string=function(){return t._pe.PeVersion.prototype.version_string()}}(t.PeVersion||(t.PeVersion={})),t._init=f}).apply(null,r))||(e.exports=o)},wIC5:function(e,t,n){var r,o;r=[n.dj.c(e.i),t,n("qMld"),n("w7fK"),n("OkCb"),n("2Kdy")],void 0===(o=(function(e,t,r,o,i){Object.defineProperty(t,"__esModule",{value:!0});var _=null,p=null;t.isLoaded=function(){return!!_&&o.isLoaded()},t.isSupported=function(){return o.isSupported()};var s=null;t.load=function(){return s||(s=r.all([o.load(),new Promise((function(e,t){Promise.resolve().then((function(){var t=[n("vFDJ")];e.apply(null,t)}).bind(this)).catch(t.bind(this))})),new Promise((function(e,t){Promise.resolve().then((function(){var t=[n("RBE7")];e.apply(null,t)}).bind(this)).catch(t.bind(this))}))]).then((function(e){p=e[2].hydratedAdapter,(_=e[1])._enableProjection(o)})))},t.project=function(e,t,n){return void 0===n&&(n=null),e instanceof Array?0===e.length?[]:u(p,e,e[0].spatialReference,t,n):u(p,[e],e.spatialReference,t,n)[0]};var a={};function u(e,t,n,r,o){if(void 0===o&&(o=null),null===o){var p=i.cacheKey(n,r);void 0!==a[p]?o=a[p]:(null===(o=c(n,r,null))&&(o=new i),a[p]=o)}return _._project(e,t,n,r,o)}function c(e,t,n){void 0===n&&(n=null);var r=_._getTransformation(p,e,t,n,null==n?void 0:n.spatialReference);return null!==r?i.fromGE(r):null}t.projectMany=u,t.getTransformation=c,t.getTransformations=function(e,t,n){void 0===n&&(n=null);var r=_._getTransformationBySuitability(p,e,t,n,null==n?void 0:n.spatialReference);if(null!==r){for(var o=[],s=0,a=r;s<a.length;s++)o.push(i.fromGE(a[s]));return o}return[]}}).apply(null,r))||(e.exports=o)}}]);