import React from 'react';
import { PropTypes } from 'prop-types';

import { I18nConsumer } from 'component';

class Plural extends React.Component {
  static translate = (context, props) => {
    const {
      texts,
      condition,
      values,
      comment,
    } = props;

    return context.t([
      ...texts,
      condition,
    ], values, comment);
  };

  render() {
    return (
      <I18nConsumer>
        {context => Plural.translate(context, this.props)}
      </I18nConsumer>
    );
  }
}

Plural.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.shape(),
  condition: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

Plural.defaultProps = {
  values: {},
};

export default Plural;
