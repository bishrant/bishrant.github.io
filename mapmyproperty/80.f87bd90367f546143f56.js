(function(){(this||window).webpackJsonp.registerAbsMids({"esri/symbols/support/defaultsJSON":"35hF","esri/core/libs/quickselect/quickselect":"FT4I","esri/layers/support/FieldsIndex":"I90O","esri/layers/graphics/sources/support/CSVSourceWorker":"P0Wv","arcgis-js-api/core/libs/rbush/rbush":"jEml","esri/core/libs/rbush/rbush":"jEml","esri/layers/graphics/sources/csv/csv":"rAMp"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"35hF":function(e,t,i){var n,r;n=[i.dj.c(e.i),t],void 0===(r=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultColor=[252,146,31,255],t.defaultOutlineColor=[153,153,153,255],t.defaultPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",size:6,color:t.defaultColor,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},t.defaultPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",width:.75,color:t.defaultColor},t.defaultPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},t.defaultTextSymbolJSON={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},t.errorPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},t.errorPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},t.errorPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}).apply(null,n))||(e.exports=r)},FT4I:function(e,t,i){var n;void 0===(n=(function(){"use strict";function e(e,t,i){var n=e[t];e[t]=e[i],e[i]=n}function t(e,t){return e<t?-1:e>t?1:0}return function(i,n,r,a,o){!function t(i,n,r,a,o){for(;a>r;){if(a-r>600){var l=a-r+1,s=n-r+1,u=Math.log(l),d=.5*Math.exp(2*u/3),h=.5*Math.sqrt(u*d*(l-d)/l)*(s-l/2<0?-1:1);t(i,n,Math.max(r,Math.floor(n-s*d/l+h)),Math.min(a,Math.floor(n+(l-s)*d/l+h)),o)}var f=i[n],c=r,p=a;for(e(i,r,n),o(i[a],f)>0&&e(i,r,a);c<p;){for(e(i,c,p),c++,p--;o(i[c],f)<0;)c++;for(;o(i[p],f)>0;)p--}0===o(i[r],f)?e(i,r,p):e(i,++p,a),p<=n&&(r=p+1),n<=p&&(a=p-1)}}(i,n,r||0,a||i.length-1,o||t)}}).apply(null,[]))||(e.exports=n)},I90O:function(e,t,i){var n,r;n=[i.dj.c(e.i),t],void 0===(r=(function(e,t){function i(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function n(e){return e.toLowerCase().trim()}return function(){function e(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],e){for(var t=[],r=0,a=e;r<a.length;r++){var o=a[r],l=o&&o.name;if(l){var s=n(l);this._fieldsMap.set(l,o),this._fieldsMap.set(s,o),t.push(s),i(o)&&(this.dateFields.push(o),this._dateFieldsSet.add(o))}}t.sort(),this.uid=t.join(",")}}return e.prototype.destroy=function(){this._fieldsMap.clear()},e.prototype.has=function(e){return null!=this.get(e)},e.prototype.get=function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(n(e)):void 0},e.prototype.isDateField=function(e){return this._dateFieldsSet.has(this.get(e))},e.prototype.normalizeFieldName=function(e){var t=this.get(e);if(t)return t.name},e}()}).apply(null,n))||(e.exports=r)},P0Wv:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i("zOht"),i("TMur"),i("zp6E"),i("ma1f"),i("H1tY"),i("rg9i"),i("AcGV"),i("qMld"),i("jfWY"),i("wIC5"),i("H9Hv"),i("nrlZ"),i("vtMp"),i("/COu"),i("Jvs9"),i("rfv1"),i("Q2Em"),i("ZooB"),i("rAMp"),i("DaHD"),i("I90O")],void 0===(r=(function(e,t,i,n,r,a,o,l,s,u,d,h,f,c,p,m,g,y,v,_,x,F,S){Object.defineProperty(t,"__esModule",{value:!0});var b=F.createDrawingInfo("esriGeometryPoint"),w=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"];t.csvLatitudeFieldNames=["lat","latitude","y","ycenter","latitude83","latdecdeg","point-y"],t.csvLongitudeFieldNames=["lon","lng","long","longitude","x","xcenter","longitude83","longdecdeg","point-x"];var M,I,N,T,E=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,Y=[0,0],D=function(e,t){this.x=e,this.y=t},B=(M=s._parseInfo(),I=new RegExp("^"+M.regexp+"$"),N=new RegExp("["+M.group+"\\s\\xa0]","g"),T=M.factor,function(e){var t=I.exec(e);if(M.factor=T,!t)return NaN;var i=t[1];if(!t[1]){if(!t[2])return NaN;i=t[2],M.factor*=-1}return+(i=i.replace(N,"").replace(M.decimal,"."))*M.factor}),O="isInteger"in Number?Number.isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},X=function(){function e(){this._fieldsIndex=null,this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null},e.prototype.load=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){var n,r,a;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,u.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)])];case 1:return n=i.sent()[0],r=this._parse(n,e.parsing),this._queryEngine=this._createQueryEngine(n,r),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo&&(r.layerDefinition.timeInfo.timeExtent=[(a=this._queryEngine.timeExtent).start,a.end]),[2,r]}}))}))},e.prototype.applyEdits=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){throw new a("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}))}))},e.prototype.queryFeatures=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]}))}))},e.prototype.queryFeatureCount=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]}))}))},e.prototype.queryObjectIds=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]}))}))},e.prototype.queryExtent=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]}))}))},e.prototype._fetch=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var n;return i.__generator(this,(function(i){switch(i.label){case 0:if(!e)throw new a("csv-source:invalid-source","url not defined");return n=d.urlToObject(e),[4,r(n.path,{query:n.query,responseType:"text",signal:t.signal})];case 1:return[2,i.sent().data]}}))}))},e.prototype._parse=function(e,t){void 0===t&&(t={});var i={columnDelimiter:t.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:t.latitudeField,longitudeFieldName:t.longitudeField}},n=x.readRows(e),r=n.next().value;if(!r)throw new a("csv","CSV is empty",{csv:e});if(r=r.trim(),!t.columnDelimiter){var o=x.inferDelimiter(r);if(!o)throw new a("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");i.columnDelimiter=o}var s=r.split(i.columnDelimiter),u=i.layerDefinition={name:"csv",drawingInfo:b,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:t.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:t.spatialReference||{wkid:102100}}};if(!t.latitudeField||!t.longitudeField){var d=this._inferLocationInfo(s);if(!t.longitudeField&&!d.longitudeFieldName||!t.latitudeField&&!d.latitudeFieldName)throw new a("csv","Unable to identify latitudeField and/or longitudeField from CSV");i.locationInfo={longitudeFieldName:t.longitudeField||d.longitudeFieldName,latitudeFieldName:t.latitudeField||d.latitudeFieldName}}var h=this._inferFields(n,i.columnDelimiter,s,i.locationInfo);if(t.fields&&t.fields.length){for(var f=new Map,c=0,p=t.fields;c<p.length;c++){var m=p[c];f.set(m.name.toLowerCase(),m)}for(var g=0,y=h;g<y.length;g++){var v=f.get((m=y[g]).name.toLowerCase());if(v){var _=m.name;l.mixin(m,v),m.name=_}}}if(u.fields=h,u.fields.some((function(e){return"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)}))||(u.objectIdField=(m={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1}).name,u.fields.unshift(m)),this._fieldsIndex=new S(u.fields),u.timeInfo){var F=u.timeInfo;if(F.startTimeField){var w=this._fieldsIndex.get(F.startTimeField);w?(F.startTimeField=w.name,w.type="esriFieldTypeDate"):F.startTimeField=null}if(F.endTimeField){var M=this._fieldsIndex.get(F.endTimeField);M?(F.endTimeField=M.name,M.type="esriFieldTypeDate"):F.endTimeField=null}if(F.trackIdField){var I=this._fieldsIndex.get(F.trackIdField);F.trackIdField=I?I.name:null}F.startTimeField||F.endTimeField||(u.timeInfo=null)}return i},e.prototype._inferLocationInfo=function(e){var i=null,n=null;return e.forEach((function(e){var r=e.toLowerCase();-1===t.csvLatitudeFieldNames.indexOf(r)||n||(n=e),-1===t.csvLongitudeFieldNames.indexOf(r)||i||(i=e)})),{longitudeFieldName:i,latitudeFieldName:n}},e.prototype._inferFields=function(e,t,i,n){var r=[],a=x.parseRows(e,i,t),o=[];e:for(;o.length<10;){var l=a.next(),s=l.value;if(l.done)break e;o.push(s)}for(var u=function(e){if(e===n.longitudeFieldName||e===n.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:e});else{var t=o.map((function(t){return t[e]})),i=d._inferFieldType(t),a={name:e,type:null,alias:e};switch(i){case"integer":a.type="esriFieldTypeInteger";break;case"double":a.type="esriFieldTypeDouble";break;case"date":a.type="esriFieldTypeDate",a.length=36;break;default:a.type="esriFieldTypeString",a.length=255}r.push(a)}},d=this,h=0,f=i;h<f.length;h++)u(f[h]);return r},e.prototype._inferFieldType=function(e){var t=this;if(!e.length)return"string";var i=/[^+-.,0-9]/;return e.map((function(e){var n=!1;if(""!==e){if(i.test(e))n=!0;else{var r=B(e);if(!isNaN(r))return/[.,]/.test(e)||!O(r)||r>214783647||r<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(r=Number(e),!isNaN(r))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){var a=new Date(e);return t._isValidDate(a,e)?"date":"string"}return"string"}return"string"}})).reduce((function(e,t){return void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0}))},e.prototype._isValidDate=function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var i=!0;if(o("chrome")&&/\d+\W*$/.test(t)){var n=t.match(/[a-zA-Z]{2,}/);if(n){for(var r=!1,a=0;!r&&a<=n.length;)r=!E.test(n[a]),a++;i=!r}}return i},e.prototype._createQueryEngine=function(e,t){for(var i,r=t.locationInfo,a=r.latitudeFieldName,o=r.longitudeFieldName,l=t.layerDefinition,s=l.objectIdField,u=l.fields,d=l.extent,v=l.timeInfo,F=[],S=[],b=new Set,M=new Set,I=[],N=0,T=u;N<T.length;N++){var E=T[N],O=E.name,X=E.type;"esriFieldTypeDate"===X?b.add(O):w.indexOf(X)>-1&&M.add(O),O!==s&&I.push(O)}var j=0,C=x.readRows(e);C.next();var q=x.parseRows(C,I,t.columnDelimiter);e:for(;;){var P=q.next(),k=P.value;if(P.done)break e;var L=this._parseCoordinateValue(k[a]),R=this._parseCoordinateValue(k[o]);if(null!=R&&null!=L&&!isNaN(L)&&!isNaN(R)){for(var J in k[a]=L,k[o]=R,k)if(J!==a&&J!==o)if(b.has(J)){var V=new Date(k[J]);k[J]=this._isValidDate(V,k[J])?V.getTime():null}else if(M.has(J)){var A=B(k[J]);k[J]=isNaN(A)?null:A}k[s]=j,j++,F.push(new D(R,L)),S.push(k)}}if(!c.equals({wkid:4326},d.spatialReference))if(c.isWebMercator(d.spatialReference))for(var z=0,G=F;z<G.length;z++){var Q=G[z];i=p.lngLatToXY(Q.x,Q.y,Y),Q.x=i[0],Q.y=i[1]}else F=h.projectMany(f.jsonAdapter,F,n.SpatialReference.WGS84,d.spatialReference,null);for(var W=new y.default({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),Z=new _.default({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:v,objectIdField:s,spatialReference:d.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:W}),$=[],H=0;H<F.length;H++){var U=F[H],K=U.x,ee=U.y,te=S[H];te[s]=H+1,$.push(new m.default(new g.default([],[K,ee]),te,null,te[s]))}return W.addMany($),Z},e.prototype._parseCoordinateValue=function(e){if(null==e||""===e)return null;var t=B(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},e.prototype._checkProjection=function(e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,v.checkProjectionSupport(c.WGS84,e)];case 1:return t.sent(),[3,3];case 2:throw t.sent(),new a("csv-layer","Projection not supported");case 3:return[2]}}))}))},e}();t.default=X}).apply(null,n))||(e.exports=r)},jEml:function(e,t,i){var n,r;n=[i("FT4I")],void 0===(r=(function(e){"use strict";function t(e,i){if(!(this instanceof t))return new t(e,i);this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function i(e,t,i){if(!i)return t.indexOf(e);for(var n=0;n<t.length;n++)if(i(e,t[n]))return n;return-1}function n(e,t){r(e,0,e.children.length,t,e)}function r(e,t,i,n,r){r||(r=f(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var o,l=t;l<i;l++)o=e.children[l],a(r,e.leaf?n(o):o);return r}function a(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function o(e,t){return e.minX-t.minX}function l(e,t){return e.minY-t.minY}function s(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function u(e){return e.maxX-e.minX+(e.maxY-e.minY)}function d(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function h(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function f(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function c(t,i,n,r,a){for(var o,l=[i,n];l.length;)(n=l.pop())-(i=l.pop())<=r||(o=i+Math.ceil((n-i)/r/2)*r,e(t,o,i,n,a),l.push(i,o,o,n))}return t.prototype={all:function(){return this._all(this.data,[])},search:function(e){var t=this.data,i=[],n=this.toBBox;if(!h(e,t))return i;for(var r,a,o,l,s=[];t;){for(r=0,a=t.children.length;r<a;r++)o=t.children[r],h(e,l=t.leaf?n(o):o)&&(t.leaf?i.push(o):d(e,l)?this._all(o,i):s.push(o));t=s.pop()}return i},collides:function(e){var t=this.data,i=this.toBBox;if(!h(e,t))return!1;for(var n,r,a,o,l=[];t;){for(n=0,r=t.children.length;n<r;n++)if(a=t.children[n],h(e,o=t.leaf?i(a):a)){if(t.leaf||d(e,o))return!0;l.push(a)}t=l.pop()}return!1},load:function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}var n=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(e){return e&&this._insert(e,this.data.height-1),this},clear:function(){return this.data=f([]),this},remove:function(e,t){if(!e)return this;for(var n,r,a,o,l=this.data,s=this.toBBox(e),u=[],h=[];l||u.length;){if(l||(l=u.pop(),r=u[u.length-1],n=h.pop(),o=!0),l.leaf&&-1!==(a=i(e,l.children,t)))return l.children.splice(a,1),u.push(l),this._condense(u),this;o||l.leaf||!d(l,s)?r?(n++,l=r.children[n],o=!1):l=null:(u.push(l),h.push(n),n=0,r=l,l=l.children[0])}return this},toBBox:function(e){return e},compareMinX:o,compareMinY:l,toJSON:function(){return this.data},fromJSON:function(e){return this.data=e,this},_all:function(e,t){for(var i=[];e;)e.leaf?t.push.apply(t,e.children):i.push.apply(i,e.children),e=i.pop();return t},_build:function(e,t,i,r){var a,o=i-t+1,l=this._maxEntries;if(o<=l)return n(a=f(e.slice(t,i+1)),this.toBBox),a;r||(r=Math.ceil(Math.log(o)/Math.log(l)),l=Math.ceil(o/Math.pow(l,r-1))),(a=f([])).leaf=!1,a.height=r;var s,u,d,h,p=Math.ceil(o/l),m=p*Math.ceil(Math.sqrt(l));for(c(e,t,i,m,this.compareMinX),s=t;s<=i;s+=m)for(c(e,s,d=Math.min(s+m-1,i),p,this.compareMinY),u=s;u<=d;u+=p)h=Math.min(u+p-1,d),a.children.push(this._build(e,u,h,r-1));return n(a,this.toBBox),a},_chooseSubtree:function(e,t,i,n){for(var r,a,o,l,u,d,h,f,c,p;n.push(t),!t.leaf&&n.length-1!==i;){for(h=f=1/0,r=0,a=t.children.length;r<a;r++)u=s(o=t.children[r]),c=e,p=o,(d=(Math.max(p.maxX,c.maxX)-Math.min(p.minX,c.minX))*(Math.max(p.maxY,c.maxY)-Math.min(p.minY,c.minY))-u)<f?(f=d,h=u<h?u:h,l=o):d===f&&u<h&&(h=u,l=o);t=l||t.children[0]}return t},_insert:function(e,t,i){var n=i?e:(0,this.toBBox)(e),r=[],o=this._chooseSubtree(n,this.data,t,r);for(o.children.push(e),a(o,n);t>=0&&r[t].children.length>this._maxEntries;)this._split(r,t),t--;this._adjustParentBBoxes(n,r,t)},_split:function(e,t){var i=e[t],r=i.children.length,a=this._minEntries;this._chooseSplitAxis(i,a,r);var o=this._chooseSplitIndex(i,a,r),l=f(i.children.splice(o,i.children.length-o));l.height=i.height,l.leaf=i.leaf,n(i,this.toBBox),n(l,this.toBBox),t?e[t-1].children.push(l):this._splitRoot(i,l)},_splitRoot:function(e,t){this.data=f([e,t]),this.data.height=e.height+1,this.data.leaf=!1,n(this.data,this.toBBox)},_chooseSplitIndex:function(e,t,i){var n,a,o,l,u,d,h,f,c,p,m,g,y,v;for(d=h=1/0,n=t;n<=i-t;n++)c=a=r(e,0,n,this.toBBox),p=o=r(e,n,i,this.toBBox),m=Math.max(c.minX,p.minX),g=Math.max(c.minY,p.minY),y=Math.min(c.maxX,p.maxX),v=Math.min(c.maxY,p.maxY),l=Math.max(0,y-m)*Math.max(0,v-g),u=s(a)+s(o),l<d?(d=l,f=n,h=u<h?u:h):l===d&&u<h&&(h=u,f=n);return f},_chooseSplitAxis:function(e,t,i){var n=e.leaf?this.compareMinX:o,r=e.leaf?this.compareMinY:l;this._allDistMargin(e,t,i,n)<this._allDistMargin(e,t,i,r)&&e.children.sort(n)},_allDistMargin:function(e,t,i,n){e.children.sort(n);var o,l,s=this.toBBox,d=r(e,0,t,s),h=r(e,i-t,i,s),f=u(d)+u(h);for(o=t;o<i-t;o++)l=e.children[o],a(d,e.leaf?s(l):l),f+=u(d);for(o=i-t-1;o>=t;o--)l=e.children[o],a(h,e.leaf?s(l):l),f+=u(h);return f},_adjustParentBBoxes:function(e,t,i){for(var n=i;n>=0;n--)a(t[n],e)},_condense:function(e){for(var t,i=e.length-1;i>=0;i--)0===e[i].children.length?i>0?(t=e[i-1].children).splice(t.indexOf(e[i]),1):this.clear():n(e[i],this.toBBox)},_initFormat:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}},t}).apply(null,n))||(e.exports=r)},rAMp:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i("zOht")],void 0===(r=(function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=/^\s*"([\S\s]*)"\s*$/,r=/""/g,a=[","," ",";","|","\t"];function o(e,t){for(var i={},n=e.length,r=0;r<n;r++)i[e[r]]=t[r];return i}function l(e,t,n){var r,a,o;return i.__generator(this,(function(i){switch(i.label){case 0:r=0,i.label=1;case 1:return r<=e.length?(a=e.indexOf(t,r),o=e.substring(r,a>-1?a:void 0),r+=o.length+1,n&&!o.trim()?[3,3]:[4,o]):[3,4];case 2:i.sent(),i.label=3;case 3:return[3,1];case 4:return[2]}}))}function s(e,t){return l(e,t,!1)}function u(e){var t=0,i=0;for(i=e.indexOf('"',i);i>=0;)t++,i=e.indexOf('"',i+1);return t}t.readRows=function(e){return l(e,"\n",!0)},t.readRowParts=s,t.inferDelimiter=function(e){for(var t=e.trim(),i=0,n="",r=0,o=a;r<o.length;r++){var l=o[r],s=t.split(l).length;s>i&&(i=s,n=l)}return""===n?null:n},t.parseRows=function(e,t,a){var l,d,h,f,c,p,m,g,y,v;return i.__generator(this,(function(i){switch(i.label){case 0:l="",d="",h=0,f=[],i.label=1;case 1:if(c=e.next(),p=c.value,c.done)return[2];for(m=s(p,a);g=m.next(),y=g.value,!g.done;)if(l+=d+y,d="",(h+=u(y))%2==0){if(h>0){if(!(v=n.exec(l)))return f=[],l="",h=0,[3,1];f.push(v[1].replace(r,'"'))}else f.push(l);l="",h=0}else d=a;return 0!==h?[3,3]:[4,o(t,f)];case 2:return i.sent(),f=[],[3,4];case 3:d="\n",i.label=4;case 4:return[3,1];case 5:return[2]}}))}}).apply(null,n))||(e.exports=r)}}]);