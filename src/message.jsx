/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';

import { I18nConsumer } from 'component';

const Message = props => (
  <I18nConsumer>
    {context => context.message(props)}
  </I18nConsumer>
);

Message.propTypes = {
  comment: PropTypes.string,
  context: PropTypes.string,
  future: PropTypes.bool,
  id: PropTypes.string.isRequired,
  pluralCondition: PropTypes.string,
  pluralId: PropTypes.string,
  values: PropTypes.shape(),
  component: PropTypes.oneOfType([PropTypes.shape(), PropTypes.func]),
};

Message.defaultProps = {
  comment: null,
  context: null,
  future: false,
  pluralCondition: null,
  pluralId: null,
  values: {},
  component: undefined,
};

export default Message;
