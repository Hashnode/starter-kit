const withTM = require("next-transpile-modules")(["@starter-kit/utils"]);
const isProd = process.env.NEXT_PUBLIC_MODE === 'production';
const ANALYTICS_BASE_URL = "https://hn-ping2.hashnode.com";
const ADVANCED_ANALYTICS_BASE_URL = "https://stats.hashnode.com";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = withTM({
  assetPrefix: isProd ? `https://${BASE_URL}` : undefined,
  basePath: BASE_URL.indexOf('/') !== -1 ? BASE_URL.substring(BASE_URL.indexOf('/')) : '',
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