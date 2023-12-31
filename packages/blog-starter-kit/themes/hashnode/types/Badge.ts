import { ObjectID } from 'mongodb';

export interface Badge {
  _id: ObjectID | string;
  name: string;
  displayName: string;
  infoUrl: string;
  image: string;
  description: string;
}
export interface UserBadgeMap {
  _id: ObjectID;
  user: ObjectID;
  post: ObjectID;
  badge: ObjectID | Badge;
  metaData?: object;
  isActive: boolean;
  assignedOn: Date;
  isSuppressed?: boolean;
  hiddenFromPublication?: boolean;
  actionUrl: string;
}
