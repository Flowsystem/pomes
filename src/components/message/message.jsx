// @flow

import * as React from 'react';

import I18nContext from 'contexts/i18n';

import type { MessageProps } from 'types';

const Message = (props: MessageProps) => (
  <I18nContext.Consumer>
    {(context) => context.message(props)}
  </I18nContext.Consumer>
);

export default Message;
