/*
 * Project: pomes
 * File: component/index.js
 */

import { connect } from 'react-redux';
import I18n from './component';
import I18nContext from './context';

const I18nConsumer = I18nContext.Consumer;

export default connect(state => ({
  lang: state.i18nState.lang,
  translations_reducer: state.i18nState.translations,
  forceRefresh: state.i18nState.forceRefresh,
}))(I18n);

export { I18nConsumer };
