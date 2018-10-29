// @flow

import * as React from 'react';

const interpolateParams = (text, params) => {
  if (!params) {
    return text;
  }

  const children = text.split(/({[^}]+})/g)
    .map((child) => {
      const match = /{(.+)}/g.exec(child);
      if (match) {
        const param = params[match[1]];
        return param || String(param);
      }

      return child;
    });

  // if any children are objects (i.e. react components), wrap in a span, otherwise return as string
  // ignore anything that is falsy, bypassing null, etc
  return children.some(child => child && typeof child === 'object')
    // When React 16 is released, change the span to an identity function for array children,
    // removing the extra dom node
    ? React.createElement('span', null, ...children)
    : children.join('');
};

const getLangMessages = (translations, lang) => {
  let langMessages = translations[lang];

  // Fall back lang
  if (langMessages === undefined && lang.indexOf('-') > -1) {
    langMessages = translations[lang.split('-')[0]];
  }

  return langMessages;
};

const getOptionValue = (options, key, defaultValue) => {
  if (options === undefined) {
    return defaultValue || null;
  }
  return options[key] === undefined ? (defaultValue || null) : options[key];
};

const getLangMessagesAndRules = (translations, lang, fallbackLang) => ({
  langMessages: getLangMessages(translations, lang),
  fallbackLangMessages: fallbackLang ? getLangMessages(translations, fallbackLang) : undefined,
  pluralRule: getOptionValue(translations.options, 'plural_rule', 'n != 1'),
  pluralNumber: parseInt(getOptionValue(translations.options, 'plural_number', '2'), 10),
});

const translateTextKey = (langMessages, fallbackLangMessages, textKey, values) => {
  if (!langMessages && !fallbackLangMessages) {
    return interpolateParams(textKey, values);
  }

  const message = langMessages ? langMessages[textKey] : undefined;
  if (message === undefined || message === '') {
    // If don't have literal translation and have fallback lang, try
    // to get from there.
    if (fallbackLangMessages) {
      const literal = fallbackLangMessages[textKey];
      if (literal !== undefined && literal !== '') {
        return interpolateParams(literal, values);
      }
    }
    return interpolateParams(textKey, values);
  }
  return interpolateParams(message, values);
};

type GetLegacyTranslateFunction = (
  (translations: any, lang: string, fallbackLang?: string) => (
    (string, any, string) => React.Element<string> | string
  )
);

export const legacyGetTranslateFunction: GetLegacyTranslateFunction = (translations, lang, fallbackLang) => {
  const {
    langMessages, fallbackLangMessages, pluralRule: plural_rule, pluralNumber: plural_number,
  } = getLangMessagesAndRules(translations, lang, fallbackLang);

  return (textKey, params) => {
    // Checking if textkey contains a pluralize object.
    if (typeof textKey === 'object') {
      // eslint-disable-next-line no-param-reassign
      textKey = textKey[Number(new Function('n', `return ${plural_rule}`)(params[textKey[plural_number]]))];
    }
    return translateTextKey(langMessages, fallbackLangMessages, textKey, params);
  };
};

type GetTranslateFunction = (
  (translations: any, lang: string, fallbackLang?: string) => TranslateFunction
);

const getTranslateFunction: GetTranslateFunction = (translations, lang, fallbackLang) => {
  const {
    langMessages, fallbackLangMessages, pluralRule,
  } = getLangMessagesAndRules(translations, lang, fallbackLang);

  return (message: MessageProps | PluralMessageProps) => {
    let textKey = message.id;
    if (message.pluralId && Function('n', `return ${pluralRule}`)(message.values[message.pluralCondition])) {
      textKey = message.pluralId;
    }
    if (message.future) {
      return interpolateParams(textKey, message.values);
    }
    return translateTextKey(langMessages, fallbackLangMessages, textKey, message.values);
  };
};

export default getTranslateFunction;
