(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{"Ab+v":function(t,e,r){"use strict";r.r(e);var s=r("By9p"),n=r("bJda"),i=r("WZb1"),o=r("8uAX"),a=r("ofM5"),h=r("ZlUD"),u=r("iRQj"),l=r("GlSV");function c(t,e){return e}function d(t,e,r,s){switch(r){case 0:return m(t,e+s,0);case 1:return"lowerLeft"===t.originPosition?m(t,e+s,1):function({translate:t,scale:e},r,s){return t[s]-r*e[s]}(t,e+s,1)}}function p(t,e,r,s){switch(r){case 2:return m(t,e,2);default:return d(t,e,r,s)}}function f(t,e,r,s){switch(r){case 2:return m(t,e,3);default:return d(t,e,r,s)}}function y(t,e,r,s){switch(r){case 3:return m(t,e,3);default:return p(t,e,r,s)}}function m({translate:t,scale:e},r,s){return t[s]+r*e[s]}class g{constructor(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=c,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new l.b}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const e=Object(u.a)(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return new i.a}addField(t,e){t.fields.push(a.a.fromJSON(e));const r=t.fields.map(t=>t.name);this.AttributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const s in e.attributes){const t=e.attributes[s];"string"==typeof t&&t.length>r&&(e.attributes[s]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,n=Object(h.z)(r.clone(),r,!1,!1,this.transform),i=Object(h.k)(n,s,!1,!1);let o=null;switch(s){case"esriGeometryPoint":o="point";break;case"esriGeometryPolygon":o="polygon";break;case"esriGeometryPolyline":o="polyline";break;case"esriGeometryMultipoint":o="multipoint"}i.type=o,t.queryGeometryType=s,t.queryGeometry=i}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this.deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this.addCoordinatePolygon(t,e,r),this.createGeometry=t=>this.createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this.addCoordinatePolyline(t,e,r),this.createGeometry=t=>this.createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this.addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this.createMultipointGeometry(t);break;default:Object(n.a)(t.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new l.a(Object(o.a)(),null,new this.AttributesConstructor)}allocateCoordinates(){const t=this.lengths.reduce((t,e)=>t+e,0);this.coordinateBuffer=new Float64Array(t*this.vertexDimension),this.coordinateBufferPtr=0}addLength(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)}addCoordinatePolyline(t,e,r){this.dehydratedAddPointsCoordinate(t.paths,e,r)}addCoordinatePolygon(t,e,r){this.dehydratedAddPointsCoordinate(t.rings,e,r)}addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this.transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(e,r);0===r&&t[t.length-1].push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?y:e?p:r?f:d}}class b{_parseFeatureQuery(t){const e=Object(s.a)(t.buffer,new g(t.options)),r={...e,spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map(t=>t.toJSON()):void 0};return Promise.resolve(r)}}e.default=function(){return new b}}}]);