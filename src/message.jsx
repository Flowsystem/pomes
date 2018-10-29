// @flow

import React from 'react';

import { I18nConsumer } from 'component';

type Props = MessageProps | PluralMessageProps;

const Message = (props: Props) => (
  <I18nConsumer>
    {context => context.message(props)}
  </I18nConsumer>
);

export default Message;
