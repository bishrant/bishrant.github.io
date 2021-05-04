(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"136L":function(e,t,n){"use strict";n.r(t),n.d(t,"csvLatitudeFieldNames",function(){return M}),n.d(t,"csvLongitudeFieldNames",function(){return D});var i=n("wSAH"),s=n("zlDU"),r=n("4EHJ"),o=n("f4Nx"),l=n("WZb1"),a=n("l4ZG"),u=(n("4GrV"),n("Lqtk")),c=n("gYg2"),d=n("cBWO"),f=n("k5I3"),h=n("gVKr"),m=n("gLc9"),p=n("1kEK"),g=n("iNG6"),y=n("HsO1"),I=n("ZRfE"),x=n("ZBG3");const N=/^\s*"([\S\s]*)"\s*$/,b=/""/g,F=[","," ",";","|","\t"];function _(e,t){const n={},i=e.length;for(let s=0;s<i;s++)n[e[s]]=t[s];return n}function*T(e,t,n){let i=0;for(;i<=e.length;){const s=e.indexOf(t,i),r=e.substring(i,s>-1?s:void 0);i+=r.length+1,n&&!r.trim()||(yield r)}}function E(e){const t=e.includes("\r\n")?"\r\n":"\n";return T(e,t,!0)}function*v(e,t,n){let i="",s="",r=0,o=[];e:for(;;){const{value:l,done:a}=e.next();if(a)return;const u=T(l,n,!1);t:for(;;){const{value:e,done:t}=u.next();if(t)break t;if(i+=s+e,s="",r+=w(e),r%2==0){if(r>0){const e=N.exec(i);if(!e){o=[],i="",r=0;continue e}o.push(e[1].replace(b,'"'))}else o.push(i);i="",r=0}else s=n}0===r?(yield _(t,o),o=[]):s="\n"}}function w(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}const O=Object(g.c)("esriGeometryPoint"),j=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],M=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],D=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],Z=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,S=["csv"],P=[0,0];class V{constructor(e,t){this.x=e,this.y=t}}const q=function(){const e=Object(d.a)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return function(s){const r=t.exec(s);if(e.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}(),R="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;t.default=class{constructor(){this._fieldsIndex=null,this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null}async load(e,t={}){const[n]=await Promise.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)]),i=this._parse(n,e);if(this._queryEngine=this._createQueryEngine(n,i),i.layerDefinition.extent=this._queryEngine.fullExtent,i.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;i.layerDefinition.timeInfo.timeExtent=[e,t]}return i}async applyEdits(){throw new s.a("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}async _fetch(e,t){if(!e)throw new s.a("csv-source:invalid-source","url not defined");const n=Object(r.J)(e);return(await Object(u.default)(n.path,{query:n.query,responseType:"text",signal:t.signal})).data}_parse(e,t){const n=t.parsing||{},i={columnDelimiter:n.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},o=E(e);let{value:l}=o.next();if(!l)throw new s.a("csv","CSV is empty",{csv:e});if(l=l.trim(),!n.columnDelimiter){const e=function(e){const t=e.trim();let n=0,i="";for(const s of F){const e=t.split(s).length;e>n&&(n=e,i=s)}return""===i?null:i}(l);if(!e)throw new s.a("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");i.columnDelimiter=e}const a=l.split(i.columnDelimiter),u=i.layerDefinition={name:Object(r.k)(t.url,S)||"csv",drawingInfo:O,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const e=this._inferLocationInfo(a);if(!n.longitudeField&&!e.longitudeFieldName||!n.latitudeField&&!e.latitudeFieldName)throw new s.a("csv","Unable to identify latitudeField and/or longitudeField from CSV");i.locationInfo={longitudeFieldName:n.longitudeField||e.longitudeFieldName,latitudeFieldName:n.latitudeField||e.latitudeFieldName}}const c=this._inferFields(o,i.columnDelimiter,a,i.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of c){const n=e.get(t.name.toLowerCase());if(n){const e=t.name;Object.assign(t,n),t.name=e}}}if(u.fields=c,!u.fields.some(e=>"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=e.name,u.fields.unshift(e)}if(this._fieldsIndex=new m.a(u.fields),u.timeInfo){const e=u.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(u.timeInfo=null)}return i}_inferLocationInfo(e){let t=null,n=null;const i=t=>e.find(e=>e.toLowerCase()===t);return D.some(e=>(t=i(e),!!t)),M.some(e=>(n=i(e),!!n)),{longitudeFieldName:t,latitudeFieldName:n}}_inferFields(e,t,n,i){const s=[],r=v(e,n,t),o=[];e:for(;o.length<10;){const{value:e,done:t}=r.next();if(t)break e;o.push(e)}for(const l of n)if(l===i.longitudeFieldName||l===i.latitudeFieldName)s.push({name:l,type:"esriFieldTypeDouble",alias:l});else{const e=o.map(e=>e[l]),t=this._inferFieldType(e),n={name:l,type:null,alias:l};switch(t){case"integer":n.type="esriFieldTypeInteger";break;case"double":n.type="esriFieldTypeDouble";break;case"date":n.type="esriFieldTypeDate",n.length=36;break;default:n.type="esriFieldTypeString",n.length=255}s.push(n)}return s}_inferFieldType(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map(e=>{let n=!1;if(""!==e){if(t.test(e))n=!0;else{let t=q(e);if(!isNaN(t))return/[.,]/.test(e)||!R(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return"string"}return"string"}}).reduce((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0)}_isValidDate(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let n=!0;if(Object(i.a)("chrome")&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!Z.test(e[i]),i++;n=!t}}return n}_createQueryEngine(e,t){const{latitudeFieldName:n,longitudeFieldName:i}=t.locationInfo,{objectIdField:s,fields:r,extent:u,timeInfo:d}=t.layerDefinition;let m=[];const g=[],y=new Set,N=new Set,b=[];for(const{name:o,type:l}of r)"esriFieldTypeDate"===l?y.add(o):j.indexOf(l)>-1&&N.add(o),o!==s&&b.push(o);let F=0;const _=E(e);_.next();const T=v(_,b,t.columnDelimiter);e:for(;;){const{value:e,done:t}=T.next();if(t)break e;const r=this._parseCoordinateValue(e[n]),o=this._parseCoordinateValue(e[i]);if(null!=o&&null!=r&&!isNaN(r)&&!isNaN(o)){e[n]=r,e[i]=o;for(const t in e)if(t!==n&&t!==i)if(y.has(t)){const n=new Date(e[t]);e[t]=this._isValidDate(n,e[t])?n.getTime():null}else if(N.has(t)){const n=q(e[t]);e[t]=isNaN(n)?null:n}e[s]=F,F++,m.push(new V(o,r)),g.push(e)}}if(!Object(o.c)({wkid:4326},u.spatialReference))if(Object(o.m)(u.spatialReference))for(const o of m)[o.x,o.y]=Object(a.c)(o.x,o.y,P);else m=Object(c.m)(p.a,m,l.a.WGS84,u.spatialReference,null);const w=new I.a({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),O=new x.a({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:d,objectIdField:s,spatialReference:u.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:w}),M=[];for(let o=0;o<m.length;o++){const{x:e,y:t}=m[o],n=g[o];n[s]=o+1,M.push(new f.a(new h.a([],[e,t]),n,null,n[s]))}return w.addMany(M),O}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=q(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await Object(y.a)(o.a,e)}catch{throw new s.a("csv-layer","Projection not supported")}}}},"1kEK":function(e,t,n){"use strict";n.d(t,"a",function(){return i});const i={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const i=new s(e.getPointX(t),e.getPointY(t),n),r=e.hasZ(t),o=e.hasM(t);return r&&(i.z=e.getPointZ(t)),o&&(i.m=e.getPointM(t)),i},exportPolygon:function(e,t,n){return new r(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new o(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new l(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const i=e.hasZ(t),s=e.hasM(t),r=new a(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(i){const n=e.getZExtent(t);r.zmin=n.vmin,r.zmax=n.vmax}if(s){const n=e.getMExtent(t);r.mmin=n.vmin,r.mmax=n.vmax}return r}};class s{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class r{constructor(e,t,n,i){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(e,t,n,i){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class l{constructor(e,t,n,i){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(e,t,n,i,s){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},"2X7Z":function(e,t,n){"use strict";function i(e,t){return e?t?4:3:t?3:2}function s(e,t,n,s,l){if(!t||!t.lengths.length)return null;const a="upperLeft"===(null==l?void 0:l.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const u=e.coords,c=[],d=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:f,coords:h}=t,m=i(n,s);let p=0;for(const i of f){const e=r(d,h,p,i,n,s,a);e&&c.push(e),p+=i*m}if(c.sort((e,t)=>{let i=a*e[2]-a*t[2];return 0===i&&n&&(i=e[4]-t[4]),i}),c.length){let e=6*c[0][2];u[0]=c[0][0]/e,u[1]=c[0][1]/e,n&&(e=6*c[0][4],u[2]=0!==e?c[0][3]/e:0),(u[0]<d[0]||u[0]>d[1]||u[1]<d[2]||u[1]>d[3]||n&&(u[2]<d[4]||u[2]>d[5]))&&(u.length=0)}if(!u.length){const e=t.lengths[0]?o(h,0,f[0],n,s):null;if(!e)return null;u[0]=e[0],u[1]=e[1],n&&e.length>2&&(u[2]=e[2])}return e}function r(e,t,n,s,r,o,l=1){const a=i(r,o);let u=n,c=n+a,d=0,f=0,h=0,m=0,p=0;for(let i=0,y=s-1;i<y;i++,u+=a,c+=a){const n=t[u],i=t[u+1],s=t[u+2],o=t[c],l=t[c+1],a=t[c+2];let g=n*l-o*i;m+=g,d+=(n+o)*g,f+=(i+l)*g,r&&(g=n*a-o*s,h+=(s+a)*g,p+=g),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),i<e[2]&&(e[2]=i),i>e[3]&&(e[3]=i),r&&(s<e[4]&&(e[4]=s),s>e[5]&&(e[5]=s))}if(m*l>0&&(m*=-1),p*l>0&&(p*=-1),!m)return null;const g=[d,f,.5*m];return r&&(g[3]=h,g[4]=.5*p),g}function o(e,t,n,s,r){const o=i(s,r);let d=t,f=t+o,h=0,m=0,p=0,g=0;for(let i=0,y=n-1;i<y;i++,d+=o,f+=o){const t=e[d],n=e[d+1],i=e[d+2],r=e[f],o=e[f+1],y=e[f+2],I=s?a(t,n,i,r,o,y):l(t,n,r,o);if(I)if(h+=I,s){const e=c(t,n,i,r,o,y);m+=I*e[0],p+=I*e[1],g+=I*e[2]}else{const e=u(t,n,r,o);m+=I*e[0],p+=I*e[1]}}return h>0?s?[m/h,p/h,g/h]:[m/h,p/h]:n>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,n,i){const s=n-e,r=i-t;return Math.sqrt(s*s+r*r)}function a(e,t,n,i,s,r){const o=i-e,l=s-t,a=r-n;return Math.sqrt(o*o+l*l+a*a)}function u(e,t,n,i){return[e+.5*(n-e),t+.5*(i-t)]}function c(e,t,n,i,s,r){return[e+.5*(i-e),t+.5*(s-t),n+.5*(r-n)]}n.d(t,"a",function(){return s})},HsO1:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return g});var i=n("f4Nx"),s=n("l4ZG"),r=n("gYg2"),o=n("1kEK");const l=[0,0];function a(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,l),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,l),[n.xmax,n.ymax]=e(t.xmax,t.ymax,l),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:u(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:u(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:c(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:void 0}function u(e,t){const n=[];for(const i of e)n.push(c(i,t));return n}function c(e,t){const n=[];for(const i of e){const e=t(i[0],i[1],[0,0]);n.push(e),i.length>2&&e.push(i[2]),i.length>3&&e.push(i[3])}return n}async function d(e,t){if(!t)return;const n=Array.isArray(e)?e.map(e=>{var t;return null==(t=e.geometry)?void 0:t.spatialReference}):[e];await Object(r.f)(n.map(e=>({source:e,dest:t})))}const f=a.bind(null,s.c),h=a.bind(null,s.f);function m(e,t,n){return e?(n||(n=t,t=e.spatialReference),Object(i.i)(t)&&Object(i.i)(n)&&!Object(i.c)(t,n)?Object(s.a)(t,n)?Object(i.m)(n)?f(e):h(e):Object(r.m)(o.a,[e],t,n,null)[0]:e):e}const p=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,n){!e||!e.length||!t||!n||Object(i.c)(t,n);const s={geometries:e,inSpatialReference:t,outSpatialReference:n,resolve:null};return this._jobs.push(s),new Promise(e=>{s.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:n,outSpatialReference:l,resolve:a}=e;Object(s.a)(n,l)?Object(i.m)(l)?a(t.map(f)):a(t.map(h)):a(Object(r.m)(o.a,t,n,l,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};async function g(e,t,n){return p.push(e,t,n)}},RjdO:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("X2wA"),s=Object(i.b)(function(e){var t;void 0!==(t=function(){function e(n,i,s,r,o){for(;r>s;){if(r-s>600){var l=r-s+1,a=i-s+1,u=Math.log(l),c=.5*Math.exp(2*u/3),d=.5*Math.sqrt(u*c*(l-c)/l)*(a-l/2<0?-1:1);e(n,i,Math.max(s,Math.floor(i-a*c/l+d)),Math.min(r,Math.floor(i+(l-a)*c/l+d)),o)}var f=n[i],h=s,m=r;for(t(n,s,i),o(n[r],f)>0&&t(n,s,r);h<m;){for(t(n,h,m),h++,m--;o(n[h],f)<0;)h++;for(;o(n[m],f)>0;)m--}0===o(n[s],f)?t(n,s,m):t(n,++m,r),m<=i&&(s=m+1),i<=m&&(r=m-1)}}function t(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function n(e,t){return e<t?-1:e>t?1:0}return function(t,i,s,r,o){e(t,i,s||0,r||t.length-1,o||n)}}())&&(e.exports=t)})}}]);