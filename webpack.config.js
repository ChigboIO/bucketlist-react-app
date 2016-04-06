var path = require('path');

module.exports = {
  context: path.join(__dirname, "app", "js"),
  entry: "./script.js",
  output: {
    path: __dirname,
    filename: "script.min.js"
  },
  module: {
    loaders: [
      // { test: /\.css$/, loader: "style!css" },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  }
};
