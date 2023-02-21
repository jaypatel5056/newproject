require("dotenv").config();
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,

  // webpack(config, { defaultLoaders }) {
  //   config.module.rules.push({
  //     test: /\.(scss|css)$/,
  //     use: [
  //       defaultLoaders.babel,
  //       {
  //         loader: require("styled-jsx/webpack").loader,
  //         options: {
  //           type: "global",
  //         },
  //       },
  //     ],
  //   });

  //   config.plugins.push(new webpack.EnvironmentPlugin(process.env));

  //   return config;
  // },
};
module.exports = nextConfig;
