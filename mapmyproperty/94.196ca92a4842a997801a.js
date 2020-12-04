(function(){var e={"arcgis-js-api/arcade/functions/featuresetbase":"1+78"},t=this||window,n=t.webpackJsonp=t.webpackJsonp||[];n.registerAbsMids?n.registerAbsMids(e):(n.absMidsWaiting=n.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"1+78":function(e,t,n){var r,a;r=[n.dj.c(e.i),t,n("rChG"),n("B2KM"),n("B2KM"),n("T8lH"),n("1FvL"),n("eLe6"),n("gfOZ"),n("gub2"),n("ufnL"),n("G0SM"),n("ijuC"),n("20W2"),n("bBZx"),n("+nnH"),n("tq6K"),n("SqzB"),n("lT9l"),n("qMld"),n("1eyA"),n("Zvuv"),n("KQcO")],void 0===(a=(function(e,t,n,r,a,i,l,s,o,u,f,d,c,p,m,g,h,y,F,v,S,I,E){"use strict";function A(e,t,n){var r=e.getVariables();if(r.length>0){for(var a=[],i=0;i<r.length;i++)a.push(t.evaluateIdentifier(n,{name:r[i]}));return v.all(a).then((function(t){for(var n={},a=0;a<r.length;a++)n[r[a]]=t[a];return e.parameters=n,e}))}return v.resolve(e)}function b(e,t,n){for(var r in void 0===n&&(n=null),e)if(r.toLowerCase()===t.toLowerCase())return e[r];return n}function w(e){if(null===e)return null;var t={type:b(e,"type",""),name:b(e,"name","")};if("range"===t.type)t.range=b(e,"range",[]);else{t.codedValues=[];for(var n=0,r=b(e,"codedValues",[]);n<r.length;n++){var a=r[n];t.codedValues.push({name:b(a,"name",""),code:b(a,"code",null)})}}return t}function D(e){if(null===e)return null;var t={},n=b(e,"wkt",null);null!==n&&(t.wkt=n);var r=b(e,"wkid",null);return null!==r&&(t.wkid=r),t}function x(e){if(null===e)return null;var t={hasZ:b(e,"hasz",!1),hasM:b(e,"hasm",!1)},n=b(e,"spatialreference",null);n&&(t.spatialReference=D(n));var r=b(e,"x",null);if(null!==r)return t.x=r,t.y=b(e,"y",null),t;var a=b(e,"rings",null);if(null!==a)return t.rings=a,t;var i=b(e,"paths",null);if(null!==i)return t.paths=i,t;var l=b(e,"points",null);if(null!==l)return t.points=l,t;for(var s=0,o=["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"];s<o.length;s++){var u=o[s],f=b(e,u,null);null!==f&&(t[u]=f)}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=void 0,t.registerFunctions=function(e){"async"===e.mode&&(e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(o.pcCheck(n,2,4),n[0]instanceof l){var r=o.toString(n[1]),a=o.defaultUndefined(n[2],null),i=o.toBoolean(o.defaultUndefined(n[3],!0));if(null===a&&(a=["*"]),!1===o.isArray(a))throw new Error("Invalid Parameter");return n[0].featureSetById(r,i,a)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),e.functions.featuresetbyportalitem=function(t,r){return e.standardFunctionAsync(t,r,(function(e,r,a){if(o.pcCheck(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof n){var i=o.toString(a[1]),l=o.toString(a[2]),u=o.defaultUndefined(a[3],null),f=o.toBoolean(o.defaultUndefined(a[4],!0));if(null===u&&(u=["*"]),!1===o.isArray(u))throw new Error("Invalid Parameter");var d=null;return t.services&&t.services.portal&&(d=t.services.portal),d=s.getPortal(a[0],d),s.constructFeatureSetFromPortalItem(i,l,t.spatialReference,u,f,d,t.lrucache)}if(!1===o.isString(a[0]))throw new Error("Portal is required");var c=o.toString(a[0]),p=o.toString(a[1]),m=o.defaultUndefined(a[2],null),g=o.toBoolean(o.defaultUndefined(a[3],!0));if(null===m&&(m=["*"]),!1===o.isArray(m))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return s.constructFeatureSetFromPortalItem(c,p,t.spatialReference,m,g,t.services.portal,t.lrucache);throw new Error("Portal is required")}))},e.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(o.pcCheck(n,2,4),n[0]instanceof l){var r=o.toString(n[1]),a=o.defaultUndefined(n[2],null),i=o.toBoolean(o.defaultUndefined(n[3],!0));if(null===a&&(a=["*"]),!1===o.isArray(a))throw new Error("Invalid Parameter");return n[0].featureSetByName(r,i,a)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,(function(e,n,a){o.pcCheck(a,1,1);var i,l=a[0],s={layerDefinition:{geometryType:"",objectIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(o.isString(l))void 0!==(l=JSON.parse(l)).layerDefinition?(s.layerDefinition=l.layerDefinition,s.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(s.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(s.featureSet.features=l.features,s.featureSet.geometryType=l.geometryType,s.layerDefinition.geometryType=s.featureSet.geometryType,s.layerDefinition.objectIdField=l.objectIdFieldName,s.layerDefinition.typeIdField=l.typeIdFieldName,s.layerDefinition.fields=l.fields,l.spatialReference&&(s.layerDefinition.spatialReference=l.spatialReference));else{if(!(a[0]instanceof r))throw new Error("Invalid Parameter");var u=b(l=JSON.parse(a[0].castToText()),"layerdefinition");if(null!==u){s.layerDefinition.geometryType=b(u,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.objectIdField=b(u,"objectidfield",""),s.layerDefinition.typeIdField=b(u,"typeidfield",""),(A=b(u,"spatialreference",null))&&(s.layerDefinition.spatialReference=D(A));for(var f=0,d=b(u,"fields",[]);f<d.length;f++){var c={name:b(L=d[f],"name",""),alias:b(L,"alias",""),type:b(L,"type",""),nullable:b(L,"nullable",!0),editable:b(L,"editable",!0),length:b(L,"length",null),domain:w(b(L,"domain"))};s.layerDefinition.fields.push(c)}var p=b(l,"featureset",null);if(p){for(var g={},h=0,y=s.layerDefinition.fields;h<y.length;h++)g[(E=y[h]).name.toLowerCase()]=E.name;for(var F=0,v=b(p,"features",[]);F<v.length;F++){var S={},I=b(O=v[F],"attributes",{});for(var E in I)S[g[E.toLowerCase()]]=I[E];s.featureSet.features.push({attributes:S,geometry:x(b(O,"geometry",null))})}}}else{var A;s.layerDefinition.geometryType=b(l,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.objectIdField=b(l,"objectidfieldname",""),s.layerDefinition.typeIdField=b(l,"typeidfieldname",""),(A=b(l,"spatialreference",null))&&(s.layerDefinition.spatialReference=D(A));for(var N=0,C=b(l,"fields",[]);N<C.length;N++){var L;c={name:b(L=C[N],"name",""),alias:b(L,"alias",""),type:b(L,"type",""),nullable:b(L,"nullable",!0),editable:b(L,"editable",!0),length:b(L,"length",null),domain:w(b(L,"domain"))},s.layerDefinition.fields.push(c)}g={};for(var T=0,R=s.layerDefinition.fields;T<R.length;T++)g[(E=R[T]).name.toLowerCase()]=E.name;for(var k=0,M=b(l,"features",[]);k<M.length;k++){var O;for(var E in S={},I=b(O=M[k],"attributes",{}))S[g[E.toLowerCase()]]=I[E];s.featureSet.features.push({attributes:S,geometry:x(b(O,"geometry",null))})}}}if(0==(!!(i=s).layerDefinition&&!!i.featureSet&&!1!==function(e,t){for(var n=0,r=["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"];n<r.length;n++)if(r[n]===e)return!0;return!1}(i.layerDefinition.geometryType)&&null!==i.layerDefinition.objectIdField&&""!==i.layerDefinition.objectIdField&&!1!==o.isArray(i.layerDefinition.fields)&&!1!==o.isArray(i.featureSet.features)))throw new Error("Invalid Parameter");return m.create(s,t.spatialReference)}))},e.signatures.push({name:"featureset",min:"1",max:"1"}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(function(n,r,a){return o.pcCheck(a,2,2),o.isFeatureSet(a[0])?a[0].load().then((function(n){var r=S.WhereClause.create(a[1],n.getFieldsIndex()),i=r.getVariables();if(i.length>0){for(var l=[],s=0;s<i.length;s++)l.push(e.evaluateIdentifier(t,{name:i[s]}));return v.all(l).then((function(e){for(var t={},n=0;n<i.length;n++)t[i[n]]=e[n];return r.parameters=t,new f({parentfeatureset:a[0],whereclause:r})}))}return v.resolve(new f({parentfeatureset:a[0],whereclause:r}))})):e.failDefferred("Filter cannot accept this parameter type")}))},e.signatures.push({name:"filter",min:"2",max:"2"}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(function(t,n,r){if(o.pcCheck(r,2,2),o.isFeatureSet(r[0])){var a=new g(r[1]);return v.resolve(new d({parentfeatureset:r[0],orderbyclause:a}))}return e.failDefferred("Order cannot accept this parameter type")}))},e.signatures.push({name:"orderby",min:"2",max:"2"}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(function(t,n,r){return o.pcCheck(r,2,2),o.isFeatureSet(r[0])?v.resolve(new c({parentfeatureset:r[0],topnum:r[1]})):o.isArray(r[0])?o.toNumber(r[1])>=r[0].length?r[0].slice(0):r[0].slice(0,o.toNumber(r[1])):o.isImmutableArray(r[0])?o.toNumber(r[1])>=r[0].length()?r[0].slice(0):r[0].slice(0,o.toNumber(r[1])):e.failDefferred("Top cannot accept this parameter type")}))},e.signatures.push({name:"top",min:"2",max:"2"}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return o.pcCheck(n,1,1),o.isFeatureSet(n[0])?n[0].first(e.abortSignal).then((function(e){if(null!==e){var t=i.createFromGraphicLikeObject(e.geometry,e.attributes,n[0]);t._underlyingGraphic=e,e=t}return e})):o.isArray(n[0])?v.resolve(0===n[0].length?null:n[0][0]):o.isImmutableArray(n[0])?0===n[0].length()?v.resolve(null):v.resolve(n[0].get(0)):null}))},e.signatures.push({name:"first",min:"1",max:"1"}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,a){o.pcCheck(a,1,2);var l={minsize:-1,maxsize:-1,types:null};if(a.length>1)if(a[1]instanceof r){if(a[1].hasField("minsize")&&(l.minsize=o.toNumber(a[1].field("minsize"))),a[1].hasField("maxsize")&&(l.maxsize=o.toNumber(a[1].field("maxsize"))),a[1].hasField("types")){var u=o.toStringArray(a[1].field("types"),!1);u.length>0&&(l.types=u)}}else if(null!==a[1])throw new Error("Invalid Parameter");if(a[0]instanceof i){var f=a[0]._layer;return f instanceof I&&(f=s.constructFeatureSet(f,t.spatialReference,["*"],!0,t.lrucache)),null===f||!1===o.isFeatureSet(f)?[]:f.load().then((function(){return f.queryAttachments(a[0].field(f.objectIdField),l.minsize,l.maxsize,l.types)}))}if(null===a[0])return[];throw new Error("Invalid Parameter")}))},e.signatures.push({name:"attachments",min:"1",max:"2"}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){o.pcCheck(r,2,4);var a=r[0],l=o.toString(r[1]),u=o.defaultUndefined(r[2],null),f=o.toBoolean(o.defaultUndefined(r[3],!0));if(null===u&&(u=["*"]),!1===o.isArray(u))throw new Error("Invalid Parameter");if(null===r[0])return null;if(!(r[0]instanceof i))throw new Error("Invalid Parameter");var d=a._layer;return d instanceof I&&(d=s.constructFeatureSet(d,t.spatialReference,["*"],!0,t.lrucache)),null===d||!1===o.isFeatureSet(d)?null:d.load().then((function(e){var n=e.relationshipMetaData().filter((function(e){return e.name===l}));if(0===n.length)return null;if(null!=n[0].relationshipTableId&&n[0].relationshipTableId>-1)return s.constructFeatureSetFromRelationship(e,n[0],a.field(e.objectIdField),e.spatialReference,u,f,t.lrucache);var r=e.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+n[0].relatedTableId.toString():r+"/"+n[0].relatedTableId.toString(),s.constructFeatureSetFromUrl(r,e.spatialReference,u,f,t.lrucache).then((function(t){return t.load().then((function(){return t.relationshipMetaData()})).then((function(r){if(r=r.filter((function(e){return e.id===n[0].id})),!1===a.hasField(n[0].keyField)||null===a.field(n[0].keyField))return e.getFeatureByObjectId(a.field(e.objectIdField),[n[0].keyField]).then((function(e){if(e){var a=S.WhereClause.create(r[0].keyField+"= @id",t.getFieldsIndex());return a.parameters={id:e.attributes[n[0].keyField]},t.filter(a)}return new p({parentfeatureset:t})}));var i=S.WhereClause.create(r[0].keyField+"= @id",t.getFieldsIndex());return i.parameters={id:a.field(n[0].keyField)},t.filter(i)}))}))):null}))}))},e.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){o.pcCheck(r,2,3);var a=r[0],l=o.toString(o.defaultUndefined(r[1],"")).toLowerCase(),f=o.isString(r[2])?o.toString(r[2]):null;if(null===r[0])return null;if(!(r[0]instanceof i))throw new Error("Invalid Parameter");var d=a._layer;return d instanceof I&&(d=s.constructFeatureSet(d,t.spatialReference,["*"],!0,t.lrucache)),null===d||!1===o.isFeatureSet(d)?null:d.load().then((function(){var e=d.serviceUrl();return s.constructAssociationMetaDataFeatureSetFromUrl(e,t.spatialReference)})).then((function(e){var t=null,n=null,r=!1;if(null!==f&&""!==f&&void 0!==f){for(var i=0,s=e.terminals;i<s.length;i++){var c=s[i];c.terminalName===f&&(n=c.terminalId)}null===n&&(r=!0)}for(var p=e.associations.getFieldsIndex(),m=p.get("TOGLOBALID").name,g=p.get("FROMGLOBALID").name,y=p.get("TOTERMINALID").name,F=p.get("FROMTERMINALID").name,v=p.get("FROMNETWORKSOURCEID").name,I=p.get("TONETWORKSOURCEID").name,A=p.get("ASSOCIATIONTYPE").name,b=p.get("ISCONTENTVISIBLE").name,w=p.get("OBJECTID").name,D=0,x=d.fields;D<x.length;D++){var N=x[D];if("global-id"===N.type){t=a.field(N.name);break}}var C=null,L=new u.SqlExpressionAdapted(new E({name:"percentalong",alias:"percentalong",type:"double"}),S.WhereClause.create("0",e.associations.getFieldsIndex())),T=new u.SqlExpressionAdapted(new E({name:"side",alias:"side",type:"string"}),S.WhereClause.create("''",e.associations.getFieldsIndex())),R={};for(var k in e.lkp)R[k]=e.lkp[k].sourceId;var M=new u.StringToCodeAdapted(new E({name:"classname",alias:"classname",type:"string"}),null,R),O="";switch(l){case"midspan":O="(("+m+"='"+t+"') OR ( "+g+"='"+t+"')) AND ("+A+" IN (5))",M.codefield=S.WhereClause.create("CASE WHEN ("+m+"='"+t+"') THEN "+v+" ELSE "+I+" END",e.associations.getFieldsIndex());var W=h.cloneField(u.AdaptedFeatureSet.findField(e.associations.fields,g));W.name="globalid",W.alias="globalid",C=new u.SqlExpressionAdapted(W,S.WhereClause.create("CASE WHEN ("+g+"='"+t+"') THEN "+m+" ELSE "+g+" END",e.associations.getFieldsIndex())),L=e.unVersion>=4?new u.OriginalField(u.AdaptedFeatureSet.findField(e.associations.fields,p.get("PERCENTALONG").name)):new u.SqlExpressionAdapted(new E({name:"percentalong",alias:"percentalong",type:"double"}),S.WhereClause.create("0",e.associations.getFieldsIndex()));break;case"junctionedge":O="(("+m+"='"+t+"') OR ( "+g+"='"+t+"')) AND ("+A+" IN (4,6))",M.codefield=S.WhereClause.create("CASE WHEN ("+m+"='"+t+"') THEN "+v+" ELSE "+I+" END",e.associations.getFieldsIndex());var B=h.cloneField(u.AdaptedFeatureSet.findField(e.associations.fields,g));B.name="globalid",B.alias="globalid",C=new u.SqlExpressionAdapted(B,S.WhereClause.create("CASE WHEN ("+g+"='"+t+"') THEN "+m+" ELSE "+g+" END",e.associations.getFieldsIndex())),T=new u.SqlExpressionAdapted(new E({name:"side",alias:"side",type:"string"}),S.WhereClause.create("CASE WHEN ("+A+"=4) THEN 'from' ELSE 'to' END",e.associations.getFieldsIndex()));break;case"connected":var P=m+"='@T'",G=g+"='@T'";null!==n&&(P+=" AND "+y+"=@A",G+=" AND "+F+"=@A"),O=o.multiReplace(O="(("+P+") OR ("+G+"))","@T",t),P=o.multiReplace(P,"@T",t),null!==n&&(P=o.multiReplace(P,"@A",n.toString()),O=o.multiReplace(O,"@A",n.toString())),M.codefield=S.WhereClause.create("CASE WHEN "+P+" THEN "+v+" ELSE "+I+" END",e.associations.getFieldsIndex());var j=h.cloneField(u.AdaptedFeatureSet.findField(e.associations.fields,g));j.name="globalid",j.alias="globalid",C=new u.SqlExpressionAdapted(j,S.WhereClause.create("CASE WHEN "+P+" THEN "+g+" ELSE "+m+" END",e.associations.getFieldsIndex()));break;case"container":O=m+"='"+t+"' AND "+A+" = 2",null!==n&&(O+=" AND "+y+" = "+n.toString()),M.codefield=v,O="( "+O+" )",C=new u.FieldRename(u.AdaptedFeatureSet.findField(e.associations.fields,g),"globalid","globalid");case"content":O="("+g+"='"+t+"' AND "+A+" = 2)",null!==n&&(O+=" AND "+F+" = "+n.toString()),M.codefield=I,O="( "+O+" )",C=new u.FieldRename(u.AdaptedFeatureSet.findField(e.associations.fields,m),"globalid","globalid");break;case"structure":O="("+m+"='"+t+"' AND "+A+" = 3)",null!==n&&(O+=" AND "+y+" = "+n.toString()),M.codefield=v,O="( "+O+" )",C=new u.FieldRename(u.AdaptedFeatureSet.findField(e.associations.fields,g),"globalid","globalId");break;case"attached":O="("+g+"='"+t+"' AND "+A+" = 3)",null!==n&&(O+=" AND "+F+" = "+n.toString()),M.codefield=I,O="( "+O+" )",C=new u.FieldRename(u.AdaptedFeatureSet.findField(e.associations.fields,m),"globalid","globalId");break;default:throw new Error("Invalid Parameter")}return r&&(O="1 <> 1"),new u.AdaptedFeatureSet({parentfeatureset:e.associations,adaptedFields:[new u.OriginalField(u.AdaptedFeatureSet.findField(e.associations.fields,w)),new u.OriginalField(u.AdaptedFeatureSet.findField(e.associations.fields,b)),C,T,M,L],extraFilter:O?S.WhereClause.create(O,e.associations.getFieldsIndex()):null})}))}))},e.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(function(n,r,i){return o.pcCheck(i,3,3),o.isFeatureSet(i[0])?i[0].load().then((function(n){var r=[],l=[],s=!1,u=[];if(o.isString(i[1]))u.push(i[1]);else if(i[1]instanceof a)u.push(i[1]);else if(o.isArray(i[1]))u=i[1];else{if(!o.isImmutableArray(i[1]))return e.failDefferred("Illegal Value: GroupBy");u=i[1].toArray()}for(var f=0,d=u;f<d.length;f++){var c=d[f];if(o.isString(c)){var p=S.WhereClause.create(o.toString(c),n.getFieldsIndex()),m=!0===y.isSingleField(p)?o.toString(c):"%%%%FIELDNAME";r.push({name:m,expression:p}),"%%%%FIELDNAME"===m&&(s=!0)}else{if(!(c instanceof a))return e.failDefferred("Illegal Value: GroupBy");var g=c.hasField("name")?c.field("name"):"%%%%FIELDNAME";if(p=c.hasField("expression")?c.field("expression"):"","%%%%FIELDNAME"===g&&(s=!0),!g)return e.failDefferred("Illegal Value: GroupBy");r.push({name:g,expression:S.WhereClause.create(p||g,n.getFieldsIndex())})}}if(u=[],o.isString(i[2]))u.push(i[2]);else if(o.isArray(i[2]))u=i[2];else if(o.isImmutableArray(i[2]))u=i[2].toArray();else{if(!(i[2]instanceof a))return e.failDefferred("Illegal Value: GroupBy");u.push(i[2])}for(var h=0,F=u;h<F.length;h++){if(!((c=F[h])instanceof a))return e.failDefferred("Illegal Value: GroupBy");var I=c.hasField("name")?c.field("name"):"",E=c.hasField("statistic")?c.field("statistic"):"";if(p=c.hasField("expression")?c.field("expression"):"",!I||!E||!p)return e.failDefferred("Illegal Value: GroupBy");l.push({name:I,statistic:E.toLowerCase(),expression:S.WhereClause.create(p,n.getFieldsIndex())})}if(s){for(var b={},w=0,D=n.fields;w<D.length;w++)b[(M=D[w]).name.toLowerCase()]=1;for(var x=0,N=r;x<N.length;x++)"%%%%FIELDNAME"!==(M=N[x]).name&&(b[M.name.toLowerCase()]=1);for(var C=0,L=l;C<L.length;C++)"%%%%FIELDNAME"!==(M=L[C]).name&&(b[M.name.toLowerCase()]=1);for(var T=0,R=0,k=r;R<k.length;R++){var M;if("%%%%FIELDNAME"===(M=k[R]).name){for(;1===b["field_"+T.toString()];)T++;b["field_"+T.toString()]=1,M.name="FIELD_"+T.toString()}}}for(var O=[],W=0,B=r;W<B.length;W++){var P=B[W];O.push(A(P.expression,e,t))}for(var G=0,j=l;G<j.length;G++)O.push(A((P=j[G]).expression,e,t));return O.length>0?v.all(O).then((function(){return v.resolve(i[0].groupby(r,l))})):v.resolve(i[0].groupby(r,l))})):e.failDefferred("Illegal Value: GroupBy")}))},e.signatures.push({name:"groupby",min:"3",max:"3"}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(function(n,r,i){return o.isFeatureSet(i[0])?(o.pcCheck(i,2,2),i[0].load().then((function(n){var r=[],l=[];if(o.isString(i[1]))l.push(i[1]);else if(i[1]instanceof a)l.push(i[1]);else if(o.isArray(i[1]))l=i[1];else{if(!o.isImmutableArray(i[1]))return e.failDefferred("Illegal Value: GroupBy");l=i[1].toArray()}for(var s=!1,u=0,f=l;u<f.length;u++){var d=f[u];if(o.isString(d)){var c=S.WhereClause.create(o.toString(d),n.getFieldsIndex()),p=!0===y.isSingleField(c)?o.toString(d):"%%%%FIELDNAME";r.push({name:p,expression:c}),"%%%%FIELDNAME"===p&&(s=!0)}else{if(!(d instanceof a))return e.failDefferred("Illegal Value: GroupBy");var m=d.hasField("name")?d.field("name"):"%%%%FIELDNAME";if(c=d.hasField("expression")?d.field("expression"):"","%%%%FIELDNAME"===m&&(s=!0),!m)return e.failDefferred("Illegal Value: GroupBy");r.push({name:m,expression:S.WhereClause.create(c||m,n.getFieldsIndex())})}}if(s){for(var g={},h=0,F=n.fields;h<F.length;h++)g[(x=F[h]).name.toLowerCase()]=1;for(var I=0,E=r;I<E.length;I++)"%%%%FIELDNAME"!==(x=E[I]).name&&(g[x.name.toLowerCase()]=1);for(var b=0,w=0,D=r;w<D.length;w++){var x;if("%%%%FIELDNAME"===(x=D[w]).name){for(;1===g["field_"+b.toString()];)b++;g["field_"+b.toString()]=1,x.name="FIELD_"+b.toString()}}}for(var N=[],C=0,L=r;C<L.length;C++)N.push(A(L[C].expression,e,t));return N.length>0?v.all(N).then((function(){return v.resolve(i[0].groupby(r,[]))})):v.resolve(i[0].groupby(r,[]))}))):function(e,t,n,r){if(1===r.length){if(o.isArray(r[0]))return F.calculateStat(e,r[0],-1);if(o.isImmutableArray(r[0]))return F.calculateStat(e,r[0].toArray(),-1)}return F.calculateStat(e,r,-1)}("distinct",0,0,i)}))})}}).apply(null,r))||(e.exports=a)}}]);