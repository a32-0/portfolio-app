import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.*', '192.168.0.*', '10.0.0.*'],

  images: {
    qualities: [75, 90],
  },

  async redirects() {
    return [{ source: '/archive', destination: '/#work', permanent: true }]
  },
}

export default nextConfig
