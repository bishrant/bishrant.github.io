(function(){(this||window).webpackJsonp.registerAbsMids({"esri/portal/support/geometryServiceUtils":"1xFi"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{"1xFi":function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t("Q2wQ"),t("HZ3d"),t("0J3i"),t("ma1f"),t("Qwus"),t("xuSL"),t("3k9p"),t("2Kdy")],void 0===(i=(function(e,r,t,n,i,o,l,s,c){function u(e,r){return void 0===e&&(e=null),n(this,void 0,void 0,(function(){var n;return t(this,(function(t){switch(t.label){case 0:if(i.geometryServiceUrl)return[2,new s({url:i.geometryServiceUrl})];if(!e)throw new o("internal:geometry-service-url-not-configured");return[4,(n="portal"in e?e.portal||l.getDefault():e).load({signal:r})];case 1:if(t.sent(),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url)return[2,new s({url:n.helperServices.geometry.url})];throw new o("internal:geometry-service-url-not-configured")}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=u,r.projectGeometry=function(e,r,i,l){return void 0===i&&(i=null),n(this,void 0,void 0,(function(){var n,s,a;return t(this,(function(t){switch(t.label){case 0:return[4,u(i,l)];case 1:return n=t.sent(),(s=new c).geometries=[e],s.outSpatialReference=r,[4,n.project(s,{signal:l})];case 2:if((a=t.sent())&&Array.isArray(a)&&1===a.length)return[2,a[0]];throw new o("internal:geometry-service-projection-failed")}}))}))}}).apply(null,n))||(e.exports=i)}}]);