import { ObjectID } from 'mongodb';

import { PublicationType, User, Publication, Series, Tag, Response, Badge, Nullish } from '../types/index';

export type TocType = {
  title: string;
  level: number;
  slug: string;
  parentId: string | Nullish;
};

export interface PostPreview {
  _id: ObjectID;
  partOfPublication: boolean;
  author: Pick<User, '_id' | 'name' | 'photo' | 'username' | 'socialMedia' | 'isDeactivated' | 'bio'>;
  bookmarkedIn: string[];
  publication: ObjectID | Publication;
  tags: Tag[];
  responseCount: number;
  replyCount: number;
  contentMarkdown: string;
  content: string;
  cuid: string | Nullish;
  views: number;
  title: string;
  slug: string;
  dateAdded: Date;
  dateUpdated: Date | Nullish;
  type: 'story' | 'question' | 'link';
  coverImage?: string;
  coverImageAttribution?: string;
  coverImagePhotographer?: string;
  isCoverImagePortrait: boolean;
  isCoverAttributionHidden?: boolean;
  brief: string;
  isFollowing: boolean;
  totalReactions: number;
  totalReactionsByCurrentUser: number;
  series: Series | null;
  isPinnedToBlog: boolean;
  readTime: number;
  sB: boolean;
  isAMA: boolean;
  subtitle: string;
}

export interface Post extends PostPreview {
  isPartOfSeries: boolean;
  hasTags: boolean;
  publication: Publication & PublicationType;
  partOfPublication: boolean;
  series: Series | null;
  pendingPublicationApproval: boolean;
  ogImage: string;
  metaTitle: string;
  metaDescription: string;
  subtitle: string;
  isRepublished: boolean;
  autoPublishedFromRSS: boolean;
  rssURL?: string;
  originalArticleURL?: string;
  responses: Response[];
  isFeatured: boolean;
  hasLatex: boolean;
  stickCoverToBottom: boolean;
  hideBadges: boolean;
  badges: Pick<Badge, 'name'>[];
  isDelisted: boolean;
  audioUrls?: {
    male?: string;
    female?: string;
  };
  disableComments?: boolean;
  commentsPaused?: boolean;
  enableToc?: boolean;
  toc?: [TocType][];
  noIndex?: boolean;
}
