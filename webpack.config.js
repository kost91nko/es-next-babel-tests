const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]1.js',
    chunkFilename: '[id].[chunkhash].js'
  },

  resolve: {
    modules: [
      'node_modules',
    ],
  },

  devtool: 'source-map',

  // What information should be printed to the console
  stats: {
    colors: true,
    reasons: true,
    hash: true,
    version: true,
    timings: true,
    chunks: true,
    chunkModules: true,
    cached: true,
    cachedAssets: true,
  },

  plugins: [
    // Plugin for webpack 2
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: false,
      options: {
        context: path.resolve(__dirname, '.'),
        output: {
          path: path.resolve(__dirname, './dist'),
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './src')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ],
  },
}
