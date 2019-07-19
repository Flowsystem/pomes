// @flow
import { connect } from 'react-redux';

import type { State } from 'reducer';

import I18nProvider from './i18n-provider';
import type { Props } from './i18n-provider';

type MSProps = {|
  lang: string,
  translationsFromRedux: {},
|};

type OwnProps = $Diff<Props, MSProps>;

type MapStateToProps = (state: State, ownProps: OwnProps) => MSProps;

const mapStateToProps: MapStateToProps = (state: State) => ({
  lang: state.i18nState.lang,
  translationsFromRedux: state.i18nState.translations,
});

export default connect<Props, OwnProps, MSProps, null, State, _>(mapStateToProps)(I18nProvider);
