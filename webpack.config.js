module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  rules: [
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    },
  ],
};
