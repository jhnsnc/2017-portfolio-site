var webpackConfig = require('./webpack.config');

module.exports = {
  ...webpackConfig,
  mode: 'development',
  devtool: 'eval',
  output: {
    filename: '[name].js',
    clean: true,
  },
};
