(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/rasterFormats/LercCodec":"Rc7o","esri/layers/support/LercWorker":"S+mV"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{Rc7o:function(e,t,i){var n,a;n=[i("xoE+")],void 0===(a=(function(e){var t={};t.defaultNoDataValue=e.clampFloat32(-1/0),t.decode=function(s,r){var o=(r=r||{}).encodedMaskData||null===r.encodedMaskData,f=l(s,r.inputOffset||0,o),u=null!=r.noDataValue?e.clampFloat32(r.noDataValue):t.defaultNoDataValue,m=i(f,r.pixelType||Float32Array,r.encodedMaskData,u,r.returnMask),c={width:f.width,height:f.height,pixelData:m.resultPixels,minValue:f.pixels.minValue,maxValue:f.pixels.maxValue,noDataValue:u};return m.resultMask&&(c.maskData=m.resultMask),r.returnEncodedMask&&f.mask&&(c.encodedMaskData=f.mask.bitset?f.mask.bitset:null),r.returnFileInfo&&(c.fileInfo=n(f),r.computeUsedBitDepths&&(c.fileInfo.bitDepths=a(f))),c};var i=function(e,t,i,n,a){var l,r,o=0,f=e.pixels.numBlocksX,u=e.pixels.numBlocksY,m=Math.floor(e.width/f),c=Math.floor(e.height/u),d=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&i&&(r=new Uint8Array(e.width*e.height));for(var g,h,p=new Float32Array(m*c),k=0;k<=u;k++){var x=k!==u?c:e.height%u;if(0!==x)for(var w=0;w<=f;w++){var y=w!==f?m:e.width%f;if(0!==y){var v,V,B,U,b=k*e.width*c+w*m,M=e.width-y,D=e.pixels.blocks[o];if(D.encoding<2?(0===D.encoding?v=D.rawData:(s(D.stuffedData,D.bitsPerPixel,D.numValidPixels,D.offset,d,p,e.pixels.maxValue),v=p),V=0):B=2===D.encoding?0:D.offset,i)for(h=0;h<x;h++){for(7&b&&(U=i[b>>3],U<<=7&b),g=0;g<y;g++)7&b||(U=i[b>>3]),128&U?(r&&(r[b]=1),l[b++]=D.encoding<2?v[V++]:B):(r&&(r[b]=0),l[b++]=n),U<<=1;b+=M}else if(D.encoding<2)for(h=0;h<x;h++){for(g=0;g<y;g++)l[b++]=v[V++];b+=M}else for(h=0;h<x;h++)if(l.fill)l.fill(B,b,b+y),b+=y+M;else{for(g=0;g<y;g++)l[b++]=B;b+=M}if(1===D.encoding&&V!==D.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:l,resultMask:r}},n=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:this.noDataValue}}},a=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},l=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var l=new DataView(e,t,24);if(n.fileVersion=l.getInt32(0,!0),n.imageType=l.getInt32(4,!0),n.height=l.getUint32(8,!0),n.width=l.getUint32(12,!0),n.maxZError=l.getFloat64(16,!0),t+=24,!i)if(l=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=l.getUint32(0,!0),n.mask.numBlocksX=l.getUint32(4,!0),n.mask.numBytes=l.getUint32(8,!0),n.mask.maxValue=l.getFloat32(12,!0),t+=16,n.mask.numBytes>0){var s=new Uint8Array(Math.ceil(n.width*n.height/8)),r=(l=new DataView(e,t,n.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)s[f++]=l.getUint8(o++);else{var u=l.getUint8(o++);for(r=-r;r--;)s[f++]=u}r=l.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=s,t+=n.mask.numBytes}else 0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)&&(s=new Uint8Array(Math.ceil(n.width*n.height/8)),n.mask.bitset=s);l=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=l.getUint32(0,!0),n.pixels.numBlocksX=l.getUint32(4,!0),n.pixels.numBytes=l.getUint32(8,!0),n.pixels.maxValue=l.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,c=n.pixels.numBlocksY,d=m+(n.width%m>0?1:0),g=c+(n.height%c>0?1:0);n.pixels.blocks=new Array(d*g);for(var h=1e9,p=0,k=0;k<g;k++)for(var x=0;x<d;x++){var w=0;l=new DataView(e,t,Math.min(10,e.byteLength-t));var y={};n.pixels.blocks[p++]=y;var v=l.getUint8(0);if(w++,y.encoding=63&v,y.encoding>3)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==v&&2!==v){if(y.offsetType=v>>=6,2===v)y.offset=l.getInt8(1),w++;else if(1===v)y.offset=l.getInt16(1,!0),w+=2;else{if(0!==v)throw"Invalid block offset type";y.offset=l.getFloat32(1,!0),w+=4}if(h=Math.min(y.offset,h),1===y.encoding)if(v=l.getUint8(w),w++,y.bitsPerPixel=63&v,y.numValidPixelsType=v>>=6,2===v)y.numValidPixels=l.getUint8(w),w++;else if(1===v)y.numValidPixels=l.getUint16(w,!0),w+=2;else{if(0!==v)throw"Invalid valid pixel count type";y.numValidPixels=l.getUint32(w,!0),w+=4}}var V;if(t+=w,3!=y.encoding)if(0===y.encoding){var B=(n.pixels.numBytes-1)/4;if(B!==Math.floor(B))throw"uncompressed block has invalid length";V=new ArrayBuffer(4*B),new Uint8Array(V).set(new Uint8Array(e,t,4*B));for(var U=new Float32Array(V),b=0;b<U.length;b++)h=Math.min(h,U[b]);y.rawData=U,t+=4*B}else if(1===y.encoding){var M=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),D=Math.ceil(M/4);V=new ArrayBuffer(4*D),new Uint8Array(V).set(new Uint8Array(e,t,M)),y.stuffedData=new Uint32Array(V),t+=M}}else t++,h=Math.min(h,0)}return n.pixels.minValue=h,n.eofOffset=t,n},s=function(e,t,i,n,a,l,s){var r,o,f,u=(1<<t)-1,m=0,c=0,d=Math.ceil((s-n)/a),g=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*g,r=0;r<i;r++){if(0===c&&(f=e[m++],c=32),c>=t)o=f>>>c-t&u,c-=t;else{var h=t-c;o=(f&u)<<h&u,o+=(f=e[m++])>>>(c=32-h)}l[r]=o<d?n+o*a:s}return l};return t}).apply(null,n))||(e.exports=a)},"S+mV":function(e,t,i){var n,a;n=[i.dj.c(e.i),t,i("qMld"),i("Rc7o"),i("2Kdy")],void 0===(a=(function(e,t,i,n){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.prototype._decode=function(e){var t=n.decode(e.buffer,e.options);return i.resolve({result:t,transferList:[t.pixelData.buffer]})},e}();t.default=function(){return new a}}).apply(null,n))||(e.exports=a)}}]);