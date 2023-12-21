/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    esmExternals: false,
  },
  exportPathMap: async () => {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
