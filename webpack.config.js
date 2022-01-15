const path = require("path");

const _config = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: {
      name: "helloWorld",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json"],
    modules: [path.resolve(__dirname, "src")],
  },
  mode: "production",
};

module.exports = (_, argv) => {
  if (argv.mode === "development") {
    _config.mode = "development";
    _config.devtool = "source-map";
  }
  return _config;
};
