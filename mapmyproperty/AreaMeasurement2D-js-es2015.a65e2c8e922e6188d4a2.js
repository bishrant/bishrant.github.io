(window.webpackJsonp=window.webpackJsonp||[]).push([[24,187],{"6UvW":function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return l}));var i=s("srIe"),r=s("OvF4"),a=(s("4GrV"),s("gEht")),n=s("U282");function c(e,t,s,n=new r.a){let c;if("2d"===s.type)c=t*s.resolution;else if("3d"===s.type){const r=s.overlayPixelSizeInMapUnits(e),n=s.basemapSpatialReference;c=Object(i.k)(n)&&!n.equals(s.spatialReference)?Object(a.f)(n)/Object(a.f)(s.spatialReference):t*r}const l=e.x-c,o=e.y-c,u=e.x+c,h=e.y+c,{spatialReference:m}=s;return n.xmin=Math.min(l,u),n.ymin=Math.min(o,h),n.xmax=Math.max(l,u),n.ymax=Math.max(o,h),n.spatialReference=m,n}function l(e,t,s){const r=s.toMap(e);return!Object(i.j)(r)&&c(r,Object(n.a)(),s,o).intersects(t)}const o=new r.a},U282:function(e,t,s){"use strict";function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,s=0;for(let i=0;i<e.length;i++){const r=e[i].size;"number"==typeof r&&(t+=r,s++)}return t/s}(e.stops):t}function a(e,t){if(!t)return e;const s=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:s,minSize:i}=t;return(r(s,e)+r(i,e))/2});let i=0;const a=s.length;if(0===a)return e;for(let r=0;r<a;r++)i+=s[r];const n=Math.floor(i/a);return Math.max(n,e)}function n(e){const t=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return s;const r="visualVariables"in t?a(s,t.visualVariables):s;if("simple"===t.type)return i(r,t.symbol);if("unique-value"===t.type){let e=r;return t.uniqueValueInfos.forEach(t=>{e=i(e,t.symbol)}),e}if("class-breaks"===t.type){let e=r;return t.classBreakInfos.forEach(t=>{e=i(e,t.symbol)}),e}return r}s.d(t,"a",(function(){return n}))},yKjB:function(e,t,s){"use strict";s.r(t);var i=s("pO5D"),r=(s("wSAH"),s("6S2I")),a=(s("zqDF"),s("WbKI")),n=s("Stxv"),c=s("04ZG"),l=(s("4EHJ"),s("ju1D"),s("9AIY"),s("9MzC")),o=s("gEht"),u=(s("cCpn"),s("h1D1")),h=s("dV4Z"),m=s("Jv1m"),p=s("Ehpe"),b=s("r0DZ"),d=s("N5XI"),O=s("WZb1"),j=s("SuVq"),y=s("Ehki"),v=s("UhwK"),f=(s("4GrV"),s("IDUf")),_=s("21Ip"),g=s("l4eh"),w=s("YyOG"),M=(s("G48n"),s("DXYb")),L=s("Tcmu"),x=s("Ibpv"),D=(s("H9eC"),s("jWBI")),S=s("gYg2"),k=s("aql9"),I=s("QLbw"),A=s("6lH3"),q=s("zgsL"),U=s("VPx4"),G=s("wg3g"),T=s("R3Kl"),W=s("HE3w"),C=s("PN7H");const R=1e5;let z=class extends T.a{constructor(){super(...arguments),this._drawActive=!1,this._handles=new b.a,this._graphicsLayer=new q.a,this._manipulatorLayer=new q.a,this._groupLayer=new U.default({layers:[this._graphicsLayer,this._manipulatorLayer],listMode:"hide",visible:!1}),this._vertices=[],this.deferCreation=!0,this.geodesicDistanceThreshold=1e5,this.measurement=null,this.measurementLabel=null}initialize(){Object(w.a)("esri/core/t9n/Units").then(e=>{this.messages=e}),this._handles.add(Object(f.c)(async()=>{this.messages=await Object(w.a)("esri/core/t9n/Units")}))}destroy(){this.detach(),this._draw&&(this._draw.destroy(),this._draw=null),this._handles&&(this._handles.destroy(),this._handles=null),this._graphicsLayer&&(this._graphicsLayer.destroy(),this._graphicsLayer=null),this._manipulatorLayer&&(this._manipulatorLayer.destroy(),this._manipulatorLayer=null)}set editable(e){this._set("editable",e),e||this._draw.reset()}activate(){this._drawActive||0!==this._vertices.length||this._startSketch()}onAttach(){const e=this.view;this._draw=new W.a({view:e}),e.map.add(this._groupLayer),e.focus(),this._handles.add([Object(d.init)(this,["unit","geodesicDistanceThreshold","palette","messages"],()=>{this._vertices.length>0&&this._updateGraphics()}),Object(d.init)(this,"view.spatialReference",e=>{V(e)&&!Object(S.g)()&&Object(S.i)()})]),this.create()}onDetach(){const{map:e}=this.view;this._draw.view=null,this._draw.destroy(),this._draw=null,e.remove(this._groupLayer),this._handles.removeAll(),this._graphicsLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null)}onShow(){this._groupLayer.visible=!0}onHide(){this._groupLayer.visible=!1}reset(){this._vertices=[],this._graphicsLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1,this._updateSketch([])}onInputEvent(e){"pointer-move"===e.type&&this._updateCursor()}_startSketch(){this._drawActive=!0;const e=this._draw.create("polyline",{mode:"click"});e.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],e=>this._updateSketch(e.vertices)),e.on("draw-complete",()=>this._stopSketch())}_stopSketch(){if(this._vertices.length<3)return this.reset(),void this._startSketch();this.manipulators.forEach(e=>{e.manipulator.interactive=!0}),this._drawActive=!1,this.complete()}_updateSketch(e){if(V(this.view.spatialReference)&&!Object(S.g)())return;if(e.length<2)return this._vertices=[],this.manipulators.removeAll(),void this._graphicsLayer.removeAll();this.create();const t=this.view.spatialReference;for(;this._vertices.length>e.length;){const{manipulatorId:e}=this._vertices.pop();this.manipulators.remove(e)}for(let c=this._vertices.length;c<e.length;c++){const[s,i]=e[c],r=E(new j.a({x:s,y:i,spatialReference:t}),this.view,this._manipulatorLayer,this.palette),a=this.manipulators.add(r);Object(G.e)(r,(e,t)=>{t.next(Object(G.m)(this.view)).next(Object(G.g)(e.graphic)).next(()=>{const t=e.graphic.geometry;this._vertices[c].coord=[t.x,t.y],this._updateGraphics()})}),this._vertices.push({manipulatorId:a,coord:[s,i]})}const s=this._vertices.length-1,i=this._vertices[s],[r,a]=e[s];if(i.coord[0]!==r||i.coord[1]!==a){i.coord=[r,a];const e=new j.a({x:r,y:a,spatialReference:t});this.manipulators.findById(i.manipulatorId).graphic.geometry=e}const n=this._drawActive?this._vertices[s].manipulatorId:null;this.manipulators.forEach(e=>{e.manipulator.interactive=null==n||e.id!==n}),this._updateGraphics()}_updateCursor(){this.cursor=this._drawActive?"crosshair":null}_updateGraphics(){this._graphicsLayer.removeAll();const e=function(e,t,s){if(2===e.length){const i=new v.a({paths:e,spatialReference:t});let r;if(t.isGeographic)if(Object(I.g)(t))r=Object(I.c)(i,R);else{const e=Object(S.j)(i,O.a.WGS84),s=Object(I.c)(e,R);r=Object(S.j)(s,t)}else if(t.isWebMercator)r=Object(A.geodesicDensify)(i,R,"meters");else if(Object(A.planarLength)(i,"meters")>=s){const e=Object(S.j)(i,O.a.WGS84),s=Object(I.c)(e,R);r=Object(S.j)(s,t)}else r=i;return{measurement:null,fillGeometry:null,outlineGeometry:r}}e.push(e[0]);const i=new v.a({paths:[e],spatialReference:t}),r=new y.a({rings:[e],spatialReference:t});let a,n,c=null,l=null;if(t.isGeographic)if(Object(I.g)(t)){if(c=Object(I.c)(i,R),l=Object(I.c)(r,R),l=Object(A.simplify)(l),!l)return null;a=Object(I.e)([i],"meters")[0],n=Object(I.b)([l],"square-meters")[0]}else{const e=O.a.WGS84,s=Object(S.j)(i,e),o=Object(S.j)(r,e);if(c=Object(I.c)(s,R),l=Object(I.c)(o,R),l=Object(A.simplify)(l),!l)return null;a=Object(I.e)([s],"meters")[0],n=Object(I.b)([l],"square-meters")[0],c=Object(S.j)(c,t),l=Object(S.j)(l,t)}else if(t.isWebMercator){if(c=Object(A.geodesicDensify)(i,R,"meters"),l=Object(A.geodesicDensify)(r,R,"meters"),l=Object(A.simplify)(l),!l)return null;a=Object(A.geodesicLength)(i,"meters"),n=Object(A.geodesicArea)(l,"square-meters")}else{const e=Object(A.planarLength)(i,"meters");if(e>=s){const e=O.a.WGS84,s=Object(S.j)(i,e),o=Object(S.j)(r,e);if(c=Object(I.c)(s,R),l=Object(I.c)(o,R),l=Object(A.simplify)(l),!l)return null;a=Object(I.e)([s],"meters")[0],n=Object(I.b)([l],"square-meters")[0],c=Object(S.j)(c,t),l=Object(S.j)(l,t)}else{if(c=i,l=Object(A.simplify)(r),!l)return null;a=e,n=Object(A.planarArea)(l,"square-meters")}}return{measurement:{geometry:l,area:n,perimeter:a},fillGeometry:l,outlineGeometry:c}}(this._vertices.map(e=>e.coord),this.view.spatialReference,this.geodesicDistanceThreshold);if(!e)return;const{measurement:t,fillGeometry:s,outlineGeometry:i}=e;this._set("measurement",t);const r=t?function(e,t,s){if(!t||!e)return null;const i={area:null,perimeter:null},{area:r,perimeter:a}=t;switch(s){case"metric":i.area=Object(k.g)(e,r,"square-meters");break;case"imperial":i.area=Object(k.d)(e,r,"square-meters");break;default:{const t=Object(o.c)(r,"square-meters",s);i.area=Object(k.b)(e,t,s);break}}const n=function(e){switch(e){case"metric":return"metric";case"imperial":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-meters":return"meters";case"square-kilometers":return"kilometers";case"acres":return"imperial";case"ares":case"hectares":return"metric";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";default:return null}}(s);if(n)switch(n){case"metric":i.perimeter=Object(k.h)(e,a,"meters");break;case"imperial":i.perimeter=Object(k.e)(e,a,"meters");break;default:{const t=Object(o.c)(a,"meters",n);i.perimeter=Object(k.b)(e,t,n);break}}else i.perimeter="";return i}(this.messages,t,this.unit):null;if(this._set("measurementLabel",r),!s&&!i)return;const{fillColor:a,pathColor:n,pathWidth:c}=this.palette,l=[];s&&l.push(new D.a({geometry:s,symbol:new M.a({color:a,outline:new _.a({width:0})})})),i&&l.push(new D.a({geometry:i,symbol:new _.a({color:n,width:c})})),s&&r&&l.push(new D.a({geometry:s.centroid,symbol:new x.a({color:[255,255,255,1],font:new g.a({size:14,family:"sans-serif"}),haloColor:[0,0,0,.5],haloSize:2,text:r.area})})),this._graphicsLayer.addMany(l)}};function E(e,t,s,i){const r=new L.a({style:"circle",color:i.handleColor,size:i.handleWidth,outline:{type:"simple-line",width:0}}),a=new L.a({style:"circle",color:i.handleColor,size:1.5*i.handleWidth,outline:{type:"simple-line",width:0}}),n=new D.a({geometry:e,symbol:r});return new C.a({view:t,layer:s,graphic:n,focusedSymbol:a})}function V(e){if(!e)return!1;const{isGeographic:t,isWebMercator:s,isWGS84:i}=e;return t&&!i&&!Object(I.g)(e)||!t&&!s}Object(i.a)([Object(a.b)()],z.prototype,"cursor",void 0),Object(i.a)([Object(a.b)({value:!0})],z.prototype,"editable",null),Object(i.a)([Object(a.b)({type:Number})],z.prototype,"geodesicDistanceThreshold",void 0),Object(i.a)([Object(a.b)({readOnly:!0})],z.prototype,"measurement",void 0),Object(i.a)([Object(a.b)({readOnly:!0})],z.prototype,"measurementLabel",void 0),Object(i.a)([Object(a.b)()],z.prototype,"messages",void 0),Object(i.a)([Object(a.b)()],z.prototype,"palette",void 0),Object(i.a)([Object(a.b)()],z.prototype,"unit",void 0),Object(i.a)([Object(a.b)({constructOnly:!0})],z.prototype,"view",void 0),z=Object(i.a)([Object(c.a)("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],z);var H=z,B=s("Pt/X"),P=s("fqh+");const J={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:2,pathColor:[255,128,0,1],fillColor:[255,128,0,.3]},K=r.a.getLogger("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel");let N=class extends P.a{constructor(e){super(e),this.supportedViewType="2d",this._handles=new b.a,this.geodesicDistanceThreshold=1e5,this.measurement=null,this.measurementLabel=null,this.palette=J,this.tool=null}initialize(){this._handles.add([Object(d.init)(this,["unit","palette","geodesicDistanceThreshold"],(e,t,s)=>{this.tool&&(this.tool[s]=e)})])}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}get state(){var e,t;return this.isDisabled||null==(t=null==(e=this.view)?void 0:e.spatialReference)||V(t)&&!Object(S.h)()?"disabled":this.tool&&this.tool.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){void 0!==e?this._override("unit",this._validateUnit(e)):this._clearOverride("unit")}get unitOptions(){return o.p}set unitOptions(e){void 0!==e?this._override("unitOptions",this._validateUnits(e)):this._clearOverride("unitOptions")}start(){return this.createTool()}clear(){this.removeTool()}createToolParams(){return{toolConstructor:H,constructorArguments:()=>({geodesicDistanceThreshold:this.geodesicDistanceThreshold,palette:this.palette,unit:this.unit})}}logUnsupportedError(){K.error("AreaMeasurement2D widget is not implemented for SceneView")}logError(...e){K.error(...e)}_validateUnit(e){return-1!==this.unitOptions.indexOf(e)?e:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]}_validateUnits(e=[]){const t=e.filter(e=>-1!==o.p.indexOf(e));return 0===t.length?o.p.slice():t}};Object(i.a)([Object(a.b)(B.a)],N.prototype,"defaultUnit",void 0),Object(i.a)([Object(a.b)({type:Number})],N.prototype,"geodesicDistanceThreshold",void 0),Object(i.a)([Object(a.b)({readOnly:!0,aliasOf:"tool.measurement"})],N.prototype,"measurement",void 0),Object(i.a)([Object(a.b)({readOnly:!0,aliasOf:"tool.measurementLabel"})],N.prototype,"measurementLabel",void 0),Object(i.a)([Object(a.b)()],N.prototype,"palette",void 0),Object(i.a)([Object(a.b)({readOnly:!0})],N.prototype,"state",null),Object(i.a)([Object(a.b)({constructOnly:!0,readOnly:!0})],N.prototype,"tool",void 0),Object(i.a)([Object(a.b)({type:String})],N.prototype,"unit",null),Object(i.a)([Object(a.b)({type:[String]})],N.prototype,"unitOptions",null),N=Object(i.a)([Object(c.a)("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],N);var Y=N;const Z="esri-area-measurement-2d",X={buttonDisabled:"esri-button--disabled",widgetIcon:"esri-icon-measure-area",base:Z+" esri-widget esri-widget--panel",container:Z+"__container",hint:Z+"__hint",hintText:Z+"__hint-text",panelError:Z+"__panel--error",measurement:Z+"__measurement",measurementItem:Z+"__measurement-item",measurementItemDisabled:Z+"__measurement-item--disabled",measurementItemTitle:Z+"__measurement-item-title",measurementItemValue:Z+"__measurement-item-value",settings:Z+"__settings",units:Z+"__units",unitsLabel:Z+"__units-label",unitsSelect:Z+"__units-select esri-select",unitsSelectWrapper:Z+"__units-select-wrapper",actionSection:Z+"__actions",newMeasurementButton:Z+"__clear-button esri-button esri-button--primary"};let F=class extends p.a{constructor(e,t){super(e,t),this.active=null,this.iconClass=X.widgetIcon,this.label=void 0,this.messages=null,this.messagesUnits=null,this.unit=null,this.unitOptions=null,this.view=null,this.viewModel=new Y}render(){const{id:e,viewModel:t,visible:s}=this,{active:i,isSupported:r,measurementLabel:a,state:n,unit:c,unitOptions:l}=t,u="disabled"===n,h="ready"===n,p="measuring"===n||"measured"===n,{messages:b,messagesUnits:d}=this,O=i&&h?Object(m.a)("section",{key:"hint",class:X.hint},Object(m.a)("p",{class:X.hintText},b.hint)):null,j=r?null:Object(m.a)("section",{key:"unsupported",class:X.panelError},Object(m.a)("p",null,b.unsupported)),y=(e,t,s)=>t?Object(m.a)("div",{key:s+"-enabled",class:X.measurementItem},Object(m.a)("span",{class:X.measurementItemTitle},e),Object(m.a)("span",{class:X.measurementItemValue},t)):Object(m.a)("div",{key:s+"-disabled",class:this.classes(X.measurementItem,X.measurementItemDisabled),"aria-disabled":"true"},Object(m.a)("span",{class:X.measurementItemTitle},e)),v=p?Object(m.a)("section",{key:"measurement",class:X.measurement},y(b.area,a.area,"area"),y(b.perimeter,a.perimeter,"perimeter")):null,f=e+"__units",_=Object(m.a)("section",{key:"units",class:X.units},Object(m.a)("label",{class:X.unitsLabel,for:f},b.unit),Object(m.a)("div",{class:X.unitsSelectWrapper},Object(m.a)("select",{class:X.unitsSelect,id:f,onchange:this._changeUnit,bind:this,value:c},l.map(e=>{var t;return Object(m.a)("option",{key:e,value:e},Object(o.l)(e)?d.systems[e]:null==(t=d.units[e])?void 0:t.pluralCapitalized)})))),g=p?Object(m.a)("div",{key:"settings",class:X.settings},_):null,w=!r||i&&!p?null:Object(m.a)("div",{class:X.actionSection},Object(m.a)("button",{disabled:u,class:this.classes(X.newMeasurementButton,u&&X.buttonDisabled),bind:this,onclick:this._newMeasurement,title:b.newMeasurement,type:"button","aria-label":b.newMeasurement},b.newMeasurement)),M=s?Object(m.a)("div",{class:X.container},j,O,g,v,w):null;return Object(m.a)("div",{class:X.base},M)}_newMeasurement(){Object(l.l)(this.viewModel.start())}_changeUnit(e){const t=e.target,s=t.options[t.selectedIndex];s&&(this.viewModel.unit=s.value)}};Object(i.a)([Object(n.a)("viewModel.active")],F.prototype,"active",void 0),Object(i.a)([Object(a.b)()],F.prototype,"iconClass",void 0),Object(i.a)([Object(a.b)({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],F.prototype,"label",void 0),Object(i.a)([Object(a.b)(),Object(h.a)("esri/widgets/AreaMeasurement2D/t9n/AreaMeasurement2D")],F.prototype,"messages",void 0),Object(i.a)([Object(a.b)(),Object(h.a)("esri/core/t9n/Units")],F.prototype,"messagesUnits",void 0),Object(i.a)([Object(n.a)("viewModel.unit")],F.prototype,"unit",void 0),Object(i.a)([Object(n.a)("viewModel.unitOptions")],F.prototype,"unitOptions",void 0),Object(i.a)([Object(n.a)("viewModel.view")],F.prototype,"view",void 0),Object(i.a)([Object(a.b)({type:Y})],F.prototype,"viewModel",void 0),Object(i.a)([Object(n.a)("viewModel.visible")],F.prototype,"visible",void 0),Object(i.a)([Object(u.a)()],F.prototype,"_newMeasurement",null),Object(i.a)([Object(u.a)()],F.prototype,"_changeUnit",null),F=Object(i.a)([Object(c.a)("esri.widgets.AreaMeasurement2D")],F),t.default=F}}]);