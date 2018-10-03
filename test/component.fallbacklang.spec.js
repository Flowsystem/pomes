import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import I18n from '../dist/component';
import { i18nState } from '../dist/reducer';
import { setLanguage } from '../dist/actions';

import TransWithoutParams from './components/TransWithoutParams';

const translations = {
  es: {
    Hello: 'Hola',
  },
  en: {
  },
  de: {
    Hello: 'Hallo',
  },
};

describe('fallback language', () => {
  it('checking language', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );

    const component = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations} fallbackLang="de" initialLang="en">
          <TransWithoutParams />
        </I18n>
      </Provider>,
    ));

    expect(store.getState().i18nState.lang).toEqual('en');
    expect(component.textContent).toEqual('Hallo');
    store.dispatch(setLanguage('es'));
    expect(component.textContent).toEqual('Hola');
    store.dispatch(setLanguage('fr'));
    expect(component.textContent).toEqual('Hallo');
  });
});
