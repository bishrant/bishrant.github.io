!function(){function e(e,t,n,r,c,a,o){try{var u=e[a](o),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(r,c)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(c,a){var o=t.apply(n,r);function u(t){e(o,c,a,u,i,"next",t)}function i(t){e(o,c,a,u,i,"throw",t)}u(void 0)})}}function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var c=0,a=function(){};return{s:a,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){throw e}),f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){i=!0,o=e}),f:function(){try{u||null==n.return||n.return()}finally{if(i)throw o}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(window.webpackJsonp=window.webpackJsonp||[]).push([[67,127],{ME8W:function(e,t,r){"use strict";r.r(t),r.d(t,"executeScript",function(){return se}),r.d(t,"extend",function(){return ie}),r.d(t,"extractFieldLiterals",function(){return le}),r.d(t,"findFunctionCalls",function(){return be}),r.d(t,"functionHelper",function(){return ue}),r.d(t,"referencesFunction",function(){return he}),r.d(t,"referencesMember",function(){return pe}),r.d(t,"validateScript",function(){return fe});var c=r("9MzC"),a=r("WZb1"),o=r("N2DF"),u=r("SuVq"),i=r("OvF4"),s=r("V9wi"),l=r("Ehki"),f=r("UhwK"),p=r("pqxT"),h=r("Q2u5"),b=r("kJip"),d=r("idrm"),O=r("D5C5"),v=r("Xfxc"),j=r("db86"),g=r("hTzF"),y=r("Xrjs"),w=r("k8am"),m=r("ACnk"),E=r("ve0I"),I=r("KvhC"),N=r("yBFI"),R=r("IqHt"),S=r("RrDw"),T=r("NOfn");function x(e){return e instanceof Error?Object(c.r)(e):Object(c.r)(new Error(e))}function A(e){return Object(c.s)(e)}function P(e,t){for(var n=[],r=0;r<t.arguments.length;r++)n.push(k(e,t.arguments[r]));return Object(c.b)(n)}function C(e,t,n){return Object(c.c)(function(r,c){P(e,t).then(function(a){try{r(n(e,t,a))}catch(o){c(o)}},c)})}function U(e,t,n){try{return P(e,t).then(function(r){try{var a=n(e,t,r);return function(e){return e&&"function"==typeof e.then}(a)?a:Object(c.s)(a)}catch(a){return x(a)}})}catch(r){return x(r)}}function k(e,t,r){try{if(t.breakpoint&&!0!==r)return t.breakpoint().then(function(){return k(e,t,!0)});switch(t.type){case"VariableDeclarator":return function(e,t){try{var n=null;return(n=null===t.init?Object(c.s)(null):k(e,t.init)).then(null!==e.localScope?function(n){return Object(c.c)(function(r){if(n===d.P&&(n=null),"Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");var c=t.id.name.toLowerCase();e.localScope[c]={value:n,valueset:!0,node:t.init},r(d.P)})}:function(n){return Object(c.c)(function(r){if("Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");var c=t.id.name.toLowerCase();n===d.P&&(n=null),e.globalScope[c]={value:n,valueset:!0,node:t.init},r(d.P)})})}catch(n){return x(n)}}(e,t);case"VariableDeclaration":return G(e,t,0);case"BlockStatement":return function(e,t){try{return Y(e,t,0)}catch(r){return x(r)}}(e,t);case"FunctionDeclaration":return function(e,t){try{var n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new p.a(t,e)},Object(c.s)(d.P)}catch(r){return x(r)}}(e,t);case"ReturnStatement":return function(e,t){return Object(c.c)(function(n,r){null===t.argument?n(new d.r(d.P)):k(e,t.argument).then(function(e){try{n(new d.r(e))}catch(t){r(t)}},r)})}(e,t);case"IfStatement":return function(e,t){return Object(c.c)(function(n,r){"AssignmentExpression"!==t.test.type&&"UpdateExpression"!==t.test.type?k(e,t.test).then(function(c){try{!0===c?k(e,t.consequent).then(n,r):!1===c?null!==t.alternate?k(e,t.alternate).then(n,r):n(d.P):r(new Error(Object(w.f)(t.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(a){r(a)}},r):r(new Error(Object(w.f)(t.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}(e,t);case"ExpressionStatement":return function(e,t){try{return"AssignmentExpression"===t.expression.type?k(e,t.expression):k(e,t.expression).then(function(e){return Object(c.c)(function(t){t(e===d.P?d.P:new d.i(e))})})}catch(n){return Object(c.r)(n)}}(e,t);case"UpdateExpression":return function(e,t){try{var n=t.argument;if("MemberExpression"===n.type){var r={t:null};return k(e,n.object).then(function(t){var a=null;return r.t=t,!0===n.computed?a=k(e,n.property):"Identifier"===n.property.type&&(a=Object(c.s)(n.property.name)),a}).then(function(e){return Object(c.c)(function(n){var c,a=r.t;if(Object(d.B)(a)){if(!Object(d.u)(e))throw new Error("Invalid Parameter");if(e<0&&(e=a.length+e),e<0||e>=a.length)throw new Error("Assignment outside of array bounds");c=Object(d.w)(a[e]),a[e]="++"===t.operator?c+1:c-1}else if(a instanceof O.a){if(!1===Object(d.v)(e))throw new Error("Dictionary accessor must be a string");if(!0!==a.hasField(e))throw new Error("Invalid Parameter");c=Object(d.w)(a.field(e)),a.setField(e,"++"===t.operator?c+1:c-1)}else{if(!(a instanceof y.a))throw Object(d.I)(a)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Object(d.v)(e))throw new Error("Feature accessor must be a string");if(!0!==a.hasField(e))throw new Error("Invalid Parameter");c=Object(d.w)(a.field(e)),a.setField(e,"++"===t.operator?c+1:c-1)}n(!1===t.prefix?c:"++"===t.operator?c+1:c-1)})})}return Object(c.c)(function(n,r){var c,a="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!a)throw new Error("Invalid identifier");return null!==e.localScope&&void 0!==e.localScope[a]?(c=Object(d.w)(e.localScope[a].value),e.localScope[a]={value:"++"===t.operator?c+1:c-1,valueset:!0,node:t},void n(!1===t.prefix?c:"++"===t.operator?c+1:c-1)):void 0!==e.globalScope[a]?(c=Object(d.w)(e.globalScope[a].value),e.globalScope[a]={value:"++"===t.operator?c+1:c-1,valueset:!0,node:t},void n(!1===t.prefix?c:"++"===t.operator?c+1:c-1)):void r(new Error("Variable not recognised"))})}catch(r){return Object(c.r)(r)}}(e,t);case"AssignmentExpression":return function(e,t){return Object(c.c)(function(n,r){var a=t.left;if("MemberExpression"===a.type)k(e,t.right).then(function(u){try{k(e,a.object).then(function(i){try{var s=null;if(!0===a.computed)s=k(e,a.property);else{if("Identifier"!==a.property.type)throw new Error("Expected computed or identifier for assignemnt target");s=Object(c.s)(a.property.name)}s.then(function(e){try{if(Object(d.B)(i)){if(!Object(d.u)(e))throw new Error("Invalid Parameter");if(e<0&&(e=i.length+e),e<0||e>i.length)throw new Error("Assignment outside of array bounds");if(e===i.length){if("="!==t.operator)throw new Error("Invalid Parameter");i[e]=V(u,t.operator,i[e],t)}else i[e]=V(u,t.operator,i[e],t)}else if(i instanceof O.a){if(!1===Object(d.v)(e))throw new Error("Dictionary accessor must be a string");if(!0===i.hasField(e))i.setField(e,V(u,t.operator,i.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");i.setField(e,V(u,t.operator,null,t))}}else{if(!(i instanceof y.a))throw Object(d.I)(i)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Object(d.v)(e))throw new Error("Feature accessor must be a string");if(!0===i.hasField(e))i.setField(e,V(u,t.operator,i.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");i.setField(e,V(u,t.operator,null,t))}}n(d.P)}catch(o){r(o)}},r)}catch(s){r(s)}},r)}catch(i){r(i)}},r);else{var o=a.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[o])return void k(e,t.right).then(function(c){try{e.localScope[o]={value:V(c,t.operator,e.localScope[o].value,t),valueset:!0,node:t.right},n(d.P)}catch(a){r(a)}},r);void 0!==e.globalScope[o]?k(e,t.right).then(function(c){try{e.globalScope[o]={value:V(c,t.operator,e.globalScope[o].value,t),valueset:!0,node:t.right},n(d.P)}catch(a){r(a)}},r):r(new Error("Cannot assign undeclared variable"))}})}(e,t);case"ForStatement":return function(e,t){try{return null!==t.init?k(e,t.init).then(function(){return Object(c.c)(function(n,r){F(e,t,{testResult:!0,lastAction:d.P},function(e){n(e)},function(e){r(e)},0)})}):Object(c.c)(function(n,r){F(e,t,{testResult:!0,lastAction:d.P},function(e){n(e)},function(e){r(e)},0)})}catch(n){return Object(c.r)(n)}}(e,t);case"ForInStatement":return function(e,t){return Object(c.c)(function(n,r){k(e,t.right).then(function(a){try{var o=null;(o="VariableDeclaration"===t.left.type?k(e,t.left):Object(c.s)()).then(function(){try{var c="";if("VariableDeclaration"===t.left.type){var u=t.left.declarations[0].id;"Identifier"===u.type&&(c=u.name)}else"Identifier"===t.left.type&&(c=t.left.name);if(!c)throw new Error(Object(w.f)(t,"RUNTIME","INVALIDVARIABLE"));c=c.toLowerCase();var i=null;if(null!==e.localScope&&void 0!==e.localScope[c]&&(i=e.localScope[c]),null===i&&void 0!==e.globalScope[c]&&(i=e.globalScope[c]),null===i)return void r(new Error(Object(w.f)(t,"RUNTIME","VARIABLENOTDECLARED")));Object(d.B)(a)||Object(d.v)(a)?_(e,t,a,{reject:r,resolve:n},i):Object(d.I)(a)?function(e,t,n,r,c,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(d.P);L(e,t,n,c,0,a,function(e){r.resolve(e)},function(e){r.reject(e)},0)}catch(o){r.reject(o)}}(e,t,a,{reject:r,resolve:n},i):a instanceof O.a||a instanceof y.a?function(e,t,n,r,c){try{_(e,t,n.keys(),r,c,"k")}catch(a){r.reject(a)}}(e,t,a,{reject:r,resolve:n},i):Object(d.T)(a)?B(a.iterator(e.abortSignal),e,t,a,i,function(e){n(e)},function(e){r(e)},0):_(e,t,[],{reject:r,resolve:n},i)}catch(c){r(c)}},r)}catch(o){r(o)}},r)})}(e,t);case"BreakStatement":return Object(c.s)(d.R);case"EmptyStatement":return Object(c.s)(d.P);case"ContinueStatement":return Object(c.s)(d.S);case"TemplateElement":return function(e,t){return Object(c.s)(t.value?t.value.cooked:"")}(0,t);case"TemplateLiteral":return function(e,t){return Object(c.c)(function(r){var c=[];Object(g.o)(t.expressions,function(t,n,r,a){return k(e,n).then(function(e){c[r]=Object(d.y)(e)})}).then(function(){var e,a="",o=0,u=n(t.quasis);try{for(u.s();!(e=u.n()).done;){var i=e.value;a+=i.value?i.value.cooked:"",!1===i.tail&&(a+=c[o]?c[o]:"",o++)}}catch(s){u.e(s)}finally{u.f()}r(a)})})}(e,t);case"Identifier":return H(e,t);case"MemberExpression":return function(e,t){try{return k(e,t.object).then(function(n){try{return null===n?Object(c.r)(new Error(Object(w.f)(t,"RUNTIME","NOTFOUND"))):!1===t.computed?"Identifier"===t.property.type?n instanceof O.a||n instanceof y.a?Object(c.s)(n.field(t.property.name)):n instanceof o.a?Object(c.s)(z(n,t.property.name,0,t)):Object(c.r)(new Error(Object(w.f)(t,"RUNTIME","INVALIDTYPE"))):Object(c.r)(new Error(Object(w.f)(t,"RUNTIME","INVALIDTYPE"))):k(e,t.property).then(function(e){return Object(c.c)(function(r,c){if(n instanceof O.a||n instanceof y.a)Object(d.v)(e)?r(n.field(e)):c(new Error(Object(w.f)(t,"RUNTIME","INVALIDTYPE")));else if(n instanceof o.a)Object(d.v)(e)?r(z(n,e,0,t)):c(new Error(Object(w.f)(t,"RUNTIME","INVALIDTYPE")));else if(Object(d.B)(n))if(Object(d.u)(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=n.length+e),e>=n.length||e<0)throw new Error(Object(w.f)(t,"RUNTIME","OUTOFBOUNDS"));r(n[e])}else c(new Error(Object(w.f)(t,"RUNTIME","INVALIDTYPE")));else if(Object(d.I)(n))if(Object(d.u)(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=n.length()+e),e>=n.length()||e<0)throw new Error(Object(w.f)(t,"RUNTIME","OUTOFBOUNDS"));r(n.get(e))}else c(new Error(Object(w.f)(t,"RUNTIME","INVALIDTYPE")));else if(Object(d.v)(n))if(Object(d.u)(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=n.length+e),e>=n.length||e<0)throw new Error(Object(w.f)(t,"RUNTIME","OUTOFBOUNDS"));r(n[e])}else c(new Error(Object(w.f)(t,"RUNTIME","INVALIDTYPE")));else c(new Error(Object(w.f)(t,"RUNTIME","INVALIDTYPE")))})})}catch(r){return x(r)}})}catch(n){return x(n)}}(e,t);case"Literal":return A(t.value);case"CallExpression":return function(e,t){try{if("Identifier"!==t.callee.type)return x(Object(w.f)(t,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){var n=e.localScope[t.callee.name.toLowerCase()];return n.value instanceof d.n?n.value.fn(e,t):n.value instanceof p.a?te(e,t,n.value.definition):x(Object(w.f)(t,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){var c=e.globalScope[t.callee.name.toLowerCase()];return c.value instanceof d.n?c.value.fn(e,t):c.value instanceof p.a?te(e,t,c.value.definition):x(Object(w.f)(t,"RUNTIME","NOTAFUNCTION"))}return x(Object(w.f)(t,"RUNTIME","NOTFOUND"))}catch(r){return x(r)}}(e,t);case"UnaryExpression":return function(e,t){try{return k(e,t.argument).then(function(e){return Object(c.c)(function(n,r){Object(d.C)(e)&&"!"===t.operator?n(!e):"-"===t.operator?n(-1*Object(d.w)(e)):"+"===t.operator?n(1*Object(d.w)(e)):"~"===t.operator?n(~Object(d.w)(e)):r(new Error(Object(w.f)(t,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))})})}catch(n){return x(n)}}(e,t);case"BinaryExpression":return function(e,t){try{return Object(c.b)([k(e,t.left),k(e,t.right)]).then(function(e){return Object(c.c)(function(n,r){var c=e[0],a=e[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":n(Object(d.O)(Object(d.w)(c),Object(d.w)(a),t.operator));case"==":n(Object(d.H)(c,a));break;case"!=":n(!Object(d.H)(c,a));break;case"<":case">":case"<=":case">=":n(Object(d.M)(c,a,t.operator));break;case"+":Object(d.v)(c)||Object(d.v)(a)?n(Object(d.y)(c)+Object(d.y)(a)):n(Object(d.w)(c)+Object(d.w)(a));break;case"-":n(Object(d.w)(c)-Object(d.w)(a));break;case"*":n(Object(d.w)(c)*Object(d.w)(a));break;case"/":n(Object(d.w)(c)/Object(d.w)(a));break;case"%":n(Object(d.w)(c)%Object(d.w)(a));break;default:r(new Error(Object(w.f)(t,"RUNTIME","OPERATORNOTRECOGNISED")))}})})}catch(n){return x(n)}}(e,t);case"LogicalExpression":return function(e,t){return Object(c.c)(function(n,r){"AssignmentExpression"!==t.left.type&&"UpdateExpression"!==t.left.type?"AssignmentExpression"!==t.right.type&&"UpdateExpression"!==t.right.type?k(e,t.left).then(function(c){try{if(!Object(d.C)(c))throw new Error(Object(w.f)(t,"RUNTIME","ONLYBOOLEAN"));switch(t.operator){case"||":!0===c?n(c):k(e,t.right).then(function(e){try{if(!Object(d.C)(e))throw new Error(Object(w.f)(t,"RUNTIME","ONLYORORAND"));n(e)}catch(c){r(c)}},r);break;case"&&":!1===c?n(c):k(e,t.right).then(function(e){try{if(!Object(d.C)(e))throw new Error(Object(w.f)(t,"RUNTIME","ONLYORORAND"));n(e)}catch(c){r(c)}},r);break;default:throw new Error(Object(w.f)(t,"RUNTIME","ONLYORORAND"))}}catch(a){r(a)}},r):r(new Error(Object(w.f)(t.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):r(new Error(Object(w.f)(t.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}(e,t);case"ConditionalExpression":return x(Object(w.f)(t,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return function(e,t){try{for(var n=[],r=0;r<t.elements.length;r++)n.push(k(e,t.elements[r]));return Object(c.b)(n).then(function(e){return Object(c.c)(function(n,r){for(var c=0;c<e.length;c++){if(Object(d.K)(e[c]))return void r(new Error(Object(w.f)(t,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[c]===d.P&&(e[c]=null)}n(e)})})}catch(n){return x(n)}}(e,t);case"ObjectExpression":return function(e,t){try{for(var n=[],r=0;r<t.properties.length;r++)n.push(k(e,t.properties[r]));return Object(c.b)(n).then(function(e){return Object(c.c)(function(t){for(var n={},r=0;r<e.length;r++){var c=e[r];if(Object(d.K)(c.value))throw new Error("Illegal Argument");if(!1===Object(d.v)(c.key))throw new Error("Illegal Argument");n[c.key.toString()]=c.value===d.P?null:c.value}var a=new O.a(n);a.immutable=!1,t(a)})})}catch(n){return x(n)}}(e,t);case"Property":return function(e,t){try{return k(e,t.value).then(function(n){return Object(c.c)(function(r){"Identifier"===t.key.type?r({key:t.key.name,value:n}):k(e,t.key).then(function(e){r({key:e,value:n})})})})}catch(n){return Object(c.r)(n)}}(e,t);default:return x(Object(w.f)(t,"RUNTIME","UNREOGNISED"))}}catch(a){return x(a)}}function M(e,t,n){try{return k(e,t.body).then(function(r){try{return n.lastAction=r,n.lastAction===d.R||n.lastAction instanceof d.r?(n.testResult=!1,Object(c.s)(n)):null!==t.update?k(e,t.update).then(function(){return Object(c.s)(n)}):Object(c.s)(n)}catch(a){return Object(c.r)(a)}})}catch(r){return Object(c.r)(r)}}function F(e,t,n,r,a,o){try{(function(e,t,n){try{return null!==t.test?k(e,t.test).then(function(r){try{return!0===e.abortSignal.aborted?Object(c.r)(new Error("Cancelled")):(n.testResult=r,!1===n.testResult?Object(c.s)(n):!0!==n.testResult?Object(c.r)(new Error(Object(w.f)(t,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):M(e,t,n))}catch(a){return Object(c.r)(a)}}):M(e,t,n)}catch(o){return Object(c.r)(o)}})(e,t,n).then(function(){try{!0===n.testResult?++o>100?(o=0,setTimeout(function(){F(e,t,n,r,a,o)},0)):F(e,t,n,r,a,o):r(n.lastAction instanceof d.r?n.lastAction:d.P)}catch(c){a(c)}},function(e){a(e)})}catch(u){a(u)}}function D(e,t,n,r,c,a,o,u,i,s){try{if(r<=a)return void u(d.P);c.value="k"===o?n[a]:a,k(e,t.body).then(function(l){try{l instanceof d.r?u(l):l===d.R?u(d.P):++s>100?(s=0,setTimeout(function(){D(e,t,n,r,c,a+1,o,u,i,s)},0)):D(e,t,n,r,c,a+1,o,u,i,s)}catch(f){i(f)}},function(e){i(e)})}catch(l){i(l)}}function L(e,t,n,r,c,a,o,u,i){try{if(n.length()<=c)return void o(d.P);r.value="k"===a?n.get(c):c,k(e,t.body).then(function(s){s instanceof d.r?o(s):s===d.R?o(d.P):++i>100?(i=0,setTimeout(function(){L(e,t,n,r,c+1,a,o,u,i)},0)):L(e,t,n,r,c+1,a,o,u,i)},function(e){u(e)})}catch(s){u(s)}}function _(e,t,n,r,c,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(d.P);D(e,t,n,n.length,c,0,a,function(e){r.resolve(e)},function(e){r.reject(e)},0)}catch(o){r.reject(o)}}function B(e,t,n,r,c,a,o,u){try{e.next().then(function(i){try{if(null===i)a(d.P);else{var s=y.a.createFromGraphicLikeObject(i.geometry,i.attributes,r);s._underlyingGraphic=i,c.value=s,k(t,n.body).then(function(i){try{i===d.R?a(d.P):i instanceof d.r?a(i):++u>100?(u=0,setTimeout(function(){B(e,t,n,r,c,a,o,u)},0)):B(e,t,n,r,c,a,o,u)}catch(s){o(s)}},function(e){o(e)})}}catch(s){o(s)}},function(e){o(e)})}catch(i){o(i)}}function V(e,t,n,r){switch(t){case"=":return e===d.P?null:e;case"/=":return Object(d.w)(n)/Object(d.w)(e);case"*=":return Object(d.w)(n)*Object(d.w)(e);case"-=":return Object(d.w)(n)-Object(d.w)(e);case"+=":return Object(d.v)(n)||Object(d.v)(e)?Object(d.y)(n)+Object(d.y)(e):Object(d.w)(n)+Object(d.w)(e);case"%=":return Object(d.w)(n)%Object(d.w)(e);default:throw new Error(Object(w.f)(r,"RUNTIME","OPERATORNOTRECOGNISED"))}}function Y(e,t,n){try{return n>=t.body.length?Object(c.s)(d.P):Object(c.c)(function(r,c){k(e,t.body[n]).then(function(a){try{a instanceof d.r||a===d.R||a===d.S||n===t.body.length-1?r(a):Y(e,t,n+1).then(r,c)}catch(o){c(o)}},c)})}catch(r){return x(r)}}function G(e,t,n){return Object(c.c)(function(r,c){n>=t.declarations.length?r(d.P):k(e,t.declarations[n]).then(function(){n===t.declarations.length-1?r(d.P):G(e,t,n+1).then(function(){r(d.P)},c)},c)})}var q=0;function z(e,t,n,r){var c;switch(t=t.toLowerCase()){case"hasz":var a=e.hasZ;return void 0!==a&&a;case"hasm":var o=e.hasM;return void 0!==o&&o;case"spatialreference":var u=e.spatialReference._arcadeCacheId;if(void 0===u){var i=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(i=!1),i&&(q++,e.spatialReference._arcadeCacheId=q,u=q)}var s=new O.a({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==u&&(s._arcadeCacheId="SPREF"+u.toString()),s}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":var l=e[t];return void 0!==l?l:null;case"type":return"Extent"}break;case"polygon":switch(t){case"rings":return void 0===(c=e.cache._arcadeCacheId)&&(c=++q,e.cache._arcadeCacheId=c),new b.a(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,c);case"type":return"Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return"Point"}break;case"polyline":switch(t){case"paths":return void 0===(c=e.cache._arcadeCacheId)&&(c=++q,e.cache._arcadeCacheId=c),new b.a(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,c);case"type":return"Polyline"}break;case"multipoint":switch(t){case"points":return void 0===(c=e.cache._arcadeCacheId)&&(c=++q,e.cache._arcadeCacheId=c),new h.a(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,c,1);case"type":return"Multipoint"}}throw new Error(Object(w.f)(r,"RUNTIME","PROPERTYNOTFOUND"))}function H(e,t){return Object(c.c)(function(n,r){var c=t.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[c])if(void 0===e.globalScope[c])r(new Error(Object(w.f)(t,"RUNTIME","VARIABLENOTFOUND")));else{var a=e.globalScope[c];!0===a.valueset?n(a.value):null!==a.d?a.d.then(n,r):(a.d=k(e,a.node),a.d.then(function(e){try{a.value=e,a.valueset=!0,n(e)}catch(c){r(c)}},r))}else{var o=e.localScope[c];!0===o.valueset?n(o.value):null!==o.d?o.d.then(n,r):(o.d=k(e,o.node),o.d.then(function(e){try{o.value=e,o.valueset=!0,n(e)}catch(c){r(c)}},r))}})}var J={};function K(e){return null===e?"":Object(d.B)(e)||Object(d.I)(e)?"Array":Object(d.z)(e)?"Date":Object(d.v)(e)?"String":Object(d.C)(e)?"Boolean":Object(d.u)(e)?"Number":e instanceof j.a?"Attachment":e instanceof v.a?"Portal":e instanceof O.a?"Dictionary":e instanceof y.a?"Feature":e instanceof u.a?"Point":e instanceof l.a?"Polygon":e instanceof f.a?"Polyline":e instanceof s.a?"Multipoint":e instanceof i.a?"Extent":Object(d.K)(e)?"Function":Object(d.T)(e)?"FeatureSet":Object(d.a)(e)?"FeatureSetCollection":e===d.P?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function W(e,t,n,r){return Object(c.c)(function(c,a){k(e,t.arguments[n]).then(function(o){try{if(Object(d.H)(o,r))return void k(e,t.arguments[n+1]).then(c,a);var u=t.arguments.length-n;return 1===u?void k(e,t.arguments[n]).then(c,a):(2===u&&c(null),3===u?void k(e,t.arguments[n+2]).then(c,a):void W(e,t,n+2,r).then(c,a))}catch(i){a(i)}},a)})}function Z(e,t,n,r){return Object(c.c)(function(c,a){!0===r?k(e,t.arguments[n+1]).then(c,a):3==t.arguments.length-n?k(e,t.arguments[n+2]).then(c,a):k(e,t.arguments[n+2]).then(function(r){try{if(!1===Object(d.C)(r))return void a(new Error("WHEN needs boolean test conditions"));Z(e,t,n+2,r).then(c,a)}catch(o){a(o)}})})}function X(e,t){try{var n=e.length,r=Math.floor(n/2);return 0===n?Object(c.s)([]):1===n?Object(c.s)([e[0]]):Object(c.c)(function(a,o){var u=[X(e.slice(0,r),t),X(e.slice(r,n),t)];Object(c.b)(u).then(function(n){try{Q(n[0],n[1],t,[]).then(a,o)}catch(e){o(e)}},o)})}catch(n){return x(n)}}function Q(e,t,n,r){return Object(c.c)(function(c,a){var o=r;e.length>0||t.length>0?e.length>0&&t.length>0?n(e[0],t[0]).then(function(u){try{isNaN(u)&&(u=1),u<=0?(o.push(e[0]),e=e.slice(1)):(o.push(t[0]),t=t.slice(1)),Q(e,t,n,r).then(c,a)}catch(i){a(i)}},a):e.length>0?(o.push(e[0]),Q(e=e.slice(1),t,n,r).then(c,a)):t.length>0&&(o.push(t[0]),t=t.slice(1),Q(e,t,n,r).then(c,a)):c(r)})}function $(e,t){var n=e.length,r=Math.floor(n/2);return t||(t=function(e,t){return e<t?-1:e===t?0:1}),0===n?[]:1===n?[e[0]]:function(e,t,n){for(var r=[];e.length>0||t.length>0;)if(e.length>0&&t.length>0){var c=n(e[0],t[0]);isNaN(c)&&(c=1),c<=0?(r.push(e[0]),e=e.slice(1)):(r.push(t[0]),t=t.slice(1))}else e.length>0?(r.push(e[0]),e=e.slice(1)):t.length>0&&(r.push(t[0]),t=t.slice(1));return r}($(e.slice(0,r),t),$(e.slice(r,n),t),t)}function ee(e,t,n){try{var r=e.body;if(n.length!==e.params.length)return x(new Error("Invalid Parameter calls to function."));for(var a=0;a<n.length;a++){var o=e.params[a];"Identifier"===o.type&&(t.localScope[o.name.toLowerCase()]={d:null,value:n[a],valueset:!0,node:null})}return k(t,r).then(function(e){return Object(c.c)(function(t,n){e instanceof d.r?t(e.value):e!==d.R?e!==d.S?t(e instanceof d.i?e.value:e):n(new Error("Cannot Continue from a Function")):n(new Error("Cannot Break from a Function"))})})}catch(u){return Object(c.r)(u)}}function te(e,t,n){return U(e,t,function(t,r,c){var a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return ee(n,a,c)})}function ne(e){return function(){var t={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,interceptor:e.context.interceptor,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(t.depthCounter>64)throw new Error("Exceeded maximum function depth");return ee(e.definition,t,arguments)}}Object(m.a)(J,C),Object(E.a)(J,C),Object(S.a)(J,C),Object(N.a)(J,C),Object(I.a)(J,C),Object(R.a)(J,C),Object(T.registerFunctions)({functions:J,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:C,standardFunctionAsync:U}),J.typeof=function(e,t){return C(e,t,function(e,t,n){Object(d.J)(n,1,1);var r=K(n[0]);if("Unrecognised Type"===r)throw new Error("Unrecognised Type");return r})},J.iif=function(e,t){return Object(c.c)(function(n,r){Object(d.J)(null===t.arguments?[]:t.arguments,3,3),k(e,t.arguments[0]).then(function(a){try{if(!1===Object(d.C)(a))return void r(new Error("IF Function must have a boolean test condition"));Object(c.b)([k(e,t.arguments[1]),k(e,t.arguments[2])]).then(function(e){n(a?e[0]:e[1])},r)}catch(o){r(o)}},r)})},J.decode=function(e,t){return Object(c.c)(function(n,r){t.arguments.length<2?r(new Error("Missing Parameters")):2!==t.arguments.length?(t.arguments.length-1)%2!=0?k(e,t.arguments[0]).then(function(c){try{W(e,t,1,c).then(n,r)}catch(a){r(a)}},r):r(new Error("Must have a default value result.")):k(e,t.arguments[1]).then(n,r)})},J.when=function(e,t){try{return t.arguments.length<3?x("Missing Parameters"):t.arguments.length%2==0?x("Must have a default value result."):k(e,t.arguments[0]).then(function(n){return Object(c.c)(function(r,c){!1!==Object(d.C)(n)?Z(e,t,0,n).then(r,c):c(new Error("WHEN needs boolean test conditions"))})})}catch(n){return x(n)}},J.sort=function(e,t){return U(e,t,function(e,t,n){Object(d.J)(n,1,2);var r=n[0];if(Object(d.I)(r)&&(r=r.toArray()),!1===Object(d.B)(r))return x(Error("Illegal Argument"));if(n.length>1)return!1===Object(d.K)(n[1])?x(Error("Illegal Argument")):X(r,ne(n[1]));var a=r;if(0===a.length)return Object(c.s)([]);for(var o={},u=0;u<a.length;u++){var i=K(a[u]);""!==i&&(o[i]=!0)}if(!0===o.Array||!0===o.Dictionary||!0===o.Feature||!0===o.Point||!0===o.Polygon||!0===o.Polyline||!0===o.Multipoint||!0===o.Extent||!0===o.Function)return Object(c.s)(a.slice(0));var s=0,l="";for(var f in o)s++,l=f;return s>1||"String"===l?a=$(a,function(e,t){if(null==e||e===d.P)return null==t||t===d.P?0:1;if(null==t||t===d.P)return-1;var n=Object(d.y)(e),r=Object(d.y)(t);return n<r?-1:n===r?0:1}):"Number"===l?a=$(a,function(e,t){return e-t}):"Boolean"===l?a=$(a,function(e,t){return e===t?0:t?-1:1}):"Date"===l&&(a=$(a,function(e,t){return t-e})),Object(c.s)(a)})};var re={failDefferred:x,resolveDeffered:A,fixSpatialReference:d.L,parseArguments:P,standardFunction:C,standardFunctionAsync:U,evaluateIdentifier:H,arcadeCustomFunction:ne};for(var ce in J)J[ce]={value:new d.n(J[ce]),valueset:!0,node:null};var ae=function(){};function oe(e){console.log(e)}(ae.prototype=J).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},ae.prototype.pi={value:Math.PI,valueset:!0,node:null};var ue=re;function ie(e){for(var t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:C,standardFunctionAsync:U,failDefferred:x,evaluateIdentifier:H,arcadeCustomFunctionHandler:ne},n=0;n<e.length;n++)e[n].registerFunctions(t);for(var r in t.functions)J[r]={value:new d.n(t.functions[r]),valueset:!0,node:null},ae.prototype[r]=J[r];for(var c=0;c<t.signatures.length;c++)Object(w.a)(t.signatures[c],"async")}function se(e,t){var n=t.spatialReference;null==n&&(n=new a.a({wkid:102100}));var r=function(e,t){var n=new ae;null==e&&(e={}),null==t&&(t={});var r=new O.a({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});for(var c in r.immutable=!1,n.textformatting={value:r,valueset:!0,node:null},t)n[c]={value:new d.n(t[c]),native:!0,valueset:!0,node:null};for(var a in e)n[a]=e[a]&&"esri.Graphic"===e[a].declaredClass?{value:y.a.createFromGraphic(e[a]),valueset:!0,node:null}:{value:e[a],valueset:!0,node:null};return n}(t.vars,t.customfunctions);return k({spatialReference:n,services:t.services,abortSignal:null==t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:r,console:t.console?t.console:oe,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:1},e.body[0].body).then(function(e){return Object(c.c)(function(t,n){e instanceof d.r&&(e=e.value),e instanceof d.i&&(e=e.value),e===d.P&&(e=null),e!==d.R?e!==d.S?e instanceof d.n||e instanceof p.a?n(new Error("Cannot return FUNCTION")):t(e):n(new Error("Cannot return CONTINUE")):n(new Error("Cannot return BREAK"))})})}function le(e,t){return Object(w.c)(e)}function fe(e,t){return Object(w.j)(e,t,"full")}function pe(e,t){return Object(w.h)(e,t)}function he(e,t){return Object(w.g)(e,t)}function be(e){return Object(w.d)(e)}},u1HQ:function(e,n,r){"use strict";r.d(n,"a",function(){return _}),r.d(n,"b",function(){return p}),r.d(n,"c",function(){return O}),r.d(n,"d",function(){return v}),r.d(n,"e",function(){return b}),r.d(n,"f",function(){return J}),r.d(n,"g",function(){return x}),r.d(n,"h",function(){return E}),r.d(n,"i",function(){return j}),r.d(n,"j",function(){return g}),r.d(n,"k",function(){return z}),r.d(n,"l",function(){return $}),r.d(n,"m",function(){return V}),r.d(n,"n",function(){return W}),r.d(n,"o",function(){return ee}),r.d(n,"p",function(){return U}),r.d(n,"q",function(){return y}),r.d(n,"r",function(){return R}),r.d(n,"s",function(){return D}),r.d(n,"t",function(){return I}),r.d(n,"u",function(){return X}),r.d(n,"v",function(){return Q}),r.d(n,"w",function(){return N}),r.d(n,"x",function(){return G}),r.d(n,"y",function(){return S}),r.d(n,"z",function(){return P}),r.d(n,"A",function(){return w}),r.d(n,"B",function(){return M}),r.d(n,"C",function(){return m}),r("SuVq");var c,a=r("qatw"),o=(r("4GrV"),r("36Co"));function u(e){var t;return Array.isArray(e)?null==(t=e[0])?void 0:t.spatialReference:null==e?void 0:e.spatialReference}function i(e){return e?Array.isArray(e)?e.map(i):e.toJSON?e.toJSON():e:e}function s(e){return Array.isArray(e)?e.map(function(e){return Object(a.a)(e)}):Object(a.a)(e)}function l(e,t){return f.apply(this,arguments)}function f(){return(f=t(regeneratorRuntime.mark(function e(n,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(c||(c=Object(o.b)("geometryEngineWorker",{strategy:"distributed"})),c));case 1:case"end":return e.stop()}},e)}))();case 2:return e.abrupt("return",e.sent.invoke("executeGEOperation",{operation:n,parameters:i(r)}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(e,t){return h.apply(this,arguments)}function h(){return(h=t(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l("clip",[u(t),t,n]);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(e,t){return d.apply(this,arguments)}function d(){return(d=t(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l("cut",[u(t),t,n]);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e,t){return l("contains",[u(e),e,t])}function v(e,t){return l("crosses",[u(e),e,t])}function j(e,t,n){return l("distance",[u(e),e,t,n])}function g(e,t){return l("equals",[u(e),e,t])}function y(e,t){return l("intersects",[u(e),e,t])}function w(e,t){return l("touches",[u(e),e,t])}function m(e,t){return l("within",[u(e),e,t])}function E(e,t){return l("disjoint",[u(e),e,t])}function I(e,t){return l("overlaps",[u(e),e,t])}function N(e,t,n){return l("relate",[u(e),e,t,n])}function R(e){return l("isSimple",[u(e),e])}function S(e){return T.apply(this,arguments)}function T(){return(T=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l("simplify",[u(t),t]);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(e,t){return A.apply(this,arguments)}function A(){return(A=t(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l("difference",[u(t),t,n]);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e,t){return C.apply(this,arguments)}function C(){return(C=t(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l("symmetricDifference",[u(t),t,n]);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function U(e,t){return k.apply(this,arguments)}function k(){return(k=t(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l("intersect",[u(t),t,n]);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(e){return F.apply(this,arguments)}function F(){return(F=t(regeneratorRuntime.mark(function e(t){var n,r,c=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:null,r=function(e,t){var n;return Array.isArray(e)?n=e:((n=[]).push(e),null!=t&&n.push(t)),n}(t,n),e.t0=s,e.next=5,l("union",[u(r),r]);case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(e,t,n,r,c,a){return L.apply(this,arguments)}function L(){return(L=t(regeneratorRuntime.mark(function e(t,n,r,c,a,o){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l("offset",[u(t),t,n,r,c,a,o]);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(e,t,n){return B.apply(this,arguments)}function B(){return(B=t(regeneratorRuntime.mark(function e(t,n,r){var c,a,o=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>3&&void 0!==o[3]&&o[3],a=[u(t),t,n,r,c],e.t0=s,e.next=5,l("buffer",a);case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function V(e,t,n,r,c,a){return Y.apply(this,arguments)}function Y(){return(Y=t(regeneratorRuntime.mark(function e(t,n,r,c,a,o){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=[u(t),t,n,r,c,a,o],e.t0=s,e.next=4,l("geodesicBuffer",i);case 4:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function G(e,t,n){return q.apply(this,arguments)}function q(){return(q=t(regeneratorRuntime.mark(function e(t,n,r){var c,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=2;break}throw new Error("Illegal Argument Exception");case 2:return a=t.spatialReference,r=null!=(c=r)?c:function(e){return"xmin"in e?e.center:"x"in e?e:e.extent.center}(t),e.t0=t.constructor,e.next=7,l("rotate",[a,t,n,r]);case 7:return e.t1=e.sent,o=e.t0.fromJSON.call(e.t0,e.t1),e.abrupt("return",(o.spatialReference=a,o));case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(e,t,n,r){return H.apply(this,arguments)}function H(){return(H=t(regeneratorRuntime.mark(function e(t,n,r,c){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l("generalize",[u(t),t,n,r,c]);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(e,t,n){return K.apply(this,arguments)}function K(){return(K=t(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l("densify",[u(t),t,n,r]);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function W(e,t,n){return Z.apply(this,arguments)}function Z(){return(Z=t(regeneratorRuntime.mark(function e(t,n,r){var c,a=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>3&&void 0!==a[3]?a[3]:0,e.t0=s,e.next=4,l("geodesicDensify",[u(t),t,n,r,c]);case 4:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function X(e,t){return l("planarArea",[u(e),e,t])}function Q(e,t){return l("planarLength",[u(e),e,t])}function $(e,t,n){return l("geodesicArea",[u(e),e,t,n])}function ee(e,t,n){return l("geodesicLength",[u(e),e,t,n])}}}])}();