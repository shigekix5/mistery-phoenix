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
 * Copyright (c) 2022, Google Inc,
 *
 * This Font Software is licensed under the SIL Open Font License, Version 1.1.
 */
        `,
        raw: true
      })
    )
    return config;
  }
}

module.exports = nextConfig
