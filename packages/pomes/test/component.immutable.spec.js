import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import thunk from 'redux-thunk';
import TestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import I18n, { i18nState } from 'i18n-immutable';
import { setLanguage } from 'actions';
import TransWithoutParams from './components/TransWithoutParams';
import TransWithParams from './components/TransWithParams';
import TransWithDollarSignParams from './components/TransWithDollarSignParams';
import TransWithNumberParams from './components/TransWithNumberParams';
import Dates from './components/Dates';
import { TransPluralize1, TransPluralize2 } from './components/TransPlurals';
import TransWithObjParams from './components/TransWithObjParams';

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

describe('immutable component test', () => {
  it('initial state', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );

    expect(store.getState().get('i18nState')).toMatchSnapshot();
    expect(store.getState().getIn(['i18nState', 'lang'])).toEqual('en');
  });

  it('text without params', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const withoutParamsNode = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransWithoutParams />
        </I18n>
      </Provider>,
    ));

    expect(withoutParamsNode.textContent).toEqual('Hello');
  });

  it('changing language in text without params', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const withoutParamsNode = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransWithoutParams />
        </I18n>
      </Provider>,
    ));

    store.dispatch(setLanguage('es'));
    expect(withoutParamsNode.textContent).toEqual('Hola');
  });

  it('text with params', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const withParamsNode = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransWithParams />
        </I18n>
      </Provider>,
    ));

    store.dispatch(setLanguage('en'));
    expect(withParamsNode.textContent).toEqual('Hello Francesc!');
  });

  it('text with dollar signs', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const withDollarSignParamsNode = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransWithDollarSignParams />
        </I18n>
      </Provider>,
    ));

    expect(withDollarSignParamsNode.textContent).toEqual('We should have two dollar signs $$!');
  });

  it('text with number params', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const withNumberParamsNode = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransWithNumberParams />
        </I18n>
      </Provider>,
    ));

    expect(withNumberParamsNode.textContent).toEqual('13 things!');
  });

  it('changing language in text with params', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const withParamsNode = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransWithParams />
        </I18n>
      </Provider>,
    ));

    store.dispatch(setLanguage('es'));
    expect(withParamsNode.textContent).toEqual('Hola Francesc!');
  });

  it('date format', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const dates = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <Dates />
        </I18n>
      </Provider>,
    ));

    store.dispatch(setLanguage('en'));
    expect(dates.textContent).toEqual('2016-01-01');
    store.dispatch(setLanguage('es'));
    expect(dates.textContent).toEqual('01/01/2016');
  });

  it('pluralize', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const pluralize1 = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransPluralize1 />
        </I18n>
      </Provider>,
    ));
    const pluralize2 = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransPluralize2 />
        </I18n>
      </Provider>,
    ));

    store.dispatch(setLanguage('es'));
    expect(pluralize1.textContent).toEqual('una noche');
    expect(pluralize2.textContent).toEqual('5 noches');
    store.dispatch(setLanguage('en'));
    expect(pluralize1.textContent).toEqual('one night');
    expect(pluralize2.textContent).toEqual('5 nights');
  });

  it('de-DE', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const withoutParamsNode = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransWithoutParams />
        </I18n>
      </Provider>,
    ));

    store.dispatch(setLanguage('de-DE'));
    expect(store.getState().getIn(['i18nState', 'lang'])).toEqual('de-DE');
    expect(withoutParamsNode.textContent).toEqual('Hallo');
  });

  it('fall back lang', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const withoutParamsNode = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransWithoutParams />
        </I18n>
      </Provider>,
    ));

    store.dispatch(setLanguage('es-ES'));
    expect(store.getState().getIn(['i18nState', 'lang'])).toEqual('es-ES');
    expect(withoutParamsNode.textContent).toEqual('Hola');
  });

  it('object as param', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const objAsParam = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransWithObjParams />
        </I18n>
      </Provider>,
    ));

    expect(objAsParam.textContent).toEqual('Hello Cesc');
  });
});
