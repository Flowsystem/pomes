// @flow

type SetLanguageAction = {|
  type: 'REDUX_I18N_SET_LANGUAGE',
  lang: string
|};

type SetTranslationsAction = {|
  type: 'REDUX_I18N_SET_TRANSLATIONS',
  translations: {},
|};

type SetForceRefreshAction = {|
  type: 'REDUX_I18N_SET_FORCE_REFRESH',
  force: boolean,
|};

export type Action = SetLanguageAction | SetTranslationsAction | SetForceRefreshAction;

export function setLanguage(lang: string): SetLanguageAction {
  return { type: 'REDUX_I18N_SET_LANGUAGE', lang };
}

function updateTranslations(translations: {}): SetTranslationsAction {
  return { type: 'REDUX_I18N_SET_TRANSLATIONS', translations };
}

export function setForceRefresh(force: boolean): SetForceRefreshAction {
  return { type: 'REDUX_I18N_SET_FORCE_REFRESH', force };
}

export function setTranslations(translations: {}, languageOrOptions) {
  return function (dispatch, getState) {
    const options = typeof languageOrOptions === 'string'
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
