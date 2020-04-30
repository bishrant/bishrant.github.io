(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/support/WMSSublayer":"Gny7","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/layers/support/ExportWMSImageParameters":"UDyV","arcgis-js-api/layers/mixins/RefreshableLayer":"WaJo","arcgis-js-api/layers/WMSLayer":"dWJG","arcgis-js-api/layers/support/wmsUtils":"xii5"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[39,25,44,105,106,107,108,109,110,116,117],{Gny7:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("dxjN"),r("y4WC"),r("eIBl"),r("EUqE"),r("Vx27"),r("1dvD"),r("N7S/")],void 0===(a=(function(e,t,r,n,a,i,o,s,l,p,u){var y=0;return function(e){function t(t){var r=e.call(this,t)||this;return r._sublayersHandles=new o,r.fullExtents=null,r.featureInfoFormat=null,r.featureInfoUrl=null,r.legendUrl=null,r.legendEnabled=!0,r.maxScale=0,r.minScale=0,r.popupEnabled=!1,r.queryable=!1,r.spatialReferences=null,r}var a;return r(t,e),a=t,Object.defineProperty(t.prototype,"description",{get:function(){return this._get("description")},set:function(e){this._set("description",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullExtent",{get:function(){return this._get("fullExtent")},set:function(e){this._set("fullExtent",e)},enumerable:!0,configurable:!0}),t.prototype.readExtent=function(e,t){return(e=t.extent)?u.fromJSON(e):null},Object.defineProperty(t.prototype,"id",{get:function(){var e=this._get("id");return null==e?y++:e},set:function(e){this._set("id",e)},enumerable:!0,configurable:!0}),t.prototype.readLegendUrl=function(e,t){return t?t.legendUrl||t.legendURL:null},Object.defineProperty(t.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._get("name")},set:function(e){this._set("name",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sublayers",{set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles.add([e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))])),this._set("sublayers",e)},enumerable:!0,configurable:!0}),t.prototype.castSublayers=function(e){return p.default(i.ofType(a),e)},Object.defineProperty(t.prototype,"title",{get:function(){return this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._setAndNotifyLayer("visible",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){var e=new a;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((function(e){return e.clone()}))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((function(e){return e.clone()}))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((function(e){return e}))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e},t.prototype._setAndNotifyLayer=function(e,t){var r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))},n([l.property()],t.prototype,"description",null),n([l.property({value:null})],t.prototype,"fullExtent",null),n([l.reader("fullExtent",["extent"])],t.prototype,"readExtent",null),n([l.property()],t.prototype,"fullExtents",void 0),n([l.property()],t.prototype,"featureInfoFormat",void 0),n([l.property()],t.prototype,"featureInfoUrl",void 0),n([l.property({type:Number,json:{write:{enabled:!1,overridePolicy:function(){return{ignoreOrigin:!0,enabled:!0}}}}})],t.prototype,"id",null),n([l.property({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],t.prototype,"legendUrl",void 0),n([l.reader(["web-document"],"legendUrl")],t.prototype,"readLegendUrl",null),n([l.property({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],t.prototype,"legendEnabled",void 0),n([l.property({value:null})],t.prototype,"layer",null),n([l.property()],t.prototype,"maxScale",void 0),n([l.property()],t.prototype,"minScale",void 0),n([l.property({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],t.prototype,"name",null),n([l.property()],t.prototype,"parent",void 0),n([l.property({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],t.prototype,"popupEnabled",void 0),n([l.property({type:Boolean,json:{write:{ignoreOrigin:!0}}})],t.prototype,"queryable",void 0),n([l.property()],t.prototype,"sublayers",null),n([l.cast("sublayers")],t.prototype,"castSublayers",null),n([l.property({type:[Number],json:{read:{source:"spatialReferences"}}})],t.prototype,"spatialReferences",void 0),n([l.property({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],t.prototype,"title",null),n([l.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],t.prototype,"visible",null),a=n([l.subclass("esri.layers.support.WMSSublayer")],t)}(l.declared(s.MultiOriginJSONSupport))}).apply(null,n))||(e.exports=a)},QJ8R:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(a=(function(e,t,n,a,i,o,s,l,p,u,y,c,f){Object.defineProperty(t,"__esModule",{value:!0});var d=l.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new f({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return o(this,void 0,void 0,(function(){var n,a;return i(this,(function(i){switch(i.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,p.create((function(e){return Promise.all([r.e(0),r.e(98)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(r.oe)}))];case 2:return n=i.sent(),p.throwIfAborted(t),[4,n.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,i.sent()];case 4:throw a=i.sent(),d.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+a),a;case 5:return[2]}}))}))},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,n=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||c.getDefault());return r&&n&&!u.hasSamePortal(n.restUrl,r.restUrl)?(t.messages&&t.messages.push(new s("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},a([y.property({type:f})],t.prototype,"portalItem",null),a([y.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),a([y.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),a([y.subclass("esri.layers.mixins.PortalLayer")],t)}(y.declared(e))}}).apply(null,n))||(e.exports=a)},UDyV:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("Gtr7"),r("eIBl"),r("Vx27"),r("xii5")],void 0===(a=(function(e,t,r,n,a,i,o,s,l){var p={visible:"visibleSublayers"},u=[102100,3857,102113,900913],y=[3395,54004];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._layerHandles=new o,t.extent=null,t._scale=null,t.view=null,t}return n(t,e),Object.defineProperty(t.prototype,"layer",{set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new o),this._layerHandles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(p[e.propertyName])}))])))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layers",{get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibleSublayers",{get:function(){var e=this.scale,t=this.layer.sublayers,r=[],n=function(t){var a=t.minScale,i=t.maxScale,o=t.sublayers;t.visible&&(0===e||(0===a||e<=a)&&(0===i||e>=i))&&(r.unshift(t),o&&o.forEach(n))};return t&&t.forEach(n),r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wkid",{get:function(){var e=this.extent,t=this.layer.spatialReferences,r=e.spatialReference&&e.spatialReference.wkid;t&&-1===t.indexOf(r)&&e.spatialReference.latestWkid&&(r=e.spatialReference.latestWkid);var n=u.some((function(e){return e===r}));if(!t)return r;if(n){var a=[];t.forEach((function(e){u.indexOf(e)>-1&&a.push(e)})),a.length||t.forEach((function(e){y.indexOf(e)>-1&&a.push(e)})),r=a.length>0?a[0]:u[0]}return r},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){var e=this,t=e.extent,n=e.layer,a=e.layers,i=n.imageFormat,o=n.imageTransparency,s=n.spatialReferences,p=n.version,u=this.wkid;s&&-1===s.indexOf(u)&&t.spatialReference.latestWkid&&(u=t.spatialReference.latestWkid);var y=t.xmin,c=t.ymin,f=t.xmax,d=t.ymax,m={bbox:"1.3.0"===n.version&&l.coordsReversed(u)?c+","+y+","+d+","+f:y+","+c+","+f+","+d,format:i,request:"GetMap",service:"WMS",styles:"",transparent:o,version:p};return isNaN(u)||("1.3.0"===p?m.crs="EPSG:"+u:m.srs="EPSG:"+u),r({},m,{layers:a})},a([s.property()],t.prototype,"extent",void 0),a([s.property()],t.prototype,"layer",null),a([s.property({readOnly:!0,dependsOn:["visibleSublayers"]})],t.prototype,"layers",null),a([s.property({type:Number,dependsOn:["view.scale"]})],t.prototype,"scale",null),a([s.property()],t.prototype,"view",void 0),a([s.property({dependsOn:["layers","layer.imageTransparency"],readOnly:!0})],t.prototype,"version",null),a([s.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],t.prototype,"visibleSublayers",null),a([s.property()],t.prototype,"wkid",null),a([s.subclass("esri.layers.support.ExportWMSImageParameters")],t)}(s.declared(i))}).apply(null,n))||(e.exports=a)},WaJo:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Vx27")],void 0===(a=(function(e,t,r,n,a){Object.defineProperty(t,"__esModule",{value:!0}),t.RefreshableLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshInterval=0,t}return r(t,e),t.prototype.refresh=function(){this.emit("refresh")},n([a.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),n([a.subclass("esri.layers.mixins.RefreshableLayer")],t)}(a.declared(e))}}).apply(null,n))||(e.exports=a)},dWJG:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("0J3i"),r("jZlN"),r("ifLZ"),r("zp6E"),r("y4WC"),r("6Ej+"),r("eIBl"),r("ImIS"),r("LxLY"),r("EUqE"),r("qMld"),r("jfWY"),r("Vx27"),r("Kg8D"),r("N7S/"),r("Z4y+"),r("qDpW"),r("nrlZ"),r("0RER"),r("FEX1"),r("QJ8R"),r("WaJo"),r("OXmT"),r("8CIp"),r("EtsK"),r("UDyV"),r("Gny7"),r("xii5")],void 0===(a=(function(e,t,r,n,a,i,o,s,l,p,u,y,c,f,d,m,h,g,b,v,x,w,E,S,O,I,N,P,R,_,j,L,U,M,q){function F(e,t,r){var n=[],a=new Map;return e.forEach((function(e){var i=new M;if(i.read(e,t),r&&-1===r.indexOf(i.name)&&(i.visible=!1),a.set(i.id,i),null!=e.parentLayerId&&-1!==e.parentLayerId){var o=a.get(e.parentLayerId);o.sublayers||(o.sublayers=[]),o.sublayers.unshift(i)}else n.unshift(i)})),n}var A=new d.JSONMap({svg:"image/svg+xml",png:"image/png",jpg:"image/jpeg",gif:"image/gif",bmp:"image/bmp"},{ignoreUnknown:!1});return function(e){function t(t,r){var n=e.call(this,t)||this;return n._sublayersHandles=new f,n.allSublayers=new c({root:n,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),n.customParameters=null,n.customLayerParameters=null,n.copyright=null,n.description=null,n.fullExtent=null,n.fullExtents=null,n.featureInfoFormat=null,n.featureInfoUrl=null,n.imageFormat=null,n.imageMaxHeight=2048,n.imageMaxWidth=2048,n.imageTransparency=!0,n.legendEnabled=!0,n.mapUrl=null,n.isReference=null,n.operationalLayerType="WMS",n.spatialReference=null,n.spatialReferences=null,n.sublayers=null,n.type="wms",n.url=null,n.version=null,n.watch("sublayers",(function(e,t){t&&(t.forEach((function(e){e.layer=null})),n._sublayersHandles.removeAll(),n._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=n,e.layer=n})),n._sublayersHandles||(n._sublayersHandles=new f),n._sublayersHandles.add([e.on("after-add",(function(e){var t=e.item;t.parent=n,t.layer=n})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))]))}),!0),n}return n(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r({url:e},t):e},t.prototype.load=function(e){var t=this,r=m.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then((function(){return t._fetchService(r)}))),this.when()},t.prototype.readFullExtentFromItemOrMap=function(e,t){var r=t.extent;return new w({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})},t.prototype.writeFullExtent=function(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]},t.prototype.readImageFormat=function(e,t){var r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]},t.prototype.readSpatialReferenceFromItemOrDocument=function(e,t){return new E(t.spatialReferences[0])},t.prototype.writeSpatialReferences=function(e,t){var r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((function(e){return e!==r})),t.spatialReferences.unshift(r)):t.spatialReferences=e},t.prototype.readSublayersFromItemOrMap=function(e,t,r){return F(t.layers,r,t.visibleLayers)},t.prototype.readSublayers=function(e,t,r){return F(t.layers,r)},t.prototype.writeSublayers=function(e,t,n,a){t.layers=[];var i=new Map,o=e.flatten((function(e){var t=e.sublayers;return t&&t.toArray()})).toArray();o.forEach((function(e){"number"==typeof e.parent.id&&(i.has(e.parent.id)?i.get(e.parent.id).push(e.id):i.set(e.parent.id,[e.id]))})),o.forEach((function(e){var n=r({sublayer:e},a),o=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},n);if(i.has(e.id)&&(o.sublayerIds=i.get(e.id)),!e.sublayers&&e.name){var s=e.write({},n);delete s.id,t.layers.push(s)}})),t.visibleLayers=o.filter((function(e){return e.visible&&!e.sublayers})).map((function(e){return e.name}))},t.prototype.createExportImageParameters=function(e,t,r,n){var a=n&&n.pixelRatio||1,i=S.getScale({extent:e,width:t})*a;return this._exportWMSImageParameters=new U({layer:this,extent:e,scale:i}),this._exportWMSImageParameters.toJSON()},t.prototype.fetchImage=function(e,t,n,a){return o(this,void 0,void 0,(function(){var o,s,l,p;return i(this,(function(i){return o=this.mapUrl,(s=this.createExportImageParameters(e,t,n,a)).layers?(p={responseType:"image",query:this._mixCustomParameters(r({width:t,height:n},s)),signal:a&&a.signal},a&&a.timestamp&&(p.query=r({_ts:a.timestamp},p.query)),[2,u(o,p).then((function(e){return e.data}))]):((l=document.createElement("canvas")).width=t,l.height=n,[2,l])}))}))},t.prototype.fetchFeatureInfo=function(e,t,n,a,i){var o=this,s=q.getPopupLayers(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!s)return null;var y=r({query_layers:s,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:n},"1.3.0"===this.version?{I:a,J:i}:{x:a,y:i}),c=r({},this.createExportImageParameters(e,t,n),y);return c=this._mixCustomParameters(c),u(this.featureInfoUrl,{query:c,responseType:"text"}).then((function(e){var t=o.featureInfoUrl;for(var r in t+=-1===t.indexOf("?")?"?":"",c)t+="?"===t.substring(t.length-1,t.length)?"":"&",t+=r+"="+c[r];var n=document.createElement("iframe");return n.src=t,n.frameBorder="0",n.marginHeight="0",n.marginWidth="0",n.innerHTML=e.data,n.style.width="100%",new l({sourceLayer:o,popupTemplate:new p({title:o.title,content:n})})}))},t.prototype.findSublayerById=function(e){return this.allSublayers.find((function(t){return t.id===e}))},t.prototype.supportsSpatialReference=function(e){return j.isWmsServer(this.url)||this.spatialReferences.some((function(t){var r=900913===t?E.WebMercator:new E({wkid:t});return O.equals(r,e)}))},t.prototype._fetchService=function(e){return o(this,void 0,void 0,(function(){var t=this;return i(this,(function(n){return[2,g.resolve().then((function(){return t.resourceInfo?{data:t.resourceInfo}:(t.parsedUrl.query&&t.parsedUrl.query.service&&(t.parsedUrl.query.SERVICE=t.parsedUrl.query.service,delete t.parsedUrl.query.service),t.parsedUrl.query&&t.parsedUrl.query.request&&(t.parsedUrl.query.REQUEST=t.parsedUrl.query.request,delete t.parsedUrl.query.request),u(t.parsedUrl.path,{query:r({SERVICE:"WMS",REQUEST:"GetCapabilities"},t.parsedUrl.query,t.customParameters),responseType:"xml",signal:e}))})).then((function(e){if(!t.resourceInfo){e.data=q.parseCapabilities(e.data);var r=new b.Url(t.parsedUrl.path);"https"!==r.scheme||r.port&&"443"!==r.port||-1!==s.request.httpsDomains.indexOf(r.host)||s.request.httpsDomains.push(r.host)}e.data&&t.read(e.data,{origin:"service"})}))]}))}))},t.prototype._mixCustomParameters=function(e){if(!this.customLayerParameters&&!this.customParameters)return e;var t=r({},this.customParameters,this.customLayerParameters);for(var n in t)e[n.toLowerCase()]=t[n];return e},a([v.property({readOnly:!0})],t.prototype,"allSublayers",void 0),a([v.property({json:{type:Object,write:!0}})],t.prototype,"customParameters",void 0),a([v.property({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),a([v.property({json:{type:Object,write:!0}})],t.prototype,"customLayerParameters",void 0),a([v.property({type:String,json:{write:!0}})],t.prototype,"copyright",void 0),a([v.property()],t.prototype,"description",void 0),a([v.property({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],t.prototype,"fullExtent",void 0),a([v.reader(["web-document","portal-item"],"fullExtent",["extent"])],t.prototype,"readFullExtentFromItemOrMap",null),a([v.writer(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],t.prototype,"writeFullExtent",null),a([v.property()],t.prototype,"fullExtents",void 0),a([v.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"featureInfoFormat",void 0),a([v.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"featureInfoUrl",void 0),a([v.property({type:String,json:{origins:{"web-document":{default:"image/png",type:A.jsonValues,read:{reader:A.read,source:"format"},write:{writer:A.write,target:"format"}}}}})],t.prototype,"imageFormat",void 0),a([v.reader("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null),a([v.property({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],t.prototype,"imageMaxHeight",void 0),a([v.property({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],t.prototype,"imageMaxWidth",void 0),a([v.property()],t.prototype,"imageTransparency",void 0),a([v.property(L.legendEnabled)],t.prototype,"legendEnabled",void 0),a([v.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"mapUrl",void 0),a([v.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],t.prototype,"isReference",void 0),a([v.property({type:["WMS"]})],t.prototype,"operationalLayerType",void 0),a([v.property({type:E,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],t.prototype,"spatialReference",void 0),a([v.reader(["web-document","portal-item"],"spatialReference",["spatialReferences"])],t.prototype,"readSpatialReferenceFromItemOrDocument",null),a([v.property({type:[Number],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],t.prototype,"spatialReferences",void 0),a([v.writer(["web-document","portal-item"],"spatialReferences")],t.prototype,"writeSpatialReferences",null),a([v.property({type:y.ofType(M),json:{write:{target:"layers",overridePolicy:function(e,t,r){if(function(e,t){return e.some((function(e){for(var r in e)if(x.willPropertyWrite(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],t.prototype,"sublayers",void 0),a([v.reader(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],t.prototype,"readSublayersFromItemOrMap",null),a([v.reader("service","sublayers",["layers"])],t.prototype,"readSublayers",null),a([v.writer("sublayers",{layers:{type:[M]},visibleLayers:{type:[String]}})],t.prototype,"writeSublayers",null),a([v.property({json:{read:!1},readOnly:!0,value:"wms"})],t.prototype,"type",void 0),a([v.property(L.url)],t.prototype,"url",void 0),a([v.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"version",void 0),a([v.subclass("esri.layers.WMSLayer")],t)}(v.declared(R.RefreshableLayer(_.ScaleRangeLayer(N.OperationalLayer(P.PortalLayer(h.MultiOriginJSONMixin(I)))))))}).apply(null,n))||(e.exports=a)},xii5:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("ma1f"),r("jfWY"),r("N7S/"),r("Z4y+")],void 0===(a=(function(e,t,r,n,a,i){function o(e){return h.some((function(t){return e>=t[0]&&e<=t[1]}))}function s(e,t){var r=t&&t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function l(e,t,r){var n=s(e,t);return n?n.textContent:r}function p(e,t,r){if(!e)return null;var n,o,s,l,p=parseFloat(e.getAttribute("minx")),u=parseFloat(e.getAttribute("miny")),y=parseFloat(e.getAttribute("maxx")),c=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(u)?-Number.MAX_VALUE:u,o=isNaN(p)?-Number.MAX_VALUE:p,s=isNaN(c)?Number.MAX_VALUE:c,l=isNaN(y)?Number.MAX_VALUE:y):(n=isNaN(p)?-Number.MAX_VALUE:p,o=isNaN(u)?-Number.MAX_VALUE:u,s=isNaN(y)?Number.MAX_VALUE:y,l=isNaN(c)?Number.MAX_VALUE:c);var f=new i({wkid:t});return new a({xmin:n,ymin:o,xmax:s,ymax:l,spatialReference:f})}function u(e,t){var r=s(t,e),n=s("DCPType",r);if(n){var a=s("HTTP",n);if(a){var i=s("Get",a);if(i){var o=function(e,t,r,n){var a=s("OnlineResource",r);return a?a.getAttribute("xlink:href"):null}(0,0,i);if(o)return o.indexOf("&")===o.length-1&&(o=o.substring(0,o.length-1)),d(o,["service","request"])}}}return null}function y(e,t){var r=e.getElementsByTagName("Operation");if(!r||!r.length){var n=s(t,e).getElementsByTagName("Format");return Array.prototype.slice.call(n).map((function(e){return e.textContent}))}var a=Array.prototype.slice.call(r),i=[];return a.forEach((function(e){if(e.getAttribute("name")===t){var r=e.getElementsByTagName("Format");Array.prototype.slice.call(r).forEach((function(e){i.push(e.textContent)}))}})),i}function c(e,t,r){var n=function(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(n.nodeType===Node.ELEMENT_NODE&&n.nodeName===e)return n}return null}(t,e);if(!n)return r;var a=n.textContent;if(null==a||""===a)return r;var i=Number(a);return isNaN(i)?r:i}function f(e,t){if(!e)return null;var r={id:m++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},n=s("LatLonBoundingBox",e),u=s("EX_GeographicBoundingBox",e),y=null;n&&(y=p(n,4326)),u&&((y=new a(0,0,0,0,new i({wkid:4326}))).xmin=parseFloat(l("westBoundLongitude",u,0)),y.ymin=parseFloat(l("southBoundLatitude",u,0)),y.xmax=parseFloat(l("eastBoundLongitude",u,0)),y.ymax=parseFloat(l("northBoundLatitude",u,0))),n||u||(y=new a(-180,-90,180,90,new i({wkid:4326}))),r.minScale=c(e,"MaxScaleDenominator",0),r.maxScale=c(e,"MinScaleDenominator",0);var d=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((function(e){if("Name"===e.nodeName)r.name=e.textContent||"";else if("Title"===e.nodeName)r.title=e.textContent||"";else if("Abstract"===e.nodeName)r.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var n=e.getAttribute(d);n&&0===n.indexOf("EPSG:")&&(0===(i=parseInt(n.substring(5),10))||isNaN(i)||y||(y="1.3.0"===t?p(e,i,o(i)):p(e,i)));var a=n&&n.indexOf(":");if(a&&a>-1){var i;0===(i=parseInt(n.substring(a+1,n.length),10))||isNaN(i)||(i=g[i]?g[i]:i);var l="1.3.0"===t?p(e,i,o(i)):p(e,i);r.fullExtents.push(l)}}else if(e.nodeName===d)e.textContent.split(" ").forEach((function(e){0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(g[e]&&(e=g[e]),-1===r.spatialReferences.indexOf(e)&&r.spatialReferences.push(e))}));else if("Style"!==e.nodeName||r.legendURL){if("Layer"===e.nodeName){var u=f(e,t);u&&(u.parentLayerId=r.id,r.sublayers||(r.sublayers=[]),r.sublayers.push(u))}}else{var c=s("LegendURL",e);if(c){var m=s("OnlineResource",c);m&&(r.legendURL=m.getAttribute("xlink:href"))}}})),r.extent=y&&y.toJSON(),r}function d(e,t){var r=[],a=n.urlToObject(e);for(var i in a.query)a.query.hasOwnProperty(i)&&-1===t.indexOf(i.toLowerCase())&&r.push(i+"="+a.query[i]);return a.path+(r.length?"?"+r.join("&"):"")}Object.defineProperty(t,"__esModule",{value:!0});var m,h=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],g={84:4326,83:4269,27:4267};t.parseCapabilities=function(e){if(e){m=-1,"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var t=e.documentElement;if("ServiceExceptionReport"===t.nodeName){var n=Array.prototype.slice.call(t.childNodes).map((function(e){return e.textContent})).join("\r\n");throw new r("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",n)}var i=s("Layer",t);if(i){var o,p="WMS_Capabilities"===t.nodeName||"WMT_MS_Capabilities"===t.nodeName?t.getAttribute("version"):"1.3.0",c=s("Service",t),d=l("Title",c,"")||l("Name",c,""),h=l("AccessConstraints",c,""),g=l("Abstract",c,""),b=parseInt(l("MaxWidth",c,5e3),10),v=parseInt(l("MaxHeight",c,5e3),10),x=s("Capability",t),w=y(t,"GetMap"),E=u(t,"GetMap"),S=f(i,p),O=0;if(Array.prototype.slice.call(x.childNodes).forEach((function(e){"Layer"===e.nodeName&&(0===O?o=e:1===O?(S.name&&(S.name="",S.sublayers.push(f(o,p))),S.sublayers.push(f(e,p))):S.sublayers.push(f(e,p)),O++)})),!S)return null;var I,N,P,R=S.fullExtents;if((I=S.sublayers)||(I=[]),0===I.length&&I.push(S),!(N=S.extent)){var _=new a(I[0].extent);S.extent=_.toJSON(),N=S.extent}if(!(P=S.spatialReferences).length&&I.length>0){var j=function(e){var t=[];return e.sublayers.forEach((function(e){!t.length&&e.spatialReferences.length&&(t=e.spatialReferences||j(e))})),t};I.forEach((function(e){P.length||(P=e.spatialReferences||j(e))}))}var L,U=u(t,"GetFeatureInfo");if(U){var M=y(t,"GetFeatureInfo");M.indexOf("text/html")>-1?L="text/html":M.indexOf("text/plain")>-1&&(L="text/plain")}if(!L){var q=function(e){e&&(e.queryable=!1,e.sublayers&&e.sublayers.forEach((function(e){q(e)})))};q(S)}var F=function e(t){var r=[];return t.forEach((function(t){r.push(t),t.sublayers&&t.sublayers.length&&(r=r.concat(e(t.sublayers)),delete t.sublayers)})),r}(I);return{copyright:h,description:g,extent:N,fullExtents:R,featureInfoFormat:L,featureInfoUrl:U,mapUrl:E,maxImageWidth:b,maxImageHeight:v,maxScale:S.maxScale||0,minScale:S.minScale||0,layers:F,spatialReferences:P,supportedImageFormatTypes:w,title:d,version:p}}}},t.coordsReversed=o,t.getPopupLayers=function(e){return e.length?e.filter((function(e){return e.popupEnabled&&e.name&&e.queryable})).map((function(e){return e.name})).join(","):""}}).apply(null,n))||(e.exports=a)}}]);