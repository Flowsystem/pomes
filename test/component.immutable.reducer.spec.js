import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import I18n from '../immutable';
import { i18nState } from '../immutable';
import { setLanguage, setTranslations } from '../dist/actions';

import TransWithoutParams from './components/TransWithoutParams';

describe('translations in reducer (immutable)', () => {
  it('set all translations object', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );

    const component = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={{}} useReducer>
          <TransWithoutParams />
        </I18n>
      </Provider>,
    ));
    expect(store.getState().getIn(['i18nState', 'translations'])).toEqual({});
    store.dispatch(setLanguage('es'));
    expect(component.textContent).toEqual('Hello');

    const trans = {
      es: {
        Hello: 'Hola',
      },
    };

    store.dispatch(setTranslations(trans));
    expect(store.getState().getIn(['i18nState', 'translations']).es.Hello).toEqual('Hola');
    expect(component.textContent).toEqual('Hola');
  });

  it('add only one new language in translations', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );

    const component = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={{}} useReducer>
          <TransWithoutParams />
        </I18n>
      </Provider>,
    ));
    const trans = {
      es: {
        Hello: 'Hola',
      },
    };
    store.dispatch(setTranslations(trans));
    expect(store.getState().getIn(['i18nState', 'translations'])).toEqual(trans);
    store.dispatch(setLanguage('es'));
    expect(component.textContent).toEqual('Hola');

    store.dispatch(setLanguage('de'));
    expect(component.textContent).toEqual('Hello');

    store.dispatch(setTranslations({ Hello: 'Hallo' }, 'de'));
    expect(component.textContent).toEqual('Hallo');
  });

  describe('options', () => {
    it('add only one new language in translations', () => {
      const store = createStore(
        combineReducers({ i18nState }),
        applyMiddleware(thunk),
      );

      const component = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
        <Provider store={store}>
          <I18n translations={{}} useReducer>
            <TransWithoutParams />
          </I18n>
        </Provider>,
      ));
      const trans = {
        es: {
          Hello: 'Hola',
        },
      };
      store.dispatch(setTranslations(trans));
      store.dispatch(setLanguage('de'));
      store.dispatch(setTranslations({ Hello: 'Hallo' }, { language: 'de' }));
      expect(component.textContent).toEqual('Hallo');
    });

    it('preserve existing translations', () => {
      const store = createStore(
        combineReducers({ i18nState }),
        applyMiddleware(thunk),
      );

      const component = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
        <Provider store={store}>
          <I18n translations={{}} useReducer>
            <TransWithoutParams />
          </I18n>
        </Provider>,
      ));
      const trans = {
        es: {
          Hello: 'Hola',
        },
      };

      const newTranslations = {
        de: {
          Hello: 'Hallo',
        },
      };
      store.dispatch(setTranslations(trans));
      store.dispatch(setTranslations(newTranslations, { preserveExisting: true }));
      store.dispatch(setLanguage('es'));
      expect(component.textContent).toEqual('Hola');
      store.dispatch(setLanguage('de'));
      expect(component.textContent).toEqual('Hallo');
    });

    it('preserve translations in only one language', () => {
      const store = createStore(
        combineReducers({ i18nState }),
        applyMiddleware(thunk),
      );

      const component = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
        <Provider store={store}>
          <I18n translations={{}} useReducer>
            <TransWithoutParams />
          </I18n>
        </Provider>,
      ));
      const trans = {
        es: {
          Hello: 'Hola',
        },
      };

      const newTranslations = {
        Goodbye: 'Adiós',
      };

      store.dispatch(setTranslations(trans));
      store.dispatch(setTranslations(newTranslations, { language: 'es', preserveExisting: true }));
      expect(store.getState().getIn(['i18nState', 'translations']).es).toEqual({
        Hello: 'Hola',
        Goodbye: 'Adiós',
      });
    });
  });
});
