(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/renderers/support/clickToleranceUtils":"/E+R","arcgis-js-api/views/layers/support/Path":"20TT","arcgis-js-api/views/2d/layers/LayerView2D":"6i4F","arcgis-js-api/views/layers/support/ClipRect":"7MXx","arcgis-js-api/views/layers/support/popupUtils":"I6zq","esri/layers/support/sublayerUtils":"IlDW","arcgis-js-api/views/support/drapedUtils":"NbdF","arcgis-js-api/views/layers/LayerView":"WsO6","arcgis-js-api/views/layers/support/ClipArea":"ZMIQ","arcgis-js-api/views/2d/layers/MapImageLayerView2D":"bT5A","arcgis-js-api/views/layers/support/Geometry":"ts8o","arcgis-js-api/views/layers/MapImageLayerView":"xNtg"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"/E+R":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,i=0;i<e.length;i++){var n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}(e.stops):t}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=function(e){var t=e&&e.renderer,n="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return n;var o="visualVariables"in t?function(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.minSize;return(i(t.maxSize,e)+i(r,e))/2})),n=0,o=r.length;if(0===o)return e;for(var a=0;a<o;a++)n+=r[a];var s=Math.floor(n/o);return Math.max(s,e)}(n,t.visualVariables):n;if("simple"===t.type)return r(o,t.symbol);if("unique-value"===t.type){var a=o;return t.uniqueValueInfos.forEach((function(e){a=r(a,e.symbol)})),a}if("class-breaks"===t.type){var s=o;return t.classBreakInfos.forEach((function(e){s=r(s,e.symbol)})),s}return o}}).apply(null,i))||(e.exports=n)},"20TT":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return i(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r([n.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r([n.subclass("esri.views.layers.support.Path")],t)}(n.declared(o))}).apply(null,i))||(e.exports=n)},"6i4F":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,u,l,d){Object.defineProperty(t,"__esModule",{value:!0});var c=n.ofType({key:"type",base:p,typeMap:{rect:u,path:d,geometry:l}});t.LayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new c,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.when((function(){e.requestUpdate()}),(function(){}));var t=function(){return e.notifyChange("rendering")};this.handles.add([a.init(this,"suspended",(function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)}),!0),a.init(this,["fullOpacity","container"],(function(){e.container&&(e.container.opacity=e.fullOpacity)}),!0),a.on(this,"container","post-render",t),a.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,a=!n;!o&&e<=i&&(o=!0),!a&&e>=n&&(a=!0),t=o&&a}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},i([s.property({type:c,set:function(e){var t=o.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),i([s.property()],t.prototype,"moving",void 0),i([s.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),i([s.property()],t.prototype,"attached",void 0),i([s.property()],t.prototype,"container",void 0),i([s.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),i([s.property({readOnly:!0})],t.prototype,"updateParameters",void 0),i([s.property()],t.prototype,"updateRequested",void 0),i([s.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),i([s.property()],t.prototype,"view",void 0),i([s.subclass("esri.views.2d.layers.LayerView2D")],t)}(s.declared(e))}}).apply(null,i))||(e.exports=n)},"7MXx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var o;return i(t,e),o=t,t.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),o=r([n.subclass("esri.views.layers.support.ClipRect")],t)}(n.declared(o))}).apply(null,i))||(e.exports=n)},I6zq:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("Q2wQ"),r("HZ3d"),r("ll/V"),r("LxLY"),r("k7g7")],void 0===(n=(function(e,t,r,i,n,o,a){Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=function(e,t){return void 0===t&&(t=e.popupTemplate),i(this,void 0,void 0,(function(){var i,s,p,u,l,d,c,y,f,h,v,g;return r(this,(function(r){switch(r.label){case 0:return o.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return i=r.sent(),s=t.lastEditInfoEnabled,p=e.objectIdField,u=e.typeIdField,l=e.globalIdField,d=e.relationships,n.includes(i,"*")?[2,["*"]]:(y=a.fixFields,f=[e.fields],v=(h=i).concat,(g=s)?[4,a.getFeatureEditFields(e)]:[3,3]);case 2:g=r.sent(),r.label=3;case 3:return c=y.apply(void 0,f.concat([v.apply(h,[g||null])])),u&&c.push(u),c&&p&&a.hasField(e.fields,p)&&-1===c.indexOf(p)&&c.push(p),c&&l&&a.hasField(e.fields,l)&&-1===c.indexOf(l)&&c.push(l),d&&d.forEach((function(t){var r=t.keyField;c&&r&&a.hasField(e.fields,r)&&-1===c.indexOf(r)&&c.push(r)})),[2,c]}}))}))},t.getFetchPopupTemplate=function(e,t){return e.popupTemplate?e.popupTemplate:o.isSome(t)&&t.defaultPopupTemplateEnabled&&o.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}).apply(null,i))||(e.exports=n)},IlDW:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("BZGX")],void 0===(n=(function(e,t,r){function i(e,t){if(!e||!e.length)return!0;var r=t.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).map((function(e){return e.id})).toArray();if(e.length>r.length)return!1;for(var i=0,n=r.length,o=0,a=e;o<a.length;o++){for(var s=a[o].id;i<n&&r[i]!==s;)i++;if(i>=n)return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.shouldWriteSublayerStructure=function(e,t,r){return t.flatten((function(e){return e.sublayers})).length!==e.length||!!e.some((function(e){return e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r}))||!i(e,t)},t.isExportDynamic=function(e,t,n){return!!e.some((function(e){var t=e.source;return!(!t||t.type===r.MAPLAYER&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===n.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!i(e,t)},t.isSublayerOverhaul=function(e){return!!e&&e.some((function(e){return null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale}))}}).apply(null,i))||(e.exports=n)},NbdF:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("TMur"),r("LxLY"),r("8uEs"),r("/E+R")],void 0===(n=(function(e,t,r,i,n,o){function a(e,t,i,o){var a;if(void 0===o&&(o=new r.Extent),"2d"===i.type)a=t*i.resolution;else if("3d"===i.type){var s=i.basemapTerrain,p=s.overlayManager,u=p?p.overlayPixelSizeInMapUnits(e):1;a=s&&!s.spatialReference.equals(i.spatialReference)?n.getMetersPerUnitForSR(s.spatialReference)/n.getMetersPerUnitForSR(i.spatialReference):t*u}var l=e.x-a,d=e.y-a,c=e.x+a,y=e.y+a,f=i.spatialReference;return o.xmin=Math.min(l,c),o.ymin=Math.min(d,y),o.xmax=Math.max(l,c),o.ymax=Math.max(d,y),o.spatialReference=f,o}Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=a,t.intersectsDrapedGeometry=function(e,t,r){var n=r.toMap(e);return i.isNone(n)?null:a(n,o.calculateTolerance(),r,s).intersects(t)?n:null};var s=new r.Extent}).apply(null,i))||(e.exports=n)},WsO6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,u,l){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw p.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspendInfo",{get:function(){return this.getSuspendInfo()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.getSuspendInfo=function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},t.prototype.isUpdating=function(){return!1},i([l.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([l.property()],t.prototype,"layer",void 0),i([l.property()],t.prototype,"parent",void 0),i([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspended",null),i([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspendInfo",null),i([l.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),i([l.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([l.subclass("esri.views.layers.LayerView")],t)}(l.declared(a.HandleOwnerMixin(s.IdentifiableMixin(u.EsriPromiseMixin(o.EventedMixin(n))))))}).apply(null,i))||(e.exports=n)},ZMIQ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),r([o.subclass("esri.views.layers.support.ClipArea")],t)}(o.declared(n.JSONSupport))}).apply(null,i))||(e.exports=n)},bT5A:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("qsST"),r("qMld"),r("8MXS"),r("Vx27"),r("VTDq"),r("H2Y5"),r("6i4F"),r("wke2"),r("WsO6"),r("xNtg"),r("7XLS"),r("NbdF")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,u,l,d,c,y,f,h,v,g,m){var b=s.getLogger("esri.views.2d.layers.MapImageLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageParameters=null,t._exportImageVersion=-1,t}return i(t,e),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){p.isAbortError(e)||b.error(e)}))},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxWidth,i=t.imageMaxHeight,n=t.version,o=n>=10.3,a=n>=10;this.strategy=new f({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:i,imageRotationSupported:o,imageNormalizationSupported:a,hidpi:!0}),this._exportImageParameters=new d.ExportImageParameters({view:this.view,layer:this.layer}),this.handles.add(u.init(this._exportImageParameters,"version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),"mapimagelayerview-update")},t.prototype.detach=function(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null,this._exportImageVersion=-1,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return m.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){return a(this,void 0,void 0,(function(){return o(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,i,n){return this.layer.fetchImage(e,t,i,r({timeExtent:this._exportImageParameters.timeExtent,timestamp:this.refreshTimestamp},n))},n([l.property()],t.prototype,"strategy",void 0),n([l.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),n([l.subclass("esri.views.2d.layers.MapImageLayerView2D")],t)}(l.declared(v.MapImageLayerView(g.RefreshableLayerView(c.BitmapLayerView2D(y.LayerView2D(h))))))}).apply(null,i))||(e.exports=n)},ts8o:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o,a,s,p){var u={base:a,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var n;return i(t,e),n=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({geometry:this.geometry.clone()})},r([o.property({types:u,json:{read:s.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([o.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),n=r([o.subclass("esri.views.layers.support.Geometry")],t)}(o.declared(p))}).apply(null,i))||(e.exports=n)},xNtg:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("2Atf"),r("ma1f"),r("LxLY"),r("qMld"),r("Vx27"),r("/E+R"),r("sCbS"),r("I6zq")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,u,l,d,c,y){Object.defineProperty(t,"__esModule",{value:!0}),t.MapImageLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.fetchPopupFeatures=function(e,t){return o(this,void 0,void 0,(function(){var r,i,l,c,f,h,v=this;return n(this,(function(g){switch(g.label){case 0:return r=this.layer,e?(i=this.get("view.scale"),l=[],c=function(e){return o(v,void 0,void 0,(function(){var r,o,s;return n(this,(function(n){return r=0===e.minScale||i<=e.minScale,o=0===e.maxScale||i>=e.maxScale,e.visible&&r&&o&&(e.sublayers?e.sublayers.forEach(c):e.popupEnabled&&(s=y.getFetchPopupTemplate(e,a({},t,{defaultPopupTemplateEnabled:!1})),p.isSome(s)&&l.push({sublayer:e,popupTemplate:s}))),[2]}))}))},f=r.sublayers.toArray().map(c),[4,u.all(f)]):[2,u.reject(new s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}))];case 1:return g.sent(),h=l.map((function(r){var i=r.sublayer,a=r.popupTemplate;return o(v,void 0,void 0,(function(){var r,o,s,u,l,c;return n(this,(function(n){switch(n.label){case 0:return[4,i.load().catch((function(){}))];case 1:return n.sent(),r=i.createQuery(),o=p.isSome(t)?t.event:null,s=d.calculateTolerance({renderer:i.renderer,event:o}),u=this.createFetchPopupFeaturesQueryGeometry(e,s),r.geometry=u,l=r,[4,y.getRequiredFields(i,a)];case 2:return l.outFields=n.sent(),[4,this._loadArcadeModules(a)];case 3:return(c=n.sent())&&c.arcadeUtils.hasGeometryOperations(a)||(r.maxAllowableOffset=u.width/s),[4,i.queryFeatures(r)];case 4:return[2,n.sent().features]}}))}))})),[4,u.eachAlways(h)];case 2:return[2,g.sent().reduce((function(e,t){return e.concat(t.value)}),[]).filter((function(e){return null!=e}))]}}))}))},t.prototype._loadArcadeModules=function(e){if(e.get("expressionInfos.length"))return c.loadArcade()},i([l.property()],t.prototype,"layer",void 0),i([l.subclass("esri.views.layers.MapImageLayerView")],t)}(l.declared(e))}}).apply(null,i))||(e.exports=n)}}]);