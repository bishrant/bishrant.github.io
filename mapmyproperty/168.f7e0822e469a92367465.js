(function(){var e={"esri/renderers/DictionaryRenderer":"Vtuk"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{Vtuk:function(e,t,r){var i,s;i=[r.dj.c(e.i),t,r("zOht"),r("QDcU"),r("zp6E"),r("ma1f"),r("rg9i"),r("qsST"),r("W6K4"),r("LxLY"),r("qMld"),r("ULaq"),r("nRUF"),r("Vx27"),r("k7g7"),r("mLnd"),r("SIX4"),r("sCbS"),r("8qPB")],void 0===(s=(function(e,t,r,i,s,n,o,a,l,u,c,p,h,f,d,y,g,m,_){"use strict";var b=a.getLogger("esri.renderers.DictionaryRenderer");return function(e){function t(t){var r=e.call(this,t)||this;return r._ongoingRequests=new Map,r._symbolCache=new l(100),r.config=null,r.fieldMap=null,r.scaleExpression=null,r.scaleExpressionTitle=null,r.url=null,r.type="dictionary",r}var a;return r.__extends(t,e),a=t,t.prototype.writeData=function(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})},t.prototype.writeVisualVariables=function(t,r,i,s){(null==s?void 0:s.origin)||e.prototype.writeVisualVariables.call(this,t,r,i,s)},t.prototype.clone=function(){return new a({config:o.clone(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:o.clone(this.fieldMap),url:o.clone(this.url),visualVariables:o.clone(this.visualVariables)})},t.prototype.getSymbolAsync=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var s,n,o,a,l,u,p,f,d,y,g,m,_,b,v,w,x,S,M,R,E,P,V,j,q,T=this;return r.__generator(this,(function(r){switch(r.label){case 0:this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t)),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._dictionaryPromise];case 2:return s=r.sent(),[3,4];case 3:return n=r.sent(),c.isAbortError(n)?(this._dictionaryPromise=null,[2,null]):[3,4];case 4:if(o={},this.fieldMap)for(a=0,l=this._symbolFields;a<l.length;a++)o[u]=(p=this.fieldMap[u=l[a]])&&null!=e.attributes[p]?""+e.attributes[p]:"";if(!(f=s(o,t))||"string"!=typeof f)return[2,null];if(d=h.numericHash(f).toString(),y=this._symbolCache.get(d))return y.catch((function(){T._symbolCache.pop(d)})),[2,y];for(g=f.split(";"),m=[],_=[],b=0,v=g;b<v.length;b++)if((w=v[b])&&0!==w.length)if(-1===w.indexOf("po:"))if(-1!==w.indexOf("|"))for(P=0,V=w.split("|");P<V.length;P++)this._itemNames.has(j=V[P])&&m.push(j);else this._itemNames.has(w)&&m.push(w);else 3===(x=w.substr(3).split("|")).length&&(S=x[0],R=x[2],"DashTemplate"===(M=x[1])?R=R.split(" ").map((function(e){return Number(e)})):"Color"===M?(E=new i(R).toRgba(),R=[E[0],E[1],E[2],255*E[3]]):R=Number(R),_.push({primitiveName:S,propertyName:M,value:R}));return q=this._cimPartsToCIMSymbol(m,_,t),this._symbolCache.put(d,q,1),[2,q]}}))}))},t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,s;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:return r.sent(),this.scaleExpression?[4,d.collectArcadeFieldNames(e,t,this.scaleExpression)]:[3,3];case 2:r.sent(),r.label=3;case 3:for(s in i=t.map((function(e){return e.name})),this.fieldMap)i.indexOf(this.fieldMap[s])<0||e.add(this.fieldMap[s]);return[2]}}))}))},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.fetchResources=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i,o,a,l,h,f,d,y,g,_,v,w,x,S;return r.__generator(this,(function(M){switch(M.label){case 0:return this._dictionaryPromise?[2,this._dictionaryPromise]:this.url?(t=u.isSome(e)?e.abortOptions:null,i=s(this.url+"/resources/styles/dictionary-info.json",r.__assign({responseType:"json",query:{f:"json"}},t)),[4,c.all([i,m.loadArcade()])]):(b.error("no valid URL!"),[2,void 0]);case 1:if(!(o=M.sent()[0].data))throw this._dictionaryPromise=null,new n("esri.renderers.DictionaryRenderer","Bad dictionary data!");if(a=o.expression,l=o.authoringInfo,this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=p.SetFromValues(o.itemsNames),this._symbolFields=l.symbol,h={},this.config)for(S in f=this.config)h[S]=f[S];for(d=0,y=l.configuration;d<y.length;d++)h.hasOwnProperty((S=y[d]).name)||(h[S.name]=S.value);if(g=[],u.isSome(e)&&e.fields&&this.fieldMap)for(_=function(t){var i=v.fieldMap[t],s=e.fields.filter((function(e){return e.name===i}));s.length>0&&g.push(r.__assign(r.__assign({},s[0]),{name:t}))},v=this,w=0,x=this._symbolFields;w<x.length;w++)_(S=x[w]);return this._dictionaryPromise=m.createDictionaryExpression(a,u.isSome(e)?e.spatialReference:null,g,h).then((function(e){var t={scale:0};return function(r,i){var s=e.repurposeFeature({geometry:null,attributes:r});return t.scale=u.isSome(i)?i.scale:void 0,e.evaluate({$feature:s,$view:t})}})).catch((function(e){return b.error("Creating dictinoary expression failed:",e),null})),[2,this._dictionaryPromise]}}))}))},t.prototype.getSymbol=function(){return null},t.prototype.getSymbols=function(){return[]},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return this.url+"-"+JSON.stringify(this.fieldMap)},t.prototype.getSymbolFields=function(){return this._symbolFields},t.prototype._getSymbolPart=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,n,o;return r.__generator(this,(function(a){switch(a.label){case 0:if(this._ongoingRequests.has(e))return[2,this._ongoingRequests.get(e).then((function(e){return e.data}))];i=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),n=s(i,r.__assign({responseType:"json",query:{f:"json"}},t)),this._ongoingRequests.set(e,n),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,n];case 2:return[2,a.sent().data];case 3:return o=a.sent(),this._ongoingRequests.delete(e),[2,c.reject(o)];case 4:return[2]}}))}))},t.prototype._combineSymbolParts=function(e,t){var i;if(!e||0===e.length)return null;if(1===e.length)return{type:"CIMSymbolReference",symbol:e[0],primitiveOverrides:t};var s=r.__assign({},e[0]);s.symbolLayers=[];for(var n=0,o=e;n<o.length;n++)(i=s.symbolLayers).unshift.apply(i,o[n].symbolLayers);return{type:"CIMSymbolReference",symbol:s,primitiveOverrides:t}},t.prototype._cimPartsToCIMSymbol=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var s,n,o;return r.__generator(this,(function(r){switch(r.label){case 0:for(s=new Array(e.length),n=0;n<e.length;n++)s[n]=this._getSymbolPart(e[n],i);return[4,c.all(s)];case 1:return o=r.sent(),[2,new _({data:this._combineSymbolParts(o,t)})]}}))}))},r.__decorate([f.property({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],t.prototype,"config",void 0),r.__decorate([f.property({type:Object,json:{write:!0}})],t.prototype,"fieldMap",void 0),r.__decorate([f.property({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],t.prototype,"scaleExpression",void 0),r.__decorate([f.writer("scaleExpression")],t.prototype,"writeData",null),r.__decorate([f.property({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy:function(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],t.prototype,"scaleExpressionTitle",void 0),r.__decorate([f.property({type:String,json:{write:!0}})],t.prototype,"url",void 0),r.__decorate([f.writer("visualVariables")],t.prototype,"writeVisualVariables",null),a=r.__decorate([f.subclass("esri.renderers.DictionaryRenderer")],t)}(g.VisualVariablesMixin(y))}).apply(null,i))||(e.exports=s)}}]);