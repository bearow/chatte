module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        },
        exclude: /node_modules/
      }
    ]
  }
}
