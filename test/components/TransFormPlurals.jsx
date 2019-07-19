// @flow

import React from 'react';

import Message from 'components/message';

// eslint-disable-next-line import/prefer-default-export
export function TransFormPluralize1({ n }: { n: number }) {
  return (
    <Message
      id="{n} banane"
      pluralId="{n} bananes"
      pluralCondition="n"
      values={{
        n,
      }}
      comment="bananas"
    />
  );
}

// TODO: Plural rules with more than 2 definitions are not supported ATM
// export function TransFormPluralize2({ n }, context) {
//   return (
//     <I18nConsumer>
//       {context => (
//         <span>{context.t(['plural 1/{n}', 'plural 2/{n}', 'plural 3/{n}', 'n'], { n })}</span>
//       )}
//     </I18nConsumer>
//   );
// }
