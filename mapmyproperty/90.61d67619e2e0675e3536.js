(function(){var e={"arcgis-js-api/layers/mixins/ArcGISService":"2fnV","esri/layers/mixins/ArcGISService":"2fnV","arcgis-js-api/layers/support/FieldsIndex":"I90O","esri/layers/support/FieldsIndex":"I90O","esri/support/popupUtils":"begh"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"2fnV":function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i("zOht"),i("qsST"),i("Vx27"),i("8CIp")],void 0===(r=(function(e,t,i,n,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArcGISService=void 0,t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=s.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",s.sanitizeUrl(e,n.getLogger(this.declaredClass)))},enumerable:!1,configurable:!0}),i.__decorate([r.property({dependsOn:["url"]})],t.prototype,"title",null),i.__decorate([r.property({type:String})],t.prototype,"url",null),i.__decorate([r.subclass("esri.layers.mixins.ArcGISService")],t)}(e)}}).apply(null,n))||(e.exports=r)},I90O:function(e,t,i){var n,r;n=[i.dj.c(e.i),t],void 0===(r=(function(e,t){"use strict";function i(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function n(e){return e.toLowerCase().trim()}return function(){function e(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],e){for(var t=[],r=0,s=e;r<s.length;r++){var o=s[r],l=o&&o.name;if(l){var a=n(l);this._fieldsMap.set(l,o),this._fieldsMap.set(a,o),t.push(a),i(o)&&(this.dateFields.push(o),this._dateFieldsSet.add(o))}}t.sort(),this.uid=t.join(",")}}return e.prototype.destroy=function(){this._fieldsMap.clear()},e.prototype.has=function(e){return null!=this.get(e)},e.prototype.get=function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(n(e)):void 0},e.prototype.isDateField=function(e){return this._dateFieldsSet.has(this.get(e))},e.prototype.normalizeFieldName=function(e){var t=this.get(e);if(t)return t.name},e}()}).apply(null,n))||(e.exports=r)},begh:function(e,t,i){var n,r;n=[i.dj.c(e.i),t,i("ifLZ"),i("k7g7"),i("O4In"),i("Ctes"),i("BwRt")],void 0===(r=(function(e,t,i,n,r,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createFieldInfos=t.createFieldsContent=t.createPopupTemplate=void 0;var l=["oid","global-id"],a=["oid","global-id","guid"];t.createPopupTemplate=function(e,t){var s=e.displayField,o=e.fields,l=e.title;if(!o)return null;var a=y({editFieldsInfo:e.editFieldsInfo,fields:o,objectIdField:e.objectIdField},t);if(!a.length)return null;var d=function(e){var t=n.getDisplayFieldName(e),i=e.titleBase;return t?i+": {"+t.trim()+"}":i}({titleBase:l,fields:o,displayField:s}),u=[new r.FieldsContent,new r.AttachmentsContent];return new i({title:d,content:u,fieldInfos:a})};var d=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],u=function(e,t){var i=t.editFieldsInfo,n=t.objectIdField,r=t.visibleFieldNames;return r?r.has(e.name):!(p(e.name,i)||n&&e.name===n||l.indexOf(e.type)>-1||d.some((function(t){return t.test(e.name)})))};function c(e,t){return"oid"===e.type?-1:"oid"===t.type?1:g(e)?-1:g(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function p(e,t){if(!e||!t)return!1;var i=t.creationDateField,n=t.creatorField,r=t.editDateField,s=t.editorField;return-1!==[i&&i.toLowerCase(),n&&n.toLowerCase(),r&&r.toLowerCase(),s&&s.toLowerCase()].indexOf(e.toLowerCase())}function f(e,t){return e.editable&&-1===a.indexOf(e.type)&&!p(e.name,t)}function y(e,t){var i=e.editFieldsInfo,n=e.objectIdField;return function(e,t){var i=e;return t&&(e=e.filter((function(e){return-1===t.indexOf(e.type)}))),e===i&&(e=e.slice()),e.sort(c),e}(e.fields,(null==t?void 0:t.ignoreFieldTypes)||m).map((function(e){return new s({fieldName:e.name,isEditable:f(e,i),label:e.alias,format:h(e),visible:u(e,{editFieldsInfo:i,objectIdField:n,visibleFieldNames:null==t?void 0:t.visibleFieldNames})})}))}function h(e){switch(e.type){case"small-integer":case"integer":case"single":return new o({digitSeparator:!0,places:0});case"double":return new o({digitSeparator:!0,places:2});case"date":return new o({dateFormat:"long-month-day-year"});default:return null}}function g(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}t.createFieldsContent=function(e,t){return new r.FieldsContent({fieldInfos:y(e,t).filter((function(e){return e.visible}))})},t.createFieldInfos=y;var m=["geometry","blob","raster","guid","xml"]}).apply(null,n))||(e.exports=r)}}]);