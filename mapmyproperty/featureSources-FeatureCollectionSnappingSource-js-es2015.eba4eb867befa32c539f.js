(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{LcrR:function(e,t,a){"use strict";a.r(t),a.d(t,"FeatureCollectionSnappingSource",(function(){return u}));var r=a("pO5D"),n=(a("wSAH"),a("srIe")),c=(a("6S2I"),a("zqDF"),a("WbKI")),i=a("04ZG"),o=(a("4EHJ"),a("ju1D"),a("9AIY"),a("/CmD")),s=a("SuVq"),p=a("Wf2p");let u=class extends o.a{constructor(e){super(e)}get availability(){return 1}refresh(){}async fetchCandidates(e,t){const a=this.layerSource.layer.source;if(!a.querySnapping)return{candidates:[]};const{candidates:r}=await a.querySnapping({distance:e.distance,point:e.coordinateHelper.toPoint(e.point,new s.a).toJSON(),types:e.types,query:Object(n.k)(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},{signal:t});return{candidates:r.map(t=>Object(p.a)(t,e.coordinateHelper))}}};Object(r.a)([Object(c.b)({constructOnly:!0})],u.prototype,"layerSource",void 0),Object(r.a)([Object(c.b)({readOnly:!0})],u.prototype,"availability",null),u=Object(r.a)([Object(i.a)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],u)}}]);