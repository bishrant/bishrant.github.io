(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"7K5q":function(e,t,i){"use strict";i.r(t),i.d(t,"DirectLineMeasurement3DView",function(){return ie});var s=i("pO5D"),a=(i("wSAH"),i("srIe")),n=(i("6S2I"),i("zqDF"),i("WbKI")),r=i("04ZG"),o=(i("4EHJ"),i("ju1D"),i("9AIY"),i("/CmD")),l=i("IDUf"),c=i("OKTS"),h=i("qRWG"),d=i("YyOG"),u=(i("G48n"),i("Cy1f")),g=i("5DEt"),b=i("r0DZ"),m=i("N5XI"),_=i("9pTf"),p=i("gEht"),v=i("dhe/"),O=i("M0lq"),j=i("XvKw"),w=i("NUQ5"),L=i("RaGr"),f=i("B3Fv"),y=i("J+o3"),z=i("lObl"),S=i("XBzj"),C=i("r+FG"),E=i("8JEK"),P=i("yvcr"),D=i("X668"),M=i("/ADo"),V=i("1/dN"),A=i("NbNv"),x=i("w6Td"),G=i("ypgp"),R=i("2jVe"),T=i("+h6m"),k=i("jjdI"),H=i("GJyJ"),q=i("jpeq"),W=i("KrNm");class I extends G.a{constructor(e,t){super(e,t)}initializeProgram(e){const t=I.shader.get().build();return new k.a(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),T.a)}bindPass(e,t,i){q.a.bindProjectionMatrix(this.program,i.camera.projectionMatrix),this.program.setUniform1f("width",t.width),this.program.setUniform1f("outlineSize",t.outlineSize),this.program.setUniform4fv("outlineColor",t.outlineColor),this.program.setUniform1f("stripeLength",t.stripeLength),this.program.setUniform4fv("stripeEvenColor",t.stripeEvenColor),this.program.setUniform4fv("stripeOddColor",t.stripeOddColor)}bindDraw(e){q.a.bindView(this.program,e)}initializePipeline(){return Object(H.d)({polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:513},depthWrite:H.c,colorWrite:H.b})}get primitiveType(){return 5}}I.shader=new x.a(W.a,()=>i.e(178).then(i.bind(null,"r091")));class U extends R.a{constructor(){super(...arguments),this.polygonOffsetEnabled=!1}}Object(s.a)([Object(R.b)()],U.prototype,"polygonOffsetEnabled",void 0);class F extends A.a{constructor(e){super(e,N),this.techniqueConfig=new U}getTechniqueConfig(){return this.techniqueConfig.polygonOffsetEnabled=this.params.polygonOffset,this.techniqueConfig}dispose(){}getPassParameters(){return this.params}intersect(){}createBufferWriter(){return new $}getGLMaterial(e){return 0===e.output?new Q(e):void 0}}class Q extends V.a{constructor(e){super(e),this.updateParameters()}updateParameters(){this.technique=this.techniqueRep.acquireAndReleaseExisting(I,this.material.getTechniqueConfig(),this.technique)}beginSlot(e){return 3===e}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)}}const N={width:32,outlineSize:.2,outlineColor:[1,.5,0,1],stripeLength:1,stripeEvenColor:[1,1,1,1],stripeOddColor:[1,.5,0,1],polygonOffset:!1,...A.b},B=Object(M.a)().vec3f("position").vec3f("normal").vec2f("uv0").f32("auxpos1"),J=Object(u.e)(),K=Object(u.e)(),X=Object(u.e)(),Y=Object(u.e)(),Z=Object(u.e)();class ${constructor(){this.vertexBufferLayout=B}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 2*(e.indices.get("position").length/2+1)}write(e,t,i,s){const a=t.vertexAttributes.get("position").data,n=t.vertexAttributes.get("normal").data,r=a.length/3,o=t&&t.indices&&t.indices.get("position");o&&o.length!==2*(r-1)&&console.warn("MeasurementArrowMaterial does not support indices");const l=J,c=K,h=X,d=Y,u=Z,b=e.transformation,m=e.invTranspTransformation,_=i.position,p=i.normal,v=i.uv0;let O=0;for(let w=0;w<r;++w){const e=3*w;if(Object(g.v)(l,a[e],a[e+1],a[e+2]),w<r-1){const e=3*(w+1);Object(g.v)(c,a[e],a[e+1],a[e+2]),Object(g.v)(u,n[e],n[e+1],n[e+2]),Object(g.q)(u,u),Object(g.i)(h,c,l),Object(g.q)(h,h),Object(g.f)(d,u,h),Object(g.q)(d,d)}const t=Object(g.n)(l,c);b&&m&&(Object(g.l)(l,l,b),Object(g.l)(c,c,b),Object(g.l)(d,d,m));const i=s+2*w,o=i+1;_.setVec(i,l),_.setVec(o,l),p.setVec(i,d),p.setVec(o,d),v.set(i,0,O),v.set(i,1,-1),v.set(o,0,O),v.set(o,1,1),w<r-1&&(O+=t)}const j=i.auxpos1;for(let g=0;g<2*r;++g)j.set(s+g,O)}}class ee extends D.a{constructor(e){super(e),this._parameters=te,this._handles=null,this._origin=Object(u.e)(),this._originTransform=Object(C.b)(),this._arrowCenter=Object(u.e)(),this._renderOccluded=4,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameterValues({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameterValues({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){this._stripesEnabled=e,this.attached&&this._arrowMaterial.setParameterValues({stripeEvenColor:this._stripesEnabled?this._parameters.arrowStripeEvenColor:this._parameters.arrowStripeOddColor})}createExternalResources(){this._arrowMaterial=new F({outlineColor:this._parameters.arrowOutlineColor,stripeEvenColor:this._stripesEnabled?this._parameters.arrowStripeEvenColor:this._parameters.arrowStripeOddColor,stripeOddColor:this._parameters.arrowStripeOddColor,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new b.a,this._handles.add(this.view.state.watch("camera",()=>{this.viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles.destroy(),this._handles=null}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){if(Object(a.j)(this._geometry)||Object(a.j)(this._geometry.startRenderSpace)||Object(a.j)(this._geometry.endRenderSpace))return;const t=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);e.addGeometry(t,this._arrowMaterial,this._originTransform),this.viewChanged()}_createArrowGeometry(e,t,i,s){const a=this.view.renderCoordsHelper,n=[],r=[],o=(e,t)=>{const s=E.d.get();Object(g.i)(s,e,i),n.push(s),r.push(t)};if("euclidean"===s.type){s.eval(.5,this._arrowCenter);const i=E.d.get();a.worldUpAtPosition(this._arrowCenter,i),o(e,i),o(t,i)}else{s.eval(.5,this._arrowCenter);const e=this._parameters.arrowSubdivisions+1&-2;for(let t=0;t<e;++t){const i=t/(e-1),n=E.d.get(),r=E.d.get();s.eval(i,n),a.worldUpAtPosition(n,r),o(n,r)}}return P.a.createPolylineGeometry(n,r)}geometryChanged(){this.recreateGeometry()}viewChanged(){if(this.view.ready&&this.attached&&Object(a.k)(this._geometry)){const e=this.view._stage.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameterValues({width:this._parameters.arrowWidth*e})}}}const te={arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128};let ie=class extends o.a{constructor(e){super(e),this._params={...re},this._handles=new b.a,this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._segmentLabelDisplayedMeasurement="euclidean",this._startPosition=Object(u.e)(),this._endPosition=Object(u.e)(),this._cornerPosition=Object(u.e)(),this._startPositionAtSeaLevel=Object(u.e)(),this._endPositionAtSeaLevel=Object(u.e)(),this._viewMode="none",this._geometryDirty=!0,this.state="pending",this.messages=null,this._visualizedMeasurement="auto",this._actualVisualizedMeasurement="euclidean",this._visualElementOrientation="auto",this._triangleOrientationOverride=null,this._triangleCollapseRatioThreshold=.03,this._geodesicDistanceThreshold=1e5}initialize(){this._handles.add(Object(m.whenOnce)(this.view,"ready",()=>this._initialize(),!0))}_initialize(){switch(this.state){case"ready":throw new Error("invalid state");case"destroyed":return}this._segmentVisualElement=new ee({attached:!0,view:this.view,geometry:null,renderOccluded:4}),this._triangleVisualElement=new z.a({attached:!0,view:this.view,width:this._params.triangleLineWidth,color:this._params.triangleColor,renderOccluded:4}),this._rightAngleQuad=new L.a({attached:!0,view:this.view,color:ne,renderOccluded:4}),this._projectedGeodesicLine=new z.a({attached:!0,view:this.view,width:this._params.geodesicProjectionLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stipplePattern:Object(w.c)(this._params.guideStippleLengthPixels),stippleIntegerRepeats:!1,renderOccluded:4}),this._geodesicStartHint=new z.a({attached:!0,view:this.view,width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stipplePattern:Object(w.c)(this._params.guideStippleLengthPixels),stippleIntegerRepeats:!1,renderOccluded:4}),this._geodesicEndHint=new z.a({attached:!0,view:this.view,width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stipplePattern:Object(w.c)(this._params.guideStippleLengthPixels),stippleIntegerRepeats:!1,renderOccluded:4}),this._segmentLabel=new y.a({attached:!0,view:this.view,fontSize:this._params.direcLabelFontSize}),this._verticalLabel=new y.a({attached:!0,view:this.view,fontSize:this._params.verticalLabelFontSize}),this._horizontalLabel=new y.a({attached:!0,view:this.view,fontSize:this._params.horizontalLabelFontSize}),this._handles.add([this.dataObject.watch("visible",()=>this._update(!1),!0),this.dataObject.watch("startPoint",()=>this._update(),!0),this.dataObject.watch("endPoint",()=>this._update(),!0),this.dataObject.watch("measurement",()=>this._update(),!0),this.dataObject.watch("settings.unit",()=>{this._updateLabels(),this._updateSegmentStripeLength()},!0),this.view.state.watch("camera",()=>this._update(),!0),Object(l.c)(async()=>this._updateMessageBundle())]),this._set("state","ready"),this._updateMessageBundle(),this._update()}async whenReady(){return Object(m.whenOnce)(this,"ready").then(()=>{})}get ready(){return"ready"===this.state}get viewMode(){return this._viewMode}get visualizedMeasurement(){return this._visualizedMeasurement}set visualizedMeasurement(e){e!==this._visualizedMeasurement&&(this._visualizedMeasurement=e,this._update())}get actualVisualizedMeasurement(){return this._actualVisualizedMeasurement}get visualElementsOrientation(){return this._visualElementOrientation}set visualElementsOrientation(e){e!==this._visualElementOrientation&&(this._visualElementOrientation=e,this._update())}get allowVisualElementsOrientationChange(){return Object(a.j)(this._triangleOrientationOverride)}set allowVisualElementsOrientationChange(e){Object(a.j)(this._triangleOrientationOverride)!==e&&(Object(a.j)(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._getActualVisualElementsOrientation():(this._triangleOrientationOverride=null,this._update()))}get triangleCollapseRatioThreshold(){return this._triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._triangleCollapseRatioThreshold=e,this._update()}get geodesicDistanceThreshold(){return this._geodesicDistanceThreshold}set geodesicDistanceThreshold(e){this._geodesicDistanceThreshold=e,this._update()}get segmentLabel(){return this._segmentLabel}get horizontalLabel(){return this._horizontalLabel}get verticalLabel(){return this._verticalLabel}get testData(){let e=null;const t="geodesic"===this.actualVisualizedMeasurement;return e={direct:t?this.horizontalLabel:this.segmentLabel,horizontal:t?this.segmentLabel:this.horizontalLabel,vertical:this.verticalLabel},{labels:e,stripeLength:this._segmentVisualElement.stripeLength}}_update(e=!0){switch(this.state){case"destroyed":case"pending":return}const t=this.dataObject.visible;switch(this._geometryDirty=e,this._geometryDirty&&t&&(this._updateGeometryAndViewMode(),this._geometryDirty=!1),this._viewMode){case"none":this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1;break;case"segment":this._segmentVisualElement.visible=t,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1;break;case"segment-and-triangle":this._segmentVisualElement.visible=t,this._triangleVisualElement.visible=t,this._rightAngleQuad.visible=t,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1;break;case"segment-and-projection":this._segmentVisualElement.visible=t,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}this._updateLabels()}destroy(){switch(this.state){case"destroyed":case"pending":return}this._handles.destroy(),this._segmentVisualElement.destroy(),this._segmentVisualElement=null,this._triangleVisualElement.destroy(),this._triangleVisualElement=null,this._rightAngleQuad.destroy(),this._rightAngleQuad=null,this._projectedGeodesicLine.destroy(),this._projectedGeodesicLine=null,this._geodesicStartHint.destroy(),this._geodesicStartHint=null,this._geodesicEndHint.destroy(),this._geodesicEndHint=null,this._segmentLabel.destroy(),this._segmentLabel=null,this._verticalLabel.destroy(),this._verticalLabel=null,this._horizontalLabel.destroy(),this._horizontalLabel=null,this.set("view",null),this._set("state","destroyed")}_updateGeometryAndViewMode(){const e=this.view,t=e.renderCoordsHelper;if(Object(a.j)(this.dataObject.startPoint)||Object(a.j)(this.dataObject.endPoint)||this.dataObject.startPoint.equals(this.dataObject.endPoint))return this._viewMode="none",void(this._actualVisualizedMeasurement="auto"===this._visualizedMeasurement?"euclidean":this._visualizedMeasurement);t.toRenderCoords(this.dataObject.startPoint,this._startPosition),t.toRenderCoords(this.dataObject.endPoint,this._endPosition);const i=this._getActualVisualElementsOrientation(),s=this._updateActualVisualizedMeasurement();this._viewMode=this._computeViewMode(s);let n=this._startPosition,r=this._endPosition;const o="above-segment"===i?1:-1,l=o*(t.getAltitude(r)-t.getAltitude(n));l<0&&(n=this._endPosition,r=this._startPosition);const h="geodesic"===s?new S.b(this._startPosition,this._endPosition,t.spatialReference):new S.a(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=h,this._updateSegmentStripeLength(),this._segmentLabelDisplayedMeasurement=s,this._viewMode){case"segment":this._segmentLabel.anchor="above-segment"===i?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:h,sampleLocation:"center"};break;case"segment-and-triangle":{const s=this._cornerPosition;t.worldUpAtPosition(n,s),Object(g.d)(s,s,o*Math.abs(l)),Object(g.e)(s,s,n),this._triangleVisualElement.geometry=[[[n[0],n[1],n[2]],[s[0],s[1],s[2]],[r[0],r[1],r[2]]]],this._rightAngleQuad.geometry={previous:n,center:s,next:r};const a=new S.a(n,s),d=new S.a(s,r),u=function(e,t,i,s,a){const n=le,r=ce;a.projectToRenderScreen(i,n),a.projectToRenderScreen(t,r);const o={segment:"bottom",horizontal:"top",vertical:n[0]<r[0]?"left":"right"};{const s=he,n=de;if(Object(f.e)(e,i,s,a),Object(f.e)(e,t,n,a),Object(O.g)(s,n)>=oe)o.segment=Object(c.o)(s[1])===Object(c.o)(n[1])?Object(y.b)(o.vertical):o.vertical;else{const e=ue;Object(f.e)(i,t,e,a),Object(O.g)(e,n)>=oe&&(o.segment=Object(c.o)(e[0])===Object(c.o)(n[0])?Object(y.b)(o.horizontal):o.horizontal)}}if("below-segment"===s){const e=e=>"top"===e?"bottom":"top";o.segment=e(o.segment),o.horizontal=e(o.horizontal),o.vertical=e(o.vertical)}return o}(n,r,s,i,e.state.camera);this._segmentLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._segmentLabel.anchor=u.segment,this._verticalLabel.geometry={type:"segment",segment:a,sampleLocation:"center"},this._verticalLabel.anchor=u.vertical,this._horizontalLabel.geometry={type:"segment",segment:d,sampleLocation:"center"},this._horizontalLabel.anchor=u.horizontal;break}case"segment-and-projection":{Object(g.j)(this._startPositionAtSeaLevel,this._startPosition),Object(g.j)(this._endPositionAtSeaLevel,this._endPosition),t.setAltitude(0,this._startPositionAtSeaLevel),t.setAltitude(0,this._endPositionAtSeaLevel);const e=new S.b(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(e),this._geodesicStartHint.setGeometryFromSegment(new S.a(this._startPositionAtSeaLevel,this._startPosition)),this._geodesicEndHint.setGeometryFromSegment(new S.a(this._endPositionAtSeaLevel,this._endPosition)),this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"},this._segmentLabel.anchor="above-segment"===i?"top":"bottom";break}}}_updateLabels(){switch(this.state){case"pending":case"destroyed":return}const e=this.messages,t=this.dataObject.measurement;if(Object(a.j)(t)||!e)return this._segmentLabel.visible=!1,this._horizontalLabel.visible=!1,void(this._verticalLabel.visible=!1);const i={verticalDistance:"",horizontalDistance:"",euclideanDistance:"",geodesicDistance:""},s=t.directDistance,n=t.horizontalDistance,r=t.verticalDistance,o=t.geodesicDistance,l=t.geodesicAngle;switch(this.dataObject.settings.unit){case"metric":i.euclideanDistance=s&&Object(v.e)(e,s),i.horizontalDistance=n&&Object(v.e)(e,n),i.verticalDistance=r&&Object(v.f)(e,r),i.geodesicDistance=o&&Object(v.e)(e,o);break;case"imperial":i.euclideanDistance=s&&Object(v.c)(e,s),i.horizontalDistance=n&&Object(v.c)(e,n),i.verticalDistance=r&&Object(v.d)(e,r),i.geodesicDistance=o&&Object(v.c)(e,o);break;case"degrees":{const t=l&&Object(v.b)(e,l,"degrees");i.euclideanDistance=t,i.horizontalDistance=t,i.geodesicDistance=t;break}case"degrees-minutes-seconds":i.horizontalDistance=l&&Object(v.a)(l);break;default:{const t=this.dataObject.settings.unit;i.euclideanDistance=s&&Object(v.b)(e,s,t),i.horizontalDistance=n&&Object(v.b)(e,n,t),i.verticalDistance=r&&Object(v.b)(e,r,t),i.geodesicDistance=o&&Object(v.b)(e,o,t);break}}this._segmentLabel.text="euclidean"===this._segmentLabelDisplayedMeasurement?i.euclideanDistance:i.geodesicDistance,this._horizontalLabel.text=i.horizontalDistance,this._verticalLabel.text=i.verticalDistance;const c=this.dataObject.visible;switch(this._viewMode){case"none":this._segmentLabel.visible=!1,this._horizontalLabel.visible=!1,this._verticalLabel.visible=!1;break;case"segment":this._segmentLabel.visible=c,this._horizontalLabel.visible=!1,this._verticalLabel.visible=!1;break;case"segment-and-triangle":this._segmentLabel.visible=c,this._horizontalLabel.visible=c,this._verticalLabel.visible=c;break;case"segment-and-projection":this._segmentLabel.visible=c,this._horizontalLabel.visible=!1,this._verticalLabel.visible=!1}this.notifyChange("segmentLabel"),this.notifyChange("horizontalLabel"),this.notifyChange("verticalLabel")}_updateSegmentStripeLength(){const e=function(e,t){let i=null;if(Object(a.k)(t.measurement)){const e=t.measurement.directDistance;switch(t.settings.unit){case"metric":i=e&&e.toUnit("meters");break;case"imperial":i=e&&e.toUnit(Object(p.s)(e.value,e.unit));break;case"degrees":case"degrees-minutes-seconds":{const e=t.measurement.geodesicAngle;i=e&&e.toUnit("degrees");break}default:i=e&&e.toUnit(t.settings.unit)}}if(i){let t=1;return t=Object(c.k)(i.value/30),t*="degrees"===i.unit?Object(_.e)(e.spatialReference).metersPerDegree:Object(p.c)(1,i.unit,"meters"),t}return null}(this.view,this.dataObject);Object(a.k)(e)?(this._segmentVisualElement.stripeLength=e,this._segmentVisualElement.stripesEnabled=!0):this._segmentVisualElement.stripesEnabled=!1}_computeViewMode(e){const t=this.dataObject,i=t.measurement;if("geodesic"===e){if(!se(t,this.geodesicDistanceThreshold))return"segment";if(ae(this.view,this._startPosition)||ae(this.view,this._endPosition))return"segment-and-projection"}return Object(a.j)(i)||Math.min(i.verticalDistance.value/i.horizontalDistance.value,i.horizontalDistance.value/i.verticalDistance.value)<this.triangleCollapseRatioThreshold?"segment":"segment-and-triangle"}_getActualVisualElementsOrientation(){return Object(a.k)(this._triangleOrientationOverride)?this._triangleOrientationOverride:"auto"===this.visualElementsOrientation?this.view.state.camera.aboveGround?"above-segment":"below-segment":this.visualElementsOrientation}_updateActualVisualizedMeasurement(){if("auto"===this._visualizedMeasurement){this._actualVisualizedMeasurement="euclidean";const e=this.dataObject.settings.unit;"degrees"!==e&&"degrees-minutes-seconds"!==e||(this._actualVisualizedMeasurement="geodesic"),se(this.dataObject,this.geodesicDistanceThreshold)&&(this._actualVisualizedMeasurement="geodesic")}else this._actualVisualizedMeasurement=this._visualizedMeasurement;return this._actualVisualizedMeasurement}_updateMessageBundle(){Object(d.a)("esri/core/t9n/Units").then(e=>{this.messages=e,this.view&&this._updateLabels()})}};function se(e,t){return Object(a.k)(e.measurement)&&e.measurement.horizontalDistance&&e.measurement.horizontalDistance.value>t}function ae(e,t){if(!e.state)return!1;const i=e.renderCoordsHelper,s=e.state.camera.computeScreenPixelSizeAt(t);return i.getAltitude(t)/s>=10}Object(s.a)([Object(n.b)({readOnly:!0})],ie.prototype,"state",void 0),Object(s.a)([Object(n.b)()],ie.prototype,"ready",null),Object(s.a)([Object(n.b)()],ie.prototype,"messages",void 0),Object(s.a)([Object(n.b)()],ie.prototype,"view",void 0),Object(s.a)([Object(n.b)()],ie.prototype,"dataObject",void 0),Object(s.a)([Object(n.b)()],ie.prototype,"viewMode",null),Object(s.a)([Object(n.b)()],ie.prototype,"segmentLabel",null),Object(s.a)([Object(n.b)()],ie.prototype,"horizontalLabel",null),Object(s.a)([Object(n.b)()],ie.prototype,"verticalLabel",null),ie=Object(s.a)([Object(r.a)("esri.views.3d.interactive.graphics.DirectLineMeasurement3D.DirectLineMeasurement3DView")],ie);const ne=Object(j.c)(1,.5,0,.75),re={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,triangleColor:ne,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:ne,guideLineWidth:2,guideLineColor:ne,guideStippleLengthPixels:6,labelDistance:25,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},oe=Math.cos(Object(c.d)(12)),le=Object(h.e)(),ce=Object(h.e)(),he=Object(h.d)(),de=Object(h.d)(),ue=Object(h.d)()},KrNm:function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return n});var s=i("OIYi"),a=i("aQrP");function n(){const e=new a.a;e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("width","float"),e.attributes.add("position","vec3"),e.attributes.add("normal","vec3"),e.attributes.add("uv0","vec2"),e.attributes.add("auxpos1","float"),e.varyings.add("vtc","vec2"),e.varyings.add("vlength","float"),e.varyings.add("vradius","float"),e.vertex.code.add(s.a`
    void main(void) {
      vec3 bitangent = normal;

      vtc = uv0;
      vlength = auxpos1;
      vradius = 0.5 * width;

      vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
      gl_Position = proj * pos;
    }
  `),e.fragment.uniforms.add("outlineSize","float").add("outlineColor","vec4").add("stripeLength","float").add("stripeEvenColor","vec4").add("stripeOddColor","vec4");const t=1/Math.sqrt(2);return e.fragment.code.add(s.a`
    const float INV_SQRT2 = ${s.a.float(t)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      gl_FragColor = color;
    }
  `),e}var r=Object.freeze({__proto__:null,build:n})}}]);