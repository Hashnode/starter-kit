const withTM = require("next-transpile-modules")(["@starter-kit/components", "@starter-kit/utils"]);

module.exports = withTM({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },
});
