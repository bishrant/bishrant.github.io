(function(){var e={"esri/layers/support/TileMatrixSet":"0Fa2","esri/layers/support/wmtsUtils":"835r","esri/layers/support/WMTSSublayer":"ATfx","esri/layers/WMTSLayer":"AgRT","esri/layers/support/WMTSStyle":"wAFj"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"0Fa2":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27"),r("N7S/"),r("pMLx")],void 0===(o=(function(e,t,r,i,o,a,n){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.fullExtent=null,r.id=null,r.tileInfo=null,r}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){var e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e},r.__decorate([o.property({type:a,json:{read:{source:"fullExtent"}}})],t.prototype,"fullExtent",void 0),r.__decorate([o.property({type:String,json:{read:{source:"id"}}})],t.prototype,"id",void 0),r.__decorate([o.property({type:n,json:{read:{source:"tileInfo"}}})],t.prototype,"tileInfo",void 0),i=r.__decorate([o.subclass("esri.layer.support.TileMatrixSet")],t)}(i.JSONSupport)}).apply(null,i))||(e.exports=o)},"835r":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("ma1f"),r("N7S/"),r("oxlp"),r("Z4y+"),r("KDna"),r("1/to"),r("pMLx")],void 0===(o=(function(e,t,r,i,o,a,n,s,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTileUrlTemplateFromResourceUrls=t.getTileUrlFromResourceUrls=t.parseResourceInfo=t.parseCapabilities=void 0;var p=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function u(e,t){var r=t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function c(e,t){return Array.prototype.slice.call(t.getElementsByTagName(e)).map((function(e){return e.textContent}))}function d(e,t){return e.split(">").forEach((function(e){t&&(t=u(e,t))})),t&&t.textContent}function y(e,t,r,i){var o;return Array.prototype.slice.call(i.childNodes).some((function(i){if(i.nodeName.indexOf(e)>-1){var a=u(t,i),n=a&&a.textContent;if(n===r||r.split(":")&&r.split(":")[1]===n)return o=i,!0}return!1})),o}function f(e,t){var r=[],i=e.layerMap.get(t);if(i){var o,a,n,s,l=Array.prototype.slice.call(i.getElementsByTagName("ResourceURL")),p=i.getElementsByTagName("Dimension");return p.length&&(o=d("Identifier",p[0]),a=c("Default",p[0])||c("Value",p[0])),p.length>1&&(n=d("Identifier",p[1]),s=c("Default",p[1])||c("Value",p[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:s}),l.forEach((function(e){var t,i=e.getAttribute("template");"tile"===e.getAttribute("resourceType")&&(o&&a.length&&(i.indexOf("{"+o+"}")>-1?i=i.replace("{"+o+"}","{dimensionValue}"):(t=i.toLowerCase().indexOf("{"+o.toLowerCase()+"}"))>-1&&(i=i.substring(0,t)+"{dimensionValue}"+i.substring(t+o.length+2))),n&&s.length&&(i.indexOf("{"+n+"}")>-1?i=i.replace("{"+n+"}","{dimensionValue2}"):(t=i.toLowerCase().indexOf("{"+n.toLowerCase()+"}"))>-1&&(i=i.substring(0,t)+"{dimensionValue2}"+i.substring(t+n.length+2))),r.push({template:i,format:e.getAttribute("format"),resourceType:"tile"}))})),r}}function m(e,t,r,i){var o,a=d("Identifier",e),n=d("ScaleDenominator",e).split("E").map((function(e){return Number(e)})),s=h(t,o=n.length>1?n[0]*Math.pow(10,n[1]):n[0],i);return{level:r,levelValue:a,scale:o*=1.058267716535433,resolution:s}}function h(e,t,r){return 7*t/25e3/(s.hasOwnProperty(String(e))?s.values[s[e]]:"default028mm"===r?6370997*Math.PI/180:n.metersPerDegree)}t.parseCapabilities=function(e,t){e=e.replace(/ows:/gi,"");var n=(new DOMParser).parseFromString(e,"text/xml").documentElement,s=new Map,f=new Map,h=u("Contents",n);if(!h)throw new r("wmtslayer:wmts-capabilities-xml-is-not-valid");var g,v,_=u("OperationsMetadata",n),w=_&&_.querySelector("[name='GetTile']"),x=w&&w.getElementsByTagName("Get"),S=x&&Array.prototype.slice.call(x),M=t&&t.url&&t.url.indexOf("https")>-1,b=t.serviceMode,I=t&&t.url;if(S&&S.length&&S.some((function(e){var t=u("Constraint",e);return!t||y("AllowedValues","Value",b,t)?(I=e.attributes[0].nodeValue,!0):(!t||y("AllowedValues","Value","RESTful",t)||y("AllowedValues","Value","REST",t)?v=e.attributes[0].nodeValue:t&&!y("AllowedValues","Value","KVP",t)||(g=e.attributes[0].nodeValue),!1)})),!I)if(v)I=v,b="RESTful";else if(g)I=g,b="KVP";else{var T=u("ServiceMetadataURL",n);I=T&&T.getAttribute("xlink:href")}var L=I.indexOf("1.0.0/");return-1===L&&"RESTful"===b?I+="/":L>-1&&(I=I.substring(0,L)),"KVP"===b&&(I+=L>-1?"":"?"),M&&(I=I.replace(/^http:/i,"https:")),{copyright:d("ServiceIdentification>AccessConstraints",n),layers:Array.prototype.slice.call(h.getElementsByTagName("Layer")).map((function(e){var t=d("Identifier",e);return s.set(t,e),function(e,t,r,n){var s=d("Abstract",t),f=c("Format",t),h=function(e){var t=u("WGS84BoundingBox",e),r=t?d("LowerCorner",t).split(" "):["-180","-90"],i=t?d("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}(t),g=function(e,t){return Array.prototype.slice.call(e.getElementsByTagName("Style")).map((function(e){var r=u("LegendURL",e),i=u("Keywords",e),o=i&&c("Keyword",i),a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:d("Abstract",e),id:d("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:o,legendUrl:a,title:d("Title",e)}}))}(t,n),v=d("Title",t),_=function(e,t){return c("TileMatrixSet",e).map((function(r){return function(e,t,r){var n=c("TileMatrix",y("TileMatrixSetLink","TileMatrixSet",e,t)),s=y("TileMatrixSet","Identifier",e,r),f=function(e){var t=d("SupportedCRS",e);t&&(t=t.toLowerCase());var r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);var i=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,i=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,i=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,i=!0);var n,s=new a({wkid:r}),l=d("TopLeftCorner",u("TileMatrix",e)).split(" "),c=l[0].split("E").map((function(e){return Number(e)})),y=l[1].split("E").map((function(e){return Number(e)})),f=c[0],m=y[0];c.length>1&&(f=c[0]*Math.pow(10,c[1])),y.length>1&&(m=y[0]*Math.pow(10,y[1]));var h=i&&4326===r&&90===f&&-180===m;return p.some((function(e,a){var l=Number(t.split(":").pop());return l>=e[0]&&l<=e[1]||4326===r&&(!i||h)?(n=new o(m,f,s),!0):(a===p.length-1&&(n=new o(f,m,s)),!1)})),n}(s),h=f.spatialReference,g=h.wkid,v=u("TileMatrix",s),_=[parseInt(d("TileWidth",v),10),parseInt(d("TileHeight",v),10)],w=[];n.length?n.forEach((function(t,r){var i=y("TileMatrix","Identifier",t,s);w.push(m(i,g,r,e))})):Array.prototype.slice.call(s.getElementsByTagName("TileMatrix")).forEach((function(t,r){w.push(m(t,g,r,e))}));var x=function(e,t,r,o){var a,n,s,l,p,c,y=u("BoundingBox",e);if(y&&(a=d("LowerCorner",y).split(" "),n=d("UpperCorner",y).split(" ")),a&&a.length>1&&n&&n.length>1)s=parseFloat(a[0]),p=parseFloat(a[1]),l=parseFloat(n[0]),c=parseFloat(n[1]);else{var f=u("TileMatrix",e),m=parseFloat(d("MatrixWidth",f)),h=parseFloat(d("MatrixHeight",f));l=(s=t.x)+m*r[0]*o.resolution,p=(c=t.y)-h*r[1]*o.resolution}return new i(s,p,l,c,t.spatialReference)}(s,f,_,w[0]);return{id:e,fullExtent:x.toJSON(),tileInfo:new l({dpi:96,spatialReference:h,size:_,origin:f,lods:w}).toJSON()}}(r,e,t)}))}(t,r);return{id:e,fullExtent:h,description:s,formats:f,styles:g,title:v,tileMatrixSets:_}}(t,e,h,M)})),tileUrl:I,serviceMode:b,layerMap:s,dimensionMap:f}},t.parseResourceInfo=function(e){return e.layers.forEach((function(e){e.tileMatrixSets.forEach((function(e){var t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((function(r){r.scale=96*r.scale/t.dpi,r.resolution=h(t.spatialReference.wkid,90.71428571428571*r.scale/96,e.id)})),t.dpi=96)}))})),e},t.getTileUrlFromResourceUrls=function(e,t,r,i,o,a,n,s){var l=e.dimensionMap,p=f(e,t),u=l.get(t).dimensions&&l.get(t).dimensions[0],c=l.get(t).dimensions2&&l.get(t).dimensions2[0],d="";if(p&&p.length>0){var y=null;p.some((function(e){return e.format===i&&(y=e,!0)})),y||(y=p[n%p.length]),d=y.template.replace(/\{Style\}/gi,o).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+n).replace(/\{TileCol\}/gi,""+s).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,c)}return d},t.getTileUrlTemplateFromResourceUrls=function(e,t,r,i){var o=e.dimensionMap,a=f(e,t),n="";if(a&&a.length>0){var s=o.get(t).dimensions&&o.get(t).dimensions[0],l=o.get(t).dimensions2&&o.get(t).dimensions2[0];(n=a[0].template).indexOf(".xxx")===n.length-4&&(n=n.slice(0,n.length-4)),n=(n=(n=(n=(n=(n=(n=n.replace(/\{Style\}/gi,i)).replace(/\{TileMatrixSet\}/gi,r)).replace(/\{TileMatrix\}/gi,"{level}")).replace(/\{TileRow\}/gi,"{row}")).replace(/\{TileCol\}/gi,"{col}")).replace(/\{dimensionValue\}/gi,s)).replace(/\{dimensionValue2\}/gi,l)}return n}}).apply(null,i))||(e.exports=o)},ATfx:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("ycL1"),r("Vx27"),r("N7S/"),r("0Fa2"),r("wAFj")],void 0===(o=(function(e,t,r,i,o,a,n,s,l){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.fullExtent=null,r.imageFormats=null,r.id=null,r.layer=null,r.styles=null,r.tileMatrixSetId=null,r.tileMatrixSets=null,r}var o;return r.__extends(t,e),o=t,Object.defineProperty(t.prototype,"description",{get:function(){return this._get("description")},set:function(e){this._set("description",e)},enumerable:!1,configurable:!0}),t.prototype.readFullExtent=function(e,t){return(e=t.fullExtent)?n.fromJSON(e):null},Object.defineProperty(t.prototype,"imageFormat",{get:function(){var e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e},set:function(e){var t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"styleId",{get:function(){var e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e},set:function(e){this._set("styleId",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return this._get("title")},set:function(e){this._set("title",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tileMatrixSet",{get:function(){var e=this;return this.tileMatrixSets?this.tileMatrixSets.find((function(t){return t.id===e.tileMatrixSetId})):null},enumerable:!1,configurable:!0}),t.prototype.clone=function(){var e=new o;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e},r.__decorate([a.property()],t.prototype,"description",null),r.__decorate([a.property()],t.prototype,"fullExtent",void 0),r.__decorate([a.reader("fullExtent",["fullExtent"])],t.prototype,"readFullExtent",null),r.__decorate([a.property({dependsOn:["imageFormats"]})],t.prototype,"imageFormat",null),r.__decorate([a.property({json:{read:{source:"formats"}}})],t.prototype,"imageFormats",void 0),r.__decorate([a.property()],t.prototype,"id",void 0),r.__decorate([a.property()],t.prototype,"layer",void 0),r.__decorate([a.property({dependsOn:["styles"]})],t.prototype,"styleId",null),r.__decorate([a.property({type:i.ofType(l),json:{read:{source:"styles"}}})],t.prototype,"styles",void 0),r.__decorate([a.property({value:null,json:{write:{ignoreOrigin:!0}}})],t.prototype,"title",null),r.__decorate([a.property()],t.prototype,"tileMatrixSetId",void 0),r.__decorate([a.property({readOnly:!0,dependsOn:["tileMatrixSetId"]})],t.prototype,"tileMatrixSet",null),r.__decorate([a.property({type:i.ofType(s),json:{read:{source:"tileMatrixSets"}}})],t.prototype,"tileMatrixSets",void 0),o=r.__decorate([a.subclass("esri.layers.support.WMTSSublayer")],t)}(o.JSONSupport)}).apply(null,i))||(e.exports=o)},AgRT:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("zp6E"),r("y4WC"),r("ma1f"),r("eIBl"),r("rg9i"),r("EUqE"),r("TTKK"),r("qMld"),r("ULaq"),r("jfWY"),r("Vx27"),r("N7S/"),r("0RER"),r("a2fw"),r("Pnm5"),r("FEX1"),r("QJ8R"),r("WaJo"),r("OXmT"),r("pMLx"),r("zBTX"),r("ATfx"),r("835r")],void 0===(o=(function(e,t,r,i,o,a,n,s,l,p,u,c,d,y,f,m,h,g,v,_,w,x,S,M,b,I){"use strict";var T={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},L=c.SetFromValues(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this;return i._sublayersHandles=new n,i.copyright="",i.customParameters=null,i.customLayerParameters=null,i.fullExtent=null,i.operationalLayerType="WebTiledLayer",i.resourceInfo=null,i.serviceMode="RESTful",i.sublayers=null,i.type="wmts",i.version="1.0.0",i.watch("activeLayer",(function(e,t){t&&(t.layer=null),e&&(e.layer=i)}),!0),i.watch("sublayers",(function(e,t){t&&(t.forEach((function(e){e.layer=null})),i._sublayersHandles.removeAll(),i._sublayersHandles=null),e&&(e.forEach((function(e){e.layer=i})),i._sublayersHandles||(i._sublayersHandles=new n),i._sublayersHandles.add([e.on("after-add",(function(e){e.item.layer=i})),e.on("after-remove",(function(e){e.item.layer=null}))]))}),!0),i}return r.__extends(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r.__assign({url:e},t):e},t.prototype.load=function(e){var t=this;if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){return t._fetchService(e)})).catch((function(e){throw new a("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),u.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")},Object.defineProperty(t.prototype,"activeLayer",{get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)},enumerable:!1,configurable:!0}),t.prototype.readActiveLayerFromService=function(e,t,r){var i,o=this;return this.activeLayer?t.layers.some((function(e){return e.id===o.activeLayer.id&&(i=e,!0)})):(this.activeLayer=new b,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer},t.prototype.readActiveLayerFromItemOrWebDoc=function(e,t){var r=t.templateUrl,i=t.wmtsInfo,o=r?this._getLowerCasedUrlParams(r):null,a=i&&i.layerIdentifier,n=null,s=i&&i.tileMatrixSet;return s&&(Array.isArray(s)?s.length&&(n=s[0]):n=s),new b({id:a,imageFormat:o&&o.format,styleId:o&&o.style,tileMatrixSetId:n})},t.prototype.writeActiveLayer=function(e,t,i,o){var a=this.activeLayer;t.templateUrl=this.getUrlTemplate(a.id,a.tileMatrixSetId,a.imageFormat,a.styleId);var n=p.getDeepValue("tileMatrixSet.tileInfo",a);t.tileInfo=n?n.toJSON(o):null,t.wmtsInfo=r.__assign(r.__assign({},t.wmtsInfo),{layerIdentifier:a.id,tileMatrixSet:a.tileMatrixSetId})},t.prototype.readCustomParameters=function(e,t){var r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null},Object.defineProperty(t.prototype,"fullExtents",{get:function(){var e=[];return this.activeLayer.tileMatrixSets.forEach((function(t){t.fullExtent&&e.push(t.fullExtent)})),e},enumerable:!1,configurable:!0}),t.prototype.readServiceMode=function(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"},t.prototype.readSublayersFromService=function(e,t,r){return function(e,t){return e.map((function(e){var r=new b;return r.read(e,t),r}))}(t.layers,r)},Object.defineProperty(t.prototype,"supportedSpatialReferences",{get:function(){return this.activeLayer.tileMatrixSets.map((function(e){return e.tileInfo.spatialReference})).toArray()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return"Layer"===this._get("title")?this.activeLayer&&this.activeLayer.title:this._get("title")},set:function(e){this._set("title",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)},enumerable:!1,configurable:!0}),t.prototype.createWebTileLayer=function(e){var t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,o=new M.default({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new h({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:o})},t.prototype.fetchTile=function(e,t,r){var o=this.getTileUrl(e,t,r);return i(o,{responseType:"image"}).then((function(e){return e.data}))},t.prototype.findSublayerById=function(e){return this.sublayers.find((function(t){return t.id===e}))},t.prototype.getTileUrl=function(e,t,r){var i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],o=i?i.levelValue?i.levelValue:""+i.level:""+e,a=this.resourceInfo?"":I.getTileUrlFromResourceUrls({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,o).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)),this._appendCustomLayerParameters(a)},t.prototype.getUrlTemplate=function(e,t,r,i){if(!this.resourceInfo){var o=I.getTileUrlTemplateFromResourceUrls({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(o)return o}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){var a="";return T[r.toLowerCase()]&&(a=T[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+a}return""},t.prototype._fetchService=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,o;return r.__generator(this,(function(a){switch(a.label){case 0:return this.resourceInfo?("KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo},[3,6]):[3,1];case 1:o=this._getCapabilitiesUrl(this.serviceMode),a.label=2;case 2:return a.trys.push([2,4,,6]),[4,i(o,r.__assign(r.__assign({},e),{responseType:"text"}))];case 3:return t=a.sent(),[3,6];case 4:return a.sent(),o=this._getCapabilitiesUrl("KVP"===this.serviceMode?"RESTful":"KVP"),[4,i(o,r.__assign(r.__assign({},e),{responseType:"text"}))];case 5:return t=a.sent(),[3,6];case 6:return t.data=this.resourceInfo?I.parseResourceInfo(t.data):I.parseCapabilities(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"}),[2]}}))}))},t.prototype._getTileMatrixSetById=function(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((function(t){return t.id===e}))},t.prototype._appendCustomParameters=function(e){if(this.customParameters)for(var t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e},t.prototype._appendCustomLayerParameters=function(e){if(this.customLayerParameters||this.customParameters){var t=r.__assign(r.__assign({},s.clone(this.customParameters||{})),this.customLayerParameters);for(var i in t)e+=(-1===e.indexOf("?")?"?":"&")+i+"="+encodeURIComponent(t[i])}return e},t.prototype._getCapabilitiesUrl=function(e){var t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),this._appendCustomParameters(t)},t.prototype._getLowerCasedUrlParams=function(e){if(!e)return null;var t=d.urlToObject(e).query;if(!t)return null;var r={};return Object.keys(t).forEach((function(e){r[e.toLowerCase()]=t[e]})),r},t.prototype._mergeParams=function(e,t){var r=this._getLowerCasedUrlParams(t);if(r){var i=Object.keys(r);i.length&&(e=e?s.clone(e):{},i.forEach((function(t){e.hasOwnProperty(t)||L.has(t)||(e[t]=r[t])})))}return e},r.__decorate([y.property()],t.prototype,"dimensionMap",void 0),r.__decorate([y.property()],t.prototype,"layerMap",void 0),r.__decorate([y.property({type:b,dependsOn:["sublayers"],json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],t.prototype,"activeLayer",null),r.__decorate([y.reader("service","activeLayer",["layers"])],t.prototype,"readActiveLayerFromService",null),r.__decorate([y.reader(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],t.prototype,"readActiveLayerFromItemOrWebDoc",null),r.__decorate([y.writer(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:S},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],t.prototype,"writeActiveLayer",null),r.__decorate([y.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),r.__decorate([y.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([y.property({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],t.prototype,"customParameters",void 0),r.__decorate([y.reader("web-document","customParameters"),y.reader("portal-item","customParameters")],t.prototype,"readCustomParameters",null),r.__decorate([y.property({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],t.prototype,"customLayerParameters",void 0),r.__decorate([y.property({type:f,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],t.prototype,"fullExtent",void 0),r.__decorate([y.property({readOnly:!0,dependsOn:["activeLayer"]})],t.prototype,"fullExtents",null),r.__decorate([y.property({type:["WebTiledLayer"]})],t.prototype,"operationalLayerType",void 0),r.__decorate([y.property()],t.prototype,"resourceInfo",void 0),r.__decorate([y.property()],t.prototype,"serviceMode",void 0),r.__decorate([y.reader(["portal-item","web-document"],"serviceMode",["templateUrl"])],t.prototype,"readServiceMode",null),r.__decorate([y.property({type:o.ofType(b)})],t.prototype,"sublayers",void 0),r.__decorate([y.reader("service","sublayers",["layers"])],t.prototype,"readSublayersFromService",null),r.__decorate([y.property({readOnly:!0,dependsOn:["activeLayer"]})],t.prototype,"supportedSpatialReferences",null),r.__decorate([y.property({dependsOn:["activeLayer"],json:{read:{source:"title"}}})],t.prototype,"title",null),r.__decorate([y.property({json:{read:!1},readOnly:!0,value:"wmts"})],t.prototype,"type",void 0),r.__decorate([y.property({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],t.prototype,"url",null),r.__decorate([y.property()],t.prototype,"version",void 0),r.__decorate([y.subclass("esri.layers.WMTSLayer")],t)}(g.BlendLayer(w.RefreshableLayer(x.ScaleRangeLayer(v.OperationalLayer(_.PortalLayer(l.MultiOriginJSONMixin(m)))))))}).apply(null,i))||(e.exports=o)},wAFj:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(o=(function(e,t,r,i,o){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.id=null,r.title=null,r.description=null,r.legendUrl=null,r}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){var e=new i;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e},r.__decorate([o.property({json:{read:{source:"id"}}})],t.prototype,"id",void 0),r.__decorate([o.property({json:{read:{source:"title"}}})],t.prototype,"title",void 0),r.__decorate([o.property({json:{read:{source:"abstract"}}})],t.prototype,"description",void 0),r.__decorate([o.property({json:{read:{source:"legendUrl"}}})],t.prototype,"legendUrl",void 0),r.__decorate([o.property({json:{read:{source:"isDefault"}}})],t.prototype,"isDefault",void 0),r.__decorate([o.property({json:{read:{source:"keywords"}}})],t.prototype,"keywords",void 0),i=r.__decorate([o.subclass("esri.layer.support.WMTSStyle")],t)}(i.JSONSupport)}).apply(null,i))||(e.exports=o)}}]);