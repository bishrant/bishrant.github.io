(function(){var e={"arcgis-js-api/layers/graphics/editingSupport":"OVIK"},t=this||window,a=t.webpackJsonp=t.webpackJsonp||[];a.registerAbsMids?a.registerAbsMids(e):(a.absMidsWaiting=a.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{OVIK:function(e,t,a){var r,i;r=[a.dj.c(e.i),t,a("zOht"),a("jZlN"),a("y4WC"),a("ma1f"),a("rg9i"),a("LxLY"),a("qMld"),a("jfWY"),a("fw2w")],void 0===(i=(function(e,t,a,r,i,s,d,n,l,u,o){"use strict";function p(e,t,r){return a.__awaiter(this,void 0,void 0,(function(){var i,d;return a.__generator(this,(function(a){switch(a.label){case 0:return[4,e.load()];case 1:if(a.sent(),!function(e){return e&&null!=e.applyEdits}(i=e.source))return[2,l.reject(new s(e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}))];if(!e.editingEnabled)throw new s(e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e});return[4,c(e,t,r)];case 2:return(d=a.sent()).addFeatures.length||d.updateFeatures.length||d.deleteFeatures.length||d.addAttachments.length||d.updateAttachments.length||d.deleteAttachments.length?[2,i.applyEdits(d,r)]:[2,{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}]}}))}))}function c(e,t,r){return a.__awaiter(this,void 0,void 0,(function(){var d,n,l,u;return a.__generator(this,(function(o){if(d=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),n=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),!t||!d&&!n)throw new s(e.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&r&&r.gdbVersion)throw new s(e.type+"-layer:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&r&&r.rollbackOnFailureEnabled)throw new s(e.type+"-layer:invalid-parameter","This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&r&&r.globalIdUsed)throw new s(e.type+"-layer:invalid-parameter","This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&n)throw new s(e.type+"-layer:invalid-parameter","'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!r||!r.globalIdUsed)&&n)throw new s(e.type+"-layer:invalid-parameter","When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");return(l=a.__assign({},t)).addFeatures=t&&i.isCollection(t.addFeatures)?t.addFeatures.toArray():l.addFeatures||[],l.updateFeatures=t&&i.isCollection(t.updateFeatures)?t.updateFeatures.toArray():l.updateFeatures||[],l.deleteFeatures=t&&i.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():l.deleteFeatures||[],l.addAttachments=l.addAttachments||[],l.updateAttachments=l.updateAttachments||[],l.deleteAttachments=l.deleteAttachments||[],l.addFeatures=l.addFeatures.map(b),l.updateFeatures=l.updateFeatures.map(b),u=r&&r.globalIdUsed,l.addFeatures.forEach((function(t){return h(t,e,u)})),l.updateFeatures.forEach((function(t){return h(t,e,u)})),l.deleteFeatures.forEach((function(t){return h(t,e,u)})),l.addAttachments.forEach((function(t){return m(t,e)})),l.updateAttachments.forEach((function(t){return m(t,e)})),[2,f(l)]}))}))}function h(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s(t.type+"-layer:invalid-parameter","Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new s(t.type+"-layer:invalid-parameter","'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&n.isSome(e.geometry)&&e.geometry.hasZ&&n.isSome(t.capabilities.data.supportsZ)&&!1===t.capabilities.data.supportsZ)throw new s(t.type+"-layer:z-unsupported","Service does not support z values while feature has z values.")}function m(e,t){var a=e.feature,r=e.attachment;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new s(t.type+"-layer:invalid-parameter","Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new s(t.type+"-layer:invalid-parameter","Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new s(t.type+"-layer:invalid-parameter","Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new s(t.type+"-layer:invalid-parameter","Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new s(t.type+"-layer:invalid-parameter","'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new s(t.type+"-layer:invalid-parameter","This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){var i=u.dataComponents(r.data);if(i&&!i.isBase64)throw new s(t.type+"-layer:invalid-parameter","Attachment 'data' should be a Blob, File or Base64 encoded string")}}function f(e){return a.__awaiter(this,void 0,void 0,(function(){var t,r,i,s,d,n;return a.__generator(this,(function(a){switch(a.label){case 0:return i=(t=e.addFeatures).concat(r=e.updateFeatures).map((function(e){return e.geometry})),[4,o.normalizeCentralMeridian(i)];case 1:return s=a.sent(),n=r.length,s.slice(0,d=t.length).forEach((function(t,a){e.addFeatures[a].geometry=t})),s.slice(d,d+n).forEach((function(t,a){e.updateFeatures[a].geometry=t})),[2,e]}}))}))}function b(e){var t=new r;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}Object.defineProperty(t,"__esModule",{value:!0}),t.applyEdits=t.isEditableLayer=void 0,t.isEditableLayer=function(e){return!0===e.get("capabilities.operations.supportsEditing")},t.applyEdits=function(e,t,r){return a.__awaiter(this,void 0,void 0,(function(){var i,s,n,u,o,c,h;return a.__generator(this,(function(a){switch(a.label){case 0:n={edits:t,result:l.create((function(e,t){i=e,s=t}))},e.emit("apply-edits",n),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,p(e,t,r)];case 2:return u=a.sent(),((c={addedFeatures:(o=function(e){return e.filter((function(e){return!e.error})).map(d.clone)})(u.addFeatureResults),updatedFeatures:o(u.updateFeatureResults),deletedFeatures:o(u.deleteFeatureResults),addedAttachments:o(u.addAttachmentResults),updatedAttachments:o(u.updateAttachmentResults),deletedAttachments:o(u.deleteAttachmentResults)}).addedFeatures.length||c.updatedFeatures.length||c.deletedFeatures.length||c.addedAttachments.length||c.updatedAttachments.length||c.deletedAttachments.length)&&e.emit("edits",c),i(c),[2,u];case 3:throw h=a.sent(),s(h),h;case 4:return[2]}}))}))}}).apply(null,r))||(e.exports=i)}}]);