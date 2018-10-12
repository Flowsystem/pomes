/*
 * Project: pomes
 * File: index.js
 */

export { default } from './component/index';
export { default as Message } from './message';
export { i18nState } from './reducer/index';
export { setLanguage, setTranslations } from './actions';
export { default as localize } from './hoc/index';
export { default as getTranslateFunction } from './getTranslateFunction';
