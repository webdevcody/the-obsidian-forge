/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.clerk.com", "img.youtube.com"],
  },
};

module.exports = nextConfig;
