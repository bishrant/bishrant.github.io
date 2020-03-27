(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/support/Field":"KQcO","arcgis-js-api/layers/support/fieldType":"Q3lp","arcgis-js-api/tasks/support/FeatureSet":"w1v0"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{KQcO:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ImIS"),r("ycL1"),r("Vx27"),r("1dvD"),r("ZsQS"),r("Q3lp")],void 0===(i=(function(e,t,r,o,i,n,p,a,l,s){var y=new i.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function t(t){var r=e.call(this,t)||this;return r.alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}var i;return r(t,e),i=t,t.prototype.readDescription=function(e,t){var r,o=t.description;try{r=JSON.parse(o)}catch(e){}return r?r.value:null},t.prototype.readValueType=function(e,t){var r,o=t.description;try{r=JSON.parse(o)}catch(e){}return r?y.fromJSON(r.fieldValueType):null},t.prototype.clone=function(){return new i({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})},o([p.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),o([p.property({type:[String,Number],json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),o([p.property()],t.prototype,"description",void 0),o([p.reader("description")],t.prototype,"readDescription",null),o([p.property({types:l.types,json:{read:{reader:l.fromJSON},write:!0}})],t.prototype,"domain",void 0),o([p.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),o([p.property({type:a.Integer,json:{write:!0}})],t.prototype,"length",void 0),o([p.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),o([p.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),o([p.enumeration.serializable()(s.kebabDict)],t.prototype,"type",void 0),o([p.property()],t.prototype,"valueType",void 0),o([p.reader("valueType",["description"])],t.prototype,"readValueType",null),i=o([p.subclass("esri.layers.support.Field")],t)}(p.declared(n.JSONSupport))}).apply(null,o))||(e.exports=i)},Q3lp:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("ImIS")],void 0===(i=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.kebabDict=new r.default({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}).apply(null,o))||(e.exports=i)},w1v0:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("TMur"),r("jZlN"),r("ImIS"),r("ycL1"),r("LxLY"),r("Vx27"),r("Z4y+"),r("Lzvl"),r("KQcO")],void 0===(i=(function(e,t,r,o,i,n,p,a,l,s,y,u,d){var c=new p.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"}),f=function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.exceededTransferLimit=!1,r.features=[],r.fields=null,r.geometryType=null,r.hasM=!1,r.hasZ=!1,r.queryGeometry=null,r.spatialReference=null,r}return o(t,e),t.prototype.readFeatures=function(e,t){for(var r=y.fromJSON(t.spatialReference),o=[],i=0;i<e.length;i++){var p=e[i],a=n.fromJSON(p),s=p.geometry&&p.geometry.spatialReference;l.isSome(a.geometry)&&!s&&(a.geometry.spatialReference=r),o.push(a)}return o},t.prototype.writeGeometryType=function(e,t,r,o){if(e)c.write(e,t,r,o);else{var i=this.features;if(i)for(var n=0,p=i;n<p.length;n++){var a=p[n];if(a&&l.isSome(a.geometry))return void c.write(a.geometry.type,t,r,o)}}},t.prototype.writeSpatialReference=function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r)for(var o=0,i=r;o<i.length;o++){var n=i[o];n&&l.isSome(n.geometry)&&n.geometry.spatialReference&&(t.spatialReference=n.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var o=t.features[r];if(o.geometry){var i=e&&e[r];o.geometry=i&&i.toJSON()||o.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,r=t[0],o=t[1],i=e.translate,n=i[0],p=i[1],a=this.features,s=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-n)/r)}),(function(e){return Math.round((p-e)/o)})),y=0,u=a.length;y<u;y++)s(l.expect(a[y].geometry))||(a.splice(y,1),y--,u--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this,t=e.features,r=e.transform;if(!r)return this;for(var o=r.translate,i=o[0],n=o[1],p=r.scale,a=p[0],s=p[1],y=this._getHydrationFunction(e.geometryType,(function(e){return e*a+i}),(function(e){return n-e*s})),u=0,d=t;u<d.length;u++){var c=d[u].geometry;l.isSome(c)&&y(c)}return this},t.prototype._quantizePoints=function(e,t,r){for(var o,i,n=[],p=0,a=e.length;p<a;p++){var l=e[p];if(p>0){var s=t(l[0]),y=r(l[1]);s===o&&y===i||(n.push([s-o,y-i]),o=s,i=y)}else o=t(l[0]),i=r(l[1]),n.push([o,i])}return n.length>0?n:null},t.prototype._getQuantizationFunction=function(e,t,r){var o=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var i=u.isPolygon(e)?e.rings:e.paths,n=[],p=0,a=i.length;p<a;p++){var l=o._quantizePoints(i[p],t,r);l&&n.push(l)}return n.length>0?(u.isPolygon(e)?e.rings=n:e.paths=n,e):null}:"multipoint"===e?function(e){var i;return(i=o._quantizePoints(e.points,t,r)).length>0?(e.points=i,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var o,i,n=u.isPolygon(e)?e.rings:e.paths,p=0,a=n.length;p<a;p++)for(var l=n[p],s=0,y=l.length;s<y;s++){var d=l[s];s>0?(o+=d[0],i+=d[1]):(o=d[0],i=d[1]),d[0]=t(o),d[1]=r(i)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var o,i,n=e.points,p=0,a=n.length;p<a;p++){var l=n[p];p>0?(o+=l[0],i+=l[1]):(o=l[0],i=l[1]),l[0]=t(o),l[1]=r(i)}}:void 0},r([s.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),r([s.property({type:[n],json:{write:!0}})],t.prototype,"features",void 0),r([s.reader("features")],t.prototype,"readFeatures",null),r([s.property({type:[d],json:{write:!0}})],t.prototype,"fields",void 0),r([s.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:c.read}}})],t.prototype,"geometryType",void 0),r([s.writer("geometryType")],t.prototype,"writeGeometryType",null),r([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),r([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),r([s.property({types:i.geometryTypes,json:{read:u.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),r([s.property({type:y,json:{write:!0}})],t.prototype,"spatialReference",void 0),r([s.writer("spatialReference")],t.prototype,"writeSpatialReference",null),r([s.property({json:{write:!0}})],t.prototype,"transform",void 0),r([s.subclass("esri.tasks.support.FeatureSet")],t)}(s.declared(a.JSONSupport));return f.prototype.toJSON.isDefaultToJSON=!0,f||(f={}),f}).apply(null,o))||(e.exports=i)}}]);