!function(){function e(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,a)}function t(t){return function(){var r=this,n=arguments;return new Promise(function(a,o){var i=t.apply(r,n);function s(t){e(i,a,o,s,c,"next",t)}function c(t){e(i,a,o,s,c,"throw",t)}s(void 0)})}}function r(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw i}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(n){var a=Object.getOwnPropertyDescriptor(n,t);return a.get?a.get.call(r):a.value}})(e,t,r||e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var a=f(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{"0yFX":function(e,n,a){"use strict";a.r(n);var i=a("pO5D"),p=(a("wSAH"),a("srIe")),y=a("6S2I"),b=(a("zqDF"),a("TDcG")),h=a("WbKI"),v=a("r88o"),O=a("04ZG"),j=a("zlDU"),g=a("4EHJ"),m=(a("ju1D"),a("9AIY"),a("9MzC")),w=a("wdpY"),I=a("SFah"),k=a("Lqtk"),L=a("pqNC"),S=a("5pQd"),x=a("N5XI"),F=a("IvSi"),P=a("uRH/"),_=(a("ZnuT"),a("tCO6"),a("2gBT"),a("JhoD"),a("tI3Y"),a("R4xK"),a("/1dM"),a("XNvV")),T=(a("+Xal"),a("gLc9")),D=a("PVlI"),E=a("DbUH"),R=a("WmKv"),A=a("7MGP"),U=a("wkZP"),q=a("kbDD"),C=a("L+uT"),N=a("EOvV"),Q=a("AMWc"),G=a("YOx9"),M=a("9Ruv"),V=a("xk++"),K=a("fqtG"),W=a("XTTP"),z=a("lq5k"),J=a("mYC1"),Y=function(e){u(r,e);var t=d(r);function r(){var e;return l(this,r),(e=t.apply(this,arguments)).name=null,e.field=null,e.currentRangeExtent=null,e.fullRangeExtent=null,e.type="rangeInfo",e}return r}(a("ag7Y").a);Object(i.a)([Object(h.b)({type:String,json:{read:!0,write:!0}})],Y.prototype,"name",void 0),Object(i.a)([Object(h.b)({type:String,json:{read:!0,write:!0}})],Y.prototype,"field",void 0),Object(i.a)([Object(h.b)({type:[Number],json:{read:!0,write:!0}})],Y.prototype,"currentRangeExtent",void 0),Object(i.a)([Object(h.b)({type:[Number],json:{read:!0,write:!0}})],Y.prototype,"fullRangeExtent",void 0),Object(i.a)([Object(h.b)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],Y.prototype,"type",void 0);var Z=Y=Object(i.a)([Object(O.a)("esri.layers.support.RangeInfo")],Y),X=["3DObject","Point"],B=y.a.getLogger("esri.layers.SceneLayer"),H=Object(C.a)(),$=function(e){u(P,e);var n,i,y,h,v,O,I,L,S,F=d(P);function P(){var e;l(this,P);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=F.call.apply(F,[this].concat(r))).featureReduction=null,e.rangeInfos=null,e.operationalLayerType="ArcGISSceneServiceLayer",e.type="scene",e.fields=null,e.floorInfo=null,e.outFields=null,e.nodePages=null,e.materialDefinitions=null,e.textureSetDefinitions=null,e.geometryDefinitions=null,e.serviceUpdateTimeStamp=null,e.definitionExpression=null,e.path=null,e.labelsVisible=!0,e.labelingInfo=null,e.legendEnabled=!0,e.cachedDrawingInfo={color:!1},e.editingEnabled=!0,e.popupEnabled=!0,e.popupTemplate=null,e.objectIdField=null,e.globalIdField=null,e._fieldUsageInfo={},e.screenSizePerspectiveEnabled=!0,e}return n=P,(i=[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?o({url:e},t):e}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e){var t=this.getField(e);return t&&t.domain?t.domain:null}},{key:"fieldsIndex",get:function(){return new T.a(this.fields)}},{key:"readNodePages",value:function(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:W.c.fromJSON(e,r)}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}},{key:"geometryType",get:function(){return te[this.profile]||"mesh"}},{key:"renderer",set:function(e){Object(w.j)(e,this.fields),this._set("renderer",e)}},{key:"readCachedDrawingInfo",value:function(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}},{key:"capabilities",get:function(){var e=Object(p.k)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:K.a,t=e.query,r=e.editing,n=r.supportsGlobalId,a=r.supportsRollbackOnFailure,o=r.supportsUploadWithItemId,i=e.data,s=i.supportsZ,c=i.supportsM,l=i.isVersioned,u=e.operations,d=u.supportsEditing,y=u.supportsUpdate,f=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:n,supportsRollbackOnFailure:a,supportsGeometryUpdate:!1,supportsUploadWithItemId:o},data:{supportsZ:s,supportsM:c,isVersioned:l},operations:{supportsEditing:d&&f,supportsAdd:!1,supportsDelete:!1,supportsUpdate:y&&f}}}},{key:"defaultPopupTemplate",get:function(){return Object(p.k)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"readObjectIdField",value:function(e,t){return!e&&t.fields&&t.fields.some(function(t){return"esriFieldTypeOID"===t.type&&(e=t.name),!!e}),e||void 0}},{key:"readGlobalIdField",value:function(e,t){return!e&&t.fields&&t.fields.some(function(t){return"esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e}),e||void 0}},{key:"displayField",get:function(){return Object(p.k)(this.associatedLayer)?this.associatedLayer.displayField:null}},{key:"readProfile",value:function(e,t){var r=t.store.profile;return null!=r&&ee[r]?ee[r]:(B.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}},{key:"load",value:function(e){var t=this,r=Object(p.k)(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(m.t).then(function(){return t._fetchService(r)}).then(function(){return Promise.all([t._fetchIndexAndUpdateExtent(t.nodePages,r),t._setAssociatedFeatureLayer(r)])}).then(function(){return t._validateElevationInfo()}).then(function(){return t._applyAssociatedLayerOverrides()}).then(function(){return t._populateFieldUsageInfo()}).then(function(){return Object(G.a)(t,{origin:"service"},r)}).then(function(){return Object(w.j)(t.renderer,t.fields)});return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"createQuery",value:function(){var e=new V.a;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}},{key:"queryExtent",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then(function(n){return n.queryExtent(e||r.createQuery(),t)})}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then(function(n){return n.queryFeatureCount(e||r.createQuery(),t)})}},{key:"queryFeatures",value:function(e,t){var n=this;return this._getAssociatedLayerForQuery().then(function(r){return r.queryFeatures(e||n.createQuery(),t)}).then(function(e){if(e&&e.features){var t,a=r(e.features);try{for(a.s();!(t=a.n()).done;){var o=t.value;o.layer=n,o.sourceLayer=n}}catch(i){a.e(i)}finally{a.f()}}return e})}},{key:"queryObjectIds",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then(function(n){return n.queryObjectIds(e||r.createQuery(),t)})}},{key:"getFieldUsageInfo",value:function(e){var t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(B.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}},{key:"createPopupTemplate",value:function(e){return Object(M.a)(this,e)}},{key:"_getAssociatedLayerForQuery",value:function(){var e=this.associatedLayer;return Object(p.k)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}},{key:"_loadAssociatedLayerForQuery",value:(S=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(!Object(p.j)(this.associatedLayer)){e.next=4;break}throw new j.a("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});case 4:return e.prev=4,e.next=7,this.associatedLayer.load();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new j.a("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e.t0});case 12:return e.abrupt("return",this.associatedLayer);case 13:case"end":return e.stop()}},e,this,[[4,9]])})),function(){return S.apply(this,arguments)})},{key:"hasCachedStatistics",value:function(e){return null!=this.statisticsInfo&&this.statisticsInfo.some(function(t){return t.name===e})}},{key:"queryCachedStatistics",value:(L=t(regeneratorRuntime.mark(function e(t,n){var a,o,i,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(n);case 2:if(this.statisticsInfo){e.next=4;break}throw new j.a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");case 4:if(a=this.fieldsIndex.get(t)){e.next=7;break}throw new j.a("scenelayer:field-unexisting","Field '".concat(t,"' does not exist on the layer"));case 7:o=r(this.statisticsInfo),e.prev=8,o.s();case 10:if((i=o.n()).done){e.next=17;break}if((s=i.value).name!==a.name){e.next=15;break}return c=Object(g.y)(this.parsedUrl.path,s.href),e.abrupt("return",Object(k.default)(c,{query:{f:"json"},responseType:"json",signal:n?n.signal:null}).then(function(e){return e.data}));case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),o.e(e.t0);case 22:return e.prev=22,o.f(),e.finish(22);case 25:throw new j.a("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available");case 26:case"end":return e.stop()}},e,this,[[8,19,22,25]])})),function(e,t){return L.apply(this,arguments)})},{key:"saveAs",value:(I=t(regeneratorRuntime.mark(function e(t,r){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(1,o(o({},r),{},{getTypeKeywords:function(){return n._getTypeKeywords()},portalItemLayerType:"scene"}),t));case 1:case"end":return e.stop()}},e,this)})),function(e,t){return I.apply(this,arguments)})},{key:"save",value:(O=t(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(0,{getTypeKeywords:function(){return t._getTypeKeywords()},portalItemLayerType:"scene"}));case 1:case"end":return e.stop()}},e,this)})),function(){return O.apply(this,arguments)})},{key:"applyEdits",value:(v=t(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(28).then(a.bind(null,"CJn3"));case 2:return n=e.sent,e.next=5,this.load();case 5:if(!Object(p.j)(this.associatedLayer)){e.next=7;break}throw new j.a("".concat(this.type,"-layer:not-editable"),"Service is not editable");case 7:return e.next=9,this.associatedLayer.load();case 9:return e.abrupt("return",n.applyEdits(this,this.associatedLayer.source,t,r));case 10:case"end":return e.stop()}},e,this)})),function(e,t){return v.apply(this,arguments)})},{key:"on",value:function(e,t){return c(f(P.prototype),"on",this).call(this,e,t)}},{key:"validateLayer",value:function(e){if(e.layerType&&-1===X.indexOf(e.layerType))throw new j.a("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new j.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new j.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});!function(e,t){var r=!1,n=!1;if(null==e)r=!0,n=!0;else{var a=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,n=a;break;case"vertex-reference-frame":r=!0,n=!a;break;default:r=!1}}if(!r)throw new j.a("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!n)throw new j.a("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}},{key:"_getTypeKeywords",value:function(){var e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new j.a("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}},{key:"_populateFieldUsageInfo",value:function(){var e=this;if(this._fieldUsageInfo={},this.fields){var t,n=r(this.fields);try{var a=function(){var r=t.value,n=!(!e.attributeStorageInfo||!e.attributeStorageInfo.some(function(e){return e.name===r.name})),a=!!(Object(p.k)(e.associatedLayer)&&e.associatedLayer.fields&&e.associatedLayer.fields.some(function(e){return e&&r.name===e.name}));e._fieldUsageInfo[r.name]={supportsLabelingInfo:n,supportsRenderer:n,supportsPopupTemplate:n||a,supportsLayerQuery:a}};for(n.s();!(t=n.n()).done;)a()}catch(o){n.e(o)}finally{n.f()}}}},{key:"_applyAssociatedLayerOverrides",value:function(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}},{key:"_applyAssociatedLayerFieldsOverrides",value:function(){if(!Object(p.j)(this.associatedLayer)&&this.associatedLayer.fields){var e,t=null,n=r(this.associatedLayer.fields);try{for(n.s();!(e=n.n()).done;){var a=e.value,o=this.getField(a.name);o?(!o.domain&&a.domain&&(o.domain=a.domain.clone()),o.editable=a.editable,o.nullable=a.nullable,o.length=a.length):(t||(t=this.fields?this.fields.slice():[]),t.push(a.clone()))}}catch(i){n.e(i)}finally{n.f()}t&&this._set("fields",t)}}},{key:"_applyAssociatedLayerPopupOverrides",value:function(){if(!Object(p.j)(this.associatedLayer))for(var e=["popupTemplate","popupEnabled"],t=Object(b.a)(this),r=0;r<e.length;r++){var n=e[r];this._buddyIsMoreImportant(n)&&(t.setDefaultOrigin(this.associatedLayer.originOf(n)),t.set(n,this.associatedLayer[n]),t.setDefaultOrigin("user"))}}},{key:"_setAssociatedFeatureLayer",value:(h=t(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==["mesh-pyramids","points"].indexOf(this.profile)){e.next=2;break}return e.abrupt("return");case 2:return r=new J.a(this.parsedUrl,this.portalItem,t),e.prev=3,e.next=6,r.fetch();case 6:this.associatedLayer=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),Object(m.m)(e.t0)||this._logWarningOnPopupEnabled();case 12:case"end":return e.stop()}},e,this,[[3,9]])})),function(e){return h.apply(this,arguments)})},{key:"_logWarningOnPopupEnabled",value:function(){var e=this;Object(x.whenValidOnce)(this,["popupTemplate","popupEnabled"],function(){return e.popupEnabled&&null!=e.popupTemplate}).then(function(){return function(){var t="this SceneLayer: ".concat(e.title);null==e.attributeStorageInfo?B.warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ".concat(t)):B.info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ".concat(t))}})}},{key:"_buddyIsMoreImportant",value:function(e){if(Object(p.j)(this.associatedLayer))return!1;var t=this.originIdOf(e),r=this.associatedLayer.originIdOf(e);return null!=r&&r<=2?null==t||t<2:null!=r&&r<=3&&(null==t||t<3)}},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&B.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&B.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}}])&&s(n.prototype,i),y&&s(n,y),P}(Object(z.a)(Object(D.a)(Object(P.a)(Object(E.a)(Object(R.a)(Object(S.a)(L.a)))))));Object(i.a)([Object(h.b)({types:{key:"type",base:A.a,typeMap:{selection:q.a}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],$.prototype,"featureReduction",void 0),Object(i.a)([Object(h.b)({type:[Z],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],$.prototype,"rangeInfos",void 0),Object(i.a)([Object(h.b)({json:{read:!1}})],$.prototype,"associatedLayer",void 0),Object(i.a)([Object(h.b)({type:["show","hide"]})],$.prototype,"listMode",void 0),Object(i.a)([Object(h.b)({type:["ArcGISSceneServiceLayer"]})],$.prototype,"operationalLayerType",void 0),Object(i.a)([Object(h.b)({json:{read:!1},readOnly:!0})],$.prototype,"type",void 0),Object(i.a)([Object(h.b)(o(o({},H.fields),{},{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],$.prototype,"fields",void 0),Object(i.a)([Object(h.b)({readOnly:!0})],$.prototype,"fieldsIndex",null),Object(i.a)([Object(h.b)({type:Q.a,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],$.prototype,"floorInfo",void 0),Object(i.a)([Object(h.b)(H.outFields)],$.prototype,"outFields",void 0),Object(i.a)([Object(h.b)({type:W.c,readOnly:!0,json:{read:!1}})],$.prototype,"nodePages",void 0),Object(i.a)([Object(v.a)("service","nodePages",["nodePages","pointNodePages"])],$.prototype,"readNodePages",null),Object(i.a)([Object(h.b)({type:[W.b],readOnly:!0})],$.prototype,"materialDefinitions",void 0),Object(i.a)([Object(h.b)({type:[W.d],readOnly:!0})],$.prototype,"textureSetDefinitions",void 0),Object(i.a)([Object(h.b)({type:[W.a],readOnly:!0})],$.prototype,"geometryDefinitions",void 0),Object(i.a)([Object(h.b)({readOnly:!0})],$.prototype,"serviceUpdateTimeStamp",void 0),Object(i.a)([Object(h.b)({readOnly:!0})],$.prototype,"attributeStorageInfo",void 0),Object(i.a)([Object(h.b)({readOnly:!0})],$.prototype,"statisticsInfo",void 0),Object(i.a)([Object(h.b)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:!0}})],$.prototype,"definitionExpression",void 0),Object(i.a)([Object(h.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],$.prototype,"path",void 0),Object(i.a)([Object(h.b)(F.b)],$.prototype,"elevationInfo",null),Object(i.a)([Object(h.b)({type:String})],$.prototype,"geometryType",null),Object(i.a)([Object(h.b)(F.d)],$.prototype,"labelsVisible",void 0),Object(i.a)([Object(h.b)({type:[U.a],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:N.a},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:N.a},write:!0}})],$.prototype,"labelingInfo",void 0),Object(i.a)([Object(h.b)(F.e)],$.prototype,"legendEnabled",void 0),Object(i.a)([Object(h.b)(F.i)],$.prototype,"opacity",void 0),Object(i.a)([Object(h.b)({types:_.b,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],$.prototype,"renderer",null),Object(i.a)([Object(h.b)({json:{read:!1}})],$.prototype,"cachedDrawingInfo",void 0),Object(i.a)([Object(v.a)("service","cachedDrawingInfo")],$.prototype,"readCachedDrawingInfo",null),Object(i.a)([Object(h.b)({readOnly:!0,json:{read:!1}})],$.prototype,"capabilities",null),Object(i.a)([Object(h.b)({type:Boolean,json:{read:!1}})],$.prototype,"editingEnabled",void 0),Object(i.a)([Object(h.b)(F.j)],$.prototype,"popupEnabled",void 0),Object(i.a)([Object(h.b)({type:I.a,json:{name:"popupInfo",write:!0}})],$.prototype,"popupTemplate",void 0),Object(i.a)([Object(h.b)({readOnly:!0,json:{read:!1}})],$.prototype,"defaultPopupTemplate",null),Object(i.a)([Object(h.b)({type:String,json:{read:!1}})],$.prototype,"objectIdField",void 0),Object(i.a)([Object(v.a)("service","objectIdField",["objectIdField","fields"])],$.prototype,"readObjectIdField",null),Object(i.a)([Object(h.b)({type:String,json:{read:!1}})],$.prototype,"globalIdField",void 0),Object(i.a)([Object(v.a)("service","globalIdField",["globalIdField","fields"])],$.prototype,"readGlobalIdField",null),Object(i.a)([Object(h.b)({readOnly:!0,type:String,json:{read:!1}})],$.prototype,"displayField",null),Object(i.a)([Object(h.b)({type:String,json:{read:!1}})],$.prototype,"profile",void 0),Object(i.a)([Object(v.a)("service","profile",["store.profile"])],$.prototype,"readProfile",null),Object(i.a)([Object(h.b)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],$.prototype,"normalReferenceFrame",void 0),Object(i.a)([Object(h.b)(F.m)],$.prototype,"screenSizePerspectiveEnabled",void 0),$=Object(i.a)([Object(O.a)("esri.layers.SceneLayer")],$);var ee={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},te={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};n.default=$}}])}();