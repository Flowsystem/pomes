import React from 'react';

import { I18nConsumer } from 'component';

class TransWithParams extends React.Component {
  render() {
    return (
      <I18nConsumer>
        {context => (
          <div>{context.t('We should have two dollar signs {dollarSigns}!', { dollarSigns: '$$' })}</div>
        )}
      </I18nConsumer>
    );
  }
}

export default TransWithParams;
