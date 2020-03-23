(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/renderers/support/AttributeColorInfo":"EBAf","esri/renderers/DotDensityRenderer":"PHoo","arcgis-js-api/renderers/DotDensityRenderer":"PHoo","esri/renderers/DictionaryRenderer":"Vtuk","arcgis-js-api/renderers/DictionaryRenderer":"Vtuk","arcgis-js-api/core/LRUCache":"W6K4","arcgis-js-api/renderers/support/DotDensityLegendOptions":"WVTZ","esri/renderers/HeatmapRenderer":"fU8o","arcgis-js-api/renderers/HeatmapRenderer":"fU8o","esri/renderers/support/jsonUtils":"hz/Y","arcgis-js-api/renderers/support/jsonUtils":"hz/Y","arcgis-js-api/renderers/support/HeatmapColorStop":"kAOi","arcgis-js-api/renderers/SimpleRenderer":"osTG","arcgis-js-api/core/MemCache":"r7jh","esri/core/MemCache":"r7jh"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{EBAf:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("QDcU"),r("ycL1"),r("qsST"),r("Vx27"),r("1dvD")],void 0===(o=(function(e,t,r,i,o,n,s,a,u){var l=s.getLogger("esri.renderers.support.AttributeColorInfo");return function(e){function t(t){var r=e.call(this,t)||this;return r.color=null,r.field=null,r.label=null,r.valueExpression=null,r.valueExpressionTitle=null,r}var n;return r(t,e),n=t,t.prototype.castField=function(e){return null==e?e:"function"==typeof e?(l.error(".field: field must be a string value"),null):u.ensureString(e)},t.prototype.getAttributeHash=function(){return this.field+"-"+this.valueExpression},t.prototype.clone=function(){return new n({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})},i([a.property({type:o,json:{type:[Number],write:!0}})],t.prototype,"color",void 0),i([a.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),i([a.cast("field")],t.prototype,"castField",null),i([a.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),i([a.property({type:String,json:{write:!0}})],t.prototype,"valueExpression",void 0),i([a.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),n=i([a.subclass("esri.renderers.support.AttributeColorInfo")],t)}(a.declared(n.JSONSupport))}).apply(null,i))||(e.exports=o)},PHoo:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("2Atf"),r("Q2wQ"),r("HZ3d"),r("QDcU"),r("rg9i"),r("Vx27"),r("k7g7"),r("mLnd"),r("SIX4"),r("EBAf"),r("WVTZ"),r("x7Wq"),r("CF4u")],void 0===(o=(function(e,t,r,i,o,n,s,a,u,l,p,c,d,h,y,f,m){return function(e){function t(t){var r=e.call(this,t)||this;return r.attributes=null,r.backgroundColor=new a([0,0,0,0]),r.blendDots=!0,r.dotBlendingEnabled=!0,r.dotShape="square",r.dotSize=1,r.legendOptions=null,r.outline=new m,r.dotValue=null,r.referenceDotValue=null,r.referenceScale=null,r.seed=1,r.type="dot-density",r}var o;return r(t,e),o=t,t.prototype.calculateDotValue=function(e){if(null==this.referenceScale)return this.dotValue;var t=e/this.referenceScale*this.dotValue;return t<1?1:t},t.prototype.getSymbol=function(){return new f({outline:this.outline})},t.prototype.getSymbolAsync=function(){return s(this,void 0,void 0,(function(){return n(this,(function(e){return[2,this.getSymbol()]}))}))},t.prototype.getSymbols=function(){return[this.getSymbol()]},t.prototype.getAttributeHash=function(){return this.attributes&&this.attributes.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return JSON.stringify(this.outline)},t.prototype.clone=function(){return new o({attributes:u.clone(this.attributes),backgroundColor:u.clone(this.backgroundColor),dotBlendingEnabled:u.clone(this.dotBlendingEnabled),dotShape:u.clone(this.dotShape),dotSize:u.clone(this.dotSize),dotValue:u.clone(this.dotValue),legendOptions:u.clone(this.legendOptions),outline:u.clone(this.outline),referenceScale:u.clone(this.referenceScale),visualVariables:u.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},t.prototype.getControllerHash=function(){return this.attributes.map((function(e){return e.field||e.valueExpression||""}))+"-"+(this.outline&&JSON.stringify(this.outline.toJSON())||"")},t.prototype.collectRequiredFields=function(e,t){return s(this,void 0,void 0,(function(){var r,i,o;return n(this,(function(n){switch(n.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:n.sent(),r=0,i=this.attributes,n.label=2;case 2:return r<i.length?(o=i[r]).valueExpression?[4,p.collectArcadeFieldNames(e,t,o.valueExpression)]:[3,4]:[3,6];case 3:n.sent(),n.label=4;case 4:o.field&&e.add(o.field),n.label=5;case 5:return r++,[3,2];case 6:return[2]}}))}))},i([l.property({type:[h],json:{write:!0}})],t.prototype,"attributes",void 0),i([l.property({type:a,json:{write:!0}})],t.prototype,"backgroundColor",void 0),i([l.property({type:Boolean}),l.aliasOf("dotBlendingEnabled")],t.prototype,"blendDots",void 0),i([l.property({type:Boolean,json:{write:!0}})],t.prototype,"dotBlendingEnabled",void 0),i([l.property({type:String,json:{write:!0}})],t.prototype,"dotShape",void 0),i([l.property({type:Number,json:{write:!0}})],t.prototype,"dotSize",void 0),i([l.property({type:y,json:{write:!0}})],t.prototype,"legendOptions",void 0),i([l.property({type:m,json:{default:null,write:!0}})],t.prototype,"outline",void 0),i([l.property({type:Number,json:{write:!0}})],t.prototype,"dotValue",void 0),i([l.property({type:Number}),l.aliasOf("dotValue")],t.prototype,"referenceDotValue",void 0),i([l.property({type:Number,json:{write:!0}})],t.prototype,"referenceScale",void 0),i([l.property({type:Number,json:{write:!0}})],t.prototype,"seed",void 0),i([l.enumeration.serializable()({dotDensity:"dot-density"})],t.prototype,"type",void 0),o=i([l.subclass("esri.renderers.DotDensityRenderer")],t)}(l.declared(d.VisualVariablesMixin(c)))}).apply(null,i))||(e.exports=o)},Vtuk:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("2Atf"),r("Q2wQ"),r("HZ3d"),r("QDcU"),r("zp6E"),r("ma1f"),r("9sIV"),r("rg9i"),r("qsST"),r("W6K4"),r("LxLY"),r("qMld"),r("Vx27"),r("k7g7"),r("mLnd"),r("SIX4"),r("sCbS"),r("8qPB")],void 0===(o=(function(e,t,r,i,o,n,s,a,u,l,p,c,d,h,y,f,m,b,g,v,_,S){var w=d.getLogger("esri.renderers.DictionaryRenderer");return function(e){function t(t){var r=e.call(this,t)||this;return r._ongoingRequests=new Map,r._symbolCache=new h(100),r.config=null,r.description=null,r.fieldMap=null,r.label=null,r.scaleExpression=null,r.url=null,r.type="dictionary",r}var d;return r(t,e),d=t,t.prototype.clone=function(){return new d({config:c.clone(this.config),scaleExpression:c.clone(this.scaleExpression),description:c.clone(this.description),fieldMap:c.clone(this.fieldMap),label:c.clone(this.label),url:c.clone(this.url),visualVariables:c.clone(this.visualVariables)})},t.prototype.collectRequiredFields=function(e,t){return s(this,void 0,void 0,(function(){var r,i;return n(this,(function(o){switch(o.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:return o.sent(),this.scaleExpression?[4,b.collectArcadeFieldNames(e,t,this.scaleExpression)]:[3,3];case 2:o.sent(),o.label=3;case 3:for(i in r=t.map((function(e){return e.name})),this.fieldMap)r.indexOf(this.fieldMap[i])<0||e.add(this.fieldMap[i]);return[2]}}))}))},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return!0},enumerable:!0,configurable:!0}),t.prototype.fetchResources=function(e){return s(this,void 0,void 0,(function(){var t,r,i,s,a,c,d,h,m,b,g,v,S,j,R,x,z;return n(this,(function(n){switch(n.label){case 0:return this.url?(t=y.isSome(e)?e.abortOptions:null,r=u(this.url+"/resources/styles/dictionary-info.json",o({responseType:"json",query:{f:"json"}},t)),[4,f.all([r,_.loadArcade()])]):(w.error("no valid URL!"),[2,void 0]);case 1:if(!(i=n.sent()[0].data))throw new l("esri.renderers.DictionaryRenderer","Bad dictionary data!");if(s=i.expression,a=i.authoringInfo,this._refSymbolUrlTemplate=this.url+"/"+i.cimRefTemplateUrl,this._itemNames=p.createSetFromValues(i.itemsNames),this._symbolAttributes=a.symbol,c={},this.config)for(R in d=this.config)c[R]=d[R];for(h=0,m=a.configuration;h<m.length;h++)c.hasOwnProperty((R=m[h]).name)||(c[R.name]=R.value);if(b=[],y.isSome(e)&&e.fields)for(g=function(t){var r=v.fieldMap[t],i=e.fields.filter((function(e){return e.name===r}));i.length>0&&b.push(o({},i[0],{name:t}))},v=this,S=0,j=this._symbolAttributes;S<j.length;S++)g(R=j[S]);return[4,_.createDictionaryExpression(s,y.isSome(e)?e.spatialReference:null,b,c)];case 2:return x=n.sent(),z={scale:0},[2,function(e,t){var r=x.repurposeFeature({geometry:null,attributes:e});return z.scale=y.isSome(t)?t.scale:void 0,x.evaluate({$feature:r,$view:z})}]}}))}))},t.prototype.getSymbol=function(){return null},t.prototype.getSymbolAsync=function(e,t){return s(this,void 0,void 0,(function(){var r,i,o,s,u,l,p,c,d,h,y,f,m,b,g,v,_,S,w,j,R,x,z,V;return n(this,(function(n){switch(n.label){case 0:return this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t)),[4,this._dictionaryPromise];case 1:for(r=n.sent(),i={},o=0,s=this._symbolAttributes;o<s.length;o++)i[u]=(l=this.fieldMap[u=s[o]])&&null!=e.attributes[l]?""+e.attributes[l]:"";if(!(p=r(i,t))||"string"!=typeof p)return[2,null];for(c=p.split(";"),d=[],h=[],y=0,f=c;y<f.length;y++)if((m=f[y])&&0!==m.length)if(-1===m.indexOf("po:"))if(-1!==m.indexOf("|"))for(w=0,j=m.split("|");w<j.length;w++)this._itemNames.has(R=j[w])&&d.push(R);else this._itemNames.has(m)&&d.push(m);else 3===(b=m.substr(3).split("|")).length&&(g=b[0],_=b[2],"DashTemplate"===(v=b[1])?_=_.split(" ").map((function(e){return Number(e)})):"Color"===v?(S=new a(_).toRgba(),_=[S[0],S[1],S[2],255*S[3]]):_=Number(_),h.push({primitiveName:g,propertyName:v,value:_}));return x=d.join(";")+h.map((function(e){return e.primitiveName+";"+e.propertyName+";"+e.value})),(z=this._symbolCache.get(x))?[2,z]:(V=this._cimPartsToCIMSymbol(d,h,t),this._symbolCache.put(x,V,1),[2,V])}}))}))},t.prototype.getSymbols=function(){return[]},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return this.url+"-"+JSON.stringify(this.fieldMap)},t.prototype._getSymbolPart=function(e,t){return s(this,void 0,void 0,(function(){var r,i;return n(this,(function(n){switch(n.label){case 0:return this._ongoingRequests.has(e)?[2,this._ongoingRequests.get(e).then((function(e){return e.data}))]:(r=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),i=u(r,o({responseType:"json",query:{f:"json"}},t)),this._ongoingRequests.set(e,i),[4,i]);case 1:return[2,n.sent().data]}}))}))},t.prototype._combineSymbolParts=function(e,t){var r;if(!e||0===e.length)return null;if(1===e.length)return{type:"CIMSymbolReference",symbol:e[0],primitiveOverrides:t};var i=o({},e[0]);i.symbolLayers=[];for(var n=0,s=e;n<s.length;n++)(r=i.symbolLayers).unshift.apply(r,s[n].symbolLayers);return{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}},t.prototype._cimPartsToCIMSymbol=function(e,t,r){return s(this,void 0,void 0,(function(){var i,o,s;return n(this,(function(n){switch(n.label){case 0:for(i=new Array(e.length),o=0;o<e.length;o++)i[o]=this._getSymbolPart(e[o],r);return[4,f.eachAlwaysValues(i)];case 1:return s=n.sent(),[2,new S({data:this._combineSymbolParts(s,t)})]}}))}))},i([m.property({type:Object,json:{write:!0}})],t.prototype,"config",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),i([m.property({type:Object,json:{write:!0}})],t.prototype,"fieldMap",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"scaleExpression",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"url",void 0),d=i([m.subclass("esri.renderers.DictionaryRenderer")],t)}(m.declared(v.VisualVariablesMixin(g)))}).apply(null,i))||(e.exports=o)},W6K4:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("r7jh")],void 0===(o=(function(e,t,r){return function(){function e(e,t){this._storage=new r.MemCacheStorage,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}return e.prototype.put=function(e,t,r){this._storage.put(e,t,r,1)},e.prototype.pop=function(e){return this._storage.pop(e)},e.prototype.get=function(e){return this._storage.get(e)},e.prototype.clear=function(){this._storage.clearAll()},e.prototype.destroy=function(){this._storage.clearAll()},Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._storage.maxSize},set:function(e){this._storage.maxSize=e},enumerable:!0,configurable:!0}),e}()}).apply(null,i))||(e.exports=o)},WVTZ:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("ycL1"),r("Vx27")],void 0===(o=(function(e,t,r,i,o,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.unit=null,t}var o;return i(t,e),o=t,t.prototype.clone=function(){return new o({unit:this.unit})},r([n.property({type:String,json:{write:!0}})],t.prototype,"unit",void 0),o=r([n.subclass("esri.renderers.support.DotDensityLegendOptions")],t)}(n.declared(o.JSONSupport))}).apply(null,i))||(e.exports=o)},fU8o:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("QDcU"),r("rg9i"),r("Vx27"),r("k7g7"),r("mLnd"),r("kAOi")],void 0===(o=(function(e,t,r,i,o,n,s,a,u,l,p,c){return function(e){function t(t){var r=e.call(this,t)||this;return r.blurRadius=10,r.colorStops=[new c.HeatmapColorStop({ratio:0,color:new s("rgba(255, 140, 0, 0)")}),new c.HeatmapColorStop({ratio:.75,color:new s("rgba(255, 140, 0, 1)")}),new c.HeatmapColorStop({ratio:.9,color:new s("rgba(255, 0,   0, 1)")})],r.field=null,r.fieldOffset=0,r.maxPixelIntensity=100,r.minPixelIntensity=0,r.type="heatmap",r}var p;return r(t,e),p=t,t.prototype.collectRequiredFields=function(e,t){return n(this,void 0,void 0,(function(){var r;return o(this,(function(i){return(r=this.field)&&"string"==typeof r&&l.collectField(e,t,r),[2]}))}))},t.prototype.getAttributeHash=function(){return null},t.prototype.getMeshHash=function(){return JSON.stringify(this.colorStops)+"."+this.blurRadius},t.prototype.clone=function(){return new p({blurRadius:this.blurRadius,colorStops:a.clone(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})},i([u.property({type:Number,json:{write:!0}})],t.prototype,"blurRadius",void 0),i([u.property({type:[c.HeatmapColorStop],json:{write:!0}})],t.prototype,"colorStops",void 0),i([u.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),i([u.property({type:Number,json:{write:{overridePolicy:function(e,t,r){return{enabled:null==r}}}}})],t.prototype,"fieldOffset",void 0),i([u.property({type:Number,json:{write:!0}})],t.prototype,"maxPixelIntensity",void 0),i([u.property({type:Number,json:{write:!0}})],t.prototype,"minPixelIntensity",void 0),i([u.enumeration.serializable()({heatmap:"heatmap"})],t.prototype,"type",void 0),p=i([u.subclass("esri.renderers.HeatmapRenderer")],t)}(u.declared(p))}).apply(null,i))||(e.exports=o)},"hz/Y":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("pcDC"),r("ma1f"),r("TTKK"),r("V2ZO"),r("Z/W+"),r("Vtuk"),r("PHoo"),r("fU8o"),r("osTG"),r("nHUP")],void 0===(o=(function(e,t,r,i,o,n,s,a,u,l,p,c){function d(e,t,r){if(!e)return null;if(e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type)return r&&r.messages&&r.messages.push(new n("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null;var i=function(e){return e&&f[e.type]||null}(e);if(i){var o=new i;return o.read(e,r),o}return r&&r.messages&&e&&r.messages.push(new n("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null}function h(e,t){if(!t||"web-scene"!==t.origin)return!0;switch(e.type){case"simple":case"unique-value":case"class-breaks":return!0;case"heatmap":case"dictionary":case"dot-density":return!1;default:return r.neverReached(e),!1}}function y(e,t,r){return e?h(e,r)?e.write(t,r):(r.messages&&r.messages.push(new i("renderer:unsupported","Renderer of type '"+e.declaredClass+"' are not supported in scenes.",{renderer:e,context:r})),null):null}Object.defineProperty(t,"__esModule",{value:!0});var f={simple:p,uniqueValue:c,classBreaks:s,heatmap:l,dotDensity:u,dictionary:a};t.read=d,t.writeTarget=function(e,t,r,i){var n=y(e,{},i);n&&o.setDeepValue(r,n,t)},t.write=y,t.fromJSON=function(e,t){return d(e,0,t)}}).apply(null,i))||(e.exports=o)},kAOi:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("QDcU"),r("ycL1"),r("Vx27")],void 0===(o=(function(e,t,r,i,o,n,s){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){var r=e.call(this,t)||this;return r.color=null,r.ratio=null,r}var n;return r(t,e),n=t,t.prototype.clone=function(){return new n({color:this.color,ratio:this.ratio})},i([s.property({type:o,json:{write:!0}})],t.prototype,"color",void 0),i([s.property({type:Number,json:{write:!0}})],t.prototype,"ratio",void 0),n=i([s.subclass("esri.renderers.support.HeatmapColorStop")],t)}(s.declared(n.JSONSupport));t.HeatmapColorStop=a,t.default=a}).apply(null,i))||(e.exports=o)},osTG:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("+AWJ"),r("rg9i"),r("qMld"),r("Vx27"),r("mLnd"),r("SIX4"),r("HqJa")],void 0===(o=(function(e,t,r,i,o,n,s,a,u,l,p,c,d){return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.label=null,r.symbol=null,r.type="simple",r}var p;return r(t,e),p=t,t.prototype.writeSymbolWebScene=function(e,t,r,i){d.writeTarget(e,t,r,i)},t.prototype.writeSymbol=function(e,t,r,i){d.writeTarget(e,t,r,i)},t.prototype.readSymbol=function(e,t,r){return d.read(e,t,r)},t.prototype.collectRequiredFields=function(e,t){return n(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return[4,u.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])];case 1:return r.sent(),[2]}}))}))},t.prototype.collectSymbolFields=function(e,t){return n(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return[4,u.all(this.getSymbols().map((function(r){return r.collectRequiredFields(e,t)})))];case 1:return r.sent(),[2]}}))}))},t.prototype.getSymbol=function(e,t){return this.symbol},t.prototype.getSymbolAsync=function(e,t){return n(this,void 0,void 0,(function(){return o(this,(function(e){return[2,this.symbol]}))}))},t.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return this.getSymbols().reduce((function(e,t){return e+JSON.stringify(t)}),"")},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return this.arcadeRequiredForVisualVariables},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new p({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:a.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},i([l.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),i([l.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),i([l.property({types:s.symbolTypesRenderer})],t.prototype,"symbol",void 0),i([l.writer("web-scene","symbol",{symbol:{types:s.symbolTypesRenderer3D}})],t.prototype,"writeSymbolWebScene",null),i([l.writer("symbol")],t.prototype,"writeSymbol",null),i([l.reader("symbol")],t.prototype,"readSymbol",null),i([l.enumeration.serializable()({simple:"simple"})],t.prototype,"type",void 0),p=i([l.subclass("esri.renderers.SimpleRenderer")],t)}(l.declared(c.VisualVariablesMixin(p)))}).apply(null,i))||(e.exports=o)},r7jh:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("9sIV"),r("KBgh"),r("nRUF")],void 0===(o=(function(e,t,r,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.MIN_PRIORITY=-3;var n=function(){function e(e,t,r){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",r&&(this._storage.registerRemoveFunc(this._namespace,r),this._removeFunc=!0)}return Object.defineProperty(e.prototype,"namespace",{get:function(){return this._namespace.slice(0,-1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hitRate",{get:function(){return this._hit/(this._hit+this._miss)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._storage.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._storage.maxSize},enumerable:!0,configurable:!0}),e.prototype.resetHitRate=function(){this._hit=this._miss=0},e.prototype.destroy=function(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)},e.prototype.put=function(e,t,r,i){void 0===i&&(i=0),this._storage.put(this._namespace+e,t,r,i)},e.prototype.get=function(e){var t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t},e.prototype.pop=function(e){var t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t},e.prototype.updateSize=function(e,t,r){this._storage.updateSize(this._namespace+e,t,r)},e.prototype.clear=function(){this._storage.clear(this._namespace)},e.prototype.clearAll=function(){this._storage.clearAll()},e.prototype.getStats=function(){return this._storage.getStats()},e.prototype.resetStats=function(){this._storage.resetStats()},e}();t.MemCache=n;var s=function(){function e(e){void 0===e&&(e=10485760),this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new i}return e.prototype.register=function(e){this._users.push(e)},e.prototype.deregister=function(e){this._users.removeUnordered(e)},e.prototype.registerRemoveFunc=function(e,t){this._removeFuncs.push([e,t])},e.prototype.deregisterRemoveFunc=function(e){this._removeFuncs=this._removeFuncs.filter((function(t){return t[0]!==e}))},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._maxSize},set:function(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()},enumerable:!0,configurable:!0}),e.prototype.put=function(e,r,i,o){var n=this._db.get(e);if(n&&(this._size-=n.size,this._db.delete(e),n.entry!==r&&this._notifyRemoved(e,n.entry)),i>this._maxSize)this._notifyRemoved(e,r);else if(void 0!==r)if(!i||i<0)console.warn("Refusing to cache entry with invalid size "+i);else{var s=1+Math.max(o,t.MIN_PRIORITY)-t.MIN_PRIORITY;this._db.set(e,{entry:r,size:i,lifetime:s,lives:s}),this._size+=i,this._checkSizeLimit()}else console.warn("Refusing to cache undefined entry ")},e.prototype.updateSize=function(e,t,r){var i=this._db.get(e);if(i&&i.entry===t){if(this._size-=i.size,r>this._maxSize)return void this._notifyRemoved(e,t);i.size=r,this._size+=r,this._checkSizeLimit()}},e.prototype.pop=function(e){var t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss},e.prototype.get=function(e){var t=this._db.get(e);return void 0===t?void++this._miss:(this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry)},e.prototype.getStats=function(){var e=this,r={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},i={},n=new Array;this._db.forEach((function(t,r){var s=t.lifetime;n[s]=(n[s]||0)+t.size,e._users.forEach((function(e){var n=e.namespace;o.startsWith(r,n)&&(i[n]=(i[n]||0)+t.size)}))}));var s={};this._users.forEach((function(e){var t=e.namespace;!isNaN(e.hitRate)&&e.hitRate>0?(i[t]=i[t]||0,s[t]=Math.round(100*e.hitRate)+"%"):s[t]="0%"}));var a=Object.keys(i);a.forEach((function(t){return i[t]=i[t]/e._size*100})),a.sort((function(e,t){return i[t]-i[e]})),a.forEach((function(e){return r[e]=Math.round(i[e])+"% / "+s[e]}));for(var u=n.length-1;u>=0;--u){var l=n[u];l&&(r["Priority "+(u+t.MIN_PRIORITY-1)]=Math.round(l/this.size*100)+"%")}return r},e.prototype.resetStats=function(){this._hit=this._miss=0,this._users.forEach((function(e){return e.resetHitRate()}))},e.prototype.clear=function(e){var t=this;this._db.forEach((function(r,i){o.startsWith(i,e)&&(t._size-=r.size,t._db.delete(i),t._notifyRemoved(i,r.entry))}))},e.prototype.clearAll=function(){var e=this;this._db.forEach((function(t,r){e._notifyRemoved(r,t.entry)})),this._size=0,this._db.clear()},e.prototype._getHitRate=function(){return this._hit/(this._hit+this._miss)},e.prototype._notifyRemoved=function(e,t){this._removeFuncs.forEach((function(r){o.startsWith(e,r[0])&&r[1](t)}))},e.prototype._checkSizeLimit=function(){var e=this;this._size<=this._maxSize||r.someMap(this._db,(function(t,r){return e._db.delete(r),t.lives<=1?(e._size-=t.size,e._notifyRemoved(r,t.entry)):(--t.lives,e._db.set(r,t)),e._size<=.9*e.maxSize}))},e}();t.MemCacheStorage=s}).apply(null,i))||(e.exports=o)}}]);