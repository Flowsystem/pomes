import React from 'react';
import { PropTypes } from 'prop-types';

class Plural extends React.Component {
  static contextTypes = {
    t: PropTypes.func.isRequired,
  };

  static translate = (context, props) => {
    const { texts, condition, values, comment } = props;
    return context.t([
      ...texts,
      condition,
    ], values, comment);
  };

  render() {
    return Plural.translate(this.context, this.props);
  }
}

Plural.propTypes = {
  texts: PropTypes.array.isRequired,
  values: PropTypes.object,
  condition: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

Plural.defaultProps = {
  values: {},
};

export default Plural
