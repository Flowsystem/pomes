
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import I18n from 'redux-i18n';
import { store } from './store';

import { translations } from './translations';

import Main from './main';
import MainReducer from './mainreducer';

const Demo = () => (
  <Provider store={store}>
    <I18n translations={translations}>
      <Main />
    </I18n>
  </Provider>
);

const DemoReducer = () => (
  <Provider store={store}>
    <I18n translations={{}} useReducer>
      <MainReducer />
    </I18n>
  </Provider>
);

ReactDOM.render(<Demo />, document.getElementById('demo'));
ReactDOM.render(<DemoReducer />, document.getElementById('demo-reducer'));
