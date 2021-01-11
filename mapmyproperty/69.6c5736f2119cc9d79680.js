(function(){var e={"arcgis-js-api/renderers/support/clickToleranceUtils":"/E+R","esri/renderers/support/clickToleranceUtils":"/E+R","esri/widgets/AreaMeasurement2D/AreaMeasurement2DViewModel":"9ED+","esri/widgets/support/InteractiveToolViewModel":"JcNK","arcgis-js-api/views/support/drapedUtils":"NbdF","esri/views/support/drapedUtils":"NbdF","esri/widgets/AreaMeasurement2D/AreaMeasurement2DTool":"PNMz","esri/widgets/AreaMeasurement2D":"cVfR"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"/E+R":function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=(function(e,t){"use strict";function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,i=0;i<e.length;i++){var o=e[i].size;"number"==typeof o&&(t+=o,r++)}return t/r}(e.stops):t}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=void 0,t.calculateTolerance=function(e){var t=e&&e.renderer,o="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return o;var s="visualVariables"in t?function(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.minSize;return(i(t.maxSize,e)+i(r,e))/2})),o=0,s=r.length;if(0===s)return e;for(var n=0;n<s;n++)o+=r[n];var a=Math.floor(o/s);return Math.max(a,e)}(o,t.visualVariables):o;if("simple"===t.type)return r(s,t.symbol);if("unique-value"===t.type){var n=s;return t.uniqueValueInfos.forEach((function(e){n=r(n,e.symbol)})),n}if("class-breaks"===t.type){var a=s;return t.classBreakInfos.forEach((function(e){a=r(a,e.symbol)})),a}return s}}).apply(null,i))||(e.exports=o)},"9ED+":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("eIBl"),r("qsST"),r("qMld"),r("8uEs"),r("8MXS"),r("Vx27"),r("PNMz"),r("SFmM"),r("JcNK")],void 0===(o=(function(e,t,r,i,o,s,n,a,l,u,c,p){"use strict";var d={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:2,pathColor:[255,128,0,1],fillColor:[255,128,0,.3]},h=o.getLogger("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel");return function(e){function t(t){var r=e.call(this,t)||this;return r.supportedViewType="2d",r._handles=new i,r.geodesicDistanceThreshold=1e5,r.measurement=null,r.measurementLabel=null,r.palette=d,r.tool=null,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([a.init(this,["unit","palette","geodesicDistanceThreshold"],(function(t,r,i){e.tool&&(e.tool[i]=t)}))])},t.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},Object.defineProperty(t.prototype,"state",{get:function(){var e;return this.isDisabled?"disabled":u.isSupported(null===(e=this.view)||void 0===e?void 0:e.spatialReference)?this.tool&&this.tool.measurement?this.tool.active?"measuring":"measured":"ready":"disabled"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"unit",{get:function(){return this._validateUnit(this.defaultUnit)},set:function(e){void 0!==e?this._override("unit",this._validateUnit(e)):this._clearOverride("unit")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"unitOptions",{get:function(){return n.measurementAreaUnits},set:function(e){void 0!==e?this._override("unitOptions",this._validateUnits(e)):this._clearOverride("unitOptions")},enumerable:!1,configurable:!0}),t.prototype.start=function(){return this.createTool()},t.prototype.clear=function(){this.removeTool()},t.prototype.newMeasurement=function(){s.ignoreAbortErrors(this.start())},t.prototype.clearMeasurement=function(){this.clear()},t.prototype.createToolParams=function(){var e=this;return{toolConstructor:u.default,constructorArguments:function(){return{geodesicDistanceThreshold:e.geodesicDistanceThreshold,palette:e.palette,unit:e.unit}}}},t.prototype.logUnsupportedError=function(){h.error("AreaMeasurement2D widget is not implemented for SceneView")},t.prototype.logError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];h.error.apply(h,e)},t.prototype._validateUnit=function(e){return-1!==this.unitOptions.indexOf(e)?e:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]},t.prototype._validateUnits=function(e){void 0===e&&(e=[]);var t=e.filter((function(e){return-1!==n.measurementAreaUnits.indexOf(e)}));return 0===t.length?n.measurementAreaUnits.slice():t},r.__decorate([l.property(c.defaultUnitPropertyMetadata)],t.prototype,"defaultUnit",void 0),r.__decorate([l.property({type:Number})],t.prototype,"geodesicDistanceThreshold",void 0),r.__decorate([l.property({readOnly:!0,aliasOf:"tool.measurement"})],t.prototype,"measurement",void 0),r.__decorate([l.property({readOnly:!0,aliasOf:"tool.measurementLabel"})],t.prototype,"measurementLabel",void 0),r.__decorate([l.property()],t.prototype,"palette",void 0),r.__decorate([l.property({dependsOn:["isDisabled","tool.measurement","tool.active","view.spatialReference"],readOnly:!0})],t.prototype,"state",null),r.__decorate([l.property({constructOnly:!0,readOnly:!0})],t.prototype,"tool",void 0),r.__decorate([l.property({type:String,dependsOn:["unitOptions","defaultUnit"]})],t.prototype,"unit",null),r.__decorate([l.property({type:[String]})],t.prototype,"unitOptions",null),r.__decorate([l.subclass("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],t)}(p.InteractiveToolViewModel)}).apply(null,i))||(e.exports=o)},JcNK:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("ma1f"),r("eIBl"),r("qMld"),r("8MXS"),r("Vx27"),r("KdBr")],void 0===(o=(function(e,t,r,i,o,s,n,a,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InteractiveToolViewModel=void 0;var c=function(e){function t(t){var r=e.call(this,t)||this;return r.tool=null,r._baseHandles=new s,r._loggedUnsupportedErrorOnce=!1,r._creationAbortController=null,t&&null!=t.visible&&(r.visible=t.visible),r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this._baseHandles.add(a.init(this,["view.ready","isSupported"],(function(){e.view&&e.view.ready&&!e.isSupported?e._loggedUnsupportedErrorOnce||(e.logUnsupportedError(),e._loggedUnsupportedErrorOnce=!0):e._loggedUnsupportedErrorOnce=!1})))},t.prototype.destroy=function(){this.removeTool(),this.view=null,this._baseHandles.destroy(),this._baseHandles=null},Object.defineProperty(t.prototype,"isSupported",{get:function(){return!this.view||this.view.type===this.supportedViewType},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"view",{get:function(){return this._get("view")},set:function(e){var t=this;e!==this.view&&(this.removeTool(),this._set("view",e),this._baseHandles.remove("tools"),e&&this._baseHandles.add(e.tools.on("change",(function(e){if(t.tool)for(var r=0,i=e.removed;r<i.length;r++){var o=i[r];if(t.tool===o){o.destroyed||o.destroy(),t._set("tool",null);break}}})),"tools"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visible",{set:function(e){this._set("visible",e),this.tool&&(this.tool.visible=e),!e&&this._creationAbortController&&(this._creationAbortController.abort(),this._creationAbortController=null)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"active",{get:function(){return null!=this._creationAbortController||null!=this.tool&&this.tool.active},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isDisabled",{get:function(){return!this.view||!this.view.ready||!this.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"creatingTool",{get:function(){return!!this._creationAbortController},enumerable:!1,configurable:!0}),t.prototype.createTool=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,i,s,a,l,c,p=this;return r.__generator(this,(function(d){switch(d.label){case 0:if(this.removeTool(),!this.isSupported)return[2,n.reject(new o("tool:create","The view does not support the tool"))];e=this.createToolParams(),t=function(){var t=u.evaluateToolConstructorArguments(e.constructorArguments);return r.__assign({visible:p.visible},t)},i=new AbortController,s=i.signal,this._creationAbortController=i,a=function(){i===p._creationAbortController&&(p._creationAbortController=null)},d.label=1;case 1:return d.trys.push([1,3,,4]),[4,this.view.createTool(e.toolConstructor,t,{signal:s})];case 2:return l=d.sent(),this._set("tool",l),a(),[3,4];case 3:throw c=d.sent(),a(),c;case 4:return[2]}}))}))},t.prototype.removeTool=function(){this._creationAbortController&&this._creationAbortController.abort(),this._creationAbortController=null;var e=this.tool;e&&(this.view&&this.view.tools&&this.view.tools.remove(e),e.destroyed||e.destroy(),this._set("tool",null))},r.__decorate([l.property({constructOnly:!0})],t.prototype,"tool",void 0),r.__decorate([l.property({dependsOn:["view.type"]})],t.prototype,"isSupported",null),r.__decorate([l.property({value:null})],t.prototype,"view",null),r.__decorate([l.property({type:Boolean,value:!0})],t.prototype,"visible",null),r.__decorate([l.property({dependsOn:["_creationAbortController","tool.active"]})],t.prototype,"active",null),r.__decorate([l.property({dependsOn:["view","view.ready","isSupported"]})],t.prototype,"isDisabled",null),r.__decorate([l.property()],t.prototype,"_creationAbortController",void 0),r.__decorate([l.property({readOnly:!0,dependsOn:["_creationAbortController"]})],t.prototype,"creatingTool",null),r.__decorate([l.subclass("esri.widgets.support.InteractiveToolViewModel")],t)}(i);t.InteractiveToolViewModel=c}).apply(null,i))||(e.exports=o)},NbdF:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("TMur"),r("LxLY"),r("8uEs"),r("/E+R")],void 0===(o=(function(e,t,r,i,o,s){"use strict";function n(e,t,i,s){var n;if(void 0===s&&(s=new r.Extent),"2d"===i.type)n=t*i.resolution;else if("3d"===i.type){var a=i.basemapTerrain,l=a.overlayManager,u=l?l.overlayPixelSizeInMapUnits(e):1;n=a&&!a.spatialReference.equals(i.spatialReference)?o.getMetersPerUnitForSR(a.spatialReference)/o.getMetersPerUnitForSR(i.spatialReference):t*u}var c=e.x-n,p=e.y-n,d=e.x+n,h=e.y+n,m=i.spatialReference;return s.xmin=Math.min(c,d),s.ymin=Math.min(p,h),s.xmax=Math.max(c,d),s.ymax=Math.max(p,h),s.spatialReference=m,s}Object.defineProperty(t,"__esModule",{value:!0}),t.intersectsDrapedGeometry=t.createQueryGeometry=void 0,t.createQueryGeometry=n,t.intersectsDrapedGeometry=function(e,t,r){var o=r.toMap(e);return i.isNone(o)?null:n(o,s.calculateTolerance(),r,a).intersects(t)?o:null};var a=new r.Extent}).apply(null,i))||(e.exports=o)},PNMz:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("jZlN"),r("cTAJ"),r("+AWJ"),r("eIBl"),r("s37w"),r("8uEs"),r("8MXS"),r("Vx27"),r("21p4"),r("wIC5"),r("vsLP"),r("RYqx"),r("lAGb"),r("i1w2"),r("bz+r"),r("N78w"),r("X7Ps")],void 0===(o=(function(e,t,r,i,o,s,n,a,l,u,c,p,d,h,m,v,y,f,_,g,b){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAreaMeasurementLabel=t.isSupported=t.createAreaMeasurementInfo2D=void 0;var w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._drawActive=!1,t._handles=new a,t._graphicsLayer=new v,t._manipulatorLayer=new v,t._groupLayer=new y({layers:[t._graphicsLayer,t._manipulatorLayer],listMode:"hide",visible:!1}),t._vertices=[],t.deferCreation=!0,t.geodesicDistanceThreshold=1e5,t.measurement=null,t.measurementLabel=null,t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;s.loadMessageBundle("esri/core/t9n/Units").then((function(t){e.messages=t})),this._handles.add(s.onLocaleChange((function(){return r.__awaiter(e,void 0,void 0,(function(){var e;return r.__generator(this,(function(t){switch(t.label){case 0:return e=this,[4,s.loadMessageBundle("esri/core/t9n/Units")];case 1:return e.messages=t.sent(),[2]}}))}))})))},t.prototype.destroy=function(){this.detach(),this._draw&&(this._draw.destroy(),this._draw=null),this._handles&&(this._handles.destroy(),this._handles=null),this._graphicsLayer&&(this._graphicsLayer.destroy(),this._graphicsLayer=null),this._manipulatorLayer&&(this._manipulatorLayer.destroy(),this._manipulatorLayer=null)},Object.defineProperty(t.prototype,"editable",{set:function(e){this._set("editable",e),e||this._draw.reset()},enumerable:!1,configurable:!0}),t.prototype.activate=function(){this._drawActive||0!==this._vertices.length||this._startSketch()},t.prototype.onAttach=function(){var e=this,t=this.view;this._draw=new f({view:t}),t.map.add(this._groupLayer),t.focus(),this._handles.add([c.init(this,["unit","geodesicDistanceThreshold","palette","messages"],(function(){e._vertices.length>0&&e._updateGraphics()})),c.init(this,"view.spatialReference",(function(e){x(e)&&!h.isLoaded()&&h.load()}))]),this.create()},t.prototype.onDetach=function(){var e=this.view.map;this._draw.view=null,this._draw.destroy(),this._draw=null,e.remove(this._groupLayer),this._handles.removeAll(),this._graphicsLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null)},t.prototype.onShow=function(){this._groupLayer.visible=!0},t.prototype.onHide=function(){this._groupLayer.visible=!1},t.prototype.reset=function(){this._vertices=[],this._graphicsLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1,this._updateSketch([])},t.prototype.onInputEvent=function(e){"pointer-move"===e.type&&this._updateCursor()},t.prototype._startSketch=function(){var e=this;this._drawActive=!0;var t=this._draw.create("polyline",{mode:"click"});t.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(function(t){return e._updateSketch(t.vertices)})),t.on("draw-complete",(function(){return e._stopSketch()}))},t.prototype._stopSketch=function(){if(this._vertices.length<3)return this.reset(),void this._startSketch();this.manipulators.forEach((function(e){e.manipulator.interactive=!0})),this._drawActive=!1,this.complete()},t.prototype._updateSketch=function(e){var t=this;if(!x(this.view.spatialReference)||h.isLoaded()){if(e.length<2)return this._vertices=[],this.manipulators.removeAll(),void this._graphicsLayer.removeAll();this.create();for(var r=this.view.spatialReference;this._vertices.length>e.length;){var s=this._vertices.pop().manipulatorId;this.manipulators.remove(s)}for(var a=function(s){var a=e[s],u=a[0],c=a[1],p=function(e,t,r,i){var s=new n.SimpleMarkerSymbol({style:"circle",color:i.handleColor,size:i.handleWidth,outline:{type:"simple-line",width:0}}),a=new n.SimpleMarkerSymbol({style:"circle",color:i.handleColor,size:1.5*i.handleWidth,outline:{type:"simple-line",width:0}}),l=new o({geometry:e,symbol:s});return new g.GraphicManipulator({view:t,layer:r,graphic:l,focusedSymbol:a})}(new i.Point({x:u,y:c,spatialReference:r}),l.view,l._manipulatorLayer,l.palette),d=l.manipulators.add(p);_.createManipulatorDragEventPipeline(p,(function(e,r){r.next(_.screenToMap(t.view)).next(_.dragGraphic(e.graphic)).next((function(){var r=e.graphic.geometry;t._vertices[s].coord=[r.x,r.y],t._updateGraphics()}))})),l._vertices.push({manipulatorId:d,coord:[u,c]})},l=this,u=this._vertices.length;u<e.length;u++)a(u);var c=this._vertices.length-1,p=this._vertices[c],d=e[c],m=d[0],v=d[1];if(p.coord[0]!==m||p.coord[1]!==v){p.coord=[m,v];var y=new i.Point({x:m,y:v,spatialReference:r});this.manipulators.findById(p.manipulatorId).graphic.geometry=y}var f=this._drawActive?this._vertices[c].manipulatorId:null;this.manipulators.forEach((function(e){e.manipulator.interactive=null==f||e.id!==f})),this._updateGraphics()}},t.prototype._updateCursor=function(){this.cursor=this._drawActive?"crosshair":null},t.prototype._updateGraphics=function(){this._graphicsLayer.removeAll();var e=M(this._vertices.map((function(e){return e.coord})),this.view.spatialReference,this.geodesicDistanceThreshold),t=e.measurement,r=e.fillGeometry,i=e.outlineGeometry;this._set("measurement",t);var s=t?A(this.messages,t,this.unit):null;if(this._set("measurementLabel",s),r||i){var a=this.palette,l=a.pathColor,u=a.pathWidth,c=[];r&&c.push(new o({geometry:r,symbol:new n.SimpleFillSymbol({color:a.fillColor,outline:new n.SimpleLineSymbol({width:0})})})),i&&c.push(new o({geometry:i,symbol:new n.SimpleLineSymbol({color:l,width:u})})),r&&s&&c.push(new o({geometry:r.centroid,symbol:new n.TextSymbol({color:[255,255,255,1],haloColor:[0,0,0,.5],haloSize:2,text:s.area,font:new n.Font({size:14,family:"sans-serif"})})})),this._graphicsLayer.addMany(c)}},r.__decorate([p.property()],t.prototype,"cursor",void 0),r.__decorate([p.property({value:!0})],t.prototype,"editable",null),r.__decorate([p.property({type:Number})],t.prototype,"geodesicDistanceThreshold",void 0),r.__decorate([p.property({readOnly:!0})],t.prototype,"measurement",void 0),r.__decorate([p.property({readOnly:!0})],t.prototype,"measurementLabel",void 0),r.__decorate([p.property()],t.prototype,"messages",void 0),r.__decorate([p.property()],t.prototype,"palette",void 0),r.__decorate([p.property()],t.prototype,"unit",void 0),r.__decorate([p.property({constructOnly:!0})],t.prototype,"view",void 0),r.__decorate([p.subclass("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],t)}(b.InteractiveToolBase);function M(e,t,r){if(2===e.length){var o=new i.Polyline({paths:e,spatialReference:t}),s=void 0;if(t.isGeographic)if(m.isSupported(t))s=m.geodesicDensify(o,1e5);else{var n=h.project(o,i.SpatialReference.WGS84),a=m.geodesicDensify(n,1e5);s=h.project(a,t)}else t.isWebMercator?s=d.geodesicDensify(o,1e5,"meters"):(g=d.planarLength(o,"meters"))>=r?(n=h.project(o,i.SpatialReference.WGS84),a=m.geodesicDensify(n,1e5),s=h.project(a,t)):s=o;return{measurement:null,fillGeometry:null,outlineGeometry:s}}e.push(e[0]);var l,u,c=new i.Polyline({paths:[e],spatialReference:t}),p=new i.Polygon({rings:[e],spatialReference:t}),v=null,y=null;if(t.isGeographic)if(m.isSupported(t)){if(v=m.geodesicDensify(c,1e5),y=m.geodesicDensify(p,1e5),!(y=d.simplify(y)))return null;l=m.geodesicLengths([c],"meters")[0],u=m.geodesicAreas([y],"square-meters")[0]}else{var f=h.project(c,n=i.SpatialReference.WGS84),_=h.project(p,n);if(v=m.geodesicDensify(f,1e5),y=m.geodesicDensify(_,1e5),!(y=d.simplify(y)))return null;l=m.geodesicLengths([f],"meters")[0],u=m.geodesicAreas([y],"square-meters")[0],v=h.project(v,t),y=h.project(y,t)}else if(t.isWebMercator){if(v=d.geodesicDensify(c,1e5,"meters"),y=d.geodesicDensify(p,1e5,"meters"),!(y=d.simplify(y)))return null;l=d.geodesicLength(c,"meters"),u=d.geodesicArea(y,"square-meters")}else{var g;if((g=d.planarLength(c,"meters"))>=r){if(f=h.project(c,n=i.SpatialReference.WGS84),_=h.project(p,n),v=m.geodesicDensify(f,1e5),y=m.geodesicDensify(_,1e5),!(y=d.simplify(y)))return null;l=m.geodesicLengths([f],"meters")[0],u=m.geodesicAreas([y],"square-meters")[0],v=h.project(v,t),y=h.project(y,t)}else{if(v=c,!(y=d.simplify(p)))return null;l=g,u=d.planarArea(y,"square-meters")}}return{measurement:{geometry:y,area:u,perimeter:l},fillGeometry:y,outlineGeometry:v}}function x(e){if(!e)return!1;var t=e.isGeographic,r=e.isWebMercator;return t&&!e.isWGS84&&!m.isSupported(e)||!t&&!r}function A(e,t,r){if(!t||!e)return null;var i={area:null,perimeter:null},o=t.area,s=t.perimeter;switch(r){case"metric":i.area=l.formatMetricArea(e,o,"square-meters");break;case"imperial":i.area=l.formatImperialArea(e,o,"square-meters");break;default:var n=u.convertUnit(o,"square-meters",r);i.area=l.formatDecimal(e,n,r)}var a=function(e){switch(e){case"metric":return"metric";case"imperial":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-meters":return"meters";case"square-kilometers":return"kilometers";case"acres":return"imperial";case"ares":case"hectares":return"metric";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";default:return null}}(r);if(a)switch(a){case"metric":i.perimeter=l.formatMetricLength(e,s,"meters");break;case"imperial":i.perimeter=l.formatImperialLength(e,s,"meters");break;default:var c=u.convertUnit(s,"meters",a);i.perimeter=l.formatDecimal(e,c,a)}else i.perimeter="";return i}t.createAreaMeasurementInfo2D=M,t.isSupported=function(e){return null!=e&&(!x(e)||h.isSupported())},t.createAreaMeasurementLabel=A,t.default=w}).apply(null,i))||(e.exports=o)},cVfR:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("qMld"),r("Vx27"),r("RHxK"),r("9ED+"),r("bC3G")],void 0===(o=(function(e,t,r,i,o,s,n,a){"use strict";var l="esri-area-measurement-2d__measurement-item",u="esri-area-measurement-2d__measurement-item-title";return function(e){function t(t,r){var i=e.call(this,t,r)||this;return i.active=null,i.iconClass="esri-icon-measure-area",i.label=void 0,i.messages=null,i.unit=null,i.unitOptions=null,i.view=null,i.viewModel=new n,i}return r.__extends(t,e),t.prototype.render=function(){var e=this,t=this.id,r=this.viewModel,i=this.visible,o=r.active,s=r.isSupported,n=r.measurementLabel,c=r.state,p=r.unit,d=r.unitOptions,h="disabled"===c,m="measuring"===c||"measured"===c,v=this.messages,y=o&&"ready"===c?a.tsx("section",{key:"hint",class:"esri-area-measurement-2d__hint"},a.tsx("p",{class:"esri-area-measurement-2d__hint-text"},v.hint)):null,f=s?null:a.tsx("section",{key:"unsupported",class:"esri-area-measurement-2d__panel--error"},a.tsx("p",null,v.unsupported)),_=function(t,r,i){return r?a.tsx("div",{key:i+"-enabled",class:l},a.tsx("span",{class:u},t),a.tsx("span",{class:"esri-area-measurement-2d__measurement-item-value"},r)):a.tsx("div",{key:i+"-disabled",class:e.classes(l,"esri-area-measurement-2d__measurement-item--disabled"),"aria-disabled":"true"},a.tsx("span",{class:u},t))},g=m?a.tsx("section",{key:"measurement",class:"esri-area-measurement-2d__measurement"},_(v.area,n.area,"area"),_(v.perimeter,n.perimeter,"perimeter")):null,b=t+"__units",w=a.tsx("section",{key:"units",class:"esri-area-measurement-2d__units"},a.tsx("label",{class:"esri-area-measurement-2d__units-label",for:b},v.unit),a.tsx("div",{class:"esri-area-measurement-2d__units-select-wrapper"},a.tsx("select",{class:"esri-area-measurement-2d__units-select esri-select",id:b,onchange:this._changeUnit,bind:this,value:p},d.map((function(e){return a.tsx("option",{key:e,value:e},v.units[e])}))))),M=m?a.tsx("div",{key:"settings",class:"esri-area-measurement-2d__settings"},w):null,x=!s||o&&!m?null:a.tsx("div",{class:"esri-area-measurement-2d__actions"},a.tsx("button",{disabled:h,class:this.classes("esri-button esri-button--secondary","esri-area-measurement-2d__clear-button",h&&"esri-button--disabled"),bind:this,onclick:this._newMeasurement,title:v.newMeasurement,type:"button","aria-label":v.newMeasurement},v.newMeasurement)),A=i?a.tsx("div",{class:"esri-area-measurement-2d__container"},f,y,M,g,x):null;return a.tsx("div",{class:this.classes("esri-area-measurement-2d","esri-widget","esri-widget--panel")},A)},t.prototype._newMeasurement=function(){i.ignoreAbortErrors(this.viewModel.start())},t.prototype._changeUnit=function(e){var t=e.target,r=t.options[t.selectedIndex];r&&(this.viewModel.unit=r.value)},r.__decorate([o.aliasOf("viewModel.active"),a.renderable()],t.prototype,"active",void 0),r.__decorate([o.property()],t.prototype,"iconClass",void 0),r.__decorate([o.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],t.prototype,"label",void 0),r.__decorate([o.property(),a.renderable(),a.messageBundle("esri/widgets/AreaMeasurement2D/t9n/AreaMeasurement2D")],t.prototype,"messages",void 0),r.__decorate([o.aliasOf("viewModel.unit")],t.prototype,"unit",void 0),r.__decorate([o.aliasOf("viewModel.unitOptions")],t.prototype,"unitOptions",void 0),r.__decorate([o.aliasOf("viewModel.view")],t.prototype,"view",void 0),r.__decorate([o.property({type:n}),a.renderable(["viewModel.state","viewModel.unitOptions","viewModel.unit","viewModel.measurementLabel"])],t.prototype,"viewModel",void 0),r.__decorate([o.aliasOf("viewModel.visible"),a.renderable()],t.prototype,"visible",void 0),r.__decorate([a.accessibleHandler()],t.prototype,"_newMeasurement",null),r.__decorate([a.accessibleHandler()],t.prototype,"_changeUnit",null),r.__decorate([o.subclass("esri.widgets.AreaMeasurement2D")],t)}(s)}).apply(null,i))||(e.exports=o)}}]);