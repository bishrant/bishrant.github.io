(function(){var e={"esri/layers/pointCloudFilters/PointCloudReturnFilter":"0pu5","esri/core/accessorSupport/originUtils":"6pk7","esri/webdoc/support/saveUtils":"90QT","esri/renderers/PointCloudRGBRenderer":"9i8I","esri/layers/pointCloudFilters/PointCloudFilter":"Ekk7","esri/layers/mixins/SceneService":"JNpq","esri/layers/pointCloudFilters/PointCloudValueFilter":"Kv3t","esri/layers/pointCloudFilters/PointCloudBitfieldFilter":"TC9W","esri/layers/pointCloudFilters/typeUtils":"iLKN","esri/renderers/support/pointCloud/typeUtils":"nUbB","esri/layers/PointCloudLayer":"wvIq"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"0pu5":function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("rg9i"),r("Vx27"),r("Ekk7")],void 0===(n=(function(e,t,r,o,n,i){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.includedReturns=[],r.type="return",r}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({field:this.field,includedReturns:o.clone(this.includedReturns)})},r.__decorate([n.property({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"includedReturns",void 0),r.__decorate([n.enumeration({pointCloudReturnFilter:"return"})],t.prototype,"type",void 0),i=r.__decorate([n.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],t)}(i)}).apply(null,o))||(e.exports=n)},"6pk7":function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("+dH/")],void 0===(n=(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateOrigins=void 0,t.updateOrigins=function(e){e&&e.writtenProperties&&e.writtenProperties.forEach((function(e){var t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&r.isMultiOriginJSONMixin(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}}).apply(null,o))||(e.exports=n)},"90QT":function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("WYKK"),r("ma1f"),r("qMld"),r("ULaq"),r("V42v"),r("bzQL")],void 0===(n=(function(e,t,r,o,n,i,a,s,l){"use strict";function p(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,o.result(e.resource.portalItem.addResource(e.resource,e.content,t))];case 1:if(!0!==(n=r.sent()).ok)throw e.error&&e.error(n.error),n.error;return e.finish&&e.finish(e.resource),[2]}}))}))}function u(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,o.result(e.resource.update(e.content,t))];case 1:if(!0!==(n=r.sent()).ok)throw e.error(n.error),n.error;return e.finish(e.resource),[2]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.saveResources=void 0,t.saveResources=function(e,t,o){return r.__awaiter(this,void 0,void 0,(function(){var d,c,y,f,h,v,_,m,g,b,w,S,I,x,E,T;return r.__generator(this,(function(r){switch(r.label){case 0:if(!t||!t.resources)return[2];for(d=t.portalItem===e.portalItem?a.SetFromValues(e.paths):new Set,e.paths.length=0,e.portalItem=t.portalItem,c=a.SetFromValues(t.resources.toKeep.map((function(e){return e.resource.path}))),y=new Set,f=[],c.forEach((function(t){d.delete(t),e.paths.push(t)})),h=0,v=t.resources.toUpdate;h<v.length;h++)d.delete((_=v[h]).resource.path),c.has(_.resource.path)||y.has(_.resource.path)?(m=_.content,g=_.finish,b=_.error,w=l.getSiblingOfSameTypeI(_.resource,s.generateUUID()),e.paths.push(w.path),f.push(p({resource:w,content:m,finish:g,error:b},o))):(e.paths.push(_.resource.path),f.push(u(_,o)),y.add(_.resource.path));for(S=0,I=t.resources.toAdd;S<I.length;S++)f.push(p(x=I[S],o)),e.paths.push(x.resource.path);return d.forEach((function(e){var r=t.portalItem.resourceFromPath(e);f.push(r.portalItem.removeResource(r).catch((function(){})))})),0===f.length?[2]:[4,i.eachAlways(f)];case 1:if(E=r.sent(),i.throwIfAborted(o),(T=E.filter((function(e){return"error"in e})).map((function(e){return e.error}))).length>0)throw new n("save:resources","Failed to save one or more resources",{errors:T});return[2]}}))}))}}).apply(null,o))||(e.exports=n)},"9i8I":function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("rg9i"),r("Vx27"),r("YT9w")],void 0===(n=(function(e,t,r,o,n,i){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.type="point-cloud-rgb",r.field=null,r}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i(r.__assign(r.__assign({},this.cloneProperties()),{field:o.clone(this.field)}))},r.__decorate([n.enumeration({pointCloudRGBRenderer:"point-cloud-rgb"})],t.prototype,"type",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),i=r.__decorate([n.subclass("esri.renderers.PointCloudRGBRenderer")],t)}(i)}).apply(null,o))||(e.exports=n)},Ekk7:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,o,n){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.field=null,r.type=null,r}return r.__extends(t,e),t.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},r.__decorate([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),r.__decorate([n.property({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),r.__decorate([n.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],t)}(o.JSONSupport)}).apply(null,o))||(e.exports=n)},JNpq:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("zp6E"),r("ma1f"),r("H1tY"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("6pk7"),r("N7S/"),r("MFVu"),r("Z4y+"),r("8CIp"),r("EtsK"),r("Qwus"),r("QmTF"),r("90QT"),r("2Kdy")],void 0===(n=(function(e,t,o,n,i,a,s,l,p,u,d,c,y,f,h,v,_,m,g){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SCENE_SERVICE_ITEM_TYPE=t.SceneService=void 0;var b=s.getLogger("esri.layers.mixins.SceneService");t.SceneService=function(e){return function(e){function a(){var t=null!==e&&e.apply(this,arguments)||this;return t.spatialReference=null,t.fullExtent=null,t.heightModelInfo=null,t.minScale=0,t.maxScale=0,t.version={major:Number.NaN,minor:Number.NaN,versionString:""},t.copyright=null,t.sublayerTitleMode="item-title",t.title=null,t.layerId=null,t._debouncedSaveOperations=l.debounce((function(e,r,n){return o.__awaiter(t,void 0,void 0,(function(){return o.__generator(this,(function(t){switch(e){case 0:return[2,this._save(r)];case 1:return[2,this._saveAs(n,r)]}return[2]}))}))})),t}return o.__extends(a,e),a.prototype.readSpatialReference=function(e,t){return this._readSpatialReference(t)},a.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return f.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new f(o):null},a.prototype.readFullExtent=function(e,t){var r=t.store,o=this._readSpatialReference(t);return null==o||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some((function(e){return e<w}))?null:new c({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})},a.prototype.readVersion=function(e,t){var r=t.store,o=null!=r.version?r.version.toString():"",n={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return i.length>=2&&(n.major=parseInt(i[0],10),n.minor=parseInt(i[1],10)),n},a.prototype.readTitlePortalItem=function(e){return"item-title"!==this.sublayerTitleMode?void 0:e},a.prototype.readTitleService=function(e,t){var r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return h.titleFromUrlAndName(this.url,t.name);var o=t.name||h.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),h.cleanTitle(o)},Object.defineProperty(a.prototype,"url",{set:function(e){var t=h.sanitizeUrlWithLayerId(this,e,b);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)},enumerable:!1,configurable:!0}),a.prototype.writeUrl=function(e,t,r,o){h.writeUrlWithLayerId(this,e,"layers",t,o)},Object.defineProperty(a.prototype,"parsedUrl",{get:function(){var e=this._get("url");if(!e)return null;var t=p.urlToObject(e);return null!=this.layerId&&h.isArcGISUrl(t.path)&&(t.path=t.path+"/layers/"+this.layerId),t},enumerable:!1,configurable:!0}),a.prototype._verifyRootNodeAndUpdateExtent=function(e,t){return o.__awaiter(this,void 0,void 0,(function(){var r,n,i;return o.__generator(this,(function(o){switch(o.label){case 0:if(!e)return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),r=this._updateExtentFromRootPage,n=[e],[4,this._fetchRootPage(e,t)];case 2:return[2,r.apply(this,n.concat([o.sent()]))];case 3:return o.sent(),[3,4];case 4:return i=this._updateExtentFromRootNode,[4,this._fetchRootNode(t)];case 5:return[2,i.apply(this,[o.sent()])]}}))}))},a.prototype._fetchRootPage=function(e,t){return o.__awaiter(this,void 0,void 0,(function(){var r;return o.__generator(this,(function(o){switch(o.label){case 0:return e?(r=Math.floor(e.rootIndex/e.nodesPerPage),[4,n(this.parsedUrl.path+"/nodepages/"+r,{responseType:"json",signal:t})]):[2,l.reject()];case 1:return[2,o.sent().data]}}))}))},a.prototype._updateExtentFromRootPage=function(e,t){if(null==t||null==t.nodes)throw new i("sceneservice:invalid-node-page","Inavlid node page.");var r=t.nodes[e.rootIndex%e.nodesPerPage];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new i("sceneservice:invalid-node-page","Inavlid node page.");if(!(r.obb.center[0]<w)){var o=r.obb.halfSize,n=r.obb.center[2],a=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=n-a,this.fullExtent.zmax=n+a}},a.prototype._updateExtentFromRootNode=function(e){if(null!=e&&null!=this.fullExtent&&!this.fullExtent.hasZ&&Array.isArray(e.mbs)&&4===e.mbs.length&&!(e.mbs[0]<w)){var t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}},a.prototype._fetchRootNode=function(e){return o.__awaiter(this,void 0,void 0,(function(){var t,r;return o.__generator(this,(function(o){switch(o.label){case 0:if(!this.rootNode)return[2];t=p.join(this.parsedUrl.path,this.rootNode),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,n(t,{query:{f:"json"},responseType:"json",signal:e})];case 2:return[2,o.sent().data];case 3:throw r=o.sent(),new i("sceneservice:root-node-missing","Root node missing.",{error:r,url:t});case 4:return[2]}}))}))},a.prototype._fetchService=function(e){return o.__awaiter(this,void 0,void 0,(function(){var t;return o.__generator(this,(function(r){switch(r.label){case 0:return null==this.layerId&&/SceneServer\/*$/i.test(this.url)?[4,this._fetchFirstLayerId(e)]:[3,2];case 1:null!=(t=r.sent())&&(this.layerId=t),r.label=2;case 2:return[2,this._fetchServiceLayer(e)]}}))}))},a.prototype._fetchFirstLayerId=function(e){return o.__awaiter(this,void 0,void 0,(function(){var t;return o.__generator(this,(function(r){switch(r.label){case 0:return[4,n(this.url,{query:{f:"json"},responseType:"json",signal:e})];case 1:return(t=r.sent()).data&&Array.isArray(t.data.layers)&&t.data.layers.length>0?[2,t.data.layers[0].id]:[2,void 0]}}))}))},a.prototype._fetchServiceLayer=function(e){return o.__awaiter(this,void 0,void 0,(function(){var t,r;return o.__generator(this,(function(o){switch(o.label){case 0:return[4,n(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})];case 1:return(t=o.sent()).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.read(r=t.data,{origin:"service",url:this.parsedUrl}),this.validateLayer(r),[2]}}))}))},a.prototype._ensureLoadBeforeSave=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),"beforeSave"in this&&"function"==typeof this.beforeSave?[4,this.beforeSave()]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}}))}))},a.prototype.validateLayer=function(e){},a.prototype._updateTypeKeywords=function(e,t,r){e.typeKeywords||(e.typeKeywords=[]);for(var o=0,n=t.getTypeKeywords();o<n.length;o++)e.typeKeywords.push(n[o]);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((function(e,t,r){return r.indexOf(e)===t})),1===r&&(e.typeKeywords=e.typeKeywords.filter((function(e){return"Hosted Service"!==e}))))},a.prototype._saveAs=function(e,r){return o.__awaiter(this,void 0,void 0,(function(){var n,a,s,p,u;return o.__generator(this,(function(c){switch(c.label){case 0:return n=o.__assign(o.__assign({},I),r),(a=m.from(e))?[3,2]:(b.error("_saveAs(): requires a portal item parameter"),[4,l.reject(new i("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))]);case 1:c.sent(),c.label=2;case 2:return a.id&&((a=a.clone()).id=null),s=a.portal||_.getDefault(),[4,this._ensureLoadBeforeSave()];case 3:return c.sent(),a.type=t.SCENE_SERVICE_ITEM_TYPE,a.portal=s,u={layers:[this.write(null,p={origin:"portal-item",url:null,messages:[],portal:s,portalItem:a,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}})]},[4,l.all(p.resources.pendingOperations)];case 4:return c.sent(),[4,this._validateAgainstJSONSchema(u,p,n)];case 5:return c.sent(),a.url=this.url,a.title||(a.title=this.title),this._updateTypeKeywords(a,n,1),[4,s._signIn()];case 6:return c.sent(),[4,s.user.addItem({item:a,folder:n&&n.folder,data:u})];case 7:return c.sent(),[4,g.saveResources(this.resourceReferences,p,null)];case 8:return c.sent(),this.portalItem=a,d.updateOrigins(p),p.portalItem=a,[2,a]}}))}))},a.prototype._save=function(e){return o.__awaiter(this,void 0,void 0,(function(){var r,n,a;return o.__generator(this,(function(s){switch(s.label){case 0:return r=o.__assign(o.__assign({},I),e),this.portalItem?[3,2]:(b.error("_save(): requires the .portalItem property to be set"),[4,l.reject(new i("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))]);case 1:s.sent(),s.label=2;case 2:return this.portalItem.type===t.SCENE_SERVICE_ITEM_TYPE?[3,4]:(b.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+t.SCENE_SERVICE_ITEM_TYPE),[4,l.reject(new i("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'+t.SCENE_SERVICE_ITEM_TYPE+'"'))]);case 3:s.sent(),s.label=4;case 4:return[4,this._ensureLoadBeforeSave()];case 5:return s.sent(),n={origin:"portal-item",url:this.portalItem.itemUrl&&p.urlToObject(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||_.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},a={layers:[this.write(null,n)]},[4,l.all(n.resources.pendingOperations)];case 6:return s.sent(),[4,this._validateAgainstJSONSchema(a,n,r)];case 7:return s.sent(),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,r,0),[4,this.portalItem.update({data:a})];case 8:return s.sent(),[4,g.saveResources(this.resourceReferences,n,null)];case 9:return s.sent(),d.updateOrigins(n),[2,this.portalItem]}}))}))},a.prototype._validateAgainstJSONSchema=function(e,t,n){return o.__awaiter(this,void 0,void 0,(function(){var a,s,l,p,u,d;return o.__generator(this,(function(o){switch(o.label){case 0:return a=t.messages.filter((function(e){return"error"===e.type})).map((function(e){return new i(e.name,e.message,e.details)})),n&&n.validationOptions.ignoreUnsupported&&(a=a.filter((function(e){return"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name}))),n.validationOptions.enabled||S?[4,new Promise((function(e,t){r.e(62).then((function(){var t=[r("mv+q")];e.apply(null,t)}).bind(this)).catch(t.bind(this))}))]:[3,2];case 1:if(s=o.sent(),(l=s.validate(e,n.portalItemLayerType)).length>0&&(p="Layer item did not validate:\n"+l.join("\n"),b.error("_validateAgainstJSONSchema(): "+p),"throw"===n.validationOptions.failPolicy))throw u=l.map((function(e){return new i("sceneservice:schema-validation",e)})),d=u.concat(a),new i("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:d});o.label=2;case 2:if(a.length>0)throw new i("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a});return[2]}}))}))},o.__decorate([u.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],a.prototype,"id",void 0),o.__decorate([u.property({type:f})],a.prototype,"spatialReference",void 0),o.__decorate([u.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readSpatialReference",null),o.__decorate([u.property({type:c})],a.prototype,"fullExtent",void 0),o.__decorate([u.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readFullExtent",null),o.__decorate([u.property({readOnly:!0,type:y})],a.prototype,"heightModelInfo",void 0),o.__decorate([u.property({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],a.prototype,"minScale",void 0),o.__decorate([u.property({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],a.prototype,"maxScale",void 0),o.__decorate([u.property({readOnly:!0})],a.prototype,"version",void 0),o.__decorate([u.reader("version",["store.version"])],a.prototype,"readVersion",null),o.__decorate([u.property({type:String,json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),o.__decorate([u.property({type:String,json:{read:!1}})],a.prototype,"sublayerTitleMode",void 0),o.__decorate([u.property({type:String})],a.prototype,"title",void 0),o.__decorate([u.reader("portal-item","title")],a.prototype,"readTitlePortalItem",null),o.__decorate([u.reader("service","title",["name"])],a.prototype,"readTitleService",null),o.__decorate([u.property({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],a.prototype,"layerId",void 0),o.__decorate([u.property(v.url)],a.prototype,"url",null),o.__decorate([u.writer("url")],a.prototype,"writeUrl",null),o.__decorate([u.property({dependsOn:["layerId"]})],a.prototype,"parsedUrl",null),o.__decorate([u.property({readOnly:!0})],a.prototype,"store",void 0),o.__decorate([u.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),o.__decorate([u.subclass("esri.layers.mixins.SceneService")],a)}(e)};var w=-1e38,S=a("esri-debug-messages");t.SCENE_SERVICE_ITEM_TYPE="Scene Service";var I={getTypeKeywords:function(){return[]},portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}}).apply(null,o))||(e.exports=n)},Kv3t:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("rg9i"),r("Vx27"),r("Ekk7")],void 0===(n=(function(e,t,r,o,n,i){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.mode="exclude",r.type="value",r.values=[],r}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({field:this.field,mode:this.mode,values:o.clone(this.values)})},r.__decorate([n.property({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"mode",void 0),r.__decorate([n.enumeration({pointCloudValueFilter:"value"})],t.prototype,"type",void 0),r.__decorate([n.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"values",void 0),i=r.__decorate([n.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],t)}(i)}).apply(null,o))||(e.exports=n)},TC9W:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("rg9i"),r("Vx27"),r("Ekk7")],void 0===(n=(function(e,t,r,o,n,i){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.requiredClearBits=null,r.requiredSetBits=null,r.type="bitfield",r}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({field:this.field,requiredClearBits:o.clone(this.requiredClearBits),requiredSetBits:o.clone(this.requiredSetBits)})},r.__decorate([n.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],t.prototype,"requiredClearBits",void 0),r.__decorate([n.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],t.prototype,"requiredSetBits",void 0),r.__decorate([n.enumeration({pointCloudBitfieldFilter:"bitfield"})],t.prototype,"type",void 0),i=r.__decorate([n.subclass("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],t)}(i)}).apply(null,o))||(e.exports=n)},iLKN:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("TC9W"),r("Ekk7"),r("0pu5"),r("Kv3t")],void 0===(n=(function(e,t,r,o,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.types=void 0,t.types={key:"type",base:o,typeMap:{value:i,bitfield:r,return:n}}}).apply(null,o))||(e.exports=n)},nUbB:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("O0KB"),r("YT9w"),r("9i8I"),r("qasq"),r("mkxQ")],void 0===(n=(function(e,t,r,o,n,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.types=void 0,t.types={key:"type",base:o,typeMap:{"point-cloud-class-breaks":r,"point-cloud-rgb":n,"point-cloud-stretch":i,"point-cloud-unique-value":a},errorContext:"renderer"}}).apply(null,o))||(e.exports=n)},wvIq:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("ifLZ"),r("zp6E"),r("KY0m"),r("ma1f"),r("rg9i"),r("qsST"),r("LxLY"),r("EUqE"),r("TTKK"),r("qMld"),r("jfWY"),r("Vx27"),r("0RER"),r("2fnV"),r("FEX1"),r("QJ8R"),r("OXmT"),r("JNpq"),r("iLKN"),r("EtsK"),r("KQcO"),r("ZJpS"),r("I90O"),r("jX7U"),r("nUbB"),r("begh")],void 0===(n=(function(e,t,r,o,n,i,a,s,l,p,u,d,c,y,f,h,v,_,m,g,b,w,S,I,x,E,T,R,O){"use strict";var P=l.getLogger("esri.layers.PointCloudLayer"),j=x.defineFieldProperties();return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.operationalLayerType="PointCloudLayer",o.popupEnabled=!0,o.popupTemplate=null,o.opacity=1,o.filters=[],o.fields=null,o.outFields=null,o.path=null,o.legendEnabled=!0,o.renderer=null,o.type="point-cloud",o}return r.__extends(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r.__assign({url:e},t):e},Object.defineProperty(t.prototype,"defaultPopupTemplate",{get:function(){return this.attributeStorageInfo?this.createPopupTemplate():null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fieldsIndex",{get:function(){return new E(this.fields)},enumerable:!1,configurable:!0}),t.prototype.getFieldDomain=function(e){var t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null},t.prototype.readServiceFields=function(e,t,r){return Array.isArray(e)?e.map((function(e){var t=new I;return"FieldTypeInteger"===e.type&&((e=s.clone(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((function(e){return new I({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})})):null},Object.defineProperty(t.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!1,configurable:!0}),t.prototype.writeRenderer=function(e,t,r,o){d.setDeepValue("layerDefinition.drawingInfo.renderer",e.write(null,o),t)},t.prototype.load=function(e){var t=this,r=p.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)}));return this.addResolvingPromise(o),c.resolve(this)},t.prototype.createPopupTemplate=function(e){var t=O.createPopupTemplate(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t},t.prototype.formatPopupTemplateReturnsField=function(e){var t=this.fieldsIndex.get("RETURNS");if(t){var o=i.find(e.fieldInfos,(function(e){return e.fieldName===t.name}));if(o){var n=new T({name:"pcl-returns-decoded",title:t.alias||t.name,expression:"\n        var returnValue = $feature."+t.name+';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      '});e.expressionInfos=r.__spreadArrays(e.expressionInfos||[],[n]),o.fieldName="expression/pcl-returns-decoded"}}},t.prototype.formatPopupTemplateRGBField=function(e){var t=this.fieldsIndex.get("RGB");if(t){var o=i.find(e.fieldInfos,(function(e){return e.fieldName===t.name}));if(o){var n=new T({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:"\n        var rgb = $feature."+t.name+';\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      '});e.expressionInfos=r.__spreadArrays(e.expressionInfos||[],[n]),o.fieldName="expression/pcl-rgb-decoded"}}},t.prototype.queryCachedStatistics=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,i,s,l,p;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this.load(t)];case 1:if(r.sent(),!this.attributeStorageInfo)throw new a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");if(!(o=this.fieldsIndex.get(e)))throw new a("pointcloudlayer:field-unexisting","Field '"+e+"' does not exist on the layer");for(i=0,s=this.attributeStorageInfo;i<s.length;i++)if((l=s[i]).name===o.name)return p=y.join(this.parsedUrl.path,"./statistics/"+l.key),[2,n(p,{query:{f:"json"},responseType:"json",signal:t?t.signal:null}).then((function(e){return e.data}))];throw new a("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}}))}))},t.prototype.saveAs=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o=this;return r.__generator(this,(function(n){return[2,this._debouncedSaveOperations(1,r.__assign(r.__assign({},t),{getTypeKeywords:function(){return o._getTypeKeywords()},portalItemLayerType:"point-cloud"}),e)]}))}))},t.prototype.save=function(){return r.__awaiter(this,void 0,void 0,(function(){var e=this;return r.__generator(this,(function(t){return[2,this._debouncedSaveOperations(0,{getTypeKeywords:function(){return e._getTypeKeywords()},portalItemLayerType:"point-cloud"})]}))}))},t.prototype.validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new a("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})},t.prototype.hasCachedStatistics=function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((function(t){return t.name===e}))},t.prototype._getTypeKeywords=function(){return["PointCloud"]},t.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&P.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&P.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))},r.__decorate([f.property({type:["PointCloudLayer"]})],t.prototype,"operationalLayerType",void 0),r.__decorate([f.property(S.popupEnabled)],t.prototype,"popupEnabled",void 0),r.__decorate([f.property({type:o,json:{name:"popupInfo",write:!0}})],t.prototype,"popupTemplate",void 0),r.__decorate([f.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo"]})],t.prototype,"defaultPopupTemplate",null),r.__decorate([f.property({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],t.prototype,"opacity",void 0),r.__decorate([f.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([f.property({types:[w.types],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],t.prototype,"filters",void 0),r.__decorate([f.property({type:[I]})],t.prototype,"fields",void 0),r.__decorate([f.property({readOnly:!0,dependsOn:["fields"]})],t.prototype,"fieldsIndex",null),r.__decorate([f.reader("service","fields",["fields","attributeStorageInfo"])],t.prototype,"readServiceFields",null),r.__decorate([f.property(j.outFields)],t.prototype,"outFields",void 0),r.__decorate([f.property({readOnly:!0})],t.prototype,"attributeStorageInfo",void 0),r.__decorate([f.property(S.elevationInfo)],t.prototype,"elevationInfo",null),r.__decorate([f.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),r.__decorate([f.property(S.legendEnabled)],t.prototype,"legendEnabled",void 0),r.__decorate([f.property({types:R.types,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:R.types},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],t.prototype,"renderer",void 0),r.__decorate([f.writer("renderer")],t.prototype,"writeRenderer",null),r.__decorate([f.property({json:{read:!1},readOnly:!0})],t.prototype,"type",void 0),r.__decorate([f.subclass("esri.layers.PointCloudLayer")],t)}(b.SceneService(v.ArcGISService(_.OperationalLayer(m.PortalLayer(g.ScaleRangeLayer(u.MultiOriginJSONMixin(h)))))))}).apply(null,o))||(e.exports=n)}}]);