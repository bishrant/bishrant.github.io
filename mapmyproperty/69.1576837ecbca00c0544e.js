(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/mixins/ArcGISService":"2fnV","arcgis-js-api/layers/mixins/ArcGISService":"2fnV","arcgis-js-api/layers/support/LabelClass":"5WBt","esri/layers/support/LabelClass":"5WBt","esri/views/2d/layers/features/controllers/StreamController":"A4oT","arcgis-js-api/layers/support/layerSourceUtils":"BZGX","esri/layers/support/layerSourceUtils":"BZGX","esri/layers/support/labelUtils":"L924","esri/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/layers/mixins/PortalLayer":"QJ8R","arcgis-js-api/layers/mixins/RefreshableLayer":"WaJo","esri/layers/mixins/RefreshableLayer":"WaJo","esri/views/2d/layers/features/controllers/support/DispatchQueue":"Wuf+","esri/layers/graphics/sources/connections/StreamConnection":"aROD","esri/layers/graphics/sources/connections/GeoEventConnection":"gSUo","esri/layers/graphics/data/StreamStore":"m/iQ","esri/layers/support/LabelExpressionInfo":"nsnX"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[69,25,44,104,105,106,107,108,109,115,116],{"2fnV":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("qsST"),r("Vx27"),r("8CIp")],void 0===(i=(function(e,t,r,n,i,o,s){Object.defineProperty(t,"__esModule",{value:!0});var a=i.getLogger("esri.layers.mixins.ArcGISService");t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=s.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",s.sanitizeUrl(e,a))},enumerable:!0,configurable:!0}),n([o.property({dependsOn:["url"]})],t.prototype,"title",null),n([o.property({type:String})],t.prototype,"url",null),n([o.subclass("esri.layers.mixins.ArcGISService")],t)}(o.declared(e))}}).apply(null,n))||(e.exports=i)},"5WBt":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Q2wQ"),r("HZ3d"),r("+AWJ"),r("ImIS"),r("ycL1"),r("rg9i"),r("Vx27"),r("nsnX"),r("L924"),r("5Lc7"),r("dXKx"),r("HqJa")],void 0===(i=(function(e,t,r,n,i,o,s,a,u,l,c,p,d,h,f,y){function v(e){return!e||"service"!==e.origin&&(!e.layer||!h.isOfType(e.layer,"map-image"))}function b(e){if(!e)return null;var t=g.exec(e);return t&&(t[1]||t[3])||null}var m=new a.default({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0}),_=/^\s*\{([^}]+)\}\s*$/i,g=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]))\s*$/i;return function(e){function t(t){var r=e.call(this,t)||this;return r.name=null,r.labelExpression=null,r.labelExpressionInfo=null,r.labelPlacement=null,r.maxScale=0,r.minScale=0,r.symbol=f.defaultTextSymbol2D,r.useCodedValues=void 0,r.where=null,r}var i;return n(t,e),i=t,t.evaluateWhere=function(e,t){var r=function(e,t,r){switch(t){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1};try{if(null==e)return!0;var n=e.split(" ");if(3===n.length)return r(t[n[0]],n[1],n[2]);if(7===n.length){var i=r(t[n[0]],n[1],n[2]),o=n[3],s=r(t[n[4]],n[5],n[6]);switch(o){case"AND":return i&&s;case"OR":return i||s}}return!1}catch(t){console.log("Error.: can't parse = "+e)}},t.prototype.readLabelExpression=function(e,t){var r=t.labelExpressionInfo;if(!r||!r.value&&!r.expression)return e},t.prototype.writeLabelExpression=function(e,t,r,n){if(this.labelExpressionInfo&&v(n))if(null!=this.labelExpressionInfo.value)e=function(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){var i=b(this.labelExpressionInfo.expression);i&&(e="["+i+"]")}null!=e&&(t[r]=e)},t.prototype.writeLabelExpressionInfo=function(e,t,r,n){if(null==e&&null!=this.labelExpression&&v(n))e=new p({expression:this.getLabelExpressionArcade()});else if(!e)return;var i=e.toJSON(n);i.expression&&(t[r]=i)},t.prototype.writeMaxScale=function(e,t){(e||this.minScale)&&(t.maxScale=e)},t.prototype.writeMinScale=function(e,t){(e||this.maxScale)&&(t.minScale=e)},t.prototype.getLabelExpression=function(){var e={expression:"",type:"none"};return this.labelExpressionInfo?this.labelExpressionInfo.value?(e.expression=this.labelExpressionInfo.value,e.type="conventional"):this.labelExpressionInfo.expression&&(e.expression=this.labelExpressionInfo.expression,e.type="arcade"):null!=this.labelExpression&&(e.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(this.labelExpression),e.type="conventional"),e},t.prototype.getLabelExpressionArcade=function(){var e=this.getLabelExpression();if(!e)return null;switch(e.type){case"conventional":return d.convertTemplatedStringToArcade(e.expression);case"arcade":return e.expression}return null},t.prototype.getLabelExpressionSingleField=function(){var e=this.getLabelExpression();if(!e)return null;switch(e.type){case"conventional":return function(e){var t=e.match(_);return t&&t[1].trim()||null}(e.expression);case"arcade":return b(e.expression)}return null},t.prototype.clone=function(){return new i({labelExpression:this.labelExpression,labelExpressionInfo:l.clone(this.labelExpressionInfo),labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,symbol:l.clone(this.symbol),where:this.where,useCodedValues:this.useCodedValues})},r([c.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),r([c.property({type:String,json:{write:{allowNull:!0}}})],t.prototype,"labelExpression",void 0),r([c.reader("labelExpression")],t.prototype,"readLabelExpression",null),r([c.writer("labelExpression")],t.prototype,"writeLabelExpression",null),r([c.property({type:p,json:{write:{overridePolicy:function(e,t,r){return v(r)?{allowNull:!0}:{enabled:!1}}}}})],t.prototype,"labelExpressionInfo",void 0),r([c.writer("labelExpressionInfo")],t.prototype,"writeLabelExpressionInfo",null),r([c.property({type:m.apiValues,json:{type:m.jsonValues,read:m.read,write:m.write}})],t.prototype,"labelPlacement",void 0),r([c.property({type:Number})],t.prototype,"maxScale",void 0),r([c.writer("maxScale")],t.prototype,"writeMaxScale",null),r([c.property({type:Number})],t.prototype,"minScale",void 0),r([c.writer("minScale")],t.prototype,"writeMinScale",null),r([c.property({types:s.symbolTypesLabel,json:{origins:{"web-scene":{types:s.symbolTypesLabel3D,read:y.read,write:y.writeTarget,default:null}},read:y.read,write:y.writeTarget,default:null}})],t.prototype,"symbol",void 0),r([c.property({type:Boolean,json:{write:!0}})],t.prototype,"useCodedValues",void 0),r([c.property({type:String,json:{write:!0}})],t.prototype,"where",void 0),i=r([c.subclass("esri.layers.support.LabelClass")],t)}(c.declared(u.JSONSupport))}).apply(null,n))||(e.exports=i)},A4oT:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("2Atf"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("H1tY"),r("9sIV"),r("LxLY"),r("qMld"),r("Vx27"),r("+6sX"),r("ZGAQ"),r("m/iQ"),r("gSUo"),r("Btct"),r("Wuf+")],void 0===(i=(function(e,t,r,n,i,o,s,a,u,l,c,p,d,h,f,y,v,b,m){Object.defineProperty(t,"__esModule",{value:!0});var _=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="stream",t._tileDispatchMap=new Map,t._updateIntervalId=0,t}return r(t,e),t.prototype.initialize=function(){var e=this,t=this.service,r=t.objectIdField,n=t.timeInfo,i=t.maximumTrackPoints,o=t.purgeOptions;this.connection=new v.default(t.source,this.spatialReference,t.serviceFilter),this._set("store",new y.default(r,n,this.geometryInfo,i,o)),this.connection.on("feature",(function(t){return e._onFeature(t)})),this.store.events.on("update",(function(t){return e._onUpdate(t.addOrUpdated,t.removed)})),["connectionStatus","errorString"].forEach((function(t){e.watch("connection."+t,(function(r){return e.remoteClient.invoke("setProperty",{propertyName:t,value:r})}))})),this._updateIntervalId=setInterval((function(){return e.store.checkForUpdates()}),64),this._shouldPushDataReceived=this.service.enableDataRecieved},t.prototype.destroy=function(){clearInterval(this._updateIntervalId),this.connection.destroy(),this.queryEngine.destroy(),this._tileDispatchMap.forEach((function(e){return e.destroy()}))},Object.defineProperty(t.prototype,"queryEngine",{get:function(){return this._createQueryEngine(this.store)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._tempQueryEngine&&!!this._tempQueryEngine.featureStore.numFeatures||this._anyUpdatesQueued()},enumerable:!0,configurable:!0}),t.prototype.update=function(e){return s(this,void 0,void 0,(function(){var t,r,n=this;return o(this,(function(i){switch(i.label){case 0:return this.validateConfig(e),t=this.renderer.getAttributeHash(),this._set("config",e),[4,this.updatePixelBuffer()];case 1:return i.sent(),"heatmap"===this.renderer.type?[2]:t===this.renderer.getAttributeHash()?[3,3]:(r=this.queryEngine.featureStore,[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]);case 2:i.sent(),r.forEach((function(e){return n.attributeStore.setAttributeData(e.localId,e,n.geometryInfo,n.viewParams)})),i.label=3;case 3:return[4,this.attributeStore.updateFilters(this)];case 4:return i.sent(),[4,this.attributeStore.sendUpdates()];case 5:return i.sent(),[2]}}))}))},t.prototype.invalidate=function(){this._repushActiveTiles()},t.prototype.onEdits=function(){},t.prototype.queryFeatures=function(e){return this.queryEngine.executeQuery(e)},t.prototype.queryFeatureCount=function(e){return this.queryEngine.executeQueryForCount(e)},t.prototype.queryObjectIds=function(e){return this.queryEngine.executeQueryForIds(e)},t.prototype.queryExtent=function(e){return this.queryEngine.executeQueryForExtent(e)},t.prototype.queryLatestObservations=function(e){return s(this,void 0,void 0,(function(){return o(this,(function(t){if(!this.service.timeInfo.trackIdField)throw new a("mapview-no-trackIdField","queryLatestObservation can only be used with services that define a TrackIdField");return[2,this.queryEngine.executeQueryForLatestObservations(e)]}))}))},t.prototype.queryStatistics=function(){throw new a("Method not implemented.")},t.prototype.refresh=function(){},t.prototype.setViewState=function(){var e=this,t=this.viewState&&this.viewState.scale;this.inherited(arguments),t!==this.viewState.scale&&this.attributeStore.hasScaleExpr&&(this.queryEngine.featureStore.forEach((function(t){return e.attributeStore.setAttributeData(t.localId,t,e.geometryInfo,e.viewParams)})),this.attributeStore.sendUpdates())},t.prototype.onTileUpdate=function(e){var t=this,r=e.added;e.removed.forEach((function(e){return t._handleTileRemove(e)})),r.forEach((function(e){return t._handleTileAdd(e)}))},t.prototype.enableEvent=function(e){"data-received"===e.name&&(this._shouldPushDataReceived=e.value)},t.prototype._onFeature=function(e){this._shouldPushDataReceived&&this.remoteClient.invoke("emitEvent",{name:"data-received",event:{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry}});try{var t=this.geometryInfo,r=h.convertFromFeature(e,t.geometryType,t.hasZ,t.hasM,this.store.objectIdField);this.store.add(r)}catch(e){u("esri-2d-debug")&&console.debug(e)}},t.prototype._createStoreWithFeatures=function(e){if(c.isNone(e))return null;var t=this._createFeatureStore();return t.addMany(e),t},t.prototype._onUpdate=function(e,t){return s(this,void 0,void 0,(function(){var r,n,i=this;return o(this,(function(o){switch(o.label){case 0:return c.isSome(e)&&e.forEach((function(e){return i.onFeatureAdd(e)})),r=this._createStoreWithFeatures(e),n=this._createStoreWithFeatures(t),this.attributeStore.sendUpdates(),this.processor.supportsTileUpdates?[4,this._updateActiveTiles(r,n)]:[3,2];case 1:return o.sent(),[3,3];case 2:this._repushActiveTiles(),o.label=3;case 3:return c.isSome(t)&&t.forEach((function(e){return i.onFeatureRemove(e)})),[2]}}))}))},t.prototype._handleTileAdd=function(e){if(this._tileDispatchMap.has(e.id))(t=this._tileDispatchMap.get(e.id)).up();else{var t=new m.default;this._tileDispatchMap.set(e.id,t)}this._queryTileFeatures(e,!0,this.queryEngine)},t.prototype._handleTileRemove=function(e){this._tileDispatchMap.get(e.id).destroy(),this._tileDispatchMap.delete(e.id)},t.prototype._anyUpdatesQueued=function(){return l.valuesOfMap(this._tileDispatchMap).some((function(e){return e.hasAction()}))},t.prototype._updateActiveTiles=function(e,t){return s(this,void 0,void 0,(function(){var r,n,i=this;return o(this,(function(o){switch(o.label){case 0:return r=c.applySome(e,(function(e){return i._createQueryEngine(e)})),n=c.applySome(t,(function(e){return i._createQueryEngine(e)})),[4,p.all(this.tileStore.tiles.map((function(e){return i._queryTileFeatures(e,!1,r,n)})))];case 1:return o.sent(),[2]}}))}))},t.prototype._repushActiveTiles=function(){for(var e=0,t=this.tileStore.tiles;e<t.length;e++)this._queryTileFeatures(t[e],!0,this.queryEngine)},t.prototype._queryTileFeatures=function(e,t,r,n){return s(this,void 0,void 0,(function(){var i,a,u,l,d,h,y,v,b=this;return o(this,(function(m){switch(m.label){case 0:return i={hasZ:!1,hasM:!1,transform:{originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]}},u={returnCentroid:(a=this.queryInfo).returnCentroid,returnGeometry:a.returnGeometry,pixelBuffer:this._pixelBuffer,returnOutline:this.returnOutline},l=this._tileDispatchMap.get(e.id),[4,c.applySome(r,(function(t){return t.featureStore.executeTileQuery(e,b.spatialReference,u)}))];case 1:return d=m.sent(),h=c.mapOr(d,[],(function(e){return e.features})),y=c.mapOr(n,[],(function(t){return f.executeTileQueryForIds(t,e,u)})).map((function(e){return b.attributeStore.getLocalId(e)})),v=p.createResolver(),l.enqueue((function(r){return s(b,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,this.processor.onTileData(e,{addOrUpdate:h,remove:y,clear:t,transformParams:i},{signal:r})];case 1:return n.sent(),v.resolve(),[2]}}))}))})),[2,v.promise]}}))}))},n([d.property()],t.prototype,"connection",void 0),n([d.property()],t.prototype,"service",void 0),n([d.property({readOnly:!0})],t.prototype,"store",void 0),n([d.property({readOnly:!0,dependsOn:["store","service","config"]})],t.prototype,"queryEngine",null),n([d.property()],t.prototype,"updating",null),n([d.subclass("esri.views.2d.layers.features.controllers.StreamController")],t)}(d.declared(b.default));t.default=_}).apply(null,n))||(e.exports=i)},BZGX:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("ImIS"),r("rg9i")],void 0===(i=(function(e,t,r,n){function i(e){return null!=e&&e.hasOwnProperty("mapLayerId")}function o(e){return null!=e&&e.hasOwnProperty("dataSource")}Object.defineProperty(t,"__esModule",{value:!0}),t.MAPLAYER="map-layer",t.DATALAYER="data-layer";var s=new r.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),a=new r.default({mapLayer:t.MAPLAYER,dataLayer:t.DATALAYER}),u=new r.default({joinTable:"join-table",queryTable:"query-table"}),l=new r.default({esriLeftOuterJoin:"left-outer-join",esriLeftInnerJoin:"left-inner-join"});t.isMapLayerSource=i,t.isDataLayerSource=o,t.castSource=function e(r){return r?(i(r)&&(r.type=t.MAPLAYER),o(r)&&(r.type=t.DATALAYER,r.dataSource.type||function(t){t.workspaceId?t.type=t.gdbVersion?"table":t.query||t.oidFields?"query-table":"raster":t.leftTableKey&&t.rightTableKey&&t.leftTableSource&&t.rightTableSource&&(t.type="join-table",t.leftTableSource=e(t.leftTableSource),t.rightTableSource=e(t.rightTableSource))}(r.dataSource)),r):r},t.sourceToJSON=function e(r){var i={};return r.type===t.MAPLAYER?(i.mapLayerId=r.mapLayerId,r.gdbVersion&&(i.gdbVersion=r.gdbVersion)):r.type===t.DATALAYER&&(r.fields&&(i.fields=r.fields),i.dataSource=function(t){var r;switch(t.type){case"table":r={dataSourceName:t.dataSourceName,workspaceId:t.workspaceId,gdbVersion:t.gdbVersion};break;case"query-table":r={geometryType:s.toJSON(t.geometryType),workspaceId:t.workspaceId,query:t.query,oidFields:t.oidFields,spatialReference:t.spatialReference};break;case"join-table":r={leftTableSource:e(t.leftTableSource),rightTableSource:e(t.rightTableSource),leftTableKey:t.leftTableKey,rightTableKey:t.rightTableKey,joinType:l.toJSON(t.joinType)};break;case"raster":r={workspaceId:t.workspaceId,dataSourceName:t.dataSourceName}}return r.type=u.toJSON(t.type),n.fixJson(r)}(r.dataSource)),i.type=a.toJSON(r.type),n.fixJson(i)},t.sourceFromJSON=function e(r){var i={};return a.fromJSON(r.type)===t.MAPLAYER?(i.mapLayerId=r.mapLayerId,r.gdbVersion&&(i.gdbVersion=r.gdbVersion)):a.fromJSON(r.type)===t.DATALAYER&&(r.fields&&(i.fields=r.fields),i.dataSource=function(t){var r;switch(t.type){case"table":r={dataSourceName:t.dataSourceName,workspaceId:t.workspaceId,gdbVersion:t.gdbVersion};break;case"queryTable":r={geometryType:s.fromJSON(t.geometryType),workspaceId:t.workspaceId,query:t.query,oidFields:t.oidFields,spatialReference:t.spatialReference};break;case"joinTable":r={leftTableSource:e(t.leftTableSource),rightTableSource:e(t.rightTableSource),leftTableKey:t.leftTableKey,rightTableKey:t.rightTableKey,joinType:l.fromJSON(t.joinType)};break;case"raster":r={workspaceId:t.workspaceId,dataSourceName:t.dataSourceName}}return r.type=u.fromJSON(t.type),n.fixJson(r)}(r.dataSource)),i.type=a.fromJSON(r.type),n.fixJson(i)}}).apply(null,n))||(e.exports=i)},L924:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("nRUF")],void 0===(i=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n="__begin__",i="__end__",o=new RegExp(n,"ig"),s=new RegExp(i,"ig"),a=new RegExp("^"+n,"i"),u=new RegExp(i+"$","i");t.convertTemplatedStringToArcade=function(e){var t;return e?(t=r.replace(e,(function(e){return n+'$feature["'+e+'"]'+i})),t=a.test(t)?t.replace(a,""):'"'+t,t=(t=u.test(t)?t.replace(u,""):t+'"').replace(o,'" + ').replace(s,' + "')):t='""',t}}).apply(null,n))||(e.exports=i)},QJ8R:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("qsST"),r("qMld"),r("jfWY"),r("Vx27"),r("Qwus"),r("QmTF")],void 0===(i=(function(e,t,n,i,o,s,a,u,l,c,p,d,h){Object.defineProperty(t,"__esModule",{value:!0});var f=u.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new h({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return s(this,void 0,void 0,(function(){var n,i;return o(this,(function(o){switch(o.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];o.label=1;case 1:return o.trys.push([1,4,,5]),[4,l.create((function(e){return Promise.all([r.e(0),r.e(98)]).then((function(){var t=[r("6hwa")];e.apply(null,t)}).bind(this)).catch(r.oe)}))];case 2:return n=o.sent(),l.throwIfAborted(t),[4,n.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,o.sent()];case 4:throw i=o.sent(),f.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+i),i;case 5:return[2]}}))}))},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,n=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||d.getDefault());return r&&n&&!c.hasSamePortal(n.restUrl,r.restUrl)?(t.messages&&t.messages.push(new a("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},i([p.property({type:h})],t.prototype,"portalItem",null),i([p.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),i([p.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),i([p.subclass("esri.layers.mixins.PortalLayer")],t)}(p.declared(e))}}).apply(null,n))||(e.exports=i)},WaJo:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Vx27")],void 0===(i=(function(e,t,r,n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.RefreshableLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshInterval=0,t}return r(t,e),t.prototype.refresh=function(){this.emit("refresh")},n([i.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),n([i.subclass("esri.layers.mixins.RefreshableLayer")],t)}(i.declared(e))}}).apply(null,n))||(e.exports=i)},"Wuf+":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("Q2wQ"),r("HZ3d"),r("qMld")],void 0===(i=(function(e,t,r,n,i){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this._action=null,this._queue=[],this._abortController=i.createAbortController(),this._refs=1}return e.prototype.up=function(){this._refs++},e.prototype.down=function(){return 0==--this._refs},e.prototype.clear=function(){this._abortController.abort(),this._abortController=i.createAbortController()},e.prototype.destroy=function(){this._queue.length=0,this._action&&(this._action=null)},e.prototype.enqueue=function(e){this._action?this._queue.push(e):this._setAction(e)},e.prototype.flush=function(){return n(this,void 0,void 0,(function(){var e,t,n;return r(this,(function(r){return(e=this._action)?(t=this._abortController.signal,n=this._queue.reduce((function(e,r){return e.then((function(){return r(t)}))}),e),this._action=n.then(this._handleNext.bind(this)),this._queue.length=0,[2,n]):[2]}))}))},e.prototype.hasAction=function(){return!!this._action},e.prototype._setAction=function(e){this._action=e(this._abortController.signal).then(this._handleNext.bind(this))},e.prototype._handleNext=function(){this._queue.length?this._setAction(this._queue.shift()):this._action=null},e}();t.default=o}).apply(null,n))||(e.exports=i)},aROD:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("BcWh"),r("7MDj"),r("Vx27")],void 0===(i=(function(e,t,r,n,i,o,s){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.onFeature=function(e){this.emit("feature",e)},r([s.subclass("esri.layers.graphics.sources.connections.StreamConnection")],t)}(s.declared(i.EventedMixin(o.HandleOwner)));t.default=a}).apply(null,n))||(e.exports=i)},gSUo:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("Q2wQ"),r("qKT0"),r("HZ3d"),r("9opi"),r("TMur"),r("zp6E"),r("ma1f"),r("qsST"),r("LxLY"),r("qMld"),r("Vx27"),r("Zvuv"),r("aROD"),r("B16N"),r("IpeC")],void 0===(i=(function(e,t,r,n,i,o,s,a,u,l,c,p,d,h,f,y,v){Object.defineProperty(t,"__esModule",{value:!0});var b,m=l.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection");!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(b=t.ReadyState||(t.ReadyState={}));var _=function(e){function t(t,r,n,i,o,s){void 0===i&&(i=5),void 0===o&&(o=3);var a=e.call(this)||this;return a.errorString=null,a._source=t,a._spatialReference=r,a._filter=n,a._outFields=s,a._maxQueryDepth=i,a._maxRecordCountFactor=o,a._open(),a}return o(t,e),t.prototype._open=function(){return i(this,void 0,void 0,(function(){var e,t;return r(this,(function(r){switch(r.label){case 0:return[4,this._fetchServiceDefinition(this._source)];case 1:return(e=r.sent()).timeInfo.trackIdField||m.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The maximumTrackPoints property will have no effect."),[4,this._fetchWebSocketUrl(e.streamUrls,this._spatialReference)];case 2:return t=r.sent(),this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),[4,this._buddyServicesQuery];case 3:return r.sent(),[4,this._tryCreateWebSocket(t)];case 4:return r.sent(),this._setFilter(this._filter,this._outFields),[2]}}))}))},t.prototype.destroy=function(){c.isSome(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null},Object.defineProperty(t.prototype,"connectionStatus",{get:function(){if(c.isNone(this._websocket))return"disconnected";switch(this._websocket.readyState){case b.CONNECTING:case b.OPEN:return"connected";case b.CLOSING:case b.CLOSED:return"disconnected"}},enumerable:!0,configurable:!0}),t.prototype._tryCreateWebSocket=function(e,t){return void 0===t&&(t=1e3),i(this,void 0,void 0,(function(){var n,i;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,4]),n=this,[4,this._createWebSocket(e)];case 1:return n._websocket=r.sent(),this.notifyChange("connectionStatus"),[3,4];case 2:return i=r.sent(),m.error(new u("geoevent-connection","Failed to connect. Attempting to reconnect in "+t/1e3+"s",i)),[4,p.after(t)];case 3:return r.sent(),[2,this._tryCreateWebSocket(e,1.5*t)];case 4:return[2]}}))}))},t.prototype._createWebSocket=function(e){var t=this,r=new WebSocket(e),n=p.create((function(e,t){r.onopen=function(){return e(r)},r.onclose=function(e){return t(e)}}));return n.then((function(){r.onclose=function(e){return t._onClose(e)},r.onerror=function(e){return t._onError(e)},r.onmessage=function(e){return t._onMessage(e)}})),n},t.prototype._onMessage=function(e){var t;try{t=this._enrich(JSON.parse(e.data))}catch(e){return void m.error(new u("geoevent-connection","Failed to parse message",e))}this.onFeature(t)},t.prototype._onError=function(e){var t="Encountered an error over WebSocket connection";this._set("errorString",t),m.error("geoevent-connection",t)},t.prototype._onClose=function(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&m.error("geoevent-connection","WebSocket closed unexpectedly with error code "+e.code),this._open()},t.prototype._fetchServiceDefinition=function(e){return i(this,void 0,void 0,(function(){var t,n;return r(this,(function(r){switch(r.label){case 0:return[4,a(e,{query:{f:"json"},responseType:"json"})];case 1:return t=r.sent(),this._serviceDefinition=n=t.data,[2,n]}}))}))},t.prototype._fetchWebSocketUrl=function(e,t){return i(this,void 0,void 0,(function(){var n,i;return r(this,(function(r){return i=(n=e[0]).token,[2,this._inferWebSocketBaseUrl(n.urls)+"/subscribe?outSR="+t.wkid+(i?"&token="+i:"")]}))}))},t.prototype._inferWebSocketBaseUrl=function(e){if(1===e.length)return e[0];for(var t=0,r=e;t<r.length;t++){var n=r[t];if(-1!==n.indexOf("wss"))return n}return m.error(new u("geoevent-connection","Unable to infer WebSocket url",e)),null},t.prototype._setFilter=function(e,t){return i(this,void 0,void 0,(function(){var n,i,o,s,a,l,d=this;return r(this,(function(r){return n=this._websocket,this._filter=e,this._outFields=t,c.isNone(n)||c.isNone(e)&&c.isNone(t)?[2]:(i=JSON.stringify({filter:this._serializeFilter(e,t)}),o=!1,s=p.createResolver(),a=function(){o||(d._websocket===n&&m.error(new u("geoevent-connection","Server timed out when setting filter")),s.reject())},l=function(e){var t=JSON.parse(e.data);t.filter&&(t.error&&(m.error(new u("geoevent-connection","Failed to set service filter",t.error)),d._set("errorString","Could not set service filter - "+t.error),s.reject(t.error)),n.onmessage=d._onMessage.bind(d),o=!0,s.resolve())},n.onmessage=l,n.send(i),setTimeout(a,1e4),[2,s.promise])}))}))},t.prototype._serializeFilter=function(e,t){var r={};if(c.isNone(e)&&c.isNone(t))return r;if(c.isSome(e)&&e.geometry)try{var n=s.fromJSON(e.geometry);if("extent"!==n.type)throw new u("Expected extent but found type "+n.type);r.geometry=JSON.stringify(n.shiftCentralMeridian())}catch(e){m.error(new u("geoevent-connection","Encountered an error when setting connection geometryDefinition",e))}return c.isSome(e)&&e.where&&(r.where=e.where),c.isSome(t)&&(r.outFields=t.join(",")),r},t.prototype._enrich=function(e){if(!this._relatedFeatures)return e;var t=e.attributes[this._serviceDefinition.relatedFeatures.joinField];if(!this._relatedFeatures.has(t))return m.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;var r=this._relatedFeatures.get(t),n=r.attributes,i=r.geometry;for(var o in n)e.attributes[o]=n[o];return i&&(e.geometry=i),e.geometry||e.centroid||m.error(new u("geoevent-connection","Found malformed feature - no geometry found",e)),e},t.prototype._queryBuddyServices=function(){return i(this,void 0,void 0,(function(){var e,t,n,i,o,s,a,l;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),t=(e=this._serviceDefinition).keepLatestArchive,n=this._queryRelatedFeatures(e.relatedFeatures),i=this._queryArchive(t),[4,n];case 1:return r.sent(),[4,i];case 2:if(!(o=r.sent()))return[2];for(s=0,a=o.features;s<a.length;s++)this.onFeature(this._enrich(a[s]));return[3,4];case 3:return l=r.sent(),m.error(new u("geoevent-connection","Encountered an error when querying buddy services",{error:l})),[3,4];case 4:return[2]}}))}))},t.prototype._queryRelatedFeatures=function(e){return i(this,void 0,void 0,(function(){var t;return r(this,(function(r){switch(r.label){case 0:return e?[4,this._queryBuddy(e.featuresUrl)]:[2];case 1:return t=r.sent(),this._addRelatedFeatures(t),[2]}}))}))},t.prototype._queryArchive=function(e){return i(this,void 0,void 0,(function(){return r(this,(function(t){return e?[2,this._queryBuddy(e.featuresUrl)]:[2,void 0]}))}))},t.prototype._queryBuddy=function(e){return i(this,void 0,void 0,(function(){var t,n,i,o,s,a,u,l,p,d;return r(this,(function(r){switch(r.label){case 0:return[4,(t=new h({url:e})).load()];case 1:return n=r.sent().capabilities,o=n.query.supportsPagination,s=n.query.supportsCentroid,a=this._maxRecordCountFactor,u=t.capabilities.query.maxRecordCount,l=(i=n.query.supportsMaxRecordCountFactor)?u*a:u,(p=new v).outFields=c.unwrapOr(this._outFields,["*"]),p.where=c.unwrapOr(c.get(this._filter,"where"),"1=1"),p.returnGeometry=!0,p.returnExceededLimitFeatures=!0,p.outSpatialReference=this._spatialReference,s&&(p.returnCentroid=!0),i&&(p.maxRecordCountFactor=a),o?(p.num=l,t.destroy(),[2,this._queryPages(e,p)]):[4,y.executeQuery(e,p)];case 2:return d=r.sent(),t.destroy(),[2,d.data]}}))}))},t.prototype._queryPages=function(e,t,n,o){return void 0===n&&(n=[]),void 0===o&&(o=0),i(this,void 0,void 0,(function(){var i;return r(this,(function(r){switch(r.label){case 0:return t.start=o*t.num,[4,y.executeQuery(e,t)];case 1:return(i=r.sent().data).exceededTransferLimit&&o<this._maxQueryDepth?(i.features.forEach((function(e){return n.push(e)})),[2,this._queryPages(e,t,n,o+1)]):(n.forEach((function(e){return i.features.push(e)})),[2,i])}}))}))},t.prototype._addRelatedFeatures=function(e){for(var t=new Map,r=this._serviceDefinition.relatedFeatures.joinField,n=0,i=e.features;n<i.length;n++){var o=i[n];t.set(o.attributes[r],o)}this._relatedFeatures=t},n([d.property()],t.prototype,"connectionStatus",null),n([d.property()],t.prototype,"errorString",void 0),n([d.subclass("esri.layers.graphics.sources.connections.GeoEventConnection")],t)}(d.declared(f.default));t.default=_}).apply(null,n))||(e.exports=i)},"m/iQ":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("qKT0"),r("xhoE"),r("zIqJ"),r("LxLY"),r("rfv1")],void 0===(i=(function(e,t,r,n,i,o,s){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_STREAM_ID_FIELD="__esri_stream_id__";var a=function(e){function r(r,n,i,s,a,u){void 0===u&&(u=128);var l=e.call(this,i)||this;return l._trackIdToObservations=new Map,l._idCounter=0,l._lastPurge=Date.now(),l._addOrUpdated=new Map,l._removed=[],l._maxAge=0,l._timeInfo=n,l._maximumTrackCount=s,l._purgeOptions=a,l.purgeInterval=u,l.objectIdField=o.unwrapOr(r,t.DEFAULT_STREAM_ID_FIELD),l._useGeneratedIds=l.objectIdField===t.DEFAULT_STREAM_ID_FIELD,l}return n(r,e),r.prototype.add=function(t){if(this._useGeneratedIds&&(t.attributes[this.objectIdField]=this._nextId(),t.objectId=t.attributes[this.objectIdField]),e.prototype.add.call(this,t),this._addOrUpdated.set(t.objectId,t),this._maxAge=Math.max(this._maxAge,t.attributes[this._timeInfo.startTimeField]),this._timeInfo.trackIdField){var r=t.attributes[this._timeInfo.trackIdField];this._trackIdToObservations.has(r)||this._trackIdToObservations.set(r,new i.default(this._maximumTrackCount));var n=this._trackIdToObservations.get(r).enqueue(t.attributes[this.objectIdField]);if(o.isSome(n)){var s=this.removeById(n);o.isSome(s)&&(this._addOrUpdated.has(n)?this._addOrUpdated.delete(n):this._removed.push(s))}}},r.prototype.checkForUpdates=function(){var e=this._getToAdd(),t=this._getToRemove(),r=Date.now();r-this._lastPurge>=this.purgeInterval&&(this._purge(),this._lastPurge=r),(e||t)&&this.events.emit("update",{addOrUpdated:e,removed:t})},r.prototype._getToAdd=function(){if(!this._addOrUpdated.size)return null;var e=new Array(this._addOrUpdated.size),t=0;return this._addOrUpdated.forEach((function(r){return e[t++]=r})),this._addOrUpdated.clear(),e},r.prototype._getToRemove=function(){var e=this._removed;return this._removed.length?(this._removed=[],e):null},r.prototype._nextId=function(){var e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e},r.prototype._purge=function(){var e=this._purgeOptions;o.isSome(e)&&(this._purgeSomeByDisplayCount(e),this._purgeByAge(e))},r.prototype._purgeSomeByDisplayCount=function(e){var t=this;if(e.displayCount){var r=this.numFeatures;r>e.displayCount&&this._trackIdToObservations.forEach((function(n){if(r>e.displayCount&&n.size){var i=t.removeById(o.unwrap(n.dequeue()));o.isSome(i)&&t._removed.push(i),r--}}))}},r.prototype._purgeByAge=function(e){var t=this;if(e.age){var r=this._maxAge-60*e.age*1e3,n=this._timeInfo.startTimeField;this.forEach((function(e){e.attributes[n]<r&&(t.removeById(e.objectId),t._removed.push(e))}))}},r}(s.default);t.default=a}).apply(null,n))||(e.exports=i)},nsnX:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ycL1"),r("Vx27"),r("L924")],void 0===(i=(function(e,t,r,n,i,o,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.value=null,t.expression=null,t}var i;return r(t,e),i=t,t.prototype.readExpression=function(e,t){return t.value?s.convertTemplatedStringToArcade(t.value):e},t.prototype.writeExpression=function(e,t,r){null!=this.value&&(e=s.convertTemplatedStringToArcade(this.value)),t[r]=e},t.prototype.clone=function(){return new i({value:this.value,expression:this.expression})},n([o.property({json:{read:!1,write:!1}})],t.prototype,"value",void 0),n([o.property({type:String,json:{write:{allowNull:!0}}})],t.prototype,"expression",void 0),n([o.reader("expression",["expression","value"])],t.prototype,"readExpression",null),n([o.writer("expression")],t.prototype,"writeExpression",null),i=n([o.subclass("esri.layers.support.LabelExpressionInfo")],t)}(o.declared(i.JSONSupport))}).apply(null,n))||(e.exports=i)}}]);