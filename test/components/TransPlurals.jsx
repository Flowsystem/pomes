// @flow

import React from 'react';

import Message from 'components/message';

export function TransPluralize1() {
  return (
    <Message
      id="una noche"
      pluralId="{n} noches"
      pluralCondition="n"
      values={{
        n: 1,
      }}
      comment="una noche"
    />
  );
}

export function TransPluralize2() {
  return (
    <Message
      id="una noche"
      pluralId="{n} noches"
      pluralCondition="n"
      values={{
        n: 5,
      }}
      comment="unas noches"
    />
  );
}
