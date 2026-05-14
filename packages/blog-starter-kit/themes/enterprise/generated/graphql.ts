import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  JSONObject: { input: Record<string, unknown>; output: Record<string, unknown>; }
  ObjectId: { input: string; output: string; }
};

export type AbsoluteTimeRange = {
  from?: InputMaybe<Scalars['DateTime']['input']>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Badge = {
  __typename?: 'Badge';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CheckCustomDomainAvailabilityInput = {
  domain: Scalars['String']['input'];
};

export type CheckCustomDomainAvailabilityResult = {
  __typename?: 'CheckCustomDomainAvailabilityResult';
  available: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type CheckSubdomainAvailabilityResult = {
  __typename?: 'CheckSubdomainAvailabilityResult';
  available: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  content: Content;
  dateAdded: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  replies: CommentConnection;
  totalReactions: Scalars['Int']['output'];
};


export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type Content = {
  __typename?: 'Content';
  html: Scalars['String']['output'];
  markdown: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type CoverImage = {
  __typename?: 'CoverImage';
  attribution?: Maybe<Scalars['String']['output']>;
  isAttributionHidden?: Maybe<Scalars['Boolean']['output']>;
  isPortrait?: Maybe<Scalars['Boolean']['output']>;
  photographer?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CreateImageUploadInput = {
  /** The content type of the image. Must start with "image/". Example: "image/png". */
  contentType: Scalars['String']['input'];
};

export type CreateImageUploadPayload = {
  __typename?: 'CreateImageUploadPayload';
  presignedPost: PresignedPost;
};

export type CustomRule = {
  __typename?: 'CustomRule';
  destination: Scalars['String']['output'];
  path: Scalars['String']['output'];
  type: Scalars['Int']['output'];
};

export type DarkModePreferences = {
  __typename?: 'DarkModePreferences';
  enabled: Scalars['Boolean']['output'];
  logo?: Maybe<Scalars['String']['output']>;
};

export type DocumentationProject = {
  __typename?: 'DocumentationProject';
  guides: GuideConnection;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type DocumentationProjectGuidesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

export type Domain = {
  __typename?: 'Domain';
  host: Scalars['String']['output'];
  ready: Scalars['Boolean']['output'];
};

export type DomainInfo = {
  __typename?: 'DomainInfo';
  domain?: Maybe<Domain>;
  hashnodeSubdomain?: Maybe<Scalars['String']['output']>;
  wwwPrefixedDomain?: Maybe<Domain>;
};

export type Draft = {
  __typename?: 'Draft';
  author: User;
  content?: Maybe<Content>;
  coverImage?: Maybe<CoverImage>;
  id: Scalars['ID']['output'];
  publishAs?: Maybe<User>;
  scheduledDate?: Maybe<Scalars['DateTime']['output']>;
  settings?: Maybe<DraftSettings>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DraftConnection = {
  __typename?: 'DraftConnection';
  edges: Array<DraftEdge>;
  pageInfo: PageInfo;
  totalDocuments: Scalars['Int']['output'];
};

export type DraftEdge = {
  __typename?: 'DraftEdge';
  cursor: Scalars['String']['output'];
  node: Draft;
};

export type DraftSettings = {
  __typename?: 'DraftSettings';
  disableComments: Scalars['Boolean']['output'];
  enableTableOfContents: Scalars['Boolean']['output'];
  isDelisted: Scalars['Boolean']['output'];
  stickCoverToBottom: Scalars['Boolean']['output'];
};

export type EnabledPages = {
  __typename?: 'EnabledPages';
  badges: Scalars['Boolean']['output'];
  members: Scalars['Boolean']['output'];
  newsletter: Scalars['Boolean']['output'];
};

export type FeedFilter = {
  excludePublications?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  excludeTags?: InputMaybe<Array<Scalars['String']['input']>>;
  publications?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FeedPostConnection = {
  __typename?: 'FeedPostConnection';
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
};

export type GptBotCrawlingFeature = {
  __typename?: 'GPTBotCrawlingFeature';
  isEnabled: Scalars['Boolean']['output'];
};

export type Guide = {
  __typename?: 'Guide';
  content: Content;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type GuideConnection = {
  __typename?: 'GuideConnection';
  edges: Array<GuideEdge>;
  pageInfo: PageInfo;
};

export type GuideEdge = {
  __typename?: 'GuideEdge';
  cursor: Scalars['String']['output'];
  node: Guide;
};

export type HeadlessCmsFeature = {
  __typename?: 'HeadlessCMSFeature';
  isEnabled: Scalars['Boolean']['output'];
};

export type ImprintV2 = {
  __typename?: 'ImprintV2';
  html?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Returns a presigned URL for uploading an image to Hashnode's CDN. Requires authentication. */
  createImageUploadURL: CreateImageUploadPayload;
  /** Publish a new post to a publication. Requires authentication. */
  publishPost: PublishPostPayload;
  /** Update an existing post. Requires authentication. */
  updatePost: UpdatePostPayload;
};


export type MutationCreateImageUploadUrlArgs = {
  input: CreateImageUploadInput;
};


export type MutationPublishPostArgs = {
  input: PublishPostInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};

export type MyUser = {
  __typename?: 'MyUser';
  availableFor?: Maybe<Scalars['String']['output']>;
  badges: Array<Badge>;
  bio?: Maybe<Content>;
  coverImage?: Maybe<Scalars['String']['output']>;
  dateJoined?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  followers: UserConnection;
  follows: UserConnection;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
  publications: PublicationConnection;
  socialMediaLinks?: Maybe<SocialMediaLinks>;
  tagline?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};


export type MyUserFollowersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type MyUserFollowsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type MyUserPublicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

export type NewsletterFeature = {
  __typename?: 'NewsletterFeature';
  isEnabled: Scalars['Boolean']['output'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** Indicates if there are more pages. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if there are previous pages. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /** The page after the current page. */
  nextPage?: Maybe<Scalars['Int']['output']>;
  /** The page before the current page. */
  previousPage?: Maybe<Scalars['Int']['output']>;
};

export type OpenGraphMetaData = {
  __typename?: 'OpenGraphMetaData';
  image?: Maybe<Scalars['String']['output']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocuments?: Maybe<Scalars['Int']['output']>;
};

/** Contains the pending invite information. */
export type PendingInvite = {
  __typename?: 'PendingInvite';
  /** The email of the user that was invited. */
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The role assigned to the user in the publication. */
  role: UserPublicationRole;
  /** Invited Hashnode user, returns null if the user is not a Hashnode user. */
  user?: Maybe<User>;
};

export type PendingInviteConnection = {
  __typename?: 'PendingInviteConnection';
  nodes: Array<PendingInvite>;
  pageInfo: OffsetPageInfo;
  totalDocuments: Scalars['Int']['output'];
};

export type Post = {
  __typename?: 'Post';
  author: User;
  brief: Scalars['String']['output'];
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  coAuthors?: Maybe<Array<User>>;
  comments: CommentConnection;
  content: Content;
  coverImage?: Maybe<CoverImage>;
  cuid?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  features: PostFeatures;
  hasLatexInPost?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  likedBy: UserConnection;
  ogMetaData?: Maybe<OpenGraphMetaData>;
  preferences: PostPreferences;
  publication?: Maybe<Publication>;
  publishedAt: Scalars['DateTime']['output'];
  reactionCount: Scalars['Int']['output'];
  readTimeInMinutes: Scalars['Int']['output'];
  replyCount: Scalars['Int']['output'];
  responseCount: Scalars['Int']['output'];
  seo?: Maybe<Seo>;
  series?: Maybe<Series>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  views?: Maybe<Scalars['Int']['output']>;
};


export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type PostLikedByArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
  totalDocuments?: Maybe<Scalars['Int']['output']>;
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type PostFeatures = {
  __typename?: 'PostFeatures';
  tableOfContents?: Maybe<TableOfContents>;
};

export type PostPreferences = {
  __typename?: 'PostPreferences';
  disableComments: Scalars['Boolean']['output'];
  isDelisted: Scalars['Boolean']['output'];
  pinnedToBlog: Scalars['Boolean']['output'];
  stickCoverToBottom: Scalars['Boolean']['output'];
};

export enum PostSortBy {
  DatePublishedAsc = 'DATE_PUBLISHED_ASC',
  DatePublishedDesc = 'DATE_PUBLISHED_DESC'
}

export type PresignedPost = {
  __typename?: 'PresignedPost';
  /** The fields to include in the POST request body along with the image file. */
  fields: Scalars['JSONObject']['output'];
  /** The URL to POST the image to. */
  url: Scalars['String']['output'];
};

export type ProTeamFeature = {
  __typename?: 'ProTeamFeature';
  isEnabled: Scalars['Boolean']['output'];
};

export type PublicMembers = {
  __typename?: 'PublicMembers';
  totalDocuments: Scalars['Int']['output'];
};

export type Publication = {
  __typename?: 'Publication';
  about?: Maybe<Content>;
  allDrafts: DraftConnection;
  allScheduledDrafts: DraftConnection;
  allowContributorEdits: Scalars['Boolean']['output'];
  author: User;
  canonicalURL?: Maybe<Scalars['String']['output']>;
  customRules: Array<CustomRule>;
  descriptionSEO?: Maybe<Scalars['String']['output']>;
  displayTitle?: Maybe<Scalars['String']['output']>;
  domainInfo: DomainInfo;
  drafts: DraftConnection;
  favicon?: Maybe<Scalars['String']['output']>;
  features: PublicationFeatures;
  followersCount?: Maybe<Scalars['Int']['output']>;
  hasBadges?: Maybe<Scalars['Boolean']['output']>;
  headerColor?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imprintV2?: Maybe<ImprintV2>;
  integrations?: Maybe<PublicationIntegrations>;
  /** Details of publication invites. Returns null if publication is not a team publication. */
  invites?: Maybe<PublicationInvite>;
  isGitHubBackupEnabled: Scalars['Boolean']['output'];
  isGithubAsSourceConnected: Scalars['Boolean']['output'];
  isHeadless: Scalars['Boolean']['output'];
  isTeam: Scalars['Boolean']['output'];
  links?: Maybe<PublicationLinks>;
  members: PublicationMemberConnection;
  metaTags?: Maybe<Scalars['String']['output']>;
  ogMetaData?: Maybe<OpenGraphMetaData>;
  pinnedPost?: Maybe<Post>;
  post?: Maybe<Post>;
  posts: PostConnection;
  postsCount: PostConnection;
  preferences: PublicationPreferences;
  publicMembers: PublicMembers;
  recommendedPublications: Array<RecommendedPublicationEdge>;
  redirectedPost?: Maybe<RedirectedPost>;
  redirectionRules: Array<RedirectionRule>;
  scheduledDrafts: DraftConnection;
  series?: Maybe<Series>;
  seriesList: SeriesConnection;
  staticPage?: Maybe<StaticPage>;
  staticPages: StaticPageConnection;
  submittedDrafts: DraftConnection;
  title: Scalars['String']['output'];
  totalRecommendedPublications: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
  urlPattern?: Maybe<Scalars['String']['output']>;
};


export type PublicationAllDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type PublicationAllScheduledDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type PublicationDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type PublicationMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type PublicationPostArgs = {
  slug: Scalars['String']['input'];
};


export type PublicationPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PublicationPostConnectionFilter>;
  first: Scalars['Int']['input'];
};


export type PublicationPostsCountArgs = {
  first: Scalars['Int']['input'];
};


export type PublicationPublicMembersArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


export type PublicationRedirectedPostArgs = {
  slug: Scalars['String']['input'];
};


export type PublicationScheduledDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type PublicationSeriesArgs = {
  slug: Scalars['String']['input'];
};


export type PublicationSeriesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type PublicationStaticPageArgs = {
  slug: Scalars['String']['input'];
};


export type PublicationStaticPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type PublicationSubmittedDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

export type PublicationConnection = {
  __typename?: 'PublicationConnection';
  edges: Array<PublicationEdge>;
  pageInfo: PageInfo;
};

export type PublicationEdge = {
  __typename?: 'PublicationEdge';
  cursor: Scalars['String']['output'];
  node: Publication;
};

export type PublicationFeatures = {
  __typename?: 'PublicationFeatures';
  gptBotCrawling?: Maybe<GptBotCrawlingFeature>;
  headlessCMS?: Maybe<HeadlessCmsFeature>;
  newsletter?: Maybe<NewsletterFeature>;
  proTeam?: Maybe<ProTeamFeature>;
  readTime?: Maybe<ReadTimeFeature>;
  textSelectionSharer?: Maybe<TextSelectionSharerFeature>;
  viewCount?: Maybe<ViewCountFeature>;
};

export type PublicationIntegrations = {
  __typename?: 'PublicationIntegrations';
  fathomCustomDomain?: Maybe<Scalars['String']['output']>;
  fathomCustomDomainEnabled?: Maybe<Scalars['Boolean']['output']>;
  fathomSiteID?: Maybe<Scalars['String']['output']>;
  fbPixelID?: Maybe<Scalars['String']['output']>;
  gTagManagerID?: Maybe<Scalars['String']['output']>;
  gaTrackingID?: Maybe<Scalars['String']['output']>;
  hotjarSiteID?: Maybe<Scalars['String']['output']>;
  koalaPublicKey?: Maybe<Scalars['String']['output']>;
  matomoSiteID?: Maybe<Scalars['String']['output']>;
  matomoURL?: Maybe<Scalars['String']['output']>;
  msClarityID?: Maybe<Scalars['String']['output']>;
  plausibleAnalyticsEnabled?: Maybe<Scalars['Boolean']['output']>;
  wmPaymentPointer?: Maybe<Scalars['String']['output']>;
};

/** Contains the publication invite information. */
export type PublicationInvite = {
  __typename?: 'PublicationInvite';
  /** Signifies if invite links in role-based invites are active. */
  areRoleBasedInviteLinksActive: Scalars['Boolean']['output'];
  pendingInvites: PendingInviteConnection;
  roleBasedInvites: RoleBasedInviteConnection;
};


/** Contains the publication invite information. */
export type PublicationInvitePendingInvitesArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/** Contains the publication invite information. */
export type PublicationInviteRoleBasedInvitesArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};

export type PublicationLinks = {
  __typename?: 'PublicationLinks';
  bluesky?: Maybe<Scalars['String']['output']>;
  dailydev?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  hashnode?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  mastodon?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type PublicationMember = {
  __typename?: 'PublicationMember';
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
  user: User;
};

export type PublicationMemberConnection = {
  __typename?: 'PublicationMemberConnection';
  edges: Array<PublicationMemberEdge>;
  pageInfo: PageInfo;
};

export type PublicationMemberEdge = {
  __typename?: 'PublicationMemberEdge';
  cursor: Scalars['String']['output'];
  node: PublicationMember;
};

export type PublicationNavbarItem = {
  __typename?: 'PublicationNavbarItem';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  page?: Maybe<StaticPage>;
  series?: Maybe<Series>;
  type: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type PublicationPostConnectionFilter = {
  tagSlugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PublicationPreferences = {
  __typename?: 'PublicationPreferences';
  darkMode?: Maybe<DarkModePreferences>;
  disableFooterBranding?: Maybe<Scalars['Boolean']['output']>;
  enabledPages: EnabledPages;
  isSubscriptionModalDisabled?: Maybe<Scalars['Boolean']['output']>;
  layout?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  navbarItems: Array<PublicationNavbarItem>;
};

export type PublishPostInput = {
  /** IDs of co-authors (max 4). Must be members of the publication. */
  coAuthors?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  /** Post content in markdown format (required). */
  contentMarkdown: Scalars['String']['input'];
  /** Cover image URL. */
  coverImage?: InputMaybe<Scalars['String']['input']>;
  /** Disable comments on this post. */
  disableComments?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to delist the post from feeds (still accessible via URL). */
  isDelisted?: InputMaybe<Scalars['Boolean']['input']>;
  /** SEO description override. */
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  /** SEO title override. */
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  /** Custom OG image URL. */
  ogImage?: InputMaybe<Scalars['String']['input']>;
  /** Canonical URL for republished articles. */
  originalArticleURL?: InputMaybe<Scalars['String']['input']>;
  /** The publication ID to publish to. */
  publicationId: Scalars['ObjectId']['input'];
  /** Publish on behalf of another user who is a member of the publication. Only for team publications. */
  publishAs?: InputMaybe<Scalars['ObjectId']['input']>;
  /** Backdate the post to a specific date. */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Add the post to a series by ID. */
  seriesId?: InputMaybe<Scalars['ObjectId']['input']>;
  /** Custom slug. If not provided, generated from title. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Post subtitle (optional). */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** Tags as slugs (max 15). New tags will be created automatically. */
  tags?: InputMaybe<Array<PublishPostTagInput>>;
  /** Post title (required). */
  title: Scalars['String']['input'];
};

export type PublishPostPayload = {
  __typename?: 'PublishPostPayload';
  post: Post;
};

export type PublishPostTagInput = {
  /** Tag name. Defaults to slug if not provided. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Tag slug (required). Used to find or create the tag. */
  slug: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Check if a custom domain is available */
  checkCustomDomainAvailability: CheckCustomDomainAvailabilityResult;
  /** Check if a subdomain is available */
  checkSubdomainAvailability: CheckSubdomainAvailabilityResult;
  /** Get documentation project by ID or host */
  documentationProject?: Maybe<DocumentationProject>;
  /** Returns a draft by ID (requires authentication) */
  draft?: Maybe<Draft>;
  /** Returns a paginated feed of posts */
  feed: FeedPostConnection;
  /** Returns the current authenticated user. Requires authentication. */
  me?: Maybe<MyUser>;
  /** Returns a post by ID */
  post?: Maybe<Post>;
  /** Returns a publication by ID or host */
  publication?: Maybe<Publication>;
  /** Returns a scheduled post (requires authentication) */
  scheduledPost?: Maybe<ScheduledPost>;
  /** Search posts within a publication */
  searchPostsOfPublication: SearchPostConnection;
  /** Returns a tag by slug */
  tag?: Maybe<Tag>;
  /** Get top commenters */
  topCommenters: Array<User>;
  /** Returns a user by username */
  user?: Maybe<User>;
};


export type QueryCheckCustomDomainAvailabilityArgs = {
  input: CheckCustomDomainAvailabilityInput;
};


export type QueryCheckSubdomainAvailabilityArgs = {
  subdomain: Scalars['String']['input'];
};


export type QueryDocumentationProjectArgs = {
  host?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDraftArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryFeedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeedFilter>;
  first: Scalars['Int']['input'];
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPublicationArgs = {
  host?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QueryScheduledPostArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QuerySearchPostsOfPublicationArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter: SearchPostsOfPublicationFilter;
  first: Scalars['Int']['input'];
  sortBy?: InputMaybe<PostSortBy>;
};


export type QueryTagArgs = {
  slug: Scalars['String']['input'];
};


export type QueryTopCommentersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationId: Scalars['ObjectId']['input'];
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export type ReadTimeFeature = {
  __typename?: 'ReadTimeFeature';
  isEnabled: Scalars['Boolean']['output'];
};

export type RecommendedPublicationEdge = {
  __typename?: 'RecommendedPublicationEdge';
  node: Publication;
};

export type RedirectedPost = {
  __typename?: 'RedirectedPost';
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
};

export type RedirectionRule = {
  __typename?: 'RedirectionRule';
  destination: Scalars['String']['output'];
  source: Scalars['String']['output'];
  type: Scalars['Int']['output'];
};

export type RelativeTimeRange = {
  n: Scalars['Int']['input'];
  relative: TimePeriod;
};

export type RoleBasedInvite = {
  __typename?: 'RoleBasedInvite';
  capacity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  inviteLink?: Maybe<Scalars['String']['output']>;
  isUnlimitedCapacity?: Maybe<Scalars['Boolean']['output']>;
  role: UserPublicationRole;
  usedCapacity?: Maybe<Scalars['Int']['output']>;
};

export type RoleBasedInviteConnection = {
  __typename?: 'RoleBasedInviteConnection';
  nodes: Array<RoleBasedInvite>;
  pageInfo: OffsetPageInfo;
  totalDocuments: Scalars['Int']['output'];
};

export type Seo = {
  __typename?: 'SEO';
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ScheduledPost = {
  __typename?: 'ScheduledPost';
  author: User;
  draft: Draft;
  id: Scalars['ID']['output'];
  publication?: Maybe<Publication>;
  scheduledDate: Scalars['DateTime']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SearchPostConnection = {
  __typename?: 'SearchPostConnection';
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
};

export type SearchPostsOfPublicationFilter = {
  /** Author IDs to filter by (OR match). */
  authorIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Only return posts that are deleted. Returns active posts by default. */
  deletedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the publication to search from. */
  publicationId: Scalars['ObjectId']['input'];
  /** The query to be searched in post. */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Tag IDs all of which must be present on the post (AND match). */
  requiredTagsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Tag IDs to filter by (OR match). */
  tagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Filter based on time range. */
  time?: InputMaybe<TimeFilter>;
};

export type Series = {
  __typename?: 'Series';
  author: User;
  coverImage?: Maybe<Scalars['String']['output']>;
  cuid?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Content>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts: PostConnection;
  slug: Scalars['String']['output'];
};


export type SeriesPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

export type SeriesConnection = {
  __typename?: 'SeriesConnection';
  edges: Array<SeriesEdge>;
  pageInfo: PageInfo;
};

export type SeriesEdge = {
  __typename?: 'SeriesEdge';
  cursor: Scalars['String']['output'];
  node: Series;
};

export type SocialMediaLinks = {
  __typename?: 'SocialMediaLinks';
  facebook?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  stackoverflow?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type StaticPage = {
  __typename?: 'StaticPage';
  content: Content;
  hidden: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  ogMetaData?: Maybe<OpenGraphMetaData>;
  seo?: Maybe<Seo>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type StaticPageConnection = {
  __typename?: 'StaticPageConnection';
  edges: Array<StaticPageEdge>;
  pageInfo: PageInfo;
};

export type StaticPageEdge = {
  __typename?: 'StaticPageEdge';
  cursor: Scalars['String']['output'];
  node: StaticPage;
};

export type TableOfContents = {
  __typename?: 'TableOfContents';
  isEnabled: Scalars['Boolean']['output'];
  items: Array<TableOfContentsItem>;
};

export type TableOfContentsItem = {
  __typename?: 'TableOfContentsItem';
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  followersCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  posts: PostConnection;
  postsCount: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  tagline?: Maybe<Scalars['String']['output']>;
};


export type TagPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

export type TextSelectionSharerFeature = {
  __typename?: 'TextSelectionSharerFeature';
  isEnabled: Scalars['Boolean']['output'];
};

export type TimeFilter = {
  absolute?: InputMaybe<AbsoluteTimeRange>;
  relative?: InputMaybe<RelativeTimeRange>;
};

export enum TimePeriod {
  LastNDays = 'LAST_N_DAYS',
  LastNHours = 'LAST_N_HOURS',
  LastNMonths = 'LAST_N_MONTHS',
  LastNWeeks = 'LAST_N_WEEKS',
  LastNYears = 'LAST_N_YEARS'
}

export type UpdatePostInput = {
  /** Update co-authors (max 4). Must be members of the publication. */
  coAuthors?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  /** Updated content in markdown format. */
  contentMarkdown?: InputMaybe<Scalars['String']['input']>;
  /** Updated cover image URL. */
  coverImage?: InputMaybe<Scalars['String']['input']>;
  /** Disable comments on this post. */
  disableComments?: InputMaybe<Scalars['Boolean']['input']>;
  /** The post ID to update. */
  id: Scalars['ID']['input'];
  /** Whether to delist the post from feeds. */
  isDelisted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Updated SEO description. */
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  /** Updated SEO title. */
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  /** Updated OG image URL. */
  ogImage?: InputMaybe<Scalars['String']['input']>;
  /** Updated canonical URL. */
  originalArticleURL?: InputMaybe<Scalars['String']['input']>;
  /** Change the author. Must be a member of the publication. */
  publishAs?: InputMaybe<Scalars['ObjectId']['input']>;
  /** Backdate the post. */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Add or change the series. Must belong to the publication. */
  seriesId?: InputMaybe<Scalars['ObjectId']['input']>;
  /** Updated slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Updated subtitle. */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** Updated tags as slugs (max 15). */
  tags?: InputMaybe<Array<PublishPostTagInput>>;
  /** Updated title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  post: Post;
};

export type User = {
  __typename?: 'User';
  availableFor?: Maybe<Scalars['String']['output']>;
  badges: Array<Badge>;
  bio?: Maybe<Content>;
  coverImage?: Maybe<Scalars['String']['output']>;
  dateJoined?: Maybe<Scalars['DateTime']['output']>;
  deactivated?: Maybe<Scalars['Boolean']['output']>;
  followers: UserConnection;
  followersCount: Scalars['Int']['output'];
  followingsCount: Scalars['Int']['output'];
  follows: UserConnection;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  posts: PostConnection;
  profilePicture?: Maybe<Scalars['String']['output']>;
  publications: PublicationConnection;
  socialMediaLinks?: Maybe<SocialMediaLinks>;
  tagline?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};


export type UserFollowersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type UserFollowsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type UserPublicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export enum UserPublicationRole {
  /** Contributors can join the publication and contribute an article. */
  Contributor = 'CONTRIBUTOR',
  /** Editors can customize the blog and approve/reject posts; they can also manage members. */
  Editor = 'EDITOR',
  /** The owner is the creator of the publication and can do all things. */
  Owner = 'OWNER'
}

export type ViewCountFeature = {
  __typename?: 'ViewCountFeature';
  isEnabled: Scalars['Boolean']['output'];
};

export type PageInfoFragment = { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean };

export type PostFragment = { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'CoverImage', url?: string | null } | null };

export type PublicationFragment = { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url?: string | null, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, preferences: { __typename?: 'PublicationPreferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: string, label: string, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null } | null };

export type DraftByIdQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type DraftByIdQuery = { __typename?: 'Query', draft?: { __typename?: 'Draft', id: string, title?: string | null, updatedAt: string, content?: { __typename?: 'Content', markdown: string } | null, author: { __typename?: 'User', id: string, name: string, username: string, profilePicture?: string | null }, coverImage?: { __typename?: 'CoverImage', url?: string | null } | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null } | null };

export type PageByPublicationQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  host: Scalars['String']['input'];
}>;


export type PageByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url?: string | null, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PostConnection', totalDocuments?: number | null }, staticPage?: { __typename?: 'StaticPage', id: string, title: string, slug: string, content: { __typename?: 'Content', markdown: string } } | null, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, preferences: { __typename?: 'PublicationPreferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: string, label: string, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null } | null } | null };

export type StaticPageFragment = { __typename?: 'StaticPage', id: string, title: string, slug: string, content: { __typename?: 'Content', markdown: string } };

export type PostsByPublicationQueryVariables = Exact<{
  host: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type PostsByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url?: string | null, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'CoverImage', url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, preferences: { __typename?: 'PublicationPreferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: string, label: string, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null } | null } | null };

export type MorePostsByPublicationQueryVariables = Exact<{
  host: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type MorePostsByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', posts: { __typename?: 'PostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'CoverImage', url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } } | null };

export type PublicationByHostQueryVariables = Exact<{
  host: Scalars['String']['input'];
}>;


export type PublicationByHostQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url?: string | null, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PostConnection', totalDocuments?: number | null }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, preferences: { __typename?: 'PublicationPreferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: string, label: string, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null } | null } | null };

export type RssFeedQueryVariables = Exact<{
  host: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type RssFeedQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url?: string | null, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, slug: string, content: { __typename?: 'Content', html: string }, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null, author: { __typename?: 'User', name: string, username: string } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, preferences: { __typename?: 'PublicationPreferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: string, label: string, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null } | null } | null };

export type SearchPostsOfPublicationQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  filter: SearchPostsOfPublicationFilter;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchPostsOfPublicationQuery = { __typename?: 'Query', searchPostsOfPublication: { __typename?: 'SearchPostConnection', edges: Array<{ __typename?: 'PostEdge', cursor: string, node: { __typename?: 'Post', id: string, brief: string, title: string, slug: string, coverImage?: { __typename?: 'CoverImage', url?: string | null } | null, author: { __typename?: 'User', id: string, name: string } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type SeriesPostsByPublicationQueryVariables = Exact<{
  host: Scalars['String']['input'];
  seriesSlug: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type SeriesPostsByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url?: string | null, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PostConnection', totalDocuments?: number | null }, series?: { __typename?: 'Series', id: string, name: string, slug: string, coverImage?: string | null, description?: { __typename?: 'Content', html: string } | null, posts: { __typename?: 'PostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'CoverImage', url?: string | null } | null } }> } } | null, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, preferences: { __typename?: 'PublicationPreferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: string, label: string, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null } | null } | null };

export type SeriesFragment = { __typename?: 'Series', id: string, name: string, slug: string, coverImage?: string | null, description?: { __typename?: 'Content', html: string } | null, posts: { __typename?: 'PostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'CoverImage', url?: string | null } | null } }> } };

export type SinglePostByPublicationQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  host: Scalars['String']['input'];
}>;


export type SinglePostByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url?: string | null, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PostConnection', totalDocuments?: number | null }, post?: { __typename?: 'Post', id: string, slug: string, url: string, brief: string, title: string, subtitle?: string | null, publishedAt: string, updatedAt?: string | null, readTimeInMinutes: number, reactionCount: number, responseCount: number, hasLatexInPost?: boolean | null, series?: { __typename?: 'Series', id: string } | null, seo?: { __typename?: 'SEO', title?: string | null, description?: string | null } | null, coverImage?: { __typename?: 'CoverImage', url?: string | null } | null, author: { __typename?: 'User', id: string, name: string, username: string, profilePicture?: string | null, socialMediaLinks?: { __typename?: 'SocialMediaLinks', twitter?: string | null } | null, bio?: { __typename?: 'Content', html: string } | null }, coAuthors?: Array<{ __typename?: 'User', username: string, id: string, name: string, profilePicture?: string | null, bio?: { __typename?: 'Content', html: string } | null }> | null, content: { __typename?: 'Content', markdown: string, html: string }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null, features: { __typename?: 'PostFeatures', tableOfContents?: { __typename?: 'TableOfContents', isEnabled: boolean, items: Array<{ __typename?: 'TableOfContentsItem', id: string, level: number, parentId?: string | null, slug: string, title: string }> } | null }, preferences: { __typename?: 'PostPreferences', disableComments: boolean }, comments: { __typename?: 'CommentConnection', edges: Array<{ __typename?: 'CommentEdge', node: { __typename?: 'Comment', id: string, totalReactions: number, content: { __typename?: 'Content', markdown: string }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null } } }> } } | null, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, preferences: { __typename?: 'PublicationPreferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: string, label: string, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null } | null } | null };

export type PostFullFragment = { __typename?: 'Post', id: string, slug: string, url: string, brief: string, title: string, subtitle?: string | null, publishedAt: string, updatedAt?: string | null, readTimeInMinutes: number, reactionCount: number, responseCount: number, hasLatexInPost?: boolean | null, series?: { __typename?: 'Series', id: string } | null, seo?: { __typename?: 'SEO', title?: string | null, description?: string | null } | null, coverImage?: { __typename?: 'CoverImage', url?: string | null } | null, author: { __typename?: 'User', id: string, name: string, username: string, profilePicture?: string | null, socialMediaLinks?: { __typename?: 'SocialMediaLinks', twitter?: string | null } | null, bio?: { __typename?: 'Content', html: string } | null }, coAuthors?: Array<{ __typename?: 'User', username: string, id: string, name: string, profilePicture?: string | null, bio?: { __typename?: 'Content', html: string } | null }> | null, content: { __typename?: 'Content', markdown: string, html: string }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null, features: { __typename?: 'PostFeatures', tableOfContents?: { __typename?: 'TableOfContents', isEnabled: boolean, items: Array<{ __typename?: 'TableOfContentsItem', id: string, level: number, parentId?: string | null, slug: string, title: string }> } | null }, preferences: { __typename?: 'PostPreferences', disableComments: boolean }, comments: { __typename?: 'CommentConnection', edges: Array<{ __typename?: 'CommentEdge', node: { __typename?: 'Comment', id: string, totalReactions: number, content: { __typename?: 'Content', markdown: string }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null } } }> } };

export type SitemapQueryVariables = Exact<{
  host: Scalars['String']['input'];
  postsCount: Scalars['Int']['input'];
  postsAfter?: InputMaybe<Scalars['String']['input']>;
  staticPagesCount: Scalars['Int']['input'];
}>;


export type SitemapQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, url?: string | null, staticPages: { __typename?: 'StaticPageConnection', edges: Array<{ __typename?: 'StaticPageEdge', node: { __typename?: 'StaticPage', slug: string } }> }, posts: { __typename?: 'PostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, url: string, slug: string, publishedAt: string, updatedAt?: string | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } } | null };

export type MoreSitemapPostsQueryVariables = Exact<{
  host: Scalars['String']['input'];
  postsCount: Scalars['Int']['input'];
  postsAfter?: InputMaybe<Scalars['String']['input']>;
}>;


export type MoreSitemapPostsQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, posts: { __typename?: 'PostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, url: string, slug: string, publishedAt: string, updatedAt?: string | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } } | null };

export type RequiredSitemapPostFieldsFragment = { __typename?: 'Post', id: string, url: string, slug: string, publishedAt: string, updatedAt?: string | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null };

export type SlugPostsByPublicationQueryVariables = Exact<{
  host: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type SlugPostsByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url?: string | null, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', slug: string } }> }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, preferences: { __typename?: 'PublicationPreferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: string, label: string, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null } | null } | null };

export type TagPostsByPublicationQueryVariables = Exact<{
  host: Scalars['String']['input'];
  tagSlug: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type TagPostsByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url?: string | null, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PostConnection', totalDocuments?: number | null, edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'CoverImage', url?: string | null } | null } }> }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, preferences: { __typename?: 'PublicationPreferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: string, label: string, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null } | null } | null };

export const PageInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<PageInfoFragment, unknown>;
export const PublicationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}}]}}]}}]} as unknown as DocumentNode<PublicationFragment, unknown>;
export const StaticPageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StaticPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StaticPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}}]}}]} as unknown as DocumentNode<StaticPageFragment, unknown>;
export const PostFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]} as unknown as DocumentNode<PostFragment, unknown>;
export const SeriesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Series"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Series"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]} as unknown as DocumentNode<SeriesFragment, unknown>;
export const PostFullFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFull"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readTimeInMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"responseCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasLatexInPost"}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"coAuthors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tableOfContents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disableComments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"25"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalReactions"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PostFullFragment, unknown>;
export const RequiredSitemapPostFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredSitemapPostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<RequiredSitemapPostFieldsFragment, unknown>;
export const DraftByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DraftById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"draft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<DraftByIdQuery, DraftByIdQueryVariables>;
export const PageByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staticPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaticPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StaticPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StaticPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}}]}}]} as unknown as DocumentNode<PageByPublicationQuery, PageByPublicationQueryVariables>;
export const PostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<PostsByPublicationQuery, PostsByPublicationQueryVariables>;
export const MorePostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MorePostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<MorePostsByPublicationQuery, MorePostsByPublicationQueryVariables>;
export const PublicationByHostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublicationByHost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}}]}}]}}]} as unknown as DocumentNode<PublicationByHostQuery, PublicationByHostQueryVariables>;
export const RssFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RSSFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<RssFeedQuery, RssFeedQueryVariables>;
export const SearchPostsOfPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchPostsOfPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPostsOfPublicationFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchPostsOfPublication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<SearchPostsOfPublicationQuery, SearchPostsOfPublicationQueryVariables>;
export const SeriesPostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SeriesPostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seriesSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seriesSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Series"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Series"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Series"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SeriesPostsByPublicationQuery, SeriesPostsByPublicationQueryVariables>;
export const SinglePostByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SinglePostByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFull"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFull"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readTimeInMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"responseCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasLatexInPost"}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"coAuthors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tableOfContents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disableComments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"25"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalReactions"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SinglePostByPublicationQuery, SinglePostByPublicationQueryVariables>;
export const SitemapDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sitemap"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postsCount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postsAfter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"staticPagesCount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"staticPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"staticPagesCount"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postsCount"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postsAfter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredSitemapPostFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredSitemapPostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<SitemapQuery, SitemapQueryVariables>;
export const MoreSitemapPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MoreSitemapPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postsCount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postsAfter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postsCount"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postsAfter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredSitemapPostFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredSitemapPostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<MoreSitemapPostsQuery, MoreSitemapPostsQueryVariables>;
export const SlugPostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SlugPostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}}]}}]}}]} as unknown as DocumentNode<SlugPostsByPublicationQuery, SlugPostsByPublicationQueryVariables>;
export const TagPostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TagPostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tagSlugs"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]} as unknown as DocumentNode<TagPostsByPublicationQuery, TagPostsByPublicationQueryVariables>;