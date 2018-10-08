/*
 * Project: pomes
 * File: component/component.js
 */


import React from 'react';
import { PropTypes } from 'prop-types';

import { setLanguage } from 'actions';
import getTranslateFunction from 'getTranslateFunction';
import I18nContext from 'component/context';

class I18nProvider extends React.PureComponent {
  componentWillMount() {
    const {
      initialized,
      dispatch,
      initialLang,
    } = this.props;

    if (!initialized) {
      dispatch(setLanguage(initialLang));
    }
  }

  render() {
    const {
      lang,
      fallbackLang,
      useReducer,
      translations_reducer,
      translations,
      children,
    } = this.props;

    return (
      <I18nContext.Provider
        value={{
          t: getTranslateFunction(
            useReducer ? translations_reducer : translations,
            lang,
            fallbackLang,
          ),
        }}
      >
        {children}
      </I18nContext.Provider>
    );
  }
}

I18nProvider.propTypes = {
  translations: PropTypes.shape().isRequired,
  lang: PropTypes.string.isRequired,
  useReducer: PropTypes.bool,
  initialLang: PropTypes.string,
  fallbackLang: PropTypes.string,
  initialized: PropTypes.bool,
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func,
};

I18nProvider.defaultProps = {
  useReducer: false,
  initialLang: 'en',
  fallbackLang: null,
  initialized: false,
  dispatch: f => f,
};

export default I18nProvider;
