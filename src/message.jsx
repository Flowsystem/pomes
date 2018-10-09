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
  comment: PropTypes.string.isRequired,
  context: PropTypes.string,
  id: PropTypes.string.isRequired,
  pluralCondition: PropTypes.string,
  pluralId: PropTypes.string,
  values: PropTypes.shape(),
};

Message.defaultProps = {
  context: null,
  pluralCondition: null,
  pluralId: null,
  values: {},
};

export default Message;
