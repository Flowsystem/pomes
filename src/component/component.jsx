// @flow

import * as React from 'react';

import { setLanguage } from 'actions';
import getTranslateFunction, { legacyGetTranslateFunction } from 'getTranslateFunction';
import I18nContext from 'component/context';
import LegacyContextProvider from 'component/legacyContextProvider';

type Props = {
  translations: any,
  reducerTranslations: any,
  lang: string,
  useReducer?: boolean,
  initialLang?: string,
  fallbackLang?: string,
  initialized?: boolean,
  legacy?: boolean,
  children: React.Node,
  dispatch?: (any) => void,
};

class I18nProvider extends React.PureComponent<Props> {
  static defaultProps = {
    useReducer: false,
    initialLang: 'en',
    fallbackLang: null,
    initialized: false,
    legacy: false,
    dispatch: null,
  }

  componentWillMount() {
    const {
      initialized,
      dispatch,
      initialLang,
    } = this.props;

    if (!initialized && dispatch) {
      dispatch(setLanguage(initialLang));
    }
  }

  renderChildren() {
    const { legacy, children } = this.props;

    if (legacy) {
      return (
        <LegacyContextProvider>
          {children}
        </LegacyContextProvider>
      );
    }

    return children;
  }

  render() {
    const {
      lang,
      fallbackLang,
      useReducer,
      reducerTranslations,
      translations,
    } = this.props;

    const context = {
      t: legacyGetTranslateFunction(
        useReducer ? reducerTranslations : translations,
        lang,
        fallbackLang,
      ),
      message: getTranslateFunction(
        useReducer ? reducerTranslations : translations,
        lang,
        fallbackLang,
      ),
    };

    return (
      <I18nContext.Provider value={context}>
        {this.renderChildren()}
      </I18nContext.Provider>
    );
  }
}

export default I18nProvider;
