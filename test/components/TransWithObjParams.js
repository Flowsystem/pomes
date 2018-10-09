import React from 'react';

import { I18nConsumer } from 'component';

const TransWithObjParams = ({}, context) => {
  const user = { name: 'Cesc' };
  const name = <span>{user.name}</span>;

  return (
    <I18nConsumer>
      {context => (
        <div>{context.t('Hello {name}', { name })}</div>
      )}
    </I18nConsumer>
  );
};

export default TransWithObjParams;
