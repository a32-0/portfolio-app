import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.*', '192.168.0.*', '10.0.0.*'],

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    qualities: [75, 90],
  },

  async redirects() {
    return [{ source: '/archive', destination: '/#work', permanent: true }]
  },
}

export default nextConfig
