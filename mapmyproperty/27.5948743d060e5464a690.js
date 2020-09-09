(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/TimeInfo":"N6pD","arcgis-js-api/layers/mixins/TemporalLayer":"c/mu","esri/layers/mixins/TemporalLayer":"c/mu","esri/layers/MapImageLayer":"d+WR","esri/layers/support/TimeReference":"gRHS","esri/TimeInterval":"kKuP"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{N6pD:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("9gfz"),r("kKuP"),r("ycL1"),r("rg9i"),r("Vx27"),r("gRHS"),r("ml7j")],void 0===(o=(function(e,t,r,i,o,a,n,l,s,p){return function(e){function t(t){var r=e.call(this,t)||this;return r.cumulative=!1,r.endField=null,r.fullTimeExtent=null,r.hasLiveData=!1,r.interval=null,r.startField=null,r.timeReference=null,r.trackIdField=null,r.useTime=!0,r}var a;return r.__extends(t,e),a=t,t.prototype.readFullTimeExtent=function(e,t){return t.timeExtent&&Array.isArray(t.timeExtent)&&2===t.timeExtent.length?new i({start:t.timeExtent[0],end:t.timeExtent[1]}):null},t.prototype.writeFullTimeExtent=function(e,t){t.timeExtent=e&&e.start&&e.end?[e.start.getTime(),e.end.getTime()]:null},t.prototype.readInterval=function(e,t){return t.timeInterval&&t.timeIntervalUnits?new o({value:t.timeInterval,unit:p.timeUnitKebabDictionary.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new o({value:t.defaultTimeInterval,unit:p.timeUnitKebabDictionary.fromJSON(t.defaultTimeIntervalUnits)}):null},t.prototype.writeInterval=function(e,t){if(e){var r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null},t.prototype.clone=function(){var e=this,t=e.fullTimeExtent,r=e.trackIdField,i=e.useTime;return new a({cumulative:e.cumulative,endField:e.endField,hasLiveData:e.hasLiveData,interval:e.interval,startField:e.startField,timeReference:n.clone(e.timeReference),fullTimeExtent:n.clone(t),trackIdField:r,useTime:i})},r.__decorate([l.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],t.prototype,"cumulative",void 0),r.__decorate([l.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],t.prototype,"endField",void 0),r.__decorate([l.property({type:i,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"fullTimeExtent",void 0),r.__decorate([l.reader("fullTimeExtent",["timeExtent"])],t.prototype,"readFullTimeExtent",null),r.__decorate([l.writer("fullTimeExtent")],t.prototype,"writeFullTimeExtent",null),r.__decorate([l.property({type:Boolean,json:{write:!0}})],t.prototype,"hasLiveData",void 0),r.__decorate([l.property({type:o,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"interval",void 0),r.__decorate([l.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],t.prototype,"readInterval",null),r.__decorate([l.writer("interval")],t.prototype,"writeInterval",null),r.__decorate([l.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],t.prototype,"startField",void 0),r.__decorate([l.property({type:s,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"timeReference",void 0),r.__decorate([l.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"trackIdField",void 0),r.__decorate([l.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],t.prototype,"useTime",void 0),a=r.__decorate([l.subclass("esri.layers.support.TimeInfo")],t)}(a.JSONSupport)}).apply(null,i))||(e.exports=o)},"c/mu":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("9gfz"),r("kKuP"),r("Vx27"),r("N6pD"),r("k7g7"),r("ml7j")],void 0===(o=(function(e,t,r,i,o,a,n,l,s){Object.defineProperty(t,"__esModule",{value:!0}),t.TemporalLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.timeExtent=null,t.timeOffset=null,t.useViewTime=!0,t}return r.__extends(t,e),t.prototype.readOffset=function(e,t){var r=t.timeInfo.exportOptions;if(!r)return null;var i=r.timeOffset,a=s.timeUnitKebabDictionary.fromJSON(r.timeOffsetUnits);return i&&a?new o({value:i,unit:a}):null},Object.defineProperty(t.prototype,"timeInfo",{set:function(e){l.fixTimeInfoFields(e,this.fields),this._set("timeInfo",e)},enumerable:!0,configurable:!0}),r.__decorate([a.property({type:i,json:{write:!1}})],t.prototype,"timeExtent",void 0),r.__decorate([a.property({type:o})],t.prototype,"timeOffset",void 0),r.__decorate([a.reader("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),r.__decorate([a.property({value:null,type:n,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),r.__decorate([a.property({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),r.__decorate([a.subclass("esri.layers.mixins.TemporalLayer")],t)}(e)}}).apply(null,i))||(e.exports=o)},"d+WR":function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("zp6E"),r("ma1f"),r("7MDj"),r("sS22"),r("LxLY"),r("EUqE"),r("qMld"),r("Vx27"),r("1dvD"),r("ZEeX"),r("qDpW"),r("0RER"),r("G/Nd"),r("2fnV"),r("FEX1"),r("QJ8R"),r("WaJo"),r("OXmT"),r("Blfj"),r("c/mu"),r("EtsK"),r("VTDq"),r("wIfq"),r("IlDW")],void 0===(o=(function(e,t,r,i,o,a,n,l,s,p,u,c,d,y,m,v,f,_,g,h,b,w,x,S,I,T,O){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this;return i.alwaysRefetch=!1,i.dpi=96,i.gdbVersion=null,i.imageFormat="png24",i.imageMaxHeight=2048,i.imageMaxWidth=2048,i.imageTransparency=!0,i.labelsVisible=!1,i.isReference=null,i.operationalLayerType="ArcGISMapServiceLayer",i.sourceJSON=null,i.sublayers=null,i.type="map-image",i.url=null,i}return r.__extends(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r.__assign({url:e},t):e},t.prototype.load=function(e){var t=this,r=l.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)}))),p.resolve(this)},t.prototype.readImageFormat=function(e,t){var r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"},t.prototype.writeSublayers=function(e,t,i,o){if(this.loaded&&e){var a=e.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).toArray(),n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){var l=d.nameToId(o.origin);if(3===l){var s=this.createSublayersForOrigin("service").sublayers;n=O.shouldWriteSublayerStructure(a,s,2)}else if(l>3){var p=this.createSublayersForOrigin("portal-item");n=O.shouldWriteSublayerStructure(a,p.sublayers,d.nameToId(p.origin))}}var u=[],c=r.__assign({writeSublayerStructure:n},o),y=n;a.forEach((function(e){var t=e.write({},c);u.push(t),y=y||"user"===e.originOf("visible")})),u.some((function(e){return Object.keys(e).length>1}))&&(t.layers=u),y&&(t.visibleLayers=a.filter((function(e){return e.visible})).map((function(e){return e.id})))}},t.prototype.createExportImageParameters=function(e,t,i,o){var a=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var n=new I.ExportImageParameters({layer:this,scale:y.getScale({extent:e,width:t})*a}),l=n.toJSON();n.layer=null,n.destroy();var s=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},p=e&&e.spatialReference,u=p.wkid||JSON.stringify(p.toJSON());l.dpi*=a;var c={};if(null==o?void 0:o.timeExtent){var d=o.timeExtent.toJSON(),m=d.start,v=d.end;c.time=m&&v&&m===v?""+m:(null==m?"null":m)+","+(null==v?"null":v)}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return r.__assign(r.__assign(r.__assign({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:u,imageSR:u,size:t+","+i},l),s),c)},t.prototype.fetchImage=function(e,t,a,n){return r.__awaiter(this,void 0,void 0,(function(){var l,s,u;return r.__generator(this,(function(c){return l={responseType:"image"},n&&n.timestamp&&(l.query={_ts:n.timestamp}),n&&n.signal&&(l.signal=n.signal),s=this.parsedUrl.path+"/export",null==(u=r.__assign(r.__assign(r.__assign({},this.parsedUrl.query),this.createExportImageParameters(e,t,a,n)),{f:"image",_ts:this.alwaysRefetch?Date.now():null})).dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(l.query=l.query?r.__assign(r.__assign({},u),l.query):u,[2,i(s,l).then((function(e){return e.data})).catch((function(e){if(p.isAbortError(e))throw e;throw new o("mapimagelayer:image-fetch-error","Unable to load image: "+s,{error:e})}))]):[2,p.reject(new o("mapimagelayer:dynamiclayer-not-supported","service "+this.url+" doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.",{query:u}))]}))}))},t.prototype.loadAll=function(){var e=this;return n.default(this,(function(t){t(e.allSublayers)}))},t.prototype._fetchService=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,o;return r.__generator(this,(function(a){switch(a.label){case 0:return this.sourceJSON?(this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),[2]):[4,i(this.parsedUrl.path,{query:r.__assign({f:"json"},this.parsedUrl.query),signal:e})];case 1:return t=a.sent(),o=t.data,t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o,this.read(o,{origin:"service",url:this.parsedUrl}),[2]}}))}))},r.__decorate([u.property()],t.prototype,"alwaysRefetch",void 0),r.__decorate([u.property()],t.prototype,"dpi",void 0),r.__decorate([u.property()],t.prototype,"gdbVersion",void 0),r.__decorate([u.property({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),r.__decorate([u.property()],t.prototype,"imageFormat",void 0),r.__decorate([u.reader("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null),r.__decorate([u.property({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],t.prototype,"imageMaxHeight",void 0),r.__decorate([u.property({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],t.prototype,"imageMaxWidth",void 0),r.__decorate([u.property()],t.prototype,"imageTransparency",void 0),r.__decorate([u.property({json:{read:!1,write:!1}})],t.prototype,"labelsVisible",void 0),r.__decorate([u.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],t.prototype,"isReference",void 0),r.__decorate([u.property({type:["ArcGISMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0),r.__decorate([u.property()],t.prototype,"sourceJSON",void 0),r.__decorate([u.property({json:{write:{ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),r.__decorate([u.writer("sublayers",{layers:{type:[T]},visibleLayers:{type:[c.Integer]}})],t.prototype,"writeSublayers",null),r.__decorate([u.property({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),r.__decorate([u.property({json:{read:!1},readOnly:!0,value:"map-image"})],t.prototype,"type",void 0),r.__decorate([u.property(S.url)],t.prototype,"url",void 0),r.__decorate([u.subclass("esri.layers.MapImageLayer")],t)}(x.TemporalLayer(b.ScaleRangeLayer(h.RefreshableLayer(w.SublayersOwner(v.ArcGISMapService(f.ArcGISService(_.OperationalLayer(g.PortalLayer(s.MultiOriginJSONMixin(a.HandleOwnerMixin(m)))))))))))}).apply(null,i))||(e.exports=o)},gRHS:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(o=(function(e,t,r,i,o){return function(e){function t(t){var r=e.call(this,t)||this;return r.respectsDaylightSaving=!1,r.timezone=null,r}var i;return r.__extends(t,e),i=t,t.prototype.readRespectsDaylightSaving=function(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving},t.prototype.clone=function(){return new i({respectsDaylightSaving:this.respectsDaylightSaving,timezone:this.timezone})},r.__decorate([o.property({type:Boolean,json:{write:!0}})],t.prototype,"respectsDaylightSaving",void 0),r.__decorate([o.reader("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],t.prototype,"readRespectsDaylightSaving",null),r.__decorate([o.property({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],t.prototype,"timezone",void 0),i=r.__decorate([o.subclass("esri.layers.support.TimeReference")],t)}(i.JSONSupport)}).apply(null,i))||(e.exports=o)},kKuP:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27"),r("ml7j")],void 0===(o=(function(e,t,r,i,o,a){return function(e){function t(t){var r=e.call(this,t)||this;return r.value=0,r.unit="milliseconds",r}var i;return r.__extends(t,e),i=t,t.prototype.toMilliseconds=function(){return this.value*a.millisecondsPerTimeUnit[this.unit]},t.prototype.clone=function(){return new i({value:this.value,unit:this.unit})},r.__decorate([o.property({type:Number,json:{write:!0},nonNullable:!0})],t.prototype,"value",void 0),r.__decorate([o.property({type:a.timeUnitKebabDictionary.apiValues,json:{type:a.timeUnitKebabDictionary.jsonValues,read:a.timeUnitKebabDictionary.read,write:a.timeUnitKebabDictionary.write},nonNullable:!0})],t.prototype,"unit",void 0),i=r.__decorate([o.subclass("esri.TimeInterval")],t)}(i.JSONSupport)}).apply(null,i))||(e.exports=o)}}]);