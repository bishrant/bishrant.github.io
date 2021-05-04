!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach(function(e){r(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,f=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){f=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(f)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{rr5J:function(e,r,a){"use strict";a.r(r);var i=a("ohva"),u=a("srIe"),f=a("WZb1"),l=a("5DEt"),c=a("gYg2"),s=a("BPBZ"),d=a("R/jG");function b(){var e=new Float32Array(4);return e[3]=1,e}Object.freeze({__proto__:null,create:b,clone:function(e){var t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,r,n){var o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o},createView:function(e,t){return new Float32Array(e,t,4)}});var v=a("Tg0p"),y=a("V4u7"),p=a("ofcG"),h=a("zlDU");function g(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+0,10)),version:t.getUint16(r+10,!0),checksum:t.getUint32(r+12,!0)}}function w(e,t,r){var n=[];t=m(e,t,n);for(var o=[],a=0;a<n.length;a++){o.length=0,t=m(e,t,o);for(var i=0;i<o.length;i++)r.push(o[i]+n[a])}return t}function m(e,t,r){var n=new DataView(e,t),o=n.getUint8(0),a=31&o,i=!!(32&o),u=(192&o)>>6,f=0;if(0===u)f=n.getUint32(1,!0),t+=5;else if(1===u)f=n.getUint16(1,!0),t+=3;else{if(2!==u)throw new h.a("lepcc-decode-error","Bad count type");f=n.getUint8(1),t+=2}if(i)throw new h.a("lepcc-decode-error","LUT not implemented");for(var l=Math.ceil(f*a/8),c=new Uint8Array(e,t,l),s=0,d=0,b=0,v=-1>>>32-a,y=0;y<f;y++){for(;d<a;)s|=c[b]<<d,d+=8,b+=1;r[y]=s&v,s>>>=a,(d-=a)+a>32&&(s|=c[b-1]>>8-d)}return t+b}var O=a("f/qv"),U=a("6S2I").a.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function C(e,t,r){for(var n="",o=0;o<r;){var a=e[t+o];if(a<128)n+=String.fromCharCode(a),o++;else if(a>=192&&a<224){if(o+1>=r)throw new h.a("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");n+=String.fromCharCode((31&a)<<6|63&e[t+o+1]),o+=2}else if(a>=224&&a<240){if(o+2>=r)throw new h.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");n+=String.fromCharCode((15&a)<<12|(63&e[t+o+1])<<6|63&e[t+o+2]),o+=3}else{if(!(a>=240&&a<248))throw new h.a("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(o+3>=r)throw new h.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var i=(7&a)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];n+=i>=65536?String.fromCharCode(55296+(i-65536>>10),56320+(1023&i)):String.fromCharCode(i),o+=4}}return n}function A(e,t){for(var r={byteOffset:0,byteCount:0,fields:Object.create(null)},n=0,o=0;o<t.length;o++){var a=t[o],i=a.valueType||a.type;r.fields[a.property]=(0,F[i])(e,n),n+=S[i].BYTES_PER_ELEMENT}return r.byteCount=n,r}function I(e,t){return new(0,S[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function M(e,t,r){if(t!==e&&U.error("Invalid ".concat(r," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new h.a("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}var j={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"},S={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},F={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}};function B(e){return S.hasOwnProperty(e)}function k(e){return B(e)?S[e].BYTES_PER_ELEMENT:0}function T(e,t,r){return Object(u.k)(e)&&e.attributeInfo.useElevation?function(e,t){for(var r=new Float64Array(t),n=0;n<t;n++)r[n]=e[3*n+2];return r}(t,r):Object(u.k)(e)?function(e,t,r){if("lepcc-rgb"===e.encoding)return function(e){var t=new DataView(e,0),r=0,n=g(e,t,r),o=n.identifier,a=n.version;if(r+=16,"ClusterRGB"!==o)throw new h.a("lepcc-decode-error","Bad identifier");if(a>1)throw new h.a("lepcc-decode-error","Unknown version");var i,u,f={sizeLo:(i=t).getUint32((u=r)+0,!0),sizeHi:i.getUint32(u+4,!0),count:i.getUint32(u+8,!0),colorMapCount:i.getUint16(u+12,!0),lookupMethod:i.getUint8(u+14),compressionMethod:i.getUint8(u+15)};if(r+=16,f.sizeHi*Math.pow(2,32)+f.sizeLo!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");if((2===f.lookupMethod||1===f.lookupMethod)&&0===f.compressionMethod){if(3*f.colorMapCount+f.count+r!==e.byteLength||f.colorMapCount>256)throw new h.a("lepcc-decode-error","Bad count");for(var l=new Uint8Array(e,r,3*f.colorMapCount),c=new Uint8Array(e,r+3*f.colorMapCount,f.count),s=new Uint8Array(3*f.count),d=0;d<f.count;d++){var b=c[d];s[3*d]=l[3*b],s[3*d+1]=l[3*b+1],s[3*d+2]=l[3*b+2]}return s}if(0===f.lookupMethod&&0===f.compressionMethod){if(3*f.count+r!==e.byteLength||0!==f.colorMapCount)throw new h.a("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(f.lookupMethod<=2&&1===f.compressionMethod){if(r+3!==e.byteLength||1!==f.colorMapCount)throw new h.a("lepcc-decode-error","Bad count");for(var v=t.getUint8(r),y=t.getUint8(r+1),p=t.getUint8(r+2),w=new Uint8Array(3*f.count),m=0;m<f.count;m++)w[3*m]=v,w[3*m+1]=y,w[3*m+2]=p;return w}throw new h.a("lepcc-decode-error","Bad method "+f.lookupMethod+","+f.compressionMethod)}(t);if("lepcc-intensity"===e.encoding)return function(e){var t=new DataView(e,0),r=0,n=g(e,t,r),o=n.identifier,a=n.version;if(r+=16,"Intensity "!==o)throw new h.a("lepcc-decode-error","Bad identifier");if(a>1)throw new h.a("lepcc-decode-error","Unknown version");var i,u,f={sizeLo:(i=t).getUint32((u=r)+0,!0),sizeHi:i.getUint32(u+4,!0),count:i.getUint32(u+8,!0),scaleFactor:i.getUint16(u+12,!0),bitsPerPoint:i.getUint8(u+14),reserved:i.getUint8(u+15)};if(r+=16,f.sizeHi*Math.pow(2,32)+f.sizeLo!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");var l=new Uint16Array(f.count);if(8===f.bitsPerPoint){if(f.count+r!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");for(var c=new Uint8Array(e,r,f.count),s=0;s<f.count;s++)l[s]=c[s]*f.scaleFactor}else if(16===f.bitsPerPoint){if(2*f.count+r!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");for(var d=new Uint16Array(e,r,f.count),b=0;b<f.count;b++)l[b]=d[b]*f.scaleFactor}else{var v=[];if(m(e,r,v)!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");for(var y=0;y<f.count;y++)l[y]=v[y]*f.scaleFactor}return l}(t);if(null!=e.encoding&&""!==e.encoding)throw new h.a("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(U.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(U.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var n=function(e,t,r){for(var n=null!=t.header?A(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)},a=n.byteCount,i=0;i<t.ordering.length;i++){var u=t.ordering[i],f=Object(O.a)(t[u]);if(f.count=n.fields.count,"String"===f.valueType){if(f.byteOffset=a,f.byteCount=n.fields[u+"ByteCount"],"UTF-8"!==f.encoding)throw new h.a("unsupported-encoding","Unsupported String encoding.",{encoding:f.encoding})}else{if(!B(f.valueType))throw new h.a("unsupported-value-type","Unsupported binary valueType",{valueType:f.valueType});var l=k(f.valueType);a+=a%l!=0?l-a%l:0,f.byteOffset=a,f.byteCount=l*f.valuesPerElement*f.count}a+=f.byteCount,o.entries[u]=f}return o.byteCount=a-o.byteOffset,o}(t,e,r);M(n.byteOffset+n.byteCount,t.byteLength,"attribute");var o=n.entries.attributeValues||n.entries.objectIds;if(o){if("String"===o.valueType){var a=n.entries.attributeByteCounts,i=I(t,a),u=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return function(e,t,r){var n,o,a=[],i=0;for(o=0;o<e;o+=1){if((n=t[o])>0){if(a.push(C(r,i,n-1)),0!==r[i+n-1])throw new h.a("string-array-error","Invalid string array: missing null termination.")}else a.push(null);i+=n}return a}(a.count,i,u)}return I(t,o)}throw new h.a("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}(e.attributeInfo.storageInfo,e.buffer,r):null}function D(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}function z(e){var t,r=0,n=o(e||[]);try{for(n.s();!(t=n.n()).done;){r|=1<<t.value}}catch(a){n.e(a)}finally{n.f()}return r}var P=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,a,b;return r=e,(a=[{key:"transform",value:function(e){var t=this._transform(e),r=[t.points.buffer,t.rgb.buffer];Object(u.k)(t.pointIdFilterMap)&&r.push(t.pointIdFilterMap.buffer);var n,a=o(t.attributes);try{for(a.s();!(n=a.n()).done;){var f=n.value;"buffer"in f.values&&Object(i.c)(f.values.buffer)&&f.values.buffer!==t.rgb.buffer&&r.push(f.values.buffer)}}catch(l){a.e(l)}finally{a.f()}return Promise.resolve({result:t,transferList:r})}},{key:"_transform",value:function(e){var r=function(e,r){if(null==e.encoding||""===e.encoding){var n=function(e,r){var n,a=A(e,r&&r.header),i=a.byteCount,u={isDraco:!1,header:a,byteOffset:a.byteCount,byteCount:0,vertexAttributes:{}},f=a.fields,l=null!=f.vertexCount?f.vertexCount:f.count,c=o(r.ordering);try{for(c.s();!(n=c.n()).done;){var s=n.value;if(r.vertexAttributes[s]){var d=t(t({},r.vertexAttributes[s]),{},{byteOffset:i,count:l});u.vertexAttributes[j[s]?j[s]:"_"+s]=d,i+=k(d.valueType)*d.valuesPerElement*l}}}catch(C){c.e(C)}finally{c.f()}var b=f.faceCount;if(r.faces&&b){u.faces={};var v,y=o(r.ordering);try{for(y.s();!(v=y.n()).done;){var p=v.value;if(r.faces[p]){var h=t(t({},r.faces[p]),{},{byteOffset:i,count:b});u.faces[p]=h,i+=k(h.valueType)*h.valuesPerElement*b}}}catch(C){y.e(C)}finally{y.f()}}var g=f.featureCount;if(r.featureAttributes&&r.featureAttributeOrder&&g){u.featureAttributes={};var w,m=o(r.featureAttributeOrder);try{for(m.s();!(w=m.n()).done;){var O=w.value;if(r.featureAttributes[O]){var U=t(t({},r.featureAttributes[O]),{},{byteOffset:i,count:g});u.featureAttributes[O]=U,i+=("UInt64"===U.valueType?8:k(U.valueType))*U.valuesPerElement*g}}}catch(C){m.e(C)}finally{m.f()}}return M(i,e.byteLength,"geometry"),u.byteCount=i-u.byteOffset,u}(r,e);if(Object(u.j)(n.vertexAttributes.position))return;for(var a=I(r,n.vertexAttributes.position),i=n.header.fields,f=[i.offsetX,i.offsetY,i.offsetZ],l=[i.scaleX,i.scaleY,i.scaleZ],c=a.length/3,s=new Float64Array(3*c),d=0;d<c;d++)s[3*d]=a[3*d]*l[0]+f[0],s[3*d+1]=a[3*d+1]*l[1]+f[1],s[3*d+2]=a[3*d+2]*l[2]+f[2];return s}if("lepcc-xyz"===e.encoding)return function(e){var t=new DataView(e,0),r=0,n=g(e,t,r),o=n.identifier,a=n.version;if(r+=16,"LEPCC     "!==o)throw new h.a("lepcc-decode-error","Bad identifier");if(a>1)throw new h.a("lepcc-decode-error","Unknown version");var i,u,f={sizeLo:(i=t).getUint32((u=r)+0,!0),sizeHi:i.getUint32(u+4,!0),minX:i.getFloat64(u+8,!0),minY:i.getFloat64(u+16,!0),minZ:i.getFloat64(u+24,!0),maxX:i.getFloat64(u+32,!0),maxY:i.getFloat64(u+40,!0),maxZ:i.getFloat64(u+48,!0),errorX:i.getFloat64(u+56,!0),errorY:i.getFloat64(u+64,!0),errorZ:i.getFloat64(u+72,!0),count:i.getUint32(u+80,!0),reserved:i.getUint32(u+84,!0)};if(r+=88,f.sizeHi*Math.pow(2,32)+f.sizeLo!==e.byteLength)throw new h.a("lepcc-decode-error","Bad size");var l=new Float64Array(3*f.count),c=[],s=[],d=[],b=[];if(r=w(e,r,c),r=w(e,r,s),r=w(e,r,d),(r=w(e,r,b))!==e.byteLength)throw new h.a("lepcc-decode-error","Bad length");for(var v=0,y=0,p=0;p<c.length;p++){y+=c[p];for(var m=0,O=0;O<s[p];O++){m+=d[v];var U=b[v];l[3*v]=Math.min(f.maxX,f.minX+2*f.errorX*m),l[3*v+1]=Math.min(f.maxY,f.minY+2*f.errorY*y),l[3*v+2]=Math.min(f.maxZ,f.minZ+2*f.errorZ*U),v++}}return{errorX:f.errorX,errorY:f.errorY,errorZ:f.errorZ,result:l}}(r).result}(e.schema,e.geometryBuffer),n=r.length/3,a=null,i=[],l=T(e.primaryAttributeData,r,n);Object(u.k)(e.primaryAttributeData)&&l&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:l});var c=T(e.modulationAttributeData,r,n);Object(u.k)(e.modulationAttributeData)&&c&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:c});var s=function(e,t,r,n){var o=e.rendererJSON,a=e.isRGBRenderer,i=null,u=null;if(t&&a)i=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){var f=(u=p.a.fromJSON(o)).colorUniqueValueInfos;i=new Uint8Array(3*n);for(var l=D(u.fieldTransformType),c=0;c<n;c++)for(var s=(l?l(t[c]):t[c])+"",d=0;d<f.length;d++)if(f[d].values.indexOf(s)>=0){i[3*c]=f[d].color.r,i[3*c+1]=f[d].color.g,i[3*c+2]=f[d].color.b;break}}else if(t&&"pointCloudStretchRenderer"===o.type){var b=(u=y.a.fromJSON(o)).stops;i=new Uint8Array(3*n);for(var h=D(u.fieldTransformType),g=0;g<n;g++){var w=h?h(t[g]):t[g],m=b.length-1;if(w<b[0].value)i[3*g]=b[0].color.r,i[3*g+1]=b[0].color.g,i[3*g+2]=b[0].color.b;else if(w>=b[m].value)i[3*g]=b[m].color.r,i[3*g+1]=b[m].color.g,i[3*g+2]=b[m].color.b;else for(var O=1;O<b.length;O++)if(w<b[O].value){var U=(w-b[O-1].value)/(b[O].value-b[O-1].value);i[3*g]=b[O].color.r*U+b[O-1].color.r*(1-U),i[3*g+1]=b[O].color.g*U+b[O-1].color.g*(1-U),i[3*g+2]=b[O].color.b*U+b[O-1].color.b*(1-U);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){var C=(u=v.a.fromJSON(o)).colorClassBreakInfos;i=new Uint8Array(3*n);for(var A=D(u.fieldTransformType),I=0;I<n;I++)for(var M=A?A(t[I]):t[I],j=0;j<C.length;j++)if(M>=C[j].minValue&&M<=C[j].maxValue){i[3*I]=C[j].color.r,i[3*I+1]=C[j].color.g,i[3*I+2]=C[j].color.b;break}}else{i=new Uint8Array(3*n);for(var S=0;S<i.length;S++)i[S]=255}if(r&&u&&u.colorModulation)for(var F=u.colorModulation.minValue,B=u.colorModulation.maxValue,k=0;k<n;k++){var T=r[k],z=T>=B?1:T<=F?.3:.3+.7*(T-F)/(B-F);i[3*k]=z*i[3*k],i[3*k+1]=z*i[3*k+1],i[3*k+2]=z*i[3*k+2]}return i}(e.rendererInfo,l,c,n);if(e.filterInfo&&e.filterInfo.length>0&&Object(u.k)(e.filterAttributesData)){var d=e.filterAttributesData.map(function(e){var t=T(e,r,n),o={attributeInfo:e.attributeInfo,values:t};return i.push(o),o});a=new Uint32Array(n),n=function(e,t,r,n,a){for(var i=e.length/3,u=0,f=0;f<i;f++){for(var l=!0,c=0;c<n.length&&l;c++){var s=n[c].filterJSON,d=a[c].values[f];switch(s.type){case"pointCloudValueFilter":var b="exclude"===s.mode;-1!==s.values.indexOf(d)===b&&(l=!1);break;case"pointCloudBitfieldFilter":var v=z(s.requiredSetBits),y=z(s.requiredClearBits);(d&v)===v&&0==(d&y)||(l=!1);break;case"pointCloudReturnFilter":var p,h=15&d,g=d>>>4&15,w=g>1,m=1===h,O=h===g,U=!1,C=o(s.includedReturns);try{for(C.s();!(p=C.n()).done;){var A=p.value;if("last"===A&&O||"firstOfMany"===A&&m&&w||"lastOfMany"===A&&O&&w||"single"===A&&!w){U=!0;break}}}catch(I){C.e(I)}finally{C.f()}U||(l=!1)}}l&&(r[u]=f,e[3*u]=e[3*f],e[3*u+1]=e[3*f+1],e[3*u+2]=e[3*f+2],t[3*u]=t[3*f],t[3*u+1]=t[3*f+1],t[3*u+2]=t[3*f+2],u++)}return u}(r,s,a,e.filterInfo,d)}var b,m=o(e.userAttributesData);try{for(m.s();!(b=m.n()).done;){var O=b.value,U=T(O,r,n);i.push({attributeInfo:O.attributeInfo,values:U})}}catch(S){m.e(S)}finally{m.f()}3*n<s.length&&(s=new Uint8Array(s.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(r,n,e.elevationOffset);var C=this._transformCoordinates(r,n,e.obb,f.a.fromJSON(e.inSR),f.a.fromJSON(e.outSR));return{obb:e.obb,points:C,rgb:s,attributes:i,pointIdFilterMap:a}}},{key:"_transformCoordinates",value:function(e,t,r,n,o){if(!Object(c.k)(e,n,0,e,o,0,t))throw Error("Can't reproject");var a=Object(d.c)(r.center[0],r.center[1],r.center[2]),i=Object(d.b)(),u=Object(d.b)();Object(s.a)(x,r.quaternion);for(var f=new Float32Array(3*t),b=0;b<t;b++)i[0]=e[3*b]-a[0],i[1]=e[3*b+1]-a[1],i[2]=e[3*b+2]-a[2],Object(l.t)(u,i,x),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(u[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(u[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(u[2])),f[3*b]=i[0],f[3*b+1]=i[1],f[3*b+2]=i[2];return f}},{key:"_applyElevationOffsetInPlace",value:function(e,t,r){if(0!==r)for(var n=0;n<t;n++)e[3*n+2]+=r}}])&&n(r.prototype,a),b&&n(r,b),e}(),x=b();r.default=function(){return new P}}}])}();