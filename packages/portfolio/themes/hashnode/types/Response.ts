import { ObjectId } from 'mongodb';
import { User, Reaction } from './index';

export type Reply = {
  _id: ObjectId;
  content: string;
  contentMarkdown: string;
  author: User;
  dateAdded: string;
  isActive: boolean;
  stamp: string;
  upvotes: string;
  reactions: string[] | Reaction[];
  reactionToCountMap: Record<string, number>;
  totalReactions: number;
  reactionsByCurrentUser: string[] | Reaction[];
  totalReactionsByCurrentUser: number;
};

export type Response = {
  _id: ObjectId;
  content: string;
  contentMarkdown: string;
  author: User;
  dateAdded: string;
  isActive: boolean;
  responseBrief: string;
  stamp: string;
  upvotes: number;
  reactions: string[] | Reaction[];
  replies: any;
  reactionToCountMap: Record<string, number>;
  totalReactions: number;
  reactionsByCurrentUser: string[] | Reaction[];
  totalReactionsByCurrentUser: number;
  isCollapsed: boolean;
};
