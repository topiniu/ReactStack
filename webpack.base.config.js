const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './distaaa'),
    // chunkFilename: '[name].chunk.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".json"
    ]
  },
  module: {
    rules: [{
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader'
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: "url-loader?limit=100000"
      },
      {
          test: /\.scss$/,
          exclude: '/node_modules/',
          use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
          ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
        chunkFilename: "[id].[chunkhash].css"
    }),
  ]
}