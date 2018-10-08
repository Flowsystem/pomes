import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import invariant from 'invariant';

import Message from 'message';
import Plural from 'plural';
import { I18nConsumer } from 'component';

const getDisplayName = (WrappedComponent) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return `Localized(${displayName})`;
};

export default function localize(translateName = 'message', translatePluralName = 'plural') {
  return function wrapWithLocalized(WrappedComponent) {
    const Localized = props => (
      <I18nConsumer>
        {context => (
          <WrappedComponent
            {...props}
            {...{
              [translateName]: messageObject => Message.translate(context, messageObject),
              [translatePluralName]: messageObject => Plural.translate(context, messageObject),
            }}
          />
        )}
      </I18nConsumer>
    );

    Localized.displayName = getDisplayName(WrappedComponent);

    return Localized;
  };
}
