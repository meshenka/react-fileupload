var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports  = {
    entry: './src/app.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['stage-2', 'es2015', 'react']
          }
        }
      ]
    },
    plugins: PROD ?[
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]: []
};
