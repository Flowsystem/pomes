// @flow

import * as React from 'react';

import getTranslateFunction from 'getTranslateFunction';

import type { MessageProps } from 'components/message';

export type MessageTranslator = (props: MessageProps) => React.Node | string;

type Context = {|
  message: MessageTranslator,
|};

const I18nContext = React.createContext<Context>({
  message: getTranslateFunction({}, 'en', 'en'),
});

export default I18nContext;
