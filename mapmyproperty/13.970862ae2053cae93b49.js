(function(){var e={"arcgis-js-api/layers/mixins/ArcGISService":"2fnV","esri/layers/mixins/ArcGISService":"2fnV","arcgis-js-api/symbols/support/defaultsJSON":"35hF","arcgis-js-api/layers/support/LabelClass":"5WBt","arcgis-js-api/layers/support/FieldsIndex":"I90O","arcgis-js-api/layers/support/FeatureTemplate":"L0gI","arcgis-js-api/layers/support/labelUtils":"L924","arcgis-js-api/renderers":"OXG3","arcgis-js-api/layers/support/FeatureType":"V+oH","arcgis-js-api/support/popupUtils":"begh","arcgis-js-api/symbols/support/defaults":"dXKx","arcgis-js-api/layers/support/LabelExpressionInfo":"nsnX"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2fnV":function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t("zOht"),t("qsST"),t("Vx27"),t("8CIp")],void 0===(n=(function(e,r,t,o,n,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ArcGISService=void 0,r.ArcGISService=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),Object.defineProperty(r.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=i.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"url",{set:function(e){this._set("url",i.sanitizeUrl(e,o.getLogger(this.declaredClass)))},enumerable:!1,configurable:!0}),t.__decorate([n.property({dependsOn:["url"]})],r.prototype,"title",null),t.__decorate([n.property({type:String})],r.prototype,"url",null),t.__decorate([n.subclass("esri.layers.mixins.ArcGISService")],r)}(e)}}).apply(null,o))||(e.exports=n)},"35hF":function(e,r,t){var o,n;o=[t.dj.c(e.i),r],void 0===(n=(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.errorPolygonSymbolJSON=r.errorPolylineSymbolJSON=r.errorPointSymbolJSON=r.defaultTextSymbolJSON=r.defaultPolygonSymbolJSON=r.defaultPolylineSymbolJSON=r.defaultPointSymbolJSON=r.defaultOutlineColor=r.defaultColor=void 0,r.defaultColor=[252,146,31,255],r.defaultOutlineColor=[153,153,153,255],r.defaultPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",size:6,color:r.defaultColor,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},r.defaultPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",width:.75,color:r.defaultColor},r.defaultPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},r.defaultTextSymbolJSON={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},r.errorPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},r.errorPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},r.errorPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}).apply(null,o))||(e.exports=n)},"5WBt":function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t("zOht"),t("+AWJ"),t("ImIS"),t("ycL1"),t("rg9i"),t("Vx27"),t("nsnX"),t("L924"),t("dXKx"),t("HqJa")],void 0===(n=(function(e,r,t,o,n,i,l,a,s,p,u,c){"use strict";var d=new n.default({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function y(e){return!e||"service"!==e.origin&&!(e.layer&&"map-image"===e.layer.type)}return function(e){function r(r){var t=e.call(this,r)||this;return t.type="label",t.name=null,t.deconflictionStrategy="static",t.labelExpression=null,t.labelExpressionInfo=null,t.labelPlacement=null,t.maxScale=0,t.minScale=0,t.symbol=u.defaultTextSymbol2D,t.useCodedValues=void 0,t.where=null,t}var n;return t.__extends(r,e),n=r,r.evaluateWhere=function(e,r){var t=function(e,r,t){switch(r){case"=":return e==t;case"<>":return e!=t;case">":return e>t;case">=":return e>=t;case"<":return e<t;case"<=":return e<=t}return!1};try{if(null==e)return!0;var o=e.split(" ");if(3===o.length)return t(r[o[0]],o[1],o[2]);if(7===o.length){var n=t(r[o[0]],o[1],o[2]),i=o[3],l=t(r[o[4]],o[5],o[6]);switch(i){case"AND":return n&&l;case"OR":return n||l}}return!1}catch(r){console.log("Error.: can't parse = "+e)}},r.prototype.readLabelExpression=function(e,r){var t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e},r.prototype.writeLabelExpression=function(e,r,t,o){if(this.labelExpressionInfo&&(y(o)||o&&"service"===o.origin))if(null!=this.labelExpressionInfo.value)e=p.templateStringToSql(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){var n=p.getSingleFieldArcadeExpression(this.labelExpressionInfo.expression);n&&(e="["+n+"]")}null!=e&&(r[t]=e)},r.prototype.writeLabelExpressionInfo=function(e,r,t,o){if(null==e&&null!=this.labelExpression&&y(o))e=new s({expression:this.getLabelExpressionArcade()});else if(!e)return;var n=e.toJSON(o);n.expression&&(r[t]=n)},r.prototype.writeMaxScale=function(e,r){(e||this.minScale)&&(r.maxScale=e)},r.prototype.writeMinScale=function(e,r){(e||this.maxScale)&&(r.minScale=e)},r.prototype.getLabelExpression=function(){return p.getLabelExpression(this)},r.prototype.getLabelExpressionArcade=function(){return p.getLabelExpressionArcade(this)},r.prototype.getLabelExpressionSingleField=function(){return p.getLabelExpressionSingleField(this)},r.prototype.hash=function(){return JSON.stringify(this)},r.prototype.clone=function(){return new n({deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:l.clone(this.labelExpressionInfo),labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,symbol:l.clone(this.symbol),where:this.where,useCodedValues:this.useCodedValues})},t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"name",void 0),t.__decorate([a.property({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1}}}})],r.prototype,"deconflictionStrategy",void 0),t.__decorate([a.property({type:String,json:{write:{allowNull:!0}}})],r.prototype,"labelExpression",void 0),t.__decorate([a.reader("labelExpression")],r.prototype,"readLabelExpression",null),t.__decorate([a.writer("labelExpression")],r.prototype,"writeLabelExpression",null),t.__decorate([a.property({type:s,json:{write:{overridePolicy:function(e,r,t){return y(t)?{allowNull:!0}:{enabled:!1}}}}})],r.prototype,"labelExpressionInfo",void 0),t.__decorate([a.writer("labelExpressionInfo")],r.prototype,"writeLabelExpressionInfo",null),t.__decorate([a.property({type:d.apiValues,json:{type:d.jsonValues,read:d.read,write:d.write}})],r.prototype,"labelPlacement",void 0),t.__decorate([a.property({type:Number})],r.prototype,"maxScale",void 0),t.__decorate([a.writer("maxScale")],r.prototype,"writeMaxScale",null),t.__decorate([a.property({type:Number})],r.prototype,"minScale",void 0),t.__decorate([a.writer("minScale")],r.prototype,"writeMinScale",null),t.__decorate([a.property({types:o.symbolTypesLabel,json:{origins:{"web-scene":{types:o.symbolTypesLabel3D,write:c.write,default:null}},write:c.write,default:null}})],r.prototype,"symbol",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],r.prototype,"useCodedValues",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"where",void 0),n=t.__decorate([a.subclass("esri.layers.support.LabelClass")],r)}(i.JSONSupport)}).apply(null,o))||(e.exports=n)},I90O:function(e,r,t){var o,n;o=[t.dj.c(e.i),r],void 0===(n=(function(e,r){"use strict";function t(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function o(e){return e.toLowerCase().trim()}return function(){function e(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],e){for(var r=[],n=0,i=e;n<i.length;n++){var l=i[n],a=l&&l.name;if(a){var s=o(a);this._fieldsMap.set(a,l),this._fieldsMap.set(s,l),r.push(s),t(l)&&(this.dateFields.push(l),this._dateFieldsSet.add(l))}}r.sort(),this.uid=r.join(",")}}return e.prototype.destroy=function(){this._fieldsMap.clear()},e.prototype.has=function(e){return null!=this.get(e)},e.prototype.get=function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(o(e)):void 0},e.prototype.isDateField=function(e){return this._dateFieldsSet.has(this.get(e))},e.prototype.normalizeFieldName=function(e){var r=this.get(e);if(r)return r.name},e}()}).apply(null,o))||(e.exports=n)},L0gI:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t("zOht"),t("ImIS"),t("ycL1"),t("rg9i"),t("Vx27")],void 0===(n=(function(e,r,t,o,n,i,l){"use strict";var a=new o.default({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});return function(e){function r(r){var t=e.call(this,r)||this;return t.name=null,t.description=null,t.drawingTool=null,t.prototype=null,t.thumbnail=null,t}return t.__extends(r,e),r.prototype.writeDrawingTool=function(e,r){r.drawingTool=a.toJSON(e)},r.prototype.writePrototype=function(e,r){r.prototype=i.fixJson(i.clone(e),!0)},r.prototype.writeThumbnail=function(e,r){r.thumbnail=i.fixJson(i.clone(e))},t.__decorate([l.property({json:{write:!0}})],r.prototype,"name",void 0),t.__decorate([l.property({json:{write:!0}})],r.prototype,"description",void 0),t.__decorate([l.property({json:{read:a.read,write:a.write}})],r.prototype,"drawingTool",void 0),t.__decorate([l.writer("drawingTool")],r.prototype,"writeDrawingTool",null),t.__decorate([l.property({json:{write:!0}})],r.prototype,"prototype",void 0),t.__decorate([l.writer("prototype")],r.prototype,"writePrototype",null),t.__decorate([l.property({json:{write:!0}})],r.prototype,"thumbnail",void 0),t.__decorate([l.writer("thumbnail")],r.prototype,"writeThumbnail",null),t.__decorate([l.subclass("esri.layers.support.FeatureTemplate")],r)}(n.JSONSupport)}).apply(null,o))||(e.exports=n)},L924:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t("nRUF")],void 0===(n=(function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getSingleFieldArcadeExpression=r.getSingleFieldTemplatedString=r.convertTemplatedStringToArcade=r.getLabelExpressionSingleField=r.getLabelExpressionArcade=r.getLabelExpression=r.templateStringToSql=r.sqlToTemplateString=void 0;var o=new RegExp("__begin__","ig"),n=new RegExp("__end__","ig"),i=new RegExp("^__begin__","i"),l=new RegExp("__end__$","i");function a(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}function s(e){var r={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(r.expression=e.labelExpressionInfo.value,r.type="conventional"):e.labelExpressionInfo.expression&&(r.expression=e.labelExpressionInfo.expression,r.type="arcade"):null!=e.labelExpression&&(r.expression=a(e.labelExpression),r.type="conventional"),r}function p(e){var r;return e?(r=t.replace(e,(function(e){return'__begin__$feature["'+e+'"]__end__'})),r=i.test(r)?r.replace(i,""):'"'+r,r=(r=l.test(r)?r.replace(l,""):r+'"').replace(o,'" + ').replace(n,' + "')):r='""',r}r.sqlToTemplateString=a,r.templateStringToSql=function(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")},r.getLabelExpression=s,r.getLabelExpressionArcade=function(e){var r=s(e);if(!r)return null;switch(r.type){case"conventional":return p(r.expression);case"arcade":return r.expression}return null},r.getLabelExpressionSingleField=function(e){var r=s(e);if(!r)return null;switch(r.type){case"conventional":return c(r.expression);case"arcade":return S(r.expression)}return null},r.convertTemplatedStringToArcade=p;var u=/^\s*\{([^}]+)\}\s*$/i;function c(e){var r=e.match(u);return r&&r[1].trim()||null}r.getSingleFieldTemplatedString=c;var d=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,y=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,f=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function S(e){if(!e)return null;var r=d.exec(e)||y.exec(e);return r?r[1]||r[3]:(r=f.exec(e))?r[2]:null}r.getSingleFieldArcadeExpression=S}).apply(null,o))||(e.exports=n)},OXG3:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t("Z/W+"),t("Vtuk"),t("PHoo"),t("fU8o"),t("mLnd"),t("osTG"),t("nHUP"),t("hz/Y"),t("capx")],void 0===(n=(function(e,r,t,o,n,i,l,a,s,p,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isRenderer=r.UniqueValueRenderer=r.SimpleRenderer=r.BaseRenderer=r.HeatmapRenderer=r.DotDensityRenderer=r.DictionaryRenderer=r.ClassBreaksRenderer=void 0,r.ClassBreaksRenderer=t,r.DictionaryRenderer=o,r.DotDensityRenderer=n,r.HeatmapRenderer=i,r.BaseRenderer=l,r.SimpleRenderer=a,r.UniqueValueRenderer=s,r.isRenderer=function(e){return e instanceof l},Object.defineProperty(r,"read",{enumerable:!0,get:function(){return p.read}}),Object.defineProperty(r,"write",{enumerable:!0,get:function(){return p.write}}),Object.defineProperty(r,"fromJSON",{enumerable:!0,get:function(){return p.fromJSON}}),Object.defineProperty(r,"rendererTypes",{enumerable:!0,get:function(){return u.rendererTypes}}),Object.defineProperty(r,"webSceneRendererTypes",{enumerable:!0,get:function(){return u.webSceneRendererTypes}})}).apply(null,o))||(e.exports=n)},"V+oH":function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t("zOht"),t("ycL1"),t("rg9i"),t("Vx27"),t("ZsQS"),t("L0gI")],void 0===(n=(function(e,r,t,o,n,i,l,a){"use strict";return function(e){function r(r){var t=e.call(this,r)||this;return t.id=null,t.name=null,t.domains=null,t.templates=null,t}return t.__extends(r,e),r.prototype.readDomains=function(e){var r={};for(var t in e)if(e.hasOwnProperty(t)){var o=e[t];switch(o.type){case"range":r[t]=l.RangeDomain.fromJSON(o);break;case"codedValue":r[t]=l.CodedValueDomain.fromJSON(o);break;case"inherited":r[t]=l.InheritedDomain.fromJSON(o)}}return r},r.prototype.writeDomains=function(e,r){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]&&e[o].toJSON());n.fixJson(t),r.domains=t},r.prototype.readTemplates=function(e){return e&&e.map((function(e){return new a(e)}))},r.prototype.writeTemplates=function(e,r){r.templates=e&&e.map((function(e){return e.toJSON()}))},t.__decorate([i.property({json:{write:!0}})],r.prototype,"id",void 0),t.__decorate([i.property({json:{write:!0}})],r.prototype,"name",void 0),t.__decorate([i.property({json:{write:!0}})],r.prototype,"domains",void 0),t.__decorate([i.reader("domains")],r.prototype,"readDomains",null),t.__decorate([i.writer("domains")],r.prototype,"writeDomains",null),t.__decorate([i.property({json:{write:!0}})],r.prototype,"templates",void 0),t.__decorate([i.reader("templates")],r.prototype,"readTemplates",null),t.__decorate([i.writer("templates")],r.prototype,"writeTemplates",null),t.__decorate([i.subclass("esri.layers.support.FeatureType")],r)}(o.JSONSupport)}).apply(null,o))||(e.exports=n)},begh:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t("ifLZ"),t("k7g7"),t("O4In"),t("Ctes"),t("BwRt")],void 0===(n=(function(e,r,t,o,n,i,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createFieldInfos=r.createFieldsContent=r.createPopupTemplate=void 0;var a=["oid","global-id"],s=["oid","global-id","guid"];r.createPopupTemplate=function(e,r){var i=e.displayField,l=e.fields,a=e.title;if(!l)return null;var s=f({editFieldsInfo:e.editFieldsInfo,fields:l,objectIdField:e.objectIdField},r);if(!s.length)return null;var p=function(e){var r=o.getDisplayFieldName(e),t=e.titleBase;return r?t+": {"+r.trim()+"}":t}({titleBase:a,fields:l,displayField:i}),u=[new n.FieldsContent,new n.AttachmentsContent];return new t({title:p,content:u,fieldInfos:s})};var p=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],u=function(e,r){var t=r.editFieldsInfo,o=r.objectIdField,n=r.visibleFieldNames;return n?n.has(e.name):!(d(e.name,t)||o&&e.name===o||a.indexOf(e.type)>-1||p.some((function(r){return r.test(e.name)})))};function c(e,r){return"oid"===e.type?-1:"oid"===r.type?1:m(e)?-1:m(r)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((r.alias||r.name).toLocaleLowerCase())}function d(e,r){if(!e||!r)return!1;var t=r.creationDateField,o=r.creatorField,n=r.editDateField,i=r.editorField;return-1!==[t&&t.toLowerCase(),o&&o.toLowerCase(),n&&n.toLowerCase(),i&&i.toLowerCase()].indexOf(e.toLowerCase())}function y(e,r){return e.editable&&-1===s.indexOf(e.type)&&!d(e.name,r)}function f(e,r){var t=e.editFieldsInfo,o=e.objectIdField;return function(e,r){var t=e;return r&&(e=e.filter((function(e){return-1===r.indexOf(e.type)}))),e===t&&(e=e.slice()),e.sort(c),e}(e.fields,(null==r?void 0:r.ignoreFieldTypes)||b).map((function(e){return new i({fieldName:e.name,isEditable:y(e,t),label:e.alias,format:S(e),visible:u(e,{editFieldsInfo:t,objectIdField:o,visibleFieldNames:null==r?void 0:r.visibleFieldNames})})}))}function S(e){switch(e.type){case"small-integer":case"integer":case"single":return new l({digitSeparator:!0,places:0});case"double":return new l({digitSeparator:!0,places:2});case"date":return new l({dateFormat:"long-month-day-year"});default:return null}}function m(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}r.createFieldsContent=function(e,r){return new n.FieldsContent({fieldInfos:f(e,r).filter((function(e){return e.visible}))})},r.createFieldInfos=f;var b=["geometry","blob","raster","guid","xml"]}).apply(null,o))||(e.exports=n)},dXKx:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t("pcDC"),t("LxLY"),t("x7Wq"),t("CF4u"),t("NsXp"),t("Z91k"),t("35hF")],void 0===(n=(function(e,r,t,o,n,i,l,a,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.errorPolygonSymbol2D=r.errorPolylineSymbol2D=r.errorPointSymbol2D=r.getDefaultSymbol2D=r.defaultTextSymbol2D=r.defaultPolygonSymbol2D=r.defaultPolylineSymbol2D=r.defaultPointSymbol2D=void 0,r.defaultPointSymbol2D=l.fromJSON(s.defaultPointSymbolJSON),r.defaultPolylineSymbol2D=i.fromJSON(s.defaultPolylineSymbolJSON),r.defaultPolygonSymbol2D=n.fromJSON(s.defaultPolygonSymbolJSON),r.defaultTextSymbol2D=a.fromJSON(s.defaultTextSymbolJSON),r.getDefaultSymbol2D=function(e){if(o.isNone(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return r.defaultPointSymbol2D;case"polyline":return r.defaultPolylineSymbol2D;case"polygon":case"extent":return r.defaultPolygonSymbol2D;default:t.neverReached(e)}return null},r.errorPointSymbol2D=l.fromJSON(s.errorPointSymbolJSON),r.errorPolylineSymbol2D=i.fromJSON(s.errorPolylineSymbolJSON),r.errorPolygonSymbol2D=n.fromJSON(s.errorPolygonSymbolJSON)}).apply(null,o))||(e.exports=n)},nsnX:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t("zOht"),t("ycL1"),t("Vx27"),t("L924")],void 0===(n=(function(e,r,t,o,n,i){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.value=null,r.expression=null,r}var o;return t.__extends(r,e),o=r,r.prototype.readExpression=function(e,r){return r.value?i.convertTemplatedStringToArcade(r.value):e},r.prototype.writeExpression=function(e,r,t){null!=this.value&&(e=i.convertTemplatedStringToArcade(this.value)),r[t]=e},r.prototype.clone=function(){return new o({value:this.value,expression:this.expression})},t.__decorate([n.property({json:{read:!1,write:!1}})],r.prototype,"value",void 0),t.__decorate([n.property({type:String,json:{write:{allowNull:!0}}})],r.prototype,"expression",void 0),t.__decorate([n.reader("expression",["expression","value"])],r.prototype,"readExpression",null),t.__decorate([n.writer("expression")],r.prototype,"writeExpression",null),o=t.__decorate([n.subclass("esri.layers.support.LabelExpressionInfo")],r)}(o.JSONSupport)}).apply(null,o))||(e.exports=n)}}]);