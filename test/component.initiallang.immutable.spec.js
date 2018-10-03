import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import I18n from '../immutable';
import { i18nState } from '../immutable';

import TransWithoutParams from './components/TransWithoutParams';

const translations = {
  es: {
    Hello: 'Hola',
    'Hello {name}!': 'Hola {name}!',
    'YYYY-MM-DD': 'DD/MM/YYYY',
  },
  en: {
    'una noche': 'one night',
    '{n} noches': '{n} nights',
  },
  'de-DE': {
    Hello: 'Hallo',
  },
};

describe('initial language (immutable)', () => {
  it('checking language', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations} initialLang="es">
          <TransWithoutParams />
        </I18n>
      </Provider>,
    );

    expect(store.getState().getIn(['i18nState', 'lang'])).toEqual('es');
  });
});
