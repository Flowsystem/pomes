// @flow

import React from 'react';

import Message from 'components/message';

function TransWithNumberParams() {
  return (
    <Message
      id="{number} things!"
      values={{
        number: 13,
      }}
      comment="some number interpolation"
    />
  );
}

export default TransWithNumberParams;
