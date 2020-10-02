(function(){var t={"arcgis-js-api/views/draw/support/Box":"JQfi","arcgis-js-api/geometry/support/rotate":"Rm4k"},e=this||window,i=e.webpackJsonp=e.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(t):(i.absMidsWaiting=i.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{JQfi:function(t,e,i){var r,a;r=[i.dj.c(t.i),e,i("zOht"),i("TMur"),i("jZlN"),i("BcWh"),i("eIBl"),i("LxLY"),i("8MXS"),i("Vx27"),i("lRq4"),i("hBh5"),i("ZPQp"),i("Rm4k"),i("x7Wq"),i("CF4u"),i("NsXp"),i("tJCi"),i("i6zL"),i("K9Qa")],void 0===(a=(function(t,e,i,r,a,o,s,n,h,c,p,l,u,y,_,v,d,f,g,G){var m=function(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move-start"},b=function(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move"},S=function(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move-stop"},w=function(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start"},x=function(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate"},k=function(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop"},M=function(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale-start"},R=function(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale"},I=function(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale-stop"};return function(t){function e(e){var i,r=t.call(this,e)||this;return r._activeHandleGraphic=null,r._centerGraphicSymbol=new d({style:"circle",size:4,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),r._defaultFillSymbol=new _({color:[12,207,255,.075],outline:{join:"round",color:[0,12,207],width:2}}),r._dashedFillSymbol=new _({color:[0,0,0,0],outline:{style:"dash",color:[150,150,150,.5],width:2}}),r._defaultGraphicSymbol=new d({style:"square",size:8,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),r._graphicAttributes={esriSketchTool:"box"},r._handles=new s,r._mover=null,r._rotateGraphicOffset=20,r._rotateGraphicHoverSymbol=new d({style:"circle",size:10,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),r._rotateGraphicSymbol=new d({style:"circle",size:8,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),r._rotationAngle=0,r._rotateLineGraphic=null,r._rotateLineGraphicSymbol=new v({color:[0,12,207],width:2}),r._startInfo=null,r._totalDx=0,r._totalDy=0,r._xScale=1,r._yScale=1,r.type="box",r.callbacks={onMoveStart:function(t){},onMove:function(t){},onMoveStop:function(t){},onScaleStart:function(t){},onScale:function(t){},onScaleStop:function(t){},onRotateStart:function(t){},onRotate:function(t){},onRotateStop:function(t){}},r.centerGraphic=null,r.backgroundGraphic=null,r.enableMovement=!0,r.enableRotation=!0,r.enableScaling=!0,r.graphics=[],r.handleGraphics=[],r.layer=null,r.preserveAspectRatio=!1,r.rotateGraphic=null,r.showCenterGraphic=!0,r.view=null,r._getBounds=(i=p.create(),function(t,e){var r,a,o;t[0]=Number.POSITIVE_INFINITY,t[1]=Number.POSITIVE_INFINITY,t[2]=Number.NEGATIVE_INFINITY,t[3]=Number.NEGATIVE_INFINITY;for(var s=0,n=e;s<n.length;s++){var h=n[s];if(h){var c=void 0,p=void 0,y=void 0,_=void 0;if("point"===h.type)c=y=h.x,p=_=h.y;else if("multipoint"===h.type){var v=u.geometryToCoordinates(h);c=(r=l.getRingsOrPathsBounds(i,[v]))[0],p=r[1],y=r[2],_=r[3]}else"extent"===h.type?(c=(a=[h.xmin,h.ymin,h.xmax,h.ymax])[0],p=a[1],y=a[2],_=a[3]):(v=u.geometryToCoordinates(h),c=(o=l.getRingsOrPathsBounds(i,v))[0],p=o[1],y=o[2],_=o[3]);t[0]=Math.min(c,t[0]),t[1]=Math.min(p,t[1]),t[2]=Math.max(y,t[2]),t[3]=Math.max(_,t[3])}}return t}),r}return i.__extends(e,t),e.prototype.initialize=function(){var t=this;this._setup(),this._handles.add([h.whenOnce(this,"view.ready",(function(){G.addUniqueLayer(t.view,t.layer)})),h.pausable(this,"preserveAspectRatio",(function(){t._activeHandleGraphic&&(t._scaleGraphic(t._activeHandleGraphic),t._updateGraphics())})),h.pausable(this,"view.scale",(function(){t._updateRotateGraphic(),t._updateRotateLineGraphic()})),h.pausable(this,"graphics",(function(){return t.refresh()})),h.pausable(this,"layer",(function(e,i){i&&t._resetGraphics(i),t.refresh()}))])},e.prototype.destroy=function(){this._reset(),this._handles&&(this._handles.removeAll(),this._handles=null)},Object.defineProperty(e.prototype,"state",{get:function(){var t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype.isUIGraphic=function(t){var e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.indexOf(t)>-1},e.prototype.move=function(t,e){if(this._mover&&this.graphics.length){for(var i=0,r=this.graphics;i<r.length;i++){var a=r[i],o=f.cloneMove(a.geometry,t,e,this.view);a.geometry=o}this.refresh(),this._emitMoveStopEvent(t,e,null)}},e.prototype.scale=function(t,e){if(this._mover&&this.graphics.length){for(var i=0,r=this.graphics;i<r.length;i++){var a=r[i],o=f.scale(a.geometry,t,e);a.geometry=o}this.refresh(),this._emitScaleStopEvent(t,e,null)}},e.prototype.rotate=function(t,e){if(this._mover&&this.graphics.length){e||(e=new r.Point(this.handleGraphics[1].geometry.x,this.handleGraphics[3].geometry.y,this.view.spatialReference));for(var i=0,a=this.graphics;i<a.length;i++){var o=a[i],s=y.default(o.geometry,t,e);o.geometry=s}this.refresh(),this._emitRotateStopEvent(t,null)}},e.prototype.refresh=function(){this._reset(),this._setup()},e.prototype.reset=function(){this.graphics=[]},e.prototype._setup=function(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())},e.prototype._reset=function(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"},e.prototype._resetGraphicStateVars=function(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._rotationAngle=0},e.prototype._resetGraphics=function(t){var e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));for(var i=0,r=this.handleGraphics;i<r.length;i++)r[i].destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)},e.prototype._setupMover=function(){var t=this,e=[].concat(this.handleGraphics);this.enableMovement&&(e=e.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&e.push(this.rotateGraphic),this.showCenterGraphic&&e.push(this.centerGraphic),this._mover=new g({enableMoveAllGraphics:!1,view:this.view,graphics:e,callbacks:{onGraphicClick:function(e){return t._onGraphicClickCallback(e)},onGraphicMoveStart:function(e){return t._onGraphicMoveStartCallback(e)},onGraphicMove:function(e){return t._onGraphicMoveCallback(e)},onGraphicMoveStop:function(e){return t._onGraphicMoveStopCallback(e)},onGraphicPointerOver:function(e){return t._onGraphicPointerOverCallback(e)},onGraphicPointerOut:function(e){return t._onGraphicPointerOutCallback(e)}}})},e.prototype._getStartInfo=function(t){var e=this._getBoxBounds(p.create()),i=e[0],r=e[1],a=e[2],o=e[3],s=Math.abs(a-i),n=Math.abs(o-r),h=t.geometry;return{width:s,height:n,centerX:(a+i)/2,centerY:(o+r)/2,startX:h.x,startY:h.y,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}},e.prototype._getGraphicInfos=function(){var t=this;return this.graphics.map((function(e){return t._getGraphicInfo(e)}))},e.prototype._getGraphicInfo=function(t){var e=t.geometry,i=this._getBounds(p.create(),[e]),r=i[0],a=i[1],o=i[2],s=i[3];return{width:Math.abs(o-r),height:Math.abs(s-a),centerX:(o+r)/2,centerY:(s+a)/2,geometry:e}},e.prototype._onGraphicClickCallback=function(t){var e=t.graphic;(e===this.rotateGraphic||this.handleGraphics.indexOf(e)>-1)&&t.viewEvent.stopPropagation()},e.prototype._onGraphicMoveStartCallback=function(t){var e=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),this.backgroundGraphic.symbol=this._dashedFillSymbol,this._startInfo=this._getStartInfo(e),e===this.rotateGraphic?this._emitRotateStartEvent(this._rotationAngle,e):this.handleGraphics.indexOf(e)>-1?(this._activeHandleGraphic=e,this._emitScaleStartEvent(this._xScale,this._yScale,e)):this._emitMoveStartEvent(t.dx,t.dy,e)},e.prototype._onGraphicMoveCallback=function(t){var e=t.graphic;if(this._startInfo)if(this.handleGraphics.indexOf(e)>-1)this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._rotationAngle,e);else{var i=t.dx,r=t.dy;this._totalDx+=i,this._totalDy+=r,this._moveGraphic(e,i,r),this._emitMoveEvent(i,r,e)}},e.prototype._onGraphicMoveStopCallback=function(t){var e=t.graphic;this._startInfo?(this._updateGraphics(),this._showGraphicsAfterUpdate(),this.backgroundGraphic.symbol=this._defaultFillSymbol,e===this.rotateGraphic?this._emitRotateStopEvent(this._rotationAngle,e):this.handleGraphics.indexOf(e)>-1?this._emitScaleStopEvent(this._xScale,this._yScale,e):this._emitMoveStopEvent(this._totalDx,this._totalDy,e),this._resetGraphicStateVars()):this.refresh()},e.prototype._onGraphicPointerOverCallback=function(t){var e,i=this.view.rotation,r=t.index;switch(t.graphic===this.rotateGraphic&&(this.rotateGraphic.symbol=this._rotateGraphicHoverSymbol),r<8&&(i>=0&&i<45?r%=8:r=i>=45&&i<90?(r+1)%8:i>=90&&i<135?(r+2)%8:i>=135&&i<180?(r+3)%8:i>=180&&i<225?(r+4)%8:i>=225&&i<270?(r+5)%8:i>=270&&i<315?(r+6)%8:(r+7)%8),r){case 0:e="nwse-resize";break;case 1:e="ns-resize";break;case 2:e="nesw-resize";break;case 3:e="ew-resize";break;case 4:e="nwse-resize";break;case 5:e="ns-resize";break;case 6:e="nesw-resize";break;case 7:e="ew-resize";break;default:e="pointer"}this.view.cursor=e},e.prototype._onGraphicPointerOutCallback=function(t){t.graphic===this.rotateGraphic&&(this.rotateGraphic.symbol=this._rotateGraphicSymbol),this.view.cursor="default"},e.prototype._scaleGraphic=function(t){var e=this._startInfo,i=this.preserveAspectRatio,a=this.view,o=e.centerX,s=e.centerY,n=e.startX,h=e.startY,c=a.state,p=c.resolution,l=c.transform,u=this.handleGraphics.indexOf(t);1!==u&&5!==u||this._updateX(t,o),3!==u&&7!==u||this._updateY(t,s);var y=t.geometry,_=y.x,v=y.y,d=l[0]*_+l[2]*v+l[4],g=l[1]*_+l[3]*v+l[5],G=e.graphicInfos.map((function(t){return t.geometry}));if(i){this._xScale=this._yScale=f.getScaleRatio(l[0]*o+l[2]*s+l[4],l[1]*o+l[3]*s+l[5],l[0]*n+l[2]*h+l[4],l[1]*n+l[3]*h+l[5],d,g);for(var m=0,b=G;m<b.length;m++){var S=b[m],w=G.indexOf(S);this.graphics[w].geometry=f.scale(S,this._xScale,this._yScale,[o,s])}this._updateBackgroundGraphic()}else{var x=e.width,k=e.height,M=_-n,R=h-v;if(1===u||5===u?M=0:3!==u&&7!==u||(R=0),0===M&&0===R)return;var I=k+(h<s?R:-1*R),E=o+M/2,O=s+R/2;this._xScale=(x+(n>o?M:-1*M))/x||1,this._yScale=I/k||1,1===u||5===u?this._xScale=1:3!==u&&7!==u||(this._yScale=1);var C=(E-o)/p,P=(O-s)/p,A=f.scale(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=f.cloneMove(A,C,P,a,!0);for(var B=this._getGraphicInfo(this.backgroundGraphic),L=B.centerX,z=B.centerY,Y=(L-o)/p,N=-1*(z-s)/p,X=0,T=G;X<T.length;X++){var F=G.indexOf(S=T[X]),H=f.scale(S,this._xScale,this._yScale,[o,s]);this.graphics[F].geometry=f.cloneMove(H,Y,N,a,!0)}this.centerGraphic.geometry=new r.Point(L,z,a.spatialReference)}},e.prototype._rotateGraphic=function(t){var e=this._startInfo,i=e.centerX,a=e.centerY,o=e.startX,s=e.startY,n=e.box,h=e.rotate,c=t.geometry,p=c.x,l=c.y,u=new r.Point(i,a,this.view.spatialReference);this._rotationAngle=f.getRotationAngle(i,a,o,s,p,l);for(var _=this._startInfo.graphicInfos.map((function(t){return t.geometry})),v=0,d=_;v<d.length;v++){var g=d[v],G=_.indexOf(g),m=y.default(g,this._rotationAngle,u);this.graphics[G].geometry=m}this.backgroundGraphic.geometry=y.default(n,this._rotationAngle,u),this.rotateGraphic.geometry=y.default(h,this._rotationAngle,u)},e.prototype._moveGraphic=function(t,e,i){if(this.graphics.indexOf(t)>-1){var r=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=f.cloneMove(r,e,i,this.view);for(var a=0,o=this.graphics;a<o.length;a++)(h=o[a])!==t&&(h.geometry=f.cloneMove(h.geometry,e,i,this.view))}else t===this.centerGraphic&&(this.backgroundGraphic.geometry=f.cloneMove(r=this.backgroundGraphic.geometry,e,i,this.view));if(t===this.backgroundGraphic||t===this.centerGraphic)for(var s=0,n=this.graphics;s<n.length;s++){var h;(h=n[s]).geometry=f.cloneMove(h.geometry,e,i,this.view)}},e.prototype._setupGraphics=function(){var t=this._graphicAttributes;this._set("centerGraphic",new a(null,this._centerGraphicSymbol,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new a(null,this._defaultFillSymbol,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new a(null,this._rotateLineGraphicSymbol,t),this._set("rotateGraphic",new a(null,this._rotateGraphicSymbol,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(var e=0;e<8;e++)this.handleGraphics.push(new a(null,this._defaultGraphicSymbol,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)},e.prototype._updateGraphics=function(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()},e.prototype._hideGraphicsBeforeUpdate=function(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((function(t){return t.visible=!1}))},e.prototype._showGraphicsAfterUpdate=function(){this.enableRotation&&(this._rotateLineGraphic.visible=!0,this.rotateGraphic.visible=!0),this.showCenterGraphic&&(this.centerGraphic.visible=!0),this.enableScaling&&this.handleGraphics.forEach((function(t){return t.visible=!0}))},e.prototype._updateHandleGraphics=function(){var t=this,e=this._getCoordinates(!0);this.handleGraphics.forEach((function(i,r){var a=e[r];t._updateXY(i,a[0],a[1])}))},e.prototype._updateBackgroundGraphic=function(){var t=this._getCoordinates();this.backgroundGraphic.geometry=new r.Polygon({rings:t,spatialReference:this.view.spatialReference})},e.prototype._updateCenterGraphic=function(){var t=this._getBoxBounds(p.create());this.centerGraphic.geometry=new r.Point((t[2]+t[0])/2,(t[3]+t[1])/2,this.view.spatialReference)},e.prototype._updateRotateGraphic=function(){if(this.handleGraphics.length){var t=this.handleGraphics[1].geometry;this.rotateGraphic.geometry=new r.Point(t.x,t.y+this.view.state.resolution*this._rotateGraphicOffset,this.view.spatialReference)}},e.prototype._updateRotateLineGraphic=function(){if(this.handleGraphics.length&&this.rotateGraphic&&this.rotateGraphic.geometry){var t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new r.Polyline({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}},e.prototype._updateXY=function(t,e,i){t.geometry=new r.Point(e,i,this.view.spatialReference)},e.prototype._updateX=function(t,e){t.geometry=new r.Point(e,t.geometry.y,this.view.spatialReference)},e.prototype._updateY=function(t,e){t.geometry=new r.Point(t.geometry.x,e,this.view.spatialReference)},e.prototype._hasExtentGraphic=function(){return this.graphics.some((function(t){return t&&n.isSome(t.geometry)&&"extent"===t.geometry.type}))},e.prototype._getBoxBounds=function(t){var e=this.graphics.map((function(t){return t.geometry}));return this._getBounds(t,e)},e.prototype._getCoordinates=function(t){var e=this._getBoxBounds(p.create()),i=e[0],r=e[1],a=e[2],o=e[3];if(t){var s=(i+a)/2,n=(o+r)/2;return[[i,o],[s,o],[a,o],[a,n],[a,r],[s,r],[i,r],[i,n]]}return[[i,o],[a,o],[a,r],[i,r]]},e.prototype._emitMoveStartEvent=function(t,e,i){var r=new m(this.graphics,i,t,e);this.emit("move-start",r),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(r)},e.prototype._emitMoveEvent=function(t,e,i){var r=new b(this.graphics,i,t,e);this.emit("move",r),this.callbacks.onMove&&this.callbacks.onMove(r)},e.prototype._emitMoveStopEvent=function(t,e,i){var r=new S(this.graphics,i,t,e);this.emit("move-stop",r),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(r)},e.prototype._emitRotateStartEvent=function(t,e){var i=new w(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)},e.prototype._emitRotateEvent=function(t,e){var i=new x(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)},e.prototype._emitRotateStopEvent=function(t,e){var i=new k(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)},e.prototype._emitScaleStartEvent=function(t,e,i){var r=new M(this.graphics,i,t,e);this.emit("scale-start",r),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(r)},e.prototype._emitScaleEvent=function(t,e,i){var r=new R(this.graphics,i,t,e);this.emit("scale",r),this.callbacks.onScale&&this.callbacks.onScale(r)},e.prototype._emitScaleStopEvent=function(t,e,i){var r=new I(this.graphics,i,t,e);this.emit("scale-stop",r),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(r)},i.__decorate([c.property()],e.prototype,"_rotateLineGraphic",void 0),i.__decorate([c.property({readOnly:!0})],e.prototype,"type",void 0),i.__decorate([c.property()],e.prototype,"callbacks",void 0),i.__decorate([c.property({readOnly:!0})],e.prototype,"centerGraphic",void 0),i.__decorate([c.property({readOnly:!0})],e.prototype,"backgroundGraphic",void 0),i.__decorate([c.property()],e.prototype,"enableMovement",void 0),i.__decorate([c.property()],e.prototype,"enableRotation",void 0),i.__decorate([c.property()],e.prototype,"enableScaling",void 0),i.__decorate([c.property()],e.prototype,"graphics",void 0),i.__decorate([c.property({readOnly:!0})],e.prototype,"handleGraphics",void 0),i.__decorate([c.property()],e.prototype,"layer",void 0),i.__decorate([c.property()],e.prototype,"preserveAspectRatio",void 0),i.__decorate([c.property({readOnly:!0})],e.prototype,"rotateGraphic",void 0),i.__decorate([c.property()],e.prototype,"showCenterGraphic",void 0),i.__decorate([c.property({dependsOn:["view.ready","graphics.length","layer"],readOnly:!0})],e.prototype,"state",null),i.__decorate([c.property()],e.prototype,"view",void 0),i.__decorate([c.subclass("esri.views.draw.support.Box")],e)}(o.EventedAccessor)}).apply(null,r))||(t.exports=a)},Rm4k:function(t,e,i){var r,a;r=[i.dj.c(t.i),e,i("TMur")],void 0===(a=(function(t,e,i){function r(t){var e,i=0,r=0,a=t.length,o=t[r];for(r=0;r<a-1;r++)i+=((e=t[r+1])[0]-o[0])*(e[1]+o[1]),o=e;return i>=0}function a(t,e,i,r){for(var a=[],o=0,s=t;o<s.length;o++){var n=s[o],h=n.slice(0);a.push(h);var c=i*(n[0]-r.x)+e*(n[1]-r.y)+r.y;h[0]=e*(n[0]-r.x)-i*(n[1]-r.y)+r.x,h[1]=c}return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,o){var s=t.spatialReference,n=e*Math.PI/180,h=Math.cos(n),c=Math.sin(n);if("xmin"in t&&(o=null!=o?o:t.center,t=new i.Polygon({spatialReference:s,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){o=null!=o?o:t.extent.center;for(var p=[],l=0,u=t.paths;l<u.length;l++)p.push(a(u[l],h,c,o));return new i.Polyline({spatialReference:s,paths:p})}if("rings"in t){o=null!=o?o:t.extent.center;for(var y=[],_=0,v=t.rings;_<v.length;_++){var d=v[_],f=r(d),g=a(d,h,c,o);r(g)!==f&&g.reverse(),y.push(g)}return new i.Polygon({spatialReference:s,rings:y})}if("x"in t){var G=new i.Point({x:h*(t.x-(o=null!=o?o:t).x)-c*(t.y-o.y)+o.x,y:c*(t.x-o.x)+h*(t.y-o.y)+o.y,spatialReference:s});return null!=t.z&&(G.z=t.z),null!=t.m&&(G.m=t.m),G}return"points"in t?new i.Multipoint({points:a(t.points,h,c,o=null!=o?o:t.extent.center),spatialReference:s}):null}}).apply(null,r))||(t.exports=a)}}]);