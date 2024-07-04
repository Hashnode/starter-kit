import { GetServerSidePropsContext } from 'next';
import { getSingleQueryParam } from './urls';

export function getHost({ req, query }: Pick<GetServerSidePropsContext, 'req' | 'query'>) {
    const host = getSingleQueryParam(query, 'x-host') || req.headers.host;
    if (!host) {
      throw new Error('Could not determine host');
    }
    return host;
}