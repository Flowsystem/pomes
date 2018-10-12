import React from 'react';

import { I18nConsumer } from 'component';

class TransWithParams extends React.Component {
  render() {
    return (
      <I18nConsumer>
        {context => (
          <div>{context.t('Hello {name}!', { name: 'Francesc' })}</div>
        )}
      </I18nConsumer>
    );
  }
}

export default TransWithParams;
