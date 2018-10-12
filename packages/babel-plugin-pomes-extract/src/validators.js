/* eslint-disable no-param-reassign */
const {
  getComponentName,
  getSingularAttribute,
} = require('./arguments');

function checkIfArgsHasMessageObject(args) {
  if (args.length !== 1) {
    return false;
  }
  const msgObject = args[0];
  const msgidProp = msgObject.properties.find(prop => prop.key.name === 'id');

  return !!msgidProp;
}

function buildSyntaxError(node, filename, msg) {
  return new SyntaxError(`
    ${filename}:${node.loc.start.line}:${node.loc.start.column + 1}
    
    ${msg}
    `);
}

module.exports = {
  validateComponentEntry(entry, types, path, state) {
    if (!entry.msgid) {
      throw path.buildCodeFrameError(
        `${getComponentName(state)} component must have a prop '${getSingularAttribute(state)}'!`,
      );
    }
  },

  validateMessageFunctionCall(path, opts) {
    if (path.node.callee && path.node.callee.property
      && path.node.callee.property.name === 'message'
      && path.node.callee.object && path.node.callee.object.object
      && path.node.callee.object.object.type === 'ThisExpression'
      && path.node.callee.object.property
      && (path.node.callee.object.property.name === 'props' || path.node.callee.object.property.name === 'context')
      && checkIfArgsHasMessageObject(path.node.arguments)) {
      throw buildSyntaxError(path.node, opts.filename, 'To use the Pomes Translation Api you should deconstruct the "message" function from the "this.props" or "this.context" and use it separately like message({ id: \'Message ID\' })');
    }
  },
};
