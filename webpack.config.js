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
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.jsx', '.scss'],

    // define where your modules will be resolved
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],

    // add aliases for commonly used modules
    alias: {
      actions: path.resolve('./app/src/js/actions'),
      stores: path.resolve('./app/src/js/stores'),
      dispatcher: path.resolve('./app/src/js/dispatcher'),
      constants: path.resolve('./app/src/js/constants'),
      lib: path.resolve('./app/src/js/lib'),
    }
  }
};
