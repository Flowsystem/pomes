module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=require("prop-types")},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-redux")},function(e,n){e.exports=require("react-deep-force-update")},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(1),u=t.n(o),i=t(0),a=t.n(i);function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){l(e,n,t[n])})}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return{type:"REDUX_I18N_SET_LANGUAGE",lang:e}}function s(e,n){return function(t,r){var o="string"==typeof n?{language:n}:n||{},u=o.language,i=o.preserveExisting,a=r(),f=null;f=void 0===a.i18nState?a.getIn(["i18nState","translations"]):c({},a.i18nState.translations);var s=void 0===u?e:c({},f,l({},u,e));t(function(e){return{type:"REDUX_I18N_SET_TRANSLATIONS",translations:e}}(i?Object.keys(s).reduce(function(e,n){return c({},e,l({},n,c({},e[n],s[n])))},f):s)),t(function(e){return{type:"REDUX_I18N_SET_FORCE_REFRESH",force:e}}(!0))}}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function y(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=RegExp("{jsx-start}","gi"),v=RegExp("{jsx-end}","gi"),h=RegExp("".concat("{jsx-start}","|").concat("{jsx-end}"),"gi"),O=function(e,n){return(e.match(n)||[]).length},j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=O(e,m),r=O(e,v);if(t!==r)throw new Error("Pomes error: The number of JSX start and end tags must be the same");if(t>n||r>n)throw new Error("Pomes error: Only one JSX tag pair is allowed")},P=function(e,n,t,r){var o=g(RegExp("".concat("{jsx-start}","(.+)").concat("{jsx-end}"),"g").exec(e)||[void 0,""],2)[1],i="".concat("{jsx-start}").concat(o).concat("{jsx-end}");return[e.replace(i,"{customChild}"),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){d(e,n,t[n])})}return e}({},n,{customChild:u.a.createElement(t,r,S(o,n))})]},S=function(e,n,t,r){var o,i;if(t){j(e),function(e){var n=e.match(h);if(n&&"{jsx-end}"===n[0])throw new Error("Pomes error: JSX start and end tags are in the wrong order")}(e);var a=g(P(e,n,t,r),2);o=a[0],i=a[1]}else j(e,0),o=e,i=n;if(!i||!Object.keys(i).length)return o;var c=o.split(/({[^}]+})/g).map(function(e){var n=/{(.+)}/g.exec(e);if(n){var t=i[n[1]];return t||String(t)}return e});return c.some(function(e){return e&&"object"===b(e)})?u.a.createElement.apply(u.a,["span",null].concat(y(c))):c.join("")},w=function(e,n){var t=e[n];return void 0===t&&n.indexOf("-")>-1&&(t=e[n.split("-")[0]]),t},E=function(e,n,t){return e&&e[n]?e[n]:t},T=function(e,n,t){return{langMessages:w(e,n),fallbackLangMessages:t?w(e,t):void 0,pluralRule:E(e.options,"plural_rule","n != 1"),pluralNumber:parseInt(E(e.options,"plural_number","2"),10)}},_=function(e,n,t,r,o,u){if(!e&&!n)return S(t,r,o,u);var i=e?e[t]:void 0;if(void 0===i||""===i){if(n){var a=n[t];if(void 0!==a&&""!==a)return S(a,r,o,u)}return S(t,r,o,u)}return S(i,r,o,u)},x=function(e,n,t){var r=T(e,n,t),o=r.langMessages,u=r.fallbackLangMessages,i=r.pluralRule;return function(e){var n=e.id,t=e.values,r=void 0===t?{}:t,a=e.pluralId,c=void 0===a?null:a,l=e.pluralCondition,f=void 0===l?"":l,s=e.future,y=(e.comment,e.component),b=p(e,["id","values","pluralId","pluralCondition","future","comment","component"]),d=n;return c&&Function("n","return ".concat(i))(r[f])&&(d=c),s?S(d,r,y,b):_(o,u,d,r,y,b)}},R=u.a.createContext(),C=t(3),k=t.n(C);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,n){return!n||"object"!==I(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,n){return(q=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var M=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),A(this,L(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&q(e,n)}(n,u.a.Component),function(e,n,t){n&&N(e.prototype,n),t&&N(e,t)}(n,[{key:"getChildContext",value:function(){var e=this.props.context;return{t:e.t,message:e.message}}},{key:"componentDidUpdate",value:function(e){var n=this.props.context;e.context.t!==n.t&&k()(this)}},{key:"render",value:function(){return this.props.children}}]),n}();M.childContextTypes={t:a.a.func.isRequired,message:a.a.func.isRequired},M.propTypes={context:a.a.shape().isRequired,children:a.a.node.isRequired};var D=function(e){return u.a.createElement(R.Consumer,null,function(n){return u.a.createElement(M,{context:n},e.children)})};D.propTypes={children:a.a.node.isRequired};var U=D;function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,n){return!n||"object"!==X(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,n){return(J=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var H=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),z(this,G(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&J(e,n)}(n,u.a.PureComponent),function(e,n,t){n&&F(e.prototype,n),t&&F(e,t)}(n,[{key:"componentWillMount",value:function(){var e=this.props,n=e.initialized,t=e.dispatch,r=e.initialLang;!n&&t&&t(f(r))}},{key:"render",value:function(){var e=this.props,n=e.lang,t=e.fallbackLang,r=e.useReducer,o=e.translations_reducer,i=e.translations,a=e.legacy,c=e.children,l={t:function(e,n,t){var r=T(e,n,t),o=r.langMessages,u=r.fallbackLangMessages,i=r.pluralRule,a=r.pluralNumber;return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"object"===b(e)&&(e=e[Number(new Function("n","return ".concat(i))(n[e[a]]))]),_(o,u,e,n)}}(r?o:i,n,t),message:x(r?o:i,n,t)};return u.a.createElement(R.Provider,{value:l},a?u.a.createElement(U,null,c):c)}}]),n}();H.propTypes={translations:i.PropTypes.shape().isRequired,lang:i.PropTypes.string.isRequired,useReducer:i.PropTypes.bool,initialLang:i.PropTypes.string,fallbackLang:i.PropTypes.string,initialized:i.PropTypes.bool,legacy:i.PropTypes.bool,children:i.PropTypes.node.isRequired,dispatch:i.PropTypes.func},H.defaultProps={useReducer:!1,initialLang:"en",fallbackLang:null,initialized:!1,legacy:!1,dispatch:null};var W=H,B=R.Consumer,K=Object(r.connect)(function(e){return{lang:e.i18nState.lang,translations_reducer:e.i18nState.translations,forceRefresh:e.i18nState.forceRefresh}})(W),Q=function(e){return u.a.createElement(B,null,function(n){return n.message(e)})};Q.propTypes={comment:i.PropTypes.string,context:i.PropTypes.string,future:i.PropTypes.bool,id:i.PropTypes.string.isRequired,pluralCondition:i.PropTypes.string,pluralId:i.PropTypes.string,values:i.PropTypes.shape(),component:i.PropTypes.oneOfType([i.PropTypes.string,i.PropTypes.shape(),i.PropTypes.func])},Q.defaultProps={comment:null,context:null,future:!1,pluralCondition:null,pluralId:null,values:{},component:void 0};var V=Q;function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){Z(e,n,t[n])})}return e}function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var $={lang:"en",translations:{},forceRefresh:!1};function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REDUX_I18N_SET_LANGUAGE":return Y({},e,{lang:n.lang});case"REDUX_I18N_SET_TRANSLATIONS":return Y({},e,{translations:n.translations});case"REDUX_I18N_SET_FORCE_REFRESH":return Y({},e,{forceRefresh:n.force});default:return e}}function ne(){return(ne=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var te=function(e){var n=e.displayName||e.name||"Component";return"Localized(".concat(n,")")};function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"message";return function(n){var t=function(t){return u.a.createElement(B,null,function(r){return u.a.createElement(n,ne({},t,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},e,function(e){return r.message(e)})))})};return t.displayName=te(n),t}}t.d(n,"default",function(){return K}),t.d(n,"I18nContext",function(){return R}),t.d(n,"I18nConsumer",function(){return B}),t.d(n,"Message",function(){return V}),t.d(n,"i18nState",function(){return ee}),t.d(n,"setLanguage",function(){return f}),t.d(n,"setTranslations",function(){return s}),t.d(n,"localize",function(){return re}),t.d(n,"getTranslateFunction",function(){return x})}]);