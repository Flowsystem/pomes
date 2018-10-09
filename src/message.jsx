import React from 'react';
import { PropTypes } from 'prop-types';

import { I18nConsumer } from 'component';

class Message extends React.Component {
  static translate = (context, props) => {
    const { text, values, comment } = props;

    return context.t(text, values, comment);
  };

  render() {
    return (
      <I18nConsumer>
        {context => Message.translate(context, this.props)}
      </I18nConsumer>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  values: PropTypes.shape(),
  comment: PropTypes.string.isRequired,
};

Message.defaultProps = {
  values: {},
};

export default Message;
