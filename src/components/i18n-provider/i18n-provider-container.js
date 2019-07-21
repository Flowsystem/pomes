// @flow
import { connect } from 'react-redux';

import type {
  State,
  I18nProviderProps,
  MapStateToProps,
  I18nProviderOwnProps,
  I18nProviderPropsMSProps,
} from 'types';

import I18nProvider from './i18n-provider';

const mapStateToProps: MapStateToProps = (state: State) => ({
  lang: state.i18nState.lang,
  translationsFromRedux: state.i18nState.translations,
});

export default connect<
I18nProviderProps,
I18nProviderOwnProps,
I18nProviderPropsMSProps,
null,
State,
_
>(
  mapStateToProps,
)(I18nProvider);
