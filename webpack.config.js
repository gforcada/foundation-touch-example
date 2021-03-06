var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './example.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  plugins: [new HtmlWebpackPlugin()]
}
