// next.config.mjs
import { request, gql } from 'graphql-request';

const ANALYTICS_BASE_URL = 'https://hn-ping2.hashnode.com';
const HASHNODE_ADVANCED_ANALYTICS_URL = 'https://user-analytics.hashnode.com';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;

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


  const data = await request(GQL_ENDPOINT, query);

  if (!data.publication) {
    throw new Error('Please ensure you have set the env var NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST correctly.');
  }

  const redirectionRules = data.publication.redirectionRules;

  // convert to next.js redirects format
  const redirects = redirectionRules
    .filter((rule) => {
      // Hashnode gives an option to set a wildcard redirect,
      // but it doesn't work properly with Next.js
      // the solution is to filter out all the rules with wildcard and use static redirects for now
      return rule.source.indexOf('*') === -1;
    })
    .map((rule) => {
      return {
        source: rule.source,
        destination: rule.destination,
        permanent: rule.type === 'PERMANENT',
      };
    });

    redirects.push({
      source: '/feed.xml',
      destination: '/rss.xml',
      permanent: true,
    });
    
  return redirects;
};


const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:; frame-src 'self' https://embed.hashnode.co https://open.spotify.com; frame-ancestors 'none';"
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
  }
];

/**
 * @type {import('next').NextConfig}
 */
const config = {
  transpilePackages: ['@starter-kit/utils'],
  basePath: getBasePath(),
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['cdn.hashnode.com'],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
      {
        protocol: 'https',
        hostname: '9kelt5xnesj2nkgz.public.blob.vercel-storage.com',
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
};

export default config;