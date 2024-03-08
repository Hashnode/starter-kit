import { cacheExchange } from '@urql/exchange-graphcache';
import { relayPagination } from '@urql/exchange-graphcache/extras';
import { Exchange, errorExchange, fetchExchange, ssrExchange } from 'urql';
const isServerSide = typeof window === 'undefined';

/**
 * getUrqlClientConfig is used along with `withUrqlClient` and `initUrqlClient` to create a new urql client instance
 * We need the ability to pass ssrExchanges created inside gSSP to
 * create a new client instance for each request to avoid leaking data between requests
 * @param ssrExchange
 * @returns new ClientConfig
 */

export const getUrqlClientConfig = (ssrExchange: Exchange) => ({
    url: process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
    exchanges: [
      cacheExchange({
        // relayPagination() keeps previous results in the cache; ⚠️ this leads to unexpected results if used in API routes due to possible different execution environments
        resolvers: {
          Publication: {
            posts: relayPagination(),
          },
          Series: {
            posts: relayPagination(),
          },
          Query: {
            searchPostsOfPublication: relayPagination(),
          },
        },
        // NEEDED: https://formidable.com/open-source/urql/docs/graphcache/normalized-caching/#custom-keys-and-non-keyable-entities
        keys: {
          DarkModePreferences: () => null,
          Preferences: () => null,
          CustomCSSPreferences: () => null,
          PostCoverImage: () => null,
          DomainStatus: () => null,
          PublicationNavbarItem: () => null,
          PublicationIntegrations: () => null,
          PublicationLinks: () => null,
          DomainInfo: () => null,
          PagesPreferences: () => null,
          PublicationFeatures: () => null,
          OpenGraphMetaData: () => null,
          PresignedPost: () => null,
          AboutPublication: () => null,
          NewsletterFeature: () => null,
          ViewCountFeature: () => null,
          ReadTimeFeature: () => null,
          Content: () => null,
          AudioUrls: () => null,
          AudioBlogFeature: () => null,
          TextSelectionSharerFeature: () => null,
          CustomCSSFeature: () => null,
          CustomCSS: () => null,
          StripeConfiguration: () => null,
          RedirectionRule: () => null,
        },
      }),
      ssrExchange,
      errorExchange({
        onError(error) {
          console.error('GQL error occurred', { error });
        },
      }),
      fetchExchange,
    ],
  });

  // createSSRExchange is used to create a new ssr exchange instance
// which is then passed `getUrqlClientConfig`
// it will discard initial state when invoked inside gSSP
export const createSSRExchange = () =>
ssrExchange({
  isClient: !isServerSide,
  initialState: !isServerSide ? (window as any).__URQL_DATA__ : undefined,
});

export function createHeaders(options?: { byPassCache?: boolean; cookies?: string }) {
  const headers: Record<string, string> = {
    'hn-trace-app': 'blogs',
  };

  if (options?.byPassCache) {
    headers['hn-stellate-bypass-cache'] = '1';
  }

  if (isServerSide) {
    if (options?.cookies) {
      headers.cookie = options.cookies;
    }
  }

  return headers;
}
