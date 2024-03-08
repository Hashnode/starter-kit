import { ObjectID } from 'mongodb';
import { User, Page, Nullish, Series } from './index';

export interface PublicationMenu {
  _id: ObjectID;
  type: string;
  label: string;
  url: string | Nullish;
  page: string | Nullish | Page;
  series: string | Series | Nullish;
  priority: number;
}

export interface PublicationLinks {
  twitter: string;
  instagram: string;
  github: string;
  website: string;
  hashnode: string;
  youtube: string;
  linkedin: string;
  mastodon: string;
}

export interface Publication {
  _id: ObjectID;
  title: string;
  author: Pick<User, '_id' | 'name' | 'photo' | 'username'>;
  layout: string;
  description: string;
  logo: string;
  urlPattern: string;
  menu: PublicationMenu[];
  customRules: Array<any>;
  links: PublicationLinks;
  stripe?: {
    connected: boolean;
    accountId: string;
    country: string;
  };
  sponsorship?: {
    contentMarkdown: string;
    content: string;
  };
  badgePageEnabled?: boolean;
  membersPageEnabled?: boolean;
  newsletterPageEnabled?: boolean;
  isTeam?: boolean;
  hasBadges?: boolean;
  readTimeHidden?: boolean;
  viewCountVisible?: boolean;
  darkModeEnabled?: boolean;
  favicon?: string;
  fbPixelID?: string;
  fathomSiteID?: string;
  fathomCustomDomainEnabled?: boolean;
  fathomCustomDomain?: string;
  hotjarSiteID?: string;
  matomoSiteID?: string;
  matomoURL?: string;
  plausibleAnalyticsEnabled?: boolean;
  domain?: string;
  wwwPrefixedDomain?: string;
  username?: string;
  darkModeLogo: string;
  textSelectionSharerEnabled: boolean;
  metaHTML: string;
  metaHTMLSanitized: string;
  numPosts: number;
  gaTrackingID: string;
  ogImage?: string;
  customCSSEnabled: boolean | undefined;
  disableFooterBranding?: boolean;
  isSubscriptionModalDisabled?: boolean;
  customCSSPublished?: {
    homeMin: string;
    postMin: string;
    staticMin: string;
  };
  customCSSDraft?: {
    staticMin: string;
    homeMin: string;
    postMin: string;
  };
  hideMembersPage?: boolean;
  domainStatus?: {
    certIssued?: boolean;
    ready?: boolean;
  };
  wwwPrefixedDomainStatus?: {
    certIssued?: boolean;
    ready?: boolean;
  };
  audioBlogEnabled: boolean;
  audioBlogVoiceType: 'male' | 'female';
  newsletterEnabled: boolean;
  wmPaymentPointer?: string;
  displayTitle?: string;
  imprint?: string;
  pro?: {
    hasProAccess?: boolean;
  };
  umamiWebsiteUUID: string | Nullish;
}

export type PublicationType = {
  _id: ObjectID;
  ogImage: string;
  domain: string;
  username: string;
  logo: string;
  favicon: string;
  title: string;
  author: Pick<User, '_id' | 'name' | 'photo' | 'username'>;
  displayTitle: string;
  description: string;
  wmPaymentPointer: string | null | undefined;
  customCSSDraft:
    | {
        homeMin: string;
        postMin: string;
      }
    | undefined;
  customCSSEnabled: boolean | undefined;
  customCSSPublished: {
    homeMin: string;
    postMin: string;
    staticMin: string;
  };
  gaTrackingID: string;
  metaHTML: string;
  newsletterEnabled: boolean;
  isTeam: boolean;
  layout: 'stacked' | 'grid' | 'magazine';
  audioBlogEnabled: boolean;
  audioBlogVoiceType: 'male' | 'female';
  stripe?: {
    connected: boolean;
    accountId: string;
    country: string;
  };
  darkModeLogo: string;
  links: PublicationLinks;
  sponsorship?: {
    contentMarkdown: string;
    content: string;
  };
};

export enum PrivacyState {
  private = 'private',
  public = 'public',
}

export type PublicationMember = {
  _id: string;
  publication: Publication;
  user: User;
  role: string;
  privacyState: PrivacyState;
};
