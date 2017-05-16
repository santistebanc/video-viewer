const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/App.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'script.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      use: [{
        loader: 'babel-loader',
        options: { presets: ['react', 'es2015', 'stage-2'] },
      }]
    }],
  }
};
