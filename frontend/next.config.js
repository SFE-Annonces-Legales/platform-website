/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['via.placeholder.com'],
  },
}

module.exports = nextConfig