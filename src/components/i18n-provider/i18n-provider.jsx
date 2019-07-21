// @flow
import * as React from 'react';

import { setLanguage } from 'actions';
import getTranslateFunction from 'getTranslateFunction';

import I18nContext from 'contexts/i18n';

import type { I18nProviderProps } from 'types';

class I18nProvider extends React.PureComponent<I18nProviderProps> {
  static defaultProps = {
    useReducer: false,
    initialLang: 'en',
    fallbackLang: undefined,
    initialized: false,
    dispatch: undefined,
  }

  componentWillMount() {
    const {
      initialized,
      dispatch,
      initialLang,
    } = this.props;

    if (!initialized && dispatch && initialLang) {
      dispatch(setLanguage(initialLang));
    }
  }

  render() {
    const {
      lang,
      fallbackLang,
      useReducer,
      translationsFromRedux,
      translations,
      children,
    } = this.props;

    const context = {
      message: getTranslateFunction(
        useReducer ? translationsFromRedux : translations,
        lang,
        fallbackLang,
      ),
    };

    return (
      <I18nContext.Provider value={context}>
        {children}
      </I18nContext.Provider>
    );
  }
}

export default I18nProvider;
