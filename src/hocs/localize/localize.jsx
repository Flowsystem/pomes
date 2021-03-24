// @flow

import * as React from 'react';

import I18nContext from 'contexts/i18n';

import type { LocalizedComponent, ComponentToLocalize } from 'types';

const getDisplayName = (WrappedComponent) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return `Localized(${displayName})`;
};

export default function localize<Props>(
  WrappedComponent: ComponentToLocalize<Props>,
): LocalizedComponent<Props> {
  const Localized = (props: Props) => (
    <I18nContext.Consumer>
      {(context) => (
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
