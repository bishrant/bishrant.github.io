(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/tasks/geometry/cut":"2QEt","arcgis-js-api/tasks/support/GPMessage":"EEGM","arcgis-js-api/layers/support/Field":"KQcO","esri/layers/support/Field":"KQcO","esri/layers/support/fieldType":"Q3lp","arcgis-js-api/tasks/mixins/NAServiceDescription":"SA66","arcgis-js-api/tasks/support/NAMessage":"VIp5","arcgis-js-api/core/queryUtils":"a4MF","esri/geometry/support/normalizeUtils":"fw2w","arcgis-js-api/geometry/support/normalizeUtils":"fw2w","arcgis-js-api/tasks/support/DirectionsFeatureSet":"mEoI","arcgis-js-api/tasks/geometry/simplify":"sqdO","esri/tasks/support/FeatureSet":"w1v0","arcgis-js-api/tasks/support/FeatureSet":"w1v0"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[35,97],{"2QEt":function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("2Atf"),r("HZ3d"),r("Q2wQ"),r("TMur"),r("zp6E"),r("jfWY"),r("Lzvl")],void 0===(o=(function(e,t,r,n,o,i,s,a,p){Object.defineProperty(t,"__esModule",{value:!0}),t.cut=function(e,t,l,u){return n(this,void 0,void 0,(function(){var n,c,f,y,d,v;return o(this,(function(o){switch(o.label){case 0:return n="string"==typeof e?a.urlToObject(e):e,c=t[0].spatialReference,f=r({},u,{query:r({},n.query,{f:"json",sr:JSON.stringify(c),target:JSON.stringify({geometryType:p.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(l)})}),[4,s(n.path+"/cut",f)];case 1:return y=o.sent(),[2,{cutIndexes:(d=y.data).cutIndexes,geometries:(void 0===(v=d.geometries)?[]:v).map((function(e){return i.fromJSON(e).set(c)}))}]}}))}))}}).apply(null,n))||(e.exports=o)},EEGM:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ImIS"),r("ycL1"),r("Vx27")],void 0===(o=(function(e,t,r,n,o,i,s){var a=new o.default({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.type=null,r}return r(t,e),n([s.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),n([s.property({type:String,json:{read:a.read,write:a.write}})],t.prototype,"type",void 0),n([s.subclass("esri.tasks.support.GPMessage")],t)}(s.declared(i.JSONSupport))}).apply(null,n))||(e.exports=o)},KQcO:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ImIS"),r("ycL1"),r("Vx27"),r("1dvD"),r("ZsQS"),r("Q3lp")],void 0===(o=(function(e,t,r,n,o,i,s,a,p,l){var u=new o.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function t(t){var r=e.call(this,t)||this;return r.alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}var o;return r(t,e),o=t,t.prototype.readDescription=function(e,t){var r,n=t.description;try{r=JSON.parse(n)}catch(e){}return r?r.value:null},t.prototype.readValueType=function(e,t){var r,n=t.description;try{r=JSON.parse(n)}catch(e){}return r?u.fromJSON(r.fieldValueType):null},t.prototype.clone=function(){return new o({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})},n([s.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),n([s.property({type:[String,Number],json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),n([s.property()],t.prototype,"description",void 0),n([s.reader("description")],t.prototype,"readDescription",null),n([s.property({types:p.types,json:{read:{reader:p.fromJSON},write:!0}})],t.prototype,"domain",void 0),n([s.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),n([s.property({type:a.Integer,json:{write:!0}})],t.prototype,"length",void 0),n([s.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),n([s.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),n([s.enumeration.serializable()(l.kebabDict)],t.prototype,"type",void 0),n([s.property()],t.prototype,"valueType",void 0),n([s.reader("valueType",["description"])],t.prototype,"readValueType",null),o=n([s.subclass("esri.layers.support.Field")],t)}(s.declared(i.JSONSupport))}).apply(null,n))||(e.exports=o)},Q3lp:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("ImIS")],void 0===(o=(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.kebabDict=new r.default({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}).apply(null,n))||(e.exports=o)},SA66:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("Q2wQ"),r("HZ3d"),r("zp6E"),r("ma1f"),r("LxLY"),r("TTKK"),r("jfWY"),r("Vx27"),r("FPqO")],void 0===(o=(function(e,t,r,n,o,i,s,a,p,l,u,c,f){function y(e){return i(this,void 0,void 0,(function(){var t,r;return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,s(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}})];case 1:return[2,{supportedTravelModes:(t=n.sent().data).supportedTravelModes,defaultTravelMode:t.defaultTravelMode}];case 2:throw r=n.sent(),new a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:r});case 3:return[2]}}))}))}function d(e){return i(this,void 0,void 0,(function(){var t,r,n,i,a,p,c,f,y,d,v,h,g,m,T;return o(this,(function(o){switch(o.label){case 0:return[4,s(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}})];case 1:return(t=o.sent().data)&&t.owningSystemUrl?[4,s((e=t.owningSystemUrl)+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}})]:[2,{supportedTravelModes:[],defaultTravelMode:null}];case 2:return r=o.sent().data,(n=l.getDeepValue("helperServices.routingUtilities.url",r))?(i=u.urlToObject(e),a=/\/solveClosestFacility$/.test(i.path)?"Route":/\/solveClosestFacility$/.test(i.path)?"ClosestFacility":"ServiceAreas",[4,s(n+("/"===n[n.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:a}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 3:if(p=o.sent(),c=[],f=null,p&&p.data&&p.data.results&&p.data.results.length)for(y=0,d=p.data.results;y<d.length;y++)if("supportedTravelModes"===(v=d[y]).paramName){if(v.value&&v.value.features)for(h=0,g=v.value.features;h<g.length;h++)(m=g[h].attributes)&&(T=JSON.parse(m.TravelMode),c.push(T))}else"defaultTravelMode"===v.paramName&&(f=v.value);return[2,{supportedTravelModes:c,defaultTravelMode:f}]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.NAServiceDescriptionMixin=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getServiceDescription=function(){return i(this,void 0,void 0,(function(){return o(this,(function(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),[2,this._serviceDescriptionPromise]}))}))},t.prototype._fetchServiceDescription=function(){return i(this,void 0,void 0,(function(){var e,t,r,n,i;return o(this,(function(o){switch(o.label){case 0:if(!this.url||!this.parsedUrl)throw new a("network-service:missing-url","Url to Network service is missing");return[4,s(e=this.url,{query:{f:"json"}})];case 1:for((t=o.sent().data).supportedTravelModes||(t.supportedTravelModes=[]),r=0;r<t.supportedTravelModes.length;r++)t.supportedTravelModes[r].id||(t.supportedTravelModes[r].id=t.supportedTravelModes[r].itemId);return[4,t.currentVersion>=10.4?y(e):d(e)];case 2:return n=o.sent(),i=n.supportedTravelModes,t.defaultTravelMode=n.defaultTravelMode,t.supportedTravelModes=i,[2,t]}}))}))},t.prototype._isInputGeometryZAware=function(e,t){for(var r=0;r<t.length;r++){var n=e[t[r]];if(n&&n.length)for(var o=0,i=n;o<i.length;o++){var s=i[o];if(p.isSome(s)&&s.hasZ)return!0}}return!1},t.prototype._dropZValuesOffInputGeometry=function(e,t){for(var r=0;r<t.length;r++){var n=e[t[r]];if(n&&n.length)for(var o=0,i=n;o<i.length;o++)i[o].z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")},r([c.subclass("esri.tasks.mixins.NAServiceDescription")],t)}(c.declared(e))};var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),r([c.subclass("esri.tasks.mixins.NAServiceDescription")],t)}(c.declared(t.NAServiceDescriptionMixin(f)));t.NAServiceDescription=v}).apply(null,n))||(e.exports=o)},VIp5:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("ImIS"),r("Vx27"),r("EEGM")],void 0===(o=(function(e,t,r,n,o,i,s){var a=new o.default({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});return function(e){function t(t){var r=e.call(this,t)||this;return r.type=null,r}return r(t,e),n([i.property({type:String,json:{read:a.read,write:a.write}})],t.prototype,"type",void 0),n([i.subclass("esri.tasks.support.NAMessage")],t)}(i.declared(s))}).apply(null,n))||(e.exports=o)},a4MF:function(e,t,r){var n,o;n=[r.dj.c(e.i),t],void 0===(o=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){void 0===e&&(e={}),this._options=e}return e.prototype.toQueryParams=function(e){var t=this;if(!e)return null;var r=e.toJSON(),n={};return Object.keys(r).forEach((function(e){var o=t._options[e];if(o){var i="boolean"!=typeof o&&o.name?o.name:e,s="boolean"!=typeof o&&o.getter?o.getter(r):r[e];null!=s&&(n[i]=function(e){if(!Array.isArray(e))return!1;var t=e[0];return"number"==typeof t||"string"==typeof t}(s)?s.join(","):"object"==typeof s?JSON.stringify(s):s)}else n[e]=r[e]}),this),n},e}();t.createQueryParamsHelper=function(e){return new r(e)}}).apply(null,n))||(e.exports=o)},fw2w:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("Q2wQ"),r("HZ3d"),r("0J3i"),r("ma1f"),r("qsST"),r("LxLY"),r("qMld"),r("Vt+U"),r("aYWh"),r("Z4y+"),r("nrlZ"),r("vtMp"),r("2QEt"),r("sqdO")],void 0===(o=(function(e,t,r,n,o,i,s,a,p,l,u,c,f,y,d,v){function h(e){return"polygon"===e.type}function g(e){return"polygon"===e[0].type}function m(e){return"polyline"===e[0].type}function T(e){return h(e)?e.rings:e.paths}function w(e,t){return Math.ceil((e-t)/(2*t))}function x(e,t){for(var r=0,n=T(e);r<n.length;r++)for(var o=0,i=n[r];o<i.length;o++)i[o][0]+=t;return e}function S(e){for(var t=[],r=0,n=0,o=0;o<e.length;o++){for(var i=e[o],s=null,a=0;a<i.length;a++)t.push(s=i[a]),0===a?n=r=s[0]:(r=Math.min(r,s[0]),n=Math.max(n,s[0]));s&&t.push([(r+n)/2,0])}return t}function b(e,t){if(!(e instanceof u||e instanceof l)){var r="straightLineDensify: the input geometry is neither polyline nor polygon";throw N.error(r),new i(r)}for(var n=[],o=0,s=T(e);o<s.length;o++){var a=s[o],p=[];n.push(p),p.push([a[0][0],a[0][1]]);for(var c=0;c<a.length-1;c++){var f=a[c][0],y=a[c][1],d=a[c+1][0],v=a[c+1][1],g=Math.sqrt((d-f)*(d-f)+(v-y)*(v-y)),m=(v-y)/g,w=(d-f)/g,x=g/t;if(x>1){for(var S=1;S<=x-1;S++){var b=S*t;p.push([w*b+f,m*b+y])}var M=(g+Math.floor(x-1)*t)/2;p.push([w*M+f,m*M+y])}p.push([d,v])}}return h(e)?new l({rings:n,spatialReference:e.spatialReference}):new u({paths:n,spatialReference:e.spatialReference})}function M(e,t,r){if(t){var n=b(e,1e6);e=y.webMercatorToGeographic(n,!0)}return r&&(e=x(e,r)),e}function j(e,t,r){var n;if(Array.isArray(e))if((n=e[0])>t){var o=w(n,t);e[0]=n+o*(-2*t)}else n<r&&(o=w(n,r),e[0]=n+o*(-2*r));else(n=e.x)>t?(o=w(n,t),e=e.clone().offset(o*(-2*t),0)):n<r&&(o=w(n,r),e=e.clone().offset(o*(-2*r),0));return e}function O(e,t){for(var r=-1,n=0;n<t.cutIndexes.length;n++)!function(n){for(var o=t.cutIndexes[n],i=t.geometries[n],s=T(i),a=0;a<s.length;a++)!function(e){var t=s[e];t.some((function(r){if(r[0]<180)return!0;for(var n=0,o=0;o<t.length;o++){var s=t[o][0];n=s>n?s:n}for(var a=-360*w(n=Number(n.toFixed(9)),180),p=0;p<t.length;p++){var l=i.getPoint(e,p);i.setPoint(e,p,l.clone().offset(a,0))}return!0}))}(a);if(o===r){if(g(e))for(var p=0,l=T(i);p<l.length;p++)e[o]=e[o].addRing(l[p]);else if(m(e))for(var u=0,c=T(i);u<c.length;u++)e[o]=e[o].addPath(c[u])}else r=o,e[o]=i}(n);return e}Object.defineProperty(t,"__esModule",{value:!0});var N=s.getLogger("esri.geometry.support.normalizeUtils"),J={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new u({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:c.WebMercator}),minus180Line:new u({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:c.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new u({paths:[[[180,-180],[180,180]]],spatialReference:c.WGS84}),minus180Line:new u({paths:[[[-180,-180],[-180,180]]],spatialReference:c.WGS84})}};t.straightLineDensify=b,t.normalizeCentralMeridian=function e(t,i,s){return n(this,void 0,void 0,(function(){var n,c,h,g,m,T,S,b,N,I,R,F,P,_,D,k,q,A,G,L,z,E,Q,Z,V,U,W,K,C,X,Y,H,B,$,ee,te,re;return r(this,(function(r){switch(r.label){case 0:if(!Array.isArray(t))return[2,e([t],i)];for(n=i?i.url:o.geometryServiceUrl,I=0,R=[],F=[],P=0,_=t;P<_.length;P++)a.isNone(D=_[P])?F.push(D):(c||(h=f.getInfo(c=D.spatialReference),m=J[S=(g=c.isWebMercator)?102100:4326].maxX,T=J[S].minX,b=J[S].plus180Line,N=J[S].minus180Line),h?"mesh"===D.type?F.push(D):"point"===D.type?F.push(j(D.clone(),m,T)):"multipoint"===D.type?((k=D.clone()).points=k.points.map((function(e){return j(e,m,T)})),F.push(k)):"extent"===D.type?(A=D.clone(),q=A._normalize(!1,!1,h),F.push(q.rings?new l(q):q)):D.extent?(G=w((A=D.extent).xmin,T),z=0==(L=G*(2*m))?D.clone():x(D.clone(),L),A.offset(L,0),A.intersects(b)&&A.xmax!==m?(I=A.xmax>I?A.xmax:I,z=M(z,g),R.push(z),F.push("cut")):A.intersects(N)&&A.xmin!==T?(I=A.xmax*(2*m)>I?A.xmax*(2*m):I,z=M(z,g,360),R.push(z),F.push("cut")):F.push(z)):F.push(D.clone()):F.push(D));for(E=w(I,m),Q=-90,Z=E,V=new u;E>0;)V.addPath([[U=360*E-180,Q],[U,-1*Q]]),Q*=-1,E--;return R.length>0&&Z>0?[4,d.cut(n,R,V,s)]:[3,3];case 1:for(W=r.sent(),K=O(R,W),C=[],X=[],ee=0;ee<F.length;ee++)"cut"!==(te=F[ee])?X.push(te):(re=K.shift(),a.isSome(Y=t[ee])&&"polygon"===Y.type&&Y.rings&&Y.rings.length>1&&re.rings.length>=Y.rings.length?(C.push(re),X.push("simplify")):X.push(g?y.geographicToWebMercator(re):re));return C.length?[4,v.simplify(n,C,s)]:[2,X];case 2:for(H=r.sent(),B=[],ee=0;ee<X.length;ee++)B.push("simplify"!==(te=X[ee])?te:g?y.geographicToWebMercator(H.shift()):H.shift());return[2,B];case 3:for($=[],ee=0;ee<F.length;ee++)"cut"!==(te=F[ee])?$.push(te):(re=R.shift(),$.push(!0===g?y.geographicToWebMercator(re):re));return[2,p.resolve($)]}}))}))},t.getDenormalizedExtent=function(e){var t;if(!e)return null;var r=e.extent;if(!r)return null;var n=e.spatialReference&&f.getInfo(e.spatialReference);if(!n)return r;var o,i=n.valid,s=i[1],a=r.width,p=r.xmin,l=r.xmax;if(p=(t=[l,p])[0],l=t[1],"extent"===e.type||0===a||a<=s||a>2*s||p<i[0]||l>s)return r;switch(e.type){case"polygon":if(!(e.rings.length>1))return r;o=S(e.rings);break;case"polyline":if(!(e.paths.length>1))return r;o=S(e.paths);break;case"multipoint":o=e.points}for(var u=r.clone(),c=0;c<o.length;c++){var y=o[c][0];y<0?(y+=s,l=Math.max(y,l)):(y-=s,p=Math.min(y,p))}return u.xmin=p,u.xmax=l,u.width<a?(u.xmin-=s,u.xmax-=s,u):r},t.normalizeMapX=function(e,t){var r=f.getInfo(t);if(r){var n=r.valid,o=n[0],i=n[1],s=i-o;if(e<o)for(;e<o;)e+=s;if(e>i)for(;e>i;)e-=s}return e}}).apply(null,n))||(e.exports=o)},mEoI:function(e,t,r){var n,o;n=[r("N7S/"),r("oxlp"),r("aYWh"),r("Z4y+"),r("w1v0"),r("jZlN")],void 0===(o=(function(e,t,r,n,o,i){return o.createSubclass({declaredClass:"esri.tasks.support.DirectionsFeatureSet",properties:{geometryType:"polyline",extent:{type:e,json:{read:{source:"summary.envelope"}}},features:{value:null,json:{read:function(e,r){(e||[]).forEach((function(e){this._decompressFeatureGeometry(e,r.summary.envelope.spatialReference)}),this);var o=n.fromJSON(r.spatialReference);return e.map((function(e){var r=i.fromJSON(e);return r.geometry&&!(e.geometry&&e.geometry.spatialReference)&&(r.geometry.spatialReference=o),r.strings=e.strings,r.events=(e.events||[]).map((function(r){var n=new i({geometry:new t({x:r.point.x,y:r.point.y,z:r.point.z,hasZ:void 0!==r.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:r.ETA,arriveTimeUTC:r.arriveTimeUTC}});return n.strings=r.strings,n})),r}))}}},mergedGeometry:{value:null,readOnly:!0,dependsOn:["features","extent.spatialReference"],get:function(){if(!this.features)return null;var e=this.features.map((function(e){return e.geometry})),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}},routeId:null,routeName:null,strings:{value:null,readOnly:!0,dependsOn:["features"],get:function(){return this.features.map((function(e){return e.strings}))}},totalDriveTime:{value:null,json:{read:{source:"summary.totalDriveTime"}}},totalLength:{value:null,json:{read:{source:"summary.totalLength"}}},totalTime:{value:null,json:{read:{source:"summary.totalTime"}}}},_decompressFeatureGeometry:function(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)},_decompressGeometry:function(e,t){var r,n,o,i,s,a,p,l,u=0,c=0,f=0,y=0,d=[],v=0,h=0,g=0;if((s=e.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(s=[]),0===parseInt(s[v],32)){v=2;var m=parseInt(s[v],32);v++,a=parseInt(s[v],32),v++,1&m&&(h=s.indexOf("|")+1,p=parseInt(s[h],32),h++),2&m&&(g=s.indexOf("|",h)+1,l=parseInt(s[g],32),g++)}else a=parseInt(s[v],32),v++;for(;v<s.length&&"|"!==s[v];){r=parseInt(s[v],32)+u,v++,u=r,n=parseInt(s[v],32)+c,v++,c=n;var T=[r/a,n/a];h&&(i=parseInt(s[h],32)+f,h++,f=i,T.push(i/p)),g&&(o=parseInt(s[g],32)+y,g++,y=o,T.push(o/l)),d.push(T)}return{paths:[d],hasZ:h>0,hasM:g>0,spatialReference:t}},_mergePolylinesToSinglePath:function(e,t){var n=[];(e||[]).forEach((function(e){e.paths.forEach((function(e){n=n.concat(e)}))}));var o=[],i=[0,0];return n.forEach((function(e){e[0]===i[0]&&e[1]===i[1]||(o.push(e),i=e)})),new r({paths:[o]},t)}})}).apply(null,n))||(e.exports=o)},sqdO:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("2Atf"),r("HZ3d"),r("Q2wQ"),r("zp6E"),r("jfWY"),r("Lzvl")],void 0===(o=(function(e,t,r,n,o,i,s,a){function p(e){return{geometryType:a.getJsonType(e[0]),geometries:e.map((function(e){return e.toJSON()}))}}function l(e,t,r){var n=a.getGeometryType(t);return e.map((function(e){var t=n.fromJSON(e);return t.spatialReference=r,t}))}Object.defineProperty(t,"__esModule",{value:!0}),t.simplify=function(e,t,u){return n(this,void 0,void 0,(function(){var n,c,f,y;return o(this,(function(o){switch(o.label){case 0:return n="string"==typeof e?s.urlToObject(e):e,c=t[0].spatialReference,f=a.getJsonType(t[0]),y=r({},u,{query:r({},n.query,{f:"json",sr:c.wkid?c.wkid:JSON.stringify(c),geometries:JSON.stringify(p(t))})}),[4,i(n.path+"/simplify",y)];case 1:return[2,l(o.sent().data,f,c)]}}))}))}}).apply(null,n))||(e.exports=o)},w1v0:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("TMur"),r("jZlN"),r("ImIS"),r("ycL1"),r("LxLY"),r("Vx27"),r("Z4y+"),r("Lzvl"),r("KQcO")],void 0===(o=(function(e,t,r,n,o,i,s,a,p,l,u,c,f){var y=new s.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"}),d=function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.exceededTransferLimit=!1,r.features=[],r.fields=null,r.geometryType=null,r.hasM=!1,r.hasZ=!1,r.queryGeometry=null,r.spatialReference=null,r}return n(t,e),t.prototype.readFeatures=function(e,t){for(var r=u.fromJSON(t.spatialReference),n=[],o=0;o<e.length;o++){var s=e[o],a=i.fromJSON(s),l=s.geometry&&s.geometry.spatialReference;p.isSome(a.geometry)&&!l&&(a.geometry.spatialReference=r),n.push(a)}return n},t.prototype.writeGeometryType=function(e,t,r,n){if(e)y.write(e,t,r,n);else{var o=this.features;if(o)for(var i=0,s=o;i<s.length;i++){var a=s[i];if(a&&p.isSome(a.geometry))return void y.write(a.geometry.type,t,r,n)}}},t.prototype.writeSpatialReference=function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r)for(var n=0,o=r;n<o.length;n++){var i=o[n];i&&p.isSome(i.geometry)&&i.geometry.spatialReference&&(t.spatialReference=i.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var n=t.features[r];if(n.geometry){var o=e&&e[r];n.geometry=o&&o.toJSON()||n.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,r=t[0],n=t[1],o=e.translate,i=o[0],s=o[1],a=this.features,l=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-i)/r)}),(function(e){return Math.round((s-e)/n)})),u=0,c=a.length;u<c;u++)l(p.expect(a[u].geometry))||(a.splice(u,1),u--,c--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this,t=e.features,r=e.transform;if(!r)return this;for(var n=r.translate,o=n[0],i=n[1],s=r.scale,a=s[0],l=s[1],u=this._getHydrationFunction(e.geometryType,(function(e){return e*a+o}),(function(e){return i-e*l})),c=0,f=t;c<f.length;c++){var y=f[c].geometry;p.isSome(y)&&u(y)}return this},t.prototype._quantizePoints=function(e,t,r){for(var n,o,i=[],s=0,a=e.length;s<a;s++){var p=e[s];if(s>0){var l=t(p[0]),u=r(p[1]);l===n&&u===o||(i.push([l-n,u-o]),n=l,o=u)}else n=t(p[0]),o=r(p[1]),i.push([n,o])}return i.length>0?i:null},t.prototype._getQuantizationFunction=function(e,t,r){var n=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var o=c.isPolygon(e)?e.rings:e.paths,i=[],s=0,a=o.length;s<a;s++){var p=n._quantizePoints(o[s],t,r);p&&i.push(p)}return i.length>0?(c.isPolygon(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?function(e){var o;return(o=n._quantizePoints(e.points,t,r)).length>0?(e.points=o,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var n,o,i=c.isPolygon(e)?e.rings:e.paths,s=0,a=i.length;s<a;s++)for(var p=i[s],l=0,u=p.length;l<u;l++){var f=p[l];l>0?(n+=f[0],o+=f[1]):(n=f[0],o=f[1]),f[0]=t(n),f[1]=r(o)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var n,o,i=e.points,s=0,a=i.length;s<a;s++){var p=i[s];s>0?(n+=p[0],o+=p[1]):(n=p[0],o=p[1]),p[0]=t(n),p[1]=r(o)}}:void 0},r([l.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),r([l.property({type:[i],json:{write:!0}})],t.prototype,"features",void 0),r([l.reader("features")],t.prototype,"readFeatures",null),r([l.property({type:[f],json:{write:!0}})],t.prototype,"fields",void 0),r([l.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:y.read}}})],t.prototype,"geometryType",void 0),r([l.writer("geometryType")],t.prototype,"writeGeometryType",null),r([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),r([l.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),r([l.property({types:o.geometryTypes,json:{read:c.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),r([l.property({type:u,json:{write:!0}})],t.prototype,"spatialReference",void 0),r([l.writer("spatialReference")],t.prototype,"writeSpatialReference",null),r([l.property({json:{write:!0}})],t.prototype,"transform",void 0),r([l.subclass("esri.tasks.support.FeatureSet")],t)}(l.declared(a.JSONSupport));return d.prototype.toJSON.isDefaultToJSON=!0,d||(d={}),d}).apply(null,n))||(e.exports=o)}}]);