const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const CSS_OUTPUT_TEMPLATE = './index.css';

module.exports = {
  context: __dirname + '/src/assets/',

  entry: {
    application: ['./stylesheets/application.scss'],
  },

  output: {
    path: __dirname + '/src',
    filename: CSS_OUTPUT_TEMPLATE,
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin(CSS_OUTPUT_TEMPLATE),
  ],
};
