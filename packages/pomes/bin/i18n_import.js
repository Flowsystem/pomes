#!/usr/bin/env node

const glob = require('glob');
const fs = require('fs');
const color = require('colors');
const optimist = require('optimist');
const importUtils = require('./import_utils');

const getTrans = importUtils.getTrans;
const transToTxt = importUtils.transToTxt;

const args = optimist.argv;
const localesPath = `${args.locales || 'locales'}/*.po`;
const encoding = args.encoding;
const translations = {};

glob(localesPath, (err, files) => {
  files.map((file) => {
    getTrans(file, translations, encoding);
  });

  const translationsFile = `${args.translations || 'src'}/translations.js`;
  const content = transToTxt(translations);
  const wstream = fs.createWriteStream(translationsFile);
  wstream.write(content);
  console.log(`\nDone! '${translationsFile}' generated.\n`.green);
});
