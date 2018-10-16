module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n){e.exports=require("prop-types")},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-redux")},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(1),u=t.n(o),i=t(0),a=t.n(i);function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){l(e,n,t[n])})}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return{type:"REDUX_I18N_SET_LANGUAGE",lang:e}}function s(e,n){return function(t,r){var o="string"==typeof n?{language:n}:n||{},u=o.language,i=o.preserveExisting,a=r(),f=null;f=void 0===a.i18nState?a.getIn(["i18nState","translations"]):c({},a.i18nState.translations);var s=void 0===u?e:c({},f,l({},u,e));t(function(e){return{type:"REDUX_I18N_SET_TRANSLATIONS",translations:e}}(i?Object.keys(s).reduce(function(e,n){return c({},e,l({},n,c({},e[n],s[n])))},f):s)),t(function(e){return{type:"REDUX_I18N_SET_FORCE_REFRESH",force:e}}(!0))}}function p(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e,n){if(!n)return e;var t=e.split(/({[^}]+})/g).map(function(e){var t=/{(.+)}/g.exec(e);if(t){var r=n[t[1]];return r||String(r)}return e});return t.some(function(e){return e&&"object"===y(e)})?u.a.createElement.apply(u.a,["span",null].concat(p(t))):t.join("")},d=function(e,n){var t=e[n];return void 0===t&&n.indexOf("-")>-1&&(t=e[n.split("-")[0]]),t},g=function(e,n,t){return void 0===e?t||null:void 0===e[n]?t||null:e[n]},m=function(e,n,t){return{langMessages:d(e,n),fallbackLangMessages:t?d(e,t):void 0,pluralRule:g(e.options,"plural_rule","n != 1"),pluralNumber:parseInt(g(e.options,"plural_number","2"),10)}},v=function(e,n,t,r,o){if("string"==typeof o&&o||console.warn('Comment is mandatory for "'.concat(t,'"')),!e&&!n)return b(t,r);var u=e?e[t]:void 0;if(void 0===u||""===u){if(n){var i=n[t];if(void 0!==i&&""!==i)return b(i,r)}return b(t,r)}return b(u,r)},h=function(e,n,t){var r=m(e,n,t),o=r.langMessages,u=r.fallbackLangMessages,i=r.pluralRule;return function(e){var n=e.id,t=e.values,r=void 0===t?{}:t,a=e.comment,c=e.pluralId,l=void 0===c?null:c,f=e.pluralCondition,s=void 0===f?"":f,p=e.future,y=n;return l&&Function("n","return ".concat(i))(r[s])&&(y=l),p?b(y,r):v(o,u,y,r,a)}},O=u.a.createContext();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,n){return!n||"object"!==S(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,n){return(T=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var E=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),P(this,j(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&T(e,n)}(n,u.a.Component),function(e,n,t){n&&_(e.prototype,n),t&&_(e,t)}(n,[{key:"getChildContext",value:function(){var e=this.props.context;return{t:e.t,message:e.message}}},{key:"render",value:function(){return this.props.children}}]),n}();E.childContextTypes={t:a.a.func.isRequired,message:a.a.func.isRequired},E.propTypes={context:a.a.shape().isRequired,children:a.a.node.isRequired};var R=function(e){return u.a.createElement(O.Consumer,null,function(n){return u.a.createElement(E,{context:n},e.children)})};R.propTypes={children:a.a.node.isRequired};var w=R;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,n){return!n||"object"!==x(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,n){return(I=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var L=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),N(this,k(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&I(e,n)}(n,u.a.PureComponent),function(e,n,t){n&&C(e.prototype,n),t&&C(e,t)}(n,[{key:"componentWillMount",value:function(){var e=this.props,n=e.initialized,t=e.dispatch,r=e.initialLang;!n&&t&&t(f(r))}},{key:"render",value:function(){var e=this.props,n=e.lang,t=e.fallbackLang,r=e.useReducer,o=e.translations_reducer,i=e.translations,a=e.legacy,c=e.children,l={t:function(e,n,t){var r=m(e,n,t),o=r.langMessages,u=r.fallbackLangMessages,i=r.pluralRule,a=r.pluralNumber;return function(e,n,t){return"object"===y(e)&&(e=e[Number(new Function("n","return ".concat(i))(n[e[a]]))]),v(o,u,e,n,t)}}(r?o:i,n,t),message:h(r?o:i,n,t)};return u.a.createElement(O.Provider,{value:l},a?u.a.createElement(w,null,c):c)}}]),n}();L.propTypes={translations:i.PropTypes.shape().isRequired,lang:i.PropTypes.string.isRequired,useReducer:i.PropTypes.bool,initialLang:i.PropTypes.string,fallbackLang:i.PropTypes.string,initialized:i.PropTypes.bool,legacy:i.PropTypes.bool,children:i.PropTypes.node.isRequired,dispatch:i.PropTypes.func},L.defaultProps={useReducer:!1,initialLang:"en",fallbackLang:null,initialized:!1,legacy:!1,dispatch:null};var A=L,q=O.Consumer,M=Object(r.connect)(function(e){return{lang:e.i18nState.lang,translations_reducer:e.i18nState.translations,forceRefresh:e.i18nState.forceRefresh}})(A),D=function(e){return u.a.createElement(q,null,function(n){return n.message(e)})};D.propTypes={comment:i.PropTypes.string,context:i.PropTypes.string,future:i.PropTypes.bool,id:i.PropTypes.string.isRequired,pluralCondition:i.PropTypes.string,pluralId:i.PropTypes.string,values:i.PropTypes.shape()},D.defaultProps={comment:null,context:null,future:!1,pluralCondition:null,pluralId:null,values:{}};var U=D;function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){X(e,n,t[n])})}return e}function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var z={lang:"en",translations:{},forceRefresh:!1};function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REDUX_I18N_SET_LANGUAGE":return F({},e,{lang:n.lang});case"REDUX_I18N_SET_TRANSLATIONS":return F({},e,{translations:n.translations});case"REDUX_I18N_SET_FORCE_REFRESH":return F({},e,{forceRefresh:n.force});default:return e}}function H(){return(H=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var W=function(e){var n=e.displayName||e.name||"Component";return"Localized(".concat(n,")")};function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"message";return function(n){var t=function(t){return u.a.createElement(q,null,function(r){return u.a.createElement(n,H({},t,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},e,function(e){return r.message(e)})))})};return t.displayName=W(n),t}}t.d(n,"default",function(){return M}),t.d(n,"I18nConsumer",function(){return q}),t.d(n,"Message",function(){return U}),t.d(n,"i18nState",function(){return G}),t.d(n,"setLanguage",function(){return f}),t.d(n,"setTranslations",function(){return s}),t.d(n,"localize",function(){return B}),t.d(n,"getTranslateFunction",function(){return h})}]);