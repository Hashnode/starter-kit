import sanitizeHtml from 'sanitize-html';

import { RequiredPublicationFieldsFragment } from "../generated/graphql";
import { resizeImage } from "./image";

export const getHead = (
    publication: Pick<RequiredPublicationFieldsFragment, 'favicon' | 'headerColor' | 'metaTags'>,
  ) => ({
    customFavicon: publication.favicon ? `${resizeImage(publication.favicon, {})}&fm=png` : null,
    customTheme: publication.headerColor || null,
    customMeta: publication.metaTags
      ? sanitizeHtml(publication.metaTags, {
          allowedTags: ['meta'],
          allowedAttributes: { meta: ['name', 'property', 'charset', 'content'] },
        })
      : null,
  });