/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // webpackのconfigはここに書く
    config.plugins.push(
      new webpack.BannerPlugin({
        banner: `
/*!
* These fonts are licensed under the Open Font License.
*
* You can use them in your products & projects – print or digital, commercial or otherwise.
*
* This isn't legal advice, please consider consulting a lawyer and see the full license for all details.
*/
        `,
        raw: true
      })
    )
    return config;
  }
}

module.exports = nextConfig
