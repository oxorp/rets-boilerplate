// development config
const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080', // bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './index.tsx',
  ],
  devServer: {
    hot: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // global HMR
    new webpack.NamedModulesPlugin(), // improved module names for HMR debugging
  ],
})
