(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/views/draw/support/Box":"JQfi"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{JQfi:function(t,e,i){var r,a;r=[i.dj.c(t.i),e,i("9opi"),i("qKT0"),i("TMur"),i("jZlN"),i("BcWh"),i("eIBl"),i("LxLY"),i("8MXS"),i("Vx27"),i("21p4"),i("lRq4"),i("hBh5"),i("ZPQp"),i("x7Wq"),i("CF4u"),i("NsXp"),i("tJCi"),i("i6zL"),i("K9Qa")],void 0===(a=(function(t,e,i,r,a,o,s,h,n,c,p,l,u,y,v,d,_,g,G,f,m){var b=function(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move-start"},S=function(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move"},w=function(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move-stop"},k=function(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start"},x=function(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate"},M=function(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop"},R=function(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale-start"},I=function(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale"},E=function(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale-stop"};return function(t){function e(e){var i,r=t.call(this,e)||this;return r._activeHandleGraphic=null,r._centerGraphicSymbol=new g({style:"circle",size:4,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),r._defaultFillSymbol=new d({color:[12,207,255,.075],outline:{join:"round",color:[0,12,207],width:2}}),r._dashedFillSymbol=new d({color:[0,0,0,0],outline:{style:"dash",color:[150,150,150,.5],width:2}}),r._defaultGraphicSymbol=new g({style:"square",size:8,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),r._handles=new h,r._mover=null,r._rotateGraphicOffset=20,r._rotateGraphicHoverSymbol=new g({style:"circle",size:10,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),r._rotateGraphicSymbol=new g({style:"circle",size:8,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),r._rotationAngle=0,r._rotateLineGraphic=null,r._rotateLineGraphicSymbol=new _({color:[0,12,207],width:2}),r._startInfo=null,r._totalDx=0,r._totalDy=0,r._xScale=1,r._yScale=1,r.type="box",r.callbacks={onMoveStart:function(t){},onMove:function(t){},onMoveStop:function(t){},onScaleStart:function(t){},onScale:function(t){},onScaleStop:function(t){},onRotateStart:function(t){},onRotate:function(t){},onRotateStop:function(t){}},r.centerGraphic=null,r.backgroundGraphic=null,r.enableMovement=!0,r.enableRotation=!0,r.enableScaling=!0,r.graphics=[],r.handleGraphics=[],r.layer=null,r.preserveAspectRatio=!1,r.rotateGraphic=null,r.showCenterGraphic=!0,r.view=null,r._getBounds=(i=u.create(),function(t,e){var r,a,o;t[0]=Number.POSITIVE_INFINITY,t[1]=Number.POSITIVE_INFINITY,t[2]=Number.NEGATIVE_INFINITY,t[3]=Number.NEGATIVE_INFINITY;for(var s=0,h=e;s<h.length;s++){var n=h[s];if(n){var c=void 0,p=void 0,l=void 0,u=void 0;if("point"===n.type)c=l=n.x,p=u=n.y;else if("multipoint"===n.type){var d=v.geometryToCoordinates(n);c=(r=y.getRingsOrPathsBounds(i,[d]))[0],p=r[1],l=r[2],u=r[3]}else"extent"===n.type?(c=(a=[n.xmin,n.ymin,n.xmax,n.ymax])[0],p=a[1],l=a[2],u=a[3]):(d=v.geometryToCoordinates(n),c=(o=y.getRingsOrPathsBounds(i,d))[0],p=o[1],l=o[2],u=o[3]);t[0]=Math.min(c,t[0]),t[1]=Math.min(p,t[1]),t[2]=Math.max(l,t[2]),t[3]=Math.max(u,t[3])}}return t}),r}return i(e,t),e.prototype.initialize=function(){var t=this;this._setup(),this._handles.add([c.whenOnce(this,"view.ready",(function(){m.addUniqueLayer(t.view,t.layer)})),c.pausable(this,"preserveAspectRatio",(function(){t._activeHandleGraphic&&(t._scaleGraphic(t._activeHandleGraphic),t._updateGraphics())})),c.pausable(this,"view.scale",(function(){t._updateRotateGraphic(),t._updateRotateLineGraphic()})),c.pausable(this,"graphics",(function(){return t.refresh()})),c.pausable(this,"layer",(function(e,i){i&&t._resetGraphics(i),t.refresh()}))])},e.prototype.destroy=function(){this._reset(),this._handles&&(this._handles.removeAll(),this._handles=null)},Object.defineProperty(e.prototype,"state",{get:function(){var t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype.isUIGraphic=function(t){var e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.indexOf(t)>-1},e.prototype.move=function(t,e){if(this._mover&&this.graphics.length){for(var i=0,r=this.graphics;i<r.length;i++){var a=r[i],o=G.cloneMove(a.geometry,t,e,this.view);a.geometry=o}this.refresh(),this._emitMoveStopEvent(t,e,null)}},e.prototype.scale=function(t,e){if(this._mover&&this.graphics.length){for(var i=0,r=this.graphics;i<r.length;i++){var a=r[i],o=G.scale(a.geometry,t,e);a.geometry=o}this.refresh(),this._emitScaleStopEvent(t,e,null)}},e.prototype.rotate=function(t,e){if(this._mover&&this.graphics.length){e||(e=new a.Point(this.handleGraphics[1].geometry.x,this.handleGraphics[3].geometry.y,this.view.spatialReference));for(var i=0,r=this.graphics;i<r.length;i++){var o=r[i],s=l.rotate(o.geometry,t,e);o.geometry=s}this.refresh(),this._emitRotateStopEvent(t,null)}},e.prototype.refresh=function(){this._reset(),this._setup()},e.prototype.reset=function(){this.graphics=[]},e.prototype._setup=function(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())},e.prototype._reset=function(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"},e.prototype._resetGraphicStateVars=function(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._rotationAngle=0},e.prototype._resetGraphics=function(t){var e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));for(var i=0,r=this.handleGraphics;i<r.length;i++)r[i].destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)},e.prototype._setupMover=function(){var t=this,e=[].concat(this.handleGraphics);this.enableMovement&&(e=e.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&e.push(this.rotateGraphic),this.showCenterGraphic&&e.push(this.centerGraphic),this._mover=new f({enableMoveAllGraphics:!1,view:this.view,graphics:e,callbacks:{onGraphicClick:function(e){return t._onGraphicClickCallback(e)},onGraphicMoveStart:function(e){return t._onGraphicMoveStartCallback(e)},onGraphicMove:function(e){return t._onGraphicMoveCallback(e)},onGraphicMoveStop:function(e){return t._onGraphicMoveStopCallback(e)},onGraphicPointerOver:function(e){return t._onGraphicPointerOverCallback(e)},onGraphicPointerOut:function(e){return t._onGraphicPointerOutCallback(e)}}})},e.prototype._getStartInfo=function(t){var e=this._getBoxBounds(u.create()),i=e[0],r=e[1],a=e[2],o=e[3],s=Math.abs(a-i),h=Math.abs(o-r),n=t.geometry;return{width:s,height:h,centerX:(a+i)/2,centerY:(o+r)/2,startX:n.x,startY:n.y,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}},e.prototype._getGraphicInfos=function(){var t=this;return this.graphics.map((function(e){return t._getGraphicInfo(e)}))},e.prototype._getGraphicInfo=function(t){var e=t.geometry,i=this._getBounds(u.create(),[e]),r=i[0],a=i[1],o=i[2],s=i[3];return{width:Math.abs(o-r),height:Math.abs(s-a),centerX:(o+r)/2,centerY:(s+a)/2,geometry:e}},e.prototype._onGraphicClickCallback=function(t){var e=t.graphic;(e===this.rotateGraphic||this.handleGraphics.indexOf(e)>-1)&&t.viewEvent.stopPropagation()},e.prototype._onGraphicMoveStartCallback=function(t){var e=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),this.backgroundGraphic.symbol=this._dashedFillSymbol,this._startInfo=this._getStartInfo(e),e===this.rotateGraphic?this._emitRotateStartEvent(this._rotationAngle,e):this.handleGraphics.indexOf(e)>-1?(this._activeHandleGraphic=e,this._emitScaleStartEvent(this._xScale,this._yScale,e)):this._emitMoveStartEvent(t.dx,t.dy,e)},e.prototype._onGraphicMoveCallback=function(t){var e=t.graphic;if(this._startInfo)if(this.handleGraphics.indexOf(e)>-1)this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._rotationAngle,e);else{var i=t.dx,r=t.dy;this._totalDx+=i,this._totalDy+=r,this._moveGraphic(e,i,r),this._emitMoveEvent(i,r,e)}},e.prototype._onGraphicMoveStopCallback=function(t){var e=t.graphic;this._startInfo?(this._updateGraphics(),this._showGraphicsAfterUpdate(),this.backgroundGraphic.symbol=this._defaultFillSymbol,e===this.rotateGraphic?this._emitRotateStopEvent(this._rotationAngle,e):this.handleGraphics.indexOf(e)>-1?this._emitScaleStopEvent(this._xScale,this._yScale,e):this._emitMoveStopEvent(this._totalDx,this._totalDy,e),this._resetGraphicStateVars()):this.refresh()},e.prototype._onGraphicPointerOverCallback=function(t){var e,i=this.view.rotation,r=t.index;switch(t.graphic===this.rotateGraphic&&(this.rotateGraphic.symbol=this._rotateGraphicHoverSymbol),r<8&&(i>=0&&i<45?r%=8:r=i>=45&&i<90?(r+1)%8:i>=90&&i<135?(r+2)%8:i>=135&&i<180?(r+3)%8:i>=180&&i<225?(r+4)%8:i>=225&&i<270?(r+5)%8:i>=270&&i<315?(r+6)%8:(r+7)%8),r){case 0:e="nwse-resize";break;case 1:e="ns-resize";break;case 2:e="nesw-resize";break;case 3:e="ew-resize";break;case 4:e="nwse-resize";break;case 5:e="ns-resize";break;case 6:e="nesw-resize";break;case 7:e="ew-resize";break;default:e="pointer"}this.view.cursor=e},e.prototype._onGraphicPointerOutCallback=function(t){t.graphic===this.rotateGraphic&&(this.rotateGraphic.symbol=this._rotateGraphicSymbol),this.view.cursor="default"},e.prototype._scaleGraphic=function(t){var e=this._startInfo,i=this.preserveAspectRatio,r=this.view,o=e.centerX,s=e.centerY,h=e.startX,n=e.startY,c=r.state,p=c.resolution,l=c.transform,u=this.handleGraphics.indexOf(t);1!==u&&5!==u||this._updateX(t,o),3!==u&&7!==u||this._updateY(t,s);var y=t.geometry,v=y.x,d=y.y,_=l[0]*v+l[2]*d+l[4],g=l[1]*v+l[3]*d+l[5],f=e.graphicInfos.map((function(t){return t.geometry}));if(i){this._xScale=this._yScale=G.getScaleRatio(l[0]*o+l[2]*s+l[4],l[1]*o+l[3]*s+l[5],l[0]*h+l[2]*n+l[4],l[1]*h+l[3]*n+l[5],_,g);for(var m=0,b=f;m<b.length;m++){var S=b[m],w=f.indexOf(S);this.graphics[w].geometry=G.scale(S,this._xScale,this._yScale,[o,s])}this._updateBackgroundGraphic()}else{var k=e.width,x=e.height,M=v-h,R=n-d;if(1===u||5===u?M=0:3!==u&&7!==u||(R=0),0===M&&0===R)return;var I=x+(n<s?R:-1*R),E=o+M/2,O=s+R/2;this._xScale=(k+(h>o?M:-1*M))/k||1,this._yScale=I/x||1,1===u||5===u?this._xScale=1:3!==u&&7!==u||(this._yScale=1);var C=(E-o)/p,B=(O-s)/p,P=G.scale(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=G.cloneMove(P,C,B,r,!0);for(var A=this._getGraphicInfo(this.backgroundGraphic),L=A.centerX,Y=A.centerY,N=(L-o)/p,z=-1*(Y-s)/p,X=0,T=f;X<T.length;X++){var F=f.indexOf(S=T[X]),H=G.scale(S,this._xScale,this._yScale,[o,s]);this.graphics[F].geometry=G.cloneMove(H,N,z,r,!0)}this.centerGraphic.geometry=new a.Point(L,Y,r.spatialReference)}},e.prototype._rotateGraphic=function(t){var e=this._startInfo,i=e.centerX,r=e.centerY,o=e.startX,s=e.startY,h=e.box,n=e.rotate,c=t.geometry,p=c.x,u=c.y,y=new a.Point(i,r,this.view.spatialReference);this._rotationAngle=G.getRotationAngle(i,r,o,s,p,u);for(var v=this._startInfo.graphicInfos.map((function(t){return t.geometry})),d=0,_=v;d<_.length;d++){var g=_[d],f=v.indexOf(g),m=l.rotate(g,this._rotationAngle,y);this.graphics[f].geometry=m}this.backgroundGraphic.geometry=l.rotate(h,this._rotationAngle,y),this.rotateGraphic.geometry=l.rotate(n,this._rotationAngle,y)},e.prototype._moveGraphic=function(t,e,i){if(this.graphics.indexOf(t)>-1){var r=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=G.cloneMove(r,e,i,this.view);for(var a=0,o=this.graphics;a<o.length;a++)(n=o[a])!==t&&(n.geometry=G.cloneMove(n.geometry,e,i,this.view))}else t===this.centerGraphic&&(this.backgroundGraphic.geometry=G.cloneMove(r=this.backgroundGraphic.geometry,e,i,this.view));if(t===this.backgroundGraphic||t===this.centerGraphic)for(var s=0,h=this.graphics;s<h.length;s++){var n;(n=h[s]).geometry=G.cloneMove(n.geometry,e,i,this.view)}},e.prototype._setupGraphics=function(){this._set("centerGraphic",new o(null,this._centerGraphicSymbol)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new o(null,this._defaultFillSymbol)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new o(null,this._rotateLineGraphicSymbol),this._set("rotateGraphic",new o(null,this._rotateGraphicSymbol)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(var t=0;t<8;t++)this.handleGraphics.push(new o(null,this._defaultGraphicSymbol));this.enableScaling&&this.layer.addMany(this.handleGraphics)},e.prototype._updateGraphics=function(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()},e.prototype._hideGraphicsBeforeUpdate=function(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((function(t){return t.visible=!1}))},e.prototype._showGraphicsAfterUpdate=function(){this.enableRotation&&(this._rotateLineGraphic.visible=!0,this.rotateGraphic.visible=!0),this.showCenterGraphic&&(this.centerGraphic.visible=!0),this.enableScaling&&this.handleGraphics.forEach((function(t){return t.visible=!0}))},e.prototype._updateHandleGraphics=function(){var t=this,e=this._getCoordinates(!0);this.handleGraphics.forEach((function(i,r){var a=e[r];t._updateXY(i,a[0],a[1])}))},e.prototype._updateBackgroundGraphic=function(){var t=this._getCoordinates();this.backgroundGraphic.geometry=new a.Polygon({rings:t,spatialReference:this.view.spatialReference})},e.prototype._updateCenterGraphic=function(){var t=this._getBoxBounds(u.create());this.centerGraphic.geometry=new a.Point((t[2]+t[0])/2,(t[3]+t[1])/2,this.view.spatialReference)},e.prototype._updateRotateGraphic=function(){if(this.handleGraphics.length){var t=this.handleGraphics[1].geometry;this.rotateGraphic.geometry=new a.Point(t.x,t.y+this.view.state.resolution*this._rotateGraphicOffset,this.view.spatialReference)}},e.prototype._updateRotateLineGraphic=function(){if(this.handleGraphics.length&&this.rotateGraphic&&this.rotateGraphic.geometry){var t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new a.Polyline({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}},e.prototype._updateXY=function(t,e,i){t.geometry=new a.Point(e,i,this.view.spatialReference)},e.prototype._updateX=function(t,e){t.geometry=new a.Point(e,t.geometry.y,this.view.spatialReference)},e.prototype._updateY=function(t,e){t.geometry=new a.Point(t.geometry.x,e,this.view.spatialReference)},e.prototype._hasExtentGraphic=function(){return this.graphics.some((function(t){return t&&n.isSome(t.geometry)&&"extent"===t.geometry.type}))},e.prototype._getBoxBounds=function(t){var e=this.graphics.map((function(t){return t.geometry}));return this._getBounds(t,e)},e.prototype._getCoordinates=function(t){var e=this._getBoxBounds(u.create()),i=e[0],r=e[1],a=e[2],o=e[3];if(t){var s=(i+a)/2,h=(o+r)/2;return[[i,o],[s,o],[a,o],[a,h],[a,r],[s,r],[i,r],[i,h]]}return[[i,o],[a,o],[a,r],[i,r]]},e.prototype._emitMoveStartEvent=function(t,e,i){var r=new b(this.graphics,i,t,e);this.emit("move-start",r),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(r)},e.prototype._emitMoveEvent=function(t,e,i){var r=new S(this.graphics,i,t,e);this.emit("move",r),this.callbacks.onMove&&this.callbacks.onMove(r)},e.prototype._emitMoveStopEvent=function(t,e,i){var r=new w(this.graphics,i,t,e);this.emit("move-stop",r),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(r)},e.prototype._emitRotateStartEvent=function(t,e){var i=new k(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)},e.prototype._emitRotateEvent=function(t,e){var i=new x(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)},e.prototype._emitRotateStopEvent=function(t,e){var i=new M(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)},e.prototype._emitScaleStartEvent=function(t,e,i){var r=new R(this.graphics,i,t,e);this.emit("scale-start",r),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(r)},e.prototype._emitScaleEvent=function(t,e,i){var r=new I(this.graphics,i,t,e);this.emit("scale",r),this.callbacks.onScale&&this.callbacks.onScale(r)},e.prototype._emitScaleStopEvent=function(t,e,i){var r=new E(this.graphics,i,t,e);this.emit("scale-stop",r),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(r)},r([p.property()],e.prototype,"_rotateLineGraphic",void 0),r([p.property({readOnly:!0})],e.prototype,"type",void 0),r([p.property()],e.prototype,"callbacks",void 0),r([p.property({readOnly:!0})],e.prototype,"centerGraphic",void 0),r([p.property({readOnly:!0})],e.prototype,"backgroundGraphic",void 0),r([p.property()],e.prototype,"enableMovement",void 0),r([p.property()],e.prototype,"enableRotation",void 0),r([p.property()],e.prototype,"enableScaling",void 0),r([p.property()],e.prototype,"graphics",void 0),r([p.property({readOnly:!0})],e.prototype,"handleGraphics",void 0),r([p.property()],e.prototype,"layer",void 0),r([p.property()],e.prototype,"preserveAspectRatio",void 0),r([p.property({readOnly:!0})],e.prototype,"rotateGraphic",void 0),r([p.property()],e.prototype,"showCenterGraphic",void 0),r([p.property({dependsOn:["view.ready","graphics.length","layer"],readOnly:!0})],e.prototype,"state",null),r([p.property()],e.prototype,"view",void 0),r([p.subclass("esri.views.draw.support.Box")],e)}(p.declared(s.EventedAccessor))}).apply(null,r))||(t.exports=a)}}]);