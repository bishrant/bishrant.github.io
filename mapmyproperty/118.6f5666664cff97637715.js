(function(){var e={"arcgis-js-api/layers/support/labelFormatUtils":"y/j/"},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{"y/j/":function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qsST"),r("hCwm"),r("ICCr"),r("I90O"),r("k7g7"),r("L924"),r("sCbS"),r("2Kdy")],void 0===(a=(function(e,t,n,a,i,u,s,l,o,c,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatField=t.createLabelFunction=void 0;var d=i.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:function(){return null}},b={getAttribute:function(e,t){return e.field(t)}};function v(e,t){if(null==e)return"";var r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type)for(var n=e,a=0,i=r.codedValues;a<i.length;a++){var l=i[a];if(l.code===n)return l.name}else if("range"===r.type){var c=+e;if(("range"in r?r.range[0]:r.minValue)<=c&&c<=("range"in r?r.range[1]:r.maxValue))return r.name}var p=e;return"date"===t.type||"esriFieldTypeDate"===t.type?p=u.formatDate(p,u.convertDateFormatToIntlOptions("short-date")):o.isNumericField(t)&&(p=s.formatNumber(+p)),p||""}t.createLabelFunction=function(t,i,u){return n.__awaiter(this,void 0,void 0,(function(){var s,g,y,m,h,w,F,x;return n.__generator(this,(function(n){switch(n.label){case 0:return t&&t.symbol?(s=t.where,g=c.getLabelExpression(t),s?[4,new Promise((function(e,t){r.e(8).then((function(){var t=[r("1eyA")];e.apply(null,t)}).bind(this)).catch(t.bind(this))}))]:[3,2]):[2,f];case 1:return m=n.sent(),[3,3];case 2:m=null,n.label=3;case 3:return y=m,"arcade"!==g.type?[3,5]:[4,p.createLabelExpression(g.expression,u,i)];case 4:return w=n.sent(),h={type:"arcade",evaluate:function(e){try{var t=w.evaluate({$feature:"attributes"in e?w.repurposeFeature(e):w.repurposeAdapter(e)});if(null!=t)return t.toString()}catch(t){d.error(new a("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:e,expression:g}))}return null},needsHydrationToEvaluate:function(){return null==c.getSingleFieldArcadeExpression(g.expression)}},[3,6];case 5:h={type:"simple",evaluate:function(e){return g.expression.replace(/{[^}]*}/g,(function(t){var r=t.slice(1,-1),n=o.getField(i,r);if(!n)return t;var a=null;return"attributes"in e?e&&e.attributes&&(a=e.attributes[n.name]):a=e.field(n.name),null==a?"":v(a,n)}))}},n.label=6;case 6:if(s){try{F=y.WhereClause.create(s,new l(i))}catch(e){return[2,f]}x=h.evaluate,h.evaluate=function(e){return F.testFeature(e,"attributes"in e?void 0:b)?x(e):null}}return[2,h]}}))}))},t.formatField=v}).apply(null,n))||(e.exports=a)}}]);