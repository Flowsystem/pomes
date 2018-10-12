import React from 'react';
import moment from 'moment';

import { I18nConsumer } from 'component';

class Dates extends React.Component {
  render() {
    const sample = moment('2016-01-01');
    return (
      <div>
        <I18nConsumer>
          {context => sample.format(context.t('YYYY-MM-DD'))}
        </I18nConsumer>
      </div>
    );
  }
}

export default Dates;
