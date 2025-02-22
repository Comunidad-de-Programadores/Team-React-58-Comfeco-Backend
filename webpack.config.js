const path = require('path')
const webpack = require('webpack')
const env = process.env.NODE_ENV
const externals = require('webpack-node-externals')

const config = {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, env === 'production' ? 'source/main.js' : './source/localServer.js')],
  output: {
    path: path.resolve(__dirname, env === 'production' ? './api' : './build'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  mode: env,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/(node_modules)/',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(env)
    })
  ],
  resolve: {
    extensions: ['.json', '.js'],
    alias: {
      source: path.resolve(__dirname, './source'),
      helpers: path.resolve(__dirname, './source/helpers'),
      core: path.resolve(__dirname, './source/core'),
      middlewares: path.resolve(__dirname, './source/middlewares')
    }
  },
  externals: [externals()],
  target: 'node',
  watch: env === 'development'
}

module.exports = config
