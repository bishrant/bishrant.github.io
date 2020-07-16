(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/views/draw/support/Reshape":"bMLY"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{bMLY:function(e,t,i){var o,r;o=[i.dj.c(e.i),t,i("9opi"),i("qKT0"),i("TMur"),i("jZlN"),i("BcWh"),i("eIBl"),i("LxLY"),i("8MXS"),i("Vx27"),i("ZPQp"),i("NsXp"),i("tJCi"),i("i6zL"),i("K9Qa"),i("txZC")],void 0===(r=(function(e,t,i,o,r,n,s,a,h,p,c,l,d,v,y,u,f){var m=function(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-start"},g=function(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape"},_=function(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-stop"},x=function(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-start"},b=function(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move"},G=function(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-stop"},S=function(e){this.added=e,this.type="vertex-select"},w=function(e){this.removed=e,this.type="vertex-deselect"},M=function(e,t,i,o){this.added=e,this.graphic=t,this.oldGraphic=i,this.vertices=o,this.type="vertex-add"},H=function(e,t,i,o){this.removed=e,this.graphic=t,this.oldGraphic=i,this.vertices=o,this.type="vertex-remove"},k={removeVertex:["Backspace","Delete"]};return function(e){function t(t){var i=e.call(this,t)||this;return i._handles=new a,i._mover=null,i._viewHandles=new a,i._totalDx=0,i._totalDy=0,i.type="reshape",i.callbacks={onReshapeStart:function(){},onReshape:function(){},onReshapeStop:function(){},onMoveStart:function(){},onMove:function(){},onMoveStop:function(){}},i.graphic=null,i.handleGraphics=[],i.handleHoverSymbol=new d({style:"circle",size:8,color:[33,205,255],outline:{color:[0,12,255],width:1}}),i.handleSelectionSymbol=new d({style:"circle",size:8,color:[255,255,255],outline:{color:[0,12,255],width:1}}),i.handleSymbol=new d({style:"circle",size:6,color:[33,205,255],outline:{color:[0,12,255],width:1}}),i.layer=null,i.midpointGraphics=[],i.midpointSymbol=new d({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),i.enableMidpoints=!0,i.selectedHandles=[],i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this._setup(),this._handles.add([p.whenOnce(this,"view.ready",(function(){var t=e.view;u.addUniqueLayer(t,e.layer),e._viewHandles.add([t.on("key-down",(function(t){return e._keyDownHandler(t)}),f.ViewEventPriorities.TOOL)])})),p.pausable(this,"graphic",(function(){return e.refresh()})),p.pausable(this,"layer",(function(t,i){i&&(e._clearSelection(),e._resetGraphics(i)),e.refresh()})),p.pausable(this,"enableMidpoints",(function(){e.refresh()}))])},t.prototype.destroy=function(){this._reset(),this._mover&&this._mover.destroy(),this._mover=null,this._handles.removeAll(),this._handles=null,this._viewHandles.removeAll(),this._viewHandles=null},Object.defineProperty(t.prototype,"state",{get:function(){var e=!!this.get("view.ready"),t=!(!this.get("graphic")||!this.get("layer"));return e&&t?"active":e?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.isUIGraphic=function(e){var t=[];return this.graphic&&t.push(this.graphic),t.concat(this.handleGraphics,this.midpointGraphics),t.length&&t.indexOf(e)>-1},t.prototype.refresh=function(){this._reset(),this._setup()},t.prototype.reset=function(){this.graphic=null},t.prototype.clearSelection=function(){this._clearSelection()},t.prototype.removeSelectedHandles=function(){this.selectedHandles.length&&this._removeVertex(this.selectedHandles)},t.prototype._setup=function(){this.graphic&&this.layer&&(this._setupGraphics(),this._setupMover())},t.prototype._reset=function(){this._clearSelection(),this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"},t.prototype._resetGraphicStateVars=function(){this._totalDx=0,this._totalDy=0},t.prototype._resetGraphics=function(e){var t=e||this.layer;t&&(t.removeMany(this.handleGraphics),t.removeMany(this.midpointGraphics)),this.handleGraphics.forEach((function(e){return e.destroy()})),this.midpointGraphics.forEach((function(e){return e.destroy()})),this._set("handleGraphics",[]),this._set("midpointGraphics",[]),this._set("selectedHandles",[])},t.prototype._setupGraphics=function(){var e=h.expect(this.graphic.geometry),t=l.geometryToCoordinates(e.clone());if("polygon"===e.type)for(var i=0,o=t;i<o.length;i++){var r=o[i],n=r[r.length-1];r[0][0]===n[0]&&r[0][1]===n[1]&&r.length>2&&r.pop()}this._set("handleGraphics",this._createHandleGraphics(t)),this.enableMidpoints&&this._set("midpointGraphics",this._createMidpointGraphics(t)),this._saveRelatedIndices(this.handleGraphics),this.layer.addMany(this.midpointGraphics),this.layer.addMany(this.handleGraphics)},t.prototype._createHandleGraphics=function(e){for(var t=[],i=0,o=e;i<o.length;i++)for(var s=o[i],a=e.indexOf(s),h=0,p=s;h<p.length;h++){var c=p[h],l=s.indexOf(c);t.push(new n({geometry:new r.Point({x:c[0],y:c[1],spatialReference:this.view.spatialReference}),symbol:this.handleSymbol,attributes:{pathIndex:a,pointIndex:l}}))}return t},t.prototype._createMidpointGraphics=function(e){for(var t=[],i=0,o=e;i<o.length;i++)for(var s=o[i],a=e.indexOf(s),p=0,c=s;p<c.length;p++){var d=c[p],v=s.indexOf(d),y=d[0],u=d[1],f=s[v+1]?v+1:0;if("polygon"===h.get(this.graphic.geometry,"type")||0!==f){var m=s[f],g=l.getMidpoint([y,u],[m[0],m[1]]);t.push(new n({geometry:new r.Point({x:g[0],y:g[1],spatialReference:this.view.spatialReference}),symbol:this.midpointSymbol,attributes:{pathIndex:a,pointIndexStart:v,pointIndexEnd:f}}))}}return t},t.prototype._saveRelatedIndices=function(e){for(var t=0,i=e;t<i.length;t++){for(var o=i[t],r=e.indexOf(o),n=[],s=o.geometry,a=s.x,h=s.y,p=0,c=e;p<c.length;p++){var l=c[p],d=e.indexOf(l);if(r!==d){var v=l.geometry;a===v.x&&h===v.y&&n.push(d)}}o.attributes.relatedGraphicIndices=n}},t.prototype._setupMover=function(){var e=this;this._mover=new y({enableMoveAllGraphics:!1,graphics:[].concat(this.handleGraphics,this.graphic,this.midpointGraphics),view:this.view,callbacks:{onGraphicClick:function(t){return e._onGraphicClickCallback(t)},onGraphicMoveStart:function(t){return e._onGraphicMoveStartCallback(t)},onGraphicMove:function(t){return e._onGraphicMoveCallback(t)},onGraphicMoveStop:function(t){return e._onGraphicMoveStopCallback(t)},onGraphicPointerOver:function(t){return e._onGraphicPointerOverCallback(t)},onGraphicPointerOut:function(t){return e._onGraphicPointerOutCallback(t)}}})},t.prototype._onGraphicClickCallback=function(e){var t=e.graphic;if(t!==this.graphic)if(this.midpointGraphics.indexOf(t)>-1){if(e.viewEvent.stopPropagation(),2===e.viewEvent.button)return;var i=this.graphic.clone(),o=this._createHandleFromMidpoint(t);this.refresh(),this._emitVertexAddEvent([t],i,o)}else this.handleGraphics.indexOf(t)>-1&&(e.viewEvent.stopPropagation(),2===e.viewEvent.button?this._removeVertex(t):(e.viewEvent.native.shiftKey||this._clearSelection(),-1===this.selectedHandles.indexOf(t)?this._addToSelection(t):this._removeFromSelection(t,!0)));else this.clearSelection()},t.prototype._onGraphicMoveStartCallback=function(e){var t=e.graphic;if(this._resetGraphicStateVars(),t===this.graphic){var i=e.dx,o=e.dy;return this.handleGraphics.forEach((function(e){return e.visible=!1})),this.midpointGraphics.forEach((function(e){return e.visible=!1})),this._clearSelection(),void this._emitMoveStartEvent(i,o)}if(this.midpointGraphics.indexOf(t)>-1){this._clearSelection();var r=this.graphic.clone(),n=this._createHandleFromMidpoint(t);this._emitVertexAddEvent([t],r,n),this._addToSelection(t)}else-1===this.selectedHandles.indexOf(t)&&(this._clearSelection(),this._addToSelection(t));this._emitReshapeStartEvent(t)},t.prototype._onGraphicMoveCallback=function(e){var t=e.graphic,i=e.dx,o=e.dy;this._totalDx+=i,this._totalDy+=o,t===this.graphic?this._emitMoveEvent(i,o):(this._syncGeometryAfterHandleMove(t,i,o),this._emitReshapeEvent(t))},t.prototype._onGraphicMoveStopCallback=function(e){var t=e.graphic,i=e.dx,o=e.dy;if(this._totalDx+=i,this._totalDy+=o,t===this.graphic){for(var r=0,n=[].concat(this.handleGraphics,this.midpointGraphics);r<n.length;r++)n[r].visible=!0;this._syncGraphicsWithGeometry(),this._emitMoveStopEvent()}else this._syncGeometryAfterHandleMove(t,i,o),this.midpointGraphics.indexOf(t)>-1&&this.refresh(),this._emitReshapeStopEvent(t);this._resetGraphicStateVars()},t.prototype._syncGraphicsWithGeometry=function(){var e=this.graphic.geometry,t="polyline"===e.type?e.paths:e.rings;this._updateHandleGraphicLocations(t),this._updateMidpointGraphicLocations(t)},t.prototype._updateHandleGraphicLocations=function(e){for(var t=0,i=this.handleGraphics;t<i.length;t++){var o=i[t],n=o.attributes,s=e[n.pathIndex][n.pointIndex];o.set("geometry",new r.Point(s[0],s[1],this.view.spatialReference))}},t.prototype._updateMidpointGraphicLocations=function(e){for(var t=0,i=this.midpointGraphics;t<i.length;t++){var o=i[t],n=o.attributes,s=n.pathIndex,a=e[s][n.pointIndexStart],h=e[s][n.pointIndexEnd],p=l.getMidpoint([a[0],a[1]],[h[0],h[1]]);o.geometry=new r.Point({x:p[0],y:p[1],spatialReference:this.view.spatialReference})}},t.prototype._syncGeometryAfterHandleMove=function(e,t,i){var o=h.expect(this.graphic.geometry).clone(),r="polyline"===o.type?o.paths:o.rings,n=e.attributes,s=n.pathIndex,a=n.pointIndex,p=e.geometry,c=p.x,l=p.y,d=r[s].length-1;if(r[s][a]=[c,l],"polygon"===o.type&&(0===a?r[s][d]=[c,l]:a===d&&(r[s][0]=[c,l])),this.handleGraphics.indexOf(e)>-1){for(var y=0,u=e.attributes.relatedGraphicIndices;y<u.length;y++){var f=u[y],m=(E=this.handleGraphics[f]).attributes;r[m.pathIndex][m.pointIndex]=[c,l],E.geometry=e.geometry}for(var g=0,_=this.selectedHandles;g<_.length;g++){var x=_[g];if(x!==e){var b=x.attributes,G=b.pathIndex,S=b.pointIndex,w=b.relatedGraphicIndices,M=v.cloneMove(x.geometry,t,i,this.view),H=r[G].length-1;r[G][S]=[M.x,M.y],x.geometry=M,"polygon"===o.type&&(0===S?r[G][H]=[M.x,M.y]:S===H&&(r[G][0]=[M.x,M.y]));for(var k=0,O=w;k<O.length;k++){var E,I=(E=this.handleGraphics[f=O[k]]).attributes;r[I.pathIndex][I.pointIndex]=[M.x,M.y],E.geometry=M}}}this._updateMidpointGraphicLocations(r)}this.graphic.geometry=o},t.prototype._onGraphicPointerOverCallback=function(e){var t=e.graphic;this.handleGraphics.indexOf(t)>-1&&-1===this.selectedHandles.indexOf(t)&&(t.symbol=this.handleHoverSymbol),this.view.cursor="pointer"},t.prototype._onGraphicPointerOutCallback=function(e){var t=e.graphic;this.handleGraphics.indexOf(t)>-1&&-1===this.selectedHandles.indexOf(t)&&(t.symbol=this.handleSymbol),this.view.cursor="default"},t.prototype._createHandleFromMidpoint=function(e){var t=[],i=h.expect(this.graphic.geometry).clone(),o=e.attributes,r=o.pathIndex,n=o.pointIndexEnd,s=e.geometry,a=0===n?o.pointIndexStart+1:n,p="polyline"===i.type?i.paths:i.rings;return p[r].splice(a,0,[s.x,s.y]),e.attributes={pathIndex:r,pointIndex:a,relatedGraphicIndices:[]},t.push({coordinates:p[r][a],componentIndex:r,vertexIndex:a}),this.graphic.geometry=i,t},t.prototype._removeHandles=function(e){var t=h.expect(this.graphic.geometry).clone(),i="polygon"===t.type?t.rings:t.paths,o=[];e instanceof n&&(e=[e]);for(var r=0,s=e;r<s.length;r++)for(var a=s[r].geometry,p=a.x,c=a.y,l=0;l<i.length;l++)for(var d=i[l],v=0;v<d.length;v++){var y=d[v];p===y[0]&&c===y[1]&&(o.push({coordinates:i[l][v],componentIndex:l,vertexIndex:v}),i[l].splice(Number(v),1))}if("polygon"===t.type)for(var u=0,f=i;u<f.length;u++){var m=f[u],g=m[0],_=(p=g[0],c=g[1],m[m.length-1]),x=_[0],b=_[1];(1===m.length||m.length<3&&p===x&&c===b)&&i.splice(i.indexOf(m),1),m.length>2&&(p!==x||c!==b)&&m.push(m[0])}else for(var G=0,S=i;G<S.length;G++){var w=S[G];1===w.length&&i.splice(i.indexOf(w),1)}return this.graphic.geometry=t,o},t.prototype._addToSelection=function(e){e instanceof n&&(e=[e]);for(var t=0,i=e;t<i.length;t++)i[t].symbol=this.handleSelectionSymbol;this._set("selectedHandles",this.selectedHandles.concat(e)),this._emitSelectEvent(e)},t.prototype._removeFromSelection=function(e,t){var i=t?this.handleHoverSymbol:this.handleSymbol;e instanceof n&&(e=[e]);for(var o=0,r=e;o<r.length;o++){var s=r[o];this.selectedHandles.splice(this.selectedHandles.indexOf(s),1),this._set("selectedHandles",this.selectedHandles),s.symbol=i}this._emitDeselectEvent(e)},t.prototype._clearSelection=function(){if(this.selectedHandles.length){for(var e=this.selectedHandles,t=0,i=this.selectedHandles;t<i.length;t++){var o=i[t];o&&(o.symbol=this.handleSymbol)}this._set("selectedHandles",[]),this._emitDeselectEvent(e)}},t.prototype._keyDownHandler=function(e){k.removeVertex.indexOf(e.key)>-1&&!e.repeat&&this.selectedHandles.length&&this._removeVertex(this.selectedHandles)},t.prototype._removeVertex=function(e){if(!("polygon"===this.graphic.geometry.type&&this.handleGraphics.length<4||this.handleGraphics.length<3)){var t=this.graphic.clone();e instanceof n&&(e=[e]);var i=this._removeHandles(e);this.refresh(),this._emitVertexRemoveEvent(e,t,i)}},t.prototype._emitMoveStartEvent=function(e,t){var i=new x(this.graphic,e,t);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)},t.prototype._emitMoveEvent=function(e,t){var i=new b(this.graphic,e,t);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)},t.prototype._emitMoveStopEvent=function(){var e=new G(this.graphic,this._totalDx,this._totalDy);this.emit("move-stop",e),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(e)},t.prototype._emitReshapeStartEvent=function(e){var t=new m(this.graphic,e,this.selectedHandles);this.emit("reshape-start",t),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(t)},t.prototype._emitReshapeEvent=function(e){var t=new g(this.graphic,e,this.selectedHandles);this.emit("reshape",t),this.callbacks.onReshape&&this.callbacks.onReshape(t)},t.prototype._emitReshapeStopEvent=function(e){var t=new _(this.graphic,e,this.selectedHandles);this.emit("reshape-stop",t),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(t)},t.prototype._emitSelectEvent=function(e){var t=new S(e);this.emit("select",t),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(t)},t.prototype._emitDeselectEvent=function(e){var t=new w(e);this.emit("deselect",t),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(t)},t.prototype._emitVertexAddEvent=function(e,t,i){var o=new M(e,this.graphic,t,i);this.emit("vertex-add",o),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(o)},t.prototype._emitVertexRemoveEvent=function(e,t,i){var o=new H(e,this.graphic,t,i);this.emit("vertex-remove",o),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(o)},o([c.property({readOnly:!0})],t.prototype,"type",void 0),o([c.property()],t.prototype,"callbacks",void 0),o([c.property()],t.prototype,"graphic",void 0),o([c.property({readOnly:!0})],t.prototype,"handleGraphics",void 0),o([c.property()],t.prototype,"handleHoverSymbol",void 0),o([c.property()],t.prototype,"handleSelectionSymbol",void 0),o([c.property()],t.prototype,"handleSymbol",void 0),o([c.property()],t.prototype,"layer",void 0),o([c.property({readOnly:!0})],t.prototype,"midpointGraphics",void 0),o([c.property()],t.prototype,"midpointSymbol",void 0),o([c.property()],t.prototype,"enableMidpoints",void 0),o([c.property({readOnly:!0})],t.prototype,"selectedHandles",void 0),o([c.property({dependsOn:["view.ready","graphic","layer"],readOnly:!0})],t.prototype,"state",null),o([c.property()],t.prototype,"view",void 0),o([c.subclass("esri.views.draw.support.Reshape")],t)}(c.declared(s.EventedAccessor))}).apply(null,o))||(e.exports=r)}}]);