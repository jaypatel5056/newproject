


require('dotenv').config()
const webpack = require('webpack')

const nextConfig = {         
  reactStrictMode: true,

  // webpack(config, { defaultLoaders }) {
  //   config.module.rules.push({
  //     test: /\.(scss|css)$/,
  //     use: [
  //       defaultLoaders.babel, 
  //       {
  //         loader: require('styled-jsx/webpack').loader,
  //         options: {
  //           type: 'global',
  //         },
  //       },
  //     ],
  //   });
  //   return config;
  // },
}
module.exports = nextConfig