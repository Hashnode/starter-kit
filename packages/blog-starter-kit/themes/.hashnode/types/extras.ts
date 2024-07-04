import { ObjectID } from 'mongodb';

export interface SocialMedia {
  website?: string;
  github?: string;
  twitter?: string;
  facebook?: string;
  stackoverflow?: string;
  linkedin?: string;
}

export interface Reaction {
  _id: ObjectID;
  name: string;
  image: string;
}

export type Node = {
  isApproved: boolean;
  isActive: boolean;
};

export interface Tag {
  _id: ObjectID;
  name: string;
  slug: string;
  isActive: boolean;
  isApproved: boolean;
  mergedWith?: Tag | ObjectID;
  numPosts?: number;
}

export interface RedirectResponse {
  redirect: { permanent: boolean; destination: string };
}

export interface Head {
  customFavicon: string;
  customTheme: string;
  customMeta: string;
}

export type Nullable<T> = {
  [P in keyof T]?: T[P] | null;
};

export type ReportScrollFunction = { scrollToReportSection: () => void };
