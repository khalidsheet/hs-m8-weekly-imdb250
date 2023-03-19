/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

module.exports = nextConfig;
