import React from 'react';

import { I18nConsumer } from 'component';

class TransWithNumberParams extends React.Component {
  render() {
    return (
      <I18nConsumer>
        {context => (
          <div>{context.t('{number} things!', { number: 13 })}</div>
        )}
      </I18nConsumer>
    );
  }
}

export default TransWithNumberParams;
