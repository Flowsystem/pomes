// @flow

import React from 'react';

import Message from 'components/message';

const TransWithObjParams = () => {
  const user = { name: 'Cesc' };
  const name = <span>{user.name}</span>;

  return (
    <Message
      id="Hello {name}"
      values={{
        name,
      }}
      comment="React.Node wrapping"
    />
  );
};

export default TransWithObjParams;
