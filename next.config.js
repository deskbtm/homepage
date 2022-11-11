/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  exportPathMap: async () => {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
