const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
  rules: [
    {
      test: /\.html$/i,
      use: 'raw-loader',
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ],
},
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Angular Component Demo',
        template: './src/index.html'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
}