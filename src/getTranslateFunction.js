/*
 * Project: pomes
 * File: getTranslateFunction.js
 */
/* eslint-disable no-new-func,max-len,camelcase */

import React from 'react';

const interpolateCustomComponents = (rawText, rawParams, component, componentProps = null) => {
  const childText = /{jsx-start}(.+){jsx-end}/g.exec(rawText);

  if (!childText) {
    return [
      rawText,
      rawParams,
    ];
  }

  const childPlaceholder = `{jsx-start}${childText[1]}{jsx-end}`;
  const text = rawText.replace(childPlaceholder, '{customChild}');
  let params;

  if (rawParams) {
    params = {
      ...rawParams,
      customChild: React.createElement(component, componentProps, interpolateParams(childText[1], rawParams)),
    };
  }

  return [text, params];
};

const interpolateParams = (rawText, rawParams, component, componentProps) => {
  let text;
  let params;

  if (component) {
    [text, params] = interpolateCustomComponents(rawText, rawParams, component, componentProps);
  } else {
    [text, params] = [rawText, rawParams];
  }

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

const translateTextKey = (langMessages, fallbackLangMessages, textKey, values, component, componentProps) => {
  if (!langMessages && !fallbackLangMessages) {
    return interpolateParams(textKey, values, component, componentProps);
  }

  const message = langMessages ? langMessages[textKey] : undefined;
  if (message === undefined || message === '') {
    // If don't have literal translation and have fallback lang, try
    // to get from there.
    if (fallbackLangMessages) {
      const literal = fallbackLangMessages[textKey];
      if (literal !== undefined && literal !== '') {
        return interpolateParams(literal, values, component, componentProps);
      }
    }
    return interpolateParams(textKey, values, component, componentProps);
  }
  return interpolateParams(message, values, component, componentProps);
};

export const legacyGetTranslateFunction = (translations, lang, fallbackLang) => {
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

export default (translations, lang, fallbackLang) => {
  const {
    langMessages, fallbackLangMessages, pluralRule,
  } = getLangMessagesAndRules(translations, lang, fallbackLang);

  return ({
    id, values = {}, pluralId = null, pluralCondition = '', future, comment, component, ...componentProps
  }) => {
    let textKey = id;
    if (pluralId && Function('n', `return ${pluralRule}`)(values[pluralCondition])) {
      textKey = pluralId;
    }
    if (future) {
      return interpolateParams(textKey, values, component, componentProps);
    }
    return translateTextKey(langMessages, fallbackLangMessages, textKey, values, component, componentProps);
  };
};
