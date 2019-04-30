const fs = require('fs');
const gtp = require('gettext-parser');

const po = gtp.po;
const escape_quotes = require('escape-quotes');

const plural_pattern = new RegExp('(?:([0-9]+)\\;\\s(?:plural\\=\\((.*)\\)\\;))');
const chars = '\'\n'; // characters to escape

const getTransMessage = (context, text, currentTranslation) => {
  if(context === '' || context === 'default') {
    if (typeof currentTranslation === 'object') {
      return {
        ...currentTranslation,
        default: text,
      };
    }

    return text;
  }

  if (typeof currentTranslation === 'object') {
    return {
      ...currentTranslation,
      [context]: text,
    };
  }

  if (typeof currentTranslation === 'string') {
    return {
      default: currentTranslation,
      [context]: text,
    };
  }

  return {
    [context]: text,
  };
};

exports.getTransMessage = getTransMessage;

exports.getTrans = (file, translations, encoding) => {
  const content = fs.readFileSync(file);
  const pocontent = po.parse(content, encoding);

  if (!pocontent.headers.language) {
    console.log('\nError! language header not defined. \n'.red);
    throw `Define language in ${file}`;
  }

  const lang = pocontent.headers.language.replace('_', '-');

  // Initializing language dictionary
  const translation = {};

  for (const context in pocontent.translations) {
    const trans = pocontent.translations[context];

    for (const k in trans) {
      const value = trans[k];

      if (value.msgid && value.msgstr.length) {
        const currentTranslation = translation[value.msgid];

        translation[value.msgid] = getTransMessage(context, value.msgstr[0], currentTranslation);

        if (value.msgid_plural && value.msgid_plural.length) {
          const currentPluralTranslation = translation[value.msgid_plural];

          translation[value.msgid_plural] = getTransMessage(context, value.msgstr[1], currentPluralTranslation);
        }
      }
    }
  }

  translations[lang] = translation;

  // Options
  translations.options = {};
  if (pocontent.headers && pocontent.headers['plural-forms']) {
    const result = (plural_pattern.exec(pocontent.headers['plural-forms']));
    if (result) {
      translations.options.plural_rule = result[2];
      translations.options.plural_number = result[1];
    }
  }
};
