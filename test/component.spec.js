import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import TestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import I18n from '../dist/component';
import { i18nState } from '../dist/reducer';
import { setLanguage } from '../dist/actions';
import TransWithoutParams from './components/TransWithoutParams';
import TransWithParams from './components/TransWithParams';
import TransWithDollarSignParams from './components/TransWithDollarSignParams';
import TransWithNumberParams from './components/TransWithNumberParams';
import TransWithJunkParams from './components/TransWithJunkParams';
import Dates from './components/Dates';
import { TransPluralize1, TransPluralize2 } from './components/TransPlurals';
import TransWithObjParams from './components/TransWithObjParams';
import { TransFormPluralize1, TransFormPluralize2 } from './components/TransFormPlurals';

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

const translations2 = { ...translations };
translations2.options = {
  plural_rule: 'n > 1',
  plural_number: '2',
};

const translations3 = { ...translations };
translations3.options = {
  plural_rule: 'plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2',
  plural_number: '3',
};

describe('component test', () => {
  it('initial state', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );

    expect(store.getState().i18nState).toMatchSnapshot();
    expect(store.getState().i18nState.lang).toEqual('en');
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

  it('text with junk params', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const withJunkParamsNode = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations}>
          <TransWithJunkParams />
        </I18n>
      </Provider>,
    ));

    expect(withJunkParamsNode.textContent).toEqual('undefined, null, and false as strings');
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

  it('pluralize forms', () => {
    const store = createStore(
      combineReducers({ i18nState }),
      applyMiddleware(thunk),
    );
    const pluralizeform1 = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations2}>
          <TransFormPluralize1 n={0} />
        </I18n>
      </Provider>,
    ));

    const pluralizeform2 = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations2}>
          <TransFormPluralize1 n={1} />
        </I18n>
      </Provider>,
    ));

    const pluralizeform3 = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations2}>
          <TransFormPluralize1 n={2} />
        </I18n>
      </Provider>,
    ));

    const pluralizeform4 = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations3}>
          <TransFormPluralize2 n={0} />
        </I18n>
      </Provider>,
    ));

    const pluralizeform5 = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations3}>
          <TransFormPluralize2 n={1} />
        </I18n>
      </Provider>,
    ));

    const pluralizeform6 = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations3}>
          <TransFormPluralize2 n={2} />
        </I18n>
      </Provider>,
    ));

    const pluralizeform7 = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations3}>
          <TransFormPluralize2 n={3} />
        </I18n>
      </Provider>,
    ));

    const pluralizeform8 = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
      <Provider store={store}>
        <I18n translations={translations3}>
          <TransFormPluralize2 n={4} />
        </I18n>
      </Provider>,
    ));

    store.dispatch(setLanguage('es'));
    expect(pluralizeform1.textContent).toEqual('0 banane');
    expect(pluralizeform2.textContent).toEqual('1 banane');
    expect(pluralizeform3.textContent).toEqual('2 bananes');

    expect(pluralizeform4.textContent).toEqual('plural 3/0');
    expect(pluralizeform5.textContent).toEqual('plural 1/1');
    expect(pluralizeform6.textContent).toEqual('plural 2/2');
    expect(pluralizeform7.textContent).toEqual('plural 2/3');
    expect(pluralizeform8.textContent).toEqual('plural 2/4');
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
    expect(store.getState().i18nState.lang).toEqual('de-DE');
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
    expect(store.getState().i18nState.lang).toEqual('es-ES');
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
