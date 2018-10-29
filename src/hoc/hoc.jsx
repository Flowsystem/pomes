// @flow

import * as React from 'react';
import { I18nConsumer } from 'component';

const getDisplayName = (WrappedComponent) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return `Localized(${displayName})`;
};

type WrappedProps = {
  message: TranslateFunction,
  [any]: any,
};

type DecoratedComponent = Class<React.Component<WrappedProps>> | (WrappedProps) => React.Node;

type LocalizeDecorator = (
  (translateName?: string) => (component: DecoratedComponent) => (props: any) => React.Node
);

const localize: LocalizeDecorator = (translateName = 'message') => (
  function wrapWithLocalized(WrappedComponent) {
    const Localized = props => (
      <I18nConsumer>
        {context => (
          <WrappedComponent
            {...props}
            {...{
              [translateName]: context.message,
            }}
          />
        )}
      </I18nConsumer>
    );

    Localized.displayName = getDisplayName(WrappedComponent);

    return Localized;
  }
);

export default localize;
