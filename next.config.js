/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "audiovisual.com",
      },
    ],
  },
};

module.exports = nextConfig
