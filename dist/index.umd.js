!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.pomes=n():e.pomes=n()}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("prop-types")},function(e,n){e.exports=require("react-redux")},function(e,n){e.exports=require("react-deep-force-update")},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(0),u=t.n(o);function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){a(e,n,t[n])})}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){return{type:"REDUX_I18N_SET_LANGUAGE",lang:e}}function l(e,n){return function(t,r){var o="string"==typeof n?{language:n}:n||{},u=o.language,c=o.preserveExisting,l=r(),f=null;f=void 0===l.i18nState?l.getIn(["i18nState","translations"]):i({},l.i18nState.translations);var s=void 0===u?e:i({},f,a({},u,e));t(function(e){return{type:"REDUX_I18N_SET_TRANSLATIONS",translations:e}}(c?Object.keys(s).reduce(function(e,n){return i({},e,a({},n,i({},e[n],s[n])))},f):s)),t(function(e){return{type:"REDUX_I18N_SET_FORCE_REFRESH",force:e}}(!0))}}function f(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e,n){if(!n)return e;var t=e.split(/({[^}]+})/g).map(function(e){var t=/{(.+)}/g.exec(e);if(t){var r=n[t[1]];return r||String(r)}return e});return t.some(function(e){return e&&"object"===s(e)})?o.createElement.apply(o,["span",null].concat(f(t))):t.join("")},y=function(e,n){var t=e[n];return void 0===t&&n.indexOf("-")>-1&&(t=e[n.split("-")[0]]),t},b=function(e,n,t){return void 0===e?t||null:void 0===e[n]?t||null:e[n]},d=function(e,n,t){return{langMessages:y(e,n),fallbackLangMessages:t?y(e,t):void 0,pluralRule:b(e.options,"plural_rule","n != 1"),pluralNumber:parseInt(b(e.options,"plural_number","2"),10)}},g=function(e,n,t,r){if(!e&&!n)return p(t,r);var o=e?e[t]:void 0;if(void 0===o||""===o){if(n){var u=n[t];if(void 0!==u&&""!==u)return p(u,r)}return p(t,r)}return p(o,r)},m=function(e,n,t){var r=d(e,n,t),o=r.langMessages,u=r.fallbackLangMessages,i=r.pluralRule;return function(e){var n=e.id;return e.pluralId&&Function("n","return ".concat(i))(e.values[e.pluralCondition])&&(n=e.pluralId),e.future?p(n,e.values):g(o,u,n,e.values)}},v=o.createContext({t:function(){return""},message:function(){return""}}),h=t(1),O=t.n(h),S=t(3),j=t.n(S);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,n){return!n||"object"!==_(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,n){return(P=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var x=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),w(this,R(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&P(e,n)}(n,u.a.Component),function(e,n,t){n&&E(e.prototype,n),t&&E(e,t)}(n,[{key:"getChildContext",value:function(){var e=this.props.context;return{t:e.t,message:e.message}}},{key:"componentDidUpdate",value:function(e){var n=this.props.context;e.context.t!==n.t&&j()(this)}},{key:"render",value:function(){return this.props.children}}]),n}();x.childContextTypes={t:O.a.func.isRequired,message:O.a.func.isRequired},x.propTypes={context:O.a.shape().isRequired,children:O.a.node.isRequired};var T=function(e){return u.a.createElement(v.Consumer,null,function(n){return u.a.createElement(x,{context:n},e.children)})};T.propTypes={children:O.a.node.isRequired};var C=T;function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,n){return!n||"object"!==N(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,n){return(L=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var M=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),I(this,A(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&L(e,n)}(n,o["PureComponent"]),function(e,n,t){n&&k(e.prototype,n),t&&k(e,t)}(n,[{key:"componentWillMount",value:function(){var e=this.props,n=e.initialized,t=e.dispatch,r=e.initialLang;!n&&t&&t(c(r))}},{key:"renderChildren",value:function(){var e=this.props,n=e.legacy,t=e.children;return n?o.createElement(C,null,t):t}},{key:"render",value:function(){var e=this.props,n=e.lang,t=e.fallbackLang,r=e.useReducer,u=e.reducerTranslations,i=e.translations,a={t:function(e,n,t){var r=d(e,n,t),o=r.langMessages,u=r.fallbackLangMessages,i=r.pluralRule,a=r.pluralNumber;return function(e,n){return"object"===s(e)&&(e=e[Number(new Function("n","return ".concat(i))(n[e[a]]))]),g(o,u,e,n)}}(r?u:i,n,t),message:m(r?u:i,n,t)};return o.createElement(v.Provider,{value:a},this.renderChildren())}}]),n}();!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(M,"defaultProps",{useReducer:!1,initialLang:"en",fallbackLang:null,initialized:!1,legacy:!1,dispatch:null});var q=M,D=v.Consumer,U=Object(r.connect)(function(e){return{lang:e.i18nState.lang,reducerTranslations:e.i18nState.translations,forceRefresh:e.i18nState.forceRefresh}})(q),F=function(e){return u.a.createElement(D,null,function(n){return n.message(e)})};function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){z(e,n,t[n])})}return e}function z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var G={lang:"en",translations:{},forceRefresh:!1};function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REDUX_I18N_SET_LANGUAGE":return X({},e,{lang:n.lang});case"REDUX_I18N_SET_TRANSLATIONS":return X({},e,{translations:n.translations});case"REDUX_I18N_SET_FORCE_REFRESH":return X({},e,{forceRefresh:n.force});default:return e}}function W(){return(W=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"message";return function(n){var t=function(t){return o.createElement(D,null,function(r){return o.createElement(n,W({},t,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},e,r.message)))})};return t.displayName=function(e){var n=e.displayName||e.name||"Component";return"Localized(".concat(n,")")}(n),t}};t.d(n,"default",function(){return U}),t.d(n,"I18nContext",function(){return v}),t.d(n,"I18nConsumer",function(){return D}),t.d(n,"Message",function(){return F}),t.d(n,"i18nState",function(){return H}),t.d(n,"setLanguage",function(){return c}),t.d(n,"setTranslations",function(){return l}),t.d(n,"localize",function(){return B}),t.d(n,"getTranslateFunction",function(){return m})}])});