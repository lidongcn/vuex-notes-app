/**
 * Created by lidong on 16/7/18.
 */

module.export = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
   presets: ['es2015'],
   plugins: ['transform-runtime']
  }
};