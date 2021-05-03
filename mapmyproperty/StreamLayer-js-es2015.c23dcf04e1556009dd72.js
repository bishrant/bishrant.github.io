(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{u6iX:function(e,t,r){"use strict";r.r(t);var i,o=r("pO5D"),a=r("3r0u"),n=(r("wSAH"),r("srIe")),s=r("6S2I"),l=r("zqDF"),c=r("WbKI"),p=r("+opI"),d=r("r88o"),b=r("C4aV"),y=r("04ZG"),u=r("Cduq"),j=r("zlDU"),O=(r("4EHJ"),r("ju1D"),r("9AIY"),r("WZb1")),h=r("OvF4"),f=(r("4GrV"),r("wdpY")),m=r("SFah"),g=r("Lqtk"),v=r("H9eC"),w=r("pqNC"),S=r("5pQd"),I=r("/RTN"),R=r("IvSi"),x=r("uRH/"),D=(r("ZnuT"),r("tCO6"),r("2gBT")),F=(r("JhoD"),r("tI3Y"),r("R4xK"),r("/1dM")),T=r("XNvV"),P=r("+Xal"),k=r("ofM5"),N=r("gLc9"),E=r("PVlI"),G=r("mXvl"),L=r("DbUH"),C=r("jhcG"),J=r("WmKv"),W=r("YBpl"),U=r("wkZP"),_=r("Bbcg"),A=r("EOvV"),V=r("YOx9"),q=r("9Ruv"),Y=r("xk++"),z=r("ag7Y");let H=i=class extends z.a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new i({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};Object(o.a)([Object(c.b)({type:Number,json:{write:!0}})],H.prototype,"age",void 0),Object(o.a)([Object(c.b)({type:Number,json:{write:!0}})],H.prototype,"ageReceived",void 0),Object(o.a)([Object(c.b)({type:Number,json:{write:!0}})],H.prototype,"displayCount",void 0),Object(o.a)([Object(c.b)({type:Number,json:{write:!0}})],H.prototype,"maxObservations",void 0),H=i=Object(o.a)([Object(y.a)("esri.layers.support.PurgeOptions")],H);var M=H;const X=s.a.getLogger("esri.layers.StreamLayer"),Z=new p.a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});let B=class extends(Object(G.a)(Object(W.a)(Object(J.a)(Object(C.a)(Object(E.a)(Object(x.a)(Object(L.a)(Object(S.a)(w.a))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new M,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=O.a.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in a.a))return this.addResolvingPromise(Promise.reject(new j.a("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=Object(n.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service"]},e).catch(e=>e).then(()=>this._fetchService(t))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return Object(_.a)(e,t)}writeWebSceneFeatureReduction(e,t,r,i){Object(_.c)(e,t,"layerDefinition.featureReduction",i)}get fieldsIndex(){return new N.a(this.fields)}set renderer(e){Object(f.j)(e,this.fields),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=Object(P.b)(i,t,r)||void 0;return e||X.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new D.a({defaultSymbol:K(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map(e=>({id:e.id,symbol:K(e.symbol,e,r)}))}):new F.a({symbol:K(t.defaultSymbol,t,r)})}writeRenderer(e,t,r,i){Object(P.c)(e,t,r,i)}writeWebSceneRenderer(e,t,r,i){Object(P.c)(e,t,"layerDefinition.drawingInfo.renderer",i)}createPopupTemplate(e){return Object(q.a)(this,e)}createQuery(){const e=new Y.a;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some(t=>(t.name===e&&(r=t.domain),!!r)),r}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var t;if(this.webSocketUrl){var r;if(null==(r=this.timeInfo)||!r.trackIdField)throw new j.a("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new j.a("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new j.a("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new j.a("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await Object(g.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...null!=(t=this.sourceJSON)?t:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),Object(f.j)(this.renderer,this.fields),Object(f.k)(this.timeInfo,this.fields),Object(V.a)(this,{origin:"service"})}};Object(o.a)([Object(c.b)({type:String})],B.prototype,"copyright",void 0),Object(o.a)([Object(c.b)({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),Object(o.a)([Object(c.b)({type:String,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],B.prototype,"definitionExpression",void 0),Object(o.a)([Object(c.b)({type:String})],B.prototype,"displayField",void 0),Object(o.a)([Object(c.b)({type:I.a})],B.prototype,"elevationInfo",void 0),Object(o.a)([Object(d.a)("featureReduction",["layerDefinition.featureReduction"])],B.prototype,"readFeatureReduction",null),Object(o.a)([Object(u.a)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:_.b}})],B.prototype,"writeWebSceneFeatureReduction",null),Object(o.a)([Object(c.b)({type:[k.a]})],B.prototype,"fields",void 0),Object(o.a)([Object(c.b)({readOnly:!0})],B.prototype,"fieldsIndex",null),Object(o.a)([Object(c.b)({type:h.a})],B.prototype,"geometryDefinition",void 0),Object(o.a)([Object(c.b)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:Z.read}}})],B.prototype,"geometryType",void 0),Object(o.a)([Object(c.b)(R.d)],B.prototype,"labelsVisible",void 0),Object(o.a)([Object(c.b)({type:[U.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:A.a},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],B.prototype,"labelingInfo",void 0),Object(o.a)([Object(c.b)(R.e)],B.prototype,"legendEnabled",void 0),Object(o.a)([Object(c.b)({type:["show","hide"]})],B.prototype,"listMode",void 0),Object(o.a)([Object(c.b)({type:l.a})],B.prototype,"maxReconnectionAttempts",void 0),Object(o.a)([Object(c.b)({type:l.a})],B.prototype,"maxReconnectionInterval",void 0),Object(o.a)([Object(c.b)(R.f)],B.prototype,"maxScale",void 0),Object(o.a)([Object(c.b)(R.g)],B.prototype,"minScale",void 0),Object(o.a)([Object(c.b)({type:String})],B.prototype,"objectIdField",void 0),Object(o.a)([Object(c.b)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],B.prototype,"operationalLayerType",void 0),Object(o.a)([Object(c.b)(R.j)],B.prototype,"popupEnabled",void 0),Object(o.a)([Object(c.b)({type:m.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],B.prototype,"popupTemplate",void 0),Object(o.a)([Object(c.b)({type:M})],B.prototype,"purgeOptions",void 0),Object(o.a)([Object(c.b)({types:T.a,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],B.prototype,"renderer",null),Object(o.a)([Object(d.a)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),Object(d.a)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],B.prototype,"readRenderer",null),Object(o.a)([Object(u.a)("renderer")],B.prototype,"writeRenderer",null),Object(o.a)([Object(u.a)("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:T.b}})],B.prototype,"writeWebSceneRenderer",null),Object(o.a)([Object(c.b)(R.m)],B.prototype,"screenSizePerspectiveEnabled",void 0),Object(o.a)([Object(c.b)({type:O.a,json:{origins:{service:{read:{source:"spatialReference"}}}}})],B.prototype,"spatialReference",void 0),Object(o.a)([Object(c.b)({json:{read:!1}})],B.prototype,"type",void 0),Object(o.a)([Object(c.b)(R.n)],B.prototype,"url",void 0),Object(o.a)([Object(c.b)({type:Number})],B.prototype,"updateInterval",void 0),Object(o.a)([Object(c.b)({type:String})],B.prototype,"webSocketUrl",void 0),B=Object(o.a)([Object(y.a)("esri.layers.StreamLayer")],B);const K=Object(b.b)({types:v.k});t.default=B}}]);