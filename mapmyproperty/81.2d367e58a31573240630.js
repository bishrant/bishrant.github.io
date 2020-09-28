(function(){var e={"arcgis-js-api/symbols/support/defaultsJSON":"35hF","arcgis-js-api/core/libs/quickselect/quickselect":"FT4I","arcgis-js-api/layers/support/FieldsIndex":"I90O","arcgis-js-api/layers/graphics/sources/support/MemorySourceWorker":"fhRm","arcgis-js-api/core/libs/rbush/rbush":"jEml"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"35hF":function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultColor=[252,146,31,255],t.defaultOutlineColor=[153,153,153,255],t.defaultPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",size:6,color:t.defaultColor,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},t.defaultPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",width:.75,color:t.defaultColor},t.defaultPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},t.defaultTextSymbolJSON={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},t.errorPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},t.errorPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},t.errorPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}).apply(null,r))||(e.exports=n)},FT4I:function(e,t,i){var r;void 0===(r=(function(){"use strict";function e(e,t,i){var r=e[t];e[t]=e[i],e[i]=r}function t(e,t){return e<t?-1:e>t?1:0}return function(i,r,n,a,s){!function t(i,r,n,a,s){for(;a>n;){if(a-n>600){var o=a-n+1,l=r-n+1,u=Math.log(o),d=.5*Math.exp(2*u/3),h=.5*Math.sqrt(u*d*(o-d)/o)*(l-o/2<0?-1:1);t(i,r,Math.max(n,Math.floor(r-l*d/o+h)),Math.min(a,Math.floor(r+(o-l)*d/o+h)),s)}var c=i[r],f=n,p=a;for(e(i,n,r),s(i[a],c)>0&&e(i,n,a);f<p;){for(e(i,f,p),f++,p--;s(i[f],c)<0;)f++;for(;s(i[p],c)>0;)p--}0===s(i[n],c)?e(i,n,p):e(i,++p,a),p<=r&&(n=p+1),r<=p&&(a=p-1)}}(i,r,n||0,a||i.length-1,s||t)}}).apply(null,[]))||(e.exports=r)},I90O:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=(function(e,t){function i(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function r(e){return e.toLowerCase().trim()}return function(){function e(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],e){for(var t=[],n=0,a=e;n<a.length;n++){var s=a[n],o=s&&s.name;if(o){var l=r(o);this._fieldsMap.set(o,s),this._fieldsMap.set(l,s),t.push(l),i(s)&&(this.dateFields.push(s),this._dateFieldsSet.add(s))}}t.sort(),this.uid=t.join(",")}}return e.prototype.destroy=function(){this._fieldsMap.clear()},e.prototype.has=function(e){return null!=this.get(e)},e.prototype.get=function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(r(e)):void 0},e.prototype.isDateField=function(e){return this._dateFieldsSet.has(this.get(e))},e.prototype.normalizeFieldName=function(e){var t=this.get(e);if(t)return t.name},e}()}).apply(null,r))||(e.exports=n)},fhRm:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("zOht"),i("ma1f"),i("qMld"),i("Lzvl"),i("nrlZ"),i("+6sX"),i("rfv1"),i("Q2Em"),i("ZooB"),i("DaHD"),i("jJpZ"),i("I90O"),i("Q3lp"),i("k7g7")],void 0===(n=(function(e,t,i,r,n,a,s,o,l,u,d,h,c,f,p,m){Object.defineProperty(t,"__esModule",{value:!0});var y=s.WGS84,g={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:s.WGS84},_={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function x(e){return a.isPoint(e)?null!=e.z:!!e.hasZ}function v(e){return a.isPoint(e)?null!=e.m:!!e.hasM}var b=function(){function e(){this._queryEngine=null,this._nextObjectId=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null},e.prototype.load=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,n,a,s,o,c,x,v,b,F,S,M,I,E,j,w,T,R,B,O,X,Y,q,D,P;return i.__generator(this,(function(k){switch(k.label){case 0:if(t=[],a=this._inferLayerProperties(n=e.features,e.fields),s=e.fields||[],o=null!=e.hasM?e.hasM:a.hasM,c=null!=e.hasZ?e.hasZ:a.hasZ,v=(x=!e.spatialReference&&!a.spatialReference)?y:e.spatialReference||a.spatialReference,b=x?g:null,F=e.geometryType||a.geometryType,S=e.objectIdField||a.objectIdField,M=e.timeInfo,x&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!F)throw new r("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!S)throw new r("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");for(a.objectIdField&&S!==a.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'+S+'" doesn\'t match the field name "'+a.objectIdField+'", found in the provided fields'}),S=a.objectIdField),S&&!a.objectIdField&&(I=null,s.some((function(e){return e.name===S&&(I=e,!0)}))?(I.type="esriFieldTypeOID",I.editable=!1,I.nullable=!1):s.unshift({alias:S,name:S,type:"esriFieldTypeOID",editable:!1,nullable:!1})),E=0,j=s;E<j.length;E++){if(null==(B=j[E]).name&&(B.name=B.alias),null==B.alias&&(B.alias=B.name),!B.name)throw new r("feature-layer:invalid-field-name","field name is missing",{field:B});if(B.name===S&&(B.type="esriFieldTypeOID"),-1===p.kebabDict.jsonValues.indexOf(B.type))throw new r("feature-layer:invalid-field-type",'invalid type for field "'+B.name+'"',{field:B})}for(w={},this._requiredFields=[],T=0,R=s;T<R.length;T++)"esriFieldTypeOID"!==(B=R[T]).type&&"esriFieldTypeGlobalID"!==B.type&&(B.editable=null==B.editable||!!B.editable,B.nullable=null==B.nullable||!!B.nullable,O=m.getFieldDefaultValue(B),B.nullable||void 0!==O?w[B.name]=O:this._requiredFields.push(B));return this._fieldsIndex=new f(s),this._createDefaultAttributes=h.createDefaultAttributesFunction(w,S),M&&(M.startTimeField&&((X=this._fieldsIndex.get(M.startTimeField))?(M.startTimeField=X.name,X.type="esriFieldTypeDate"):M.startTimeField=null),M.endTimeField&&((Y=this._fieldsIndex.get(M.endTimeField))?(M.endTimeField=Y.name,Y.type="esriFieldTypeDate"):M.endTimeField=null),M.trackIdField&&((q=this._fieldsIndex.get(M.trackIdField))?M.trackIdField=q.name:(M.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:M}}))),M.startTimeField||M.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:M}}),M=null)),D={warnings:t,featureErrors:[],layerDefinition:i.__assign(i.__assign({},_),{drawingInfo:h.createDrawingInfo(F),templates:h.createDefaultTemplate(w),extent:b,geometryType:F,objectIdField:S,fields:s,hasZ:!!c,hasM:!!o,timeInfo:M}),assignedObjectIds:{}},this._queryEngine=new d.default({fields:s,geometryType:F,hasM:o,hasZ:c,objectIdField:S,spatialReference:v,featureStore:new l.default({geometryType:F,hasM:o,hasZ:c}),timeInfo:M}),n&&n.length?(P=n.reduce((function(e,t){var i=t.attributes&&t.attributes[S];return null==i||isNaN(i)||!isFinite(i)?e:Math.max(e,i)}),0),this._nextObjectId=1+P,[4,u.checkProjectionSupport(n,v)]):(this._nextObjectId=1,[2,D]);case 1:return k.sent(),[2,this._loadInitialFeatures(D,n)]}}))}))},e.prototype.applyEdits=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,r;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,n.all([c.loadGeometryEngineForSimplify(r=(t=this._queryEngine).spatialReference,t.geometryType),u.checkProjectionSupport(e.adds,r),u.checkProjectionSupport(e.updates,r)])];case 1:return i.sent(),[2,this._applyEdits(e)]}}))}))},e.prototype.queryFeatures=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]}))}))},e.prototype.queryFeatureCount=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]}))}))},e.prototype.queryObjectIds=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]}))}))},e.prototype.queryExtent=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]}))}))},e.prototype._inferLayerProperties=function(e,t){for(var i=void 0,r=void 0,n=null,s=null,o=null,l=0,u=e;l<u.length;l++){var d=u[l].geometry;if(d&&(n||(n=a.getJsonType(d)),s||(s=d.spatialReference),null==i&&(i=x(d)),null==r&&(r=v(d)),n&&s&&null!=i&&null!=r))break}if(t&&t.length){var h=null;t.some((function(e){var t="esriFieldTypeOID"===e.type,i=!e.type&&e.name&&"objectid"===e.name.toLowerCase();return h=e,t||i}))&&(o=h.name)}return{geometryType:n,spatialReference:s,objectIdField:o,hasM:r,hasZ:i}},e.prototype._loadInitialFeatures=function(e,t){for(var i=this._queryEngine,r=i.geometryType,n=i.hasM,s=i.hasZ,l=i.objectIdField,d=i.spatialReference,h=i.featureStore,f=[],p=0,m=t;p<m.length;p++){var y=m[p];if(null!=y.uid&&(e.assignedObjectIds[y.uid]=-1),y.geometry&&r!==a.getJsonType(y.geometry))e.featureErrors.push(c.createFeatureEditErrorResult("Incorrect geometry type."));else{var g=this._createDefaultAttributes(),_=c.mixAttributes(this._fieldsIndex,this._requiredFields,g,y.attributes,!0,e.warnings);_?e.featureErrors.push(_):(this._assignObjectId(g,y.attributes,!0),y.attributes=g,null!=y.uid&&(e.assignedObjectIds[y.uid]=y.attributes[l]),y.geometry&&(y.geometry=u.project(y.geometry,y.geometry.spatialReference,d)),f.push(y))}}if(h.addMany(o.convertFromFeatures([],f,r,s,n,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var x=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[x.start,x.end]}return e},e.prototype._applyEdits=function(e){var t=e.adds,i=e.updates,r=e.deletes,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),r&&r.length){for(var a=0,s=r;a<s.length;a++)n.deleteResults.push(c.createFeatureEditSuccessResult(s[a]));this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}},e.prototype._applyAddEdits=function(e,t){for(var i=e.addResults,r=this._queryEngine,n=r.geometryType,s=r.hasM,l=r.hasZ,d=r.objectIdField,h=r.spatialReference,f=r.featureStore,p=[],m=0,y=t;m<y.length;m++){var g=y[m];if(g.geometry&&n!==a.getJsonType(g.geometry))i.push(c.createFeatureEditErrorResult("Incorrect geometry type."));else{var _=this._createDefaultAttributes(),x=c.mixAttributes(this._fieldsIndex,this._requiredFields,_,g.attributes);x?i.push(x):(this._assignObjectId(_,g.attributes),g.attributes=_,null!=g.uid&&(e.uidToObjectId[g.uid]=g.attributes[d]),g.geometry&&(g.geometry=u.project(c.simplify(g.geometry,h),g.geometry.spatialReference,h)),p.push(g),i.push(c.createFeatureEditSuccessResult(g.attributes[d])))}}f.addMany(o.convertFromFeatures([],p,n,l,s,d))},e.prototype._applyUpdateEdits=function(e,t){for(var i=e.updateResults,r=this._queryEngine,n=r.geometryType,s=r.hasM,l=r.hasZ,d=r.objectIdField,h=r.spatialReference,f=r.featureStore,p=0,m=t;p<m.length;p++){var y=m[p],g=y.attributes,_=y.geometry,x=g&&g[d];if(null!=x)if(f.has(x)){var v=o.convertToFeature(f.getFeature(x),n,l,s);if(_){if(n!==a.getJsonType(_)){i.push(c.createFeatureEditErrorResult("Incorrect geometry type."));continue}v.geometry=u.project(c.simplify(_,h),_.spatialReference,h)}if(g){var b=c.mixAttributes(this._fieldsIndex,this._requiredFields,v.attributes,g);if(b){i.push(b);continue}}f.add(o.convertFromFeature(v,n,l,s,d)),i.push(c.createFeatureEditSuccessResult(x))}else i.push(c.createFeatureEditErrorResult("Feature with object id "+x+" missing"));else i.push(c.createFeatureEditErrorResult("Identifier field "+d+" missing"))}},e.prototype._assignObjectId=function(e,t,i){void 0===i&&(i=!1);var r=this._queryEngine.objectIdField;e[r]=i&&t&&isFinite(t[r])?t[r]:this._nextObjectId++},e}();t.default=b}).apply(null,r))||(e.exports=n)},jEml:function(e,t,i){var r,n;r=[i("FT4I")],void 0===(n=(function(e){"use strict";function t(e,i){if(!(this instanceof t))return new t(e,i);this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function i(e,t,i){if(!i)return t.indexOf(e);for(var r=0;r<t.length;r++)if(i(e,t[r]))return r;return-1}function r(e,t){n(e,0,e.children.length,t,e)}function n(e,t,i,r,n){n||(n=c(null)),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(var s,o=t;o<i;o++)s=e.children[o],a(n,e.leaf?r(s):s);return n}function a(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function s(e,t){return e.minX-t.minX}function o(e,t){return e.minY-t.minY}function l(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function u(e){return e.maxX-e.minX+(e.maxY-e.minY)}function d(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function h(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function c(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function f(t,i,r,n,a){for(var s,o=[i,r];o.length;)(r=o.pop())-(i=o.pop())<=n||(s=i+Math.ceil((r-i)/n/2)*n,e(t,s,i,r,a),o.push(i,s,s,r))}return t.prototype={all:function(){return this._all(this.data,[])},search:function(e){var t=this.data,i=[],r=this.toBBox;if(!h(e,t))return i;for(var n,a,s,o,l=[];t;){for(n=0,a=t.children.length;n<a;n++)s=t.children[n],h(e,o=t.leaf?r(s):s)&&(t.leaf?i.push(s):d(e,o)?this._all(s,i):l.push(s));t=l.pop()}return i},collides:function(e){var t=this.data,i=this.toBBox;if(!h(e,t))return!1;for(var r,n,a,s,o=[];t;){for(r=0,n=t.children.length;r<n;r++)if(a=t.children[r],h(e,s=t.leaf?i(a):a)){if(t.leaf||d(e,s))return!0;o.push(a)}t=o.pop()}return!1},load:function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}var r=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var n=this.data;this.data=r,r=n}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},insert:function(e){return e&&this._insert(e,this.data.height-1),this},clear:function(){return this.data=c([]),this},remove:function(e,t){if(!e)return this;for(var r,n,a,s,o=this.data,l=this.toBBox(e),u=[],h=[];o||u.length;){if(o||(o=u.pop(),n=u[u.length-1],r=h.pop(),s=!0),o.leaf&&-1!==(a=i(e,o.children,t)))return o.children.splice(a,1),u.push(o),this._condense(u),this;s||o.leaf||!d(o,l)?n?(r++,o=n.children[r],s=!1):o=null:(u.push(o),h.push(r),r=0,n=o,o=o.children[0])}return this},toBBox:function(e){return e},compareMinX:s,compareMinY:o,toJSON:function(){return this.data},fromJSON:function(e){return this.data=e,this},_all:function(e,t){for(var i=[];e;)e.leaf?t.push.apply(t,e.children):i.push.apply(i,e.children),e=i.pop();return t},_build:function(e,t,i,n){var a,s=i-t+1,o=this._maxEntries;if(s<=o)return r(a=c(e.slice(t,i+1)),this.toBBox),a;n||(n=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,n-1))),(a=c([])).leaf=!1,a.height=n;var l,u,d,h,p=Math.ceil(s/o),m=p*Math.ceil(Math.sqrt(o));for(f(e,t,i,m,this.compareMinX),l=t;l<=i;l+=m)for(f(e,l,d=Math.min(l+m-1,i),p,this.compareMinY),u=l;u<=d;u+=p)h=Math.min(u+p-1,d),a.children.push(this._build(e,u,h,n-1));return r(a,this.toBBox),a},_chooseSubtree:function(e,t,i,r){for(var n,a,s,o,u,d,h,c,f,p;r.push(t),!t.leaf&&r.length-1!==i;){for(h=c=1/0,n=0,a=t.children.length;n<a;n++)u=l(s=t.children[n]),f=e,p=s,(d=(Math.max(p.maxX,f.maxX)-Math.min(p.minX,f.minX))*(Math.max(p.maxY,f.maxY)-Math.min(p.minY,f.minY))-u)<c?(c=d,h=u<h?u:h,o=s):d===c&&u<h&&(h=u,o=s);t=o||t.children[0]}return t},_insert:function(e,t,i){var r=i?e:(0,this.toBBox)(e),n=[],s=this._chooseSubtree(r,this.data,t,n);for(s.children.push(e),a(s,r);t>=0&&n[t].children.length>this._maxEntries;)this._split(n,t),t--;this._adjustParentBBoxes(r,n,t)},_split:function(e,t){var i=e[t],n=i.children.length,a=this._minEntries;this._chooseSplitAxis(i,a,n);var s=this._chooseSplitIndex(i,a,n),o=c(i.children.splice(s,i.children.length-s));o.height=i.height,o.leaf=i.leaf,r(i,this.toBBox),r(o,this.toBBox),t?e[t-1].children.push(o):this._splitRoot(i,o)},_splitRoot:function(e,t){this.data=c([e,t]),this.data.height=e.height+1,this.data.leaf=!1,r(this.data,this.toBBox)},_chooseSplitIndex:function(e,t,i){var r,a,s,o,u,d,h,c,f,p,m,y,g,_;for(d=h=1/0,r=t;r<=i-t;r++)f=a=n(e,0,r,this.toBBox),p=s=n(e,r,i,this.toBBox),m=Math.max(f.minX,p.minX),y=Math.max(f.minY,p.minY),g=Math.min(f.maxX,p.maxX),_=Math.min(f.maxY,p.maxY),o=Math.max(0,g-m)*Math.max(0,_-y),u=l(a)+l(s),o<d?(d=o,c=r,h=u<h?u:h):o===d&&u<h&&(h=u,c=r);return c},_chooseSplitAxis:function(e,t,i){var r=e.leaf?this.compareMinX:s,n=e.leaf?this.compareMinY:o;this._allDistMargin(e,t,i,r)<this._allDistMargin(e,t,i,n)&&e.children.sort(r)},_allDistMargin:function(e,t,i,r){e.children.sort(r);var s,o,l=this.toBBox,d=n(e,0,t,l),h=n(e,i-t,i,l),c=u(d)+u(h);for(s=t;s<i-t;s++)o=e.children[s],a(d,e.leaf?l(o):o),c+=u(d);for(s=i-t-1;s>=t;s--)o=e.children[s],a(h,e.leaf?l(o):o),c+=u(h);return c},_adjustParentBBoxes:function(e,t,i){for(var r=i;r>=0;r--)a(t[r],e)},_condense:function(e){for(var t,i=e.length-1;i>=0;i--)0===e[i].children.length?i>0?(t=e[i-1].children).splice(t.indexOf(e[i]),1):this.clear():r(e[i],this.toBBox)},_initFormat:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}},t}).apply(null,r))||(e.exports=n)}}]);