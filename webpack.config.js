const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/App.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'script.js',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      use: [{
        loader: 'babel-loader',
        options: { presets: ['react', 'es2015', 'stage-2'] },
      }]
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [{
        loader: 'file-loader',
        options: { name: '/img/[name].[ext]' },
      },
      {
        loader: 'image-webpack-loader'
      }]
    }]
  }
};
