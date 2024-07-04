import { RefObject } from 'react';
import { PublicationFragment, User } from '../generated/graphql';
import { DEFAULT_LIGHT_POST_COVER } from './const';

export const isBrowser = typeof window !== 'undefined';

export const generateBlogTitleWithoutDisplayTitle = (
    publication: Pick<PublicationFragment, 'title'> & {
      author: Pick<User, 'name'>;
    },
  ) => `${publication.title || `${publication.author?.name}'s Blog`}`;
  
export const lightOrDark = (color: any) => {
  // Variables for red, green, blue values
  var r, g, b, hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return 'light';
  } else {
    return 'dark';
  }
};

// export const getTotalReplyCountFromResponses = (responses: Response[]) => {
//   const totalReplyCount = responses.reduce((_totalReplyCount, response) => {
//     _totalReplyCount += response.replies?.length ?? 0;
//     return _totalReplyCount;
//   }, 0);
//   return totalReplyCount;
// };
  


/**
 * Solution for bug in some browsers (e.g. Safari) where user is scroll
 * jumped to bottom of page when closing radix modal with esc
 */
export const blurActiveFocus = () => {
  if (document.activeElement && document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

/**
 * Maintain focus position e.g. using a constant open radix dialog which won't automatically
 * restore correct focus position
 */
export const returnFocusToElement = (elRef: RefObject<HTMLElement>) => {
  if (elRef && elRef.current) elRef.current.focus();
};

export const getHashId = () => {
  if (!isBrowser) return null;
  const hashId = window.location.hash?.substring(1);
  if (hashId.length > 0) {
    return hashId.split('?')[0];
  }
  return null;
};

export const getDefaultPostCoverImageUrl = () => {
  return DEFAULT_LIGHT_POST_COVER;
};

export const doesPublicationHaveSocialLinks = (pubLinks: any) =>
  Object.entries(pubLinks || {})
    .filter((entry) => entry[0] !== '__typename')
    .map((link) => {
      const key = link[0];
      const value = link[1];

      return { key, value };
    })
    .some((entry) => entry.value);