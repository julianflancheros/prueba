/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.licdn.com',
      'storage.googleapis.com',
      'julianflancheros.js.org'
    ],
  },
}

module.exports = nextConfig
