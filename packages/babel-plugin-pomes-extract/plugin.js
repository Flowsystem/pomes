/* eslint-disable camelcase,no-shadow */
const gettextParser = require('gettext-parser');
const fs = require('fs');
const p = require('path');
const { makeRecursiveDirSync } = require('./src/utils');

const PLUGIN_KEY = process.env.NODE_ENV === 'test'
  ? 'plugin.js' : 'pomes-extract';
const DEFAULT_OUTPUT_FILE = 'resources.pot';

const {
  buildCallExpressionEntry,
  buildJSXElementEntry,
  mergeEntries,
} = require('./src/builders');

module.exports = ({ types }) => ({
  pre(/* state */) {
    this.entries = [];
  },
  visitor: {
    CallExpression(path, state) {
      const entry = buildCallExpressionEntry(types, path, state, this.file.opts);
      if (entry) {
        this.entries.push(entry);
      }
    },
    JSXElement(path, state) {
      const entry = buildJSXElementEntry(types, path, state);
      if (entry) {
        this.entries.push(entry);
      }
    },
  },
  post(state) {
    if (this.entries.length === 0) {
      return;
    }

    const thisPlugin = state.opts.plugins.find(plugin => plugin.key.includes(PLUGIN_KEY));
    const args = (thisPlugin || {}).options;

    const filename = this.file.opts.filename || 'unknown';
    const currentFileName = p.basename(filename);
    const currentFileDir = p.dirname(filename);
    const outputFile = args.outputFile
        || (filename !== 'unknown' && `${currentFileName}.pot`)
        || DEFAULT_OUTPUT_FILE;
    let outputDir = args.outputDir || __dirname;
    outputDir = p.resolve(outputDir, p.relative(process.cwd(), currentFileDir));

    if (!fs.existsSync(outputDir)) {
      makeRecursiveDirSync(outputDir);
    }

    const poRawData = mergeEntries(args, this.entries);
    const po = gettextParser.po.compile(poRawData);

    fs.writeFileSync(p.join(outputDir, outputFile), po);
  },
});
