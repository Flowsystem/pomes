!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pomes=t():e.pomes=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-deep-force-update")},function(e,t){e.exports=require("hoist-non-react-statics")},function(e,t){e.exports=require("invariant")},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(1),i=n.n(o),u=n(0),c=n(3),a=n.n(c);function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return{type:"REDUX_I18N_SET_LANGUAGE",lang:e}}function p(e,t){return function(n,r){var o="string"==typeof t?{language:t}:t||{},i=o.language,u=o.preserveExisting,c=r(),a=null;a=void 0===c.i18nState?c.getIn(["i18nState","translations"]):f({},c.i18nState.translations);var s=void 0===i?e:f({},a,l({},i,e));n(function(e){return{type:"REDUX_I18N_SET_TRANSLATIONS",translations:e}}(u?Object.keys(s).reduce(function(e,t){return f({},e,l({},t,f({},e[t],s[t])))},a):s)),n(y(!0))}}function y(e){return{type:"REDUX_I18N_SET_FORCE_REFRESH",force:e}}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=function(e,t){if(!t)return e;var n=e.split(/({[^}]+})/g).map(function(e){var n=/{(.+)}/g.exec(e);if(n){var r=t[n[1]];return r||String(r)}return e});return n.some(function(e){return e&&"object"===d(e)})?i.a.createElement.apply(i.a,["span",null].concat(b(n))):n.join("")},v=function(e,t){var n=e[t];return void 0===n&&t.indexOf("-")>-1&&(n=e[t.split("-")[0]]),n},h=function(e,t,n){return void 0===e?n||null:void 0===e[t]?n||null:e[t]};function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,_(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,i.a.Component),function(e,t,n){t&&O(e.prototype,t),n&&O(e,n)}(t,[{key:"getChildContext",value:function(){var e=this.props,t=e.lang,n=e.fallbackLang,r=e.useReducer,o=e.translations_reducer,i=e.translations;return{t:function(e,t,n){var r=v(e,t),o=n?v(e,n):void 0,i=h(e.options,"plural_rule","n != 1"),u=parseInt(h(e.options,"plural_number","2"),10);return function(e,t,n){if("object"===d(e)&&(e=e[Number(new Function("n","return ".concat(i))(t[e[u]]))]),!r&&!o)return g(e,t);var c=r?r[e]:void 0;if(void 0===c||""===c){if(o){var a=o[e];if(void 0!==a&&""!==a)return g(a,t)}return g(e,t)}return g(c,t)}}(r?o:i,t,n)}}},{key:"shouldComponentUpdate",value:function(e,t){return!(this.props.forceRefresh&&!e.forceRefresh)}},{key:"componentDidUpdate",value:function(e,t){(e.lang!==this.props.lang||!e.forceRefresh&&this.props.forceRefresh)&&(a()(this),this.props.forceRefresh&&this.props.dispatch(y(!1)))}},{key:"componentWillMount",value:function(){this.props.initialized||this.props.dispatch(s(this.props.initialLang))}},{key:"render",value:function(){return this.props.children}}]),t}();R.childContextTypes={t:u.PropTypes.func.isRequired},R.propTypes={translations:u.PropTypes.object.isRequired,useReducer:u.PropTypes.bool,initialLang:u.PropTypes.string,fallbackLang:u.PropTypes.string,initialized:u.PropTypes.bool},R.defaultProps={useReducer:!1,initialLang:"en",fallbackLang:null};var E=R,P=Object(r.connect)(function(e){return{lang:e.i18nState.lang,translations_reducer:e.i18nState.translations,forceRefresh:e.i18nState.forceRefresh}})(E);function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x={lang:"en",translations:{},forceRefresh:!1};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REDUX_I18N_SET_LANGUAGE":return T({},e,{lang:t.lang});case"REDUX_I18N_SET_TRANSLATIONS":return T({},e,{translations:t.translations});case"REDUX_I18N_SET_FORCE_REFRESH":return T({},e,{forceRefresh:t.force});default:return e}}n(4),n(5);n.d(t,"default",function(){return P}),n.d(t,"i18nState",function(){return A}),n.d(t,"setLanguage",function(){return s}),n.d(t,"setTranslations",function(){return p}),n.d(t,"localize",function(){}),n.d(t,"getTranslateFunction",function(){})}])});