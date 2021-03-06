// @flow

import type {
  SetLanguageAction,
  SetTranslationsAction,
  SetForceRefreshAction,
} from 'types';

export function setLanguage(lang: string): SetLanguageAction {
  return { type: 'REDUX_I18N_SET_LANGUAGE', lang };
}

function updateTranslations(translations: {}): SetTranslationsAction {
  return { type: 'REDUX_I18N_SET_TRANSLATIONS', translations };
}

export function setForceRefresh(force: boolean): SetForceRefreshAction {
  return { type: 'REDUX_I18N_SET_FORCE_REFRESH', force };
}

export function setTranslations(translations: {}, languageOrOptions: any) {
  return (dispatch: Function, getState: Function) => {
    const options: any = typeof languageOrOptions === 'string'
      ? { language: languageOrOptions }
      : languageOrOptions || {};
    const { language, preserveExisting } = options;
    const state = getState();
    let trans = null;
    // Compatibility with immutable
    if (state.i18nState === undefined) {
      trans = state.getIn(['i18nState', 'translations']);
    } else {
      trans = { ...state.i18nState.translations };
    }
    const newTranslations = language === undefined
      ? translations
      : { ...trans, [language]: translations };
    dispatch(
      updateTranslations(
        preserveExisting
          ? Object.keys(newTranslations).reduce(
            (allTranslations, lang) => ({
              ...allTranslations,
              [lang]: {
                ...allTranslations[lang],
                ...newTranslations[lang],
              },
            }),
            trans,
          )
          : newTranslations,
      ),
    );
    dispatch(setForceRefresh(true));
  };
}
