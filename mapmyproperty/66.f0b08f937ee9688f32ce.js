(function(){var e={"arcgis-js-api/views/3d/layers/i3s/LEPCC":"1RVI","arcgis-js-api/views/3d/layers/i3s/PointCloudWorkerUtil":"NNdt","arcgis-js-api/views/3d/layers/i3s/I3SBinaryReader":"W2ph","arcgis-js-api/core/libs/gl-matrix-2/quatf32":"fdzS","arcgis-js-api/core/libs/gl-matrix-2/factories/quatf32":"gKSc","arcgis-js-api/views/3d/layers/PointCloudWorker":"wCvz"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"1RVI":function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("ma1f")],void 0===(o=(function(e,t,r){function n(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+0,10)),version:t.getUint16(r+10,!0),checksum:t.getUint32(r+12,!0)}}function o(e,t,r){var n=[];t=a(e,t,n);for(var o=[],i=0;i<n.length;i++){o.length=0,t=a(e,t,o);for(var u=0;u<o.length;u++)r.push(o[u]+n[i])}return t}function a(e,t,n){var o=new DataView(e,t),a=o.getUint8(0),i=31&a,u=!!(32&a),l=(192&a)>>6,c=0;if(0===l)c=o.getUint32(1,!0),t+=5;else if(1===l)c=o.getUint16(1,!0),t+=3;else{if(2!==l)throw new r("lepcc-decode-error","Bad count type");c=o.getUint8(1),t+=2}if(u)throw new r("lepcc-decode-error","LUT not implemented");for(var f=Math.ceil(c*i/8),s=new Uint8Array(e,t,f),d=0,v=0,p=0,y=-1>>>32-i,b=0;b<c;b++){for(;v<i;)d|=s[p]<<v,v+=8,p+=1;n[b]=d&y,d>>>=i,(v-=i)+i>32&&(d|=s[p-1]>>8-v)}return t+p}Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXYZ=function(e){var t=new DataView(e,0),a=0,i=n(e,t,a),u=i.version;if(a+=16,"LEPCC     "!==i.identifier)throw new r("lepcc-decode-error","Bad identifier");if(u>1)throw new r("lepcc-decode-error","Unknown version");var l=function(e,t){return{sizeLo:e.getUint32(t+0,!0),sizeHi:e.getUint32(t+4,!0),minX:e.getFloat64(t+8,!0),minY:e.getFloat64(t+16,!0),minZ:e.getFloat64(t+24,!0),maxX:e.getFloat64(t+32,!0),maxY:e.getFloat64(t+40,!0),maxZ:e.getFloat64(t+48,!0),errorX:e.getFloat64(t+56,!0),errorY:e.getFloat64(t+64,!0),errorZ:e.getFloat64(t+72,!0),count:e.getUint32(t+80,!0),reserved:e.getUint32(t+84,!0)}}(t,a);if(a+=88,l.sizeHi*Math.pow(2,32)+l.sizeLo!==e.byteLength)throw new r("lepcc-decode-error","Bad size");var c=new Float64Array(3*l.count),f=[],s=[],d=[],v=[];if(a=o(e,a,f),a=o(e,a,s),a=o(e,a,d),(a=o(e,a,v))!==e.byteLength)throw new r("lepcc-decode-error","Bad length");for(var p=0,y=0,b=0;b<f.length;b++){y+=f[b];for(var g=0,w=0;w<s[b];w++){var h=v[p];c[3*p]=Math.min(l.maxX,l.minX+2*l.errorX*(g+=d[p])),c[3*p+1]=Math.min(l.maxY,l.minY+2*l.errorY*y),c[3*p+2]=Math.min(l.maxZ,l.minZ+2*l.errorZ*h),p++}}return{errorX:l.errorX,errorY:l.errorY,errorZ:l.errorZ,result:c}},t.decodeRGB=function(e){var t=new DataView(e,0),o=0,a=n(e,t,o),i=a.version;if(o+=16,"ClusterRGB"!==a.identifier)throw new r("lepcc-decode-error","Bad identifier");if(i>1)throw new r("lepcc-decode-error","Unknown version");var u=function(e,t){return{sizeLo:e.getUint32(t+0,!0),sizeHi:e.getUint32(t+4,!0),count:e.getUint32(t+8,!0),colorMapCount:e.getUint16(t+12,!0),lookupMethod:e.getUint8(t+14),compressionMethod:e.getUint8(t+15)}}(t,o);if(o+=16,u.sizeHi*Math.pow(2,32)+u.sizeLo!==e.byteLength)throw new r("lepcc-decode-error","Bad size");if((2===u.lookupMethod||1===u.lookupMethod)&&0===u.compressionMethod){if(3*u.colorMapCount+u.count+o!==e.byteLength||u.colorMapCount>256)throw new r("lepcc-decode-error","Bad count");for(var l=new Uint8Array(e,o,3*u.colorMapCount),c=new Uint8Array(e,o+3*u.colorMapCount,u.count),f=new Uint8Array(3*u.count),s=0;s<u.count;s++){var d=c[s];f[3*s]=l[3*d],f[3*s+1]=l[3*d+1],f[3*s+2]=l[3*d+2]}return f}if(0===u.lookupMethod&&0===u.compressionMethod){if(3*u.count+o!==e.byteLength||0!==u.colorMapCount)throw new r("lepcc-decode-error","Bad count");return new Uint8Array(e,o).slice()}if(u.lookupMethod<=2&&1===u.compressionMethod){if(o+3!==e.byteLength||1!==u.colorMapCount)throw new r("lepcc-decode-error","Bad count");var v=t.getUint8(o),p=t.getUint8(o+1),y=t.getUint8(o+2);for(f=new Uint8Array(3*u.count),s=0;s<u.count;s++)f[3*s]=v,f[3*s+1]=p,f[3*s+2]=y;return f}throw new r("lepcc-decode-error","Bad method "+u.lookupMethod+","+u.compressionMethod)},t.decodeIntensity=function(e){var t=new DataView(e,0),o=0,i=n(e,t,o),u=i.version;if(o+=16,"Intensity "!==i.identifier)throw new r("lepcc-decode-error","Bad identifier");if(u>1)throw new r("lepcc-decode-error","Unknown version");var l=function(e,t){return{sizeLo:e.getUint32(t+0,!0),sizeHi:e.getUint32(t+4,!0),count:e.getUint32(t+8,!0),scaleFactor:e.getUint16(t+12,!0),bitsPerPoint:e.getUint8(t+14),reserved:e.getUint8(t+15)}}(t,o);if(o+=16,l.sizeHi*Math.pow(2,32)+l.sizeLo!==e.byteLength)throw new r("lepcc-decode-error","Bad size");var c=new Uint16Array(l.count);if(8===l.bitsPerPoint){if(l.count+o!==e.byteLength)throw new r("lepcc-decode-error","Bad size");for(var f=new Uint8Array(e,o,l.count),s=0;s<l.count;s++)c[s]=f[s]*l.scaleFactor}else if(16===l.bitsPerPoint){if(2*l.count+o!==e.byteLength)throw new r("lepcc-decode-error","Bad size");for(f=new Uint16Array(e,o,l.count),s=0;s<l.count;s++)c[s]=f[s]*l.scaleFactor}else{if(a(e,o,f=[])!==e.byteLength)throw new r("lepcc-decode-error","Bad size");for(s=0;s<l.count;s++)c[s]=f[s]*l.scaleFactor}return c}}).apply(null,n))||(e.exports=o)},NNdt:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("LxLY"),r("O0KB"),r("qasq"),r("mkxQ"),r("W2ph"),r("1RVI")],void 0===(o=(function(e,t,r,n,o,a,i,u){function l(e,t){for(var r=new Float64Array(t),n=0;n<t;n++)r[n]=e[3*n+2];return r}function c(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}function f(e){for(var t=0,r=0,n=e||[];r<n.length;r++)t|=1<<n[r];return t}Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateRenderer=function(e,t,r,i){var u=e.rendererJSON,l=null,f=null;if(t&&e.isRGBRenderer)l=t;else if(t&&"pointCloudUniqueValueRenderer"===u.type){var s=(f=a.fromJSON(u)).colorUniqueValueInfos;l=new Uint8Array(3*i);for(var d=c(f.fieldTransformType),v=0;v<i;v++)for(var p=(g=d?d(t[v]):t[v])+"",y=0;y<s.length;y++)if(s[y].values.indexOf(p)>=0){l[3*v]=s[y].color.r,l[3*v+1]=s[y].color.g,l[3*v+2]=s[y].color.b;break}}else if(t&&"pointCloudStretchRenderer"===u.type){var b=(f=o.fromJSON(u)).stops;for(l=new Uint8Array(3*i),d=c(f.fieldTransformType),v=0;v<i;v++){var g=d?d(t[v]):t[v],w=b.length-1;if(g<b[0].value)l[3*v]=b[0].color.r,l[3*v+1]=b[0].color.g,l[3*v+2]=b[0].color.b;else if(g>=b[w].value)l[3*v]=b[w].color.r,l[3*v+1]=b[w].color.g,l[3*v+2]=b[w].color.b;else for(y=1;y<b.length;y++)if(g<b[y].value){var h=(g-b[y-1].value)/(b[y].value-b[y-1].value);l[3*v]=b[y].color.r*h+b[y-1].color.r*(1-h),l[3*v+1]=b[y].color.g*h+b[y-1].color.g*(1-h),l[3*v+2]=b[y].color.b*h+b[y-1].color.b*(1-h);break}}}else if(t&&"pointCloudClassBreaksRenderer"===u.type){var m=(f=n.fromJSON(u)).colorClassBreakInfos;for(l=new Uint8Array(3*i),d=c(f.fieldTransformType),v=0;v<i;v++)for(g=d?d(t[v]):t[v],y=0;y<m.length;y++)if(g>=m[y].minValue&&g<=m[y].maxValue){l[3*v]=m[y].color.r,l[3*v+1]=m[y].color.g,l[3*v+2]=m[y].color.b;break}}else for(l=new Uint8Array(3*i),v=0;v<l.length;v++)l[v]=255;if(r&&f&&f.colorModulation){var A=f.colorModulation.minValue,C=f.colorModulation.maxValue;for(v=0;v<i;v++){var I=(g=r[v])>=C?1:g<=A?.3:.3+.7*(g-A)/(C-A);l[3*v]=I*l[3*v],l[3*v+1]=I*l[3*v+1],l[3*v+2]=I*l[3*v+2]}}return l},t.readGeometry=function(e,t){if(null==e.encoding||""===e.encoding){var n=i.createGeometryIndexFromSchema(t,e);if(r.isNone(n.vertexAttributes.position))return;for(var o=i.createTypedView(t,n.vertexAttributes.position),a=n.header.fields,l=[a.offsetX,a.offsetY,a.offsetZ],c=[a.scaleX,a.scaleY,a.scaleZ],f=o.length/3,s=new Float64Array(3*f),d=0;d<f;d++)s[3*d]=o[3*d]*c[0]+l[0],s[3*d+1]=o[3*d+1]*c[1]+l[1],s[3*d+2]=o[3*d+2]*c[2]+l[2];return s}if("lepcc-xyz"===e.encoding)return u.decodeXYZ(t).result},t.getAttributeValues=function(e,t,n){return r.isSome(e)&&e.attributeInfo.useElevation?l(t,n):r.isSome(e)?i.readBinaryAttribute(e.attributeInfo.storageInfo,e.buffer,n):null},t.elevationFromPositions=l,t.filterInPlace=function(e,t,r,n,o){for(var a=e.length/3,i=0,u=0;u<a;u++){for(var l=!0,c=0;c<n.length&&l;c++){var s=n[c].filterJSON,d=o[c].values[u];switch(s.type){case"pointCloudValueFilter":var v="exclude"===s.mode;-1!==s.values.indexOf(d)===v&&(l=!1);break;case"pointCloudBitfieldFilter":var p=f(s.requiredSetBits),y=f(s.requiredClearBits);(d&p)===p&&0==(d&y)||(l=!1);break;case"pointCloudReturnFilter":for(var b=15&d,g=d>>>4&15,w=g>1,h=1===b,m=b===g,A=!1,C=0,I=s.includedReturns;C<I.length;C++){var U=I[C];if("last"===U&&m||"firstOfMany"===U&&h&&w||"lastOfMany"===U&&m&&w||"single"===U&&!w){A=!0;break}}A||(l=!1)}}l&&(r[i]=u,e[3*i]=e[3*u],e[3*i+1]=e[3*u+1],e[3*i+2]=e[3*u+2],t[3*i]=t[3*u],t[3*i+1]=t[3*u+1],t[3*i+2]=t[3*u+2],i++)}return i}}).apply(null,n))||(e.exports=o)},O0KB:function(e,t){},W2ph:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("rg9i"),r("qsST"),r("1RVI")],void 0===(o=(function(e,t,r,n,o,a,i){Object.defineProperty(t,"__esModule",{value:!0});var u=a.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function l(e,t,r){for(var o="",a=0;a<r;){var i=e[t+a];if(i<128)o+=String.fromCharCode(i),a++;else if(i>=192&&i<224){if(a+1>=r)throw new n("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var u=(31&i)<<6|63&e[t+a+1];o+=String.fromCharCode(u),a+=2}else if(i>=224&&i<240){if(a+2>=r)throw new n("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");u=(15&i)<<12|(63&e[t+a+1])<<6|63&e[t+a+2],o+=String.fromCharCode(u),a+=3}else{if(!(i>=240&&i<248))throw new n("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(a+3>=r)throw new n("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");(u=(7&i)<<18|(63&e[t+a+1])<<12|(63&e[t+a+2])<<6|63&e[t+a+3])>=65536?o+=String.fromCharCode(55296+(u-65536>>10),56320+(1023&u)):o+=String.fromCharCode(u),a+=4}}return o}function c(e,r){for(var n={byteOffset:0,byteCount:0,fields:Object.create(null)},o=0,a=0;a<r.length;a++){var i=r[a],u=i.valueType||i.type;n.fields[i.property]=(0,t.valueType2ArrayBufferReader[u])(e,o),o+=t.valueType2TypedArrayClassMap[u].BYTES_PER_ELEMENT}return n.byteCount=o,n}function f(e,t,r){var o,a,i=[],u=0;for(a=0;a<e;a+=1){if((o=t[a])>0){if(i.push(l(r,u,o-1)),0!==r[u+o-1])throw new n("string-array-error","Invalid string array: missing null termination.")}else i.push(null);u+=o}return i}function s(e,r){return new(0,t.valueType2TypedArrayClassMap[r.valueType])(e,r.byteOffset,r.count*r.valuesPerElement)}function d(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function v(e,t,r){for(var a=null!=t.header?c(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},i={header:a,byteOffset:a.byteCount,byteCount:0,entries:Object.create(null)},u=a.byteCount,l=0;l<t.ordering.length;l++){var f=t.ordering[l],s=o.clone(t[f]);if(s.count=a.fields.count,"String"===s.valueType){if(s.byteOffset=u,s.byteCount=a.fields[f+"ByteCount"],"UTF-8"!==s.encoding)throw new n("unsupported-encoding","Unsupported String encoding.",{encoding:s.encoding})}else{if(!h(s.valueType))throw new n("unsupported-value-type","Unsupported binary valueType",{valueType:s.valueType});var d=m(s.valueType);s.byteOffset=u+=u%d!=0?d-u%d:0,s.byteCount=d*s.valuesPerElement*s.count}u+=s.byteCount,i.entries[f]=s}return i.byteCount=u-i.byteOffset,i}function p(e,t,r){if(t!==e&&u.error("Invalid "+r+" buffer size\n expected: "+e+", actual: "+t+")"),t<e)throw new n("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function y(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}function b(e){for(var t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1},r=0,n=e.ordering;r<n.length;r++){var o=n[r];if(e.vertexAttributes[o])switch(o){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function g(e){for(var t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1},r=0,n=e;r<n.length;r++)switch(n[r]){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}t.readHeader=c,t.readStringArray=f,t.createTypedView=s,t.createRawView=d,t.createAttributeDataIndex=v,t.createGeometryDescriptorFromDefinition=y,t.createGeometryIndexFromSchema=function(e,t){for(var n=c(e,t&&t.header),o=n.byteCount,a={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,u=null!=i.vertexCount?i.vertexCount:i.count,l=0,f=t.ordering;l<f.length;l++){var s=f[l];if(t.vertexAttributes[s]){var d=r.__assign(r.__assign({},t.vertexAttributes[s]),{byteOffset:o,count:u});a.vertexAttributes[w[s]?w[s]:"_"+s]=d,o+=m(d.valueType)*d.valuesPerElement*u}}var v=i.faceCount;if(t.faces&&v){a.faces={};for(var y=0,b=t.ordering;y<b.length;y++){var g=b[y];t.faces[g]&&(d=r.__assign(r.__assign({},t.faces[g]),{byteOffset:o,count:v}),a.faces[g]=d,o+=m(d.valueType)*d.valuesPerElement*v)}}var h=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&h){a.featureAttributes={};for(var A=0,C=t.featureAttributeOrder;A<C.length;A++){var I=C[A];t.featureAttributes[I]&&(d=r.__assign(r.__assign({},t.featureAttributes[I]),{byteOffset:o,count:h}),a.featureAttributes[I]=d,o+=("UInt64"===d.valueType?8:m(d.valueType))*d.valuesPerElement*h)}}return p(o,e.byteLength,"geometry"),a.byteCount=o-a.byteOffset,a},t.createGeometryDescriptor=function(e,t){return e&&e.compressedAttributes&&"draco"===e.compressedAttributes.encoding?g(e.compressedAttributes.attributes):e?y(e):b(t)},t.createGeometryDescriptorFromSchema=b,t.createGeometryDescriptorForDraco=g;var w={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function h(e){return t.valueType2TypedArrayClassMap.hasOwnProperty(e)}function m(e){return h(e)?t.valueType2TypedArrayClassMap[e].BYTES_PER_ELEMENT:0}t.readBinaryAttribute=function(e,t,r){if("lepcc-rgb"===e.encoding)return i.decodeRGB(t);if("lepcc-intensity"===e.encoding)return i.decodeIntensity(t);if(null!=e.encoding&&""!==e.encoding)throw new n("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(u.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(u.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var o=v(t,e,r);p(o.byteOffset+o.byteCount,t.byteLength,"attribute");var a=o.entries.attributeValues||o.entries.objectIds;if(a){if("String"===a.valueType){var l=o.entries.attributeByteCounts,c=s(t,l),y=d(t,a);return f(l.count,c,y)}return s(t,a)}throw new n("bad-attribute-storage-info","Bad attributeStorageInfo specification.")},t.valueType2TypedArrayClassMap={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},t.valueType2ArrayBufferReader={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}},t.isValueType=h,t.getBytesPerValue=m}).apply(null,n))||(e.exports=o)},fdzS:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("gKSc")],void 0===(o=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.quatf32=r}).apply(null,n))||(e.exports=o)},gKSc:function(e,t,r){var n,o;n=[r.dj.c(e.i),t],void 0===(o=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(){var e=new Float32Array(4);return e[3]=1,e},t.clone=function(e){var t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},t.fromValues=function(e,t,r,n){var o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o},t.createView=function(e,t){return new Float32Array(e,t,4)}}).apply(null,n))||(e.exports=o)},mkxQ:function(e,t){},qasq:function(e,t){},wCvz:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("LxLY"),r("qMld"),r("rusB"),r("EuvN"),r("fdzS"),r("0LE5"),r("vlC2"),r("Z4y+"),r("NNdt"),r("mmEe")],void 0===(o=(function(e,t,r,n,o,a,i,u,l,c,f,s){Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(){}return e.prototype.transform=function(e){var t=this._transform(e),a=[t.points.buffer,t.rgb.buffer];r.isSome(t.pointIdFilterMap)&&a.push(t.pointIdFilterMap.buffer);for(var i=0,u=t.attributes;i<u.length;i++){var l=u[i];"buffer"in l.values&&o.isArrayBuffer(l.values.buffer)&&l.values.buffer!==t.rgb.buffer&&a.push(l.values.buffer)}return n.resolve({result:t,transferList:a})},e.prototype._transform=function(e){var t=f.readGeometry(e.schema,e.geometryBuffer),n=t.length/3,o=null,a=[],i=f.getAttributeValues(e.primaryAttributeData,t,n);r.isSome(e.primaryAttributeData)&&i&&a.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:i});var u=f.getAttributeValues(e.modulationAttributeData,t,n);r.isSome(e.modulationAttributeData)&&u&&a.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:u});var l=f.evaluateRenderer(e.rendererInfo,i,u,n);if(e.filterInfo&&e.filterInfo.length>0&&r.isSome(e.filterAttributesData)){var s=e.filterAttributesData.map((function(e){var r=f.getAttributeValues(e,t,n),o={attributeInfo:e.attributeInfo,values:r};return a.push(o),o}));o=new Uint32Array(n),n=f.filterInPlace(t,l,o,e.filterInfo,s)}for(var d=0,v=e.userAttributesData;d<v.length;d++){var p=v[d],y=f.getAttributeValues(p,t,n);a.push({attributeInfo:p.attributeInfo,values:y})}3*n<l.length&&(l=new Uint8Array(l.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(t,n,e.elevationOffset);var b=this._transformCoordinates(t,n,e.obb,c.fromJSON(e.inSR),c.fromJSON(e.outSR));return{obb:e.obb,points:b,rgb:l,attributes:a,pointIdFilterMap:o}},e.prototype._transformCoordinates=function(e,t,r,n,o){if(!s.bufferToBuffer(e,n,0,e,o,0,t))throw Error("Can't reproject");var i=l.vec3f32.fromValues(r.center[0],r.center[1],r.center[2]),c=l.vec3f32.create(),f=l.vec3f32.create();a.quat.conjugate(v,r.quaternion);for(var d=new Float32Array(3*t),p=0;p<t;p++)c[0]=e[3*p]-i[0],c[1]=e[3*p+1]-i[1],c[2]=e[3*p+2]-i[2],u.vec3.transformQuat(f,c,v),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(f[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(f[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(f[2])),d[3*p]=c[0],d[3*p+1]=c[1],d[3*p+2]=c[2];return d},e.prototype._applyElevationOffsetInPlace=function(e,t,r){if(0!==r)for(var n=0;n<t;n++)e[3*n+2]+=r},e}(),v=i.quatf32.create();t.default=function(){return new d}}).apply(null,n))||(e.exports=o)}}]);