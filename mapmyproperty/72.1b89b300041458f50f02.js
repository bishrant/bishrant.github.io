(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/views/layers/support/Path":"20TT","arcgis-js-api/views/2d/layers/LayerView2D":"6i4F","arcgis-js-api/views/layers/support/ClipRect":"7MXx","arcgis-js-api/views/2d/layers/GeoRSSLayerView2D":"KGrj","arcgis-js-api/layers/support/Field":"KQcO","esri/layers/support/Field":"KQcO","arcgis-js-api/layers/support/fieldType":"Q3lp","esri/layers/support/fieldType":"Q3lp","arcgis-js-api/views/layers/LayerView":"WsO6","arcgis-js-api/views/layers/support/ClipArea":"ZMIQ","arcgis-js-api/views/layers/support/Geometry":"ts8o","esri/tasks/support/FeatureSet":"w1v0","arcgis-js-api/tasks/support/FeatureSet":"w1v0"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[72,97],{"20TT":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return i(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r([n.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r([n.subclass("esri.views.layers.support.Path")],t)}(n.declared(o))}).apply(null,i))||(e.exports=n)},"6i4F":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(n=(function(e,t,r,i,n,o,p,a,s,l,u,y){Object.defineProperty(t,"__esModule",{value:!0});var d=n.ofType({key:"type",base:s,typeMap:{rect:l,path:y,geometry:u}});t.LayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new d,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.when((function(){e.requestUpdate()}),(function(){}));var t=function(){return e.notifyChange("rendering")};this.handles.add([p.init(this,"suspended",(function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)}),!0),p.init(this,["fullOpacity","container"],(function(){e.container&&(e.container.opacity=e.fullOpacity)}),!0),p.on(this,"container","post-render",t),p.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,p=!n;!o&&e<=i&&(o=!0),!p&&e>=n&&(p=!0),t=o&&p}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},i([a.property({type:d,set:function(e){var t=o.referenceSetter(e,this._get("clips"),d);this._set("clips",t)}})],t.prototype,"clips",void 0),i([a.property()],t.prototype,"moving",void 0),i([a.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),i([a.property()],t.prototype,"attached",void 0),i([a.property()],t.prototype,"container",void 0),i([a.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),i([a.property({readOnly:!0})],t.prototype,"updateParameters",void 0),i([a.property()],t.prototype,"updateRequested",void 0),i([a.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),i([a.property()],t.prototype,"view",void 0),i([a.subclass("esri.views.2d.layers.LayerView2D")],t)}(a.declared(e))}}).apply(null,i))||(e.exports=n)},"7MXx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Vx27"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var o;return i(t,e),o=t,t.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),o=r([n.subclass("esri.views.layers.support.ClipRect")],t)}(n.declared(o))}).apply(null,i))||(e.exports=n)},KGrj:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("jZlN"),r("ifLZ"),r("y4WC"),r("qMld"),r("8MXS"),r("Vx27"),r("osTG"),r("hz/Y"),r("w1v0"),r("YaB4"),r("6i4F"),r("apjU"),r("WsO6")],void 0===(n=(function(e,t,r,i,n,o,p,a,s,l,u,y,d,c,f,h,v){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._graphicsViewMap={},t._popupTemplates=new Map,t.container=new c.Container,t.graphicsViews=[],t}return r(t,e),t.prototype.hitTest=function(e,t){var r=this;if(this.suspended||!this.graphicsViews.length)return a.resolve();var i=this.graphicsViews.reverse().map((function(r){return r.hitTest(e,t)}));return a.all(i).then((function(e){return e.filter((function(e,t){return e&&(e.popupTemplate=r._popupTemplates.get(r.graphicsViews[t]),e.layer=r.layer,e.sourceLayer=r.layer),!!e}))[0]||null}))},t.prototype.update=function(e){if(this.graphicsViews)for(var t=0,r=this.graphicsViews;t<r.length;t++)r[t].update(e)},t.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach((function(t){var r,i=d.fromJSON(t.featureSet),a=new(p.ofType(n))(i.features);if(e._graphicsViewMap[i.geometryType])(r=e._graphicsViewMap[i.geometryType]).graphics.addMany(a);else{var s=t.layerDefinition.drawingInfo,l=t.popupInfo?o.fromJSON(t.popupInfo):null,u=y.fromJSON(s.renderer);r=new h.default({view:e.view,graphics:a,renderer:u}),e._graphicsViewMap[i.geometryType]=r,e._popupTemplates.set(r,l),"polygon"!==i.geometryType||e.layer.polygonSymbol?"polyline"!==i.geometryType||e.layer.lineSymbol?"point"!==i.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=u.symbol):e.layer.lineSymbol=u.symbol:e.layer.polygonSymbol=u.symbol,e.graphicsViews.push(r),e.container.addChild(r.container)}})),this.handles.add([s.init(this.layer,"polygonSymbol",(function(t){e._graphicsViewMap.polygon.renderer=new u({symbol:t})})),s.init(this.layer,"lineSymbol",(function(t){e._graphicsViewMap.polyline.renderer=new u({symbol:t})})),s.init(this.layer,"pointSymbol",(function(t){e._graphicsViewMap.point.renderer=new u({symbol:t})})),this.clips.on("change",(function(){return e.graphicsViews.forEach((function(t){return t.container.setClips(e.clips)}))}))]),this.graphicsViews.forEach((function(t){return t.container.setClips(e.clips)}))},t.prototype.detach=function(){this.container.removeAllChildren(),this.graphicsViews.forEach((function(e){e.destroy(),e.view=null,e.renderer=null})),this.graphicsViews.length=0},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},i([l.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],t)}(l.declared(f.LayerView2D(v)))}).apply(null,i))||(e.exports=n)},KQcO:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ImIS"),r("ycL1"),r("Vx27"),r("1dvD"),r("ZsQS"),r("Q3lp")],void 0===(n=(function(e,t,r,i,n,o,p,a,s,l){var u=new n.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function t(t){var r=e.call(this,t)||this;return r.alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}var n;return r(t,e),n=t,t.prototype.readDescription=function(e,t){var r,i=t.description;try{r=JSON.parse(i)}catch(e){}return r?r.value:null},t.prototype.readValueType=function(e,t){var r,i=t.description;try{r=JSON.parse(i)}catch(e){}return r?u.fromJSON(r.fieldValueType):null},t.prototype.clone=function(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})},i([p.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),i([p.property({type:[String,Number],json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),i([p.property()],t.prototype,"description",void 0),i([p.reader("description")],t.prototype,"readDescription",null),i([p.property({types:s.types,json:{read:{reader:s.fromJSON},write:!0}})],t.prototype,"domain",void 0),i([p.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),i([p.property({type:a.Integer,json:{write:!0}})],t.prototype,"length",void 0),i([p.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),i([p.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),i([p.enumeration.serializable()(l.kebabDict)],t.prototype,"type",void 0),i([p.property()],t.prototype,"valueType",void 0),i([p.reader("valueType",["description"])],t.prototype,"readValueType",null),n=i([p.subclass("esri.layers.support.Field")],t)}(p.declared(o.JSONSupport))}).apply(null,i))||(e.exports=n)},Q3lp:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("ImIS")],void 0===(n=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.kebabDict=new r.default({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}).apply(null,i))||(e.exports=n)},WsO6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o,p,a,s,l,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},i([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([u.property()],t.prototype,"layer",void 0),i([u.property()],t.prototype,"parent",void 0),i([u.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),i([u.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),i([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([u.subclass("esri.views.layers.LayerView")],t)}(u.declared(p.HandleOwnerMixin(a.IdentifiableMixin(l.EsriPromiseMixin(o.EventedMixin(n))))))}).apply(null,i))||(e.exports=n)},ZMIQ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("ycL1"),r("Vx27")],void 0===(n=(function(e,t,r,i,n,o){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),r([o.subclass("esri.views.layers.support.ClipArea")],t)}(o.declared(n.JSONSupport))}).apply(null,i))||(e.exports=n)},ts8o:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(n=(function(e,t,r,i,n,o,p,a,s){var l={base:p,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var n;return i(t,e),n=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({geometry:this.geometry.clone()})},r([o.property({types:l,json:{read:a.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([o.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),n=r([o.subclass("esri.views.layers.support.Geometry")],t)}(o.declared(s))}).apply(null,i))||(e.exports=n)},w1v0:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("TMur"),r("jZlN"),r("ImIS"),r("ycL1"),r("LxLY"),r("Vx27"),r("Z4y+"),r("Lzvl"),r("KQcO")],void 0===(n=(function(e,t,r,i,n,o,p,a,s,l,u,y,d){var c=new p.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"}),f=function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.exceededTransferLimit=!1,r.features=[],r.fields=null,r.geometryType=null,r.hasM=!1,r.hasZ=!1,r.queryGeometry=null,r.spatialReference=null,r}return i(t,e),t.prototype.readFeatures=function(e,t){for(var r=u.fromJSON(t.spatialReference),i=[],n=0;n<e.length;n++){var p=e[n],a=o.fromJSON(p),l=p.geometry&&p.geometry.spatialReference;s.isSome(a.geometry)&&!l&&(a.geometry.spatialReference=r),i.push(a)}return i},t.prototype.writeGeometryType=function(e,t,r,i){if(e)c.write(e,t,r,i);else{var n=this.features;if(n)for(var o=0,p=n;o<p.length;o++){var a=p[o];if(a&&s.isSome(a.geometry))return void c.write(a.geometry.type,t,r,i)}}},t.prototype.writeSpatialReference=function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r)for(var i=0,n=r;i<n.length;i++){var o=n[i];o&&s.isSome(o.geometry)&&o.geometry.spatialReference&&(t.spatialReference=o.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var i=t.features[r];if(i.geometry){var n=e&&e[r];i.geometry=n&&n.toJSON()||i.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,r=t[0],i=t[1],n=e.translate,o=n[0],p=n[1],a=this.features,l=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-o)/r)}),(function(e){return Math.round((p-e)/i)})),u=0,y=a.length;u<y;u++)l(s.expect(a[u].geometry))||(a.splice(u,1),u--,y--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this,t=e.features,r=e.transform;if(!r)return this;for(var i=r.translate,n=i[0],o=i[1],p=r.scale,a=p[0],l=p[1],u=this._getHydrationFunction(e.geometryType,(function(e){return e*a+n}),(function(e){return o-e*l})),y=0,d=t;y<d.length;y++){var c=d[y].geometry;s.isSome(c)&&u(c)}return this},t.prototype._quantizePoints=function(e,t,r){for(var i,n,o=[],p=0,a=e.length;p<a;p++){var s=e[p];if(p>0){var l=t(s[0]),u=r(s[1]);l===i&&u===n||(o.push([l-i,u-n]),i=l,n=u)}else i=t(s[0]),n=r(s[1]),o.push([i,n])}return o.length>0?o:null},t.prototype._getQuantizationFunction=function(e,t,r){var i=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var n=y.isPolygon(e)?e.rings:e.paths,o=[],p=0,a=n.length;p<a;p++){var s=i._quantizePoints(n[p],t,r);s&&o.push(s)}return o.length>0?(y.isPolygon(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?function(e){var n;return(n=i._quantizePoints(e.points,t,r)).length>0?(e.points=n,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var i,n,o=y.isPolygon(e)?e.rings:e.paths,p=0,a=o.length;p<a;p++)for(var s=o[p],l=0,u=s.length;l<u;l++){var d=s[l];l>0?(i+=d[0],n+=d[1]):(i=d[0],n=d[1]),d[0]=t(i),d[1]=r(n)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var i,n,o=e.points,p=0,a=o.length;p<a;p++){var s=o[p];p>0?(i+=s[0],n+=s[1]):(i=s[0],n=s[1]),s[0]=t(i),s[1]=r(n)}}:void 0},r([l.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),r([l.property({type:[o],json:{write:!0}})],t.prototype,"features",void 0),r([l.reader("features")],t.prototype,"readFeatures",null),r([l.property({type:[d],json:{write:!0}})],t.prototype,"fields",void 0),r([l.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:c.read}}})],t.prototype,"geometryType",void 0),r([l.writer("geometryType")],t.prototype,"writeGeometryType",null),r([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),r([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),r([l.property({types:n.geometryTypes,json:{read:y.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),r([l.property({type:u,json:{write:!0}})],t.prototype,"spatialReference",void 0),r([l.writer("spatialReference")],t.prototype,"writeSpatialReference",null),r([l.property({json:{write:!0}})],t.prototype,"transform",void 0),r([l.subclass("esri.tasks.support.FeatureSet")],t)}(l.declared(a.JSONSupport));return f.prototype.toJSON.isDefaultToJSON=!0,f||(f={}),f}).apply(null,i))||(e.exports=n)}}]);