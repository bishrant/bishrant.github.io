(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/dehydratedFeatureComparison":"/Vvo","arcgis-js-api/tasks/operations/pbfOptimizedFeatureSet":"6/KI","arcgis-js-api/tasks/operations/pbfQueryUtils":"G+Sd","esri/tasks/operations/PBFWorker":"J0rm","arcgis-js-api/tasks/operations/PBFWorker":"J0rm","arcgis-js-api/geometry/support/aaBoundingBox":"WRgd","esri/geometry/support/aaBoundingBox":"WRgd","arcgis-js-api/tasks/operations/pbfFeatureServiceParser":"YhCz","arcgis-js-api/layers/graphics/dehydratedFeatures":"ZcgO","esri/layers/graphics/dehydratedFeatures":"ZcgO","arcgis-js-api/tasks/operations/pbfDehydratedFeatureSet":"yre/"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/Vvo":function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("pcDC"),r("LxLY")],void 0===(a=(function(e,t,r,n){function a(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++){var n=e[r],a=t[r];if(n.length!==a.length)return!1;for(var i=0;i<n.length;i++)if(n[i]!==a[i])return!1}return!0}function i(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!a(e[r],t[r]))return!1;return!0}function s(e,t){return e===t||e&&t&&e.equals(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.equals=function(e,t){return e===t||null!=e&&null!=t&&e.objectId===t.objectId&&!!function(e,t){if(e===t)return!0;if(n.isNone(e)||n.isNone(t))return!1;if(e.type!==t.type)return!1;switch(e.type){case"point":return function(e,t){return!!s(e.spatialReference,t.spatialReference)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.m===t.m}(e,t);case"extent":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!s(e.spatialReference,t.spatialReference)&&e.xmin===t.xmin&&e.ymin===t.ymin&&e.zmin===t.zmin&&e.xmax===t.xmax&&e.ymax===t.ymax&&e.zmax===t.zmax}(e,t);case"polyline":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!s(e.spatialReference,t.spatialReference)&&i(e.paths,t.paths)}(e,t);case"polygon":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!s(e.spatialReference,t.spatialReference)&&i(e.rings,t.rings)}(e,t);case"multipoint":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!s(e.spatialReference,t.spatialReference)&&a(e.points,t.points)}(e,t);case"mesh":return!1;default:return void r.neverReached(e)}}(e.geometry,t.geometry)&&!!function(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var a=0,i=r;a<i.length;a++){var s=i[a];if(e[s]!==t[s])return!1}return!0}(e.attributes,t.attributes)}}).apply(null,n))||(e.exports=a)},"6/KI":function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("/COu"),r("xJgq"),r("Jvs9")],void 0===(a=(function(e,t,r,n,a){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"]}return e.prototype.createFeatureResult=function(){return new n.default},e.prototype.prepareFeatures=function(){},e.prototype.finishFeatureResult=function(){},e.prototype.addFeature=function(e,t){e.features.push(t)},e.prototype.createFeature=function(){return new r.default},e.prototype.createSpatialReference=function(){return{wkid:0}},e.prototype.createGeometry=function(){return new a.default},e.prototype.addField=function(e,t){e.fields.push(t)},e.prototype.addCoordinate=function(e,t){e.coords.push(t)},e.prototype.addCoordinatePoint=function(e,t){e.coords.push(t)},e.prototype.addLength=function(e,t){e.lengths.push(t)},e.prototype.createPointGeometry=function(){return new a.default},e}();t.Context=i}).apply(null,n))||(e.exports=a)},"G+Sd":function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("YhCz")],void 0===(a=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.parsePBFFeatureQuery=function(e,t){var n=r.parseFeatureQuery(e,t).queryResult.featureResult;if(n&&n.features&&n.features.length&&n.objectIdFieldName)for(var a=n.objectIdFieldName,i=0,s=n.features;i<s.length;i++){var o=s[i];o.attributes&&(o.objectId=o.attributes[a])}return n}}).apply(null,n))||(e.exports=a)},J0rm:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("xhoE"),r("jZlN"),r("qMld"),r("ADZV"),r("8V7H"),r("Z4y+"),r("KQcO"),r("G+Sd"),r.dj.m(e)],void 0===(a=(function(e,t,r,n,a,i,s,o,u,l,c){Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(){}return e.prototype._parseFeatureQuery=function(e){var t=l.parsePBFFeatureQuery(e.buffer,e.options);if(e.options&&"dehydrated"===e.options.type){var r=t;if(t.spatialReference=r.spatialReference.toJSON(),r.fields)for(var n=0;n<r.fields.length;n++)r.fields[n]=r.fields[n].toJSON()}return a.resolve(t)},e}(),h=function(t){function p(){var r=t.call(this)||this;return r._thread=void 0,s.open(i.getAbsMid("./PBFWorker",e,c),{strategy:"dedicated"}).then((function(e){void 0===r._thread?r._thread=e:e.close()})),r}return r(p,t),p.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},p.prototype.parseFeatureQuery=function(e,t){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_parseFeatureQuery",{buffer:e,options:t},{transferList:[e]}).then((function(e){if(t&&"dehydrated"===t.type){var r=e;if(r.spatialReference=o.fromJSON(r.spatialReference),r.fields)for(var a=0;a<r.fields.length;a++)r.fields[a]=u.fromJSON(r.fields[a]);for(var i=r.spatialReference,s=0,l=r.features;s<l.length;s++){var c=l[s];c.uid=n.generateUID(),c.geometry&&(c.geometry.spatialReference=i)}}return e})):a.resolve(l.parsePBFFeatureQuery(e,t)):a.resolve(null)},p}(p);t.PBFWorker=h,t.default=function(){return new p}}).apply(null,n))||(e.exports=a)},WRgd:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("N7S/"),r("lRq4")],void 0===(a=(function(e,t,r,n){function a(e){return void 0===e&&(e=t.ZERO),[e[0],e[1],e[2],e[3],e[4],e[5]]}function i(e,t,r,n,i,s,o){return void 0===o&&(o=a()),o[0]=e,o[1]=t,o[2]=r,o[3]=n,o[4]=i,o[5]=s,o}function s(e){return e[0]>=e[3]?0:e[3]-e[0]}function o(e){return e[1]>=e[4]?0:e[4]-e[1]}function u(e){return e[2]>=e[5]?0:e[5]-e[2]}function l(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function c(e){return 6===e.length}Object.defineProperty(t,"__esModule",{value:!0}),t.create=a,t.fromValues=i,t.fromExtent=function(e,t){return void 0===t&&(t=a()),t[0]=e.xmin,t[1]=e.ymin,t[2]=e.zmin,t[3]=e.xmax,t[4]=e.ymax,t[5]=e.zmax,t},t.toExtent=function(e,t){var n=isFinite(e[2])||isFinite(e[5]);return new r(n?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})},t.fromMinMax=function(e,t,r){return void 0===r&&(r=a()),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=t[0],r[4]=t[1],r[5]=t[2],r},t.expandPointInPlace=function(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[3]&&(e[3]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[4]&&(e[4]=t[1]),t[2]<e[2]&&(e[2]=t[2]),t[2]>e[5]&&(e[5]=t[2])},t.expand=function(e,t,r){return void 0===r&&(r=e),c(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r[3]=Math.max(e[3],t[3]),r[4]=Math.max(e[4],t[4]),r[5]=Math.max(e[5],t[5])):n.is(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[3]=Math.max(e[3],t[2]),r[4]=Math.max(e[4],t[3])):2===t.length?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[3]=Math.max(e[3],t[0]),r[4]=Math.max(e[4],t[1])):3===t.length&&(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r[3]=Math.max(e[3],t[0]),r[4]=Math.max(e[4],t[1]),r[5]=Math.max(e[5],t[2])),r},t.expandWithBuffer=function(e,t,r,n,a){void 0===a&&(a=e);for(var i=e[0],s=e[1],o=e[2],u=e[3],l=e[4],c=e[5],p=0;p<n;p++)i=Math.min(i,t[r+3*p]),s=Math.min(s,t[r+3*p+1]),o=Math.min(o,t[r+3*p+2]),u=Math.max(u,t[r+3*p]),l=Math.max(l,t[r+3*p+1]),c=Math.max(c,t[r+3*p+2]);return a[0]=i,a[1]=s,a[2]=o,a[3]=u,a[4]=l,a[5]=c,a},t.expandWithOffset=function(e,t,r,n,a){return void 0===a&&(a=e),a[0]=Math.min(e[0],e[0]+t),a[3]=Math.max(e[3],e[3]+t),a[1]=Math.min(e[1],e[1]+r),a[4]=Math.max(e[4],e[4]+r),a[2]=Math.min(e[2],e[2]+n),a[5]=Math.max(e[5],e[5]+n),a},t.expandWithNestedArray=function(e,t,r,n){void 0===n&&(n=e);var a=t.length,i=e[0],s=e[1],o=e[2],u=e[3],l=e[4],c=e[5];if(r)for(var p=0;p<a;p++){var h=t[p];i=Math.min(i,h[0]),s=Math.min(s,h[1]),o=Math.min(o,h[2]),u=Math.max(u,h[0]),l=Math.max(l,h[1]),c=Math.max(c,h[2])}else for(p=0;p<a;p++)h=t[p],i=Math.min(i,h[0]),s=Math.min(s,h[1]),u=Math.max(u,h[0]),l=Math.max(l,h[1]);return n[0]=i,n[1]=s,n[2]=o,n[3]=u,n[4]=l,n[5]=c,n},t.allFinite=function(e){for(var t=0;t<6;t++)if(!isFinite(e[t]))return!1;return!0},t.width=s,t.depth=o,t.height=u,t.diameter=function(e){var t=s(e),r=u(e),n=o(e);return Math.sqrt(t*t+r*r+n*n)},t.center=function(e,t){return void 0===t&&(t=[0,0,0]),t[0]=e[0]+s(e)/2,t[1]=e[1]+o(e)/2,t[2]=e[2]+u(e)/2,t},t.size=function(e,t){return void 0===t&&(t=[0,0,0]),t[0]=s(e),t[1]=o(e),t[2]=u(e),t},t.maximumDimension=function(e){return Math.max(s(e),u(e),o(e))},t.containsPoint=function(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]},t.containsPointWithMargin=function(e,t,r){return t[0]>=e[0]-r&&t[1]>=e[1]-r&&t[2]>=e[2]-r&&t[0]<=e[3]+r&&t[1]<=e[4]+r&&t[2]<=e[5]+r},t.contains=function(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]},t.intersects=function(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])},t.offset=function(e,t,r,n,a){return void 0===a&&(a=e),a[0]=e[0]+t,a[1]=e[1]+r,a[2]=e[2]+n,a[3]=e[3]+t,a[4]=e[4]+r,a[5]=e[5]+n,a},t.setMin=function(e,t,r){return void 0===r&&(r=e),r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r},t.setMax=function(e,t,r){return void 0===r&&(r=e),r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e},t.set=l,t.empty=function(e){return e?l(e,t.NEGATIVE_INFINITY):a(t.NEGATIVE_INFINITY)},t.toRect=function(e,t){return t||(t=n.create()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t},t.fromRect=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e},t.is=c,t.isPoint=function(e){return 0===s(e)&&0===o(e)&&0===u(e)},t.equals=function(e,t,r){if(null==e||null==t)return e===t;if(!c(e)||!c(t))return!1;if(r){for(var n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0},t.wrap=function(e,t,r,n,a,s){return i(e,t,r,n,a,s,p)},t.POSITIVE_INFINITY=[-1/0,-1/0,-1/0,1/0,1/0,1/0],t.NEGATIVE_INFINITY=[1/0,1/0,1/0,-1/0,-1/0,-1/0],t.ZERO=[0,0,0,0,0,0];var p=a()}).apply(null,n))||(e.exports=a)},YhCz:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("ma1f"),r("qsST"),r("v7zm"),r("yre/"),r("6/KI")],void 0===(a=(function(e,t,r,n,a,i,s){function o(e){return e>=R.length?null:R[e]}function u(e){return e>=I.length?null:I[e]}function l(e){return e>=P.length?null:P[e]}function c(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function p(e,t,r){for(var n=t.createPointGeometry(r);e.next();)switch(e.tag()){case 3:for(var a=e.getUInt32(),i=e.pos()+a,s=0;e.pos()<i;)t.addCoordinatePoint(n,e.getSInt64(),0,s++);break;case 1:case 2:default:e.skip()}return n}function h(e,t,r){for(var n=t.createGeometry(r),a=2+(r.hasZ?1:0)+(r.hasM?1:0);e.next();)switch(e.tag()){case 2:for(var i=e.getUInt32(),s=e.pos()+i,o=0;e.pos()<s;)t.addLength(n,e.getUInt32(),o++);break;case 3:for(var u=e.getUInt32(),l=(s=e.pos()+u,0),c=0;e.pos()<s;)t.addCoordinate(n,e.getSInt64(),c,l),++l===a&&(c++,l=0);break;case 1:default:e.skip()}return n}function f(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function d(e){for(var t={type:o(0)};e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=o(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=u(e.getEnum());break;case 5:case 6:default:e.skip()}return t}function y(e,t,r,n){for(var a=t.createFeature(r),i=0;e.next();)switch(e.tag()){case 1:var s=n[i++].name;a.attributes[s]=e.processMessage(f);break;case 2:a.geometry=e.processMessageWithArgs(h,t,r);break;case 4:a.centroid=e.processMessageWithArgs(p,t,r);break;default:e.skip()}return a}function m(e){for(var t=[1,1,1,1];e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function g(e){for(var t=[0,0,0,0];e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function v(e){for(var t={originPosition:l(0)};e.next();)switch(e.tag()){case 1:t.originPosition=l(e.getEnum());break;case 2:t.scale=e.processMessage(m);break;case 3:t.translate=e.processMessage(g);break;default:e.skip()}return t}function b(e){for(var t={};e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function x(e,t){for(var r=t.createSpatialReference();e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:case 3:case 4:default:e.skip()}return r}function M(e,t){var r=t.createFeatureResult();r.geometryType=c(t,0);for(var n=!1;e.next();)switch(e.tag()){case 1:r.objectIdFieldName=e.getString();break;case 3:r.globalIdFieldName=e.getString();break;case 4:r.geohashFieldName=e.getString();break;case 5:r.geometryProperties=e.processMessage(b);break;case 7:r.geometryType=c(t,e.getEnum());break;case 8:r.spatialReference=e.processMessageWithArgs(x,t);break;case 10:r.hasZ=e.getBool();break;case 11:r.hasM=e.getBool();break;case 12:r.transform=e.processMessage(v);break;case 9:var a=e.getBool();r.exceededTransferLimit=a;break;case 13:t.addField(r,e.processMessage(d));break;case 15:n||(t.prepareFeatures(r),n=!0),t.addFeature(r,e.processMessageWithArgs(y,t,r,r.fields));break;case 2:case 6:default:e.skip()}return t.finishFeatureResult(r),r}function k(e,t){for(var r={};e.next();)switch(e.tag()){case 1:r.featureResult=e.processMessageWithArgs(M,t);break;default:e.skip()}return r}function F(e){return e&&"dehydrated"===e.type?new i.Context(e):new s.Context}Object.defineProperty(t,"__esModule",{value:!0});var T=n.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),R=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],I=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],P=["upperLeft","lowerLeft"];t.parseFeatureQuery=function(e,t){var n=F(t);try{for(var i=new a(new Uint8Array(e),new DataView(e)),s={};i.next();)switch(i.tag()){case 2:s.queryResult=i.processMessageWithArgs(k,n);break;default:i.skip()}return s}catch(e){var o=new r("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e});return T.error(o),{queryResult:{featureResult:n.createFeatureResult()}}}}}).apply(null,n))||(e.exports=a)},ZcgO:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("TMur"),r("jZlN"),r("pcDC"),r("H1tY"),r("rg9i"),r("LxLY"),r("rusB"),r("Z4y+"),r("WRgd"),r("lRq4"),r("Lzvl"),r("u90+"),r("KQcO"),r("/Vvo")],void 0===(a=(function(e,t,r,n,a,i,s,o,u,l,c,p,h,f,d,y){function m(e,t,r,a){return{uid:n.generateUID(),objectId:a&&e.attributes?e.attributes[a]:null,attributes:e.attributes,geometry:g(e.geometry,t,r),visible:!0}}function g(e,t,r){if(!e)return null;switch(t){case"point":return{x:e.x,y:e.y,z:e.z,m:e.m,hasZ:null!=e.z,hasM:null!=e.m,type:"point",spatialReference:r};case"polyline":return{paths:e.paths,hasZ:!!e.hasZ,hasM:!!e.hasM,type:"polyline",spatialReference:r};case"polygon":return{rings:e.rings,hasZ:!!e.hasZ,hasM:!!e.hasM,type:"polygon",spatialReference:r};case"multipoint":return{points:e.points,hasZ:!!e.hasZ,hasM:!!e.hasM,type:"multipoint",spatialReference:r}}}function v(e,t,r,n){return{x:e,y:t,z:r,hasZ:null!=r,hasM:!1,spatialReference:n,type:"point"}}function b(e){return"declaredClass"in e}function x(e){return"declaredClass"in e}function M(e){return"declaredClass"in e}function k(e){return o.isNone(e)?null:b(e)?e:h.fromJSON(function(e){var t=e.spatialReference.toJSON();switch(e.type){case"point":return{x:e.x,y:e.y,z:e.z,m:e.m,spatialReference:t};case"polygon":var r=e.hasZ,n=e.hasM;return{rings:R(e.rings),hasZ:r,hasM:n,spatialReference:t};case"polyline":return r=e.hasZ,n=e.hasM,{paths:R(e.paths),hasZ:r,hasM:n,spatialReference:t};case"extent":return{xmin:e.xmin,xmax:e.xmax,ymin:e.ymin,ymax:e.ymax,zmin:e.zmin,zmax:e.zmax,mmin:e.mmin,mmax:e.mmax,hasZ:r=e.hasZ,hasM:n=e.hasM,spatialReference:t};case"multipoint":var i=e.points;return r=e.hasZ,n=e.hasM,{points:P(i)?I(i):i,hasZ:r,hasM:n,spatialReference:t};default:return void a.neverReached(e)}}(e))}function F(e){if(!e)return 0;var t=32;for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];switch(typeof n){case"string":t+=N(n);break;default:case"number":t+=16}}return t}function T(e){if(o.isNone(e))return 0;var t=32;switch(e.type){case"point":t+=42;break;case"polyline":case"polygon":for(var r=0,n=2+(e.hasZ?1:0)+(e.hasM?1:0),i="polyline"===e.type?e.paths:e.rings,s=0,l=i;s<l.length;s++)r+=l[s].length;t+=8*r*n+64,t+=128*r,t+=34,t+=32*(i.length+1);break;case"multipoint":var c=e.points.length;t+=8*c*(2+(e.hasZ?1:0)+(e.hasM?1:0))+64,t+=128*c,t+=34,t+=32;break;case"extent":t+=98,e.hasM&&(t+=32),e.hasZ&&(t+=32);break;case"mesh":t+=u.estimateSize(e.vertexAttributes.position),t+=u.estimateSize(e.vertexAttributes.normal),t+=u.estimateSize(e.vertexAttributes.uv),t+=u.estimateSize(e.vertexAttributes.tangent);break;default:a.neverReached(e)}return t}function R(e){return function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];if(0!==n.length)return P(n)}return!1}(e)?e.map((function(e){return I(e)})):e}function I(e){return e.map((function(e){return u.toArray(e)}))}function P(e){return e.length&&(u.isFloat32Array(e[0])||u.isFloat64Array(e[0]))}function w(e,t){switch(c.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(var r=0;r<e.paths.length;r++)c.expandWithNestedArray(t,e.paths[r],e.hasZ);break;case"polygon":for(r=0;r<e.rings.length;r++)c.expandWithNestedArray(t,e.rings[r],e.hasZ);break;case"multipoint":c.expandWithNestedArray(t,e.points,e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax);break;default:a.neverReached(e)}}function Z(e,t){switch(p.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(var r=0;r<e.paths.length;r++)p.expandWithNestedArray(t,e.paths[r]);break;case"polygon":for(r=0;r<e.rings.length;r++)p.expandWithNestedArray(t,e.rings[r]);break;case"multipoint":p.expandWithNestedArray(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax;break;default:a.neverReached(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.equals=y.equals,t.DehydratedFeatureClass=function(e,t,r){this.uid=e,this.geometry=t,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null},t.hasGeometry=function(e){return o.isSome(e.geometry)},t.isFeatureGeometry=function(e){return r.isFeatureGeometryType(e.type)},t.DehydratedFeatureSetClass=function(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null},t.isPoint=function(e){return"point"===e.type},t.fromFeatureSetJSON=function(e){var t=r.featureGeometryTypeKebabDictionary.fromJSON(e.geometryType),n=l.fromJSON(e.spatialReference),i=e.transform,s=e.features.map((function(r){var s=m(r,t,n,e.objectIdFieldName),o=s.geometry;if(o&&i)switch(o.type){case"point":s.geometry=f.hydratePoint(i,o,o,o.hasZ,o.hasM);break;case"multipoint":s.geometry=f.hydrateMultipoint(i,o,o,o.hasZ,o.hasM);break;case"polygon":s.geometry=f.hydratePolygon(i,o,o,o.hasZ,o.hasM);break;case"polyline":s.geometry=f.hydratePolyline(i,o,o,o.hasZ,o.hasM);break;default:a.neverReached(o)}return s}));return{geometryType:t,features:s,spatialReference:n,fields:e.fields?e.fields.map((function(e){return d.fromJSON(e)})):null,objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}},t.fromJSONGeometry=g,t.makeDehydratedPoint=v,t.isHydratedGeometry=b,t.isHydratedPoint=x,t.isHydratedGraphic=M,t.hydrateGraphic=function(e,t){if(!e||M(e))return e;var r=new n({layer:t,sourceLayer:t});return r.visible=e.visible,r.symbol=s.clone(e.symbol),r.attributes=s.clone(e.attributes),r.geometry=k(e.geometry),r},t.hydrateGeometry=k,t.clonePoint=function(e,t){if(!e)return null;var r;if(x(e)){if(null==t)return e.clone();if(x(t))return t.copy(e)}return null!=t?((r=t).x=e.x,r.y=e.y,r.spatialReference=e.spatialReference,e.hasZ?(r.z=e.z,r.hasZ=e.hasZ):(r.z=null,r.hasZ=!1),e.hasM?(r.m=e.m,r.hasM=!0):(r.m=null,r.hasM=!1)):(r=v(e.x,e.y,e.z,e.spatialReference),e.hasM&&(r.m=e.m,r.hasM=!0)),r};var N=i("esri-text-decoder")?function(e){return 32+e.length}:function(e){return 32*e.length};t.estimateAttributesObjectSize=F,t.estimateGeometryObjectSize=T,t.estimateSize=function(e){var t=32;return t+=F(e.attributes),(t+=3)+(8+T(e.geometry))},t.numVertices=function(e){if(o.isNone(e))return 0;switch(e.type){case"point":return 1;case"polyline":for(var t=0,r=0,n=e.paths;r<n.length;r++)t+=n[r].length;return t;case"polygon":t=0;for(var i=0,s=e.rings;i<s.length;i++)t+=s[i].length;return t;case"multipoint":return e.points.length;case"extent":return 2;case"mesh":var u=e.vertexAttributes&&e.vertexAttributes.position;return u?u.length/3:0;default:return void a.neverReached(e)}},t.hasVertices=function(e){if(!e)return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(var t=0,r=e.paths;t<r.length;t++)if(r[t].length>0)return!0;return!1;case"polygon":for(var n=0,i=e.rings;n<i.length;n++)if(i[n].length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return e.vertexAttributes&&e.vertexAttributes.position&&e.vertexAttributes.position.length>0;default:return void a.neverReached(e)}},t.computeAABB=w,t.expandAABB=function(e,t){w(e,A),c.expand(t,A)},t.computeAABR=Z,t.expandAABR=function(e,t){Z(e,S),p.expand(t,S)},t.getObjectId=function(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null};var A=c.create(),S=p.create()}).apply(null,n))||(e.exports=a)},"yre/":function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("jZlN"),r("pcDC"),r("Z4y+"),r("ZcgO"),r("KQcO")],void 0===(a=(function(e,t,r,n,a,i,s){function o(e,t){return t}function u(e,t,r,n){switch(r){case 0:return h(e,t+n,0);case 1:return("lowerLeft"===e.originPosition?h:f)(e,t+n,1)}}function l(e,t,r,n){switch(r){case 0:return h(e,t+n,0);case 1:return("lowerLeft"===e.originPosition?h:f)(e,t+n,1);case 2:return h(e,t,2)}}function c(e,t,r,n){switch(r){case 0:return h(e,t+n,0);case 1:return("lowerLeft"===e.originPosition?h:f)(e,t+n,1);case 2:return h(e,t,3)}}function p(e,t,r,n){switch(r){case 0:return h(e,t+n,0);case 1:return("lowerLeft"===e.originPosition?h:f)(e,t+n,1);case 2:return h(e,t,2);case 3:return h(e,t,3)}}function h(e,t,r){return e.translate[r]+t*e.scale[r]}function f(e,t,r){return e.translate[r]-t*e.scale[r]}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=o,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}return e.prototype.createFeatureResult=function(){return new i.DehydratedFeatureSetClass},e.prototype.finishFeatureResult=function(e){this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0},e.prototype.createSpatialReference=function(){return new a},e.prototype.addField=function(e,t){e.fields.push(s.fromJSON(t));var r=e.fields.map((function(e){return e.name}));this.AttributesConstructor=function(){for(var e=0,t=r;e<t.length;e++)this[t[e]]=null}},e.prototype.addFeature=function(e,t){var r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(var n in t.attributes){var a=t.attributes[n];"string"==typeof a&&a.length>r&&(t.attributes[n]="")}e.features.push(t)},e.prototype.prepareFeatures=function(e){var t=this;switch(this.options.applyTransform&&e.transform&&(this.transform=e.transform,this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=function(e,r,n,a){return t.addCoordinatePoint(e,r,a)},this.createGeometry=function(e){return t.createPointGeometry(e)};break;case"polygon":this.addCoordinate=function(e,r,n,a){return t.addCoordinatePolygon(e,r,a)},this.createGeometry=function(e){return t.createPolygonGeometry(e)};break;case"polyline":this.addCoordinate=function(e,r,n,a){return t.addCoordinatePolyline(e,r,a)},this.createGeometry=function(e){return t.createPolylineGeometry(e)};break;case"multipoint":this.addCoordinate=function(e,r,n,a){return t.addCoordinateMultipoint(e,r,a)},this.createGeometry=function(e){return t.createMultipointGeometry(e)};break;default:n.neverReached(e.geometryType)}},e.prototype.createFeature=function(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,new i.DehydratedFeatureClass(r.generateUID(),null,new this.AttributesConstructor)},e.prototype.addLength=function(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)},e.prototype.createPointGeometry=function(e){var t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t},e.prototype.addCoordinatePoint=function(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}},e.prototype.transformPathLikeValue=function(e,t){var r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)},e.prototype.addCoordinatePolyline=function(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)},e.prototype.addCoordinatePolygon=function(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)},e.prototype.addCoordinateMultipoint=function(e,t,r){0===r&&e.points.push([]);var n=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)},e.prototype.createPolygonGeometry=function(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},e.prototype.createPolylineGeometry=function(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},e.prototype.createMultipointGeometry=function(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},e.prototype.dehydratedAddPointsCoordinate=function(e,t,r){if(null===this.coordinateBuffer){var n=this.lengths.reduce((function(e,t){return e+t}),0);this.coordinateBuffer=new Float64Array(n*this.vertexDimension)}0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);var a=this.transformPathLikeValue(t,r);0===r&&e[e.length-1].push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=a},e.prototype.deriveApplyTransform=function(e){var t=e.hasZ,r=e.hasM;return t&&r?p:t?l:r?c:u},e}();t.Context=d}).apply(null,n))||(e.exports=a)}}]);