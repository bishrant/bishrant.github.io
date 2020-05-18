(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/graphics/editingSupport":"OVIK"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{OVIK:function(e,t,a){var r,d;r=[a.dj.c(e.i),t,a("Q2wQ"),a("HZ3d"),a("2Atf"),a("jZlN"),a("y4WC"),a("ma1f"),a("rg9i"),a("qMld"),a("jfWY"),a("fw2w")],void 0===(d=(function(e,t,a,r,d,i,n,s,l,u,o,p){function c(e,t,d){return r(this,void 0,void 0,(function(){var r,i;return a(this,(function(a){switch(a.label){case 0:return[4,e.load()];case 1:if(a.sent(),!function(e){return e&&null!=e.applyEdits}(r=e.source))return[2,u.reject(new s(e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}))];if(!e.editingEnabled)throw new s(e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e});return[4,h(e,t,d)];case 2:return(i=a.sent()).addFeatures.length||i.updateFeatures.length||i.deleteFeatures.length||i.addAttachments.length||i.updateAttachments.length||i.deleteAttachments.length?[2,r.applyEdits(i,d)]:[2,{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}]}}))}))}function h(e,t,i){return r(this,void 0,void 0,(function(){var r,l,u,o;return a(this,(function(a){if(r=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),!t||!r&&!l)throw new s(e.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&i&&i.gdbVersion)throw new s(e.type+"-layer:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&i&&i.rollbackOnFailureEnabled)throw new s(e.type+"-layer:invalid-parameter","This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&i&&i.globalIdUsed)throw new s(e.type+"-layer:invalid-parameter","This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&l)throw new s(e.type+"-layer:invalid-parameter","'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!i||!i.globalIdUsed)&&l)throw new s(e.type+"-layer:invalid-parameter","When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");return(u=d({},t)).addFeatures=n.isCollection(u.addFeatures)?u.addFeatures.toArray():u.addFeatures||[],u.updateFeatures=n.isCollection(u.updateFeatures)?u.updateFeatures.toArray():u.updateFeatures||[],u.deleteFeatures=n.isCollection(u.deleteFeatures)?u.deleteFeatures.toArray():u.deleteFeatures||[],u.addAttachments=u.addAttachments||[],u.updateAttachments=u.updateAttachments||[],u.deleteAttachments=u.deleteAttachments||[],u.addFeatures=u.addFeatures.map(y),u.updateFeatures=u.updateFeatures.map(y),o=i&&i.globalIdUsed,u.addFeatures.forEach((function(t){return m(t,e,o)})),u.updateFeatures.forEach((function(t){return m(t,e,o)})),u.deleteFeatures.forEach((function(t){return m(t,e,o)})),u.addAttachments.forEach((function(t){return f(t,e)})),u.updateAttachments.forEach((function(t){return f(t,e)})),[2,b(u)]}))}))}function m(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s(t.type+"-layer:invalid-parameter","Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new s(t.type+"-layer:invalid-parameter","'globalId' of the feature should be passed when 'globalIdUsed' is true")}}function f(e,t){var a=e.feature,r=e.attachment;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new s(t.type+"-layer:invalid-parameter","Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new s(t.type+"-layer:invalid-parameter","Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new s(t.type+"-layer:invalid-parameter","Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new s(t.type+"-layer:invalid-parameter","Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new s(t.type+"-layer:invalid-parameter","'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new s(t.type+"-layer:invalid-parameter","This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){var d=o.dataComponents(r.data);if(d&&!d.isBase64)throw new s(t.type+"-layer:invalid-parameter","Attachment 'data' should be a Blob, File or Base64 encoded string")}}function b(e){return r(this,void 0,void 0,(function(){var t,r,d,i,n,s;return a(this,(function(a){switch(a.label){case 0:return d=(t=e.addFeatures).concat(r=e.updateFeatures).map((function(e){return e.geometry})),[4,p.normalizeCentralMeridian(d)];case 1:return i=a.sent(),s=r.length,i.slice(0,n=t.length).forEach((function(t,a){e.addFeatures[a].geometry=t})),i.slice(n,n+s).forEach((function(t,a){e.updateFeatures[a].geometry=t})),[2,e]}}))}))}function y(e){var t=new i;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}Object.defineProperty(t,"__esModule",{value:!0}),t.isEditableLayer=function(e){return!0===e.get("capabilities.operations.supportsEditing")},t.applyEdits=function(e,t,d){return r(this,void 0,void 0,(function(){var r,i,n,s,o,p,h;return a(this,(function(a){switch(a.label){case 0:n={edits:t,result:u.create((function(e,t){r=e,i=t}))},e.emit("apply-edits",n),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,c(e,t,d)];case 2:return s=a.sent(),((p={addedFeatures:(o=function(e){return e.filter((function(e){return!e.error})).map(l.clone)})(s.addFeatureResults),updatedFeatures:o(s.updateFeatureResults),deletedFeatures:o(s.deleteFeatureResults),addedAttachments:o(s.addAttachmentResults),updatedAttachments:o(s.updateAttachmentResults),deletedAttachments:o(s.deleteAttachmentResults)}).addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&e.emit("edits",p),r(p),[2,s];case 3:throw h=a.sent(),i(h),h;case 4:return[2]}}))}))}}).apply(null,r))||(e.exports=d)}}]);