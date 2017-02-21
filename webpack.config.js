var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './react-app/app.js'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'react-app'),
        loader: "babel-loader"
      }
    ]
  }

};