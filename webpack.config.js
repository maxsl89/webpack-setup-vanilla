// для того, чтобы указать путь воспользуемся встроенным модулем nodejs path
const path = require("path");
// плагин для работы с html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// плагин для того, чтобы в папке dist всегда лежали актуальные файлы
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    // имя файла которе будет присваиваться скрипту после сборки
    filename: "[name].[contenthash].js",
    // куда мы будем сохранять наши файлы после обработки вебпаком
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    //contentBase: path.join(__dirname, "dist"),
    //compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Load a custom template (lodash by default)
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        // обработка идет справа налево
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
