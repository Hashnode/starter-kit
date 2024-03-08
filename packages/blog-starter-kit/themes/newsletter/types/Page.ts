import { ObjectID } from 'mongodb';
import { Publication } from './index';

export interface Page {
  _id: string | ObjectID;
  publication?: string | Publication | ObjectID;
  title?: string;
  endpoint?: string;
  content?: string;
  contentMarkdown?: string;
  oldEndpoint?: string;
  isActive?: boolean;
  isHidden?: boolean;
  priority?: number;
  ogImage?: string;
  description?: string;
}
