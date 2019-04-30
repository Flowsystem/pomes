const fs = require('fs');
const gtp = require('gettext-parser');

const po = gtp.po;
const escape_quotes = require('escape-quotes');

const plural_pattern = new RegExp('(?:([0-9]+)\\;\\s(?:plural\\=\\((.*)\\)\\;))');
const chars = '\'\n'; // characters to escape

const setTransMessage = (context, translation, id, text) => {
  const currentTranslation = translation[id];

  if (context !== '' && context !== 'default') {
    if (typeof currentTranslation === 'object') {
      translation[id] = {
        ...currentTranslation,
        [context]: text,
      };
    } else if (typeof currentTranslation === 'string') {
      translation[id] = {
        default: currentTranslation,
        [context]: text,
      };
    } else {
      translation[id] = {
        [context]: text,
      };
    }
  } else {
    if (typeof currentTranslation === 'object') {
      translation[id] = {
        ...currentTranslation,
        default: text,
      };
    } else {
      translation[id] = text;
    }
  }
};

exports.setTransMessage = setTransMessage;

exports.getTrans = (file, translations, encoding) => {
  const content = fs.readFileSync(file);
  const pocontent = po.parse(content, encoding);

  if (!pocontent.headers.language) {
    console.log('\nError! language header not defined. \n'.red);
    throw `Define language in ${file}`;
  }

  const lang = pocontent.headers.language.replace('_', '-');

  // Initializing language dictionary
  translations[lang] = {};

  for (const context in pocontent.translations) {
    const trans = pocontent.translations[context];

    for (const k in trans) {
      const value = trans[k];

      if (value.msgid && value.msgstr.length) {
        setTransMessage(context, translations[lang], value.msgid, value.msgstr[0]);
        if (value.msgid_plural && value.msgid_plural.length) {
          setTransMessage(context, translations[lang], value.msgid_plural, value.msgstr[1]);
        }
      }
    }
  }

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
