var path = require('path');

var webpackConfig = require('./webpack.config');

module.exports = {
  ...webpackConfig,
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
};
