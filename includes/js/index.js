/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/scratchcard-js/build/scratchcard.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/scratchcard-js/build/scratchcard.min.js ***!
  \**************************************************************/
/***/ ((module) => {

!function(t,n){if(true)module.exports=n();else { var r, e; }}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=66)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(12)("wks"),o=e(13),i=e(0).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(17)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(7);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n,e){var r=e(8),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){var r=e(2),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(22)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(0),o=e(2),i=e(15),c=e(18),s=e(6),a=function(t,n,e){var u,f,h,l,v=t&a.F,p=t&a.G,d=t&a.S,m=t&a.P,g=t&a.B,y=p?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,b=p?o:o[n]||(o[n]={}),x=b.prototype||(b.prototype={});for(u in p&&(e=n),e)h=((f=!v&&y&&void 0!==y[u])?y:e)[u],l=g&&f?s(h,r):m&&"function"==typeof h?s(Function.call,h):h,y&&c(y,u,h,t&a.U),b[u]!=h&&i(b,u,l),m&&x[u]!=h&&(x[u]=h)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(16),o=e(36);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(3),o=e(34),i=e(35),c=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(0),o=e(15),i=e(19),c=e(13)("src"),s=e(37),a=(""+s).split("toString");e(2).inspectSource=function(t){return s.call(t)},(t.exports=function(t,n,e,s){var u="function"==typeof e;u&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(u&&(i(e,c)||o(e,c,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:s?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||s.call(this)}))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";var r,o,i,c,s=e(22),a=e(0),u=e(6),f=e(11),h=e(14),l=e(4),v=e(7),p=e(38),d=e(39),m=e(43),g=e(26).set,y=e(46)(),b=e(27),x=e(47),w=e(48),_=e(49),P=a.TypeError,S=a.process,E=S&&S.versions,j=E&&E.v8||"",k=a.Promise,T="process"==f(S),O=function(){},M=o=b.f,L=!!function(){try{var t=k.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(O,O)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof n&&0!==j.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var e=t._c;y((function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c,s=o?n.ok:n.fail,a=n.resolve,u=n.reject,f=n.domain;try{s?(o||(2==t._h&&F(t),t._h=1),!0===s?e=r:(f&&f.enter(),e=s(r),f&&(f.exit(),c=!0)),e===n.promise?u(P("Promise-chain cycle")):(i=C(e))?i.call(e,a,u):a(e)):u(r)}catch(t){f&&!c&&f.exit(),u(t)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&I(t)}))}},I=function(t){g.call(a,(function(){var n,e,r,o=t._v,i=B(t);if(i&&(n=x((function(){T?S.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=T||B(t)?2:1),t._a=void 0,i&&n.e)throw n.v}))},B=function(t){return 1!==t._h&&0===(t._a||t._c).length},F=function(t){g.call(a,(function(){var n;T?S.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})}))},A=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},Y=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw P("Promise can't be resolved itself");(n=C(t))?y((function(){var r={_w:e,_d:!1};try{n.call(t,u(Y,r,1),u(A,r,1))}catch(t){A.call(r,t)}})):(e._v=t,e._s=1,R(e,!1))}catch(t){A.call({_w:e,_d:!1},t)}}};L||(k=function(t){p(this,k,"Promise","_h"),v(t),r.call(this);try{t(u(Y,this,1),u(A,this,1))}catch(t){A.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(50)(k.prototype,{then:function(t,n){var e=M(m(this,k));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=T?S.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&R(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=u(Y,t,1),this.reject=u(A,t,1)},b.f=M=function(t){return t===k||t===c?new i(t):o(t)}),h(h.G+h.W+h.F*!L,{Promise:k}),e(51)(k,"Promise"),e(52)("Promise"),c=e(2).Promise,h(h.S+h.F*!L,"Promise",{reject:function(t){var n=M(this);return(0,n.reject)(t),n.promise}}),h(h.S+h.F*(s||!L),"Promise",{resolve:function(t){return _(s&&this===c?k:this,t)}}),h(h.S+h.F*!(L&&e(53)((function(t){k.all(t).catch(O)}))),"Promise",{all:function(t){var n=this,e=M(n),r=e.resolve,o=e.reject,i=x((function(){var e=[],i=0,c=1;d(t,!1,(function(t){var s=i++,a=!1;e.push(void 0),c++,n.resolve(t).then((function(t){a||(a=!0,e[s]=t,--c||r(e))}),o)})),--c||r(e)}));return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=M(n),r=e.reject,o=x((function(){d(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=!1},function(t,n,e){var r=e(4),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports={}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r,o,i,c=e(6),s=e(44),a=e(45),u=e(23),f=e(0),h=f.process,l=f.setImmediate,v=f.clearImmediate,p=f.MessageChannel,d=f.Dispatch,m=0,g={},y=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},b=function(t){y.call(t.data)};l&&v||(l=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return g[++m]=function(){s("function"==typeof t?t:Function(t),n)},r(m),m},v=function(t){delete g[t]},"process"==e(8)(h)?r=function(t){h.nextTick(c(y,t,1))}:d&&d.now?r=function(t){d.now(c(y,t,1))}:p?(i=(o=new p).port2,o.port1.onmessage=b,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in u("script")?function(t){a.appendChild(u("script")).onreadystatechange=function(){a.removeChild(this),y.call(t)}}:function(t){setTimeout(c(y,t,1),0)}),t.exports={set:l,clear:v}},function(t,n,e){"use strict";var r=e(7);function o(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new o(t)}},function(t,n,e){"use strict";var r=e(11),o={};o[e(1)("toStringTag")]="z",o+""!="[object z]"&&e(18)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,n,e){var r=e(30),o=e(31);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(8);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(25),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(31);t.exports=function(t){return Object(r(t))}},function(t,n,e){t.exports=!e(5)&&!e(17)((function(){return 7!=Object.defineProperty(e(23)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){t.exports=e(12)("native-function-to-string",Function.toString)},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(6),o=e(40),i=e(41),c=e(3),s=e(20),a=e(42),u={},f={};(n=t.exports=function(t,n,e,h,l){var v,p,d,m,g=l?function(){return t}:a(t),y=r(e,h,n?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(v=s(t.length);v>b;b++)if((m=n?y(c(p=t[b])[0],p[1]):y(t[b]))===u||m===f)return m}else for(d=g.call(t);!(p=d.next()).done;)if((m=o(d,y,p.value,n))===u||m===f)return m}).BREAK=u,n.RETURN=f},function(t,n,e){var r=e(3);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(24),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(11),o=e(1)("iterator"),i=e(24);t.exports=e(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(3),o=e(7),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(0),o=e(26).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,s=r.Promise,a="process"==e(8)(c);t.exports=function(){var t,n,e,u=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(u)};else if(!i||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var f=s.resolve(void 0);e=function(){f.then(u)}}else e=function(){o.call(r,u)};else{var h=!0,l=document.createTextNode("");new i(u).observe(l,{characterData:!0}),e=function(){l.data=h=!h}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(0).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){var r=e(3),o=e(4),i=e(27);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(18);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){var r=e(16).f,o=e(19),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(0),o=e(16),i=e(5),c=e(1)("species");t.exports=function(t){var n=r[t];i&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},function(t,n,e){var r=e(14);r(r.S+r.F,"Object",{assign:e(55)})},function(t,n,e){"use strict";var r=e(5),o=e(56),i=e(61),c=e(62),s=e(33),a=e(30),u=Object.assign;t.exports=!u||e(17)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=u({},t)[e]||Object.keys(u({},n)).join("")!=r}))?function(t,n){for(var e=s(t),u=arguments.length,f=1,h=i.f,l=c.f;u>f;)for(var v,p=a(arguments[f++]),d=h?o(p).concat(h(p)):o(p),m=d.length,g=0;m>g;)v=d[g++],r&&!l.call(p,v)||(e[v]=p[v]);return e}:u},function(t,n,e){var r=e(57),o=e(60);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(19),o=e(29),i=e(58)(!1),c=e(59)("IE_PROTO");t.exports=function(t,n){var e,s=o(t),a=0,u=[];for(e in s)e!=c&&r(s,e)&&u.push(e);for(;n.length>a;)r(s,e=n[a++])&&(~i(u,e)||u.push(e));return u}},function(t,n,e){var r=e(29),o=e(20),i=e(32);t.exports=function(t){return function(n,e,c){var s,a=r(n),u=o(a.length),f=i(c,u);if(t&&e!=e){for(;u>f;)if((s=a[f++])!=s)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(12)("keys"),o=e(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(14);r(r.P,"Array",{fill:e(64)}),e(65)("fill")},function(t,n,e){"use strict";var r=e(33),o=e(32),i=e(20);t.exports=function(t){for(var n=r(this),e=i(n.length),c=arguments.length,s=o(c>1?arguments[1]:void 0,e),a=c>2?arguments[2]:void 0,u=void 0===a?e:o(a,e);u>s;)n[s++]=t;return n}},function(t,n,e){var r=e(1)("unscopables"),o=Array.prototype;null==o[r]&&e(15)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n,e){"use strict";e.r(n),e.d(n,"ScratchCard",(function(){return h})),e.d(n,"SCRATCH_TYPE",(function(){return r}));e(21),e(28),e(54);var r,o=e(9),i=e.n(o),c=e(10),s=e.n(c),a=(e(63),function(){function t(n,e,r){i()(this,t),this.ctx=n,this.mouseX=e,this.mouseY=r}return s()(t,[{key:"updateMousePosition",value:function(t,n){this.mouseX=t,this.mouseY=n}},{key:"circle",value:function(t){this.ctx.beginPath(),this.ctx.arc(this.mouseX+t,this.mouseY+t,t,0,2*Math.PI,!1),this.ctx.fillStyle="#000000",this.ctx.fill(),this.ctx.closePath()}},{key:"clearPoint",value:function(t){var n=t,e=2*Math.random()*n-n,r=Math.sqrt(n*n-e*e),o=2*Math.random()*r-r;return e+=n,o+=n,[e+=this.mouseX,o+=this.mouseY]}},{key:"spray",value:function(t,n,e){for(var r=0;r<e;r++){var o=this.clearPoint(t/2);this.ctx.beginPath(),this.ctx.arc(o[0]+t/2,o[1]+t/2,n/2,0,2*Math.PI,!1),this.ctx.fillStyle="#000000",this.ctx.fill(),this.ctx.closePath()}}},{key:"brush",value:function(t){if(null!==t){var n=Math.atan2(this.mouseY,this.mouseX);this.ctx.save(),this.ctx.translate(this.mouseX,this.mouseY),this.ctx.rotate(n),this.ctx.drawImage(t,-t.width/2,-t.height/2)}else{var e=new Error("argument img is not a node IMG");console.log(e.message)}}},{key:"startLine",value:function(t){this.ctx.beginPath(),this.ctx.strokeStyle="black",this.ctx.lineWidth=t,this.ctx.lineJoin=this.ctx.lineCap="round",this.ctx.moveTo(this.mouseX+t,this.mouseY+t)}},{key:"drawLine",value:function(t){this.ctx.filter="blur(1px)",this.ctx.lineTo(this.mouseX+t,this.mouseY+t),this.ctx.stroke()}}]),t}());function u(t){return new Promise((function(n,e){var r=new Image;r.crossOrigin="Anonymous",r.onload=function(){n(r)},r.src=t,r.onerror=function(n){var r=new Error("Image ".concat(t," is not loaded."));e(r)}}))}function f(t,n){var e,r;return function(){var o=this,i=+new Date,c=arguments;e&&i<e+n?(clearTimeout(r),r=window.setTimeout((function(){e=i,t.apply(o,c)}),n)):(e=i,t.apply(o,c))}}!function(t){t[t.BRUSH=0]="BRUSH",t[t.SPRAY=1]="SPRAY",t[t.CIRCLE=2]="CIRCLE",t[t.LINE=3]="LINE"}(r||(r={})),function(){if("function"==typeof window.CustomEvent)return!1;function t(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),e}t.prototype=window.Event.prototype,window.CustomEvent=t}();var h=function(){function t(n,e){var o=this;i()(this,t);var c=this,s={scratchType:r.LINE,containerWidth:100,containerHeight:100,percentToFinish:50,nPoints:0,pointSize:[0,0],callback:function(){alert("done.")},brushSrc:"",imageForwardSrc:"./images/scratchcard.png",imageBackgroundSrc:"./images/scratchcard-background.svg",htmlBackground:"",clearZoneRadius:0,enabledPercentUpdate:!0};this.config=Object.assign(Object.assign({},s),e),this.scratchType=this.config.scratchType,this.container=this.isString(n)?document.querySelector(String(n)):n,this.position=[0,0],this.readyToClear=!1,this.percent=0,this.callbackDone=!1,this.generateCanvas(),this.ctx=this.canvas.getContext("2d"),this.brush=new a(this.ctx,this.position[0],this.position[1]),this.config.scratchType===r.BRUSH&&u(this.config.brushSrc).then((function(t){o.brushImage=t}));var h=f((function(t){t.preventDefault(),c.dispatchEvent("scratch","move"),c.position=c.mousePosition(t),c.brush.updateMousePosition(c.position[0],c.position[1]),c.scratch(),o.config.enabledPercentUpdate&&(c.percent=c.updatePercent())}),16);this.canvas.addEventListener("mousedown",(function(t){t.preventDefault(),c._setScratchPosition(),c.scratchType===r.LINE&&(c.position=c.mousePosition(t),c.brush.updateMousePosition(c.position[0],c.position[1]),c.brush.startLine(c.config.clearZoneRadius)),c.canvas.addEventListener("mousemove",h),document.body.addEventListener("mouseup",(function t(n){c.canvas.removeEventListener("mousemove",h),c.finish(),this.removeEventListener("mouseup",t)}))})),this.canvas.addEventListener("touchstart",(function(t){t.preventDefault(),c._setScratchPosition(),c.scratchType===r.LINE&&(c.position=c.mousePosition(t),c.brush.updateMousePosition(c.position[0],c.position[1]),c.brush.startLine(c.config.clearZoneRadius)),c.canvas.addEventListener("touchmove",h),document.body.addEventListener("touchend",(function t(){c.canvas.removeEventListener("touchmove",h),c.finish(),this.removeEventListener("touchend",t)}))})),window.addEventListener("resize",f((function(){o._setScratchPosition()}),100)),window.addEventListener("scroll",f((function(){o._setScratchPosition()}),16))}return s()(t,[{key:"isString",value:function(t){return"string"==typeof t||t instanceof String}},{key:"getPercent",value:function(){return this.percent}},{key:"_setScratchPosition",value:function(){this.zone=function(t){for(var n={left:0,top:0},e=t.getBoundingClientRect();t;)n.top+=t.offsetTop,n.left+=t.offsetLeft,t=t.offsetParent;var r=n.left-e.left,o=n.top-e.top;return{left:r<0?n.left+Math.abs(r):n.left-Math.abs(r),top:o<0?n.top+Math.abs(o):n.top-Math.abs(o)}}(this.canvas)}},{key:"finish",value:function(){!this.callbackDone&&this.percent>this.config.percentToFinish&&(this.clear(),this.canvas.style.pointerEvents="none",void 0!==this.config.callback&&(this.callbackDone=!0,this.config.callback()))}},{key:"dispatchEvent",value:function(t,n){!function(t,n,e){var r=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:e});t.dispatchEvent(r)}(this.canvas,"".concat(t,".").concat(n),{})}},{key:"init",value:function(){var t=this;return new Promise((function(n,e){u(t.config.imageForwardSrc).then((function(e){t.scratchImage=e,t.ctx.drawImage(t.scratchImage,0,0,t.canvas.width,t.canvas.height),t.setBackground(),n()}),(function(n){return e(n),new TypeError("".concat(t.config.imageForwardSrc," is not loaded."))}))}))}},{key:"generateCanvas",value:function(){this.canvas=document.createElement("canvas"),this.canvas.classList.add("sc__canvas"),this.canvas.width=this.config.containerWidth,this.canvas.height=this.config.containerHeight,this.container.appendChild(this.canvas)}},{key:"setBackground",value:function(){var t=this;if(0!==this.config.htmlBackground.length)!function(t,n){var e=new DOMParser,r=document.createElement("div");r.classList.add("sc__inner");var o=e.parseFromString(t,"text/html");r.innerHTML=o.body.innerHTML,n.insertBefore(r,n.firstElementChild)}(this.config.htmlBackground,this.container);else{var n=document.createElement("img");u(this.config.imageBackgroundSrc).then((function(e){n.src=e.src,t.container.insertBefore(n,t.canvas)}),(function(t){console.log(t.message)}))}}},{key:"mousePosition",value:function(t){var n,e;switch(t.type){case"touchmove":n=t.touches[0].clientX-this.config.clearZoneRadius-this.zone.left,e=t.touches[0].clientY-this.config.clearZoneRadius-this.zone.top;break;case"mousemove":n=t.clientX-this.config.clearZoneRadius-this.zone.left,e=t.clientY-this.config.clearZoneRadius-this.zone.top}return[n,e]}},{key:"scratch",value:function(){this.position[0],this.position[1];switch(this.ctx.globalCompositeOperation="destination-out",this.ctx.save(),this.config.scratchType){case r.BRUSH:this.brush.brush(this.brushImage);break;case r.CIRCLE:this.brush.circle(this.config.clearZoneRadius);break;case r.SPRAY:this.brush.spray(this.config.clearZoneRadius,this.config.pointSize,this.config.nPoints);break;case r.LINE:this.brush.drawLine(this.config.clearZoneRadius)}this.ctx.restore()}},{key:"updatePercent",value:function(){for(var t=0,n=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),e=n.data.length,r=0;r<e;r+=4)0===n.data[r]&&0===n.data[r+1]&&0===n.data[r+2]&&0===n.data[r+3]&&t++;return t>=1?t/(this.canvas.width*this.canvas.height)*100:0}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}]),t}();window.ScratchCard=h,window.SCRATCH_TYPE=r}])}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var scratchcard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scratchcard-js */ "./node_modules/scratchcard-js/build/scratchcard.min.js");
/* harmony import */ var scratchcard_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scratchcard_js__WEBPACK_IMPORTED_MODULE_1__);


class ElementorScratchCard extends elementorModules.frontend.handlers.Base {
  onInit() {
    super.onInit();
    this.onScratchCardLoad();
  }
  getDefaultSettings() {
    return {
      selectors: {
        scratchCard: '.elementor-scratch-card'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $scratchCard: this.$element.find(selectors.scratchCard)
    };
  }
  bindEvents() {
    // this.elements.$scratchCard.ready(this.onScratchCardLoad.bind(this));
  }
  onScratchCardLoad() {
    const containerHeight = this.getElementSettings('height');
    const frontImage = this.getElementSettings('front_image');
    const backImage = this.getElementSettings('back_image');
    const backHTML = this.getElementSettings('back_html');
    const percentage = this.getElementSettings('percentage');
    const scratchStyle = +this.getElementSettings('scratch_style');
    const pluginUrl = this.getElementSettings('plugin_url');
    const scratchWidth = this.getElementSettings('scratch_width');
    const callbackCode = this.getElementSettings('callback_code');
    var myCodeFunction = new Function(callbackCode);
    const scContainer = document.querySelector('.elementor-scratch-card');
    const sc = new scratchcard_js__WEBPACK_IMPORTED_MODULE_1__.ScratchCard(scContainer, {
      scratchType: scratchStyle,
      containerWidth: scContainer.offsetWidth,
      containerHeight: containerHeight.size,
      imageForwardSrc: frontImage.url,
      imageBackgroundSrc: backImage.url,
      htmlBackground: backHTML,
      brushSrc: pluginUrl + '/images/brush.png',
      clearZoneRadius: scratchStyle === 0 ? 0 : scratchWidth.size,
      width: 5,
      nPoints: 30,
      pointSize: 3,
      percentToFinish: percentage,
      callback: myCodeFunction
    });

    // Init
    sc.init().then(() => {
      sc.canvas.addEventListener('scratch.move', () => {
        let percent = sc.getPercent().toFixed(2);
      });
    }).catch(error => {
      // image not loaded
      alert(error.message);
    });
  }
}

// jQuery('#elementor-scratch-card-confetti-box').css('display','block')
// setTimeout(()=>{
//   jQuery('#elementor-scratch-card-confetti-box').css('display','none')
// },1500)

jQuery(window).on('elementor/frontend/init', () => {
  elementorFrontend.elementsHandler.attachHandler('elementor_scratch_card', ElementorScratchCard);
});

// jQuery(window).on('elementor/frontend/init', () => {
//   const addHandler = ($element) => {
//     elementorFrontend.elementsHandler.addHandler(elementorScratchCard, {
//       $element,
//     });
//   };

//   elementorFrontend.hooks.addAction('frontend/element_ready/elementor_scratch_card.default', addHandler);
// });
})();

/******/ })()
;
//# sourceMappingURL=index.js.map