var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'cheap-module-source-map';

webpackConfig.plugins.push(
  new CleanWebpackPlugin(['dist'])
);

webpackConfig.output = {
  path: path.join(__dirname, 'dist'),
  filename: 'js/[name].[chunkhash].js'
};

module.exports = webpackConfig;
