(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/OptimizedFeature":"/COu","arcgis-js-api/layers/graphics/OptimizedFeature":"/COu","arcgis-js-api/layers/graphics/sources/FeatureLayerSource":"FN+y","esri/layers/graphics/OptimizedGeometry":"Jvs9","arcgis-js-api/layers/graphics/OptimizedGeometry":"Jvs9","arcgis-js-api/layers/graphics/OptimizedFeatureSet":"xJgq"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[89,96],{"/COu":function(e,t,r){var a,n;a=[r.dj.c(e.i),t,r("xhoE")],void 0===(n=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,a){void 0===e&&(e=null),void 0===t&&(t={}),this.localId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),r&&(this.centroid=r),null!=a&&(this.objectId=a)}}).apply(null,a))||(e.exports=n)},"FN+y":function(e,t,r){var a,n;a=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("2Atf"),r("Q2wQ"),r("HZ3d"),r("zp6E"),r("ma1f"),r("R7Ts"),r("LxLY"),r("qMld"),r("jfWY"),r("Vx27"),r("uajq"),r("fAsY")],void 0===(n=(function(e,t,r,a,n,s,u,i,o,l,d,c,p,h,y,f){function m(e){return u(this,void 0,void 0,(function(){return s(this,(function(t){return"string"==typeof e?[2,p.dataComponents(e)||{data:e}]:[2,c.create((function(t,r){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(p.dataComponents(a.result))},a.onerror=function(e){return r(e)}}))]}))}))}Object.defineProperty(t,"__esModule",{value:!0});var b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="feature-layer",t}return r(t,e),t.prototype.load=function(e){var t=d.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),this.when()},Object.defineProperty(t.prototype,"queryTask",{get:function(){var e=this.layer,t=e.parsedUrl,r=e.gdbVersion;return new y({url:null!=e.dynamicDataSource?t.path+"?"+p.objectToQuery(t.query):t.path,gdbVersion:r})},enumerable:!0,configurable:!0}),t.prototype.addAttachment=function(e,t){var r=this;return this.load().then((function(){var a=e.attributes[r.layer.objectIdField],s=r.layer.parsedUrl.path+"/"+a+"/addAttachment",u=n({f:"json"},r.layer.parsedUrl.query),o=r._getFormDataForAttachment(t,u);return i(s,{body:o}).then((function(e){return r._createFeatureEditResult(e.data.addAttachmentResult)})).catch((function(e){throw r._createAttachmentErrorResult(a,e)}))}))},t.prototype.updateAttachment=function(e,t,r){var a=this;return this.load().then((function(){var s=e.attributes[a.layer.objectIdField],u=a.layer.parsedUrl.path+"/"+s+"/updateAttachment",o=n({f:"json"},a.layer.parsedUrl.query,{attachmentId:t}),l=a._getFormDataForAttachment(r,o);return i(u,{body:l}).then((function(e){return a._createFeatureEditResult(e.data.updateAttachmentResult)})).catch((function(e){throw a._createAttachmentErrorResult(s,e)}))}))},t.prototype.applyEdits=function(e,t){return u(this,void 0,void 0,(function(){var r,a,n,u,o,l,d,c,p,h,y,f,m,b,g,v;return s(this,(function(s){switch(s.label){case 0:return[4,this.load()];case 1:s.sent(),r=e.addFeatures.map(this._serializeFeature,this),a=e.updateFeatures.map(this._serializeFeature,this),n=this._getFeatureIds(e.deleteFeatures),u=[],o=[],l=0,d=e.addAttachments,s.label=2;case 2:return l<d.length?(p=(c=u).push,[4,this._serializeAttachment(d[l])]):[3,5];case 3:p.apply(c,[s.sent()]),s.label=4;case 4:return l++,[3,2];case 5:h=0,y=e.updateAttachments,s.label=6;case 6:return h<y.length?(m=(f=o).push,[4,this._serializeAttachment(y[h])]):[3,9];case 7:m.apply(f,[s.sent()]),s.label=8;case 8:return h++,[3,6];case 9:return b={adds:u,updates:o,deletes:e.deleteAttachments.slice()},g={f:"json",adds:r.length?JSON.stringify(r):null,updates:a.length?JSON.stringify(a):null,deletes:n.length?n.join(","):null,gdbVersion:t&&t.gdbVersion,rollbackOnFailure:t&&t.rollbackOnFailureEnabled,useGlobalIds:t&&t.globalIdUsed,attachments:JSON.stringify(b)},[4,i(this.layer.parsedUrl.path+"/applyEdits",{query:g,method:"post",responseType:"json"})];case 10:return v=s.sent(),[2,this._createEditsResult(v)]}}))}))},t.prototype.deleteAttachments=function(e,t){var r=this;return this.load().then((function(){var a=e.attributes[r.layer.objectIdField];return i(r.layer.parsedUrl.path+"/"+a+"/deleteAttachments",{query:n({f:"json"},r.layer.parsedUrl.query,{attachmentIds:t.join(",")}),method:"post",responseType:"json"}).then((function(e){return e.data.deleteAttachmentResults.map(r._createFeatureEditResult)})).catch((function(e){throw r._createAttachmentErrorResult(a,e)}))}))},t.prototype.queryAttachments=function(e,t){var r=this;void 0===t&&(t={});var a=this.layer.parsedUrl,s=a.path;return this.load().then((function(){var u=n({},t,{query:n({},a.query,{f:"json"}),responseType:"json"});if(!r.layer.get("capabilities.operations.supportsQueryAttachments")){for(var o=e.objectIds,l=[],d=0,p=o;d<p.length;d++)l.push(i(s+"/"+p[d]+"/attachments",u));return c.all(l).then((function(e){return o.map((function(t,r){return{parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}}))})).then((function(e){return f.processAttachmentQueryResult(e,s)}))}return r.queryTask.executeAttachmentQuery(e,u)}))},t.prototype.queryFeatures=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.execute(e,t)}))},t.prototype.queryFeaturesJSON=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.executeJSON(e,t)}))},t.prototype.queryObjectIds=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.executeForIds(e,t)}))},t.prototype.queryFeatureCount=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.executeForCount(e,t)}))},t.prototype.queryExtent=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.executeForExtent(e,t)}))},t.prototype.queryRelatedFeatures=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.executeRelationshipQuery(e,t)}))},t.prototype._fetchService=function(e){return u(this,void 0,void 0,(function(){var t,r;return s(this,(function(a){switch(a.label){case 0:return(t=this.layer.sourceJSON)?(this.sourceJSON=t,[2]):[4,i(this.layer.parsedUrl.path,{query:n({f:"json"},this.layer.parsedUrl.query),responseType:"json",signal:e})];case 1:return r=a.sent().data,this.sourceJSON=r,[2]}}))}))},t.prototype._serializeFeature=function(e){var t=e.geometry,r=e.attributes;return d.isNone(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}},t.prototype._serializeAttachment=function(e){return u(this,void 0,void 0,(function(){var t,r,a,n,u,i,o,l;return s(this,(function(s){switch(s.label){case 0:return a=(r=e.attachment).name,n=r.contentType,u=r.data,i=r.uploadId,o={globalId:r.globalId,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null},(t=e.feature)&&(o.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),i?(o.uploadId=i,[3,3]):[3,1];case 1:return u?[4,m(u)]:[3,3];case 2:l=s.sent(),o.contentType=l.mediaType,o.data=l.data,u instanceof File&&(o.name=u.name),s.label=3;case 3:return a&&(o.name=a),n&&(o.contentType=n),[2,o]}}))}))},t.prototype._getFeatureIds=function(e){var t=e[0];return t?"objectId"in t?this._getIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]},t.prototype._getIdsFromFeatures=function(e){var t=this.layer.objectIdField;return e.map((function(e){return e.attributes&&e.attributes[t]}))},t.prototype._getIdsFromFeatureIdentifier=function(e){return e.map((function(e){return e.objectId}))},t.prototype._createEditsResult=function(e){var t=e.data,r=e.data&&e.data.attachments;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:r&&r.addResults?r.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:r&&r.updateResults?r.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:r&&r.deleteResults?r.deleteResults.map(this._createFeatureEditResult,this):[]}},t.prototype._createFeatureEditResult=function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new o("feature-layer-source:edit-failure",t.description,{code:t.code}):null}},t.prototype._createAttachmentErrorResult=function(e,t){return{objectId:e,globalId:null,error:new o("feature-layer-source:attachment-failure",t.details.messages&&t.details.messages[0]||t.message,{code:t.details.httpStatus||t.details.messageCode})}},t.prototype._getFormDataForAttachment=function(e,t){var r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(var a in t){var n=t[a];null!=n&&(r.set?r.set(a,n):r.append(a,n))}return r},a([h.property()],t.prototype,"type",void 0),a([h.property({constructOnly:!0})],t.prototype,"layer",void 0),a([h.property({readOnly:!0,dependsOn:["layer.parsedUrl","layer.gdbVersion","layer.dynamicDataSource"]})],t.prototype,"queryTask",null),a([h.subclass("esri.layers.graphics.sources.FeatureLayerSource")],t)}(h.declared(l));t.default=b}).apply(null,a))||(e.exports=n)},Jvs9:function(e,t,r){var a,n;a=[r.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]),this.lengths=e,this.coords=t}}).apply(null,a))||(e.exports=n)},xJgq:function(e,t,r){var a,n;a=[r.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1}}).apply(null,a))||(e.exports=n)}}]);