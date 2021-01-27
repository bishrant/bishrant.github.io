(function(){var e={"esri/tasks/support/IdentifyResult":"A0Z0","esri/tasks/support/IdentifyParameters":"ULj+","esri/layers/support/layerUtils":"Uq3m","esri/tasks/IdentifyTask":"Z1iv","esri/rest/identify":"iP6Z","esri/tasks/operations/identify":"zjrk"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{A0Z0:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("jZlN"),r("ycL1"),r("LxLY"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o,a,s){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.feature=null,r.layerId=null,r.layerName=null,r}return r.__extends(t,e),t.prototype.readFeature=function(e,t){return n.fromJSON({attributes:r.__assign({},t.attributes),geometry:r.__assign({},t.geometry)})},t.prototype.writeFeature=function(e,t){if(e){var n=e.attributes,o=e.geometry;n&&(t.attributes=r.__assign({},n)),a.isSome(o)&&(t.geometry=o.toJSON(),t.geometryType=i.typeKebabDictionary.toJSON(o.type))}},r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r.__decorate([s.property({type:n})],t.prototype,"feature",void 0),r.__decorate([s.reader("feature",["attributes","geometry"])],t.prototype,"readFeature",null),r.__decorate([s.writer("feature")],t.prototype,"writeFeature",null),r.__decorate([s.property({type:Number,json:{write:!0}})],t.prototype,"layerId",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"layerName",void 0),r.__decorate([s.subclass("esri.tasks.support.IdentifyResult")],t)}(o.JSONSupport)}).apply(null,i))||(e.exports=n)},EXxd:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("fXoL"),r("aZ8m"),r("Nvl2")],void 0===(n=(function(e,t,r,i,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MMPHomeComponent=void 0,i=r.__importStar(i),n=r.__importStar(n),o=r.__importStar(o);var a=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.\u0275\u0275defineComponent({type:e,selectors:[["app-mmphome"]],decls:3,vars:4,consts:[[1,"parentContainer"],[3,"headerColor","title"],[1,"esriMap"]],template:function(e,t){1&e&&(i.\u0275\u0275elementStart(0,"main",0),i.\u0275\u0275element(1,"app-header",1),i.\u0275\u0275element(2,"app-esrimap",2),i.\u0275\u0275elementEnd()),2&e&&(i.\u0275\u0275classMap("mmp-theme"),i.\u0275\u0275advance(1),i.\u0275\u0275property("headerColor","rgba(97, 117, 19, 0.5)")("title","MAP MY PROPERTY"))},directives:[n.HeaderComponent,o.EsrimapComponent],styles:[""]}),e}();t.MMPHomeComponent=a}).apply(null,i))||(e.exports=n)},NpA2:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("tyNb"),r("ofXK"),r("IwBl"),r("EXxd"),r("tj0F"),r("fXoL"),r("tyNb")],void 0===(n=(function(e,t,r,i,n,o,a,s,l,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MMPHomepageModule=void 0,l=r.__importStar(l),p=r.__importStar(p);var d=[{path:"",component:a.MMPHomeComponent}],c=function(){function e(){}return e.\u0275mod=l.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=l.\u0275\u0275defineInjector({factory:function(t){return new(t||e)},imports:[[n.CommonModule,s.EsriMapModule,i.RouterModule.forChild(d),o.HeaderModule],i.RouterModule]}),e}();t.MMPHomepageModule=c}).apply(null,i))||(e.exports=n)},Nvl2:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("HEKD"),r("krU8"),r("1Zcn"),r("VcYX"),r("RYqx"),r("iy1n"),r("GF+I"),r("fXoL"),r("2uI/"),r("ofXK"),r("j/Vj"),r("iy1n"),r("T6IO"),r("ysC3"),r("bUUP"),r("DWcW"),r("/rtH"),r("7HKM"),r("GxbR")],void 0===(n=(function(e,t,r,i,n,o,a,s,l,p,d,c,u,m,y,h,f,g,v,b,_,w){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EsrimapComponent=void 0,o=r.__importDefault(o),s=r.__importDefault(s),d=r.__importStar(d),c=r.__importStar(c),u=r.__importStar(u),m=r.__importStar(m),y=r.__importStar(y),h=r.__importStar(h),f=r.__importStar(f),g=r.__importStar(g),v=r.__importStar(v),b=r.__importStar(b),_=r.__importStar(_),w=r.__importStar(w);var M=["mapViewNode"],S=["searchBar"],x=["graphicsStore"];function C(e,t){1&e&&(d.\u0275\u0275namespaceSVG(),d.\u0275\u0275elementStart(0,"svg",27),d.\u0275\u0275element(1,"path",28),d.\u0275\u0275elementEnd())}function L(e,t){1&e&&(d.\u0275\u0275namespaceSVG(),d.\u0275\u0275elementStart(0,"svg",29),d.\u0275\u0275element(1,"path",28),d.\u0275\u0275elementEnd())}var V=function(){function e(e){var t=this;this.esrimapService=e,this.clickToAddText=!1,this.sketchVM=new o.default,this.sidebarVisible=window.innerWidth>640,this.geomLabelsSketchVM=new o.default,this.geomLabelsGraphicsLayer=new s.default({id:"geomlabels"}),this.polygonGraphicsLayer=i.CreatePolygonGraphicsLayer(),this.textGraphicsLayer=i.CreateTextGraphicsLayer(),this.showCoordinates=function(e){t.mapCoords="Lat: "+e.latitude.toFixed(5)+" &nbsp; Long: "+e.longitude.toFixed(5)},this.closeOtherPanels=function(e){var r=t.accordionPanels.filter((function(t){return t.title===e}));r.length>0&&r[0].toggleOthers()},this.showMapCoordinates=function(){t.mapView&&(t.mapView.watch("stationary",(function(){t.showCoordinates(t.mapView.center)})),t.mapView.on("pointer-move",(function(e){t.showCoordinates(t.mapView.toMap({x:e.x,y:e.y}))})))},this.initializeMap=function(){return r.__awaiter(t,void 0,void 0,(function(){var e;return r.__generator(this,(function(t){try{this.mapView=a.createMapView(this.mapViewEl,this.searchBarDiv),this.mapView.map.addMany([this.polygonGraphicsLayer,this.textGraphicsLayer,this.geomLabelsGraphicsLayer]),this.sketchVM=n.SetupSketchViewModel(this.polygonGraphicsLayer,this.mapView),this.sketchVM.updatePointSymbol=e={type:"simple-marker",style:"circle",color:"cyan",size:"20px",outline:{color:[0,0,0],width:1}},this.sketchVM.activePointSymbol=e,this.showMapCoordinates(),this.mapView.on("layerview-create-error",(function(e){var t=new Error;throw t.message=e.error.message,t.name=e.error.name,t}))}catch(r){console.error("Map load error ",r)}return[2]}))}))}}return e.prototype.undoFromKeyboard=function(){p.isMapViewActive()&&this.graphicsStoreEl.undo()},e.prototype.redoFromKeyboard=function(){p.isMapViewActive()&&this.graphicsStoreEl.redo()},e.prototype.deleteFromKeyboard=function(){p.isMapViewActive()&&this.graphicsStoreEl.delete()},e.prototype.redoFromKeyboardMac=function(){p.isMapViewActive()&&this.graphicsStoreEl.redo()},e.prototype.undoFromKeyboardMac=function(){p.isMapViewActive()&&this.graphicsStoreEl.undo()},e.prototype.ngOnInit=function(){var e=this;this.initializeMap(),this.esrimapService.closeAllPanelsExcept.subscribe((function(t){return e.closeOtherPanels(t)}))},e.\u0275fac=function(t){return new(t||e)(d.\u0275\u0275directiveInject(c.EsrimapService))},e.\u0275cmp=d.\u0275\u0275defineComponent({type:e,selectors:[["app-esrimap"]],viewQuery:function(e,t){if(1&e&&(d.\u0275\u0275staticViewQuery(M,!0),d.\u0275\u0275staticViewQuery(S,!0),d.\u0275\u0275staticViewQuery(x,!0),d.\u0275\u0275viewQuery(l.AccordionPanelComponent,!0)),2&e){var r=void 0;d.\u0275\u0275queryRefresh(r=d.\u0275\u0275loadQuery())&&(t.mapViewEl=r.first),d.\u0275\u0275queryRefresh(r=d.\u0275\u0275loadQuery())&&(t.searchBarDiv=r.first),d.\u0275\u0275queryRefresh(r=d.\u0275\u0275loadQuery())&&(t.graphicsStoreEl=r.first),d.\u0275\u0275queryRefresh(r=d.\u0275\u0275loadQuery())&&(t.accordionPanels=r)}},hostBindings:function(e,t){1&e&&d.\u0275\u0275listener("keydown.control.z",(function(){return t.undoFromKeyboard()}))("keydown.control.y",(function(){return t.redoFromKeyboard()}))("keydown.delete",(function(){return t.deleteFromKeyboard()}),!1,d.\u0275\u0275resolveDocument)("keydown.meta.shift.z",(function(){return t.redoFromKeyboardMac()}))("keydown.meta.z",(function(){return t.undoFromKeyboardMac()}))},decls:35,vars:23,consts:[[1,"sidebarBlanket"],["sidebar",""],[1,"sidebar"],[1,"sidebarToggle",3,"click"],["aria-hidden","true","focusable","false","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512","class","showHideSvg rotate90",4,"ngIf"],["aria-hidden","true","focusable","false","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512","class","showHideSvg rotate270",4,"ngIf"],["panelTitle","Draw"],["drawAccPanel",""],[3,"sketchVM","mapView","textGraphicsLayer","geomLabelsSketchVM","geomLabelsGraphicsLayer","polygonGraphicsLayer"],["panelTitle","Themes"],[3,"mapView"],["panelTitle","Import | Export"],["panelTitle","Export Map to PDF"],[3,"mapView","sketchVM"],[1,"mapBlanket"],[1,"headerBlanket","hidden","md:block"],[1,"header","headerRow","secondary"],["searchBar",""],[1,"coordsDisplay","hidden","md:inline"],[3,"innerHTML"],["id","widgetDiv",1,"esri-widget"],[1,"translucentPadding","mapViewNodeBlanket"],["id","parent",1,"mapViewNode"],["mapViewNode",""],["id","textboxes"],[1,"graphicsControls",3,"sketchVM","textGraphicsLayer"],["graphicsStore",""],["aria-hidden","true","focusable","false","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512",1,"showHideSvg","rotate90"],["d","M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"],["aria-hidden","true","focusable","false","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512",1,"showHideSvg","rotate270"]],template:function(e,t){1&e&&(d.\u0275\u0275elementStart(0,"div",0,1),d.\u0275\u0275elementStart(2,"div",2),d.\u0275\u0275elementStart(3,"button",3),d.\u0275\u0275listener("click",(function(){return t.sidebarVisible=!t.sidebarVisible})),d.\u0275\u0275template(4,C,2,0,"svg",4),d.\u0275\u0275text(5),d.\u0275\u0275template(6,L,2,0,"svg",5),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(7,"app-accordion"),d.\u0275\u0275elementStart(8,"app-accordion-panel",6,7),d.\u0275\u0275element(10,"app-drawtools",8),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(11,"app-accordion-panel",9),d.\u0275\u0275element(12,"app-mmp-themes",10),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(13,"app-accordion-panel",11),d.\u0275\u0275element(14,"app-import-export",10),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(15,"app-accordion-panel",12),d.\u0275\u0275element(16,"app-print-tool",13),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(17,"div",14),d.\u0275\u0275elementStart(18,"div",15),d.\u0275\u0275elementStart(19,"div",16),d.\u0275\u0275element(20,"div",null,17),d.\u0275\u0275elementStart(22,"div",18),d.\u0275\u0275text(23," Mouse Coordinates [ "),d.\u0275\u0275element(24,"span",19),d.\u0275\u0275text(25," ] "),d.\u0275\u0275element(26,"div",20),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(27,"div",21),d.\u0275\u0275elementStart(28,"div",22,23),d.\u0275\u0275element(30,"div",24),d.\u0275\u0275element(31,"app-basemap-widget",10),d.\u0275\u0275element(32,"app-swipe-widget",10),d.\u0275\u0275elementEnd(),d.\u0275\u0275element(33,"app-graphic-store",25,26),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275classProp("sidebarHidden",!t.sidebarVisible),d.\u0275\u0275advance(3),d.\u0275\u0275classProp("sideOpen",t.sidebarVisible),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",t.sidebarVisible),d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1(" ",t.sidebarVisible?"Hide":"Show"," "),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",!t.sidebarVisible),d.\u0275\u0275advance(4),d.\u0275\u0275property("sketchVM",t.sketchVM)("mapView",t.mapView)("textGraphicsLayer",t.textGraphicsLayer)("geomLabelsSketchVM",t.geomLabelsSketchVM)("geomLabelsGraphicsLayer",t.geomLabelsGraphicsLayer)("geomLabelsGraphicsLayer",t.geomLabelsGraphicsLayer)("polygonGraphicsLayer",t.polygonGraphicsLayer),d.\u0275\u0275advance(2),d.\u0275\u0275property("mapView",t.mapView),d.\u0275\u0275advance(2),d.\u0275\u0275property("mapView",t.mapView),d.\u0275\u0275advance(2),d.\u0275\u0275property("mapView",t.mapView)("sketchVM",t.sketchVM),d.\u0275\u0275advance(8),d.\u0275\u0275property("innerHTML",t.mapCoords,d.\u0275\u0275sanitizeHtml),d.\u0275\u0275advance(7),d.\u0275\u0275property("mapView",t.mapView),d.\u0275\u0275advance(1),d.\u0275\u0275property("mapView",t.mapView),d.\u0275\u0275advance(1),d.\u0275\u0275property("sketchVM",t.sketchVM)("textGraphicsLayer",t.textGraphicsLayer))},directives:[u.NgIf,m.AccordionComponent,y.AccordionPanelComponent,h.DrawtoolsComponent,f.MMPThemesComponent,g.ImportExportComponent,v.PrintToolComponent,b.BasemapWidgetComponent,_.SwipeWidgetComponent,w.GraphicsStoreComponent],styles:[".headerRow[_ngcontent-%COMP%]{height:50px;align-items:center;color:#000;padding-left:10px}.secondary[_ngcontent-%COMP%]{color:#fff;border-radius:5px 0 0 5px}.mapViewNode[_ngcontent-%COMP%]{height:100%;width:100%}.graphicsControls[_ngcontent-%COMP%]{width:300px;position:absolute;bottom:20px;z-index:10;left:0;right:0;margin:auto}.mapBlanket[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.mapViewNodeBlanket[_ngcontent-%COMP%]{flex:1;padding:5px 0 0 5px;position:relative}.coordsDisplay[_ngcontent-%COMP%]{text-align:right;padding-right:10px;font-size:14px;flex:1;color:#dad2d2}.headerBlanket[_ngcontent-%COMP%], .sidebarBlanket[_ngcontent-%COMP%]{padding:5px 0 0 5px}.sidebarBlanket[_ngcontent-%COMP%]{width:270px}.sidebar[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:5px 5px 0 0}.sidebarToggle[_ngcontent-%COMP%]{right:-68px;color:#fff;position:absolute;background:#000;padding:5px;display:none;border-radius:5px;justify-content:center;align-items:center}@media only screen and (max-width:600px){.sidebarBlanket[_ngcontent-%COMP%]{padding:5px 0 0 5px;position:fixed;left:0;z-index:9000;background:transparent!important;background-color:transparent!important}.sidebarToggle[_ngcontent-%COMP%]{display:flex}.sidebarHidden[_ngcontent-%COMP%]{left:-269px}}.sideOpen[_ngcontent-%COMP%]{right:-58px}.showHideSvg[_ngcontent-%COMP%]{fill:#fff;height:20px;display:inline-block}.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}.rotate270[_ngcontent-%COMP%]{transform:rotate(270deg)}.headerRow[_ngcontent-%COMP%]{background-color:rgba(97,117,19,.5);display:flex}.secondary[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{background-color:#161616}.sidebar[_ngcontent-%COMP%]{overflow-y:auto}.headerBlanket[_ngcontent-%COMP%], .sidebarBlanket[_ngcontent-%COMP%], .translucentPadding[_ngcontent-%COMP%]{background-color:rgba(97,117,19,.5)}"]}),e}();t.EsrimapComponent=V}).apply(null,i))||(e.exports=n)},"ULj+":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("TMur"),r("9gfz"),r("ycL1"),r("Vx27"),r("1dvD"),r("Lzvl")],void 0===(n=(function(e,t,r,i,n,o,a,s,l,p){"use strict";var d=function(e){function t(t){var r=e.call(this,t)||this;return r.dpi=96,r.dynamicLayerInfos=null,r.gdbVersion=null,r.geometry=null,r.geometryPrecision=null,r.height=400,r.layerDefinitions=null,r.layerIds=null,r.layerOption="top",r.layerTimeOptions=null,r.mapExtent=null,r.maxAllowableOffset=null,r.returnFieldName=!1,r.returnGeometry=!1,r.returnM=!1,r.returnUnformattedValues=!1,r.returnZ=!1,r.spatialReference=null,r.timeExtent=null,r.tolerance=null,r.width=400,r}return r.__extends(t,e),r.__decorate([s.property({type:Number,json:{write:!0}})],t.prototype,"dpi",void 0),r.__decorate([s.property({type:[Object],json:{read:{source:"dynamicLayers"},write:{target:"dynamicLayers"}}})],t.prototype,"dynamicLayerInfos",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),r.__decorate([s.property({types:n.geometryTypes,json:{read:p.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],t.prototype,"height",void 0),r.__decorate([s.property({type:[Object],json:{write:!0}})],t.prototype,"layerDefinitions",void 0),r.__decorate([s.property({type:[Number],json:{write:!0}})],t.prototype,"layerIds",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"layerOption",void 0),r.__decorate([s.property({type:[Object],json:{write:!0}})],t.prototype,"layerTimeOptions",void 0),r.__decorate([s.property({type:i.Extent,json:{write:!0}})],t.prototype,"mapExtent",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),r.__decorate([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnFieldName",void 0),r.__decorate([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnGeometry",void 0),r.__decorate([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnM",void 0),r.__decorate([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnUnformattedValues",void 0),r.__decorate([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnZ",void 0),r.__decorate([s.property({type:i.SpatialReference,json:{write:!0}})],t.prototype,"spatialReference",void 0),r.__decorate([s.property({type:o,json:{write:!0}})],t.prototype,"timeExtent",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],t.prototype,"width",void 0),r.__decorate([s.subclass("esri.tasks.support.IdentifyParameters")],t)}(a.JSONSupport);return d.from=l.default(d),d}).apply(null,i))||(e.exports=n)},Uq3m:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.areLabelsVisible=t.getLayersForScale=t.serializeTimeOptions=t.serializeLayerDefinitions=t.isBaseLayer=t.isTiledLayer=void 0,t.isTiledLayer=function(e){return e&&"base-tile"===e.type||"tile"===e.type||"elevation"===e.type||"imagery-tile"===e.type||"base-elevation"===e.type||"open-street-map"===e.type||"wcs"===e.type||"web-tile"===e.type||"wmts"===e.type||"vector-tile"===e.type},t.isBaseLayer=function(e){return e.parent&&"esri.Basemap"===e.parent.declaredClass&&e.parent.baseLayers.indexOf(e)>-1},t.serializeLayerDefinitions=function(e){var t=/[:;]/,r=[],i=!1;if(e&&(e.forEach((function(e,n){r.push([n,e]),!i&&t.test(e)&&(i=!0)})),r.length>0)){var n=void 0;if(i){var o={};r.forEach((function(e){o[e[0]]=e[1]})),n=JSON.stringify(o)}else{var a=[];r.forEach((function(e){a.push(e[0]+":"+e[1])})),n=a.join(";")}return n}return null},t.serializeTimeOptions=function(e){if(e){var t=[];return e.forEach((function(e,r){t.push('"'+r+'":'+JSON.stringify(e))})),t.length?"{"+t.join(",")+"}":void 0}},t.getLayersForScale=function(e,t){var r=[];if(e>0&&t)for(var i=function(i){if(t[i].parentLayerId>=0&&-1===r.indexOf(t[i].parentLayerId)&&t.some((function(e){return e.id===t[i].parentLayerId})))return"continue";if(t[i].id>=0){var n=!0,o=t[i].maxScale,a=t[i].minScale;(o>0||a>0)&&(o>0&&a>0?n=o<=e&&e<=a:o>0?n=o<=e:a>0&&(n=e<=a)),n&&r.push(t[i].id)}},n=0;n<t.length;n++)i(n);return r},t.areLabelsVisible=function(e){return!0===e.labelsVisible&&null!=e.labelingInfo&&e.labelingInfo.length>0}}).apply(null,i))||(e.exports=n)},XYMc:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ofXK"),r("kmnG"),r("DC2l"),r("3Pt+"),r("Wqx0"),r("FhEM"),r("fXoL")],void 0===(n=(function(e,t,r,i,n,o,a,s,l,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MMPThemesModule=void 0,p=r.__importStar(p);var d=function(){function e(){}return e.\u0275mod=p.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=p.\u0275\u0275defineInjector({factory:function(t){return new(t||e)},providers:[],imports:[[i.CommonModule,n.MatFormFieldModule,a.FormsModule,o.ModalModule,l.HelpbuttonModule,s.SliderModule]]}),e}();t.MMPThemesModule=d}).apply(null,i))||(e.exports=n)},Z1iv:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("iP6Z"),r("FPqO")],void 0===(n=(function(e,t,r,i,n,o){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.gdbVersion=null,r.url=null,r}return r.__extends(t,e),t.prototype.execute=function(e,t){return this.gdbVersion&&!e.gdbVersion&&(e.gdbVersion=this.gdbVersion),n.identify(this.url,e,t)},r.__decorate([i.property()],t.prototype,"gdbVersion",void 0),r.__decorate([i.property()],t.prototype,"url",void 0),r.__decorate([i.subclass("esri.tasks.IdentifyTask")],t)}(o)}).apply(null,i))||(e.exports=n)},aWe4:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MMPSoil=void 0,t.MMPSoil=function(e,t,r,i,n,o,a,s,l,p,d,c,u,m,y,h,f,g){void 0===e&&(e=""),void 0===t&&(t=""),void 0===r&&(r=""),void 0===i&&(i=""),void 0===n&&(n=""),void 0===o&&(o=""),void 0===a&&(a=""),void 0===s&&(s=""),void 0===l&&(l=""),void 0===p&&(p=""),void 0===d&&(d=""),void 0===c&&(c=""),void 0===u&&(u=""),void 0===m&&(m=""),void 0===y&&(y=""),void 0===h&&(h=""),void 0===f&&(f=""),void 0===g&&(g=""),this.mukey=e,this.musym=t,this.muname=r,this.slopegradwta=i,this.forpehrtdcp=n,this.flodfreqdcd=o,this.drclassdcd=a,this.hydclprs=s,this.pH=l,this.ecoclassid=p,this.ecoclassname=d,this.si=c,this.plantcomname=u,this.fpa=m,this.rpa=y,this.saversion=h,this.tabularversion=f,this.spatialversion=g}}).apply(null,i))||(e.exports=n)},iP6Z:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("zp6E"),r("fw2w"),r("p09i"),r("zjrk"),r("ULj+"),r("A0Z0")],void 0===(n=(function(e,t,r,i,n,o,a,s,l){"use strict";function p(e){var t=e.data;t.results=t.results||[];var r={results:[]};return r.results=t.results.map((function(e){return l.fromJSON(e)})),r}Object.defineProperty(t,"__esModule",{value:!0}),t.identify=void 0,t.identify=function(e,t,l){return r.__awaiter(this,void 0,void 0,(function(){var d,c;return r.__generator(this,(function(u){return t=function(e){return s.from(e)}(t),d=t.geometry?[t.geometry]:[],(c=o.parseUrl(e)).path+="/identify",[2,n.normalizeCentralMeridian(d).then((function(e){var n=a.identifyToIdentifyRESTParameters(t,{geometry:e&&e[0]}),s=o.encode(r.__assign(r.__assign(r.__assign({},c.query),{f:"json"}),n)),d=o.asValidOptions(s,l);return i(c.path,d).then(p)}))]}))}))}}).apply(null,i))||(e.exports=n)},tj0F:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("niHo"),r("ofXK"),r("ZRjd"),r("LAbW"),r("Kww6"),r("Wqx0"),r("XYMc"),r("ITmb"),r("XpBf"),r("M8/b"),r("fXoL")],void 0===(n=(function(e,t,r,i,n,o,a,s,l,p,d,c,u,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EsriMapModule=void 0,m=r.__importStar(m);var y=function(){function e(){}return e.\u0275mod=m.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=m.\u0275\u0275defineInjector({factory:function(t){return new(t||e)},imports:[[n.CommonModule,u.GraphicsStoreModule,o.DrawtoolsModule,l.SliderModule,p.MMPThemesModule,i.ImportExportModule,a.PrintToolModule,s.AccordionPanelModule,d.BasemapWidgetModule,c.SwipeWidgetModule]]}),e}();t.EsriMapModule=y}).apply(null,i))||(e.exports=n)},ysC3:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Z1iv"),r("ULj+"),r("dg76"),r("b9ir"),r("aWe4"),r("fXoL"),r("frIU"),r("1wtQ"),r("tk/3"),r("IQQX"),r("NVId"),r("8WOb"),r("3Pt+"),r("ofXK"),r("RGY+")],void 0===(n=(function(e,t,r,i,n,o,a,s,l,p,d,c,u,m,y,h,f,g){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MMPThemesComponent=void 0,i=r.__importDefault(i),n=r.__importDefault(n),l=r.__importStar(l),p=r.__importStar(p),d=r.__importStar(d),c=r.__importStar(c),u=r.__importStar(u),m=r.__importStar(m),y=r.__importStar(y),h=r.__importStar(h),f=r.__importStar(f),g=r.__importStar(g);var v=function(e){return{checkboxDisabled:e}},b=function(e){return{"cursor-not-allowed":e}},_=function(){function e(e,t,l,p,d){var c=this;this.mapViewService=e,this.appConfig=t,this.http=l,this.soilsService=p,this.loaderService=d,this.isIdentifyChecked=!1,this.isIdentifyDisabled=!0,this.isVisibleDisabled=!1,this.isVisibleChecked=!1,this.isSoilsDisabled=!0,this.selectedTheme="soils",this.transparency=10,this.identifyEvent=null,this.identifyParams=new n.default({tolerance:0,layerOption:"top:10"}),this.createGeologyLayer=function(){return a.CreateMapLayer("mapImage","geologyLayer",null,c.appConfig.geologyMapServerURL)},this.hideLayersExcept=function(e){["soilsLayer","vegetationLayer","geologyLayer"].forEach((function(t){if(t!==e){var r=c.getLayerRef(t);console.log(r,e),void 0!==r&&(r.visible=!1)}}))},this.queryRelatedFeaturesForGeology=function(e,t,r){c.http.get(c.appConfig.geologyMapServerURL+"/"+e+"/queryRelatedRecords?f=json&relationshipid=1&returnGeometry=false&objectids="+t+"&outFields=*").subscribe((function(e){if(console.log(e),e.relatedRecordGroups.length>0){var t=e.relatedRecordGroups[0].relatedRecords;if(t.length>0){var i=t[0].attributes,n="<b>Rock Unit Name: </b>"+i.LONG_NM+"<br>\n            <b>Rock Unit Code:</b> "+i.ROCKUNIT_CD+"<br>\n            <b>Sheet Name: </b>"+i.SHEET_NM+"<br>\n            <b>Period: </b>"+i.Period+"<br>\n            <b>Epoch or Series: </b>"+i.Epoch_or_Series+"<br>\n            <b>Group: </b>"+i.Group_+"<br>\n            <b>Description: </b>"+i.Description+"<br>\n            <b>Geo-Order Number: </b>"+i.GEOORDER_NO;c.mapView.popup.dockOptions={buttonEnabled:!0,position:"top-left"},c.mapView.popup.open({title:i.ROCKUNIT_CD,content:n,location:r,overwriteActions:!0,actions:[]})}}}))},this.executeIdentifyTask=function(e){return r.__awaiter(c,void 0,void 0,(function(){var t,n,o,a;return r.__generator(this,(function(r){switch(r.label){case 0:t=new i.default(this.activeLayer.url),this.identifyParams.width=this.mapView.width,this.identifyParams.height=this.mapView.height,this.identifyParams.mapExtent=this.mapView.extent,this.identifyParams.geometry=e,this.identifyParams.returnGeometry=!1,this.loaderService.isLoading.next(!0),r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,t.execute(this.identifyParams)];case 2:return n=r.sent(),console.log(n),n.results.length>0&&(o=parseInt(n.results[0].feature.attributes.OBJECTID),this.queryRelatedFeaturesForGeology(n.results[0].layerId,o,e),console.log(n.results[0].feature,n.results[0].layerId,n.results[0].feature.attributes.OBJECTID)),[3,5];case 3:return a=r.sent(),console.error(a),[3,5];case 4:return this.loaderService.isLoading.next(!1),[7];case 5:return[2]}}))}))},this.identifySoils=function(e){c.loaderService.isLoading.next(!0),c.soilsService.identifySoil(e,"mmp").then((function(t){var i,n,a=t.Table[0],l=new s.MMPSoil,p=0;try{for(var d=r.__values(Object.keys(l)),u=d.next();!u.done;u=d.next())null!==a[p]&&(l[u.value]=a[p]),p+=1}catch(m){i={error:m}}finally{try{u&&!u.done&&(n=d.return)&&n.call(d)}finally{if(i)throw i.error}}c.mapView.popup.dockOptions={buttonEnabled:!0,position:"top-left"},c.mapView.popup.open({title:l.musym,location:e,content:o.GetMMPSoilPopupContent(l),overwriteActions:!0,actions:[]}),c.loaderService.isLoading.next(!1)}))},this.identifyVegetation=function(e){console.log("vegetation",e)}}return e.prototype.transparencyChanged=function(e){this.transparency=e},e.prototype.ngOnInit=function(){var e=this;this.mapViewService.soilsDisabled.subscribe((function(t){e.isSoilsDisabled=t}))},e.prototype.getLayerRef=function(e){return this.mapView.map.findLayerById(e)},e.prototype.themeChanged=function(e){if(void 0===this.getLayerRef(e+"Layer")){switch(e){case"vegetation":this.vegetationLayer=a.CreateMapLayer("mapImage","vegetationLayer",null,this.appConfig.vegetationMapServerURL),this.activeLayer=this.vegetationLayer;break;case"geology":this.geologyLayer=a.CreateMapLayer("mapImage","geologyLayer",null,this.appConfig.geologyMapServerURL),this.activeLayer=this.geologyLayer;break;case"soils":this.soilsLayer=a.CreateSoilsLayer("soilsLayer",this.appConfig.ssurgoWMSURL),this.activeLayer=this.soilsLayer}this.mapView.map.add(this.activeLayer)}else this.activeLayer="soils"===e?this.soilsLayer:"vegetation"===e?this.vegetationLayer:this.geologyLayer;this.hideLayersExcept(e+"Layer"),this.activeLayer.visible=this.isVisibleChecked},e.prototype.themeVisibleChanged=function(e){this.isVisibleChecked=e,this.themeChanged(this.selectedTheme),this.activeLayer.visible=e,this.isIdentifyDisabled=!this.isVisibleChecked},e.prototype.createLayerIdentifyEvent=function(e){var t=this;e&&this.activeLayer.visible&&null===this.identifyEvent?this.identifyEvent=this.mapView.on("click",(function(e){switch(t.selectedTheme){case"soils":t.identifySoils(e.mapPoint);break;case"vegetation":t.identifyVegetation(e.mapPoint);break;case"geology":t.executeIdentifyTask(e.mapPoint)}})):e||null===this.identifyEvent||(this.identifyEvent.remove(),this.identifyEvent=null)},e.prototype.themeIdentifyChanged=function(e){this.isIdentifyChecked=e,this.createLayerIdentifyEvent(e)},e.\u0275fac=function(t){return new(t||e)(l.\u0275\u0275directiveInject(p.MapviewService),l.\u0275\u0275directiveInject(d.AppConfiguration),l.\u0275\u0275directiveInject(c.HttpClient),l.\u0275\u0275directiveInject(u.SoilsService),l.\u0275\u0275directiveInject(m.LoaderService))},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-mmp-themes"]],inputs:{mapView:"mapView"},decls:33,vars:25,consts:[[1,"py-3","relative"],[3,"header","itemName"],[1,"themesBody"],["id","soilsTheme","type","radio","name","mapTheme",3,"value","ngModel","ngModelChange","change"],["for","soilsTheme"],["type","radio","id","vegetationTheme","name","mapTheme",3,"value","ngModel","ngModelChange","change"],["for","vegetationTheme"],["type","radio","id","geologyTheme","name","mapTheme",3,"value","ngModel","ngModelChange","change"],["for","geologyTheme"],[1,"row","prl-10"],[1,"inline-flex","cursor-pointer",3,"ngClass"],["type","checkbox",1,"m-auto","form-checkbox","h-5","w-5","text-pmlo_secondary","cursor-pointer",3,"ngClass","disabled","change"],[1,"checkbox-label"],["identifyCheckbox",""],[3,"value","onChange"]],template:function(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div",0),l.\u0275\u0275element(1,"app-help-button",1),l.\u0275\u0275element(2,"br"),l.\u0275\u0275element(3,"br"),l.\u0275\u0275elementStart(4,"div",2),l.\u0275\u0275elementStart(5,"div"),l.\u0275\u0275elementStart(6,"input",3),l.\u0275\u0275listener("ngModelChange",(function(e){return t.selectedTheme=e}))("change",(function(){return t.themeChanged("soils")})),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(7,"label",4),l.\u0275\u0275text(8,"Soils"),l.\u0275\u0275elementEnd(),l.\u0275\u0275element(9,"br"),l.\u0275\u0275elementStart(10,"input",5),l.\u0275\u0275listener("ngModelChange",(function(e){return t.selectedTheme=e}))("change",(function(){return t.themeChanged("vegetation")})),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(11,"label",6),l.\u0275\u0275text(12,"TX Vegetation"),l.\u0275\u0275elementEnd(),l.\u0275\u0275element(13,"br"),l.\u0275\u0275elementStart(14,"input",7),l.\u0275\u0275listener("ngModelChange",(function(e){return t.selectedTheme=e}))("change",(function(){return t.themeChanged("geology")})),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(15,"label",8),l.\u0275\u0275text(16,"TX Geology"),l.\u0275\u0275elementEnd(),l.\u0275\u0275element(17,"br"),l.\u0275\u0275element(18,"br"),l.\u0275\u0275text(19),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(20,"div",9),l.\u0275\u0275elementStart(21,"label",10),l.\u0275\u0275elementStart(22,"input",11),l.\u0275\u0275listener("change",(function(e){return t.themeVisibleChanged(e.currentTarget.checked)})),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(23,"span",12),l.\u0275\u0275text(24,"Visible"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(25,"div",9),l.\u0275\u0275elementStart(26,"label",10),l.\u0275\u0275elementStart(27,"input",11,13),l.\u0275\u0275listener("change",(function(e){return t.themeIdentifyChanged(e.currentTarget.checked)})),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(29,"span",12),l.\u0275\u0275text(30,"Identify"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275text(31),l.\u0275\u0275elementStart(32,"app-slider",14),l.\u0275\u0275listener("onChange",(function(e){return t.transparencyChanged(e)})),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275advance(1),l.\u0275\u0275property("header","Map Themes")("itemName","themes"),l.\u0275\u0275advance(5),l.\u0275\u0275property("value","soils")("ngModel",t.selectedTheme),l.\u0275\u0275advance(4),l.\u0275\u0275property("value","vegetation")("ngModel",t.selectedTheme),l.\u0275\u0275advance(4),l.\u0275\u0275property("value","geology")("ngModel",t.selectedTheme),l.\u0275\u0275advance(5),l.\u0275\u0275textInterpolate1(" ",t.selectedTheme," "),l.\u0275\u0275advance(2),l.\u0275\u0275property("ngClass",l.\u0275\u0275pureFunction1(17,v,t.isVisibleDisabled)),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngClass",l.\u0275\u0275pureFunction1(19,b,t.isVisibleDisabled))("disabled",t.isVisibleDisabled),l.\u0275\u0275advance(4),l.\u0275\u0275property("ngClass",l.\u0275\u0275pureFunction1(21,v,t.isIdentifyDisabled)),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngClass",l.\u0275\u0275pureFunction1(23,b,t.isIdentifyDisabled))("disabled",t.isIdentifyDisabled),l.\u0275\u0275advance(4),l.\u0275\u0275textInterpolate1(" Transparency ",t.transparency,"% "),l.\u0275\u0275advance(1),l.\u0275\u0275property("value",t.transparency))},directives:[y.HelpbuttonComponent,h.RadioControlValueAccessor,h.DefaultValueAccessor,h.NgControlStatus,h.NgModel,f.NgClass,g.SliderComponent],styles:[".drawBtn[_ngcontent-%COMP%]{padding:0 5px}.themesBody[_ngcontent-%COMP%]{width:min(55%,200px);margin:auto}.themesBody[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%], .themesBody[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0;margin-right:5px}"]}),e}();t.MMPThemesComponent=_}).apply(null,i))||(e.exports=n)},zjrk:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("LxLY"),r("Lzvl"),r("qDpW"),r("Uq3m")],void 0===(n=(function(e,t,r,i,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.identifyToIdentifyRESTParameters=void 0;var a=function(e){return e.spatialReference.wkid||JSON.stringify(e.spatialReference)};t.identifyToIdentifyRESTParameters=function(e,t){var s=e.toJSON(),l=s.dpi,p=s.dynamicLayers,d=s.geometry,c=s.geometryPrecision,u=s.height,m=s.layerDefinitions,y=s.layerIds,h=s.layerOption,f=s.layerTimeOptions,g=s.mapExtent,v=s.maxAllowableOffset,b=s.returnFieldName,_=s.returnGeometry,w=s.returnUnformattedValues,M=s.returnZ,S=s.spatialReference,x=s.timeExtent,C=s.tolerance,L=s.width,V=t&&r.isSome(t.geometry)?t.geometry:null,O={geometryPrecision:c,maxAllowableOffset:v,returnFieldName:b,returnGeometry:_,returnUnformattedValues:w,returnZ:M,tolerance:C},P=V&&V.toJSON()||d;if(O.imageDisplay=L+","+u+","+l,P&&(delete P.spatialReference,O.geometry=JSON.stringify(P),O.geometryType=i.getJsonType(P)),S?O.sr=S.wkid||JSON.stringify(S):P&&P.spatialReference?O.sr=a(P):g&&g.spatialReference&&(O.sr=a(g)),O.time=x?x.join(","):null,g&&(O.mapExtent=g.xmin+","+g.ymin+","+g.xmax+","+g.ymax),O.layers=h,y&&(O.layers+=":"+y.join(",")),m){for(var E=[],k=0;k<m.length;k++){var j=m[k];E[j.id]=j.definitionExpression}O.layerDefs=o.serializeLayerDefinitions(E)}if(p&&p.length){var T=[],I=n.getScale({extent:g,width:L,spatialReference:g.spatialReference}),N=o.getLayersForScale(I,p),R=function(e){var t=p[e],r=t.id;if(!t.subLayerIds&&y&&-1!==y.indexOf(r)&&-1!==N.indexOf(r)){var i={id:r};i.source=t.source;var n=null;if(m&&m.length){var o=m.filter((function(e){return e.id===r}))[0];n=o&&o.definitionExpression}n&&(i.definitionExpression=n);var a=void 0;f&&f[r]&&(a=f[r]),a&&(i.layerTimeOptions=a),T.push(i)}};for(k=0;k<p.length;k++)R(k);var D=JSON.stringify(T);"[]"===D&&(D="[{}]"),O.dynamicLayers=D}return O}}).apply(null,i))||(e.exports=n)}}]);