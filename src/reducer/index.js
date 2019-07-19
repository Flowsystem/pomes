// @flow

import type { Action } from 'actions';

type I18nState = {|
  +lang: string,
  +translations: {},
  +forceRefresh: boolean,
|};

export type State = {|
  +i18nState: I18nState,
|};

const reduxI18nState: I18nState = {
  lang: 'en',
  translations: {},
  forceRefresh: false,
};

// eslint-disable-next-line import/prefer-default-export
export function i18nState(state: I18nState = reduxI18nState, action: Action): I18nState {
  switch (action.type) {
    case 'REDUX_I18N_SET_LANGUAGE':
      return {
        ...state,
        lang: action.lang,
      };
    case 'REDUX_I18N_SET_TRANSLATIONS':
      return {
        ...state,
        translations: action.translations,
      };
    case 'REDUX_I18N_SET_FORCE_REFRESH':
      return {
        ...state,
        forceRefresh: action.force,
      };
    default:
      return state;
  }
}
