// @flow

import React from 'react';

import Message from 'components/message';

function TransWithJunkParams() {
  return (
    <Message
      id="{a}, {b}, and {c} as strings"
      values={{
        a: undefined,
        b: null,
        c: false,
      }}
      comment="stringify variables"
    />
  );
}

export default TransWithJunkParams;
