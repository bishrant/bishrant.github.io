define(["require","exports","tslib","../../../../../core/has","../../../../../core/accessorSupport/decorators","../../../../../geometry/support/aaBoundingRect","../../../engine/webgl/WGLTile","../support/rendererUtils","./BaseTileRenderer","./support/visualVariablesUtils","./support/WGLFeatureView"],(function(e,t,i,r,a,s,o,n,l,u,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.install=function(e){var t=new p.WGLFeatureView(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)},t.prototype.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.destroy()},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},t.prototype.onConfigUpdate=function(e){var t=null;if("visualVariables"in e){var i=(n.simplifyVVRenderer(e).visualVariables||[]).map((function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=u.convertVisualVariables(i)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()},t.prototype.onTileError=function(e){var t=this.tiles.get(e.tileKey);r("esri-2d-debug")&&console.debug(e.tileKey,e.error),t&&this.featuresView.onTileError(t)},t.prototype.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()},t.prototype.lockGPUUploads=function(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((function(e){return e.lockUploads()}))},t.prototype.unlockGPUUploads=function(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((function(e){return e.unlockUploads()}))},t.prototype.getMaterialItems=function(e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){return[2,this.featuresView.getMaterialItems(e)]}))}))},t.prototype.invalidateLabels=function(){this.featuresView.hasLabels&&(this.tiles.forEach((function(e){return e.isDirty=!0})),this.layerView.view.labelManager.requestUpdate())},t.prototype.createTile=function(e){var t=this.tileInfoView.getTileBounds(s.create(),e),i=new o.WGLTile(e,t);return this.featuresView.hasLabels&&this.layerView.view.labelManager.addTile(this.layerView,i),i},t.prototype.disposeTile=function(e){this.featuresView.removeChild(e),this.featuresView.hasLabels&&this.layerView.view.labelManager.removeTile(this.layerView,e.key.id),e.destroy(),this.layerView.view.labelManager.requestUpdate()},i.__decorate([a.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],t)}(l.default);t.default=f}));