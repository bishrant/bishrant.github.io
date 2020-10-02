(function(){var t={"arcgis-js-api/views/2d/engine/vectorTiles/style/StyleRepository":"Am75","arcgis-js-api/views/2d/engine/vectorTiles/style/StyleLayer":"UXHw","arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils":"c9QS"},e=this||window,i=e.webpackJsonp=e.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(t):(i.absMidsWaiting=i.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+6dI":function(t,e,i){var a,r;a=[i.dj.c(t.i),e],void 0===(r=(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"}},t.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"}},t.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"},"line-cap":{type:"enum",values:["butt","round","square"],default:"butt"},"line-join":{type:"enum",values:["bevel","round","miter"],default:"miter"},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}},t.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"},"symbol-avoid-edges":{type:"boolean",default:!1},"symbol-placement":{type:"enum",values:["point","line"],default:"point"},"symbol-spacing":{type:"number",minimum:1,default:250},"icon-allow-overlap":{type:"boolean",default:!1},"icon-ignore-placement":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"icon-optional":{type:"boolean",default:!1},"icon-padding":{type:"number",minimum:0,default:2},"icon-rotate":{type:"number",default:0},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:"auto"},"icon-size":{type:"number",minimum:0,default:1},"text-allow-overlap":{type:"boolean",default:!1},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:"center"},"text-field":{type:"string"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-ignore-placement":{type:"boolean",default:!1},"text-justify":{type:"enum",values:["left","center","right"],default:"center"},"text-keep-upright":{type:"boolean",default:!0},"text-letter-spacing":{type:"number",default:0},"text-line-height":{type:"number",default:1.2},"text-max-angle":{type:"number",minimum:0,default:45},"text-max-width":{type:"number",minimum:0,default:10},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-optional":{type:"boolean",default:!1},"text-padding":{type:"number",minimum:0,default:2},"text-rotate":{type:"number",default:0},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:"auto"},"text-size":{type:"number",minimum:0,default:16},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:"none"},"text-writing-mode":{type:"array",value:"enum",values:["horizontal","vertical"],default:["horizontal"]}},t.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"}},t.backgroundPaintDefinition={"background-color":{type:"color",default:[0,0,0,1]},"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-pattern":{type:"string"}},t.fillPaintDefinition={"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-pattern":{type:"string"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"}},t.linePaintDefinition={"line-blur":{type:"number",minimum:0,default:0},"line-color":{type:"color",default:[0,0,0,1]},"line-dasharray":{type:"array",value:"number",default:[]},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-pattern":{type:"string"},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"},"line-width":{type:"number",minimum:0,default:1}},t.symbolPaintDefinition={"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-blur":{type:"number",minimum:0,default:0},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"}},t.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}},t.circlePaintDefinition={"circle-blur":{type:"number",minimum:0,default:0},"circle-color":{type:"color",default:[0,0,0,1]},"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"}},t}();e.StyleDefinition=i}).apply(null,a))||(t.exports=r)},Am75:function(t,e,i){var a,r;a=[i.dj.c(t.i),e,i("H1tY"),i("UXHw")],void 0===(r=(function(t,e,i,a){return function(){function t(e,a){if(this.backgroundBucketIds=[],this._layerByName={},this.styleJSON=e,this.version=parseFloat(e.version),this.sprite=a?a.spriteUrl:e.sprite,this.glyphs=a?a.glyphsUrl:e.glyphs,i("stable-symbol-rendering")){var r=(e.layers||[]).filter((function(t){return t.layout&&t.layout["text-font"]}))[0];r&&(e.layers||[]).forEach((function(t){t.layout&&t.layout["text-font"]&&(t.layout["text-font"]=r.layout["text-font"])}))}if(this.layers=(e.layers||[]).map(t._create),this.layers)for(var n=void 0,o=0;o<this.layers.length;o++)this._layerByName[(n=this.layers[o]).id.toLowerCase()]=n,0===n.type&&this.backgroundBucketIds.push(o);this._identifyRefLayers()}return t.prototype.isPainterDataDriven=function(t){var e=this._layerByName[t.toLowerCase()];return!!e&&e.isPainterDataDriven()},t.prototype.getStyleLayerId=function(t){return t>=this.layers.length?null:this.layers[t].id},t.prototype.getLayoutProperties=function(t){var e=this._layerByName[t.toLowerCase()];return e?e.layout:null},t.prototype.getPaintProperties=function(t){var e=this._layerByName[t.toLowerCase()];return e?e.paint:null},t.prototype.setPaintProperties=function(e,i){var a=this._layerByName[e.toLowerCase()];if(!a)return"";var r=this.layers.indexOf(a);this.styleJSON.layers[r].paint=i;var n=t._recreateLayer({id:a.id,type:a.typeName,source:a.source,sourceLayer:a["source-layer"],minzoom:a.minzoom,maxzoom:a.maxzoom,filter:a.filter,layout:a.layout,paint:i},a);return this.layers[r]=n,this._layerByName[a.id.toLowerCase()]=n,a.id},t.prototype.setLayoutProperties=function(e,i){var a=this._layerByName[e.toLowerCase()];if(!a)return"";var r=this.layers.indexOf(a);this.styleJSON.layers[r].layout=i;var n=t._recreateLayer({id:a.id,type:a.typeName,source:a.source,sourceLayer:a["source-layer"],minzoom:a.minzoom,maxzoom:a.maxzoom,filter:a.filter,layout:i,paint:a.paint},a);return this.layers[r]=n,this._layerByName[a.id.toLowerCase()]=n,a.id},t.prototype._identifyRefLayers=function(){for(var t=[],e=[],i=0,a=0,r=this.layers;a<r.length;a++){var n=r[a];if(1===n.type){var o=n,l=n.source+"|"+n.sourceLayer;l+="|"+JSON.stringify(n.layout&&n.layout.visibility),l+="|"+JSON.stringify(n.minzoom),l+="|"+JSON.stringify(n.maxzoom),l+="|"+JSON.stringify(n.filter),(o.hasDataDrivenFill||o.hasDataDrivenOutline)&&(l+="|"+JSON.stringify(i)),t.push({key:l,layer:n})}if(2===n.type){var u=n;l=n.source+"|"+n.sourceLayer,l+="|"+JSON.stringify(n.layout&&n.layout.visibility),l+="|"+JSON.stringify(n.minzoom),l+="|"+JSON.stringify(n.maxzoom),l+="|"+JSON.stringify(n.filter),l+="|"+JSON.stringify(n.layout&&n.layout["line-cap"]),l+="|"+JSON.stringify(n.layout&&n.layout["line-join"]),u.hasDataDrivenLine&&(l+="|"+JSON.stringify(i)),e.push({key:l,layer:n})}++i}this._assignRefLayers(t),this._assignRefLayers(e)},t.prototype._assignRefLayers=function(t){var e,i;t.sort((function(t,e){return t.key<e.key?-1:t.key>e.key?1:0}));for(var a=t.length,r=0;r<a;r++){var n=t[r];if(n.key===e)n.layer.refLayerId=i;else if(e=n.key,i=n.layer.id,1===n.layer.type&&!n.layer.getPaintProperty("fill-outline-color"))for(var o=r+1;o<a;o++){var l=t[o];if(l.key!==e)break;if(l.layer.getPaintProperty("fill-outline-color")){t[r]=l,t[o]=n,i=l.layer.id;break}}}},t._create=function(t,e,i){var r=1-(1+e)*(1/(i.length+1));switch(t.type){case"background":return new a.BackgroundStyleLayer(0,t,r);case"fill":return new a.FillStyleLayer(1,t,r);case"line":return new a.LineStyleLayer(2,t,r);case"symbol":return new a.SymbolStyleLayer(3,t,r);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":return new a.CircleStyleLayer(4,t,r)}throw new Error("Unknown vector tile layer")},t._recreateLayer=function(t,e){switch(t.type){case"background":return new a.BackgroundStyleLayer(0,t,e.z);case"fill":return new a.FillStyleLayer(1,t,e.z);case"line":return new a.LineStyleLayer(2,t,e.z);case"symbol":return new a.SymbolStyleLayer(3,t,e.z);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":return new a.CircleStyleLayer(4,t,e.z)}},t}()}).apply(null,a))||(t.exports=r)},Ismy:function(t,e,i){var a,r;a=[i.dj.c(t.i),e],void 0===(r=(function(t,e){return function(){function t(e,i,a){this._op=e,"$type"===i?(this._val=a instanceof Array?a.map((function(e){return t._types.indexOf(e)})):t._types.indexOf(a),this._op+=11):(this._key=i,this._val=a)}return t.prototype.filter=function(t){switch(this._op){case 0:return this._val;case 1:return t.values[this._key]===this._val;case 2:return t.values[this._key]!==this._val;case 3:return t.values[this._key]<this._val;case 4:return t.values[this._key]>this._val;case 5:return t.values[this._key]<=this._val;case 6:return t.values[this._key]>=this._val;case 7:return-1!==this._val.indexOf(t.values[this._key]);case 8:return-1===this._val.indexOf(t.values[this._key]);case 9:for(var e=0,i=this._val;e<i.length;e++)if(i[e].filter(t))return!0;return!1;case 10:for(var a=0,r=this._val;a<r.length;a++)if(!r[a].filter(t))return!1;return!0;case 11:for(var n=0,o=this._val;n<o.length;n++)if(o[n].filter(t))return!1;return!0;case 12:return t.type===this._val;case 13:return t.type!==this._val;case 14:return t.type<this._val;case 15:return t.type>this._val;case 16:return t.type>=this._val;case 17:return t.type<=this._val;case 18:return-1!==this._val.indexOf(t.type);case 19:return-1===this._val.indexOf(t.type);case 20:return void 0!==t.values[this._key];case 21:return void 0===t.values[this._key]}},t.createFilter=function(e){if(!e)return new t(0,void 0,!0);var i=e[0];if(e.length<=1)return new t(0,void 0,"any"!==i);switch(i){case"==":return new t(1,e[1],e[2]);case"!=":return new t(2,e[1],e[2]);case">":return new t(4,e[1],e[2]);case"<":return new t(3,e[1],e[2]);case">=":return new t(6,e[1],e[2]);case"<=":return new t(5,e[1],e[2]);case"in":return new t(7,e[1],e.slice(2));case"!in":return new t(8,e[1],e.slice(2));case"any":return new t(9,void 0,e.slice(1).map(t.createFilter.bind(this)));case"all":return new t(10,void 0,e.slice(1).map(t.createFilter.bind(this)));case"none":return new t(11,void 0,e.slice(1).map(t.createFilter.bind(this)));case"has":return new t(20,e[1],void 0);case"!has":return new t(21,e[1],void 0);default:throw new Error("invalid operator: "+i)}},t._types=["Unknown","Point","LineString","Polygon"],t}()}).apply(null,a))||(t.exports=r)},KXmM:function(t,e,i){var a,r;a=[i.dj.c(t.i),e,i("QDcU"),i("c9QS")],void 0===(r=(function(t,e,i,a){return function(){function t(e,i){var a;switch(this.isDataDriven=!1,e.type){case"number":a=!0;break;case"color":a=!0,i=t._parseColor(i);break;case"array":a="number"===e.value;break;default:a=!1}null==i&&(i=e.default),a&&"interval"===i.type&&(a=!1);var r=i&&i.stops&&i.stops.length>0;if(r)for(var n=0,o=i.stops;n<o.length;n++){var l=o[n];l[1]=this._validate(l[1],e)}if(this.isDataDriven=!!i&&!!i.property,this.isDataDriven)if(void 0!==i.default&&(i.default=this._validate(i.default,e)),r)switch(i.type){case"identity":this.getValue=this._buildIdentity(i,e);break;case"categorical":this.getValue=this._buildCategorical(i,e);break;default:this.getValue=a?this._buildInterpolate(i,e):this._buildInterval(i,e)}else this.getValue=this._buildIdentity(i,e);else r?this.getValue=a?this._buildZoomInterpolate(i):this._buildZoomInterval(i):(i=this._validate(i,e),this.getValue=this._buildSimple(i))}return t.prototype._validate=function(t,e){if("number"===e.type){if(t<e.minimum)return e.minimum;if(t>e.maximum)return e.maximum}return t},t.prototype._buildSimple=function(t){return function(){return t}},t.prototype._buildIdentity=function(e,i){var a=this;return function(r,n){var o;return n&&(o=n.values[e.property],"color"===i.type&&(o=t._parseColor(o))),void 0===o&&(o=e.default),void 0!==o?a._validate(o,i):i.default}},t.prototype._buildCategorical=function(t,e){var i=this;return function(a,r){var n;return r&&(n=r.values[t.property]),void 0!==(n=i._categorical(n,t.stops))?n:void 0!==t.default?t.default:e.default}},t.prototype._buildInterval=function(t,e){var i=this;return function(a,r){var n;return r&&(n=r.values[t.property]),"number"==typeof n?i._interval(n,t.stops):void 0!==t.default?t.default:e.default}},t.prototype._buildInterpolate=function(t,e){var i=this;return function(a,r){var n;return r&&(n=r.values[t.property]),"number"==typeof n?i._interpolate(n,t.stops,t.base||1):void 0!==t.default?t.default:e.default}},t.prototype._buildZoomInterpolate=function(t){var e=this;return function(i){return e._interpolate(i,t.stops,t.base||1)}},t.prototype._buildZoomInterval=function(t){var e=this;return function(i){return e._interval(i,t.stops)}},t.prototype._categorical=function(t,e){for(var i=e.length,a=0;a<i;a++)if(e[a][0]===t)return e[a][1]},t.prototype._interval=function(t,e){for(var i=e.length,a=0,r=0;r<i&&e[r][0]<=t;r++)a=r;return e[a][1]},t.prototype._interpolate=function(t,e,i){for(var r,n,o=e.length,l=0;l<o;l++){var u=e[l];if(!(u[0]<=t)){n=u;break}r=u}if(r&&n){var s=n[0]-r[0],y=t-r[0],p=1===i?y/s:(Math.pow(i,y)-1)/(Math.pow(i,s)-1);if(Array.isArray(r[1])){var c=r[1],f=n[1],m=[];for(l=0;l<c.length;l++)m.push(a.interpolate(c[l],f[l],p));return m}return a.interpolate(r[1],n[1],p)}return r?r[1]:n?n[1]:void 0},t._isEmpty=function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},t._parseColor=function(e){if(Array.isArray(e))return e;if("string"==typeof e){var a=new i(e);return this._isEmpty(a)?void 0:i.toUnitRGBA(a)}return e&&e.default&&(e.default=t._parseColor(e.default)),e&&e.stops&&(e.stops=e.stops.map((function(e){return[e[0],t._parseColor(e[1])]}))),e},t}()}).apply(null,a))||(t.exports=r)},UXHw:function(t,e,i){var a,r;a=[i.dj.c(t.i),e,i("zOht"),i("Ismy"),i("+6dI"),i("KXmM"),i("tI6k")],void 0===(r=(function(t,e,i,a,r,n,o){Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e,i){switch(this.type=t,this.typeName=e.type,this.id=e.id,this.source=e.source,this.sourceLayer=e["source-layer"],this.minzoom=e.minzoom,this.maxzoom=e.maxzoom,this.filter=e.filter,this.layout=e.layout,this.paint=e.paint,this.z=i,t){case 0:this._layoutDefinition=r.StyleDefinition.backgroundLayoutDefinition,this._paintDefinition=r.StyleDefinition.backgroundPaintDefinition;break;case 1:this._layoutDefinition=r.StyleDefinition.fillLayoutDefinition,this._paintDefinition=r.StyleDefinition.fillPaintDefinition;break;case 2:this._layoutDefinition=r.StyleDefinition.lineLayoutDefinition,this._paintDefinition=r.StyleDefinition.linePaintDefinition;break;case 3:this._layoutDefinition=r.StyleDefinition.symbolLayoutDefinition,this._paintDefinition=r.StyleDefinition.symbolPaintDefinition;break;case 4:this._layoutDefinition=r.StyleDefinition.circleLayoutDefinition,this._paintDefinition=r.StyleDefinition.circlePaintDefinition}this._layoutProperties=this._parseLayout(this.layout),this._paintProperties=this._parsePaint(this.paint)}return t.prototype.getFeatureFilter=function(){return void 0!==this._featureFilter?this._featureFilter:this._featureFilter=a.createFilter(this.filter)},t.prototype.getLayoutProperty=function(t){var e=this._layoutProperties;if(e)return e[t]},t.prototype.getPaintProperty=function(t){var e=this._paintProperties;if(e)return e[t]},t.prototype.getLayoutValue=function(t,e,i){var a,r=this._layoutProperties;if(r){var n=r[t];n&&(a=n.getValue(e,i))}var o=this._layoutDefinition[t];return void 0===a&&(a=o.default),"enum"===o.type?a=o.values.indexOf(a):"array"===o.type&&"enum"===o.value&&(a=a.map((function(t){return o.values.indexOf(t)}))),a},t.prototype.getPaintValue=function(t,e,i){var a,r=this._paintProperties;if(r){var n=r[t];n&&(a=n.getValue(e,i))}var o=this._paintDefinition[t];return void 0===a&&(a=o.default),"enum"===o.type&&(a=o.values.indexOf(a)),a},t.prototype.isPainterDataDriven=function(){var t=this._paintProperties;if(t)for(var e in t)if(t[e].isDataDriven)return!0;return!1},t.prototype._parseLayout=function(t){var e={};for(var i in t){var a=this._layoutDefinition[i];a&&(e[i]=new n(a,t[i]))}return e},t.prototype._parsePaint=function(t){var e={};for(var i in t){var a=this._paintDefinition[i];a&&(e[i]=new n(a,t[i]))}return e},t}();e.StyleLayer=l;var u=function(t){function e(e,i,a){return t.call(this,e,i,a)||this}return i.__extends(e,t),e}(l);e.BackgroundStyleLayer=u;var s=function(t){function e(e,i,a){var r=t.call(this,e,i,a)||this,n=r.getPaintProperty("fill-color");r.hasDataDrivenColor=!!n&&n.isDataDriven;var o=r.getPaintProperty("fill-opacity");r.hasDataDrivenOpacity=!!o&&o.isDataDriven,r.hasDataDrivenFill=r.hasDataDrivenColor||r.hasDataDrivenOpacity;var l=r.getPaintProperty("fill-outline-color");return r.outlineUsesFillColor=!l,r.hasDataDrivenOutlineColor=!!l&&l.isDataDriven,r.hasDataDrivenOutline=(l?r.hasDataDrivenOutlineColor:r.hasDataDrivenColor)||r.hasDataDrivenOpacity,r}return i.__extends(e,t),e}(l);e.FillStyleLayer=s;var y=function(t){function e(e,i,a){var n=t.call(this,e,i,a)||this,l=n.getPaintProperty("line-color");n.hasDataDrivenColor=!!l&&l.isDataDriven;var u=n.getPaintProperty("line-opacity");n.hasDataDrivenOpacity=!!u&&u.isDataDriven;var s=n.getPaintProperty("line-width");n.hasDataDrivenWidth=!!s&&s.isDataDriven,n.hasDataDrivenLine=n.hasDataDrivenColor||n.hasDataDrivenOpacity||n.hasDataDrivenWidth;var y=i.paint["line-width"];return y||(y=r.StyleDefinition.linePaintDefinition["line-width"].default),n.isThinLine=!n.hasDataDrivenWidth&&"number"==typeof y&&y<o.THIN_LINE_THRESHOLD,n}return i.__extends(e,t),e}(l);e.LineStyleLayer=y;var p=function(t){function e(e,i,a){var r=t.call(this,e,i,a)||this,n=r.getPaintProperty("icon-color");r.hasDataDrivenIconColor=!!n&&n.isDataDriven;var o=r.getPaintProperty("icon-opacity");r.hasDataDrivenIconOpacity=!!o&&o.isDataDriven;var l=r.getLayoutProperty("icon-size");r.hasDataDrivenIconSize=!!l&&l.isDataDriven,r.hasDataDrivenIcon=r.hasDataDrivenIconColor||r.hasDataDrivenIconOpacity||r.hasDataDrivenIconSize;var u=r.getPaintProperty("text-color");r.hasDataDrivenTextColor=!!u&&u.isDataDriven;var s=r.getPaintProperty("text-opacity");r.hasDataDrivenTextOpacity=!!s&&s.isDataDriven;var y=r.getLayoutProperty("text-size");return r.hasDataDrivenTextSize=!!y&&y.isDataDriven,r.hasDataDrivenText=r.hasDataDrivenTextColor||r.hasDataDrivenTextOpacity||r.hasDataDrivenTextSize,r}return i.__extends(e,t),e}(l);e.SymbolStyleLayer=p;var c=function(t){function e(e,i,a){var r=t.call(this,e,i,a)||this,n=r.getPaintProperty("circle-radius");r.hasDataDrivenRadius=!!n&&n.isDataDriven;var o=r.getPaintProperty("circle-color");r.hasDataDrivenColor=!!o&&o.isDataDriven;var l=r.getPaintProperty("circle-opacity");r.hasDataDrivenOpacity=!!l&&l.isDataDriven;var u=r.getPaintProperty("circle-stroke-width");r.hasDataDrivenStrokeWidth=!!u&&u.isDataDriven;var s=r.getPaintProperty("circle-stroke-color");r.hasDataDrivenStrokeColor=!!s&&s.isDataDriven;var y=r.getPaintProperty("circle-stroke-opacity");r.hasDataDrivenStrokeOpacity=!!y&&y.isDataDriven;var p=r.getPaintProperty("circle-blur");return r.hasDataDrivenBlur=!!p&&p.isDataDriven,r}return i.__extends(e,t),e}(l);e.CircleStyleLayer=c,e.LineLayout=function(t,e,i){this.cap=t.getLayoutValue("line-cap",e,i),this.join=t.getLayoutValue("line-join",e,i),this.miterLimit=t.getLayoutValue("line-miter-limit",e,i),this.roundLimit=t.getLayoutValue("line-round-limit",e,i)},e.IconLayout=function(t,e,i,a){this.allowOverlap=t.getLayoutValue("icon-allow-overlap",e,a),this.ignorePlacement=t.getLayoutValue("icon-ignore-placement",e,a),this.optional=t.getLayoutValue("icon-optional",e,a),this.rotationAlignment=t.getLayoutValue("icon-rotation-alignment",e,a),this.size=t.getLayoutValue("icon-size",e,a),this.rotate=t.getLayoutValue("icon-rotate",e,a),this.padding=t.getLayoutValue("icon-padding",e,a),this.keepUpright=t.getLayoutValue("icon-keep-upright",e,a),this.offset=t.getLayoutValue("icon-offset",e,a),2===this.rotationAlignment&&(this.rotationAlignment=i?0:1)},e.TextLayout=function(t,e,i,a){this.allowOverlap=t.getLayoutValue("text-allow-overlap",e,a),this.ignorePlacement=t.getLayoutValue("text-ignore-placement",e,a),this.optional=t.getLayoutValue("text-optional",e,a),this.rotationAlignment=t.getLayoutValue("text-rotation-alignment",e,a),this.fontArray=t.getLayoutValue("text-font",e,a),this.maxWidth=t.getLayoutValue("text-max-width",e,a),this.lineHeight=t.getLayoutValue("text-line-height",e,a),this.letterSpacing=t.getLayoutValue("text-letter-spacing",e,a),this.justify=t.getLayoutValue("text-justify",e,a),this.anchor=t.getLayoutValue("text-anchor",e,a),this.maxAngle=t.getLayoutValue("text-max-angle",e,a),this.size=t.getLayoutValue("text-size",e,a),this.rotate=t.getLayoutValue("text-rotate",e,a),this.padding=t.getLayoutValue("text-padding",e,a),this.keepUpright=t.getLayoutValue("text-keep-upright",e,a),this.transform=t.getLayoutValue("text-transform",e,a),this.offset=t.getLayoutValue("text-offset",e,a),this.writingMode=t.getLayoutValue("text-writing-mode",e,a),2===this.rotationAlignment&&(this.rotationAlignment=i?0:1)}}).apply(null,a))||(t.exports=r)},c9QS:function(t,e,i){var a,r;a=[i.dj.c(t.i),e],void 0===(r=(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.C_INFINITY=Number.POSITIVE_INFINITY,e.C_PI=Math.PI,e.C_2PI=2*e.C_PI,e.C_PI_BY_2=e.C_PI/2,e.C_RAD_TO_256=128/e.C_PI,e.C_256_TO_RAD=e.C_PI/128,e.C_DEG_TO_256=256/360,e.C_DEG_TO_RAD=e.C_PI/180,e.C_SQRT2=1.414213562,e.C_SQRT2_INV=1/e.C_SQRT2;var i=1/Math.LN2;function a(t,e){return(t%=e)>=0?t:t+e}e.positiveMod=a,e.radToByte=function(t){return a(t*e.C_RAD_TO_256,256)},e.degToByte=function(t){return a(t*e.C_DEG_TO_256,256)},e.log2=function(t){return Math.log(t)*i},e.sqr=function(t){return t*t},e.interpolate=function(t,e,i){return t*(1-i)+e*i},e.between=function(t,e,i){return t>=e&&t<=i||t>=i&&t<=e}}).apply(null,a))||(t.exports=r)}}]);