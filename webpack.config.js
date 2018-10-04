const path = require('path');
const nodeExternals = require('webpack-node-externals');

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
};

const nodeConfig = {
  ...baseConfig,
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'pomes',
    libraryTarget: 'commonjs2',
  },
};

const webConfig = {
  ...baseConfig,
  target: 'web',
  output: {
    filename: 'index.umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'pomes',
    libraryTarget: 'umd',
  },
};

module.exports = [nodeConfig, webConfig];