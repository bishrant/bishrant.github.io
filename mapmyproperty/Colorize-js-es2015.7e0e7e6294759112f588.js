(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{P3Vg:function(e,t,s){"use strict";s.r(t),s.d(t,"Colorize",(function(){return n})),s("wSAH"),s("n4uK"),s("GVa1");var i=s("of9L"),r=(s("0meK"),s("gjrC"));class n{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:{a_position:0}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,s){const{width:i,height:r}=t;this._createOrResizeResources(e,i,r);const{context:n,painter:a}=e,{materialManager:o}=a,c=this._programDesc,u=this._quad,l=s.colorMatrix;u.bind();const d=this._layerFBOTexture;n.bindFramebuffer(t),t.copyToTexture(0,0,i,r,0,0,d),n.setBlendingEnabled(!1),n.setStencilTestEnabled(!1);const h=o.getProgram(e,c);n.bindProgram(h),n.bindTexture(d,2),h.setUniformMatrix4fv("u_coefficients",l),h.setUniform1i("u_colorTexture",2),u.draw(),n.setBlendingEnabled(!0),n.setBlendFunction(1,771),n.setStencilTestEnabled(!0),u.unbind()}_createOrResizeResources(e,t,s){const{context:n}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===s||(this._size[0]=t,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(t,s):this._layerFBOTexture=new i.a(n,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t,height:s}),this._quad||(this._quad=new r.a(n,[-1,-1,1,-1,-1,1,1,1])))}}}}]);