(function(){var e={},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{WiXY:function(e,r,t){var a,o;a=[t.dj.c(e.i),r,t("zOht"),t("TMur"),t("zp6E"),t("ma1f"),t("7MDj"),t("LxLY"),t("EUqE"),t("qMld"),t("jfWY"),t("Vx27"),t("0RER"),t("WhPF"),t("G/Nd"),t("2fnV"),t("FEX1"),t("QJ8R"),t("WaJo"),t("OXmT"),t("Blfj"),t("8CIp"),t("8CIp"),t("EtsK"),t("wIfq")],void 0===(o=(function(e,r,t,a,o,n,i,s,l,p,c,u,d,y,f,_,v,h,g,S,b,m,w,O,T){var R=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var a=e.apply(this,r)||this;return a.listMode="show",a.isReference=null,a.operationalLayerType="ArcGISTiledMapServiceLayer",a.resampling=!0,a.sourceJSON=null,a.spatialReference=null,a.path=null,a.sublayers=null,a.type="tile",a.url=null,a}return t.__extends(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t.__assign({url:e},r):e},r.prototype.load=function(e){var r=this,t=s.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((function(){return r._fetchService(t)}),(function(){return r._fetchService(t)}))),p.resolve(this)},Object.defineProperty(r.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),r.prototype.readSpatialReference=function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&a.SpatialReference.fromJSON(e)},r.prototype.writeSublayers=function(e,r,a,o){if(this.loaded&&e){var n=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),i=[],s=t.__assign({writeSublayerStructure:!1},o);n.forEach((function(e){var r=e.write({},s);i.push(r)})),i.some((function(e){return Object.keys(e).length>1}))&&(r.layers=i)}},Object.defineProperty(r.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),r.prototype.castTileServers=function(e){return Array.isArray(e)?e.map((function(e){return c.urlToObject(e).path})):null},r.prototype.fetchTile=function(e,r,t,a){void 0===a&&(a={});var n=a.signal,i=a.timestamp,s=this.getTileUrl(e,r,t),l={responseType:"image",signal:n};return null!=i&&(l.query={_ts:a.timestamp}),o(s,l).then((function(e){return e.data}))},r.prototype.getTileUrl=function(e,r,a){var o=!this.tilemapCache&&this.supportsBlankTile,n=c.objectToQuery(t.__assign(t.__assign({},this.parsedUrl.query),{blankTile:!o&&null})),i=this.tileServers;return(i&&i.length?i[r%i.length]:this.parsedUrl.path)+"/tile/"+e+"/"+r+"/"+a+(n?"?"+n:"")},r.prototype._fetchService=function(e){var r=this;return p.create((function(a,i){if(r.sourceJSON){if(null!=r.sourceJSON.bandCount&&null!=r.sourceJSON.pixelSizeX)throw new n("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");a({data:r.sourceJSON})}else{if(!r.parsedUrl)throw new n("tile-layer:undefined-url","layer's url is not defined");var s=w.parse(r.parsedUrl.path);if(s&&"ImageServer"===s.serverType)throw new n("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");o(r.parsedUrl.path,{query:t.__assign({f:"json"},r.parsedUrl.query),responseType:"json",signal:e}).then(a,i)}})).then((function(t){if(t.ssl&&(r.url=r.url.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!w.isHostedAgolService(r.url))return r._fetchServerVersion(r.url,e).then((function(e){r.read({currentVersion:e})})).catch((function(){}))}))},r.prototype._fetchServerVersion=function(e,r){if(!m.isArcGISUrl(e))return p.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return o(t,{query:{f:"json"},responseType:"json",signal:r}).then((function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new n("tile-layer:version-not-available")}))},r.prototype._getMapName=function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},r.prototype._getDefaultAttribution=function(e){if(e){var r;e=e.toLowerCase();for(var t=0,a=R.length;t<a;t++)if((r=R[t]).toLowerCase().indexOf(e)>-1)return c.makeAbsolute("//static.arcgis.com/attribution/"+r)}},r.prototype._getDefaultTileServers=function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]},t.__decorate([u.property({readOnly:!0,dependsOn:["parsedUrl"]})],r.prototype,"attributionDataUrl",null),t.__decorate([u.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),t.__decorate([u.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),t.__decorate([u.property({readOnly:!0})],r.prototype,"operationalLayerType",void 0),t.__decorate([u.property({type:Boolean})],r.prototype,"resampling",void 0),t.__decorate([u.property()],r.prototype,"sourceJSON",void 0),t.__decorate([u.property({type:a.SpatialReference})],r.prototype,"spatialReference",void 0),t.__decorate([u.reader("spatialReference",["spatialReference","tileInfo"])],r.prototype,"readSpatialReference",null),t.__decorate([u.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),t.__decorate([u.property({readOnly:!0})],r.prototype,"sublayers",void 0),t.__decorate([u.writer("sublayers",{layers:{type:[T]}})],r.prototype,"writeSublayers",null),t.__decorate([u.property({json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),t.__decorate([u.property({dependsOn:["parsedUrl"]})],r.prototype,"tileServers",null),t.__decorate([u.cast("tileServers")],r.prototype,"castTileServers",null),t.__decorate([u.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),t.__decorate([u.property(O.url)],r.prototype,"url",void 0),t.__decorate([u.subclass("esri.layers.TileLayer")],r)}(b.SublayersOwner(S.ScaleRangeLayer(g.RefreshableLayer(v.OperationalLayer(h.PortalLayer(y.ArcGISCachedService(f.ArcGISMapService(_.ArcGISService(l.MultiOriginJSONMixin(i.HandleOwnerMixin(d)))))))))))}).apply(null,a))||(e.exports=o)}}]);