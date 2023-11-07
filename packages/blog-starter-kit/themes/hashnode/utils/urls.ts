import { ParsedUrlQuery } from 'querystring';

/**
 * Gets the first query param value from a query object by its key.
 */

const hashnodeEnv = process.env.NEXT_PUBLIC_HASHNODE_ENV;
const isDevEnv = hashnodeEnv === 'development';
const isStagingEnv = hashnodeEnv === 'staging' || hashnodeEnv === 'test';
export const protocol = isDevEnv ? 'http://' : 'https://';

const isValidPublicationDomainNamesKey = (key: unknown): key is keyof typeof publicationDomainNames =>
  (key as any) in publicationDomainNames;

export const publicationDomainNames = {
  development: 'app.localhost',
  staging: 'hashnode.net',
  test: 'hashnode.net',
  production: 'hashnode.dev',
} as const;

export function getSingleQueryParam(query: ParsedUrlQuery, key: string) {
    const value = query[key];
    return Array.isArray(value) ? value[0] : value;
  }

  export const getAppUrl = () => {
    let url;
  
    switch (hashnodeEnv) {
      case 'development':
        url = 'http://localhost:8080';
        break;
      case 'test':
      case 'staging':
        url = 'https://hashnode.xyz';
        break;
      case 'production':
      default:
        url = 'https://hashnode.com';
        break;
    }
    return url;
  };

  /**
 * Creates the origin address for a publication.
 *
 * @example
 * createPublicationHostName({ username: 'myusername' })
 * // returns 'https://myusername.hashnode.dev'
 */
export const createPublicationOrigin = (
  publication: any, // TODO: Need to think what we need to do about legacyPublication
) => {
  const domain = publication.domainInfo.domain?.host ?? '';
  const username = publication.domainInfo.hashnodeSubdomain ?? '';
  const domainStatus = {
    ready: publication.domainInfo.domain?.ready ?? undefined,
    certIssued: publication.domainInfo?.domain?.ready ?? undefined,
  };
  if (!publication || (!domain && !username)) {
    // using the hashnode domain as a fallback in order to prevent errors
    return getAppUrl();
  }

  const hasReadyDomain = !!domain && !!domainStatus?.ready;

  // always use prod as default to make sure prod works
  let subDomain = hasReadyDomain ? '' : `${username}.`;
  if (isDevEnv || isStagingEnv) {
    subDomain = `${username}.`;
  }

  let domainName = hasReadyDomain ? domain : publicationDomainNames.production;
  if ((isDevEnv || isStagingEnv) && isValidPublicationDomainNamesKey(hashnodeEnv)) {
    domainName = publicationDomainNames[hashnodeEnv];
  }
  return `${protocol}${subDomain}${domainName}`;
};

  export const createPostUrl = (
    { slug, cuid, partOfPublication }: any, // TODO: legacyPublication type needs to be fixed
    publication?: any,
  ) => {
    // for legacy purposes as it is not possible to create a post without a publication since 2022-08
    if (!partOfPublication || !publication) {
      // we always use absolute URLs since we are on users' domains
      return `${getAppUrl()}/post/${slug}-${cuid}`;
    }
  
    const origin = createPublicationOrigin(publication);
    const isSimpleUrl = publication.urlPattern === 'SIMPLE';
    const pathname = isSimpleUrl ? `/${slug}` : `/${slug}-${cuid}`;
    return `${origin}${pathname}`;
  };
  
  export const createDraftPreviewUrl = (id: string) => `${getAppUrl()}/preview/${id}`;