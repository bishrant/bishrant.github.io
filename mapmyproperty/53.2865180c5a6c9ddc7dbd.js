(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/mixins/ArcGISService":"2fnV","esri/layers/support/LabelClass":"5WBt","esri/views/2d/layers/features/controllers/StreamController":"A4oT","esri/layers/support/FeatureTemplate":"L0gI","esri/layers/support/labelUtils":"L924","esri/layers/support/FeatureType":"V+oH","esri/layers/mixins/RefreshableLayer":"WaJo","esri/views/2d/layers/features/controllers/support/DispatchQueue":"Wuf+","esri/layers/graphics/sources/connections/StreamConnection":"aROD","esri/layers/graphics/sources/connections/GeoEventConnection":"gSUo","esri/layers/graphics/data/StreamFeatureManager":"gsnf","esri/layers/support/LabelExpressionInfo":"nsnX"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"2fnV":function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("qsST"),r("Vx27"),r("8CIp")],void 0===(o=(function(e,t,r,n,o,i){Object.defineProperty(t,"__esModule",{value:!0}),t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=i.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",i.sanitizeUrl(e,n.getLogger(this.declaredClass)))},enumerable:!0,configurable:!0}),r.__decorate([o.property({dependsOn:["url"]})],t.prototype,"title",null),r.__decorate([o.property({type:String})],t.prototype,"url",null),r.__decorate([o.subclass("esri.layers.mixins.ArcGISService")],t)}(e)}}).apply(null,n))||(e.exports=o)},"5WBt":function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("+AWJ"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27"),r("nsnX"),r("L924"),r("dXKx"),r("HqJa")],void 0===(o=(function(e,t,r,n,o,i,s,a,u,c,l,p){var d=new o.default({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function h(e){return!e||"service"!==e.origin&&!(e.layer&&"map-image"===e.layer.type)}return function(e){function t(t){var r=e.call(this,t)||this;return r.name=null,r.deconflictionStrategy="static",r.labelExpression=null,r.labelExpressionInfo=null,r.labelPlacement=null,r.maxScale=0,r.minScale=0,r.symbol=l.defaultTextSymbol2D,r.useCodedValues=void 0,r.where=null,r}var o;return r.__extends(t,e),o=t,t.evaluateWhere=function(e,t){var r=function(e,t,r){switch(t){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1};try{if(null==e)return!0;var n=e.split(" ");if(3===n.length)return r(t[n[0]],n[1],n[2]);if(7===n.length){var o=r(t[n[0]],n[1],n[2]),i=n[3],s=r(t[n[4]],n[5],n[6]);switch(i){case"AND":return o&&s;case"OR":return o||s}}return!1}catch(t){console.log("Error.: can't parse = "+e)}},t.prototype.writeDeconflictionStrategy=function(e,t,r,n){"static"!==e&&(t[r]=e)},t.prototype.readLabelExpression=function(e,t){var r=t.labelExpressionInfo;if(!r||!r.value&&!r.expression)return e},t.prototype.writeLabelExpression=function(e,t,r,n){if(this.labelExpressionInfo&&(h(n)||n&&"service"===n.origin))if(null!=this.labelExpressionInfo.value)e=this.labelExpressionInfo.value.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]");else if(null!=this.labelExpressionInfo.expression){var o=c.getSingleFieldArcadeExpression(this.labelExpressionInfo.expression);o&&(e="["+o+"]")}null!=e&&(t[r]=e)},t.prototype.writeLabelExpressionInfo=function(e,t,r,n){if(null==e&&null!=this.labelExpression&&h(n))e=new u({expression:this.getLabelExpressionArcade()});else if(!e)return;var o=e.toJSON(n);o.expression&&(t[r]=o)},t.prototype.writeMaxScale=function(e,t){(e||this.minScale)&&(t.maxScale=e)},t.prototype.writeMinScale=function(e,t){(e||this.maxScale)&&(t.minScale=e)},t.prototype.getLabelExpression=function(){var e={expression:"",type:"none"};return this.labelExpressionInfo?this.labelExpressionInfo.value?(e.expression=this.labelExpressionInfo.value,e.type="conventional"):this.labelExpressionInfo.expression&&(e.expression=this.labelExpressionInfo.expression,e.type="arcade"):null!=this.labelExpression&&(e.expression=this.labelExpression.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}"),e.type="conventional"),e},t.prototype.getLabelExpressionArcade=function(){var e=this.getLabelExpression();if(!e)return null;switch(e.type){case"conventional":return c.convertTemplatedStringToArcade(e.expression);case"arcade":return e.expression}return null},t.prototype.getLabelExpressionSingleField=function(){var e=this.getLabelExpression();if(!e)return null;switch(e.type){case"conventional":return c.getSingleFieldTemplatedString(e.expression);case"arcade":return c.getSingleFieldArcadeExpression(e.expression)}return null},t.prototype.clone=function(){return new o({deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:s.clone(this.labelExpressionInfo),labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,symbol:s.clone(this.symbol),where:this.where,useCodedValues:this.useCodedValues})},r.__decorate([a.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),r.__decorate([a.property({type:String})],t.prototype,"deconflictionStrategy",void 0),r.__decorate([a.writer("deconflictionStrategy")],t.prototype,"writeDeconflictionStrategy",null),r.__decorate([a.property({type:String,json:{write:{allowNull:!0}}})],t.prototype,"labelExpression",void 0),r.__decorate([a.reader("labelExpression")],t.prototype,"readLabelExpression",null),r.__decorate([a.writer("labelExpression")],t.prototype,"writeLabelExpression",null),r.__decorate([a.property({type:u,json:{write:{overridePolicy:function(e,t,r){return h(r)?{allowNull:!0}:{enabled:!1}}}}})],t.prototype,"labelExpressionInfo",void 0),r.__decorate([a.writer("labelExpressionInfo")],t.prototype,"writeLabelExpressionInfo",null),r.__decorate([a.property({type:d.apiValues,json:{type:d.jsonValues,read:d.read,write:d.write}})],t.prototype,"labelPlacement",void 0),r.__decorate([a.property({type:Number})],t.prototype,"maxScale",void 0),r.__decorate([a.writer("maxScale")],t.prototype,"writeMaxScale",null),r.__decorate([a.property({type:Number})],t.prototype,"minScale",void 0),r.__decorate([a.writer("minScale")],t.prototype,"writeMinScale",null),r.__decorate([a.property({types:n.symbolTypesLabel,json:{origins:{"web-scene":{types:n.symbolTypesLabel3D,read:p.read,write:p.writeTarget,default:null}},read:p.read,write:p.writeTarget,default:null}})],t.prototype,"symbol",void 0),r.__decorate([a.property({type:Boolean,json:{write:!0}})],t.prototype,"useCodedValues",void 0),r.__decorate([a.property({type:String,json:{write:!0}})],t.prototype,"where",void 0),o=r.__decorate([a.subclass("esri.layers.support.LabelClass")],t)}(i.JSONSupport)}).apply(null,n))||(e.exports=o)},A4oT:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("H1tY"),r("R2Zq"),r("LxLY"),r("qMld"),r("Vx27"),r("+6sX"),r("ZGAQ"),r("rfv1"),r("gsnf"),r("gSUo"),r("Btct"),r("Wuf+")],void 0===(o=(function(e,t,r,n,o,i,s,a,u,c,l,p,d,h,f,_){Object.defineProperty(t,"__esModule",{value:!0});var y=function(){function e(e,t){this.store=e,this.onUpdate=t}return e.prototype.add=function(e){this.store.add(e)},e.prototype.forEach=function(e){this.store.forEach(e)},e.prototype.removeById=function(e){return this.store.removeById(e)},e.prototype.update=function(e,t){this.onUpdate(e,t)},Object.defineProperty(e.prototype,"size",{get:function(){return this.store.numFeatures},enumerable:!0,configurable:!0}),e}(),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="stream",t._tileDispatchMap=new Map,t._updateIntervalId=0,t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this,t=this.service,r=t.objectIdField,n=t.timeInfo,o=t.purgeOptions;this.connection=new h.default(t.source,t.spatialReference,this.spatialReference,t.geometryType,t.serviceFilter),this._set("store",new p.default(this.geometryInfo)),this._set("streamFeatureManager",new d.default(new y(this.store,(function(t,r){return e._onUpdate(t,r)})),r,n,o)),this.connection.on("feature",(function(t){return e._onFeature(t)})),["connectionStatus","errorString"].forEach((function(t){e.watch("connection."+t,(function(r){return e.remoteClient.invoke("setProperty",{propertyName:t,value:r})}))})),this._updateIntervalId=setInterval((function(){return e.streamFeatureManager.checkForUpdates()}),64),this._shouldPushDataReceived=this.service.enableDataReceived},t.prototype.destroy=function(){clearInterval(this._updateIntervalId),this.connection.destroy(),this.queryEngine.destroy(),this._tileDispatchMap.forEach((function(e){return e.destroy()}))},Object.defineProperty(t.prototype,"queryEngine",{get:function(){return this._createQueryEngine(this.store)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._tempQueryEngine&&!!this._tempQueryEngine.featureStore.numFeatures||this._anyUpdatesQueued()},enumerable:!0,configurable:!0}),t.prototype.update=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n,o=this;return r.__generator(this,(function(r){switch(r.label){case 0:return this.validateConfig(e),JSON.stringify(this.service.serviceFilter),t=this.renderer.getAttributeHash(),this._set("config",e),[4,this.updatePixelBuffer()];case 1:return r.sent(),JSON.stringify(this.service.serviceFilter),"heatmap"===this.renderer.type?[2]:t===this.renderer.getAttributeHash()?[3,3]:(n=this.queryEngine.featureStore,[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]);case 2:r.sent(),n.forEach((function(e){return o.attributeStore.setAttributeData(e.localId,e,o.geometryInfo,o.viewParams)})),r.label=3;case 3:return[4,this.attributeStore.updateFilters(this)];case 4:return r.sent(),[4,this.attributeStore.sendUpdates()];case 5:return r.sent(),[2]}}))}))},t.prototype.invalidate=function(){this._repushActiveTiles()},t.prototype.onEdits=function(){},t.prototype.queryFeatures=function(e){return this.queryEngine.executeQuery(e)},t.prototype.queryFeatureCount=function(e){return this.queryEngine.executeQueryForCount(e)},t.prototype.queryObjectIds=function(e){return this.queryEngine.executeQueryForIds(e)},t.prototype.queryExtent=function(e){return this.queryEngine.executeQueryForExtent(e)},t.prototype.queryLatestObservations=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){if(!this.service.timeInfo.trackIdField)throw new n("mapview-no-trackIdField","queryLatestObservation can only be used with services that define a TrackIdField");return[2,this.queryEngine.executeQueryForLatestObservations(e)]}))}))},t.prototype.queryStatistics=function(){throw new n("Method not implemented.")},t.prototype.refresh=function(){},t.prototype.setViewState=function(t){var r=this,n=this.viewState&&this.viewState.scale;e.prototype.setViewState.call(this,t),n!==this.viewState.scale&&this.attributeStore.hasScaleExpr&&(this.queryEngine.featureStore.forEach((function(e){return r.attributeStore.setAttributeData(e.localId,e,r.geometryInfo,r.viewParams)})),this.attributeStore.sendUpdates())},t.prototype.onTileUpdate=function(e){var t=this,r=e.added;e.removed.forEach((function(e){return t._handleTileRemove(e)})),r.forEach((function(e){return t._handleTileAdd(e)}))},t.prototype.enableEvent=function(e){"data-received"===e.name&&(this._shouldPushDataReceived=e.value)},t.prototype._onFeature=function(e){this._shouldPushDataReceived&&this.remoteClient.invoke("emitEvent",{name:"data-received",event:{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry}});try{var t=this.geometryInfo,r=c.convertFromFeature(e,t.geometryType,t.hasZ,t.hasM,this.service.objectIdField);this.streamFeatureManager.add(r)}catch(e){o("esri-2d-debug")&&console.debug(e)}},t.prototype._createStoreWithFeatures=function(e){if(s.isNone(e))return null;var t=this._createFeatureStore();return t.addMany(e),t},t.prototype._onUpdate=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,o,i=this;return r.__generator(this,(function(r){switch(r.label){case 0:return s.isSome(e)&&e.forEach((function(e){return i.onFeatureAdd(e)})),n=this._createStoreWithFeatures(e),o=this._createStoreWithFeatures(t),this.attributeStore.sendUpdates(),this.processor.supportsTileUpdates?[4,this._updateActiveTiles(n,o)]:[3,2];case 1:return r.sent(),[3,3];case 2:this._repushActiveTiles(),r.label=3;case 3:return s.isSome(t)&&t.forEach((function(e){return i.onFeatureRemove(e)})),[2]}}))}))},t.prototype._handleTileAdd=function(e){if(this._tileDispatchMap.has(e.id))(t=this._tileDispatchMap.get(e.id)).up();else{var t=new _.default;this._tileDispatchMap.set(e.id,t)}this._queryTileFeatures(e,!0,this.queryEngine)},t.prototype._handleTileRemove=function(e){var t=this._tileDispatchMap.get(e.id);t&&(t.destroy(),this._tileDispatchMap.delete(e.id))},t.prototype._anyUpdatesQueued=function(){return i.valuesOfMap(this._tileDispatchMap).some((function(e){return e.hasAction()}))},t.prototype._updateActiveTiles=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,o,i=this;return r.__generator(this,(function(r){switch(r.label){case 0:return n=s.applySome(e,(function(e){return i._createQueryEngine(e)})),o=s.applySome(t,(function(e){return i._createQueryEngine(e)})),[4,a.all(this.tileStore.tiles.map((function(e){return i._queryTileFeatures(e,!1,n,o)})))];case 1:return r.sent(),[2]}}))}))},t.prototype._repushActiveTiles=function(){for(var e=0,t=this.tileStore.tiles;e<t.length;e++)this._queryTileFeatures(t[e],!0,this.queryEngine)},t.prototype._queryTileFeatures=function(e,t,n,o){return r.__awaiter(this,void 0,void 0,(function(){var i,u,c,p,d,h,f,_,y=this;return r.__generator(this,(function(v){switch(v.label){case 0:return i={hasZ:!1,hasM:!1,transform:{originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]}},c={returnCentroid:(u=this.queryInfo).returnCentroid,returnGeometry:u.returnGeometry,pixelBuffer:this._pixelBuffer,returnOutline:this.returnOutline},this._tileDispatchMap.has(e.id)?(p=this._tileDispatchMap.get(e.id),[4,s.applySome(n,(function(t){return t.featureStore.executeTileQuery(e,y.spatialReference,c)}))]):[2];case 1:return d=v.sent(),h=s.mapOr(d,[],(function(e){return e.features})),f=s.mapOr(o,[],(function(t){return l.executeTileQueryForIds(t,e,c)})).map((function(e){return y.attributeStore.getLocalId(e)})),_=a.createResolver(),p.enqueue((function(n){return r.__awaiter(y,void 0,void 0,(function(){var o;return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.processor.onTileData(e,{addOrUpdate:h,remove:f,clear:t,transformParams:i},{signal:n})];case 1:return r.sent(),[3,3];case 2:return o=r.sent(),a.throwIfNotAbortError(o),[3,3];case 3:return _.resolve(),[2]}}))}))})),[2,_.promise]}}))}))},r.__decorate([u.property()],t.prototype,"connection",void 0),r.__decorate([u.property()],t.prototype,"service",void 0),r.__decorate([u.property({readOnly:!0})],t.prototype,"store",void 0),r.__decorate([u.property({readOnly:!0})],t.prototype,"streamFeatureManager",void 0),r.__decorate([u.property({readOnly:!0,dependsOn:["store","service","config"]})],t.prototype,"queryEngine",null),r.__decorate([u.property()],t.prototype,"updating",null),r.__decorate([u.subclass("esri.views.2d.layers.features.controllers.StreamController")],t)}(f.default);t.default=v}).apply(null,n))||(e.exports=o)},L0gI:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27")],void 0===(o=(function(e,t,r,n,o,i,s){var a=new n.default({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});return function(e){function t(t){var r=e.call(this,t)||this;return r.name=null,r.description=null,r.drawingTool=null,r.prototype=null,r.thumbnail=null,r}return r.__extends(t,e),t.prototype.writeDrawingTool=function(e,t){t.drawingTool=a.toJSON(e)},t.prototype.writePrototype=function(e,t){t.prototype=i.fixJson(i.clone(e),!0)},t.prototype.writeThumbnail=function(e,t){t.thumbnail=i.fixJson(i.clone(e))},r.__decorate([s.property({json:{write:!0}})],t.prototype,"name",void 0),r.__decorate([s.property({json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([s.property({json:{read:a.read,write:a.write}})],t.prototype,"drawingTool",void 0),r.__decorate([s.writer("drawingTool")],t.prototype,"writeDrawingTool",null),r.__decorate([s.property({json:{write:!0}})],t.prototype,"prototype",void 0),r.__decorate([s.writer("prototype")],t.prototype,"writePrototype",null),r.__decorate([s.property({json:{write:!0}})],t.prototype,"thumbnail",void 0),r.__decorate([s.writer("thumbnail")],t.prototype,"writeThumbnail",null),r.__decorate([s.subclass("esri.layers.support.FeatureTemplate")],t)}(o.JSONSupport)}).apply(null,n))||(e.exports=o)},L924:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("nRUF")],void 0===(o=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=new RegExp("__begin__","ig"),o=new RegExp("__end__","ig"),i=new RegExp("^__begin__","i"),s=new RegExp("__end__$","i");t.convertTemplatedStringToArcade=function(e){var t;return e?(t=r.replace(e,(function(e){return'__begin__$feature["'+e+'"]__end__'})),t=i.test(t)?t.replace(i,""):'"'+t,t=(t=s.test(t)?t.replace(s,""):t+'"').replace(n,'" + ').replace(o,' + "')):t='""',t};var a=/^\s*\{([^}]+)\}\s*$/i;t.getSingleFieldTemplatedString=function(e){var t=e.match(a);return t&&t[1].trim()||null};var u=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,c=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,l=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;t.getSingleFieldArcadeExpression=function(e){if(!e)return null;var t=u.exec(e)||c.exec(e);return t?t[1]||t[3]:(t=l.exec(e))?t[2]:null}}).apply(null,n))||(e.exports=o)},"V+oH":function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("rg9i"),r("Vx27"),r("ZsQS"),r("L0gI")],void 0===(o=(function(e,t,r,n,o,i,s,a){return function(e){function t(t){var r=e.call(this,t)||this;return r.id=null,r.name=null,r.domains=null,r.templates=null,r}return r.__extends(t,e),t.prototype.readDomains=function(e){var t={};for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];switch(n.type){case"range":t[r]=s.RangeDomain.fromJSON(n);break;case"codedValue":t[r]=s.CodedValueDomain.fromJSON(n);break;case"inherited":t[r]=s.InheritedDomain.fromJSON(n)}}return t},t.prototype.writeDomains=function(e,t){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]&&e[n].toJSON());o.fixJson(r),t.domains=r},t.prototype.readTemplates=function(e){return e&&e.map((function(e){return new a(e)}))},t.prototype.writeTemplates=function(e,t){t.templates=e&&e.map((function(e){return e.toJSON()}))},r.__decorate([i.property({json:{write:!0}})],t.prototype,"id",void 0),r.__decorate([i.property({json:{write:!0}})],t.prototype,"name",void 0),r.__decorate([i.property({json:{write:!0}})],t.prototype,"domains",void 0),r.__decorate([i.reader("domains")],t.prototype,"readDomains",null),r.__decorate([i.writer("domains")],t.prototype,"writeDomains",null),r.__decorate([i.property({json:{write:!0}})],t.prototype,"templates",void 0),r.__decorate([i.reader("templates")],t.prototype,"readTemplates",null),r.__decorate([i.writer("templates")],t.prototype,"writeTemplates",null),r.__decorate([i.subclass("esri.layers.support.FeatureType")],t)}(n.JSONSupport)}).apply(null,n))||(e.exports=o)},WaJo:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("Vx27")],void 0===(o=(function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0}),t.RefreshableLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshInterval=0,t}return r.__extends(t,e),t.prototype.refresh=function(){this.emit("refresh")},r.__decorate([n.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),r.__decorate([n.subclass("esri.layers.mixins.RefreshableLayer")],t)}(e)}}).apply(null,n))||(e.exports=o)},"Wuf+":function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("qMld")],void 0===(o=(function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this._action=null,this._queue=[],this._abortController=n.createAbortController(),this._refs=1}return e.prototype.up=function(){this._refs++},e.prototype.down=function(){return this._refs--,0===this._refs},e.prototype.clear=function(){this._abortController.abort(),this._abortController=n.createAbortController()},e.prototype.destroy=function(){this._queue.length=0,this._action&&(this._action=null)},e.prototype.enqueue=function(e){this._action?this._queue.push(e):this._setAction(e)},e.prototype.flush=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,o;return r.__generator(this,(function(r){return(e=this._action)?(t=this._abortController.signal,o=this._queue.reduce((function(e,r){return e.then((function(){return r(t)}))}),e).catch(n.throwIfNotAbortError),this._action=o.then(this._handleNext.bind(this)).catch(n.throwIfNotAbortError),this._queue.length=0,[2,o]):[2]}))}))},e.prototype.hasAction=function(){return!!this._action},e.prototype._setAction=function(e){this._action=e(this._abortController.signal).then(this._handleNext.bind(this)).catch(n.throwIfNotAbortError)},e.prototype._handleNext=function(){this._queue.length?this._setAction(this._queue.shift()):this._action=null},e}();t.default=o}).apply(null,n))||(e.exports=o)},aROD:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("BcWh"),r("7MDj"),r("Vx27")],void 0===(o=(function(e,t,r,n,o,i){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.onFeature=function(e){this.emit("feature",e)},r.__decorate([i.subclass("esri.layers.graphics.sources.connections.StreamConnection")],t)}(n.EventedMixin(o.HandleOwner));t.default=s}).apply(null,n))||(e.exports=o)},gSUo:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("zp6E"),r("ma1f"),r("qsST"),r("LxLY"),r("qMld"),r("Vx27"),r("Zvuv"),r("aROD"),r("B16N"),r("HoQt"),r("IpeC")],void 0===(o=(function(e,t,r,n,o,i,s,a,u,c,l,p,d,h,f){Object.defineProperty(t,"__esModule",{value:!0});var _,y=s.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection");!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(_=t.ReadyState||(t.ReadyState={}));var v=function(e){function t(t,r,n,o,i,s,a,u){void 0===s&&(s=5),void 0===a&&(a=3);var c=e.call(this)||this;return c._destroyed=!1,c.errorString=null,c._source=t,c._sourceSpatialReference=r,c._spatialReference=n,c._filter=i,c._outFields=u,c._maxQueryDepth=s,c._maxRecordCountFactor=a,c._featureZScaler=h.getGeometryZScaler(o,r,n),c._open(),c}return r.__extends(t,e),t.prototype._open=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,n,o;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this._fetchServiceDefinition(this._source)];case 1:return(e=r.sent()).timeInfo.trackIdField||y.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect."),[4,this._fetchWebSocketUrl(e.streamUrls,this._spatialReference)];case 2:return t=r.sent(),this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),[4,this._buddyServicesQuery];case 3:return r.sent(),[4,this._tryCreateWebSocket(t)];case 4:return r.sent(),n=this._filter,o=this._outFields,this._destroyed||this._setFilter(n,o),[2]}}))}))},t.prototype.destroy=function(){this._destroyed=!0,a.isSome(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null},Object.defineProperty(t.prototype,"connectionStatus",{get:function(){if(a.isNone(this._websocket))return"disconnected";switch(this._websocket.readyState){case _.CONNECTING:case _.OPEN:return"connected";case _.CLOSING:case _.CLOSED:return"disconnected"}},enumerable:!0,configurable:!0}),t.prototype._tryCreateWebSocket=function(e,t){return void 0===t&&(t=1e3),r.__awaiter(this,void 0,void 0,(function(){var n,o;return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,4]),this._destroyed?[2]:(n=this,[4,this._createWebSocket(e)]);case 1:return n._websocket=r.sent(),this.notifyChange("connectionStatus"),[3,4];case 2:return o=r.sent(),y.error(new i("geoevent-connection","Failed to connect. Attempting to reconnect in "+t/1e3+"s",o)),[4,u.after(t)];case 3:return r.sent(),[2,this._tryCreateWebSocket(e,1.5*t)];case 4:return[2]}}))}))},t.prototype._createWebSocket=function(e){var t=this,r=new WebSocket(e),n=u.create((function(e,t){r.onopen=function(){return e(r)},r.onclose=function(e){return t(e)}}));return n.then((function(){if(t._destroyed)return r.onclose=function(){},void r.close();r.onclose=function(e){return t._onClose(e)},r.onerror=function(e){return t._onError(e)},r.onmessage=function(e){return t._onMessage(e)}})),n},t.prototype._onMessage=function(e){var t;try{t=this._enrich(JSON.parse(e.data)),this._featureZScaler&&this._featureZScaler(t.geometry)}catch(e){return void y.error(new i("geoevent-connection","Failed to parse message",e))}this.onFeature(t)},t.prototype._onError=function(e){var t="Encountered an error over WebSocket connection";this._set("errorString",t),y.error("geoevent-connection",t)},t.prototype._onClose=function(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&y.error("geoevent-connection","WebSocket closed unexpectedly with error code "+e.code),this._destroyed||this._open()},t.prototype._fetchServiceDefinition=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,o(e,{query:{f:"json"},responseType:"json"})];case 1:return t=r.sent(),this._serviceDefinition=n=t.data,[2,n]}}))}))},t.prototype._fetchWebSocketUrl=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,o;return r.__generator(this,(function(r){return o=(n=e[0]).token,[2,this._inferWebSocketBaseUrl(n.urls)+"/subscribe?outSR="+t.wkid+(o?"&token="+o:"")]}))}))},t.prototype._inferWebSocketBaseUrl=function(e){if(1===e.length)return e[0];for(var t=0,r=e;t<r.length;t++){var n=r[t];if(-1!==n.indexOf("wss"))return n}return y.error(new i("geoevent-connection","Unable to infer WebSocket url",e)),null},t.prototype._setFilter=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,o,s,c,l,p,d=this;return r.__generator(this,(function(r){return n=this._websocket,this._filter=e,this._outFields=t,a.isNone(n)||a.isNone(e)&&a.isNone(t)?[2]:(o=JSON.stringify({filter:this._serializeFilter(e,t)}),s=!1,c=u.createResolver(),l=function(){s||(d._destroyed||d._websocket!==n||y.error(new i("geoevent-connection","Server timed out when setting filter")),c.reject())},p=function(e){var t=JSON.parse(e.data);t.filter&&(t.error&&(y.error(new i("geoevent-connection","Failed to set service filter",t.error)),d._set("errorString","Could not set service filter - "+t.error),c.reject(t.error)),n.onmessage=d._onMessage.bind(d),s=!0,c.resolve())},n.onmessage=p,n.send(o),setTimeout(l,1e4),[2,c.promise])}))}))},t.prototype._serializeFilter=function(e,t){var r={};if(a.isNone(e)&&a.isNone(t))return r;if(a.isSome(e)&&e.geometry)try{var o=n.fromJSON(e.geometry);if("extent"!==o.type)throw new i("Expected extent but found type "+o.type);r.geometry=JSON.stringify(o.shiftCentralMeridian())}catch(e){y.error(new i("geoevent-connection","Encountered an error when setting connection geometryDefinition",e))}return a.isSome(e)&&e.where&&"1 = 1"!==e.where&&(r.where=e.where),a.isSome(t)&&(r.outFields=t.join(",")),r},t.prototype._enrich=function(e){if(!this._relatedFeatures)return e;var t=e.attributes[this._serviceDefinition.relatedFeatures.joinField];if(!this._relatedFeatures.has(t))return y.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;var r=this._relatedFeatures.get(t),n=r.attributes,o=r.geometry;for(var s in n)e.attributes[s]=n[s];return o&&(e.geometry=o),e.geometry||e.centroid||y.error(new i("geoevent-connection","Found malformed feature - no geometry found",e)),e},t.prototype._queryBuddyServices=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,n,o,s,a,u,c;return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),t=(e=this._serviceDefinition).keepLatestArchive,n=this._queryRelatedFeatures(e.relatedFeatures),o=this._queryArchive(t),[4,n];case 1:return r.sent(),[4,o];case 2:if(!(s=r.sent()))return[2];for(a=0,u=s.features;a<u.length;a++)this.onFeature(this._enrich(u[a]));return[3,4];case 3:return c=r.sent(),y.error(new i("geoevent-connection","Encountered an error when querying buddy services",{error:c})),[3,4];case 4:return[2]}}))}))},t.prototype._queryRelatedFeatures=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return e?[4,this._queryBuddy(e.featuresUrl)]:[2];case 1:return t=r.sent(),this._addRelatedFeatures(t),[2]}}))}))},t.prototype._queryArchive=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){return e?[2,this._queryBuddy(e.featuresUrl)]:[2,void 0]}))}))},t.prototype._queryBuddy=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n,o,i,s,u,c,p,h,_;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,(t=new l({url:e})).load()];case 1:return n=r.sent().capabilities,i=n.query.supportsPagination,s=n.query.supportsCentroid,u=this._maxRecordCountFactor,c=t.capabilities.query.maxRecordCount,p=(o=n.query.supportsMaxRecordCountFactor)?c*u:c,(h=new f).outFields=a.unwrapOr(this._outFields,["*"]),h.where=a.unwrapOr(a.get(this._filter,"where"),"1=1"),h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=this._spatialReference,s&&(h.returnCentroid=!0),o&&(h.maxRecordCountFactor=u),i?(h.num=p,t.destroy(),[2,this._queryPages(e,h)]):[4,d.executeQuery(e,h,this._sourceSpatialReference)];case 2:return _=r.sent(),t.destroy(),[2,_.data]}}))}))},t.prototype._queryPages=function(e,t,n,o){return void 0===n&&(n=[]),void 0===o&&(o=0),r.__awaiter(this,void 0,void 0,(function(){var i;return r.__generator(this,(function(r){switch(r.label){case 0:return t.start=o*t.num,[4,d.executeQuery(e,t,this._sourceSpatialReference)];case 1:return(i=r.sent().data).exceededTransferLimit&&o<this._maxQueryDepth?(i.features.forEach((function(e){return n.push(e)})),[2,this._queryPages(e,t,n,o+1)]):(n.forEach((function(e){return i.features.push(e)})),[2,i])}}))}))},t.prototype._addRelatedFeatures=function(e){for(var t=new Map,r=this._serviceDefinition.relatedFeatures.joinField,n=0,o=e.features;n<o.length;n++){var i=o[n];t.set(i.attributes[r],i)}this._relatedFeatures=t},r.__decorate([c.property()],t.prototype,"connectionStatus",null),r.__decorate([c.property()],t.prototype,"errorString",void 0),r.__decorate([c.subclass("esri.layers.graphics.sources.connections.GeoEventConnection")],t)}(p.default);t.default=v}).apply(null,n))||(e.exports=o)},gsnf:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zIqJ"),r("xoE+"),r("LxLY")],void 0===(o=(function(e,t,r,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_STREAM_ID_FIELD="__esri_stream_id__";var i=function(){function e(e,r,n,o,i){void 0===i&&(i=128),this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=Date.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=n,this._purgeOptions=o,this.store=e,this.objectIdField=r,this.purgeInterval=i,this._useGeneratedIds=this.objectIdField===t.DEFAULT_STREAM_ID_FIELD}return e.prototype.add=function(e){if(this._useGeneratedIds&&(e.attributes[this.objectIdField]=this._nextId()),e.objectId=e.attributes[this.objectIdField],this.store.add(e),this._addOrUpdated.set(e.objectId,e),this._maxAge=Math.max(this._maxAge,e.attributes[this._timeInfo.startTimeField]),this._timeInfo.trackIdField){var t=e.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(t)){var i=o.isSome(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1e3,s=n.clamp(i,0,1e3);this._trackIdToObservations.set(t,new r.default(s))}var a=this._trackIdToObservations.get(t).enqueue(e.attributes[this.objectIdField]);if(o.isSome(a)){var u=this.store.removeById(a);o.isSome(u)&&(this._addOrUpdated.has(a)?this._addOrUpdated.delete(a):this._removed.push(u))}}},e.prototype.checkForUpdates=function(){var e=this._getToAdd(),t=this._getToRemove(),r=Date.now();r-this._lastPurge>=this.purgeInterval&&(this._purge(),this._lastPurge=r),(e||t)&&this.store.update(e,t)},e.prototype._getToAdd=function(){if(!this._addOrUpdated.size)return null;var e=new Array(this._addOrUpdated.size),t=0;return this._addOrUpdated.forEach((function(r){return e[t++]=r})),this._addOrUpdated.clear(),e},e.prototype._getToRemove=function(){var e=this._removed;return this._removed.length?(this._removed=[],e):null},e.prototype._nextId=function(){var e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e},e.prototype._purge=function(){var e=this._purgeOptions;o.isSome(e)&&(this._purgeSomeByDisplayCount(e),this._purgeByAge(e),this._purgeTracks())},e.prototype._purgeSomeByDisplayCount=function(e){var t=this;if(e.displayCount){var r=this.store.size;r>e.displayCount&&this._trackIdToObservations.forEach((function(n){if(r>e.displayCount&&n.size){var i=t.store.removeById(o.unwrap(n.dequeue()));o.isSome(i)&&t._removed.push(i),r--}}))}},e.prototype._purgeByAge=function(e){var t=this;if(e.age){var r=this._maxAge-60*e.age*1e3,n=this._timeInfo.startTimeField;this.store.forEach((function(e){e.attributes[n]<r&&(t.store.removeById(e.objectId),t._removed.push(e))}))}},e.prototype._purgeTracks=function(){var e=this;this._trackIdToObservations.forEach((function(t,r){0===t.size&&e._trackIdToObservations.delete(r)}))},e}();t.default=i}).apply(null,n))||(e.exports=o)},nsnX:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27"),r("L924")],void 0===(o=(function(e,t,r,n,o,i){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.value=null,t.expression=null,t}var n;return r.__extends(t,e),n=t,t.prototype.readExpression=function(e,t){return t.value?i.convertTemplatedStringToArcade(t.value):e},t.prototype.writeExpression=function(e,t,r){null!=this.value&&(e=i.convertTemplatedStringToArcade(this.value)),t[r]=e},t.prototype.clone=function(){return new n({value:this.value,expression:this.expression})},r.__decorate([o.property({json:{read:!1,write:!1}})],t.prototype,"value",void 0),r.__decorate([o.property({type:String,json:{write:{allowNull:!0}}})],t.prototype,"expression",void 0),r.__decorate([o.reader("expression",["expression","value"])],t.prototype,"readExpression",null),r.__decorate([o.writer("expression")],t.prototype,"writeExpression",null),n=r.__decorate([o.subclass("esri.layers.support.LabelExpressionInfo")],t)}(n.JSONSupport)}).apply(null,n))||(e.exports=o)}}]);