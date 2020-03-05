const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const rootFolder = process.cwd()

module.exports = {
  devtool: 'source-map',

  entry: './src/app/index.js',

  output: {
    filename: 'wws.bundle.js',
    publicPath: '/',
    path: path.resolve(rootFolder, 'dist'),
  },

  resolve: {
    alias: {
      '@resources': path.join(rootFolder, 'resources'),
    },
    extensions: ['.tsx', '.ts', '.js', '.css', '.html'],

    plugins: [
      // @ts-ignore
      new TsconfigPathsPlugin({
        configFile: path.join(rootFolder, 'tsconfig.json'),
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [
          path.join(rootFolder, 'src', 'react'),
          path.join(rootFolder, 'src', 'app', 'components', 'reactWrappers'),
        ],
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          onlyCompileBundledFiles: true,
          projectReferences: true,
        },
      },
      {
        test: /\.(tpl)\.(html)$/,
        use: 'html-loader',
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.ttf(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'file-loader',
        include: [path.join(rootFolder, 'resources')],
        options: {
          name: '[path][name].[ext]?[hash]',
          esModule: false,
        },
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      // memoryLimit: 3072,
      useTypescriptIncrementalApi: true,
      // measureCompilationTime: true,
    }),

    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      title: `AngularJS React POC`,
      filename: 'index.html',
      template: path.join('src', 'index.html'),
      inject: true,
      favicon: false,
      hash: true,
      cache: true,
      minify: {
        preserveLineBreaks: true,
        removeComments: true,
      },
      chunksSortMode: 'auto',
      unsupportedBrowser: true,
    }),
  ],

  optimization: {
    runtimeChunk: false,
  },

  performance: {
    hints: false,
  },
}
