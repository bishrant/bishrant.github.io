(function(){var t={"arcgis-js-api/views/2d/engine/webgl/effects/post-processing/Bloom":"xiHi"},i=this||window,e=i.webpackJsonp=i.webpackJsonp||[];e.registerAbsMids?e.registerAbsMids(t):(e.absMidsWaiting=e.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{xiHi:function(t,i,e){var s,r;s=[e.dj.c(t.i),i,e("DJpR"),e("Nwkb")],void 0===(r=(function(t,i,e,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Bloom=void 0;var r=[1,0],o=[0,1],n=[1,.8,.6,.4,.2],a=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],u=function(){function t(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(5),this._nMips=5,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:{a_position:0}},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:{a_position:0}},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}return t.prototype.dispose=function(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(var t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null}},t.prototype.draw=function(t,i,e){var u=t.context,p=t.pixelRatio,l=t.state.size,h=t.painter.materialManager,d=u.gl,m=this._programDesc,c=Math.round(p*l[0]),_=Math.round(p*l[1]),f=e.strength,b=e.radius,g=e.threshold;this._quad||(this._quad=new s(u,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t),u.setStencilTestEnabled(!1),u.setBlendingEnabled(!0),u.setBlendFunction(1,771),u.setStencilWriteMask(0);var F=this._quad;F.bind(),u.bindFramebuffer(this._intensityFBO);var B=h.getProgram(t,m.luminosityHighPass);u.bindProgram(B),u.bindTexture(i.colorTexture,0),B.setUniform1i("u_texture",0),B.setUniform3fv("u_defaultColor",[0,0,0]),B.setUniform1f("u_defaultOpacity",0),B.setUniform1f("u_luminosityThreshold",g),B.setUniform1f("u_smoothWidth",.01);var O=[Math.round(c/2),Math.round(_/2)];u.setViewport(0,0,O[0],O[1]),u.setClearColor(0,0,0,0),u.clear(d.COLOR_BUFFER_BIT),F.draw(),u.setBlendingEnabled(!1);for(var v=this._intensityFBO.colorTexture,T=0;T<this._nMips;T++){var w=h.getProgram(t,m.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[T]}]);u.bindProgram(w),u.bindTexture(v,T+1),w.setUniform1i("u_colorTexture",T+1),w.setUniform2fv("u_texSize",O),w.setUniform2fv("u_direction",r),u.setViewport(0,0,O[0],O[1]);var x=this._mipsFBOs[T];u.bindFramebuffer(x.horizontal),F.draw(),v=x.horizontal.colorTexture,u.bindFramebuffer(x.vertical),u.bindTexture(v,T+1),w.setUniform2fv("u_direction",o),F.draw(),v=x.vertical.colorTexture,O[0]=Math.round(O[0]/2),O[1]=Math.round(O[1]/2)}u.setViewport(0,0,c,_);var M=h.getProgram(t,m.composite,[{name:"nummips",value:5}]);u.bindFramebuffer(this._compositeFBO),u.bindProgram(M),M.setUniform1f("u_bloomStrength",f),M.setUniform1f("u_bloomRadius",b),M.setUniform1fv("u_bloomFactors",n),M.setUniform3fv("u_bloomTintColors",a),u.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),M.setUniform1i("u_blurTexture1",1),u.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),M.setUniform1i("u_blurTexture2",2),u.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),M.setUniform1i("u_blurTexture3",3),u.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),M.setUniform1i("u_blurTexture4",4),u.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),M.setUniform1i("u_blurTexture5",5),F.draw(),u.bindFramebuffer(i),u.setBlendingEnabled(!0);var y=h.getProgram(t,m.blit);u.bindProgram(y),u.bindTexture(this._compositeFBO.colorTexture,6),y.setUniform1i("u_texture",6),u.setBlendFunction(1,1),F.draw(),F.unbind(),u.setBlendFunction(1,771),u.setStencilTestEnabled(!0)},t.prototype._createOrResizeResources=function(t){var i=t.context,s=t.pixelRatio,r=t.state.size,o=Math.round(s*r[0]),n=Math.round(s*r[1]);if(!this._compositeFBO||this._size[0]!==o||this._size[1]!==n){this._size[0]=o,this._size[1]=n;var a=[Math.round(o/2),Math.round(n/2)];this._compositeFBO?this._compositeFBO.resize(o,n):this._compositeFBO=new e.FramebufferObject(i,{colorTarget:0,depthStencilTarget:0,width:o,height:n}),this._intensityFBO?this._intensityFBO.resize(a[0],a[1]):this._intensityFBO=new e.FramebufferObject(i,{colorTarget:0,depthStencilTarget:0,width:a[0],height:a[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:a[0],height:a[1]});for(var u=0;u<this._nMips;u++)this._mipsFBOs[u]?(this._mipsFBOs[u].horizontal.resize(a[0],a[1]),this._mipsFBOs[u].vertical.resize(a[0],a[1])):this._mipsFBOs[u]={horizontal:new e.FramebufferObject(i,{colorTarget:0,depthStencilTarget:0,width:a[0],height:a[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:a[0],height:a[1]}),vertical:new e.FramebufferObject(i,{colorTarget:0,depthStencilTarget:0,width:a[0],height:a[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:a[0],height:a[1]})},a[0]=Math.round(a[0]/2),a[1]=Math.round(a[1]/2)}},t}();i.Bloom=u}).apply(null,s))||(t.exports=r)}}]);