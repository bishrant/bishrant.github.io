!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var i,a,r=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);s=!0);}catch(c){o=!0,a=c}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return r}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t,n,i,a,r,s){try{var o=e[r](s),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(i,a)}function i(e){return function(){var t=this,i=arguments;return new Promise(function(a,r){var s=e.apply(t,i);function o(e){n(s,a,r,o,c,"next",e)}function c(e){n(s,a,r,o,c,"throw",e)}o(void 0)})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=d(e);if(t){var a=d(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[57,74],{"6UvW":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var i=n("srIe"),a=n("OvF4"),r=(n("4GrV"),n("gEht")),s=n("U282");function o(e,t,n){var s,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.a;if("2d"===n.type)s=t*n.resolution;else if("3d"===n.type){var c=n.overlayPixelSizeInMapUnits(e),l=n.basemapSpatialReference;s=Object(i.k)(l)&&!l.equals(n.spatialReference)?Object(r.f)(l)/Object(r.f)(n.spatialReference):t*c}var u=e.x-s,d=e.y-s,h=e.x+s,p=e.y+s,b=n.spatialReference;return o.xmin=Math.min(u,h),o.ymin=Math.min(d,p),o.xmax=Math.max(u,h),o.ymax=Math.max(d,p),o.spatialReference=b,o}function c(e,t,n){var a=n.toMap(e);return!Object(i.j)(a)&&o(a,Object(s.a)(),n,l).intersects(t)}var l=new a.a},U282:function(e,t,n){"use strict";function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function a(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,n=0,i=0;i<e.length;i++){var a=e[i].size;"number"==typeof a&&(t+=a,n++)}return t/n}(e.stops):t}function r(e,t){if(!t)return e;var n=t.filter(function(e){return"size"===e.type}).map(function(t){var n=t.maxSize,i=t.minSize;return(a(n,e)+a(i,e))/2}),i=0,r=n.length;if(0===r)return e;for(var s=0;s<r;s++)i+=n[s];var o=Math.floor(i/r);return Math.max(o,e)}function s(e){var t=e&&e.renderer,n="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return n;var a="visualVariables"in t?r(n,t.visualVariables):n;if("simple"===t.type)return i(a,t.symbol);if("unique-value"===t.type){var s=a;return t.uniqueValueInfos.forEach(function(e){s=i(s,e.symbol)}),s}if("class-breaks"===t.type){var o=a;return t.classBreakInfos.forEach(function(e){o=i(o,e.symbol)}),o}return a}n.d(t,"a",function(){return s})},Yt8Z:function(t,n,r){"use strict";r.r(n);var c=r("pO5D"),u=(r("wSAH"),r("6S2I")),d=(r("zqDF"),r("WbKI")),h=r("Stxv"),p=r("04ZG"),b=(r("4EHJ"),r("ju1D"),r("9AIY"),r("9MzC")),m=r("gEht"),v=(r("cCpn"),r("h1D1")),f=r("dV4Z"),y=r("Jv1m"),O=r("Ehpe"),j=r("r0DZ"),_=r("N5XI"),w=r("Pt/X"),g=r("fqh+"),k=r("WZb1"),M=r("SuVq"),S=r("UhwK"),D=(r("4GrV"),r("IDUf")),x=r("TKwc"),L=r("l4eh"),I=r("YyOG"),C=(r("G48n"),r("Tcmu")),T=r("Ibpv"),U=(r("H9eC"),r("jWBI")),R=r("gYg2"),A=r("aql9"),E=r("QLbw"),P=r("6lH3"),W=r("zgsL"),z=r("VPx4"),V=r("wg3g"),G=r("R3Kl"),q=r("HE3w"),B=r("PN7H"),H=1e5,N=function(t){o(r,t);var n=l(r);function r(){var e;return a(this,r),(e=n.apply(this,arguments))._drawActive=!1,e._handles=new j.a,e._polylineLayer=new W.a,e._manipulatorLayer=new W.a,e._groupLayer=new z.default({layers:[e._polylineLayer,e._manipulatorLayer],listMode:"hide",visible:!1}),e._vertices=[],e.deferCreation=!0,e.geodesicDistanceThreshold=1e5,e.measurement=null,e.measurementLabel=null,e}return s(r,[{key:"initialize",value:function(){var e=this;Object(I.a)("esri/core/t9n/Units").then(function(t){e.messages=t}),this._handles.add(Object(D.c)(i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(I.a)("esri/core/t9n/Units");case 2:e.messages=t.sent;case 3:case"end":return t.stop()}},t)}))))}},{key:"destroy",value:function(){this.detach(),this._draw&&(this._draw.destroy(),this._draw=null),this._handles&&(this._handles.destroy(),this._handles=null),this._polylineLayer&&(this._polylineLayer.destroy(),this._polylineLayer=null),this._manipulatorLayer&&(this._manipulatorLayer.destroy(),this._manipulatorLayer=null)}},{key:"editable",set:function(e){this._set("editable",e),e||this._draw.reset()}},{key:"activate",value:function(){this._drawActive||0!==this._vertices.length||this._startSketch()}},{key:"onAttach",value:function(){var e=this,t=this.view;this._draw=new q.a({view:t}),t.map.add(this._groupLayer),t.focus(),this._handles.add([Object(_.init)(this,["unit","geodesicDistanceThreshold","palette","messages"],function(){e._vertices.length>0&&e._updatePolylines()}),Object(_.init)(this,"view.spatialReference",function(e){Z(e)&&!Object(R.g)()&&Object(R.i)()})]),this.create()}},{key:"onDetach",value:function(){var e=this.view.map;this._draw.view=null,this._draw.destroy(),this._draw=null,e.remove(this._groupLayer),this._handles.removeAll(),this._polylineLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null)}},{key:"onShow",value:function(){this._groupLayer.visible=!0}},{key:"onHide",value:function(){this._groupLayer.visible=!1}},{key:"reset",value:function(){this._vertices=[],this._polylineLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1,this._updateSketch([])}},{key:"onInputEvent",value:function(e){"pointer-move"===e.type&&this._updateCursor()}},{key:"_startSketch",value:function(){var e=this;this._drawActive=!0;var t=this._draw.create("polyline",{mode:"click"});t.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],function(t){return e._updateSketch(t.vertices)}),t.on("draw-complete",function(){e._stopSketch()})}},{key:"_stopSketch",value:function(){this.manipulators.forEach(function(e){e.manipulator.interactive=!0}),this._drawActive=!1,this.complete()}},{key:"_updateSketch",value:function(t){var n=this;if(!Z(this.view.spatialReference)||Object(R.g)()){if(t.length<2)return this._vertices=[],this.manipulators.removeAll(),void this._polylineLayer.removeAll();this.create();for(var i=this.view.spatialReference;this._vertices.length>t.length;){var a=this._vertices.pop().manipulatorId;this.manipulators.remove(a)}for(var r=function(a){var r=e(t[a],2),s=r[0],o=r[1],c=function(e,t,n,i){var a=new C.a({style:"circle",color:i.handleColor,size:i.handleWidth,outline:{type:"simple-line",width:0}}),r=new C.a({style:"circle",color:i.handleColor,size:1.5*i.handleWidth,outline:{type:"simple-line",width:0}}),s=new U.a({geometry:e,symbol:a});return new B.a({view:t,layer:n,graphic:s,focusedSymbol:r})}(new M.a({x:s,y:o,spatialReference:i}),n.view,n._manipulatorLayer,n.palette),l=n.manipulators.add(c);Object(V.e)(c,function(e,t){t.next(Object(V.m)(n.view)).next(Object(V.g)(e.graphic)).next(function(){var t=e.graphic.geometry;n._vertices[a].coord=[t.x,t.y],n._updatePolylines()})}),n._vertices.push({manipulatorId:l,coord:[s,o]})},s=this._vertices.length;s<t.length;s++)r(s);var o=this._vertices.length-1,c=this._vertices[o],l=e(t[o],2),u=l[0],d=l[1];if(c.coord[0]!==u||c.coord[1]!==d){c.coord=[u,d];var h=new M.a({x:u,y:d,spatialReference:i});this.manipulators.findById(c.manipulatorId).graphic.geometry=h}var p=this._drawActive?this._vertices[o].manipulatorId:null;this.manipulators.forEach(function(e){e.manipulator.interactive=null==p||e.id!==p}),this._updatePolylines()}}},{key:"_updateCursor",value:function(){this.cursor=this._drawActive?"crosshair":null}},{key:"_updatePolylines",value:function(){var e=function(e,t,n){var i,a,r=new S.a({paths:[e],spatialReference:t});if(t.isGeographic)if(Object(E.g)(t))i=Object(E.e)([r],"meters")[0],a=Object(E.c)(r,H);else{var s=Object(R.j)(r,k.a.WGS84),o=Object(E.c)(s,H);i=Object(E.e)([s],"meters")[0],a=Object(R.j)(o,t)}else if(t.isWebMercator)i=Object(P.geodesicLength)(r,"meters"),a=Object(P.geodesicDensify)(r,H,"meters");else{var c=Object(P.planarLength)(r,"meters");if(c>=n){var l=Object(R.j)(r,k.a.WGS84),u=Object(E.c)(l,H);i=Object(E.e)([l],"meters")[0],a=Object(R.j)(u,t)}else i=c,a=r}return{measurement:{geometry:a,length:i},original:r,drawing:a}}(this._vertices.map(function(e){return e.coord}),this.view.spatialReference,this.geodesicDistanceThreshold),t=e.measurement,n=e.drawing,i=e.original;this._set("measurement",t);var a=function(e,t,n){if(!t||!e)return null;switch(n){case"metric":return Object(A.h)(e,t.length,"meters");case"imperial":return Object(A.e)(e,t.length,"meters");default:return Object(A.b)(e,Object(m.c)(t.length,"meters",n),n)}}(this.messages,t,this.unit);this._set("measurementLabel",a);var r=this.palette,s=r.pathPrimaryColor,o=r.pathSecondaryColor,c=r.pathWidth;this._polylineLayer.removeAll(),this._polylineLayer.addMany([new U.a({geometry:n,symbol:new x.a({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:c-1.5,color:o},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:c,color:s}]}}})}),new U.a({geometry:i.extent.center,symbol:new T.a({color:[255,255,255,1],haloColor:[0,0,0,.5],haloSize:2,font:new L.a({size:14,family:"sans-serif"}),text:a})})])}}]),r}(G.a);function Z(e){if(!e)return!1;var t=e.isGeographic,n=e.isWebMercator,i=e.isWGS84;return t&&!i&&!Object(E.g)(e)||!t&&!n}Object(c.a)([Object(d.b)()],N.prototype,"cursor",void 0),Object(c.a)([Object(d.b)({value:!0})],N.prototype,"editable",null),Object(c.a)([Object(d.b)({type:Number})],N.prototype,"geodesicDistanceThreshold",void 0),Object(c.a)([Object(d.b)({readOnly:!0})],N.prototype,"measurement",void 0),Object(c.a)([Object(d.b)({readOnly:!0})],N.prototype,"measurementLabel",void 0),Object(c.a)([Object(d.b)()],N.prototype,"messages",void 0),Object(c.a)([Object(d.b)()],N.prototype,"palette",void 0),Object(c.a)([Object(d.b)()],N.prototype,"unit",void 0),Object(c.a)([Object(d.b)({constructOnly:!0})],N.prototype,"view",void 0);var J=N=Object(c.a)([Object(p.a)("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],N),K={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:5,pathPrimaryColor:[255,128,0,255],pathSecondaryColor:[255,255,255,255]},Y=u.a.getLogger("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel"),F=function(e){o(n,e);var t=l(n);function n(e){var i;return a(this,n),(i=t.call(this,e)).supportedViewType="2d",i._handles=new j.a,i.geodesicDistanceThreshold=1e5,i.measurement=null,i.measurementLabel=null,i.palette=K,i.tool=null,i}return s(n,[{key:"initialize",value:function(){var e=this;this._handles.add([Object(_.init)(this,["unit","palette","geodesicDistanceThreshold"],function(t,n,i){e.tool&&(e.tool[i]=t)})])}},{key:"destroy",value:function(){this._handles&&(this._handles.destroy(),this._handles=null)}},{key:"state",get:function(){var e,t;return this.isDisabled||null==(t=null==(e=this.view)?void 0:e.spatialReference)||Z(t)&&!Object(R.h)()?"disabled":this.tool&&this.measurement?this.tool.active?"measuring":"measured":"ready"}},{key:"unit",get:function(){return this._validateUnit(this.defaultUnit)},set:function(e){void 0!==e?this._override("unit",this._validateUnit(e)):this._clearOverride("unit")}},{key:"unitOptions",get:function(){return m.q},set:function(e){void 0!==e?this._override("unitOptions",this._validateUnits(e)):this._clearOverride("unitOptions")}},{key:"start",value:function(){return this.createTool()}},{key:"clear",value:function(){this.removeTool()}},{key:"createToolParams",value:function(){var e=this;return{toolConstructor:J,constructorArguments:function(){return{geodesicDistanceThreshold:e.geodesicDistanceThreshold,palette:e.palette,unit:e.unit}}}}},{key:"logUnsupportedError",value:function(){Y.error("DistanceMeasurement2D widget is not implemented for SceneView")}},{key:"logError",value:function(){Y.error.apply(Y,arguments)}},{key:"_validateUnit",value:function(e){return-1!==this.unitOptions.indexOf(e)?e:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]}},{key:"_validateUnits",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.filter(function(e){return-1!==m.q.indexOf(e)});return 0===t.length?m.q.slice():t}}]),n}(g.a);Object(c.a)([Object(d.b)(w.a)],F.prototype,"defaultUnit",void 0),Object(c.a)([Object(d.b)({type:Number})],F.prototype,"geodesicDistanceThreshold",void 0),Object(c.a)([Object(d.b)({readOnly:!0,aliasOf:"tool.measurement"})],F.prototype,"measurement",void 0),Object(c.a)([Object(d.b)({readOnly:!0,aliasOf:"tool.measurementLabel"})],F.prototype,"measurementLabel",void 0),Object(c.a)([Object(d.b)()],F.prototype,"palette",void 0),Object(c.a)([Object(d.b)({readOnly:!0})],F.prototype,"state",null),Object(c.a)([Object(d.b)({constructOnly:!0,readOnly:!0})],F.prototype,"tool",void 0),Object(c.a)([Object(d.b)({type:String})],F.prototype,"unit",null),Object(c.a)([Object(d.b)({type:[String]})],F.prototype,"unitOptions",null);var X=F=Object(c.a)([Object(p.a)("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],F),Q="esri-distance-measurement-2d",$={buttonDisabled:"esri-button--disabled",widgetIcon:"esri-icon-measure-line",base:"".concat(Q," esri-widget esri-widget--panel"),container:"".concat(Q,"__container"),hint:"".concat(Q,"__hint"),hintText:"".concat(Q,"__hint-text"),panelError:"".concat(Q,"__panel--error"),measurement:"".concat(Q,"__measurement"),measurementItem:"".concat(Q,"__measurement-item"),measurementItemDisabled:"".concat(Q,"__measurement-item--disabled"),measurementItemTitle:"".concat(Q,"__measurement-item-title"),measurementItemValue:"".concat(Q,"__measurement-item-value"),settings:"".concat(Q,"__settings"),units:"".concat(Q,"__units"),unitsLabel:"".concat(Q,"__units-label"),unitsSelect:"".concat(Q,"__units-select esri-select"),unitsSelectWrapper:"".concat(Q,"__units-select-wrapper"),actionSection:"".concat(Q,"__actions"),newMeasurementButton:"".concat(Q,"__clear-button esri-button esri-button--primary")},ee=function(e){o(n,e);var t=l(n);function n(e,i){var r;return a(this,n),(r=t.call(this,e,i)).iconClass=$.widgetIcon,r.label=void 0,r.messages=null,r.messagesUnits=null,r.unit=null,r.unitOptions=null,r.view=null,r.viewModel=new X,r}return s(n,[{key:"render",value:function(){var e=this,t=this.id,n=this.messages,i=this.messagesUnits,a=this.viewModel,r=this.visible,s=a.active,o=a.isSupported,c=a.measurementLabel,l=a.state,u=a.unit,d=a.unitOptions,h="disabled"===l,p="measuring"===l||"measured"===l,b=s&&"ready"===l?Object(y.a)("section",{key:"hint",class:$.hint},Object(y.a)("p",{class:$.hintText},n.hint)):null,v=o?null:Object(y.a)("section",{key:"unsupported",class:$.panelError},Object(y.a)("p",null,n.unsupported)),f=p?Object(y.a)("section",{key:"measurement",class:$.measurement},function(t,n,i){return n?Object(y.a)("div",{key:"".concat(i,"-enabled"),class:$.measurementItem},Object(y.a)("span",{class:$.measurementItemTitle},t),Object(y.a)("span",{class:$.measurementItemValue},n)):Object(y.a)("div",{key:"".concat(i,"-disabled"),class:e.classes($.measurementItem,$.measurementItemDisabled),"aria-disabled":"true"},Object(y.a)("span",{class:$.measurementItemTitle},t))}(n.distance,c,"distance")):null,O="".concat(t,"-units"),j=p?Object(y.a)("section",{key:"units",class:$.units},Object(y.a)("label",{class:$.unitsLabel,for:O},n.unit),Object(y.a)("div",{class:$.unitsSelectWrapper},Object(y.a)("select",{class:$.unitsSelect,id:O,onchange:this._changeUnit,bind:this,value:u},d.map(function(e){var t;return Object(y.a)("option",{key:e,value:e},Object(m.l)(e)?i.systems[e]:null==(t=i.units[e])?void 0:t.pluralCapitalized)})))):null,_=p?Object(y.a)("div",{key:"settings",class:$.settings},j):null,w=!o||s&&!p?null:Object(y.a)("div",{class:$.actionSection},Object(y.a)("button",{disabled:h,class:this.classes($.newMeasurementButton,h&&$.buttonDisabled),bind:this,onclick:this._newMeasurement,title:n.newMeasurement,"aria-label":n.newMeasurement,type:"button"},n.newMeasurement)),g=r?Object(y.a)("div",{class:$.container},v,b,_,f,w):null;return Object(y.a)("div",{class:$.base},g)}},{key:"_newMeasurement",value:function(){Object(b.l)(this.viewModel.start())}},{key:"_changeUnit",value:function(e){var t=e.target,n=t.options[t.selectedIndex];n&&(this.viewModel.unit=n.value)}}]),n}(O.a);Object(c.a)([Object(h.a)("viewModel.active")],ee.prototype,"active",void 0),Object(c.a)([Object(d.b)()],ee.prototype,"iconClass",void 0),Object(c.a)([Object(d.b)({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],ee.prototype,"label",void 0),Object(c.a)([Object(d.b)(),Object(f.a)("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],ee.prototype,"messages",void 0),Object(c.a)([Object(d.b)(),Object(f.a)("esri/core/t9n/Units")],ee.prototype,"messagesUnits",void 0),Object(c.a)([Object(h.a)("viewModel.unit")],ee.prototype,"unit",void 0),Object(c.a)([Object(h.a)("viewModel.unitOptions")],ee.prototype,"unitOptions",void 0),Object(c.a)([Object(h.a)("viewModel.view")],ee.prototype,"view",void 0),Object(c.a)([Object(d.b)({type:X})],ee.prototype,"viewModel",void 0),Object(c.a)([Object(h.a)("viewModel.visible")],ee.prototype,"visible",void 0),Object(c.a)([Object(v.a)()],ee.prototype,"_newMeasurement",null),Object(c.a)([Object(v.a)()],ee.prototype,"_changeUnit",null),ee=Object(c.a)([Object(p.a)("esri.widgets.DistanceMeasurement2D")],ee),n.default=ee}}])}();