(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/views/2d/layers/KMLLayerView2D":"1Afs","arcgis-js-api/views/layers/support/Path":"20TT","arcgis-js-api/views/2d/layers/LayerView2D":"6i4F","arcgis-js-api/views/layers/support/ClipRect":"7MXx","arcgis-js-api/layers/support/Field":"KQcO","esri/layers/support/Field":"KQcO","arcgis-js-api/layers/support/kmlUtils":"N3Jt","esri/layers/support/fieldType":"Q3lp","esri/geometry/support/aaBoundingBox":"WRgd","arcgis-js-api/geometry/support/aaBoundingBox":"WRgd","arcgis-js-api/views/layers/LayerView":"WsO6","arcgis-js-api/views/layers/support/ClipArea":"ZMIQ","arcgis-js-api/views/layers/support/Geometry":"ts8o","esri/tasks/support/FeatureSet":"w1v0","arcgis-js-api/tasks/support/FeatureSet":"w1v0"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[68,97],{"1Afs":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("jZlN"),r("zp6E"),r("y4WC"),r("eIBl"),r("qMld"),r("afW+"),r("8MXS"),r("Vx27"),r("N7S/"),r("vtMp"),r("N3Jt"),r("YaB4"),r("6i4F"),r("apjU"),r("WsO6")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,l,u,y,d,c,f,h,m,v,g,w,b){var x=p.ofType(a);return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new l,t._bitmapIndex=new Map,t._mapImageContainer=new v.BitmapContainer(t.clips),t._featuresMap=new Map,t.allVisiblePoints=new x,t.allVisiblePolylines=new x,t.allVisiblePolygons=new x,t.allVisibleMapImages=new p,t.container=new v.Container,t}return r(t,e),t.prototype.hitTest=function(e,t){var r=this;if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return u.resolve(null);var i=[this._pointsView.hitTest(e,t),this._polylinesView.hitTest(e,t),this._polygonsView.hitTest(e,t)];return u.all(i).then((function(e){return e.filter((function(e){return e&&(e.layer=r.layer,e.sourceLayer=r.layer),!!e}))[0]||null}))},t.prototype.update=function(e){this._polygonsView&&this._polygonsView.update(e),this._polylinesView&&this._polylinesView.update(e),this._pointsView&&this._pointsView.update(e)},t.prototype.attach=function(){var e=this;this._handles.add([this.allVisibleMapImages.on("change",(function(t){t.added.forEach((function(t){return e._addMapImage(t)})),t.removed.forEach((function(t){return e._removeMapImage(t)}))})),this.clips.on("change",(function(){e._polygonsView.container.setClips(e.clips),e._polylinesView.container.setClips(e.clips),e._pointsView.container.setClips(e.clips),e._mapImageContainer.setClips(e.clips)}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new w.default({view:this.view,graphics:this.allVisiblePolygons}),this.container.addChild(this._polygonsView.container),this._polylinesView=new w.default({view:this.view,graphics:this.allVisiblePolylines}),this.container.addChild(this._polylinesView.container),this._pointsView=new w.default({view:this.view,graphics:this.allVisiblePoints}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(function(){return e._refreshCollections()})),this._fetchingPromise=this._fetchService().then((function(){e._fetchingPromise=null,e.notifyChange("updating")})),this._polygonsView.container.setClips(this.clips),this._polylinesView.container.setClips(this.clips),this._pointsView.container.setClips(this.clips),this._mapImageContainer.setClips(this.clips)},t.prototype.detach=function(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating},t.prototype._addMapImage=function(e){var t=this;this.view.spatialReference.isWGS84&&s(e.href,{responseType:"image"}).then((function(r){var i=r.data,n=f.fromJSON(e.extent);h.canProject(n,t.view.spatialReference)&&(n=h.project(n,t.view.spatialReference));var o=new v.Bitmap(i);o.x=n.xmin,o.y=n.ymax,o.resolution=n.width/i.naturalWidth,o.rotation=e.rotation,t._mapImageContainer.addChild(o),t._bitmapIndex.set(e,o)}))},t.prototype._fetchService=function(){var e=this;return this._handles.remove("refresh-collections"),this._getParsedKML().then((function(t){return e._fetchSublayerService(e.layer,t)}))},t.prototype._fetchSublayerService=function(e,t){var r=this,i=e.sublayers;if(!i||0===i.length)return u.resolve();var n=[];return i.forEach((function(e){var i=d.whenTrueOnce(e,"visible").then((function(){return e.load()})).then((function(){return r._getGraphicsForSublayer(e,t)})).then((function(t){return u.create((function(i){e.networkLink?i():(r._featuresMap.set(e,t),r._handles.add(y.schedule((function(){r._refreshCollections(),i()})),"refresh-collections"))}))})).then((function(){return r._fetchSublayerService(e,e.sourceJSON||t)}));e.visible&&n.push(i)})),u.all(n).then((function(){}))},t.prototype._getParsedKML=function(){return m.fetchService(this.layer.url,this.view.spatialReference,this.layer.refreshInterval).then((function(e){return m.parseKML(e.data)}))},t.prototype._getGraphicsForSublayer=function(e,t){return o(this,void 0,void 0,(function(){var r,i,o,a,s;return n(this,(function(n){switch(n.label){case 0:return r=null,t.sublayers.some((function(t){return r=t,t.id===e.id}))?(i={},(o=r.points)?[4,m.getGraphics(r.points)]:[3,2]):[2,null];case 1:o=n.sent(),n.label=2;case 2:return i.points=o,(a=r.polylines)?[4,m.getGraphics(r.polylines)]:[3,4];case 3:a=n.sent(),n.label=4;case 4:return i.polylines=a,(s=r.polygons)?[4,m.getGraphics(r.polygons)]:[3,6];case 5:s=n.sent(),n.label=6;case 6:return[2,(i.polygons=s,i.mapImages=r.mapImages,i)]}}))}))},t.prototype._refreshCollections=function(){var e=this,t=this.get("layer.visibleSublayers");this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),t&&t.length&&t.forEach((function(t){var r=e._featuresMap.get(t);r&&(e.allVisiblePoints.addMany(r.points),e.allVisiblePolylines.addMany(r.polylines),e.allVisiblePolygons.addMany(r.polygons),e.allVisibleMapImages.addMany(r.mapImages))}))},t.prototype._removeMapImage=function(e){var t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))},i([c.property()],t.prototype,"_pointsView",void 0),i([c.property()],t.prototype,"_polylinesView",void 0),i([c.property()],t.prototype,"_polygonsView",void 0),i([c.property()],t.prototype,"_fetchingPromise",void 0),i([c.property({dependsOn:["_fetchingPromise","_pointsView.updating","_polygonsView.updating","_polylinesView.updating"]})],t.prototype,"updating",void 0),i([c.subclass("esri.views.2d.layers.KMLLayerView2D")],t)}(c.declared(g.LayerView2D(b)))}).apply(null,i))||(e.exports=n)},"20TT":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return i(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r([n.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r([n.subclass("esri.views.layers.support.Path")],t)}(n.declared(o))}).apply(null,i))||(e.exports=n)},"6i4F":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,l,u,y){Object.defineProperty(t,"__esModule",{value:!0});var d=n.ofType({key:"type",base:p,typeMap:{rect:l,path:y,geometry:u}});t.LayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new d,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.when((function(){e.requestUpdate()}),(function(){}));var t=function(){return e.notifyChange("rendering")};this.handles.add([a.init(this,"suspended",(function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)}),!0),a.init(this,["fullOpacity","container"],(function(){e.container&&(e.container.opacity=e.fullOpacity)}),!0),a.on(this,"container","post-render",t),a.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,a=!n;!o&&e<=i&&(o=!0),!a&&e>=n&&(a=!0),t=o&&a}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},i([s.property({type:d,set:function(e){var t=o.referenceSetter(e,this._get("clips"),d);this._set("clips",t)}})],t.prototype,"clips",void 0),i([s.property()],t.prototype,"moving",void 0),i([s.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),i([s.property()],t.prototype,"attached",void 0),i([s.property()],t.prototype,"container",void 0),i([s.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),i([s.property({readOnly:!0})],t.prototype,"updateParameters",void 0),i([s.property()],t.prototype,"updateRequested",void 0),i([s.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),i([s.property()],t.prototype,"view",void 0),i([s.subclass("esri.views.2d.layers.LayerView2D")],t)}(s.declared(e))}}).apply(null,i))||(e.exports=n)},"7MXx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var o;return i(t,e),o=t,t.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),o=r([n.subclass("esri.views.layers.support.ClipRect")],t)}(n.declared(o))}).apply(null,i))||(e.exports=n)},KQcO:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ImIS"),r("ycL1"),r("Vx27"),r("1dvD"),r("ZsQS"),r("Q3lp")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,l){var u=new n.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function t(t){var r=e.call(this,t)||this;return r.alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}var n;return r(t,e),n=t,t.prototype.readDescription=function(e,t){var r,i=t.description;try{r=JSON.parse(i)}catch(e){}return r?r.value:null},t.prototype.readValueType=function(e,t){var r,i=t.description;try{r=JSON.parse(i)}catch(e){}return r?u.fromJSON(r.fieldValueType):null},t.prototype.clone=function(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})},i([a.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),i([a.property({type:[String,Number],json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),i([a.property()],t.prototype,"description",void 0),i([a.reader("description")],t.prototype,"readDescription",null),i([a.property({types:p.types,json:{read:{reader:p.fromJSON},write:!0}})],t.prototype,"domain",void 0),i([a.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),i([a.property({type:s.Integer,json:{write:!0}})],t.prototype,"length",void 0),i([a.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),i([a.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),i([a.enumeration.serializable()(l.kebabDict)],t.prototype,"type",void 0),i([a.property()],t.prototype,"valueType",void 0),i([a.reader("valueType",["description"])],t.prototype,"readValueType",null),n=i([a.subclass("esri.layers.support.Field")],t)}(a.declared(o.JSONSupport))}).apply(null,i))||(e.exports=n)},N3Jt:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("Q2wQ"),r("HZ3d"),r("2Atf"),r("0J3i"),r("ifLZ"),r("zp6E"),r("rg9i"),r("Z4y+"),r("WRgd"),r("hBh5"),r("hz/Y"),r("w1v0")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,l,u,y,d,c){function f(e,t,r){r.forEach((function(r){e.set(r.attributes[t],r)}))}function h(e){for(var t=u.create(),r=u.create(u.NEGATIVE_INFINITY),i=0,n=e;i<n.length;i++){var o=n[i];if(o.polygons&&o.polygons.featureSet&&o.polygons.featureSet.features)for(var a=0,s=o.polygons.featureSet.features;a<s.length;a++)y.getBoundsXYZ(t,s[a].geometry),u.expand(r,t,r);if(o.polylines&&o.polylines.featureSet&&o.polylines.featureSet.features)for(var p=0,d=o.polylines.featureSet.features;p<d.length;p++)y.getBoundsXYZ(t,d[p].geometry),u.expand(r,t,r);if(o.points&&o.points.featureSet&&o.points.featureSet.features)for(var c=0,f=o.points.featureSet.features;c<f.length;c++)y.getBoundsXYZ(t,f[c].geometry),u.expand(r,t,r);if(o.mapImages)for(var h=0,m=o.mapImages;h<m.length;h++)y.getBoundsXYZ(t,m[h].extent),u.expand(r,t,r)}return u.equals(r,u.NEGATIVE_INFINITY)?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:l.WGS84}}Object.defineProperty(t,"__esModule",{value:!0});var m={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};t.parseKML=function(e){var t=e.folders||[],r=t.slice(),i=new Map,n=new Map,o=new Map,a=new Map,s=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:o,esriGeometryPolygon:a};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=p.clone(e);t.featureSet.features=[];var r=e.featureSet.geometryType;i.set(r,t);var s=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?f(n,s,e.featureSet.features):"esriGeometryPolyline"===r?f(o,s,e.featureSet.features):"esriGeometryPolygon"===r&&f(a,s,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){s.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(i){var n=function(e,t,r){var i=function(e,t){var r;return t.some((function(t){return t.id===e&&(r=t,!0)})),r}(e,r);return i&&(i.parentFolderId=t,i.networkLink=i),i}(i,t.id,e.networkLinks);n&&r.push(n)}))})),r.forEach((function(e){e.featureInfos&&(e.points=p.clone(i.get("esriGeometryPoint")),e.polylines=p.clone(i.get("esriGeometryPolyline")),e.polygons=p.clone(i.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map((function(t){switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var r=l[t.type].get(t.id);r&&e[m[t.type]].featureSet.features.push(r);break;case"GroundOverlay":var i=s.get(t.id);i&&e.mapImages.push(i)}})),e.fullExtent=h([e]))}));var u=h(r);return{folders:t,sublayers:r,extent:u}},t.fetchService=function(e,t,r,i){return s(o.kmlServiceUrl,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:i})},t.sublayersFromJSON=function(e,t,r,i){void 0===r&&(r=null),void 0===i&&(i=[]);var n=[],o={},a=t.sublayers,s=t.folders.map((function(e){return e.id}));return a.forEach((function(t){var a=new e;if(r?a.read(t,r):a.read(t),i.length&&s.indexOf(a.id)>-1&&(a.visible=-1!==i.indexOf(a.id)),o[t.id]=a,null!=t.parentFolderId&&-1!==t.parentFolderId){var p=o[t.parentFolderId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(a)}else n.unshift(a)})),n},t.getGraphics=function(e){return i(this,void 0,void 0,(function(){var t,i,n,o,s,p,l,u,y;return r(this,(function(r){switch(r.label){case 0:t=c.fromJSON(e.featureSet),i=t.features,n=d.fromJSON(e.layerDefinition.drawingInfo.renderer),o=a.fromJSON(e.popupInfo),s=[],p=0,l=i,r.label=1;case 1:return p<l.length?[4,n.getSymbolAsync(u=l[p])]:[3,4];case 2:y=r.sent(),u.symbol=y,u.popupTemplate=o,u.visible=!!u.attributes.visibility,s.push(u),r.label=3;case 3:return p++,[3,1];case 4:return[2,s]}}))}))},t.computeExtent=h}).apply(null,i))||(e.exports=n)},Q3lp:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("ImIS")],void 0===(n=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.kebabDict=new r.default({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}).apply(null,i))||(e.exports=n)},WRgd:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("N7S/"),r("lRq4")],void 0===(n=(function(e,t,r,i){function n(e){return void 0===e&&(e=t.ZERO),[e[0],e[1],e[2],e[3],e[4],e[5]]}function o(e,t,r,i,o,a,s){return void 0===s&&(s=n()),s[0]=e,s[1]=t,s[2]=r,s[3]=i,s[4]=o,s[5]=a,s}function a(e){return e[0]>=e[3]?0:e[3]-e[0]}function s(e){return e[1]>=e[4]?0:e[4]-e[1]}function p(e){return e[2]>=e[5]?0:e[5]-e[2]}function l(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function u(e){return 6===e.length}Object.defineProperty(t,"__esModule",{value:!0}),t.create=n,t.fromValues=o,t.fromExtent=function(e,t){return void 0===t&&(t=n()),t[0]=e.xmin,t[1]=e.ymin,t[2]=e.zmin,t[3]=e.xmax,t[4]=e.ymax,t[5]=e.zmax,t},t.toExtent=function(e,t){var i=isFinite(e[2])||isFinite(e[5]);return new r(i?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})},t.fromMinMax=function(e,t,r){return void 0===r&&(r=n()),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=t[0],r[4]=t[1],r[5]=t[2],r},t.expandPointInPlace=function(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[3]&&(e[3]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[4]&&(e[4]=t[1]),t[2]<e[2]&&(e[2]=t[2]),t[2]>e[5]&&(e[5]=t[2])},t.expand=function(e,t,r){return void 0===r&&(r=e),u(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r[3]=Math.max(e[3],t[3]),r[4]=Math.max(e[4],t[4]),r[5]=Math.max(e[5],t[5])):i.is(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[3]=Math.max(e[3],t[2]),r[4]=Math.max(e[4],t[3])):2===t.length?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[3]=Math.max(e[3],t[0]),r[4]=Math.max(e[4],t[1])):3===t.length&&(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r[3]=Math.max(e[3],t[0]),r[4]=Math.max(e[4],t[1]),r[5]=Math.max(e[5],t[2])),r},t.expandWithBuffer=function(e,t,r,i,n){void 0===n&&(n=e);for(var o=e[0],a=e[1],s=e[2],p=e[3],l=e[4],u=e[5],y=0;y<i;y++)o=Math.min(o,t[r+3*y]),a=Math.min(a,t[r+3*y+1]),s=Math.min(s,t[r+3*y+2]),p=Math.max(p,t[r+3*y]),l=Math.max(l,t[r+3*y+1]),u=Math.max(u,t[r+3*y+2]);return n[0]=o,n[1]=a,n[2]=s,n[3]=p,n[4]=l,n[5]=u,n},t.expandWithOffset=function(e,t,r,i,n){return void 0===n&&(n=e),n[0]=Math.min(e[0],e[0]+t),n[3]=Math.max(e[3],e[3]+t),n[1]=Math.min(e[1],e[1]+r),n[4]=Math.max(e[4],e[4]+r),n[2]=Math.min(e[2],e[2]+i),n[5]=Math.max(e[5],e[5]+i),n},t.expandWithNestedArray=function(e,t,r,i){void 0===i&&(i=e);var n=t.length,o=e[0],a=e[1],s=e[2],p=e[3],l=e[4],u=e[5];if(r)for(var y=0;y<n;y++){var d=t[y];o=Math.min(o,d[0]),a=Math.min(a,d[1]),s=Math.min(s,d[2]),p=Math.max(p,d[0]),l=Math.max(l,d[1]),u=Math.max(u,d[2])}else for(y=0;y<n;y++)d=t[y],o=Math.min(o,d[0]),a=Math.min(a,d[1]),p=Math.max(p,d[0]),l=Math.max(l,d[1]);return i[0]=o,i[1]=a,i[2]=s,i[3]=p,i[4]=l,i[5]=u,i},t.allFinite=function(e){for(var t=0;t<6;t++)if(!isFinite(e[t]))return!1;return!0},t.width=a,t.depth=s,t.height=p,t.diameter=function(e){var t=a(e),r=p(e),i=s(e);return Math.sqrt(t*t+r*r+i*i)},t.center=function(e,t){return void 0===t&&(t=[0,0,0]),t[0]=e[0]+a(e)/2,t[1]=e[1]+s(e)/2,t[2]=e[2]+p(e)/2,t},t.size=function(e,t){return void 0===t&&(t=[0,0,0]),t[0]=a(e),t[1]=s(e),t[2]=p(e),t},t.maximumDimension=function(e){return Math.max(a(e),p(e),s(e))},t.containsPoint=function(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]},t.containsPointWithMargin=function(e,t,r){return t[0]>=e[0]-r&&t[1]>=e[1]-r&&t[2]>=e[2]-r&&t[0]<=e[3]+r&&t[1]<=e[4]+r&&t[2]<=e[5]+r},t.contains=function(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]},t.intersects=function(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])},t.offset=function(e,t,r,i,n){return void 0===n&&(n=e),n[0]=e[0]+t,n[1]=e[1]+r,n[2]=e[2]+i,n[3]=e[3]+t,n[4]=e[4]+r,n[5]=e[5]+i,n},t.setMin=function(e,t,r){return void 0===r&&(r=e),r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r},t.setMax=function(e,t,r){return void 0===r&&(r=e),r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e},t.set=l,t.empty=function(e){return e?l(e,t.NEGATIVE_INFINITY):n(t.NEGATIVE_INFINITY)},t.toRect=function(e,t){return t||(t=i.create()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t},t.fromRect=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e},t.is=u,t.isPoint=function(e){return 0===a(e)&&0===s(e)&&0===p(e)},t.equals=function(e,t,r){if(null==e||null==t)return e===t;if(!u(e)||!u(t))return!1;if(r){for(var i=0;i<e.length;i++)if(!r(e[i],t[i]))return!1}else for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0},t.wrap=function(e,t,r,i,n,a){return o(e,t,r,i,n,a,y)},t.POSITIVE_INFINITY=[-1/0,-1/0,-1/0,1/0,1/0,1/0],t.NEGATIVE_INFINITY=[1/0,1/0,1/0,-1/0,-1/0,-1/0],t.ZERO=[0,0,0,0,0,0];var y=n()}).apply(null,i))||(e.exports=n)},WsO6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,l,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw p.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},i([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([u.property()],t.prototype,"layer",void 0),i([u.property()],t.prototype,"parent",void 0),i([u.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),i([u.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),i([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([u.subclass("esri.views.layers.LayerView")],t)}(u.declared(a.HandleOwnerMixin(s.IdentifiableMixin(l.EsriPromiseMixin(o.EventedMixin(n))))))}).apply(null,i))||(e.exports=n)},ZMIQ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),r([o.subclass("esri.views.layers.support.ClipArea")],t)}(o.declared(n.JSONSupport))}).apply(null,i))||(e.exports=n)},ts8o:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o,a,s,p){var l={base:a,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var n;return i(t,e),n=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({geometry:this.geometry.clone()})},r([o.property({types:l,json:{read:s.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([o.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),n=r([o.subclass("esri.views.layers.support.Geometry")],t)}(o.declared(p))}).apply(null,i))||(e.exports=n)},w1v0:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("TMur"),r("jZlN"),r("ImIS"),r("ycL1"),r("LxLY"),r("Vx27"),r("Z4y+"),r("Lzvl"),r("KQcO")],void 0===(n=(function(e,t,r,i,n,o,a,s,p,l,u,y,d){var c=new a.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"}),f=function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.exceededTransferLimit=!1,r.features=[],r.fields=null,r.geometryType=null,r.hasM=!1,r.hasZ=!1,r.queryGeometry=null,r.spatialReference=null,r}return i(t,e),t.prototype.readFeatures=function(e,t){for(var r=u.fromJSON(t.spatialReference),i=[],n=0;n<e.length;n++){var a=e[n],s=o.fromJSON(a),l=a.geometry&&a.geometry.spatialReference;p.isSome(s.geometry)&&!l&&(s.geometry.spatialReference=r),i.push(s)}return i},t.prototype.writeGeometryType=function(e,t,r,i){if(e)c.write(e,t,r,i);else{var n=this.features;if(n)for(var o=0,a=n;o<a.length;o++){var s=a[o];if(s&&p.isSome(s.geometry))return void c.write(s.geometry.type,t,r,i)}}},t.prototype.writeSpatialReference=function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r)for(var i=0,n=r;i<n.length;i++){var o=n[i];o&&p.isSome(o.geometry)&&o.geometry.spatialReference&&(t.spatialReference=o.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var i=t.features[r];if(i.geometry){var n=e&&e[r];i.geometry=n&&n.toJSON()||i.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,r=t[0],i=t[1],n=e.translate,o=n[0],a=n[1],s=this.features,l=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-o)/r)}),(function(e){return Math.round((a-e)/i)})),u=0,y=s.length;u<y;u++)l(p.expect(s[u].geometry))||(s.splice(u,1),u--,y--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this,t=e.features,r=e.transform;if(!r)return this;for(var i=r.translate,n=i[0],o=i[1],a=r.scale,s=a[0],l=a[1],u=this._getHydrationFunction(e.geometryType,(function(e){return e*s+n}),(function(e){return o-e*l})),y=0,d=t;y<d.length;y++){var c=d[y].geometry;p.isSome(c)&&u(c)}return this},t.prototype._quantizePoints=function(e,t,r){for(var i,n,o=[],a=0,s=e.length;a<s;a++){var p=e[a];if(a>0){var l=t(p[0]),u=r(p[1]);l===i&&u===n||(o.push([l-i,u-n]),i=l,n=u)}else i=t(p[0]),n=r(p[1]),o.push([i,n])}return o.length>0?o:null},t.prototype._getQuantizationFunction=function(e,t,r){var i=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var n=y.isPolygon(e)?e.rings:e.paths,o=[],a=0,s=n.length;a<s;a++){var p=i._quantizePoints(n[a],t,r);p&&o.push(p)}return o.length>0?(y.isPolygon(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?function(e){var n;return(n=i._quantizePoints(e.points,t,r)).length>0?(e.points=n,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var i,n,o=y.isPolygon(e)?e.rings:e.paths,a=0,s=o.length;a<s;a++)for(var p=o[a],l=0,u=p.length;l<u;l++){var d=p[l];l>0?(i+=d[0],n+=d[1]):(i=d[0],n=d[1]),d[0]=t(i),d[1]=r(n)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var i,n,o=e.points,a=0,s=o.length;a<s;a++){var p=o[a];a>0?(i+=p[0],n+=p[1]):(i=p[0],n=p[1]),p[0]=t(i),p[1]=r(n)}}:void 0},r([l.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),r([l.property({type:[o],json:{write:!0}})],t.prototype,"features",void 0),r([l.reader("features")],t.prototype,"readFeatures",null),r([l.property({type:[d],json:{write:!0}})],t.prototype,"fields",void 0),r([l.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:c.read}}})],t.prototype,"geometryType",void 0),r([l.writer("geometryType")],t.prototype,"writeGeometryType",null),r([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),r([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),r([l.property({types:n.geometryTypes,json:{read:y.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),r([l.property({type:u,json:{write:!0}})],t.prototype,"spatialReference",void 0),r([l.writer("spatialReference")],t.prototype,"writeSpatialReference",null),r([l.property({json:{write:!0}})],t.prototype,"transform",void 0),r([l.subclass("esri.tasks.support.FeatureSet")],t)}(l.declared(s.JSONSupport));return f.prototype.toJSON.isDefaultToJSON=!0,f||(f={}),f}).apply(null,i))||(e.exports=n)}}]);