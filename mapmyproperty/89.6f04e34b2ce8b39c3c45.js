(function(){var t={"esri/geometry/geometryAdapters/json":"H9Hv","esri/geometry/geometryEngineWorker":"saBS"},i=this||window,e=i.webpackJsonp=i.webpackJsonp||[];e.registerAbsMids?e.registerAbsMids(t):(e.absMidsWaiting=e.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{H9Hv:function(t,i,e){var n,s;n=[e.dj.c(t.i),i],void 0===(s=(function(t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.jsonAdapter={convertToGEGeometry:function(t,i){return null==i?null:t.convertJSONToGeometry(i)},exportPoint:function(t,i,n){var s=new e(t.getPointX(i),t.getPointY(i),n),o=t.hasZ(i),a=t.hasM(i);return o&&(s.z=t.getPointZ(i)),a&&(s.m=t.getPointM(i)),s},exportPolygon:function(t,i,e){return new n(t.exportPaths(i),e,t.hasZ(i),t.hasM(i))},exportPolyline:function(t,i,e){return new s(t.exportPaths(i),e,t.hasZ(i),t.hasM(i))},exportMultipoint:function(t,i,e){return new o(t.exportPoints(i),e,t.hasZ(i),t.hasM(i))},exportExtent:function(t,i,e){var n=t.hasZ(i),s=t.hasM(i),o=new a(t.getXMin(i),t.getYMin(i),t.getXMax(i),t.getYMax(i),e);if(n){var r=t.getZExtent(i);o.zmin=r.vmin,o.zmax=r.vmax}if(s){var h=t.getMExtent(i);o.mmin=h.vmin,o.mmax=h.vmax}return o}};var e=function(t,i,e){this.x=t,this.y=i,this.spatialReference=e,this.z=void 0,this.m=void 0},n=function(t,i,e,n){this.rings=t,this.spatialReference=i,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)},s=function(t,i,e,n){this.paths=t,this.spatialReference=i,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)},o=function(t,i,e,n){this.points=t,this.spatialReference=i,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)},a=function(t,i,e,n,s){this.xmin=t,this.ymin=i,this.xmax=e,this.ymax=n,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}).apply(null,n))||(t.exports=s)},saBS:function(t,i,e){var n,s;n=[e.dj.c(t.i),i,e("tNTp")],void 0===(s=(function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0}),i.executeGEOperation=function(t){return e[t.operation].apply(void 0,t.parameters)}}).apply(null,n))||(t.exports=s)}}]);