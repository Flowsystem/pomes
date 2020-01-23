// @flow

import React from 'react';

import Message from 'components/message';

function TransWithParams() {
  return (
    <Message
      id="Hello {name}!"
      values={{
        name: 'Francesc',
      }}
      comment="With variables"
    />
  );
}

export default TransWithParams;
