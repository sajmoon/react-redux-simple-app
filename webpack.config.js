var path = require('path')

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        include: [
          path.resolve(__dirname, "src"),
        ],

        exclude: /node_modules/,

        query: {
          presets: ["es2015", "react", 'stage-0']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
