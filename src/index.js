// @flow

export { default as Message } from 'components/message';
export { default as localize } from 'hocs/localize';

export { default } from './component';
export { i18nState } from './reducer';
export { setLanguage, setTranslations } from './actions';
export { default as getTranslateFunction } from './getTranslateFunction';
