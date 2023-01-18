var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var dirSource = path.join(__dirname, 'src');
var dirNodeModules = 'node_modules';

// dev/prod flag
var IS_DEV = process.env.NODE_ENV === 'dev';

module.exports = {
  entry: {
    main: path.join(dirSource, 'js', 'main.js'),
    errors: path.join(dirSource, 'js', 'error-pages.js'),
  },
  context: dirSource,
  resolve: {
    modules: [dirNodeModules, dirSource],
  },
  externals: {
    THREE: 'THREE',
    stats: 'Stats',
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV,
    }),

    // Save CSS as separate files
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
    }),

    // Render index
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      chunks: ['main'],
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),

    // Render error pages (400, 401, 403, 404, 500)
    // note: error pages are saved as .shtml for convenience working with my web host
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'error.ejs'),
      chunks: ['errors'],
      filename: '400.shtml',
      errorTitle: '400',
      errorDescription: 'Bad Request',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      inject: true,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'error.ejs'),
      chunks: ['errors'],
      filename: '401.shtml',
      errorTitle: '401',
      errorDescription: 'Unauthorized Access',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      inject: true,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'error.ejs'),
      chunks: ['errors'],
      filename: '403.shtml',
      errorTitle: '403',
      errorDescription: 'Access Forbidden',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      inject: true,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'error.ejs'),
      chunks: ['errors'],
      filename: '404.shtml',
      errorTitle: '404',
      errorDescription: 'Page Not Found',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      inject: true,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'error.ejs'),
      chunks: ['errors'],
      filename: '500.shtml',
      errorTitle: '500',
      errorDescription: 'Internal Server Error',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      inject: true,
    }),
  ],
  module: {
    rules: [
      // Babel
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      // GLSL shaders
      {
        test: /\.(glsl|vert|v|frag|f)$/,
        use: ['glslify-loader'],
        type: 'asset/source',
      },

      // CSS/SCSS
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }, // postcss-loader
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
        ],
      },

      // images and other stuff
      {
        test: /\.(jpe*g|png|gif|svg)$/,
        resourceQuery: /^(?!\?root\-asset$).*/,
        type: 'asset/resource',
        generator: {
          filename: '[path][name].[ext]',
        },
      },
      {
        test: /\.(jpe*g|png|svg|ico|json|xml)$/,
        resourceQuery: /root-asset/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[ext]',
        },
      },

      // HTML
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
};
