const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./webpack.config.base.js')
const rootFolder = process.cwd()

module.exports = {
  ...config,

  mode: 'development',

  module: {
    rules: [
      ...config.module.rules,

      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              sourceMap: true,
              strictMath: true,
              noIeCompat: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    publicPath: '/',

    compress: true,
    hot: false,
    host: '0.0.0.0',
    port: 8080,
    clientLogLevel: 'warning',
    stats: 'errors-only',
    disableHostCheck: true,

    contentBase: rootFolder,

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
}
