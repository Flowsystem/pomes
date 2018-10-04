"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}var interpolateParams=function interpolateParams(text,params){if(!params){return text}var children=text.split(/({[^}]+})/g).map(function(child){var match=/{(.+)}/g.exec(child);if(match){var param=params[match[1]];return param||String(param)}return child});// if any children are objects (i.e. react components), wrap in a span, otherwise return as string
// ignore anything that is falsy, bypassing null, etc
return children.some(function(child){return child&&_typeof(child)==="object"})// When React 16 is released, change the span to an identity function for array children,
// removing the extra dom node
?_react.default.createElement.apply(_react.default,["span",null].concat(_toConsumableArray(children))):children.join("")};var getLangMessages=function getLangMessages(translations,lang){var langMessages=translations[lang];// Fall back lang
if(langMessages===undefined&&lang.indexOf("-")>-1){langMessages=translations[lang.split("-")[0]]}return langMessages};var getOptionValue=function getOptionValue(options,key,defaultValue){if(options===undefined){return defaultValue||null}return options[key]===undefined?defaultValue||null:options[key]};var _default=function _default(translations,lang,fallbackLang){var langMessages=getLangMessages(translations,lang);var fallbackLangMessages=fallbackLang?getLangMessages(translations,fallbackLang):undefined;var plural_rule=getOptionValue(translations.options,"plural_rule","n != 1");var plural_number=parseInt(getOptionValue(translations.options,"plural_number","2"),10);return function(textKey,params,comment){// Checking if textkey contains a pluralize object.
if(_typeof(textKey)==="object"){textKey=textKey[Number(new Function("n","return ".concat(plural_rule))(params[textKey[plural_number]]))]}if(typeof comment!=="string"||!comment){console.warn("Comment is mandatory for \"".concat(textKey,"\""))}if(!langMessages&&!fallbackLangMessages){return interpolateParams(textKey,params)}var message=langMessages?langMessages[textKey]:undefined;if(message===undefined||message===""){// If don't have literal translation and have fallback lang, try
// to get from there.
if(fallbackLangMessages){var literal=fallbackLangMessages[textKey];if(literal!==undefined&&literal!==""){return interpolateParams(literal,params)}}return interpolateParams(textKey,params)}return interpolateParams(message,params)}};exports.default=_default;