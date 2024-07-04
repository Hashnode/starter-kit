import { ObjectID } from 'mongodb';
import { SocialMedia, PostPreview } from './index';

export interface User {
  _id: ObjectID;
  isAmbassador: boolean;
  hasGoldRing: boolean;
  hasBetaAccess: boolean;
  publicationDomain: string;
  isDeactivated: boolean;
  numReactions: number;
  tagline: string;
  username: string;
  name: string;
  email: string;
  photo: string;
  numFollowers: number;
  numFollowing: number;
  location: string;
  coverImage: string;
  dateJoined: Date;
  socialMedia: SocialMedia;
  totalUpvotesReceived: number;
  storiesCreated: PostPreview[] | string[];
  isEvangelist: boolean;
  numSeries: number;
  numPosts: number;
  tagManagerOf: string[];
  role: string;
  beingFollowed: boolean;
  bio?: string;
  betaFeatures: {
    referralProgram: boolean;
    socialProofLikes: boolean;
  };
  pro?: {
    hasProAccess?: boolean;
  };
}
