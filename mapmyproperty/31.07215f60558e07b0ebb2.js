(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/features/support/ClusterStore":"0SZq","esri/geohash/geohashUtils":"8pdz","esri/views/2d/layers/features/controllers/BaseController":"Btct","esri/geohash/GeohashTree":"JOu6","esri/views/2d/layers/features/support/pixelBuffering":"oWCy"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"0SZq":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("xhoE"),r("2Atf"),r("Q2wQ"),r("HZ3d"),r("TMur"),r("H1tY"),r("LxLY"),r("qMld"),r("jBNx"),r("JOu6"),r("8pdz"),r("nrlZ"),r("vtMp"),r("/COu"),r("Jvs9"),r("rfv1"),r("Q2Em"),r("ZooB"),r("zDti"),r("sCbS"),r("WEAo"),r("tI6k")],void 0===(n=(function(e,t,r,i,n,o,a,s,u,l,c,h,d,f,p,g,y,v,_,m,b,x,S,I){Object.defineProperty(t,"__esModule",{value:!0});var w=function(e){return u.andThen(e,(function(e){return"cluster"!==e.type?null:i({},e,{clusterRadius:c.pt2px(e.clusterRadius/2)})}))};function M(e,t,r){return o(this,void 0,void 0,(function(){var i,o,a;return n(this,(function(n){for(i=[],o=0,a=e;o<a.length;o++)i.push(T(a[o],t,r));return[2,l.all(i)]}))}))}function T(e,t,r){return o(this,void 0,void 0,(function(){var i,o,a;return n(this,(function(n){switch(n.label){case 0:return"onStatisticValueExpression"in e.outStatistic?(o=(i=e).outStatistic.onStatisticValueExpression,a=i,[4,x.createRendererExpression(o,t,r)]):[3,2];case 1:return a.expression=n.sent(),[2,i];case 2:return[2,e]}}))}))}var R=function(e){function t(t,r,i,n,o){var a=this,s=new y.default([],[r,i]);return(a=e.call(this,s,n,null,t)||this).invalid=!1,a.canDelete=!1,a.geohashBoundsInfo=o,a}return r(t,e),Object.defineProperty(t.prototype,"count",{get:function(){return this.attributes.cluster_count},enumerable:!0,configurable:!0}),t.create=function(e,r,i,n,o,a,s){var u=new t(r,i,n,a,s);return u.localId=e.createLocalId(u.objectId,!0),u.tileLevel=o,u},t.prototype.update=function(e,t,r,i,n){return this.geometry.coords[0]=e,this.geometry.coords[1]=t,this.tileLevel=r,this.attributes=i,this.geohashBoundsInfo=n,this.referenceId=null,this.invalid=!1,this},t.prototype.toJSON=function(){return{objectId:this.objectId,referenceId:this.referenceId,attributes:i({},this.attributes,{clusterId:this.objectId}),geometry:{x:this.geometry.coords[0],y:this.geometry.coords[1]}}},t}(g.default),F=function(e){function t(t,r,i,n){var o=e.call(this,t)||this;return o._deferredDeletionQueue=[],o._invalidated=!1,o._aggregateFieldsHash=null,o._geohashLevel=0,o._aggregateValueRanges={},o._aggregateValueRangesChanged=!1,o._aggregateFields=[],o._hasAggregateValueExpression=!1,o._hasViewExpression=!1,o._$view={scale:0,viewingMode:"none"},o._clusters=new Map,o._tiles=new Map,o._spatialReference=r,o._attributeStore=i,o._featureReduction=w(n),o._projectionSupportCheck=_.checkProjectionSupport(r,a.SpatialReference.WGS84),o}return r(t,e),t.prototype.setScale=function(e){var t=e!==this._$view.scale&&this._hasViewExpression,r=this._featureReduction;this._$view.scale=e,u.isSome(r)&&t&&(this._tree=new h.GeohashTree(this._aggregateFields),this._unindexFeatures(),this._reindexFeatures(!0))},t.prototype.update=function(e,t,r){return o(this,void 0,void 0,(function(){var i,o,a,s,l,c,d,f,p,g,y=this;return n(this,(function(n){switch(n.label){case 0:return i=this._featureReduction,o=u.andThen(t.featureReduction,w),a=t.aggregateFields.reduce((function(e,t){return e+JSON.stringify(t)}),""),s=a!==this._aggregateFieldsHash,l=null===i&&t.featureReduction||s,s?(c=this,[4,M(t.aggregateFields,this._spatialReference,r)]):[3,2];case 1:for(c._aggregateFields=n.sent(),this._hasViewExpression=!1,d=0,f=this._aggregateFields;d<f.length;d++)"onStatisticValueExpression"in(p=f[d]).outStatistic&&(g=p,this._hasAggregateValueExpression=!0,this._hasViewExpression=this._hasViewExpression||g.expression.referencesScale());n.label=2;case 2:return[4,this._projectionSupportCheck];case 3:return n.sent(),this._featureReduction=o,this._aggregateFieldsHash=a,this._aggregateValueRanges={},this._invalidated=!0,u.isNone(o)?(this._tree=null,[2]):(u.isSome(i)&&i.clusterRadius!==o.clusterRadius&&this._clusters.forEach((function(e){return e.canDelete=!0})),l&&(this._tree=new h.GeohashTree(t.aggregateFields),this._unindexFeatures()),(l||e)&&this._reindexFeatures(s),this._handleClusterUpdates(),this._tiles.forEach((function(e){return y._getClustersForTile(e,0,o.clusterRadius,null,!1)})),[2])}}))}))},t.prototype._ensureAggregateFields=function(e){if(this._hasAggregateValueExpression)for(var t=this._$view,r=0,i=this._aggregateFields;r<i.length;r++){var n=i[r];"onStatisticValueExpression"in n.outStatistic&&(e.attributes[n.outStatistic.onStatisticField]=S.callWithOptimizedFeature(n.expression,e,{$view:t},this.geometryInfo))}},t.prototype._unindexFeatures=function(){this._featuresById.forEach((function(e){e.geohashIndexed=!1}))},t.prototype._reindexFeatures=function(e){var t=this;this._featuresById.forEach((function(r){r.geohashX||r.geohashY||t._setGeohash(r),e&&t._ensureAggregateFields(r),t._attributeStore.isVisible(r)?t._insertIntoIndex(r):t._removeFromIndex(r)}))},t.prototype.onTileUpdate=function(e){var t=this,r=e.added,i=e.removed;if(r.length){var n=Math.max.apply(Math,r.map((function(e){return e.level})));this._setGeohashLevel(n),r.forEach((function(e){return t._tiles.set(e.key.id,e)}))}if(!u.isNone(this._featureReduction)){var o=this._featureReduction.clusterRadius;i.forEach((function(e){t._tiles.delete(e.key.id),t._markTileClustersForDeletion(e,o)}))}},t.prototype.sweepClusters=function(){var e=this;this._clusters.forEach((function(t,r){t.canDelete&&(e._attributeStore.freeLocalId(t.objectId),e._clusters.delete(r))}));for(var t=0,r=this._deferredDeletionQueue;t<r.length;t++)this._attributeStore.addLocalId(r[t]);this._deferredDeletionQueue=[]},t.prototype.executeTileQuery=function(t,r,i){return o(this,void 0,void 0,(function(){var o,a,s;return n(this,(function(n){switch(n.label){case 0:return u.isNone(this._featureReduction)?[2,e.prototype.executeTileQuery.call(this,t,r,i)]:[4,this._projectionSupportCheck];case 1:return n.sent(),this._handleClusterUpdates(),o=this._featureReduction.clusterRadius,a=this._getTransforms(t,r),s=this._getClustersForTile(t,i.pixelBuffer,o,a),this._aggregateValueRangesChanged&&(this.events.emit("valueRangesChanged",{valueRanges:this._aggregateValueRanges}),this._aggregateValueRangesChanged=!1),[2,s]}}))}))},t.prototype.getAggregate=function(e){var t=null;return this._clusters.forEach((function(r){r.localId===e&&(t=r.toJSON())})),t},t.prototype.getAggregateValueRanges=function(){return this._aggregateValueRanges},t.prototype._getClustersForTile=function(e,t,r,n,o){var l=this;void 0===o&&(o=!0),t=Math.max(t,50);for(var c=2*r,h=new Set,d=this._getGeohashLevel(e.key.level),f=Math.pow(2,e.key.level)*Math.ceil(I.TILE_SIZE/c),g=Math.ceil(t/c)+2,y=Math.ceil(I.TILE_SIZE/c)+2*g,v=e.key,x=v.row*I.TILE_SIZE,S=Math.floor(v.col*I.TILE_SIZE/c)-g,w=Math.floor(x/c)-g,M=S+y,T=w+y,R=new Array,F=e.tileInfoView.getLODInfoAt(e.key.level),C=S;C<=M;C++)for(var E=function(t){var r,c,g=C;F.wrap&&(g=C<0?C+f:C%f);var y=F.wrap&&C<0,v=F.wrap&&C%f!==C,x=O._lookupCluster(F,e.key.level,g,t,d);if(u.isSome(x)){var S=u.andThen(n,(function(e){return y?e.left:v?e.right:e.tile}));if(o&&u.isNone(S))return"continue";if(!x.count)return"continue";if(o&&1===x.count){var I=x.geohashBoundsInfo,w=I.xLL,M=I.yLL,T=I.xTR,E=I.yTR,L=I.level,G=u.expect(O._tree).findSingleOccupancyNode(w,M,T,E,L),k=u.unwrap(G).getLngLatBounds(),j={x:k[0],y:k[1]},V={x:k[2],y:k[3]},N=0,P=0,A=0,B=0;if(O._spatialReference.isWebMercator)N=(r=p.lngLatToXY(j.x,j.y))[0],P=r[1],A=(c=p.lngLatToXY(V.x,V.y))[0],B=c[1];else{var Y=_.project(j,a.SpatialReference.WGS84,O._spatialReference),z=_.project(V,a.SpatialReference.WGS84,O._spatialReference);if(!Y||!z)return s("esri-2d-debug")&&console.debug("Failed to reproject known tree node"),"continue";N=Y.x,P=Y.y,A=z.x,B=z.y}var X=null;if(O.forEachInBounds([N,P,A,B],(function(e){l._attributeStore.isVisible(e)&&(X&&s("esri-2d-debug")&&console.debug("Expected to find only one feature, but found multiple"),X=e)})),!X)return s("esri-2d-debug")&&console.debug("Expected to find a feature, but found none"),"continue";var D=b.getGeometry(O.geometryInfo,X.geometry,0,u.expect(S)),q=i({},X.attributes,x.attributes);x.referenceId=X.localId,h.add(x.objectId),R.push(new m.Feature(q,x.localId,D))}else o&&(h.add(x.objectId),D=b.getGeometry(O.geometryInfo,x.geometry,0,u.expect(S)),R.push(new m.Feature(x.attributes,x.localId,D)))}},O=this,L=w;L<=T;L++)E(L);return{features:R,objectIds:h}},t.prototype._getGeohashLevel=function(e){return Math.min(Math.ceil(e/2+2),12)},t.prototype._setGeohashLevel=function(e){var t=this,r=this._geohashLevel,i=this._getGeohashLevel(e),n=2*(Math.floor(i/2)+1)-1,o=this._tree;this._geohashLevel=n,u.isNone(o)||(n>r?this._featuresById.forEach((function(e){e.geohashIndexed&&(o.insert(e,t._geohashLevel,r+1),e.geohashIndexed=!0)})):n<r&&o.dropLevels(this._geohashLevel))},t.prototype._insertIntoIndex=function(e){e.geohashIndexed||(this._invalidated=!0,e.geohashIndexed=!0,u.expect(this._tree).insert(e,this._geohashLevel))},t.prototype._removeFromIndex=function(e){e.geohashIndexed&&(this._invalidated=!0,u.expect(this._tree).remove(e,this._geohashLevel),e.geohashIndexed=!1)},t.prototype._handleClusterUpdates=function(){var e=this;this._invalidated&&this._clusters.size&&this._clusters.forEach((function(t){u.isSome(t)&&(t.invalid=t.invalid||e._invalidated)})),this._invalidated=!1},t.prototype._getTransforms=function(e,t){var r={originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]},n=f.getInfo(t);if(!n)return{tile:r,left:null,right:null};var o=n.valid,a=o[0],s=o[1];return{tile:r,left:i({},r,{translate:[s,e.bounds[3]]}),right:i({},r,{translate:[a-s+e.bounds[0],e.bounds[3]]})}},t.prototype._getClusterId=function(e,t,r){return(15&e)<<28|(16383&t)<<14|16383&r},t.prototype._markForDeletion=function(e,t,r){var i=this._getClusterId(e,t,r);if(this._clusters.has(i)){var n=this._clusters.get(i);u.isSome(n)?n.canDelete=!0:this._clusters.delete(i)}},t.prototype._getClusterBounds=function(e,t,r){if(u.isNone(this._featureReduction))return null;var i=this._featureReduction.clusterRadius,n=2*i,o=r%2?t*n:t*n+i,a=r*n,s=a/I.TILE_SIZE,l=(o+n)/I.TILE_SIZE,c=(a-n)/I.TILE_SIZE;return[e.getXForColumn(o/I.TILE_SIZE),e.getYForRow(s),e.getXForColumn(l),e.getYForRow(c)]},t.prototype._lookupCluster=function(e,t,r,n,o){var s,l;if(u.isNone(this._featureReduction)||u.isNone(this._tree))return null;var c=this._getClusterId(t,r,n),h=this._clusters.get(c);if(h&&u.isSome(h)&&!h.invalid&&!h.canDelete)return h;var f=this._getClusterBounds(e,r,n),g=f[0],y=f[1],v=f[2],m=f[3],b={x:g,y:y},x={x:v,y:m},S=0,I=0,w=0,M=0;if(this._spatialReference.isWebMercator)S=(s=p.xyToLngLat(b.x,b.y))[0],I=s[1],w=(l=p.xyToLngLat(x.x,x.y))[0],M=l[1];else{var T=_.project(b,this._spatialReference,a.SpatialReference.WGS84),F=_.project(x,this._spatialReference,a.SpatialReference.WGS84);if(!T||!F)return null;S=T.x,I=T.y,w=F.x,M=F.y}var C={geohashX:0,geohashY:0},E={geohashX:0,geohashY:0};d.setGeohashXY(C,I,S,o),d.setGeohashXY(E,M,w,o);var O=C.geohashX,L=C.geohashY,G=E.geohashX,k=E.geohashY,j={xLL:O,yLL:L,xTR:G,yTR:k,level:o},V=this._tree.getRegionStatistics(O,L,G,k,o),N=V.count,P=N?V.xTotal/N:0,A=N?V.yTotal/N:0;if(u.isSome(h)&&h.canDelete){var B=this._attributeStore.removeLocalId(h.objectId);this._deferredDeletionQueue.push(B)}var Y=u.isSome(h)&&!h.canDelete&&h.invalid,z=i({cluster_count:N},V.attributes),X=this._attributeStore,D=Y?h.update(P,A,t,z,j):R.create(X,c,P,A,t,z,j);return 0===N&&(D.geometry.coords[0]=(g+v)/2,D.geometry.coords[1]=(y+m)/2),this._attributeStore.setAttributeData(D.localId,D,this.geometryInfo,null),this._clusters.set(c,D),this._updateAggregateValueRangeForCluster(D,D.tileLevel),D},t.prototype._updateAggregateValueRangeForCluster=function(e,t){var r=this._aggregateValueRanges[t]||{minValue:1/0,maxValue:0},i=r.minValue,n=r.maxValue;r.minValue=Math.min(i,e.count),r.maxValue=Math.max(n,e.count),this._aggregateValueRanges[t]=r,i===r.minValue&&n===r.maxValue||(this._aggregateValueRangesChanged=!0)},t.prototype._markTileClustersForDeletion=function(e,t){for(var r=2*t,i=Math.ceil(I.TILE_SIZE/r),n=e.key,o=n.row*I.TILE_SIZE,a=Math.floor(n.col*I.TILE_SIZE/r),s=Math.floor(o/r),u=a;u<a+i;u++)for(var l=s;l<s+i;l++)this._markForDeletion(e.key.level,u,l)},t.prototype._setGeohash=function(e){var t=e.geometry;if(t&&t.coords.length){var r=_.project({x:t.coords[0],y:t.coords[1]},this._spatialReference,a.SpatialReference.WGS84);r?d.setGeohashXY(e,r.y,r.x,12):s("esri-2d-debug")&&console.debug("Tried to project feature geometry, but got back `null`")}},t.prototype._add=function(t){var r=this._featuresById.get(t.objectId);e.prototype._add.call(this,t),this._ensureAggregateFields(t),u.isSome(this._featureReduction)&&u.isSome(this._tree)&&(r?(t.geohashIndexed=r.geohashIndexed,t.geohashX=r.geohashX,t.geohashY=r.geohashY):this._setGeohash(t),!t.geohashIndexed&&this._attributeStore.isVisible(t)&&this._insertIntoIndex(t))},t.prototype._remove=function(t){return u.isSome(this._featureReduction)&&u.isSome(this._tree)&&this._removeFromIndex(t),e.prototype._remove.call(this,t)},t}(v.default);t.ClusterStore=F}).apply(null,i))||(e.exports=n)},"8pdz":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=new Float64Array(2),i=new Float64Array(2);function n(e){return e<=57?e-48:e<=104?e-88:e<=107?e-89:e<=110?e-90:e-91}function o(e){return"0123456789bcdefghjkmnpqrstuvwxyz"[e]}function a(e){return(e[0]+e[1])/2}function s(e,t,r){return e[0]=t,e[1]=r,e}function u(e,t){var r=a(e),i=t,n=!t;e[0]=n*e[0]+i*r,e[1]=n*r+i*e[1]}function l(e,t){var r=t>a(e);return u(e,r),r}function c(e,t){for(var o=s(r,-90,90),l=s(i,-180,180),c=0;c<t.length;c++){var h=n(t.charCodeAt(c));c%2==0?(u(l,!!(16&h)),u(l,!!(4&h)),u(l,!!(1&h)),u(o,!!(8&h)),u(o,!!(2&h))):(u(o,!!(16&h)),u(o,!!(4&h)),u(o,!!(1&h)),u(l,!!(8&h)),u(l,!!(2&h)))}return e[0]=a(o),e[1]=a(l),e}function h(e,t,n){for(var a="",u=s(r,-90,90),c=s(i,-180,180),h=0;h<n;h++){var d=0;h%2?(d|=l(u,e)<<4,d|=l(c,t)<<3,d|=l(u,e)<<2,d|=l(c,t)<<1,d|=l(u,e)<<0):(d|=l(c,t)<<4,d|=l(u,e)<<3,d|=l(c,t)<<2,d|=l(u,e)<<1,d|=l(c,t)<<0),a+=o(d)}return a}function d(e){var t=Math.floor(5*e/2);return 180/Math.pow(2,t)}function f(e){var t=Math.ceil(5*e/2);return 360/Math.pow(2,t)}function p(e,t){return t?1&e|(4&e)>>1|(16&e)>>2:(2&e)>>1|(8&e)>>2}function g(e,t){return t?(2&e)>>1|(8&e)>>2:1&e|(4&e)>>1|(16&e)>>2}function y(e,t,r){var i=!((e.length-1)%2),a=e.substring(0,e.length-1),s=n(e.charCodeAt(e.length-1)),u=0,l=0,c=0,h=0;i?(u=8,l=4,c=1&s|(4&s)>>1|(16&s)>>2,h=(2&s)>>1|(8&s)>>2):(u=4,l=8,h=1&s|(4&s)>>1|(16&s)>>2,c=(2&s)>>1|(8&s)>>2);var d=c+t,f=h+r,p=Math.floor(d/u),g=Math.floor(f/l),v=o(function(e,t,r){return r?1&e|(1&t)<<1|(2&e)<<1|(2&t)<<2|(4&e)<<2:1&t|(1&e)<<1|(2&t)<<1|(2&e)<<2|(4&t)<<2}(d-p*u,f-g*l,i));return e.length>1&&(p||g)?y(a,p,g)+v:a+v}t.decodeBase32Char=n,t.encodeBase32Char=o,t.decodeGeohash=c,t.convertGeohash32ToXY=function(e,t){for(var r=0,i=0,o=30,a=30,s=0;s<t.length;s++){var u=n(t.charCodeAt(s)),l=s%2==0;r|=p(u,l)<<(o-=l?3:2),i|=g(u,l)<<(a-=l?2:3)}return{geohashX:r,geohashY:i}},t.decodeGeohashXY=function(e,t){for(var r=-90,i=90,n=-180,o=180,a=0;a<t;a++){for(var s=Math.ceil((a+1)/2),u=Math.floor((a+1)/2),l=1-a%2,c=30-(3*s+2*u),h=30-(2*s+3*u),d=2*l+3*(1-l),f=(7*l+3*(1-l)<<c&e.geohashX)>>c,p=(3*l+7*(1-l)<<h&e.geohashY)>>h,g=3*l+2*(1-l)-1;g>=0;g--){var y=(n+o)/2,v=f&1<<g?1:0;n=(1-v)*n+v*y,o=(1-v)*y+v*o}for(g=d-1;g>=0;g--){var _=(r+i)/2,m=p&1<<g?1:0;r=(1-m)*r+m*_,i=(1-m)*_+m*i}}return[n,r,o,i]},t.setGeohashXY=function(e,t,r,i){i%2&&(i+=1);for(var n=0,o=0,a=-90,s=90,u=-180,l=180,c=0;c<i/2;c++){for(var h=0;h<5;h++){var d=(u+l)/2,f=r>d?1:0;n|=f<<29-(h+5*c),u=(1-f)*u+f*d,l=(1-f)*d+f*l}for(h=0;h<5;h++){var p=(a+s)/2,g=t>p?1:0;o|=g<<29-(h+5*c),a=(1-g)*a+g*p,s=(1-g)*p+g*s}}e.geohashX=n,e.geohashY=o},t.encodeGeohash=h,t.latDistPerGeohash=d,t.lonDistPerGeohash=f,t.unpackXBits=p,t.unpackYBits=g,t.getRelativeGeohash=y,t.getIntersectingGeohashes=function(e,t,r,i,n){for(var o=Math.abs(r-e),a=Math.abs(i-t),s=d(n),u=f(n),l=Math.ceil(a/u),c=Math.ceil(o/s),p=h(e,t,n),g=new Array,v=0;v<l;v++)for(var _=0;_<c;_++)g.push(y(p,v,_));return g},t.forEachIntersectingGeohash=function(e,t,r,i,n,o){for(var a=Math.abs(r-e),s=Math.abs(i-t),u=d(n),l=f(n),p=Math.ceil(s/l),g=Math.ceil(a/u),v=h(e,t,n),_=0;_<p;_++)for(var m=0;m<g;m++){var b=y(v,_,m),x=c([0,0],b),S=x[0],I=x[1],w=I-l/2,M=S+u/2,T=I+l/2,R=u*l,F=Math.max(e,S-u/2),C=Math.max(t,w),E=Math.min(r,M)-F,O=Math.min(i,T)-C;o(b,Math.abs(E*O)/R)}}}).apply(null,i))||(e.exports=n)},Btct:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("Q2wQ"),r("HZ3d"),r("9opi"),r("2Atf"),r("ma1f"),r("7MDj"),r("H1tY"),r("qsST"),r("LxLY"),r("qMld"),r("Vx27"),r("Ytki"),r("ZooB"),r("I90O"),r("hz/Y"),r("IpeC"),r("YaB4"),r("lvbU"),r("0SZq"),r("oWCy")],void 0===(n=(function(e,t,r,i,n,o,a,s,u,l,c,h,d,f,p,g,y,v,_,m,b,x,S){Object.defineProperty(t,"__esModule",{value:!0});var I=c.getLogger("esri.views.2d.layers.features.controllers.BaseController"),w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._availableFields=[],t._pixelBuffer=0,t.config=null,t.filters=new Array(m.definitions.MAX_FILTERS),t.processor=null,t.remoteClient=null,t.service=null,t.tileStore=null,t}return o(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._initAttributeStore()},t.prototype.startup=function(){return n(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return this._initAttributeStore(),[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)];case 1:return e.sent(),[4,d.all([this.attributeStore.updateFilters(this),this.updatePixelBuffer()])];case 2:return e.sent(),[2]}}))}))},t.prototype.destroy=function(){this.attributeStore&&this.attributeStore.destroy()},Object.defineProperty(t.prototype,"arcadeInfo",{get:function(){return{geometryType:this.service.geometryType,fields:this.service.fields,spatialReference:this.spatialReference}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"featureReduction",{get:function(){return this.config.featureReduction},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fieldsIndex",{get:function(){return new y(this.service.fields)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geometryInfo",{get:function(){return{geometryType:this.service.geometryType,hasZ:!1,hasM:!1}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"returnCentroid",{get:function(){return this._get("returnCentroid")||function(e,t,r){if("esriGeometryPolygon"===t&&e.labelingInfo)return!0;if("esriGeometryPolygon"!==t)return!1;function i(e){if(!e)return!1;var t=e.type;return"simple-marker"===t||"picture-marker"===t||"text"===t||"web-style"===t||"cim"===t}switch(r.type){case"simple":return i(r.symbol);case"unique-value":return i(r.defaultSymbol)||r.uniqueValueInfos.some((function(e){return i(e.symbol)}));case"class-breaks":return i(r.defaultSymbol)||r.classBreakInfos.some((function(e){return i(e.symbol)}));case"dot-density":return!1;default:return!0}}(this.config,this.service.geometryType,this.renderer)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"returnOutline",{get:function(){return function(e,t){switch(e){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryMultipoint":return!0;case"esriGeometryPolygon":return function(e){var t=e&&e.getSymbols();return"backgroundFillSymbol"in e&&null!=e.backgroundFillSymbol&&"outline"in e.backgroundFillSymbol&&null!=e.backgroundFillSymbol.outline||t.some((function(e){return"outline"in e&&null!=e.outline}))}(t)}}(this.service.geometryType,this.renderer)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"queryInfo",{get:function(){return{returnCentroid:this.returnCentroid,returnGeometry:!0,outFields:this.availableFields,definitionExpression:this.config.definitionExpression,gdbVersion:this.config.gdbVersion,historicMoment:this.config.historicMoment}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderer",{get:function(){return this.config?v.fromJSON(this.config.renderer):(I.error("mapview-controller","Unable to create renderer for undefined configuration"),null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"availableFields",{get:function(){var e=this,t=this.config.availableFields.filter((function(t){return-1===e._availableFields.indexOf(t)}));return this._availableFields=this._availableFields.concat(t),this._availableFields},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spatialReference",{get:function(){return this.tileStore.tileScheme.spatialReference},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewParams",{get:function(){return{viewingMode:"",scale:this.viewState&&this.viewState.scale||1}},enumerable:!0,configurable:!0}),t.prototype.getObjectId=function(e){return this.attributeStore.getFeatureId(e)},t.prototype.getAggregate=function(e){return null},t.prototype.getAggregateValueRanges=function(){return{}},t.prototype.getLocalId=function(e){return this.attributeStore.getLocalId(e)},t.prototype.mapValidLocalIds=function(e){var t=this;return e.map((function(e){return t.attributeStore.getLocalId(e)})).filter((function(e){return null!=e}))},t.prototype.setViewState=function(e){this._set("viewState",e)},t.prototype.updatePixelBuffer=function(){return n(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,S.computePxBuffer(this.renderer,this.service.geometryType)];case 1:return e=t.sent(),this._pixelBuffer=Math.max(this._pixelBuffer,e),[2]}}))}))},t.prototype.setHighlight=function(e){return n(this,void 0,void 0,(function(){return i(this,(function(t){return[2,this.attributeStore.setHighlight(e)]}))}))},t.prototype.validateConfig=function(e){for(var t=0,r=e.filters;t<r.length;t++){var i=r[t];if(h.isSome(i)&&i.where)try{p.validateWhere(this.fieldsIndex,i.where)}catch(e){throw new s("mapview-bad-filter",e.message,{filter:i,missingFields:e.details})}}},t.prototype.onFeatureAdd=function(e){e.localId=this.attributeStore.createLocalId(e.objectId),this.attributeStore.setAttributeData(e.localId,e,this.geometryInfo,this.viewParams)},t.prototype.onFeatureRemove=function(e){!e.localId&&l("esri-2d-debug")&&console.debug("Feature must have localId"),this.attributeStore.freeLocalId(e.objectId)},t.prototype.enableEvent=function(e){},t.prototype._initAttributeStore=function(){var e=this;this.attributeStore?this.attributeStore.invalidateResources():this.attributeStore=new b.default({type:"remote",initialize:function(t,r){return e.remoteClient.invoke("tileRenderer.featuresView.attributeView.initialize",t,{signal:r})},update:function(t,r){return e.remoteClient.invoke("tileRenderer.featuresView.attributeView.requestUpdate",t,{signal:r})},render:function(){return e.remoteClient.invoke("tileRenderer.featuresView.requestRender")}})},t.prototype._createQueryEngine=function(e){return new g.default({definitionExpression:this.config.definitionExpression,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!0,featureStore:e,timeInfo:this.service.timeInfo})},t.prototype._createTempQueryEngine=function(e){return void 0===e&&(e=this._createFeatureStore()),this._createQueryEngine(e)},t.prototype._createFeatureStore=function(){return new x.ClusterStore({geometryType:this.service.geometryType,hasM:!1,hasZ:!1},this.spatialReference,this.attributeStore,this.featureReduction)},t.prototype._createDefaultQuery=function(e){var t=new _,r=e.outFields,i=this.config,n=i.historicMoment,o=i.definitionExpression;return r=r.length/this.service.fields.length>=.75?["*"]:r,t.gdbVersion=i.gdbVersion,t.historicMoment=null!=n?new Date(n):null,t.num=e.num,t.outFields=r,t.outSpatialReference=this.spatialReference,t.returnGeometry=e.returnGeometry,t.returnCentroid=e.returnCentroid,t.start=e.resultOffset,t.where=o||"1=1",t},t.prototype.hasGeometryFilter=function(){return this.filters.some((function(e){return h.isSome(e)&&!!e.geometry}))},r([f.property({readOnly:!0,dependsOn:["config","service","spatialReference"]})],t.prototype,"arcadeInfo",null),r([f.property()],t.prototype,"config",void 0),r([f.property({readOnly:!0,dependsOn:["config"]})],t.prototype,"featureReduction",null),r([f.property({readOnly:!0,dependsOn:["service"]})],t.prototype,"fieldsIndex",null),r([f.property()],t.prototype,"filters",void 0),r([f.property({readOnly:!0,dependsOn:["service"]})],t.prototype,"geometryInfo",null),r([f.property({readOnly:!0,dependsOn:["config"]})],t.prototype,"returnCentroid",null),r([f.property({readOnly:!0,dependsOn:["service","config"]})],t.prototype,"returnOutline",null),r([f.property({readOnly:!0,dependsOn:["config","availableFields"]})],t.prototype,"queryInfo",null),r([f.property({dependsOn:["config"],readOnly:!0})],t.prototype,"renderer",null),r([f.property()],t.prototype,"processor",void 0),r([f.property({readOnly:!0,dependsOn:["config"]})],t.prototype,"availableFields",null),r([f.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),r([f.property({constructOnly:!0})],t.prototype,"service",void 0),r([f.property({dependsOn:["tileStore"]})],t.prototype,"spatialReference",null),r([f.property({constructOnly:!0})],t.prototype,"tileInfo",void 0),r([f.property({constructOnly:!0})],t.prototype,"tileStore",void 0),r([f.property({readOnly:!0})],t.prototype,"viewState",void 0),r([f.property({readOnly:!0,dependsOn:["viewState"]})],t.prototype,"viewParams",null),r([f.subclass("esri.views.2d.layers.features.controllers.BaseController")],t)}(f.declared(u.HandleOwner));t.default=w}).apply(null,i))||(e.exports=n)},JOu6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zIqJ"),r("LxLY"),r("8pdz")],void 0===(n=(function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this._pool=new r.default(8024),this._nodes=0,this._root=new a(0,0,0),this._fields=e}return e.prototype._acquire=function(e,t,r){var n=this._pool.dequeue();return this._nodes++,i.isSome(n)?n.realloc(e,t,r):new a(e,t,r)},e.prototype._release=function(e){this._nodes--,this._pool.enqueue(e)},Object.defineProperty(e.prototype,"count",{get:function(){return this._root.count},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._nodes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"poolSize",{get:function(){return this._pool.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"depth",{get:function(){var e=0;return this._forEachNode((function(t){return e=Math.max(e,t.depth)})),e},enumerable:!0,configurable:!0}),e.prototype.dropLevels=function(e){var t=this;this._forEachNode((function(r){if(r.depth>=e)for(var i=0;i<r.children.length;i++){var n=r.children[i];r.children[i]=null,n&&t._release(n)}}))},e.prototype.insert=function(e,t,r){void 0===r&&(r=0);for(var i=this._root,n=0,o=0,a=0;null!==i;){if(i.depth>=r&&(i.count+=1,i.xTotal+=e.geometry.coords[0],i.yTotal+=e.geometry.coords[1],i.xGeohashTotal+=e.geohashX,i.yGeohashTotal+=e.geohashY,this._updateStatistics(e,i,1)),n>=t)return;var s=Math.ceil((n+1)/2),u=Math.floor((n+1)/2),l=1-n%2,c=30-(3*s+2*u),h=30-(2*s+3*u),d=(e.geohashX&7*l+3*(1-l)<<c)>>c,f=(e.geohashY&3*l+7*(1-l)<<h)>>h,p=d+f*(8*l+4*(1-l));o=o<<3*l+2*(1-l)|d,a=a<<2*l+3*(1-l)|f,null==i.children[p]&&(i.children[p]=this._acquire(o,a,n+1)),n+=1,i=i.children[p]}},e.prototype.remove=function(e,t){for(var r=this._root,i=0;null!==r;){if(r.count-=1,r.xTotal-=e.geometry.coords[0],r.yTotal-=e.geometry.coords[1],r.xGeohashTotal-=e.geohashX,r.yGeohashTotal-=e.geohashY,this._updateStatistics(e,r,-1),i>=t)return;var n=Math.ceil((i+1)/2),o=Math.floor((i+1)/2),a=1-i%2,s=30-(3*n+2*o),u=30-(2*n+3*o),l=((e.geohashX&7*a+3*(1-a)<<s)>>s)+((e.geohashY&3*a+7*(1-a)<<u)>>u)*(8*a+4*(1-a)),c=r.children[l];1===c.count&&(this._release(c),r.children[l]=null),i+=1,r=c}},e.prototype.find=function(e,t,r){return this._root.find(e,t,r,0,0,0)},e.prototype.findSingleOccupancyNode=function(e,t,r,i,n){for(var o=this._root;null!==o;){var a=o.depth,s=o.xNode,u=o.yNode,l=1-a%2,c=o.xGeohashTotal/o.count,h=o.yGeohashTotal/o.count;if(1===o.count&&e<c&&c<=r&&t<h&&h<=i)return o;if(a>=n)o=o.next;else{for(var d=Math.ceil((a+1)/2),f=Math.floor((a+1)/2),p=30-(3*d+2*f),g=30-(2*d+3*f),y=~((1<<p)-1),v=~((1<<g)-1),_=(t&v)>>g,m=(r&y)>>p,b=(i&v)>>g,x=s<<3*l+2*(1-l),S=u<<2*l+3*(1-l),I=x+8*l+4*(1-l),w=S+4*l+8*(1-l),M=Math.max(x,(e&y)>>p),T=Math.max(S,_),R=Math.min(I,m),F=Math.min(w,b),C=null,E=null,O=T;O<=F;O++)for(var L=M;L<=R;L++){var G=o.children[L-x+(O-S)*(8*l+4*(1-l))];G&&(C||((C=G).next=o.next),E&&(E.next=G),E=G,G.next=o.next)}o=C||o.next}}return null},e.prototype.getRegionStatistics=function(e,t,r,i,n){for(var o=this._root,a=0,s=0,u=0,l={};null!==o;){var c=o.depth,h=o.xNode,d=o.yNode;if(c>=n){var f=o.xGeohashTotal/o.count,p=o.yGeohashTotal/o.count;e<f&&f<=r&&t<p&&p<=i&&(a+=o.count,s+=o.xTotal,u+=o.yTotal,this._aggregateStatistics(l,o.statistics)),o=o.next}else{for(var g=Math.ceil((c+1)/2),y=Math.floor((c+1)/2),v=1-c%2,_=30-(3*g+2*y),m=30-(2*g+3*y),b=~((1<<_)-1),x=~((1<<m)-1),S=(t&x)>>m,I=(r&b)>>_,w=(i&x)>>m,M=h<<3*v+2*(1-v),T=d<<2*v+3*(1-v),R=M+8*v+4*(1-v),F=T+4*v+8*(1-v),C=Math.max(M,(e&b)>>_),E=Math.max(T,S),O=Math.min(R,I),L=Math.min(F,w),G=null,k=null,j=E;j<=L;j++)for(var V=C;V<=O;V++){var N=o.children[V-M+(j-T)*(8*v+4*(1-v))];if(N){if(j!==E&&j!==L&&V!==C&&V!==O){p=N.yGeohashTotal/N.count,e<(f=N.xGeohashTotal/N.count)&&f<=r&&t<p&&p<=i&&(a+=N.count,s+=N.xTotal,u+=N.yTotal,this._aggregateStatistics(l,N.statistics));continue}G||((G=N).next=o.next),k&&(k.next=N),k=N,N.next=o.next}}o=G||o.next}}return{count:a,attributes:this._normalizeStatistics(l,a),xTotal:s,yTotal:u}},e.prototype._forEachNode=function(e){for(var t=this._root;null!==t;){var r=this._linkChildren(t)||t.next;e(t),t=r}},e.prototype._linkChildren=function(e){for(var t=null,r=null,i=0;i<=e.children.length;i++){var n=e.children[i];n&&(t||((t=n).next=e.next),r&&(r.next=n),r=n,n.next=e.next)}return t},e.prototype._updateStatistics=function(e,t,r){for(var i=0,n=this._fields;i<n.length;i++){var o=n[i],a=o.name,s=e.attributes[o.outStatistic.onStatisticField];switch(o.outStatistic.statisticType){case"norm":t.statistics[a]||(t.statistics[a]={});var u=e.attributes[o.outStatistic.onStatisticNormalizationField],l=t.statistics[a].onStatisticField||0,c=t.statistics[a].onStatisticNormalizationField||0;null==s||isNaN(s)||null==u||0===u||isNaN(u)||(t.statistics[a].onStatisticField=l+r*s,t.statistics[a].onStatisticNormalizationField=c+r*u);break;case"avg":t.statistics[a]||(t.statistics[a]={value:0,nanCount:0});var h=t.statistics[a].value,d=t.statistics[a].nanCount;null==s||isNaN(s)?t.statistics[a].nanCount=d+r:t.statistics[a].value=h+r*s;break;case"avg_angle":t.statistics[a]||(t.statistics[a]={x:0,y:0,nanCount:0});var f=t.statistics[a].x,p=t.statistics[a].y,g=(d=t.statistics[a].nanCount,Math.PI/180);null==s||isNaN(s)?t.statistics[a].nanCount=d+r:(t.statistics[a].x=f+r*Math.cos(s*g),t.statistics[a].y=p+r*Math.sin(s*g));break;case"mode":t.statistics[a]||(t.statistics[a]={}),t.statistics[a][s]=(h=t.statistics[a][s]||0)+r}}},e.prototype._aggregateStatistics=function(e,t){for(var r=0,i=this._fields;r<i.length;r++){var n=i[r],o=n.name;switch(n.outStatistic.statisticType){case"avg":case"avg_angle":case"mode":case"norm":for(var a in e[o]||(e[o]={}),t[o])e[o][a]=(e[o][a]||0)+t[o][a]}}},e.prototype._normalizeStatistics=function(e,t){for(var r={},i=0,n=this._fields;i<n.length;i++){var o=n[i],a=o.name;switch(o.outStatistic.statisticType){case"norm":var s=e[a];if(t&&null==s.onStatisticNormalizationField)break;if(t&&s.onStatisticNormalizationField){r[a]=s.onStatisticField/s.onStatisticNormalizationField;break}r[a]=0;break;case"avg":if(!t)break;var u=e[a],l=u.value;if(!(t-(c=u.nanCount)))break;r[a]=l/(t-c);break;case"avg_angle":if(!t)break;var c,h=e[a],d=h.x,f=h.y;if(!(t-(c=h.nanCount)))break;var p=180/Math.PI,g=Math.atan2(f/(t-c),d/(t-c))*p;r[a]=g;break;case"mode":var y=e[a],v=0,_=null;for(var m in y){var b=y[m];b>v&&(v=b,_=m)}r[a]="null"===_?null:_}}return r},e}();t.GeohashTree=o;var a=function(){function e(e,t,r){this.count=0,this.xTotal=0,this.yTotal=0,this.statistics={},this.next=null,this.depth=0,this.xNode=0,this.yNode=0,this.xGeohashTotal=0,this.yGeohashTotal=0,this.children=new Array(32);for(var i=0;i<this.children.length;i++)this.children[i]=null;this.xNode=e,this.yNode=t,this.depth=r}return e.prototype.realloc=function(e,t,r){for(var i=0;i<this.children.length;i++)this.children[i]=null;return this.xNode=e,this.yNode=t,this.depth=r,this.next=null,this.xGeohashTotal=0,this.yGeohashTotal=0,this.xTotal=0,this.yTotal=0,this.count=0,this.statistics={},this},e.prototype.getLngLatBounds=function(){var e=this.depth,t=Math.ceil(e/2),r=Math.floor(e/2);return n.decodeGeohashXY({geohashX:this.xNode<<30-(3*t+2*r),geohashY:this.yNode<<30-(2*t+3*r)},this.depth)},e.prototype.find=function(e,t,r,i,n,o){if(i>=r)return this;var a=1-i%2,s=3*a+2*(1-a),u=2*a+3*(1-a),l=30-n-s,c=30-o-u,h=this.children[((e&7*a+3*(1-a)<<l)>>l)+((t&3*a+7*(1-a)<<c)>>c)*(8*a+4*(1-a))];return null==h?null:h.find(e,t,r,i+1,n+s,o+u)},e}()}).apply(null,i))||(e.exports=n)},oWCy:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("Q2wQ"),r("HZ3d"),r("2Atf"),r("qMld"),r("jBNx"),r("fb50"),r("YaB4"),r("tI6k"),r("wjMf")],void 0===(n=(function(e,t,r,i,n,o,a,s,u,l,c){Object.defineProperty(t,"__esModule",{value:!0});var h={"simple-marker":1,"picture-marker":1,text:1,"simple-line":1,"simple-fill":1,"picture-fill":1,cim:1,"web-style":1};t.computePxBuffer=function(e,t){return i(this,void 0,void 0,(function(){var i,n,s,u,l,c;return r(this,(function(r){switch(r.label){case 0:if("heatmap"===e.type)return[2,Math.round(3*e.blurRadius)];if("dot-density"===e.type)return[2,0];if("dictionary"===e.type)return"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?[2,100]:[2,50];for(i=e.getSymbols(),n=function(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var t=e.getVisualVariablesForType("size");if(!t[0])return 0;var r=t[0];return"stops"===r.transformationType?r.stops.map((function(e){return e.size})).reduce(m,0):"clamped-linear"===r.transformationType?"number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map((function(e){return e.size})).reduce(m,0):"real-world-size"===r.transformationType?30:void 0}(e),s=[],u=0,l=i;u<l.length;u++)s.push(v(l[u],n));return[4,o.all(s)];case 1:return c=r.sent(),[2,a.pt2px(c.reduce(m,0))]}}))}))};var d=[0,0,0,0];function f(e,t){return null==e?t:e}function p(e,t){return null==e.outline?t:f(e.outline.width,t)}var g={sdf:!0,code:99,metrics:l.AVERAGE_GLYPH_MOSAIC_ITEM.metrics,rect:new s.default(0,0,24,24),page:0,textureBinding:2};function y(e,t){return i(this,void 0,void 0,(function(){var i,o,a,s,l,h,v,m,b,x,S,I;return r(this,(function(r){switch(r.label){case 0:return"simple-marker"===e.type?(i=Math.max(f(e.size,12),t),[2,_(e)+.707*i]):"picture-marker"===e.type?(o=Math.max(f(e.height,12),t),a=f(e.width,12)*(o/f(e.height,12)),s=a/2,l=o/2,[2,_(e)+Math.sqrt(s*s+l*l)]):"text"===e.type?(h=function(e){var t=e.text&&e.text.length;if(!t)return{glyphMosaicItems:[g]};for(var r=[],i=0;i<t;i++)r.push(n({},g,{code:e.text.charCodeAt(i)}));return{glyphMosaicItems:r}}(e),c.getTextSymbolSize(d,e,h),v=Math.abs(d[0]),m=Math.abs(d[1]),b=d[2],x=d[3],[2,Math.max(v,m)+Math.max(b,x)]):"simple-line"===e.type?[2,Math.max(f(e.width,.75),t)/2]:"simple-fill"===e.type||"picture-fill"===e.type?[2,Math.max(p(e,0),t)/2]:"cim"===e.type?(S=u.CIMSymbolHelper.getEnvelope(e.data))?[2,Math.sqrt(S.width*S.width+S.height*S.height)]:[2,0]:"web-style"!==e.type?[3,2]:(I=y,[4,e.fetchCIMSymbol()]);case 1:return[2,I.apply(void 0,[r.sent(),t])];case 2:return[2,0]}}))}))}function v(e,t){return i(this,void 0,void 0,(function(){var i,n;return r(this,(function(r){switch(r.label){case 0:return function(e){return e.type in h}(e)?(n=(i=Math).min,[4,y(e,t)]):[2,0];case 1:return[2,n.apply(i,[r.sent(),75])]}}))}))}function _(e){var t=f(e.xoffset,0),r=f(e.yoffset,0);return Math.sqrt(t*t+r*r)}function m(e,t){return Math.max(e,t)}}).apply(null,i))||(e.exports=n)}}]);