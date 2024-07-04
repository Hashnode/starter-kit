import { ObjectID } from 'mongodb';
import { PostPreview, User, Publication } from './index';

export interface Series {
  _id: ObjectID;
  cuid?: string;
  slug?: string;
  name?: string;
  brief?: string;
  description?: string;
  descriptionMarkdown?: string;
  coverImage?: string;
  author?: User | string;
  posts?: string[] | PostPreview[];
  numPosts?: number;
  dateAdded?: Date;
  isDelisted?: boolean;
  isActive?: boolean;
  sortOrder?: 'asc' | 'dsc';
  partOfPublication?: boolean;
  publication?: Publication | string | ObjectID;
  movedToBlog?: boolean;
}
