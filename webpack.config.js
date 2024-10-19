const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.jsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "[name].[contenthash].js" : "bundle.js",
      clean: true,
      publicPath: "/",
    },
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 3000,
      open: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/",
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            {
              loader: require("mini-css-extract-plugin").loader,
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  includePaths: [
                    path.resolve(
                      __dirname,
                      "../node_modules/normalize-scss/sass",
                    ),
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify: isProduction && {
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new MiniCssExtractPlugin({ filename: "[name].css", ignoreOrder: true }),
    ].filter(Boolean),
  };
};
