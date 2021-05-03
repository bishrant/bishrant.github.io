!function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{mxcV:function(e,i,s){"use strict";s.r(i),s.d(i,"Bloom",(function(){return h})),s("wSAH"),s("OKTS"),s("n4uK"),s("GVa1");var r=s("0meK"),o=s("gjrC"),n=[1,0],a=[0,1],u=[1,.8,.6,.4,.2],l=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],h=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(5),this._nMips=5,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:{a_position:0}},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:{a_position:0}},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}var i,s,h;return i=e,(s=[{key:"dispose",value:function(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(var t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null}}},{key:"draw",value:function(t,e,i){var s=e.width,r=e.height,h=t.context,p=t.painter.materialManager,d=h.gl,m=this._programDesc,c=i.strength,_=i.radius,f=i.threshold;this._quad||(this._quad=new o.a(h,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t,s,r),h.setStencilTestEnabled(!1),h.setBlendingEnabled(!0),h.setBlendFunction(1,771),h.setStencilWriteMask(0);var g=this._quad;g.bind(),h.bindFramebuffer(this._intensityFBO);var b=p.getProgram(t,m.luminosityHighPass);h.bindProgram(b),h.bindTexture(e.colorTexture,0),b.setUniform1i("u_texture",0),b.setUniform3fv("u_defaultColor",[0,0,0]),b.setUniform1f("u_defaultOpacity",0),b.setUniform1f("u_luminosityThreshold",f),b.setUniform1f("u_smoothWidth",.01);var F=[Math.round(s/2),Math.round(r/2)];h.setViewport(0,0,F[0],F[1]),h.setClearColor(0,0,0,0),h.clear(d.COLOR_BUFFER_BIT),g.draw(),h.setBlendingEnabled(!1);for(var B=this._intensityFBO.colorTexture,v=0;v<this._nMips;v++){var T=p.getProgram(t,m.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[v]}]);h.bindProgram(T),h.bindTexture(B,v+1),T.setUniform1i("u_colorTexture",v+1),T.setUniform2fv("u_texSize",F),T.setUniform2fv("u_direction",n),h.setViewport(0,0,F[0],F[1]);var O=this._mipsFBOs[v];h.bindFramebuffer(O.horizontal),g.draw(),B=O.horizontal.colorTexture,h.bindFramebuffer(O.vertical),h.bindTexture(B,v+1),T.setUniform2fv("u_direction",a),g.draw(),B=O.vertical.colorTexture,F[0]=Math.round(F[0]/2),F[1]=Math.round(F[1]/2)}h.setViewport(0,0,s,r);var w=p.getProgram(t,m.composite,[{name:"nummips",value:5}]);h.bindFramebuffer(this._compositeFBO),h.bindProgram(w),w.setUniform1f("u_bloomStrength",c),w.setUniform1f("u_bloomRadius",_),w.setUniform1fv("u_bloomFactors",u),w.setUniform3fv("u_bloomTintColors",l),h.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),w.setUniform1i("u_blurTexture1",1),h.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),w.setUniform1i("u_blurTexture2",2),h.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),w.setUniform1i("u_blurTexture3",3),h.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),w.setUniform1i("u_blurTexture4",4),h.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),w.setUniform1i("u_blurTexture5",5),g.draw(),h.bindFramebuffer(e),h.setBlendingEnabled(!0);var x=p.getProgram(t,m.blit);h.bindProgram(x),h.bindTexture(this._compositeFBO.colorTexture,6),x.setUniform1i("u_texture",6),h.setBlendFunction(1,1),g.draw(),g.unbind(),h.setBlendFunction(1,771),h.setStencilTestEnabled(!0)}},{key:"_createOrResizeResources",value:function(t,e,i){var s=t.context;if(!this._compositeFBO||this._size[0]!==e||this._size[1]!==i){this._size[0]=e,this._size[1]=i;var o=[Math.round(e/2),Math.round(i/2)];this._compositeFBO?this._compositeFBO.resize(e,i):this._compositeFBO=new r.a(s,{colorTarget:0,depthStencilTarget:0,width:e,height:i}),this._intensityFBO?this._intensityFBO.resize(o[0],o[1]):this._intensityFBO=new r.a(s,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]});for(var n=0;n<this._nMips;n++)this._mipsFBOs[n]?(this._mipsFBOs[n].horizontal.resize(o[0],o[1]),this._mipsFBOs[n].vertical.resize(o[0],o[1])):this._mipsFBOs[n]={horizontal:new r.a(s,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),vertical:new r.a(s,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]})},o[0]=Math.round(o[0]/2),o[1]=Math.round(o[1]/2)}}}])&&t(i.prototype,s),h&&t(i,h),e}()}}])}();