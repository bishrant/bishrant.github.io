(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/layers/support/LabelClass":"5WBt","esri/layers/support/LabelClass":"5WBt","esri/layers/support/labelUtils":"L924","esri/views/2d/layers/features/batchUtils":"SCaX","esri/views/2d/layers/features/processors/SymbolProcessor":"dh9Z","esri/layers/support/LabelExpressionInfo":"nsnX","esri/layers/support/labelFormatUtils":"y/j/"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"5WBt":function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t("zOht"),t("+AWJ"),t("ImIS"),t("ycL1"),t("rg9i"),t("Vx27"),t("nsnX"),t("L924"),t("dXKx"),t("HqJa")],void 0===(o=(function(e,r,t,n,o,i,a,s,l,c,u,p){var d=new o.default({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function f(e){return!e||"service"!==e.origin&&!(e.layer&&"map-image"===e.layer.type)}return function(e){function r(r){var t=e.call(this,r)||this;return t.name=null,t.deconflictionStrategy="static",t.labelExpression=null,t.labelExpressionInfo=null,t.labelPlacement=null,t.maxScale=0,t.minScale=0,t.symbol=u.defaultTextSymbol2D,t.useCodedValues=void 0,t.where=null,t}var o;return t.__extends(r,e),o=r,r.evaluateWhere=function(e,r){var t=function(e,r,t){switch(r){case"=":return e==t;case"<>":return e!=t;case">":return e>t;case">=":return e>=t;case"<":return e<t;case"<=":return e<=t}return!1};try{if(null==e)return!0;var n=e.split(" ");if(3===n.length)return t(r[n[0]],n[1],n[2]);if(7===n.length){var o=t(r[n[0]],n[1],n[2]),i=n[3],a=t(r[n[4]],n[5],n[6]);switch(i){case"AND":return o&&a;case"OR":return o||a}}return!1}catch(r){console.log("Error.: can't parse = "+e)}},r.prototype.writeDeconflictionStrategy=function(e,r,t,n){"static"!==e&&(r[t]=e)},r.prototype.readLabelExpression=function(e,r){var t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e},r.prototype.writeLabelExpression=function(e,r,t,n){if(this.labelExpressionInfo&&(f(n)||n&&"service"===n.origin))if(null!=this.labelExpressionInfo.value)e=this.labelExpressionInfo.value.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]");else if(null!=this.labelExpressionInfo.expression){var o=c.getSingleFieldArcadeExpression(this.labelExpressionInfo.expression);o&&(e="["+o+"]")}null!=e&&(r[t]=e)},r.prototype.writeLabelExpressionInfo=function(e,r,t,n){if(null==e&&null!=this.labelExpression&&f(n))e=new l({expression:this.getLabelExpressionArcade()});else if(!e)return;var o=e.toJSON(n);o.expression&&(r[t]=o)},r.prototype.writeMaxScale=function(e,r){(e||this.minScale)&&(r.maxScale=e)},r.prototype.writeMinScale=function(e,r){(e||this.maxScale)&&(r.minScale=e)},r.prototype.getLabelExpression=function(){var e={expression:"",type:"none"};return this.labelExpressionInfo?this.labelExpressionInfo.value?(e.expression=this.labelExpressionInfo.value,e.type="conventional"):this.labelExpressionInfo.expression&&(e.expression=this.labelExpressionInfo.expression,e.type="arcade"):null!=this.labelExpression&&(e.expression=this.labelExpression.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}"),e.type="conventional"),e},r.prototype.getLabelExpressionArcade=function(){var e=this.getLabelExpression();if(!e)return null;switch(e.type){case"conventional":return c.convertTemplatedStringToArcade(e.expression);case"arcade":return e.expression}return null},r.prototype.getLabelExpressionSingleField=function(){var e=this.getLabelExpression();if(!e)return null;switch(e.type){case"conventional":return c.getSingleFieldTemplatedString(e.expression);case"arcade":return c.getSingleFieldArcadeExpression(e.expression)}return null},r.prototype.clone=function(){return new o({deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:a.clone(this.labelExpressionInfo),labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,symbol:a.clone(this.symbol),where:this.where,useCodedValues:this.useCodedValues})},t.__decorate([s.property({type:String,json:{write:!0}})],r.prototype,"name",void 0),t.__decorate([s.property({type:String})],r.prototype,"deconflictionStrategy",void 0),t.__decorate([s.writer("deconflictionStrategy")],r.prototype,"writeDeconflictionStrategy",null),t.__decorate([s.property({type:String,json:{write:{allowNull:!0}}})],r.prototype,"labelExpression",void 0),t.__decorate([s.reader("labelExpression")],r.prototype,"readLabelExpression",null),t.__decorate([s.writer("labelExpression")],r.prototype,"writeLabelExpression",null),t.__decorate([s.property({type:l,json:{write:{overridePolicy:function(e,r,t){return f(t)?{allowNull:!0}:{enabled:!1}}}}})],r.prototype,"labelExpressionInfo",void 0),t.__decorate([s.writer("labelExpressionInfo")],r.prototype,"writeLabelExpressionInfo",null),t.__decorate([s.property({type:d.apiValues,json:{type:d.jsonValues,read:d.read,write:d.write}})],r.prototype,"labelPlacement",void 0),t.__decorate([s.property({type:Number})],r.prototype,"maxScale",void 0),t.__decorate([s.writer("maxScale")],r.prototype,"writeMaxScale",null),t.__decorate([s.property({type:Number})],r.prototype,"minScale",void 0),t.__decorate([s.writer("minScale")],r.prototype,"writeMinScale",null),t.__decorate([s.property({types:n.symbolTypesLabel,json:{origins:{"web-scene":{types:n.symbolTypesLabel3D,read:p.read,write:p.writeTarget,default:null}},read:p.read,write:p.writeTarget,default:null}})],r.prototype,"symbol",void 0),t.__decorate([s.property({type:Boolean,json:{write:!0}})],r.prototype,"useCodedValues",void 0),t.__decorate([s.property({type:String,json:{write:!0}})],r.prototype,"where",void 0),o=t.__decorate([s.subclass("esri.layers.support.LabelClass")],r)}(i.JSONSupport)}).apply(null,n))||(e.exports=o)},L924:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t("nRUF")],void 0===(o=(function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=new RegExp("__begin__","ig"),o=new RegExp("__end__","ig"),i=new RegExp("^__begin__","i"),a=new RegExp("__end__$","i");r.convertTemplatedStringToArcade=function(e){var r;return e?(r=t.replace(e,(function(e){return'__begin__$feature["'+e+'"]__end__'})),r=i.test(r)?r.replace(i,""):'"'+r,r=(r=a.test(r)?r.replace(a,""):r+'"').replace(n,'" + ').replace(o,' + "')):r='""',r};var s=/^\s*\{([^}]+)\}\s*$/i;r.getSingleFieldTemplatedString=function(e){var r=e.match(s);return r&&r[1].trim()||null};var l=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,c=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,u=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;r.getSingleFieldArcadeExpression=function(e){if(!e)return null;var r=l.exec(e)||c.exec(e);return r?r[1]||r[3]:(r=u.exec(e))?r[2]:null}}).apply(null,n))||(e.exports=o)},SCaX:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t("qMld")],void 0===(o=(function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.executeForEachAsync=function(e,r,n){var o,i=null!==(o=null==n?void 0:n.batchSize)&&void 0!==o?o:100,a=t.createResolver(),s=0;return function o(){for(var l=Date.now(),c=!1,u=0;!c&&u<500;){try{for(n&&t.throwIfAborted(n);s<Math.min(s+i,e.length);s++)r(e[s])}catch(e){a.reject(e)}u=Date.now()-l,c=s>=e.length}c?a.resolve():setTimeout(o,0)}(),a.promise}}).apply(null,n))||(e.exports=o)},dh9Z:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("H1tY"),t("qsST"),t("LxLY"),t("qMld"),t("Vx27"),t("Z4y+"),t("5WBt"),t("y/j/"),t("hz/Y"),t("YaB4"),t("WEAo"),t("MtZC"),t("SCaX"),t("rAGl"),t("68TM"),t("lvbU")],void 0===(o=(function(e,r,t,n,o,i,a,s,l,c,u,p,d,f,y,h,v,g,b,_){Object.defineProperty(r,"__esModule",{value:!0});var m=i.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor"),w=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._symbolToMosaicItemMap=new Map,r._visualSetPromises=new Map,r.type="symbol",r}return t.__extends(r,e),r.prototype.initialize=function(){this._factory=this._createFactory()},r.prototype.destroy=function(){this._visualSetPromises.clear(),this._symbolToMosaicItemMap.clear(),this.notifyChange("updating")},Object.defineProperty(r.prototype,"supportsTileUpdates",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"labelingInfo",{get:function(){return!this.config||a.isNone(this.config.labelingInfo)?null:this.config.labelingInfo.map((function(e){return u.fromJSON(e)}))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"labelingInfoFeatureReduction",{get:function(){var e,r;if(!this.config||a.isNone(this.config.featureReduction))return null;var t=this.config.featureReduction;return"cluster"===t.type&&a.isSome(null===(e=t.drawingInfo)||void 0===e?void 0:e.labelingInfo)?null===(r=t.drawingInfo)||void 0===r?void 0:r.labelingInfo.map((function(e){return u.fromJSON(e)})):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasLabels",{get:function(){return!(!this.labelingInfo&&!this.labelingInfoFeatureReduction)},enumerable:!0,configurable:!0}),r.prototype._updateLabelClassInfos=function(){return t.__awaiter(this,void 0,void 0,(function(){var e,r,o,i,l,c=this;return t.__generator(this,(function(u){switch(u.label){case 0:return a.isNone(this.labelingInfo)&&a.isNone(this.labelingInfoFeatureReduction)?[2,s.resolve()]:(e=function(e){return t.__awaiter(c,void 0,void 0,(function(){var r,o;return t.__generator(this,(function(t){switch(t.label){case 0:r=null,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,p.createLabelFunction(e,this.service.fields,this.spatialReference)];case 2:return r=t.sent(),[3,4];case 3:return o=t.sent(),m.error(new n("mapview-labeling","Failed to evaluate "+(e.where?"where":"arcade")+" expression",{labelClass:e,error:o})),[3,4];case 4:return[2,r]}}))}))},r=[],a.isSome(this.labelingInfo)&&r.push.apply(r,this.labelingInfo.map((function(r,n){return t.__awaiter(c,void 0,void 0,(function(){var o;return t.__generator(this,(function(t){switch(t.label){case 0:return o=a.andThen,[4,e(r)];case 1:return[2,o.apply(void 0,[t.sent(),function(e){return{type:"feature",labelClass:r,index:n,minScale:r.minScale,maxScale:r.maxScale,builder:e,symbol:r.symbol,symbolJSON:r.symbol.toJSON()}}])]}}))}))}))),a.isSome(this.labelingInfoFeatureReduction)&&(o=r.length,r.push.apply(r,this.labelingInfoFeatureReduction.map((function(r,n){return t.__awaiter(c,void 0,void 0,(function(){var i;return t.__generator(this,(function(t){switch(t.label){case 0:return i=a.andThen,[4,e(r)];case 1:return[2,i.apply(void 0,[t.sent(),function(e){return{type:"aggregate",labelClass:r,index:o+n,minScale:r.minScale,maxScale:r.maxScale,builder:e,symbol:r.symbol,symbolJSON:r.symbol.toJSON()}}])]}}))}))})))),[4,s.all(r)]);case 1:return i=u.sent(),l=i.filter((function(e){return e})),this._labelClassInfos=l,[2]}}))}))},Object.defineProperty(r.prototype,"hydrate",{get:function(){return y.createHydrateFactory(this.service.geometryType)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"renderer",{get:function(){return this.config?d.fromJSON(this.config.renderer):(o("esri-2d-debug")&&console.debug("Unable to create renderer for undefined configuration"),null)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"updating",{get:function(){return this._visualSetPromises.size>0},enumerable:!0,configurable:!0}),r.prototype.update=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return r=this._getMeshHash(),this._set("config",e),[4,this._updateLabelClassInfos()];case 1:return t.sent(),r!==this._getMeshHash()&&(this._factory=this._createFactory()),this._factory.update(this._labelClassInfos,this.renderer,this.tileStore.tileScheme.tileInfo),[2]}}))}))},r.prototype.onTileData=function(e,r,t){var n=this,o=this._onTileData(e,r,t);return this._visualSetPromises.set(e,o),s.always(o,(function(){return n._cleanPromise(e)})),this.notifyChange("updating"),o},r.prototype.onTileError=function(e,r,t){var n=this,o=this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:r},{signal:t.signal});return this._visualSetPromises.set(e,o),s.always(o,(function(){return n._cleanPromise(e)})),this.notifyChange("updating"),o},r.prototype._getMeshHash=function(){var e=h.getVVFlags("visualVariables"in this.renderer&&this.renderer.visualVariables||[]);return this.renderer.getMeshHash()+"."+e},r.prototype._createFactory=function(){var e=this,r=this.service,t=r.geometryType,n=r.objectIdField,o={geometryType:t,fields:r.fields,spatialReference:c.fromJSON(this.spatialReference)},i=new f.WGLTemplateStore((function(r,t){return e.remoteClient.invoke("tileRenderer.getMaterialItems",r,t)}),!1);return this._store=i,this._matcher=f.createMatcher(i,o,this.renderer),new f.WGLMeshFactory(t,n,this.renderer,i)},r.prototype._cleanPromise=function(e){this._visualSetPromises.delete(e),this.notifyChange("updating")},r.prototype._onTileData=function(e,r,n){return t.__awaiter(this,void 0,void 0,(function(){var o,i,s,l,c,u,p,d,f,y;return t.__generator(this,(function(t){switch(t.label){case 0:o=r.remove,i=r.clear,s=this._processFeatures(e,r.addOrUpdate,r.transformParams,n),l=n.signal,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,s];case 2:return c=t.sent(),u=a.andThen(c,(function(e){return e.message})),p=a.andThen(c,(function(e){return e.transferList}))||[],d={addOrUpdate:u,remove:o,clear:i},f={transferList:a.unwrap(p)||[],signal:l},[2,this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:d},f)];case 3:return y=t.sent(),this._handleError(e,y,n),[3,4];case 4:return[2]}}))}))},r.prototype._processFeatures=function(e,r,n,o){return t.__awaiter(this,void 0,void 0,(function(){var i,a,l,c,u;return t.__generator(this,(function(t){switch(t.label){case 0:return r&&r.length?(i=this._factory,a={viewingMode:"",scale:e.scale},[4,this._matcher]):[2,null];case 1:return l=t.sent(),[4,this._getLabelInfos(e,r,n)];case 2:return c=t.sent(),[4,i.analyze(r,l,n,a)];case 3:return u=t.sent(),s.throwIfAborted(o),[2,this._writeFeatures(e,u,n,c,i,o)]}}))}))},r.prototype._writeFeatures=function(e,r,i,s,l,c){return t.__awaiter(this,void 0,void 0,(function(){var u,p,d;return t.__generator(this,(function(f){switch(f.label){case 0:return u=l.createMeshData(r.length),p={viewingMode:"",scale:e.scale},d=t.__assign(t.__assign({},c),{batchSize:200}),[4,v.executeForEachAsync(r,(function(r){try{var t=a.isSome(s)?s.get(r.localId):null;l.write(u,r,i,p,e.level,t)}catch(e){o("esri-2d-debug")&&m.error(new n("mapview-mesh-factory","Failed to write feature",{error:e,feature:r}))}}),d)];case 1:return f.sent(),[2,this._encodeDisplayData(u)]}}))}))},r.prototype._encodeDisplayData=function(e){var r={},t=new Array;return e.encode(r,t),{message:r,transferList:t}},r.prototype._handleError=function(e,r,t){if(!s.isAbortError(r))return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:r.message},{signal:t.signal})},r.prototype._getLabelClassInfosForScale=function(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(r){return[2,this._labelClassInfos.filter((function(r){var t=r.minScale,n=r.maxScale;return(!t||t>=e||0===t)&&(!n||n<=e||0===n)}))]}))}))},r.prototype._shouldDiscard=function(e,r){switch(this.service.geometryType){case"esriGeometryPoint":var t=r.geometry,n=t.x,o=t.y;return e.checkOverlap(n,o);case"esriGeometryPolygon":var i=r.centroid;return e.checkOverlap(n=i.x,o=i.y);default:return!1}},r.prototype._markUsed=function(e,r){switch(this.service.geometryType){case"esriGeometryPoint":var t=r.geometry,n=t.x,o=t.y;return e.markUsed(n,o);case"esriGeometryPolygon":var i=r.centroid;return e.markUsed(n=i.x,o=i.y)}},r.prototype._getLabelInfos=function(e,r,n){return t.__awaiter(this,void 0,void 0,(function(){var o,i,s,l,u,p,d,y;return t.__generator(this,(function(h){switch(h.label){case 0:return this.hasLabels&&r&&0!==r.length?[4,this._getLabelClassInfosForScale(e.scale)]:[2,null];case 1:if(0===(o=h.sent()).length)return[2,null];for(i=new Map,s=new f.CollisionGrid(f.definitions.COLLISION_EARLY_REJECT_BUCKET_SIZE),l=function(e){var r=e.localId;if(u._shouldDiscard(s,e))return i.has(r)||i.set(r,null),"continue";for(var l=function(e,r){for(var t=new Array(e),n=0;n<t.length;n++)t[n]=null;return t}(o.length),p=!1,d=function(i){var s=o[i],d=s.type,y=s.index,h=s.builder,v=s.symbolJSON;if((_.isAggregateId(r)&&e.attributes.cluster_count>1?"aggregate":"feature")!==d)return"continue";if(!n)return m.error("mapview-labeling","Tried to evaluate geometry expression but no transformation found"),{value:void 0};var b=u.hydrate(e.geometry,n.transform,n.hasZ,n.hasM),w=t.__assign(t.__assign({},e),{geometry:b});b.spatialReference=c.fromJSON(u.spatialReference);var x=h.evaluate(w);if(a.isNone(x)||""===x)return"continue";var S=f.bidiText(x),L=S[1];p=!0,u._store.getMosaicItem(v,!1,g.codepoints(S[0])).then((function(e){l[y]={glyphs:e.glyphMosaicItems,rtl:L,classIndex:y}}))},y=0;y<o.length;y++){var h=d(y);if("object"==typeof h)return h}i.set(r,l),p&&u._markUsed(s,e)},u=this,p=0,d=r;p<d.length;p++)if("object"==typeof(y=l(d[p])))return[2,y.value];return[2,i]}}))}))},t.__decorate([l.property({readOnly:!0})],r.prototype,"supportsTileUpdates",null),t.__decorate([l.property()],r.prototype,"config",void 0),t.__decorate([l.property({dependsOn:["config"]})],r.prototype,"labelingInfo",null),t.__decorate([l.property({dependsOn:["config"]})],r.prototype,"labelingInfoFeatureReduction",null),t.__decorate([l.property({dependsOn:["labelingInfo","labelingInfoFeatureReduction"]})],r.prototype,"hasLabels",null),t.__decorate([l.property({dependsOn:["service"]})],r.prototype,"hydrate",null),t.__decorate([l.property({dependsOn:["config"],readOnly:!0})],r.prototype,"renderer",null),t.__decorate([l.property({readOnly:!0})],r.prototype,"updating",null),t.__decorate([l.subclass("esri.views.2d.layers.features.processors.SymbolProcessor")],r)}(b.default);r.default=w}).apply(null,n))||(e.exports=o)},nsnX:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t("zOht"),t("ycL1"),t("Vx27"),t("L924")],void 0===(o=(function(e,r,t,n,o,i){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.value=null,r.expression=null,r}var n;return t.__extends(r,e),n=r,r.prototype.readExpression=function(e,r){return r.value?i.convertTemplatedStringToArcade(r.value):e},r.prototype.writeExpression=function(e,r,t){null!=this.value&&(e=i.convertTemplatedStringToArcade(this.value)),r[t]=e},r.prototype.clone=function(){return new n({value:this.value,expression:this.expression})},t.__decorate([o.property({json:{read:!1,write:!1}})],r.prototype,"value",void 0),t.__decorate([o.property({type:String,json:{write:{allowNull:!0}}})],r.prototype,"expression",void 0),t.__decorate([o.reader("expression",["expression","value"])],r.prototype,"readExpression",null),t.__decorate([o.writer("expression")],r.prototype,"writeExpression",null),n=t.__decorate([o.subclass("esri.layers.support.LabelExpressionInfo")],r)}(n.JSONSupport)}).apply(null,n))||(e.exports=o)},"y/j/":function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t("zOht"),t("ma1f"),t("qsST"),t("hCwm"),t("ICCr"),t("I90O"),t("k7g7"),t("L924"),t("sCbS"),t("2Kdy")],void 0===(o=(function(e,r,n,o,i,a,s,l,c,u,p){Object.defineProperty(r,"__esModule",{value:!0});var d=i.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:function(){return null}};function y(e,r,t,n){var o=c.getField(n,e);if(!o)return r;if(null==t[o.name])return"";var i=o.domain;if(i)if("codedValue"===i.type||"coded-value"===i.type)for(var l=t[o.name],u=0,p=i.codedValues;u<p.length;u++){var d=p[u];if(d.code===l)return d.name}else if("range"===i.type){var f=+t[o.name];if(("range"in i?i.range[0]:i.minValue)<=f&&f<=("range"in i?i.range[1]:i.maxValue))return i.name}var y=t[o.name];return"date"===o.type||"esriFieldTypeDate"===o.type?y=a.formatDate(y,a.convertDateFormatToIntlOptions("short-date")):c.isNumericField(o)&&(y=s.formatNumber(+y)),y||""}r.createLabelFunction=function(r,i,a){return n.__awaiter(this,void 0,void 0,(function(){var s,c,h,v,g,b,_,m;return n.__generator(this,(function(n){switch(n.label){case 0:return r&&r.symbol?(s=r.where,c=r.getLabelExpression(),s?[4,new Promise((function(e,r){t.e(9).then((function(){var r=[t("1eyA")];e.apply(null,r)}).bind(this)).catch(r.bind(this))}))]:[3,2]):[2,f];case 1:return v=n.sent(),[3,3];case 2:v=null,n.label=3;case 3:return h=v,"arcade"!==c.type?[3,5]:[4,p.createLabelExpression(c.expression,a,i)];case 4:return b=n.sent(),g={type:"arcade",evaluate:function(e){try{var r=b.evaluate({$feature:b.repurposeFeature(e)});if(null!=r)return r.toString()}catch(r){d.error(new o("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:e,expression:c}))}return null},needsHydrationToEvaluate:function(){return null==u.getSingleFieldArcadeExpression(c.expression)}},[3,6];case 5:g={type:"simple",evaluate:function(e){var r=e&&e.attributes;return r?c.expression.replace(/{[^}]*}/g,(function(e){return y(e.slice(1,-1),e,r,i)})):null}},n.label=6;case 6:if(s){try{_=h.WhereClause.create(s,new l(i))}catch(e){return[2,f]}m=g.evaluate,g.evaluate=function(e){return _.testFeature(e)?m(e):null}}return[2,g]}}))}))},r.formatField=y}).apply(null,n))||(e.exports=o)}}]);