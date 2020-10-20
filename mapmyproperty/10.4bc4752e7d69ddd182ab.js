(function(){var e={"esri/renderers/support/AttributeColorInfo":"EBAf","esri/renderers/DotDensityRenderer":"PHoo","esri/renderers/DictionaryRenderer":"Vtuk","esri/core/LRUCache":"W6K4","arcgis-js-api/core/LRUCache":"W6K4","esri/renderers/support/DotDensityLegendOptions":"WVTZ","esri/renderers/support/types":"capx","esri/renderers/HeatmapRenderer":"fU8o","arcgis-js-api/renderers/support/jsonUtils":"hz/Y","esri/renderers/support/jsonUtils":"hz/Y","esri/renderers/support/HeatmapColorStop":"kAOi","arcgis-js-api/renderers/SimpleRenderer":"osTG","esri/renderers/SimpleRenderer":"osTG"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[10,161],{EBAf:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("QDcU"),r("ycL1"),r("qsST"),r("Vx27"),r("1dvD")],void 0===(i=(function(e,t,r,o,i,n,s,a){"use strict";var l=n.getLogger("esri.renderers.support.AttributeColorInfo");return function(e){function t(t){var r=e.call(this,t)||this;return r.color=null,r.field=null,r.label=null,r.valueExpression=null,r.valueExpressionTitle=null,r}var i;return r.__extends(t,e),i=t,t.prototype.castField=function(e){return null==e?e:"function"==typeof e?(l.error(".field: field must be a string value"),null):a.ensureString(e)},t.prototype.getAttributeHash=function(){return this.field+"-"+this.valueExpression},t.prototype.clone=function(){return new i({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})},r.__decorate([s.property({type:o,json:{type:[Number],write:!0}})],t.prototype,"color",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),r.__decorate([s.cast("field")],t.prototype,"castField",null),r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"valueExpression",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),i=r.__decorate([s.subclass("esri.renderers.support.AttributeColorInfo")],t)}(i.JSONSupport)}).apply(null,o))||(e.exports=i)},PHoo:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("QDcU"),r("rg9i"),r("Vx27"),r("k7g7"),r("mLnd"),r("SIX4"),r("EBAf"),r("WVTZ"),r("x7Wq"),r("CF4u")],void 0===(i=(function(e,t,r,o,i,n,s,a,l,u,p,c,d){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.attributes=null,r.backgroundColor=new o([0,0,0,0]),r.blendDots=!0,r.dotBlendingEnabled=!0,r.dotShape="square",r.dotSize=1,r.legendOptions=null,r.outline=new d,r.dotValue=null,r.referenceDotValue=null,r.referenceScale=null,r.seed=1,r.type="dot-density",r}var a;return r.__extends(t,e),a=t,t.prototype.calculateDotValue=function(e){if(null==this.referenceScale)return this.dotValue;var t=e/this.referenceScale*this.dotValue;return t<1?1:t},t.prototype.getSymbol=function(){return new c({outline:this.outline})},t.prototype.getSymbolAsync=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,this.getSymbol()]}))}))},t.prototype.getSymbols=function(){return[this.getSymbol()]},t.prototype.getAttributeHash=function(){return this.attributes&&this.attributes.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return JSON.stringify(this.outline)},t.prototype.clone=function(){return new a({attributes:i.clone(this.attributes),backgroundColor:i.clone(this.backgroundColor),dotBlendingEnabled:i.clone(this.dotBlendingEnabled),dotShape:i.clone(this.dotShape),dotSize:i.clone(this.dotSize),dotValue:i.clone(this.dotValue),legendOptions:i.clone(this.legendOptions),outline:i.clone(this.outline),referenceScale:i.clone(this.referenceScale),visualVariables:i.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},t.prototype.getControllerHash=function(){return this.attributes.map((function(e){return e.field||e.valueExpression||""}))+"-"+(this.outline&&JSON.stringify(this.outline.toJSON())||"")},t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,i,n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:r.sent(),o=0,i=this.attributes,r.label=2;case 2:return o<i.length?(n=i[o]).valueExpression?[4,s.collectArcadeFieldNames(e,t,n.valueExpression)]:[3,4]:[3,6];case 3:r.sent(),r.label=4;case 4:n.field&&e.add(n.field),r.label=5;case 5:return o++,[3,2];case 6:return[2]}}))}))},r.__decorate([n.property({type:[u],json:{write:!0}})],t.prototype,"attributes",void 0),r.__decorate([n.property({type:o,json:{write:!0}})],t.prototype,"backgroundColor",void 0),r.__decorate([n.property({type:Boolean}),n.aliasOf("dotBlendingEnabled")],t.prototype,"blendDots",void 0),r.__decorate([n.property({type:Boolean,json:{write:!0}})],t.prototype,"dotBlendingEnabled",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"dotShape",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"dotSize",void 0),r.__decorate([n.property({type:p,json:{write:!0}})],t.prototype,"legendOptions",void 0),r.__decorate([n.property({type:d,json:{default:null,write:!0}})],t.prototype,"outline",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"dotValue",void 0),r.__decorate([n.property({type:Number}),n.aliasOf("dotValue")],t.prototype,"referenceDotValue",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"referenceScale",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"seed",void 0),r.__decorate([n.enumeration({dotDensity:"dot-density"})],t.prototype,"type",void 0),a=r.__decorate([n.subclass("esri.renderers.DotDensityRenderer")],t)}(l.VisualVariablesMixin(a))}).apply(null,o))||(e.exports=i)},Vtuk:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("QDcU"),r("zp6E"),r("ma1f"),r("rg9i"),r("qsST"),r("W6K4"),r("LxLY"),r("qMld"),r("ULaq"),r("nRUF"),r("Vx27"),r("k7g7"),r("mLnd"),r("SIX4"),r("sCbS"),r("8qPB")],void 0===(i=(function(e,t,r,o,i,n,s,a,l,u,p,c,d,y,f,h,_,b,g){"use strict";var m=a.getLogger("esri.renderers.DictionaryRenderer");return function(e){function t(t){var r=e.call(this,t)||this;return r._ongoingRequests=new Map,r._symbolCache=new l(100),r.config=null,r.fieldMap=null,r.scaleExpression=null,r.scaleExpressionTitle=null,r.url=null,r.type="dictionary",r}var a;return r.__extends(t,e),a=t,t.prototype.writeData=function(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})},t.prototype.writeVisualVariables=function(t,r,o,i){(null==i?void 0:i.origin)||e.prototype.writeVisualVariables.call(this,t,r,o,i)},t.prototype.clone=function(){return new a({config:s.clone(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:s.clone(this.fieldMap),url:s.clone(this.url),visualVariables:s.clone(this.visualVariables)})},t.prototype.getSymbolAsync=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,n,s,a,l,u,c,y,f,h,_,b,g,m,v,w,S,x,j,V,R,O,E,P,M,N=this;return r.__generator(this,(function(r){switch(r.label){case 0:this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t)),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._dictionaryPromise];case 2:return i=r.sent(),[3,4];case 3:return n=r.sent(),p.isAbortError(n)?(this._dictionaryPromise=null,[2,null]):[3,4];case 4:if(s={},this.fieldMap)for(a=0,l=this._symbolFields;a<l.length;a++)s[u]=(c=this.fieldMap[u=l[a]])&&null!=e.attributes[c]?""+e.attributes[c]:"";if(!(y=i(s,t))||"string"!=typeof y)return[2,null];if(f=d.numericHash(y).toString(),h=this._symbolCache.get(f))return h.catch((function(){N._symbolCache.pop(f)})),[2,h];for(_=y.split(";"),b=[],g=[],m=0,v=_;m<v.length;m++)if((w=v[m])&&0!==w.length)if(-1===w.indexOf("po:"))if(-1!==w.indexOf("|"))for(O=0,E=w.split("|");O<E.length;O++)this._itemNames.has(P=E[O])&&b.push(P);else this._itemNames.has(w)&&b.push(w);else 3===(S=w.substr(3).split("|")).length&&(x=S[0],V=S[2],"DashTemplate"===(j=S[1])?V=V.split(" ").map((function(e){return Number(e)})):"Color"===j?(R=new o(V).toRgba(),V=[R[0],R[1],R[2],255*R[3]]):V=Number(V),g.push({primitiveName:x,propertyName:j,value:V}));return M=this._cimPartsToCIMSymbol(b,g,t),this._symbolCache.put(f,M,1),[2,M]}}))}))},t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,i;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:return r.sent(),this.scaleExpression?[4,f.collectArcadeFieldNames(e,t,this.scaleExpression)]:[3,3];case 2:r.sent(),r.label=3;case 3:for(i in o=t.map((function(e){return e.name})),this.fieldMap)o.indexOf(this.fieldMap[i])<0||e.add(this.fieldMap[i]);return[2]}}))}))},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.fetchResources=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,o,s,a,l,d,y,f,h,_,g,v,w,S,x;return r.__generator(this,(function(j){switch(j.label){case 0:return this._dictionaryPromise?[2,this._dictionaryPromise]:this.url?(t=u.isSome(e)?e.abortOptions:null,o=i(this.url+"/resources/styles/dictionary-info.json",r.__assign({responseType:"json",query:{f:"json"}},t)),[4,p.all([o,b.loadArcade()])]):(m.error("no valid URL!"),[2,void 0]);case 1:if(!(s=j.sent()[0].data))throw this._dictionaryPromise=null,new n("esri.renderers.DictionaryRenderer","Bad dictionary data!");if(a=s.expression,l=s.authoringInfo,this._refSymbolUrlTemplate=this.url+"/"+s.cimRefTemplateUrl,this._itemNames=c.SetFromValues(s.itemsNames),this._symbolFields=l.symbol,d={},this.config)for(x in y=this.config)d[x]=y[x];for(f=0,h=l.configuration;f<h.length;f++)d.hasOwnProperty((x=h[f]).name)||(d[x.name]=x.value);if(_=[],u.isSome(e)&&e.fields&&this.fieldMap)for(g=function(t){var o=v.fieldMap[t],i=e.fields.filter((function(e){return e.name===o}));i.length>0&&_.push(r.__assign(r.__assign({},i[0]),{name:t}))},v=this,w=0,S=this._symbolFields;w<S.length;w++)g(x=S[w]);return this._dictionaryPromise=b.createDictionaryExpression(a,u.isSome(e)?e.spatialReference:null,_,d).then((function(e){var t={scale:0};return function(r,o){var i=e.repurposeFeature({geometry:null,attributes:r});return t.scale=u.isSome(o)?o.scale:void 0,e.evaluate({$feature:i,$view:t})}})).catch((function(e){return m.error("Creating dictinoary expression failed:",e),null})),[2,this._dictionaryPromise]}}))}))},t.prototype.getSymbol=function(){return null},t.prototype.getSymbols=function(){return[]},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return this.url+"-"+JSON.stringify(this.fieldMap)},t.prototype.getSymbolFields=function(){return this._symbolFields},t.prototype._getSymbolPart=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o,n,s;return r.__generator(this,(function(a){switch(a.label){case 0:if(this._ongoingRequests.has(e))return[2,this._ongoingRequests.get(e).then((function(e){return e.data}))];o=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),n=i(o,r.__assign({responseType:"json",query:{f:"json"}},t)),this._ongoingRequests.set(e,n),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,n];case 2:return[2,a.sent().data];case 3:return s=a.sent(),this._ongoingRequests.delete(e),[2,p.reject(s)];case 4:return[2]}}))}))},t.prototype._combineSymbolParts=function(e,t){var o;if(!e||0===e.length)return null;if(1===e.length)return{type:"CIMSymbolReference",symbol:e[0],primitiveOverrides:t};var i=r.__assign({},e[0]);i.symbolLayers=[];for(var n=0,s=e;n<s.length;n++)(o=i.symbolLayers).unshift.apply(o,s[n].symbolLayers);return{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}},t.prototype._cimPartsToCIMSymbol=function(e,t,o){return r.__awaiter(this,void 0,void 0,(function(){var i,n,s;return r.__generator(this,(function(r){switch(r.label){case 0:for(i=new Array(e.length),n=0;n<e.length;n++)i[n]=this._getSymbolPart(e[n],o);return[4,p.all(i)];case 1:return s=r.sent(),[2,new g({data:this._combineSymbolParts(s,t)})]}}))}))},r.__decorate([y.property({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],t.prototype,"config",void 0),r.__decorate([y.property({type:Object,json:{write:!0}})],t.prototype,"fieldMap",void 0),r.__decorate([y.property({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],t.prototype,"scaleExpression",void 0),r.__decorate([y.writer("scaleExpression")],t.prototype,"writeData",null),r.__decorate([y.property({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy:function(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],t.prototype,"scaleExpressionTitle",void 0),r.__decorate([y.property({type:String,json:{write:!0}})],t.prototype,"url",void 0),r.__decorate([y.writer("visualVariables")],t.prototype,"writeVisualVariables",null),a=r.__decorate([y.subclass("esri.renderers.DictionaryRenderer")],t)}(_.VisualVariablesMixin(h))}).apply(null,o))||(e.exports=i)},W6K4:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("r7jh")],void 0===(i=(function(e,t,r){"use strict";return function(){function e(e,t){this._storage=new r.MemCacheStorage,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}return e.prototype.put=function(e,t,r){this._storage.put(e,t,r,1)},e.prototype.pop=function(e){return this._storage.pop(e)},e.prototype.get=function(e){return this._storage.get(e)},e.prototype.clear=function(){this._storage.clearAll()},e.prototype.destroy=function(){this._storage.clearAll()},Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._storage.maxSize},set:function(e){this._storage.maxSize=e},enumerable:!1,configurable:!0}),e}()}).apply(null,o))||(e.exports=i)},WVTZ:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(i=(function(e,t,r,o,i){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.unit=null,t}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({unit:this.unit})},r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"unit",void 0),o=r.__decorate([i.subclass("esri.renderers.support.DotDensityLegendOptions")],t)}(o.JSONSupport)}).apply(null,o))||(e.exports=i)},capx:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("Z/W+"),r("Vtuk"),r("PHoo"),r("fU8o"),r("mLnd"),r("osTG"),r("nHUP")],void 0===(i=(function(e,t,r,o,i,n,s,a,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.webSceneRendererTypes=t.rendererTypes=void 0,t.rendererTypes={key:"type",base:s,typeMap:{heatmap:n,simple:a,"unique-value":l,"class-breaks":r,"dot-density":i,dictionary:o},errorContext:"renderer"},t.webSceneRendererTypes={key:"type",base:s,typeMap:{simple:a,"unique-value":l,"class-breaks":r},errorContext:"renderer"}}).apply(null,o))||(e.exports=i)},fU8o:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("QDcU"),r("rg9i"),r("Vx27"),r("k7g7"),r("mLnd"),r("kAOi")],void 0===(i=(function(e,t,r,o,i,n,s,a,l){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.blurRadius=10,r.colorStops=[new l({ratio:0,color:new o("rgba(255, 140, 0, 0)")}),new l({ratio:.75,color:new o("rgba(255, 140, 0, 1)")}),new l({ratio:.9,color:new o("rgba(255, 0,   0, 1)")})],r.field=null,r.fieldOffset=0,r.maxPixelIntensity=100,r.minPixelIntensity=0,r.type="heatmap",r}var a;return r.__extends(t,e),a=t,t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o;return r.__generator(this,(function(r){return(o=this.field)&&"string"==typeof o&&s.collectField(e,t,o),[2]}))}))},t.prototype.getAttributeHash=function(){return null},t.prototype.getMeshHash=function(){return JSON.stringify(this.colorStops)+"."+this.blurRadius+"."+this.field},t.prototype.clone=function(){return new a({blurRadius:this.blurRadius,colorStops:i.clone(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})},r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"blurRadius",void 0),r.__decorate([n.property({type:[l],json:{write:!0}})],t.prototype,"colorStops",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),r.__decorate([n.property({type:Number,json:{write:{overridePolicy:function(e,t,r){return{enabled:null==r}}}}})],t.prototype,"fieldOffset",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"maxPixelIntensity",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"minPixelIntensity",void 0),r.__decorate([n.enumeration({heatmap:"heatmap"})],t.prototype,"type",void 0),a=r.__decorate([n.subclass("esri.renderers.HeatmapRenderer")],t)}(a)}).apply(null,o))||(e.exports=i)},"hz/Y":function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("pcDC"),r("ma1f"),r("TTKK"),r("V2ZO"),r("dHMY"),r("capx")],void 0===(i=(function(e,t,r,o,i,n,s,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.read=t.fromJSON=t.write=void 0,t.write=function(e,t,n,s){var a=function(e,t){return e?function(e,t){if(!t||"web-scene"!==t.origin)return!0;switch(e.type){case"simple":case"unique-value":case"class-breaks":return!0;case"heatmap":case"dictionary":case"dot-density":return!1;default:return r.neverReached(e),!1}}(e,t)?e.write({},t):(t.messages&&t.messages.push(new o("renderer:unsupported","Renderer of type '"+e.declaredClass+"' are not supported in scenes.",{renderer:e,context:t})),null):null}(e,s);a&&i.setDeepValue(n,a,t)},t.fromJSON=function(e,t){return u(e,null,t)};var l=s.createTypeReader({types:a.rendererTypes});function u(e,t,r){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(r&&r.messages&&r.messages.push(new n("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null):l(e,t,r):null}t.read=u}).apply(null,o))||(e.exports=i)},kAOi:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("QDcU"),r("ycL1"),r("Vx27")],void 0===(i=(function(e,t,r,o,i,n){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.color=null,r.ratio=null,r}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({color:this.color,ratio:this.ratio})},r.__decorate([n.property({type:o,json:{write:!0}})],t.prototype,"color",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"ratio",void 0),i=r.__decorate([n.subclass("esri.renderers.support.HeatmapColorStop")],t)}(i.JSONSupport)}).apply(null,o))||(e.exports=i)},osTG:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r("zOht"),r("rg9i"),r("qMld"),r("Vx27"),r("mLnd"),r("SIX4"),r("hE6y")],void 0===(i=(function(e,t,r,o,i,n,s,a,l){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.label=null,r.symbol=null,r.type="simple",r}var s;return r.__extends(t,e),s=t,t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,i.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])];case 1:return r.sent(),[2]}}))}))},t.prototype.collectSymbolFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,i.all(this.getSymbols().map((function(r){return r.collectRequiredFields(e,t)})))];case 1:return r.sent(),[2]}}))}))},t.prototype.getSymbol=function(e,t){return this.symbol},t.prototype.getSymbolAsync=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,this.symbol]}))}))},t.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return this.getSymbols().reduce((function(e,t){return e+JSON.stringify(t)}),"")},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return this.arcadeRequiredForVisualVariables},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new s({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:o.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),r.__decorate([n.property(l.rendererSymbolProperty)],t.prototype,"symbol",void 0),r.__decorate([n.enumeration({simple:"simple"})],t.prototype,"type",void 0),s=r.__decorate([n.subclass("esri.renderers.SimpleRenderer")],t)}(a.VisualVariablesMixin(s))}).apply(null,o))||(e.exports=i)}}]);