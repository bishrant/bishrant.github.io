(function(){var t={"esri/layers/support/RasterWorker":"OHht"},r=this||window,e=r.webpackJsonp=r.webpackJsonp||[];e.registerAbsMids?e.registerAbsMids(t):(e.absMidsWaiting=e.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{OHht:function(t,r,e){var o,i;o=[e.dj.c(t.i),r,e("zOht"),e("TMur"),e("qMld"),e("dXLH"),e("WSFd"),e("SAwq"),e("6PsE")],void 0===(i=(function(t,r,e,o,i,n,s,a,c){"use strict";return function(){function t(){}return t.prototype.decode=function(t){return e.__awaiter(this,void 0,void 0,(function(){var r;return e.__generator(this,(function(e){switch(e.label){case 0:return[4,s.decode(t.data,t.options)];case 1:return[2,(r=e.sent())&&r.toJSON()]}}))}))},t.prototype.symbolize=function(t){t.pixelBlock=n.fromJSON(t.pixelBlock),t.extent=t.extent?o.Extent.fromJSON(t.extent):null;var r=this.symbolizer.symbolize(t);return i.resolve(r&&r.toJSON())},t.prototype.updateSymbolizer=function(t){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(r){return this.symbolizer=c.fromJSON(t.symbolizerJSON),t.histograms&&this.symbolizer&&this.symbolizer.renderer&&"histograms"in this.symbolizer.renderer&&(this.symbolizer.renderer.histograms=t.histograms),[2]}))}))},t.prototype.stretch=function(t){var r=this.symbolizer.simpleStretch(n.fromJSON(t.srcPixelBlock),t.stretchParams);return i.resolve(r&&r.toJSON())},t.prototype.mosaicAndTransform=function(t){return e.__awaiter(this,void 0,void 0,(function(){var r,o,i;return e.__generator(this,(function(e){return r=t.srcPixelBlocks.map((function(t){return t?new n(t):null})),o=a.mosaic(r,t.srcMosaicSize),t.coefs?[2,(i=a.approximateTransform(o,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation))&&i.toJSON()]:[2,o&&o.toJSON()]}))}))},t}()}).apply(null,o))||(t.exports=i)}}]);