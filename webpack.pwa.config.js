const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
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
    }),
    new CopyPlugin([
      {
        from: 'src/service-worker.js'
      }
    ])
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true
    // })
  ]
}