(function(){var e={"esri/layers/support/rasterFormats/LercCodec":"Rc7o","esri/layers/support/LercWorker":"S+mV"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{Rc7o:function(e,t,i){var n,a;n=[i("xoE+")],void 0===(a=(function(e){var t={};t.defaultNoDataValue=e.clampFloat32(-1/0),t.decode=function(l,r){var o=(r=r||{}).encodedMaskData||null===r.encodedMaskData,f=s(l,r.inputOffset||0,o),u=null!=r.noDataValue?e.clampFloat32(r.noDataValue):t.defaultNoDataValue,m=i(f,r.pixelType||Float32Array,r.encodedMaskData,u,r.returnMask),c={width:f.width,height:f.height,pixelData:m.resultPixels,minValue:f.pixels.minValue,maxValue:f.pixels.maxValue,noDataValue:u};return m.resultMask&&(c.maskData=m.resultMask),r.returnEncodedMask&&f.mask&&(c.encodedMaskData=f.mask.bitset?f.mask.bitset:null),r.returnFileInfo&&(c.fileInfo=n(f),r.computeUsedBitDepths&&(c.fileInfo.bitDepths=a(f))),c};var i=function(e,t,i,n,a){var s,r,o=0,f=e.pixels.numBlocksX,u=e.pixels.numBlocksY,m=Math.floor(e.width/f),c=Math.floor(e.height/u),d=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null),s=new t(e.width*e.height),a&&i&&(r=new Uint8Array(e.width*e.height));for(var g,h,p=new Float32Array(m*c),k=0;k<=u;k++){var x=k!==u?c:e.height%u;if(0!==x)for(var w=0;w<=f;w++){var y=w!==f?m:e.width%f;if(0!==y){var v,V,B,b,M=k*e.width*c+w*m,U=e.width-y,D=e.pixels.blocks[o];if(D.encoding<2?(0===D.encoding?v=D.rawData:(l(D.stuffedData,D.bitsPerPixel,D.numValidPixels,D.offset,d,p,e.pixels.maxValue),v=p),V=0):B=2===D.encoding?0:D.offset,i)for(h=0;h<x;h++){for(7&M&&(b=i[M>>3],b<<=7&M),g=0;g<y;g++)7&M||(b=i[M>>3]),128&b?(r&&(r[M]=1),s[M++]=D.encoding<2?v[V++]:B):(r&&(r[M]=0),s[M++]=n),b<<=1;M+=U}else if(D.encoding<2)for(h=0;h<x;h++){for(g=0;g<y;g++)s[M++]=v[V++];M+=U}else for(h=0;h<x;h++)if(s.fill)s.fill(B,M,M+y),M+=y+U;else{for(g=0;g<y;g++)s[M++]=B;M+=U}if(1===D.encoding&&V!==D.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:s,resultMask:r}},n=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:this.noDataValue}}},a=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},s=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var s=new DataView(e,t,24);if(n.fileVersion=s.getInt32(0,!0),n.imageType=s.getInt32(4,!0),n.height=s.getUint32(8,!0),n.width=s.getUint32(12,!0),n.maxZError=s.getFloat64(16,!0),t+=24,!i)if(s=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=s.getUint32(0,!0),n.mask.numBlocksX=s.getUint32(4,!0),n.mask.numBytes=s.getUint32(8,!0),n.mask.maxValue=s.getFloat32(12,!0),t+=16,n.mask.numBytes>0){var l=new Uint8Array(Math.ceil(n.width*n.height/8)),r=(s=new DataView(e,t,n.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)l[f++]=s.getUint8(o++);else{var u=s.getUint8(o++);for(r=-r;r--;)l[f++]=u}r=s.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<l.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=l,t+=n.mask.numBytes}else 0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)&&(l=new Uint8Array(Math.ceil(n.width*n.height/8)),n.mask.bitset=l);s=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=s.getUint32(0,!0),n.pixels.numBlocksX=s.getUint32(4,!0),n.pixels.numBytes=s.getUint32(8,!0),n.pixels.maxValue=s.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,c=n.pixels.numBlocksY,d=m+(n.width%m>0?1:0),g=c+(n.height%c>0?1:0);n.pixels.blocks=new Array(d*g);for(var h=1e9,p=0,k=0;k<g;k++)for(var x=0;x<d;x++){var w=0;s=new DataView(e,t,Math.min(10,e.byteLength-t));var y={};n.pixels.blocks[p++]=y;var v=s.getUint8(0);if(w++,y.encoding=63&v,y.encoding>3)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==v&&2!==v){if(y.offsetType=v>>=6,2===v)y.offset=s.getInt8(1),w++;else if(1===v)y.offset=s.getInt16(1,!0),w+=2;else{if(0!==v)throw"Invalid block offset type";y.offset=s.getFloat32(1,!0),w+=4}if(h=Math.min(y.offset,h),1===y.encoding)if(v=s.getUint8(w),w++,y.bitsPerPixel=63&v,y.numValidPixelsType=v>>=6,2===v)y.numValidPixels=s.getUint8(w),w++;else if(1===v)y.numValidPixels=s.getUint16(w,!0),w+=2;else{if(0!==v)throw"Invalid valid pixel count type";y.numValidPixels=s.getUint32(w,!0),w+=4}}var V;if(t+=w,3!=y.encoding)if(0===y.encoding){var B=(n.pixels.numBytes-1)/4;if(B!==Math.floor(B))throw"uncompressed block has invalid length";V=new ArrayBuffer(4*B),new Uint8Array(V).set(new Uint8Array(e,t,4*B));for(var b=new Float32Array(V),M=0;M<b.length;M++)h=Math.min(h,b[M]);y.rawData=b,t+=4*B}else if(1===y.encoding){var U=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),D=Math.ceil(U/4);V=new ArrayBuffer(4*D),new Uint8Array(V).set(new Uint8Array(e,t,U)),y.stuffedData=new Uint32Array(V),t+=U}}else t++,h=Math.min(h,0)}return n.pixels.minValue=h,n.eofOffset=t,n},l=function(e,t,i,n,a,s,l){var r,o,f,u=(1<<t)-1,m=0,c=0,d=Math.ceil((l-n)/a),g=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*g,r=0;r<i;r++){if(0===c&&(f=e[m++],c=32),c>=t)o=f>>>c-t&u,c-=t;else{var h=t-c;o=(f&u)<<h&u,o+=(f=e[m++])>>>(c=32-h)}s[r]=o<d?n+o*a:l}return s};return t}).apply(null,n))||(e.exports=a)},"S+mV":function(e,t,i){var n,a;n=[i.dj.c(e.i),t,i("qMld"),i("Rc7o"),i("2Kdy")],void 0===(a=(function(e,t,i,n){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.prototype._decode=function(e){var t=n.decode(e.buffer,e.options);return i.resolve({result:t,transferList:[t.pixelData.buffer]})},e}();t.default=function(){return new a}}).apply(null,n))||(e.exports=a)}}]);