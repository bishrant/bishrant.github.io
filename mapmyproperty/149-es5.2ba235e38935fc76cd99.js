!function(){function e(e,r,t,n,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void t(s)}u.done?r(c):Promise.resolve(c).then(n,i)}function r(r){return function(){var t=this,n=arguments;return new Promise(function(i,o){var a=r.apply(t,n);function u(r){e(a,i,o,u,c,"next",r)}function c(r){e(a,i,o,u,c,"throw",r)}u(void 0)})}}(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{"4ugL":function(e,t,n){"use strict";n.r(t),n.d(t,"create",function(){return c}),n.d(t,"projectGeometry",function(){return l});var i=n("EyXx"),o=n("zlDU"),a=n("AiS/"),u=n("ACSY");function c(){return s.apply(this,arguments)}function s(){return(s=r(regeneratorRuntime.mark(function e(){var r,t,u,c=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.length>0&&void 0!==c[0]?c[0]:null,t=c.length>1?c[1]:void 0,!i.a.geometryServiceUrl){e.next=9;break}return e.next=6,Promise.resolve().then(n.bind(null,"1E6V"));case 6:return e.t0=e.sent.default,e.t1={url:i.a.geometryServiceUrl},e.abrupt("return",new e.t0(e.t1));case 9:if(r){e.next=11;break}throw new o.a("internal:geometry-service-url-not-configured");case 11:return u="portal"in r?r.portal||a.a.getDefault():r,e.next=14,u.load({signal:t});case 14:if(!(u.helperServices&&u.helperServices.geometry&&u.helperServices.geometry.url)){e.next=21;break}return e.next=18,Promise.resolve().then(n.bind(null,"1E6V"));case 18:return e.t2=e.sent.default,e.t3={url:u.helperServices.geometry.url},e.abrupt("return",new e.t2(e.t3));case 21:throw new o.a("internal:geometry-service-url-not-configured");case 22:case"end":return e.stop()}},e)}))).apply(this,arguments)}function l(e,r){return p.apply(this,arguments)}function p(){return(p=r(regeneratorRuntime.mark(function e(r,t){var n,i,a,s,l,p=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>2&&void 0!==p[2]?p[2]:null,i=p.length>3?p[3]:void 0,e.next=4,c(n,i);case 4:return a=e.sent,(s=new u.a).geometries=[r],s.outSpatialReference=t,e.next=9,a.project(s,{signal:i});case 9:if(!(l=e.sent)||!Array.isArray(l)||1!==l.length){e.next=12;break}return e.abrupt("return",l[0]);case 12:throw new o.a("internal:geometry-service-projection-failed");case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}}}])}();