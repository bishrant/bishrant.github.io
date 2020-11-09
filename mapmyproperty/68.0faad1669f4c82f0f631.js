(function(){var t={"esri/views/3d/support/polygonUtils":"DTDA","arcgis-js-api/core/libs/gl-matrix-2/mat4":"FXVB","esri/core/libs/gl-matrix-2/mat4":"FXVB","esri/core/libs/gl-matrix-2/math/mat4":"Jl7l","esri/layers/support/SceneModifications":"Kkcm","esri/layers/support/SceneModification":"sLdR","esri/layers/IntegratedMeshLayer":"wehw"},e=this||window,r=e.webpackJsonp=e.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(t):(r.absMidsWaiting=r.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{DTDA:function(t,e,r){var o,a;o=[r.dj.c(t.i),e,r("mmEe")],void 0===(a=(function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.polygonToPolygon=void 0,e.polygonToPolygon=function(t,e,o,a){void 0===o&&(o=e.spatialReference),void 0===a&&(a=0);var n=[];return!!r.pathsToPaths(t.rings,t.hasZ,t.hasM,t.spatialReference,n,o,a)&&(e.rings=n,e.spatialReference=o,e.hasZ=t.hasZ,e.hasM=t.hasM,!0)}}).apply(null,o))||(t.exports=a)},FXVB:function(t,e,r){var o,a;o=[r.dj.c(t.i),e,r("Jl7l")],void 0===(a=(function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mat4=void 0,e.mat4=r}).apply(null,o))||(t.exports=a)},Jl7l:function(t,e,r){var o,a;o=[r.dj.c(t.i),e,r("jaBu"),r("qysZ")],void 0===(a=(function(t,e,r,o){"use strict";function a(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function n(t,e,r){var o=e[0],a=e[1],n=e[2],i=e[3],s=e[4],u=e[5],p=e[6],c=e[7],l=e[8],h=e[9],d=e[10],f=e[11],y=e[12],v=e[13],M=e[14],m=e[15],g=r[0],_=r[1],b=r[2],S=r[3];return t[0]=g*o+_*s+b*l+S*y,t[1]=g*a+_*u+b*h+S*v,t[2]=g*n+_*p+b*d+S*M,t[3]=g*i+_*c+b*f+S*m,t[4]=(g=r[4])*o+(_=r[5])*s+(b=r[6])*l+(S=r[7])*y,t[5]=g*a+_*u+b*h+S*v,t[6]=g*n+_*p+b*d+S*M,t[7]=g*i+_*c+b*f+S*m,t[8]=(g=r[8])*o+(_=r[9])*s+(b=r[10])*l+(S=r[11])*y,t[9]=g*a+_*u+b*h+S*v,t[10]=g*n+_*p+b*d+S*M,t[11]=g*i+_*c+b*f+S*m,t[12]=(g=r[12])*o+(_=r[13])*s+(b=r[14])*l+(S=r[15])*y,t[13]=g*a+_*u+b*h+S*v,t[14]=g*n+_*p+b*d+S*M,t[15]=g*i+_*c+b*f+S*m,t}function i(t,e,r){var o=e[0],a=e[1],n=e[2],i=e[3],s=o+o,u=a+a,p=n+n,c=o*s,l=o*u,h=o*p,d=a*u,f=a*p,y=n*p,v=i*s,M=i*u,m=i*p;return t[0]=1-(d+y),t[1]=l+m,t[2]=h-M,t[3]=0,t[4]=l-m,t[5]=1-(c+y),t[6]=f+v,t[7]=0,t[8]=h+M,t[9]=f-v,t[10]=1-(c+d),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=e.equals=e.exactEquals=e.multiplyScalarAndAdd=e.multiplyScalar=e.subtract=e.add=e.frob=e.str=e.targetTo=e.lookAt=e.ortho=e.perspectiveFromFieldOfView=e.perspective=e.frustum=e.fromQuat=e.fromRotationTranslationScaleOrigin=e.fromRotationTranslationScale=e.getRotation=e.getScaling=e.getTranslation=e.fromQuat2=e.fromRotationTranslation=e.fromZRotation=e.fromYRotation=e.fromXRotation=e.fromRotation=e.fromScaling=e.fromTranslation=e.rotateZ=e.rotateY=e.rotateX=e.rotate=e.scale=e.translate=e.multiply=e.determinant=e.adjoint=e.invert=e.transpose=e.identity=e.set=e.copy=void 0,e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},e.set=function(t,e,r,o,a,n,i,s,u,p,c,l,h,d,f,y,v){return t[0]=e,t[1]=r,t[2]=o,t[3]=a,t[4]=n,t[5]=i,t[6]=s,t[7]=u,t[8]=p,t[9]=c,t[10]=l,t[11]=h,t[12]=d,t[13]=f,t[14]=y,t[15]=v,t},e.identity=a,e.transpose=function(t,e){if(t===e){var r=e[1],o=e[2],a=e[3],n=e[6],i=e[7],s=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=r,t[6]=e[9],t[7]=e[13],t[8]=o,t[9]=n,t[11]=e[14],t[12]=a,t[13]=i,t[14]=s}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t},e.invert=function(t,e){var r=e[0],o=e[1],a=e[2],n=e[3],i=e[4],s=e[5],u=e[6],p=e[7],c=e[8],l=e[9],h=e[10],d=e[11],f=e[12],y=e[13],v=e[14],M=e[15],m=r*s-o*i,g=r*u-a*i,_=r*p-n*i,b=o*u-a*s,S=o*p-n*s,w=a*p-n*u,O=c*y-l*f,x=c*v-h*f,L=c*M-d*f,P=l*v-h*y,T=l*M-d*y,I=h*M-d*v,N=m*I-g*T+_*P+b*L-S*x+w*O;return N?(t[0]=(s*I-u*T+p*P)*(N=1/N),t[1]=(a*T-o*I-n*P)*N,t[2]=(y*w-v*S+M*b)*N,t[3]=(h*S-l*w-d*b)*N,t[4]=(u*L-i*I-p*x)*N,t[5]=(r*I-a*L+n*x)*N,t[6]=(v*_-f*w-M*g)*N,t[7]=(c*w-h*_+d*g)*N,t[8]=(i*T-s*L+p*O)*N,t[9]=(o*L-r*T-n*O)*N,t[10]=(f*S-y*_+M*m)*N,t[11]=(l*_-c*S-d*m)*N,t[12]=(s*x-i*P-u*O)*N,t[13]=(r*P-o*x+a*O)*N,t[14]=(y*g-f*b-v*m)*N,t[15]=(c*b-l*g+h*m)*N,t):null},e.adjoint=function(t,e){var r=e[0],o=e[1],a=e[2],n=e[3],i=e[4],s=e[5],u=e[6],p=e[7],c=e[8],l=e[9],h=e[10],d=e[11],f=e[12],y=e[13],v=e[14],M=e[15];return t[0]=s*(h*M-d*v)-l*(u*M-p*v)+y*(u*d-p*h),t[1]=-(o*(h*M-d*v)-l*(a*M-n*v)+y*(a*d-n*h)),t[2]=o*(u*M-p*v)-s*(a*M-n*v)+y*(a*p-n*u),t[3]=-(o*(u*d-p*h)-s*(a*d-n*h)+l*(a*p-n*u)),t[4]=-(i*(h*M-d*v)-c*(u*M-p*v)+f*(u*d-p*h)),t[5]=r*(h*M-d*v)-c*(a*M-n*v)+f*(a*d-n*h),t[6]=-(r*(u*M-p*v)-i*(a*M-n*v)+f*(a*p-n*u)),t[7]=r*(u*d-p*h)-i*(a*d-n*h)+c*(a*p-n*u),t[8]=i*(l*M-d*y)-c*(s*M-p*y)+f*(s*d-p*l),t[9]=-(r*(l*M-d*y)-c*(o*M-n*y)+f*(o*d-n*l)),t[10]=r*(s*M-p*y)-i*(o*M-n*y)+f*(o*p-n*s),t[11]=-(r*(s*d-p*l)-i*(o*d-n*l)+c*(o*p-n*s)),t[12]=-(i*(l*v-h*y)-c*(s*v-u*y)+f*(s*h-u*l)),t[13]=r*(l*v-h*y)-c*(o*v-a*y)+f*(o*h-a*l),t[14]=-(r*(s*v-u*y)-i*(o*v-a*y)+f*(o*u-a*s)),t[15]=r*(s*h-u*l)-i*(o*h-a*l)+c*(o*u-a*s),t},e.determinant=function(t){var e=t[0],r=t[1],o=t[2],a=t[3],n=t[4],i=t[5],s=t[6],u=t[7],p=t[8],c=t[9],l=t[10],h=t[11],d=t[12],f=t[13],y=t[14],v=t[15];return(e*i-r*n)*(l*v-h*y)-(e*s-o*n)*(c*v-h*f)+(e*u-a*n)*(c*y-l*f)+(r*s-o*i)*(p*v-h*d)-(r*u-a*i)*(p*y-l*d)+(o*u-a*s)*(p*f-c*d)},e.multiply=n,e.translate=function(t,e,r){var o=r[0],a=r[1],n=r[2],i=void 0,s=void 0,u=void 0,p=void 0,c=void 0,l=void 0,h=void 0,d=void 0,f=void 0,y=void 0,v=void 0,M=void 0;return e===t?(t[12]=e[0]*o+e[4]*a+e[8]*n+e[12],t[13]=e[1]*o+e[5]*a+e[9]*n+e[13],t[14]=e[2]*o+e[6]*a+e[10]*n+e[14],t[15]=e[3]*o+e[7]*a+e[11]*n+e[15]):(s=e[1],u=e[2],p=e[3],c=e[4],l=e[5],h=e[6],d=e[7],f=e[8],y=e[9],v=e[10],M=e[11],t[0]=i=e[0],t[1]=s,t[2]=u,t[3]=p,t[4]=c,t[5]=l,t[6]=h,t[7]=d,t[8]=f,t[9]=y,t[10]=v,t[11]=M,t[12]=i*o+c*a+f*n+e[12],t[13]=s*o+l*a+y*n+e[13],t[14]=u*o+h*a+v*n+e[14],t[15]=p*o+d*a+M*n+e[15]),t},e.scale=function(t,e,r){var o=r[0],a=r[1],n=r[2];return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t[3]=e[3]*o,t[4]=e[4]*a,t[5]=e[5]*a,t[6]=e[6]*a,t[7]=e[7]*a,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},e.rotate=function(t,e,r,a){var n,i,s,u,p,c,l,h,d,f,y,v,M,m,g,_,b,S,w,O,x,L,P,T,I=a[0],N=a[1],R=a[2],E=Math.sqrt(I*I+N*N+R*R);return E<o.EPSILON?null:(I*=E=1/E,N*=E,R*=E,n=Math.sin(r),s=1-(i=Math.cos(r)),p=e[1],c=e[2],l=e[3],d=e[5],f=e[6],y=e[7],M=e[9],m=e[10],g=e[11],w=I*N*s-R*n,O=N*N*s+i,x=R*N*s+I*n,L=I*R*s+N*n,P=N*R*s-I*n,T=R*R*s+i,t[0]=(u=e[0])*(_=I*I*s+i)+(h=e[4])*(b=N*I*s+R*n)+(v=e[8])*(S=R*I*s-N*n),t[1]=p*_+d*b+M*S,t[2]=c*_+f*b+m*S,t[3]=l*_+y*b+g*S,t[4]=u*w+h*O+v*x,t[5]=p*w+d*O+M*x,t[6]=c*w+f*O+m*x,t[7]=l*w+y*O+g*x,t[8]=u*L+h*P+v*T,t[9]=p*L+d*P+M*T,t[10]=c*L+f*P+m*T,t[11]=l*L+y*P+g*T,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)},e.rotateX=function(t,e,r){var o=Math.sin(r),a=Math.cos(r),n=e[4],i=e[5],s=e[6],u=e[7],p=e[8],c=e[9],l=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=n*a+p*o,t[5]=i*a+c*o,t[6]=s*a+l*o,t[7]=u*a+h*o,t[8]=p*a-n*o,t[9]=c*a-i*o,t[10]=l*a-s*o,t[11]=h*a-u*o,t},e.rotateY=function(t,e,r){var o=Math.sin(r),a=Math.cos(r),n=e[0],i=e[1],s=e[2],u=e[3],p=e[8],c=e[9],l=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=n*a-p*o,t[1]=i*a-c*o,t[2]=s*a-l*o,t[3]=u*a-h*o,t[8]=n*o+p*a,t[9]=i*o+c*a,t[10]=s*o+l*a,t[11]=u*o+h*a,t},e.rotateZ=function(t,e,r){var o=Math.sin(r),a=Math.cos(r),n=e[0],i=e[1],s=e[2],u=e[3],p=e[4],c=e[5],l=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=n*a+p*o,t[1]=i*a+c*o,t[2]=s*a+l*o,t[3]=u*a+h*o,t[4]=p*a-n*o,t[5]=c*a-i*o,t[6]=l*a-s*o,t[7]=h*a-u*o,t},e.fromTranslation=function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t},e.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromRotation=function(t,e,r){var a,n,i,s=r[0],u=r[1],p=r[2],c=Math.sqrt(s*s+u*u+p*p);return c<o.EPSILON?null:(s*=c=1/c,u*=c,p*=c,a=Math.sin(e),i=1-(n=Math.cos(e)),t[0]=s*s*i+n,t[1]=u*s*i+p*a,t[2]=p*s*i-u*a,t[3]=0,t[4]=s*u*i-p*a,t[5]=u*u*i+n,t[6]=p*u*i+s*a,t[7]=0,t[8]=s*p*i+u*a,t[9]=u*p*i-s*a,t[10]=p*p*i+n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},e.fromXRotation=function(t,e){var r=Math.sin(e),o=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromYRotation=function(t,e){var r=Math.sin(e),o=Math.cos(e);return t[0]=o,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromZRotation=function(t,e){var r=Math.sin(e),o=Math.cos(e);return t[0]=o,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromRotationTranslation=i,e.fromQuat2=function(t,e){var r=s,o=-e[0],a=-e[1],n=-e[2],u=e[3],p=e[4],c=e[5],l=e[6],h=e[7],d=o*o+a*a+n*n+u*u;return d>0?(r[0]=2*(p*u+h*o+c*n-l*a)/d,r[1]=2*(c*u+h*a+l*o-p*n)/d,r[2]=2*(l*u+h*n+p*a-c*o)/d):(r[0]=2*(p*u+h*o+c*n-l*a),r[1]=2*(c*u+h*a+l*o-p*n),r[2]=2*(l*u+h*n+p*a-c*o)),i(t,e,r),t};var s=r.create();function u(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t[9]=e[9]-r[9],t[10]=e[10]-r[10],t[11]=e[11]-r[11],t[12]=e[12]-r[12],t[13]=e[13]-r[13],t[14]=e[14]-r[14],t[15]=e[15]-r[15],t}e.getTranslation=function(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t},e.getScaling=function(t,e){var r=e[0],o=e[1],a=e[2],n=e[4],i=e[5],s=e[6],u=e[8],p=e[9],c=e[10];return t[0]=Math.sqrt(r*r+o*o+a*a),t[1]=Math.sqrt(n*n+i*i+s*s),t[2]=Math.sqrt(u*u+p*p+c*c),t},e.getRotation=function(t,e){var r=e[0]+e[5]+e[10],o=0;return r>0?(o=2*Math.sqrt(r+1),t[3]=.25*o,t[0]=(e[6]-e[9])/o,t[1]=(e[8]-e[2])/o,t[2]=(e[1]-e[4])/o):e[0]>e[5]&&e[0]>e[10]?(o=2*Math.sqrt(1+e[0]-e[5]-e[10]),t[3]=(e[6]-e[9])/o,t[0]=.25*o,t[1]=(e[1]+e[4])/o,t[2]=(e[8]+e[2])/o):e[5]>e[10]?(o=2*Math.sqrt(1+e[5]-e[0]-e[10]),t[3]=(e[8]-e[2])/o,t[0]=(e[1]+e[4])/o,t[1]=.25*o,t[2]=(e[6]+e[9])/o):(o=2*Math.sqrt(1+e[10]-e[0]-e[5]),t[3]=(e[1]-e[4])/o,t[0]=(e[8]+e[2])/o,t[1]=(e[6]+e[9])/o,t[2]=.25*o),t},e.fromRotationTranslationScale=function(t,e,r,o){var a=e[0],n=e[1],i=e[2],s=e[3],u=a+a,p=n+n,c=i+i,l=a*u,h=a*p,d=a*c,f=n*p,y=n*c,v=i*c,M=s*u,m=s*p,g=s*c,_=o[0],b=o[1],S=o[2];return t[0]=(1-(f+v))*_,t[1]=(h+g)*_,t[2]=(d-m)*_,t[3]=0,t[4]=(h-g)*b,t[5]=(1-(l+v))*b,t[6]=(y+M)*b,t[7]=0,t[8]=(d+m)*S,t[9]=(y-M)*S,t[10]=(1-(l+f))*S,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t},e.fromRotationTranslationScaleOrigin=function(t,e,r,o,a){var n=e[0],i=e[1],s=e[2],u=e[3],p=n+n,c=i+i,l=s+s,h=n*p,d=n*c,f=n*l,y=i*c,v=i*l,M=s*l,m=u*p,g=u*c,_=u*l,b=o[0],S=o[1],w=o[2],O=a[0],x=a[1],L=a[2],P=(1-(y+M))*b,T=(d+_)*b,I=(f-g)*b,N=(d-_)*S,R=(1-(h+M))*S,E=(v+m)*S,j=(f+g)*w,q=(v-m)*w,J=(1-(h+y))*w;return t[0]=P,t[1]=T,t[2]=I,t[3]=0,t[4]=N,t[5]=R,t[6]=E,t[7]=0,t[8]=j,t[9]=q,t[10]=J,t[11]=0,t[12]=r[0]+O-(P*O+N*x+j*L),t[13]=r[1]+x-(T*O+R*x+q*L),t[14]=r[2]+L-(I*O+E*x+J*L),t[15]=1,t},e.fromQuat=function(t,e){var r=e[0],o=e[1],a=e[2],n=e[3],i=r+r,s=o+o,u=a+a,p=r*i,c=o*i,l=o*s,h=a*i,d=a*s,f=a*u,y=n*i,v=n*s,M=n*u;return t[0]=1-l-f,t[1]=c+M,t[2]=h-v,t[3]=0,t[4]=c-M,t[5]=1-p-f,t[6]=d+y,t[7]=0,t[8]=h+v,t[9]=d-y,t[10]=1-p-l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.frustum=function(t,e,r,o,a,n,i){var s=1/(r-e),u=1/(a-o),p=1/(n-i);return t[0]=2*n*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*n*u,t[6]=0,t[7]=0,t[8]=(r+e)*s,t[9]=(a+o)*u,t[10]=(i+n)*p,t[11]=-1,t[12]=0,t[13]=0,t[14]=i*n*2*p,t[15]=0,t},e.perspective=function(t,e,r,o,a){var n=1/Math.tan(e/2),i=void 0;return t[0]=n/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=a&&a!==1/0?(t[10]=(a+o)*(i=1/(o-a)),t[14]=2*a*o*i):(t[10]=-1,t[14]=-2*o),t},e.perspectiveFromFieldOfView=function(t,e,r,o){var a=Math.tan(e.upDegrees*Math.PI/180),n=Math.tan(e.downDegrees*Math.PI/180),i=Math.tan(e.leftDegrees*Math.PI/180),s=Math.tan(e.rightDegrees*Math.PI/180),u=2/(i+s),p=2/(a+n);return t[0]=u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=p,t[6]=0,t[7]=0,t[8]=-(i-s)*u*.5,t[9]=(a-n)*p*.5,t[10]=o/(r-o),t[11]=-1,t[12]=0,t[13]=0,t[14]=o*r/(r-o),t[15]=0,t},e.ortho=function(t,e,r,o,a,n,i){var s=1/(e-r),u=1/(o-a),p=1/(n-i);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*p,t[11]=0,t[12]=(e+r)*s,t[13]=(a+o)*u,t[14]=(i+n)*p,t[15]=1,t},e.lookAt=function(t,e,r,n){var i=void 0,s=void 0,u=void 0,p=void 0,c=void 0,l=void 0,h=void 0,d=void 0,f=void 0,y=void 0,v=e[0],M=e[1],m=e[2],g=n[0],_=n[1],b=n[2],S=r[0],w=r[1],O=r[2];return Math.abs(v-S)<o.EPSILON&&Math.abs(M-w)<o.EPSILON&&Math.abs(m-O)<o.EPSILON?a(t):(h=v-S,d=M-w,f=m-O,i=_*(f*=y=1/Math.sqrt(h*h+d*d+f*f))-b*(d*=y),s=b*(h*=y)-g*f,u=g*d-_*h,(y=Math.sqrt(i*i+s*s+u*u))?(i*=y=1/y,s*=y,u*=y):(i=0,s=0,u=0),p=d*u-f*s,c=f*i-h*u,l=h*s-d*i,(y=Math.sqrt(p*p+c*c+l*l))?(p*=y=1/y,c*=y,l*=y):(p=0,c=0,l=0),t[0]=i,t[1]=p,t[2]=h,t[3]=0,t[4]=s,t[5]=c,t[6]=d,t[7]=0,t[8]=u,t[9]=l,t[10]=f,t[11]=0,t[12]=-(i*v+s*M+u*m),t[13]=-(p*v+c*M+l*m),t[14]=-(h*v+d*M+f*m),t[15]=1,t)},e.targetTo=function(t,e,r,o){var a=e[0],n=e[1],i=e[2],s=o[0],u=o[1],p=o[2],c=a-r[0],l=n-r[1],h=i-r[2],d=c*c+l*l+h*h;d>0&&(c*=d=1/Math.sqrt(d),l*=d,h*=d);var f=u*h-p*l,y=p*c-s*h,v=s*l-u*c;return(d=f*f+y*y+v*v)>0&&(f*=d=1/Math.sqrt(d),y*=d,v*=d),t[0]=f,t[1]=y,t[2]=v,t[3]=0,t[4]=l*v-h*y,t[5]=h*f-c*v,t[6]=c*y-l*f,t[7]=0,t[8]=c,t[9]=l,t[10]=h,t[11]=0,t[12]=a,t[13]=n,t[14]=i,t[15]=1,t},e.str=function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},e.add=function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t[9]=e[9]+r[9],t[10]=e[10]+r[10],t[11]=e[11]+r[11],t[12]=e[12]+r[12],t[13]=e[13]+r[13],t[14]=e[14]+r[14],t[15]=e[15]+r[15],t},e.subtract=u,e.multiplyScalar=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12]*r,t[13]=e[13]*r,t[14]=e[14]*r,t[15]=e[15]*r,t},e.multiplyScalarAndAdd=function(t,e,r,o){return t[0]=e[0]+r[0]*o,t[1]=e[1]+r[1]*o,t[2]=e[2]+r[2]*o,t[3]=e[3]+r[3]*o,t[4]=e[4]+r[4]*o,t[5]=e[5]+r[5]*o,t[6]=e[6]+r[6]*o,t[7]=e[7]+r[7]*o,t[8]=e[8]+r[8]*o,t[9]=e[9]+r[9]*o,t[10]=e[10]+r[10]*o,t[11]=e[11]+r[11]*o,t[12]=e[12]+r[12]*o,t[13]=e[13]+r[13]*o,t[14]=e[14]+r[14]*o,t[15]=e[15]+r[15]*o,t},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]},e.equals=function(t,e){var r=t[0],a=t[1],n=t[2],i=t[3],s=t[4],u=t[5],p=t[6],c=t[7],l=t[8],h=t[9],d=t[10],f=t[11],y=t[12],v=t[13],M=t[14],m=t[15],g=e[0],_=e[1],b=e[2],S=e[3],w=e[4],O=e[5],x=e[6],L=e[7],P=e[8],T=e[9],I=e[10],N=e[11],R=e[12],E=e[13],j=e[14],q=e[15];return Math.abs(r-g)<=o.EPSILON*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(a-_)<=o.EPSILON*Math.max(1,Math.abs(a),Math.abs(_))&&Math.abs(n-b)<=o.EPSILON*Math.max(1,Math.abs(n),Math.abs(b))&&Math.abs(i-S)<=o.EPSILON*Math.max(1,Math.abs(i),Math.abs(S))&&Math.abs(s-w)<=o.EPSILON*Math.max(1,Math.abs(s),Math.abs(w))&&Math.abs(u-O)<=o.EPSILON*Math.max(1,Math.abs(u),Math.abs(O))&&Math.abs(p-x)<=o.EPSILON*Math.max(1,Math.abs(p),Math.abs(x))&&Math.abs(c-L)<=o.EPSILON*Math.max(1,Math.abs(c),Math.abs(L))&&Math.abs(l-P)<=o.EPSILON*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(h-T)<=o.EPSILON*Math.max(1,Math.abs(h),Math.abs(T))&&Math.abs(d-I)<=o.EPSILON*Math.max(1,Math.abs(d),Math.abs(I))&&Math.abs(f-N)<=o.EPSILON*Math.max(1,Math.abs(f),Math.abs(N))&&Math.abs(y-R)<=o.EPSILON*Math.max(1,Math.abs(y),Math.abs(R))&&Math.abs(v-E)<=o.EPSILON*Math.max(1,Math.abs(v),Math.abs(E))&&Math.abs(M-j)<=o.EPSILON*Math.max(1,Math.abs(M),Math.abs(j))&&Math.abs(m-q)<=o.EPSILON*Math.max(1,Math.abs(m),Math.abs(q))},e.mul=n,e.sub=u}).apply(null,o))||(t.exports=a)},Kkcm:function(t,e,r){var o,a;o=[r.dj.c(t.i),e,r("zOht"),r("zp6E"),r("y4WC"),r("ycL1"),r("LxLY"),r("jfWY"),r("Vx27"),r("sLdR")],void 0===(a=(function(t,e,r,o,a,n,i,s,u,p){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.url=null,r}var a;return r.__extends(e,t),a=e,e.prototype.toJSON=function(t){return this.toArray().map((function(e){return e.toJSON(t)})).filter((function(t){return!!t.geometry}))},e.prototype.clone=function(){return new a({url:this.url,items:this.items.map((function(t){return t.clone()}))})},e.prototype._readModifications=function(t,e){for(var r=0,o=t;r<o.length;r++)this.add(p.fromJSON(o[r],e))},e.fromJSON=function(t,e){var r=new a;return r._readModifications(t,e),r},e.fromUrl=function(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var u,c,l,h,d,f,y;return r.__generator(this,(function(v){switch(v.label){case 0:return u={url:s.urlToObject(t),origin:"service"},[4,o(t,{responseType:"json",signal:i.get(n,"signal")})];case 1:for(c=v.sent(),l=e.toJSON(),h=[],d=0,f=c.data;d<f.length;d++)h.push(p.fromJSON(r.__assign(r.__assign({},y=f[d]),{geometry:r.__assign(r.__assign({},y.geometry),{spatialReference:l})}),u));return[2,new a({url:t,items:h})]}}))}))},r.__decorate([u.property({type:String})],e.prototype,"url",void 0),a=r.__decorate([u.subclass("esri.layers.support.SceneModifications")],e)}(n.JSONSupportMixin(a.ofType(p)))}).apply(null,o))||(t.exports=a)},sLdR:function(t,e,r){var o,a;o=[r.dj.c(t.i),e,r("zOht"),r("TMur"),r("ycL1"),r("rg9i"),r("V2ZO"),r("Vx27"),r("RPEu"),r("DTDA"),r("mmEe")],void 0===(a=(function(t,e,r,o,a,n,i,s,u,p,c){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.geometry=null,r.type="clip",r}var a;return r.__extends(e,t),a=e,e.prototype.writeGeometry=function(t,e,r,a){if(a.layer&&a.layer.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!c.canProject(t.spatialReference,a.layer.spatialReference))return void(a&&a.messages&&a.messages.push(new i("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})));var n=new o.Polygon({spatialReference:a.layer.spatialReference});p.polygonToPolygon(t,n),e[r]=n.toJSON(a)}else e[r]=t.toJSON(a);delete e[r].spatialReference},e.prototype.clone=function(){return new a({geometry:n.clone(this.geometry),type:this.type})},r.__decorate([s.property({type:o.Polygon}),u.persistable()],e.prototype,"geometry",void 0),r.__decorate([s.writer(["web-scene","portal-item"],"geometry")],e.prototype,"writeGeometry",null),r.__decorate([s.property({type:["clip","mask","replace"],nonNullable:!0}),u.persistable()],e.prototype,"type",void 0),a=r.__decorate([s.subclass("esri.layers.support.SceneModification")],e)}(a.JSONSupport)}).apply(null,o))||(t.exports=a)},wehw:function(t,e,r){var o,a;o=[r.dj.c(t.i),e,r("zOht"),r("ma1f"),r("eIBl"),r("LxLY"),r("EUqE"),r("8MXS"),r("Vx27"),r("RPEu"),r("0RER"),r("2fnV"),r("FEX1"),r("QJ8R"),r("OXmT"),r("JNpq"),r("EtsK"),r("OjNT"),r("Kkcm"),r("ojLd")],void 0===(a=(function(t,e,r,o,a,n,i,s,u,p,c,l,h,d,f,y,v,M,m,g){"use strict";return function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var o=t.apply(this,e)||this;return o.handles=new a,o.geometryType="mesh",o.operationalLayerType="IntegratedMeshLayer",o.type="integrated-mesh",o.nodePages=null,o.materialDefinitions=null,o.textureSetDefinitions=null,o.geometryDefinitions=null,o.serviceUpdateTimeStamp=null,o.profile="mesh-pyramids",o.modifications=null,o._modificationsSource=null,o.elevationInfo=null,o.path=null,o}return r.__extends(e,t),e.prototype.destroy=function(){this.handles.destroy()},e.prototype.initialize=function(){var t=this;this.handles.add(s.on(this,"modifications","after-changes",(function(){return t.modifications=t.modifications}),null,null,!0))},e.prototype.normalizeCtorArgs=function(t,e){return"string"==typeof t?r.__assign({url:t},e):t},e.prototype.readModifications=function(t,e,r){this._modificationsSource={url:g.fromJSON(t,r),context:r}},e.prototype.load=function(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.addResolvingPromise(this._doLoad(t)),[2,this]}))}))},e.prototype._doLoad=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e,o;return r.__generator(this,(function(r){switch(r.label){case 0:e=n.get(t,"signal"),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.loadFromPortal({supportedTypes:["Scene Service"]},t)];case 2:case 3:return r.sent(),[3,4];case 4:return[4,this._fetchService(e)];case 5:return r.sent(),n.isSome(this._modificationsSource)?[4,m.fromUrl(this._modificationsSource.url,this.spatialReference,t)]:[3,7];case 6:o=r.sent(),this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null,r.label=7;case 7:return[4,this._verifyRootNodeAndUpdateExtent(this.nodePages,e)];case 8:return r.sent(),[2]}}))}))},e.prototype.beforeSave=function(){if(!n.isNone(this._modificationsSource))return this.load().then((function(){}),(function(){}))},e.prototype.saveAs=function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var o=this;return r.__generator(this,(function(a){return[2,this._debouncedSaveOperations(1,r.__assign(r.__assign({},e),{getTypeKeywords:function(){return o._getTypeKeywords()},portalItemLayerType:"integrated-mesh"}),t)]}))}))},e.prototype.save=function(){return r.__awaiter(this,void 0,void 0,(function(){var t=this;return r.__generator(this,(function(e){return[2,this._debouncedSaveOperations(0,{getTypeKeywords:function(){return t._getTypeKeywords()},portalItemLayerType:"integrated-mesh"})]}))}))},e.prototype.validateLayer=function(t){if(t.layerType&&"IntegratedMesh"!==t.layerType)throw new o("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new o("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new o("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},e.prototype._getTypeKeywords=function(){return["IntegratedMeshLayer"]},r.__decorate([u.property({type:String,readOnly:!0})],e.prototype,"geometryType",void 0),r.__decorate([u.property({type:["show","hide"]})],e.prototype,"listMode",void 0),r.__decorate([u.property({type:["IntegratedMeshLayer"]})],e.prototype,"operationalLayerType",void 0),r.__decorate([u.property({json:{read:!1},readOnly:!0})],e.prototype,"type",void 0),r.__decorate([u.property({type:M.I3SNodePageDefinition,readOnly:!0})],e.prototype,"nodePages",void 0),r.__decorate([u.property({type:[M.I3SMaterialDefinition],readOnly:!0})],e.prototype,"materialDefinitions",void 0),r.__decorate([u.property({type:[M.I3STextureSetDefinition],readOnly:!0})],e.prototype,"textureSetDefinitions",void 0),r.__decorate([u.property({type:[M.I3SGeometryDefinition],readOnly:!0})],e.prototype,"geometryDefinitions",void 0),r.__decorate([u.property({readOnly:!0})],e.prototype,"serviceUpdateTimeStamp",void 0),r.__decorate([u.property({type:m}),p.persistable({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],e.prototype,"modifications",void 0),r.__decorate([u.reader(["web-scene","portal-item"],"modifications")],e.prototype,"readModifications",null),r.__decorate([u.property(v.elevationInfo)],e.prototype,"elevationInfo",void 0),r.__decorate([u.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],e.prototype,"path",void 0),r.__decorate([u.subclass("esri.layers.IntegratedMeshLayer")],e)}(y.SceneService(l.ArcGISService(h.OperationalLayer(d.PortalLayer(f.ScaleRangeLayer(i.MultiOriginJSONMixin(c)))))))}).apply(null,o))||(t.exports=a)}}]);