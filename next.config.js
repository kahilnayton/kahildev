/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  target: process.env.NEXT_PRIVATE_TARGET || 'server',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.prismic.io'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
