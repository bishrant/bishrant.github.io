!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,i,a=[],s=!0,u=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(o){u=!0,i=o}finally{try{s||null==n.return||n.return()}finally{if(u)throw i}}return a}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n,r,i,a,s){try{var u=e[a](s),o=u.value}catch(l){return void n(l)}u.done?t(o):Promise.resolve(o).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function u(e){i(s,r,a,u,o,"next",e)}function o(e){i(s,r,a,u,o,"throw",e)}u(void 0)}))}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw a}}}}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{"1kEK":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){var r=new i(e.getPointX(t),e.getPointY(t),n),a=e.hasZ(t),s=e.hasM(t);return a&&(r.z=e.getPointZ(t)),s&&(r.m=e.getPointM(t)),r},exportPolygon:function(e,t,n){return new a(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new s(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new u(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){var r=e.hasZ(t),i=e.hasM(t),a=new o(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(r){var s=e.getZExtent(t);a.zmin=s.vmin,a.zmax=s.vmax}if(i){var u=e.getMExtent(t);a.mmin=u.vmin,a.mmax=u.vmax}return a}},i=function e(t,n,r){f(this,e),this.x=t,this.y=n,this.spatialReference=r,this.z=void 0,this.m=void 0},a=function e(t,n,r,i){f(this,e),this.rings=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)},s=function e(t,n,r,i){f(this,e),this.paths=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)},u=function e(t,n,r,i){f(this,e),this.points=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)},o=function e(t,n,r,i,a){f(this,e),this.xmin=t,this.ymin=n,this.xmax=r,this.ymax=i,this.spatialReference=a,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}},"2X7Z":function(e,t,n){"use strict";function r(e,t){return e?t?4:3:t?3:2}function i(e,t,n,i,u){if(!t||!t.lengths.length)return null;var l="upperLeft"===(null==u?void 0:u.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);var c,f=e.coords,d=[],h=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],p=t.lengths,y=t.coords,m=r(n,i),b=0,v=o(p);try{for(v.s();!(c=v.n()).done;){var g=c.value,I=a(h,y,b,g,n,i,l);I&&d.push(I),b+=g*m}}catch(O){v.e(O)}finally{v.f()}if(d.sort((function(e,t){var r=l*e[2]-l*t[2];return 0===r&&n&&(r=e[4]-t[4]),r})),d.length){var x=6*d[0][2];f[0]=d[0][0]/x,f[1]=d[0][1]/x,n&&(x=6*d[0][4],f[2]=0!==x?d[0][3]/x:0),(f[0]<h[0]||f[0]>h[1]||f[1]<h[2]||f[1]>h[3]||n&&(f[2]<h[4]||f[2]>h[5]))&&(f.length=0)}if(!f.length){var j=t.lengths[0]?s(y,0,p[0],n,i):null;if(!j)return null;f[0]=j[0],f[1]=j[1],n&&j.length>2&&(f[2]=j[2])}return e}function a(e,t,n,i,a,s){for(var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=r(a,s),l=n,c=n+o,f=0,d=0,h=0,p=0,y=0,m=0,b=i-1;m<b;m++,l+=o,c+=o){var v=t[l],g=t[l+1],I=t[l+2],x=t[c],j=t[c+1],O=t[c+2],_=v*j-x*g;p+=_,f+=(v+x)*_,d+=(g+j)*_,a&&(h+=(I+O)*(_=v*O-x*I),y+=_),v<e[0]&&(e[0]=v),v>e[1]&&(e[1]=v),g<e[2]&&(e[2]=g),g>e[3]&&(e[3]=g),a&&(I<e[4]&&(e[4]=I),I>e[5]&&(e[5]=I))}if(p*u>0&&(p*=-1),y*u>0&&(y*=-1),!p)return null;var F=[f,d,.5*p];return a&&(F[3]=h,F[4]=.5*y),F}function s(e,t,n,i,a){for(var s=r(i,a),o=t,d=t+s,h=0,p=0,y=0,m=0,b=0,v=n-1;b<v;b++,o+=s,d+=s){var g=e[o],I=e[o+1],x=e[o+2],j=e[d],O=e[d+1],_=e[d+2],F=i?l(g,I,x,j,O,_):u(g,I,j,O);if(F)if(h+=F,i){var E=f(g,I,x,j,O,_);p+=F*E[0],y+=F*E[1],m+=F*E[2]}else{var w=c(g,I,j,O);p+=F*w[0],y+=F*w[1]}}return h>0?i?[p/h,y/h,m/h]:[p/h,y/h]:n>0?i?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function u(e,t,n,r){var i=n-e,a=r-t;return Math.sqrt(i*i+a*a)}function l(e,t,n,r,i,a){var s=r-e,u=i-t,o=a-n;return Math.sqrt(s*s+u*u+o*o)}function c(e,t,n,r){return[e+.5*(n-e),t+.5*(r-t)]}function f(e,t,n,r,i,a){return[e+.5*(r-e),t+.5*(i-t),n+.5*(a-n)]}n.d(t,"a",(function(){return i}))},Glky:function(e,t,r){"use strict";r.r(t);var i=r("zlDU"),s=r("f4Nx"),l=r("qatw"),c=r("wdpY"),d=r("Z4F+"),h=r("ZlUD"),p=r("gLc9"),y=r("p0UO"),m=r("iNG6"),b=r("HsO1"),v=r("ZRfE"),g=r("ZBG3"),I=r("IcpP"),x=s.a,j={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:s.a},O={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function _(e){return Object(l.f)(e)?null!=e.z:!!e.hasZ}function F(e){return Object(l.f)(e)?null!=e.m:!!e.hasM}t.default=function(){function e(){f(this,e),this._queryEngine=null,this._nextObjectId=null}var t,r;return u(e,[{key:"destroy",value:function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}},{key:"load",value:(r=a(regeneratorRuntime.mark((function e(t){var r,a,s,u,l,f,h,I,_,F,E,w,T,R,M,k,N,Z,q,P,S,D,A,z,G,Y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],a=t.features,s=this._inferLayerProperties(a,t.fields),u=t.fields||[],l=null!=t.hasM?t.hasM:s.hasM,f=null!=t.hasZ?t.hasZ:s.hasZ,h=!t.spatialReference&&!s.spatialReference,I=h?x:t.spatialReference||s.spatialReference,_=h?j:null,F=t.geometryType||s.geometryType,E=t.objectIdField||s.objectIdField,w=t.timeInfo,!F||(h&&r.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),F)){e.next=4;break}throw new i.a("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");case 4:if(E){e.next=6;break}throw new i.a("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");case 6:s.objectIdField&&E!==s.objectIdField&&(r.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'.concat(E,'" doesn\'t match the field name "').concat(s.objectIdField,'", found in the provided fields')}),E=s.objectIdField),E&&!s.objectIdField&&(T=null,u.some((function(e){return e.name===E&&(T=e,!0)}))?(T.type="esriFieldTypeOID",T.editable=!1,T.nullable=!1):u.unshift({alias:E,name:E,type:"esriFieldTypeOID",editable:!1,nullable:!1})),R=o(u),e.prev=8,R.s();case 10:if((M=R.n()).done){e.next=18;break}if(null==(k=M.value).name&&(k.name=k.alias),null==k.alias&&(k.alias=k.name),k.name){e.next=14;break}throw new i.a("feature-layer:invalid-field-name","field name is missing",{field:k});case 14:if(k.name===E&&(k.type="esriFieldTypeOID"),-1!==d.a.jsonValues.indexOf(k.type)){e.next=16;break}throw new i.a("feature-layer:invalid-field-type",'invalid type for field "'.concat(k.name,'"'),{field:k});case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),R.e(e.t0);case 23:return e.prev=23,R.f(),e.finish(23);case 26:N={},this._requiredFields=[],Z=o(u);try{for(Z.s();!(q=Z.n()).done;)"esriFieldTypeOID"!==(P=q.value).type&&"esriFieldTypeGlobalID"!==P.type&&(P.editable=null==P.editable||!!P.editable,P.nullable=null==P.nullable||!!P.nullable,S=Object(c.o)(P),P.nullable||void 0!==S?N[P.name]=S:this._requiredFields.push(P))}catch(Q){Z.e(Q)}finally{Z.f()}if(this._fieldsIndex=new p.a(u),this._createDefaultAttributes=Object(m.a)(N,E),w&&(w.startTimeField&&((D=this._fieldsIndex.get(w.startTimeField))?(w.startTimeField=D.name,D.type="esriFieldTypeDate"):w.startTimeField=null),w.endTimeField&&((A=this._fieldsIndex.get(w.endTimeField))?(w.endTimeField=A.name,A.type="esriFieldTypeDate"):w.endTimeField=null),w.trackIdField&&((z=this._fieldsIndex.get(w.trackIdField))?w.trackIdField=z.name:(w.trackIdField=null,r.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}))),w.startTimeField||w.endTimeField||(r.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:w}}),w=null)),G={warnings:r,featureErrors:[],layerDefinition:n(n({},O),{},{drawingInfo:Object(m.c)(F),templates:Object(m.b)(N),extent:_,geometryType:F,objectIdField:E,fields:u,hasZ:!!f,hasM:!!l,timeInfo:w}),assignedObjectIds:{}},this._queryEngine=new g.a({fields:u,geometryType:F,hasM:l,hasZ:f,objectIdField:E,spatialReference:I,featureStore:new v.a({geometryType:F,hasM:l,hasZ:f}),timeInfo:w,cacheSpatialQueries:!0}),a&&a.length){e.next=34;break}return e.abrupt("return",(this._nextObjectId=y.b,G));case 34:return Y=Object(y.a)(E,a),this._nextObjectId=Y+1,e.next=38,Object(b.a)(a,I);case 38:return e.abrupt("return",this._loadInitialFeatures(G,a));case 39:case"end":return e.stop()}}),e,this,[[8,20,23,26]])}))),function(e){return r.apply(this,arguments)})},{key:"applyEdits",value:(t=a(regeneratorRuntime.mark((function e(t){var n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._queryEngine,r=n.spatialReference,i=n.geometryType,e.next=3,Promise.all([Object(I.c)(r,i),Object(b.a)(t.adds,r),Object(b.a)(t.updates,r)]);case 3:return e.abrupt("return",this._applyEdits(t));case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"queryFeatures",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}},{key:"queryFeatureCount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}},{key:"queryObjectIds",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}},{key:"queryExtent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}},{key:"querySnapping",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}},{key:"_inferLayerProperties",value:function(e,t){var n,r,i,a=null,s=null,u=null,c=o(e);try{for(c.s();!(i=c.n()).done;){var f=i.value.geometry;if(f&&(a||(a=Object(l.c)(f)),s||(s=f.spatialReference),null==n&&(n=_(f)),null==r&&(r=F(f)),a&&s&&null!=n&&null!=r))break}}catch(h){c.e(h)}finally{c.f()}if(t&&t.length){var d=null;t.some((function(e){var t="esriFieldTypeOID"===e.type,n=!e.type&&e.name&&"objectid"===e.name.toLowerCase();return d=e,t||n}))&&(u=d.name)}return{geometryType:a,spatialReference:s,objectIdField:u,hasM:r,hasZ:n}}},{key:"_loadInitialFeatures",value:function(e,t){var n,r=this._queryEngine,i=r.geometryType,a=r.hasM,s=r.hasZ,u=r.objectIdField,c=r.spatialReference,f=r.featureStore,d=[],p=o(t);try{for(p.s();!(n=p.n()).done;){var y=n.value;if(null!=y.uid&&(e.assignedObjectIds[y.uid]=-1),y.geometry&&i!==Object(l.c)(y.geometry))e.featureErrors.push(Object(I.a)("Incorrect geometry type."));else{var m=this._createDefaultAttributes(),v=Object(I.d)(this._fieldsIndex,this._requiredFields,m,y.attributes,!0,e.warnings);v?e.featureErrors.push(v):(this._assignObjectId(m,y.attributes,!0),y.attributes=m,null!=y.uid&&(e.assignedObjectIds[y.uid]=y.attributes[u]),y.geometry&&(y.geometry=Object(b.b)(y.geometry,y.geometry.spatialReference,c)),d.push(y))}}}catch(O){p.e(O)}finally{p.f()}if(f.addMany(Object(h.c)([],d,i,s,a,u)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var g=this._queryEngine.timeExtent,x=g.start,j=g.end;e.layerDefinition.timeInfo.timeExtent=[x,j]}return e}},{key:"_applyEdits",value:function(e){var t=e.adds,n=e.updates,r=e.deletes,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(i,t),n&&n.length&&this._applyUpdateEdits(i,n),r&&r.length){var a,s=o(r);try{for(s.s();!(a=s.n()).done;){var u=a.value;i.deleteResults.push(Object(I.b)(u))}}catch(l){s.e(l)}finally{s.f()}this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:i}}},{key:"_applyAddEdits",value:function(e,t){var n,r=e.addResults,i=this._queryEngine,a=i.geometryType,s=i.hasM,u=i.hasZ,c=i.objectIdField,f=i.spatialReference,d=i.featureStore,p=[],y=o(t);try{for(y.s();!(n=y.n()).done;){var m=n.value;if(m.geometry&&a!==Object(l.c)(m.geometry))r.push(Object(I.a)("Incorrect geometry type."));else{var v=this._createDefaultAttributes(),g=Object(I.d)(this._fieldsIndex,this._requiredFields,v,m.attributes);g?r.push(g):(this._assignObjectId(v,m.attributes),m.attributes=v,null!=m.uid&&(e.uidToObjectId[m.uid]=m.attributes[c]),m.geometry&&(m.geometry=Object(b.b)(Object(I.e)(m.geometry,f),m.geometry.spatialReference,f)),p.push(m),r.push(Object(I.b)(m.attributes[c])))}}}catch(x){y.e(x)}finally{y.f()}d.addMany(Object(h.c)([],p,a,u,s,c))}},{key:"_applyUpdateEdits",value:function(e,t){var n,r=e.updateResults,i=this._queryEngine,a=i.geometryType,s=i.hasM,u=i.hasZ,c=i.objectIdField,f=i.spatialReference,d=i.featureStore,p=o(t);try{for(p.s();!(n=p.n()).done;){var y=n.value,m=y.attributes,v=y.geometry,g=m&&m[c];if(null!=g)if(d.has(g)){var x=Object(h.i)(d.getFeature(g),a,u,s);if(v){if(a!==Object(l.c)(v)){r.push(Object(I.a)("Incorrect geometry type."));continue}x.geometry=Object(b.b)(Object(I.e)(v,f),v.spatialReference,f)}if(m){var j=Object(I.d)(this._fieldsIndex,this._requiredFields,x.attributes,m);if(j){r.push(j);continue}}d.add(Object(h.a)(x,a,u,s,c)),r.push(Object(I.b)(g))}else r.push(Object(I.a)("Feature with object id ".concat(g," missing")));else r.push(Object(I.a)("Identifier field ".concat(c," missing")))}}catch(O){p.e(O)}finally{p.f()}}},{key:"_assignObjectId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this._queryEngine.objectIdField;e[r]=n&&t&&isFinite(t[r])?t[r]:this._nextObjectId++}}]),e}()},HsO1:function(t,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return I})),r.d(n,"c",(function(){return j}));var i=r("f4Nx"),s=r("l4ZG"),l=r("gYg2"),c=r("1kEK"),d=[0,0];function h(t,n){if(!n)return null;if("x"in n){var r,i={x:0,y:0};return r=e(t(n.x,n.y,d),2),i.x=r[0],i.y=r[1],null!=n.z&&(i.z=n.z),null!=n.m&&(i.m=n.m),i}if("xmin"in n){var a,s,u={xmin:0,ymin:0,xmax:0,ymax:0};return a=e(t(n.xmin,n.ymin,d),2),u.xmin=a[0],u.ymin=a[1],s=e(t(n.xmax,n.ymax,d),2),u.xmax=s[0],u.ymax=s[1],n.hasZ&&(u.zmin=n.zmin,u.zmax=n.zmax,u.hasZ=!0),n.hasM&&(u.mmin=n.mmin,u.mmax=n.mmax,u.hasM=!0),u}return"rings"in n?{rings:p(n.rings,t),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:p(n.paths,t),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:y(n.points,t),hasM:n.hasM,hasZ:n.hasZ}:void 0}function p(e,t){var n,r=[],i=o(e);try{for(i.s();!(n=i.n()).done;){var a=n.value;r.push(y(a,t))}}catch(s){i.e(s)}finally{i.f()}return r}function y(e,t){var n,r=[],i=o(e);try{for(i.s();!(n=i.n()).done;){var a=n.value,s=t(a[0],a[1],[0,0]);r.push(s),a.length>2&&s.push(a[2]),a.length>3&&s.push(a[3])}}catch(u){i.e(u)}finally{i.f()}return r}function m(e,t){return b.apply(this,arguments)}function b(){return(b=a(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=Array.isArray(t)?t.map((function(e){var t;return null==(t=e.geometry)?void 0:t.spatialReference})):[t],e.next=5,Object(l.f)(r.map((function(e){return{source:e,dest:n}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=h.bind(null,s.c),g=h.bind(null,s.f);function I(e,t,n){return e?(n||(n=t,t=e.spatialReference),Object(i.i)(t)&&Object(i.i)(n)&&!Object(i.c)(t,n)?Object(s.a)(t,n)?Object(i.m)(n)?v(e):g(e):Object(l.m)(c.a,[e],t,n,null)[0]:e):e}var x=new(function(){function e(){f(this,e),this._jobs=[],this._timer=null,this._process=this._process.bind(this)}var t;return u(e,[{key:"push",value:(t=a(regeneratorRuntime.mark((function e(t,n,r){var a,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return!t||!t.length||!n||!r||Object(i.c)(n,r),a={geometries:t,inSpatialReference:n,outSpatialReference:r,resolve:null},e.abrupt("return",(this._jobs.push(a),new Promise((function(e){a.resolve=e,null===s._timer&&(s._timer=setTimeout(s._process,10))}))));case 3:case"end":return e.stop()}}),e,this)}))),function(e,n,r){return t.apply(this,arguments)})},{key:"_process",value:function(){this._timer=null;var e=this._jobs.shift();if(e){var t=e.geometries,n=e.inSpatialReference,r=e.outSpatialReference,a=e.resolve;Object(s.a)(n,r)?Object(i.m)(r)?a(t.map(v)):a(t.map(g)):a(Object(l.m)(c.a,t,n,r,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}}]),e}());function j(e,t,n){return O.apply(this,arguments)}function O(){return(O=a(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x.push(t,n,r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},RjdO:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("X2wA"),i=Object(r.b)((function(e){var t;void 0!==(t=function(){function e(n,r,i,a,s){for(;a>i;){if(a-i>600){var u=a-i+1,o=r-i+1,l=Math.log(u),c=.5*Math.exp(2*l/3),f=.5*Math.sqrt(l*c*(u-c)/u)*(o-u/2<0?-1:1);e(n,r,Math.max(i,Math.floor(r-o*c/u+f)),Math.min(a,Math.floor(r+(u-o)*c/u+f)),s)}var d=n[r],h=i,p=a;for(t(n,i,r),s(n[a],d)>0&&t(n,i,a);h<p;){for(t(n,h,p),h++,p--;s(n[h],d)<0;)h++;for(;s(n[p],d)>0;)p--}0===s(n[i],d)?t(n,i,p):t(n,++p,a),p<=r&&(i=p+1),r<=p&&(a=p-1)}}function t(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function n(e,t){return e<t?-1:e>t?1:0}return function(t,r,i,a,s){e(t,r,i||0,a||t.length-1,s||n)}}())&&(e.exports=t)}))}}])}();