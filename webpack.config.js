module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: __dirname + "dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", "js"],
  },
  devServer: {
    contentBase: "./dist",
  },
};
