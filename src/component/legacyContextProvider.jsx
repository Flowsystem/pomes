import React from 'react';
import PropTypes from 'prop-types';

import I18nContext from './context';

class LegacyContextConsumer extends React.Component {
  getChildContext() {
    const { context: { t, message } } = this.props;
    return { t, message };
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

LegacyContextConsumer.childContextTypes = {
  t: PropTypes.func.isRequired,
  message: PropTypes.func.isRequired,
};

LegacyContextConsumer.propTypes = {
  context: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
};

const LegacyContextProvider = props => (
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