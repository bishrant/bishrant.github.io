(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/support/BuildingFilterBlock":"/9KT","arcgis-js-api/layers/support/BuildingFilterModeWireFrame":"1UK1","arcgis-js-api/layers/mixins/ArcGISService":"2fnV","arcgis-js-api/layers/support/BuildingFilterAuthoringInfoCheckbox":"4a5X","arcgis-js-api/layers/support/BuildingFilterModeXRay":"DtfD","arcgis-js-api/layers/support/BuildingSummaryStatistics":"EPMy","arcgis-js-api/layers/support/FieldsIndex":"I90O","arcgis-js-api/layers/support/BuildingFilterModeSolid":"JApJ","arcgis-js-api/layers/support/BuildingFilterMode":"KScw","arcgis-js-api/renderers":"OXG3","arcgis-js-api/layers/support/I3SLayerDefinitions":"OjNT","arcgis-js-api/layers/buildingSublayers/BuildingComponentSublayer":"Q56x","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/core/uuid":"V42v","arcgis-js-api/layers/buildingSublayers/BuildingGroupSublayer":"VN8a","arcgis-js-api/layers/buildingSublayers/BuildingSublayer":"Vsc6","arcgis-js-api/layers/support/BuildingFilterAuthoringInfoType":"Vx5u","arcgis-js-api/layers/support/fieldProperties":"ZJpS","arcgis-js-api/layers/support/BuildingFilterAuthoringInfo":"ZRt/","arcgis-js-api/support/popupUtils":"begh","arcgis-js-api/layers/BuildingSceneLayer":"gRqF","arcgis-js-api/layers/support/BuildingFilterAuthoringInfoBlock":"hBBj","arcgis-js-api/layers/support/BuildingFilter":"z01C"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[18,33,109],{"/9KT":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("rg9i"),r("Vx27"),r("KScw"),r("JApJ"),r("1UK1"),r("DtfD")],void 0===(o=(function(e,t,r,i,o,n,p,l,s,a,u){var y={types:{key:"type",base:l,typeMap:{solid:s,"wire-frame":a,"x-ray":u}},json:{read:function(e){switch(e&&e.type){case"solid":return s.fromJSON(e);case"wireFrame":return a.fromJSON(e);case"x-ray":return u.fromJSON(e);default:return null}},write:{enabled:!0,isRequired:!0}}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.filterExpression=null,t.filterMode=new s,t.title="",t}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({filterExpression:this.filterExpression,filterMode:n.clone(this.filterMode),title:this.title})},i([p.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"filterExpression",void 0),i([p.property(y)],t.prototype,"filterMode",void 0),i([p.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"title",void 0),o=i([p.subclass("esri.layers.support.BuildingFilterBlock")],t)}(p.declared(o.JSONSupport))}).apply(null,i))||(e.exports=o)},"1UK1":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("rg9i"),r("Vx27"),r("KScw"),r("DoiH")],void 0===(o=(function(e,t,r,i,o,n,p,l){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="wire-frame",t.edges=null,t}var p;return r(t,e),p=t,t.prototype.clone=function(){return new p({edges:o.clone(this.edges)})},i([n.enumeration.serializable()({wireFrame:"wire-frame"})],t.prototype,"type",void 0),i([n.property(l.symbol3dEdgesProperty)],t.prototype,"edges",void 0),p=i([n.subclass("esri.layers.support.BuildingFilterModeWireFrame")],t)}(n.declared(p))}).apply(null,i))||(e.exports=o)},"2fnV":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("qsST"),r("Vx27"),r("8CIp")],void 0===(o=(function(e,t,r,i,o,n,p){Object.defineProperty(t,"__esModule",{value:!0}),t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=p.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",p.sanitizeUrl(e,o.getLogger(this.declaredClass)))},enumerable:!0,configurable:!0}),i([n.property({dependsOn:["url"]})],t.prototype,"title",null),i([n.property({type:String})],t.prototype,"url",null),i([n.subclass("esri.layers.mixins.ArcGISService")],t)}(n.declared(e))}}).apply(null,i))||(e.exports=o)},"4a5X":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("y4WC"),r("rg9i"),r("Vx27"),r("ZRt/"),r("hBBj")],void 0===(o=(function(e,t,r,i,o,n,p,l,s){var a=o.ofType(s);return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="checkbox",t}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({filterBlocks:n.clone(this.filterBlocks)})},i([p.property({type:["checkbox"]})],t.prototype,"type",void 0),i([p.property({type:a,json:{write:!0}})],t.prototype,"filterBlocks",void 0),o=i([p.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],t)}(p.declared(l))}).apply(null,i))||(e.exports=o)},DoiH:function(e,t){},DtfD:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Vx27"),r("KScw")],void 0===(o=(function(e,t,r,i,o,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="x-ray",t}var n;return r(t,e),n=t,t.prototype.clone=function(){return new n},i([o.property({type:["x-ray"],readOnly:!0,json:{write:!0}})],t.prototype,"type",void 0),n=i([o.subclass("esri.layers.support.BuildingFilterModeXRay")],t)}(o.declared(n))}).apply(null,i))||(e.exports=o)},EPMy:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("zp6E"),r("ycL1"),r("R7Ts"),r("qsST"),r("LxLY"),r("SZNs"),r("qMld"),r("Vx27")],void 0===(o=(function(e,t,r,i,o,n,p,l,s,a,u,y,d,c){var f=a.getLogger("esri.layers.support.BuildingSummaryStatistics"),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.fieldName=null,t.modelName=null,t.label=null,t.min=null,t.max=null,t.mostFrequentValues=null,t.subLayerIds=null,t}return r(t,e),i([c.property({type:String})],t.prototype,"fieldName",void 0),i([c.property({type:String})],t.prototype,"modelName",void 0),i([c.property({type:String})],t.prototype,"label",void 0),i([c.property({type:Number})],t.prototype,"min",void 0),i([c.property({type:Number})],t.prototype,"max",void 0),i([c.property({json:{read:function(e){return Array.isArray(e)&&(e.every((function(e){return"string"==typeof e}))||e.every((function(e){return"number"==typeof e})))?e.slice():null}}})],t.prototype,"mostFrequentValues",void 0),i([c.property({type:[Number]})],t.prototype,"subLayerIds",void 0),i([c.subclass("esri.layers.support.BuildingFieldStatistics")],t)}(c.declared(l.JSONSupport));return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.url=null,t}return r(t,e),Object.defineProperty(t.prototype,"fields",{get:function(){return this.loaded?this._get("fields"):(f.error("building summary statistics are not loaded"),null)},enumerable:!0,configurable:!0}),t.prototype.load=function(e){var t=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),d.resolve(this)},t.prototype._fetchService=function(e){return n(this,void 0,void 0,(function(){var t;return o(this,(function(r){switch(r.label){case 0:return[4,p(this.url,{query:{f:"json"},responseType:"json",signal:e})];case 1:return t=r.sent(),this.read(t.data,{origin:"service"}),[2]}}))}))},i([c.property({constructOnly:!0,type:String})],t.prototype,"url",void 0),i([c.property({readOnly:!0,type:[v],json:{read:{source:"summary"}}})],t.prototype,"fields",null),i([c.subclass("esri.layers.support.BuildingSummaryStatistics")],t)}(c.declared(s.LoadableMixin(y.EsriPromiseMixin(l.JSONSupport))))}).apply(null,i))||(e.exports=o)},I90O:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("xhoE")],void 0===(o=(function(e,t,r){function i(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function o(e){return e.toLowerCase().trim()}return function(){function e(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],e){for(var t=[],r=0,n=e;r<n.length;r++){var p=n[r],l=p&&p.name;if(l){var s=o(l);this._fieldsMap.set(l,p),this._fieldsMap.set(s,p),t.push(s),i(p)&&(this.dateFields.push(p),this._dateFieldsSet.add(p))}}t.sort(),this.uid=t.join(",")}}return e.prototype.destroy=function(){this._fieldsMap.clear()},e.prototype.has=function(e){return null!=this.get(e)},e.prototype.get=function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(o(e)):void 0},e.prototype.isDateField=function(e){return this._dateFieldsSet.has(this.get(e))},e.prototype.normalizeFieldName=function(e){var t=this.get(e);if(t)return t.name},e}()}).apply(null,i))||(e.exports=o)},JApJ:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Vx27"),r("KScw")],void 0===(o=(function(e,t,r,i,o,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="solid",t}var n;return r(t,e),n=t,t.prototype.clone=function(){return new n},i([o.property({type:["solid"],readOnly:!0,json:{write:!0}})],t.prototype,"type",void 0),n=i([o.subclass("esri.layers.support.BuildingFilterModeSolid")],t)}(o.declared(n))}).apply(null,i))||(e.exports=o)},JNpq:function(e,t){},KScw:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27")],void 0===(o=(function(e,t,r,i,o,n){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),i([n.property({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),i([n.subclass("esri.layers.support.BuildingFilterMode")],t)}(n.declared(o.JSONSupport))}).apply(null,i))||(e.exports=o)},OXG3:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("Z/W+"),r("Vtuk"),r("PHoo"),r("fU8o"),r("mLnd"),r("osTG"),r("nHUP"),r("hz/Y")],void 0===(o=(function(e,t,r,i,o,n,p,l,s,a){Object.defineProperty(t,"__esModule",{value:!0}),t.ClassBreaksRenderer=r,t.DictionaryRenderer=i,t.DotDensityRenderer=o,t.HeatmapRenderer=n,t.BaseRenderer=p,t.SimpleRenderer=l,t.UniqueValueRenderer=s,t.isRenderer=function(e){return e instanceof p},t.read=a.read,t.write=a.write,t.fromJSON=a.fromJSON,t.rendererTypes={key:"type",base:p,typeMap:{heatmap:n,simple:l,"unique-value":s,"class-breaks":r,"dot-density":o,dictionary:i}},t.webSceneRendererTypes={key:"type",base:p,typeMap:{simple:l,"unique-value":s,"class-breaks":r}}}).apply(null,i))||(e.exports=o)},OjNT:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27")],void 0===(o=(function(e,t,r,i,o,n){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nodesPerPage=null,t.rootIndex=0,t.lodSelectionMetricType=null,t}return r(t,e),i([n.property({type:Number})],t.prototype,"nodesPerPage",void 0),i([n.property({type:Number})],t.prototype,"rootIndex",void 0),i([n.property({type:String})],t.prototype,"lodSelectionMetricType",void 0),i([n.subclass("esri.layer.support.I3SNodePageDefinition")],t)}(n.declared(o.JSONSupport));t.I3SNodePageDefinition=p;var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.factor=1,t}return r(t,e),i([n.property({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],t.prototype,"id",void 0),i([n.property({type:Number})],t.prototype,"factor",void 0),i([n.subclass("esri.layer.support.I3SMaterialTexture")],t)}(n.declared(o.JSONSupport));t.I3SMaterialTexture=l;var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.baseColorFactor=[1,1,1,1],t.baseColorTexture=null,t.metallicRoughnessTexture=null,t.metallicFactor=1,t.roughnessFactor=1,t}return r(t,e),i([n.property({type:[Number]})],t.prototype,"baseColorFactor",void 0),i([n.property({type:l})],t.prototype,"baseColorTexture",void 0),i([n.property({type:l})],t.prototype,"metallicRoughnessTexture",void 0),i([n.property({type:Number})],t.prototype,"metallicFactor",void 0),i([n.property({type:Number})],t.prototype,"roughnessFactor",void 0),i([n.subclass("esri.layer.support.I3SMaterialPBRMetallicRoughness")],t)}(n.declared(o.JSONSupport));t.I3SMaterialPBRMetallicRoughness=s;var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.alphaMode="opaque",t.alphaCutoff=.25,t.doubleSided=!1,t.cullFace="none",t.normalTexture=null,t.occlusionTexture=null,t.emissiveTexture=null,t.emissiveFactor=null,t.pbrMetallicRoughness=null,t}return r(t,e),i([n.enumeration.serializable()({opaque:"opaque",mask:"mask",blend:"blend"})],t.prototype,"alphaMode",void 0),i([n.property({type:Number})],t.prototype,"alphaCutoff",void 0),i([n.property({type:Boolean})],t.prototype,"doubleSided",void 0),i([n.enumeration.serializable()({none:"none",back:"back",front:"front"})],t.prototype,"cullFace",void 0),i([n.property({type:l})],t.prototype,"normalTexture",void 0),i([n.property({type:l})],t.prototype,"occlusionTexture",void 0),i([n.property({type:l})],t.prototype,"emissiveTexture",void 0),i([n.property({type:[Number]})],t.prototype,"emissiveFactor",void 0),i([n.property({type:s})],t.prototype,"pbrMetallicRoughness",void 0),i([n.subclass("esri.layer.support.I3SMaterialDefinition")],t)}(n.declared(o.JSONSupport));t.I3SMaterialDefinition=a;var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),i([n.property({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:""+t.index}}}})],t.prototype,"name",void 0),i([n.enumeration.serializable()({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2"})],t.prototype,"format",void 0),i([n.subclass("esri.layer.support.I3STextureFormat")],t)}(n.declared(o.JSONSupport));t.I3STextureFormat=u;var y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.atlas=!1,t}return r(t,e),i([n.property({type:[u]})],t.prototype,"formats",void 0),i([n.property({type:Boolean})],t.prototype,"atlas",void 0),i([n.subclass("esri.layer.support.I3STextureSetDefinition")],t)}(n.declared(o.JSONSupport));t.I3STextureSetDefinition=y;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),i([n.enumeration.serializable()({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],t.prototype,"type",void 0),i([n.property({type:Number})],t.prototype,"component",void 0),i([n.subclass("esri.layer.support.I3SGeometryAttribute")],t)}(n.declared(o.JSONSupport));t.I3SGeometryAttribute=d;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),i([n.enumeration.serializable()({draco:"draco"})],t.prototype,"encoding",void 0),i([n.property({type:[String]})],t.prototype,"attributes",void 0),i([n.subclass("esri.layer.support.I3SGeometryAttribute")],t)}(n.declared(o.JSONSupport));t.I3SGeometryCompressedAttributes=c;var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.offset=0,t}return r(t,e),i([n.property({type:Number})],t.prototype,"offset",void 0),i([n.property({type:d})],t.prototype,"position",void 0),i([n.property({type:d})],t.prototype,"normal",void 0),i([n.property({type:d})],t.prototype,"uv0",void 0),i([n.property({type:d})],t.prototype,"color",void 0),i([n.property({type:d})],t.prototype,"uvRegion",void 0),i([n.property({type:d})],t.prototype,"featureId",void 0),i([n.property({type:d})],t.prototype,"faceRange",void 0),i([n.property({type:c})],t.prototype,"compressedAttributes",void 0),i([n.subclass("esri.layer.support.I3SGeometryBuffer")],t)}(n.declared(o.JSONSupport));t.I3SGeometryBuffer=f;var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),i([n.enumeration.serializable()({triangle:"triangle"})],t.prototype,"topology",void 0),i([n.property()],t.prototype,"geometryBuffers",void 0),i([n.subclass("esri.layer.support.I3SMeshDefinition")],t)}(n.declared(o.JSONSupport));t.I3SGeometryDefinition=v}).apply(null,i))||(e.exports=o)},Q56x:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ifLZ"),r("OXG3"),r("zp6E"),r("ImIS"),r("R7Ts"),r("LxLY"),r("SZNs"),r("qMld"),r("Vx27"),r("N7S/"),r("Z4y+"),r("Vsc6"),r("EtsK"),r("ZJpS"),r("I90O"),r("OjNT"),r("hz/Y"),r("begh"),r("5ldw")],void 0===(o=(function(e,t,r,i,o,n,p,l,s,a,u,y,d,c,f,v,h,g,b,m,S,w,O,j,x,I){var T=S.defineFieldProperties();return function(e){function t(t){var r=e.call(this,t)||this;return r.type="building-component",r.nodePages=null,r.materialDefinitions=null,r.textureSetDefinitions=null,r.geometryDefinitions=null,r.serviceUpdateTimeStamp=null,r.fields=null,r.outFields=null,r.listMode="show",r.renderer=null,r.definitionExpression=null,r.popupEnabled=!0,r.popupTemplate=null,r.layerType="3d-object",r}return i(t,e),Object.defineProperty(t.prototype,"parsedUrl",{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fieldsIndex",{get:function(){return new w(this.fields)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"objectIdField",{get:function(){if(null!=this.fields)for(var e=0,t=this.fields;e<t.length;e++){var r=t[e];if("oid"===r.type)return r.name}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),t.prototype.load=function(e){var t=d.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),f.resolve(this)},t.prototype.createPopupTemplate=function(e){return x.createPopupTemplate(this,e)},t.prototype._fetchService=function(e){return p(this,void 0,void 0,(function(){var t;return n(this,(function(r){switch(r.label){case 0:return[4,a(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})];case 1:return t=r.sent(),this.read(t.data,{origin:"service",url:this.parsedUrl}),[2]}}))}))},t.prototype.getField=function(e){return this.fieldsIndex.get(e)},t.prototype.getFieldDomain=function(e){var t=this.getField(e);return t&&t.domain?t.domain:null},Object.defineProperty(t.prototype,"geometryType",{get:function(){return"3d-object"===this.layerType?"mesh":"point"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"profile",{get:function(){return"3d-object"===this.layerType?"mesh-pyramids":"points"},enumerable:!0,configurable:!0}),o([v.property({readOnly:!0,dependsOn:["layer","id"]})],t.prototype,"parsedUrl",null),o([v.property({type:O.I3SNodePageDefinition,readOnly:!0})],t.prototype,"nodePages",void 0),o([v.property({type:[O.I3SMaterialDefinition],readOnly:!0})],t.prototype,"materialDefinitions",void 0),o([v.property({type:[O.I3STextureSetDefinition],readOnly:!0})],t.prototype,"textureSetDefinitions",void 0),o([v.property({type:[O.I3SGeometryDefinition],readOnly:!0})],t.prototype,"geometryDefinitions",void 0),o([v.property({readOnly:!0})],t.prototype,"serviceUpdateTimeStamp",void 0),o([v.property({readOnly:!0})],t.prototype,"store",void 0),o([v.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),o([v.property({readOnly:!0})],t.prototype,"attributeStorageInfo",void 0),o([v.property(T.fields)],t.prototype,"fields",void 0),o([v.property({readOnly:!0,dependsOn:["fields"]})],t.prototype,"fieldsIndex",null),o([v.property(T.outFields)],t.prototype,"outFields",void 0),o([v.property({type:String,dependsOn:["fields"],readOnly:!0})],t.prototype,"objectIdField",null),o([v.property({readOnly:!0,type:h,aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),o([v.property({readOnly:!0,type:g,aliasOf:"layer.spatialReference"})],t.prototype,"spatialReference",void 0),o([v.property({readOnly:!0,aliasOf:"layer.version"})],t.prototype,"version",void 0),o([v.property({readOnly:!0,type:I,aliasOf:"layer.elevationInfo"})],t.prototype,"elevationInfo",void 0),o([v.property({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],t.prototype,"minScale",void 0),o([v.property({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],t.prototype,"maxScale",void 0),o([v.property({type:["hide","show"],json:{write:!0}})],t.prototype,"listMode",void 0),o([v.property({types:s.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:j.read}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:j.read},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],t.prototype,"renderer",void 0),o([v.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],t.prototype,"definitionExpression",void 0),o([v.property(m.popupEnabled)],t.prototype,"popupEnabled",void 0),o([v.property({type:l,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),o([v.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],t.prototype,"normalReferenceFrame",void 0),o([v.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],t.prototype,"defaultPopupTemplate",null),o([v.enumeration.serializable()(new u.default({"3DObject":"3d-object",Point:"point"}))],t.prototype,"layerType",void 0),o([v.property({dependsOn:["layerType"]})],t.prototype,"geometryType",null),o([v.property({dependsOn:["layerType"]})],t.prototype,"profile",null),o([v.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],t)}(v.declared(y.LoadableMixin(c.EsriPromiseMixin(b))))}).apply(null,i))||(e.exports=o)},QJ8R:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(o=(function(e,t,i,o,n,p,l,s,a,u,y,d,c){Object.defineProperty(t,"__esModule",{value:!0});var f=s.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new c({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return p(this,void 0,void 0,(function(){var i,o;return n(this,(function(n){switch(n.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,a.create((function(e){return Promise.all([r.e(0),r.e(87)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(r.oe)}))];case 2:return i=n.sent(),a.throwIfAborted(t),[4,i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,n.sent()];case 4:throw o=n.sent(),f.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+o),o;case 5:return[2]}}))}))},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||d.getDefault());return r&&i&&!u.hasSamePortal(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},o([y.property({type:c})],t.prototype,"portalItem",null),o([y.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),o([y.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),o([y.subclass("esri.layers.mixins.PortalLayer")],t)}(y.declared(e))}}).apply(null,i))||(e.exports=o)},V42v:function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.generateUUID=function(){var e=r.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var t=function(t){return e[t].toString(16)};return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)};var r=window.crypto||window.msCrypto}).apply(null,i))||(e.exports=o)},VN8a:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("y4WC"),r("sS22"),r("V2ZO"),r("Vx27"),r("Q56x"),r("Vsc6")],void 0===(o=(function(e,t,r,i,o,n,p,l,s,a,u){var y={type:n,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:d}}},read:!1}};function d(e,t,r){if(e&&Array.isArray(e))return new n(e.map((function(e){var t=function(e){return"group"===e.layerType?c:a}(e);if(t){var i=new t;return i.read(e,r),i}r&&r.messages&&e&&r.messages.push(new l("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}var c=function(e){function t(t){var r=e.call(this,t)||this;return r.type="building-group",r.listMode="show",r.sublayers=null,r}var r;return i(t,e),r=t,t.prototype.loadAll=function(){var e=this;return p.loadAllChildren(this,(function(t){return r.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&t(e)}))}))},o([s.property({type:["hide","show","hide-children"],json:{write:!0}})],t.prototype,"listMode",void 0),o([s.property(y)],t.prototype,"sublayers",void 0),r=o([s.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],t)}(s.declared(u));return function(e){e.sublayersProperty=y,e.readSublayers=d,e.forEachSublayer=function e(t,r){t.forEach((function(t){r(t),"building-group"===t.type&&e(t.sublayers,r)}))}}(c||(c={})),c}).apply(null,i))||(e.exports=o)},Vsc6:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("NfRO"),r("EUqE"),r("Vx27"),r("EtsK")],void 0===(o=(function(e,t,r,i,o,n,p,l,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.title="",r.id=-1,r.modelName=null,r.visible=!0,r.opacity=1,r}return i(t,e),t.prototype.readTitle=function(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""},t.prototype.readIdOnlyOnce=function(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0},o([l.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],t.prototype,"title",void 0),o([l.reader("service","title",["alias","name"])],t.prototype,"readTitle",null),o([l.property()],t.prototype,"layer",void 0),o([l.property({type:Number,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"id",void 0),o([l.reader("service","id")],t.prototype,"readIdOnlyOnce",null),o([l.property(s.readOnlyService(String))],t.prototype,"modelName",void 0),o([l.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"}}})],t.prototype,"visible",void 0),o([l.property({type:Number,json:{write:!0}})],t.prototype,"opacity",void 0),o([l.subclass("esri.layers.buildingSublayers.BuildingSublayer")],t)}(l.declared(n.IdentifiableMixin(p.MultiOriginJSONSupport)))}).apply(null,i))||(e.exports=o)},Vx5u:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("rg9i"),r("Vx27")],void 0===(o=(function(e,t,r,i,o,n,p){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.filterType=null,t.filterValues=null,t}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({filterType:this.filterType,filterValues:n.clone(this.filterValues)})},i([p.property({type:String,json:{write:!0}})],t.prototype,"filterType",void 0),i([p.property({type:[String],json:{write:!0}})],t.prototype,"filterValues",void 0),o=i([p.subclass("esri.layers.support.BuildingFilterAuthoringInfoType")],t)}(p.declared(o.JSONSupport))}).apply(null,i))||(e.exports=o)},ZJpS:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("ll/V"),r("qsST"),r("KQcO"),r("k7g7")],void 0===(o=(function(e,t,r,i,o,n){Object.defineProperty(t,"__esModule",{value:!0});var p=i.getLogger("esri.layers.support.fieldProperties");t.defineFieldProperties=function(){return{fields:{type:[o],value:null},outFields:{type:[String],dependsOn:["fields"],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var e=this._userOutFields;if(!e||!e.length)return null;if(r.includes(e,"*"))return["*"];if(!this.fields)return e;for(var t=0,i=e;t<i.length;t++){var o=i[t];n.hasField(this.fields,o)||p.error("field-attributes-layer:invalid-field","Invalid field "+o+" found in outFields",{layer:this,outFields:e})}return n.fixFields(this.fields,e)}}}}}).apply(null,i))||(e.exports=o)},"ZRt/":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27")],void 0===(o=(function(e,t,r,i,o,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=null,t}return r(t,e),i([n.property({type:String,readOnly:!0,json:{write:!0}})],t.prototype,"type",void 0),i([n.subclass("esri.layers.support.BuildingFilterAuthoringInfo")],t)}(n.declared(o.JSONSupport))}).apply(null,i))||(e.exports=o)},begh:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("2Atf"),r("ifLZ"),r("k7g7"),r("O4In"),r("Ctes"),r("BwRt")],void 0===(o=(function(e,t,r,i,o,n,p,l){Object.defineProperty(t,"__esModule",{value:!0});var s=["oid","global-id","guid"];function a(e,t){return"oid"===e.type?-1:"oid"===t.type?1:d(e)?-1:d(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function u(e,t){return e.editable&&-1===s.indexOf(e.type)&&!function(e,t){if(!e||!t)return!1;var r=t.creationDateField,i=t.creatorField,o=t.editDateField,n=t.editorField;return-1!==[r&&r.toLowerCase(),i&&i.toLowerCase(),o&&o.toLowerCase(),n&&n.toLowerCase()].indexOf(e.toLowerCase())}(e.name,t)}function y(e){switch(e.type){case"small-integer":case"integer":case"single":return new l({digitSeparator:!0,places:0});case"double":return new l({digitSeparator:!0,places:2});case"date":return new l({dateFormat:"long-month-day-year"});default:return null}}function d(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}t.createPopupTemplate=function(e,t){var l=e.displayField,s=e.fields,d=e.title,f=e.visibleFieldNames,v=e.editFieldsInfo;if(!s)return null;var h=function(e,t){var r=e;return t.ignoreFieldTypes&&(e=e.filter((function(e){return-1===t.ignoreFieldTypes.indexOf(e.type)}))),0===e.length?null:(e===r&&(e=e.slice()),e.sort(a),{fields:e})}(s,r({},c,t));if(!h)return null;var g=function(e){var t=o.getDisplayFieldName(e),r=e.titleBase;return t?r+": {"+t.trim()+"}":r}({titleBase:d,fields:h.fields,displayField:l}),b=[new n.FieldsContent,new n.AttachmentsContent],m=function(e){var t=e.visibleFieldNames,r=e.editFieldsInfo;return e.fields.map((function(e){return new p({fieldName:e.name,isEditable:u(e,r),label:e.alias,format:y(e),visible:!t||t.has(e.name)})}))}({fields:h.fields,visibleFieldNames:f,editFieldsInfo:v});return new i({title:g,content:b,fieldInfos:m})};var c={ignoreFieldTypes:["geometry","blob","raster","guid","xml"]}}).apply(null,i))||(e.exports=o)},gRqF:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("y4WC"),r("6Ej+"),r("ma1f"),r("rg9i"),r("sS22"),r("qsST"),r("LxLY"),r("EUqE"),r("qMld"),r("jfWY"),r("Vx27"),r("N7S/"),r("Z4y+"),r("0RER"),r("Q56x"),r("VN8a"),r("2fnV"),r("FEX1"),r("QJ8R"),r("OXmT"),r("JNpq"),r("z01C"),r("EPMy"),r("EtsK")],void 0===(o=(function(e,t,r,i,o,n,p,l,s,a,u,y,d,c,f,v,h,g,b,m,S,w,O,j,x,I,T,F,N,B,M){var P=d.getLogger("esri.layers.BuildingSceneLayer"),R=l.ofType(N),L=u.clone(O.sublayersProperty);return L.json.origins["web-scene"]={type:[w],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}},function(e){function t(t){var r=e.call(this,t)||this;return r.operationalLayerType="BuildingSceneLayer",r.allSublayers=new s({root:r,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),r.sublayers=null,r.sublayerOverrides=null,r.filters=new R,r.activeFilterId=null,r.summaryStatistics=null,r.outFields=null,r.type="building-scene",r}return i(t,e),t.prototype.normalizeCtorArgs=function(e){return"string"==typeof e?{url:e}:e},t.prototype.readSublayers=function(e,t,r){var i=this,o=O.readSublayers(e,t,r);return O.forEachSublayer(o,(function(e){return e.layer=i})),this.sublayerOverrides&&(this.applySublayerOverrides(o,this.sublayerOverrides),this.sublayerOverrides=null),o},t.prototype.applySublayerOverrides=function(e,t){var r=t.overrides,i=t.context;O.forEachSublayer(e,(function(e){return e.read(r.get(e.id),i)}))},t.prototype.readSublayerOverrides=function(e,t){for(var r=new Map,i=0,o=e;i<o.length;i++){var n=o[i];null!=n&&"object"==typeof n&&"number"==typeof n.id?r.set(n.id,n):t.messages.push(new a("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}))}return{overrides:r,context:t}},t.prototype.writeSublayerOverrides=function(e,t,r){var i=[];O.forEachSublayer(this.sublayers,(function(e){var t=e.write({},r);Object.keys(t).length>1&&i.push(t)})),i.length>0&&(t.sublayers=i)},t.prototype.writeUnappliedOverrides=function(e,t){t.sublayers=[],e.overrides.forEach((function(e){t.sublayers.push(u.clone(e))}))},t.prototype.write=function(e,t){return e=this.inherited(arguments),t&&"web-scene"===t.origin&&(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e},t.prototype.read=function(e,t){if(this.inherited(arguments),t&&"web-scene"===t.origin&&null!=e&&Array.isArray(e.sublayers)){var r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}},t.prototype.readSummaryStatistics=function(e,t){if("string"==typeof t.statisticsHRef){var r=h.join(this.parsedUrl.path,t.statisticsHRef);return new B({url:r})}return null},Object.defineProperty(t.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),t.prototype.load=function(e){var t=this,r=c.isSome(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)}));return this.addResolvingPromise(i),v.resolve(this)},t.prototype.loadAll=function(){var e=this;return y.loadAll(this,(function(t){O.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&t(e)})),e.summaryStatistics&&t(e.summaryStatistics)}))},t.prototype.validateLayer=function(e){if(!e.layerType||"Building"!==e.layerType)throw new a("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})},t.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&P.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&P.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))},o([g.property({type:["BuildingSceneLayer"]})],t.prototype,"operationalLayerType",void 0),o([g.property({readOnly:!0})],t.prototype,"allSublayers",void 0),o([g.property(L)],t.prototype,"sublayers",void 0),o([g.reader("service","sublayers")],t.prototype,"readSublayers",null),o([g.property({type:R,nonNullable:!0,json:{write:!0}})],t.prototype,"filters",void 0),o([g.property({type:String,json:{write:!0}})],t.prototype,"activeFilterId",void 0),o([g.property({readOnly:!0,type:B})],t.prototype,"summaryStatistics",void 0),o([g.reader("summaryStatistics",["statisticsHRef"])],t.prototype,"readSummaryStatistics",null),o([g.property({type:[String],json:{read:!1}})],t.prototype,"outFields",void 0),o([g.property(M.readOnlyService(b))],t.prototype,"fullExtent",void 0),o([g.property({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),o([g.property(M.readOnlyService(m))],t.prototype,"spatialReference",void 0),o([g.property(M.elevationInfo)],t.prototype,"elevationInfo",null),o([g.property({json:{read:!1},readOnly:!0})],t.prototype,"type",void 0),o([g.subclass("esri.layers.BuildingSceneLayer")],t)}(g.declared(T.ScaleRangeLayer(F.SceneService(j.ArcGISService(x.OperationalLayer(I.PortalLayer(f.MultiOriginJSONMixin(S))))))))}).apply(null,i))||(e.exports=o)},hBBj:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("y4WC"),r("ycL1"),r("rg9i"),r("Vx27"),r("Vx5u")],void 0===(o=(function(e,t,r,i,o,n,p,l,s){var a=o.ofType(s);return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({filterTypes:p.clone(this.filterTypes)})},i([l.property({type:a,json:{write:!0}})],t.prototype,"filterTypes",void 0),o=i([l.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],t)}(l.declared(n.JSONSupport))}).apply(null,i))||(e.exports=o)},z01C:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("y4WC"),r("ycL1"),r("rg9i"),r("V42v"),r("Vx27"),r("ZRt/"),r("4a5X"),r("/9KT")],void 0===(o=(function(e,t,r,i,o,n,p,l,s,a,u,y){var d=o.ofType(y);return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.description=null,t.filterBlocks=null,t.id=l.generateUUID(),t.name=null,t}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({description:this.description,filterBlocks:p.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:p.clone(this.filterAuthoringInfo)})},i([s.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),i([s.property({type:d,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"filterBlocks",void 0),i([s.property({types:{key:"type",base:a,typeMap:{checkbox:u}},json:{read:function(e){switch(e&&e.type){case"checkbox":return u.fromJSON(e);default:return null}},write:!0}})],t.prototype,"filterAuthoringInfo",void 0),i([s.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"id",void 0),i([s.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"name",void 0),o=i([s.subclass("esri.layers.support.BuildingFilter")],t)}(s.declared(n.JSONSupport))}).apply(null,i))||(e.exports=o)}}]);