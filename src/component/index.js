// @flow

import { connect } from 'react-redux';
import I18nProvider from './component';
import I18nContext from './context';

const I18nConsumer = I18nContext.Consumer;

export default connect(state => ({
  lang: state.i18nState.lang,
  reducerTranslations: state.i18nState.translations,
  forceRefresh: state.i18nState.forceRefresh,
}))(I18nProvider);

export { I18nContext, I18nConsumer };
