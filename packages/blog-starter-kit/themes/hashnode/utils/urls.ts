import { ParsedUrlQuery } from 'querystring';
import { Post, Publication } from '../generated/graphql';

/**
 * Gets the first query param value from a query object by its key.
 */
export function getSingleQueryParam(query: ParsedUrlQuery, key: string) {
    const value = query[key];
    return Array.isArray(value) ? value[0] : value;
  }
  