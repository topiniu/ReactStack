const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
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
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ]
}