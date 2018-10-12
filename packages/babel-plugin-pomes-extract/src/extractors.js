function extractFuncArg(arg, argIndex, funcName, types, path) {
  if (types.isStringLiteral(arg)) {
    return arg.value;
  }
  if (types.isBinaryExpression(arg)) {
    if (arg.operator !== '+') {
      throw path.buildCodeFrameError(
        `Function ${funcName} must use the '+' operator for string concatenation `
        + `for argument #${argIndex + 1}, found ${arg.operator} instead!`,
      );
    }

    return extractFuncArg(arg.left, argIndex, funcName, types, path)
      + extractFuncArg(arg.right, argIndex, funcName, types, path);
  }
  throw path.buildCodeFrameError(
    `Function ${funcName} must have a String Literal or Binary Expression `
      + `for argument #${argIndex + 1}, found ${arg} instead!`,
  );
}

function extractMessageObjectProps(args, options) {
  const msgObject = args[0];
  return {
    messageId: msgObject.properties.find(prop => prop.key.name === options.singular),
    messagePluralId: msgObject.properties.find(prop => prop.key.name === options.plural),
    messageContext: msgObject.properties.find(prop => prop.key.name === options.context),
    messageComment: msgObject.properties.find(prop => prop.key.name === options.comment),
  };
}

function extractFutureAttribute(args, options) {
  const msgObject = args[0];
  const futureProp = msgObject.properties.find(prop => prop.key.name === options.future);
  if (futureProp) {
    return futureProp.value.value;
  }
  return null;
}

module.exports = {
  extractFuncArg,
  extractMessageObjectProps,
  extractFutureAttribute,
};
