import React from 'react';
import { I18nConsumer } from 'component/index';

const getDisplayName = (WrappedComponent) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return `Localized(${displayName})`;
};

export default function localize(translateName = 'message') {
  return function wrapWithLocalized(WrappedComponent) {
    const Localized = props => (
      <I18nConsumer>
        {context => (
          <WrappedComponent
            {...props}
            {...{
              [translateName]: messageObject => context.message(messageObject),
            }}
          />
        )}
      </I18nConsumer>
    );

    Localized.displayName = getDisplayName(WrappedComponent);

    return Localized;
  };
}
