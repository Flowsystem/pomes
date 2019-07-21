// @flow
/*
 * Project: pomes
 * File: getTranslateFunction.js
 */
/* eslint-disable no-new-func,max-len,camelcase */

import React from 'react';

import type { TranslateHOF } from 'types';

const JSX_START = '{jsx-start}';
const JSX_END = '{jsx-end}';

const jsxStartRegExp = RegExp(JSX_START, 'gi');
const jsxEndRegExp = RegExp(JSX_END, 'gi');
const jsxRegExp = RegExp(`${JSX_START}|${JSX_END}`, 'gi');

const getOccurrences = (rawText, regexp) => (rawText.match(regexp) || []).length;

const throwIfTooManyJsxOccurrences = (rawText, allowedOccurrences = 1) => {
  const startOccurrences = getOccurrences(rawText, jsxStartRegExp);
  const endOccurrences = getOccurrences(rawText, jsxEndRegExp);

  if (startOccurrences !== endOccurrences) {
    throw new Error('Pomes error: The number of JSX start and end tags must be the same');
  }

  if (startOccurrences > allowedOccurrences || endOccurrences > allowedOccurrences) {
    throw new Error('Pomes error: Only one JSX tag pair is allowed');
  }
};

const throwIfEndBeforeStart = (rawText) => {
  const jsxMatches = rawText.match(jsxRegExp);

  if (jsxMatches && jsxMatches[0] === JSX_END) {
    throw new Error('Pomes error: JSX start and end tags are in the wrong order');
  }
};

const interpolateCustomComponents = (rawText, rawParams, component, componentProps) => {
  const childTexts = RegExp(`${JSX_START}(.+)${JSX_END}`, 'g').exec(rawText);
  const [, childText] = childTexts || [undefined, ''];

  const childPlaceholder = `${JSX_START}${childText}${JSX_END}`;
  const text = rawText.replace(childPlaceholder, '{customChild}');

  const params = {
    ...rawParams,
    // eslint-disable-next-line no-use-before-define
    customChild: React.createElement(component, componentProps, interpolateParams(childText, rawParams)),
  };

  return [text, params];
};

const interpolateParams = (rawText, rawParams, component, componentProps) => {
  let text;
  let params;

  if (component) {
    throwIfTooManyJsxOccurrences(rawText);
    throwIfEndBeforeStart(rawText);
    [text, params] = interpolateCustomComponents(rawText, rawParams, component, componentProps);
  } else {
    throwIfTooManyJsxOccurrences(rawText, 0);
    [text, params] = [rawText, rawParams];
  }

  if (!params || !Object.keys(params).length) {
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
  if (!options || !options[key]) {
    return defaultValue;
  }

  return options[key];
};

const getLangMessagesAndRules = (translations, lang, fallbackLang) => ({
  langMessages: getLangMessages(translations, lang),
  fallbackLangMessages: fallbackLang ? getLangMessages(translations, fallbackLang) : undefined,
  pluralRule: getOptionValue(translations.options, 'plural_rule', 'n != 1'),
  pluralNumber: parseInt(getOptionValue(translations.options, 'plural_number', '2'), 10),
});

const getMessage = (langMessages, textKey, context = 'default') => {
  if (langMessages) {
    const langMessage = langMessages[textKey];

    if (typeof langMessage === 'string' && context === 'default') {
      return langMessage;
    }

    if (typeof langMessage === 'object') {
      return langMessage[context];
    }
  }

  return undefined;
};

const translateTextKey = (langMessages, fallbackLangMessages, textKey, values, context, component, componentProps) => {
  if (!langMessages && !fallbackLangMessages) {
    return interpolateParams(textKey, values, component, componentProps);
  }

  const message = getMessage(langMessages, textKey, context);
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

const translateHOF: TranslateHOF = (translations, lang, fallbackLang) => {
  const {
    langMessages, fallbackLangMessages, pluralRule,
  } = getLangMessagesAndRules(translations, lang, fallbackLang);

  return ({
    id,
    values = {},
    pluralId = null,
    pluralCondition = '',
    future,
    comment,
    component,
    context,
    ...componentProps
  }) => {
    let textKey = id;
    if (pluralId && Function('n', `return ${pluralRule}`)(values[pluralCondition])) {
      textKey = pluralId;
    }
    if (future) {
      return interpolateParams(textKey, values, component, componentProps);
    }
    return translateTextKey(langMessages, fallbackLangMessages, textKey, values, context, component, componentProps);
  };
};

export default translateHOF;
