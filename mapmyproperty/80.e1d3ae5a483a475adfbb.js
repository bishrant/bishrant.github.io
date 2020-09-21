(function(){var e={"esri/symbols/support/defaultsJSON":"35hF","esri/core/libs/quickselect/quickselect":"FT4I","esri/layers/support/FieldsIndex":"I90O","arcgis-js-api/core/libs/rbush/rbush":"jEml","esri/core/libs/rbush/rbush":"jEml","esri/layers/graphics/sources/geojson/GeoJSONSourceWorker":"vXbj"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"35hF":function(e,t,i){var n,r;n=[i.dj.c(e.i),t],void 0===(r=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultColor=[252,146,31,255],t.defaultOutlineColor=[153,153,153,255],t.defaultPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",size:6,color:t.defaultColor,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},t.defaultPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",width:.75,color:t.defaultColor},t.defaultPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},t.defaultTextSymbolJSON={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},t.errorPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},t.errorPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},t.errorPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}).apply(null,n))||(e.exports=r)},FT4I:function(e,t,i){var n;void 0===(n=(function(){"use strict";function e(e,t,i){var n=e[t];e[t]=e[i],e[i]=n}function t(e,t){return e<t?-1:e>t?1:0}return function(i,n,r,s,a){!function t(i,n,r,s,a){for(;s>r;){if(s-r>600){var o=s-r+1,l=n-r+1,u=Math.log(o),d=.5*Math.exp(2*u/3),h=.5*Math.sqrt(u*d*(o-d)/o)*(l-o/2<0?-1:1);t(i,n,Math.max(r,Math.floor(n-l*d/o+h)),Math.min(s,Math.floor(n+(o-l)*d/o+h)),a)}var c=i[n],p=r,f=s;for(e(i,r,n),a(i[s],c)>0&&e(i,r,s);p<f;){for(e(i,p,f),p++,f--;a(i[p],c)<0;)p++;for(;a(i[f],c)>0;)f--}0===a(i[r],c)?e(i,r,f):e(i,++f,s),f<=n&&(r=f+1),n<=f&&(s=f-1)}}(i,n,r||0,s||i.length-1,a||t)}}).apply(null,[]))||(e.exports=n)},I90O:function(e,t,i){var n,r;n=[i.dj.c(e.i),t],void 0===(r=(function(e,t){function i(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function n(e){return e.toLowerCase().trim()}return function(){function e(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],e){for(var t=[],r=0,s=e;r<s.length;r++){var a=s[r],o=a&&a.name;if(o){var l=n(o);this._fieldsMap.set(o,a),this._fieldsMap.set(l,a),t.push(l),i(a)&&(this.dateFields.push(a),this._dateFieldsSet.add(a))}}t.sort(),this.uid=t.join(",")}}return e.prototype.destroy=function(){this._fieldsMap.clear()},e.prototype.has=function(e){return null!=this.get(e)},e.prototype.get=function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(n(e)):void 0},e.prototype.isDateField=function(e){return this._dateFieldsSet.has(this.get(e))},e.prototype.normalizeFieldName=function(e){var t=this.get(e);if(t)return t.name},e}()}).apply(null,n))||(e.exports=r)},jEml:function(e,t,i){var n,r;n=[i("FT4I")],void 0===(r=(function(e){"use strict";function t(e,i){if(!(this instanceof t))return new t(e,i);this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function i(e,t,i){if(!i)return t.indexOf(e);for(var n=0;n<t.length;n++)if(i(e,t[n]))return n;return-1}function n(e,t){r(e,0,e.children.length,t,e)}function r(e,t,i,n,r){r||(r=c(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var a,o=t;o<i;o++)a=e.children[o],s(r,e.leaf?n(a):a);return r}function s(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function a(e,t){return e.minX-t.minX}function o(e,t){return e.minY-t.minY}function l(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function u(e){return e.maxX-e.minX+(e.maxY-e.minY)}function d(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function h(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function c(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function p(t,i,n,r,s){for(var a,o=[i,n];o.length;)(n=o.pop())-(i=o.pop())<=r||(a=i+Math.ceil((n-i)/r/2)*r,e(t,a,i,n,s),o.push(i,a,a,n))}return t.prototype={all:function(){return this._all(this.data,[])},search:function(e){var t=this.data,i=[],n=this.toBBox;if(!h(e,t))return i;for(var r,s,a,o,l=[];t;){for(r=0,s=t.children.length;r<s;r++)a=t.children[r],h(e,o=t.leaf?n(a):a)&&(t.leaf?i.push(a):d(e,o)?this._all(a,i):l.push(a));t=l.pop()}return i},collides:function(e){var t=this.data,i=this.toBBox;if(!h(e,t))return!1;for(var n,r,s,a,o=[];t;){for(n=0,r=t.children.length;n<r;n++)if(s=t.children[n],h(e,a=t.leaf?i(s):s)){if(t.leaf||d(e,a))return!0;o.push(s)}t=o.pop()}return!1},load:function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}var n=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(e){return e&&this._insert(e,this.data.height-1),this},clear:function(){return this.data=c([]),this},remove:function(e,t){if(!e)return this;for(var n,r,s,a,o=this.data,l=this.toBBox(e),u=[],h=[];o||u.length;){if(o||(o=u.pop(),r=u[u.length-1],n=h.pop(),a=!0),o.leaf&&-1!==(s=i(e,o.children,t)))return o.children.splice(s,1),u.push(o),this._condense(u),this;a||o.leaf||!d(o,l)?r?(n++,o=r.children[n],a=!1):o=null:(u.push(o),h.push(n),n=0,r=o,o=o.children[0])}return this},toBBox:function(e){return e},compareMinX:a,compareMinY:o,toJSON:function(){return this.data},fromJSON:function(e){return this.data=e,this},_all:function(e,t){for(var i=[];e;)e.leaf?t.push.apply(t,e.children):i.push.apply(i,e.children),e=i.pop();return t},_build:function(e,t,i,r){var s,a=i-t+1,o=this._maxEntries;if(a<=o)return n(s=c(e.slice(t,i+1)),this.toBBox),s;r||(r=Math.ceil(Math.log(a)/Math.log(o)),o=Math.ceil(a/Math.pow(o,r-1))),(s=c([])).leaf=!1,s.height=r;var l,u,d,h,f=Math.ceil(a/o),m=f*Math.ceil(Math.sqrt(o));for(p(e,t,i,m,this.compareMinX),l=t;l<=i;l+=m)for(p(e,l,d=Math.min(l+m-1,i),f,this.compareMinY),u=l;u<=d;u+=f)h=Math.min(u+f-1,d),s.children.push(this._build(e,u,h,r-1));return n(s,this.toBBox),s},_chooseSubtree:function(e,t,i,n){for(var r,s,a,o,u,d,h,c,p,f;n.push(t),!t.leaf&&n.length-1!==i;){for(h=c=1/0,r=0,s=t.children.length;r<s;r++)u=l(a=t.children[r]),p=e,f=a,(d=(Math.max(f.maxX,p.maxX)-Math.min(f.minX,p.minX))*(Math.max(f.maxY,p.maxY)-Math.min(f.minY,p.minY))-u)<c?(c=d,h=u<h?u:h,o=a):d===c&&u<h&&(h=u,o=a);t=o||t.children[0]}return t},_insert:function(e,t,i){var n=i?e:(0,this.toBBox)(e),r=[],a=this._chooseSubtree(n,this.data,t,r);for(a.children.push(e),s(a,n);t>=0&&r[t].children.length>this._maxEntries;)this._split(r,t),t--;this._adjustParentBBoxes(n,r,t)},_split:function(e,t){var i=e[t],r=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,r);var a=this._chooseSplitIndex(i,s,r),o=c(i.children.splice(a,i.children.length-a));o.height=i.height,o.leaf=i.leaf,n(i,this.toBBox),n(o,this.toBBox),t?e[t-1].children.push(o):this._splitRoot(i,o)},_splitRoot:function(e,t){this.data=c([e,t]),this.data.height=e.height+1,this.data.leaf=!1,n(this.data,this.toBBox)},_chooseSplitIndex:function(e,t,i){var n,s,a,o,u,d,h,c,p,f,m,y,g,_;for(d=h=1/0,n=t;n<=i-t;n++)p=s=r(e,0,n,this.toBBox),f=a=r(e,n,i,this.toBBox),m=Math.max(p.minX,f.minX),y=Math.max(p.minY,f.minY),g=Math.min(p.maxX,f.maxX),_=Math.min(p.maxY,f.maxY),o=Math.max(0,g-m)*Math.max(0,_-y),u=l(s)+l(a),o<d?(d=o,c=n,h=u<h?u:h):o===d&&u<h&&(h=u,c=n);return c},_chooseSplitAxis:function(e,t,i){var n=e.leaf?this.compareMinX:a,r=e.leaf?this.compareMinY:o;this._allDistMargin(e,t,i,n)<this._allDistMargin(e,t,i,r)&&e.children.sort(n)},_allDistMargin:function(e,t,i,n){e.children.sort(n);var a,o,l=this.toBBox,d=r(e,0,t,l),h=r(e,i-t,i,l),c=u(d)+u(h);for(a=t;a<i-t;a++)o=e.children[a],s(d,e.leaf?l(o):o),c+=u(d);for(a=i-t-1;a>=t;a--)o=e.children[a],s(h,e.leaf?l(o):o),c+=u(h);return c},_adjustParentBBoxes:function(e,t,i){for(var n=i;n>=0;n--)s(t[n],e)},_condense:function(e){for(var t,i=e.length-1;i>=0;i--)0===e[i].children.length?i>0?(t=e[i-1].children).splice(t.indexOf(e[i]),1):this.clear():n(e[i],this.toBBox)},_initFormat:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}},t}).apply(null,n))||(e.exports=r)},vXbj:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i("zOht"),i("zp6E"),i("ma1f"),i("qMld"),i("Lzvl"),i("nrlZ"),i("+6sX"),i("rfv1"),i("Q2Em"),i("ZooB"),i("9K5t"),i("DaHD"),i("jJpZ"),i("I90O"),i("Q3lp"),i("k7g7")],void 0===(r=(function(e,t,i,n,r,s,a,o,l,u,d,h,c,p,f,m,y,g){Object.defineProperty(t,"__esModule",{value:!0});var _={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},x=function(){function e(){this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null},e.prototype.load=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,s,a,f,x,v,b,F,S,M,I,E,j,w,T,B,X,O,q,Y,D,R,k,J,P,A;return i.__generator(this,(function(C){switch(C.label){case 0:return t=[],[4,this._checkProjection(e.spatialReference)];case 1:return C.sent(),s=null,e.url?[4,n(e.url,{responseType:"json"})]:[3,4];case 2:return a=C.sent(),[4,c.validateGeoJSON(s=a.data)];case 3:C.sent(),C.label=4;case 4:if(f=c.inferLayerProperties(s,{geometryType:e.geometryType}),x=e.fields||f.fields||[],v=null!=e.hasZ?e.hasZ:f.hasZ,F=e.objectIdField||("number"===f.objectIdFieldType?f.objectIdFieldName:"OBJECTID")||"OBJECTID",S=e.spatialReference||o.WGS84,M=e.timeInfo,!(b=f.geometryType))throw new r("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");for("string"===f.objectIdFieldType&&t.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),x===f.fields&&f.unknownFields.length>0&&t.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:f.unknownFields}}),F&&(I=null,x.some((function(e){return e.name===F&&(I=e,!0)}))?(I.type="esriFieldTypeOID",I.editable=!1,I.nullable=!1):x.unshift({alias:F,name:F,type:"esriFieldTypeOID",editable:!1,nullable:!1})),E=0,j=x;E<j.length;E++){if(null==(X=j[E]).name&&(X.name=X.alias),null==X.alias&&(X.alias=X.name),!X.name)throw new r("geojson-layer:invalid-field-name","field name is missing",{field:X});if(X.name===F&&(X.type="esriFieldTypeOID"),-1===y.kebabDict.jsonValues.indexOf(X.type))throw new r("geojson-layer:invalid-field-type",'invalid type for field "'+X.name+'"',{field:X})}for(w={},this._requiredFields=[],T=0,B=x;T<B.length;T++)"esriFieldTypeOID"!==(X=B[T]).type&&"esriFieldTypeGlobalID"!==X.type&&(X.editable=null==X.editable||!!X.editable,X.nullable=null==X.nullable||!!X.nullable,O=g.getFieldDefaultValue(X),X.nullable||void 0!==O?w[X.name]=O:this._requiredFields.push(X));if(this._fieldsIndex=new m(x),M&&(M.startTimeField&&((q=this._fieldsIndex.get(M.startTimeField))?(M.startTimeField=q.name,q.type="esriFieldTypeDate"):M.startTimeField=null),M.endTimeField&&((Y=this._fieldsIndex.get(M.endTimeField))?(M.endTimeField=Y.name,Y.type="esriFieldTypeDate"):M.endTimeField=null),M.trackIdField&&((D=this._fieldsIndex.get(M.trackIdField))?M.trackIdField=D.name:(M.trackIdField=null,t.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:M}}))),M.startTimeField||M.endTimeField||(t.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:M}}),M=null)),R={warnings:t,featureErrors:[],layerDefinition:i.__assign(i.__assign({},_),{drawingInfo:p.createDrawingInfo(b),templates:p.createDefaultTemplate(w),extent:null,geometryType:b,objectIdField:F,fields:x,hasZ:!!v,timeInfo:M})},this._queryEngine=new h.default({fields:x,geometryType:b,hasM:!1,hasZ:v,objectIdField:F,spatialReference:S,timeInfo:M,featureStore:new u.default({geometryType:b,hasM:!1,hasZ:v})}),this._createDefaultAttributes=p.createDefaultAttributesFunction(w,F),this._nextObjectId=f.maxObjectId+1,k=c.createOptimizedFeatures(s,{geometryType:b,hasZ:v,objectIdFieldName:"number"===f.objectIdFieldType?F:null}),!o.equals(S,o.WGS84))for(J=0,P=k;J<P.length;J++)(A=P[J]).geometry&&(A.geometry=l.convertFromGeometry(d.project(l.convertToGeometry(A.geometry,b,v,!1),o.WGS84,S)));return this._loadInitialFeatures(R,k),[2,R]}}))}))},e.prototype.applyEdits=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,n;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,s.all([f.loadGeometryEngineForSimplify(n=(t=this._queryEngine).spatialReference,t.geometryType),d.checkProjectionSupport(e.adds,n),d.checkProjectionSupport(e.updates,n)])];case 1:return i.sent(),[2,this._applyEdits(e)]}}))}))},e.prototype.queryFeatures=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]}))}))},e.prototype.queryFeatureCount=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]}))}))},e.prototype.queryObjectIds=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]}))}))},e.prototype.queryExtent=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]}))}))},e.prototype._loadInitialFeatures=function(e,t){for(var i=this._queryEngine,n=i.featureStore,r=i.objectIdField,s=[],a=0,o=t;a<o.length;a++){var l=o[a],u=this._createDefaultAttributes(),d=f.mixAttributes(this._fieldsIndex,this._requiredFields,u,l.attributes,!0,e.warnings);d?e.featureErrors.push(d):(this._assignObjectId(u,l.attributes,!0),l.attributes=u,l.objectId=u[r],s.push(l))}if(n.addMany(s),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var h=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[h.start,h.end]}return e},e.prototype._applyEdits=function(e){var t=e.adds,i=e.updates,n=e.deletes,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),n&&n.length){for(var s=0,a=n;s<a.length;s++)r.deleteResults.push(f.createFeatureEditSuccessResult(a[s]));this._queryEngine.featureStore.removeManyById(n)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}},e.prototype._applyAddEdits=function(e,t){for(var i=e.addResults,n=this._queryEngine,r=n.geometryType,s=n.hasM,o=n.hasZ,u=n.objectIdField,h=n.spatialReference,c=n.featureStore,p=[],m=0,y=t;m<y.length;m++){var g=y[m];if(g.geometry&&r!==a.getJsonType(g.geometry))i.push(f.createFeatureEditErrorResult("Incorrect geometry type."));else{var _=this._createDefaultAttributes(),x=f.mixAttributes(this._fieldsIndex,this._requiredFields,_,g.attributes);x?i.push(x):(this._assignObjectId(_,g.attributes),g.attributes=_,null!=g.uid&&(e.uidToObjectId[g.uid]=g.attributes[u]),g.geometry&&(g.geometry=d.project(f.simplify(g.geometry,h),g.geometry.spatialReference,h)),p.push(g),i.push(f.createFeatureEditSuccessResult(g.attributes[u])))}}c.addMany(l.convertFromFeatures([],p,r,o,s,u))},e.prototype._applyUpdateEdits=function(e,t){for(var i=e.updateResults,n=this._queryEngine,r=n.geometryType,s=n.hasM,o=n.hasZ,u=n.objectIdField,h=n.spatialReference,c=n.featureStore,p=0,m=t;p<m.length;p++){var y=m[p],g=y.attributes,_=y.geometry,x=g&&g[u];if(null!=x)if(c.has(x)){var v=l.convertToFeature(c.getFeature(x),r,o,s);if(_){if(r!==a.getJsonType(_)){i.push(f.createFeatureEditErrorResult("Incorrect geometry type."));continue}v.geometry=d.project(f.simplify(_,h),_.spatialReference,h)}if(g){var b=f.mixAttributes(this._fieldsIndex,this._requiredFields,v.attributes,g);if(b){i.push(b);continue}}c.add(l.convertFromFeature(v,r,o,s,u)),i.push(f.createFeatureEditSuccessResult(x))}else i.push(f.createFeatureEditErrorResult("Feature with object id "+x+" missing"));else i.push(f.createFeatureEditErrorResult("Identifier field "+u+" missing"))}},e.prototype._assignObjectId=function(e,t,i){void 0===i&&(i=!1);var n=this._queryEngine.objectIdField;e[n]=i&&isFinite(t[n])?t[n]:this._nextObjectId++},e.prototype._checkProjection=function(e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,d.checkProjectionSupport(o.WGS84,e)];case 1:return t.sent(),[3,3];case 2:throw t.sent(),new r("geojson-layer","Projection not supported");case 3:return[2]}}))}))},e}();t.default=x}).apply(null,n))||(e.exports=r)}}]);