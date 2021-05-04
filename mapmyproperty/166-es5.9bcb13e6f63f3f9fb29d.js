!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var c=a(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{kvvF:function(i,a,r){"use strict";r.r(a),r.d(a,"DirectLineMeasurement3DController",function(){return g});var c=r("pO5D"),o=(r("wSAH"),r("srIe")),s=(r("6S2I"),r("zqDF"),r("WbKI")),u=r("04ZG"),l=(r("4EHJ"),r("ju1D"),r("9AIY"),r("/CmD")),f=r("UhwK"),b=r("OKTS"),d=r("Cy1f"),h=r("5DEt"),p=r("r0DZ"),O=r("N5XI"),j=r("9pTf"),v=r("gYg2"),_=r("n4FQ"),m=r("QLbw"),w=r("6lH3"),y=r("9lO2"),g=function(i){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(u,i);var a,r,c,s=n(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=s.call(this,e))._tempStartPosition=Object(d.e)(),t._tempEndPosition=Object(d.e)(),t._tempCornerPosition=Object(d.e)(),t._unitNormalizer=new y.a,t._handles=new p.a,t}return a=u,(r=[{key:"initialize",value:function(){var e=this;this._handles.add(Object(O.whenOnce)(this.view,"ready",function(){return e._initialize()},!0))}},{key:"_initialize",value:function(){var e=this,t=this.view.spatialReference,n=Object(j.g)(t),i=n===j.a?j.d:n;this._sphericalPCPF=i;var a=Object(v.b)(t,i);this._unitNormalizer.spatialReference=a?i:t,this._handles.add([this.dataObject.watch("startPoint",function(){return e._updateMeasurement()},!0),this.dataObject.watch("endPoint",function(){return e._updateMeasurement()},!0),this.dataObject.watch("settings",function(){return e._updateMeasurement()},!0)],"model"),this._updateMeasurement()}},{key:"_updateMeasurement",value:function(){var e=this.dataObject.startPoint,t=this.dataObject.endPoint;if(Object(o.j)(e)||Object(o.j)(t))this.dataObject.measurement=null;else{var n=this._euclideanDistances(e,t),i=this._exactGeodesicDistanceAndAngle(e,t,n.horizontal.value);this.dataObject.measurement={directDistance:n.direct,horizontalDistance:n.horizontal,verticalDistance:n.vertical,geodesicDistance:i.distance,geodesicAngle:i.angle}}}},{key:"_euclideanDistances",value:function(e,t){var n=this;e.z>t.z&&(e=[e,e=t][0]);var i=e.clone();i.z=t.z;var a=this._tempStartPosition,r=this._tempEndPosition,c=this._tempCornerPosition,o=this.view.spatialReference,s=this._sphericalPCPF,u=Object(v.b)(o,s)?s:o;Object(v.o)(e,a,u),Object(v.o)(t,r,u),Object(v.o)(i,c,u);var l=Object(h.n)(a,r),f=Object(h.n)(c,r),b=Math.abs(t.z-e.z),d=function(e){return n._unitNormalizer.normalizeDistance(e)},p=d(l),O=d(f),j=d(b);return{direct:new _.a(p,"meters"),horizontal:new _.a(O,"meters"),vertical:new _.a(j,"meters")}}},{key:"_exactGeodesicDistanceAndAngle",value:function(e,t,n){var i=e.spatialReference,a=new f.a({paths:[e,t],spatialReference:i}),r=i.isGeographic&&Object(m.g)(i)?Object(m.e)([a],"meters")[0]:i.isWebMercator?Object(w.geodesicLength)(a,"meters"):void 0,c=r?{distance:r,angle:this._fallbackGeodesicAngle(r,i)}:this._fallbackGeodesicDistance(e,t,n),o=c.distance,s=c.angle;return{distance:new _.a(o,"meters"),angle:new _.a(s,"degrees")}}},{key:"_fallbackGeodesicAngle",value:function(e,t){return e/Object(j.e)(t).metersPerDegree}},{key:"_fallbackGeodesicDistance",value:function(e,t,n){if(Object(v.p)(e,D)){Object(v.p)(t,P);var i=Object(b.d)(D[0]),a=Object(b.d)(D[1]),r=Object(b.d)(P[0]),c=Object(b.d)(P[1]),o=Math.abs(r-i),s=Object(b.a)(Math.sin(a)*Math.sin(c)+Math.cos(a)*Math.cos(c)*Math.cos(o)),u=Object(b.n)(s),l={distance:0};return Object(m.f)(l,[D[0],D[1]],[P[0],P[1]]),{distance:l.distance,angle:u}}return{distance:n,angle:this._fallbackGeodesicAngle(n,e.spatialReference)}}}])&&e(a.prototype,r),c&&e(a,c),u}(l.a);Object(c.a)([Object(s.b)()],g.prototype,"view",void 0),Object(c.a)([Object(s.b)()],g.prototype,"dataObject",void 0),g=Object(c.a)([Object(u.a)("esri.views.3d.interactive.graphics.DirectLineMeasurement3D.DirectLineMeasurement3DController")],g);var D=Object(d.e)(),P=Object(d.e)()}}])}();