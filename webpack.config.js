var path = require('path');

module.exports = {
  context: path.join(__dirname, "app", "src"),
  entry: {
    javascript: "./entry.js",
    html: "./index.html"
  },
  output: {
    path: path.join(__dirname, "app", "dist"),
    filename: "entry.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  }
};
