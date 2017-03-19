/*
  ./webpack.config.js
*/

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

// const ProcessPlugin = new webpack.DefinePlugin({
//   'process.env' : {
//     '': JSON.stringify('')
//   }
// })

const config = {
  entry: [
    './app/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders : [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    //ProcessPlugin
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    proxy: [
      {
        context : ['/api', '/users'],
        target: {'host': 'hapi-server', 'port': 8000, 'protocol': 'http:'},
        secure: false,
        changeOrigin: true
      }
    ]
  }
}

module.exports = config
