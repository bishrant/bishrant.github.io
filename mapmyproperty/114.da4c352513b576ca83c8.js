(function(){(this||window).webpackJsonp.registerAbsMids({"arcgis-js-api/arcade/arcadeAsyncRuntime":"8Des"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"8Des":function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t("rChG"),t("HKXX"),t("B2KM"),t("T8lH"),t("AxL/"),t("ABt8"),t("2CtR"),t("gfOZ"),t("sDeS"),t("/4o+"),t("G6wh"),t("CyLf"),t("sAf+"),t("hiUs"),t("9iaF"),t("qMld"),t("N7S/"),t("YADd"),t("t78F"),t("oxlp"),t("Vt+U"),t("aYWh"),t("Z4y+")],void 0===(o=(function(e,r,t,n,o,a,i,c,u,s,l,f,d,h,v,p,g,E,m,y,N,w,b,I,R){function O(e){return e instanceof Error?E.reject(e):E.reject(new Error(e))}function S(e){return E.resolve(e)}function T(e,r){for(var t=[],n=0;n<r.arguments.length;n++)t.push(F(e,r.arguments[n]));return E.all(t)}function M(e,r,t){return E.create((function(n,o){T(e,r).then((function(a){try{n(t(e,r,a))}catch(e){o(e)}}),o)}))}function A(e,r,t){try{return T(e,r).then((function(n){try{var o=t(e,r,n);return function(e){return e&&"function"==typeof e.then}(o)?o:E.resolve(o)}catch(e){return O(e)}}))}catch(e){return O(e)}}function F(e,r){try{switch(r.type){case"VariableDeclarator":return function(e,r){try{return(null===r.init?E.resolve(null):F(e,r.init)).then(null!==e.localScope?function(t){return E.create((function(n,o){if(t===s.voidOperation&&(t=null),"Identifier"!==r.id.type)throw new Error("Can only assign a regular variable");var a=r.id.name.toLowerCase();e.localScope[a]={value:t,valueset:!0,node:r.init},n(s.voidOperation)}))}:function(t){return E.create((function(n,o){if("Identifier"!==r.id.type)throw new Error("Can only assign a regular variable");var a=r.id.name.toLowerCase();t===s.voidOperation&&(t=null),e.globalScope[a]={value:t,valueset:!0,node:r.init},n(s.voidOperation)}))})}catch(e){return O(e)}}(e,r);case"VariableDeclaration":return function e(r,t,n){return E.create((function(o,a){n>=t.declarations.length?o(s.voidOperation):F(r,t.declarations[n]).then((function(i){n===t.declarations.length-1?o(s.voidOperation):e(r,t,n+1).then((function(e){o(s.voidOperation)}),a)}),a)}))}(e,r,0);case"BlockStatement":return function(e,r){try{return function e(r,t,n){try{return n>=t.body.length?E.resolve(s.voidOperation):E.create((function(o,a){F(r,t.body[n]).then((function(i){try{i instanceof s.ReturnResult||i===s.breakResult||i===s.continueResult?o(i):n===t.body.length-1?o(i):e(r,t,n+1).then(o,a)}catch(r){a(r)}}),a)}))}catch(r){return O(r)}}(e,r,0)}catch(e){return O(e)}}(e,r);case"FunctionDeclaration":return function(e,r){try{var t=r.id.name.toLowerCase();return e.globalScope[t]={valueset:!0,node:null,value:new i(r,e)},E.resolve(s.voidOperation)}catch(e){return O(e)}}(e,r);case"ReturnStatement":return function(e,r){return E.create((function(t,n){null===r.argument?t(new s.ReturnResult(s.voidOperation)):F(e,r.argument).then((function(e){try{t(new s.ReturnResult(e))}catch(e){n(e)}}),n)}))}(e,r);case"IfStatement":return function(e,r){return E.create((function(t,n){"AssignmentExpression"!==r.test.type&&"UpdateExpression"!==r.test.type?F(e,r.test).then((function(o){try{!0===o?F(e,r.consequent).then(t,n):!1===o?null!==r.alternate?F(e,r.alternate).then(t,n):t(s.voidOperation):n(new Error(l.nodeErrorMessage(r.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(e){n(e)}}),n):n(new Error(l.nodeErrorMessage(r.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,r);case"ExpressionStatement":return function(e,r){try{return"AssignmentExpression"===r.expression.type?F(e,r.expression):F(e,r.expression).then((function(e){return E.create((function(r,t){r(e===s.voidOperation?s.voidOperation:new s.ImplicitResult(e))}))}))}catch(e){return E.reject(e)}}(e,r);case"UpdateExpression":return function(e,r){try{var t=r.argument;if("MemberExpression"===t.type){var n={t:null};return F(e,t.object).then((function(r){var o=null;return n.t=r,!0===t.computed?o=F(e,t.property):"Identifier"===t.property.type&&(o=E.resolve(t.property.name)),o})).then((function(e){return E.create((function(t,i){var c,u=n.t;if(s.isArray(u)){if(!s.isNumber(e))throw new Error("Invalid Parameter");if(e<0&&(e=u.length+e),e<0||e>=u.length)throw new Error("Assignment outside of array bounds");c=s.toNumber(u[e]),u[e]="++"===r.operator?c+1:c-1}else if(u instanceof o){if(!1===s.isString(e))throw new Error("Dictionary accessor must be a string");if(!0!==u.hasField(e))throw new Error("Invalid Parameter");c=s.toNumber(u.field(e)),u.setField(e,"++"===r.operator?c+1:c-1)}else{if(!(u instanceof a))throw s.isImmutableArray(u)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===s.isString(e))throw new Error("Feature accessor must be a string");if(!0!==u.hasField(e))throw new Error("Invalid Parameter");c=s.toNumber(u.field(e)),u.setField(e,"++"===r.operator?c+1:c-1)}t(!1===r.prefix?c:"++"===r.operator?c+1:c-1)}))}))}return E.create((function(t,n){var o,a="Identifier"===r.argument.type?r.argument.name.toLowerCase():"";if(!a)throw new Error("Invalid identifier");return null!==e.localScope&&void 0!==e.localScope[a]?(o=s.toNumber(e.localScope[a].value),e.localScope[a]={value:"++"===r.operator?o+1:o-1,valueset:!0,node:r},void t(!1===r.prefix?o:"++"===r.operator?o+1:o-1)):void 0!==e.globalScope[a]?(o=s.toNumber(e.globalScope[a].value),e.globalScope[a]={value:"++"===r.operator?o+1:o-1,valueset:!0,node:r},void t(!1===r.prefix?o:"++"===r.operator?o+1:o-1)):void n(new Error("Variable not recognised"))}))}catch(e){return E.reject(e)}}(e,r);case"AssignmentExpression":return function(e,r){return E.create((function(t,n){var i=r.left;if("MemberExpression"===i.type)F(e,r.right).then((function(c){try{F(e,i.object).then((function(u){try{var l=null;if(!0===i.computed)l=F(e,i.property);else{if("Identifier"!==i.property.type)throw new Error("Expected computed or identifier for assignemnt target");l=E.resolve(i.property.name)}l.then((function(e){try{if(s.isArray(u)){if(!s.isNumber(e))throw new Error("Invalid Parameter");if(e<0&&(e=u.length+e),e<0||e>u.length)throw new Error("Assignment outside of array bounds");if(e===u.length){if("="!==r.operator)throw new Error("Invalid Parameter");u[e]=D(c,r.operator,u[e],r)}else u[e]=D(c,r.operator,u[e],r)}else if(u instanceof o){if(!1===s.isString(e))throw new Error("Dictionary accessor must be a string");if(!0===u.hasField(e))u.setField(e,D(c,r.operator,u.field(e),r));else{if("="!==r.operator)throw new Error("Invalid Parameter");u.setField(e,D(c,r.operator,null,r))}}else{if(!(u instanceof a))throw s.isImmutableArray(u)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===s.isString(e))throw new Error("Feature accessor must be a string");if(!0===u.hasField(e))u.setField(e,D(c,r.operator,u.field(e),r));else{if("="!==r.operator)throw new Error("Invalid Parameter");u.setField(e,D(c,r.operator,null,r))}}t(s.voidOperation)}catch(e){n(e)}}),n)}catch(e){n(e)}}),n)}catch(e){n(e)}}),n);else{var c=i.name.toLowerCase();null!==e.localScope&&void 0!==e.localScope[c]&&F(e,r.right).then((function(o){try{e.localScope[c]={value:D(o,r.operator,e.localScope[c].value,r),valueset:!0,node:r.right},t(s.voidOperation)}catch(e){n(e)}}),n),void 0!==e.globalScope[c]?F(e,r.right).then((function(o){try{e.globalScope[c]={value:D(o,r.operator,e.globalScope[c].value,r),valueset:!0,node:r.right},t(s.voidOperation)}catch(e){n(e)}}),n):n(new Error("Cannot assign undeclared variable"))}}))}(e,r);case"ForStatement":return function(e,r){try{return null!==r.init?F(e,r.init).then((function(){return E.create((function(t,n){U(e,r,{testResult:!0,lastAction:s.voidOperation},(function(e){t(e)}),(function(e){n(e)}),0)}))})):E.create((function(t,n){U(e,r,{testResult:!0,lastAction:s.voidOperation},(function(e){t(e)}),(function(e){n(e)}),0)}))}catch(e){return E.reject(e)}}(e,r);case"ForInStatement":return function(e,r){return E.create((function(t,n){F(e,r.right).then((function(i){try{("VariableDeclaration"===r.left.type?F(e,r.left):E.resolve()).then((function(){try{var c="";if("VariableDeclaration"===r.left.type){var u=r.left.declarations[0].id;"Identifier"===u.type&&(c=u.name)}else"Identifier"===r.left.type&&(c=r.left.name);if(!c)throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDVARIABLE"));c=c.toLowerCase();var f=null;if(null!==e.localScope&&void 0!==e.localScope[c]&&(f=e.localScope[c]),null===f&&void 0!==e.globalScope[c]&&(f=e.globalScope[c]),null===f)return void n(new Error(l.nodeErrorMessage(r,"RUNTIME","VARIABLENOTDECLARED")));s.isArray(i)||s.isString(i)?x(e,r,i,{reject:n,resolve:t},f):s.isImmutableArray(i)?function(e,r,t,n,o,a){try{if(void 0===a&&(a="i"),0===t.length)return void n.resolve(s.voidOperation);!function e(r,t,n,o,a,i,c,u,l){try{if(n.length()<=a)return void c(s.voidOperation);o.value="k"===i?n.get(a):a,F(r,t.body).then((function(f){f instanceof s.ReturnResult?c(f):f===s.breakResult?c(s.voidOperation):++l>G?(l=0,setTimeout((function(){e(r,t,n,o,a+1,i,(function(e){c(e)}),(function(e){u(e)}),l)}))):e(r,t,n,o,a+1,i,(function(e){c(e)}),(function(e){u(e)}),l)}),(function(e){u(e)}))}catch(r){u(r)}}(e,r,t,o,0,a,(function(e){n.resolve(e)}),(function(e){n.reject(e)}),0)}catch(e){n.reject(e)}}(e,r,i,{reject:n,resolve:t},f):i instanceof o||i instanceof a?function(e,r,t,n,o){try{x(e,r,t.keys(),n,o,"k")}catch(e){n.reject(e)}}(e,r,i,{reject:n,resolve:t},f):s.isFeatureSet(i)?function e(r,t,n,o,i,c,u,l){try{r.next().then((function(f){try{if(null===f)c(s.voidOperation);else{var d=a.createFromGraphicLikeObject(f.geometry,f.attributes,o);d._underlyingGraphic=f,i.value=d,F(t,n.body).then((function(a){try{a===s.breakResult?c(s.voidOperation):a instanceof s.ReturnResult?c(a):++l>G?(l=0,setTimeout((function(){e(r,t,n,o,i,(function(e){c(e)}),(function(e){u(e)}),l)}))):e(r,t,n,o,i,(function(e){c(e)}),(function(e){u(e)}),l)}catch(r){u(r)}}),(function(e){u(e)}))}}catch(r){u(r)}}),(function(e){u(e)}))}catch(r){u(r)}}(i.iterator(e.abortSignal),e,r,i,f,(function(e){t(e)}),(function(e){n(e)}),0):x(e,r,[],{reject:n,resolve:t},f)}catch(e){n(e)}}),n)}catch(e){n(e)}}),n)}))}(e,r);case"BreakStatement":return E.resolve(s.breakResult);case"EmptyStatement":return E.resolve(s.voidOperation);case"ContinueStatement":return E.resolve(s.continueResult);case"Identifier":return k(e,r);case"MemberExpression":return function(e,r){try{return F(e,r.object).then((function(t){try{return null===t?E.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","NOTFOUND"))):!1===r.computed?"Identifier"===r.property.type?t instanceof o||t instanceof a?E.resolve(t.field(r.property.name)):t instanceof y?E.resolve(P(t,r.property.name,0,r)):E.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))):E.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))):F(e,r.property).then((function(e){return E.create((function(n,i){if(t instanceof o||t instanceof a)s.isString(e)?n(t.field(e)):i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(t instanceof y)s.isString(e)?n(P(t,e,0,r)):i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(s.isArray(t))if(s.isNumber(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=t.length+e),e>=t.length||e<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));n(t[e])}else i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(s.isImmutableArray(t))if(s.isNumber(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=t.length()+e),e>=t.length()||e<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));n(t.get(e))}else i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(s.isString(t))if(s.isNumber(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=t.length+e),e>=t.length||e<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));n(t[e])}else i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")))}))}))}catch(e){return O(e)}}))}catch(e){return O(e)}}(e,r);case"Literal":return S(r.value);case"CallExpression":return function(e,r){try{return"Identifier"!==r.callee.type?O(l.nodeErrorMessage(r,"RUNTIME","ONLYNODESSUPPORTED")):null!==e.localScope&&void 0!==e.localScope[r.callee.name.toLowerCase()]?(t=e.localScope[r.callee.name.toLowerCase()]).value instanceof s.NativeFunction?t.value.fn(e,r):t.value instanceof i?B(e,r,t.value.definition):O(l.nodeErrorMessage(r,"RUNTIME","NOTAFUNCTION")):void 0!==e.globalScope[r.callee.name.toLowerCase()]?(t=e.globalScope[r.callee.name.toLowerCase()]).value instanceof s.NativeFunction?t.value.fn(e,r):t.value instanceof i?B(e,r,t.value.definition):O(l.nodeErrorMessage(r,"RUNTIME","NOTAFUNCTION")):O(l.nodeErrorMessage(r,"RUNTIME","NOTFOUND"));var t}catch(e){return O(e)}}(e,r);case"UnaryExpression":return function(e,r){try{return F(e,r.argument).then((function(e){return E.create((function(t,n){s.isBoolean(e)&&"!"===r.operator?t(!e):"-"===r.operator?t(-1*s.toNumber(e)):"+"===r.operator?t(1*s.toNumber(e)):n(new Error(l.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))}))}))}catch(e){return O(e)}}(e,r);case"BinaryExpression":return function(e,r){try{return E.all([F(e,r.left),F(e,r.right)]).then((function(e){return E.create((function(t,n){var o=e[0],a=e[1];switch(r.operator){case"==":t(s.equalityTest(o,a));break;case"!=":t(!s.equalityTest(o,a));break;case"<":case">":case"<=":case">=":t(s.greaterThanLessThan(o,a,r.operator));break;case"+":t(s.isString(o)||s.isString(a)?s.toString(o)+s.toString(a):s.toNumber(o)+s.toNumber(a));break;case"-":t(s.toNumber(o)-s.toNumber(a));break;case"*":t(s.toNumber(o)*s.toNumber(a));break;case"/":t(s.toNumber(o)/s.toNumber(a));break;case"%":t(s.toNumber(o)%s.toNumber(a));break;default:n(new Error(l.nodeErrorMessage(r,"RUNTIME","OPERATORNOTRECOGNISED")))}}))}))}catch(e){return O(e)}}(e,r);case"LogicalExpression":return function(e,r){return E.create((function(t,n){return"AssignmentExpression"===r.left.type||"UpdateExpression"===r.left.type?void n(new Error(l.nodeErrorMessage(r.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):"AssignmentExpression"===r.right.type||"UpdateExpression"===r.right.type?void n(new Error(l.nodeErrorMessage(r.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):void F(e,r.left).then((function(o){try{if(!s.isBoolean(o))throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYBOOLEAN"));switch(r.operator){case"||":!0===o?t(o):F(e,r.right).then((function(e){try{if(!s.isBoolean(e))throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"));t(e)}catch(e){n(e)}}),n);break;case"&&":!1===o?t(o):F(e,r.right).then((function(e){try{if(!s.isBoolean(e))throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"));t(e)}catch(e){n(e)}}),n);break;default:throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"))}}catch(e){n(e)}}),n)}))}(e,r);case"ConditionalExpression":return O(l.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return function(e,r){try{for(var t=[],n=0;n<r.elements.length;n++)t.push(F(e,r.elements[n]));return E.all(t).then((function(e){return E.create((function(t,n){for(var o=0;o<e.length;o++){if(s.isFunctionParameter(e[o]))return void n(new Error(l.nodeErrorMessage(r,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[o]===s.voidOperation&&(e[o]=null)}t(e)}))}))}catch(e){return O(e)}}(e,r);case"ObjectExpression":return function(e,r){try{for(var t=[],n=0;n<r.properties.length;n++)t.push(F(e,r.properties[n]));return E.all(t).then((function(e){return E.create((function(r,t){for(var n={},a=0;a<e.length;a++){var i=e[a];if(s.isFunctionParameter(i.value))throw new Error("Illegal Argument");if(!1===s.isString(i.key))throw new Error("Illegal Argument");n[i.key.toString()]=i.value===s.voidOperation?null:i.value}var c=new o(n);c.immutable=!1,r(c)}))}))}catch(e){return O(e)}}(e,r);case"Property":return function(e,r){try{return F(e,r.value).then((function(t){return E.create((function(n,o){"Identifier"===r.key.type?n({key:r.key.name,value:t}):F(e,r.key).then((function(e){n({key:e,value:t})}))}))}))}catch(e){return E.reject(e)}}(e,r);default:return O(l.nodeErrorMessage(r,"RUNTIME","UNREOGNISED"))}}catch(e){return O(e)}}function C(e,r,t){try{return F(e,r.body).then((function(n){try{return t.lastAction=n,t.lastAction===s.breakResult?(t.testResult=!1,E.resolve(t)):t.lastAction instanceof s.ReturnResult?(t.testResult=!1,E.resolve(t)):null!==r.update?F(e,r.update).then((function(e){return E.resolve(t)})):E.resolve(t)}catch(e){return E.reject(e)}}))}catch(e){return E.reject(e)}}function U(e,r,t,n,o,a){try{(function(e,r,t){try{return null!==r.test?F(e,r.test).then((function(n){try{return!0===e.abortSignal.aborted?E.reject(new Error("Cancelled")):(t.testResult=n,!1===t.testResult?E.resolve(t):!0!==t.testResult?E.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):C(e,r,t))}catch(e){return E.reject(e)}})):C(e,r,t)}catch(e){return E.reject(e)}})(e,r,t).then((function(){try{!0===t.testResult?++a>G?(a=0,setTimeout((function(){U(e,r,t,(function(e){n(e)}),(function(e){o(e)}),a)}))):U(e,r,t,(function(e){n(e)}),(function(e){o(e)}),a):n(t.lastAction instanceof s.ReturnResult?t.lastAction:s.voidOperation)}catch(e){o(e)}}),(function(e){o(e)}))}catch(e){o(e)}}function x(e,r,t,n,o,a){try{if(void 0===a&&(a="i"),0===t.length)return void n.resolve(s.voidOperation);!function e(r,t,n,o,a,i,c,u,l,f){try{if(o<=i)return void u(s.voidOperation);a.value="k"===c?n[i]:i,F(r,t.body).then((function(d){try{d instanceof s.ReturnResult?u(d):d===s.breakResult?u(s.voidOperation):++f>G?(f=0,setTimeout((function(){e(r,t,n,o,a,i+1,c,(function(e){u(e)}),(function(e){l(e)}),f)}))):e(r,t,n,o,a,i+1,c,(function(e){u(e)}),(function(e){l(e)}),f)}catch(r){l(r)}}),(function(e){l(e)}))}catch(r){l(r)}}(e,r,t,t.length,o,0,a,(function(e){n.resolve(e)}),(function(e){n.reject(e)}),0)}catch(e){n.reject(e)}}function D(e,r,t,n){switch(r){case"=":return e===s.voidOperation?null:e;case"/=":return s.toNumber(t)/s.toNumber(e);case"*=":return s.toNumber(t)*s.toNumber(e);case"-=":return s.toNumber(t)-s.toNumber(e);case"+=":return s.isString(t)||s.isString(e)?s.toString(t)+s.toString(e):s.toNumber(t)+s.toNumber(e);case"%=":return s.toNumber(t)%s.toNumber(e);default:throw new Error(l.nodeErrorMessage(n,"RUNTIME","OPERATORNOTRECOGNISED"))}}function P(e,r,t,n){var a;switch(r=r.toLowerCase()){case"hasz":var i=e.hasZ;return void 0!==i&&i;case"hasm":var s=e.hasM;return void 0!==s&&s;case"spatialreference":var f=e.spatialReference._arcadeCacheId;if(void 0===f){var d=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(d=!1),d&&(q++,e.spatialReference._arcadeCacheId=q,f=q)}var h=new o({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==f&&(h._arcadeCacheId="SPREF"+f.toString()),h}switch(e.type){case"extent":switch(r){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":var v=e[r];return void 0!==v?v:null;case"type":return"Extent"}break;case"polygon":switch(r){case"rings":return void 0===(a=e.cache._arcadeCacheId)&&(q++,e.cache._arcadeCacheId=a=q),new c(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,a);case"type":return"Polygon"}break;case"point":switch(r){case"x":case"y":case"z":case"m":return void 0!==e[r]?e[r]:null;case"type":return"Point"}break;case"polyline":switch(r){case"paths":return void 0===(a=e.cache._arcadeCacheId)&&(q++,e.cache._arcadeCacheId=a=q),new c(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,a);case"type":return"Polyline"}break;case"multipoint":switch(r){case"points":return void 0===(a=e.cache._arcadeCacheId)&&(q++,e.cache._arcadeCacheId=a=q),new u(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,a,1);case"type":return"Multipoint"}}throw new Error(l.nodeErrorMessage(n,"RUNTIME","PROPERTYNOTFOUND"))}function k(e,r){return E.create((function(t,n){var o=r.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[o])if(void 0===e.globalScope[o])n(new Error(l.nodeErrorMessage(r,"RUNTIME","VARIABLENOTFOUND")));else{var a=e.globalScope[o];!0===a.valueset?t(a.value):null!==a.d?a.d.then(t,n):(a.d=F(e,a.node),a.d.then((function(e){try{a.value=e,a.valueset=!0,t(e)}catch(e){n(e)}}),n))}else{var i=e.localScope[o];!0===i.valueset?t(i.value):null!==i.d?i.d.then(t,n):(i.d=F(e,i.node),i.d.then((function(e){try{i.value=e,i.valueset=!0,t(e)}catch(e){n(e)}}),n))}}))}function L(e){return null===e?"":s.isArray(e)?"Array":s.isImmutableArray(e)?"Array":s.isDate(e)?"Date":s.isString(e)?"String":s.isBoolean(e)?"Boolean":s.isNumber(e)?"Number":e instanceof n?"Attachment":e instanceof t?"Portal":e instanceof o?"Dictionary":e instanceof a?"Feature":e instanceof w?"Point":e instanceof b?"Polygon":e instanceof I?"Polyline":e instanceof N?"Multipoint":e instanceof m?"Extent":s.isFunctionParameter(e)?"Function":s.isFeatureSet(e)?"FeatureSet":s.isFeatureSetCollection(e)?"FeatureSetCollection":e===s.voidOperation?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function j(e,r){var t=e.length,n=Math.floor(t/2);return r||(r=function(e,r){return e<r?-1:e===r?0:1}),0===t?[]:1===t?[e[0]]:function(e,r,t){for(var n=[];e.length>0||r.length>0;)if(e.length>0&&r.length>0){var o=t(e[0],r[0]);isNaN(o)&&(o=1),o<=0?(n.push(e[0]),e=e.slice(1)):(n.push(r[0]),r=r.slice(1))}else e.length>0?(n.push(e[0]),e=e.slice(1)):r.length>0&&(n.push(r[0]),r=r.slice(1));return n}(j(e.slice(0,n),r),j(e.slice(n,t),r),r)}function _(e,r,t){try{var n=e.body;if(t.length!==e.params.length)return O(new Error("Invalid Parameter calls to function."));for(var o=0;o<t.length;o++){var a=e.params[o];"Identifier"===a.type&&(r.localScope[a.name.toLowerCase()]={d:null,value:t[o],valueset:!0,node:null})}return F(r,n).then((function(e){return E.create((function(r,t){return e instanceof s.ReturnResult?void r(e.value):e===s.breakResult?void t(new Error("Cannot Break from a Function")):e===s.continueResult?void t(new Error("Cannot Continue from a Function")):e instanceof s.ImplicitResult?void r(e.value):void r(e)}))}))}catch(e){return E.reject(e)}}function B(e,r,t){return A(e,r,(function(r,n,o){var a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return _(t,a,o)}))}function V(e){return function(){var r={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(r.depthCounter>64)throw new Error("Exceeded maximum function depth");return _(e.definition,r,arguments)}}function Y(e){console.log(e)}Object.defineProperty(r,"__esModule",{value:!0});var G=100,q=0,H={};f.registerFunctions(H,M),g.registerFunctions(H,M),v.registerFunctions(H,M),h.registerFunctions(H,M),p.registerFunctions(H,M),d.registerFunctions({functions:H,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:M,standardFunctionAsync:A}),H.typeof=function(e,r){return M(e,r,(function(e,r,t){s.pcCheck(t,1,1);var n=L(t[0]);if("Unrecognised Type"===n)throw new Error("Unrecognised Type");return n}))},H.iif=function(e,r){return E.create((function(t,n){s.pcCheck(null===r.arguments?[]:r.arguments,3,3),F(e,r.arguments[0]).then((function(o){try{if(!1===s.isBoolean(o))return void n(new Error("IF Function must have a boolean test condition"));E.all([F(e,r.arguments[1]),F(e,r.arguments[2])]).then((function(e){t(o?e[0]:e[1])}),n)}catch(e){n(e)}}),n)}))},H.decode=function(e,r){return E.create((function(t,n){return r.arguments.length<2?void n(new Error("Missing Parameters")):2===r.arguments.length?void F(e,r.arguments[1]).then(t,n):(r.arguments.length-1)%2==0?void n(new Error("Must have a default value result.")):void F(e,r.arguments[0]).then((function(o){try{(function e(r,t,n,o){return E.create((function(a,i){F(r,t.arguments[n]).then((function(c){try{if(s.equalityTest(c,o))return void F(r,t.arguments[n+1]).then(a,i);var u=t.arguments.length-n;return 1===u?void F(r,t.arguments[n]).then(a,i):(2===u&&a(null),3===u?void F(r,t.arguments[n+2]).then(a,i):void e(r,t,n+2,o).then(a,i))}catch(r){i(r)}}),i)}))})(e,r,1,o).then(t,n)}catch(e){n(e)}}),n)}))},H.when=function(e,r){try{return r.arguments.length<3?O("Missing Parameters"):r.arguments.length%2==0?O("Must have a default value result."):F(e,r.arguments[0]).then((function(t){return E.create((function(n,o){!1!==s.isBoolean(t)?function e(r,t,n,o){return E.create((function(a,i){!0===o?F(r,t.arguments[n+1]).then(a,i):3==t.arguments.length-n?F(r,t.arguments[n+2]).then(a,i):F(r,t.arguments[n+2]).then((function(o){try{if(!1===s.isBoolean(o))return void i(new Error("WHEN needs boolean test conditions"));e(r,t,n+2,o).then(a,i)}catch(r){i(r)}}))}))}(e,r,0,t).then(n,o):o(new Error("WHEN needs boolean test conditions"))}))}))}catch(e){return O(e)}},H.sort=function(e,r){return A(e,r,(function(e,r,t){s.pcCheck(t,1,2);var n,o=t[0];if(s.isImmutableArray(o)&&(o=o.toArray()),!1===s.isArray(o))return O(Error("Illegal Argument"));if(t.length>1)return!1===s.isFunctionParameter(t[1])?O(Error("Illegal Argument")):function e(r,t){try{var n=r.length,o=Math.floor(n/2);return 0===n?E.resolve([]):1===n?E.resolve([r[0]]):E.create((function(a,i){var c=[e(r.slice(0,o),t),e(r.slice(o,n),t)];E.all(c).then((function(e){try{(function e(r,t,n,o){return E.create((function(a,i){var c=o;r.length>0||t.length>0?r.length>0&&t.length>0?n(r[0],t[0]).then((function(u){try{isNaN(u)&&(u=1),u<=0?(c.push(r[0]),r=r.slice(1)):(c.push(t[0]),t=t.slice(1)),e(r,t,n,o).then(a,i)}catch(r){i(r)}}),i):r.length>0?(c.push(r[0]),r=r.slice(1),e(r,t,n,o).then(a,i)):t.length>0&&(c.push(t[0]),t=t.slice(1),e(r,t,n,o).then(a,i)):a(o)}))})(e[0],e[1],t,[]).then(a,i)}catch(e){i(e)}}),i)}))}catch(r){return O(r)}}(n=o,V(t[1]));if(0===(n=o).length)return E.resolve([]);for(var a={},i=0;i<n.length;i++){var c=L(n[i]);""!==c&&(a[c]=!0)}if(!0===a.Array||!0===a.Dictionary||!0===a.Feature||!0===a.Point||!0===a.Polygon||!0===a.Polyline||!0===a.Multipoint||!0===a.Extent||!0===a.Function)return E.resolve(n.slice(0));var u=0,l="";for(var f in a)u++,l=f;return u>1||"String"===l?n=j(n,(function(e,r){if(null==e||e===s.voidOperation)return null==r||r===s.voidOperation?0:1;if(null==r||r===s.voidOperation)return-1;var t=s.toString(e),n=s.toString(r);return t<n?-1:t===n?0:1})):"Number"===l?n=j(n,(function(e,r){return e-r})):"Boolean"===l?n=j(n,(function(e,r){return e===r?0:r?-1:1})):"Date"===l&&(n=j(n,(function(e,r){return r-e}))),E.resolve(n)}))};var z={failDefferred:O,resolveDeffered:S,fixSpatialReference:s.fixSpatialReference,parseArguments:T,standardFunction:M,standardFunctionAsync:A,evaluateIdentifier:k,arcadeCustomFunction:V};for(var Z in H)H[Z]={value:new s.NativeFunction(H[Z]),valueset:!0,node:null};var J=function(){};(J.prototype=H).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},J.prototype.pi={value:Math.PI,valueset:!0,node:null},r.functionHelper=z,r.extend=function(e){for(var r={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:M,standardFunctionAsync:A,failDefferred:O,evaluateIdentifier:k,arcadeCustomFunctionHandler:V},t=0;t<e.length;t++)e[t].registerFunctions(r);for(var n in r.functions)H[n]={value:new s.NativeFunction(r.functions[n]),valueset:!0,node:null},J.prototype[n]=H[n];for(t=0;t<r.signatures.length;t++)l.addFunctionDeclaration(r.signatures[t],"async")},r.executeScript=function(e,r){var t=r.spatialReference;null!=t||(t=new R({wkid:102100}));var n=function(e,r){var t=new J;null!=e||(e={}),null!=r||(r={});var n=new o({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});for(var i in n.immutable=!1,t.textformatting={value:n,valueset:!0,node:null},r)t[i]={value:new s.NativeFunction(r[i]),native:!0,valueset:!0,node:null};for(var i in e)t[i]=e[i]&&"esri.Graphic"===e[i].declaredClass?{value:a.createFromGraphic(e[i]),valueset:!0,node:null}:{value:e[i],valueset:!0,node:null};return t}(r.vars,r.customfunctions);return F({spatialReference:t,services:r.services,abortSignal:null==r.abortSignal?{aborted:!1}:r.abortSignal,globalScope:n,console:r.console?r.console:Y,lrucache:r.lrucache,localScope:null,depthCounter:1},e.body[0].body).then((function(e){return E.create((function(r,t){return e instanceof s.ReturnResult&&(e=e.value),e instanceof s.ImplicitResult&&(e=e.value),e===s.voidOperation&&(e=null),e===s.breakResult?void t(new Error("Cannot return BREAK")):e===s.continueResult?void t(new Error("Cannot return CONTINUE")):e instanceof s.NativeFunction?void t(new Error("Cannot return FUNCTION")):e instanceof i?void t(new Error("Cannot return FUNCTION")):void r(e)}))}))},r.extractFieldLiterals=function(e,r){return void 0===r&&(r=!1),l.findFieldLiterals(e,r)},r.validateScript=function(e,r){return l.validateScript(e,r,"full")},r.referencesMember=function(e,r){return l.referencesMember(e,r)},r.referencesFunction=function(e,r){return l.referencesFunction(e,r)},r.findFunctionCalls=function(e){return l.findFunctionCalls(e,!1)}}).apply(null,n))||(e.exports=o)}}]);