// @flow

import * as React from 'react';

import getTranslateFunction from 'getTranslateFunction';

import type { MessageTranslator } from 'types';

type Context = {|
  message: MessageTranslator,
|};

const I18nContext = React.createContext<Context>({
  message: getTranslateFunction({}, 'en', 'en'),
});

export default I18nContext;
