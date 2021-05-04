!function(){function e(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,u=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw u}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function u(e,t,r,n,o,i,u){try{var a=e[i](u),s=a.value}catch(c){return void r(c)}a.done?t(s):Promise.resolve(s).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){u(i,n,o,a,s,"next",e)}function s(e){u(i,n,o,a,s,"throw",e)}a(void 0)})}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{Kn0e:function(t,r,o){"use strict";o.r(r);var u=o("pO5D"),c=o("wSAH"),f=(o("6S2I"),o("zqDF"),o("WbKI")),y=o("r88o"),h=o("04ZG"),O=(o("4EHJ"),o("ju1D"),o("9AIY"),o("/PL2")),v=o("WZb1"),j=(o("4GrV"),o("xk++")),g=o("W9Wu"),m=o("qUyK"),w=o("srIe"),S=o("OvF4"),k=o("bV/r"),F=o("36Co"),I=o("8prj"),R=function(e){p(n,e);var t,r=d(n);function n(e){var t;return s(this,n),(t=r.call(this,e)).type="csv",t}return l(n,[{key:"load",value:function(e){var t=Object(w.k)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}},{key:"destroy",value:function(){var e;null==(e=this._connection)||e.close(),this._connection=null}},{key:"openPorts",value:function(){var e=this;return this.load().then(function(){return e._connection.openPorts()})}},{key:"queryFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then(function(){return t._connection.invoke("queryFeatures",e?e.toJSON():null,r)}).then(function(e){return I.default.fromJSON(e)})}},{key:"queryFeaturesJSON",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then(function(){return t._connection.invoke("queryFeatures",e?e.toJSON():null,r)})}},{key:"queryFeatureCount",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then(function(){return t._connection.invoke("queryFeatureCount",e?e.toJSON():null,r)})}},{key:"queryObjectIds",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then(function(){return t._connection.invoke("queryObjectIds",e?e.toJSON():null,r)})}},{key:"queryExtent",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then(function(){return t._connection.invoke("queryExtent",e?e.toJSON():null,r)}).then(function(e){return{count:e.count,extent:S.a.fromJSON(e.extent)}})}},{key:"querySnapping",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then(function(){return t._connection.invoke("querySnapping",e,r)})}},{key:"_startWorker",value:(t=a(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.b)("CSVSourceWorker",{strategy:Object(c.a)("feature-layers-workers")?"dedicated":"local",signal:t});case 2:return this._connection=e.sent,e.next=5,this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map(function(e){return e.toJSON()}),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:t});case 5:r=e.sent,this.locationInfo=r.locationInfo,this.sourceJSON=r.layerDefinition,this.columnDelimiter=r.columnDelimiter;case 7:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),n}(k.a);Object(u.a)([Object(f.b)()],R.prototype,"type",void 0),Object(u.a)([Object(f.b)()],R.prototype,"url",void 0),Object(u.a)([Object(f.b)()],R.prototype,"delimiter",void 0),Object(u.a)([Object(f.b)()],R.prototype,"fields",void 0),Object(u.a)([Object(f.b)()],R.prototype,"latitudeField",void 0),Object(u.a)([Object(f.b)()],R.prototype,"longitudeField",void 0),Object(u.a)([Object(f.b)()],R.prototype,"spatialReference",void 0),Object(u.a)([Object(f.b)()],R.prototype,"timeInfo",void 0),Object(u.a)([Object(f.b)()],R.prototype,"locationInfo",void 0),Object(u.a)([Object(f.b)()],R.prototype,"sourceJSON",void 0),Object(u.a)([Object(f.b)()],R.prototype,"columnDelimiter",void 0);var q=R=Object(u.a)([Object(h.a)("esri.layers.graphics.sources.CSVSource")],R),D=function(t){p(u,t);var r,o=d(u);function u(){var e;s(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=o.call.apply(o,[this].concat(r))).delimiter=null,e.editingEnabled=!1,e.fields=null,e.latitudeField=null,e.locationType="coordinates",e.longitudeField=null,e.operationalLayerType="CSV",e.outFields=["*"],e.path=null,e.portalItem=null,e.spatialReference=v.a.WGS84,e.source=null,e.type="csv",e}return l(u,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?n({url:e},t):e}},{key:"capabilities",get:function(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:m.a,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"readWebMapLabelsVisible",value:function(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}},{key:"url",set:function(e){this._set("url",e)}},{key:"createGraphicsSource",value:(r=a(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new q({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url}),this._set("source",r),e.next=4,r.load({signal:t});case 4:return this.read({locationInfo:r.locationInfo,columnDelimiter:r.columnDelimiter},{origin:"service",url:this.parsedUrl}),e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"queryFeatures",value:function(t,r){var n=this;return this.load().then(function(){return n.source.queryFeatures(j.a.from(t)||n.createQuery())}).then(function(t){if(t&&t.features){var r,o=e(t.features);try{for(o.s();!(r=o.n()).done;){var i=r.value;i.layer=i.sourceLayer=n}}catch(u){o.e(u)}finally{o.f()}}return t})}},{key:"queryObjectIds",value:function(e,t){var r=this;return this.load().then(function(){return r.source.queryObjectIds(j.a.from(e)||r.createQuery())})}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this.load().then(function(){return r.source.queryFeatureCount(j.a.from(e)||r.createQuery())})}},{key:"queryExtent",value:function(e,t){var r=this;return this.load().then(function(){return r.source.queryExtent(j.a.from(e)||r.createQuery())})}},{key:"write",value:function(e,t){return i(b(u.prototype),"write",this).call(this,e,n(n({},t),{},{writeLayerSchema:!0}))}},{key:"_verifyFields",value:function(){}},{key:"_verifySource",value:function(){}},{key:"_hasMemorySource",value:function(){return!1}}]),u}(g.default);Object(u.a)([Object(f.b)({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],D.prototype,"capabilities",null),Object(u.a)([Object(f.b)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],D.prototype,"delimiter",void 0),Object(u.a)([Object(f.b)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],D.prototype,"editingEnabled",void 0),Object(u.a)([Object(f.b)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],D.prototype,"fields",void 0),Object(u.a)([Object(f.b)({type:Boolean,readOnly:!0})],D.prototype,"isTable",null),Object(u.a)([Object(y.a)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],D.prototype,"readWebMapLabelsVisible",null),Object(u.a)([Object(f.b)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],D.prototype,"latitudeField",void 0),Object(u.a)([Object(f.b)({type:["show","hide"]})],D.prototype,"listMode",void 0),Object(u.a)([Object(f.b)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],D.prototype,"locationType",void 0),Object(u.a)([Object(f.b)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],D.prototype,"longitudeField",void 0),Object(u.a)([Object(f.b)({type:["CSV"]})],D.prototype,"operationalLayerType",void 0),Object(u.a)([Object(f.b)()],D.prototype,"outFields",void 0),Object(u.a)([Object(f.b)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],D.prototype,"path",void 0),Object(u.a)([Object(f.b)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],D.prototype,"portalItem",void 0),Object(u.a)([Object(f.b)({json:{read:!1},cast:null,type:q,readOnly:!0})],D.prototype,"source",void 0),Object(u.a)([Object(f.b)({json:{read:!1},value:"csv",readOnly:!0})],D.prototype,"type",void 0),Object(u.a)([Object(f.b)({json:{read:O.d,write:{isRequired:!0,ignoreOrigin:!0,writer:O.f}}})],D.prototype,"url",null),D=Object(u.a)([Object(h.a)("esri.layers.CSVLayer")],D),r.default=D},qUyK:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}])}();