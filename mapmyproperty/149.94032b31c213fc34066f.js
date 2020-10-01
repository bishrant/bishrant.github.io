(function(){var e={"esri/views/draw/support/Reshape":"bMLY"},t=this||window,i=t.webpackJsonp=t.webpackJsonp||[];i.registerAbsMids?i.registerAbsMids(e):(i.absMidsWaiting=i.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{bMLY:function(e,t,i){var r,o;r=[i.dj.c(e.i),t,i("zOht"),i("TMur"),i("jZlN"),i("BcWh"),i("eIBl"),i("LxLY"),i("8MXS"),i("Vx27"),i("ZPQp"),i("NsXp"),i("tJCi"),i("i6zL"),i("K9Qa"),i("txZC")],void 0===(o=(function(e,t,i,r,o,n,s,a,h,p,c,l,d,v,y,u){var _=function(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-start"},f=function(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape"},m=function(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-stop"},g=function(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-start"},b=function(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move"},x=function(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-stop"},G=function(e){this.added=e,this.type="vertex-select"},w=function(e){this.removed=e,this.type="vertex-deselect"},S=function(e,t,i,r){this.added=e,this.graphic=t,this.oldGraphic=i,this.vertices=r,this.type="vertex-add"},M=function(e,t,i,r){this.removed=e,this.graphic=t,this.oldGraphic=i,this.vertices=r,this.type="vertex-remove"},k={removeVertex:["Backspace","Delete"]};return function(e){function t(t){var i=e.call(this,t)||this;return i._handles=new s,i._graphicAttributes={esriSketchTool:"box"},i._mover=null,i._viewHandles=new s,i._totalDx=0,i._totalDy=0,i.type="reshape",i.callbacks={onReshapeStart:function(){},onReshape:function(){},onReshapeStop:function(){},onMoveStart:function(){},onMove:function(){},onMoveStop:function(){}},i.graphic=null,i.handleGraphics=[],i.handleHoverSymbol=new l({style:"circle",size:8,color:[33,205,255],outline:{color:[0,12,255],width:1}}),i.handleSelectionSymbol=new l({style:"circle",size:8,color:[255,255,255],outline:{color:[0,12,255],width:1}}),i.handleSymbol=new l({style:"circle",size:6,color:[33,205,255],outline:{color:[0,12,255],width:1}}),i.layer=null,i.midpointGraphics=[],i.midpointSymbol=new l({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),i.enableMidpoints=!0,i.selectedHandles=[],i.view=null,i}return i.__extends(t,e),t.prototype.initialize=function(){var e=this;this._setup(),this._handles.add([h.whenOnce(this,"view.ready",(function(){var t=e.view;y.addUniqueLayer(t,e.layer),e._viewHandles.add([t.on("key-down",(function(t){return e._keyDownHandler(t)}),u.ViewEventPriorities.TOOL)])})),h.pausable(this,"graphic",(function(){return e.refresh()})),h.pausable(this,"layer",(function(t,i){i&&(e._clearSelection(),e._resetGraphics(i)),e.refresh()})),h.pausable(this,"enableMidpoints",(function(){e.refresh()}))])},t.prototype.destroy=function(){this._reset(),this._mover&&this._mover.destroy(),this._mover=null,this._handles.removeAll(),this._handles=null,this._viewHandles.removeAll(),this._viewHandles=null},Object.defineProperty(t.prototype,"state",{get:function(){var e=!!this.get("view.ready"),t=!(!this.get("graphic")||!this.get("layer"));return e&&t?"active":e?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.isUIGraphic=function(e){var t=[];return this.graphic&&t.push(this.graphic),t.concat(this.handleGraphics,this.midpointGraphics),t.length&&t.indexOf(e)>-1},t.prototype.refresh=function(){this._reset(),this._setup()},t.prototype.reset=function(){this.graphic=null},t.prototype.clearSelection=function(){this._clearSelection()},t.prototype.removeSelectedHandles=function(){this.selectedHandles.length&&this._removeVertex(this.selectedHandles)},t.prototype._setup=function(){this.graphic&&this.layer&&(this._setupGraphics(),this._setupMover())},t.prototype._reset=function(){this._clearSelection(),this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"},t.prototype._resetGraphicStateVars=function(){this._totalDx=0,this._totalDy=0},t.prototype._resetGraphics=function(e){var t=e||this.layer;t&&(t.removeMany(this.handleGraphics),t.removeMany(this.midpointGraphics)),this.handleGraphics.forEach((function(e){return e.destroy()})),this.midpointGraphics.forEach((function(e){return e.destroy()})),this._set("handleGraphics",[]),this._set("midpointGraphics",[]),this._set("selectedHandles",[])},t.prototype._setupGraphics=function(){var e=a.unwrap(this.graphic.geometry),t=c.geometryToCoordinates(e.clone());if("polygon"===e.type)for(var i=0,r=t;i<r.length;i++){var o=r[i],n=o[o.length-1];o[0][0]===n[0]&&o[0][1]===n[1]&&o.length>2&&o.pop()}this._set("handleGraphics",this._createHandleGraphics(t)),this.enableMidpoints&&this._set("midpointGraphics",this._createMidpointGraphics(t)),this._saveRelatedIndices(this.handleGraphics),this.layer.addMany(this.midpointGraphics),this.layer.addMany(this.handleGraphics)},t.prototype._createHandleGraphics=function(e){var t=this._graphicAttributes,n=this.handleSymbol,s=this.view.spatialReference,a=[];return null==e||e.forEach((function(e,h){e.forEach((function(e,p){a.push(new o({geometry:new r.Point({x:e[0],y:e[1],spatialReference:s}),symbol:n,attributes:i.__assign(i.__assign({},t),{pathIndex:h,pointIndex:p})}))}))})),a},t.prototype._createMidpointGraphics=function(e){var t=this,n=this._graphicAttributes,s=this.midpointSymbol,h=this.view.spatialReference,p=[];return null==e||e.forEach((function(e,l){e.forEach((function(d,v){var y=d[0],u=d[1],_=e[v+1]?v+1:0;if("polygon"===a.get(t.graphic.geometry,"type")||0!==_){var f=e[_],m=c.getMidpoint([y,u],[f[0],f[1]]);p.push(new o({geometry:new r.Point({x:m[0],y:m[1],spatialReference:h}),symbol:s,attributes:i.__assign(i.__assign({},n),{pathIndex:l,pointIndexStart:v,pointIndexEnd:_})}))}}))})),p},t.prototype._saveRelatedIndices=function(e){if(e)for(var t=e.map((function(e){var t=e.geometry;return{x:t.x,y:t.y}})),i=0;i<t.length;i++){for(var r=[],o=0;o<t.length;o++)if(i!==o){var n=t[i],s=t[o];n.x===s.x&&n.y===s.y&&r.push(o)}e[i].attributes.relatedGraphicIndices=r}},t.prototype._setupMover=function(){var e=this;this._mover=new v({enableMoveAllGraphics:!1,graphics:[].concat(this.handleGraphics,this.graphic,this.midpointGraphics),view:this.view,callbacks:{onGraphicClick:function(t){return e._onGraphicClickCallback(t)},onGraphicMoveStart:function(t){return e._onGraphicMoveStartCallback(t)},onGraphicMove:function(t){return e._onGraphicMoveCallback(t)},onGraphicMoveStop:function(t){return e._onGraphicMoveStopCallback(t)},onGraphicPointerOver:function(t){return e._onGraphicPointerOverCallback(t)},onGraphicPointerOut:function(t){return e._onGraphicPointerOutCallback(t)}}})},t.prototype._onGraphicClickCallback=function(e){var t=e.graphic;if(t!==this.graphic)if(this.midpointGraphics.indexOf(t)>-1){if(e.viewEvent.stopPropagation(),2===e.viewEvent.button)return;var i=this.graphic.clone(),r=this._createHandleFromMidpoint(t);this.refresh(),this._emitVertexAddEvent([t],i,r)}else this.handleGraphics.indexOf(t)>-1&&(e.viewEvent.stopPropagation(),2===e.viewEvent.button?this._removeVertex(t):(e.viewEvent.native.shiftKey||this._clearSelection(),-1===this.selectedHandles.indexOf(t)?this._addToSelection(t):this._removeFromSelection(t,!0)));else this.clearSelection()},t.prototype._onGraphicMoveStartCallback=function(e){var t=e.graphic;if(this._resetGraphicStateVars(),t===this.graphic){var i=e.dx,r=e.dy;return this.handleGraphics.forEach((function(e){return e.visible=!1})),this.midpointGraphics.forEach((function(e){return e.visible=!1})),this._clearSelection(),void this._emitMoveStartEvent(i,r)}if(this.midpointGraphics.indexOf(t)>-1){this._clearSelection();var o=this.graphic.clone(),n=this._createHandleFromMidpoint(t);this._emitVertexAddEvent([t],o,n),this._addToSelection(t)}else-1===this.selectedHandles.indexOf(t)&&(this._clearSelection(),this._addToSelection(t));this._emitReshapeStartEvent(t)},t.prototype._onGraphicMoveCallback=function(e){var t=e.graphic,i=e.dx,r=e.dy;this._totalDx+=i,this._totalDy+=r,t===this.graphic?this._emitMoveEvent(i,r):(this._syncGeometryAfterHandleMove(t,i,r),this._emitReshapeEvent(t))},t.prototype._onGraphicMoveStopCallback=function(e){var t=e.graphic,i=e.dx,r=e.dy;if(this._totalDx+=i,this._totalDy+=r,t===this.graphic){for(var o=0,n=[].concat(this.handleGraphics,this.midpointGraphics);o<n.length;o++)n[o].visible=!0;this._syncGraphicsWithGeometry(),this._emitMoveStopEvent()}else this._syncGeometryAfterHandleMove(t,i,r),this.midpointGraphics.indexOf(t)>-1&&this.refresh(),this._emitReshapeStopEvent(t);this._resetGraphicStateVars()},t.prototype._syncGraphicsWithGeometry=function(){var e=this.graphic.geometry,t="polyline"===e.type?e.paths:e.rings;this._updateHandleGraphicLocations(t),this._updateMidpointGraphicLocations(t)},t.prototype._updateHandleGraphicLocations=function(e){for(var t=0,i=this.handleGraphics;t<i.length;t++){var o=i[t],n=o.attributes,s=e[n.pathIndex][n.pointIndex];o.set("geometry",new r.Point(s[0],s[1],this.view.spatialReference))}},t.prototype._updateMidpointGraphicLocations=function(e){for(var t=0,i=this.midpointGraphics;t<i.length;t++){var o=i[t],n=o.attributes,s=n.pathIndex,a=e[s][n.pointIndexStart],h=e[s][n.pointIndexEnd],p=c.getMidpoint([a[0],a[1]],[h[0],h[1]]);o.geometry=new r.Point({x:p[0],y:p[1],spatialReference:this.view.spatialReference})}},t.prototype._syncGeometryAfterHandleMove=function(e,t,i){var r=a.unwrap(this.graphic.geometry).clone(),o="polyline"===r.type?r.paths:r.rings,n=e.attributes,s=n.pathIndex,h=n.pointIndex,p=e.geometry,c=p.x,l=p.y,v=o[s].length-1;if(o[s][h]=[c,l],"polygon"===r.type&&(0===h?o[s][v]=[c,l]:h===v&&(o[s][0]=[c,l])),this.handleGraphics.indexOf(e)>-1){for(var y=0,u=e.attributes.relatedGraphicIndices;y<u.length;y++){var _=u[y],f=(I=this.handleGraphics[_]).attributes;o[f.pathIndex][f.pointIndex]=[c,l],I.geometry=e.geometry}for(var m=0,g=this.selectedHandles;m<g.length;m++){var b=g[m];if(b!==e){var x=b.attributes,G=x.pathIndex,w=x.pointIndex,S=x.relatedGraphicIndices,M=d.cloneMove(b.geometry,t,i,this.view),k=o[G].length-1;o[G][w]=[M.x,M.y],b.geometry=M,"polygon"===r.type&&(0===w?o[G][k]=[M.x,M.y]:w===k&&(o[G][0]=[M.x,M.y]));for(var H=0,E=S;H<E.length;H++){var I,O=(I=this.handleGraphics[_=E[H]]).attributes;o[O.pathIndex][O.pointIndex]=[M.x,M.y],I.geometry=M}}}this._updateMidpointGraphicLocations(o)}this.graphic.geometry=r},t.prototype._onGraphicPointerOverCallback=function(e){var t=e.graphic;this.handleGraphics.indexOf(t)>-1&&-1===this.selectedHandles.indexOf(t)&&(t.symbol=this.handleHoverSymbol),this.view.cursor="pointer"},t.prototype._onGraphicPointerOutCallback=function(e){var t=e.graphic;this.handleGraphics.indexOf(t)>-1&&-1===this.selectedHandles.indexOf(t)&&(t.symbol=this.handleSymbol),this.view.cursor="default"},t.prototype._createHandleFromMidpoint=function(e){var t=this._graphicAttributes,r=[],o=a.unwrap(this.graphic.geometry).clone(),n=e.attributes,s=n.pathIndex,h=n.pointIndexEnd,p=e.geometry,c=0===h?n.pointIndexStart+1:h,l="polyline"===o.type?o.paths:o.rings;return l[s].splice(c,0,[p.x,p.y]),e.attributes=i.__assign(i.__assign({},t),{pathIndex:s,pointIndex:c,relatedGraphicIndices:[]}),r.push({coordinates:l[s][c],componentIndex:s,vertexIndex:c}),this.graphic.geometry=o,r},t.prototype._removeHandles=function(e){var t=a.unwrap(this.graphic.geometry).clone(),i="polygon"===t.type?t.rings:t.paths,r=[];e instanceof o&&(e=[e]);for(var n=0,s=e;n<s.length;n++)for(var h=s[n].geometry,p=h.x,c=h.y,l=0;l<i.length;l++)for(var d=i[l],v=0;v<d.length;v++){var y=d[v];p===y[0]&&c===y[1]&&(r.push({coordinates:i[l][v],componentIndex:l,vertexIndex:v}),i[l].splice(Number(v),1))}if("polygon"===t.type)for(var u=0,_=i;u<_.length;u++){var f=_[u],m=f[0],g=(p=m[0],c=m[1],f[f.length-1]),b=g[0],x=g[1];(1===f.length||f.length<3&&p===b&&c===x)&&i.splice(i.indexOf(f),1),f.length>2&&(p!==b||c!==x)&&f.push(f[0])}else for(var G=0,w=i;G<w.length;G++){var S=w[G];1===S.length&&i.splice(i.indexOf(S),1)}return this.graphic.geometry=t,r},t.prototype._addToSelection=function(e){e instanceof o&&(e=[e]);for(var t=0,i=e;t<i.length;t++)i[t].symbol=this.handleSelectionSymbol;this._set("selectedHandles",this.selectedHandles.concat(e)),this._emitSelectEvent(e)},t.prototype._removeFromSelection=function(e,t){var i=t?this.handleHoverSymbol:this.handleSymbol;e instanceof o&&(e=[e]);for(var r=0,n=e;r<n.length;r++){var s=n[r];this.selectedHandles.splice(this.selectedHandles.indexOf(s),1),this._set("selectedHandles",this.selectedHandles),s.symbol=i}this._emitDeselectEvent(e)},t.prototype._clearSelection=function(){if(this.selectedHandles.length){for(var e=this.selectedHandles,t=0,i=this.selectedHandles;t<i.length;t++){var r=i[t];r&&(r.symbol=this.handleSymbol)}this._set("selectedHandles",[]),this._emitDeselectEvent(e)}},t.prototype._keyDownHandler=function(e){k.removeVertex.indexOf(e.key)>-1&&!e.repeat&&this.selectedHandles.length&&this._removeVertex(this.selectedHandles)},t.prototype._removeVertex=function(e){if(!("polygon"===this.graphic.geometry.type&&this.handleGraphics.length<4||this.handleGraphics.length<3)){var t=this.graphic.clone();e instanceof o&&(e=[e]);var i=this._removeHandles(e);this.refresh(),this._emitVertexRemoveEvent(e,t,i)}},t.prototype._emitMoveStartEvent=function(e,t){var i=new g(this.graphic,e,t);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)},t.prototype._emitMoveEvent=function(e,t){var i=new b(this.graphic,e,t);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)},t.prototype._emitMoveStopEvent=function(){var e=new x(this.graphic,this._totalDx,this._totalDy);this.emit("move-stop",e),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(e)},t.prototype._emitReshapeStartEvent=function(e){var t=new _(this.graphic,e,this.selectedHandles);this.emit("reshape-start",t),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(t)},t.prototype._emitReshapeEvent=function(e){var t=new f(this.graphic,e,this.selectedHandles);this.emit("reshape",t),this.callbacks.onReshape&&this.callbacks.onReshape(t)},t.prototype._emitReshapeStopEvent=function(e){var t=new m(this.graphic,e,this.selectedHandles);this.emit("reshape-stop",t),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(t)},t.prototype._emitSelectEvent=function(e){var t=new G(e);this.emit("select",t),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(t)},t.prototype._emitDeselectEvent=function(e){var t=new w(e);this.emit("deselect",t),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(t)},t.prototype._emitVertexAddEvent=function(e,t,i){var r=new S(e,this.graphic,t,i);this.emit("vertex-add",r),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(r)},t.prototype._emitVertexRemoveEvent=function(e,t,i){var r=new M(e,this.graphic,t,i);this.emit("vertex-remove",r),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(r)},i.__decorate([p.property({readOnly:!0})],t.prototype,"type",void 0),i.__decorate([p.property()],t.prototype,"callbacks",void 0),i.__decorate([p.property()],t.prototype,"graphic",void 0),i.__decorate([p.property({readOnly:!0})],t.prototype,"handleGraphics",void 0),i.__decorate([p.property()],t.prototype,"handleHoverSymbol",void 0),i.__decorate([p.property()],t.prototype,"handleSelectionSymbol",void 0),i.__decorate([p.property()],t.prototype,"handleSymbol",void 0),i.__decorate([p.property()],t.prototype,"layer",void 0),i.__decorate([p.property({readOnly:!0})],t.prototype,"midpointGraphics",void 0),i.__decorate([p.property()],t.prototype,"midpointSymbol",void 0),i.__decorate([p.property()],t.prototype,"enableMidpoints",void 0),i.__decorate([p.property({readOnly:!0})],t.prototype,"selectedHandles",void 0),i.__decorate([p.property({dependsOn:["view.ready","graphic","layer"],readOnly:!0})],t.prototype,"state",null),i.__decorate([p.property()],t.prototype,"view",void 0),i.__decorate([p.subclass("esri.views.draw.support.Reshape")],t)}(n.EventedAccessor)}).apply(null,r))||(e.exports=o)}}]);