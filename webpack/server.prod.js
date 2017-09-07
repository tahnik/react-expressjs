const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: path.join(__dirname, '../server'),
  devtool: 'source-map',
  entry: [
    './routes/index.js',
  ],
  output: {
    path: path.join(__dirname, '../server/bin'),
    filename: './server.js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-1'],
          },
        },
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
  ]
};
