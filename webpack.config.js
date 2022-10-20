const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3001,
  },

  module: {
    rules: [
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: "bundle-loader",
          options: {
            name: "[name]",
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },

      {
        test: /\.svg$/i,
        include: [__dirname + "/src"],
        use: ["file-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        loader: "file-loader",
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "#262626",
                  "btn-default-bg": "#fff",
                  "btn-height-base": "40px",
                  "input-height-base": "40px",
                  "link-hover-color": "#fff",
                  "dropdown-selected-color": "#fff",
                  "primary-1": "#fff",
                  "link-active-color": "#fff",
                  "primary-color-hover": "#363636",
                  "primary-color-active": "#1F1F1F",
                  "btn-default-border": "#9FD7E8"
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: "./src/assets/images/favicon.svg"
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
