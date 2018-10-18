module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=require("prop-types")},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-redux")},function(e,n){e.exports=require("react-deep-force-update")},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(1),u=t.n(o),i=t(0),a=t.n(i);function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){l(e,n,t[n])})}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return{type:"REDUX_I18N_SET_LANGUAGE",lang:e}}function s(e,n){return function(t,r){var o="string"==typeof n?{language:n}:n||{},u=o.language,i=o.preserveExisting,a=r(),f=null;f=void 0===a.i18nState?a.getIn(["i18nState","translations"]):c({},a.i18nState.translations);var s=void 0===u?e:c({},f,l({},u,e));t(function(e){return{type:"REDUX_I18N_SET_TRANSLATIONS",translations:e}}(i?Object.keys(s).reduce(function(e,n){return c({},e,l({},n,c({},e[n],s[n])))},f):s)),t(function(e){return{type:"REDUX_I18N_SET_FORCE_REFRESH",force:e}}(!0))}}function p(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e,n){if(!n)return e;var t=e.split(/({[^}]+})/g).map(function(e){var t=/{(.+)}/g.exec(e);if(t){var r=n[t[1]];return r||String(r)}return e});return t.some(function(e){return e&&"object"===y(e)})?u.a.createElement.apply(u.a,["span",null].concat(p(t))):t.join("")},d=function(e,n){var t=e[n];return void 0===t&&n.indexOf("-")>-1&&(t=e[n.split("-")[0]]),t},g=function(e,n,t){return void 0===e?t||null:void 0===e[n]?t||null:e[n]},v=function(e,n,t){return{langMessages:d(e,n),fallbackLangMessages:t?d(e,t):void 0,pluralRule:g(e.options,"plural_rule","n != 1"),pluralNumber:parseInt(g(e.options,"plural_number","2"),10)}},m=function(e,n,t,r){if(!e&&!n)return b(t,r);var o=e?e[t]:void 0;if(void 0===o||""===o){if(n){var u=n[t];if(void 0!==u&&""!==u)return b(u,r)}return b(t,r)}return b(o,r)},h=function(e,n,t){var r=v(e,n,t),o=r.langMessages,u=r.fallbackLangMessages,i=r.pluralRule;return function(e){var n=e.id,t=e.values,r=void 0===t?{}:t,a=e.pluralId,c=void 0===a?null:a,l=e.pluralCondition,f=void 0===l?"":l,s=e.future,p=n;return c&&Function("n","return ".concat(i))(r[f])&&(p=c),s?b(p,r):m(o,u,p,r)}},O=u.a.createContext(),S=t(3),_=t.n(S);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,n){return!n||"object"!==P(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,n){return(R=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var w=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),T(this,E(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&R(e,n)}(n,u.a.Component),function(e,n,t){n&&j(e.prototype,n),t&&j(e,t)}(n,[{key:"getChildContext",value:function(){var e=this.props.context;return{t:e.t,message:e.message}}},{key:"componentDidUpdate",value:function(e){var n=this.props.context;e.context.t!==n.t&&_()(this)}},{key:"render",value:function(){return this.props.children}}]),n}();w.childContextTypes={t:a.a.func.isRequired,message:a.a.func.isRequired},w.propTypes={context:a.a.shape().isRequired,children:a.a.node.isRequired};var x=function(e){return u.a.createElement(O.Consumer,null,function(n){return u.a.createElement(w,{context:n},e.children)})};x.propTypes={children:a.a.node.isRequired};var C=x;function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,n){return!n||"object"!==N(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,n){return(q=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var A=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),I(this,L(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&q(e,n)}(n,u.a.PureComponent),function(e,n,t){n&&k(e.prototype,n),t&&k(e,t)}(n,[{key:"componentWillMount",value:function(){var e=this.props,n=e.initialized,t=e.dispatch,r=e.initialLang;!n&&t&&t(f(r))}},{key:"render",value:function(){var e=this.props,n=e.lang,t=e.fallbackLang,r=e.useReducer,o=e.translations_reducer,i=e.translations,a=e.legacy,c=e.children,l={t:function(e,n,t){var r=v(e,n,t),o=r.langMessages,u=r.fallbackLangMessages,i=r.pluralRule,a=r.pluralNumber;return function(e,n){return"object"===y(e)&&(e=e[Number(new Function("n","return ".concat(i))(n[e[a]]))]),m(o,u,e,n)}}(r?o:i,n,t),message:h(r?o:i,n,t)};return u.a.createElement(O.Provider,{value:l},a?u.a.createElement(C,null,c):c)}}]),n}();A.propTypes={translations:i.PropTypes.shape().isRequired,lang:i.PropTypes.string.isRequired,useReducer:i.PropTypes.bool,initialLang:i.PropTypes.string,fallbackLang:i.PropTypes.string,initialized:i.PropTypes.bool,legacy:i.PropTypes.bool,children:i.PropTypes.node.isRequired,dispatch:i.PropTypes.func},A.defaultProps={useReducer:!1,initialLang:"en",fallbackLang:null,initialized:!1,legacy:!1,dispatch:null};var M=A,D=O.Consumer,U=Object(r.connect)(function(e){return{lang:e.i18nState.lang,translations_reducer:e.i18nState.translations,forceRefresh:e.i18nState.forceRefresh}})(M),F=function(e){return u.a.createElement(D,null,function(n){return n.message(e)})};F.propTypes={comment:i.PropTypes.string,context:i.PropTypes.string,future:i.PropTypes.bool,id:i.PropTypes.string.isRequired,pluralCondition:i.PropTypes.string,pluralId:i.PropTypes.string,values:i.PropTypes.shape()},F.defaultProps={comment:null,context:null,future:!1,pluralCondition:null,pluralId:null,values:{}};var X=F;function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){G(e,n,t[n])})}return e}function G(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var H={lang:"en",translations:{},forceRefresh:!1};function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REDUX_I18N_SET_LANGUAGE":return z({},e,{lang:n.lang});case"REDUX_I18N_SET_TRANSLATIONS":return z({},e,{translations:n.translations});case"REDUX_I18N_SET_FORCE_REFRESH":return z({},e,{forceRefresh:n.force});default:return e}}function B(){return(B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var J=function(e){var n=e.displayName||e.name||"Component";return"Localized(".concat(n,")")};function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"message";return function(n){var t=function(t){return u.a.createElement(D,null,function(r){return u.a.createElement(n,B({},t,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},e,function(e){return r.message(e)})))})};return t.displayName=J(n),t}}t.d(n,"default",function(){return U}),t.d(n,"I18nContext",function(){return O}),t.d(n,"I18nConsumer",function(){return D}),t.d(n,"Message",function(){return X}),t.d(n,"i18nState",function(){return W}),t.d(n,"setLanguage",function(){return f}),t.d(n,"setTranslations",function(){return s}),t.d(n,"localize",function(){return K}),t.d(n,"getTranslateFunction",function(){return h})}]);