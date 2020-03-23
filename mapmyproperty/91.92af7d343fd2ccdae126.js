(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/mixins/ArcGISService":"2fnV","esri/layers/mixins/SceneService":"JNpq","esri/layers/support/I3SLayerDefinitions":"OjNT","esri/layers/mixins/PortalLayer":"QJ8R"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[91,44,92,115],{"2fnV":function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("qsST"),r("Vx27"),r("8CIp")],void 0===(i=(function(e,t,r,o,i,n,a){Object.defineProperty(t,"__esModule",{value:!0});var p=i.getLogger("esri.layers.mixins.ArcGISService");t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=a.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",a.sanitizeUrl(e,p))},enumerable:!0,configurable:!0}),o([n.property({dependsOn:["url"]})],t.prototype,"title",null),o([n.property({type:String})],t.prototype,"url",null),o([n.subclass("esri.layers.mixins.ArcGISService")],t)}(n.declared(e))}}).apply(null,o))||(e.exports=i)},JNpq:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("zp6E"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("N7S/"),r("MFVu"),r("Z4y+"),r("8CIp"),r("EtsK")],void 0===(i=(function(e,t,r,o,i,n,a,p,l,s,u,y,d,c,f,h,v){Object.defineProperty(t,"__esModule",{value:!0});var m=l.getLogger("esri.layers.mixins.SceneService");t.SceneService=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.blendMode=null,t.spatialReference=null,t.fullExtent=null,t.heightModelInfo=null,t.minScale=0,t.maxScale=0,t.version={major:Number.NaN,minor:Number.NaN,versionString:""},t.copyright=null,t.sublayerTitleMode="item-title",t.title=null,t.layerId=null,t}return r(t,e),t.prototype.readSpatialReference=function(e,t){return this._readSpatialReference(t)},t.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return f.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new f(o):null},t.prototype.readFullExtent=function(e,t){var r=t.store,o=this._readSpatialReference(t);return null==o||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some((function(e){return e<b}))?null:new d({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})},t.prototype.readVersion=function(e,t){var r=t.store,o=null!=r.version?r.version.toString():"",i={major:Number.NaN,minor:Number.NaN,versionString:o},n=o.split(".");return n.length>=2&&(i.major=parseInt(n[0],10),i.minor=parseInt(n[1],10)),i},t.prototype.readTitlePortalItem=function(e){return"item-title"!==this.sublayerTitleMode?void 0:e},t.prototype.readTitleService=function(e,t){var r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return h.titleFromUrlAndName(this.url,t.name);var o=t.name||h.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),h.cleanTitle(o)},t.prototype.readLayerId=function(e,t){return t.id},Object.defineProperty(t.prototype,"url",{set:function(e){var t=h.sanitizeUrlWithLayerId(this,e,m);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)},enumerable:!0,configurable:!0}),t.prototype.writeUrl=function(e,t,r,o){h.writeUrlWithLayerId(this,e,"layers",t,o)},Object.defineProperty(t.prototype,"parsedUrl",{get:function(){var e=this._get("url");if(!e)return null;var t=u.urlToObject(e);return null!=this.layerId&&h.isArcGISUrl(t.path)&&(t.path=t.path+"/layers/"+this.layerId),t},enumerable:!0,configurable:!0}),t.prototype._verifyRootNodeAndUpdateExtent=function(e,t){return n(this,void 0,void 0,(function(){var r,o,n;return i(this,(function(i){switch(i.label){case 0:if(!e)return[3,4];i.label=1;case 1:return i.trys.push([1,3,,4]),r=this._updateExtentFromRootPage,o=[e],[4,this._fetchRootPage(e,t)];case 2:return[2,r.apply(this,o.concat([i.sent()]))];case 3:return i.sent(),[3,4];case 4:return n=this._updateExtentFromRootNode,[4,this._fetchRootNode(t)];case 5:return[2,n.apply(this,[i.sent()])]}}))}))},t.prototype._fetchRootPage=function(e,t){return n(this,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return e?(r=Math.floor(e.rootIndex/e.nodesPerPage),[4,a(this.parsedUrl.path+"/nodepages/"+r,{responseType:"json",signal:t})]):[2,s.reject()];case 1:return[2,o.sent().data]}}))}))},t.prototype._updateExtentFromRootPage=function(e,t){if(null==t||null==t.nodes)throw new p("sceneservice:invalid-node-page","Inavlid node page.");var r=t.nodes[e.rootIndex%e.nodesPerPage];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new p("sceneservice:invalid-node-page","Inavlid node page.");var o=r.obb.halfSize,i=r.obb.center[2],n=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=i-n,this.fullExtent.zmax=i+n},t.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}},t.prototype._fetchRootNode=function(e){return n(this,void 0,void 0,(function(){var t,r;return i(this,(function(o){switch(o.label){case 0:if(!this.rootNode)return[2];t=u.join(this.parsedUrl.path,this.rootNode),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,a(t,{query:{f:"json"},responseType:"json",signal:e})];case 2:return[2,o.sent().data];case 3:throw r=o.sent(),new p("sceneservice:root-node-missing","Root node missing.",{error:r,url:t});case 4:return[2]}}))}))},t.prototype._fetchService=function(e){return n(this,void 0,void 0,(function(){var t;return i(this,(function(r){switch(r.label){case 0:return null==this.layerId&&/SceneServer\/*$/i.test(this.url)?[4,this._fetchFirstLayerId(e)]:[3,2];case 1:null!=(t=r.sent())&&(this.layerId=t),r.label=2;case 2:return[2,this._fetchServiceLayer(e)]}}))}))},t.prototype._fetchFirstLayerId=function(e){return n(this,void 0,void 0,(function(){var t;return i(this,(function(r){switch(r.label){case 0:return[4,a(this.url,{query:{f:"json"},responseType:"json",signal:e})];case 1:return(t=r.sent()).data&&Array.isArray(t.data.layers)&&t.data.layers.length>0?[2,t.data.layers[0].id]:[2,void 0]}}))}))},t.prototype._fetchServiceLayer=function(e){return n(this,void 0,void 0,(function(){var t,r;return i(this,(function(o){switch(o.label){case 0:return[4,a(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})];case 1:return(t=o.sent()).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.read(r=t.data,{origin:"service",url:this.parsedUrl}),this.validateLayer(r),[2]}}))}))},t.prototype.validateLayer=function(e){},o([y.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],t.prototype,"properties",void 0),o([y.property({type:f})],t.prototype,"spatialReference",void 0),o([y.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),o([y.property({type:d})],t.prototype,"fullExtent",void 0),o([y.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),o([y.property({readOnly:!0,type:c})],t.prototype,"heightModelInfo",void 0),o([y.property({type:Number,json:{read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"},origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),o([y.property({type:Number,json:{read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"},origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),o([y.property({readOnly:!0})],t.prototype,"version",void 0),o([y.reader("version",["store.version"])],t.prototype,"readVersion",null),o([y.property({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),o([y.property({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),o([y.property({type:String})],t.prototype,"title",void 0),o([y.reader("portal-item","title")],t.prototype,"readTitlePortalItem",null),o([y.reader("service","title",["name"])],t.prototype,"readTitleService",null),o([y.property({type:Number})],t.prototype,"layerId",void 0),o([y.reader("service","layerId",["id"])],t.prototype,"readLayerId",null),o([y.property(v.url)],t.prototype,"url",null),o([y.writer("url")],t.prototype,"writeUrl",null),o([y.property({dependsOn:["layerId"]})],t.prototype,"parsedUrl",null),o([y.property({readOnly:!0})],t.prototype,"store",void 0),o([y.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),o([y.subclass("esri.layers.mixins.SceneService")],t)}(y.declared(e))};var b=-1e38}).apply(null,o))||(e.exports=i)},OjNT:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27")],void 0===(i=(function(e,t,r,o,i,n){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nodesPerPage=null,t.rootIndex=0,t.lodSelectionMetricType=null,t}return r(t,e),o([n.property({type:Number})],t.prototype,"nodesPerPage",void 0),o([n.property({type:Number})],t.prototype,"rootIndex",void 0),o([n.property({type:String})],t.prototype,"lodSelectionMetricType",void 0),o([n.subclass("esri.layer.support.I3SNodePageDefinition")],t)}(n.declared(i.JSONSupport));t.I3SNodePageDefinition=a;var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.factor=1,t}return r(t,e),o([n.property({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],t.prototype,"id",void 0),o([n.property({type:Number})],t.prototype,"factor",void 0),o([n.subclass("esri.layer.support.I3SMaterialTexture")],t)}(n.declared(i.JSONSupport));t.I3SMaterialTexture=p;var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.baseColorFactor=[1,1,1,1],t.baseColorTexture=null,t.metallicRoughnessTexture=null,t.metallicFactor=1,t.roughnessFactor=1,t}return r(t,e),o([n.property({type:[Number]})],t.prototype,"baseColorFactor",void 0),o([n.property({type:p})],t.prototype,"baseColorTexture",void 0),o([n.property({type:p})],t.prototype,"metallicRoughnessTexture",void 0),o([n.property({type:Number})],t.prototype,"metallicFactor",void 0),o([n.property({type:Number})],t.prototype,"roughnessFactor",void 0),o([n.subclass("esri.layer.support.I3SMaterialPBRMetallicRoughness")],t)}(n.declared(i.JSONSupport));t.I3SMaterialPBRMetallicRoughness=l;var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.alphaMode="opaque",t.alphaCutoff=.25,t.doubleSided=!1,t.cullFace="none",t.normalTexture=null,t.occlusionTexture=null,t.emissiveTexture=null,t.emissiveFactor=null,t.pbrMetallicRoughness=null,t}return r(t,e),o([n.enumeration.serializable()({opaque:"opaque",mask:"mask",blend:"blend"})],t.prototype,"alphaMode",void 0),o([n.property({type:Number})],t.prototype,"alphaCutoff",void 0),o([n.property({type:Boolean})],t.prototype,"doubleSided",void 0),o([n.enumeration.serializable()({none:"none",back:"back",front:"front"})],t.prototype,"cullFace",void 0),o([n.property({type:p})],t.prototype,"normalTexture",void 0),o([n.property({type:p})],t.prototype,"occlusionTexture",void 0),o([n.property({type:p})],t.prototype,"emissiveTexture",void 0),o([n.property({type:[Number]})],t.prototype,"emissiveFactor",void 0),o([n.property({type:l})],t.prototype,"pbrMetallicRoughness",void 0),o([n.subclass("esri.layer.support.I3SMaterialDefinition")],t)}(n.declared(i.JSONSupport));t.I3SMaterialDefinition=s;var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),o([n.property({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:""+t.index}}}})],t.prototype,"name",void 0),o([n.enumeration.serializable()({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2"})],t.prototype,"format",void 0),o([n.subclass("esri.layer.support.I3STextureFormat")],t)}(n.declared(i.JSONSupport));t.I3STextureFormat=u;var y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.atlas=!1,t}return r(t,e),o([n.property({type:[u]})],t.prototype,"formats",void 0),o([n.property({type:Boolean})],t.prototype,"atlas",void 0),o([n.subclass("esri.layer.support.I3STextureSetDefinition")],t)}(n.declared(i.JSONSupport));t.I3STextureSetDefinition=y;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),o([n.enumeration.serializable()({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],t.prototype,"type",void 0),o([n.property({type:Number})],t.prototype,"component",void 0),o([n.subclass("esri.layer.support.I3SGeometryAttribute")],t)}(n.declared(i.JSONSupport));t.I3SGeometryAttribute=d;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),o([n.enumeration.serializable()({draco:"draco"})],t.prototype,"encoding",void 0),o([n.property({type:[String]})],t.prototype,"attributes",void 0),o([n.subclass("esri.layer.support.I3SGeometryAttribute")],t)}(n.declared(i.JSONSupport));t.I3SGeometryCompressedAttributes=c;var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.offset=0,t}return r(t,e),o([n.property({type:Number})],t.prototype,"offset",void 0),o([n.property({type:d})],t.prototype,"position",void 0),o([n.property({type:d})],t.prototype,"normal",void 0),o([n.property({type:d})],t.prototype,"uv0",void 0),o([n.property({type:d})],t.prototype,"color",void 0),o([n.property({type:d})],t.prototype,"uvRegion",void 0),o([n.property({type:d})],t.prototype,"featureId",void 0),o([n.property({type:d})],t.prototype,"faceRange",void 0),o([n.property({type:c})],t.prototype,"compressedAttributes",void 0),o([n.subclass("esri.layer.support.I3SGeometryBuffer")],t)}(n.declared(i.JSONSupport));t.I3SGeometryBuffer=f;var h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),o([n.enumeration.serializable()({triangle:"triangle"})],t.prototype,"topology",void 0),o([n.property()],t.prototype,"geometryBuffers",void 0),o([n.subclass("esri.layer.support.I3SMeshDefinition")],t)}(n.declared(i.JSONSupport));t.I3SGeometryDefinition=h}).apply(null,o))||(e.exports=i)},QJ8R:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(i=(function(e,t,o,i,n,a,p,l,s,u,y,d,c){Object.defineProperty(t,"__esModule",{value:!0});var f=l.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new c({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return a(this,void 0,void 0,(function(){var o,i;return n(this,(function(n){switch(n.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,s.create((function(e){return Promise.all([r.e(0),r.e(98)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(r.oe)}))];case 2:return o=n.sent(),s.throwIfAborted(t),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,n.sent()];case 4:throw i=n.sent(),f.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+i),i;case 5:return[2]}}))}))},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||d.getDefault());return r&&o&&!u.hasSamePortal(o.restUrl,r.restUrl)?(t.messages&&t.messages.push(new p("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},i([y.property({type:c})],t.prototype,"portalItem",null),i([y.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),i([y.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),i([y.subclass("esri.layers.mixins.PortalLayer")],t)}(y.declared(e))}}).apply(null,o))||(e.exports=i)}}]);