import React from 'react';

import { I18nConsumer } from 'component';

export function TransPluralize1({}, context) {
  return (
    <I18nConsumer>
      {context => (
        <span>{context.t(['una noche', '{n} noches', 'n'], { n: 1 })}</span>
      )}
    </I18nConsumer>
  );
}

export function TransPluralize2({}, context) {
  return (
    <I18nConsumer>
      {context => (
        <span>{context.t(['una noche', '{n} noches', 'n'], { n: 5 })}</span>
      )}
    </I18nConsumer>
  );
}
