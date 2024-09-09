import { request, gql } from 'graphql-request';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const ANALYTICS_BASE_URL = 'https://hn-ping2.hashnode.com';
const HASHNODE_ADVANCED_ANALYTICS_URL = 'https://user-analytics.hashnode.com';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;

const isProd = process.env.NODE_ENV === 'production';

const getBasePath = () => {
  if (BASE_URL && BASE_URL.indexOf('/') !== -1) {
    return BASE_URL.substring(BASE_URL.indexOf('/'));
  }
  return undefined;
};

const getRedirectionRules = async () => {
  const query = gql`
    query GetRedirectionRules {
      publication(host: "${host}") {
        id
        redirectionRules {
          source
          destination
          type
        }
      }
    }
  `;

  try {
    const data = await request(GQL_ENDPOINT, query);

    if (!data.publication) {
      throw new Error('Please ensure you have set the env var NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST correctly.');
    }

    const redirectionRules = data.publication.redirectionRules;

    const redirects = redirectionRules
      .filter((rule) => rule.source.indexOf('*') === -1)
      .map((rule) => ({
        source: rule.source,
        destination: rule.destination,
        permanent: rule.type === 'PERMANENT',
      }));

    redirects.push({
      source: '/feed.xml',
      destination: '/rss.xml',
      permanent: true,
    });

    redirects.push({
      source: '/sasirtici-kedi-ozellikleri',
      destination: '/kediler-hakkinda-cok-ilginc-bilgiler',
      permanent: true,
    });
      
    return redirects;
  } catch (error) {
    console.error('Error fetching redirection rules:', error);
    return [];
  }
};

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self' https://*.hashnode.com https://*.hashnode.co;
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https: https://*.hashnode.com https://*.hashnode.co;
      style-src 'self' 'unsafe-inline' https: https://*.hashnode.com https://*.hashnode.co;
      img-src 'self' data: https: https://*.hashnode.com https://*.hashnode.co;
      font-src 'self' https: https://*.hashnode.com https://*.hashnode.co;
      connect-src 'self' https: https://*.hashnode.com https://*.hashnode.co;
      media-src 'self' https: https://*.hashnode.com https://*.hashnode.co;
      frame-src 'self' https: https://*.hashnode.com https://*.hashnode.co;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
    `.replace(/\s+/g, ' ').trim()
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'cross-origin'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
];

function generateNonce() {
  return Buffer.from(crypto.randomBytes(16)).toString('base64');
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @type {import('next').NextConfig}
 */
const config = {
  transpilePackages: ['@starter-kit/utils'],
  basePath: getBasePath(),
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '9kelt5xnesj2nkgz.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
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
        source: '/api/analytics',
        destination: `${HASHNODE_ADVANCED_ANALYTICS_URL}/api/analytics`,
      },
      {
        source: '/:slug',
        destination: '/kategori/:slug',
        has: [
          {
            type: 'query',
            key: 'kategori',
            value: 'true',
          },
        ],
      },
    ];
  },
  async redirects() {
    return await getRedirectionRules();
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      });
    }

    if (isProd) {
      config.optimization.minimize = true;
      Promise.resolve().then(async () => {
        const { default: TerserPlugin } = await import('terser-webpack-plugin');
        if (!config.optimization.minimizer) {
          config.optimization.minimizer = [];
        }
        config.optimization.minimizer.push(new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }));
      }).catch(error => {
        console.error('Error loading TerserPlugin:', error);
      });

      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './bundle-analysis.html',
          openAnalyzer: false,
        })
      );
    }

    config.cache = {
      type: 'filesystem',
      compression: 'brotli',
      store: 'pack',
      buildDependencies: {
        config: [__filename],
      },
      cacheDirectory: path.resolve(__dirname, '.next/cache/webpack'),
      version: '1.0',
    };

    return config;
  },
  devIndicators: {
    buildActivity: !isProd,
    buildActivityPosition: 'bottom-right',
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  typescript: {
    ignoreBuildErrors: isProd,
  },
  productionBrowserSourceMaps: false,
  generateEtags: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  swcMinify: true,
  compiler: {
    removeConsole: isProd ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  optimizeFonts: true,
  compress: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'tr',
  },
  eslint: {
    ignoreDuringBuilds: isProd,
  },
};

export default config;