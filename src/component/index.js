// @flow
import { connect } from 'react-redux';

import I18nProvider from './component';

export default connect(state => ({
  lang: state.i18nState.lang,
  translationsFromRedux: state.i18nState.translations,
  forceRefresh: state.i18nState.forceRefresh,
}))(I18nProvider);
