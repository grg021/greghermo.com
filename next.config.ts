import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // The profile photo on the home page is rendered at quality 100
    qualities: [75, 100],
  },
}

export default nextConfig
