/* eslint-disable react/jsx-filename-extension,react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class WithLegacyContext extends React.Component {
  static contextTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>{this.context.t('Hello legacy context!')}</div>
    );
  }
}

export default WithLegacyContext;
