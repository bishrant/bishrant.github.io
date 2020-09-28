(function(){var t={"arcgis-js-api/layers/support/rasterFunctions/pixelUtils":"SAwq","arcgis-js-api/layers/support/PixelBlock":"dXLH"},e=this||window,i=e.webpackJsonp=e.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(t):(i.absMidsWaiting=i.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{SAwq:function(t,e,i){var r,n;r=[i.dj.c(t.i),e,i("dXLH")],void 0===(n=(function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0};function n(t,e){var i,r,n=Math.min(Math.max(t,-100),100),a=Math.min(Math.max(e,-100),100),s=new Uint8Array(256);for(i=0;i<256;i++)n>0&&n<100?r=(200*i-25500+510*a)/(2*(100-n))+128:n<=0&&n>-100?r=(200*i-25500+510*a)*(100+n)/2e4+128:100===n?r=(r=200*i-25500+256*(100-n)+510*a)>0?255:0:-100===n&&(r=128),s[i]=r>255?255:r<0?0:r;return s}function a(t,e,i,r,n,a,s,o){return{xmin:n<=i*t?0:n<i*t+t?n-i*t:t,ymin:a<=r*e?0:a<r*e+e?a-r*e:e,xmax:n+s<=i*t?0:n+s<i*t+t?n+s-i*t:t,ymax:a+o<=r*e?0:a+o<r*e+e?a+o-r*e:e}}function s(t,e,n,s){var o=t.filter((function(t){return r(t)}))[0];if(null==o)return null;var l,h,p,u,f,c,x,m,d,y,g,w,v,k=s?s.width:e.width,A=s?s.height:e.height,M=o.width,b=o.height,U=e.width/M,B=e.height/b,C=n?n.x:0,T=n?n.y:0,_=o.pixelType,P=i.getPixelArrayConstructor(_),S=o.pixels.length,F=[];for(c=0;c<S;c++){for(h=new P(k*A),x=0;x<B;x++)for(m=0;m<U;m++)if(p=t[x*U+m])for(l=p.pixels[c],d=(g=a(M,b,m,x,C,T,k,A)).ymin;d<g.ymax;d++)for(u=(x*b+d-T)*k+(m*M-C),f=d*M,y=g.xmin;y<g.xmax;y++)h[u+y]=l[f+y];F.push(h)}if(t.some((function(t){return null==t||t.mask&&t.mask.length>0})))for(w=new Uint8Array(k*A),x=0;x<B;x++)for(m=0;m<U;m++)if(v=(p=t[x*U+m])?p.mask:null,g=a(M,b,m,x,C,T,k,A),v)for(d=g.ymin;d<g.ymax;d++)for(u=(x*b+d-T)*k+(m*M-C),f=d*M,y=g.xmin;y<g.xmax;y++)w[u+y]=v[f+y];else if(p)for(d=g.ymin;d<g.ymax;d++)for(u=(x*b+d-T)*k+(m*M-C),f=d*M,y=g.xmin;y<g.xmax;y++)w[u+y]=1;else for(d=g.ymin;d<g.ymax;d++)for(u=(x*b+d-T)*k+(m*M-C),f=d*M,y=g.xmin;y<g.xmax;y++)w[u+y]=0;var R=new i({width:k,height:A,pixels:F,pixelType:_,mask:w});return R.updateStatistics(),R}e.extractBands=function(t,e){if(!e||!r(t))return t;var n=t.pixels.length;return e&&e.some((function(t){return t>=n}))||1===n&&1===e.length&&0===e[0]?t:n!==e.length||e.some((function(t,e){return t!==e}))?new i({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((function(e){return t.pixels[e]})),statistics:t.statistics&&e.map((function(e){return t.statistics[e]}))}):t},e.createColormapLUT=function(t){if(t){var e=t.colormap;if(e&&0!==e.length){var i=e.sort((function(t,e){return t[0]-e[0]})),r=0;i[0][0]<0&&(r=i[0][0]);var n,a=Math.max(256,i[i.length-1][0]-r+1),s=new Uint8Array(4*a),o=[],l=0,h=0,p=5===i[0].length;if(a>65536)return i.forEach((function(t){o[t[0]-r]=p?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:o,offset:r,alphaSpecified:p};if(t.fillUnspecified)for(l=(n=i[h])[0]-r;l<a;l++)s[4*l]=n[1],s[4*l+1]=n[2],s[4*l+2]=n[3],s[4*l+3]=p?n[4]:255,l===n[0]-r&&(n=h===i.length-1?n:i[++h]);else for(l=0;l<i.length;l++)s[h=4*((n=i[l])[0]-r)]=n[1],s[h+1]=n[2],s[h+2]=n[3],s[h+3]=p?n[4]:255;return{indexedColormap:s,offset:r,alphaSpecified:p}}}},e.colorize=function(t,e){if(!r(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;var i=t.clone(),n=i.pixels,a=i.mask,s=i.width*i.height;if(1!==n.length)return t;var o,l=e.indexedColormap,h=e.indexed2DColormap,p=e.offset,u=e.alphaSpecified,f=l.length-1,c=0,x=n[0],m=new Uint8Array(x.length),d=new Uint8Array(x.length),y=new Uint8Array(x.length),g=0;if(l)if(a)for(c=0;c<s;c++)a[c]&&((g=4*(x[c]-p))<p||g>f?a[c]=0:(m[c]=l[g],d[c]=l[g+1],y[c]=l[g+2],a[c]=l[g+3]));else{for(a=new Uint8Array(s),c=0;c<s;c++)(g=4*(x[c]-p))<p||g>f?a[c]=0:(m[c]=l[g],d[c]=l[g+1],y[c]=l[g+2],a[c]=l[g+3]);i.mask=a}else if(a)for(c=0;c<s;c++)a[c]&&(m[c]=(o=h[x[c]])[0],d[c]=o[1],y[c]=o[2],a[c]=o[3]);else{for(a=new Uint8Array(s),c=0;c<s;c++)m[c]=(o=h[x[c]])[0],d[c]=o[1],y[c]=o[2],a[c]=o[3];i.mask=a}return i.pixels=[m,d,y],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=u,i},e.estimateStatisticsHistograms=function(t){if(!r(t))return null;t.statistics||t.updateStatistics();var e,i,n,a,s,o,l,h,p,u,f,c,x,m,d=t.pixels,y=t.mask,g=t.pixelType,w=t.statistics,v=t.width*t.height,k=d.length,A=[],M=[];for(a=0;a<k;a++){if(o=new Uint32Array(256),h=d[a],"u8"===g)if(e=-.5,i=255.5,y)for(s=0;s<v;s++)y[s]&&o[h[s]]++;else for(s=0;s<v;s++)o[h[s]]++;else{if(n=((i=w[a].maxValue)-(e=w[a].minValue))/256,l=new Uint32Array(257),y)for(s=0;s<v;s++)y[s]&&l[Math.floor((h[s]-e)/n)]++;else for(s=0;s<v;s++)l[Math.floor((h[s]-e)/n)]++;for(s=0;s<255;s++)o[s]=l[s];o[255]=l[255]+l[256]}for(A.push({min:e,max:i,size:256,counts:o}),p=0,u=0,x=0,s=0;s<256;s++)p+=o[s],u+=s*o[s];for(m=u/p,s=0;s<256;s++)x+=o[s]*Math.pow(s-m,2);f=(m+.5)*(n=(i-e)/256)+e,c=Math.sqrt(x/(p-1))*n,M.push({min:e,max:i,avg:f,stddev:c})}return{statistics:M,histograms:A}},e.createStretchLUT=function(t){var e=t.minCutOff,i=t.maxCutOff,r=t.gamma,a=t.pixelType,s=t.outMin||0,o=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(a))return null;var l,h,p=e.length,u=0;"s8"===a?u=-127:"s16"===a&&(u=-32767);var f=256;["u16","s16"].indexOf(a)>-1&&(f=65536);var c=[],x=[],m=o-s;for(l=0;l<p;l++)x[l]=i[l]-e[l],c[l]=m/(i[l]-e[l]);var d,y=r&&r.length>=p,g=[];if(y)for(l=0;l<p;l++)g[l]=r[l]>1?r[l]>2?6.5+Math.pow(r[l]-2,2.5):6.5+100*Math.pow(2-r[l],4):1;var w,v,k,A=[];if(y)for(l=0;l<p;l++){for(k=[],h=0;h<f;h++)d=((w=h+u)-e[l])/x[l],v=1,r[l]>1&&(v-=Math.pow(1/m,d*g[l])),k[h]=w<i[l]&&w>e[l]?Math.floor(v*m*Math.pow(d,1/r[l]))+s:w>=i[l]?o:s;A[l]=k}else for(l=0;l<p;l++){for(k=[],h=0;h<f;h++)k[h]=(w=h+u)<=e[l]?s:w>=i[l]?o:Math.floor((w-e[l])/x[l]*m)+s;A[l]=k}if(null!=t.contrastOffset){var M=n(t.contrastOffset,t.brightnessOffset);for(l=0;l<p;l++)for(k=A[l],h=0;h<f;h++)k[h]=M[k[h]]}return{lut:A,offset:u}},e.createContrastBrightnessLUT=n,e.stretch=function(t,e){if(!r(t))return null;var i,n,a,s,o,l=t.clone(),h=l.pixels,p=l.mask,u=e.minCutOff,f=e.maxCutOff,c=e.gamma,x=e.outMin||0,m=e.outMax||255,d=l.width*l.height,y=h.length,g=m-x,w=[],v=[];for(i=0;i<y;i++)v[i]=f[i]-u[i],w[i]=g/(f[i]-u[i]);var k=c&&c.length>=y,A=[];if(k)for(i=0;i<y;i++)A[i]=c[i]>1?c[i]>2?6.5+Math.pow(c[i]-2,2.5):6.5+100*Math.pow(2-c[i],4):1;if(k)if(null!=p){for(n=0;n<d;n++)if(p[n])for(i=0;i<y;i++)o=((a=h[i][n])-u[i])/v[i],s=1,c[i]>1&&(s-=Math.pow(1/g,o*A[i])),h[i][n]=a<f[i]&&a>u[i]?Math.floor(s*g*Math.pow(o,1/c[i]))+x:a>=f[i]?m:x}else for(n=0;n<d;n++)for(i=0;i<y;i++)o=((a=h[i][n])-u[i])/v[i],s=1,c[i]>1&&(s-=Math.pow(1/g,o*A[i])),h[i][n]=a<f[i]&&a>u[i]?Math.floor(s*g*Math.pow(o,1/c[i]))+x:a>=f[i]?m:x;else if(null!=p){for(n=0;n<d;n++)if(p[n])for(i=0;i<y;i++)h[i][n]=(a=h[i][n])<f[i]&&a>u[i]?Math.floor((a-u[i])/v[i]*g)+x:a>=f[i]?m:x}else for(n=0;n<d;n++)for(i=0;i<y;i++)h[i][n]=(a=h[i][n])<f[i]&&a>u[i]?Math.floor((a-u[i])/v[i]*g)+x:a>=f[i]?m:x;return l.pixelType="u8",l.updateStatistics(),l},e.lookupPixels=function(t,e){if(!r(t))return null;var n,a,s=t.pixels,o=t.mask,l=t.width*t.height,h=s.length,p=e.lut,u=e.offset;p&&1===p[0].length&&(p=s.map((function(){return p})));var f,c,x,m=[];if(u)if(null==o)for(n=0;n<h;n++){for(f=s[n],c=p[n],x=new Uint8Array(l),a=0;a<l;a++)x[a]=c[f[a]-u];m.push(x)}else for(n=0;n<h;n++){for(f=s[n],c=p[n],x=new Uint8Array(l),a=0;a<l;a++)o[a]&&(x[a]=c[f[a]-u]);m.push(x)}else if(null==o)for(n=0;n<h;n++){for(f=s[n],c=p[n],x=new Uint8Array(l),a=0;a<l;a++)x[a]=c[f[a]];m.push(x)}else for(n=0;n<h;n++){for(f=s[n],c=p[n],x=new Uint8Array(l),a=0;a<l;a++)o[a]&&(x[a]=c[f[a]]);m.push(x)}var d=new i({width:t.width,height:t.height,pixels:m,mask:o,pixelType:"u8"});return d.updateStatistics(),d},e.remapColor=function(t,e){if(!r(t))return null;var i,n,a,s,o,l,h=t.clone(),p=h.pixels,u=h.width*h.height,f=e.length,c=Math.floor(f/2),x=e[Math.floor(c)],m=p[0],d=!1,y=new Uint8Array(u),g=new Uint8Array(u),w=new Uint8Array(u),v=h.mask,k=4===e[0].mappedColor.length;for(v||((v=new Uint8Array(u)).fill(k?255:1),h.mask=v),o=0;o<u;o++)if(v[o]){for(i=m[o],d=!1,l=c,n=x,a=0,s=f-1;s-a>1;){if(i===n.value){d=!0;break}i>n.value?a=l:s=l,l=Math.floor((a+s)/2),n=e[Math.floor(l)]}d||(i===e[a].value?(n=e[a],d=!0):i===e[s].value?(n=e[s],d=!0):i<e[a].value?(d=!1,n=null):i>e[a].value&&(i<e[s].value?(n=e[a],d=!0):s===f-1?(d=!1,n=null):(n=e[s],d=!0))),d?(y[o]=n.mappedColor[0],g[o]=n.mappedColor[1],w[o]=n.mappedColor[2],v[o]=n.mappedColor[3]):y[o]=g[o]=w[o]=v[o]=0}return h.pixels=[y,g,w],h.mask=v,h.pixelType="u8",h.maskIsAlpha=k,h},e.getClipBounds=a,e.mosaicPixelData=function(t,e){if(!t||0===t.length)return null;var i=t.filter((function(t){return t.pixelBlock}))[0];if(!i)return null;var r=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,n=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,a=.01*Math.min(r,n),o=t.sort((function(t,e){return Math.abs(t.extent.ymax-e.extent.ymax)>a?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>a?t.extent.xmin-e.extent.xmin:0})),l=Math.min.apply(null,o.map((function(t){return t.extent.xmin}))),h=Math.min.apply(null,o.map((function(t){return t.extent.ymin}))),p=Math.max.apply(null,o.map((function(t){return t.extent.xmax}))),u=Math.max.apply(null,o.map((function(t){return t.extent.ymax}))),f={x:Math.round((e.xmin-l)/r),y:Math.round((u-e.ymax)/n)},c={width:Math.round((p-l)/r),height:Math.round((u-h)/n)},x={width:Math.round((e.xmax-e.xmin)/r),height:Math.round((e.ymax-e.ymin)/n)};return Math.round(c.width/i.pixelBlock.width)*Math.round(c.height/i.pixelBlock.height)!==o.length||f.x<0||f.y<0||c.width<x.width||c.height<x.height?null:{extent:e,pixelBlock:s(o.map((function(t){return t.pixelBlock})),c,f,x)}},e.mosaic=s,e.setValidBoundary=function(t,e,i){if(!r(t))return null;var n=t.width,a=t.height,s=e.x,o=e.y,l=i.width+s,h=i.height+o;if(s<0||o<0||l>n||h>a)return t;if(0===s&&0===o&&l===n&&h===a)return t;t.mask||(t.mask=new Uint8Array(n*a));for(var p=t.mask,u=0;u<a;u++)for(var f=u*n,c=0;c<n;c++)p[f+c]=u<o||u>=h||c<s||c>=l?0:1;return t.updateStatistics(),t},e.clip=function(t,e,n){if(!r(t))return null;var a=e.x,s=e.y,o=e.x+n.width,l=e.x+n.height;if(l===t.height&&o===t.width)return t;for(var h,p=t.pixels,u=t.mask,f=t.width,c=f*t.height,x=p.length,m=[],d=0;d<x;d++){for(var y=p[d],g=i.createEmptyBand(t.pixelType,c),w=0,v=s;v<=l;v++)for(var k=v*f,A=a;A<=o;A++)g[w++]=y[k+A];m.push(g)}if(u)for(h=new Uint8Array(n.width*n.height),w=0,v=s;v<=l;v++)for(k=v*f,A=a;A<=o;A++)h[w++]=u[k+A];var M=new i({width:n.width,height:n.height,pixels:m,mask:h});return M.updateStatistics(),M},e.approximateTransform=function(t,e,n,a){if(!r(t))return null;for(var s,o,l,h,p,u,f,c=t.pixels,x=t.mask,m=t.pixelType,d=t.width,y=t.height,g=i.getPixelArrayConstructor(m),w=c.length,v=e.width,k=e.height,A=a.cols,M=a.rows,b=Math.ceil(v/A),U=Math.ceil(k/M),B=!1,C=0;C<n.length;C+=3)-1===n[C]&&-1===n[C+1]&&-1===n[C+2]&&(B=!0);var T,_,P=new Float32Array(v*k),S=new Float32Array(v*k),F=0;for(C=0;C<U;C++)for(var R=0;R<b;R++){o=n[s=12*(C*b+R)],l=n[s+1],h=n[s+2],p=n[s+3],u=n[s+4],f=n[s+5];for(var G=0;G<M;G++){F=(C*M+G)*v+R*A,_=(G+.5)/M;for(var I=0;I<G;I++)T=(I+.5)/A,P[F+I]=Math.round((o*T+l*_+h)*d-.5),S[F+I]=Math.round((p*T+u*_+f)*y-.5)}for(o=n[s+=6],l=n[s+1],h=n[s+2],p=n[s+3],u=n[s+4],f=n[s+5],G=0;G<M;G++)for(F=(C*M+G)*v+R*A,_=(G+.5)/M,I=G;I<A;I++)T=(I+.5)/A,P[F+I]=Math.round((o*T+l*_+h)*d-.5),S[F+I]=Math.round((p*T+u*_+f)*y-.5)}for(var O,j=function(t,e){for(var i=0;i<k;i++){s=i*v;for(var r=0;r<v;r++)t[s]=B&&(P[s]<0||S[s]<0)?0:e[P[s]+S[s]*d],s++}},L=[],V=0;V<w;V++)j(O=new g(v*k),c[V]),L.push(O);var D=new i({width:v,height:k,pixelType:m,pixels:L});if(x)D.mask=new Uint8Array(v*k),j(D.mask,x);else if(B)for(D.mask=new Uint8Array(v*k),C=0;C<v*k;C++)D.mask[C]=P[C]<0||S[C]<0?0:1;return D.updateStatistics(),D}}).apply(null,r))||(t.exports=n)},dXLH:function(t,e,i){var r,n;r=[i.dj.c(t.i),e,i("zOht"),i("pcDC"),i("ma1f"),i("ycL1"),i("rg9i"),i("qsST"),i("LxLY"),i("Vx27")],void 0===(n=(function(t,e,i,r,n,a,s,o,l,h){var p=o.getLogger("esri.layers.support.PixelBlock");return function(t){function e(e){var i=t.call(this,e)||this;return i.width=null,i.height=null,i.pixelType="f32",i.validPixelCount=null,i.mask=null,i.maskIsAlpha=!1,i.pixels=null,i.statistics=null,i}var a;return i.__extends(e,t),a=e,e.createEmptyBand=function(t,e){return new(a.getPixelArrayConstructor(t))(e)},e.getPixelArrayConstructor=function(t){var e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"u32":e=Uint32Array;break;case"f32":e=Float32Array;break;case"f64":e=Float64Array;break;case"c64":case"c128":case"unknown":e=Float32Array;break;default:r.neverReached(t)}return e},e.prototype.castPixelType=function(t){if(!t)return"f32";var e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e},e.prototype.getPlaneCount=function(){return this.pixels&&this.pixels.length},e.prototype.addData=function(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new n("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})},e.prototype.getAsRGBA=function(){var t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)},e.prototype.getAsRGBAFloat=function(){var t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t},e.prototype.updateStatistics=function(){var t=this;this.statistics=this.pixels.map((function(e){return t._calculateBandStatistics(e,t.mask)}));var e=this.mask,i=0;if(e)for(var r=0;r<e.length;r++)e[r]&&i++;else i=this.width*this.height;this.validPixelCount=i},e.prototype.clamp=function(t){if(t&&"f64"!==t&&"f32"!==t){var e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}for(var i,r,n,s=e[0],o=e[1],l=this.pixels,h=this.width*this.height,p=l.length,u=[],f=0;f<p;f++){n=a.createEmptyBand(t,h),i=l[f];for(var c=0;c<h;c++)n[c]=(r=i[c])>o?o:r<s?s:r;u.push(n)}this.pixels=u,this.pixelType=t}},e.prototype.extractBands=function(t){var e=this;if(l.isNone(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;var i=this.pixels.length,r=t.some((function(t){return t>=e.pixels.length})),n=i===t.length&&!t.some((function(t,e){return t!==e}));return r||n?this:new a({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((function(t){return e.pixels[t]})),statistics:this.statistics&&t.map((function(t){return e.statistics[t]}))})},e.prototype.clone=function(){var t,e=new a({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});this.mask&&(e.mask=this.mask instanceof Uint8Array?new Uint8Array(this.mask):this.mask.slice(0));var i=a.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){e.pixels=[];var r=this.pixels[0].slice;for(t=0;t<this.pixels.length;t++)e.pixels[t]=r?this.pixels[t].slice(0,this.pixels[t].length):new i(this.pixels[t])}if(this.statistics)for(e.statistics=[],t=0;t<this.statistics.length;t++)e.statistics[t]=s.clone(this.statistics[t]);return e},e.prototype._fillFrom8Bit=function(t){var e=this.mask,i=this.maskIsAlpha,r=this.pixels;if(t&&r&&r.length){var n,a,s,o;n=a=s=r[0],r.length>=3?(a=r[1],s=r[2]):2===r.length&&(a=r[1]);var l=new Uint32Array(t),h=this.width*this.height;if(n.length===h)if(e&&e.length===h)if(i)for(o=0;o<h;o++)e[o]&&(l[o]=e[o]<<24|s[o]<<16|a[o]<<8|n[o]);else for(o=0;o<h;o++)e[o]&&(l[o]=255<<24|s[o]<<16|a[o]<<8|n[o]);else for(o=0;o<h;o++)l[o]=255<<24|s[o]<<16|a[o]<<8|n[o];else p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}else p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")},e.prototype._fillFromNon8Bit=function(t){var e=this.pixels,i=this.mask,r=this.statistics;if(t&&e&&e.length){var n=this.pixelType,a=1,s=0;if(r&&r.length>0)s=r.map((function(t){return t.minValue})).reduce((function(t,e){return Math.min(t,e)})),a=255/r.map((function(t){return t.maxValue-t.minValue})).reduce((function(t,e){return Math.max(t,e)}));else{var o=255;"s8"===n?(s=-128,o=127):"u16"===n?o=65535:"s16"===n?(s=-32768,o=32767):"u32"===n?o=4294967295:"s32"===n?(s=-2147483648,o=2147483647):"f32"===n?(s=-34e38,o=34e38):"f64"===n&&(s=-Number.MAX_VALUE,o=Number.MAX_VALUE),a=255/(o-s)}var l,h,u,f,c,x=new Uint32Array(t),m=this.width*this.height;if((l=h=u=e[0]).length!==m)return p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(h=e[1],e.length>=3&&(u=e[2]),i&&i.length===m)for(f=0;f<m;f++)i[f]&&(x[f]=255<<24|(u[f]-s)*a<<16|(h[f]-s)*a<<8|(l[f]-s)*a);else for(f=0;f<m;f++)x[f]=255<<24|(u[f]-s)*a<<16|(h[f]-s)*a<<8|(l[f]-s)*a;else if(i&&i.length===m)for(f=0;f<m;f++)c=(l[f]-s)*a,i[f]&&(x[f]=255<<24|c<<16|c<<8|c);else for(f=0;f<m;f++)x[f]=255<<24|(c=(l[f]-s)*a)<<16|c<<8|c}else p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")},e.prototype._fillFrom32Bit=function(t){var e,i,r,n,a=this.pixels,s=this.mask;if(!t||!a||!a.length)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");e=i=r=a[0],a.length>=3?(i=a[1],r=a[2]):2===a.length&&(i=a[1]);var o=this.width*this.height;if(e.length!==o)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");var l=0;if(s&&s.length===o)for(n=0;n<o;n++)t[l++]=e[n],t[l++]=i[n],t[l++]=r[n],t[l++]=1&s[n];else for(n=0;n<o;n++)t[l++]=e[n],t[l++]=i[n],t[l++]=r[n],t[l++]=1},e.prototype._calculateBandStatistics=function(t,e){var i,r=1/0,n=-1/0,a=t.length,s=0;if(e)for(i=0;i<a;i++)e[i]&&(r=(s=t[i])<r?s:r,n=s>n?s:n);else for(i=0;i<a;i++)r=(s=t[i])<r?s:r,n=s>n?s:n;return{minValue:r,maxValue:n}},i.__decorate([h.property({json:{write:!0}})],e.prototype,"width",void 0),i.__decorate([h.property({json:{write:!0}})],e.prototype,"height",void 0),i.__decorate([h.property({json:{write:!0}})],e.prototype,"pixelType",void 0),i.__decorate([h.cast("pixelType")],e.prototype,"castPixelType",null),i.__decorate([h.property({json:{write:!0}})],e.prototype,"validPixelCount",void 0),i.__decorate([h.property({json:{write:!0}})],e.prototype,"mask",void 0),i.__decorate([h.property({json:{write:!0}})],e.prototype,"maskIsAlpha",void 0),i.__decorate([h.property({json:{write:!0}})],e.prototype,"pixels",void 0),i.__decorate([h.property({json:{write:!0}})],e.prototype,"statistics",void 0),a=i.__decorate([h.subclass("esri.layers.support.PixelBlock")],e)}(a.JSONSupport)}).apply(null,r))||(t.exports=n)}}]);