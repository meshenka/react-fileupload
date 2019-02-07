var webpack = require('webpack')
const path = require('path')

var PROD = JSON.parse(process.env.PROD_ENV || '0')

module.exports = {
  mode: PROD ? "production": "development",
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  plugins: PROD ? [new webpack.optimize.UglifyJsPlugin({ minimize: true })] : []
}
