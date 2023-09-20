/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    secretKey: process.env.your_secret_here,
  },
};

module.exports = nextConfig;
