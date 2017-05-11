var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var dirSource = path.join(__dirname, 'src');
var dirNodeModules = 'node_modules';

// dev/prod flag
var IS_DEV = (process.env.NODE_ENV === 'dev');

module.exports = {
  entry: [
    path.join(dirSource, 'js', 'main.js'),
  ],
  resolve: {
    modules: [
      dirNodeModules,
      dirSource
    ]
  },
  externals: {
    THREE: 'THREE',
    stats: 'Stats'
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV
    }),

    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash].css',
      allChunks: true,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    })
  ],
  module: {
    rules: [
      // Babel
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          comments: false,
          compact: true
        }
      },

      // GLSL shaders
      {
        test: /\.(glsl|vert|v|frag|f)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(glsl|vert|v|frag|f)$/,
        loader: 'ify-loader'
      },

      // CSS/SCSS
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1'
        })
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
              includePaths: [
                dirNodeModules,
                dirSource
              ],
            }
          }
        ])
      },

      // images
      {
        test: /\.(jpe*g|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: dirSource,
        }
      },

      // HTML
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          root: '.'
        }
      },
    ]
  }
};
