const withTM = require("next-transpile-modules")(["@starter-kit/utils"]);
const isProd = process.env.NEXT_PUBLIC_MODE === 'production';
const ANALYTICS_BASE_URL = "https://hn-ping2.hashnode.com";
const ADVANCED_ANALYTICS_BASE_URL = "https://stats.hashnode.com";

module.exports = withTM({
  assetPrefix: isProd ? `https://${process.env.NEXT_PUBLIC_BASE_URL}` : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/ping/data-event',
        destination: `${ANALYTICS_BASE_URL}/api/data-event`,
      },
      {
        source: '/ping/view',
        destination: `${ANALYTICS_BASE_URL}/api/view`,
      },
      {
        source: '/api/collect',
        destination: `${ADVANCED_ANALYTICS_BASE_URL}/api/collect`,
      }
    ];
  }
});