const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

const environment = {
  arrowFunction: false,
  bigIntLiteral: false,
  const: false,
  destructuring: false,
  dynamicImport: false,
  forOf: false,
  module: false,
};

const baseConfig = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  externals: [nodeExternals()],
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.js.flow', to: 'index.js.flow' },
        { from: 'src/types.js', to: 'types.js.flow' },
      ],
    }),
  ],
};

const nodeConfig = {
  ...baseConfig,
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'commonjs2',
    },
    environment,
  },
};

const webConfig = {
  ...baseConfig,
  target: 'web',
  output: {
    filename: 'index.umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'pomes',
      type: 'umd',
    },
    environment,
  },
};

module.exports = [nodeConfig, webConfig];
