/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'maps.googleapis.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/googleapi/:path*',
        destination: 'https://maps.googleapis.com/:path*',
      },
    ]
  },
}

export default nextConfig
