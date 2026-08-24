import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/archive', destination: '/#work', permanent: true },
      // Analytics pseudo-routes are never real pages; a stray visit lands on the home page.
      { source: '/e/:path*', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
