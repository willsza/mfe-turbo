/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: "/transfers",
        destination: `${TRANSFERS_URL}/transfers`,
      },
      {
        source: "/transfers/:path*",
        destination: `${TRANSFERS_URL}/transfers/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
