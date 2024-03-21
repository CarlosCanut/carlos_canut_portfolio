/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'jp'],
    defaultLocale: 'en'
  },
  webpack (config, { isServer }) {
    // Allow importing of shader files (e.g. `.glsl` -- filenames below)
    // @see: https://github.com/glslify/glslify-loader
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag|ps)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader']
    })

    return config
  }
}

module.exports = nextConfig
