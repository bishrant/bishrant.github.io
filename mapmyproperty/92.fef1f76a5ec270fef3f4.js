(function(){var e={"arcgis-js-api/arcade/arcadeAsyncRuntime":"8Des"},r=this||window,t=r.webpackJsonp=r.webpackJsonp||[];t.registerAbsMids?t.registerAbsMids(e):(t.absMidsWaiting=t.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"8Des":function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t("rChG"),t("HKXX"),t("B2KM"),t("T8lH"),t("AxL/"),t("ABt8"),t("2CtR"),t("gfOZ"),t("sDeS"),t("tq6K"),t("/4o+"),t("G6wh"),t("CyLf"),t("sAf+"),t("hiUs"),t("9iaF"),t("qMld"),t("N7S/"),t("YADd"),t("t78F"),t("oxlp"),t("Vt+U"),t("aYWh"),t("Z4y+")],void 0===(o=(function(e,r,t,n,o,a,i,c,u,s,l,f,d,h,p,v,g,E,m,y,N,w,b,I,R,O){"use strict";function S(e){return e instanceof Error?m.reject(e):m.reject(new Error(e))}function M(e){return m.resolve(e)}function T(e,r){for(var t=[],n=0;n<r.arguments.length;n++)t.push(C(e,r.arguments[n]));return m.all(t)}function A(e,r,t){return m.create((function(n,o){T(e,r).then((function(a){try{n(t(e,r,a))}catch(e){o(e)}}),o)}))}function F(e,r,t){try{return T(e,r).then((function(n){try{var o=t(e,r,n);return(a=o)&&"function"==typeof a.then?o:m.resolve(o)}catch(e){return S(e)}var a}))}catch(e){return S(e)}}function C(e,r){try{switch(r.type){case"VariableDeclarator":return function(e,r){try{return(null===r.init?m.resolve(null):C(e,r.init)).then(null!==e.localScope?function(t){return m.create((function(n){if(t===s.voidOperation&&(t=null),"Identifier"!==r.id.type)throw new Error("Can only assign a regular variable");var o=r.id.name.toLowerCase();e.localScope[o]={value:t,valueset:!0,node:r.init},n(s.voidOperation)}))}:function(t){return m.create((function(n){if("Identifier"!==r.id.type)throw new Error("Can only assign a regular variable");var o=r.id.name.toLowerCase();t===s.voidOperation&&(t=null),e.globalScope[o]={value:t,valueset:!0,node:r.init},n(s.voidOperation)}))})}catch(e){return S(e)}}(e,r);case"VariableDeclaration":return function e(r,t,n){return m.create((function(o,a){n>=t.declarations.length?o(s.voidOperation):C(r,t.declarations[n]).then((function(){n===t.declarations.length-1?o(s.voidOperation):e(r,t,n+1).then((function(){o(s.voidOperation)}),a)}),a)}))}(e,r,0);case"BlockStatement":return function(e,r){try{return function e(r,t,n){try{return n>=t.body.length?m.resolve(s.voidOperation):m.create((function(o,a){C(r,t.body[n]).then((function(i){try{i instanceof s.ReturnResult||i===s.breakResult||i===s.continueResult||n===t.body.length-1?o(i):e(r,t,n+1).then(o,a)}catch(e){a(e)}}),a)}))}catch(e){return S(e)}}(e,r,0)}catch(e){return S(e)}}(e,r);case"FunctionDeclaration":return function(e,r){try{var t=r.id.name.toLowerCase();return e.globalScope[t]={valueset:!0,node:null,value:new i(r,e)},m.resolve(s.voidOperation)}catch(e){return S(e)}}(e,r);case"ReturnStatement":return function(e,r){return m.create((function(t,n){null===r.argument?t(new s.ReturnResult(s.voidOperation)):C(e,r.argument).then((function(e){try{t(new s.ReturnResult(e))}catch(e){n(e)}}),n)}))}(e,r);case"IfStatement":return function(e,r){return m.create((function(t,n){"AssignmentExpression"!==r.test.type&&"UpdateExpression"!==r.test.type?C(e,r.test).then((function(o){try{!0===o?C(e,r.consequent).then(t,n):!1===o?null!==r.alternate?C(e,r.alternate).then(t,n):t(s.voidOperation):n(new Error(l.nodeErrorMessage(r.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(e){n(e)}}),n):n(new Error(l.nodeErrorMessage(r.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,r);case"ExpressionStatement":return function(e,r){try{return"AssignmentExpression"===r.expression.type?C(e,r.expression):C(e,r.expression).then((function(e){return m.create((function(r){r(e===s.voidOperation?s.voidOperation:new s.ImplicitResult(e))}))}))}catch(e){return m.reject(e)}}(e,r);case"UpdateExpression":return function(e,r){try{var t=r.argument;if("MemberExpression"===t.type){var n={t:null};return C(e,t.object).then((function(r){var o=null;return n.t=r,!0===t.computed?o=C(e,t.property):"Identifier"===t.property.type&&(o=m.resolve(t.property.name)),o})).then((function(e){return m.create((function(t){var i,c=n.t;if(s.isArray(c)){if(!s.isNumber(e))throw new Error("Invalid Parameter");if(e<0&&(e=c.length+e),e<0||e>=c.length)throw new Error("Assignment outside of array bounds");i=s.toNumber(c[e]),c[e]="++"===r.operator?i+1:i-1}else if(c instanceof o){if(!1===s.isString(e))throw new Error("Dictionary accessor must be a string");if(!0!==c.hasField(e))throw new Error("Invalid Parameter");i=s.toNumber(c.field(e)),c.setField(e,"++"===r.operator?i+1:i-1)}else{if(!(c instanceof a))throw s.isImmutableArray(c)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===s.isString(e))throw new Error("Feature accessor must be a string");if(!0!==c.hasField(e))throw new Error("Invalid Parameter");i=s.toNumber(c.field(e)),c.setField(e,"++"===r.operator?i+1:i-1)}t(!1===r.prefix?i:"++"===r.operator?i+1:i-1)}))}))}return m.create((function(t,n){var o,a="Identifier"===r.argument.type?r.argument.name.toLowerCase():"";if(!a)throw new Error("Invalid identifier");return null!==e.localScope&&void 0!==e.localScope[a]?(o=s.toNumber(e.localScope[a].value),e.localScope[a]={value:"++"===r.operator?o+1:o-1,valueset:!0,node:r},void t(!1===r.prefix?o:"++"===r.operator?o+1:o-1)):void 0!==e.globalScope[a]?(o=s.toNumber(e.globalScope[a].value),e.globalScope[a]={value:"++"===r.operator?o+1:o-1,valueset:!0,node:r},void t(!1===r.prefix?o:"++"===r.operator?o+1:o-1)):void n(new Error("Variable not recognised"))}))}catch(e){return m.reject(e)}}(e,r);case"AssignmentExpression":return function(e,r){return m.create((function(t,n){var i=r.left;if("MemberExpression"===i.type)C(e,r.right).then((function(c){try{C(e,i.object).then((function(u){try{var l=null;if(!0===i.computed)l=C(e,i.property);else{if("Identifier"!==i.property.type)throw new Error("Expected computed or identifier for assignemnt target");l=m.resolve(i.property.name)}l.then((function(e){try{if(s.isArray(u)){if(!s.isNumber(e))throw new Error("Invalid Parameter");if(e<0&&(e=u.length+e),e<0||e>u.length)throw new Error("Assignment outside of array bounds");if(e===u.length){if("="!==r.operator)throw new Error("Invalid Parameter");u[e]=k(c,r.operator,u[e],r)}else u[e]=k(c,r.operator,u[e],r)}else if(u instanceof o){if(!1===s.isString(e))throw new Error("Dictionary accessor must be a string");if(!0===u.hasField(e))u.setField(e,k(c,r.operator,u.field(e),r));else{if("="!==r.operator)throw new Error("Invalid Parameter");u.setField(e,k(c,r.operator,null,r))}}else{if(!(u instanceof a))throw s.isImmutableArray(u)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===s.isString(e))throw new Error("Feature accessor must be a string");if(!0===u.hasField(e))u.setField(e,k(c,r.operator,u.field(e),r));else{if("="!==r.operator)throw new Error("Invalid Parameter");u.setField(e,k(c,r.operator,null,r))}}t(s.voidOperation)}catch(e){n(e)}}),n)}catch(e){n(e)}}),n)}catch(e){n(e)}}),n);else{var c=i.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[c])return void C(e,r.right).then((function(o){try{e.localScope[c]={value:k(o,r.operator,e.localScope[c].value,r),valueset:!0,node:r.right},t(s.voidOperation)}catch(e){n(e)}}),n);void 0!==e.globalScope[c]?C(e,r.right).then((function(o){try{e.globalScope[c]={value:k(o,r.operator,e.globalScope[c].value,r),valueset:!0,node:r.right},t(s.voidOperation)}catch(e){n(e)}}),n):n(new Error("Cannot assign undeclared variable"))}}))}(e,r);case"ForStatement":return function(e,r){try{return null!==r.init?C(e,r.init).then((function(){return m.create((function(t,n){x(e,r,{testResult:!0,lastAction:s.voidOperation},(function(e){t(e)}),(function(e){n(e)}),0)}))})):m.create((function(t,n){x(e,r,{testResult:!0,lastAction:s.voidOperation},(function(e){t(e)}),(function(e){n(e)}),0)}))}catch(e){return m.reject(e)}}(e,r);case"ForInStatement":return function(e,r){return m.create((function(t,n){C(e,r.right).then((function(i){try{("VariableDeclaration"===r.left.type?C(e,r.left):m.resolve()).then((function(){try{var c="";if("VariableDeclaration"===r.left.type){var u=r.left.declarations[0].id;"Identifier"===u.type&&(c=u.name)}else"Identifier"===r.left.type&&(c=r.left.name);if(!c)throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDVARIABLE"));c=c.toLowerCase();var f=null;if(null!==e.localScope&&void 0!==e.localScope[c]&&(f=e.localScope[c]),null===f&&void 0!==e.globalScope[c]&&(f=e.globalScope[c]),null===f)return void n(new Error(l.nodeErrorMessage(r,"RUNTIME","VARIABLENOTDECLARED")));s.isArray(i)||s.isString(i)?D(e,r,i,{reject:n,resolve:t},f):s.isImmutableArray(i)?function(e,r,t,n,o,a){try{if(void 0===a&&(a="i"),0===t.length)return void n.resolve(s.voidOperation);!function e(r,t,n,o,a,i,c,u,l){try{if(n.length()<=a)return void c(s.voidOperation);o.value="k"===i?n.get(a):a,C(r,t.body).then((function(f){f instanceof s.ReturnResult?c(f):f===s.breakResult?c(s.voidOperation):++l>100?(l=0,setTimeout((function(){e(r,t,n,o,a+1,i,c,u,l)}),0)):e(r,t,n,o,a+1,i,c,u,l)}),(function(e){u(e)}))}catch(e){u(e)}}(e,r,t,o,0,a,(function(e){n.resolve(e)}),(function(e){n.reject(e)}),0)}catch(e){n.reject(e)}}(e,r,i,{reject:n,resolve:t},f):i instanceof o||i instanceof a?function(e,r,t,n,o){try{D(e,r,t.keys(),n,o,"k")}catch(e){n.reject(e)}}(e,r,i,{reject:n,resolve:t},f):s.isFeatureSet(i)?function e(r,t,n,o,i,c,u,l){try{r.next().then((function(f){try{if(null===f)c(s.voidOperation);else{var d=a.createFromGraphicLikeObject(f.geometry,f.attributes,o);d._underlyingGraphic=f,i.value=d,C(t,n.body).then((function(a){try{a===s.breakResult?c(s.voidOperation):a instanceof s.ReturnResult?c(a):++l>100?(l=0,setTimeout((function(){e(r,t,n,o,i,c,u,l)}),0)):e(r,t,n,o,i,c,u,l)}catch(e){u(e)}}),(function(e){u(e)}))}}catch(e){u(e)}}),(function(e){u(e)}))}catch(e){u(e)}}(i.iterator(e.abortSignal),e,r,i,f,(function(e){t(e)}),(function(e){n(e)}),0):D(e,r,[],{reject:n,resolve:t},f)}catch(e){n(e)}}),n)}catch(e){n(e)}}),n)}))}(e,r);case"BreakStatement":return m.resolve(s.breakResult);case"EmptyStatement":return m.resolve(s.voidOperation);case"ContinueStatement":return m.resolve(s.continueResult);case"TemplateElement":return function(e,r){return m.resolve(r.value?r.value.cooked:"")}(0,r);case"TemplateLiteral":return function(e,r){return m.create((function(t){var n=[];f.reduceArrayWithPromises(r.expressions,(function(r,t,o,a){return C(e,t).then((function(e){n[o]=s.toString(e)}))})).then((function(){for(var e="",o=0,a=0,i=r.quasis;a<i.length;a++){var c=i[a];e+=c.value?c.value.cooked:"",!1===c.tail&&(e+=n[o]?n[o]:"",o++)}t(e)}))}))}(e,r);case"Identifier":return j(e,r);case"MemberExpression":return function(e,r){try{return C(e,r.object).then((function(t){try{return null===t?m.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","NOTFOUND"))):!1===r.computed?"Identifier"===r.property.type?t instanceof o||t instanceof a?m.resolve(t.field(r.property.name)):t instanceof N?m.resolve(L(t,r.property.name,0,r)):m.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))):m.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))):C(e,r.property).then((function(e){return m.create((function(n,i){if(t instanceof o||t instanceof a)s.isString(e)?n(t.field(e)):i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(t instanceof N)s.isString(e)?n(L(t,e,0,r)):i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(s.isArray(t))if(s.isNumber(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=t.length+e),e>=t.length||e<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));n(t[e])}else i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(s.isImmutableArray(t))if(s.isNumber(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=t.length()+e),e>=t.length()||e<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));n(t.get(e))}else i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(s.isString(t))if(s.isNumber(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=t.length+e),e>=t.length||e<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));n(t[e])}else i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else i(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")))}))}))}catch(e){return S(e)}}))}catch(e){return S(e)}}(e,r);case"Literal":return M(r.value);case"CallExpression":return function(e,r){try{return"Identifier"!==r.callee.type?S(l.nodeErrorMessage(r,"RUNTIME","ONLYNODESSUPPORTED")):null!==e.localScope&&void 0!==e.localScope[r.callee.name.toLowerCase()]?(t=e.localScope[r.callee.name.toLowerCase()]).value instanceof s.NativeFunction?t.value.fn(e,r):t.value instanceof i?G(e,r,t.value.definition):S(l.nodeErrorMessage(r,"RUNTIME","NOTAFUNCTION")):void 0!==e.globalScope[r.callee.name.toLowerCase()]?(t=e.globalScope[r.callee.name.toLowerCase()]).value instanceof s.NativeFunction?t.value.fn(e,r):t.value instanceof i?G(e,r,t.value.definition):S(l.nodeErrorMessage(r,"RUNTIME","NOTAFUNCTION")):S(l.nodeErrorMessage(r,"RUNTIME","NOTFOUND"));var t}catch(e){return S(e)}}(e,r);case"UnaryExpression":return function(e,r){try{return C(e,r.argument).then((function(e){return m.create((function(t,n){s.isBoolean(e)&&"!"===r.operator?t(!e):"-"===r.operator?t(-1*s.toNumber(e)):"+"===r.operator?t(1*s.toNumber(e)):"~"===r.operator?t(~s.toNumber(e)):n(new Error(l.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))}))}))}catch(e){return S(e)}}(e,r);case"BinaryExpression":return function(e,r){try{return m.all([C(e,r.left),C(e,r.right)]).then((function(e){return m.create((function(t,n){var o=e[0],a=e[1];switch(r.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":t(s.binaryOperator(s.toNumber(o),s.toNumber(a),r.operator));case"==":t(s.equalityTest(o,a));break;case"!=":t(!s.equalityTest(o,a));break;case"<":case">":case"<=":case">=":t(s.greaterThanLessThan(o,a,r.operator));break;case"+":s.isString(o)||s.isString(a)?t(s.toString(o)+s.toString(a)):t(s.toNumber(o)+s.toNumber(a));break;case"-":t(s.toNumber(o)-s.toNumber(a));break;case"*":t(s.toNumber(o)*s.toNumber(a));break;case"/":t(s.toNumber(o)/s.toNumber(a));break;case"%":t(s.toNumber(o)%s.toNumber(a));break;default:n(new Error(l.nodeErrorMessage(r,"RUNTIME","OPERATORNOTRECOGNISED")))}}))}))}catch(e){return S(e)}}(e,r);case"LogicalExpression":return function(e,r){return m.create((function(t,n){"AssignmentExpression"!==r.left.type&&"UpdateExpression"!==r.left.type?"AssignmentExpression"!==r.right.type&&"UpdateExpression"!==r.right.type?C(e,r.left).then((function(o){try{if(!s.isBoolean(o))throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYBOOLEAN"));switch(r.operator){case"||":!0===o?t(o):C(e,r.right).then((function(e){try{if(!s.isBoolean(e))throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"));t(e)}catch(e){n(e)}}),n);break;case"&&":!1===o?t(o):C(e,r.right).then((function(e){try{if(!s.isBoolean(e))throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"));t(e)}catch(e){n(e)}}),n);break;default:throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"))}}catch(e){n(e)}}),n):n(new Error(l.nodeErrorMessage(r.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):n(new Error(l.nodeErrorMessage(r.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,r);case"ConditionalExpression":return S(l.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return function(e,r){try{for(var t=[],n=0;n<r.elements.length;n++)t.push(C(e,r.elements[n]));return m.all(t).then((function(e){return m.create((function(t,n){for(var o=0;o<e.length;o++){if(s.isFunctionParameter(e[o]))return void n(new Error(l.nodeErrorMessage(r,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[o]===s.voidOperation&&(e[o]=null)}t(e)}))}))}catch(e){return S(e)}}(e,r);case"ObjectExpression":return function(e,r){try{for(var t=[],n=0;n<r.properties.length;n++)t.push(C(e,r.properties[n]));return m.all(t).then((function(e){return m.create((function(r){for(var t={},n=0;n<e.length;n++){var a=e[n];if(s.isFunctionParameter(a.value))throw new Error("Illegal Argument");if(!1===s.isString(a.key))throw new Error("Illegal Argument");t[a.key.toString()]=a.value===s.voidOperation?null:a.value}var i=new o(t);i.immutable=!1,r(i)}))}))}catch(e){return S(e)}}(e,r);case"Property":return function(e,r){try{return C(e,r.value).then((function(t){return m.create((function(n){"Identifier"===r.key.type?n({key:r.key.name,value:t}):C(e,r.key).then((function(e){n({key:e,value:t})}))}))}))}catch(e){return m.reject(e)}}(e,r);default:return S(l.nodeErrorMessage(r,"RUNTIME","UNREOGNISED"))}}catch(e){return S(e)}}function U(e,r,t){try{return C(e,r.body).then((function(n){try{return t.lastAction=n,t.lastAction===s.breakResult||t.lastAction instanceof s.ReturnResult?(t.testResult=!1,m.resolve(t)):null!==r.update?C(e,r.update).then((function(){return m.resolve(t)})):m.resolve(t)}catch(e){return m.reject(e)}}))}catch(e){return m.reject(e)}}function x(e,r,t,n,o,a){try{(function(e,r,t){try{return null!==r.test?C(e,r.test).then((function(n){try{return!0===e.abortSignal.aborted?m.reject(new Error("Cancelled")):(t.testResult=n,!1===t.testResult?m.resolve(t):!0!==t.testResult?m.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):U(e,r,t))}catch(e){return m.reject(e)}})):U(e,r,t)}catch(e){return m.reject(e)}})(e,r,t).then((function(){try{!0===t.testResult?++a>100?(a=0,setTimeout((function(){x(e,r,t,n,o,a)}),0)):x(e,r,t,n,o,a):n(t.lastAction instanceof s.ReturnResult?t.lastAction:s.voidOperation)}catch(e){o(e)}}),(function(e){o(e)}))}catch(e){o(e)}}function D(e,r,t,n,o,a){try{if(void 0===a&&(a="i"),0===t.length)return void n.resolve(s.voidOperation);!function e(r,t,n,o,a,i,c,u,l,f){try{if(o<=i)return void u(s.voidOperation);a.value="k"===c?n[i]:i,C(r,t.body).then((function(d){try{d instanceof s.ReturnResult?u(d):d===s.breakResult?u(s.voidOperation):++f>100?(f=0,setTimeout((function(){e(r,t,n,o,a,i+1,c,u,l,f)}),0)):e(r,t,n,o,a,i+1,c,u,l,f)}catch(e){l(e)}}),(function(e){l(e)}))}catch(e){l(e)}}(e,r,t,t.length,o,0,a,(function(e){n.resolve(e)}),(function(e){n.reject(e)}),0)}catch(e){n.reject(e)}}function k(e,r,t,n){switch(r){case"=":return e===s.voidOperation?null:e;case"/=":return s.toNumber(t)/s.toNumber(e);case"*=":return s.toNumber(t)*s.toNumber(e);case"-=":return s.toNumber(t)-s.toNumber(e);case"+=":return s.isString(t)||s.isString(e)?s.toString(t)+s.toString(e):s.toNumber(t)+s.toNumber(e);case"%=":return s.toNumber(t)%s.toNumber(e);default:throw new Error(l.nodeErrorMessage(n,"RUNTIME","OPERATORNOTRECOGNISED"))}}Object.defineProperty(r,"__esModule",{value:!0}),r.findFunctionCalls=r.referencesFunction=r.referencesMember=r.validateScript=r.extractFieldLiterals=r.executeScript=r.extend=r.functionHelper=void 0;var P=0;function L(e,r,t,n){var a;switch(r=r.toLowerCase()){case"hasz":var i=e.hasZ;return void 0!==i&&i;case"hasm":var s=e.hasM;return void 0!==s&&s;case"spatialreference":var f=e.spatialReference._arcadeCacheId;if(void 0===f){var d=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(d=!1),d&&(P++,e.spatialReference._arcadeCacheId=P,f=P)}var h=new o({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==f&&(h._arcadeCacheId="SPREF"+f.toString()),h}switch(e.type){case"extent":switch(r){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":var p=e[r];return void 0!==p?p:null;case"type":return"Extent"}break;case"polygon":switch(r){case"rings":return void 0===(a=e.cache._arcadeCacheId)&&(a=++P,e.cache._arcadeCacheId=a),new c(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,a);case"type":return"Polygon"}break;case"point":switch(r){case"x":case"y":case"z":case"m":return void 0!==e[r]?e[r]:null;case"type":return"Point"}break;case"polyline":switch(r){case"paths":return void 0===(a=e.cache._arcadeCacheId)&&(a=++P,e.cache._arcadeCacheId=a),new c(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,a);case"type":return"Polyline"}break;case"multipoint":switch(r){case"points":return void 0===(a=e.cache._arcadeCacheId)&&(a=++P,e.cache._arcadeCacheId=a),new u(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,a,1);case"type":return"Multipoint"}}throw new Error(l.nodeErrorMessage(n,"RUNTIME","PROPERTYNOTFOUND"))}function j(e,r){return m.create((function(t,n){var o=r.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[o])if(void 0===e.globalScope[o])n(new Error(l.nodeErrorMessage(r,"RUNTIME","VARIABLENOTFOUND")));else{var a=e.globalScope[o];!0===a.valueset?t(a.value):null!==a.d?a.d.then(t,n):(a.d=C(e,a.node),a.d.then((function(e){try{a.value=e,a.valueset=!0,t(e)}catch(e){n(e)}}),n))}else{var i=e.localScope[o];!0===i.valueset?t(i.value):null!==i.d?i.d.then(t,n):(i.d=C(e,i.node),i.d.then((function(e){try{i.value=e,i.valueset=!0,t(e)}catch(e){n(e)}}),n))}}))}var _={};function B(e){return null===e?"":s.isArray(e)||s.isImmutableArray(e)?"Array":s.isDate(e)?"Date":s.isString(e)?"String":s.isBoolean(e)?"Boolean":s.isNumber(e)?"Number":e instanceof n?"Attachment":e instanceof t?"Portal":e instanceof o?"Dictionary":e instanceof a?"Feature":e instanceof b?"Point":e instanceof I?"Polygon":e instanceof R?"Polyline":e instanceof w?"Multipoint":e instanceof y?"Extent":s.isFunctionParameter(e)?"Function":s.isFeatureSet(e)?"FeatureSet":s.isFeatureSetCollection(e)?"FeatureSetCollection":e===s.voidOperation?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function V(e,r){var t=e.length,n=Math.floor(t/2);return r||(r=function(e,r){return e<r?-1:e===r?0:1}),0===t?[]:1===t?[e[0]]:function(e,r,t){for(var n=[];e.length>0||r.length>0;)if(e.length>0&&r.length>0){var o=t(e[0],r[0]);isNaN(o)&&(o=1),o<=0?(n.push(e[0]),e=e.slice(1)):(n.push(r[0]),r=r.slice(1))}else e.length>0?(n.push(e[0]),e=e.slice(1)):r.length>0&&(n.push(r[0]),r=r.slice(1));return n}(V(e.slice(0,n),r),V(e.slice(n,t),r),r)}function Y(e,r,t){try{var n=e.body;if(t.length!==e.params.length)return S(new Error("Invalid Parameter calls to function."));for(var o=0;o<t.length;o++){var a=e.params[o];"Identifier"===a.type&&(r.localScope[a.name.toLowerCase()]={d:null,value:t[o],valueset:!0,node:null})}return C(r,n).then((function(e){return m.create((function(r,t){e instanceof s.ReturnResult?r(e.value):e!==s.breakResult?e!==s.continueResult?r(e instanceof s.ImplicitResult?e.value:e):t(new Error("Cannot Continue from a Function")):t(new Error("Cannot Break from a Function"))}))}))}catch(e){return m.reject(e)}}function G(e,r,t){return F(e,r,(function(r,n,o){var a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return Y(t,a,o)}))}function q(e){return function(){var r={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(r.depthCounter>64)throw new Error("Exceeded maximum function depth");return Y(e.definition,r,arguments)}}d.registerFunctions(_,A),E.registerFunctions(_,A),v.registerFunctions(_,A),p.registerFunctions(_,A),g.registerFunctions(_,A),h.registerFunctions({functions:_,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:A,standardFunctionAsync:F}),_.typeof=function(e,r){return A(e,r,(function(e,r,t){s.pcCheck(t,1,1);var n=B(t[0]);if("Unrecognised Type"===n)throw new Error("Unrecognised Type");return n}))},_.iif=function(e,r){return m.create((function(t,n){s.pcCheck(null===r.arguments?[]:r.arguments,3,3),C(e,r.arguments[0]).then((function(o){try{if(!1===s.isBoolean(o))return void n(new Error("IF Function must have a boolean test condition"));m.all([C(e,r.arguments[1]),C(e,r.arguments[2])]).then((function(e){t(o?e[0]:e[1])}),n)}catch(e){n(e)}}),n)}))},_.decode=function(e,r){return m.create((function(t,n){r.arguments.length<2?n(new Error("Missing Parameters")):2!==r.arguments.length?(r.arguments.length-1)%2!=0?C(e,r.arguments[0]).then((function(o){try{(function e(r,t,n,o){return m.create((function(a,i){C(r,t.arguments[n]).then((function(c){try{if(s.equalityTest(c,o))return void C(r,t.arguments[n+1]).then(a,i);var u=t.arguments.length-n;return 1===u?void C(r,t.arguments[n]).then(a,i):(2===u&&a(null),3===u?void C(r,t.arguments[n+2]).then(a,i):void e(r,t,n+2,o).then(a,i))}catch(e){i(e)}}),i)}))})(e,r,1,o).then(t,n)}catch(e){n(e)}}),n):n(new Error("Must have a default value result.")):C(e,r.arguments[1]).then(t,n)}))},_.when=function(e,r){try{return r.arguments.length<3?S("Missing Parameters"):r.arguments.length%2==0?S("Must have a default value result."):C(e,r.arguments[0]).then((function(t){return m.create((function(n,o){!1!==s.isBoolean(t)?function e(r,t,n,o){return m.create((function(a,i){!0===o?C(r,t.arguments[n+1]).then(a,i):3==t.arguments.length-n?C(r,t.arguments[n+2]).then(a,i):C(r,t.arguments[n+2]).then((function(o){try{if(!1===s.isBoolean(o))return void i(new Error("WHEN needs boolean test conditions"));e(r,t,n+2,o).then(a,i)}catch(e){i(e)}}))}))}(e,r,0,t).then(n,o):o(new Error("WHEN needs boolean test conditions"))}))}))}catch(e){return S(e)}},_.sort=function(e,r){return F(e,r,(function(e,r,t){s.pcCheck(t,1,2);var n,o=t[0];if(s.isImmutableArray(o)&&(o=o.toArray()),!1===s.isArray(o))return S(Error("Illegal Argument"));if(t.length>1)return!1===s.isFunctionParameter(t[1])?S(Error("Illegal Argument")):function e(r,t){try{var n=r.length,o=Math.floor(n/2);return 0===n?m.resolve([]):1===n?m.resolve([r[0]]):m.create((function(a,i){var c=[e(r.slice(0,o),t),e(r.slice(o,n),t)];m.all(c).then((function(e){try{(function e(r,t,n,o){return m.create((function(a,i){var c=o;r.length>0||t.length>0?r.length>0&&t.length>0?n(r[0],t[0]).then((function(u){try{isNaN(u)&&(u=1),u<=0?(c.push(r[0]),r=r.slice(1)):(c.push(t[0]),t=t.slice(1)),e(r,t,n,o).then(a,i)}catch(e){i(e)}}),i):r.length>0?(c.push(r[0]),r=r.slice(1),e(r,t,n,o).then(a,i)):t.length>0&&(c.push(t[0]),t=t.slice(1),e(r,t,n,o).then(a,i)):a(o)}))})(e[0],e[1],t,[]).then(a,i)}catch(e){i(e)}}),i)}))}catch(r){return S(r)}}(n=o,q(t[1]));if(0===(n=o).length)return m.resolve([]);for(var a={},i=0;i<n.length;i++){var c=B(n[i]);""!==c&&(a[c]=!0)}if(!0===a.Array||!0===a.Dictionary||!0===a.Feature||!0===a.Point||!0===a.Polygon||!0===a.Polyline||!0===a.Multipoint||!0===a.Extent||!0===a.Function)return m.resolve(n.slice(0));var u=0,l="";for(var f in a)u++,l=f;return u>1||"String"===l?n=V(n,(function(e,r){if(null==e||e===s.voidOperation)return null==r||r===s.voidOperation?0:1;if(null==r||r===s.voidOperation)return-1;var t=s.toString(e),n=s.toString(r);return t<n?-1:t===n?0:1})):"Number"===l?n=V(n,(function(e,r){return e-r})):"Boolean"===l?n=V(n,(function(e,r){return e===r?0:r?-1:1})):"Date"===l&&(n=V(n,(function(e,r){return r-e}))),m.resolve(n)}))};var H={failDefferred:S,resolveDeffered:M,fixSpatialReference:s.fixSpatialReference,parseArguments:T,standardFunction:A,standardFunctionAsync:F,evaluateIdentifier:j,arcadeCustomFunction:q};for(var z in _)_[z]={value:new s.NativeFunction(_[z]),valueset:!0,node:null};var W=function(){};function Z(e){console.log(e)}(W.prototype=_).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},W.prototype.pi={value:Math.PI,valueset:!0,node:null},r.functionHelper=H,r.extend=function(e){for(var r={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:A,standardFunctionAsync:F,failDefferred:S,evaluateIdentifier:j,arcadeCustomFunctionHandler:q},t=0;t<e.length;t++)e[t].registerFunctions(r);for(var n in r.functions)_[n]={value:new s.NativeFunction(r.functions[n]),valueset:!0,node:null},W.prototype[n]=_[n];for(t=0;t<r.signatures.length;t++)l.addFunctionDeclaration(r.signatures[t],"async")},r.executeScript=function(e,r){var t=r.spatialReference;null==t&&(t=new O({wkid:102100}));var n=function(e,r){var t=new W;null==e&&(e={}),null==r&&(r={});var n=new o({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});for(var i in n.immutable=!1,t.textformatting={value:n,valueset:!0,node:null},r)t[i]={value:new s.NativeFunction(r[i]),native:!0,valueset:!0,node:null};for(var i in e)t[i]=e[i]&&"esri.Graphic"===e[i].declaredClass?{value:a.createFromGraphic(e[i]),valueset:!0,node:null}:{value:e[i],valueset:!0,node:null};return t}(r.vars,r.customfunctions);return C({spatialReference:t,services:r.services,abortSignal:null==r.abortSignal?{aborted:!1}:r.abortSignal,globalScope:n,console:r.console?r.console:Z,lrucache:r.lrucache,localScope:null,depthCounter:1},e.body[0].body).then((function(e){return m.create((function(r,t){e instanceof s.ReturnResult&&(e=e.value),e instanceof s.ImplicitResult&&(e=e.value),e===s.voidOperation&&(e=null),e!==s.breakResult?e!==s.continueResult?e instanceof s.NativeFunction||e instanceof i?t(new Error("Cannot return FUNCTION")):r(e):t(new Error("Cannot return CONTINUE")):t(new Error("Cannot return BREAK"))}))}))},r.extractFieldLiterals=function(e,r){return void 0===r&&(r=!1),l.findFieldLiterals(e)},r.validateScript=function(e,r){return l.validateScript(e,r,"full")},r.referencesMember=function(e,r){return l.referencesMember(e,r)},r.referencesFunction=function(e,r){return l.referencesFunction(e,r)},r.findFunctionCalls=function(e){return l.findFunctionCalls(e)}}).apply(null,n))||(e.exports=o)}}]);