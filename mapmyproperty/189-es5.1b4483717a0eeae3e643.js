!function(){function e(t,i,n){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(n){var a=Object.getOwnPropertyDescriptor(n,t);return a.get?a.get.call(i):a.value}})(t,i,n||t)}function t(e,t,i,n,a,r,s){try{var o=e[r](s),l=o.value}catch(c){return void i(c)}o.done?t(l):Promise.resolve(l).then(n,a)}function i(e){return function(){var i=this,n=arguments;return new Promise(function(a,r){var s=e.apply(i,n);function o(e){t(s,a,r,o,l,"next",e)}function l(e){t(s,a,r,o,l,"throw",e)}o(void 0)})}}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach(function(t){r(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,n=d(e);if(t){var a=d(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return c(this,i)}}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return b(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==i.return||i.return()}finally{if(o)throw r}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,i){return t&&v(e.prototype,t),i&&v(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{"0Pge":function(t,n,r){"use strict";r.r(n);var o=r("pO5D"),c=(r("wSAH"),r("6S2I")),b=(r("zqDF"),r("WbKI")),v=r("Stxv"),f=r("04ZG"),y=(r("4EHJ"),r("ju1D"),r("9AIY"),r("9MzC")),O=r("gEht"),_=(r("cCpn"),r("h1D1")),j=r("dV4Z"),g=r("Jv1m"),w=r("Ehpe"),P=r("srIe"),k=r("r0DZ"),L=r("N5XI"),D={},M=r("Pt/X"),V=r("fqh+"),S=r("SuVq"),x=(r("4GrV"),r("QS+a")),T=r("08/N"),R=r("wg3g"),C=r("R3Kl"),U=r("tKWm"),q=r("/CmD"),E=r("e31P"),I=r("BkZU"),z=function(){function e(t,i){var n=this;for(var a in p(this,e),this.owner=i,this.properties={},this.afterDispatchHandle=null,t){var r=new E.a(t[a],null,null,2,2);this.properties[a]={pool:r,acquired:[]}}this.afterDispatchHandle=Object(I.a)(function(){return n.release()})}return m(e,[{key:"destroy",value:function(){for(var e in this.afterDispatchHandle&&(this.afterDispatchHandle.remove(),this.afterDispatchHandle=null),this.properties){var t,i=this.properties[e],n=h(i.acquired);try{for(n.s();!(t=n.n()).done;){var a=t.value;Object(I.b)(a)||i.pool.release(a)}}catch(r){n.e(r)}finally{n.f()}i.pool.destroy(),i.pool=null,i.acquired=null}this.properties=null,this.owner=null}},{key:"get",value:function(e){var t=this.owner._get(e),i=this.properties[e],n=i.pool.acquire();for(i.acquired.push(n);n===t;)i.acquired.push(n),n=i.pool.acquire();return n}},{key:"release",value:function(){for(var e in this.properties){var t,i=this.properties[e],n=0,a=h(i.acquired);try{for(a.s();!(t=a.n()).done;){var r=t.value;Object(I.b)(r)?i.acquired[n++]=r:i.pool.release(r)}}catch(s){a.e(s)}finally{a.f()}i.acquired.length=n}}}]),e}(),H=function(e){s(i,e);var t=l(i);function i(){var e;return p(this,i),(e=t.apply(this,arguments)).type="DirectLineMeasurement3D",e.visible=!0,e.settings=new A,e.measurement=null,e}return m(i,[{key:"destroy",value:function(){this.settings.destroy()}},{key:"startPoint",set:function(e){this.measurement=null,this._set("startPoint",Object(P.k)(e)?e.clone():null)}},{key:"endPoint",set:function(e){this.measurement=null,this._set("endPoint",Object(P.k)(e)?e.clone():null)}}]),i}(q.a);Object(o.a)([Object(b.b)()],H.prototype,"type",void 0),Object(o.a)([Object(b.b)()],H.prototype,"visible",void 0),Object(o.a)([Object(b.b)()],H.prototype,"settings",void 0),Object(o.a)([Object(b.b)({value:null})],H.prototype,"startPoint",null),Object(o.a)([Object(b.b)({value:null})],H.prototype,"endPoint",null),Object(o.a)([Object(b.b)()],H.prototype,"measurement",void 0),H=Object(o.a)([Object(f.a)("esri.views.3d.interactive.graphics.DirectLineMeasurement3D.DirectLineMeasurement3D")],H);var A=function(e){s(i,e);var t=l(i);function i(){var e;return p(this,i),(e=t.apply(this,arguments)).unit="metric",e}return i}(q.a);Object(o.a)([Object(b.b)({value:"metric"})],A.prototype,"unit",void 0),A=Object(o.a)([Object(f.a)("esri.views.3d.interactive.graphics.directLineMeasurement3D.Settings")],A);var G=function(e){s(i,e);var t=l(i);function i(){var e;return p(this,i),(e=t.apply(this,arguments))._handles=new k.a,e._propertiesPool=new z({startPoint:S.a,endPoint:S.a},u(e)),e.model=new H,e.cursorPoint=null,e.state="initial",e.active=!1,e.geodesicMeasurementDistanceThreshold=1e5,e}return m(i,[{key:"initialize",value:function(){this.sceneView.analyses.add(this.model),this.reset()}},{key:"destroy",value:function(){this._handles.destroy(),this._handles=null,this.sceneView.analyses.remove(this.model),this._propertiesPool.destroy(),this._propertiesPool=null,this.model.destroy()}},{key:"startPointSurfaceLocation",set:function(e){this._set("startPointSurfaceLocation",e)}},{key:"endPointSurfaceLocation",set:function(e){this._set("endPointSurfaceLocation",e)}},{key:"measurementSurfaceLocation",get:function(){var e=this.startPointSurfaceLocation,t=this.endPointSurfaceLocation;return null==e||null==t||"above-the-surface"===e&&"below-the-surface"===t||"below-the-surface"===e&&"above-the-surface"===t||"on-the-surface"===e&&"on-the-surface"===t?"camera-dependent":"above-the-surface"===e||"above-the-surface"===t?"above-the-surface":"below-the-surface"}},{key:"validMeasurement",get:function(){return Object(P.k)(this.model.startPoint)&&Object(P.k)(this.model.endPoint)}},{key:"isMeasuring",get:function(){return!!this.startPoint}},{key:"geodesicDistanceExceeded",get:function(){return Object(P.k)(this.model.measurement)&&this.model.measurement.horizontalDistance&&this.model.measurement.horizontalDistance.value>this.geodesicMeasurementDistanceThreshold}},{key:"reset",value:function(){this.clearMeasurement()}},{key:"clearMeasurement",value:function(){this.state="initial",this.startPoint=null,this.endPoint=null,this.cursorPoint=null,this._clearOverride("measurementSurfaceLocation")}},{key:"finishMeasurement",value:function(){if(!this._isOverridden("measurementSurfaceLocation")){var e=this.measurementSurfaceLocation;this._override("measurementSurfaceLocation","camera-dependent"===e?this.sceneView.state.camera.aboveGround?"above-the-surface":"below-the-surface":e)}this.state="measured"}}]),i}(q.a);Object(o.a)([Object(b.b)()],G.prototype,"messages",void 0),Object(o.a)([Object(b.b)({constructOnly:!0})],G.prototype,"sceneView",void 0),Object(o.a)([Object(b.b)()],G.prototype,"model",void 0),Object(o.a)([Object(v.a)("model.startPoint")],G.prototype,"startPoint",void 0),Object(o.a)([Object(b.b)({value:null})],G.prototype,"startPointSurfaceLocation",null),Object(o.a)([Object(v.a)("model.endPoint")],G.prototype,"endPoint",void 0),Object(o.a)([Object(b.b)({value:null})],G.prototype,"endPointSurfaceLocation",null),Object(o.a)([Object(b.b)()],G.prototype,"measurementSurfaceLocation",null),Object(o.a)([Object(b.b)()],G.prototype,"cursorPoint",void 0),Object(o.a)([Object(b.b)()],G.prototype,"state",void 0),Object(o.a)([Object(v.a)("model.settings.unit")],G.prototype,"unit",void 0),Object(o.a)([Object(b.b)()],G.prototype,"active",void 0),Object(o.a)([Object(b.b)({readOnly:!0})],G.prototype,"validMeasurement",null),Object(o.a)([Object(b.b)({readOnly:!0})],G.prototype,"isMeasuring",null),Object(o.a)([Object(b.b)()],G.prototype,"geodesicMeasurementDistanceThreshold",void 0),Object(o.a)([Object(b.b)({readOnly:!0})],G.prototype,"geodesicDistanceExceeded",null);var F,W,B,K=G=Object(o.a)([Object(f.a)("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DModel")],G),N=r("qRWG"),Z=r("Cy1f"),J=r("DLk3"),X=r("0Kx6"),Q=r("klA5"),Y=r("ZHv2"),$=r("dK/y"),ee=r("B3Fv"),te={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5},ie=F=function(e){s(i,e);var t=l(i);function i(e){var n;return p(this,i),(n=t.call(this,{model:e.model}))._state="pending",n._visible=!1,n._laserLine=null,n._handles=new k.a,n._listenerHandles=null,n._cursorPosition=Object(Z.e)(),n._startPosition=Object(Z.e)(),n._endPosition=Object(Z.e)(),n._lastDraggedHandle=null,n.dataObjectView=null,n._view=e.model.sceneView,n._params=e.params?Object(ee.a)(te,e.params):Object(ee.a)(te,{}),n._intersector=new Q.a(n._view.state.mode),n._intersector.options.store=0,n}return m(i,[{key:"initialize",value:function(){var e=this,t=this.model.model,i=this._view.getAnalysisView(t);Object(P.k)(i)?this._initialize(i):this._view.whenAnalysisView(t).then(function(t){return e._initialize(t)})}},{key:"_initialize",value:function(e){switch(this._state){case"pending":break;case"destroyed":return}this._set("dataObjectView",e),this._laserLine=new Y.a({view:this._view,attached:!0}),this._initializeListeners(),this._state="ready"}},{key:"destroy",value:function(){switch(this._state){case"pending":return void(this._state="destroyed");case"ready":break;case"destroyed":default:return}this.hide(),this._destroyListeners(),this._handles.destroy(),this._handles=null,this._laserLine.destroy(),this._laserLine=null,this._state="destroyed"}},{key:"requiresCursorPoint",get:function(){return"initial"===this.model.state&&this.model.active}},{key:"visible",get:function(){return this._visible},set:function(e){e?this.show():this.hide()}},{key:"viewMode",get:function(){var e=this.dataObjectView;if(!Object(P.k)(e))return W.None;switch(e.viewMode){default:case"none":return W.None;case"segment":return W.Direct;case"segment-and-triangle":return W.Triangle;case"segment-and-projection":return W.ProjectedGeodesic}}},{key:"testData",get:function(){var e=this._laserLine.testData;return a(a({},Object(P.k)(this.dataObjectView)?this.dataObjectView.testData:{labels:{direct:null,horizontal:null,vertical:null},stripeLength:1}),{},{laserLineRenderer:{heightManifoldEnabled:!!Object(P.k)(e)&&e.heightManifoldEnabled,heightManifoldTarget:Object(P.k)(e)?e.heightManifoldTarget:null,pointDistanceEnabled:!!Object(P.k)(e)&&e.pointDistanceEnabled,pointDistanceOrigin:Object(P.k)(e)?e.pointDistanceOrigin:null,pointDistanceTarget:Object(P.k)(e)?e.pointDistanceTarget:null,lineVerticalPlaneEnabled:!!Object(P.k)(e)&&e.lineVerticalPlaneEnabled}})}},{key:"directLabelText",get:function(){return Object(P.k)(this.dataObjectView)?this.dataObjectView.segmentLabel.text:null}},{key:"horizontalLabelText",get:function(){return Object(P.k)(this.dataObjectView)?this.dataObjectView.horizontalLabel.text:null}},{key:"verticalLabelText",get:function(){return Object(P.k)(this.dataObjectView)?this.dataObjectView.verticalLabel.text:null}},{key:"createManipulators",value:function(){var e=this,t=function(){var t=Object($.e)(e._view,e._params.handleColor,e._params.handleOpacity);return t.available=!1,t.radius=e._params.handleRadius,t},i=t(),n=t();this.model.startPoint&&(i.location=Object(P.q)(this.model.startPoint),i.available=!0),this.model.endPoint&&(n.location=Object(P.q)(this.model.endPoint),n.available=!0);var a=function(){var t=e._lastDraggedHandle;i.grabbing&&!n.grabbing&&(t="start"),n.grabbing&&!i.grabbing&&(t="end"),i.grabbing||n.grabbing||(t=null);var a=t!==e._lastDraggedHandle;e._lastDraggedHandle=t,a&&e.visible&&e._updateLaserLine()};return this._handles.add([i.events.on("grab-changed",function(){a()}),n.events.on("grab-changed",function(){a()})]),{start:i,end:n}}},{key:"show",value:function(){switch(this._state){case"ready":this._visible||(this._visible=!0,this.model.model.visible=!0,this._laserLine.style={innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,glowFalloff:this._params.laserLineGlowFalloff,globalAlpha:this._params.laserLineGlobalAlpha},this._laserLine.visible=!0,this._updateCursorPosition(),this._updateStartPosition(),this._updateEndPosition(),this._updateLaserLine());break;case"pending":this._visible=!0;break;case"destroyed":default:return}}},{key:"hide",value:function(){switch(this._state){case"ready":this._visible&&(this._visible=!1,this.model.model.visible=!1,this._laserLine.visible=!1,this._view.cursor=null);break;case"pending":this._visible=!1;break;case"destroyed":default:return}}},{key:"pick",value:function(e){var t=this._view.spatialReference,i=Object(N.j)(e.screenPoint);this._view.sceneIntersectionHelper.intersectToolIntersectorScreen(i,this._intersector);var n=this._intersector.results.min,a=Object(Z.e)();if(!n.getIntersectionPoint(a))return new F.PickResult;var r=this._view.renderCoordsHelper.fromRenderCoords(a,t);return Object(P.j)(r)?new F.PickResult:new F.PickResult("TerrainRenderer"===n.intersector?"ground":"feature",a,r)}},{key:"getElevation",value:function(e){return this._view.basemapTerrain.ready?Object(P.r)(Object(J.a)(this._view.elevationProvider,e),0):0}},{key:"overlappingHandles",value:function(e,t){return Object(ee.c)(e,t,this._view)<=this._params.handleRadius}},{key:"_updateCursorPosition",value:function(){this.model.cursorPoint&&this._view.renderCoordsHelper.toRenderCoords(this.model.cursorPoint,this._cursorPosition)}},{key:"_updateStartPosition",value:function(){Object(P.k)(this.model.startPoint)&&this._view.renderCoordsHelper.toRenderCoords(this.model.startPoint,this._startPosition)}},{key:"_updateEndPosition",value:function(){Object(P.k)(this.model.endPoint)&&this._view.renderCoordsHelper.toRenderCoords(this.model.endPoint,this._endPosition)}},{key:"_getFocusPosition",value:function(){var e=this.model,t=this.viewMode===W.Direct&&Object(P.k)(this.dataObjectView)&&"euclidean"===this.dataObjectView.visualizedMeasurement;switch(e.state){case"drawing":return t?this._startPosition:e.endPoint?this._endPosition:this._startPosition;case"editing":return t?"start"===this._lastDraggedHandle?this._endPosition:this._startPosition:"start"===this._lastDraggedHandle?this._startPosition:this._endPosition;default:return e.cursorPoint?this._cursorPosition:null}}},{key:"_getFocusSpherePosition",value:function(){return"drawing"===this.model.state||"end"===this._lastDraggedHandle?this._startPosition:this._endPosition}},{key:"_updateLaserLine",value:function(){var e=this.model,t=this._getFocusPosition(),i=this.viewMode,n=this.dataObjectView,a=this._params.laserLineEnabled&&!!t&&"measured"!==e.state&&e.active;a&&Object(P.k)(n)?(this._laserLine.heightManifoldTarget="euclidean"===n.actualVisualizedMeasurement?t:null,this._laserLine.pointDistanceLine=a&&e.startPoint&&"geodesic"===n.actualVisualizedMeasurement?{origin:this._getFocusSpherePosition(),target:t}:null,this._laserLine.lineVerticalPlaneSegment=a&&i===W.Triangle?X.d.fromPoints(this._startPosition,this._endPosition,ne):null):(this._laserLine.heightManifoldTarget=null,this._laserLine.pointDistanceLine=null,this._laserLine.lineVerticalPlaneSegment=null)}},{key:"_initializeListeners",value:function(){var e=this;this._listenerHandles=new k.a,this._listenerHandles.add([this.model.watch("state",function(t){Object(P.c)(e.dataObjectView,function(e){e.allowVisualElementsOrientationChange="measured"!==t}),e._visible&&e._updateLaserLine()},!0),this.model.watch("measurementMode",function(){e._visible&&e._updateLaserLine()},!0),this.model.watch("cursorPoint",function(){e._updateCursorPosition(),e._visible&&e._updateLaserLine()},!0),this.model.model.watch("startPoint",function(){e._updateStartPosition(),e._visible&&e._updateLaserLine()},!0),this.model.model.watch("endPoint",function(){e._updateEndPosition(),e._visible&&e._updateLaserLine()},!0),this.model.watch("active",function(){e._visible&&e._updateLaserLine()},!0)])}},{key:"_destroyListeners",value:function(){this._listenerHandles.destroy(),this._listenerHandles=null}}]),i}(q.a);Object(o.a)([Object(b.b)({readOnly:!0})],ie.prototype,"dataObjectView",void 0),Object(o.a)([Object(b.b)({constructOnly:!0})],ie.prototype,"model",void 0),Object(o.a)([Object(b.b)()],ie.prototype,"directLabelText",null),Object(o.a)([Object(b.b)()],ie.prototype,"horizontalLabelText",null),Object(o.a)([Object(b.b)()],ie.prototype,"verticalLabelText",null),function(e){e.PickRequest=function(){return function e(){p(this,e)}}(),e.PickResult=function(){return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;p(this,e),this.type=t,this.scenePoint=i,this.mapPoint=n}}()}((ie=F=Object(o.a)([Object(f.a)("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DView")],ie))||(ie={})),(B=W||(W={}))[B.Triangle=0]="Triangle",B[B.ProjectedGeodesic=1]="ProjectedGeodesic",B[B.Direct=2]="Direct",B[B.None=3]="None";var ne=X.d.create(),ae=function(e){s(i,e);var t=l(i);function i(e){var n;return p(this,i),(n=t.call(this,e))._handles=new k.a,n._cachedPickRequest=new ie.PickRequest,n._cachedPickResult=new ie.PickResult,n._isAnyPointerDown=!1,n.deferCreation=!0,n.startManipulator=null,n.endManipulator=null,n.model=new K({sceneView:e.view}),n}return m(i,[{key:"initialize",value:function(){var e=this,t=new ie({model:this.model});this._set("directLineMeasurementView",t);var i=Object(L.init)(this,"state",function(t){"ready"!==t&&e.create(),"measured"===t&&e.complete()},!0);this._handles.add(i);var n=this.directLineMeasurementView.createManipulators(),a=n.start,r=n.end,s=function(t,i,n){return Object(R.e)(t,function(t,a,r){var s=Object(U.a)(t);a.next(s).next(Object(U.b)(e.view)).next(function(e){return"start"!==e.action?e:null}).next(function(a){var r=Object(T.a)(a.mapEnd,re);e.model[i]=r,t.location=r,e.model[n]=e._surfaceLocation(r,a.surfaceType)}),r.next(s).next(Object(R.k)(e.model,[i,n])).next(function(){t.location=Object(P.q)(e.model[i])})})};this._handles.add([s(a,"startPoint","startPointSurfaceLocation"),s(r,"endPoint","endPointSurfaceLocation")]),[a,r].forEach(function(t){e._handles.add([t.events.on("grab-changed",function(){var t=a.grabbing||r.grabbing;t&&"measured"===e.model.state&&(e.model.state="editing"),t||(e.model.finishMeasurement(),"editing"===e.model.state&&(e.model.state="measured"))})])}),this.manipulators.add(a),this.manipulators.add(r),this.startManipulator=a,this.endManipulator=r}},{key:"destroy",value:function(){this.directLineMeasurementView.destroy(),this._set("directLineMeasurementView",null),this.model.destroy(),this._set("model",null),this._handles.destroy(),this._handles=null}},{key:"state",get:function(){var e;return null!=(e=this.model)&&e.isMeasuring?"measured"===this.model.state?"measured":"measuring":"ready"}},{key:"creating",get:function(){return"initial"===this.model.state||"drawing"===this.model.state}},{key:"isSupported",get:function(){return"3d"===this.get("view.type")}},{key:"cursor",get:function(){var e;return null==(e=this.model)||!e.active||"drawing"!==this.model.state&&"initial"!==this.model.state?null:"crosshair"}},{key:"activate",value:function(){this.model.active=!0}},{key:"deactivate",value:function(){this.model.active=!1}},{key:"onDetach",value:function(){this.model.reset()}},{key:"onShow",value:function(){this.directLineMeasurementView.show(),this._updateManipulatorVisibility()}},{key:"onHide",value:function(){this.directLineMeasurementView.hide()}},{key:"onInputEvent",value:function(e){switch(e.type){case"immediate-click":this._handleImmediateClick(e);break;case"pointer-move":this._handlePointerMove(e);break;case"pointer-down":this._handlePointerDown();break;case"pointer-up":this._handlePointerUp()}this._updateManipulatorVisibility()}},{key:"_handlePointerMove",value:function(e){this._clearCachedPickRequest();var t=Object(x.a)(e);"mouse"===e.pointerType&&(this._hoverAt(t),"drawing"===this.model.state&&(this.endManipulator.events.emit("drag",{action:"update",start:t,screenPoint:t}),e.stopPropagation()))}},{key:"_handlePointerDown",value:function(){this._isAnyPointerDown=!0}},{key:"_handlePointerUp",value:function(){this._isAnyPointerDown=!1}},{key:"_handleImmediateClick",value:function(e){if(this._clearCachedPickRequest(),function(e){return"mouse"!==e.pointerType||0===e.button}(e)){var t=Object(x.a)(e),i=e.pointerType,n=!1;if(this.model.active)switch(this.model.state){case"initial":this.startManipulator.events.emit("drag",{action:"start",pointerType:i,start:t,screenPoint:t}),this.startManipulator.events.emit("drag",{action:"end",start:t,screenPoint:t}),this.model.startPoint&&(this.startManipulator.interactive=!1,this.endManipulator.interactive=!1,this.model.state="drawing",this.endManipulator.events.emit("drag",{action:"start",pointerType:i,start:t,screenPoint:t}),n=!0);break;case"drawing":this.endManipulator.events.emit("drag",{action:"update",start:t,screenPoint:t}),null!=this.model.endPoint&&(this.endManipulator.events.emit("drag",{action:"end",start:t,screenPoint:t}),this.startManipulator.interactive=!0,this.endManipulator.interactive=!0,this.model.finishMeasurement(),n=!0)}n&&e.stopPropagation(),"mouse"===e.pointerType&&this._hoverAt(t)}}},{key:"_hoverAt",value:function(e){if(!this.directLineMeasurementView.requiresCursorPoint||this._isAnyPointerDown&&"drawing"!==this.model.state&&"editing"!==this.model.state)this.model.cursorPoint=null;else{var t=this._pick(e);t.mapPoint&&(this.model.cursorPoint=t.mapPoint)}}},{key:"_pick",value:function(e){var t=this._cachedPickRequest.screenPoint;return t&&t.x===e.x&&t.y===e.y||(this._cachedPickRequest.screenPoint=e,this._cachedPickResult=this.directLineMeasurementView.pick(this._cachedPickRequest)),this._cachedPickResult}},{key:"_clearCachedPickRequest",value:function(){this._cachedPickRequest.screenPoint=null}},{key:"_surfaceLocation",value:function(e,t){return 0===t?"on-the-surface":e.z>=this.directLineMeasurementView.getElevation(e)?"above-the-surface":"below-the-surface"}},{key:"_updateManipulatorVisibility",value:function(){this.startManipulator.available=null!=this.model.startPoint,this.endManipulator.available=null!=this.model.endPoint}}]),i}(C.a);Object(o.a)([Object(b.b)({readOnly:!0})],ae.prototype,"state",null),Object(o.a)([Object(b.b)({readOnly:!0})],ae.prototype,"creating",null),Object(o.a)([Object(b.b)({readOnly:!0})],ae.prototype,"isSupported",null),Object(o.a)([Object(b.b)({readOnly:!0})],ae.prototype,"cursor",null),Object(o.a)([Object(b.b)({constructOnly:!0})],ae.prototype,"model",void 0),Object(o.a)([Object(b.b)({constructOnly:!0})],ae.prototype,"directLineMeasurementView",void 0),Object(o.a)([Object(v.a)("model.mode")],ae.prototype,"mode",void 0),Object(o.a)([Object(v.a)("model.unit")],ae.prototype,"unit",void 0),Object(o.a)([Object(v.a)("model.validMeasurement")],ae.prototype,"validMeasurement",void 0),ae=Object(o.a)([Object(f.a)("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DTool")],ae);var re=new S.a,se=ae,oe=c.a.getLogger("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel"),le=function(e){s(a,e);var t,n=l(a);function a(e){var t;return p(this,a),(t=n.call(this,e)).supportedViewType="3d",t._handles=new k.a,t._userUnitOptions=null,t._userUnit=null,t}return m(a,[{key:"initialize",value:function(){var e=this;this._handles.add([Object(L.init)(this,"unit",function(t){e.tool&&(e.tool.model.unit=t)})])}},{key:"destroy",value:function(){this._handles.destroy(),this._handles=null}},{key:"state",get:function(){return this.isDisabled?"disabled":this.tool?this.tool.state:"ready"}},{key:"measurement",get:function(){if(!this.tool)return null;var e=this.tool.model,t=this.tool.directLineMeasurementView.dataObjectView;if(Object(P.j)(t))return{mode:"euclidean",directDistance:{text:null,state:"unavailable"},horizontalDistance:{text:null,state:"unavailable"},verticalDistance:{text:null,state:"unavailable"}};var i=t.actualVisualizedMeasurement,n=this.tool.directLineMeasurementView,a=Object(P.k)(e.model.measurement)?"available":"unavailable";switch(i){case"euclidean":return{mode:i,directDistance:{text:n.directLabelText,state:a},horizontalDistance:{text:n.horizontalLabelText,state:a},verticalDistance:{text:n.verticalLabelText,state:a}};case"geodesic":return{mode:i,directDistance:{text:null,state:"unavailable"},horizontalDistance:{text:n.directLabelText,state:a},verticalDistance:{text:n.verticalLabelText,state:a}}}}},{key:"unitOptions",get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(e){this._userUnitOptions=e,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}},{key:"unit",get:function(){return this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)},set:function(e){this._userUnit=e?this._findSelectableUnit(e,this._userUnit):null,this.notifyChange("unit")}},{key:"start",value:function(){return this.createTool()}},{key:"clear",value:function(){this.removeTool()}},{key:"createToolParams",value:function(){var e=this;return{toolConstructor:se,constructorArguments:function(){return{unit:e.unit}}}}},{key:"logUnsupportedError",value:function(){oe.error("DirectLineMeasurement3D widget is not implemented for MapView")}},{key:"logError",value:function(){oe.error.apply(oe,arguments)}},{key:"_findSelectableUnit",value:function(e,t){var i=this.unitOptions;return-1!==i.indexOf(e)?e:t?this._findSelectableUnit(t):i[0]}},{key:"_filteredOrAllUnits",value:function(e){if(!e)return O.q.slice();var t=e.filter(function(e){return-1!==O.q.indexOf(e)});return 0===t.length?O.q.slice():t}}],[{key:"preload",value:(t=i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",function(){var e=i(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,function(){var e=i(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(t in D||(D[t]=Promise.all([Promise.all([r.e(11),r.e(0),r.e(69)]).then(r.bind(null,"7K5q")),Promise.all([r.e(0),r.e(166)]).then(r.bind(null,"kvvF"))]).then(function(e){return{viewConstructor:e[0].DirectLineMeasurement3DView,controllerConstructor:e[1].DirectLineMeasurement3DController}})),D[t]));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()("DirectLineMeasurement3D");case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()());case 1:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)})}]),a}(V.a);Object(o.a)([Object(b.b)({readOnly:!0})],le.prototype,"state",null),Object(o.a)([Object(b.b)({readOnly:!0})],le.prototype,"measurement",null),Object(o.a)([Object(b.b)()],le.prototype,"tool",void 0),Object(o.a)([Object(b.b)(M.a)],le.prototype,"defaultUnit",void 0),Object(o.a)([Object(b.b)()],le.prototype,"unitOptions",null),Object(o.a)([Object(b.b)()],le.prototype,"unit",null);var ce=le=Object(o.a)([Object(f.a)("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],le),ue="esri-direct-line-measurement-3d",de={buttonDisabled:"esri-button--disabled",base:"".concat(ue," esri-widget esri-widget--panel"),container:"".concat(ue,"__container"),hint:"".concat(ue,"__hint"),hintText:"".concat(ue,"__hint-text"),panelError:"".concat(ue,"__panel--error"),measurement:"".concat(ue,"__measurement"),measurementItem:"".concat(ue,"__measurement-item"),measurementItemDisabled:"".concat(ue,"__measurement-item--disabled"),measurementItemTitle:"".concat(ue,"__measurement-item-title"),measurementItemValue:"".concat(ue,"__measurement-item-value"),settings:"".concat(ue,"__settings"),units:"".concat(ue,"__units"),unitsLabel:"".concat(ue,"__units-label"),unitsSelect:"".concat(ue,"__units-select esri-select"),unitsSelectWrapper:"".concat(ue,"__units-select-wrapper"),actionSection:"".concat(ue,"__actions"),newMeasurementButton:"".concat(ue,"__clear-button esri-button esri-button--primary"),widgetIcon:"esri-icon-measure-line"},he=function(t){s(n,t);var i=l(n);function n(e,t){var a;return p(this,n),(a=i.call(this,e,t)).view=null,a.visible=null,a.iconClass=de.widgetIcon,a.label=void 0,a.messages=null,a.messagesUnits=null,a.viewModel=new ce,a.unitOptions=null,a.unit=null,a}return m(n,[{key:"render",value:function(){var e=this,t=this.viewModel,i=t.isSupported,n=t.active,a=t.state,r=t.measurement,s=t.unit,o="disabled"===a,l="ready"===a,c="measuring"===a||"measured"===a,u=this.messages,d=this.messagesUnits,h=n&&l?Object(g.a)("section",{key:"esri-direct-line-measurement-3d__hint",class:de.hint},Object(g.a)("p",{class:de.hintText},u.hint)):null,b=i?null:Object(g.a)("section",{key:"esri-direct-line-measurement-3d__unsupported",class:de.panelError},Object(g.a)("p",null,u.unsupported)),p=function(t,i,n){switch(i.state){case"available":return Object(g.a)("div",{key:"".concat(n,"-enabled"),class:de.measurementItem},Object(g.a)("span",{class:de.measurementItemTitle},t),Object(g.a)("span",{class:de.measurementItemValue},i.text));case"unavailable":return Object(g.a)("div",{key:"".concat(n,"-disabled"),class:e.classes(de.measurementItem,de.measurementItemDisabled)},Object(g.a)("span",{class:de.measurementItemTitle},t))}},v=c?Object(g.a)("section",{key:"esri-direct-line-measurement-3d__measurement",class:de.measurement},p(u.direct,r.directDistance,"direct"),p(u.horizontal,r.horizontalDistance,"horizontal"),p(u.vertical,r.verticalDistance,"vertical")):null,m="".concat(this.id,"__units"),f=Object(g.a)("label",{class:de.unitsLabel,for:m},u.unit),y=Object(g.a)("div",{class:de.unitsSelectWrapper},Object(g.a)("select",{class:de.unitsSelect,id:m,onchange:this._changeUnit,bind:this,value:s},this.viewModel.unitOptions.map(function(e){var t;return Object(g.a)("option",{key:e,value:e},Object(O.l)(e)?d.systems[e]:null==(t=d.units[e])?void 0:t.pluralCapitalized)}))),_=Object(g.a)("section",{key:"esri-direct-line-measurement-3d__units",class:de.units},f,y),j=c?Object(g.a)("div",{key:"settings",class:de.settings},_):null,w=!i||n&&!c?null:Object(g.a)("div",{class:de.actionSection},Object(g.a)("button",{disabled:o,class:this.classes(de.newMeasurementButton,o&&de.buttonDisabled),bind:this,onclick:this._newMeasurement,type:"button"},u.newMeasurement)),P=this.visible?Object(g.a)("div",{class:de.container},b,h,j,v,w):null;return Object(g.a)("div",{key:this,class:de.base,role:"presentation"},P)}},{key:"_newMeasurement",value:function(){Object(y.l)(this.viewModel.start())}},{key:"_changeUnit",value:function(e){var t=e.target,i=t.options[t.selectedIndex];i&&(this.unit=i.value)}},{key:"beforeFirstRender",value:function(){var t=this;return ce.preload().then(function(){return e(d(n.prototype),"beforeFirstRender",t).call(t)})}}]),n}(w.a);Object(o.a)([Object(v.a)("viewModel.view")],he.prototype,"view",void 0),Object(o.a)([Object(v.a)("viewModel.visible")],he.prototype,"visible",void 0),Object(o.a)([Object(v.a)("viewModel.active")],he.prototype,"active",void 0),Object(o.a)([Object(b.b)()],he.prototype,"iconClass",void 0),Object(o.a)([Object(b.b)({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],he.prototype,"label",void 0),Object(o.a)([Object(b.b)(),Object(j.a)("esri/widgets/DirectLineMeasurement3D/t9n/DirectLineMeasurement3D")],he.prototype,"messages",void 0),Object(o.a)([Object(b.b)(),Object(j.a)("esri/core/t9n/Units")],he.prototype,"messagesUnits",void 0),Object(o.a)([Object(b.b)({type:ce})],he.prototype,"viewModel",void 0),Object(o.a)([Object(v.a)("viewModel.unitOptions")],he.prototype,"unitOptions",void 0),Object(o.a)([Object(v.a)("viewModel.unit")],he.prototype,"unit",void 0),Object(o.a)([Object(_.a)()],he.prototype,"_newMeasurement",null),Object(o.a)([Object(_.a)()],he.prototype,"_changeUnit",null),he=Object(o.a)([Object(f.a)("esri.widgets.DirectLineMeasurement3D")],he),n.default=he}}])}();