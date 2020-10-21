(function(){var e={"esri/core/devEnvironmentUtils":"J/1E","esri/support/featureFlags":"XsEe","esri/renderers/support/ClassBreakInfo":"YbFo","esri/renderers/ClassBreaksRenderer":"Z/W+","esri/symbols/support/styleUtils":"baLB","esri/symbols/support/Thumbnail":"dtI/","esri/renderers/support/commonProperties":"hE6y","esri/renderers/UniqueValueRenderer":"nHUP","esri/symbols/support/StyleOrigin":"pYVR","esri/renderers/support/UniqueValueInfo":"wAtj"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"J/1E":function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("J3YA")],void 0===(n=(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isTelemetryDevEnvironment=t.adjustStaticAGOUrl=t.isDevEnvironment=void 0,t.isDevEnvironment=function(e){return e=e||r.location.hostname,a.some((function(t){return null!=(null==e?void 0:e.match(t))}))},t.adjustStaticAGOUrl=function(e,t){return e&&(t=t||r.location.hostname)?null!=t.match(o)||null!=t.match(i)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e},t.isTelemetryDevEnvironment=function(e){return e=e||r.location.hostname,[/^zrh-.+?\.esri\.com$/].concat(a).some((function(t){return null!=(null==e?void 0:e.match(t))}))};var o=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,i=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,a=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,n,/^jsapps.esri.com$/,i,l]}).apply(null,o))||(e.exports=n)},XsEe:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("H1tY")],void 0===(n=(function(e,t,r){"use strict";function o(e,t){return!!r("enable-feature:"+e+"/"+t)}Object.defineProperty(t,"__esModule",{value:!0}),t.enableWebStyleForceWOSR=t.hasEnableFeature=void 0,t.hasEnableFeature=o,t.enableWebStyleForceWOSR=function(){return o("jschmid","force-wosr")}}).apply(null,o))||(e.exports=n)},YbFo:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("+AWJ"),r("ycL1"),r("Vx27"),r("HqJa")],void 0===(n=(function(e,t,r,o,n,i,l){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.label=null,r.minValue=null,r.maxValue=0,r.symbol=null,r}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})},t.prototype.getMeshHash=function(){var e=JSON.stringify(this.symbol);return this.minValue+"."+this.maxValue+"."+e},r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),r.__decorate([i.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],t.prototype,"minValue",void 0),r.__decorate([i.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],t.prototype,"maxValue",void 0),r.__decorate([i.property({types:o.symbolTypesRenderer,json:{origins:{"web-scene":{types:o.symbolTypesRenderer3D,write:l.write}},write:l.write}})],t.prototype,"symbol",void 0),n=r.__decorate([i.subclass("esri.renderers.support.ClassBreakInfo")],t)}(n.JSONSupport)}).apply(null,o))||(e.exports=n)},"Z/W+":function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("+AWJ"),r("ImIS"),r("rg9i"),r("qsST"),r("LxLY"),r("qMld"),r("Vx27"),r("1dvD"),r("k7g7"),r("mLnd"),r("SIX4"),r("YbFo"),r("hE6y"),r("sHoj"),r("sCbS")],void 0===(n=(function(e,t,r,o,n,i,l,a,s,u,p,c,d,y,f,m,h,v){"use strict";var b=l.getLogger("esri.renderers.ClassBreaksRenderer"),_=new n.default({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),g=p.ensureType(f);return function(e){function t(t){var r=e.call(this,t)||this;return r.backgroundFillSymbol=null,r.classBreakInfos=null,r.defaultLabel=null,r.defaultSymbol=null,r.field=null,r.isMaxInclusive=!0,r.legendOptions=null,r.normalizationField=null,r.normalizationTotal=null,r.type="class-breaks",r.valueExpression=null,r.valueExpressionTitle=null,r._set("classBreakInfos",[]),r}var n;return r.__extends(t,e),n=t,Object.defineProperty(t.prototype,"_cache",{get:function(){return{compiledFunc:null}},enumerable:!1,configurable:!0}),t.prototype.readClassBreakInfos=function(e,t,r){if(Array.isArray(e)){var o=t.minValue;return e.map((function(e){var t=new f;return t.read(e,r),null==t.minValue&&(t.minValue=o),null==t.maxValue&&(t.maxValue=t.minValue),o=t.maxValue,t}))}},t.prototype.writeClassBreakInfos=function(e,t,r,o){var n=e.map((function(e){return e.write({},o)}));this._areClassBreaksConsecutive()&&n.forEach((function(e){return delete e.classMinValue})),t[r]=n},t.prototype.castField=function(e){return null==e?e:"function"==typeof e?(b.error(".field: field must be a string value"),null):p.ensureString(e)},Object.defineProperty(t.prototype,"minValue",{get:function(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"normalizationType",{get:function(){var e=this._get("normalizationType"),t=!!this.normalizationField,r=null!=this.normalizationTotal;return t||r?(e=(t?"field":r&&"percent-of-total")||null,t&&r&&b.warn("warning: both normalizationField and normalizationTotal are set!")):"field"!==e&&"percent-of-total"!==e||(e=null),e},set:function(e){this._set("normalizationType",e)},enumerable:!1,configurable:!0}),t.prototype.addClassBreakInfo=function(e,t,r){var n;n="number"==typeof e?new f({minValue:e,maxValue:t,symbol:o.ensureType(r)}):g(i.clone(e)),this.classBreakInfos.push(n),1===this.classBreakInfos.length&&this.notifyChange("minValue")},t.prototype.removeClassBreakInfo=function(e,t){for(var r=this.classBreakInfos.length,o=0;o<r;o++){var n=[this.classBreakInfos[o].minValue,this.classBreakInfos[o].maxValue];if(n[0]===e&&n[1]===t){this.classBreakInfos.splice(o,1);break}}},t.prototype.getBreakIndex=function(e,t){return this.valueExpression&&(a.isNone(t)||a.isNone(t.arcade))&&b.warn(""),this.valueExpression?this._getBreakIndexForExpression(e,t):this._getBreakIndexForField(e)},t.prototype.getClassBreakInfo=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,n,i,l;return r.__generator(this,(function(s){switch(s.label){case 0:return o=t,this.valueExpression&&(a.isNone(t)||a.isNone(t.arcade))?(n=[r.__assign({},o)],i={},[4,v.loadArcade()]):[3,2];case 1:o=r.__assign.apply(void 0,n.concat([(i.arcade=s.sent(),i)])),s.label=2;case 2:return[2,-1!==(l=this.getBreakIndex(e,o))?this.classBreakInfos[l]:null]}}))}))},t.prototype.getSymbol=function(e,t){if(!this.valueExpression||!a.isNone(t)&&!a.isNone(t.arcade)){var r=this.getBreakIndex(e,t);return r>-1?this.classBreakInfos[r].symbol:this.defaultSymbol}b.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used")},t.prototype.getSymbolAsync=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,n,i,l;return r.__generator(this,(function(s){switch(s.label){case 0:return o=t,this.valueExpression&&(a.isNone(t)||a.isNone(t.arcade))?(n=[r.__assign({},o)],i={},[4,v.loadArcade()]):[3,2];case 1:o=r.__assign.apply(void 0,n.concat([(i.arcade=s.sent(),i)])),s.label=2;case 2:return[2,(l=this.getBreakIndex(e,o))>-1?this.classBreakInfos[l].symbol:this.defaultSymbol]}}))}))},t.prototype.getSymbols=function(){var e=[];return this.classBreakInfos.forEach((function(t){t.symbol&&e.push(t.symbol)})),this.defaultSymbol&&e.push(this.defaultSymbol),e},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){var e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),r=this.normalizationField+"."+this.normalizationType+"."+this.normalizationTotal;return e+"."+t+"."+this.classBreakInfos.reduce((function(e,t){return e+t.getMeshHash()}),"")+"."+r+"."+this.field+"."+this.valueExpression},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new n({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:i.clone(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:i.clone(this.visualVariables),legendOptions:i.clone(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o;return r.__generator(this,(function(r){switch(r.label){case 0:return o=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)],[4,s.all(o)];case 1:return r.sent(),[2]}}))}))},t.prototype.collectSymbolFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o;return r.__generator(this,(function(n){switch(n.label){case 0:return o=r.__spreadArrays(this.getSymbols().map((function(r){return r.collectRequiredFields(e,t)})),[c.collectArcadeFieldNames(e,t,this.valueExpression)]),c.collectField(e,t,this.field),c.collectField(e,t,this.normalizationField),[4,s.all(o)];case 1:return n.sent(),[2]}}))}))},t.prototype._getBreakIndexForExpression=function(e,t){var r=a.unwrapOr(t,{}),o=r.viewingMode,n=r.scale,i=r.spatialReference,l=this._cache.compiledFunc,s=a.unwrap(r.arcade).arcadeUtils;if(!l){var u=s.createSyntaxTree(this.valueExpression);l=s.createFunction(u),this._cache.compiledFunc=l}var p=s.executeFunction(l,s.createExecContext(e,s.getViewInfo({viewingMode:o,scale:n,spatialReference:i})));return this._getBreakIndexfromInfos(p)},t.prototype._getBreakIndexForField=function(e){var t=e.attributes,r=this.normalizationType,o=parseFloat(t[this.field]);if(r){var n=this.normalizationTotal,i=parseFloat(t[this.normalizationField]);if("log"===r)o=Math.log(o)*Math.LOG10E;else if("percent-of-total"!==r||isNaN(n)){if("field"===r&&!isNaN(i)){if(isNaN(o)||isNaN(i))return-1;o/=i}}else o=o/n*100}return this._getBreakIndexfromInfos(o)},t.prototype._getBreakIndexfromInfos=function(e){var t=this.isMaxInclusive;if(null!=e&&"number"==typeof e&&!isNaN(e))for(var r=0;r<this.classBreakInfos.length;r++){var o=[this.classBreakInfos[r].minValue,this.classBreakInfos[r].maxValue];if(o[0]<=e&&(t?e<=o[1]:e<o[1]))return r}return-1},t.prototype._areClassBreaksConsecutive=function(){for(var e=this.classBreakInfos,t=e.length,r=1;r<t;r++)if(e[r-1].maxValue!==e[r].minValue)return!1;return!0},r.__decorate([u.property({readOnly:!0,dependsOn:["valueExpression"]})],t.prototype,"_cache",null),r.__decorate([u.property(m.rendererBackgroundFillSymbolProperty)],t.prototype,"backgroundFillSymbol",void 0),r.__decorate([u.property({type:[f]})],t.prototype,"classBreakInfos",void 0),r.__decorate([u.reader("classBreakInfos")],t.prototype,"readClassBreakInfos",null),r.__decorate([u.writer("classBreakInfos")],t.prototype,"writeClassBreakInfos",null),r.__decorate([u.property({type:String,json:{write:!0}})],t.prototype,"defaultLabel",void 0),r.__decorate([u.property(m.rendererSymbolProperty)],t.prototype,"defaultSymbol",void 0),r.__decorate([u.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),r.__decorate([u.cast("field")],t.prototype,"castField",null),r.__decorate([u.property({type:Boolean})],t.prototype,"isMaxInclusive",void 0),r.__decorate([u.property({type:h.default,json:{write:!0}})],t.prototype,"legendOptions",void 0),r.__decorate([u.property({type:Number,readOnly:!0,value:null,dependsOn:["classBreakInfos"],json:{read:!1,write:{overridePolicy:function(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],t.prototype,"minValue",null),r.__decorate([u.property({type:String,json:{write:!0}})],t.prototype,"normalizationField",void 0),r.__decorate([u.property({type:Number,cast:function(e){return p.ensureNumber(e)},json:{write:!0}})],t.prototype,"normalizationTotal",void 0),r.__decorate([u.property({type:_.apiValues,value:null,dependsOn:["normalizationField","normalizationTotal"],json:{type:_.jsonValues,read:_.read,write:_.write}})],t.prototype,"normalizationType",null),r.__decorate([u.enumeration({classBreaks:"class-breaks"})],t.prototype,"type",void 0),r.__decorate([u.property({type:String,json:{write:!0}})],t.prototype,"valueExpression",void 0),r.__decorate([u.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),n=r.__decorate([u.subclass("esri.renderers.ClassBreaksRenderer")],t)}(y.VisualVariablesMixin(d))}).apply(null,o))||(e.exports=n)},baLB:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("zp6E"),r("+AWJ"),r("KY0m"),r("J/1E"),r("ma1f"),r("qMld"),r("jfWY"),r("Qwus"),r("kW9H"),r("XsEe"),r("ojLd"),r("HqJa"),r("pYVR"),r("dtI/")],void 0===(n=(function(e,t,r,o,n,i,l,a,s,u,p,c,d,y,f,m,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styleNameFromItem=t.fetchSymbolFromStyle=t.resolveWebStyleSymbol=t.fetchStyle=void 0;var v={};function b(e,t,r){return e.styleUrl?function(e,t){return S(e,t).then((function(t){return{data:t.data,baseUrl:u.removeFile(e),styleUrl:e}}))}(e.styleUrl,r):e.styleName?function(e,t,r){var o,n=t.portal||p.getDefault(),i=n.url+" - "+(n.user&&n.user.username)+" - "+e;return v[i]||(v[i]=function(e,t,r){return t.load(r).then((function(){var o=new c({disableExtraQuery:!0,query:"owner:"+w+" AND type:"+I+' AND typekeywords:"'+e+'"'});return t.queryItems(o,r)})).then((function(t){var o=t.results,n=null,i=e.toLowerCase();if(o&&Array.isArray(o))for(var l=0,s=o;l<s.length;l++){var u=s[l];if(u.typeKeywords.some((function(e){return e.toLowerCase()===i}))&&u.type===I&&u.owner===w){n=u;break}}if(!n)throw new a("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e});return n.load(r)}))}(e,n,r).then((function(e){return o=e,e.fetchData()})).then((function(t){return{data:t,baseUrl:o.itemUrl,styleName:e}}))),v[i]}(e.styleName,t,r):s.reject(new a("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function _(e,t,r,o,p){var c=e.data,v={portal:r.portal,url:u.urlToObject(e.baseUrl),origin:"portal-item"},b=i.find(c.items,(function(e){return e.name===t}));if(!b)return s.reject(new a("symbolstyleutils:symbol-name-not-found","The symbol name '"+t+"' could not be found",{symbolName:t}));var _=y.fromJSON(function(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!d.enableWebStyleForceWOSR())for(var r=0,o=e.formatInfos;r<o.length;r++){var n=o[r];if("gltf"===n.type)return n.href}return e.webRef}(b,o),v),w=b.thumbnail&&b.thumbnail.href,I=b.thumbnail&&b.thumbnail.imageData;l.isDevEnvironment()&&(_=l.adjustStaticAGOUrl(_),w=l.adjustStaticAGOUrl(w));var V={portal:r.portal,url:u.urlToObject(u.removeFile(_)),origin:"portal-item"};return S(_,p).then((function(i){var l="cimRef"===o?g(i.data):i.data,a=f.fromJSON(l,V);if(a&&n.isSymbol3D(a)){if(w){var s=y.fromJSON(w,v);a.thumbnail=new h.default({url:s})}else I&&(a.thumbnail=new h.default({url:"data:image/png;base64,"+I}));e.styleUrl?a.styleOrigin=new m({portal:r.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(a.styleOrigin=new m({portal:r.portal,styleName:e.styleName,name:t}))}return a}))}function g(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function S(e,t){var n=r.__assign({responseType:"json",query:{f:"json"}},t);return o(u.normalize(e),n)}t.fetchStyle=b,t.resolveWebStyleSymbol=function(e,t,r,o){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,r){var o=V.replace(/\{SymbolName\}/gi,e.name);return S(o,r).then((function(e){var r=g(e.data);return f.fromJSON(r,{portal:t.portal,url:u.urlToObject(u.removeFile(o)),origin:"portal-item"})}))}(e,t,o):b(e,t,o).then((function(n){return _(n,e.name,t,r,o)})):s.reject(new a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))},t.fetchSymbolFromStyle=_,t.styleNameFromItem=function(e){for(var t=0,r=e.typeKeywords;t<r.length;t++){var o=r[t];if(/^Esri.*Style$/.test(o)&&"Esri Style"!==o)return o}};var w="esri_en",I="Style",V="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"}).apply(null,o))||(e.exports=n)},"dtI/":function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("Vx27")],void 0===(n=(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Thumbnail=void 0;var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({url:this.url})},r.__decorate([n.property({type:String})],t.prototype,"url",void 0),o=r.__decorate([n.subclass("esri.symbols.support.Thumbnail")],t)}(o);t.Thumbnail=i,t.default=i}).apply(null,o))||(e.exports=n)},hE6y:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("+AWJ"),r("HqJa")],void 0===(n=(function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rendererBackgroundFillSymbolProperty=t.rendererSymbolProperty=void 0,t.rendererSymbolProperty={types:r.symbolTypesRenderer,json:{write:{writer:o.write},origins:{"web-scene":{types:r.symbolTypesRenderer3D,write:{writer:o.write}}}}},t.rendererBackgroundFillSymbolProperty={types:{base:r.BaseSymbol,key:"type",typeMap:{"simple-fill":r.symbolTypes.typeMap["simple-fill"],"picture-fill":r.symbolTypes.typeMap["picture-fill"],"polygon-3d":r.symbolTypes.typeMap["polygon-3d"]}},json:{write:{writer:o.write},origins:{"web-scene":{type:r.PolygonSymbol3D,write:{writer:o.write}}}}}}).apply(null,o))||(e.exports=n)},nHUP:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("+AWJ"),r("+AWJ"),r("KY0m"),r("ma1f"),r("rg9i"),r("qsST"),r("LxLY"),r("TTKK"),r("qMld"),r("Vx27"),r("CYRa"),r("1dvD"),r("k7g7"),r("Qwus"),r("mLnd"),r("SIX4"),r("hE6y"),r("sHoj"),r("wAtj"),r("sCbS"),r("ojLd"),r("baLB")],void 0===(n=(function(e,t,r,o,n,i,l,a,s,u,p,c,d,y,f,m,h,v,b,_,g,S,w,I,V){"use strict";var x=s.getLogger("esri.renderers.UniqueValueRenderer"),O=f.ensureType(S);return function(e){function t(t){var r=e.call(this,t)||this;return r._valueInfoMap={},r._isDefaultSymbolDerived=!1,r.type="unique-value",r.backgroundFillSymbol=null,r.field=null,r.field2=null,r.field3=null,r.valueExpression=null,r.valueExpressionTitle=null,r.legendOptions=null,r.defaultLabel=null,r.fieldDelimiter=null,r.portal=null,r.styleOrigin=null,r.diff={uniqueValueInfos:function(e,t){if(e||t){if(!e||!t)return{type:"complete",oldValue:e,newValue:t};for(var r=!1,o={type:"collection",added:[],removed:[],changed:[],unchanged:[]},n=function(n){var l=i.find(e,(function(e){return e.value===t[n].value}));l?y.diff(l,t[n])?(o.changed.push({type:"complete",oldValue:l,newValue:t[n]}),r=!0):o.unchanged.push({oldValue:l,newValue:t[n]}):(o.added.push(t[n]),r=!0)},l=0;l<t.length;l++)n(l);var a=function(n){i.find(t,(function(t){return t.value===e[n].value}))||(o.removed.push(e[n]),r=!0)};for(l=0;l<e.length;l++)a(l);return r?o:void 0}}},r._set("uniqueValueInfos",[]),r}var s;return r.__extends(t,e),s=t,Object.defineProperty(t.prototype,"_cache",{get:function(){return{compiledFunc:null}},enumerable:!1,configurable:!0}),t.prototype.castField=function(e){return null==e||"function"==typeof e?e:f.ensureString(e)},t.prototype.writeField=function(e,t,r,o){"string"==typeof e?t[r]=e:o&&o.messages?o.messages.push(new l("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):x.error(".field: cannot write field to JSON since it's not a string value")},Object.defineProperty(t.prototype,"defaultSymbol",{set:function(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)},enumerable:!1,configurable:!0}),t.prototype.readPortal=function(e,t,r){return r.portal||h.getDefault()},t.prototype.readStyleOrigin=function(e,t,r){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){var o=I.fromJSON(t.styleUrl,r);return Object.freeze({styleUrl:o})}},t.prototype.writeStyleOrigin=function(e,t,r,o){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=I.toJSON(e.styleUrl,o))},Object.defineProperty(t.prototype,"uniqueValueInfos",{set:function(e){this.styleOrigin?x.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap())},enumerable:!1,configurable:!0}),t.prototype.addUniqueValueInfo=function(e,t){var r;this.styleOrigin?x.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(r="object"==typeof e?O(e):new S({value:e,symbol:n.ensureType(t)}),this.uniqueValueInfos.push(r),this._valueInfoMap[r.value]=r)},t.prototype.removeUniqueValueInfo=function(e){if(this.styleOrigin)x.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else for(var t=0;t<this.uniqueValueInfos.length;t++)if(this.uniqueValueInfos[t].value===e+""){delete this._valueInfoMap[e],this.uniqueValueInfos.splice(t,1);break}},t.prototype.getUniqueValueInfo=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,n,i;return r.__generator(this,(function(l){switch(l.label){case 0:return o=t,this.valueExpression&&(u.isNone(t)||u.isNone(t.arcade))?(n=[r.__assign({},o)],i={},[4,w.loadArcade()]):[3,2];case 1:o=r.__assign.apply(void 0,n.concat([(i.arcade=l.sent(),i)])),l.label=2;case 2:return[2,this._getUniqueValueInfo(e,o)]}}))}))},t.prototype.getSymbol=function(e,t){if(!this.valueExpression||!u.isNone(t)&&!u.isNone(t.arcade)){var r=this._getUniqueValueInfo(e,t);return r&&r.symbol||this.defaultSymbol}x.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used")},t.prototype.getSymbolAsync=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,n,i,l;return r.__generator(this,(function(a){switch(a.label){case 0:return o=t,this.valueExpression&&(u.isNone(o)||u.isNone(o.arcade))?(n=[r.__assign({},o)],i={},[4,w.loadArcade()]):[3,2];case 1:o=r.__assign.apply(void 0,n.concat([(i.arcade=a.sent(),i)])),a.label=2;case 2:return[2,(l=this._getUniqueValueInfo(e,o))&&l.symbol||this.defaultSymbol]}}))}))},t.prototype.getSymbols=function(){for(var e=[],t=0,r=this.uniqueValueInfos;t<r.length;t++){var o=r[t];o.symbol&&e.push(o.symbol)}return this.defaultSymbol&&e.push(this.defaultSymbol),e},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return JSON.stringify(this.backgroundFillSymbol)+"."+JSON.stringify(this.defaultSymbol)+"."+this.uniqueValueInfos.reduce((function(e,t){return e+t.getMeshHash()}),"")+"."+this.field+"."+this.field2+"."+this.field3+"."+this.fieldDelimiter+"."+this.valueExpression},t.prototype.clone=function(){var e=new s({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:a.clone(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:a.clone(this.visualVariables),legendOptions:a.clone(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:a.clone(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);var t=a.clone(this.uniqueValueInfos);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze(a.clone(this.styleOrigin))),Object.freeze(t)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression},enumerable:!1,configurable:!0}),t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o;return r.__generator(this,(function(r){switch(r.label){case 0:return o=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)],[4,c.all(o)];case 1:return r.sent(),[2]}}))}))},t.prototype.collectSymbolFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o;return r.__generator(this,(function(n){switch(n.label){case 0:return o=r.__spreadArrays(this.getSymbols().map((function(r){return r.collectRequiredFields(e,t)})),[m.collectArcadeFieldNames(e,t,this.valueExpression)]),m.collectField(e,t,this.field),m.collectField(e,t,this.field2),m.collectField(e,t,this.field3),[4,c.all(o)];case 1:return n.sent(),[2]}}))}))},t.prototype.populateFromStyle=function(){var e=this;return V.fetchStyle(this.styleOrigin,{portal:this.portal}).then((function(t){var r=[];return e._valueInfoMap={},t&&t.data&&Array.isArray(t.data.items)&&t.data.items.forEach((function(n){var i=new o.WebStyleSymbol({styleUrl:t.styleUrl,styleName:t.styleName,portal:e.portal,name:n.name});e.defaultSymbol||n.name!==t.data.defaultItem||(e.defaultSymbol=i,e._isDefaultSymbolDerived=!0);var l=new S({value:n.name,symbol:i});r.push(l),e._valueInfoMap[n.name]=l})),e._set("uniqueValueInfos",Object.freeze(r)),!e.defaultSymbol&&e.uniqueValueInfos.length&&(e.defaultSymbol=e.uniqueValueInfos[0].symbol,e._isDefaultSymbolDerived=!0),e}))},t.prototype._updateValueInfoMap=function(){var e=this;this._valueInfoMap={},this.uniqueValueInfos.forEach((function(t){return e._valueInfoMap[t.value+""]=t}))},t.prototype._getUniqueValueInfo=function(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)},t.prototype._getUnqiueValueInfoForExpression=function(e,t){var r=u.unwrapOr(t,{}),o=r.viewingMode,n=r.scale,i=r.spatialReference,l=this._cache.compiledFunc,a=u.unwrap(r.arcade).arcadeUtils;if(!l){var s=a.createSyntaxTree(this.valueExpression);l=a.createFunction(s),this._cache.compiledFunc=l}var p=a.executeFunction(l,a.createExecContext(e,a.getViewInfo({viewingMode:o,scale:n,spatialReference:i})));return this._valueInfoMap[p+""]},t.prototype._getUnqiueValueInfoForFields=function(e){var t,r=this.field,o=e.attributes;if("function"!=typeof r&&this.field2){var n=this.field2,i=this.field3,l=[];r&&l.push(o[r]),n&&l.push(o[n]),i&&l.push(o[i]),t=l.join(this.fieldDelimiter||"")}else"function"==typeof r?t=r(e):r&&(t=o[r]);return this._valueInfoMap[t+""]},t.fromPortalStyle=function(e,t){var r=new s(t&&t.properties);r._set("styleOrigin",Object.freeze({styleName:e})),r._set("portal",t&&t.portal||h.getDefault());var o=r.populateFromStyle();return o.catch((function(t){x.error("#fromPortalStyle('"+e+"'[, ...])","Failed to create unique value renderer from style name",t)})),o},t.fromStyleUrl=function(e,t){var r=new s(t&&t.properties);r._set("styleOrigin",Object.freeze({styleUrl:e}));var o=r.populateFromStyle();return o.catch((function(t){x.error("#fromStyleUrl('"+e+"'[, ...])","Failed to create unique value renderer from style URL",t)})),o},r.__decorate([d.property({readOnly:!0,dependsOn:["valueExpression"]})],t.prototype,"_cache",null),r.__decorate([d.enumeration({uniqueValue:"unique-value"})],t.prototype,"type",void 0),r.__decorate([d.property(_.rendererBackgroundFillSymbolProperty)],t.prototype,"backgroundFillSymbol",void 0),r.__decorate([d.property({json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],t.prototype,"field",void 0),r.__decorate([d.cast("field")],t.prototype,"castField",null),r.__decorate([d.writer("field")],t.prototype,"writeField",null),r.__decorate([d.property({type:String,json:{write:!0}})],t.prototype,"field2",void 0),r.__decorate([d.property({type:String,json:{write:!0}})],t.prototype,"field3",void 0),r.__decorate([d.property({type:String,json:{write:!0}})],t.prototype,"valueExpression",void 0),r.__decorate([d.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),r.__decorate([d.property({type:g.default,json:{write:!0}})],t.prototype,"legendOptions",void 0),r.__decorate([d.property({type:String,json:{write:!0}})],t.prototype,"defaultLabel",void 0),r.__decorate([d.property(p.deepMerge(r.__assign({},_.rendererSymbolProperty),{json:{write:{overridePolicy:function(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy:function(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],t.prototype,"defaultSymbol",null),r.__decorate([d.property({type:String,json:{write:!0}})],t.prototype,"fieldDelimiter",void 0),r.__decorate([d.property({type:h,readOnly:!0})],t.prototype,"portal",void 0),r.__decorate([d.reader("portal",["styleName"])],t.prototype,"readPortal",null),r.__decorate([d.property({readOnly:!0,json:{write:{enabled:!1,overridePolicy:function(){return{enabled:!0}}}}})],t.prototype,"styleOrigin",void 0),r.__decorate([d.reader("styleOrigin",["styleName","styleUrl"])],t.prototype,"readStyleOrigin",null),r.__decorate([d.writer("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],t.prototype,"writeStyleOrigin",null),r.__decorate([d.property({type:[S],json:{write:{overridePolicy:function(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],t.prototype,"uniqueValueInfos",null),s=r.__decorate([d.subclass("esri.renderers.UniqueValueRenderer")],t)}(b.VisualVariablesMixin(v))}).apply(null,o))||(e.exports=n)},pYVR:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("Vx27"),r("Qwus")],void 0===(n=(function(e,t,r,o,n,i){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.portal=null,t}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},r.__decorate([n.property({type:String})],t.prototype,"name",void 0),r.__decorate([n.property({type:String})],t.prototype,"styleUrl",void 0),r.__decorate([n.property({type:String})],t.prototype,"styleName",void 0),r.__decorate([n.property({type:i})],t.prototype,"portal",void 0),o=r.__decorate([n.subclass("esri.symbols.support.StyleOrigin")],t)}(o)}).apply(null,o))||(e.exports=n)},wAtj:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("zOht"),r("+AWJ"),r("ycL1"),r("Vx27"),r("HqJa")],void 0===(n=(function(e,t,r,o,n,i,l){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.label=null,r.symbol=null,r.value=null,r}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})},t.prototype.getMeshHash=function(){var e=JSON.stringify(this.symbol&&this.symbol.toJSON());return this.value+"."+e},r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),r.__decorate([i.property({types:o.symbolTypesRenderer,json:{origins:{"web-scene":{types:o.symbolTypesRenderer3D,write:l.write}},write:l.write}})],t.prototype,"symbol",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"value",void 0),n=r.__decorate([i.subclass("esri.renderers.support.UniqueValueInfo")],t)}(n.JSONSupport)}).apply(null,o))||(e.exports=n)}}]);