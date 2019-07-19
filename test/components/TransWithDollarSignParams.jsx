// @flow

import React from 'react';

import Message from 'components/message';

function TransWithParams() {
  return (
    <Message
      id="We should have two dollar signs {dollarSigns}!"
      values={{
        dollarSigns: '$$',
      }}
      comment="some dollar signs"
    />
  );
}

export default TransWithParams;
