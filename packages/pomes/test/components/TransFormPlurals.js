import React from 'react';

import { I18nConsumer } from 'component';

export function TransFormPluralize1({ n }, context) {
  return (
    <I18nConsumer>
      {context => (
        <span>{context.t(['{n} banane', '{n} bananes', 'n'], { n })}</span>
      )}
    </I18nConsumer>
  );
}

export function TransFormPluralize2({ n }, context) {
  return (
    <I18nConsumer>
      {context => (
        <span>{context.t(['plural 1/{n}', 'plural 2/{n}', 'plural 3/{n}', 'n'], { n })}</span>
      )}
    </I18nConsumer>
  );
}
