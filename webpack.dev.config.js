let baseConfig = require('./webpack.base.config.js')
let path = require('path')

baseConfig.mode = 'development',

baseConfig.devServer = {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9000,
  historyApiFallback: true,
}

module.exports =  baseConfig;