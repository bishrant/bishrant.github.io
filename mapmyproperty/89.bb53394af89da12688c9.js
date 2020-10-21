(function(){var e={"arcgis-js-api/views/2d/layers/WMSLayerView2D":"ETqY","arcgis-js-api/layers/support/commonProperties":"EtsK","esri/layers/support/commonProperties":"EtsK","arcgis-js-api/views/layers/WMSLayerView":"GLSx","arcgis-js-api/layers/support/ExportWMSImageParameters":"UDyV","esri/layers/support/ExportWMSImageParameters":"UDyV","esri/layers/support/wmsUtils":"xii5"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{ETqY:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qsST"),r("qMld"),r("Vx27"),r("N7S/"),r("UDyV"),r("bOAX"),r("6i4F"),r("wke2"),r("WsO6"),r("7XLS"),r("GLSx")],void 0===(i=(function(e,t,r,n,i,a,s,o,l,u,p,c,d,f,y){"use strict";var m=i.getLogger("esri.views.2d.layers.WMSLayerView2D");return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.initialize=function(){var e=this.layer;e.supportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(a.reject(new n("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))},t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){a.isAbortError(e)||m.error(e)}))},t.prototype.attach=function(){var e=this,t=this.layer,r=this.view,n=t.imageMaxHeight,i=t.imageMaxWidth;this._bitmapContainer=new u.BitmapContainer,this.container.addChild(this._bitmapContainer),this.strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:n,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new l({layer:t,view:r}),this.handles.add(this._exportWMSImageParameters.watch("version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),"wms")},t.prototype.detach=function(){this.handles.remove("wms"),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=e.x,r=e.y,n=this.view.spatialReference,i=null,a=0,s=0;this._bitmapContainer.children.some((function(e){var l=e.width,u=e.height,p=e.resolution,c=e.x,d=e.y,f=c+p*l,y=d-p*u;return t>=c&&t<=f&&r<=d&&r>=y&&(i=new o({xmin:c,ymin:y,xmax:f,ymax:d,spatialReference:n}),a=l,s=u,!0)}));var l=i.width/a,u=Math.round((t-i.xmin)/l),p=Math.round((i.ymax-r)/l);return{extent:i,width:a,height:s,x:u,y:p}},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},t.prototype.fetchImage=function(e,t,n,i){return this.layer.fetchImage(e,t,n,r.__assign({timeExtent:this._exportWMSImageParameters.timeExtent,timestamp:this.refreshTimestamp},i))},r.__decorate([s.property()],t.prototype,"strategy",void 0),r.__decorate([s.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),r.__decorate([s.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(y.WMSLayerView(f.RefreshableLayerView(p.LayerView2DMixin(d))))}).apply(null,n))||(e.exports=i)},EtsK:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("9gfz"),r("o2T8"),r("Kg8D"),r("ojLd"),r("5ldw"),r("3fUp")],void 0===(i=(function(e,t,r,n,i,a,s,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.combinedViewLayerTimeExtentProperty=t.opacityDrawingInfo=t.opacity=t.readOnlyService=t.elevationInfo=t.legendEnabled=t.url=t.labelsVisible=t.popupEnabled=t.screenSizePerspectiveEnabled=void 0,t.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,t,r,n){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||a.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},n))&&(t[r]=e)}}}}}},t.popupEnabled={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:function(e,t){return!t.disablePopup}},write:{enabled:!0,writer:function(e,t,r){t[r]=!e}}}},t.labelsVisible={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},t.url={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:s.write}}},t.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},t.elevationInfo={value:null,type:o,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}},t.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},t.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},t.opacityDrawingInfo=r.__assign(r.__assign({},t.opacity),{json:r.__assign(r.__assign({},t.opacity.json),{origins:{"web-document":r.__assign(r.__assign({},t.opacity.json.origins["web-document"]),{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,t,r){return r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?l.transparencyToOpacity(t.layerDefinition.drawingInfo.transparency):void 0:l.transparencyToOpacity(t.drawingInfo.transparency)}}})}),t.combinedViewLayerTimeExtentProperty={type:n,dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get:function(){var e,t;if(!(null===(e=this.layer)||void 0===e?void 0:e.timeInfo))return null;var r=null===(t=this.view)||void 0===t?void 0:t.timeExtent,n=this.layer.timeExtent,i=this.layer.useViewTime?r&&n?r.intersection(n):r||n:n;if(!i||i.isEmpty)return i;var a=this.layer.timeOffset,s=a?i.offset(-a.value,a.unit):i,o=this._get("timeExtent");return s.equals(o)?o:s}}}).apply(null,n))||(e.exports=i)},GLSx:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qMld"),r("Vx27")],void 0===(i=(function(e,t,r,n,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WMSLayerView=void 0,t.WMSLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.fetchPopupFeatures=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,a,s,o,l,u,p,c,d;return r.__generator(this,(function(r){if(t=this.layer,!e)return[2,i.reject(new n("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];if(!(a=t.popupEnabled))return[2,i.reject(new n("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:a}))];if(s=this.createFetchPopupFeaturesQuery(e),l=s.width,u=s.height,p=s.x,c=s.y,!((o=s.extent)&&l&&u))throw new n("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:o,width:l,height:u});return[2,(d=t.fetchFeatureInfo(o,l,u,p,c))?d.then((function(e){return[e]})):i.resolve([])]}))}))},r.__decorate([a.property()],t.prototype,"layer",void 0),r.__decorate([a.subclass("esri.layers.mixins.WMSLayerView")],t)}(e)}}).apply(null,n))||(e.exports=i)},UDyV:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("eIBl"),r("Vx27"),r("EtsK"),r("xii5")],void 0===(i=(function(e,t,r,n,i,a,s,o){"use strict";var l={visible:"visibleSublayers"},u=[102100,3857,102113,900913],p=[3395,54004];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._layerHandles=new i,t.extent=null,t._scale=null,t.view=null,t}return r.__extends(t,e),Object.defineProperty(t.prototype,"layer",{set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new i),this._layerHandles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(l[e.propertyName])}))])))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"layers",{get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visibleSublayers",{get:function(){var e=this.scale,t=this.layer.sublayers,r=[];return null==t||t.forEach((function t(n){var i=n.minScale,a=n.maxScale,s=n.sublayers;n.visible&&(0===e||(0===i||e<=i)&&(0===a||e>=a))&&(s?s.forEach(t):r.unshift(n))})),r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wkid",{get:function(){var e=this.extent,t=this.layer.spatialReferences,r=e.spatialReference&&e.spatialReference.wkid;t&&-1===t.indexOf(r)&&e.spatialReference.latestWkid&&(r=e.spatialReference.latestWkid);var n=u.some((function(e){return e===r}));if(!t)return r;if(n){var i=[];t.forEach((function(e){u.indexOf(e)>-1&&i.push(e)})),i.length||t.forEach((function(e){p.indexOf(e)>-1&&i.push(e)})),r=i.length>0?i[0]:u[0]}return r},enumerable:!1,configurable:!0}),t.prototype.toJSON=function(){var e=this.extent,t=this.layer,n=this.layers,i=t.imageFormat,a=t.imageTransparency,s=t.spatialReferences,l=t.version,u=this.wkid;s&&-1===s.indexOf(u)&&e.spatialReference.latestWkid&&(u=e.spatialReference.latestWkid);var p=e.xmin,c=e.ymin,d=e.xmax,f=e.ymax,y={bbox:"1.3.0"===t.version&&o.coordsReversed(u)?c+","+p+","+f+","+d:p+","+c+","+d+","+f,format:i,request:"GetMap",service:"WMS",styles:"",transparent:a,version:l};return isNaN(u)||("1.3.0"===l?y.crs="EPSG:"+u:y.srs="EPSG:"+u),r.__assign(r.__assign({},y),{layers:n})},r.__decorate([a.property()],t.prototype,"extent",void 0),r.__decorate([a.property()],t.prototype,"layer",null),r.__decorate([a.property({readOnly:!0,dependsOn:["visibleSublayers"]})],t.prototype,"layers",null),r.__decorate([a.property({type:Number,dependsOn:["view.scale"]})],t.prototype,"scale",null),r.__decorate([a.property(s.combinedViewLayerTimeExtentProperty)],t.prototype,"timeExtent",void 0),r.__decorate([a.property({type:Number,dependsOn:["layers","layer.imageTransparency","timeExtent"],readOnly:!0})],t.prototype,"version",null),r.__decorate([a.property()],t.prototype,"view",void 0),r.__decorate([a.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],t.prototype,"visibleSublayers",null),r.__decorate([a.property()],t.prototype,"wkid",null),r.__decorate([a.subclass("esri.layers.support.ExportWMSImageParameters")],t)}(n)}).apply(null,n))||(e.exports=i)},xii5:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("ma1f"),r("jfWY"),r("N7S/"),r("Z4y+")],void 0===(i=(function(e,t,r,n,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toISOString=t.fromISODuration=t.isTimeDimension=t.isGenericDimension=t.isElevationDimension=t.isDimensionInterval=t.getPopupLayers=t.coordsReversed=t.parseCapabilities=void 0;var s=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],o={84:4326,83:4269,27:4267};function l(e){return s.some((function(t){return e>=t[0]&&e<=t[1]}))}function u(e,t,r){var n;return null!==(n=t.getAttribute(e))&&void 0!==n?n:r}function p(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(g(n)&&n.nodeName===e)return n}return null}function c(e,t){for(var r=[],n=0;n<t.childNodes.length;n++){var i=t.childNodes[n];g(i)&&i.nodeName===e&&r.push(i)}return r}function d(e,t,r){var n=p(e,t);return n?n.textContent:r}function f(e,t,r){if(!e)return null;var n,s,o,l,u=parseFloat(e.getAttribute("minx")),p=parseFloat(e.getAttribute("miny")),c=parseFloat(e.getAttribute("maxx")),d=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(p)?-Number.MAX_VALUE:p,s=isNaN(u)?-Number.MAX_VALUE:u,o=isNaN(d)?Number.MAX_VALUE:d,l=isNaN(c)?Number.MAX_VALUE:c):(n=isNaN(u)?-Number.MAX_VALUE:u,s=isNaN(p)?-Number.MAX_VALUE:p,o=isNaN(c)?Number.MAX_VALUE:c,l=isNaN(d)?Number.MAX_VALUE:d);var f=new a({wkid:t});return new i({xmin:n,ymin:s,xmax:o,ymax:l,spatialReference:f})}function y(e,t){var r=p(t,e);if(r){var i=p("DCPType",r);if(i){var a=p("HTTP",i);if(a){var s=p("Get",a);if(s){var o=function(e,t,r,n){var i=p("OnlineResource",r);return i?u("xlink:href",i,null):null}(0,0,s);if(o)return o.indexOf("&")===o.length-1&&(o=o.substring(0,o.length-1)),function(e,t){var r=[],i=n.urlToObject(e);for(var a in i.query)i.query.hasOwnProperty(a)&&-1===t.indexOf(a.toLowerCase())&&r.push(a+"="+i.query[a]);return i.path+(r.length?"?"+r.join("&"):"")}(o,["service","request"])}}}}return null}function m(e,t){var r=c("Operation",e);if(0===r.length)return c("Format",p(t,e)).map((function(e){return e.textContent}));var n=[];return r.forEach((function(e){e.getAttribute("name")===t&&c("Format",e).forEach((function(e){n.push(e.textContent)}))})),n}function h(e,t,r){var n=p(t,e);if(!n)return r;var i=n.textContent;if(null==i||""===i)return r;var a=Number(i);return isNaN(a)?r:a}function v(e,t,r){if(!e)return null;var n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},s=p("LatLonBoundingBox",e),y=p("EX_GeographicBoundingBox",e),m=null;s&&(m=f(s,4326)),y&&((m=new i(0,0,0,0,new a({wkid:4326}))).xmin=parseFloat(d("westBoundLongitude",y,"0")),m.ymin=parseFloat(d("southBoundLatitude",y,"0")),m.xmax=parseFloat(d("eastBoundLongitude",y,"0")),m.ymax=parseFloat(d("northBoundLatitude",y,"0"))),s||y||(m=new i(-180,-90,180,90,new a({wkid:4326}))),n.minScale=h(e,"MaxScaleDenominator",0),n.maxScale=h(e,"MinScaleDenominator",0);var g=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((function(e){if("Name"===e.nodeName)n.name=e.textContent||"";else if("Title"===e.nodeName)n.title=e.textContent||"";else if("Abstract"===e.nodeName)n.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var i=e.getAttribute(g);i&&0===i.indexOf("EPSG:")&&(0===(s=parseInt(i.substring(5),10))||isNaN(s)||m||(m="1.3.0"===t?f(e,s,l(s)):f(e,s)));var a=i&&i.indexOf(":");if(a&&a>-1){var s;0===(s=parseInt(i.substring(a+1,i.length),10))||isNaN(s)||(s=o[s]?o[s]:s);var u="1.3.0"===t?f(e,s,l(s)):f(e,s);n.fullExtents.push(u)}}else if(e.nodeName===g)e.textContent.split(" ").forEach((function(e){0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(o[e]&&(e=o[e]),-1===n.spatialReferences.indexOf(e)&&n.spatialReferences.push(e))}));else if("Style"!==e.nodeName||n.legendURL){if("Layer"===e.nodeName){var c=v(e,t,r);c&&(c.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(c))}}else{var d=p("LegendURL",e);if(d){var y=p("OnlineResource",d);y&&(n.legendURL=y.getAttribute("xlink:href"))}}})),n.extent=null==m?void 0:m.toJSON(),n.dimensions=c("Dimension",e).filter((function(e){return e.getAttribute("name")&&e.getAttribute("units")&&e.textContent})).map((function(e){var t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,i=e.getAttribute("unitSymbol"),a=e.getAttribute("default"),s="0"!==u("default",e,"0"),o="0"!==u("nearestValue",e,"0"),l="0"!==u("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(r)?{name:"time",units:"ISO8601",extent:_(n),default:_(a),multipleValues:s,nearestValue:o,current:l}:/^elevation$/i.test(t)?{name:"elevation",units:r,extent:x(n),unitSymbol:i,default:x(a),multipleValues:s,nearestValue:o}:{name:t,units:r,extent:w(n),unitSymbol:i,default:w(a),multipleValues:s,nearestValue:o}})),n}function g(e){return e.nodeType===Node.ELEMENT_NODE}function b(e){return"time"===e.name}function x(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((function(e){return e})):r.map((function(e){return parseFloat(e)}))}function w(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((function(e){return e})):r}function _(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?S(t[2]):void 0}})).filter((function(e){return e})):r.map((function(e){return new Date(e)}))}function S(e){var t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:E(t[1]),months:E(t[2]),days:E(t[3]),hours:E(t[4]),minutes:E(t[5]),seconds:E(t[6])}:null}function E(e){if(!e)return 0;var t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;var r=t[0].replace(",",".");return Number(r)}t.parseCapabilities=function(e){if(!e)return null;var t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var n=e.documentElement;if("ServiceExceptionReport"===n.nodeName){var a=Array.prototype.slice.call(n.childNodes).map((function(e){return e.textContent})).join("\r\n");throw new r("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",a)}var s=p("Capability",n),o=p("Service",n),l=p("Request",s);if(!s||!o||!l)return null;var u=p("Layer",s);if(!u)return null;var c,f,h,g,x="WMS_Capabilities"===n.nodeName||"WMT_MS_Capabilities"===n.nodeName?n.getAttribute("version"):"1.3.0",w=d("Title",o,"")||d("Name",o,""),_=d("AccessConstraints",o,""),S=d("Abstract",o,""),E=parseInt(d("MaxWidth",o,"5000"),10),N=parseInt(d("MaxHeight",o,"5000"),10),O=m(l,"GetMap"),I=y(l,"GetMap"),M=v(u,x,t),P=0;if(Array.prototype.slice.call(s.childNodes).forEach((function(e){"Layer"===e.nodeName&&(0===P?c=e:1===P?(M.name&&(M.name="",M.sublayers.push(v(c,x,t))),M.sublayers.push(v(e,x,t))):M.sublayers.push(v(e,x,t)),P++)})),!M)return null;var L=M.fullExtents;if((f=M.sublayers)||(f=[]),0===f.length&&f.push(M),!(h=M.extent)){var A=new i(f[0].extent);M.extent=A.toJSON(),h=M.extent}!(g=M.spatialReferences).length&&f.length>0&&f.forEach((function(e){g.length||(g=e.spatialReferences||function e(t){var r=[];return t.sublayers.forEach((function(t){!r.length&&t.spatialReferences.length&&(r=t.spatialReferences||e(t))})),r}(e))}));var V,T=y(l,"GetFeatureInfo");if(T){var j=m(l,"GetFeatureInfo");j.indexOf("text/html")>-1?V="text/html":j.indexOf("text/plain")>-1&&(V="text/plain")}V||function e(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((function(t){e(t)})))}(M);var R=function e(t){var r=[];return t.forEach((function(t){r.push(t),t.sublayers&&t.sublayers.length&&(r=r.concat(e(t.sublayers)),delete t.sublayers)})),r}(f),D=M.minScale||0,C=M.maxScale||0,W=M.dimensions,F=R.reduce((function(e,t){return e.concat(t.dimensions)}),[]),U=W.concat(F).filter(b),q=null;if(U.length>0){var k=Number.POSITIVE_INFINITY,G=Number.NEGATIVE_INFINITY;U.forEach((function(e){var t,r=e.extent;t=r,Array.isArray(t)&&t.length>0&&t[0]instanceof Date?r.forEach((function(e){k=Math.min(k,e.getTime()),G=Math.max(G,e.getTime())})):r.forEach((function(e){k=Math.min(k,e.min.getTime()),G=Math.max(G,e.max.getTime())}))})),q={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[k,G]}}return{copyright:_,description:S,dimensions:W,extent:h,fullExtents:L,featureInfoFormat:V,featureInfoUrl:T,mapUrl:I,maxImageWidth:E,maxImageHeight:N,maxScale:C,minScale:D,layers:R,spatialReferences:g,supportedImageFormatTypes:O,timeInfo:q,title:w,version:x}},t.coordsReversed=l,t.getPopupLayers=function(e){return e.length?e.filter((function(e){return e.popupEnabled&&e.name&&e.queryable})).map((function(e){return e.name})).join(","):""},t.isDimensionInterval=function(e){return void 0!==e.min&&void 0!==e.max},t.isElevationDimension=function(e){return"elevation"===e.name},t.isGenericDimension=function(e){return"time"!==e.name&&"elevation"!==e.name},t.isTimeDimension=b,t.fromISODuration=S,t.toISOString=function(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}}).apply(null,n))||(e.exports=i)}}]);