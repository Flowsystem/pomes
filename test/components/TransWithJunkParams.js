import React from 'react';

import { I18nConsumer } from 'component';

class TransWithJunkParams extends React.Component {
  render() {
    return (
      <I18nConsumer>
        {context => (
          <div>{context.t('{a}, {b}, and {c} as strings', { a: undefined, b: null, c: false })}</div>
        )}
      </I18nConsumer>
    );
  }
}

export default TransWithJunkParams;
