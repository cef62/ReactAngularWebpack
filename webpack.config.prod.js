const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = require('./webpack.config.base.js')
const rootFolder = process.cwd()

module.exports = {
  ...config,

  mode: 'production',

  module: {
    rules: [
      ...config.module.rules,

      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
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

  plugins: [
    ...config.plugins,

    new MiniCssExtractPlugin({
      filename: 'wws.styles.css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),

    new CopyWebpackPlugin([
      {
        from: path.join(rootFolder, 'resources', 'images/*'),
        toType: 'dir',
      },
    ]),
  ],

  optimization: {
    ...config.optimization,

    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        parallel: true,
        cache: false,
        terserOptions: {
          mangle: false,
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],

    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
}
