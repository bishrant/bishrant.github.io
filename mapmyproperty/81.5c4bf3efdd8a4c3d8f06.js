(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/support/TileMatrixSet":"0Fa2","arcgis-js-api/layers/support/wmtsUtils":"835r","arcgis-js-api/layers/support/WMTSSublayer":"ATfx","arcgis-js-api/layers/WMTSLayer":"AgRT","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/layers/mixins/RefreshableLayer":"WaJo","arcgis-js-api/layers/support/WMTSStyle":"wAFj"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[81,25,44,104,105,106,107,108,109,115,116],{"0Fa2":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("dxjN"),r("ycL1"),r("Vx27"),r("N7S/"),r("pMLx")],void 0===(o=(function(e,t,r,i,o,a,n,s,l){return function(e){function t(t){var r=e.call(this,t)||this;return r.fullExtent=null,r.id=null,r.tileInfo=null,r}var o;return r(t,e),o=t,t.prototype.clone=function(){var e=new o;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e},i([n.property({type:s,json:{read:{source:"fullExtent"}}})],t.prototype,"fullExtent",void 0),i([n.property({type:String,json:{read:{source:"id"}}})],t.prototype,"id",void 0),i([n.property({type:l,json:{read:{source:"tileInfo"}}})],t.prototype,"tileInfo",void 0),o=i([n.subclass("esri.layer.support.TileMatrixSet")],t)}(n.declared(a.JSONSupport))}).apply(null,i))||(e.exports=o)},"835r":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("ma1f"),r("N7S/"),r("oxlp"),r("Z4y+"),r("1/to"),r("pMLx")],void 0===(o=(function(e,t,r,i,o,a,n,s){function l(e,t){var r=t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function p(e,t){return Array.prototype.slice.call(t.getElementsByTagName(e)).map((function(e){return e.textContent}))}function u(e,t){return e.split(">").forEach((function(e){t=l(e,t)})),t&&t.textContent}function c(e,t,r,i){var o;return Array.prototype.slice.call(i.childNodes).some((function(i){if(i.nodeName.indexOf(e)>-1){var a=l(t,i),n=a&&a.textContent;if(n===r||r.split(":")&&r.split(":")[1]===n)return o=i,!0}return!1})),o}function d(e,t,r,i){var o=u("Abstract",t),a=p("Format",t);return{id:e,fullExtent:f(t),description:o,formats:a,styles:m(t,i),title:u("Title",t),tileMatrixSets:h(t,r)}}function y(e,t){var r=[],i=e.layerMap.get(t);if(i){var o,a,n,s,l=Array.prototype.slice.call(i.getElementsByTagName("ResourceURL")),c=i.getElementsByTagName("Dimension");return c.length&&(o=u("Identifier",c[0]),a=p("Default",c[0])||p("Value",c[0])),c.length>1&&(n=u("Identifier",c[1]),s=p("Default",c[1])||p("Value",c[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:s}),l.forEach((function(e){var t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(o&&a.length&&(t.indexOf("{"+o+"}")>-1?t=t.replace("{"+o+"}","{dimensionValue}"):(i=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}"))>-1&&(t=t.substring(0,i)+"{dimensionValue}"+t.substring(i+o.length+2))),n&&s.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue2}");else{var i;(i=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}"))>-1&&(t=t.substring(0,i)+"{dimensionValue2}"+t.substring(i+n.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}}function f(e){var t=l("WGS84BoundingBox",e),r=t?u("LowerCorner",t).split(" "):["-180","-90"],i=t?u("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function m(e,t){return Array.prototype.slice.call(e.getElementsByTagName("Style")).map((function(e){var r=l("LegendURL",e),i=l("Keywords",e),o=i&&p("Keyword",i),a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:u("Abstract",e),id:u("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:o,legendUrl:a,title:u("Title",e)}}))}function h(e,t){return p("TileMatrixSet",e).map((function(r){return function(e,t,r){var o=p("TileMatrix",c("TileMatrixSetLink","TileMatrixSet",e,t)),a=c("TileMatrixSet","Identifier",e,r),n=g(a),d=n.spatialReference,y=d.wkid,f=l("TileMatrix",a),m=[parseInt(u("TileWidth",f),10),parseInt(u("TileHeight",f),10)],h=[];o.length?o.forEach((function(t,r){var i=c("TileMatrix","Identifier",t,a);h.push(v(i,y,r,e))})):Array.prototype.slice.call(a.getElementsByTagName("TileMatrix")).forEach((function(t,r){h.push(v(t,y,r,e))}));var w=function(e,t,r,o){var a,n,s,p,c,d,y=l("BoundingBox",e);if(y&&(a=u("LowerCorner",y).split(" "),n=u("UpperCorner",y).split(" ")),a&&a.length>1&&n&&n.length>1)s=parseFloat(a[0]),c=parseFloat(a[1]),p=parseFloat(n[0]),d=parseFloat(n[1]);else{var f=l("TileMatrix",e),m=parseFloat(u("MatrixWidth",f)),h=parseFloat(u("MatrixHeight",f));p=(s=t.x)+m*r[0]*o.resolution,c=(d=t.y)-h*r[1]*o.resolution}return new i(s,c,p,d,t.spatialReference)}(a,n,m,h[0]);return{id:e,fullExtent:w.toJSON(),tileInfo:new s({dpi:96,spatialReference:d,size:m,origin:n,lods:h}).toJSON()}}(r,e,t)}))}function g(e){var t=u("SupportedCRS",e);t&&(t=t.toLowerCase());var r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);var i=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,i=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,i=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,i=!0);var n,s=new a({wkid:r}),p=u("TopLeftCorner",l("TileMatrix",e)).split(" "),c=p[0].split("E").map((function(e){return Number(e)})),d=p[1].split("E").map((function(e){return Number(e)})),y=c[0],f=d[0];c.length>1&&(y=c[0]*Math.pow(10,c[1])),d.length>1&&(f=d[0]*Math.pow(10,d[1]));var m=i&&4326===r&&90===y&&-180===f;return I.some((function(e,a){var l=Number(t.split(":").pop());return l>=e[0]&&l<=e[1]||4326===r&&(!i||m)?(n=new o(f,y,s),!0):(a===I.length-1&&(n=new o(y,f,s)),!1)})),n}function v(e,t,r,i){var o,a=u("Identifier",e),n=u("ScaleDenominator",e).split("E").map((function(e){return Number(e)})),s=w(t,o=n.length>1?n[0]*Math.pow(10,n[1]):n[0],i);return{level:r,levelValue:a,scale:o*=96/x,resolution:s}}function w(e,t,r){return 7*t/25e3/(n.hasOwnProperty(String(e))?n.values[n[e]]:"default028mm"===r?6370997*Math.PI/180:6378137*Math.PI/180)}Object.defineProperty(t,"__esModule",{value:!0});var x=90.71428571428571,I=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];t.parseCapabilities=function(e,t){e=e.replace(/ows:/gi,"");var i=(new DOMParser).parseFromString(e,"text/xml").documentElement,o=new Map,a=new Map,n=l("Contents",i);if(!n)throw new r("wmtslayer:wmts-capabilities-xml-is-not-valid");var s,p,y,f=l("OperationsMetadata",i),m=f&&f.querySelector("[name='GetTile']"),h=m&&m.getElementsByTagName("Get"),g=h&&Array.prototype.slice.call(h),v=t.url&&t.url.indexOf("https")>-1,w=t.serviceMode;if(g&&g.length&&g.some((function(e){var t=l("Constraint",e);return!t||c("AllowedValues","Value",w,t)?(p=e.attributes[0].nodeValue,!0):(!t||c("AllowedValues","Value","RESTful",t)||c("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!c("AllowedValues","Value","KVP",t)||(s=e.attributes[0].nodeValue),!1)})),!p)if(y)p=y,w="RESTful";else if(s)p=s,w="KVP";else{var x=l("ServiceMetadataURL",i);p=x.getAttribute("xlink:href")}var I=p.indexOf("1.0.0/");return-1===I&&"RESTful"===w?p+="/":I>-1&&(p=p.substring(0,I)),"KVP"===w&&(p+=I>-1?"":"?"),v&&(p=p.replace(/^http:/i,"https:")),{copyright:u("ServiceIdentification>AccessConstraints",i),layers:Array.prototype.slice.call(n.getElementsByTagName("Layer")).map((function(e){var t=u("Identifier",e);return o.set(t,e),d(t,e,n,v)})),tileUrl:p,serviceMode:w,layerMap:o,dimensionMap:a}},t.parseResourceInfo=function(e){return e.layers.forEach((function(e){e.tileMatrixSets.forEach((function(e){var t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((function(r){r.scale=96*r.scale/t.dpi,r.resolution=w(t.spatialReference.wkid,r.scale*x/96,e.id)})),t.dpi=96)}))})),e},t.getTileUrlFromResourceUrls=function(e,t,r,i,o,a,n,s){var l=e.dimensionMap,p=y(e,t),u=l.get(t).dimensions&&l.get(t).dimensions[0],c=l.get(t).dimensions2&&l.get(t).dimensions2[0],d="";if(p&&p.length>0){var f=null;p.some((function(e){return e.format===i&&(f=e,!0)})),f||(f=p[n%p.length]),d=f.template.replace(/\{Style\}/gi,o).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+n).replace(/\{TileCol\}/gi,""+s).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,c)}return d},t.getTileUrlTemplateFromResourceUrls=function(e,t,r,i){var o=e.dimensionMap,a=y(e,t),n="";if(a&&a.length>0){var s=o.get(t).dimensions&&o.get(t).dimensions[0],l=o.get(t).dimensions2&&o.get(t).dimensions2[0];(n=a[0].template).indexOf(".xxx")===n.length-4&&(n=n.slice(0,n.length-4)),n=(n=(n=(n=(n=(n=(n=n.replace(/\{Style\}/gi,i)).replace(/\{TileMatrixSet\}/gi,r)).replace(/\{TileMatrix\}/gi,"{level}")).replace(/\{TileRow\}/gi,"{row}")).replace(/\{TileCol\}/gi,"{col}")).replace(/\{dimensionValue\}/gi,s)).replace(/\{dimensionValue2\}/gi,l)}return n}}).apply(null,i))||(e.exports=o)},ATfx:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("dxjN"),r("y4WC"),r("ycL1"),r("Vx27"),r("N7S/"),r("0Fa2"),r("wAFj")],void 0===(o=(function(e,t,r,i,o,a,n,s,l,p,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.fullExtent=null,r.imageFormats=null,r.id=null,r.layer=null,r.styles=null,r.tileMatrixSetId=null,r.tileMatrixSets=null,r}var o;return r(t,e),o=t,Object.defineProperty(t.prototype,"description",{get:function(){return this._get("description")},set:function(e){this._set("description",e)},enumerable:!0,configurable:!0}),t.prototype.readFullExtent=function(e,t){return(e=t.fullExtent)?l.fromJSON(e):null},Object.defineProperty(t.prototype,"imageFormat",{get:function(){var e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e},set:function(e){var t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"styleId",{get:function(){var e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e},set:function(e){this._set("styleId",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tileMatrixSet",{get:function(){var e=this;return this.tileMatrixSets?this.tileMatrixSets.find((function(t){return t.id===e.tileMatrixSetId})):null},enumerable:!0,configurable:!0}),t.prototype.clone=function(){var e=new o;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e},i([s.property()],t.prototype,"description",null),i([s.property()],t.prototype,"fullExtent",void 0),i([s.reader("fullExtent",["fullExtent"])],t.prototype,"readFullExtent",null),i([s.property({dependsOn:["imageFormats"]})],t.prototype,"imageFormat",null),i([s.property({json:{read:{source:"formats"}}})],t.prototype,"imageFormats",void 0),i([s.property()],t.prototype,"id",void 0),i([s.property()],t.prototype,"layer",void 0),i([s.property({dependsOn:["styles"]})],t.prototype,"styleId",null),i([s.property({type:a.ofType(u),json:{read:{source:"styles"}}})],t.prototype,"styles",void 0),i([s.property({value:null,json:{write:{ignoreOrigin:!0}}})],t.prototype,"title",null),i([s.property()],t.prototype,"tileMatrixSetId",void 0),i([s.property({readOnly:!0,dependsOn:["tileMatrixSetId"]})],t.prototype,"tileMatrixSet",null),i([s.property({type:a.ofType(p),json:{read:{source:"tileMatrixSets"}}})],t.prototype,"tileMatrixSets",void 0),o=i([s.subclass("esri.layers.support.WMTSSublayer")],t)}(s.declared(n.JSONSupport))}).apply(null,i))||(e.exports=o)},AgRT:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("zp6E"),r("y4WC"),r("ma1f"),r("eIBl"),r("9sIV"),r("rg9i"),r("EUqE"),r("TTKK"),r("jfWY"),r("Vx27"),r("N7S/"),r("0RER"),r("a2fw"),r("FEX1"),r("QJ8R"),r("WaJo"),r("OXmT"),r("pMLx"),r("zBTX"),r("ATfx"),r("835r")],void 0===(o=(function(e,t,r,i,o,a,n,s,l,p,u,c,d,y,f,m,h,g,v,w,x,I,b,S,M,T,L,P){var O={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},E=c.createSetFromValues(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);return function(e){function t(t,r){var i=e.call(this,t)||this;return i._sublayersHandles=new u,i.copyright="",i.customParameters=null,i.customLayerParameters=null,i.fullExtent=null,i.operationalLayerType="WebTiledLayer",i.resourceInfo=null,i.serviceMode="RESTful",i.sublayers=null,i.type="wmts",i.version="1.0.0",i.watch("activeLayer",(function(e,t){t&&(t.layer=null),e&&(e.layer=i)}),!0),i.watch("sublayers",(function(e,t){t&&(t.forEach((function(e){e.layer=null})),i._sublayersHandles.removeAll(),i._sublayersHandles=null),e&&(e.forEach((function(e){e.layer=i})),i._sublayersHandles||(i._sublayersHandles=new u),i._sublayersHandles.add([e.on("after-add",(function(e){e.item.layer=i})),e.on("after-remove",(function(e){e.item.layer=null}))]))}),!0),i}return i(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r({url:e},t):e},t.prototype.load=function(e){var t=this;return"KVP"!==this.serviceMode&&"RESTful"!==this.serviceMode?void console.error("WMTS mode could only be 'KVP' or 'RESTful'"):(this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){return t._fetchService(e)})).catch((function(e){throw new p("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),this.when())},Object.defineProperty(t.prototype,"activeLayer",{get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)},enumerable:!0,configurable:!0}),t.prototype.readActiveLayerFromService=function(e,t,r){var i,o=this;return this.activeLayer?t.layers.some((function(e){return e.id===o.activeLayer.id&&(i=e,!0)})):(this.activeLayer=new L,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer},t.prototype.readActiveLayerFromItemOrWebDoc=function(e,t){var r=t.templateUrl?this._getLowerCasedUrlParams(t.templateUrl):null;return new L({id:t.wmtsInfo.layerIdentifier,tileMatrixSetId:t.wmtsInfo.tileMatrixSet,imageFormat:r&&r.format,styleId:r&&r.style})},t.prototype.writeActiveLayer=function(e,t,i,o){var a=this.activeLayer;t.templateUrl=this.getUrlTemplate(a.id,a.tileMatrixSetId,a.imageFormat,a.styleId);var n=f.getDeepValue("tileMatrixSet.tileInfo",a);t.tileInfo=n?n.toJSON(o):null,t.wmtsInfo=r({},t.wmtsInfo,{layerIdentifier:a.id,tileMatrixSet:a.tileMatrixSetId})},t.prototype.readCustomParameters=function(e,t){var r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null},Object.defineProperty(t.prototype,"fullExtents",{get:function(){var e=[];return this.activeLayer.tileMatrixSets.forEach((function(t){t.fullExtent&&e.push(t.fullExtent)})),e},enumerable:!0,configurable:!0}),t.prototype.readServiceMode=function(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"},t.prototype.readSublayersFromService=function(e,t,r){return function(e,t){return e.map((function(e){var r=new L;return r.read(e,t),r}))}(t.layers,r)},Object.defineProperty(t.prototype,"supportedSpatialReferences",{get:function(){return this.activeLayer.tileMatrixSets.map((function(e){return e.tileInfo.spatialReference})).toArray()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return"Layer"===this._get("title")?this.activeLayer&&this.activeLayer.title:this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)},enumerable:!0,configurable:!0}),t.prototype.createWebTileLayer=function(e){var t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,o=new T.default({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new w({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:o})},t.prototype.fetchTile=function(e,t,r){var i=this.getTileUrl(e,t,r);return s(i,{responseType:"image"}).then((function(e){return e.data}))},t.prototype.findSublayerById=function(e){return this.sublayers.find((function(t){return t.id===e}))},t.prototype.getTileUrl=function(e,t,r){var i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],o=i?i.levelValue?i.levelValue:""+i.level:""+e,a=this.resourceInfo?"":P.getTileUrlFromResourceUrls({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,o).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)),this._appendCustomLayerParameters(a)},t.prototype.getUrlTemplate=function(e,t,r,i){if(!this.resourceInfo){var o=P.getTileUrlTemplateFromResourceUrls({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(o)return o}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){var a="";return O[r.toLowerCase()]&&(a=O[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+a}return""},t.prototype._fetchService=function(e){return n(this,void 0,void 0,(function(){var t,i;return a(this,(function(o){switch(o.label){case 0:return this.resourceInfo?("KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo},[3,6]):[3,1];case 1:i=this._getCapabilitiesUrl(this.serviceMode),o.label=2;case 2:return o.trys.push([2,4,,6]),[4,s(i,r({},e,{responseType:"text"}))];case 3:return t=o.sent(),[3,6];case 4:return o.sent(),i=this._getCapabilitiesUrl("KVP"===this.serviceMode?"RESTful":"KVP"),[4,s(i,r({},e,{responseType:"text"}))];case 5:return t=o.sent(),[3,6];case 6:return t.data=this.resourceInfo?P.parseResourceInfo(t.data):P.parseCapabilities(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"}),[2]}}))}))},t.prototype._getTileMatrixSetById=function(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((function(t){return t.id===e}))},t.prototype._appendCustomParameters=function(e){if(this.customParameters)for(var t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e},t.prototype._appendCustomLayerParameters=function(e){if(this.customLayerParameters||this.customParameters){var t=r({},d.clone(this.customParameters||{}),this.customLayerParameters);for(var i in t)e+=(-1===e.indexOf("?")?"?":"&")+i+"="+encodeURIComponent(t[i])}return e},t.prototype._getCapabilitiesUrl=function(e){var t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),this._appendCustomParameters(t)},t.prototype._getLowerCasedUrlParams=function(e){if(!e)return null;var t=m.urlToObject(e).query;if(!t)return null;var r={};return Object.keys(t).forEach((function(e){r[e.toLowerCase()]=t[e]})),r},t.prototype._mergeParams=function(e,t){var r=this._getLowerCasedUrlParams(t);if(r){var i=Object.keys(r);i.length&&(e=e?d.clone(e):{},i.forEach((function(t){e.hasOwnProperty(t)||E.has(t)||(e[t]=r[t])})))}return e},o([h.property()],t.prototype,"dimensionMap",void 0),o([h.property()],t.prototype,"layerMap",void 0),o([h.property({type:L,dependsOn:["sublayers"],json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],t.prototype,"activeLayer",null),o([h.reader("service","activeLayer",["layers"])],t.prototype,"readActiveLayerFromService",null),o([h.reader(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],t.prototype,"readActiveLayerFromItemOrWebDoc",null),o([h.writer(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:M},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],t.prototype,"writeActiveLayer",null),o([h.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),o([h.property({type:["show","hide"]})],t.prototype,"listMode",void 0),o([h.property({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],t.prototype,"customParameters",void 0),o([h.reader("web-document","customParameters"),h.reader("portal-item","customParameters")],t.prototype,"readCustomParameters",null),o([h.property({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],t.prototype,"customLayerParameters",void 0),o([h.property({type:g,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],t.prototype,"fullExtent",void 0),o([h.property({readOnly:!0,dependsOn:["activeLayer"]})],t.prototype,"fullExtents",null),o([h.property({type:["WebTiledLayer"]})],t.prototype,"operationalLayerType",void 0),o([h.property()],t.prototype,"resourceInfo",void 0),o([h.property()],t.prototype,"serviceMode",void 0),o([h.reader(["portal-item","web-document"],"serviceMode",["templateUrl"])],t.prototype,"readServiceMode",null),o([h.property({type:l.ofType(L)})],t.prototype,"sublayers",void 0),o([h.reader("service","sublayers",["layers"])],t.prototype,"readSublayersFromService",null),o([h.property({readOnly:!0,dependsOn:["activeLayer"]})],t.prototype,"supportedSpatialReferences",null),o([h.property({dependsOn:["activeLayer"],json:{read:{source:"title"}}})],t.prototype,"title",null),o([h.property({json:{read:!1},readOnly:!0,value:"wmts"})],t.prototype,"type",void 0),o([h.property({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],t.prototype,"url",null),o([h.property()],t.prototype,"version",void 0),o([h.subclass("esri.layers.WMTSLayer")],t)}(h.declared(b.RefreshableLayer(S.ScaleRangeLayer(x.OperationalLayer(I.PortalLayer(y.MultiOriginJSONMixin(v)))))))}).apply(null,i))||(e.exports=o)},QJ8R:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(o=(function(e,t,i,o,a,n,s,l,p,u,c,d,y){Object.defineProperty(t,"__esModule",{value:!0});var f=l.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new y({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return n(this,void 0,void 0,(function(){var i,o;return a(this,(function(a){switch(a.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];a.label=1;case 1:return a.trys.push([1,4,,5]),[4,p.create((function(e){return Promise.all([r.e(0),r.e(98)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(r.oe)}))];case 2:return i=a.sent(),p.throwIfAborted(t),[4,i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,a.sent()];case 4:throw o=a.sent(),f.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+o),o;case 5:return[2]}}))}))},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||d.getDefault());return r&&i&&!u.hasSamePortal(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new s("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},o([c.property({type:y})],t.prototype,"portalItem",null),o([c.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),o([c.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),o([c.subclass("esri.layers.mixins.PortalLayer")],t)}(c.declared(e))}}).apply(null,i))||(e.exports=o)},WaJo:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Vx27")],void 0===(o=(function(e,t,r,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.RefreshableLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshInterval=0,t}return r(t,e),t.prototype.refresh=function(){this.emit("refresh")},i([o.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),i([o.subclass("esri.layers.mixins.RefreshableLayer")],t)}(o.declared(e))}}).apply(null,i))||(e.exports=o)},wAFj:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("dxjN"),r("ycL1"),r("Vx27")],void 0===(o=(function(e,t,r,i,o,a,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.id=null,r.title=null,r.description=null,r.legendUrl=null,r}var o;return r(t,e),o=t,t.prototype.clone=function(){var e=new o;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e},i([n.property({json:{read:{source:"id"}}})],t.prototype,"id",void 0),i([n.property({json:{read:{source:"title"}}})],t.prototype,"title",void 0),i([n.property({json:{read:{source:"abstract"}}})],t.prototype,"description",void 0),i([n.property({json:{read:{source:"legendUrl"}}})],t.prototype,"legendUrl",void 0),i([n.property({json:{read:{source:"isDefault"}}})],t.prototype,"isDefault",void 0),i([n.property({json:{read:{source:"keywords"}}})],t.prototype,"keywords",void 0),o=i([n.subclass("esri.layer.support.WMTSStyle")],t)}(n.declared(a.JSONSupport))}).apply(null,i))||(e.exports=o)}}]);