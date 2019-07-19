// @flow

import type { Action } from 'actions';

type State = {|
  +lang: string,
  +translations: {},
  +forceRefresh: boolean,
|};

const reduxI18nState: State = {
  lang: 'en',
  translations: {},
  forceRefresh: false,
};

// eslint-disable-next-line import/prefer-default-export
export function i18nState(state: State = reduxI18nState, action: Action): State {
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
