// @flow

import * as React from 'react';

import I18nContext from 'contexts/i18n';

import type { MessageTranslator } from 'contexts/i18n';

const getDisplayName = (WrappedComponent) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return `Localized(${displayName})`;
};

type InjectedProps = {|
  message: MessageTranslator,
|};

type DecoratedProps<OriginalProps> = {|
  ...OriginalProps,
  ...InjectedProps,
|};

export default function localize<Props>(
  WrappedComponent: React.AbstractComponent<DecoratedProps<Props>>,
): React.AbstractComponent<Props> {
  const Localized = (props: Props) => (
    <I18nContext.Consumer>
      {context => (
        <WrappedComponent
          {...props}
          message={context.message}
        />
      )}
    </I18nContext.Consumer>
  );

  Localized.displayName = getDisplayName(WrappedComponent);

  return Localized;
}
