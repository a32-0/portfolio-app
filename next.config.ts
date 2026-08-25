import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // `next dev` returns 403 for its own assets when the page is opened from any host other
  // than localhost, which breaks testing on a phone over the LAN. Dev only — production is
  // unaffected. Add your subnet here if it differs.
  allowedDevOrigins: ['192.168.1.*', '192.168.0.*', '10.0.0.*'],

  async redirects() {
    return [
      { source: '/archive', destination: '/#work', permanent: true },
      // Analytics pseudo-routes are never real pages; a stray visit lands on the home page.
      { source: '/e/:path*', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
