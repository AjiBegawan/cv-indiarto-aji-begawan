/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: 'export',
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/color/**',
      },
    ],
  },
}

export default nextConfig
// module.exports = nextConfig