(function(){var e={"arcgis-js-api/layers/graphics/sources/support/CSVSourceWorker":"P0Wv","arcgis-js-api/layers/graphics/sources/csv/csv":"rAMp"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{P0Wv:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i("zOht"),i("TMur"),i("zp6E"),i("ma1f"),i("H1tY"),i("rg9i"),i("AcGV"),i("qMld"),i("jfWY"),i("wIC5"),i("H9Hv"),i("nrlZ"),i("vtMp"),i("/COu"),i("Jvs9"),i("rfv1"),i("Q2Em"),i("ZooB"),i("rAMp"),i("DaHD"),i("I90O")],void 0===(r=(function(e,t,i,n,r,a,o,l,s,u,d,f,c,p,v,g,m,y,h,_,F,w,b){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.csvLongitudeFieldNames=t.csvLatitudeFieldNames=void 0;var I=w.createDrawingInfo("esriGeometryPoint"),N=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"];t.csvLatitudeFieldNames=["lat","latitude","y","ycenter","latitude83","latdecdeg","point-y"],t.csvLongitudeFieldNames=["lon","lng","long","longitude","x","xcenter","longitude83","longdecdeg","point-x"];var x,T,D,E,j=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,O=[0,0],R=function(e,t){this.x=e,this.y=t},S=(x=s._parseInfo(),T=new RegExp("^"+x.regexp+"$"),D=new RegExp("["+x.group+"\\s\\xa0]","g"),E=x.factor,function(e){var t=T.exec(e);if(x.factor=E,!t)return NaN;var i=t[1];if(!t[1]){if(!t[2])return NaN;i=t[2],x.factor*=-1}return+(i=i.replace(D,"").replace(x.decimal,"."))*x.factor}),q="isInteger"in Number?Number.isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},M=function(){function e(){this._fieldsIndex=null,this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null},e.prototype.load=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){var n,r,a;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,u.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)])];case 1:return n=i.sent()[0],r=this._parse(n,e.parsing),this._queryEngine=this._createQueryEngine(n,r),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo&&(r.layerDefinition.timeInfo.timeExtent=[(a=this._queryEngine.timeExtent).start,a.end]),[2,r]}}))}))},e.prototype.applyEdits=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){throw new a("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}))}))},e.prototype.queryFeatures=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]}))}))},e.prototype.queryFeatureCount=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]}))}))},e.prototype.queryObjectIds=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]}))}))},e.prototype.queryExtent=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]}))}))},e.prototype._fetch=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){var n;return i.__generator(this,(function(i){switch(i.label){case 0:if(!e)throw new a("csv-source:invalid-source","url not defined");return n=d.urlToObject(e),[4,r(n.path,{query:n.query,responseType:"text",signal:t.signal})];case 1:return[2,i.sent().data]}}))}))},e.prototype._parse=function(e,t){void 0===t&&(t={});var i={columnDelimiter:t.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:t.latitudeField,longitudeFieldName:t.longitudeField}},n=F.readRows(e),r=n.next().value;if(!r)throw new a("csv","CSV is empty",{csv:e});if(r=r.trim(),!t.columnDelimiter){var o=F.inferDelimiter(r);if(!o)throw new a("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");i.columnDelimiter=o}var s=r.split(i.columnDelimiter),u=i.layerDefinition={name:"csv",drawingInfo:I,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:t.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:t.spatialReference||{wkid:102100}}};if(!t.latitudeField||!t.longitudeField){var d=this._inferLocationInfo(s);if(!t.longitudeField&&!d.longitudeFieldName||!t.latitudeField&&!d.latitudeFieldName)throw new a("csv","Unable to identify latitudeField and/or longitudeField from CSV");i.locationInfo={longitudeFieldName:t.longitudeField||d.longitudeFieldName,latitudeFieldName:t.latitudeField||d.latitudeFieldName}}var f=this._inferFields(n,i.columnDelimiter,s,i.locationInfo);if(t.fields&&t.fields.length){for(var c=new Map,p=0,v=t.fields;p<v.length;p++){var g=v[p];c.set(g.name.toLowerCase(),g)}for(var m=0,y=f;m<y.length;m++){var h=c.get((g=y[m]).name.toLowerCase());if(h){var _=g.name;l.mixin(g,h),g.name=_}}}if(u.fields=f,u.fields.some((function(e){return"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)}))||(u.objectIdField=(g={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1}).name,u.fields.unshift(g)),this._fieldsIndex=new b(u.fields),u.timeInfo){var w=u.timeInfo;if(w.startTimeField){var N=this._fieldsIndex.get(w.startTimeField);N?(w.startTimeField=N.name,N.type="esriFieldTypeDate"):w.startTimeField=null}if(w.endTimeField){var x=this._fieldsIndex.get(w.endTimeField);x?(w.endTimeField=x.name,x.type="esriFieldTypeDate"):w.endTimeField=null}if(w.trackIdField){var T=this._fieldsIndex.get(w.trackIdField);w.trackIdField=T?T.name:null}w.startTimeField||w.endTimeField||(u.timeInfo=null)}return i},e.prototype._inferLocationInfo=function(e){var i=null,n=null;return e.forEach((function(e){var r=e.toLowerCase();-1===t.csvLatitudeFieldNames.indexOf(r)||n||(n=e),-1===t.csvLongitudeFieldNames.indexOf(r)||i||(i=e)})),{longitudeFieldName:i,latitudeFieldName:n}},e.prototype._inferFields=function(e,t,i,n){var r=[],a=F.parseRows(e,i,t),o=[];e:for(;o.length<10;){var l=a.next(),s=l.value;if(l.done)break e;o.push(s)}for(var u=function(e){if(e===n.longitudeFieldName||e===n.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:e});else{var t=o.map((function(t){return t[e]})),i=d._inferFieldType(t),a={name:e,type:null,alias:e};switch(i){case"integer":a.type="esriFieldTypeInteger";break;case"double":a.type="esriFieldTypeDouble";break;case"date":a.type="esriFieldTypeDate",a.length=36;break;default:a.type="esriFieldTypeString",a.length=255}r.push(a)}},d=this,f=0,c=i;f<c.length;f++)u(c[f]);return r},e.prototype._inferFieldType=function(e){var t=this;if(!e.length)return"string";var i=/[^+-.,0-9]/;return e.map((function(e){var n=!1;if(""!==e){if(i.test(e))n=!0;else{var r=S(e);if(!isNaN(r))return/[.,]/.test(e)||!q(r)||r>214783647||r<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(r=Number(e),!isNaN(r))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){var a=new Date(e);return t._isValidDate(a,e)?"date":"string"}return"string"}return"string"}})).reduce((function(e,t){return void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0}))},e.prototype._isValidDate=function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var i=!0;if(o("chrome")&&/\d+\W*$/.test(t)){var n=t.match(/[a-zA-Z]{2,}/);if(n){for(var r=!1,a=0;!r&&a<=n.length;)r=!j.test(n[a]),a++;i=!r}}return i},e.prototype._createQueryEngine=function(e,t){for(var i,r=t.locationInfo,a=r.latitudeFieldName,o=r.longitudeFieldName,l=t.layerDefinition,s=l.objectIdField,u=l.fields,d=l.extent,h=l.timeInfo,w=[],b=[],I=new Set,x=new Set,T=[],D=0,E=u;D<E.length;D++){var j=E[D],q=j.name,M=j.type;"esriFieldTypeDate"===M?I.add(q):N.indexOf(M)>-1&&x.add(q),q!==s&&T.push(q)}var k=0,C=F.readRows(e);C.next();var P=F.parseRows(C,T,t.columnDelimiter);e:for(;;){var V=P.next(),L=V.value;if(V.done)break e;var A=this._parseCoordinateValue(L[a]),W=this._parseCoordinateValue(L[o]);if(null!=W&&null!=A&&!isNaN(A)&&!isNaN(W)){for(var G in L[a]=A,L[o]=W,L)if(G!==a&&G!==o)if(I.has(G)){var Q=new Date(L[G]);L[G]=this._isValidDate(Q,L[G])?Q.getTime():null}else if(x.has(G)){var J=S(L[G]);L[G]=isNaN(J)?null:J}L[s]=k,k++,w.push(new R(W,A)),b.push(L)}}if(!p.equals({wkid:4326},d.spatialReference))if(p.isWebMercator(d.spatialReference))for(var Y=0,Z=w;Y<Z.length;Y++){var $=Z[Y];i=v.lngLatToXY($.x,$.y,O),$.x=i[0],$.y=i[1]}else w=f.projectMany(c.jsonAdapter,w,n.SpatialReference.WGS84,d.spatialReference,null);for(var z=new y.default({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),H=new _.default({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:h,objectIdField:s,spatialReference:d.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:z}),B=[],U=0;U<w.length;U++){var X=w[U],K=X.x,ee=X.y,te=b[U];te[s]=U+1,B.push(new g.default(new m.default([],[K,ee]),te,null,te[s]))}return z.addMany(B),H},e.prototype._parseCoordinateValue=function(e){if(null==e||""===e)return null;var t=S(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},e.prototype._checkProjection=function(e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,h.checkProjectionSupport(p.WGS84,e)];case 1:return t.sent(),[3,3];case 2:throw t.sent(),new a("csv-layer","Projection not supported");case 3:return[2]}}))}))},e}();t.default=M}).apply(null,n))||(e.exports=r)},rAMp:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i("zOht")],void 0===(r=(function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseRows=t.inferDelimiter=t.readRowParts=t.readRows=void 0;var n=/^\s*"([\S\s]*)"\s*$/,r=/""/g,a=[","," ",";","|","\t"];function o(e,t){for(var i={},n=e.length,r=0;r<n;r++)i[e[r]]=t[r];return i}function l(e,t,n){var r,a,o;return i.__generator(this,(function(i){switch(i.label){case 0:r=0,i.label=1;case 1:return r<=e.length?(a=e.indexOf(t,r),o=e.substring(r,a>-1?a:void 0),r+=o.length+1,n&&!o.trim()?[3,3]:[4,o]):[3,4];case 2:i.sent(),i.label=3;case 3:return[3,1];case 4:return[2]}}))}function s(e,t){return l(e,t,!1)}function u(e){var t=0,i=0;for(i=e.indexOf('"',i);i>=0;)t++,i=e.indexOf('"',i+1);return t}t.readRows=function(e){return l(e,"\n",!0)},t.readRowParts=s,t.inferDelimiter=function(e){for(var t=e.trim(),i=0,n="",r=0,o=a;r<o.length;r++){var l=o[r],s=t.split(l).length;s>i&&(i=s,n=l)}return""===n?null:n},t.parseRows=function(e,t,a){var l,d,f,c,p,v,g,m,y,h;return i.__generator(this,(function(i){switch(i.label){case 0:l="",d="",f=0,c=[],i.label=1;case 1:if(p=e.next(),v=p.value,p.done)return[2];for(g=s(v,a);m=g.next(),y=m.value,!m.done;)if(l+=d+y,d="",(f+=u(y))%2==0){if(f>0){if(!(h=n.exec(l)))return c=[],l="",f=0,[3,1];c.push(h[1].replace(r,'"'))}else c.push(l);l="",f=0}else d=a;return 0!==f?[3,3]:[4,o(t,c)];case 2:return i.sent(),c=[],[3,4];case 3:d="\n",i.label=4;case 4:return[3,1];case 5:return[2]}}))}}).apply(null,n))||(e.exports=r)}}]);