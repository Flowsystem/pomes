// @flow

import * as React from 'react';

import I18nContext from 'contexts/i18n';

type SingularMessageProps = {|
  id: string,
  comment: string,
  context?: string,
  future?: boolean,
  values?: {},
  component?: React.ComponentType<any>,
  pluralCondition?: void,
  pluralId?: void,
|};

type PluralMessageProps = {|
  id: string,
  comment: string,
  pluralId: string,
  pluralCondition: string,
  values: {},
  context?: string,
  future?: boolean,
  component?: React.ComponentType<any>,
|};

export type MessageProps = SingularMessageProps | PluralMessageProps;

const Message = (props: MessageProps) => (
  <I18nContext.Consumer>
    {context => context.message(props)}
  </I18nContext.Consumer>
);

export default Message;
