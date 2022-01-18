/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.plugins.push(new webpack.IgnorePlugin({
        checkResource(resource) {
          const result = resource.includes("lib/server")
          if (result) console.log('Ignored:', resource)
          return result
        }
      }));
    }

    return config;
  }
}

module.exports = nextConfig
