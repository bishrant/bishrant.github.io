(function(){var e={"esri/layers/support/BuildingFilterBlock":"/9KT","esri/layers/support/BuildingFilterModeWireFrame":"1UK1","esri/layers/mixins/ArcGISService":"2fnV","esri/layers/support/BuildingFilterAuthoringInfoCheckbox":"4a5X","esri/layers/support/BuildingFilterModeXRay":"DtfD","esri/layers/support/BuildingSummaryStatistics":"EPMy","esri/layers/support/FieldsIndex":"I90O","esri/layers/support/BuildingFilterModeSolid":"JApJ","esri/layers/support/BuildingFilterMode":"KScw","arcgis-js-api/renderers":"OXG3","esri/renderers":"OXG3","esri/layers/support/I3SLayerDefinitions":"OjNT","esri/layers/buildingSublayers/BuildingComponentSublayer":"Q56x","esri/layers/buildingSublayers/BuildingGroupSublayer":"VN8a","esri/layers/buildingSublayers/BuildingSublayer":"Vsc6","esri/layers/support/BuildingFilterAuthoringInfoType":"Vx5u","esri/layers/support/fieldProperties":"ZJpS","esri/layers/support/BuildingFilterAuthoringInfo":"ZRt/","esri/layers/BuildingSceneLayer":"gRqF","esri/layers/support/BuildingFilterAuthoringInfoBlock":"hBBj","esri/layers/support/BuildingFilter":"z01C"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"/9KT":function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("rg9i"),r("Vx27"),r("KScw"),r("JApJ"),r("1UK1"),r("DtfD")],void 0===(i=(function(e,t,r,o,i,n,p,s,a,l){var u={types:{key:"type",base:p,typeMap:{solid:s,"wire-frame":a,"x-ray":l}},json:{read:function(e){switch(e&&e.type){case"solid":return s.fromJSON(e);case"wireFrame":return a.fromJSON(e);case"x-ray":return l.fromJSON(e);default:return null}},write:{enabled:!0,isRequired:!0}}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.filterExpression=null,t.filterMode=new s,t.title="",t}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({filterExpression:this.filterExpression,filterMode:i.clone(this.filterMode),title:this.title})},r.__decorate([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"filterExpression",void 0),r.__decorate([n.property(u)],t.prototype,"filterMode",void 0),r.__decorate([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"title",void 0),o=r.__decorate([n.subclass("esri.layers.support.BuildingFilterBlock")],t)}(o.JSONSupport)}).apply(null,o))||(e.exports=i)},"1UK1":function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("rg9i"),r("Vx27"),r("KScw"),r("DoiH")],void 0===(i=(function(e,t,r,o,i,n,p){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="wire-frame",t.edges=null,t}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({edges:o.clone(this.edges)})},r.__decorate([i.enumeration({wireFrame:"wire-frame"})],t.prototype,"type",void 0),r.__decorate([i.property(p.symbol3dEdgesProperty)],t.prototype,"edges",void 0),n=r.__decorate([i.subclass("esri.layers.support.BuildingFilterModeWireFrame")],t)}(n)}).apply(null,o))||(e.exports=i)},"2fnV":function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("qsST"),r("Vx27"),r("8CIp")],void 0===(i=(function(e,t,r,o,i,n){Object.defineProperty(t,"__esModule",{value:!0}),t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=n.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",n.sanitizeUrl(e,o.getLogger(this.declaredClass)))},enumerable:!0,configurable:!0}),r.__decorate([i.property({dependsOn:["url"]})],t.prototype,"title",null),r.__decorate([i.property({type:String})],t.prototype,"url",null),r.__decorate([i.subclass("esri.layers.mixins.ArcGISService")],t)}(e)}}).apply(null,o))||(e.exports=i)},"4a5X":function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("rg9i"),r("Vx27"),r("ZRt/"),r("hBBj")],void 0===(i=(function(e,t,r,o,i,n,p,s){var a=o.ofType(s);return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="checkbox",t}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({filterBlocks:i.clone(this.filterBlocks)})},r.__decorate([n.property({type:["checkbox"]})],t.prototype,"type",void 0),r.__decorate([n.property({type:a,json:{write:!0}})],t.prototype,"filterBlocks",void 0),o=r.__decorate([n.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],t)}(p)}).apply(null,o))||(e.exports=i)},DoiH:function(e,t){},DtfD:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("KScw")],void 0===(i=(function(e,t,r,o,i){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="x-ray",t}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i},r.__decorate([o.property({type:["x-ray"],readOnly:!0,json:{write:!0}})],t.prototype,"type",void 0),i=r.__decorate([o.subclass("esri.layers.support.BuildingFilterModeXRay")],t)}(i)}).apply(null,o))||(e.exports=i)},EPMy:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("zp6E"),r("ycL1"),r("R7Ts"),r("qsST"),r("LxLY"),r("SZNs"),r("qMld"),r("Vx27")],void 0===(i=(function(e,t,r,o,i,n,p,s,a,l,u){var d=p.getLogger("esri.layers.support.BuildingSummaryStatistics"),y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.fieldName=null,t.modelName=null,t.label=null,t.min=null,t.max=null,t.mostFrequentValues=null,t.subLayerIds=null,t}return r.__extends(t,e),r.__decorate([u.property({type:String})],t.prototype,"fieldName",void 0),r.__decorate([u.property({type:String})],t.prototype,"modelName",void 0),r.__decorate([u.property({type:String})],t.prototype,"label",void 0),r.__decorate([u.property({type:Number})],t.prototype,"min",void 0),r.__decorate([u.property({type:Number})],t.prototype,"max",void 0),r.__decorate([u.property({json:{read:function(e){return Array.isArray(e)&&(e.every((function(e){return"string"==typeof e}))||e.every((function(e){return"number"==typeof e})))?e.slice():null}}})],t.prototype,"mostFrequentValues",void 0),r.__decorate([u.property({type:[Number]})],t.prototype,"subLayerIds",void 0),r.__decorate([u.subclass("esri.layers.support.BuildingFieldStatistics")],t)}(i.JSONSupport);return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.url=null,t}return r.__extends(t,e),Object.defineProperty(t.prototype,"fields",{get:function(){return this.loaded?this._get("fields"):(d.error("building summary statistics are not loaded"),null)},enumerable:!0,configurable:!0}),t.prototype.load=function(e){var t=s.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),l.resolve(this)},t.prototype._fetchService=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,o(this.url,{query:{f:"json"},responseType:"json",signal:e})];case 1:return t=r.sent(),this.read(t.data,{origin:"service"}),[2]}}))}))},r.__decorate([u.property({constructOnly:!0,type:String})],t.prototype,"url",void 0),r.__decorate([u.property({readOnly:!0,type:[y],json:{read:{source:"summary"}}})],t.prototype,"fields",null),r.__decorate([u.subclass("esri.layers.support.BuildingSummaryStatistics")],t)}(n.LoadableMixin(a.EsriPromiseMixin(i.JSONSupport)))}).apply(null,o))||(e.exports=i)},I90O:function(e,t,r){var o,i;o=[r.dj.c(e.i),t],void 0===(i=(function(e,t){function r(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function o(e){return e.toLowerCase().trim()}return function(){function e(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],e){for(var t=[],i=0,n=e;i<n.length;i++){var p=n[i],s=p&&p.name;if(s){var a=o(s);this._fieldsMap.set(s,p),this._fieldsMap.set(a,p),t.push(a),r(p)&&(this.dateFields.push(p),this._dateFieldsSet.add(p))}}t.sort(),this.uid=t.join(",")}}return e.prototype.destroy=function(){this._fieldsMap.clear()},e.prototype.has=function(e){return null!=this.get(e)},e.prototype.get=function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(o(e)):void 0},e.prototype.isDateField=function(e){return this._dateFieldsSet.has(this.get(e))},e.prototype.normalizeFieldName=function(e){var t=this.get(e);if(t)return t.name},e}()}).apply(null,o))||(e.exports=i)},JApJ:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("KScw")],void 0===(i=(function(e,t,r,o,i){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="solid",t}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i},r.__decorate([o.property({type:["solid"],readOnly:!0,json:{write:!0}})],t.prototype,"type",void 0),i=r.__decorate([o.subclass("esri.layers.support.BuildingFilterModeSolid")],t)}(i)}).apply(null,o))||(e.exports=i)},JNpq:function(e,t){},KScw:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(i=(function(e,t,r,o,i){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([i.property({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),r.__decorate([i.subclass("esri.layers.support.BuildingFilterMode")],t)}(o.JSONSupport)}).apply(null,o))||(e.exports=i)},OXG3:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("Z/W+"),r("Vtuk"),r("PHoo"),r("fU8o"),r("mLnd"),r("osTG"),r("nHUP"),r("hz/Y")],void 0===(i=(function(e,t,r,o,i,n,p,s,a,l){Object.defineProperty(t,"__esModule",{value:!0}),t.ClassBreaksRenderer=r,t.DictionaryRenderer=o,t.DotDensityRenderer=i,t.HeatmapRenderer=n,t.BaseRenderer=p,t.SimpleRenderer=s,t.UniqueValueRenderer=a,t.isRenderer=function(e){return e instanceof p},t.read=l.read,t.write=l.write,t.fromJSON=l.fromJSON,t.rendererTypes={key:"type",base:p,typeMap:{heatmap:n,simple:s,"unique-value":a,"class-breaks":r,"dot-density":i,dictionary:o}},t.webSceneRendererTypes={key:"type",base:p,typeMap:{simple:s,"unique-value":a,"class-breaks":r}}}).apply(null,o))||(e.exports=i)},OjNT:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(i=(function(e,t,r,o,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nodesPerPage=null,t.rootIndex=0,t.lodSelectionMetricType=null,t}return r.__extends(t,e),r.__decorate([i.property({type:Number})],t.prototype,"nodesPerPage",void 0),r.__decorate([i.property({type:Number})],t.prototype,"rootIndex",void 0),r.__decorate([i.property({type:String})],t.prototype,"lodSelectionMetricType",void 0),r.__decorate([i.subclass("esri.layer.support.I3SNodePageDefinition")],t)}(o.JSONSupport);t.I3SNodePageDefinition=n;var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.factor=1,t}return r.__extends(t,e),r.__decorate([i.property({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],t.prototype,"id",void 0),r.__decorate([i.property({type:Number})],t.prototype,"factor",void 0),r.__decorate([i.subclass("esri.layer.support.I3SMaterialTexture")],t)}(o.JSONSupport);t.I3SMaterialTexture=p;var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.baseColorFactor=[1,1,1,1],t.baseColorTexture=null,t.metallicRoughnessTexture=null,t.metallicFactor=1,t.roughnessFactor=1,t}return r.__extends(t,e),r.__decorate([i.property({type:[Number]})],t.prototype,"baseColorFactor",void 0),r.__decorate([i.property({type:p})],t.prototype,"baseColorTexture",void 0),r.__decorate([i.property({type:p})],t.prototype,"metallicRoughnessTexture",void 0),r.__decorate([i.property({type:Number})],t.prototype,"metallicFactor",void 0),r.__decorate([i.property({type:Number})],t.prototype,"roughnessFactor",void 0),r.__decorate([i.subclass("esri.layer.support.I3SMaterialPBRMetallicRoughness")],t)}(o.JSONSupport);t.I3SMaterialPBRMetallicRoughness=s;var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.alphaMode="opaque",t.alphaCutoff=.25,t.doubleSided=!1,t.cullFace="none",t.normalTexture=null,t.occlusionTexture=null,t.emissiveTexture=null,t.emissiveFactor=null,t.pbrMetallicRoughness=null,t}return r.__extends(t,e),r.__decorate([i.enumeration({opaque:"opaque",mask:"mask",blend:"blend"})],t.prototype,"alphaMode",void 0),r.__decorate([i.property({type:Number})],t.prototype,"alphaCutoff",void 0),r.__decorate([i.property({type:Boolean})],t.prototype,"doubleSided",void 0),r.__decorate([i.enumeration({none:"none",back:"back",front:"front"})],t.prototype,"cullFace",void 0),r.__decorate([i.property({type:p})],t.prototype,"normalTexture",void 0),r.__decorate([i.property({type:p})],t.prototype,"occlusionTexture",void 0),r.__decorate([i.property({type:p})],t.prototype,"emissiveTexture",void 0),r.__decorate([i.property({type:[Number]})],t.prototype,"emissiveFactor",void 0),r.__decorate([i.property({type:s})],t.prototype,"pbrMetallicRoughness",void 0),r.__decorate([i.subclass("esri.layer.support.I3SMaterialDefinition")],t)}(o.JSONSupport);t.I3SMaterialDefinition=a;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([i.property({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:""+t.index}}}})],t.prototype,"name",void 0),r.__decorate([i.enumeration({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2"})],t.prototype,"format",void 0),r.__decorate([i.subclass("esri.layer.support.I3STextureFormat")],t)}(o.JSONSupport);t.I3STextureFormat=l;var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.atlas=!1,t}return r.__extends(t,e),r.__decorate([i.property({type:[l]})],t.prototype,"formats",void 0),r.__decorate([i.property({type:Boolean})],t.prototype,"atlas",void 0),r.__decorate([i.subclass("esri.layer.support.I3STextureSetDefinition")],t)}(o.JSONSupport);t.I3STextureSetDefinition=u;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([i.enumeration({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],t.prototype,"type",void 0),r.__decorate([i.property({type:Number})],t.prototype,"component",void 0),r.__decorate([i.subclass("esri.layer.support.I3SGeometryAttribute")],t)}(o.JSONSupport);t.I3SGeometryAttribute=d;var y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([i.enumeration({draco:"draco"})],t.prototype,"encoding",void 0),r.__decorate([i.property({type:[String]})],t.prototype,"attributes",void 0),r.__decorate([i.subclass("esri.layer.support.I3SGeometryCompressedAttributes")],t)}(o.JSONSupport);t.I3SGeometryCompressedAttributes=y;var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.offset=0,t}return r.__extends(t,e),r.__decorate([i.property({type:Number})],t.prototype,"offset",void 0),r.__decorate([i.property({type:d})],t.prototype,"position",void 0),r.__decorate([i.property({type:d})],t.prototype,"normal",void 0),r.__decorate([i.property({type:d})],t.prototype,"uv0",void 0),r.__decorate([i.property({type:d})],t.prototype,"color",void 0),r.__decorate([i.property({type:d})],t.prototype,"uvRegion",void 0),r.__decorate([i.property({type:d})],t.prototype,"featureId",void 0),r.__decorate([i.property({type:d})],t.prototype,"faceRange",void 0),r.__decorate([i.property({type:y})],t.prototype,"compressedAttributes",void 0),r.__decorate([i.subclass("esri.layer.support.I3SGeometryBuffer")],t)}(o.JSONSupport);t.I3SGeometryBuffer=c;var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([i.enumeration({triangle:"triangle"})],t.prototype,"topology",void 0),r.__decorate([i.property()],t.prototype,"geometryBuffers",void 0),r.__decorate([i.subclass("esri.layer.support.I3SGeometryDefinition")],t)}(o.JSONSupport);t.I3SGeometryDefinition=f}).apply(null,o))||(e.exports=i)},Q56x:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("ifLZ"),r("OXG3"),r("zp6E"),r("ImIS"),r("R7Ts"),r("LxLY"),r("SZNs"),r("qMld"),r("Vx27"),r("N7S/"),r("Z4y+"),r("Vsc6"),r("EtsK"),r("ZJpS"),r("I90O"),r("OjNT"),r("hz/Y"),r("begh"),r("5ldw")],void 0===(i=(function(e,t,r,o,i,n,p,s,a,l,u,d,y,c,f,_,v,h,g,b,S,m){var O=v.defineFieldProperties();return function(e){function t(t){var r=e.call(this,t)||this;return r.type="building-component",r.nodePages=null,r.materialDefinitions=null,r.textureSetDefinitions=null,r.geometryDefinitions=null,r.serviceUpdateTimeStamp=null,r.fields=null,r.outFields=null,r.listMode="show",r.renderer=null,r.definitionExpression=null,r.popupEnabled=!0,r.popupTemplate=null,r.layerType="3d-object",r}return r.__extends(t,e),Object.defineProperty(t.prototype,"parsedUrl",{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fieldsIndex",{get:function(){return new h(this.fields)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"objectIdField",{get:function(){if(null!=this.fields)for(var e=0,t=this.fields;e<t.length;e++){var r=t[e];if("oid"===r.type)return r.name}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),t.prototype.load=function(e){var t=a.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),u.resolve(this)},t.prototype.createPopupTemplate=function(e){return S.createPopupTemplate(this,e)},t.prototype._fetchService=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,n(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})];case 1:return t=r.sent(),this.read(t.data,{origin:"service",url:this.parsedUrl}),[2]}}))}))},t.prototype.getField=function(e){return this.fieldsIndex.get(e)},t.prototype.getFieldDomain=function(e){var t=this.getField(e);return t&&t.domain?t.domain:null},Object.defineProperty(t.prototype,"geometryType",{get:function(){return"3d-object"===this.layerType?"mesh":"point"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"profile",{get:function(){return"3d-object"===this.layerType?"mesh-pyramids":"points"},enumerable:!0,configurable:!0}),r.__decorate([d.property({readOnly:!0,dependsOn:["layer","id"]})],t.prototype,"parsedUrl",null),r.__decorate([d.property({type:g.I3SNodePageDefinition,readOnly:!0})],t.prototype,"nodePages",void 0),r.__decorate([d.property({type:[g.I3SMaterialDefinition],readOnly:!0})],t.prototype,"materialDefinitions",void 0),r.__decorate([d.property({type:[g.I3STextureSetDefinition],readOnly:!0})],t.prototype,"textureSetDefinitions",void 0),r.__decorate([d.property({type:[g.I3SGeometryDefinition],readOnly:!0})],t.prototype,"geometryDefinitions",void 0),r.__decorate([d.property({readOnly:!0})],t.prototype,"serviceUpdateTimeStamp",void 0),r.__decorate([d.property({readOnly:!0})],t.prototype,"store",void 0),r.__decorate([d.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),r.__decorate([d.property({readOnly:!0})],t.prototype,"attributeStorageInfo",void 0),r.__decorate([d.property(O.fields)],t.prototype,"fields",void 0),r.__decorate([d.property({readOnly:!0,dependsOn:["fields"]})],t.prototype,"fieldsIndex",null),r.__decorate([d.property(O.outFields)],t.prototype,"outFields",void 0),r.__decorate([d.property({type:String,dependsOn:["fields"],readOnly:!0})],t.prototype,"objectIdField",null),r.__decorate([d.property({readOnly:!0,type:y,aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),r.__decorate([d.property({readOnly:!0,type:c,aliasOf:"layer.spatialReference"})],t.prototype,"spatialReference",void 0),r.__decorate([d.property({readOnly:!0,aliasOf:"layer.version"})],t.prototype,"version",void 0),r.__decorate([d.property({readOnly:!0,type:m,aliasOf:"layer.elevationInfo"})],t.prototype,"elevationInfo",void 0),r.__decorate([d.property({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],t.prototype,"minScale",void 0),r.__decorate([d.property({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],t.prototype,"maxScale",void 0),r.__decorate([d.property({type:["hide","show"],json:{write:!0}})],t.prototype,"listMode",void 0),r.__decorate([d.property({types:i.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:b.read}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:b.read},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],t.prototype,"renderer",void 0),r.__decorate([d.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],t.prototype,"definitionExpression",void 0),r.__decorate([d.property(_.popupEnabled)],t.prototype,"popupEnabled",void 0),r.__decorate([d.property({type:o,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),r.__decorate([d.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],t.prototype,"normalReferenceFrame",void 0),r.__decorate([d.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],t.prototype,"defaultPopupTemplate",null),r.__decorate([d.enumeration(new p.default({"3DObject":"3d-object",Point:"point"}))],t.prototype,"layerType",void 0),r.__decorate([d.property({dependsOn:["layerType"]})],t.prototype,"geometryType",null),r.__decorate([d.property({dependsOn:["layerType"]})],t.prototype,"profile",null),r.__decorate([d.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],t)}(s.LoadableMixin(l.EsriPromiseMixin(f)))}).apply(null,o))||(e.exports=i)},VN8a:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("sS22"),r("V2ZO"),r("Vx27"),r("Q56x"),r("Vsc6")],void 0===(i=(function(e,t,r,o,i,n,p,s,a){var l={type:o,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:u}}},read:!1}};function u(e,t,r){if(e&&Array.isArray(e))return new o(e.map((function(e){var t=function(e){return"group"===e.layerType?d:s}(e);if(t){var o=new t;return o.read(e,r),o}r&&r.messages&&e&&r.messages.push(new n("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}var d=function(e){function t(t){var r=e.call(this,t)||this;return r.type="building-group",r.listMode="show",r.sublayers=null,r}var o;return r.__extends(t,e),o=t,t.prototype.loadAll=function(){var e=this;return i.loadAllChildren(this,(function(t){return o.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&t(e)}))}))},r.__decorate([p.property({type:["hide","show","hide-children"],json:{write:!0}})],t.prototype,"listMode",void 0),r.__decorate([p.property(l)],t.prototype,"sublayers",void 0),o=r.__decorate([p.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],t)}(a);return function(e){e.sublayersProperty=l,e.readSublayers=u,e.forEachSublayer=function e(t,r){t.forEach((function(t){r(t),"building-group"===t.type&&e(t.sublayers,r)}))}}(d||(d={})),d}).apply(null,o))||(e.exports=i)},Vsc6:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("NfRO"),r("EUqE"),r("Vx27"),r("EtsK")],void 0===(i=(function(e,t,r,o,i,n,p){return function(e){function t(t){var r=e.call(this,t)||this;return r.title="",r.id=-1,r.modelName=null,r.isEmpty=null,r.visible=!0,r.opacity=1,r}return r.__extends(t,e),t.prototype.readTitle=function(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""},t.prototype.readIdOnlyOnce=function(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0},r.__decorate([n.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],t.prototype,"title",void 0),r.__decorate([n.reader("service","title",["alias","name"])],t.prototype,"readTitle",null),r.__decorate([n.property()],t.prototype,"layer",void 0),r.__decorate([n.property({type:Number,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"id",void 0),r.__decorate([n.reader("service","id")],t.prototype,"readIdOnlyOnce",null),r.__decorate([n.property(p.readOnlyService(String))],t.prototype,"modelName",void 0),r.__decorate([n.property(p.readOnlyService(Boolean))],t.prototype,"isEmpty",void 0),r.__decorate([n.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"}}})],t.prototype,"visible",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"opacity",void 0),r.__decorate([n.subclass("esri.layers.buildingSublayers.BuildingSublayer")],t)}(o.IdentifiableMixin(i.MultiOriginJSONSupport))}).apply(null,o))||(e.exports=i)},Vx5u:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("rg9i"),r("Vx27")],void 0===(i=(function(e,t,r,o,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.filterType=null,t.filterValues=null,t}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({filterType:this.filterType,filterValues:i.clone(this.filterValues)})},r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"filterType",void 0),r.__decorate([n.property({type:[String],json:{write:!0}})],t.prototype,"filterValues",void 0),o=r.__decorate([n.subclass("esri.layers.support.BuildingFilterAuthoringInfoType")],t)}(o.JSONSupport)}).apply(null,o))||(e.exports=i)},ZJpS:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("ll/V"),r("qsST"),r("KQcO"),r("k7g7")],void 0===(i=(function(e,t,r,o,i,n){Object.defineProperty(t,"__esModule",{value:!0});var p=o.getLogger("esri.layers.support.fieldProperties");t.defineFieldProperties=function(){return{fields:{type:[i],value:null},outFields:{type:[String],dependsOn:["fields"],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var e=this._userOutFields;if(!e||!e.length)return null;if(r.includes(e,"*"))return["*"];if(!this.fields)return e;for(var t=0,o=e;t<o.length;t++){var i=o[t];n.hasField(this.fields,i)||p.error("field-attributes-layer:invalid-field","Invalid field "+i+" found in outFields",{layer:this,outFields:e})}return n.fixFields(this.fields,e)}}}}}).apply(null,o))||(e.exports=i)},"ZRt/":function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(i=(function(e,t,r,o,i){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=null,t}return r.__extends(t,e),r.__decorate([i.property({type:String,readOnly:!0,json:{write:!0}})],t.prototype,"type",void 0),r.__decorate([i.subclass("esri.layers.support.BuildingFilterAuthoringInfo")],t)}(o.JSONSupport)}).apply(null,o))||(e.exports=i)},gRqF:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("6Ej+"),r("ma1f"),r("rg9i"),r("sS22"),r("qsST"),r("LxLY"),r("EUqE"),r("qMld"),r("jfWY"),r("Vx27"),r("N7S/"),r("Z4y+"),r("0RER"),r("Q56x"),r("VN8a"),r("2fnV"),r("FEX1"),r("QJ8R"),r("OXmT"),r("JNpq"),r("z01C"),r("EPMy"),r("EtsK")],void 0===(i=(function(e,t,r,o,i,n,p,s,a,l,u,d,y,c,f,_,v,h,g,b,S,m,O,x,w,j,I){var T=a.getLogger("esri.layers.BuildingSceneLayer"),F=o.ofType(w),N=p.clone(g.sublayersProperty);return N.json.origins["web-scene"]={type:[h],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}},function(e){function t(t){var r=e.call(this,t)||this;return r.operationalLayerType="BuildingSceneLayer",r.allSublayers=new i({root:r,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),r.sublayers=null,r.sublayerOverrides=null,r.filters=new F,r.activeFilterId=null,r.summaryStatistics=null,r.outFields=null,r.type="building-scene",r}return r.__extends(t,e),t.prototype.normalizeCtorArgs=function(e){return"string"==typeof e?{url:e}:e},t.prototype.destroy=function(){this.allSublayers.destroy()},t.prototype.readSublayers=function(e,t,r){var o=this,i=g.readSublayers(e,t,r);return g.forEachSublayer(i,(function(e){return e.layer=o})),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i},t.prototype.applySublayerOverrides=function(e,t){var r=t.overrides,o=t.context;g.forEachSublayer(e,(function(e){return e.read(r.get(e.id),o)}))},t.prototype.readSublayerOverrides=function(e,t){for(var r=new Map,o=0,i=e;o<i.length;o++){var p=i[o];null!=p&&"object"==typeof p&&"number"==typeof p.id?r.set(p.id,p):t.messages.push(new n("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:p}))}return{overrides:r,context:t}},t.prototype.writeSublayerOverrides=function(e,t,r){var o=[];g.forEachSublayer(this.sublayers,(function(e){var t=e.write({},r);Object.keys(t).length>1&&o.push(t)})),o.length>0&&(t.sublayers=o)},t.prototype.writeUnappliedOverrides=function(e,t){t.sublayers=[],e.overrides.forEach((function(e){t.sublayers.push(p.clone(e))}))},t.prototype.write=function(t,r){return t=e.prototype.write.call(this,t,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,t,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,t)),t},t.prototype.read=function(t,r){if(e.prototype.read.call(this,t,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=t&&Array.isArray(t.sublayers)){var o=this.readSublayerOverrides(t.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,o):this.sublayerOverrides=o}},t.prototype.readSummaryStatistics=function(e,t){if("string"==typeof t.statisticsHRef){var r=y.join(this.parsedUrl.path,t.statisticsHRef);return new j({url:r})}return null},Object.defineProperty(t.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),t.prototype.load=function(e){var t=this,r=l.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)}));return this.addResolvingPromise(o),d.resolve(this)},t.prototype.loadAll=function(){var e=this;return s.loadAll(this,(function(t){g.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&t(e)})),e.summaryStatistics&&t(e.summaryStatistics)}))},t.prototype.saveAs=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o=this;return r.__generator(this,(function(i){return[2,this._saveAs(e,r.__assign(r.__assign({},t),{getTypeKeywords:function(){return o._getTypeKeywords()},portalItemLayerType:"building-scene"}))]}))}))},t.prototype.save=function(){return r.__awaiter(this,void 0,void 0,(function(){var e=this;return r.__generator(this,(function(t){return[2,this._save({getTypeKeywords:function(){return e._getTypeKeywords()},portalItemLayerType:"building-scene"})]}))}))},t.prototype.validateLayer=function(e){if(!e.layerType||"Building"!==e.layerType)throw new n("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})},t.prototype._getTypeKeywords=function(){return["Building"]},t.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&T.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&T.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))},r.__decorate([c.property({type:["BuildingSceneLayer"]})],t.prototype,"operationalLayerType",void 0),r.__decorate([c.property({readOnly:!0})],t.prototype,"allSublayers",void 0),r.__decorate([c.property(N)],t.prototype,"sublayers",void 0),r.__decorate([c.reader("service","sublayers")],t.prototype,"readSublayers",null),r.__decorate([c.property({type:F,nonNullable:!0,json:{write:!0}})],t.prototype,"filters",void 0),r.__decorate([c.property({type:String,json:{write:!0}})],t.prototype,"activeFilterId",void 0),r.__decorate([c.property({readOnly:!0,type:j})],t.prototype,"summaryStatistics",void 0),r.__decorate([c.reader("summaryStatistics",["statisticsHRef"])],t.prototype,"readSummaryStatistics",null),r.__decorate([c.property({type:[String],json:{read:!1}})],t.prototype,"outFields",void 0),r.__decorate([c.property(I.readOnlyService(f))],t.prototype,"fullExtent",void 0),r.__decorate([c.property({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),r.__decorate([c.property(I.readOnlyService(_))],t.prototype,"spatialReference",void 0),r.__decorate([c.property(I.elevationInfo)],t.prototype,"elevationInfo",null),r.__decorate([c.property({json:{read:!1},readOnly:!0})],t.prototype,"type",void 0),r.__decorate([c.subclass("esri.layers.BuildingSceneLayer")],t)}(x.SceneService(b.ArcGISService(S.OperationalLayer(m.PortalLayer(O.ScaleRangeLayer(u.MultiOriginJSONMixin(v)))))))}).apply(null,o))||(e.exports=i)},hBBj:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("ycL1"),r("rg9i"),r("Vx27"),r("Vx5u")],void 0===(i=(function(e,t,r,o,i,n,p,s){var a=o.ofType(s);return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({filterTypes:n.clone(this.filterTypes)})},r.__decorate([p.property({type:a,json:{write:!0}})],t.prototype,"filterTypes",void 0),o=r.__decorate([p.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],t)}(i.JSONSupport)}).apply(null,o))||(e.exports=i)},z01C:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("ycL1"),r("rg9i"),r("V42v"),r("Vx27"),r("ZRt/"),r("4a5X"),r("/9KT")],void 0===(i=(function(e,t,r,o,i,n,p,s,a,l,u){var d=o.ofType(u);return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.description=null,t.filterBlocks=null,t.id=p.generateUUID(),t.name=null,t}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({description:this.description,filterBlocks:n.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:n.clone(this.filterAuthoringInfo)})},r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([s.property({type:d,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"filterBlocks",void 0),r.__decorate([s.property({types:{key:"type",base:a,typeMap:{checkbox:l}},json:{read:function(e){switch(e&&e.type){case"checkbox":return l.fromJSON(e);default:return null}},write:!0}})],t.prototype,"filterAuthoringInfo",void 0),r.__decorate([s.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"id",void 0),r.__decorate([s.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"name",void 0),o=r.__decorate([s.subclass("esri.layers.support.BuildingFilter")],t)}(i.JSONSupport)}).apply(null,o))||(e.exports=i)}}]);