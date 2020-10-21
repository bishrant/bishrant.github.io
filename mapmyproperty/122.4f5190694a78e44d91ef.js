(function(){var e={"arcgis-js-api/layers/graphics/sources/support/MemorySourceWorker":"fhRm"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{fhRm:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i("zOht"),i("ma1f"),i("qMld"),i("Lzvl"),i("nrlZ"),i("+6sX"),i("rfv1"),i("Q2Em"),i("ZooB"),i("DaHD"),i("jJpZ"),i("I90O"),i("Q3lp"),i("k7g7")],void 0===(n=(function(e,t,i,r,n,s,a,u,l,o,d,p,c,f,y,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var m=a.WGS84,g={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:a.WGS84},_={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function b(e){return s.isPoint(e)?null!=e.z:!!e.hasZ}function F(e){return s.isPoint(e)?null!=e.m:!!e.hasM}var I=function(){function e(){this._queryEngine=null,this._nextObjectId=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null},e.prototype.load=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,n,s,a,u,c,b,F,I,v,E,j,T,R,x,w,q,D,O,M,S,k,A,Q,Z;return i.__generator(this,(function(P){switch(P.label){case 0:if(t=[],s=this._inferLayerProperties(n=e.features,e.fields),a=e.fields||[],u=null!=e.hasM?e.hasM:s.hasM,c=null!=e.hasZ?e.hasZ:s.hasZ,F=(b=!e.spatialReference&&!s.spatialReference)?m:e.spatialReference||s.spatialReference,I=b?g:null,E=e.objectIdField||s.objectIdField,j=e.timeInfo,(v=e.geometryType||s.geometryType)&&(b&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!v))throw new r("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!E)throw new r("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");for(s.objectIdField&&E!==s.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'+E+'" doesn\'t match the field name "'+s.objectIdField+'", found in the provided fields'}),E=s.objectIdField),E&&!s.objectIdField&&(T=null,a.some((function(e){return e.name===E&&(T=e,!0)}))?(T.type="esriFieldTypeOID",T.editable=!1,T.nullable=!1):a.unshift({alias:E,name:E,type:"esriFieldTypeOID",editable:!1,nullable:!1})),R=0,x=a;R<x.length;R++){if(null==(O=x[R]).name&&(O.name=O.alias),null==O.alias&&(O.alias=O.name),!O.name)throw new r("feature-layer:invalid-field-name","field name is missing",{field:O});if(O.name===E&&(O.type="esriFieldTypeOID"),-1===y.kebabDict.jsonValues.indexOf(O.type))throw new r("feature-layer:invalid-field-type",'invalid type for field "'+O.name+'"',{field:O})}for(w={},this._requiredFields=[],q=0,D=a;q<D.length;q++)"esriFieldTypeOID"!==(O=D[q]).type&&"esriFieldTypeGlobalID"!==O.type&&(O.editable=null==O.editable||!!O.editable,O.nullable=null==O.nullable||!!O.nullable,M=h.getFieldDefaultValue(O),O.nullable||void 0!==M?w[O.name]=M:this._requiredFields.push(O));return this._fieldsIndex=new f(a),this._createDefaultAttributes=p.createDefaultAttributesFunction(w,E),j&&(j.startTimeField&&((S=this._fieldsIndex.get(j.startTimeField))?(j.startTimeField=S.name,S.type="esriFieldTypeDate"):j.startTimeField=null),j.endTimeField&&((k=this._fieldsIndex.get(j.endTimeField))?(j.endTimeField=k.name,k.type="esriFieldTypeDate"):j.endTimeField=null),j.trackIdField&&((A=this._fieldsIndex.get(j.trackIdField))?j.trackIdField=A.name:(j.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:j}}))),j.startTimeField||j.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:j}}),j=null)),Q={warnings:t,featureErrors:[],layerDefinition:i.__assign(i.__assign({},_),{drawingInfo:p.createDrawingInfo(v),templates:p.createDefaultTemplate(w),extent:I,geometryType:v,objectIdField:E,fields:a,hasZ:!!c,hasM:!!u,timeInfo:j}),assignedObjectIds:{}},this._queryEngine=new d.default({fields:a,geometryType:v,hasM:u,hasZ:c,objectIdField:E,spatialReference:F,featureStore:new l.default({geometryType:v,hasM:u,hasZ:c}),timeInfo:j}),n&&n.length?(Z=n.reduce((function(e,t){var i=t.attributes&&t.attributes[E];return null==i||isNaN(i)||!isFinite(i)?e:Math.max(e,i)}),0),this._nextObjectId=1+Z,[4,o.checkProjectionSupport(n,F)]):(this._nextObjectId=1,[2,Q]);case 1:return P.sent(),[2,this._loadInitialFeatures(Q,n)]}}))}))},e.prototype.applyEdits=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,r;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,n.all([c.loadGeometryEngineForSimplify(r=(t=this._queryEngine).spatialReference,t.geometryType),o.checkProjectionSupport(e.adds,r),o.checkProjectionSupport(e.updates,r)])];case 1:return i.sent(),[2,this._applyEdits(e)]}}))}))},e.prototype.queryFeatures=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]}))}))},e.prototype.queryFeatureCount=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]}))}))},e.prototype.queryObjectIds=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]}))}))},e.prototype.queryExtent=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]}))}))},e.prototype._inferLayerProperties=function(e,t){for(var i=void 0,r=void 0,n=null,a=null,u=null,l=0,o=e;l<o.length;l++){var d=o[l].geometry;if(d&&(n||(n=s.getJsonType(d)),a||(a=d.spatialReference),null==i&&(i=b(d)),null==r&&(r=F(d)),n&&a&&null!=i&&null!=r))break}if(t&&t.length){var p=null;t.some((function(e){var t="esriFieldTypeOID"===e.type,i=!e.type&&e.name&&"objectid"===e.name.toLowerCase();return p=e,t||i}))&&(u=p.name)}return{geometryType:n,spatialReference:a,objectIdField:u,hasM:r,hasZ:i}},e.prototype._loadInitialFeatures=function(e,t){for(var i=this._queryEngine,r=i.geometryType,n=i.hasM,a=i.hasZ,l=i.objectIdField,d=i.spatialReference,p=i.featureStore,f=[],y=0,h=t;y<h.length;y++){var m=h[y];if(null!=m.uid&&(e.assignedObjectIds[m.uid]=-1),m.geometry&&r!==s.getJsonType(m.geometry))e.featureErrors.push(c.createFeatureEditErrorResult("Incorrect geometry type."));else{var g=this._createDefaultAttributes(),_=c.mixAttributes(this._fieldsIndex,this._requiredFields,g,m.attributes,!0,e.warnings);_?e.featureErrors.push(_):(this._assignObjectId(g,m.attributes,!0),m.attributes=g,null!=m.uid&&(e.assignedObjectIds[m.uid]=m.attributes[l]),m.geometry&&(m.geometry=o.project(m.geometry,m.geometry.spatialReference,d)),f.push(m))}}if(p.addMany(u.convertFromFeatures([],f,r,a,n,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var b=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[b.start,b.end]}return e},e.prototype._applyEdits=function(e){var t=e.adds,i=e.updates,r=e.deletes,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),r&&r.length){for(var s=0,a=r;s<a.length;s++)n.deleteResults.push(c.createFeatureEditSuccessResult(a[s]));this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}},e.prototype._applyAddEdits=function(e,t){for(var i=e.addResults,r=this._queryEngine,n=r.geometryType,a=r.hasM,l=r.hasZ,d=r.objectIdField,p=r.spatialReference,f=r.featureStore,y=[],h=0,m=t;h<m.length;h++){var g=m[h];if(g.geometry&&n!==s.getJsonType(g.geometry))i.push(c.createFeatureEditErrorResult("Incorrect geometry type."));else{var _=this._createDefaultAttributes(),b=c.mixAttributes(this._fieldsIndex,this._requiredFields,_,g.attributes);b?i.push(b):(this._assignObjectId(_,g.attributes),g.attributes=_,null!=g.uid&&(e.uidToObjectId[g.uid]=g.attributes[d]),g.geometry&&(g.geometry=o.project(c.simplify(g.geometry,p),g.geometry.spatialReference,p)),y.push(g),i.push(c.createFeatureEditSuccessResult(g.attributes[d])))}}f.addMany(u.convertFromFeatures([],y,n,l,a,d))},e.prototype._applyUpdateEdits=function(e,t){for(var i=e.updateResults,r=this._queryEngine,n=r.geometryType,a=r.hasM,l=r.hasZ,d=r.objectIdField,p=r.spatialReference,f=r.featureStore,y=0,h=t;y<h.length;y++){var m=h[y],g=m.attributes,_=m.geometry,b=g&&g[d];if(null!=b)if(f.has(b)){var F=u.convertToFeature(f.getFeature(b),n,l,a);if(_){if(n!==s.getJsonType(_)){i.push(c.createFeatureEditErrorResult("Incorrect geometry type."));continue}F.geometry=o.project(c.simplify(_,p),_.spatialReference,p)}if(g){var I=c.mixAttributes(this._fieldsIndex,this._requiredFields,F.attributes,g);if(I){i.push(I);continue}}f.add(u.convertFromFeature(F,n,l,a,d)),i.push(c.createFeatureEditSuccessResult(b))}else i.push(c.createFeatureEditErrorResult("Feature with object id "+b+" missing"));else i.push(c.createFeatureEditErrorResult("Identifier field "+d+" missing"))}},e.prototype._assignObjectId=function(e,t,i){void 0===i&&(i=!1);var r=this._queryEngine.objectIdField;e[r]=i&&t&&isFinite(t[r])?t[r]:this._nextObjectId++},e}();t.default=I}).apply(null,r))||(e.exports=n)}}]);