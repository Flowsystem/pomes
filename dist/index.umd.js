!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pomes=t():e.pomes=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-deep-force-update")},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(1),u=n.n(o),i=n(0),a=n.n(i);function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return{type:"REDUX_I18N_SET_LANGUAGE",lang:e}}function s(e,t){return function(n,r){var o="string"==typeof t?{language:t}:t||{},u=o.language,i=o.preserveExisting,a=r(),f=null;f=void 0===a.i18nState?a.getIn(["i18nState","translations"]):c({},a.i18nState.translations);var s=void 0===u?e:c({},f,l({},u,e));n(function(e){return{type:"REDUX_I18N_SET_TRANSLATIONS",translations:e}}(i?Object.keys(s).reduce(function(e,t){return c({},e,l({},t,c({},e[t],s[t])))},f):s)),n(function(e){return{type:"REDUX_I18N_SET_FORCE_REFRESH",force:e}}(!0))}}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=RegExp("{jsx-start}","gi"),v=RegExp("{jsx-end}","gi"),h=RegExp("".concat("{jsx-start}","|").concat("{jsx-end}"),"gi"),O=function(e,t){return(e.match(t)||[]).length},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=O(e,m),r=O(e,v);if(n!==r)throw new Error("Pomes error: The number of JSX start and end tags must be the same");if(n>t||r>t)throw new Error("Pomes error: Only one JSX tag pair is allowed")},P=function(e,t,n,r){var o=g(RegExp("".concat("{jsx-start}","(.+)").concat("{jsx-end}"),"g").exec(e)||[void 0,""],2)[1],i="".concat("{jsx-start}").concat(o).concat("{jsx-end}");return[e.replace(i,"{customChild}"),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}({},t,{customChild:u.a.createElement(n,r,S(o,t))})]},S=function(e,t,n,r){var o,i;if(n){j(e),function(e){var t=e.match(h);if(t&&"{jsx-end}"===t[0])throw new Error("Pomes error: JSX start and end tags are in the wrong order")}(e);var a=g(P(e,t,n,r),2);o=a[0],i=a[1]}else j(e,0),o=e,i=t;if(!i||!Object.keys(i).length)return o;var c=o.split(/({[^}]+})/g).map(function(e){var t=/{(.+)}/g.exec(e);if(t){var n=i[t[1]];return n||String(n)}return e});return c.some(function(e){return e&&"object"===b(e)})?u.a.createElement.apply(u.a,["span",null].concat(y(c))):c.join("")},w=function(e,t){var n=e[t];return void 0===n&&t.indexOf("-")>-1&&(n=e[t.split("-")[0]]),n},E=function(e,t,n){return e&&e[t]?e[t]:n},x=function(e,t,n){return{langMessages:w(e,t),fallbackLangMessages:n?w(e,n):void 0,pluralRule:E(e.options,"plural_rule","n != 1"),pluralNumber:parseInt(E(e.options,"plural_number","2"),10)}},T=function(e,t,n,r,o,u){if(!e&&!t)return S(n,r,o,u);var i=e?e[n]:void 0;if(void 0===i||""===i){if(t){var a=t[n];if(void 0!==a&&""!==a)return S(a,r,o,u)}return S(n,r,o,u)}return S(i,r,o,u)},_=function(e,t,n){var r=x(e,t,n),o=r.langMessages,u=r.fallbackLangMessages,i=r.pluralRule;return function(e){var t=e.id,n=e.values,r=void 0===n?{}:n,a=e.pluralId,c=void 0===a?null:a,l=e.pluralCondition,f=void 0===l?"":l,s=e.future,y=(e.comment,e.component),b=p(e,["id","values","pluralId","pluralCondition","future","comment","component"]),d=t;return c&&Function("n","return ".concat(i))(r[f])&&(d=c),s?S(d,r,y,b):T(o,u,d,r,y,b)}},R=u.a.createContext(),C=n(3),k=n.n(C);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,L(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,u.a.Component),function(e,t,n){t&&N(e.prototype,t),n&&N(e,n)}(t,[{key:"getChildContext",value:function(){var e=this.props.context;return{t:e.t,message:e.message}}},{key:"componentDidUpdate",value:function(e){var t=this.props.context;e.context.t!==t.t&&k()(this)}},{key:"render",value:function(){return this.props.children}}]),t}();M.childContextTypes={t:a.a.func.isRequired,message:a.a.func.isRequired},M.propTypes={context:a.a.shape().isRequired,children:a.a.node.isRequired};var D=function(e){return u.a.createElement(R.Consumer,null,function(t){return u.a.createElement(M,{context:t},e.children)})};D.propTypes={children:a.a.node.isRequired};var U=D;function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,G(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,u.a.PureComponent),function(e,t,n){t&&F(e.prototype,t),n&&F(e,n)}(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.initialized,n=e.dispatch,r=e.initialLang;!t&&n&&n(f(r))}},{key:"render",value:function(){var e=this.props,t=e.lang,n=e.fallbackLang,r=e.useReducer,o=e.translations_reducer,i=e.translations,a=e.legacy,c=e.children,l={t:function(e,t,n){var r=x(e,t,n),o=r.langMessages,u=r.fallbackLangMessages,i=r.pluralRule,a=r.pluralNumber;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"object"===b(e)&&(e=e[Number(new Function("n","return ".concat(i))(t[e[a]]))]),T(o,u,e,t)}}(r?o:i,t,n),message:_(r?o:i,t,n)};return u.a.createElement(R.Provider,{value:l},a?u.a.createElement(U,null,c):c)}}]),t}();H.propTypes={translations:i.PropTypes.shape().isRequired,lang:i.PropTypes.string.isRequired,useReducer:i.PropTypes.bool,initialLang:i.PropTypes.string,fallbackLang:i.PropTypes.string,initialized:i.PropTypes.bool,legacy:i.PropTypes.bool,children:i.PropTypes.node.isRequired,dispatch:i.PropTypes.func},H.defaultProps={useReducer:!1,initialLang:"en",fallbackLang:null,initialized:!1,legacy:!1,dispatch:null};var W=H,B=R.Consumer,K=Object(r.connect)(function(e){return{lang:e.i18nState.lang,translations_reducer:e.i18nState.translations,forceRefresh:e.i18nState.forceRefresh}})(W),Q=function(e){return u.a.createElement(B,null,function(t){return t.message(e)})};Q.propTypes={comment:i.PropTypes.string,context:i.PropTypes.string,future:i.PropTypes.bool,id:i.PropTypes.string.isRequired,pluralCondition:i.PropTypes.string,pluralId:i.PropTypes.string,values:i.PropTypes.shape(),component:i.PropTypes.oneOfType([i.PropTypes.shape(),i.PropTypes.func])},Q.defaultProps={comment:null,context:null,future:!1,pluralCondition:null,pluralId:null,values:{},component:void 0};var V=Q;function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Z(e,t,n[t])})}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $={lang:"en",translations:{},forceRefresh:!1};function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REDUX_I18N_SET_LANGUAGE":return Y({},e,{lang:t.lang});case"REDUX_I18N_SET_TRANSLATIONS":return Y({},e,{translations:t.translations});case"REDUX_I18N_SET_FORCE_REFRESH":return Y({},e,{forceRefresh:t.force});default:return e}}function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ne=function(e){var t=e.displayName||e.name||"Component";return"Localized(".concat(t,")")};function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"message";return function(t){var n=function(n){return u.a.createElement(B,null,function(r){return u.a.createElement(t,te({},n,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,function(e){return r.message(e)})))})};return n.displayName=ne(t),n}}n.d(t,"default",function(){return K}),n.d(t,"I18nContext",function(){return R}),n.d(t,"I18nConsumer",function(){return B}),n.d(t,"Message",function(){return V}),n.d(t,"i18nState",function(){return ee}),n.d(t,"setLanguage",function(){return f}),n.d(t,"setTranslations",function(){return s}),n.d(t,"localize",function(){return re}),n.d(t,"getTranslateFunction",function(){return _})}])});