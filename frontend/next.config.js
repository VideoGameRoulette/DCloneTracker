/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PORT: 3000,
    BACKEND_ENDPOINT: '/api/',
  },
  reactStrictMode: true,
  images: {
    domains: ['static-cdn.jtvnw.net'],
  },
  eslint: {
    dirs: ['components', 'pages'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

module.exports = nextConfig;
