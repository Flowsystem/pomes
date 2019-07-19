// @flow

import * as React from 'react';

import localize from 'hocs/localize';

import type { MessageTranslator } from 'contexts/i18n';

type Props = {|
  message: MessageTranslator,
|};

function WithLocalizeHOC(props: Props) {
  const { message } = props;

  return (
    <div>
      {
        message({
          id: 'Hello localized component!',
          comment: 'Simple hello',
        })
      }
    </div>
  );
}

export default localize<Props>(WithLocalizeHOC);
