(window.webpackJsonp=window.webpackJsonp||[]).push([[67,127],{ME8W:function(e,t,n){"use strict";n.r(t),n.d(t,"executeScript",function(){return ie}),n.d(t,"extend",function(){return ae}),n.d(t,"extractFieldLiterals",function(){return ue}),n.d(t,"findFunctionCalls",function(){return be}),n.d(t,"functionHelper",function(){return oe}),n.d(t,"referencesFunction",function(){return fe}),n.d(t,"referencesMember",function(){return le}),n.d(t,"validateScript",function(){return se});var r=n("9MzC"),c=n("WZb1"),o=n("N2DF"),a=n("SuVq"),i=n("OvF4"),u=n("V9wi"),s=n("Ehki"),l=n("UhwK"),f=n("pqxT"),b=n("Q2u5"),h=n("kJip"),O=n("idrm"),d=n("D5C5"),p=n("Xfxc"),j=n("db86"),w=n("hTzF"),y=n("Xrjs"),g=n("k8am"),E=n("ACnk"),v=n("ve0I"),m=n("KvhC"),N=n("yBFI"),I=n("IqHt"),S=n("RrDw"),T=n("NOfn");function R(e){return e instanceof Error?Object(r.r)(e):Object(r.r)(new Error(e))}function C(e){return Object(r.s)(e)}function P(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(x(e,t.arguments[r]));return Object(r.b)(n)}function A(e,t,n){return Object(r.c)((r,c)=>{P(e,t).then(o=>{try{r(n(e,t,o))}catch(a){c(a)}},c)})}function U(e,t,n){try{return P(e,t).then(c=>{try{const o=n(e,t,c);return function(e){return e&&"function"==typeof e.then}(o)?o:Object(r.s)(o)}catch(o){return R(o)}})}catch(c){return R(c)}}function x(e,t,n){try{if(t.breakpoint&&!0!==n)return t.breakpoint().then(()=>x(e,t,!0));switch(t.type){case"VariableDeclarator":return function(e,t){try{let n=null;return n=null===t.init?Object(r.s)(null):x(e,t.init),n.then(null!==e.localScope?n=>Object(r.c)(r=>{if(n===O.P&&(n=null),"Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const c=t.id.name.toLowerCase();e.localScope[c]={value:n,valueset:!0,node:t.init},r(O.P)}):n=>Object(r.c)(r=>{if("Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const c=t.id.name.toLowerCase();n===O.P&&(n=null),e.globalScope[c]={value:n,valueset:!0,node:t.init},r(O.P)}))}catch(n){return R(n)}}(e,t);case"VariableDeclaration":return Y(e,t,0);case"BlockStatement":return function(e,t){try{return V(e,t,0)}catch(n){return R(n)}}(e,t);case"FunctionDeclaration":return function(e,t){try{const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new f.a(t,e)},Object(r.s)(O.P)}catch(n){return R(n)}}(e,t);case"ReturnStatement":return function(e,t){return Object(r.c)((n,r)=>{null===t.argument?n(new O.r(O.P)):x(e,t.argument).then(e=>{try{n(new O.r(e))}catch(t){r(t)}},r)})}(e,t);case"IfStatement":return function(e,t){return Object(r.c)((n,r)=>{"AssignmentExpression"!==t.test.type&&"UpdateExpression"!==t.test.type?x(e,t.test).then(c=>{try{!0===c?x(e,t.consequent).then(n,r):!1===c?null!==t.alternate?x(e,t.alternate).then(n,r):n(O.P):r(new Error(Object(g.f)(t.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(o){r(o)}},r):r(new Error(Object(g.f)(t.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}(e,t);case"ExpressionStatement":return function(e,t){try{return"AssignmentExpression"===t.expression.type?x(e,t.expression):x(e,t.expression).then(e=>Object(r.c)(t=>{t(e===O.P?O.P:new O.i(e))}))}catch(n){return Object(r.r)(n)}}(e,t);case"UpdateExpression":return function(e,t){try{const n=t.argument;if("MemberExpression"===n.type){const c={t:null};return x(e,n.object).then(t=>{let o=null;return c.t=t,!0===n.computed?o=x(e,n.property):"Identifier"===n.property.type&&(o=Object(r.s)(n.property.name)),o}).then(e=>Object(r.c)(n=>{const r=c.t;let o;if(Object(O.B)(r)){if(!Object(O.u)(e))throw new Error("Invalid Parameter");if(e<0&&(e=r.length+e),e<0||e>=r.length)throw new Error("Assignment outside of array bounds");o=Object(O.w)(r[e]),r[e]="++"===t.operator?o+1:o-1}else if(r instanceof d.a){if(!1===Object(O.v)(e))throw new Error("Dictionary accessor must be a string");if(!0!==r.hasField(e))throw new Error("Invalid Parameter");o=Object(O.w)(r.field(e)),r.setField(e,"++"===t.operator?o+1:o-1)}else{if(!(r instanceof y.a))throw Object(O.I)(r)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Object(O.v)(e))throw new Error("Feature accessor must be a string");if(!0!==r.hasField(e))throw new Error("Invalid Parameter");o=Object(O.w)(r.field(e)),r.setField(e,"++"===t.operator?o+1:o-1)}n(!1===t.prefix?o:"++"===t.operator?o+1:o-1)}))}return Object(r.c)((n,r)=>{const c="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!c)throw new Error("Invalid identifier");let o;return null!==e.localScope&&void 0!==e.localScope[c]?(o=Object(O.w)(e.localScope[c].value),e.localScope[c]={value:"++"===t.operator?o+1:o-1,valueset:!0,node:t},void n(!1===t.prefix?o:"++"===t.operator?o+1:o-1)):void 0!==e.globalScope[c]?(o=Object(O.w)(e.globalScope[c].value),e.globalScope[c]={value:"++"===t.operator?o+1:o-1,valueset:!0,node:t},void n(!1===t.prefix?o:"++"===t.operator?o+1:o-1)):void r(new Error("Variable not recognised"))})}catch(n){return Object(r.r)(n)}}(e,t);case"AssignmentExpression":return function(e,t){return Object(r.c)((n,c)=>{const o=t.left;if("MemberExpression"===o.type)x(e,t.right).then(a=>{try{x(e,o.object).then(i=>{try{let u=null;if(!0===o.computed)u=x(e,o.property);else{if("Identifier"!==o.property.type)throw new Error("Expected computed or identifier for assignemnt target");u=Object(r.s)(o.property.name)}u.then(e=>{try{if(Object(O.B)(i)){if(!Object(O.u)(e))throw new Error("Invalid Parameter");if(e<0&&(e=i.length+e),e<0||e>i.length)throw new Error("Assignment outside of array bounds");if(e===i.length){if("="!==t.operator)throw new Error("Invalid Parameter");i[e]=B(a,t.operator,i[e],t)}else i[e]=B(a,t.operator,i[e],t)}else if(i instanceof d.a){if(!1===Object(O.v)(e))throw new Error("Dictionary accessor must be a string");if(!0===i.hasField(e))i.setField(e,B(a,t.operator,i.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");i.setField(e,B(a,t.operator,null,t))}}else{if(!(i instanceof y.a))throw Object(O.I)(i)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Object(O.v)(e))throw new Error("Feature accessor must be a string");if(!0===i.hasField(e))i.setField(e,B(a,t.operator,i.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");i.setField(e,B(a,t.operator,null,t))}}n(O.P)}catch(r){c(r)}},c)}catch(u){c(u)}},c)}catch(i){c(i)}},c);else{const r=o.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[r])return void x(e,t.right).then(o=>{try{e.localScope[r]={value:B(o,t.operator,e.localScope[r].value,t),valueset:!0,node:t.right},n(O.P)}catch(a){c(a)}},c);void 0!==e.globalScope[r]?x(e,t.right).then(o=>{try{e.globalScope[r]={value:B(o,t.operator,e.globalScope[r].value,t),valueset:!0,node:t.right},n(O.P)}catch(a){c(a)}},c):c(new Error("Cannot assign undeclared variable"))}})}(e,t);case"ForStatement":return function(e,t){try{return null!==t.init?x(e,t.init).then(()=>Object(r.c)((n,r)=>{M(e,t,{testResult:!0,lastAction:O.P},e=>{n(e)},e=>{r(e)},0)})):Object(r.c)((n,r)=>{M(e,t,{testResult:!0,lastAction:O.P},e=>{n(e)},e=>{r(e)},0)})}catch(n){return Object(r.r)(n)}}(e,t);case"ForInStatement":return function(e,t){return Object(r.c)((n,c)=>{x(e,t.right).then(o=>{try{let a=null;a="VariableDeclaration"===t.left.type?x(e,t.left):Object(r.s)(),a.then(()=>{try{let r="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(r=e.name)}else"Identifier"===t.left.type&&(r=t.left.name);if(!r)throw new Error(Object(g.f)(t,"RUNTIME","INVALIDVARIABLE"));r=r.toLowerCase();let a=null;if(null!==e.localScope&&void 0!==e.localScope[r]&&(a=e.localScope[r]),null===a&&void 0!==e.globalScope[r]&&(a=e.globalScope[r]),null===a)return void c(new Error(Object(g.f)(t,"RUNTIME","VARIABLENOTDECLARED")));Object(O.B)(o)||Object(O.v)(o)?L(e,t,o,{reject:c,resolve:n},a):Object(O.I)(o)?function(e,t,n,r,c,o){try{if(void 0===o&&(o="i"),0===n.length)return void r.resolve(O.P);k(e,t,n,c,0,o,e=>{r.resolve(e)},e=>{r.reject(e)},0)}catch(a){r.reject(a)}}(e,t,o,{reject:c,resolve:n},a):o instanceof d.a||o instanceof y.a?function(e,t,n,r,c){try{L(e,t,n.keys(),r,c,"k")}catch(o){r.reject(o)}}(e,t,o,{reject:c,resolve:n},a):Object(O.T)(o)?_(o.iterator(e.abortSignal),e,t,o,a,e=>{n(e)},e=>{c(e)},0):L(e,t,[],{reject:c,resolve:n},a)}catch(r){c(r)}},c)}catch(a){c(a)}},c)})}(e,t);case"BreakStatement":return Object(r.s)(O.R);case"EmptyStatement":return Object(r.s)(O.P);case"ContinueStatement":return Object(r.s)(O.S);case"TemplateElement":return function(e,t){return Object(r.s)(t.value?t.value.cooked:"")}(0,t);case"TemplateLiteral":return function(e,t){return Object(r.c)(n=>{const r=[];Object(w.o)(t.expressions,(t,n,c,o)=>x(e,n).then(e=>{r[c]=Object(O.y)(e)})).then(()=>{let e="",c=0;for(const n of t.quasis)e+=n.value?n.value.cooked:"",!1===n.tail&&(e+=r[c]?r[c]:"",c++);n(e)})})}(e,t);case"Identifier":return z(e,t);case"MemberExpression":return function(e,t){try{return x(e,t.object).then(n=>{try{return null===n?Object(r.r)(new Error(Object(g.f)(t,"RUNTIME","NOTFOUND"))):!1===t.computed?"Identifier"===t.property.type?n instanceof d.a||n instanceof y.a?Object(r.s)(n.field(t.property.name)):n instanceof o.a?Object(r.s)(q(n,t.property.name,0,t)):Object(r.r)(new Error(Object(g.f)(t,"RUNTIME","INVALIDTYPE"))):Object(r.r)(new Error(Object(g.f)(t,"RUNTIME","INVALIDTYPE"))):x(e,t.property).then(e=>Object(r.c)((r,c)=>{if(n instanceof d.a||n instanceof y.a)Object(O.v)(e)?r(n.field(e)):c(new Error(Object(g.f)(t,"RUNTIME","INVALIDTYPE")));else if(n instanceof o.a)Object(O.v)(e)?r(q(n,e,0,t)):c(new Error(Object(g.f)(t,"RUNTIME","INVALIDTYPE")));else if(Object(O.B)(n))if(Object(O.u)(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=n.length+e),e>=n.length||e<0)throw new Error(Object(g.f)(t,"RUNTIME","OUTOFBOUNDS"));r(n[e])}else c(new Error(Object(g.f)(t,"RUNTIME","INVALIDTYPE")));else if(Object(O.I)(n))if(Object(O.u)(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=n.length()+e),e>=n.length()||e<0)throw new Error(Object(g.f)(t,"RUNTIME","OUTOFBOUNDS"));r(n.get(e))}else c(new Error(Object(g.f)(t,"RUNTIME","INVALIDTYPE")));else if(Object(O.v)(n))if(Object(O.u)(e)&&isFinite(e)&&Math.floor(e)===e){if(e<0&&(e=n.length+e),e>=n.length||e<0)throw new Error(Object(g.f)(t,"RUNTIME","OUTOFBOUNDS"));r(n[e])}else c(new Error(Object(g.f)(t,"RUNTIME","INVALIDTYPE")));else c(new Error(Object(g.f)(t,"RUNTIME","INVALIDTYPE")))}))}catch(c){return R(c)}})}catch(n){return R(n)}}(e,t);case"Literal":return C(t.value);case"CallExpression":return function(e,t){try{if("Identifier"!==t.callee.type)return R(Object(g.f)(t,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];return n.value instanceof O.n?n.value.fn(e,t):n.value instanceof f.a?ee(e,t,n.value.definition):R(Object(g.f)(t,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];return n.value instanceof O.n?n.value.fn(e,t):n.value instanceof f.a?ee(e,t,n.value.definition):R(Object(g.f)(t,"RUNTIME","NOTAFUNCTION"))}return R(Object(g.f)(t,"RUNTIME","NOTFOUND"))}catch(n){return R(n)}}(e,t);case"UnaryExpression":return function(e,t){try{return x(e,t.argument).then(e=>Object(r.c)((n,r)=>{Object(O.C)(e)&&"!"===t.operator?n(!e):"-"===t.operator?n(-1*Object(O.w)(e)):"+"===t.operator?n(1*Object(O.w)(e)):"~"===t.operator?n(~Object(O.w)(e)):r(new Error(Object(g.f)(t,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))}))}catch(n){return R(n)}}(e,t);case"BinaryExpression":return function(e,t){try{return Object(r.b)([x(e,t.left),x(e,t.right)]).then(e=>Object(r.c)((n,r)=>{const c=e[0],o=e[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":n(Object(O.O)(Object(O.w)(c),Object(O.w)(o),t.operator));case"==":n(Object(O.H)(c,o));break;case"!=":n(!Object(O.H)(c,o));break;case"<":case">":case"<=":case">=":n(Object(O.M)(c,o,t.operator));break;case"+":Object(O.v)(c)||Object(O.v)(o)?n(Object(O.y)(c)+Object(O.y)(o)):n(Object(O.w)(c)+Object(O.w)(o));break;case"-":n(Object(O.w)(c)-Object(O.w)(o));break;case"*":n(Object(O.w)(c)*Object(O.w)(o));break;case"/":n(Object(O.w)(c)/Object(O.w)(o));break;case"%":n(Object(O.w)(c)%Object(O.w)(o));break;default:r(new Error(Object(g.f)(t,"RUNTIME","OPERATORNOTRECOGNISED")))}}))}catch(n){return R(n)}}(e,t);case"LogicalExpression":return function(e,t){return Object(r.c)((n,r)=>{"AssignmentExpression"!==t.left.type&&"UpdateExpression"!==t.left.type?"AssignmentExpression"!==t.right.type&&"UpdateExpression"!==t.right.type?x(e,t.left).then(c=>{try{if(!Object(O.C)(c))throw new Error(Object(g.f)(t,"RUNTIME","ONLYBOOLEAN"));switch(t.operator){case"||":!0===c?n(c):x(e,t.right).then(e=>{try{if(!Object(O.C)(e))throw new Error(Object(g.f)(t,"RUNTIME","ONLYORORAND"));n(e)}catch(c){r(c)}},r);break;case"&&":!1===c?n(c):x(e,t.right).then(e=>{try{if(!Object(O.C)(e))throw new Error(Object(g.f)(t,"RUNTIME","ONLYORORAND"));n(e)}catch(c){r(c)}},r);break;default:throw new Error(Object(g.f)(t,"RUNTIME","ONLYORORAND"))}}catch(o){r(o)}},r):r(new Error(Object(g.f)(t.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):r(new Error(Object(g.f)(t.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}(e,t);case"ConditionalExpression":return R(Object(g.f)(t,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return function(e,t){try{const n=[];for(let r=0;r<t.elements.length;r++)n.push(x(e,t.elements[r]));return Object(r.b)(n).then(e=>Object(r.c)((n,r)=>{for(let c=0;c<e.length;c++){if(Object(O.K)(e[c]))return void r(new Error(Object(g.f)(t,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[c]===O.P&&(e[c]=null)}n(e)}))}catch(n){return R(n)}}(e,t);case"ObjectExpression":return function(e,t){try{const n=[];for(let r=0;r<t.properties.length;r++)n.push(x(e,t.properties[r]));return Object(r.b)(n).then(e=>Object(r.c)(t=>{const n={};for(let c=0;c<e.length;c++){const t=e[c];if(Object(O.K)(t.value))throw new Error("Illegal Argument");if(!1===Object(O.v)(t.key))throw new Error("Illegal Argument");n[t.key.toString()]=t.value===O.P?null:t.value}const r=new d.a(n);r.immutable=!1,t(r)}))}catch(n){return R(n)}}(e,t);case"Property":return function(e,t){try{return x(e,t.value).then(n=>Object(r.c)(r=>{"Identifier"===t.key.type?r({key:t.key.name,value:n}):x(e,t.key).then(e=>{r({key:e,value:n})})}))}catch(n){return Object(r.r)(n)}}(e,t);default:return R(Object(g.f)(t,"RUNTIME","UNREOGNISED"))}}catch(c){return R(c)}}function F(e,t,n){try{return x(e,t.body).then(c=>{try{return n.lastAction=c,n.lastAction===O.R||n.lastAction instanceof O.r?(n.testResult=!1,Object(r.s)(n)):null!==t.update?x(e,t.update).then(()=>Object(r.s)(n)):Object(r.s)(n)}catch(o){return Object(r.r)(o)}})}catch(c){return Object(r.r)(c)}}function M(e,t,n,c,o,a){try{(function(e,t,n){try{return null!==t.test?x(e,t.test).then(c=>{try{return!0===e.abortSignal.aborted?Object(r.r)(new Error("Cancelled")):(n.testResult=c,!1===n.testResult?Object(r.s)(n):!0!==n.testResult?Object(r.r)(new Error(Object(g.f)(t,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):F(e,t,n))}catch(o){return Object(r.r)(o)}}):F(e,t,n)}catch(a){return Object(r.r)(a)}})(e,t,n).then(()=>{try{!0===n.testResult?++a>100?(a=0,setTimeout(()=>{M(e,t,n,c,o,a)},0)):M(e,t,n,c,o,a):c(n.lastAction instanceof O.r?n.lastAction:O.P)}catch(r){o(r)}},e=>{o(e)})}catch(i){o(i)}}function D(e,t,n,r,c,o,a,i,u,s){try{if(r<=o)return void i(O.P);c.value="k"===a?n[o]:o,x(e,t.body).then(l=>{try{l instanceof O.r?i(l):l===O.R?i(O.P):++s>100?(s=0,setTimeout(()=>{D(e,t,n,r,c,o+1,a,i,u,s)},0)):D(e,t,n,r,c,o+1,a,i,u,s)}catch(f){u(f)}},e=>{u(e)})}catch(l){u(l)}}function k(e,t,n,r,c,o,a,i,u){try{if(n.length()<=c)return void a(O.P);r.value="k"===o?n.get(c):c,x(e,t.body).then(s=>{s instanceof O.r?a(s):s===O.R?a(O.P):++u>100?(u=0,setTimeout(()=>{k(e,t,n,r,c+1,o,a,i,u)},0)):k(e,t,n,r,c+1,o,a,i,u)},e=>{i(e)})}catch(s){i(s)}}function L(e,t,n,r,c,o){try{if(void 0===o&&(o="i"),0===n.length)return void r.resolve(O.P);D(e,t,n,n.length,c,0,o,e=>{r.resolve(e)},e=>{r.reject(e)},0)}catch(a){r.reject(a)}}function _(e,t,n,r,c,o,a,i){try{e.next().then(u=>{try{if(null===u)o(O.P);else{const s=y.a.createFromGraphicLikeObject(u.geometry,u.attributes,r);s._underlyingGraphic=u,c.value=s,x(t,n.body).then(u=>{try{u===O.R?o(O.P):u instanceof O.r?o(u):++i>100?(i=0,setTimeout(()=>{_(e,t,n,r,c,o,a,i)},0)):_(e,t,n,r,c,o,a,i)}catch(s){a(s)}},e=>{a(e)})}}catch(s){a(s)}},e=>{a(e)})}catch(u){a(u)}}function B(e,t,n,r){switch(t){case"=":return e===O.P?null:e;case"/=":return Object(O.w)(n)/Object(O.w)(e);case"*=":return Object(O.w)(n)*Object(O.w)(e);case"-=":return Object(O.w)(n)-Object(O.w)(e);case"+=":return Object(O.v)(n)||Object(O.v)(e)?Object(O.y)(n)+Object(O.y)(e):Object(O.w)(n)+Object(O.w)(e);case"%=":return Object(O.w)(n)%Object(O.w)(e);default:throw new Error(Object(g.f)(r,"RUNTIME","OPERATORNOTRECOGNISED"))}}function V(e,t,n){try{return n>=t.body.length?Object(r.s)(O.P):Object(r.c)((r,c)=>{x(e,t.body[n]).then(o=>{try{o instanceof O.r||o===O.R||o===O.S||n===t.body.length-1?r(o):V(e,t,n+1).then(r,c)}catch(a){c(a)}},c)})}catch(c){return R(c)}}function Y(e,t,n){return Object(r.c)((r,c)=>{n>=t.declarations.length?r(O.P):x(e,t.declarations[n]).then(()=>{n===t.declarations.length-1?r(O.P):Y(e,t,n+1).then(()=>{r(O.P)},c)},c)})}let G=0;function q(e,t,n,r){let c;switch(t=t.toLowerCase()){case"hasz":{const t=e.hasZ;return void 0!==t&&t}case"hasm":{const t=e.hasM;return void 0!==t&&t}case"spatialreference":{let t=e.spatialReference._arcadeCacheId;if(void 0===t){let n=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(n=!1),n&&(G++,e.spatialReference._arcadeCacheId=G,t=G)}const n=new d.a({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==t&&(n._arcadeCacheId="SPREF"+t.toString()),n}}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const n=e[t];return void 0!==n?n:null}case"type":return"Extent"}break;case"polygon":switch(t){case"rings":return c=e.cache._arcadeCacheId,void 0===c&&(G++,c=G,e.cache._arcadeCacheId=c),new h.a(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,c);case"type":return"Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return"Point"}break;case"polyline":switch(t){case"paths":return c=e.cache._arcadeCacheId,void 0===c&&(G++,c=G,e.cache._arcadeCacheId=c),new h.a(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,c);case"type":return"Polyline"}break;case"multipoint":switch(t){case"points":return c=e.cache._arcadeCacheId,void 0===c&&(G++,c=G,e.cache._arcadeCacheId=c),new b.a(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,c,1);case"type":return"Multipoint"}}throw new Error(Object(g.f)(r,"RUNTIME","PROPERTYNOTFOUND"))}function z(e,t){return Object(r.c)((n,r)=>{const c=t.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[c])if(void 0===e.globalScope[c])r(new Error(Object(g.f)(t,"RUNTIME","VARIABLENOTFOUND")));else{const t=e.globalScope[c];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=x(e,t.node),t.d.then(e=>{try{t.value=e,t.valueset=!0,n(e)}catch(c){r(c)}},r))}else{const t=e.localScope[c];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=x(e,t.node),t.d.then(e=>{try{t.value=e,t.valueset=!0,n(e)}catch(c){r(c)}},r))}})}const H={};function J(e){return null===e?"":Object(O.B)(e)||Object(O.I)(e)?"Array":Object(O.z)(e)?"Date":Object(O.v)(e)?"String":Object(O.C)(e)?"Boolean":Object(O.u)(e)?"Number":e instanceof j.a?"Attachment":e instanceof p.a?"Portal":e instanceof d.a?"Dictionary":e instanceof y.a?"Feature":e instanceof a.a?"Point":e instanceof s.a?"Polygon":e instanceof l.a?"Polyline":e instanceof u.a?"Multipoint":e instanceof i.a?"Extent":Object(O.K)(e)?"Function":Object(O.T)(e)?"FeatureSet":Object(O.a)(e)?"FeatureSetCollection":e===O.P?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function K(e,t,n,c){return Object(r.c)((r,o)=>{x(e,t.arguments[n]).then(a=>{try{if(Object(O.H)(a,c))return void x(e,t.arguments[n+1]).then(r,o);{const a=t.arguments.length-n;return 1===a?void x(e,t.arguments[n]).then(r,o):(2===a&&r(null),3===a?void x(e,t.arguments[n+2]).then(r,o):void K(e,t,n+2,c).then(r,o))}}catch(i){o(i)}},o)})}function W(e,t,n,c){return Object(r.c)((r,o)=>{!0===c?x(e,t.arguments[n+1]).then(r,o):3==t.arguments.length-n?x(e,t.arguments[n+2]).then(r,o):x(e,t.arguments[n+2]).then(c=>{try{if(!1===Object(O.C)(c))return void o(new Error("WHEN needs boolean test conditions"));W(e,t,n+2,c).then(r,o)}catch(a){o(a)}})})}function Z(e,t){try{const n=e.length,c=Math.floor(n/2);return 0===n?Object(r.s)([]):1===n?Object(r.s)([e[0]]):Object(r.c)((o,a)=>{const i=[Z(e.slice(0,c),t),Z(e.slice(c,n),t)];Object(r.b)(i).then(n=>{try{X(n[0],n[1],t,[]).then(o,a)}catch(e){a(e)}},a)})}catch(n){return R(n)}}function X(e,t,n,c){return Object(r.c)((r,o)=>{const a=c;e.length>0||t.length>0?e.length>0&&t.length>0?n(e[0],t[0]).then(i=>{try{isNaN(i)&&(i=1),i<=0?(a.push(e[0]),e=e.slice(1)):(a.push(t[0]),t=t.slice(1)),X(e,t,n,c).then(r,o)}catch(u){o(u)}},o):e.length>0?(a.push(e[0]),X(e=e.slice(1),t,n,c).then(r,o)):t.length>0&&(a.push(t[0]),t=t.slice(1),X(e,t,n,c).then(r,o)):r(c)})}function Q(e,t){const n=e.length,r=Math.floor(n/2);return t||(t=function(e,t){return e<t?-1:e===t?0:1}),0===n?[]:1===n?[e[0]]:function(e,t,n){const r=[];for(;e.length>0||t.length>0;)if(e.length>0&&t.length>0){let c=n(e[0],t[0]);isNaN(c)&&(c=1),c<=0?(r.push(e[0]),e=e.slice(1)):(r.push(t[0]),t=t.slice(1))}else e.length>0?(r.push(e[0]),e=e.slice(1)):t.length>0&&(r.push(t[0]),t=t.slice(1));return r}(Q(e.slice(0,r),t),Q(e.slice(r,n),t),t)}function $(e,t,n){try{const c=e.body;if(n.length!==e.params.length)return R(new Error("Invalid Parameter calls to function."));for(let r=0;r<n.length;r++){const c=e.params[r];"Identifier"===c.type&&(t.localScope[c.name.toLowerCase()]={d:null,value:n[r],valueset:!0,node:null})}return x(t,c).then(e=>Object(r.c)((t,n)=>{e instanceof O.r?t(e.value):e!==O.R?e!==O.S?t(e instanceof O.i?e.value:e):n(new Error("Cannot Continue from a Function")):n(new Error("Cannot Break from a Function"))}))}catch(c){return Object(r.r)(c)}}function ee(e,t,n){return U(e,t,function(t,r,c){const o={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(o.depthCounter>64)throw new Error("Exceeded maximum function depth");return $(n,o,c)})}function te(e){return function(){const t={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,interceptor:e.context.interceptor,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(t.depthCounter>64)throw new Error("Exceeded maximum function depth");return $(e.definition,t,arguments)}}Object(E.a)(H,A),Object(v.a)(H,A),Object(S.a)(H,A),Object(N.a)(H,A),Object(m.a)(H,A),Object(I.a)(H,A),Object(T.registerFunctions)({functions:H,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:A,standardFunctionAsync:U}),H.typeof=function(e,t){return A(e,t,function(e,t,n){Object(O.J)(n,1,1);const r=J(n[0]);if("Unrecognised Type"===r)throw new Error("Unrecognised Type");return r})},H.iif=function(e,t){return Object(r.c)((n,c)=>{Object(O.J)(null===t.arguments?[]:t.arguments,3,3),x(e,t.arguments[0]).then(o=>{try{if(!1===Object(O.C)(o))return void c(new Error("IF Function must have a boolean test condition"));Object(r.b)([x(e,t.arguments[1]),x(e,t.arguments[2])]).then(e=>{n(o?e[0]:e[1])},c)}catch(a){c(a)}},c)})},H.decode=function(e,t){return Object(r.c)((n,r)=>{t.arguments.length<2?r(new Error("Missing Parameters")):2!==t.arguments.length?(t.arguments.length-1)%2!=0?x(e,t.arguments[0]).then(c=>{try{K(e,t,1,c).then(n,r)}catch(o){r(o)}},r):r(new Error("Must have a default value result.")):x(e,t.arguments[1]).then(n,r)})},H.when=function(e,t){try{return t.arguments.length<3?R("Missing Parameters"):t.arguments.length%2==0?R("Must have a default value result."):x(e,t.arguments[0]).then(n=>Object(r.c)((r,c)=>{!1!==Object(O.C)(n)?W(e,t,0,n).then(r,c):c(new Error("WHEN needs boolean test conditions"))}))}catch(n){return R(n)}},H.sort=function(e,t){return U(e,t,function(e,t,n){Object(O.J)(n,1,2);let c=n[0];if(Object(O.I)(c)&&(c=c.toArray()),!1===Object(O.B)(c))return R(Error("Illegal Argument"));if(n.length>1)return!1===Object(O.K)(n[1])?R(Error("Illegal Argument")):Z(c,te(n[1]));{let e=c;if(0===e.length)return Object(r.s)([]);const t={};for(let r=0;r<e.length;r++){const n=J(e[r]);""!==n&&(t[n]=!0)}if(!0===t.Array||!0===t.Dictionary||!0===t.Feature||!0===t.Point||!0===t.Polygon||!0===t.Polyline||!0===t.Multipoint||!0===t.Extent||!0===t.Function)return Object(r.s)(e.slice(0));let n=0,o="";for(const r in t)n++,o=r;return n>1||"String"===o?e=Q(e,function(e,t){if(null==e||e===O.P)return null==t||t===O.P?0:1;if(null==t||t===O.P)return-1;const n=Object(O.y)(e),r=Object(O.y)(t);return n<r?-1:n===r?0:1}):"Number"===o?e=Q(e,function(e,t){return e-t}):"Boolean"===o?e=Q(e,function(e,t){return e===t?0:t?-1:1}):"Date"===o&&(e=Q(e,function(e,t){return t-e})),Object(r.s)(e)}})};const ne={failDefferred:R,resolveDeffered:C,fixSpatialReference:O.L,parseArguments:P,standardFunction:A,standardFunctionAsync:U,evaluateIdentifier:z,arcadeCustomFunction:te};for(const he in H)H[he]={value:new O.n(H[he]),valueset:!0,node:null};const re=function(){};function ce(e){console.log(e)}(re.prototype=H).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},re.prototype.pi={value:Math.PI,valueset:!0,node:null};const oe=ne;function ae(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:A,standardFunctionAsync:U,failDefferred:R,evaluateIdentifier:z,arcadeCustomFunctionHandler:te};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)H[n]={value:new O.n(t.functions[n]),valueset:!0,node:null},re.prototype[n]=H[n];for(let n=0;n<t.signatures.length;n++)Object(g.a)(t.signatures[n],"async")}function ie(e,t){let n=t.spatialReference;null==n&&(n=new c.a({wkid:102100}));const o=function(e,t){const n=new re;null==e&&(e={}),null==t&&(t={});const r=new d.a({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});r.immutable=!1,n.textformatting={value:r,valueset:!0,node:null};for(const c in t)n[c]={value:new O.n(t[c]),native:!0,valueset:!0,node:null};for(const c in e)n[c]=e[c]&&"esri.Graphic"===e[c].declaredClass?{value:y.a.createFromGraphic(e[c]),valueset:!0,node:null}:{value:e[c],valueset:!0,node:null};return n}(t.vars,t.customfunctions);return x({spatialReference:n,services:t.services,abortSignal:null==t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:o,console:t.console?t.console:ce,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:1},e.body[0].body).then(e=>Object(r.c)((t,n)=>{e instanceof O.r&&(e=e.value),e instanceof O.i&&(e=e.value),e===O.P&&(e=null),e!==O.R?e!==O.S?e instanceof O.n||e instanceof f.a?n(new Error("Cannot return FUNCTION")):t(e):n(new Error("Cannot return CONTINUE")):n(new Error("Cannot return BREAK"))}))}function ue(e,t){return Object(g.c)(e)}function se(e,t){return Object(g.j)(e,t,"full")}function le(e,t){return Object(g.h)(e,t)}function fe(e,t){return Object(g.g)(e,t)}function be(e){return Object(g.d)(e)}},u1HQ:function(e,t,n){"use strict";n.d(t,"a",function(){return C}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return b}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return x}),n.d(t,"g",function(){return N}),n.d(t,"h",function(){return y}),n.d(t,"i",function(){return O}),n.d(t,"j",function(){return d}),n.d(t,"k",function(){return U}),n.d(t,"l",function(){return k}),n.d(t,"m",function(){return P}),n.d(t,"n",function(){return F}),n.d(t,"o",function(){return L}),n.d(t,"p",function(){return S}),n.d(t,"q",function(){return p}),n.d(t,"r",function(){return v}),n.d(t,"s",function(){return R}),n.d(t,"t",function(){return g}),n.d(t,"u",function(){return M}),n.d(t,"v",function(){return D}),n.d(t,"w",function(){return E}),n.d(t,"x",function(){return A}),n.d(t,"y",function(){return m}),n.d(t,"z",function(){return I}),n.d(t,"A",function(){return j}),n.d(t,"B",function(){return T}),n.d(t,"C",function(){return w}),n("SuVq");var r=n("qatw"),c=(n("4GrV"),n("36Co"));function o(e){var t;return Array.isArray(e)?null==(t=e[0])?void 0:t.spatialReference:null==e?void 0:e.spatialReference}function a(e){return e?Array.isArray(e)?e.map(a):e.toJSON?e.toJSON():e:e}function i(e){return Array.isArray(e)?e.map(e=>Object(r.a)(e)):Object(r.a)(e)}let u;async function s(e,t){return(await async function(){return u||(u=Object(c.b)("geometryEngineWorker",{strategy:"distributed"})),u}()).invoke("executeGEOperation",{operation:e,parameters:a(t)})}async function l(e,t){return i(await s("clip",[o(e),e,t]))}async function f(e,t){return i(await s("cut",[o(e),e,t]))}function b(e,t){return s("contains",[o(e),e,t])}function h(e,t){return s("crosses",[o(e),e,t])}function O(e,t,n){return s("distance",[o(e),e,t,n])}function d(e,t){return s("equals",[o(e),e,t])}function p(e,t){return s("intersects",[o(e),e,t])}function j(e,t){return s("touches",[o(e),e,t])}function w(e,t){return s("within",[o(e),e,t])}function y(e,t){return s("disjoint",[o(e),e,t])}function g(e,t){return s("overlaps",[o(e),e,t])}function E(e,t,n){return s("relate",[o(e),e,t,n])}function v(e){return s("isSimple",[o(e),e])}async function m(e){return i(await s("simplify",[o(e),e]))}async function N(e,t){return i(await s("difference",[o(e),e,t]))}async function I(e,t){return i(await s("symmetricDifference",[o(e),e,t]))}async function S(e,t){return i(await s("intersect",[o(e),e,t]))}async function T(e,t=null){const n=function(e,t){let n;return Array.isArray(e)?n=e:(n=[],n.push(e),null!=t&&n.push(t)),n}(e,t);return i(await s("union",[o(n),n]))}async function R(e,t,n,r,c,a){return i(await s("offset",[o(e),e,t,n,r,c,a]))}async function C(e,t,n,r=!1){const c=[o(e),e,t,n,r];return i(await s("buffer",c))}async function P(e,t,n,r,c,a){const u=[o(e),e,t,n,r,c,a];return i(await s("geodesicBuffer",u))}async function A(e,t,n){var r;if(null==e)throw new Error("Illegal Argument Exception");const c=e.spatialReference;n=null!=(r=n)?r:function(e){return"xmin"in e?e.center:"x"in e?e:e.extent.center}(e);const o=e.constructor.fromJSON(await s("rotate",[c,e,t,n]));return o.spatialReference=c,o}async function U(e,t,n,r){return i(await s("generalize",[o(e),e,t,n,r]))}async function x(e,t,n){return i(await s("densify",[o(e),e,t,n]))}async function F(e,t,n,r=0){return i(await s("geodesicDensify",[o(e),e,t,n,r]))}function M(e,t){return s("planarArea",[o(e),e,t])}function D(e,t){return s("planarLength",[o(e),e,t])}function k(e,t,n){return s("geodesicArea",[o(e),e,t,n])}function L(e,t,n){return s("geodesicLength",[o(e),e,t,n])}}}]);