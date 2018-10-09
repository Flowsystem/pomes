import React from 'react';

import { I18nConsumer } from 'component';

class TransWithoutParams extends React.Component {
  render() {
    return (
      <div>
        <I18nConsumer>
          {context => (
            <span>{context.t('Hello')}</span>
          )}
        </I18nConsumer>
      </div>
    );
  }
}

export default TransWithoutParams;
