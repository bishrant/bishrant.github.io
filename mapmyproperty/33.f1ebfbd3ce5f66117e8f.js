(function(){var e={"arcgis-js-api/layers/mixins/SublayersOwner":"Blfj","esri/layers/mixins/SublayersOwner":"Blfj","arcgis-js-api/layers/mixins/CustomParametersMixin":"DF4M","esri/layers/mixins/CustomParametersMixin":"DF4M","arcgis-js-api/layers/mixins/ArcGISMapService":"G/Nd","esri/layers/mixins/ArcGISMapService":"G/Nd","esri/layers/support/sublayerUtils":"IlDW","arcgis-js-api/layers/support/Sublayer":"wIfq","esri/layers/support/Sublayer":"wIfq"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{Blfj:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("y4WC"),t("6Ej+"),t("ma1f"),t("qsST"),t("Vx27"),t("ZEeX"),t("o2T8"),t("wIfq"),t("IlDW")],void 0===(o=(function(e,r,t,i,o,n,a,l,s,u,p,y){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.SublayersOwner=r.forEachSublayer=void 0;var d=a.getLogger("esri.layers.TileLayer"),c=i.ofType(p);function f(e,r){e&&e.forEach((function(e){r(e),e.sublayers&&e.sublayers.length&&f(e.sublayers,r)}))}r.forEachSublayer=f,r.SublayersOwner=function(e){return function(e){function r(){for(var r,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var n=e.apply(this,t)||this;return n.allSublayers=new o({root:n,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),n.sublayersSourceJSON=((r={})[2]={},r[3]={},r[4]={},r[5]={},r),n.watch("sublayers",(function(e,r){return n._handleSublayersChange(e,r)}),!0),n}return t.__extends(r,e),r.prototype.readSublayers=function(e,r){if(r&&e){var t=this.sublayersSourceJSON,i=s.nameToId(r.origin);if(!(i<2||(t[i]={context:r,visibleLayers:e.visibleLayers||t[i].visibleLayers,layers:e.layers||t[i].layers},i>2))){this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);var o=this.createSublayersForOrigin("web-document"),n=o.sublayers,a=o.origin,l=u.getProperties(this);l.setDefaultOrigin(a),this._set("sublayers",new c(n)),l.setDefaultOrigin("user")}}},r.prototype.findSublayerById=function(e){return this.allSublayers.find((function(r){return r.id===e}))},r.prototype.createServiceSublayers=function(){return this.createSublayersForOrigin("service").sublayers},r.prototype.createSublayersForOrigin=function(e){for(var r=s.nameToId("web-document"===e?"web-map":e),t=2,i=this.sublayersSourceJSON[2].layers,o=this.sublayersSourceJSON[2].context,n=null,a=0,l=[3,4,5].filter((function(e){return e<=r}));a<l.length;a++){var u=l[a],d=this.sublayersSourceJSON[u];y.isSublayerOverhaul(d.layers)&&(t=u,i=d.layers,o=d.context,d.visibleLayers&&(n={visibleLayers:d.visibleLayers,context:d.context}))}for(var b=[3,4,5].filter((function(e){return e>t&&e<=r})),h=null,v=0,g=b;v<g.length;v++){var _=this.sublayersSourceJSON[g[v]],m=_.layers,S=_.visibleLayers,w=_.context;m&&(h={layers:m,context:w}),S&&(n={visibleLayers:S,context:w})}var I=function(e,r){var t=[],i={};return e?(e.forEach((function(e){var o=new p;if(o.read(e,r),i[o.id]=o,null!=e.parentLayerId&&-1!==e.parentLayerId){var n=i[e.parentLayerId];n.sublayers||(n.sublayers=[]),n.sublayers.unshift(o)}else t.unshift(o)})),t):t}(i,o),O=new Map,x=new Set;if(h)for(var L=0,j=h.layers;L<j.length;L++){var P=j[L];O.set(P.id,P)}if(n)for(var D=0,M=n.visibleLayers;D<M.length;D++)x.add(M[D]);return f(I,(function(e){h&&e.read(O.get(e.id),h.context),n&&e.read({defaultVisibility:x.has(e.id)},n.context)})),{origin:s.idToName(t),sublayers:new c({items:I})}},r.prototype.read=function(r,t){e.prototype.read.call(this,r,t),this.readSublayers(r,t)},r.prototype._handleSublayersChange=function(e,r){var t=this;r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((function(e){e.parent=t,e.layer=t})),this.handles.add([e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t})),e.on("after-remove",(function(e){var r=e.item;r.parent=null,r.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(function(e){d.error(new n("tilelayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{layer:t})),e.preventDefault()})),"sublayers-owner"))},t.__decorate([l.property({readOnly:!0})],r.prototype,"allSublayers",void 0),t.__decorate([l.property({readOnly:!0,type:i.ofType(p)})],r.prototype,"serviceSublayers",void 0),t.__decorate([l.property({value:null,type:c,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),t.__decorate([l.property({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),t.__decorate([l.subclass("esri.layers.mixins.SublayersOwner")],r)}(e)}}).apply(null,i))||(e.exports=o)},DF4M:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("Vx27")],void 0===(o=(function(e,r,t,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.CustomParametersMixin=void 0,r.CustomParametersMixin=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),t.__decorate([i.property({json:{write:!0,origins:{"web-scene":{write:!1}}}})],r.prototype,"customParameters",void 0),t.__decorate([i.subclass("esri.layers.mixins.CustomParametersMixin")],r)}(e)}}).apply(null,i))||(e.exports=o)},"G/Nd":function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("zp6E"),t("qMld"),t("jfWY"),t("Vx27"),t("N7S/"),t("Z4y+"),t("EtsK")],void 0===(o=(function(e,r,t,i,o,n,a,l,s,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ArcGISMapService=void 0,r.ArcGISMapService=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.capabilities=void 0,r.copyright=null,r.fullExtent=null,r.legendEnabled=!0,r.spatialReference=null,r.version=null,r}return t.__extends(r,e),r.prototype.readCapabilities=function(e,r){var t=r.capabilities&&r.capabilities.split(",").map((function(e){return e.toLowerCase().trim()}));if(!t)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var i=this.type,o=-1!==t.indexOf("query"),n=-1!==t.indexOf("map"),a=!!r.exportTilesAllowed,l=-1!==t.indexOf("tilemap"),s="tile"!==i&&!!r.supportsDynamicLayers;return{operations:{supportsQuery:o,supportsExportMap:n,supportsExportTiles:a,supportsTileMap:l},exportMap:n?{supportsSublayersChanges:"tile"!==i,supportsDynamicLayers:s,supportsSublayerVisibility:"tile"!==i&&(!r.tileInfo||s),supportsSublayerDefinitionExpression:"tile"!==i&&(!r.tileInfo||s)}:null,exportTiles:a?{maxExportTilesCount:+r.maxExportTilesCount}:null}},r.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t},r.prototype.fetchSublayerInfo=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,this.fetchAllLayersAndTables(r)];case 1:return t.sent(),[2,this._allLayersAndTablesMap.get(e)]}}))}))},r.prototype.fetchAllLayersAndTables=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,a=this;return t.__generator(this,(function(l){switch(l.label){case 0:return[4,this.load(e)];case 1:return l.sent(),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=i(n.urlToObject(this.url).path+"/layers",{responseType:"json",query:t.__assign({f:"json"},this.customParameters)}).then((function(e){a._allLayersAndTablesMap=new Map;for(var r=0,t=e.data.layers;r<t.length;r++){var i=t[r];a._allLayersAndTablesMap.set(i.id,i)}return{result:e.data}}),(function(e){return{error:e}}))),[4,this._allLayersAndTablesPromise];case 2:if(r=l.sent(),o.throwIfAborted(e),"result"in r)return[2,r.result];throw r.error}}))}))},t.__decorate([a.property({readOnly:!0})],r.prototype,"capabilities",void 0),t.__decorate([a.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),t.__decorate([a.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),t.__decorate([a.property({type:l})],r.prototype,"fullExtent",void 0),t.__decorate([a.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],r.prototype,"id",void 0),t.__decorate([a.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),t.__decorate([a.property(u.popupEnabled)],r.prototype,"popupEnabled",void 0),t.__decorate([a.property({type:s})],r.prototype,"spatialReference",void 0),t.__decorate([a.property()],r.prototype,"version",void 0),t.__decorate([a.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),t.__decorate([a.subclass("esri.layers.mixins.ArcGISMapService")],r)}(e)}}).apply(null,i))||(e.exports=o)},IlDW:function(e,r,t){var i,o;i=[t.dj.c(e.i),r],void 0===(o=(function(e,r){"use strict";function t(e,r){if(!e||!e.length)return!0;var t=r.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).map((function(e){return e.id})).toArray();if(e.length>t.length)return!1;for(var i=0,o=t.length,n=0,a=e;n<a.length;n++){for(var l=a[n].id;i<o&&t[i]!==l;)i++;if(i>=o)return!1}return!0}Object.defineProperty(r,"__esModule",{value:!0}),r.isSublayerOverhaul=r.isExportDynamic=r.shouldWriteSublayerStructure=void 0,r.shouldWriteSublayerStructure=function(e,r,i){return r.flatten((function(e){return e.sublayers})).length!==e.length||!!e.some((function(e){return e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i}))||!t(e,r)},r.isExportDynamic=function(e,r,i){return!!e.some((function(e){var r=e.source;return!(!r||"map-layer"===r.type&&r.mapLayerId===e.id&&(!r.gdbVersion||r.gdbVersion===i.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!t(e,r)},r.isSublayerOverhaul=function(e){return!!e&&e.some((function(e){return null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale}))}}).apply(null,i))||(e.exports=o)},wIfq:function(e,r,t){var i,o;i=[t.dj.c(e.i),r,t("zOht"),t("TMur"),t("ifLZ"),t("OXG3"),t("zp6E"),t("+AWJ"),t("y4WC"),t("ma1f"),t("7MDj"),t("NfRO"),t("rg9i"),t("R7Ts"),t("qsST"),t("EUqE"),t("qMld"),t("jfWY"),t("Vx27"),t("1dvD"),t("ZEeX"),t("o2T8"),t("V+oH"),t("KQcO"),t("I90O"),t("k7g7"),t("5WBt"),t("0/H7"),t("cOz7"),t("begh"),t("IpeC"),t("2Kdy")],void 0===(o=(function(e,r,i,o,n,a,l,s,u,p,y,d,c,f,b,h,v,g,_,m,S,w,I,O,x,L,j,P,D,M,E){"use strict";function T(e){return e&&"esriSMS"===e.type}function F(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function N(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=S.nameToId(t.origin))}}var A=b.getLogger("esri.layers.support.Sublayer"),V=0,C=new Set;return C.add("layer"),C.add("parent"),C.add("loaded"),C.add("loadStatus"),C.add("loadError"),C.add("loadWarnings"),function(e){function r(r){var t=e.call(this,r)||this;return t.capabilities=void 0,t.fields=null,t.fullExtent=null,t.globalIdField=null,t.legendEnabled=!0,t.objectIdField=null,t.popupEnabled=!0,t.popupTemplate=null,t.sourceJSON=null,t.title=null,t.typeIdField=null,t.types=null,t}var y;return i.__extends(r,e),y=r,r.prototype.load=function(e){return i.__awaiter(this,void 0,void 0,(function(){var r=this;return i.__generator(this,(function(t){return this.addResolvingPromise(i.__awaiter(r,void 0,void 0,(function(){var r,t,o,n,a;return i.__generator(this,(function(s){switch(s.label){case 0:if(!this.layer&&!this.url)throw new p("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});return r=null,!this.layer||this.originIdOf("url")>2||"data-layer"===(null===(n=this.source)||void 0===n?void 0:n.type)?[4,l(this.url,i.__assign({responseType:"json",query:{f:"json"}},e))]:[3,2];case 1:return t=s.sent(),r=t.data,[3,4];case 2:return o=this.id,"map-layer"===(null===(a=this.source)||void 0===a?void 0:a.type)&&(o=this.source.mapLayerId),[4,this.layer.fetchSublayerInfo(o,e)];case 3:r=s.sent(),s.label=4;case 4:return r&&(this.sourceJSON=r,this.read({layerDefinition:r},{origin:"service"})),[2]}}))}))),[2,this]}))}))},r.prototype.readCapabilities=function(e,r){var t=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map((function(e){return e.trim()})):[];return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:-1!==t.indexOf("query")}}},Object.defineProperty(r.prototype,"definitionExpression",{set:function(e){this._setAndNotifyLayer("definitionExpression",e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fieldsIndex",{get:function(){return new x(this.fields||[])},enumerable:!1,configurable:!0}),r.prototype.readGlobalIdFieldFromService=function(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(var t=0,i=r.fields;t<i.length;t++){var o=i[t];if("esriFieldTypeGlobalID"===o.type)return o.name}},Object.defineProperty(r.prototype,"id",{get:function(){var e=this._get("id");return null==e?V++:e},set:function(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"labelingInfo",{set:function(e){this._setAndNotifyLayer("labelingInfo",e)},enumerable:!1,configurable:!0}),r.prototype.writeLabelingInfo=function(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((function(e){return e.write({},i)}))}})},Object.defineProperty(r.prototype,"labelsVisible",{set:function(e){this._setAndNotifyLayer("labelsVisible",e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(r){return r.layer=e}))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"listMode",{set:function(e){this._set("listMode",e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"minScale",{set:function(e){this._setAndNotifyLayer("minScale",e)},enumerable:!1,configurable:!0}),r.prototype.readMinScale=function(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0},Object.defineProperty(r.prototype,"maxScale",{set:function(e){this._setAndNotifyLayer("maxScale",e)},enumerable:!1,configurable:!0}),r.prototype.readMaxScale=function(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0},r.prototype.readObjectIdFieldFromService=function(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(var t=0,i=r.fields;t<i.length;t++){var o=i[t];if("esriFieldTypeOID"===o.type)return o.name}},Object.defineProperty(r.prototype,"opacity",{set:function(e){this._setAndNotifyLayer("opacity",e)},enumerable:!1,configurable:!0}),r.prototype.readOpacity=function(e,r){var t=r.layerDefinition;return 1-.01*(null!=t.transparency?t.transparency:t.drawingInfo.transparency)},r.prototype.writeOpacity=function(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}},r.prototype.writeParent=function(e,r){r.parentLayerId=this.parent&&this.parent!==this.layer?this.parent.id:-1},Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"renderer",{set:function(e){if(e)for(var r=0,t=e.getSymbols();r<t.length;r++)if(s.isSymbol3D(t[r])){A.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"source",{get:function(){return this._get("source")||new D.MapLayerSource({mapLayerId:this.id})},set:function(e){this._setAndNotifyLayer("source",e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"sublayers",{set:function(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)},enumerable:!1,configurable:!0}),r.prototype.castSublayers=function(e){return m.default(u.ofType(y),e)},r.prototype.writeSublayers=function(e,r,t){this.get("sublayers.length")&&(r[t]=this.sublayers.map((function(e){return e.id})).toArray().reverse())},r.prototype.readTypeIdField=function(e,r){var t=(r=r.layerDefinition||r).typeIdField;if(t){var i=L.getField(r.fields,t);if(i)return i.name}return null},Object.defineProperty(r.prototype,"url",{get:function(){var e,r,t=null!==(r=null===(e=this.layer)||void 0===e?void 0:e.parsedUrl)&&void 0!==r?r:this._lastParsedUrl,i=this.source;if(!t)return null;if(this._lastParsedUrl=t,"map-layer"===(null==i?void 0:i.type))return t.path+"/"+i.mapLayerId;var o={layer:JSON.stringify({source:this.source})};return t.path+"/dynamicLayer?"+g.objectToQuery(o)},set:function(e){e?this._override("url",e):this._clearOverride("url")},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"visible",{set:function(e){this._setAndNotifyLayer("visible",e)},enumerable:!1,configurable:!0}),r.prototype.writeVisible=function(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e},r.prototype.clone=function(){var e=w.getProperties(this).store,r=new y;return w.getProperties(r).store=e.clone(C),r._lastParsedUrl=this._lastParsedUrl,r},r.prototype.createPopupTemplate=function(e){return M.createPopupTemplate(this,e)},r.prototype.createQuery=function(){return new E({returnGeometry:!0,where:this.definitionExpression||"1=1"})},r.prototype.createFeatureLayer=function(){var e,r;return i.__awaiter(this,void 0,void 0,(function(){var o,n,a;return i.__generator(this,(function(i){switch(i.label){case 0:return this.hasOwnProperty("sublayers")?[2,null]:(o=null===(e=this.layer)||void 0===e?void 0:e.parsedUrl,[4,new Promise((function(e,r){t.e(20).then((function(){var r=[t("Zvuv")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))]);case 1:return n=i.sent(),a=new n({url:o.path}),o&&this.source&&("map-layer"===this.source.type?a.layerId=this.source.mapLayerId:a.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(a.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(a.definitionExpression=this.definitionExpression),this.originIdOf("labelingInfo")>2&&(a.labelingInfo=c.clone(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(a.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(a.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(a.visible=this.visible),this.originIdOf("minScale")>0&&(a.minScale=this.minScale),this.originIdOf("maxScale")>0&&(a.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(a.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(a.popupTemplate=c.clone(this.popupTemplate)),this.originIdOf("renderer")>2&&(a.renderer=c.clone(this.renderer)),"data-layer"===(null===(r=this.source)||void 0===r?void 0:r.type)&&(a.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(a.title=this.title),[2,a]}}))}))},r.prototype.getFeatureType=function(e){var r=this.typeIdField;if(!r||!e)return null;var t=e.attributes?e.attributes[r]:void 0;if(null==t)return null;var i=null;return this.types.some((function(e){var r=e.id;return null!=r&&(r.toString()===t.toString()&&(i=e),!!i)})),i},r.prototype.getFieldDomain=function(e,r){var t=this.getFeatureType(r&&r.feature);if(t){var i=t.domains&&t.domains[e];if(i&&"inherited"!==i.type)return i}return this._getLayerDomain(e)},r.prototype.queryFeatures=function(e,r){var i=this;return void 0===e&&(e=this.createQuery()),this.load().then((function(){if(!i.get("capabilities.operations.supportsQuery"))throw new p("Sublayer.queryFeatures","this layer doesn't support queries.");return v.all([new Promise((function(e,r){Promise.resolve().then((function(){var r=[t("B16N")];e.apply(null,r)}).bind(this)).catch(r.bind(this))})),new Promise((function(e,r){Promise.resolve().then((function(){var r=[t("w1v0")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))])})).then((function(t){var o=t[1];return(0,t[0].executeQuery)(i.url,E.from(e),i.layer?i.layer.spatialReference:null,r).then((function(e){return o.fromJSON(e.data)}))})).then((function(e){return e&&e.features&&e.features.forEach((function(e){e.sourceLayer=i})),e}))},r.prototype.toExportImageJSON=function(){var e,r=this,t={id:this.id,source:null===(e=this.source)||void 0===e?void 0:e.toJSON()};this.definitionExpression&&(t.definitionExpression=this.definitionExpression);var i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((function(e,t){return e[t]=r.originIdOf(t),e}),{});if(Object.keys(i).some((function(e){return i[e]>=2}))){var o=t.drawingInfo={};i.renderer>=2&&(o.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>=2&&(o.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>=2&&(o.labelingInfo=this.labelingInfo?this.labelingInfo.map((function(e){return e.write({},{origin:"service"})})):null,o.showLabels=!0),i.opacity>=2&&(o.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(o.renderer)}return t},r.prototype._assignDefaultSymbolColors=function(e){this._forEachSimpleMarkerSymbols(e,(function(e){e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.color=e.outline&&e.outline.color?e.outline.color:[0,0,0,0])}))},r.prototype._forEachSimpleMarkerSymbols=function(e,r){if(e){for(var t=0,i=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[]);t<i.length;t++){var o=i[t];T(o.symbol)&&r(o.symbol)}"symbol"in e&&T(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&T(e.defaultSymbol)&&r(e.defaultSymbol)}},r.prototype._setAndNotifyLayer=function(e,r){var t,i,o=this.layer,n=this._get(e);switch(e){case"definitionExpression":t="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":t="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":t="supportsDynamicLayers",i="supportsModification"}var a=w.getProperties(this).getDefaultOrigin();if("service"!==a){if(t&&!1===this.get("layer.capabilities.exportMap."+t))return void this._logLockedError(e,"capability not available 'layer.capabilities.exportMap."+t+"'");if(i&&!1===this.get("capabilities.exportMap."+i))return void this._logLockedError(e,"capability not available 'capabilities.exportMap."+i+"'")}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==a&&n!==r&&o&&o.emit&&o.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")},r.prototype._handleSublayersChange=function(e,r){var t=this;r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this.handles.add([e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var r=e.item;r.parent=null,r.layer=null})),e.on("before-changes",(function(e){var r=t.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||(A.error(new p("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:t,layer:t.layer})),e.preventDefault())}))]))},r.prototype._logLockedError=function(e,r){A.error(new p("sublayer:locked","Property '"+e+"' can't be changed on Sublayer from the layer '"+this.layer.id+"'",{reason:r,sublayer:this,layer:this.layer}))},r.prototype._getLayerDomain=function(e){var r=this.fieldsIndex.get(e);return r?r.domain:null},r.test={isSublayerStructureOverridePolicy:function(e){return e===F}},i.__decorate([_.property({readOnly:!0})],r.prototype,"capabilities",void 0),i.__decorate([_.reader("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],r.prototype,"readCapabilities",null),i.__decorate([_.property({type:String,value:null,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression",overridePolicy:N}}})],r.prototype,"definitionExpression",null),i.__decorate([_.property({type:[O],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],r.prototype,"fields",void 0),i.__decorate([_.property({readOnly:!0,dependsOn:["fields"]})],r.prototype,"fieldsIndex",null),i.__decorate([_.property({type:o.Extent,json:{read:{source:"layerDefinition.extent"}}})],r.prototype,"fullExtent",void 0),i.__decorate([_.property({type:String})],r.prototype,"globalIdField",void 0),i.__decorate([_.reader("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],r.prototype,"readGlobalIdFieldFromService",null),i.__decorate([_.property({type:Number,json:{write:{ignoreOrigin:!0}}})],r.prototype,"id",null),i.__decorate([_.property({value:null,type:[j],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:F}}})],r.prototype,"labelingInfo",null),i.__decorate([_.writer("labelingInfo")],r.prototype,"writeLabelingInfo",null),i.__decorate([_.property({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:F}}})],r.prototype,"labelsVisible",null),i.__decorate([_.property({value:null})],r.prototype,"layer",null),i.__decorate([_.property({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:N}}})],r.prototype,"legendEnabled",void 0),i.__decorate([_.property({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],r.prototype,"listMode",null),i.__decorate([_.property({type:Number,value:0,json:{write:{overridePolicy:F}}})],r.prototype,"minScale",null),i.__decorate([_.reader("minScale",["minScale","layerDefinition.minScale"])],r.prototype,"readMinScale",null),i.__decorate([_.property({type:Number,value:0,json:{write:{overridePolicy:F}}})],r.prototype,"maxScale",null),i.__decorate([_.reader("maxScale",["maxScale","layerDefinition.maxScale"])],r.prototype,"readMaxScale",null),i.__decorate([_.property({type:String})],r.prototype,"objectIdField",void 0),i.__decorate([_.reader("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],r.prototype,"readObjectIdFieldFromService",null),i.__decorate([_.property({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:F}}})],r.prototype,"opacity",null),i.__decorate([_.reader("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],r.prototype,"readOpacity",null),i.__decorate([_.writer("opacity")],r.prototype,"writeOpacity",null),i.__decorate([_.property({json:{type:Number,write:{target:"parentLayerId",allowNull:!0,overridePolicy:F}}})],r.prototype,"parent",void 0),i.__decorate([_.writer("parent")],r.prototype,"writeParent",null),i.__decorate([_.property({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",overridePolicy:N,writer:function(e,r,t){r[t]=!e}}}})],r.prototype,"popupEnabled",void 0),i.__decorate([_.property({type:n,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:N}}})],r.prototype,"popupTemplate",void 0),i.__decorate([_.property({readOnly:!0,dependsOn:["fields","title"]})],r.prototype,"defaultPopupTemplate",null),i.__decorate([_.property({types:a.rendererTypes,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:F},origins:{"web-scene":{types:a.webSceneRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:F}}}}})],r.prototype,"renderer",null),i.__decorate([_.property({types:{key:"type",base:null,typeMap:{"data-layer":P.DataLayerSource,"map-layer":D.MapLayerSource}},cast:function(e){if(e){if("mapLayerId"in e)return m.ensureClass(D.MapLayerSource,e);if("dataSource"in e)return m.ensureClass(P.DataLayerSource,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:F}}})],r.prototype,"source",null),i.__decorate([_.property()],r.prototype,"sourceJSON",void 0),i.__decorate([_.property({value:null,json:{type:[m.Integer],write:{target:"subLayerIds",allowNull:!0,overridePolicy:F}}})],r.prototype,"sublayers",null),i.__decorate([_.cast("sublayers")],r.prototype,"castSublayers",null),i.__decorate([_.writer("sublayers")],r.prototype,"writeSublayers",null),i.__decorate([_.property({type:String,json:{read:{source:"name"},write:{target:"name",allowNull:!0,overridePolicy:N}}})],r.prototype,"title",void 0),i.__decorate([_.property({type:String})],r.prototype,"typeIdField",void 0),i.__decorate([_.reader("typeIdField",["layerDefinition.typeIdField"])],r.prototype,"readTypeIdField",null),i.__decorate([_.property({type:[I],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],r.prototype,"types",void 0),i.__decorate([_.property({type:String,dependsOn:["layer","source"],json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:function(){return{enabled:this._isOverridden("url")}}}}})],r.prototype,"url",null),i.__decorate([_.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:F}}})],r.prototype,"visible",null),i.__decorate([_.writer("visible")],r.prototype,"writeVisible",null),y=i.__decorate([_.subclass("esri.layers.support.Sublayer")],r)}(y.HandleOwnerMixin(h.MultiOriginJSONMixin(d.IdentifiableMixin(f))))}).apply(null,i))||(e.exports=o)}}]);