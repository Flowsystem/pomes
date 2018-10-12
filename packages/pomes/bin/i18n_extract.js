#!/usr/bin/env node
const glob = require('glob');


const fs = require('fs');


const colors = require('colors');


const readline = require('readline');


const optimist = require('optimist');

const args = optimist.argv;
let exts = args.fexts || 'js*';

if (exts.split(',').length > 1) {
  exts = `{${exts}}`;
}

let src = args.source || 'src';

if (src.split(',').length > 1) {
  src = `@(${src.split(',').join('|')})`;
}

const srcPath = `${src}/**/*.${exts}`;
const extractUtils = require('./extract_utils');

const pattern = extractUtils.pattern(args.pattern);
const getAllMatches = extractUtils.getAllMatches;
const potFileContent = extractUtils.potFileContent;
const groupByText = extractUtils.groupByText;

/** ************************************************************************** */
/* Check if locale folder exists
/**************************************************************************** */
try {
  fs.accessSync(args.locales || 'locales');
} catch (e) {
  fs.mkdirSync(args.locales || 'locales');
}

glob(srcPath, (err, files) => {
  /** ************************************************************************ */
  /* Reading files and extracting translations
  /************************************************************************** */
  const filesMatches = {};
  files.map((file) => {
    readline.createInterface({
      input: fs.createReadStream(file),
      output: process.stdout,
      terminal: false,
    });

    console.log(`Parsing ${file}`.yellow);
    const fileContent = fs.readFileSync(file, 'utf-8');
    filesMatches[file] = getAllMatches(pattern, fileContent);
  });

  /** ************************************************************************ */
  /* Grouping by text
  /************************************************************************** */
  const texts = groupByText(filesMatches);

  /** ************************************************************************ */
  /* Creating template.pot
  /************************************************************************** */
  const potContent = potFileContent(texts);
  const wstream = fs.createWriteStream(`${args.locales || 'locales'}/template.pot`);
  wstream.write(potContent);
  console.log(`\nDone! '${args.locales || 'locales'}/template.pot' updated.\n`.green);
});
