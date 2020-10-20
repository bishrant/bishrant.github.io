(function(){var t={"esri/views/3d/support/PBFDecoderWorker":"Yk2S","esri/tasks/operations/pbfDehydratedFeatureSet":"yre/"},e=this||window,r=e.webpackJsonp=e.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(t):(r.absMidsWaiting=r.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{Yk2S:function(t,e,r){var n,o;n=[r.dj.c(t.i),e,r("zOht"),r("qMld"),r("yre/"),r("G+Sd")],void 0===(o=(function(t,e,r,n,o,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(){}return t.prototype._parseFeatureQuery=function(t){var e=i.parsePBFFeatureQuery(t.buffer,new o.DehydratedFeatureSetParserContext(t.options)),a=r.__assign(r.__assign({},e),{spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map((function(t){return t.toJSON()})):void 0});return n.resolve(a)},t}();e.default=function(){return new a}}).apply(null,n))||(t.exports=o)},"yre/":function(t,e,r){var n,o;n=[r.dj.c(t.i),e,r("pcDC"),r("gKLm"),r("Z4y+"),r("ZcgO"),r("KQcO"),r("HoQt")],void 0===(o=(function(t,e,r,n,o,i,a,s){"use strict";function u(t,e){return e}function h(t,e,r,n){switch(r){case 0:return f(t,e+n,0);case 1:return"lowerLeft"===t.originPosition?f(t,e+n,1):function(t,e,r){return t.translate[1]-e*t.scale[1]}(t,e+n)}}function p(t,e,r,n){switch(r){case 2:return f(t,e,2);default:return h(t,e,r,n)}}function d(t,e,r,n){switch(r){case 2:return f(t,e,3);default:return h(t,e,r,n)}}function c(t,e,r,n){switch(r){case 3:return f(t,e,3);default:return p(t,e,r,n)}}function f(t,e,r){return t.translate[r]+e*t.scale[r]}Object.defineProperty(e,"__esModule",{value:!0}),e.DehydratedFeatureSetParserContext=void 0;var l=function(){function t(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=u,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}return t.prototype.createFeatureResult=function(){return new i.DehydratedFeatureSetClass},t.prototype.finishFeatureResult=function(t){if(this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,t.hasZ){var e=s.getGeometryZScaler(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(e)for(var r=0,n=t.features;r<n.length;r++)e(n[r].geometry)}},t.prototype.createSpatialReference=function(){return new o},t.prototype.addField=function(t,e){t.fields.push(a.fromJSON(e));var r=t.fields.map((function(t){return t.name}));this.AttributesConstructor=function(){for(var t=0,e=r;t<e.length;t++)this[e[t]]=null}},t.prototype.addFeature=function(t,e){var r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(var n in e.attributes){var o=e.attributes[n];"string"==typeof o&&o.length>r&&(e.attributes[n]="")}t.features.push(e)},t.prototype.prepareFeatures=function(t){var e=this;switch(this.options.applyTransform&&t.transform&&(this.transform=t.transform,this.applyTransform=this.deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"point":this.addCoordinate=function(t,r,n){return e.addCoordinatePoint(t,r,n)},this.createGeometry=function(t){return e.createPointGeometry(t)};break;case"polygon":this.addCoordinate=function(t,r,n){return e.addCoordinatePolygon(t,r,n)},this.createGeometry=function(t){return e.createPolygonGeometry(t)};break;case"polyline":this.addCoordinate=function(t,r,n){return e.addCoordinatePolyline(t,r,n)},this.createGeometry=function(t){return e.createPolylineGeometry(t)};break;case"multipoint":this.addCoordinate=function(t,r,n){return e.addCoordinateMultipoint(t,r,n)},this.createGeometry=function(t){return e.createMultipointGeometry(t)};break;default:r.neverReached(t.geometryType)}},t.prototype.createFeature=function(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,new i.DehydratedFeatureClass(n.generateUID(),null,new this.AttributesConstructor)},t.prototype.addLength=function(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)},t.prototype.createPointGeometry=function(t){var e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e},t.prototype.addCoordinatePoint=function(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}},t.prototype.transformPathLikeValue=function(t,e){var r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)},t.prototype.addCoordinatePolyline=function(t,e,r){this.dehydratedAddPointsCoordinate(t.paths,e,r)},t.prototype.addCoordinatePolygon=function(t,e,r){this.dehydratedAddPointsCoordinate(t.rings,e,r)},t.prototype.addCoordinateMultipoint=function(t,e,r){0===r&&t.points.push([]);var n=this.transformPathLikeValue(e,r);t.points[t.points.length-1].push(n)},t.prototype.createPolygonGeometry=function(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}},t.prototype.createPolylineGeometry=function(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}},t.prototype.createMultipointGeometry=function(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}},t.prototype.dehydratedAddPointsCoordinate=function(t,e,r){if(null===this.coordinateBuffer){var n=this.lengths.reduce((function(t,e){return t+e}),0);this.coordinateBuffer=new Float64Array(n*this.vertexDimension)}0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);var o=this.transformPathLikeValue(e,r);0===r&&t[t.length-1].push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=o},t.prototype.deriveApplyTransform=function(t){var e=t.hasZ,r=t.hasM;return e&&r?c:e?p:r?d:h},t}();e.DehydratedFeatureSetParserContext=l}).apply(null,n))||(t.exports=o)}}]);