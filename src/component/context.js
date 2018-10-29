// @flow

import * as React from 'react';

type Context = {
  t: (string, any, string) => React.Element<string> | string,
  message: TranslateFunction,
};

const I18nContext = React.createContext<Context>({
  t: () => '',
  message: () => '',
});

export default I18nContext;
