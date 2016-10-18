const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prod = process.argv.indexOf('-p') !== -1;

const config = {
  entry: './src/index.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.pug$/,
        loader: 'pug'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: prod? '"production"':'"development"'
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/template/index.pug'
    })
  ],
  resolve: {
    modulesDirectories: [
      "src",
      "node_modules"
    ]
  }
};

if (!prod) {
  config.devServer = {
    historyApiFallback: true
  }
}

module.exports = config;
