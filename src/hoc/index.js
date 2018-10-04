import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';
import invariant from 'invariant';
import Message from '../message';
import Plural from '../plural';

export default function localize(propName = 'message', pluralPropName = 'plural') {
  return function wrapWithLocalized(WrappedComponent) {
    invariant(
      typeof WrappedComponent === 'function',
      `You must pass a component to the function returned by localize.
      Instead received ${JSON.stringify(WrappedComponent)}`,
    );

    class Localized extends Component {
      static contextTypes = {
        t: PropTypes.func.isRequired,
      }

      constructor(props, context) {
        super(props, context);
        this.t = context.t;
      }

      message = messageObject => Message.translate(this.context, messageObject);

      plural = messageObject => Plural.translate(this.context, messageObject);

      render() {
        return createElement(WrappedComponent, {
          ...this.props,
          t: this.t,
          [propName]: this.message,
          [pluralPropName]: this.plural,
        });
      }
    }

    return hoistStatics(Localized, WrappedComponent);
  };
}
