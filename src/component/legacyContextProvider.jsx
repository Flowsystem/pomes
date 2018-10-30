// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import deepForceUpdate from 'react-deep-force-update';
import I18nContext from './context';

import type { Context } from './context';

type ConsumerProps = {
  context: Context,
  children: React.Node,
};

class LegacyContextConsumer extends React.Component<ConsumerProps> {
  childContextTypes = {
    t: PropTypes.func.isRequired,
    message: PropTypes.func.isRequired,
  }

  getChildContext() {
    const { context: { t, message } } = this.props;
    return { t, message };
  }

  componentDidUpdate(prevProps) {
    const { context } = this.props;
    if (prevProps.context.t !== context.t) {
      deepForceUpdate(this);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

type ProviderProps = {
  children: React.Node,
};

const LegacyContextProvider = (props: ProviderProps) => (
  <I18nContext.Consumer>
    {context => (
      <LegacyContextConsumer context={context}>
        {props.children}
      </LegacyContextConsumer>
    )}
  </I18nContext.Consumer>
);

LegacyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LegacyContextProvider;
