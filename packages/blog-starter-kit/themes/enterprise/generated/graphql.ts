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
  ObjectId: { input: string; output: string; }
  TimeZone: { input: any; output: any; }
  URL: { input: any; output: any; }
};

export type AbsoluteTimeRange = {
  /**
   * The start date of the views.
   * The time range will include this date (using >=).
   *
   * Defaults to the unix epoch start (1970-01-01).
   */
  from?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * The end date of the views.
   * The time range will include this date (using <=).
   *
   * Defaults to the current date.
   */
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The input for accepting an invitation to join a documentation project. */
export type AcceptInviteToDocumentationProjectInput = {
  /** The invitation token to accept. */
  inviteToken: Scalars['String']['input'];
};

/** Response to accepting an invitation to join a documentation project. */
export type AcceptInviteToDocumentationProjectPayload = {
  __typename?: 'AcceptInviteToDocumentationProjectPayload';
  /** The documentation project that the user has been invited to. */
  project?: Maybe<DocumentationProject>;
  /** Signifies the success of the mutation. */
  success: Scalars['Boolean']['output'];
};

export type AcceptInviteToPublicationInput = {
  /** The invitation token to accept. */
  inviteToken: Scalars['String']['input'];
};

/** Response to accepting an invitation to join a publication. */
export type AcceptInviteToPublicationPayload = {
  __typename?: 'AcceptInviteToPublicationPayload';
  /** Signifies if the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Input to accept a role based invite. */
export type AcceptRoleBasedInviteInput = {
  /** Invite token of the role based invite. */
  inviteToken: Scalars['String']['input'];
};

/** Input to toggle role based invite links. */
export type AcceptRoleBasedInvitePayload = {
  __typename?: 'AcceptRoleBasedInvitePayload';
  /** Signifies if the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

export type AddCommentInput = {
  contentMarkdown: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
};

export type AddCommentPayload = {
  __typename?: 'AddCommentPayload';
  comment?: Maybe<Comment>;
};

export type AddCustomMdxComponentInput = {
  code: Scalars['String']['input'];
  componentId: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

export type AddCustomMdxComponentPayload = {
  __typename?: 'AddCustomMdxComponentPayload';
  project: DocumentationProject;
};

export type AddDocumentationProjectCustomDomainInput = {
  domain: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
  wwwDomain: Scalars['Boolean']['input'];
};

export type AddDocumentationProjectCustomDomainPayload = {
  __typename?: 'AddDocumentationProjectCustomDomainPayload';
  /**
   * Additional DNS entries required to verify the domain.
   * There are cases where additional records in the DNS config are required to successfully verify the domain.
   */
  dnsVerificationEntries: Array<DnsVerificationEntry>;
  project?: Maybe<DocumentationProject>;
  wwwRedirectDnsVerificationEntries: Array<DnsVerificationEntry>;
};

export type AddPostToSeriesInput = {
  /** The ID of the post to be added to the series. */
  postId: Scalars['ObjectId']['input'];
  /** The ID of the series to which the post is to be added. */
  seriesId: Scalars['ObjectId']['input'];
};

export type AddPostToSeriesPayload = {
  __typename?: 'AddPostToSeriesPayload';
  /** The series to which the post was added. */
  series?: Maybe<Series>;
};

export type AddReplyInput = {
  commentId: Scalars['ID']['input'];
  contentMarkdown: Scalars['String']['input'];
};

export type AddReplyPayload = {
  __typename?: 'AddReplyPayload';
  reply?: Maybe<Reply>;
};

/**
 * Contains the flag indicating if the audio blog feature is enabled or not.
 * User can enable or disable the audio blog feature from the publication settings.
 * Shows audio player on blogs if enabled.
 */
export type AudioBlogFeature = Feature & {
  __typename?: 'AudioBlogFeature';
  /** A flag indicating if the audio blog feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
  /** The voice type for the audio blog. */
  voiceType: AudioBlogVoiceType;
};

/** The voice type for the audio blog. */
export enum AudioBlogVoiceType {
  /** Enum for the female voice type of the audio blog. */
  Female = 'FEMALE',
  /** Enum for the male voice type of the audio blog. */
  Male = 'MALE'
}

/** Used when Audioblog feature is enabled. Contains URLs to the audioblog of the post. */
export type AudioUrls = {
  __typename?: 'AudioUrls';
  /** Female version of audio url of the post. */
  female?: Maybe<Scalars['String']['output']>;
  /** Male version of audio url of the post. */
  male?: Maybe<Scalars['String']['output']>;
};

/** The status of the backup i.e., success or failure. */
export enum BackupStatus {
  /** The backup failed. */
  Failed = 'failed',
  /** The backup was successful. */
  Success = 'success'
}

/** A badge that the user has earned. */
export type Badge = Node & {
  __typename?: 'Badge';
  /** The date the badge was earned. */
  dateAssigned?: Maybe<Scalars['DateTime']['output']>;
  /** The description of the badge. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the badge. */
  id: Scalars['ID']['output'];
  /** The image of the badge. */
  image: Scalars['String']['output'];
  /** Link to badge page on Hashnode. */
  infoURL?: Maybe<Scalars['String']['output']>;
  /** The name of the badge. */
  name: Scalars['String']['output'];
  /** A flag to determine if the badge is hidden. */
  suppressed?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Contains basic information about the beta feature.
 * A beta feature is a feature that is not yet released to all users.
 */
export type BetaFeature = Node & {
  __typename?: 'BetaFeature';
  /** The description of the beta feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** The date the beta feature was created. */
  enabled: Scalars['Boolean']['output'];
  /** The ID of the beta feature. */
  id: Scalars['ID']['output'];
  /** The key of the beta feature. */
  key: Scalars['String']['output'];
  /** The title of the beta feature. */
  title?: Maybe<Scalars['String']['output']>;
  /** The url of the beta feature. */
  url?: Maybe<Scalars['String']['output']>;
};

export type CancelScheduledDraftInput = {
  /** The Draft ID of the scheduled draft. */
  draftId: Scalars['ID']['input'];
};

export type CancelScheduledDraftPayload = {
  __typename?: 'CancelScheduledDraftPayload';
  /** Payload returned in response of cancel scheduled post mutation. */
  scheduledPost: ScheduledPost;
};

/** Input to change the role of a user in a publication. */
export type ChangePublicationMemberRoleInput = {
  /** The publication ID the user is a member of. */
  publicationId: Scalars['ID']['input'];
  /** The role of the user in the publication. */
  role: UserPublicationRole;
  /** The username of the user to change the role for. */
  username: Scalars['String']['input'];
};

/** Response to changing the role of a user in a publication. */
export type ChangePublicationMemberRolePayload = {
  __typename?: 'ChangePublicationMemberRolePayload';
  /** The updated publication member. */
  member: PublicationMember;
};

/** Input to change the privacy state of a user in a publication. */
export type ChangePublicationMemberVisibilityInput = {
  /**
   * The privacy state of the user in the publication.
   * PRIVATE members are not visible on the members page while PUBLIC members are visible.
   */
  privacyState: PublicationMemberPrivacyState;
  /** The publication ID the user is a member of. */
  publicationId: Scalars['ID']['input'];
  /** The username of the user to change the role for. */
  username: Scalars['String']['input'];
};

/** Response to changing the privacy state of a user in a publication. */
export type ChangePublicationMemberVisibilityPayload = {
  __typename?: 'ChangePublicationMemberVisibilityPayload';
  /** The updated publication member. */
  member: PublicationMember;
};

export type CheckCustomDomainAvailabilityInput = {
  domain: Scalars['String']['input'];
  withWWWRedirect: Scalars['Boolean']['input'];
};

export type CheckCustomDomainAvailabilityResult = {
  __typename?: 'CheckCustomDomainAvailabilityResult';
  domainAvailable: Scalars['Boolean']['output'];
};

export type CheckSubdomainAvailabilityResult = {
  __typename?: 'CheckSubdomainAvailabilityResult';
  subdomainAvailable: Scalars['Boolean']['output'];
};

/** Contains the flag indicating if the collaboration feature is enabled or not. */
export type CollaborationFeature = Feature & {
  __typename?: 'CollaborationFeature';
  /** A flag indicating if the collaboration feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

/**
 * Contains basic information about the comment.
 * A comment is a response to a post.
 */
export type Comment = Node & {
  __typename?: 'Comment';
  /** The author of the comment. */
  author: User;
  /** The content of the comment in markdown and html format. */
  content: Content;
  /** The date the comment was created. */
  dateAdded: Scalars['DateTime']['output'];
  /** The ID of the comment. */
  id: Scalars['ID']['output'];
  /** Total number of reactions on the comment by the authenticated user. User must be authenticated to use this field. */
  myTotalReactions: Scalars['Int']['output'];
  /** Returns a list of replies to the comment. */
  replies: CommentReplyConnection;
  /** A unique string identifying the comment. Used as element id in the DOM on hashnode blogs. */
  stamp?: Maybe<Scalars['String']['output']>;
  /** Total number of reactions on the comment. Reactions are hearts added to any comment. */
  totalReactions: Scalars['Int']['output'];
};


/**
 * Contains basic information about the comment.
 * A comment is a response to a post.
 */
export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

/**
 * Connection to get list of replies to a comment.
 * Returns a list of edges which contains the posts in publication and cursor to the last item of the previous page.
 */
export type CommentReplyConnection = Connection & {
  __typename?: 'CommentReplyConnection';
  /**
   * A list of edges containing nodes in the connection.
   * A node contains a reply to a comment.
   */
  edges: Array<CommentReplyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** An edge that contains a node of type reply and cursor to the node. */
export type CommentReplyEdge = Edge & {
  __typename?: 'CommentReplyEdge';
  /** A cursor to the last item of the previous page. */
  cursor: Scalars['String']['output'];
  /** The node containing a reply to a comment. */
  node: Reply;
};

/**
 * Connection to get list of top commenters. Contains a list of edges containing nodes.
 * Each node is a user who commented recently.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type CommenterUserConnection = Connection & {
  __typename?: 'CommenterUserConnection';
  /** A list of edges of commenters. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * Connection to get list of items.
 * Returns a list of edges which contains the items and cursor to the last item of the previous page.
 * This is a common interface for all connections.
 */
export type Connection = {
  /** A list of edges of items connection. */
  edges: Array<Edge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type Content = {
  __typename?: 'Content';
  /** The HTML version of the content. */
  html: Scalars['String']['output'];
  /** The Markdown version of the content. */
  markdown: Scalars['String']['output'];
  /** The text version from sanitized html content. HTML tags are stripped and only text is returned. */
  text: Scalars['String']['output'];
};

/** Two letter ISO 3166-1 alpha-2 country code. */
export enum CountryCodeAlpha2 {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Angola */
  Ao = 'AO',
  /** Antarctica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Saint Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei Darussalam */
  Bn = 'BN',
  /** Bolivia (Plurinational State of) */
  Bo = 'BO',
  /** Bonaire, Sint Eustatius and Saba */
  Bq = 'BQ',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos (Keeling) Islands */
  Cc = 'CC',
  /** Congo, Democratic Republic of the */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Côte d'Ivoire */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cabo Verde */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czechia */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands (Malvinas) */
  Fk = 'FK',
  /** Micronesia (Federated States of) */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom of Great Britain and Northern Ireland */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard Island and McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran (Islamic Republic of) */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** Korea (Democratic People's Republic of) */
  Kp = 'KP',
  /** Korea, Republic of */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Lao People's Democratic Republic */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova, Republic of */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Saint Martin (French part) */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** North Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Palestine, State of */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russian Federation */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** South Sudan */
  Ss = 'SS',
  /** Sao Tome and Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Sint Maarten (Dutch part) */
  Sx = 'SX',
  /** Syrian Arab Republic */
  Sy = 'SY',
  /** Eswatini */
  Sz = 'SZ',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan, Province of China */
  Tw = 'TW',
  /** Tanzania, United Republic of */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** United States of America */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Holy See */
  Va = 'VA',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Venezuela (Bolivarian Republic of) */
  Ve = 'VE',
  /** Virgin Islands (British) */
  Vg = 'VG',
  /** Virgin Islands (U.S.) */
  Vi = 'VI',
  /** Viet Nam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW',
  /** Unknown */
  Zz = 'ZZ'
}

/** Contains information about cover image options of the post. Like URL of the cover image, attribution, etc. */
export type CoverImageOptionsInput = {
  /** Information about the cover image attribution. */
  coverImageAttribution?: InputMaybe<Scalars['String']['input']>;
  /** The name of the cover image photographer, used when cover was chosen from unsplash. */
  coverImagePhotographer?: InputMaybe<Scalars['String']['input']>;
  /** The URL of the cover image. */
  coverImageURL?: InputMaybe<Scalars['String']['input']>;
  /** A flag to indicate if the cover attribution is hidden, used when cover was chosen from unsplash. */
  isCoverAttributionHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** A flag to indicate if the cover image is sticked to bottom. */
  stickCoverToBottom?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDocumentationApiReferenceInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type CreateDocumentationApiReferencePayload = {
  __typename?: 'CreateDocumentationApiReferencePayload';
  guide: DocumentationApiReference;
};

export type CreateDocumentationGuideInput = {
  name: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDocumentationGuidePayload = {
  __typename?: 'CreateDocumentationGuidePayload';
  guide: DocumentationGuide;
};

export type CreateDocumentationLinkInput = {
  guideSlug: Scalars['String']['input'];
  label: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
  url: Scalars['String']['input'];
  /**
   * The slug of the version the new link should be created in.
   *
   * Defaults to the default version slug.
   */
  versionSlug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDocumentationLinkPayload = {
  __typename?: 'CreateDocumentationLinkPayload';
  guide?: Maybe<DocumentationGuide>;
  link?: Maybe<DocumentationLink>;
};

export type CreateDocumentationPageDraftInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  guideSlug: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  /** The meta tags for the page. */
  metaTags?: InputMaybe<MetaTagsInput>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  projectId: Scalars['ID']['input'];
  /** The slug of the path used to generate the path. */
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /**
   * The slug of the version the new page should be created in.
   *
   * Defaults to the default version slug.
   */
  versionSlug?: InputMaybe<Scalars['String']['input']>;
  /** The visibility of the page. */
  visibility?: InputMaybe<DocumentationSidebarItemVisibility>;
};

export type CreateDocumentationPageDraftPayload = {
  __typename?: 'CreateDocumentationPageDraftPayload';
  guide?: Maybe<DocumentationGuide>;
  page?: Maybe<DocumentationPage>;
};

/** The input for creating a documentation preview page */
export type CreateDocumentationPreviewPageInput = {
  /** The content of the page */
  content?: InputMaybe<Scalars['String']['input']>;
  /** The description of the page */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The format of the page. Could be MDX or MD. */
  format?: InputMaybe<DocumentationPageFormat>;
  /** The ID of the page to create */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The label of the page on the sidebar */
  label: Scalars['String']['input'];
  /** The meta tags of the page */
  metaTags?: InputMaybe<MetaTagsInput>;
  /** The nested pages of the page */
  pages: Array<CreateDocumentationPreviewPageInput>;
  /** The slug of the page used to create the path */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The title of the page */
  title?: InputMaybe<Scalars['String']['input']>;
  /** The visibility of the page */
  visibility?: InputMaybe<DocumentationSidebarItemVisibility>;
};

export type CreateDocumentationProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  favIconUrl?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<DocumentationProjectLinksInput>;
  logoDarkThemeUrl?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  settings?: InputMaybe<DocumentationProjectSettingsInput>;
  subdomain: Scalars['String']['input'];
};

export type CreateDocumentationProjectPayload = {
  __typename?: 'CreateDocumentationProjectPayload';
  project: DocumentationProject;
};

export type CreateDocumentationSectionInput = {
  guideSlug: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  /** The slug of the section used to generate the path. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /**
   * The slug of the version the new section should be created in.
   *
   * Defaults to the default version slug.
   */
  versionSlug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDocumentationSectionPayload = {
  __typename?: 'CreateDocumentationSectionPayload';
  guide?: Maybe<DocumentationGuide>;
  section?: Maybe<DocumentationSection>;
};

export type CreateDraftInput = {
  /** Ids of the co-authors of the resulting draft. */
  coAuthors?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  /** Content of the resulting draft in markdown format. */
  contentMarkdown?: InputMaybe<Scalars['String']['input']>;
  /** Options for the cover image of the resulting draft. */
  coverImageOptions?: InputMaybe<CoverImageOptionsInput>;
  /** A flag to indicate if the comments are disabled for the resulting draft. */
  disableComments?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * The id of the user who owns the draft. When this field is supplied, the draft is created directly under that user's account.
   * Only applicable for team publications.
   */
  draftOwner?: InputMaybe<Scalars['ID']['input']>;
  /** Information about the meta tags added to the resulting draft, used for SEO purpose. */
  metaTags?: InputMaybe<MetaTagsInput>;
  /** The URL of the original article if the draft is imported from an external source. */
  originalArticleURL?: InputMaybe<Scalars['String']['input']>;
  /** The ID of publication the draft and resulting post belongs to. */
  publicationId: Scalars['ID']['input'];
  /**
   * Publish the draft on behalf of another user who is a member of the publication.
   *
   * Only applicable for team publications.
   */
  publishAs?: InputMaybe<Scalars['ObjectId']['input']>;
  /** Date when the resulting draft is published. */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Providing a seriesId will add the resulting draft to that series. */
  seriesId?: InputMaybe<Scalars['ObjectId']['input']>;
  /** Settings for the resulting draft like table of contents and newsletter activation. */
  settings?: InputMaybe<CreateDraftSettingsInput>;
  /** Slug of the resulting draft. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The subtitle of the resulting draft. */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags added to the resulting draft. */
  tags?: InputMaybe<Array<CreateDraftTagInput>>;
  /** The title of the resulting draft. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDraftPayload = {
  __typename?: 'CreateDraftPayload';
  /** The newly created draft */
  draft?: Maybe<Draft>;
};

export type CreateDraftSettingsInput = {
  /** Whether to send a newsletter for the resulting draft's post. */
  activateNewsletter?: InputMaybe<Scalars['Boolean']['input']>;
  /** A flag to indicate if the resulting draft should be delisted, used to hide the post created from the draft from public feed. */
  delist?: InputMaybe<Scalars['Boolean']['input']>;
  /** A flag to indicate if the resulting draft'S post should contain a table of content */
  enableTableOfContent?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flag to indicate if the slug is overridden by the user. */
  slugOverridden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDraftTagInput = {
  /**
   * A tag id that is referencing an existing tag.
   *
   * Either this or name and slug should be provided. If both are provided, the id will be used.
   */
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  /**
   * A name of a new tag to create.
   *
   * Either this and slug or id should be provided. If both are provided, the id will be used.
   */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * A slug of a new tag to create.
   *
   * Either this and name or id should be provided. If both are provided, the id will be used.
   */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRedirectionRuleInput = {
  destination: Scalars['URL']['input'];
  publicationId: Scalars['ID']['input'];
  source: Scalars['String']['input'];
  type: HttpRedirectionType;
};

export type CreateRedirectionRulePayload = {
  __typename?: 'CreateRedirectionRulePayload';
  redirectionRule: RedirectionRule;
};

/** Input to create a role based invite for a publication. */
export type CreateRoleBasedInviteForPublicationInput = {
  /** The capacity of how many members to be invited by the link. */
  capacity?: InputMaybe<Scalars['Int']['input']>;
  /** Boolean to enable unlimited capacity. */
  enableUnlimitedCapacity?: InputMaybe<Scalars['Boolean']['input']>;
  /** The expiry date of the invite. */
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Invite token set for the invitation */
  inviteToken?: InputMaybe<Scalars['String']['input']>;
  /** The publication ID to create the invite for. */
  publicationId: Scalars['ID']['input'];
  /** The role to assign to the user in the publication. */
  role: UserPublicationInviteRole;
};

/** Response to creating a role based invite for a publication. */
export type CreateRoleBasedInviteForPublicationPayload = {
  __typename?: 'CreateRoleBasedInviteForPublicationPayload';
  /** The created role based invite. */
  invite: RoleBasedInvite;
};

export type CreateSeriesInput = {
  /** The cover image of the series. */
  coverImage?: InputMaybe<Scalars['String']['input']>;
  /** The description of the series. Accepts markdown. */
  descriptionMarkdown?: InputMaybe<Scalars['String']['input']>;
  /** The name of the series. */
  name: Scalars['String']['input'];
  /** The id of the publication the series belongs to. */
  publicationId: Scalars['ID']['input'];
  /** The slug of the series. Used to access series page.  Example https://johndoe.com/series/series-slug */
  slug: Scalars['String']['input'];
  /** The sort order of the series, determines if the latest posts should appear first or last in series. */
  sortOrder?: InputMaybe<SortOrder>;
};

export type CreateSeriesPayload = {
  __typename?: 'CreateSeriesPayload';
  /** Returns the created series. */
  series: Series;
};

export type CreateWebhookInput = {
  events: Array<WebhookEvent>;
  publicationId: Scalars['ID']['input'];
  secret: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreateWebhookPayload = {
  __typename?: 'CreateWebhookPayload';
  webhook?: Maybe<Webhook>;
};

export type CustomCss = {
  __typename?: 'CustomCSS';
  /** Custom CSS that will be applied on the publication homepage. */
  home?: Maybe<Scalars['String']['output']>;
  /** The same as `home` but minified. */
  homeMinified?: Maybe<Scalars['String']['output']>;
  /** Custom CSS that will be applied on all posts of the publication. */
  post?: Maybe<Scalars['String']['output']>;
  /** The same as `post` but minified. */
  postMinified?: Maybe<Scalars['String']['output']>;
  /** Custom CSS that will be applied on all static pages of the publication. */
  static?: Maybe<Scalars['String']['output']>;
  /** The same as `static` but minified. */
  staticMinified?: Maybe<Scalars['String']['output']>;
};

export type CustomCssFeature = Feature & {
  __typename?: 'CustomCSSFeature';
  /** CSS that is not published yet. */
  draft?: Maybe<CustomCss>;
  /** A flag indicating if the custom CSS feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
  /** CSS that is live. */
  published?: Maybe<CustomCss>;
};

export enum CustomDomainStatus {
  Invalid = 'INVALID',
  Valid = 'VALID',
  Verifying = 'VERIFYING'
}

/** Contains the publication's dark mode preferences. */
export type DarkModePreferences = {
  __typename?: 'DarkModePreferences';
  /** A flag indicating if the dark mode is enabled for the publication. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The custom dark mode logo of the publication. */
  logo?: Maybe<Scalars['String']['output']>;
};

export enum DefaultDocsTheme {
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type DeleteCustomMdxComponentInput = {
  componentId: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

export type DeleteCustomMdxComponentPayload = {
  __typename?: 'DeleteCustomMdxComponentPayload';
  project: DocumentationProject;
};

/** Input to delete a role based invite. */
export type DeleteRoleBasedInviteInput = {
  /** The ID of the role based invite. */
  inviteId: Scalars['ID']['input'];
  publicationId: Scalars['ID']['input'];
};

/** Response to deleting a role based invite. */
export type DeleteRoleBasedInvitePayload = {
  __typename?: 'DeleteRoleBasedInvitePayload';
  /** Deleted invite. */
  invite: RoleBasedInvite;
};

export type DeleteWebhookPayload = {
  __typename?: 'DeleteWebhookPayload';
  webhook?: Maybe<Webhook>;
};

export enum DeviceType {
  Desktop = 'DESKTOP',
  Laptop = 'LAPTOP',
  Mobile = 'MOBILE',
  Tablet = 'TABLET'
}

/** The input for disabling AI search for a documentation project */
export type DisableDocumentationProjectAiSearchInput = {
  /** The ID of the documentation project */
  projectId: Scalars['ID']['input'];
};

/** The response to disabling AI search for a documentation project */
export type DisableDocumentationProjectAiSearchPayload = {
  __typename?: 'DisableDocumentationProjectAISearchPayload';
  project?: Maybe<DocumentationProject>;
};

export type DisableDocumentationProjectHeadlessCmsInput = {
  projectId: Scalars['ID']['input'];
};

export type DisableDocumentationProjectHeadlessCmsPayload = {
  __typename?: 'DisableDocumentationProjectHeadlessCmsPayload';
  project?: Maybe<DocumentationProject>;
};

export type DnsVerificationEntry = {
  __typename?: 'DnsVerificationEntry';
  name: Scalars['String']['output'];
  type: DnsVerificationType;
  value: Scalars['String']['output'];
};

export enum DnsVerificationType {
  ARecord = 'A_RECORD',
  CnameRecord = 'CNAME_RECORD',
  TxtRecord = 'TXT_RECORD'
}

export enum DocsAnalyticsDimension {
  ApiReferenceGuide = 'API_REFERENCE_GUIDE',
  Browser = 'BROWSER',
  Country = 'COUNTRY',
  DeviceType = 'DEVICE_TYPE',
  DocumentationGuide = 'DOCUMENTATION_GUIDE',
  OperatingSystem = 'OPERATING_SYSTEM',
  Page = 'PAGE',
  Path = 'PATH',
  ReferrerHost = 'REFERRER_HOST'
}

/**
 * Contains basic information about the docs custom page.
 * Docs custom pages are pages that can be written in mdx and can be added to docs. It can be used for changelog or other such requirements.
 */
export type DocsCustomPage = Node & {
  __typename?: 'DocsCustomPage';
  /** Content of the docs custom page. Contains mdx version of the docs custom page's content. */
  content: DocumentationPageContent;
  /** The ID of the docs custom page. */
  id: Scalars['ID']['output'];
  /** Last modified date of the docs custom page. */
  lastModified: Scalars['DateTime']['output'];
  /** Information about the docs custom page's Open Graph metadata i.e. image. */
  ogMetaData?: Maybe<OpenGraphMetaData>;
  /** Information about the docs custom page's SEO metadata i.e. title and description */
  seo?: Maybe<Seo>;
  /** the slug of the docs custom page. Used to access docs custom page. Example `https://mydocs.com/my-page`. */
  slug: Scalars['String']['output'];
  /** The title of the docs custom page. */
  title: Scalars['String']['output'];
  /** Visibility of the docs custom page. */
  visibility: DocumentationSidebarItemVisibility;
};

export type DocsCustomPageConnection = PageConnection & {
  __typename?: 'DocsCustomPageConnection';
  /** A list docs custom pages */
  nodes: Array<DocsCustomPage>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
  /** Total number of docs custom pages. */
  totalDocuments: Scalars['Int']['output'];
};

export enum DocsGitHubActivityDeploymentType {
  /** The deployment is a preview deployment. */
  Preview = 'PREVIEW',
  /** The deployment is a production deployment. */
  Production = 'PRODUCTION'
}

export type DocsProjectInvitedMembers = {
  __typename?: 'DocsProjectInvitedMembers';
  email: Scalars['String']['output'];
  role: DocumentationMemberRole;
  /** Invited Hashnode user, returns null if the user is not a Hashnode user. */
  user?: Maybe<User>;
};

export type DocsViews = {
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

export type DocsVisitors = {
  id: Scalars['ID']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

export type DocumentationApiReference = IGuide & {
  __typename?: 'DocumentationApiReference';
  /** The base64 encoded gzip compressed string of the parsed OpenAPI Definition of the API Reference. */
  definition: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /**
   * A guide can be locked if the subscription doesn't cover to having this guide.
   *
   * A locked guide is readonly. It can only be removed or edited after subscribing.
   */
  isLocked: Scalars['Boolean']['output'];
  lastModified: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  /** OG meta-data of the page. Contains image url used in open graph meta tags. */
  ogMetaData?: Maybe<OpenGraphMetaData>;
  /** The provider of the guide. */
  provider: GuideProvider;
  /** URL of the published api reference. */
  publishedUrl?: Maybe<Scalars['String']['output']>;
  /** SEO information of the page. Contains title and description used in meta tags. */
  seo?: Maybe<Seo>;
  slug: Scalars['String']['output'];
  status: DocumentationGuideItemStatus;
  /** URL of the OpenAPI definition used by the default version of this guide. */
  url: Scalars['String']['output'];
  /** The ID of the default version. */
  versionId?: Maybe<Scalars['String']['output']>;
};

export type DocumentationGuide = IGuide & {
  __typename?: 'DocumentationGuide';
  hasChanges: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /**
   * A guide can be locked if the subscription doesn't cover to having this guide.
   *
   * A locked guide is readonly. It can only be removed or edited after subscribing.
   */
  isLocked: Scalars['Boolean']['output'];
  lastModified: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  /** OG meta-data of the page. Contains image url used in open graph meta tags. */
  ogMetaData?: Maybe<OpenGraphMetaData>;
  /** Page of any version of this guide. */
  page?: Maybe<DocumentationPage>;
  provider: GuideProvider;
  /** Only published page of any version of this guide. */
  publishedPage?: Maybe<DocumentationPage>;
  /** Only published sidebar items of the default version of this guide. */
  publishedSidebarItems: Array<DocumentationSidebarItem>;
  /**
   * Only published page of any version of this guide. The path may include the version slug.
   *
   * Takes redirects into account and may return the page that the requested page redirects to.
   *
   * If the path is only a version slug, it will redirect to the first page of that version.
   */
  redirectedPublishedPage?: Maybe<DocumentationPage>;
  /** SEO information of the page. Contains title and description used in meta tags. */
  seo?: Maybe<Seo>;
  /** Sidebar items of the default version of this guide. */
  sidebarItems: Array<DocumentationSidebarItem>;
  slug: Scalars['String']['output'];
  status: DocumentationGuideItemStatus;
  /**
   * URL of the published guide.
   *
   * Example: `https://example.com/my-guide-slug`
   */
  url?: Maybe<Scalars['String']['output']>;
  /** The ID of the default version. */
  versionId?: Maybe<Scalars['String']['output']>;
};


export type DocumentationGuidePageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


export type DocumentationGuidePublishedPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


export type DocumentationGuideRedirectedPublishedPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentationGuideItem = DocumentationApiReference | DocumentationGuide;

export enum DocumentationGuideItemStatus {
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

/** Visibility options for documentation guides. */
export enum DocumentationGuideVisibility {
  /** Not visible in public listings. Only visible to users with access to the project. */
  Hidden = 'HIDDEN',
  /** Visible to all users. */
  Public = 'PUBLIC'
}

export type DocumentationLink = IDocumentationSidebarItem & {
  __typename?: 'DocumentationLink';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  status: DocumentationSidebarItemStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  visibility: DocumentationSidebarItemVisibility;
};

export enum DocumentationMemberRole {
  Admin = 'ADMIN',
  Owner = 'OWNER'
}

/** A column for the navigation. Used in the footer */
export type DocumentationNavbarColumn = Node & {
  __typename?: 'DocumentationNavbarColumn';
  /** The date the column was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the column. */
  id: Scalars['ID']['output'];
  /** The navigation items in the column. */
  items: Array<DocumentationNavbarItem>;
  /** The label of the column. */
  label: Scalars['String']['output'];
  /** The date the column was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentationNavbarItem = DocumentationNavbarItemGuide | DocumentationNavbarItemLink | DocumentationNavbarItemPage;

/** A navigation item pointing  to a guide. */
export type DocumentationNavbarItemGuide = Node & {
  __typename?: 'DocumentationNavbarItemGuide';
  /** The date the item was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The guide the item points to. */
  guide: DocumentationGuideItem;
  /** The ID of the item. */
  id: Scalars['ID']['output'];
  /** The label of the item. */
  label: Scalars['String']['output'];
  /** The date the item was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** A navigation item pointing to an external URL. */
export type DocumentationNavbarItemLink = Node & {
  __typename?: 'DocumentationNavbarItemLink';
  /** The date the item was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the item. */
  id: Scalars['ID']['output'];
  /** The label of the item. */
  label: Scalars['String']['output'];
  /** Indicates if the link should open in a new tab. */
  openInNewTab: Scalars['Boolean']['output'];
  /** The date the item was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The URL the item points to. */
  url: Scalars['String']['output'];
};

/** A navigation item pointing to an custom page */
export type DocumentationNavbarItemPage = Node & {
  __typename?: 'DocumentationNavbarItemPage';
  /** The date the item was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the item. */
  id: Scalars['ID']['output'];
  /** The label of the item. */
  label: Scalars['String']['output'];
  /** Indicates if the page should open in a new tab. */
  openInNewTab: Scalars['Boolean']['output'];
  /** The page this item points to. */
  page: DocsCustomPage;
  /** The date the item was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentationPage = {
  __typename?: 'DocumentationPage';
  content: DocumentationPageContent;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  draft: DocumentationPageDraft;
  format: DocumentationPageFormat;
  guideSlug: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** OG meta-data of the page. Contains image url used in open graph meta tags. */
  ogMetaData?: Maybe<OpenGraphMetaData>;
  path: Scalars['String']['output'];
  /** SEO information of the page. Contains title and description used in meta tags. */
  seo?: Maybe<Seo>;
  status: DocumentationSidebarItemStatus;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * URL of the published page.
   *
   * Returns `null` if the page is not published.
   */
  url?: Maybe<Scalars['String']['output']>;
  visibility: DocumentationSidebarItemVisibility;
};

export type DocumentationPageContent = {
  __typename?: 'DocumentationPageContent';
  md?: Maybe<Scalars['String']['output']>;
  mdx?: Maybe<Scalars['String']['output']>;
};

export type DocumentationPageDraft = {
  __typename?: 'DocumentationPageDraft';
  content: DocumentationPageContent;
  description?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export enum DocumentationPageFormat {
  Md = 'MD',
  Mdx = 'MDX'
}

export type DocumentationProject = Node & {
  __typename?: 'DocumentationProject';
  ai?: Maybe<DocumentationProjectAiPreference>;
  analytics: DocumentationProjectAnalytics;
  appearance: DocumentationProjectAppearance;
  createdAt: Scalars['DateTime']['output'];
  /** Returns a custom page with the given slug. */
  customPage?: Maybe<DocsCustomPage>;
  /** Returns a list of custom pages belonging to the project. */
  customPages: DocsCustomPageConnection;
  defaultGuide?: Maybe<DocumentationGuideItem>;
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<DocumentationProjectDomainSettings>;
  /** Object containing information about beta features enabled for the documentation project. */
  features: DocumentationProjectFeatures;
  guide?: Maybe<DocumentationGuideItem>;
  guides: Array<DocumentationGuideItem>;
  id: Scalars['ID']['output'];
  integrations?: Maybe<DocumentationProjectIntegrations>;
  links: DocumentationProjectLinks;
  /** @deprecated Use membersV2 */
  members: Array<DocumentationProjectMember>;
  membersV2: DocumentationProjectMemberConnection;
  name: Scalars['String']['output'];
  /** The navigation configuration for the documentation project. */
  navigation: DocumentationProjectNavigation;
  /** The Owner of the documentation project. */
  owner: User;
  /** Details of publication invites. Returns null if publication is not a team publication. */
  pendingInvites: DocumentationProjectPendingInviteConnection;
  publishedGuide?: Maybe<DocumentationGuideItem>;
  publishedGuides: Array<DocumentationGuideItem>;
  /** A user search to find users with a specific status */
  searchUsers: DocumentationProjectSearchUserConnection;
  settings: DocumentationProjectSettings;
  subscription?: Maybe<DocumentationProjectSubscription>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** URL of the documentation project. */
  url: Scalars['String']['output'];
};


export type DocumentationProjectCustomPageArgs = {
  slug: Scalars['String']['input'];
};


export type DocumentationProjectCustomPagesArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


export type DocumentationProjectGuideArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type DocumentationProjectMembersV2Args = {
  filter?: InputMaybe<DocumentationProjectMemberConnectionFilter>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


export type DocumentationProjectPendingInvitesArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


export type DocumentationProjectPublishedGuideArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type DocumentationProjectSearchUsersArgs = {
  input: DocumentationProjectSearchUsersInput;
};

export type DocumentationProjectAiPreference = {
  __typename?: 'DocumentationProjectAIPreference';
  /** The prompts for the documentation project. These prompts are shown to the user when AI Search chatbot is opened. */
  prompts: Array<DocumentationProjectAiPrompt>;
  /** The settings for the AI feature. */
  settings: DocumentationProjectAiSettings;
};

export type DocumentationProjectAiPrompt = {
  __typename?: 'DocumentationProjectAIPrompt';
  /** The date the prompt was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the prompt. */
  id: Scalars['ID']['output'];
  /** The prompt text. */
  prompt: Scalars['String']['output'];
};

export type DocumentationProjectAiSettings = {
  __typename?: 'DocumentationProjectAISettings';
  /** A flag to indicate if the AI search feature is enabled. */
  isSearchEnabled: Scalars['Boolean']['output'];
};

export type DocumentationProjectAnalytics = {
  __typename?: 'DocumentationProjectAnalytics';
  views?: Maybe<ProjectViewsConnection>;
  visitors: ProjectVisitorsConnection;
};


export type DocumentationProjectAnalyticsViewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectViewsFilter>;
  first: Scalars['Int']['input'];
  groupBy?: InputMaybe<ProjectViewsGroupBy>;
  options?: InputMaybe<ProjectViewsOptions>;
  sortBy?: InputMaybe<ProjectViewsSortBy>;
};


export type DocumentationProjectAnalyticsVisitorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectVisitorsFilter>;
  first: Scalars['Int']['input'];
  groupBy?: InputMaybe<ProjectVisitorsGroupBy>;
  options?: InputMaybe<ProjectVisitorsOptions>;
};

export type DocumentationProjectAppearance = {
  __typename?: 'DocumentationProjectAppearance';
  customScript?: Maybe<Scalars['String']['output']>;
  defaultDocsTheme: DefaultDocsTheme;
  favIconUrl?: Maybe<Scalars['String']['output']>;
  getStarted?: Maybe<DocumentationProjectGetStarted>;
  logoDarkThemeUrl?: Maybe<Scalars['String']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  primaryColor?: Maybe<Scalars['String']['output']>;
};

export type DocumentationProjectAppearanceInput = {
  customScript?: InputMaybe<Scalars['String']['input']>;
  defaultDocsTheme?: InputMaybe<DefaultDocsTheme>;
  favIconUrl?: InputMaybe<Scalars['String']['input']>;
  getStarted?: InputMaybe<DocumentationProjectGetStartedInput>;
  logoDarkThemeUrl?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentationProjectCustomComponent = Node & {
  __typename?: 'DocumentationProjectCustomComponent';
  /** The code of the custom component. */
  code: Scalars['String']['output'];
  /** componentId, can be embedded as %%[componentId] in the docs */
  componentId: Scalars['String']['output'];
  /** The unique identifier of the custom component */
  id: Scalars['ID']['output'];
  /** The transpiled code of the custom component. */
  transpiledCode: Scalars['String']['output'];
};

export type DocumentationProjectCustomDomain = {
  __typename?: 'DocumentationProjectCustomDomain';
  domain: Scalars['String']['output'];
  status: CustomDomainStatus;
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
  wwwDomain?: Maybe<DocumentationProjectCustomWwwDomain>;
};

export type DocumentationProjectCustomWwwDomain = {
  __typename?: 'DocumentationProjectCustomWwwDomain';
  status: CustomDomainStatus;
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentationProjectDomainSettings = {
  __typename?: 'DocumentationProjectDomainSettings';
  customDomain?: Maybe<DocumentationProjectCustomDomain>;
  hashnodeSubDomain: Scalars['String']['output'];
};

/** Contains the documentation project's beta features. */
export type DocumentationProjectFeatures = {
  __typename?: 'DocumentationProjectFeatures';
  /** Collaboration feature for the docs project which enables collaborative editing in the page editor. */
  collaboration: CollaborationFeature;
  /** GitHub sync feature for the docs project which enables syncing the docs project with a GitHub repository. */
  ghSync: GitHubSyncFeature;
  /** Versioning feature for the docs project which enables creating different versions of docs guides. */
  versioning: VersioningFeature;
};

export type DocumentationProjectGetStarted = {
  __typename?: 'DocumentationProjectGetStarted';
  label: Scalars['String']['output'];
  url: Scalars['URL']['output'];
};

export type DocumentationProjectGetStartedInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['URL']['input']>;
};

export type DocumentationProjectIntegrations = {
  __typename?: 'DocumentationProjectIntegrations';
  /** FB Pixel ID for integration with Facebook Pixel. */
  fbPixelID?: Maybe<Scalars['String']['output']>;
  /** Google Tag Manager ID for integration with Google Tag Manager. */
  gTagManagerID?: Maybe<Scalars['String']['output']>;
  /** Google Analytics Tracking ID for integration with Google Analytics. */
  gaTrackingID?: Maybe<Scalars['String']['output']>;
  /** Hotjar Site ID for integration with Hotjar. */
  hotjarSiteID?: Maybe<Scalars['String']['output']>;
  /** Intercom ID for integration with Intercom */
  intercomID?: Maybe<Scalars['String']['output']>;
  /** Koala Public Key for integration with Koala. */
  koalaPublicKey?: Maybe<Scalars['String']['output']>;
  /** The meta tags associated with the documentation project. */
  metaTags?: Maybe<Scalars['String']['output']>;
  /** MS Clarity ID for integration with Microsoft Clarity. */
  msClarityID?: Maybe<Scalars['String']['output']>;
};

export type DocumentationProjectIntegrationsInput = {
  fbPixelID?: InputMaybe<Scalars['String']['input']>;
  gTagManagerID?: InputMaybe<Scalars['String']['input']>;
  gaTrackingID?: InputMaybe<Scalars['String']['input']>;
  hotjarSiteID?: InputMaybe<Scalars['String']['input']>;
  intercomID?: InputMaybe<Scalars['String']['input']>;
  koalaPublicKey?: InputMaybe<Scalars['String']['input']>;
  metaTags?: InputMaybe<Scalars['String']['input']>;
  msClarityID?: InputMaybe<Scalars['String']['input']>;
};

/** Contains the pending invite information. */
export type DocumentationProjectInvite = Node & {
  __typename?: 'DocumentationProjectInvite';
  /** The ID of the pending invite. */
  id: Scalars['ID']['output'];
  /** The role assigned to the user in the publication. */
  role: DocumentationMemberRole;
  /** Invited Hashnode user, returns null if the user is not a Hashnode user. */
  user: User;
};

export type DocumentationProjectLinks = {
  __typename?: 'DocumentationProjectLinks';
  /** Bluesky URL of the documentation project. */
  bluesky?: Maybe<Scalars['String']['output']>;
  /** Daily.dev URL of the documentation project. */
  dailydev?: Maybe<Scalars['String']['output']>;
  /** GitHub URL of the documentation project. */
  github?: Maybe<Scalars['String']['output']>;
  /** The GitHub repository of the documentation project. */
  githubRepository?: Maybe<Scalars['String']['output']>;
  /** Hashnode profile of author of the documentation project. */
  hashnode?: Maybe<Scalars['String']['output']>;
  /** Instagram URL of the documentation project. */
  instagram?: Maybe<Scalars['String']['output']>;
  /** LinkedIn URL of the documentation project. */
  linkedin?: Maybe<Scalars['String']['output']>;
  /** Mastodon URL of the documentation project. */
  mastodon?: Maybe<Scalars['String']['output']>;
  /** Twitter URL of the documentation project. */
  twitter?: Maybe<Scalars['String']['output']>;
  /** Website URL of the documentation project. */
  website?: Maybe<Scalars['String']['output']>;
  /** YouTube URL of the documentation project. */
  youtube?: Maybe<Scalars['String']['output']>;
};

export type DocumentationProjectLinksInput = {
  bluesky?: InputMaybe<Scalars['String']['input']>;
  dailydev?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  githubRepository?: InputMaybe<Scalars['String']['input']>;
  hashnode?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  mastodon?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentationProjectMember = {
  __typename?: 'DocumentationProjectMember';
  /** The role of the member in the documentation project. */
  role: DocumentationMemberRole;
  /** The user who is a member of the documentation project. */
  user: User;
};

export type DocumentationProjectMemberConnection = PageConnection & {
  __typename?: 'DocumentationProjectMemberConnection';
  /** A list of members. */
  nodes: Array<DocumentationProjectMemberV2>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
  /** Total number of nodes available i.e. number of members. */
  totalDocuments: Scalars['Int']['output'];
};

/** The filter for the documentation member connection. */
export type DocumentationProjectMemberConnectionFilter = {
  /** Search filter can be used to filter members by their username or email. */
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentationProjectMemberV2 = Node & {
  __typename?: 'DocumentationProjectMemberV2';
  /** The ID of the member. */
  id: Scalars['ID']['output'];
  /** The role of the member in the documentation project. */
  role: DocumentationMemberRole;
  /** The user who is a member of the documentation project. */
  user: User;
};

/** Contains the header and footer navigation for the documentation project. */
export type DocumentationProjectNavigation = {
  __typename?: 'DocumentationProjectNavigation';
  /** The columns in the footer navigation. */
  footer: Array<DocumentationNavbarColumn>;
  /** The items in the header navigation. */
  header: Array<DocumentationNavbarItem>;
};

/** A connection for the user search result. */
export type DocumentationProjectPendingInviteConnection = PageConnection & {
  __typename?: 'DocumentationProjectPendingInviteConnection';
  /** A list of invites */
  nodes: Array<DocumentationProjectInvite>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
  /** The total number of invites. */
  totalDocuments: Scalars['Int']['output'];
};

export enum DocumentationProjectProductName {
  Enterprise = 'ENTERPRISE',
  Startup = 'STARTUP'
}

/** A connection for the user search result. */
export type DocumentationProjectSearchUserConnection = PageConnection & {
  __typename?: 'DocumentationProjectSearchUserConnection';
  /** The edges containing the user and the status of the user. */
  edges: Array<DocumentationProjectSearchUserEdge>;
  /** A list user nodes. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
  /** Total number of nodes available i.e. number of user search results. */
  totalDocuments: Scalars['Int']['output'];
};

export type DocumentationProjectSearchUserEdge = PageEdge & {
  __typename?: 'DocumentationProjectSearchUserEdge';
  node: User;
  status: UserInviteStatus;
};

export type DocumentationProjectSearchUsersInput = {
  /** The page number that should be returned. */
  page: Scalars['Int']['input'];
  /** The number of users to return on a single page. */
  pageSize: Scalars['Int']['input'];
  searchTerm: Scalars['String']['input'];
  status: UserInviteStatus;
};

export type DocumentationProjectSettings = {
  __typename?: 'DocumentationProjectSettings';
  isHashnodeLoginAllowed: Scalars['Boolean']['output'];
  /** A flag to indicate if the documentation project is using Headless CMS. */
  isHeadless: Scalars['Boolean']['output'];
  isRobotsAllowed: Scalars['Boolean']['output'];
};

export type DocumentationProjectSettingsInput = {
  allowHashnodeLogin?: InputMaybe<Scalars['Boolean']['input']>;
  allowRobots?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentationProjectSubscription = {
  __typename?: 'DocumentationProjectSubscription';
  maxSeats: Scalars['Int']['output'];
  nextBillingCycle?: Maybe<Scalars['DateTime']['output']>;
  productName: DocumentationProjectProductName;
  status: DocumentationProjectSubscriptionStatus;
};

export enum DocumentationProjectSubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  PastDue = 'PAST_DUE',
  Unpaid = 'UNPAID'
}

export type DocumentationSection = IDocumentationNestableSidebarItem & IDocumentationSidebarItem & {
  __typename?: 'DocumentationSection';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  pages: Array<DocumentationSidebarItemPage>;
  path: Scalars['String']['output'];
  status: DocumentationSidebarItemStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  visibility: DocumentationSidebarItemVisibility;
};

export type DocumentationSidebarItem = DocumentationLink | DocumentationSection | DocumentationSidebarItemPage;

export type DocumentationSidebarItemPage = IDocumentationNestableSidebarItem & IDocumentationSidebarItem & {
  __typename?: 'DocumentationSidebarItemPage';
  createdAt: Scalars['DateTime']['output'];
  hasChanges: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  pages: Array<DocumentationSidebarItemPage>;
  path: Scalars['String']['output'];
  status: DocumentationSidebarItemStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * URL of the published page.
   *
   * Returns `null` if the page is not published.
   */
  url?: Maybe<Scalars['String']['output']>;
  visibility: DocumentationSidebarItemVisibility;
};

export enum DocumentationSidebarItemStatus {
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

export enum DocumentationSidebarItemVisibility {
  Hidden = 'HIDDEN',
  Public = 'PUBLIC'
}

/** Contains the publication's domain information. */
export type DomainInfo = {
  __typename?: 'DomainInfo';
  /** The domain of the publication. */
  domain?: Maybe<DomainStatus>;
  /**
   * The subdomain of the publication on hashnode.dev.
   *
   * It will redirect to you custom domain if it is present and ready.
   */
  hashnodeSubdomain?: Maybe<Scalars['String']['output']>;
  /** The www prefixed domain of the publication. Says if redirect to www domain is configured. */
  wwwPrefixedDomain?: Maybe<DomainStatus>;
};

/** Contains the publication's domain status. */
export type DomainStatus = {
  __typename?: 'DomainStatus';
  /** The host of the publication domain. */
  host: Scalars['String']['output'];
  /** A flag indicating if the publication domain is ready. */
  ready: Scalars['Boolean']['output'];
  /** A flag indicating the status of a publication domain */
  status: CustomDomainStatus;
  /**
   * A timestamp indicating when the domain was verified.
   * It is only present if the domain is verified.
   */
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * Contains basic information about the draft.
 * A draft is a post that is not published yet.
 */
export type Draft = Node & {
  __typename?: 'Draft';
  /** The author of the draft. */
  author: User;
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /**
   * Returns the user details of the co-authors of the post.
   *
   * Only available for team publications.
   */
  coAuthors?: Maybe<Array<User>>;
  /** Content of the draft in HTML and markdown */
  content?: Maybe<Content>;
  /** The cover image preference of the draft. Contains cover image URL and other details. */
  coverImage?: Maybe<DraftCoverImage>;
  /**
   * The date the draft was updated.
   * @deprecated Use updatedAt instead. Will be removed on 26/12/2023.
   */
  dateUpdated: Scalars['DateTime']['output'];
  /** Draft feature-related fields. */
  features: DraftFeatures;
  /** The ID of the draft. */
  id: Scalars['ID']['output'];
  /**
   * Whether or not the draft has been submitted for review.
   *
   * Only applicable to drafts in team publications.
   */
  isSubmittedForReview?: Maybe<Scalars['Boolean']['output']>;
  /** Information about the last backup of the draft. */
  lastBackup?: Maybe<DraftBackup>;
  /** The date the draft last failed to back up. */
  lastFailedBackupAt?: Maybe<Scalars['DateTime']['output']>;
  /** The date the draft was last successfully backed up. */
  lastSuccessfulBackupAt?: Maybe<Scalars['DateTime']['output']>;
  /** OG meta-data of the draft. Contains image url used in open graph meta tags. */
  ogMetaData?: Maybe<OpenGraphMetaData>;
  /** The publication the draft belongs to. */
  publication?: Maybe<Publication>;
  publishAs?: Maybe<User>;
  /** Returns the published post when the draft is published, returns null otherwise */
  publishedPost?: Maybe<Post>;
  readTimeInMinutes: Scalars['Int']['output'];
  /** The date the draft is scheduled to be published. */
  scheduledDate?: Maybe<Scalars['DateTime']['output']>;
  /** SEO information of the draft. Contains title and description used in meta tags. */
  seo?: Maybe<Seo>;
  /** Information of the series the draft belongs to. */
  series?: Maybe<Series>;
  settings: DraftSettings;
  slug: Scalars['String']['output'];
  /** The subtitle of the draft. It would become the subtitle of the post when published. */
  subtitle?: Maybe<Scalars['String']['output']>;
  /**
   * Returns list of tags added to the draft. Contains tag id, name, slug, etc.
   * @deprecated Use tagsV2 instead. Will be removed on 26/02/2024.
   */
  tags: Array<Tag>;
  tagsV2: Array<DraftTag>;
  /** The title of the draft. It would become the title of the post when published. */
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DraftBackup = {
  __typename?: 'DraftBackup';
  /** The date the backup was created. */
  at?: Maybe<Scalars['DateTime']['output']>;
  /** The status of the backup i.e., success or failure. */
  status?: Maybe<BackupStatus>;
};

/**
 * Contains basic information about a Tag within a Draft.
 * A tag in a draft is a tag that is not published yet.
 */
export type DraftBaseTag = {
  __typename?: 'DraftBaseTag';
  /** The name of the tag. Shown in tag page. */
  name: Scalars['String']['output'];
  /** The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql */
  slug: Scalars['String']['output'];
};

/**
 * Connection to get list of drafts.
 * Returns a list of edges which contains the draft and cursor to the last item of the previous page.
 */
export type DraftConnection = Connection & {
  __typename?: 'DraftConnection';
  /** A list of edges of drafts connection. */
  edges: Array<DraftEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** Contains information about the cover image of the draft. */
export type DraftCoverImage = {
  __typename?: 'DraftCoverImage';
  /** Provides attribution information for the cover image, if available. */
  attribution?: Maybe<Scalars['String']['output']>;
  /** True if the image attribution should be hidden. */
  isAttributionHidden: Scalars['Boolean']['output'];
  /** The name of the photographer who captured the cover image. */
  photographer?: Maybe<Scalars['String']['output']>;
  /** The URL of the cover image. */
  url: Scalars['String']['output'];
};

/** An edge that contains a node of type draft and cursor to the node. */
export type DraftEdge = Edge & {
  __typename?: 'DraftEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** A node in the connection containing a draft. */
  node: Draft;
};

export type DraftFeatures = {
  __typename?: 'DraftFeatures';
  tableOfContents: TableOfContentsFeature;
};

export type DraftRevision = Node & {
  __typename?: 'DraftRevision';
  /** The name of the user who created the revision. */
  authorName: Scalars['String']['output'];
  /** The content of the draft revision. */
  content: Content;
  /** The time the revision has been created. */
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the draft revision. */
  id: Scalars['ID']['output'];
};

export type DraftRevisionEdge = Edge & {
  __typename?: 'DraftRevisionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** A node in the connection containing a draft revision. */
  node: DraftRevision;
};

export type DraftSettings = {
  __typename?: 'DraftSettings';
  /** A flag to indicate if the comments are disabled for the post. */
  disableComments: Scalars['Boolean']['output'];
  /** Whether or not the post is hidden from the Hashnode community. */
  isDelisted: Scalars['Boolean']['output'];
  /** A flag to indicate if the cover image is shown below title of the post. Default position of cover is top of title. */
  stickCoverToBottom: Scalars['Boolean']['output'];
};

export type DraftTag = DraftBaseTag | Tag;

/**
 * An edge that contains a node and cursor to the node.
 * This is a common interface for all edges.
 */
export type Edge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** A node in the connection. */
  node: Node;
};

/** The input for the email import acknowledgement mutation. */
export type EmailCurrentImport = {
  __typename?: 'EmailCurrentImport';
  /** The number of subscribers that have attempted to import */
  attemptedToImport?: Maybe<Scalars['Int']['output']>;
  /** The filename of the csv file containing emails */
  filename?: Maybe<Scalars['String']['output']>;
  /** The date the import started */
  importStartedAt: Scalars['DateTime']['output'];
  /** The status of the import */
  status: EmailImportStatus;
  /** The number of subscribers that have been successfully imported */
  successfullyImported?: Maybe<Scalars['Int']['output']>;
};

/** Contains information about the email import. */
export type EmailImport = {
  __typename?: 'EmailImport';
  /** Contains information about the current import example if it is in progress or has finished, date started, etc */
  currentImport?: Maybe<EmailCurrentImport>;
};

/** The status of the email import. */
export enum EmailImportStatus {
  /** There was an error during the import. */
  Failed = 'FAILED',
  /** The import has been acknowledged by the user. */
  Finished = 'FINISHED',
  /** Import has been initialized but is not yet in progress. */
  Initialized = 'INITIALIZED',
  /** Import is in progress. */
  InProgress = 'IN_PROGRESS',
  /** Import has to be reviewed by Hashnode. It is not yet reviewed. */
  InReview = 'IN_REVIEW',
  /** The has been rejected. Nothing has been imported. */
  Rejected = 'REJECTED',
  /** Import was successful. New emails have been imported. */
  Success = 'SUCCESS'
}

/** User's email notification preferences. */
export type EmailNotificationPreferences = {
  __typename?: 'EmailNotificationPreferences';
  /** Indicates if the user has opted in to receive activity notifications. */
  activityNotifications: Scalars['Boolean']['output'];
  /** Indicates if the user has opted in to receive general announcements. */
  generalAnnouncements: Scalars['Boolean']['output'];
  /** Indicates if the user has opted in to receive monthly blog performance stats. */
  monthlyBlogStats: Scalars['Boolean']['output'];
  /** Indicates if the user has opted in to receive new followers weekly. */
  newFollowersWeekly: Scalars['Boolean']['output'];
  /** Indicates if the user has opted in to receive the Hashnode Weekly newsletter. */
  weeklyNewsletterEmails: Scalars['Boolean']['output'];
};

/** The input for enabling AI search for a documentation project */
export type EnableDocumentationProjectAiSearchInput = {
  /** The ID of the documentation project */
  projectId: Scalars['ID']['input'];
};

/** The response to enabling AI search for a documentation project */
export type EnableDocumentationProjectAiSearchPayload = {
  __typename?: 'EnableDocumentationProjectAISearchPayload';
  project?: Maybe<DocumentationProject>;
};

export type EnableDocumentationProjectHeadlessCmsInput = {
  projectId: Scalars['ID']['input'];
};

export type EnableDocumentationProjectHeadlessCmsPayload = {
  __typename?: 'EnableDocumentationProjectHeadlessCmsPayload';
  project?: Maybe<DocumentationProject>;
};

/** Invitations that failed to be sent to the user */
export type FailedInvite = {
  __typename?: 'FailedInvite';
  /** The email of the user that failed to invite. */
  email?: Maybe<Scalars['String']['output']>;
  /** The reason why the user failed to invite. */
  errorMessage: Scalars['String']['output'];
  /** The username of the user that failed to invite. */
  username?: Maybe<Scalars['String']['output']>;
};

/** Common fields that describe a feature. */
export type Feature = {
  /** Whether the feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

export type FeedFilter = {
  /** Adds a filter to return posts with maximum number of minutes required to read the post. */
  maxReadTime?: InputMaybe<Scalars['Int']['input']>;
  /** Adds a filter to return posts with minimum number of minutes required to read the post. */
  minReadTime?: InputMaybe<Scalars['Int']['input']>;
  /** Adds a filter to return posts with tagged with provided tags only. */
  tags?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  /** The type of feed to be returned. */
  type?: InputMaybe<FeedType>;
};

/**
 * Connection for posts within a feed. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type FeedPostConnection = Connection & {
  __typename?: 'FeedPostConnection';
  /** A list of edges containing Post information */
  edges: Array<PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: PageInfo;
};

/** Contains information about type of feed to be returned. */
export enum FeedType {
  /** Returns posts which were bookmarked by the user, sorted based on recency. */
  Bookmarks = 'BOOKMARKS',
  /** Returns posts which were featured, sorted based on recency. */
  Featured = 'FEATURED',
  /**
   * Returns only posts of the users you follow or publications you have subscribed to.
   *
   * Note: You have to be authenticated to use this feed type.
   */
  Following = 'FOLLOWING',
  /**
   * Returns only posts based on users following and interactions.
   *
   * Personalised feed is curated per requesting user basis.
   */
  Personalized = 'PERSONALIZED',
  /** Returns posts which were viewed by the user, sorted based on recency. */
  ReadingHistory = 'READING_HISTORY',
  /** Returns posts which were published recently, sorted based on recency. */
  Recent = 'RECENT',
  /** Returns posts based on old personalization algorithm. */
  Relevant = 'RELEVANT'
}

export type FollowTagsInput = {
  /** List of tag ids to follow. */
  ids: Array<Scalars['ID']['input']>;
};

export type FollowTagsPayload = {
  __typename?: 'FollowTagsPayload';
  /** List of tags followed by the user. */
  tags?: Maybe<Array<Tag>>;
};

export type GptBotCrawlingFeature = Feature & {
  __typename?: 'GPTBotCrawlingFeature';
  /** A flag indicating if the GPT Bot Crawler feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

/** The input for the exchange of token to a JWT to preview token for a documentation project. */
export type GenerateDocumentationProjectPreviewAuthorizationTokenInput = {
  token: Scalars['String']['input'];
};

/** The payload for the exchange of token to a JWT to preview token for a documentation project. */
export type GenerateDocumentationProjectPreviewAuthorizationTokenPayload = {
  __typename?: 'GenerateDocumentationProjectPreviewAuthorizationTokenPayload';
  /** The JWT that can be used to preview the documentation project. */
  authorizationToken?: Maybe<Scalars['String']['output']>;
  /** The project for which the JWT is generated. With this request, authenticated fields are not accessible. */
  project?: Maybe<DocumentationProject>;
};

/** The input for the generation of a exchangeable preview token for a documentation project. */
export type GenerateDocumentationProjectPreviewTokenInput = {
  projectId: Scalars['ID']['input'];
};

/** The payload for the generation of a exchangeable preview token for a documentation project. */
export type GenerateDocumentationProjectPreviewTokenPayload = {
  __typename?: 'GenerateDocumentationProjectPreviewTokenPayload';
  /** The project for which the token is generated. */
  project?: Maybe<DocumentationProject>;
  /** The token that can be exchanged for a JWT to preview the documentation project. */
  token?: Maybe<Scalars['String']['output']>;
};

export type GitHubActivityLog = Node & {
  __typename?: 'GitHubActivityLog';
  /** The branch name that the commit belongs to. */
  branchName: Scalars['String']['output'];
  /** The date the log was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The deployment type related to the log. */
  deploymentType: DocsGitHubActivityDeploymentType;
  /** The deployment URL. For preview activities, the deployment URL is different for every commit. For production deployments, the deploymentUrl points to the main project subdomain. */
  deploymentUrl: Scalars['String']['output'];
  /** The errors occurred during the sync. */
  errors: Array<GitHubSyncError>;
  /** The commit ID. */
  gitCommitId: Scalars['String']['output'];
  /** The commit message. */
  gitCommitMessage: Scalars['String']['output'];
  /** The commit URL. */
  gitCommitUrl: Scalars['String']['output'];
  /** The ID of the log. */
  id: Scalars['ID']['output'];
  /** The status of the sync. */
  status: GitHubSyncStatus;
};

export type GitHubSyncError = {
  __typename?: 'GitHubSyncError';
  /** The error code denoting the reason of failure for GitHub sync. */
  code: GitHubSyncErrorCode;
  /** List of error messages */
  messages: Array<Scalars['String']['output']>;
};

export enum GitHubSyncErrorCode {
  /** Indicates that the project has configuration errors. */
  ConfigurationError = 'CONFIGURATION_ERROR',
  /** Indicates that the project has invalid content. */
  ContentError = 'CONTENT_ERROR',
  /** Indicates that the project has duplicate paths. */
  DuplicatePaths = 'DUPLICATE_PATHS',
  /** Indicates that the project has duplicate slugs. */
  DuplicateSlugs = 'DUPLICATE_SLUGS',
  /** Indicates that the project has missing files. */
  MissingFiles = 'MISSING_FILES'
}

/** Contains the flag indicating if the GitHub sync feature is enabled or not. */
export type GitHubSyncFeature = Feature & {
  __typename?: 'GitHubSyncFeature';
  /** A flag indicating if the GitHub sync feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

export enum GitHubSyncStatus {
  /** The sync is in progress */
  Building = 'BUILDING',
  /** The sync failed */
  Failed = 'FAILED',
  /** The sync is complete */
  Ready = 'READY'
}

/** Views implementation that will be returned if grouping by browser. */
export type GroupedByBrowserViews = Node & Views & {
  __typename?: 'GroupedByBrowserViews';
  /** The browser that these views belong to. */
  browser: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by browser. */
export type GroupedByBrowserVisitors = Node & Visitors & {
  __typename?: 'GroupedByBrowserVisitors';
  /** The browser that these views belong to. */
  browser: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by country. */
export type GroupedByCountryViews = Node & Views & {
  __typename?: 'GroupedByCountryViews';
  /** The country that these views belong to. */
  country: CountryCodeAlpha2;
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by country. */
export type GroupedByCountryVisitors = Node & Visitors & {
  __typename?: 'GroupedByCountryVisitors';
  /** The country that these views belong to. */
  country: CountryCodeAlpha2;
  id: Scalars['ID']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by device type. */
export type GroupedByDeviceTypeViews = Node & Views & {
  __typename?: 'GroupedByDeviceTypeViews';
  /** The type of device that these views belong to. */
  deviceType: DeviceType;
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by device type. */
export type GroupedByDeviceTypeVisitors = Node & Visitors & {
  __typename?: 'GroupedByDeviceTypeVisitors';
  /** The type of device that these views belong to. */
  deviceType: DeviceType;
  id: Scalars['ID']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by browser. */
export type GroupedByDocsBrowserViews = DocsViews & Node & {
  __typename?: 'GroupedByDocsBrowserViews';
  /** The browser that these views belong to. */
  browser: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by browser. */
export type GroupedByDocsBrowserVisitors = DocsVisitors & Node & {
  __typename?: 'GroupedByDocsBrowserVisitors';
  /** The browser that these views belong to. */
  browser: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by country. */
export type GroupedByDocsCountryViews = DocsViews & Node & {
  __typename?: 'GroupedByDocsCountryViews';
  /** The country that these views belong to. */
  country: CountryCodeAlpha2;
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by country. */
export type GroupedByDocsCountryVisitors = DocsVisitors & Node & {
  __typename?: 'GroupedByDocsCountryVisitors';
  /** The country that these views belong to. */
  country: CountryCodeAlpha2;
  id: Scalars['ID']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by device type. */
export type GroupedByDocsDeviceTypeViews = DocsViews & Node & {
  __typename?: 'GroupedByDocsDeviceTypeViews';
  /** The type of device that these views belong to. */
  deviceType: DeviceType;
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by device type. */
export type GroupedByDocsDeviceTypeVisitors = DocsVisitors & Node & {
  __typename?: 'GroupedByDocsDeviceTypeVisitors';
  /** The type of device that these views belong to. */
  deviceType: DeviceType;
  id: Scalars['ID']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Grouped views by documentation guide or API reference guide. */
export type GroupedByDocsGuideViews = DocsViews & Node & {
  __typename?: 'GroupedByDocsGuideViews';
  /** The documentation Guide or the API reference guide that these views belong to. */
  guide?: Maybe<DocumentationGuideItem>;
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Grouped visitors by documentation guide or API reference guide. */
export type GroupedByDocsGuideVisitors = DocsVisitors & Node & {
  __typename?: 'GroupedByDocsGuideVisitors';
  /** The documentation Guide or the API reference guide that these views belong to. */
  guide?: Maybe<DocumentationGuideItem>;
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by operating system. */
export type GroupedByDocsOperatingSystemViews = DocsViews & Node & {
  __typename?: 'GroupedByDocsOperatingSystemViews';
  id: Scalars['ID']['output'];
  /** The operating system that these views belong to. */
  operatingSystem: Scalars['String']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by operating system. */
export type GroupedByDocsOperatingSystemVisitors = DocsVisitors & Node & {
  __typename?: 'GroupedByDocsOperatingSystemVisitors';
  id: Scalars['ID']['output'];
  /** The operating system that these views belong to. */
  operatingSystem: Scalars['String']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

export type GroupedByDocsPageViews = DocsViews & Node & {
  __typename?: 'GroupedByDocsPageViews';
  id: Scalars['ID']['output'];
  /** The page that these views belong to. */
  page?: Maybe<DocumentationPage>;
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by docs page. */
export type GroupedByDocsPageVisitors = DocsVisitors & Node & {
  __typename?: 'GroupedByDocsPageVisitors';
  id: Scalars['ID']['output'];
  /** The page that these views belong to. */
  page?: Maybe<DocumentationPage>;
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by path. */
export type GroupedByDocsPathViews = DocsViews & Node & {
  __typename?: 'GroupedByDocsPathViews';
  id: Scalars['ID']['output'];
  /** The path that these views belong to. */
  path: Scalars['String']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by path. */
export type GroupedByDocsPathVisitors = DocsVisitors & Node & {
  __typename?: 'GroupedByDocsPathVisitors';
  id: Scalars['ID']['output'];
  /** The path that these views belong to. */
  path: Scalars['String']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by `REFERRER_HOST` dimension. */
export type GroupedByDocsReferrerHostViews = DocsViews & Node & {
  __typename?: 'GroupedByDocsReferrerHostViews';
  id: Scalars['ID']['output'];
  /** The referrer host that these views belong to. */
  referrerHost: Scalars['String']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by `REFERRER_HOST` dimension. */
export type GroupedByDocsReferrerHostVisitors = DocsVisitors & Node & {
  __typename?: 'GroupedByDocsReferrerHostVisitors';
  id: Scalars['ID']['output'];
  /** The referrer host that these views belong to. */
  referrerHost: Scalars['String']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

export type GroupedByDocsTimeViews = DocsViews & Node & {
  __typename?: 'GroupedByDocsTimeViews';
  /** The start of the time range that these views belong to. */
  from: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The end of the time range that these views belong to. */
  to: Scalars['DateTime']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if a grouping by time is provided. */
export type GroupedByDocsTimeVisitors = DocsVisitors & Node & {
  __typename?: 'GroupedByDocsTimeVisitors';
  /** The start of the time range that these visitors visited the page. */
  from: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The end of the time range that these visitors visited the page. */
  to: Scalars['DateTime']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by operating system. */
export type GroupedByOperatingSystemViews = Node & Views & {
  __typename?: 'GroupedByOperatingSystemViews';
  id: Scalars['ID']['output'];
  /** The operating system that these views belong to. */
  operatingSystem: Scalars['String']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by operating system. */
export type GroupedByOperatingSystemVisitors = Node & Visitors & {
  __typename?: 'GroupedByOperatingSystemVisitors';
  id: Scalars['ID']['output'];
  /** The operating system that these views belong to. */
  operatingSystem: Scalars['String']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by page. */
export type GroupedByPageViews = Node & Views & {
  __typename?: 'GroupedByPageViews';
  id: Scalars['ID']['output'];
  /** The page that these views belong to. */
  page: StaticPage;
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by page. */
export type GroupedByPageVisitors = Node & Visitors & {
  __typename?: 'GroupedByPageVisitors';
  id: Scalars['ID']['output'];
  /** The page that these views belong to. */
  page: StaticPage;
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by path. */
export type GroupedByPathViews = Node & Views & {
  __typename?: 'GroupedByPathViews';
  id: Scalars['ID']['output'];
  /** The path that these views belong to. */
  path: Scalars['String']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by path. */
export type GroupedByPathVisitors = Node & Visitors & {
  __typename?: 'GroupedByPathVisitors';
  id: Scalars['ID']['output'];
  /** The path that these views belong to. */
  path: Scalars['String']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by post. */
export type GroupedByPostViews = Node & Views & {
  __typename?: 'GroupedByPostViews';
  id: Scalars['ID']['output'];
  /** The post that these views belong to. */
  post: Post;
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by post. */
export type GroupedByPostVisitors = Node & Visitors & {
  __typename?: 'GroupedByPostVisitors';
  id: Scalars['ID']['output'];
  /** The post that these views belong to. */
  post: Post;
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if grouping by `REFERRER_HOST` dimension. */
export type GroupedByReferrerHostViews = Node & Views & {
  __typename?: 'GroupedByReferrerHostViews';
  id: Scalars['ID']['output'];
  /** The referrer host that these views belong to. */
  referrerHost: Scalars['String']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if grouping by `REFERRER_HOST` dimension. */
export type GroupedByReferrerHostVisitors = Node & Visitors & {
  __typename?: 'GroupedByReferrerHostVisitors';
  id: Scalars['ID']['output'];
  /** The referrer host that these views belong to. */
  referrerHost: Scalars['String']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

export type GroupedByTimeViews = Node & Views & {
  __typename?: 'GroupedByTimeViews';
  /** The start of the time range that these views belong to. */
  from: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The end of the time range that these views belong to. */
  to: Scalars['DateTime']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if a grouping by time is provided. */
export type GroupedByTimeVisitors = Node & Visitors & {
  __typename?: 'GroupedByTimeVisitors';
  /** The start of the time range that these visitors visited the page. */
  from: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The end of the time range that these visitors visited the page. */
  to: Scalars['DateTime']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

export enum GuideProvider {
  Github = 'GITHUB',
  Hashnode = 'HASHNODE'
}

export enum GuideVersionStatus {
  Deprecated = 'DEPRECATED',
  Stable = 'STABLE',
  Unstable = 'UNSTABLE'
}

export type HeadlessCmsFeature = Feature & {
  __typename?: 'HeadlessCMSFeature';
  /** A flag indicating if the Headless CMS feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

export enum HttpRedirectionType {
  /** A permanent redirect that corresponds to the 302 HTTP status code. */
  Permanent = 'PERMANENT',
  /** A temporary redirect that corresponds to the 301 HTTP status code. */
  Temporary = 'TEMPORARY'
}

export type IDocumentationNestableSidebarItem = {
  pages: Array<DocumentationSidebarItemPage>;
};

export type IDocumentationSidebarItem = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  visibility: DocumentationSidebarItemVisibility;
};

export type IGuide = {
  id: Scalars['ID']['output'];
  /**
   * A guide can be locked if the subscription doesn't cover to having this guide.
   *
   * A locked guide is readonly. It can only be removed or edited after subscribing.
   */
  isLocked: Scalars['Boolean']['output'];
  lastModified: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  /** OG meta-data of the page. Contains image url used in open graph meta tags. */
  ogMetaData?: Maybe<OpenGraphMetaData>;
  provider: GuideProvider;
  /** SEO information of the page. Contains title and description used in meta tags. */
  seo?: Maybe<Seo>;
  slug: Scalars['String']['output'];
  status: DocumentationGuideItemStatus;
  /** The ID of the default version. */
  versionId?: Maybe<Scalars['String']['output']>;
};

export type IGuideVersion = {
  /** Internal code name for the version. */
  codeName?: Maybe<Scalars['String']['output']>;
  /** Timestamp of when the version was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The version that this version was forked from. */
  forkedFrom?: Maybe<IGuideVersion>;
  /** Unique identifier for the guide version. */
  id: Scalars['ID']['output'];
  /**
   * Indicates if this is the default version.
   *
   * There is always exactly one default version at a given time.
   */
  isDefault: Scalars['Boolean']['output'];
  /** Display name of the version. */
  name: Scalars['String']['output'];
  /** URL-friendly identifier for the version. */
  slug: Scalars['String']['output'];
  /** Status of the guide version. */
  status: GuideVersionStatus;
  /** Timestamp of the last update to the version. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Visibility of the guide version. */
  visibility: DocumentationGuideVisibility;
};

/**
 * Contains basic information about the tag.
 * A tag is a label that categorizes posts with similar topics.
 */
export type ITag = {
  /** Total number of users following this tag. */
  followersCount: Scalars['Int']['output'];
  /** The ID of the tag. */
  id: Scalars['ID']['output'];
  /** Information about the tag. Contains markdown html and text version of the tag's info. */
  info?: Maybe<Content>;
  /** The logo of the tag. Shown in tag page. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The name of the tag. Shown in tag page. */
  name: Scalars['String']['output'];
  /** Alltime usage count of this tag in posts. */
  postsCount: Scalars['Int']['output'];
  /** The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql */
  slug: Scalars['String']['output'];
  /** The tagline of the tag. */
  tagline?: Maybe<Scalars['String']['output']>;
};

/** Basic information about a user on Hashnode. */
export type IUser = {
  /** Whether or not the user is an ambassador. */
  ambassador: Scalars['Boolean']['output'];
  /** The availability of the user based on tech stack and interests. Shown on the "I am available for" section in user's profile. */
  availableFor?: Maybe<Scalars['String']['output']>;
  /** Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges */
  badges: Array<Badge>;
  /** The bio of the user. Visible in about me section of the user's profile. */
  bio?: Maybe<Content>;
  /** The date the user joined Hashnode. */
  dateJoined?: Maybe<Scalars['DateTime']['output']>;
  /** Whether or not the user is deactivated. */
  deactivated: Scalars['Boolean']['output'];
  /** The users who are following this user */
  followers: UserConnection;
  /** The number of users that follow the requested user. Visible in the user's profile. */
  followersCount: Scalars['Int']['output'];
  /** The number of users that this user is following. Visible in the user's profile. */
  followingsCount: Scalars['Int']['output'];
  /** The users which this user is following */
  follows: UserConnection;
  /** The ID of the user. It can be used to identify the user. */
  id: Scalars['ID']['output'];
  /** The location of the user. */
  location?: Maybe<Scalars['String']['output']>;
  /** The name of the user. */
  name: Scalars['String']['output'];
  /** Returns the list of posts the user has published. */
  posts: UserPostConnection;
  /** The URL to the profile picture of the user. */
  profilePicture?: Maybe<Scalars['String']['output']>;
  /** Publications associated with the user. Includes personal and team publications. */
  publications: UserPublicationsConnection;
  /** The social media links of the user. Shown on the user's profile. */
  socialMediaLinks?: Maybe<SocialMediaLinks>;
  /** The tagline of the user. Shown on the user's profile below the name. */
  tagline?: Maybe<Scalars['String']['output']>;
  /** Returns a list of tags that the user follows. */
  tagsFollowing: Array<Tag>;
  /** Returns list of tags from user's expertise. Shown on the user's profile. */
  techStack: UserTagsConnection;
  /** The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username */
  username: Scalars['String']['output'];
};


/** Basic information about a user on Hashnode. */
export type IUserFollowersArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/** Basic information about a user on Hashnode. */
export type IUserFollowsArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/** Basic information about a user on Hashnode. */
export type IUserPostsArgs = {
  filter?: InputMaybe<UserPostConnectionFilter>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  sortBy?: InputMaybe<UserPostsSort>;
};


/** Basic information about a user on Hashnode. */
export type IUserPublicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserPublicationsConnectionFilter>;
  first: Scalars['Int']['input'];
  sortBy?: InputMaybe<UserPublicationsSort>;
};


/** Basic information about a user on Hashnode. */
export type IUserTechStackArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};

export type InviteDocumentationProjectAdminInput = {
  invites: Array<InviteDocumentationProjectAdminInputEmail>;
  projectId: Scalars['ID']['input'];
};

export type InviteDocumentationProjectAdminInputEmail = {
  userId: Scalars['ID']['input'];
};

export type InviteDocumentationProjectAdminPayload = {
  __typename?: 'InviteDocumentationProjectAdminPayload';
  invitedMembers?: Maybe<Array<DocsProjectInvitedMembers>>;
  project?: Maybe<DocumentationProject>;
};

/** Input to invite users to a publication. */
export type InviteUsersToPublicationInput = {
  /** The publication ID to invite users to. */
  publicationId: Scalars['ID']['input'];
  /** The list of users  to invite to the publication. */
  users: Array<UserInviteInput>;
};

/** Response to inviting users to a publication. */
export type InviteUsersToPublicationPayload = {
  __typename?: 'InviteUsersToPublicationPayload';
  /** Invites that failed due to an error. */
  failedInvites: Array<FailedInvite>;
  /** Signifies if the mutation was successful for all users. */
  success: Scalars['Boolean']['output'];
  /** The number of successful invites. */
  successfulInviteCount: Scalars['Int']['output'];
};

export type LikeCommentInput = {
  commentId: Scalars['ID']['input'];
  likesCount?: InputMaybe<Scalars['Int']['input']>;
};

export type LikeCommentPayload = {
  __typename?: 'LikeCommentPayload';
  comment?: Maybe<Comment>;
};

export type LikePostInput = {
  likesCount?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['ID']['input'];
};

export type LikePostPayload = {
  __typename?: 'LikePostPayload';
  post?: Maybe<Post>;
};

export type LikeReplyInput = {
  commentId: Scalars['ID']['input'];
  likesCount?: InputMaybe<Scalars['Int']['input']>;
  replyId: Scalars['ID']['input'];
};

export type LikeReplyPayload = {
  __typename?: 'LikeReplyPayload';
  reply?: Maybe<Reply>;
};

export type MapDocumentationProjectCustomDomainWwwRedirectInput = {
  projectId: Scalars['ID']['input'];
};

export type MapDocumentationProjectCustomDomainWwwRedirectPayload = {
  __typename?: 'MapDocumentationProjectCustomDomainWwwRedirectPayload';
  /**
   * Additional DNS entries required to verify the www redirect domain.
   * There are cases where additional records in the DNS config are required to successfully verify the domain.
   */
  dnsVerificationEntries: Array<DnsVerificationEntry>;
  project?: Maybe<DocumentationProject>;
};

/** Contains information about meta tags. Used for SEO purpose. */
export type MetaTagsInput = {
  /** The description of the post used in og:description for SEO. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The image URL of the post used in og:image for SEO. */
  image?: InputMaybe<Scalars['String']['input']>;
  /** The title of the post used in og:title for SEO. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MoveDocumentationSidebarItemInput = {
  guideSlug: Scalars['String']['input'];
  itemId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['ID']['input'];
};

export type MoveDocumentationSidebarItemPayload = {
  __typename?: 'MoveDocumentationSidebarItemPayload';
  guide?: Maybe<DocumentationGuide>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Mutation to accept an invite to a documentation project */
  acceptInviteToDocumentationProject: AcceptInviteToDocumentationProjectPayload;
  /** Accepts an invitation to join a publication. The user is added as a member of the publication. */
  acceptInviteToPublication: AcceptInviteToPublicationPayload;
  /** Accepts a role based invite and adds the user as a member of the publication. The user is assigned the role specified in the invite. */
  acceptRoleBasedInvite: AcceptRoleBasedInvitePayload;
  /** Adds a comment to a post. */
  addComment: AddCommentPayload;
  addCustomMdxComponent: AddCustomMdxComponentPayload;
  addDocumentationProjectCustomDomain: AddDocumentationProjectCustomDomainPayload;
  /** Adds a post to a series. */
  addPostToSeries: AddPostToSeriesPayload;
  /** Adds a reply to a comment. */
  addReply: AddReplyPayload;
  cancelScheduledDraft: CancelScheduledDraftPayload;
  /** Changes the role of a user in a publication. */
  changePublicationMemberRole: ChangePublicationMemberRolePayload;
  /**
   * Changes the privacy state of a user in a publication.
   * PRIVATE members are not visible on the members page while PUBLIC members are visible.
   */
  changePublicationMemberVisibility: ChangePublicationMemberVisibilityPayload;
  createDocumentationApiReference: CreateDocumentationApiReferencePayload;
  createDocumentationGuide: CreateDocumentationGuidePayload;
  createDocumentationLink: CreateDocumentationLinkPayload;
  createDocumentationPageDraft: CreateDocumentationPageDraftPayload;
  createDocumentationProject: CreateDocumentationProjectPayload;
  createDocumentationSection: CreateDocumentationSectionPayload;
  /** Creates a new draft for a post. */
  createDraft: CreateDraftPayload;
  createRedirectionRule: CreateRedirectionRulePayload;
  /** Creates a role based invite for a publication and returns a link to invite users to a publication. */
  createRoleBasedInviteForPublication: CreateRoleBasedInviteForPublicationPayload;
  /** Creates a new series. */
  createSeries: CreateSeriesPayload;
  createWebhook: CreateWebhookPayload;
  deleteCustomMdxComponent: DeleteCustomMdxComponentPayload;
  /** Deletes a role based invite. */
  deleteRoleBasedInvite: DeleteRoleBasedInvitePayload;
  deleteWebhook: DeleteWebhookPayload;
  /** Mutation to disable AI search for a documentation project */
  disableDocumentationProjectAISearch: DisableDocumentationProjectAiSearchPayload;
  disableDocumentationProjectHeadlessCms: DisableDocumentationProjectHeadlessCmsPayload;
  /** Mutation to enable AI search for a documentation project */
  enableDocumentationProjectAISearch: EnableDocumentationProjectAiSearchPayload;
  enableDocumentationProjectHeadlessCms: EnableDocumentationProjectHeadlessCmsPayload;
  followTags: FollowTagsPayload;
  /**
   * Will generate a authorization JWT to preview a docs project.
   * A token is required to generate the JWT.
   */
  generateDocumentationProjectPreviewAuthorizationToken: GenerateDocumentationProjectPreviewAuthorizationTokenPayload;
  /**
   * Will generate a token that can be exchanged as a JWT to preview a docs project.
   * Only the owner or editors of the project can generate the token.
   */
  generateDocumentationProjectPreviewToken: GenerateDocumentationProjectPreviewTokenPayload;
  /** Mutation to invite an user to a documentation project */
  inviteDocumentationProjectAdmin: InviteDocumentationProjectAdminPayload;
  /** Invites users to a publication. Either by username or email. */
  inviteUsersToPublication: InviteUsersToPublicationPayload;
  /** Likes a comment. */
  likeComment: LikeCommentPayload;
  /** Likes a post. */
  likePost: LikePostPayload;
  /** Likes a reply. */
  likeReply: LikeReplyPayload;
  mapDocumentationProjectCustomDomainWwwRedirect: MapDocumentationProjectCustomDomainWwwRedirectPayload;
  moveDocumentationSidebarItem: MoveDocumentationSidebarItemPayload;
  publishDocumentationApiReference: PublishDocumentationApiReferencePayload;
  /**
   * Publishes the default version of the guide.
   * @deprecated Use `publishDocumentationGuideVersion` instead
   */
  publishDocumentationGuide: PublishDocumentationGuidePayload;
  publishDocumentationPageDraft: PublishDocumentationPageDraftPayload;
  /** Publishes an existing draft as a post. */
  publishDraft: PublishDraftPayload;
  /** Creates a new post. */
  publishPost: PublishPostPayload;
  recommendPublications: RecommendPublicationsPayload;
  /** Resends an invitation to a user to join a publication. The user must have been previously invited. Sends an email to the user. */
  reinviteUserToPublication: ReinviteUserToPublicationPayload;
  /** Removes a comment from a post. */
  removeComment: RemoveCommentPayload;
  removeDocumentationGuide: RemoveDocumentationGuidePayload;
  /**
   * Mutation to remove a documentation project.
   * This will free the custom domain and subdomain and removes all guides and pages.
   */
  removeDocumentationProject: RemoveDocumentationProjectPayload;
  /** Mutation to remove a prompt from the AI search */
  removeDocumentationProjectAIPrompt: RemoveDocumentationProjectAiPromptPayload;
  removeDocumentationProjectCustomDomain: RemoveDocumentationProjectCustomDomainPayload;
  /** Mutation to remove a Member from a Documentation Project */
  removeDocumentationProjectMember: RemoveDocumentationProjectMemberPayload;
  removeDocumentationSidebarItem: RemoveDocumentationSidebarItemPayload;
  /** Removes a post. */
  removePost: RemovePostPayload;
  /** Removes a user from a teams publication. */
  removePublicationMember: RemovePublicationMemberPayload;
  removeRecommendation: RemoveRecommendationPayload;
  removeRedirectionRule: RemoveRedirectionRulePayload;
  /** Removes a reply from a comment. */
  removeReply: RemoveReplyPayload;
  /** Removes a series. */
  removeSeries: RemoveSeriesPayload;
  renameDocumentationGuide: RenameDocumentationGuideItemPayload;
  renameDocumentationSidebarItem: RenameDocumentationSidebarItemPayload;
  /** Reschedule a draft. */
  rescheduleDraft: RescheduleDraftPayload;
  resendWebhookRequest: ResendWebhookRequestPayload;
  /** Restores a deleted post. */
  restorePost: RestorePostPayload;
  retryDocumentationProjectCustomDomainVerification: RetryDocumentationProjectCustomDomainVerificationPayload;
  /** Mutation to revoke documentation project invite */
  revokeInviteToDocumentationProject: RevokeInviteToDocumentationProjectPayload;
  /** Revokes a user invitation that was sent to join a publication. */
  revokeUserInviteToPublication: RevokeUserInviteToPublicationPayload;
  saveDocumentationPageDraftContent: SaveDocumentationPageDraftContentPayload;
  scheduleDraft: ScheduleDraftPayload;
  setDocumentationSidebarItemVisibility: SetDocumentationSidebarItemVisibilityPayload;
  subscribeToNewsletter: SubscribeToNewsletterPayload;
  /** Mutation to sync documentation API reference definition */
  syncDocumentationProjectApiDefinition: SyncDocumentationProjectApiDefinitionPayload;
  /** Toggle allowContributorEdits flag to allow or restrict external contributors to further edit published articles. */
  toggleAllowContributorEdits: ToggleAllowContributorEditsPayload;
  /**
   * Update the follow state for the user that is provided via id or username.
   * If the authenticated user does not follow the user, the mutation will follow the user.
   * If the authenticated user already follows the user, the mutation will un-follow the user.
   * Only available to the authenticated user.
   */
  toggleFollowUser: ToggleFollowUserPayload;
  /** Toggle GPT bot crawling feature. */
  toggleGPTBotCrawling: ToggleGptBotCrawlingPayload;
  /** Toggles role based invite links' active status. Users can join the publication by the invite link only if it is active. */
  toggleRoleBasedInviteLinks: ToggleRoleBasedInviteLinksPayload;
  /** Toggle text selection sharer feature. */
  toggleTextSelectionSharer: ToggleTextSelectionSharerPayload;
  triggerWebhookTest: TriggerWebhookTestPayload;
  unfollowTags: UnfollowTagsPayload;
  unsubscribeFromNewsletter: UnsubscribeFromNewsletterPayload;
  /** Updates a comment on a post. */
  updateComment: UpdateCommentPayload;
  updateCustomMdxComponent: UpdateCustomMdxComponentPayload;
  updateDocumentationAppearance: UpdateDocumentationAppearancePayload;
  updateDocumentationGeneralSettings: UpdateDocumentationGeneralSettingsPayload;
  updateDocumentationGuide: UpdateDocumentationGuidePayload;
  updateDocumentationIntegrations: UpdateDocumentationIntegrationsPayload;
  updateDocumentationLink: UpdateDocumentationLinkPayload;
  updateDocumentationPageSettings: UpdateDocumentationPageSettingsPayload;
  /** Mutation to update the AI search prompts */
  updateDocumentationProjectAIPrompt: UpdateDocumentationProjectAiPromptPayload;
  updateDocumentationProjectSubdomain: UpdateDocumentationProjectSubdomainPayload;
  /** Mutation to update a section in a guide */
  updateDocumentationSection: UpdateDocumentationSectionPayload;
  updatePost: UpdatePostPayload;
  updateRedirectionRule: UpdateRedirectionRulePayload;
  /** Updates a reply */
  updateReply: UpdateReplyPayload;
  /** Updates a role based invite for a publication. */
  updateRoleBasedInvite: UpdateRoleBasedInvitePayload;
  /** Updates a series. */
  updateSeries: UpdateSeriesPayload;
  updateWebhook: UpdateWebhookPayload;
  verifyDocumentationProjectCustomDomain: VerifyDocumentationProjectCustomDomainPayload;
};


export type MutationAcceptInviteToDocumentationProjectArgs = {
  input: AcceptInviteToDocumentationProjectInput;
};


export type MutationAcceptInviteToPublicationArgs = {
  input: AcceptInviteToPublicationInput;
};


export type MutationAcceptRoleBasedInviteArgs = {
  input: AcceptRoleBasedInviteInput;
};


export type MutationAddCommentArgs = {
  input: AddCommentInput;
};


export type MutationAddCustomMdxComponentArgs = {
  input: AddCustomMdxComponentInput;
};


export type MutationAddDocumentationProjectCustomDomainArgs = {
  input: AddDocumentationProjectCustomDomainInput;
};


export type MutationAddPostToSeriesArgs = {
  input: AddPostToSeriesInput;
};


export type MutationAddReplyArgs = {
  input: AddReplyInput;
};


export type MutationCancelScheduledDraftArgs = {
  input: CancelScheduledDraftInput;
};


export type MutationChangePublicationMemberRoleArgs = {
  input: ChangePublicationMemberRoleInput;
};


export type MutationChangePublicationMemberVisibilityArgs = {
  input: ChangePublicationMemberVisibilityInput;
};


export type MutationCreateDocumentationApiReferenceArgs = {
  input: CreateDocumentationApiReferenceInput;
};


export type MutationCreateDocumentationGuideArgs = {
  input: CreateDocumentationGuideInput;
};


export type MutationCreateDocumentationLinkArgs = {
  input: CreateDocumentationLinkInput;
};


export type MutationCreateDocumentationPageDraftArgs = {
  input: CreateDocumentationPageDraftInput;
};


export type MutationCreateDocumentationProjectArgs = {
  input: CreateDocumentationProjectInput;
};


export type MutationCreateDocumentationSectionArgs = {
  input: CreateDocumentationSectionInput;
};


export type MutationCreateDraftArgs = {
  input: CreateDraftInput;
};


export type MutationCreateRedirectionRuleArgs = {
  input: CreateRedirectionRuleInput;
};


export type MutationCreateRoleBasedInviteForPublicationArgs = {
  input: CreateRoleBasedInviteForPublicationInput;
};


export type MutationCreateSeriesArgs = {
  input: CreateSeriesInput;
};


export type MutationCreateWebhookArgs = {
  input: CreateWebhookInput;
};


export type MutationDeleteCustomMdxComponentArgs = {
  input: DeleteCustomMdxComponentInput;
};


export type MutationDeleteRoleBasedInviteArgs = {
  input: DeleteRoleBasedInviteInput;
};


export type MutationDeleteWebhookArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDisableDocumentationProjectAiSearchArgs = {
  input: DisableDocumentationProjectAiSearchInput;
};


export type MutationDisableDocumentationProjectHeadlessCmsArgs = {
  input: DisableDocumentationProjectHeadlessCmsInput;
};


export type MutationEnableDocumentationProjectAiSearchArgs = {
  input: EnableDocumentationProjectAiSearchInput;
};


export type MutationEnableDocumentationProjectHeadlessCmsArgs = {
  input: EnableDocumentationProjectHeadlessCmsInput;
};


export type MutationFollowTagsArgs = {
  input: FollowTagsInput;
};


export type MutationGenerateDocumentationProjectPreviewAuthorizationTokenArgs = {
  input: GenerateDocumentationProjectPreviewAuthorizationTokenInput;
};


export type MutationGenerateDocumentationProjectPreviewTokenArgs = {
  input: GenerateDocumentationProjectPreviewTokenInput;
};


export type MutationInviteDocumentationProjectAdminArgs = {
  input: InviteDocumentationProjectAdminInput;
};


export type MutationInviteUsersToPublicationArgs = {
  input: InviteUsersToPublicationInput;
};


export type MutationLikeCommentArgs = {
  input: LikeCommentInput;
};


export type MutationLikePostArgs = {
  input: LikePostInput;
};


export type MutationLikeReplyArgs = {
  input: LikeReplyInput;
};


export type MutationMapDocumentationProjectCustomDomainWwwRedirectArgs = {
  input: MapDocumentationProjectCustomDomainWwwRedirectInput;
};


export type MutationMoveDocumentationSidebarItemArgs = {
  input: MoveDocumentationSidebarItemInput;
};


export type MutationPublishDocumentationApiReferenceArgs = {
  input: PublishDocumentationApiReferenceInput;
};


export type MutationPublishDocumentationGuideArgs = {
  input: PublishDocumentationGuideInput;
};


export type MutationPublishDocumentationPageDraftArgs = {
  input: PublishDocumentationPageDraftInput;
};


export type MutationPublishDraftArgs = {
  input: PublishDraftInput;
};


export type MutationPublishPostArgs = {
  input: PublishPostInput;
};


export type MutationRecommendPublicationsArgs = {
  input: RecommendPublicationsInput;
};


export type MutationReinviteUserToPublicationArgs = {
  input: ReinviteUserToPublicationInput;
};


export type MutationRemoveCommentArgs = {
  input: RemoveCommentInput;
};


export type MutationRemoveDocumentationGuideArgs = {
  input: RemoveDocumentationGuideInput;
};


export type MutationRemoveDocumentationProjectArgs = {
  input: RemoveDocumentationProjectInput;
};


export type MutationRemoveDocumentationProjectAiPromptArgs = {
  input: RemoveDocumentationProjectAiPromptInput;
};


export type MutationRemoveDocumentationProjectCustomDomainArgs = {
  input: RemoveDocumentationProjectCustomDomainInput;
};


export type MutationRemoveDocumentationProjectMemberArgs = {
  input: RemoveDocumentationProjectMemberInput;
};


export type MutationRemoveDocumentationSidebarItemArgs = {
  input: RemoveDocumentationSidebarItemInput;
};


export type MutationRemovePostArgs = {
  input: RemovePostInput;
};


export type MutationRemovePublicationMemberArgs = {
  input: RemovePublicationMemberInput;
};


export type MutationRemoveRecommendationArgs = {
  input: RemoveRecommendationInput;
};


export type MutationRemoveRedirectionRuleArgs = {
  input: RemoveRedirectionRuleInput;
};


export type MutationRemoveReplyArgs = {
  input: RemoveReplyInput;
};


export type MutationRemoveSeriesArgs = {
  input: RemoveSeriesInput;
};


export type MutationRenameDocumentationGuideArgs = {
  input: RenameDocumentationGuideItemInput;
};


export type MutationRenameDocumentationSidebarItemArgs = {
  input: RenameDocumentationSidebarItemInput;
};


export type MutationRescheduleDraftArgs = {
  input: RescheduleDraftInput;
};


export type MutationResendWebhookRequestArgs = {
  input: ResendWebhookRequestInput;
};


export type MutationRestorePostArgs = {
  input: RestorePostInput;
};


export type MutationRetryDocumentationProjectCustomDomainVerificationArgs = {
  input: RetryDocumentationProjectCustomDomainVerificationInput;
};


export type MutationRevokeInviteToDocumentationProjectArgs = {
  input: RevokeInviteToDocumentationProjectInput;
};


export type MutationRevokeUserInviteToPublicationArgs = {
  input: RevokeUserInviteToPublicationInput;
};


export type MutationSaveDocumentationPageDraftContentArgs = {
  input: SaveDocumentationPageDraftContentInput;
};


export type MutationScheduleDraftArgs = {
  input: ScheduleDraftInput;
};


export type MutationSetDocumentationSidebarItemVisibilityArgs = {
  input: SetDocumentationSidebarItemVisibilityInput;
};


export type MutationSubscribeToNewsletterArgs = {
  input: SubscribeToNewsletterInput;
};


export type MutationSyncDocumentationProjectApiDefinitionArgs = {
  input: SyncDocumentationProjectApiDefinitionInput;
};


export type MutationToggleAllowContributorEditsArgs = {
  input: ToggleAllowContributorEditsInput;
};


export type MutationToggleFollowUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationToggleGptBotCrawlingArgs = {
  input: ToggleGptBotCrawlingInput;
};


export type MutationToggleRoleBasedInviteLinksArgs = {
  publicationId: Scalars['ID']['input'];
};


export type MutationToggleTextSelectionSharerArgs = {
  input: ToggleTextSelectionSharerInput;
};


export type MutationTriggerWebhookTestArgs = {
  input: TriggerWebhookTestInput;
};


export type MutationUnfollowTagsArgs = {
  input: UnfollowTagsInput;
};


export type MutationUnsubscribeFromNewsletterArgs = {
  input: UnsubscribeFromNewsletterInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateCustomMdxComponentArgs = {
  input: UpdateCustomMdxComponentInput;
};


export type MutationUpdateDocumentationAppearanceArgs = {
  input: UpdateDocumentationAppearanceInput;
};


export type MutationUpdateDocumentationGeneralSettingsArgs = {
  input: UpdateDocumentationGeneralSettingsInput;
};


export type MutationUpdateDocumentationGuideArgs = {
  input: UpdateDocumentationGuideInput;
};


export type MutationUpdateDocumentationIntegrationsArgs = {
  input: UpdateDocumentationIntegrationsInput;
};


export type MutationUpdateDocumentationLinkArgs = {
  input: UpdateDocumentationLinkInput;
};


export type MutationUpdateDocumentationPageSettingsArgs = {
  input: UpdateDocumentationPageSettingsInput;
};


export type MutationUpdateDocumentationProjectAiPromptArgs = {
  input: UpdateDocumentationProjectAiPromptInput;
};


export type MutationUpdateDocumentationProjectSubdomainArgs = {
  input: UpdateDocumentationProjectSubdomainInput;
};


export type MutationUpdateDocumentationSectionArgs = {
  input: UpdateDocumentationSectionInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUpdateRedirectionRuleArgs = {
  input: UpdateRedirectionRuleInput;
};


export type MutationUpdateReplyArgs = {
  input: UpdateReplyInput;
};


export type MutationUpdateRoleBasedInviteArgs = {
  input: UpdateRoleBasedInviteInput;
};


export type MutationUpdateSeriesArgs = {
  input: UpdateSeriesInput;
};


export type MutationUpdateWebhookArgs = {
  input: UpdateWebhookInput;
};


export type MutationVerifyDocumentationProjectCustomDomainArgs = {
  input: VerifyDocumentationProjectCustomDomainInput;
};

/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type MyUser = IUser & Node & {
  __typename?: 'MyUser';
  /**
   * Whether or not the user is an ambassador.
   * @deprecated Ambassadors program no longer active. Will be removed after 02/01/2024
   */
  ambassador: Scalars['Boolean']['output'];
  /** The availability of the user based on tech stack and interests. Shown on the "I am available for" section in user's profile. */
  availableFor?: Maybe<Scalars['String']['output']>;
  /** Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges */
  badges: Array<Badge>;
  /**
   * A list of beta features that the user has access to. Only available to the authenticated user.
   * @deprecated Beta features are no longer supported. Will be removed after 15/12/2024
   */
  betaFeatures: Array<BetaFeature>;
  /** The bio of the user. Visible in about me section of the user's profile. */
  bio?: Maybe<Content>;
  /** The date the user joined Hashnode. */
  dateJoined?: Maybe<Scalars['DateTime']['output']>;
  /** Whether or not the user is deactivated. */
  deactivated: Scalars['Boolean']['output'];
  drafts: UserDraftConnection;
  /** Email address of the user. Only available to the authenticated user. */
  email: Scalars['String']['output'];
  /** The email notification preferences of the user. */
  emailNotificationPreferences: EmailNotificationPreferences;
  /** The users who are following this user */
  followers: UserConnection;
  /** The number of users that follow the requested user. Visible in the user's profile. */
  followersCount: Scalars['Int']['output'];
  /** The number of users that this user is following. Visible in the user's profile. */
  followingsCount: Scalars['Int']['output'];
  /** The users which this user is following */
  follows: UserConnection;
  /** The ID of the user. It can be used to identify the user. */
  id: Scalars['ID']['output'];
  /** The location of the user. */
  location?: Maybe<Scalars['String']['output']>;
  /** The name of the user. */
  name: Scalars['String']['output'];
  /** Returns the list of posts the user has published. */
  posts: UserPostConnection;
  /** The URL to the profile picture of the user. */
  profilePicture?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  /** Publications associated with the user. Includes personal and team publications. */
  publications: UserPublicationsConnection;
  /** Returns the user's role if any. */
  role: UserRole;
  /** The social media links of the user. Shown on the user's profile. */
  socialMediaLinks?: Maybe<SocialMediaLinks>;
  /** The tagline of the user. Shown on the user's profile below the name. */
  tagline?: Maybe<Scalars['String']['output']>;
  /** Returns a list of tags that the user follows. */
  tagsFollowing: Array<Tag>;
  /** Returns list of tags from user's expertise. Shown on the user's profile. */
  techStack: UserTagsConnection;
  /**
   * Unverified email address of the user. Only available to the authenticated user.
   * This is set when the user has tried updating their email address but it is not verified yet.
   */
  unverifiedEmail?: Maybe<Scalars['String']['output']>;
  /** The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username */
  username: Scalars['String']['output'];
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type MyUserDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type MyUserFollowersArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type MyUserFollowsArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type MyUserPostsArgs = {
  filter?: InputMaybe<UserPostConnectionFilter>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  sortBy?: InputMaybe<UserPostsSort>;
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type MyUserPublicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserPublicationsConnectionFilter>;
  first: Scalars['Int']['input'];
  sortBy?: InputMaybe<UserPublicationsSort>;
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type MyUserTechStackArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};

/**
 * Contains the flag indicating if the newsletter feature is enabled or not.
 * User can enable or disable the newsletter feature from the publication settings.
 * Shows a newsletter prompt on blog if enabled.
 */
export type NewsletterFeature = Feature & {
  __typename?: 'NewsletterFeature';
  frequency?: Maybe<NewsletterFrequency>;
  /** A flag indicating if the newsletter feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

export enum NewsletterFrequency {
  Asap = 'asap',
  Weekly = 'weekly'
}

export type NewsletterRecord = Node & {
  __typename?: 'NewsletterRecord';
  /** The number of subscribers the newsletter was clicked by. */
  clickCount: Scalars['Int']['output'];
  /** Delivery ID of the sent newsletter */
  id: Scalars['ID']['output'];
  /** The number of subscribers the newsletter was opened by. */
  openCount: Scalars['Int']['output'];
  /** Associated post it was sent with */
  post?: Maybe<Post>;
  /** The date the newsletter was sent. */
  sentAt: Scalars['DateTime']['output'];
  /** The number of subscribers the newsletter was sent to. */
  sentCount: Scalars['Int']['output'];
};

export enum NewsletterSubscribeStatus {
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING'
}

export type NewsletterSubscriber = Node & {
  __typename?: 'NewsletterSubscriber';
  /**
   * The date the subscriber was added.
   * @deprecated Use `subscribedAt` instead. Will be removed after 12/4/2024
   */
  createdAt: Scalars['DateTime']['output'];
  /** The email of the subscriber. */
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The status of the subscriber. */
  status: NewsletterSubscribeStatus;
  subscribedAt: Scalars['DateTime']['output'];
};

export enum NewsletterUnsubscribeStatus {
  Unsubscribed = 'UNSUBSCRIBED'
}

/** Node is a common interface for all types example User, Post, Comment, etc. */
export type Node = {
  /** The ID of the node. */
  id: Scalars['ID']['output'];
};

/** Contains information to help in pagination for page based pagination. */
export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** Indicates if there are more pages. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if there are previous pages */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The page after the current page.
   * Use it to build page navigation
   */
  nextPage?: Maybe<Scalars['Int']['output']>;
  /**
   * The page before the current page.
   * Use it to build page navigation
   */
  previousPage?: Maybe<Scalars['Int']['output']>;
};

/** Information to help in open graph related meta tags. */
export type OpenGraphMetaData = {
  __typename?: 'OpenGraphMetaData';
  /** The image used in og:image tag for SEO purposes. */
  image?: Maybe<Scalars['String']['output']>;
};

/**
 * A Connection for page based pagination to get a list of items.
 * Returns a list of nodes which contains the items.
 * This is a common interface for all page connections.
 */
export type PageConnection = {
  /** A list of edges of items connection. */
  nodes: Array<Node>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
};

/**
 * An edge that contains a node and is used in page based pagination.
 * This is a common interface for all edges in page based pagination.
 */
export type PageEdge = {
  /** A node in the connection. */
  node: Node;
};

/** Contains information to help in pagination. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /**
   * The cursor of the last item in the current page.
   * Use it as the after input to query the next page.
   */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates if there are more pages. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Contains the preferences publication's autogenerated pages.
 * Used to enable or disable pages like badge, newsletter and members.
 */
export type PagesPreferences = {
  __typename?: 'PagesPreferences';
  /** A flag indicating if the publication's badge page is enabled. */
  badges?: Maybe<Scalars['Boolean']['output']>;
  /** A flag indicating if the publication's member page is enabled. */
  members?: Maybe<Scalars['Boolean']['output']>;
  /** A flag indicating if the publication's newsletter page is enabled. */
  newsletter?: Maybe<Scalars['Boolean']['output']>;
};

/** Contains the pending invite information. */
export type PendingInvite = Node & {
  __typename?: 'PendingInvite';
  /** The email of the user that was invited. */
  email?: Maybe<Scalars['String']['output']>;
  /** The ID of the pending invite. */
  id: Scalars['ID']['output'];
  /** The role assigned to the user in the publication. */
  role: UserPublicationRole;
  /** Invited Hashnode user, returns null if the user is not a Hashnode user. */
  user?: Maybe<User>;
};

export type PendingInviteConnection = PageConnection & {
  __typename?: 'PendingInviteConnection';
  /** A list of invites */
  nodes: Array<PendingInvite>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
  /** The total number of invites. */
  totalDocuments: Scalars['Int']['output'];
};

/** Contains basic information about the tag returned by popularTags query. */
export type PopularTag = ITag & Node & {
  __typename?: 'PopularTag';
  /** Total number of users following this tag. */
  followersCount: Scalars['Int']['output'];
  /** The ID of the tag. */
  id: Scalars['ID']['output'];
  /** Information about the tag. Contains markdown html and text version of the tag's info. */
  info?: Maybe<Content>;
  /** The logo of the tag. Shown in tag page. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The name of the tag. Shown in tag page. */
  name: Scalars['String']['output'];
  /** Alltime usage count of this tag in posts. */
  postsCount: Scalars['Int']['output'];
  /** The number of posts published in the given period that use this tag. */
  postsCountInPeriod: Scalars['Int']['output'];
  /** The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql */
  slug: Scalars['String']['output'];
  /** The tagline of the tag. */
  tagline?: Maybe<Scalars['String']['output']>;
};

/** Contains a tag and a cursor for pagination. */
export type PopularTagEdge = Edge & {
  __typename?: 'PopularTagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The node holding the Tag information */
  node: PopularTag;
};

/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type Post = Node & {
  __typename?: 'Post';
  /**
   * Returns male and female audio url of the post. Available in case the Audioblog is enabled.
   * @deprecated Audio Blogs are not supported anymore. This field will be removed 18/04/23
   */
  audioUrls?: Maybe<AudioUrls>;
  /** Returns the user details of the author of the post. */
  author: User;
  /**
   * Flag to indicate if the post is bookmarked by the requesting user.
   *
   * Returns `false` if the user is not authenticated.
   */
  bookmarked: Scalars['Boolean']['output'];
  /** Brief is a short description of the post extracted from the content of the post. It's 250 characters long sanitized string. */
  brief: Scalars['String']['output'];
  /** Canonical URL set by author in case of republished posts. */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /**
   * Returns the user details of the co-authors of the post.
   * Hashnode users can add up to 4 co-authors as collaborators to their posts.
   * This functionality is limited to teams publication.
   */
  coAuthors?: Maybe<Array<User>>;
  /** List of users who have commented on the post. */
  commenters: PostCommenterConnection;
  /** A list of comments on the post. */
  comments: PostCommentConnection;
  /** Content of the post. Contains HTML and Markdown version of the post content. */
  content: Content;
  /**
   * A list of contributors of the post. Contributors are users who have commented or replied to the post.
   * @deprecated Will be removed on 10th Oct 2023. Use `commenters` instead.
   */
  contributors: Array<User>;
  /** The cover image preference of the post. Contains cover image URL and other details. */
  coverImage?: Maybe<PostCoverImage>;
  /** Unique ID to identify post, used internally by hashnode. */
  cuid?: Maybe<Scalars['String']['output']>;
  /** Flag to indicate if the post is featured on Hashnode feed. */
  featured: Scalars['Boolean']['output'];
  /** The date and time the post was featured. Used along with featured flag to determine if the post is featured. */
  featuredAt?: Maybe<Scalars['DateTime']['output']>;
  /** Post feature-related fields. */
  features: PostFeatures;
  /** A flag to indicate if the post contains LaTeX. Latex is used to write mathematical equations. */
  hasLatexInPost: Scalars['Boolean']['output'];
  /** The ID of the post. Used to uniquely identify the post. */
  id: Scalars['ID']['output'];
  /** Whether or not the post has automatically been published via RSS feed. */
  isAutoPublishedFromRSS: Scalars['Boolean']['output'];
  /**
   * Whether or not the authenticated user is following this post.
   *
   * Returns `null` if the user is not authenticated.
   */
  isFollowed?: Maybe<Scalars['Boolean']['output']>;
  /** A list of users who liked the post. */
  likedBy: PostLikerConnection;
  /** OG meta-data of the post. Contains image url used in open graph meta tags. */
  ogMetaData?: Maybe<OpenGraphMetaData>;
  /** Preference settings for the post. Contains information about if the post is pinned to blog, comments are disabled, etc. */
  preferences: PostPreferences;
  /**
   * The previous slugs of the post. Only present if the slug has been changed.
   *
   * This could be used to create redirects for all posts from all previous slugs to the current slug.
   *
   * The latest slug is always the first element in the array.
   */
  previousSlugs: Array<Scalars['String']['output']>;
  /** The publication the post belongs to. */
  publication?: Maybe<Publication>;
  /** The date and time the post was published. */
  publishedAt: Scalars['DateTime']['output'];
  /** The number of hearts on the post. Shows how many users liked the post. */
  reactionCount: Scalars['Int']['output'];
  /** The estimated time to read the post in minutes. */
  readTimeInMinutes: Scalars['Int']['output'];
  /** The number of replies on the post. */
  replyCount: Scalars['Int']['output'];
  /** The number of comments on the post. */
  responseCount: Scalars['Int']['output'];
  /** SEO information of the post. Contains title and description used in meta tags. */
  seo?: Maybe<Seo>;
  /** Information of the series the post belongs to. */
  series?: Maybe<Series>;
  /** The slug of the post. Used as address of the post on blog. Example - https://johndoe.com/my-post-slug */
  slug: Scalars['String']['output'];
  /** Boolean flag to identify whether or not the post is sourced from GitHub. */
  sourcedFromGithub: Scalars['Boolean']['output'];
  /** The subtitle of the post. Subtitle is a short description of the post which is also used in SEO if meta tags are not provided. */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Returns list of tags added to the post. Contains tag id, name, slug, etc. */
  tags?: Maybe<Array<Tag>>;
  /** The title of the post. */
  title: Scalars['String']['output'];
  /** The date and time the post was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Complete URL of the post including the domain name. Example - https://johndoe.com/my-post-slug */
  url: Scalars['String']['output'];
  /** The number of views on the post. Can be used to show the popularity of the post. */
  views: Scalars['Int']['output'];
};


/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type PostCommentersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
  sortBy?: InputMaybe<PostCommenterSortBy>;
};


/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
  sortBy?: InputMaybe<PostCommentSortBy>;
};


/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type PostLikedByArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostLikerFilter>;
  first: Scalars['Int']['input'];
};

/** The author type of a post from a user's perspective */
export enum PostAuthorType {
  /** The user has authored the post. */
  Author = 'AUTHOR',
  /** The user is a co-author of post. */
  CoAuthor = 'CO_AUTHOR'
}

export type PostBadge = Node & {
  __typename?: 'PostBadge';
  /** Unique identifier. */
  id: Scalars['ID']['output'];
  /** The type of the badge. */
  type: PostBadgeType;
};

export enum PostBadgeType {
  FeaturedDailyDotDev = 'FEATURED_DAILY_DOT_DEV',
  FeaturedHashnode = 'FEATURED_HASHNODE'
}

export type PostBadgesFeature = Feature & {
  __typename?: 'PostBadgesFeature';
  /** Whether or not the user has chosen to show badges on the post. */
  isEnabled: Scalars['Boolean']['output'];
  items: Array<PostBadge>;
};

/**
 * Connection for comments. Contains a list of edges containing nodes.
 * Each node holds a comment.
 * Page info contains information about pagination like hasNextPage and endCursor.
 * Total documents contains the total number of comments.
 */
export type PostCommentConnection = Connection & {
  __typename?: 'PostCommentConnection';
  /** A list of edges containing comments as nodes. */
  edges: Array<PostCommentEdge>;
  /** Information about pagination in a connection. */
  pageInfo: PageInfo;
  /** Total number of nodes available i.e. number of comments. */
  totalDocuments: Scalars['Int']['output'];
};

/** A comment on the post. Contains information about the content of the comment, user who commented, etc. */
export type PostCommentEdge = Edge & {
  __typename?: 'PostCommentEdge';
  /** The cursor for this node used for pagination. */
  cursor: Scalars['String']['output'];
  /** The comment on the post. */
  node: Comment;
};

/** Sorting options for comments. Used to sort comments by top or recent. */
export enum PostCommentSortBy {
  /** Sorts comments by recency. */
  Recent = 'RECENT',
  /** Sorts comments by popularity. */
  Top = 'TOP'
}

/**
 * Connection for commenters (users). Contains a list of edges containing nodes.
 * Each node holds commenter.
 * Page info contains information about pagination like hasNextPage and endCursor.
 * Total documents contains the total number of commenters.
 */
export type PostCommenterConnection = Connection & {
  __typename?: 'PostCommenterConnection';
  /** A list of edges containing commenters as nodes. */
  edges: Array<PostCommenterEdge>;
  /** Information about pagination in a connection. */
  pageInfo: PageInfo;
  /** Total number of nodes available i.e. number of commenters. */
  totalDocuments: Scalars['Int']['output'];
};

/** A commenter on the post. Contains information about the user who commented. */
export type PostCommenterEdge = Edge & {
  __typename?: 'PostCommenterEdge';
  /** The cursor for this node used for pagination. */
  cursor: Scalars['String']['output'];
  /** The commenter on the post. */
  node: User;
};

/** Sorting options for commenters. Used to sort commenters by popularity or recency. */
export enum PostCommenterSortBy {
  /** Sorts commenters by popularity. */
  Popular = 'POPULAR',
  /** Sorts commenters by recency. */
  Recent = 'RECENT'
}

/** Contains information about the cover image of the post. */
export type PostCoverImage = {
  __typename?: 'PostCoverImage';
  /** Provides attribution information for the cover image, if available. */
  attribution?: Maybe<Scalars['String']['output']>;
  /** True if the image attribution should be hidden. */
  isAttributionHidden: Scalars['Boolean']['output'];
  /** Indicates whether the cover image is in portrait orientation. */
  isPortrait: Scalars['Boolean']['output'];
  /** The name of the photographer who captured the cover image. */
  photographer?: Maybe<Scalars['String']['output']>;
  /** The URL of the cover image. */
  url: Scalars['String']['output'];
};

/** Contains a post and a cursor for pagination. */
export type PostEdge = Edge & {
  __typename?: 'PostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The node holding the Post information */
  node: Post;
};

export type PostFeatures = {
  __typename?: 'PostFeatures';
  badges: PostBadgesFeature;
  tableOfContents: TableOfContentsFeature;
};

/**
 * Connection for users who liked the post. Contains a list of edges containing nodes.
 * Each node is a user who liked the post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 * Total documents contains the total number of users who liked the post.
 */
export type PostLikerConnection = Connection & {
  __typename?: 'PostLikerConnection';
  /** A list of edges containing users as nodes */
  edges: Array<PostLikerEdge>;
  /** Information about pagination in a connection. */
  pageInfo: PageInfo;
  /** Total number of nodes available i.e. number of users who liked the post. */
  totalDocuments: Scalars['Int']['output'];
};

/** A user who liked the post. Contains information about the user and number of reactions added by the user. */
export type PostLikerEdge = Edge & {
  __typename?: 'PostLikerEdge';
  /** The cursor for this node used for pagination. */
  cursor: Scalars['String']['output'];
  /** The user who liked the post. */
  node: User;
  /** The number of reaction added by the user. */
  reactionCount: Scalars['Int']['output'];
};

export type PostLikerFilter = {
  /** Only return likes from users with the given user IDs. */
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Contains Post preferences. Used to determine if the post is pinned to blog, comments are disabled, or cover image is sticked to bottom. */
export type PostPreferences = {
  __typename?: 'PostPreferences';
  /** A flag to indicate if the comments are disabled for the post. */
  disableComments: Scalars['Boolean']['output'];
  /** Whether or not the post is hidden from the Hashnode community. */
  isDelisted: Scalars['Boolean']['output'];
  /** A flag to indicate if the post is pinned to blog. Pinned post is shown on top of the blog. */
  pinnedToBlog: Scalars['Boolean']['output'];
  /** A flag to indicate if the cover image is shown below title of the post. Default position of cover is top of title. */
  stickCoverToBottom: Scalars['Boolean']['output'];
};

/** Contains the publication's preferences for layout, theme and other personalisations. */
export type Preferences = {
  __typename?: 'Preferences';
  /** The publication's darkmode preferences. Can be used to load blog in dark mode by default and add a custom dark mode logo. */
  darkMode?: Maybe<DarkModePreferences>;
  /** A flag indicating if the hashnode's footer branding is disabled for the publication. */
  disableFooterBranding?: Maybe<Scalars['Boolean']['output']>;
  /** An object containing pages enabled for the publication. */
  enabledPages?: Maybe<PagesPreferences>;
  /** A flag indicating if subscription popup needs to be shown to be shown for the publication */
  isSubscriptionModalDisabled?: Maybe<Scalars['Boolean']['output']>;
  /** The selected publication's layout, can be stacked, grid or magazine. */
  layout?: Maybe<PublicationLayout>;
  /** The publication's logo url. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The items in the publication's navigation bar. */
  navbarItems: Array<PublicationNavbarItem>;
};

export type ProTeamFeature = Feature & {
  __typename?: 'ProTeamFeature';
  /** A flag indicating if the Pro team feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

export type ProjectViewEdge = Edge & {
  __typename?: 'ProjectViewEdge';
  cursor: Scalars['String']['output'];
  node: DocsViews;
};

export type ProjectViewsConnection = Connection & {
  __typename?: 'ProjectViewsConnection';
  edges: Array<ProjectViewEdge>;
  pageInfo: PageInfo;
};

/**
 * Filter for project views.
 *
 * Individual filters are combined with an AND condition whereas multiple values for the same filter are combined with an OR condition.
 *
 * Example: `documentationGuideIds: ["1", "2"], operatingSystems: ["Mac OS"]` will return views for posts with ID 1 or 2 AND operating system Mac OS.
 */
export type ProjectViewsFilter = {
  /**
   * Filter by one or multiple api reference guide IDs.
   *
   * If multiple IDs are provided, the filter will be applied as an OR condition.
   */
  apiReferenceGuideIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filter by one or multiple browsers.
   *
   * If multiple browsers are provided, the filter will be applied as an OR condition.
   */
  browsers?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Filter by one or multiple countries.
   *
   * If multiple countries are provided, the filter will be applied as an OR condition.
   */
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Filter by one or multiple device types.
   *
   * If multiple device types are provided, the filter will be applied as an OR condition.
   */
  deviceTypes?: InputMaybe<Array<DeviceType>>;
  /**
   * Filter by one or multiple documentation guide IDs.
   *
   * If multiple IDs are provided, the filter will be applied as an OR condition.
   */
  documentationGuideIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filter by one or multiple operating systems.
   *
   * If multiple operating systems are provided, the filter will be applied as an OR condition.
   */
  operatingSystems?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Filter by one or multiple page IDs.
   *
   * If multiple IDs are provided, the filter will be applied as an OR condition.
   */
  pageIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filter by one or multiple paths.
   *
   * If multiple paths are provided, the filter will be applied as an OR condition.
   */
  paths?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Filter by one or multiple referrer hosts.
   *
   * If multiple referrer hosts are provided, the filter will be applied as an OR condition.
   */
  referrerHosts?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter based on time range. */
  time?: InputMaybe<TimeFilter>;
};

export type ProjectViewsGroupBy = {
  /**
   * Group by one analytics dimensions.
   *
   * Can not be used together with `granularity`.
   */
  dimension?: InputMaybe<DocsAnalyticsDimension>;
  /**
   * Group by time. Without this, all views over time will be aggregated.
   *
   * Can not be used together with `dimension`.
   */
  granularity?: InputMaybe<TimeGranularity>;
};

export type ProjectViewsOptions = {
  /**
   * The timezone that is used for grouping the views by time.
   * E.g. if you group by day, the timezone will be used to determine the start of the day as indicated by `to` and `from`.
   *
   * It has no effect outside of time grouping.
   *
   * Default is `UTC`.
   */
  groupingTimezone?: InputMaybe<Scalars['TimeZone']['input']>;
};

export type ProjectViewsSortBy = {
  /** Sort the views by the total number of views. Can only be used when grouped by `dimension`. */
  viewCount: SortOrder;
};

export type ProjectVisitorsConnection = Connection & {
  __typename?: 'ProjectVisitorsConnection';
  edges: Array<ProjectVisitorsEdge>;
  pageInfo: PageInfo;
};

export type ProjectVisitorsEdge = Edge & {
  __typename?: 'ProjectVisitorsEdge';
  cursor: Scalars['String']['output'];
  node: DocsVisitors;
};

/**
 * Filter for project visitors.
 *
 * Individual filters are combined with an AND condition whereas multiple values for the same filter are combined with an OR condition.
 *
 * Example: `documentationGuideIds: ["1", "2"], operatingSystems: ["Mac OS"]` will return visitors for posts with ID 1 or 2 AND operating system Mac OS.
 */
export type ProjectVisitorsFilter = {
  /**
   * Filter by one or multiple api reference guide IDs.
   *
   * If multiple IDs are provided, the filter will be applied as an OR condition.
   */
  apiReferenceGuideIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filter by one or multiple browsers.
   *
   * If multiple browsers are provided, the filter will be applied as an OR condition.
   */
  browsers?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Filter by one or multiple countries.
   *
   * If multiple countries are provided, the filter will be applied as an OR condition.
   */
  countries?: InputMaybe<Array<CountryCodeAlpha2>>;
  /**
   * Filter by one or multiple device types.
   *
   * If multiple device types are provided, the filter will be applied as an OR condition.
   */
  deviceTypes?: InputMaybe<Array<DeviceType>>;
  /**
   * Filter by one or multiple documentation guide IDs.
   *
   * If multiple IDs are provided, the filter will be applied as an OR condition.
   */
  documentationGuideIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filter by one or multiple operating systems.
   *
   * If multiple operating systems are provided, the filter will be applied as an OR condition.
   */
  operatingSystems?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Filter by one or multiple page IDs.
   *
   * If multiple IDs are provided, the filter will be applied as an OR condition.
   */
  pageIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filter by one or multiple paths.
   *
   * If multiple paths are provided, the filter will be applied as an OR condition.
   */
  paths?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Filter by one or multiple referrer hosts.
   *
   * If multiple referrer hosts are provided, the filter will be applied as an OR condition.
   */
  referrerHosts?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter based on time range. */
  time?: InputMaybe<TimeFilter>;
};

export type ProjectVisitorsGroupBy = {
  /**
   * Group by one analytics dimensions.
   *
   * Can not be used together with `granularity`.
   */
  dimension?: InputMaybe<DocsAnalyticsDimension>;
  /**
   * Group by time. Without this, all views over time will be aggregated.
   *
   * Can not be used together with `dimension`.
   */
  granularity?: InputMaybe<TimeGranularity>;
};

export type ProjectVisitorsOptions = {
  /**
   * The timezone that is used for grouping the views by time.
   * E.g. if you group by day, the timezone will be used to determine the start of the day as indicated by `to` and `from`.
   *
   * It has no effect outside of time grouping.
   *
   * Default is `UTC`.
   */
  groupingTimezone?: InputMaybe<Scalars['TimeZone']['input']>;
};

/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type Publication = Node & {
  __typename?: 'Publication';
  /** The about section of the publication. */
  about?: Maybe<Content>;
  /** Returns the list of drafts in the publication */
  allDrafts: DraftConnection;
  /** Returns all the scheduled drafts of the publication. */
  allScheduledDrafts: DraftConnection;
  /** Boolean flag indicating if the publication allows edits by contributors */
  allowContributorEdits: Scalars['Boolean']['output'];
  /** The author who owns the publication. */
  author: User;
  /** The canonical URL of the publication. */
  canonicalURL: Scalars['String']['output'];
  /** The description of the publication, used in og:description meta tag. Fall backs to Publication.about.text if no SEO description is provided. */
  descriptionSEO?: Maybe<Scalars['String']['output']>;
  /** The title of the publication. Shown in blog home page. */
  displayTitle?: Maybe<Scalars['String']['output']>;
  /** Domain information of the publication. */
  domainInfo: DomainInfo;
  /** Returns the list of drafts of the authenticated user in the publication. */
  drafts: DraftConnection;
  /** Returns the publication's email imports, used with newsletter feature. */
  emailImport?: Maybe<EmailImport>;
  /** The favicon of the publication. Used in browser tab. */
  favicon?: Maybe<Scalars['String']['output']>;
  /** Object containing information about beta features enabled for the publication. */
  features: PublicationFeatures;
  /** Total number of followers of the publication. */
  followersCount?: Maybe<Scalars['Int']['output']>;
  /** Whether the publication has earned any badges or not. */
  hasBadges: Scalars['Boolean']['output'];
  /** Color code of the header color of the publication. Used to style header of blog. */
  headerColor?: Maybe<Scalars['String']['output']>;
  /** The ID of the publication. */
  id: Scalars['ID']['output'];
  /**
   * Summary of the contact information and information related to copyrights, usually used in German-speaking countries.
   * @deprecated Use `imprintV2` instead. Will be removed after 16/12/2023.
   */
  imprint?: Maybe<Scalars['String']['output']>;
  /** Summary of the contact information and information related to copyrights, usually used in German-speaking countries. */
  imprintV2?: Maybe<Content>;
  /** The integrations connected to the publication. */
  integrations?: Maybe<PublicationIntegrations>;
  /** Details of publication invites. Returns null if publication is not a team publication. */
  invites?: Maybe<PublicationInvite>;
  /** Returns true if GitHub backup is configured and active and false otherwise. */
  isGitHubBackupEnabled: Scalars['Boolean']['output'];
  /** Returns whether the publication's GitHub source repo is connected. */
  isGithubAsSourceConnected: Scalars['Boolean']['output'];
  /** A flag to indicate if the publication is using Headless CMS. This can be used to check if the post redirect needs authentication. */
  isHeadless: Scalars['Boolean']['output'];
  /** True if the publication is a team publication and false otherwise. */
  isTeam: Scalars['Boolean']['output'];
  /** Links to the publication's social media profiles. */
  links?: Maybe<PublicationLinks>;
  members: PublicationMemberConnection;
  /** The meta tags associated with the publication. */
  metaTags?: Maybe<Scalars['String']['output']>;
  /** Information about the publication's Open Graph metadata i.e. image. */
  ogMetaData: OpenGraphMetaData;
  /** Returns the pinned post of the publication. */
  pinnedPost?: Maybe<Post>;
  /** Returns the post with the given slug. */
  post?: Maybe<Post>;
  /** Returns the list of posts in the publication. */
  posts: PublicationPostConnection;
  postsViaPage: PublicationPostPageConnection;
  /** The publication preferences around layout, theme and other personalisations. */
  preferences: Preferences;
  /** Returns a paginated list of public members of the publication. */
  publicMembers: PublicationMemberConnection;
  /** Publications that are recommended by this publication. */
  recommendedPublications: Array<UserRecommendedPublicationEdge>;
  /** Publications that are recommending this publication. */
  recommendingPublications: PublicationUserRecommendingPublicationConnection;
  /**
   * Returns a post by a previous slug. It does not resolve a post by its current slug.
   *
   * If a slug has been changed, we'll create a redirect from the old slug to the new one.
   * With `redirectedPost` you can resolve a post by the old slug.
   *
   * This can be used to redirect a user to the new post slug (via `redirectedPost.slug`).
   */
  redirectedPost?: Maybe<Post>;
  /** Configured redirection rules for the publication. */
  redirectionRules: Array<RedirectionRule>;
  /** Returns the scheduled drafts of the publication by the authenticated user. */
  scheduledDrafts: DraftConnection;
  /** Returns series by slug in the publication. */
  series?: Maybe<Series>;
  /** Returns the list of series in the publication. */
  seriesList: SeriesConnection;
  /** Contains the publication's sponsorships information. */
  sponsorship?: Maybe<PublicationSponsorship>;
  /** Returns the static page with the given slug. */
  staticPage?: Maybe<StaticPage>;
  /** Returns a list of static pages in the publication. */
  staticPages: StaticPageConnection;
  /** Returns the list of submitted drafts in the publication. */
  submittedDrafts: DraftConnection;
  /**
   * The title of the publication.
   * Title is used as logo if logo is not provided.
   */
  title: Scalars['String']['output'];
  /** The total amount of recommended publications by this publication. */
  totalRecommendedPublications: Scalars['Int']['output'];
  /** The domain of the publication. Used to access publication. Example https://johndoe.com */
  url: Scalars['String']['output'];
  /** Determines the structure of the post URLs. */
  urlPattern: UrlPattern;
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationAllDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PublicationSearchableDraftConnectionFilter>;
  first: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationAllScheduledDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PublicationSearchableDraftConnectionFilter>;
  first: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PublicationDraftConnectionFilter>;
  first: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationMembersArgs = {
  filter?: InputMaybe<PublicationMemberConnectionFilter>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationPostArgs = {
  slug: Scalars['String']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PublicationPostConnectionFilter>;
  first: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationPostsViaPageArgs = {
  filter?: InputMaybe<PublicationPostsViaPageFilter>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationPublicMembersArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationRecommendingPublicationsArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationRedirectedPostArgs = {
  slug: Scalars['String']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationScheduledDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PublicationDraftConnectionFilter>;
  first: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationSeriesArgs = {
  slug: Scalars['String']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationSeriesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationStaticPageArgs = {
  slug: Scalars['String']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationStaticPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationSubmittedDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PublicationDraftConnectionFilter>;
  first: Scalars['Int']['input'];
};

/**
 * Connection to get list of drafts in publications.
 * Returns a list of edges which contains the drafts in publication and cursor to the last item of the previous page.
 */
export type PublicationDraftConnectionFilter = {
  /** Search filter will be applied to the title of a draft */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Contains the publication's beta features. */
export type PublicationFeatures = {
  __typename?: 'PublicationFeatures';
  /**
   * Audio player for blog posts.
   * @deprecated Audio Blogs are not supported anymore. This field will be removed 18/04/23
   */
  audioBlog: AudioBlogFeature;
  /** Individual styling for the publication. */
  customCSS: CustomCssFeature;
  /** GPT Bot crawler to index the publication. */
  gptBotCrawling: GptBotCrawlingFeature;
  /** Headless CMS for the publication. */
  headlessCMS: HeadlessCmsFeature;
  /** Newsletter feature for the publication which adds a `/newsletter` route for collecting subscribers and allows sending out newsletters. */
  newsletter: NewsletterFeature;
  /** Flag to denote if publication is a pro team's publication. */
  proTeam: ProTeamFeature;
  /** Show the read time for blog posts. */
  readTime: ReadTimeFeature;
  /** Widget that shows up if a text on a blog post is selected. Allows for easy sharing or copying of the selected text. */
  textSelectionSharer: TextSelectionSharerFeature;
  /** Show the view count for blog posts. */
  viewCount: ViewCountFeature;
};

/**
 * Contains the publication's integrations.
 * Used to connect the publication with third party services like Google Analytics, Facebook Pixel, etc.
 */
export type PublicationIntegrations = {
  __typename?: 'PublicationIntegrations';
  /** Custom domain for integration with Fathom Analytics. */
  fathomCustomDomain?: Maybe<Scalars['String']['output']>;
  /** A flag indicating if the custom domain is enabled for integration with Fathom Analytics. */
  fathomCustomDomainEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Fathom Analytics Site ID for integration with Fathom Analytics. */
  fathomSiteID?: Maybe<Scalars['String']['output']>;
  /** FB Pixel ID for integration with Facebook Pixel. */
  fbPixelID?: Maybe<Scalars['String']['output']>;
  /** Google Tag Manager ID for integration with Google Tag Manager. */
  gTagManagerID?: Maybe<Scalars['String']['output']>;
  /** Google Analytics Tracking ID for integration with Google Analytics. */
  gaTrackingID?: Maybe<Scalars['String']['output']>;
  /** Hotjar Site ID for integration with Hotjar. */
  hotjarSiteID?: Maybe<Scalars['String']['output']>;
  /** Koala Public Key for integration with Koala. */
  koalaPublicKey?: Maybe<Scalars['String']['output']>;
  /** Matomo Site ID for integration with Matomo Analytics. */
  matomoSiteID?: Maybe<Scalars['String']['output']>;
  /** Matomo URL for integration with Matomo Analytics. */
  matomoURL?: Maybe<Scalars['String']['output']>;
  /** MS Clarity ID for integration with Microsoft Clarity. */
  msClarityID?: Maybe<Scalars['String']['output']>;
  /** A flag indicating if the custom domain is enabled for integration with Plausible Analytics. */
  plausibleAnalyticsEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** The share ID for the Hashnode-provided Umami analytics instance. */
  umamiShareId?: Maybe<Scalars['String']['output']>;
  /** The ID for the Hashnode-provided Umami analytics instance. */
  umamiWebsiteUUID?: Maybe<Scalars['String']['output']>;
  /** Web Monetization Payment Pointer for integration with Web Monetization. */
  wmPaymentPointer?: Maybe<Scalars['String']['output']>;
};

/** Contains the publication invite information. */
export type PublicationInvite = {
  __typename?: 'PublicationInvite';
  /**
   * Signifies if invite links in role-based invites are active.
   * Users trying to join by role-based invite can only join if this is enabled.
   */
  areRoleBasedInviteLinksActive: Scalars['Boolean']['output'];
  pendingInvites: PendingInviteConnection;
  /** The paginated list of role based invites. */
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

/** Contains publication's layout choices. */
export enum PublicationLayout {
  /** Changes the layout of blog into grid 3 post cards per row. */
  Grid = 'grid',
  /**
   * Changes the layout of blog into magazine style.
   * This is the newest layout.
   */
  Magazine = 'magazine',
  /** Changes the layout of blog into stacked list of posts. */
  Stacked = 'stacked'
}

/** Contains the publication's social media links. */
export type PublicationLinks = {
  __typename?: 'PublicationLinks';
  /** Bluesky URL of the publication. */
  bluesky?: Maybe<Scalars['String']['output']>;
  /** Daily.dev URL of the publication. */
  dailydev?: Maybe<Scalars['String']['output']>;
  /** Facebook URL of the publication. */
  facebook?: Maybe<Scalars['String']['output']>;
  /** GitHub URL of the publication. */
  github?: Maybe<Scalars['String']['output']>;
  /** Hashnode profile of author of the publication. */
  hashnode?: Maybe<Scalars['String']['output']>;
  /** Instagram URL of the publication. */
  instagram?: Maybe<Scalars['String']['output']>;
  /** LinkedIn URL of the publication. */
  linkedin?: Maybe<Scalars['String']['output']>;
  /** Mastodon URL of the publication. */
  mastodon?: Maybe<Scalars['String']['output']>;
  /** Twitter URL of the publication. */
  twitter?: Maybe<Scalars['String']['output']>;
  /** Website URL of the publication. */
  website?: Maybe<Scalars['String']['output']>;
  /** YouTube URL of the publication. */
  youtube?: Maybe<Scalars['String']['output']>;
};

/** Contains the publication member information. */
export type PublicationMember = Node & {
  __typename?: 'PublicationMember';
  /** The ID of the publication member. */
  id: Scalars['ID']['output'];
  /**
   * Denotes if the member is public or private
   * A private member is not visible on members page
   */
  privacyState?: Maybe<PublicationMemberPrivacyState>;
  /** The role of the user in the publication. */
  role: UserPublicationRole;
  /** The user who is a member of the publication. */
  user?: Maybe<User>;
};

export type PublicationMemberConnection = PageConnection & {
  __typename?: 'PublicationMemberConnection';
  /** A list of members */
  nodes: Array<PublicationMember>;
  /** Information for page based pagination in Member connection. */
  pageInfo: OffsetPageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** The filter for the publication member connection. */
export type PublicationMemberConnectionFilter = {
  /** Search filter can be used to filter members by their username or email. */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Publication member privacy state on members page */
export enum PublicationMemberPrivacyState {
  /** The member is private and not visible on the members page. */
  Private = 'PRIVATE',
  /** The member is public and visible on the members page. */
  Public = 'PUBLIC'
}

/** Contains the publication's navbar items. */
export type PublicationNavbarItem = {
  __typename?: 'PublicationNavbarItem';
  /** The unique identifier of the navbar item. */
  id: Scalars['ID']['output'];
  /** The label of the navbar item. */
  label?: Maybe<Scalars['String']['output']>;
  /** The static page added to the navbar item. */
  page?: Maybe<StaticPage>;
  /**
   * The order of the navbar item.
   * @deprecated Navbar items are already returned in the correct order. Priority value is not needed and might be 0 in most cases.
   */
  priority?: Maybe<Scalars['Int']['output']>;
  /** The series added to the navbar item. */
  series?: Maybe<Series>;
  /** The type of the navbar item, can be series, link or page. */
  type: PublicationNavigationType;
  /** The URL of the navbar item. */
  url?: Maybe<Scalars['String']['output']>;
};

/** The type of the navbar item, can be series, link or page. */
export enum PublicationNavigationType {
  /** The navbar item is a link. */
  Link = 'link',
  /** The navbar item is a static page. */
  Page = 'page',
  /** The navbar item is a series. */
  Series = 'series'
}

/**
 * Connection for posts within a publication. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type PublicationPostConnection = Connection & {
  __typename?: 'PublicationPostConnection';
  /** A list of edges containing Post information */
  edges: Array<PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/**
 * Connection to get list of posts in publications.
 * Returns a list of edges which contains the posts in publication and cursor to the last item of the previous page.
 */
export type PublicationPostConnectionFilter = {
  /** Only return posts that are deleted. Query returns active posts by default, set this to true to return deleted posts. */
  deletedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Remove pinned post from the result set. */
  excludePinnedPost?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Filtering by tag slugs and tag IDs will return posts that match either of the filters.
   *
   * It is an "OR" filter and not an "AND" filter.
   */
  tagSlugs?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Filtering by tag slugs and tag IDs will return posts that match either of the filters.
   *
   * It is an "OR" filter and not an "AND" filter.
   */
  tags?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
};

export type PublicationPostPageConnection = PageConnection & {
  __typename?: 'PublicationPostPageConnection';
  /** The posts belonging to the publication. */
  nodes: Array<Post>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
  /** The total number of posts. */
  totalDocuments: Scalars['Int']['output'];
};

export type PublicationPostsViaPageFilter = {
  /** Remove pinned post from the result set. */
  excludePinnedPosts?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Filtering by tag slugs and tag IDs will return posts that match either of the filters.
   *
   * It is an "OR" filter and not an "AND" filter.
   */
  tagSlugs?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Filtering by tag slugs and tag IDs will return posts that match either of the filters.
   *
   * It is an "OR" filter and not an "AND" filter.
   */
  tags?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * ConnectionFilter to get list of drafts in publications.
 * The filters are combined with an "AND" operation.
 */
export type PublicationSearchableDraftConnectionFilter = {
  /** An array of author Ids to filter the drafts. */
  authorIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Search filter will be applied to the title of a draft */
  search?: InputMaybe<Scalars['String']['input']>;
  /** An array of tag Ids to filter the drafts. */
  tagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Filter based on time range. */
  time?: InputMaybe<TimeFilter>;
};

/**
 * Contains the publication's Sponsorship information.
 * User can sponsor their favorite publications and pay them directly using Stripe.
 */
export type PublicationSponsorship = {
  __typename?: 'PublicationSponsorship';
  /**
   * The content shared by author of the publication to their sponsors.
   * This is used as note to inform that author is open for sponsorship.
   */
  content?: Maybe<Content>;
  /** The Stripe configuration of the publication's Sponsorship. */
  stripe?: Maybe<StripeConfiguration>;
};

export type PublicationUserRecommendingPublicationConnection = PageConnection & {
  __typename?: 'PublicationUserRecommendingPublicationConnection';
  /** A list of edges containing Post information */
  edges: Array<UserRecommendingPublicationEdge>;
  /** Publications recommending this publication. */
  nodes: Array<Publication>;
  /** Information for page based pagination in Post connection. */
  pageInfo: OffsetPageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

export type PublicationViewEdge = Edge & {
  __typename?: 'PublicationViewEdge';
  cursor: Scalars['String']['output'];
  node: Views;
};

export type PublicationVisitorsEdge = Edge & {
  __typename?: 'PublicationVisitorsEdge';
  cursor: Scalars['String']['output'];
  node: Visitors;
};

export type PublishDocumentationApiReferenceInput = {
  guideSlug: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

export type PublishDocumentationApiReferencePayload = {
  __typename?: 'PublishDocumentationApiReferencePayload';
  guide?: Maybe<DocumentationApiReference>;
};

export type PublishDocumentationGuideInput = {
  guideSlug: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

export type PublishDocumentationGuidePayload = {
  __typename?: 'PublishDocumentationGuidePayload';
  guide?: Maybe<DocumentationGuide>;
};

export type PublishDocumentationPageDraftInput = {
  guideSlug: Scalars['String']['input'];
  pageId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
};

export type PublishDocumentationPageDraftPayload = {
  __typename?: 'PublishDocumentationPageDraftPayload';
  guide?: Maybe<DocumentationGuide>;
  page?: Maybe<DocumentationPage>;
};

export type PublishDraftInput = {
  /** The id of the draft that should be published */
  draftId: Scalars['ObjectId']['input'];
};

export type PublishDraftPayload = {
  __typename?: 'PublishDraftPayload';
  /** The newly created post based on the draft */
  post?: Maybe<Post>;
};

/** Contains information about the post to be published. */
export type PublishPostInput = {
  /** Ids of the co-authors of the post. */
  coAuthors?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  /** Content of the post in markdown format. */
  contentMarkdown: Scalars['String']['input'];
  /** Options for the cover image of the post. */
  coverImageOptions?: InputMaybe<CoverImageOptionsInput>;
  /** A flag to indicate if the comments are disabled for the post. */
  disableComments?: InputMaybe<Scalars['Boolean']['input']>;
  /** Information about the meta tags added to the post, used for SEO purpose. */
  metaTags?: InputMaybe<MetaTagsInput>;
  /** The URL of the original article if the post is imported from an external source. */
  originalArticleURL?: InputMaybe<Scalars['String']['input']>;
  /** The ID of publication the post belongs to. */
  publicationId: Scalars['ObjectId']['input'];
  /**
   * Publish the post on behalf of another user who is a member of the publication.
   *
   * Only applicable for team publications.
   */
  publishAs?: InputMaybe<Scalars['ObjectId']['input']>;
  /** Date when the post is published. */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Providing a seriesId will add the post to that series. */
  seriesId?: InputMaybe<Scalars['ObjectId']['input']>;
  /** Settings for the post like table of contents and newsletter activation. */
  settings?: InputMaybe<PublishPostSettingsInput>;
  /** Slug of the post. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The subtitle of the post. */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /**
   * A list of tags to add to the post. You can get a list of popular tags available on Hashnode here.
   * https://github.com/Hashnode/support/blob/main/misc/tags.json
   */
  tags?: InputMaybe<Array<PublishPostTagInput>>;
  /** The title of the post. */
  title: Scalars['String']['input'];
};

export type PublishPostPayload = {
  __typename?: 'PublishPostPayload';
  post?: Maybe<Post>;
};

export type PublishPostSettingsInput = {
  /** A flag to indicate if the post is delisted, used to hide the post from public feed. */
  delisted?: InputMaybe<Scalars['Boolean']['input']>;
  /** A flag to indicate if the post contains table of content */
  enableTableOfContent?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a newsletter for this post. */
  isNewsletterActivated?: InputMaybe<Scalars['Boolean']['input']>;
  /** A flag to indicate if the post is scheduled. */
  scheduled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flag to indicate if the slug is overridden by the user. */
  slugOverridden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PublishPostTagInput = {
  /**
   * A tag id that is referencing an existing tag.
   *
   * Either this or name and slug should be provided. If both are provided, the id will be used.
   */
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  /**
   * A name of a new tag to create.
   *
   * Either this and slug or id should be provided. If both are provided, the id will be used.
   */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * A slug of a new tag to create.
   *
   * Either this and name or id should be provided. If both are provided, the id will be used.
   */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  checkCustomDomainAvailability: CheckCustomDomainAvailabilityResult;
  checkSubdomainAvailability: CheckSubdomainAvailabilityResult;
  documentationProject?: Maybe<DocumentationProject>;
  /**
   * Returns a draft by ID.
   * Draft is a post that is not published yet.
   */
  draft?: Maybe<Draft>;
  /**
   * Returns a paginated list of posts based on the provided filter.
   * Used in Hashnode home feed.
   */
  feed: FeedPostConnection;
  /** Returns the current authenticated user. Only available to the authenticated user. */
  me: MyUser;
  /** Returns post by ID. Can be used to render post page on blog. */
  post?: Maybe<Post>;
  /**
   * Returns the publication with the given ID or host.
   * User can pass anyone of them.
   */
  publication?: Maybe<Publication>;
  /** Get a scheduled post by ID. */
  scheduledPost?: Maybe<ScheduledPost>;
  /** Returns a paginated list of posts based on search query for a particular publication id. */
  searchPostsOfPublication: SearchPostConnection;
  /** Returns tag details by its slug. */
  tag?: Maybe<Tag>;
  /** Returns users who have most actively participated in discussions by commenting in the last 7 days. */
  topCommenters: CommenterUserConnection;
  /** Returns the user with the username. */
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
  id?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QuerySearchPostsOfPublicationArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter: SearchPostsOfPublicationFilter;
  first: Scalars['Int']['input'];
};


export type QueryTagArgs = {
  slug: Scalars['String']['input'];
};


export type QueryTopCommentersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export type RssImport = Node & {
  __typename?: 'RSSImport';
  id: Scalars['ID']['output'];
  /** Indicates whether posts should be imported as drafts or not */
  importAsDrafts: Scalars['Boolean']['output'];
  /** RSS Tag name to be considered as the post content for automatic import. */
  rssTagName?: Maybe<Scalars['String']['output']>;
  /** The URL pointing to the RSS feed. */
  rssURL: Scalars['String']['output'];
  /** Indicates whether the posts should be scraped or not */
  scrapePosts: Scalars['Boolean']['output'];
};

/**
 * Contains the flag indicating if the read time feature is enabled or not.
 * User can enable or disable the read time feature from the publication settings.
 * Shows read time on blogs if enabled.
 */
export type ReadTimeFeature = Feature & {
  __typename?: 'ReadTimeFeature';
  /** A flag indicating if the read time feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

export type RecommendPublicationsInput = {
  recommendedPublicationIds: Array<Scalars['ID']['input']>;
  recommendingPublicationId: Scalars['ID']['input'];
};

export type RecommendPublicationsPayload = {
  __typename?: 'RecommendPublicationsPayload';
  recommendedPublications?: Maybe<Array<UserRecommendedPublicationEdge>>;
};

/** Contains a publication and a cursor for pagination. */
export type RecommendedPublicationEdge = Edge & {
  __typename?: 'RecommendedPublicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The node holding the Publication information */
  node: Publication;
};

export type RedirectionRule = Node & {
  __typename?: 'RedirectionRule';
  /** The destination URL of the redirection rule. */
  destination: Scalars['URL']['output'];
  id: Scalars['ID']['output'];
  /** The source URL of the redirection rule. */
  source: Scalars['String']['output'];
  /** The type of the redirection rule. */
  type: HttpRedirectionType;
};

/** Input to reinvite a user to a publication. */
export type ReinviteUserToPublicationInput = {
  /** The ID of the invitation to resend. */
  inviteId: Scalars['ID']['input'];
  /** The publication ID to resend the invitation from. */
  publicationId: Scalars['ID']['input'];
};

/** Response to reinviting a user to a publication. */
export type ReinviteUserToPublicationPayload = {
  __typename?: 'ReinviteUserToPublicationPayload';
  /** Signifies if the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

export type RelativeTimeRange = {
  /** The number of time periods to go back in time. */
  n: Scalars['Int']['input'];
  /** The type of time range to be used. */
  relative: TimePeriod;
};

export type RemoveCommentInput = {
  id: Scalars['ID']['input'];
};

export type RemoveCommentPayload = {
  __typename?: 'RemoveCommentPayload';
  comment?: Maybe<Comment>;
};

export type RemoveDocumentationGuideInput = {
  guideSlug: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

export type RemoveDocumentationGuidePayload = {
  __typename?: 'RemoveDocumentationGuidePayload';
  guide?: Maybe<DocumentationGuideItem>;
};

/** The input for removing a prompt from the AI search */
export type RemoveDocumentationProjectAiPromptInput = {
  projectId: Scalars['ID']['input'];
  promptId: Scalars['ID']['input'];
};

/** Response to removing a prompt from the AI search */
export type RemoveDocumentationProjectAiPromptPayload = {
  __typename?: 'RemoveDocumentationProjectAIPromptPayload';
  project: DocumentationProject;
};

export type RemoveDocumentationProjectCustomDomainInput = {
  projectId: Scalars['ID']['input'];
};

export type RemoveDocumentationProjectCustomDomainPayload = {
  __typename?: 'RemoveDocumentationProjectCustomDomainPayload';
  project?: Maybe<DocumentationProject>;
};

/** The input for removing a documentation project. */
export type RemoveDocumentationProjectInput = {
  /** The ID of the documentation project that should be removed. */
  projectId: Scalars['ID']['input'];
};

/** The input for the removal of a member from a documentation */
export type RemoveDocumentationProjectMemberInput = {
  projectId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type RemoveDocumentationProjectMemberPayload = {
  __typename?: 'RemoveDocumentationProjectMemberPayload';
  project?: Maybe<DocumentationProject>;
  removedMember?: Maybe<DocumentationProjectMember>;
};

/** The payload for removing a documentation project. */
export type RemoveDocumentationProjectPayload = {
  __typename?: 'RemoveDocumentationProjectPayload';
  /** The documentation project that was removed. */
  project?: Maybe<DocumentationProject>;
};

export type RemoveDocumentationSidebarItemInput = {
  guideSlug: Scalars['String']['input'];
  itemId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
};

export type RemoveDocumentationSidebarItemPayload = {
  __typename?: 'RemoveDocumentationSidebarItemPayload';
  guide?: Maybe<DocumentationGuide>;
};

export type RemovePostInput = {
  /** The ID of the post to remove. */
  id: Scalars['ID']['input'];
};

export type RemovePostPayload = {
  __typename?: 'RemovePostPayload';
  /** The deleted post. */
  post?: Maybe<Post>;
};

/** Input to remove a user from a publication. */
export type RemovePublicationMemberInput = {
  /** The publication ID the user is a member of. */
  publicationId: Scalars['ID']['input'];
  /** The username of the user to remove from the publication. */
  username: Scalars['String']['input'];
};

/** Response to removing a user from a publication. */
export type RemovePublicationMemberPayload = {
  __typename?: 'RemovePublicationMemberPayload';
  /** Returns the removed publication member. */
  member: PublicationMember;
};

export type RemoveRecommendationInput = {
  recommendedPublicationId: Scalars['ID']['input'];
  recommendingPublicationId: Scalars['ID']['input'];
};

export type RemoveRecommendationPayload = {
  __typename?: 'RemoveRecommendationPayload';
  recommendedPublication: Publication;
};

export type RemoveRedirectionRuleInput = {
  id: Scalars['ID']['input'];
  publicationId: Scalars['ID']['input'];
};

export type RemoveRedirectionRulePayload = {
  __typename?: 'RemoveRedirectionRulePayload';
  redirectionRule: RedirectionRule;
};

export type RemoveReplyInput = {
  commentId: Scalars['ID']['input'];
  replyId: Scalars['ID']['input'];
};

export type RemoveReplyPayload = {
  __typename?: 'RemoveReplyPayload';
  reply?: Maybe<Reply>;
};

export type RemoveSeriesInput = {
  /** The id of the series to remove. */
  id: Scalars['ID']['input'];
};

export type RemoveSeriesPayload = {
  __typename?: 'RemoveSeriesPayload';
  /** Returns the updated series. */
  series: Series;
};

export type RenameDocumentationGuideItemInput = {
  guideSlug: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

export type RenameDocumentationGuideItemPayload = {
  __typename?: 'RenameDocumentationGuideItemPayload';
  guide?: Maybe<DocumentationGuideItem>;
};

export type RenameDocumentationSidebarItemInput = {
  guideSlug: Scalars['String']['input'];
  itemId: Scalars['ID']['input'];
  label: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

export type RenameDocumentationSidebarItemPayload = {
  __typename?: 'RenameDocumentationSidebarItemPayload';
  guide?: Maybe<DocumentationGuide>;
  item?: Maybe<DocumentationSidebarItem>;
};

/**
 * Contains basic information about the reply.
 * A reply is a response to a comment.
 */
export type Reply = Node & {
  __typename?: 'Reply';
  /** The author of the reply. */
  author: User;
  /** The content of the reply in markdown and html format. */
  content: Content;
  /** The date the reply was created. */
  dateAdded: Scalars['DateTime']['output'];
  /** The ID of the reply. */
  id: Scalars['ID']['output'];
  /** Total number of reactions on the reply by the authenticated user. User must be authenticated to use this field. */
  myTotalReactions: Scalars['Int']['output'];
  /**
   * A unique string identifying the reply. Used as element id in the DOM on hashnode blogs.
   * It can be used to scroll to the reply in browser.
   */
  stamp?: Maybe<Scalars['String']['output']>;
  /** Total number of reactions on the reply. Reactions are hearts added to any reply. */
  totalReactions: Scalars['Int']['output'];
};

export type RescheduleDraftInput = {
  /** The Draft ID of the scheduled draft. */
  draftId: Scalars['ID']['input'];
  /** New scheduled date for the draft to be rescheduled. */
  publishAt: Scalars['DateTime']['input'];
};

export type RescheduleDraftPayload = {
  __typename?: 'RescheduleDraftPayload';
  /** Payload returned in response of reschedulePost mutation. */
  scheduledPost: ScheduledPost;
};

export type ResendWebhookRequestInput = {
  webhookId: Scalars['ID']['input'];
  webhookMessageId: Scalars['ID']['input'];
};

export type ResendWebhookRequestPayload = {
  __typename?: 'ResendWebhookRequestPayload';
  webhookMessage?: Maybe<WebhookMessage>;
};

export type RestorePostInput = {
  id: Scalars['ID']['input'];
};

export type RestorePostPayload = {
  __typename?: 'RestorePostPayload';
  post?: Maybe<Post>;
};

export type RetryDocumentationProjectCustomDomainVerificationInput = {
  projectId: Scalars['ID']['input'];
};

export type RetryDocumentationProjectCustomDomainVerificationPayload = {
  __typename?: 'RetryDocumentationProjectCustomDomainVerificationPayload';
  project?: Maybe<DocumentationProject>;
};

/** Input to revoke a user invitation to join a documentation project. */
export type RevokeInviteToDocumentationProjectInput = {
  /** The ID of the invite to revoke. */
  inviteId: Scalars['ID']['input'];
  /** The ID of the documentation project. */
  projectId: Scalars['ID']['input'];
};

/** Response to revoking an invitation to join a documentation project. */
export type RevokeInviteToDocumentationProjectPayload = {
  __typename?: 'RevokeInviteToDocumentationProjectPayload';
  /** The documentation project that was associated with the invite. */
  project?: Maybe<DocumentationProject>;
  /** Signifies the success of the mutation. */
  success: Scalars['Boolean']['output'];
};

/** Input to revoke a user invitation to a publication. */
export type RevokeUserInviteToPublicationInput = {
  /** The invite ID to revoke. */
  inviteId: Scalars['ID']['input'];
  /** The publication ID to revoke the invite from. */
  publicationId: Scalars['ID']['input'];
};

/** Response to revoking a user invitation to a publication. */
export type RevokeUserInviteToPublicationPayload = {
  __typename?: 'RevokeUserInviteToPublicationPayload';
  /** Signifies if the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Contains the role based invite information. */
export type RoleBasedInvite = Node & {
  __typename?: 'RoleBasedInvite';
  /** The capacity of how many members to be invited by the link. */
  capacity?: Maybe<Scalars['Int']['output']>;
  /** The date the invite was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The expiry date of the invite. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the role based invite. */
  id: Scalars['ID']['output'];
  /** Invite link of the role based invite. */
  inviteLink?: Maybe<Scalars['String']['output']>;
  /** Boolean that signifies if the invite has unlimited capacity. */
  isUnlimitedCapacity?: Maybe<Scalars['Boolean']['output']>;
  /** The role assigned to the user in the publication. */
  role: UserPublicationRole;
  /** The number of members that have already used the link to join the team. */
  usedCapacity?: Maybe<Scalars['Int']['output']>;
};

export type RoleBasedInviteConnection = PageConnection & {
  __typename?: 'RoleBasedInviteConnection';
  /** A list of invites */
  nodes: Array<RoleBasedInvite>;
  /** Information to aid in pagination. */
  pageInfo: OffsetPageInfo;
  /** The total number of invites. */
  totalDocuments: Scalars['Int']['output'];
};

/** Information to help in seo related meta tags. */
export type Seo = {
  __typename?: 'SEO';
  /** The description used in og:description tag for SEO purposes. */
  description?: Maybe<Scalars['String']['output']>;
  /** The title used in og:title tag for SEO purposes. */
  title?: Maybe<Scalars['String']['output']>;
};

export type SaveDocumentationPageDraftContentInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  guideId?: InputMaybe<Scalars['ID']['input']>;
  guideSlug?: InputMaybe<Scalars['String']['input']>;
  pageId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SaveDocumentationPageDraftContentPayload = {
  __typename?: 'SaveDocumentationPageDraftContentPayload';
  page?: Maybe<DocumentationPage>;
};

export type ScheduleDraftInput = {
  /** The Author ID of the draft that should be published */
  authorId: Scalars['ID']['input'];
  /** The id of the draft that should be published */
  draftId: Scalars['ID']['input'];
  /** The date the draft should be published */
  publishAt: Scalars['DateTime']['input'];
};

export type ScheduleDraftPayload = {
  __typename?: 'ScheduleDraftPayload';
  /** Payload returned in response of reschedulePost mutation. */
  scheduledPost: ScheduledPost;
};

/**
 * Contains basic information about the scheduled post.
 * A scheduled post is a post that is scheduled to be published in the future.
 */
export type ScheduledPost = Node & {
  __typename?: 'ScheduledPost';
  /** The date the scheduled post was created. */
  author: User;
  /** Returns the draft associated with the scheduled post. */
  draft?: Maybe<Draft>;
  /** The ID of the scheduled post. */
  id: Scalars['ID']['output'];
  /** Returns the publication the post is scheduled for. */
  publication: Publication;
  /** Returns user who scheduled the post. This is usually the author of the post. */
  scheduledBy?: Maybe<User>;
  /** The scheduled date for the post to be published. This is the date the post will be published. */
  scheduledDate: Scalars['DateTime']['output'];
};

/** Enum of all the scopes that can be used with the @requireAuth directive. */
export enum Scope {
  AcknowledgeEmailImport = 'acknowledge_email_import',
  ActiveProUser = 'active_pro_user',
  DeleteDraft = 'delete_draft',
  DocsAdminOrOwner = 'docs_admin_or_owner',
  DocsOwner = 'docs_owner',
  ImportSubscribersToPublication = 'import_subscribers_to_publication',
  InvitedDocsAdmin = 'invited_docs_admin',
  InvitedTeamUser = 'invited_team_user',
  MoveDraft = 'move_draft',
  PublicationAdmin = 'publication_admin',
  PublicationAuthor = 'publication_author',
  PublicationMember = 'publication_member',
  PublishComment = 'publish_comment',
  PublishDraft = 'publish_draft',
  PublishPost = 'publish_post',
  PublishReply = 'publish_reply',
  RecommendPublications = 'recommend_publications',
  RejectDraftSubmission = 'reject_draft_submission',
  RemoveComment = 'remove_comment',
  RemoveReply = 'remove_reply',
  RestorePost = 'restore_post',
  Signup = 'signup',
  SubmitDraft = 'submit_draft',
  TeamHashnode = 'team_hashnode',
  UpdateComment = 'update_comment',
  UpdateDraft = 'update_draft',
  UpdatePost = 'update_post',
  UpdateReply = 'update_reply',
  WebhookAdmin = 'webhook_admin',
  WriteAiSearchPrompt = 'write_ai_search_prompt',
  WriteDraft = 'write_draft',
  WriteDraftRevision = 'write_draft_revision',
  WritePost = 'write_post',
  WriteSeries = 'write_series',
  WriteStaticPage = 'write_static_page',
  WriteWidget = 'write_widget'
}

/**
 * Connection for posts within a publication search. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type SearchPostConnection = Connection & {
  __typename?: 'SearchPostConnection';
  /** A list of edges containing Post information */
  edges: Array<PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: PageInfo;
};

export type SearchPostsOfPublicationFilter = {
  /** An array of author Ids to filter the posts. */
  authorIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Only return posts that are deleted. Query returns active posts by default, set this to true to return deleted posts. */
  deletedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of publications to search from. */
  publicationId: Scalars['ObjectId']['input'];
  /** The query to be searched in post. */
  query?: InputMaybe<Scalars['String']['input']>;
  /** An array of tag Ids to filter the posts. */
  tagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Filter based on time range. */
  time?: InputMaybe<TimeFilter>;
};

export type SearchUser = Node & {
  __typename?: 'SearchUser';
  /** ID of the user. */
  id: Scalars['ID']['output'];
  /** Signifies if the user has a pending invite to the publication. Returned when the filter has pendingInviteStatus set to true. */
  pendingInviteStatus?: Maybe<Scalars['Boolean']['output']>;
  /** User node containing the user information. */
  user: User;
};

/**
 * Contains basic information about the series.
 * A series is a collection of posts that are related to each other.
 */
export type Series = Node & {
  __typename?: 'Series';
  /** Returns the user who is author of the series. */
  author: User;
  /** The cover image of the series. */
  coverImage?: Maybe<Scalars['String']['output']>;
  /** The date and time the series was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier for the series. */
  cuid?: Maybe<Scalars['ID']['output']>;
  /** The description of the series. Contains markdown and html version of the series's description. */
  description?: Maybe<Content>;
  /** The ID of the series. */
  id: Scalars['ID']['output'];
  /** The name of the series. Shown in series page. */
  name: Scalars['String']['output'];
  /** Returns a list of posts in the series. */
  posts: SeriesPostConnection;
  /** The slug of the series. Used to access series page.  Example https://johndoe.com/series/series-slug */
  slug: Scalars['String']['output'];
  /** The sort order of the series, determines if the latest posts should appear first or last in series. */
  sortOrder: SortOrder;
};


/**
 * Contains basic information about the series.
 * A series is a collection of posts that are related to each other.
 */
export type SeriesPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

/**
 * Connection for Series. Contains a list of edges containing nodes.
 * Each node is a Series.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type SeriesConnection = Connection & {
  __typename?: 'SeriesConnection';
  /** A list of edges containing Series information */
  edges: Array<SeriesEdge>;
  /** Information for pagination in SeriesList connection. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** Contains a Series and a cursor for pagination. */
export type SeriesEdge = Edge & {
  __typename?: 'SeriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The node holding the Series information */
  node: Series;
};

/**
 * Connection for posts within a series. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type SeriesPostConnection = Connection & {
  __typename?: 'SeriesPostConnection';
  /** A list of edges containing Post information */
  edges: Array<PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

export type SetDocumentationSidebarItemVisibilityInput = {
  guideSlug: Scalars['String']['input'];
  itemId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  visibility: DocumentationSidebarItemVisibility;
};

export type SetDocumentationSidebarItemVisibilityPayload = {
  __typename?: 'SetDocumentationSidebarItemVisibilityPayload';
  guide?: Maybe<DocumentationGuide>;
  item?: Maybe<DocumentationSidebarItem>;
};

/** Available social media links. */
export type SocialMediaLinks = {
  __typename?: 'SocialMediaLinks';
  /** The user's Bluesky profile. */
  bluesky?: Maybe<Scalars['String']['output']>;
  /** The user's Facebook profile. */
  facebook?: Maybe<Scalars['String']['output']>;
  /** The user's GitHub profile. */
  github?: Maybe<Scalars['String']['output']>;
  /** The user's Instagram profile. */
  instagram?: Maybe<Scalars['String']['output']>;
  /** The user's LinkedIn profile. */
  linkedin?: Maybe<Scalars['String']['output']>;
  /** The user's StackOverflow profile. */
  stackoverflow?: Maybe<Scalars['String']['output']>;
  /** The user's Twitter profile. */
  twitter?: Maybe<Scalars['String']['output']>;
  /** The user's website. */
  website?: Maybe<Scalars['String']['output']>;
  /** The user's YouTube profile. */
  youtube?: Maybe<Scalars['String']['output']>;
};

/** SortOrder is a common enum for all types that can be sorted. */
export enum SortOrder {
  Asc = 'asc',
  Dsc = 'dsc'
}

/**
 * Contains basic information about the static page.
 * Static pages are pages that are written in markdown and can be added to blog.
 */
export type StaticPage = Node & {
  __typename?: 'StaticPage';
  /** Content of the static page. Contains markdown and html version of the static page's content. */
  content: Content;
  /** A flag to determine if the static page is hidden from public or not, this is used to hide the page instead of deleting it. */
  hidden: Scalars['Boolean']['output'];
  /** The ID of the static page. */
  id: Scalars['ID']['output'];
  /** Information about the static page's Open Graph metadata i.e. image. */
  ogMetaData?: Maybe<OpenGraphMetaData>;
  /** Information about the static page's SEO metadata i.e. title and description. */
  seo?: Maybe<Seo>;
  /** The slug of the static page. Used to access static page. Example `https://johndoe.com/my-page`. */
  slug: Scalars['String']['output'];
  /** The title of the static page. Shown in nav bar. */
  title: Scalars['String']['output'];
};

/**
 * Connection to get list of static pages.
 * Returns a list of edges which contains the static page and cursor to the last item of the previous page.
 */
export type StaticPageConnection = Connection & {
  __typename?: 'StaticPageConnection';
  /** A list of edges containing nodes in the connection. */
  edges: Array<StaticPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** An edge that contains a node of type static page and cursor to the node. */
export type StaticPageEdge = Edge & {
  __typename?: 'StaticPageEdge';
  /** A cursor to the last item of the previous page. */
  cursor: Scalars['String']['output'];
  /** The node containing a static page. */
  node: StaticPage;
};

/** Contains the publication's Stripe configuration. */
export type StripeConfiguration = {
  __typename?: 'StripeConfiguration';
  /** The Stripe account ID of the publication. */
  accountId?: Maybe<Scalars['String']['output']>;
  /** A flag indicating if the publication is connected to Stripe. */
  connected: Scalars['Boolean']['output'];
  /** The country of origin of the publication. */
  country?: Maybe<Scalars['String']['output']>;
};

export type SubscribeToNewsletterInput = {
  /** The email of the subscriber. */
  email: Scalars['String']['input'];
  /** The ID of the publication to subscribe to. */
  publicationId: Scalars['ObjectId']['input'];
};

export type SubscribeToNewsletterPayload = {
  __typename?: 'SubscribeToNewsletterPayload';
  status?: Maybe<NewsletterSubscribeStatus>;
};

/** The input for syncing API reference definitions */
export type SyncDocumentationProjectApiDefinitionInput = {
  /** The ID of the docs API reference */
  apiReferenceId: Scalars['ID']['input'];
  /** The ID of the documentation project */
  projectId: Scalars['ID']['input'];
  /** The ID of the reference version */
  versionId: Scalars['ID']['input'];
};

/** The response to syncing documentation project API Reference definition */
export type SyncDocumentationProjectApiDefinitionPayload = {
  __typename?: 'SyncDocumentationProjectApiDefinitionPayload';
  /** Signifies if the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

export type TableOfContentsFeature = Feature & {
  __typename?: 'TableOfContentsFeature';
  /** Whether or not the user has chosen to show a table of contents on the post. */
  isEnabled: Scalars['Boolean']['output'];
  /** The content of the table of contents. */
  items: Array<TableOfContentsItem>;
};

export type TableOfContentsItem = Node & {
  __typename?: 'TableOfContentsItem';
  /** Unique identifier. */
  id: Scalars['ID']['output'];
  /** The level of nesting. Refers to the heading level in the post. */
  level: Scalars['Int']['output'];
  /** ID of the `TableOfContentsItem` that is one level higher in the hierarchy. `null` if this is a top level item. */
  parentId?: Maybe<Scalars['ID']['output']>;
  /** The slug of the referenced headline. */
  slug: Scalars['String']['output'];
  /** The title of the referenced headline. */
  title: Scalars['String']['output'];
};

export type Tag = ITag & Node & {
  __typename?: 'Tag';
  /** Total number of users following this tag. */
  followersCount: Scalars['Int']['output'];
  /** The ID of the tag. */
  id: Scalars['ID']['output'];
  /** Information about the tag. Contains markdown html and text version of the tag's info. */
  info?: Maybe<Content>;
  /** The logo of the tag. Shown in tag page. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The name of the tag. Shown in tag page. */
  name: Scalars['String']['output'];
  /** Paginated list of posts published under this tag */
  posts: FeedPostConnection;
  /** Alltime usage count of this tag in posts. */
  postsCount: Scalars['Int']['output'];
  /** The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql */
  slug: Scalars['String']['output'];
  /** The tagline of the tag. */
  tagline?: Maybe<Scalars['String']['output']>;
};


export type TagPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter: TagPostConnectionFilter;
  first: Scalars['Int']['input'];
};

/** Contains a tag and a cursor for pagination. */
export type TagEdge = Edge & {
  __typename?: 'TagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The node holding the Tag information */
  node: Tag;
};

export type TagPostConnectionFilter = {
  /** Sort tag feed by recents, popular, or trending. Defaults to recents. */
  sortBy?: InputMaybe<TagPostsSort>;
};

/** The field by which to sort the tag feed. */
export enum TagPostsSort {
  /** Sorts by popularity, used in Hot tag feed. */
  Popular = 'popular',
  /** Determinate how to sort the results. Defaults to recents, used in New tag feed. */
  Recent = 'recent',
  /** Trending is particular used to fetch top posts trending within a week time under a tag */
  Trending = 'trending'
}

/**
 * Contains the flag indicating if the text selection sharer feature is enabled or not.
 * User can enable or disable the text selection sharer feature from the publication settings.
 * Shows a widget if a text on a blog post is selected. Allows for easy sharing or copying of the selected text.
 */
export type TextSelectionSharerFeature = Feature & {
  __typename?: 'TextSelectionSharerFeature';
  /** A flag indicating if the text selection sharer feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

export type TimeFilter = {
  /**
   * Narrow the time range to a specific period.
   *
   * Can't be used with `relative`.
   */
  absolute?: InputMaybe<AbsoluteTimeRange>;
  /**
   * Narrow the time range to a specific period.
   *
   * Can't be used with `absolute`.
   */
  relative?: InputMaybe<RelativeTimeRange>;
};

export enum TimeGranularity {
  Daily = 'DAILY',
  Hourly = 'HOURLY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export enum TimePeriod {
  LastNDays = 'LAST_N_DAYS',
  LastNHours = 'LAST_N_HOURS',
  LastNMonths = 'LAST_N_MONTHS',
  LastNWeeks = 'LAST_N_WEEKS',
  LastNYears = 'LAST_N_YEARS'
}

export type ToggleAllowContributorEditsInput = {
  publicationId: Scalars['ID']['input'];
};

export type ToggleAllowContributorEditsPayload = {
  __typename?: 'ToggleAllowContributorEditsPayload';
  publication?: Maybe<Publication>;
};

/** Payload for the toggleFollowingUser mutation. */
export type ToggleFollowUserPayload = {
  __typename?: 'ToggleFollowUserPayload';
  /** The user that was followed/unfollowed. */
  user?: Maybe<User>;
};

export type ToggleGptBotCrawlingInput = {
  publicationId: Scalars['ID']['input'];
};

export type ToggleGptBotCrawlingPayload = {
  __typename?: 'ToggleGPTBotCrawlingPayload';
  publication?: Maybe<Publication>;
};

/** Response to toggling role based invite links. */
export type ToggleRoleBasedInviteLinksPayload = {
  __typename?: 'ToggleRoleBasedInviteLinksPayload';
  /** Signifies the status of invite links after toggling. */
  areRoleBasedInviteLinksActive: Scalars['Boolean']['output'];
};

export type ToggleTextSelectionSharerInput = {
  publicationId: Scalars['ID']['input'];
};

export type ToggleTextSelectionSharerPayload = {
  __typename?: 'ToggleTextSelectionSharerPayload';
  publication?: Maybe<Publication>;
};

export type TriggerWebhookTestInput = {
  webhookId: Scalars['ID']['input'];
};

export type TriggerWebhookTestPayload = {
  __typename?: 'TriggerWebhookTestPayload';
  webhook?: Maybe<Webhook>;
};

export type UnfollowTagsInput = {
  /** List of tag ids to unfollow. */
  ids: Array<Scalars['ID']['input']>;
};

export type UnfollowTagsPayload = {
  __typename?: 'UnfollowTagsPayload';
  /** List of tags unfollowed by the user. */
  tags?: Maybe<Array<Tag>>;
};

/** Views implementation that will be returned if no grouping is applied. */
export type UngroupedDocsViews = DocsViews & Node & {
  __typename?: 'UngroupedDocsViews';
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if no grouping is applied. */
export type UngroupedDocsVisitors = DocsVisitors & Node & {
  __typename?: 'UngroupedDocsVisitors';
  id: Scalars['ID']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

/** Views implementation that will be returned if no grouping is applied. */
export type UngroupedViews = Node & Views & {
  __typename?: 'UngroupedViews';
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

/** Visitors implementation that will be returned if no grouping is applied. */
export type UngroupedVisitors = Node & Visitors & {
  __typename?: 'UngroupedVisitors';
  id: Scalars['ID']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

export type UnsubscribeFromNewsletterInput = {
  /** The email that is currently subscribed. */
  email: Scalars['String']['input'];
  /** The ID of the publication to unsubscribe from. */
  publicationId: Scalars['ObjectId']['input'];
};

export type UnsubscribeFromNewsletterPayload = {
  __typename?: 'UnsubscribeFromNewsletterPayload';
  status?: Maybe<NewsletterUnsubscribeStatus>;
};

export type UpdateCommentInput = {
  contentMarkdown: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  comment?: Maybe<Comment>;
};

export type UpdateCustomMdxComponentInput = {
  code: Scalars['String']['input'];
  componentId: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

export type UpdateCustomMdxComponentPayload = {
  __typename?: 'UpdateCustomMdxComponentPayload';
  project: DocumentationProject;
};

export type UpdateDocumentationAppearanceInput = {
  appearance: DocumentationProjectAppearanceInput;
  projectId: Scalars['ID']['input'];
};

export type UpdateDocumentationAppearancePayload = {
  __typename?: 'UpdateDocumentationAppearancePayload';
  project?: Maybe<DocumentationProject>;
};

export type UpdateDocumentationGeneralSettingsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<DocumentationProjectLinksInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  settings?: InputMaybe<DocumentationProjectSettingsInput>;
};

export type UpdateDocumentationGeneralSettingsPayload = {
  __typename?: 'UpdateDocumentationGeneralSettingsPayload';
  project?: Maybe<DocumentationProject>;
};

export type UpdateDocumentationGuideInput = {
  guideId: Scalars['ID']['input'];
  metaTags?: InputMaybe<MetaTagsInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDocumentationGuidePayload = {
  __typename?: 'UpdateDocumentationGuidePayload';
  guide?: Maybe<DocumentationGuide>;
};

export type UpdateDocumentationIntegrationsInput = {
  integrations: DocumentationProjectIntegrationsInput;
  projectId: Scalars['ID']['input'];
};

export type UpdateDocumentationIntegrationsPayload = {
  __typename?: 'UpdateDocumentationIntegrationsPayload';
  project?: Maybe<DocumentationProject>;
};

export type UpdateDocumentationLinkInput = {
  guideSlug: Scalars['String']['input'];
  label: Scalars['String']['input'];
  linkId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDocumentationLinkPayload = {
  __typename?: 'UpdateDocumentationLinkPayload';
  guide?: Maybe<DocumentationGuide>;
  link?: Maybe<DocumentationLink>;
};

export type UpdateDocumentationPageSettingsInput = {
  guideSlug: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  metaTags?: InputMaybe<MetaTagsInput>;
  pageId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<DocumentationSidebarItemVisibility>;
};

export type UpdateDocumentationPageSettingsPayload = {
  __typename?: 'UpdateDocumentationPageSettingsPayload';
  guide?: Maybe<DocumentationGuide>;
  page?: Maybe<DocumentationPage>;
  sidebarItem?: Maybe<DocumentationSidebarItemPage>;
};

/** The input for updating the AI search prompts */
export type UpdateDocumentationProjectAiPromptInput = {
  /** The ID of the documentation project */
  projectId: Scalars['ID']['input'];
  /** The prompt text */
  prompt: Scalars['String']['input'];
  /** The ID of the prompt to update */
  promptId: Scalars['ID']['input'];
};

/** Response to updating the AI search prompts */
export type UpdateDocumentationProjectAiPromptPayload = {
  __typename?: 'UpdateDocumentationProjectAIPromptPayload';
  project?: Maybe<DocumentationProject>;
};

export type UpdateDocumentationProjectSubdomainInput = {
  projectId: Scalars['ID']['input'];
  subdomain: Scalars['String']['input'];
};

export type UpdateDocumentationProjectSubdomainPayload = {
  __typename?: 'UpdateDocumentationProjectSubdomainPayload';
  project?: Maybe<DocumentationProject>;
};

export type UpdateDocumentationSectionInput = {
  guideSlug: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  sectionId: Scalars['ID']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<DocumentationSidebarItemVisibility>;
};

export type UpdateDocumentationSectionPayload = {
  __typename?: 'UpdateDocumentationSectionPayload';
  guide?: Maybe<DocumentationGuide>;
  section?: Maybe<DocumentationSection>;
};

export type UpdatePostInput = {
  /**
   * Update co-authors of the post.
   * Must be a member of the publication.
   */
  coAuthors?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  /** The publication the post is published to. */
  contentMarkdown?: InputMaybe<Scalars['String']['input']>;
  /** Options for the cover image of the post. */
  coverImageOptions?: InputMaybe<CoverImageOptionsInput>;
  /** The id of the post to update. */
  id: Scalars['ID']['input'];
  /** Information about the meta tags added to the post, used for SEO purpose. */
  metaTags?: InputMaybe<MetaTagsInput>;
  /** Canonical URL of the original article. */
  originalArticleURL?: InputMaybe<Scalars['String']['input']>;
  /** If the publication should be changed this is the new Publication ID */
  publicationId?: InputMaybe<Scalars['ObjectId']['input']>;
  /**
   * Set a different author for the post than the requesting user.
   * Must be a member of the publication.
   */
  publishAs?: InputMaybe<Scalars['ObjectId']['input']>;
  /** Backdated publish date. */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Providing a seriesId will add the post to that series.
   * Must be a series of the publication.
   */
  seriesId?: InputMaybe<Scalars['ObjectId']['input']>;
  /** Whether or not to enable the table of content. */
  settings?: InputMaybe<UpdatePostSettingsInput>;
  /** Slug of the post. Only if you want to override the slug that will be generated based on the title. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The subtitle of the post */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** Tags to add to the post. New tags will be created if they don't exist. It overrides the existing tags. */
  tags?: InputMaybe<Array<PublishPostTagInput>>;
  /** The new title of the post */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  post?: Maybe<Post>;
};

export type UpdatePostSettingsInput = {
  /** A flag to indicate if the post is delisted, used to hide the post from public feed. */
  delisted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether or not comments should be disabled. */
  disableComments?: InputMaybe<Scalars['Boolean']['input']>;
  /** A flag to indicate if the post contains table of content */
  isTableOfContentEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Pin the post to the blog homepage. */
  pinToBlog?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateRedirectionRuleInput = {
  destination?: InputMaybe<Scalars['URL']['input']>;
  id: Scalars['ID']['input'];
  publicationId: Scalars['ID']['input'];
  source?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<HttpRedirectionType>;
};

export type UpdateRedirectionRulePayload = {
  __typename?: 'UpdateRedirectionRulePayload';
  redirectionRule: RedirectionRule;
};

export type UpdateReplyInput = {
  commentId: Scalars['ID']['input'];
  contentMarkdown: Scalars['String']['input'];
  replyId: Scalars['ID']['input'];
};

export type UpdateReplyPayload = {
  __typename?: 'UpdateReplyPayload';
  reply?: Maybe<Reply>;
};

/** Input to update a role based invite. */
export type UpdateRoleBasedInviteInput = {
  /** The capacity of how many members to be invited by the link. */
  capacity?: InputMaybe<Scalars['Int']['input']>;
  /** Boolean to enable unlimited capacity. */
  enableUnlimitedCapacity?: InputMaybe<Scalars['Boolean']['input']>;
  /** The expiry date of the invite. */
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The ID of the role based invite. */
  inviteId: Scalars['ID']['input'];
  publicationId: Scalars['ID']['input'];
  /** The role to assign to the user in the publication. */
  role?: InputMaybe<UserPublicationInviteRole>;
};

/** Response to updating a role based invite for a publication. */
export type UpdateRoleBasedInvitePayload = {
  __typename?: 'UpdateRoleBasedInvitePayload';
  /** The updated role based invite. */
  invite: RoleBasedInvite;
};

export type UpdateSeriesInput = {
  /** The cover image of the series. */
  coverImage?: InputMaybe<Scalars['String']['input']>;
  /** The description of the series. Accepts markdown. */
  descriptionMarkdown?: InputMaybe<Scalars['String']['input']>;
  /** The id of the series to update. */
  id: Scalars['ID']['input'];
  /** The name of the series. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the series. Used to access series page.  Example https://johndoe.com/series/series-slug */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The sort order of the series, determines if the latest posts should appear first or last in series. */
  sortOrder?: InputMaybe<SortOrder>;
};

export type UpdateSeriesPayload = {
  __typename?: 'UpdateSeriesPayload';
  /** Returns the updated series. */
  series: Series;
};

export type UpdateWebhookInput = {
  events?: InputMaybe<Array<WebhookEvent>>;
  id: Scalars['ID']['input'];
  secret?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWebhookPayload = {
  __typename?: 'UpdateWebhookPayload';
  webhook?: Maybe<Webhook>;
};

export enum UrlPattern {
  /** Post URLs contain the slug (for example `my slug`) and a random id (like `1234`) , e.g. "/my-slug-1234". */
  Default = 'DEFAULT',
  /** Post URLs only contain the slug, e.g. "/my-slug". */
  Simple = 'SIMPLE'
}

/** Basic information about a user on Hashnode. */
export type User = IUser & Node & {
  __typename?: 'User';
  /**
   * Whether or not the user is an ambassador.
   * @deprecated Ambassadors program no longer active. Will be removed after 02/01/2024
   */
  ambassador: Scalars['Boolean']['output'];
  /** The availability of the user based on tech stack and interests. Shown on the "I am available for" section in user's profile. */
  availableFor?: Maybe<Scalars['String']['output']>;
  /** Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges */
  badges: Array<Badge>;
  /** The bio of the user. Visible in about me section of the user's profile. */
  bio?: Maybe<Content>;
  /**
   * The bio of the user. Visible in about me section of the user's profile.
   * @deprecated Will be removed on 26/10/2023. Use bio instead of bioV2
   */
  bioV2?: Maybe<Content>;
  /** The date the user joined Hashnode. */
  dateJoined?: Maybe<Scalars['DateTime']['output']>;
  /** Whether or not the user is deactivated. */
  deactivated: Scalars['Boolean']['output'];
  /** The users who are following this user */
  followers: UserConnection;
  /** The number of users that follow the requested user. Visible in the user's profile. */
  followersCount: Scalars['Int']['output'];
  /**
   * Whether or not the authenticated user follows this user.
   * Returns false if the authenticated user this user.
   */
  following: Scalars['Boolean']['output'];
  /** The number of users that this user is following. Visible in the user's profile. */
  followingsCount: Scalars['Int']['output'];
  /** The users which this user is following */
  follows: UserConnection;
  /**
   * Whether or not this user follows the authenticated user.
   * Returns false if the authenticated user this user.
   */
  followsBack: Scalars['Boolean']['output'];
  /** The ID of the user. It can be used to identify the user. */
  id: Scalars['ID']['output'];
  /** The location of the user. */
  location?: Maybe<Scalars['String']['output']>;
  /** The name of the user. */
  name: Scalars['String']['output'];
  /** Returns the list of posts the user has published. */
  posts: UserPostConnection;
  /** The URL to the profile picture of the user. */
  profilePicture?: Maybe<Scalars['String']['output']>;
  /** Publications associated with the user. Includes personal and team publications. */
  publications: UserPublicationsConnection;
  /** The social media links of the user. Shown on the user's profile. */
  socialMediaLinks?: Maybe<SocialMediaLinks>;
  /** The tagline of the user. Shown on the user's profile below the name. */
  tagline?: Maybe<Scalars['String']['output']>;
  /** Returns a list of tags that the user follows. */
  tagsFollowing: Array<Tag>;
  /** Returns list of tags from user's expertise. Shown on the user's profile. */
  techStack: UserTagsConnection;
  /** The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username */
  username: Scalars['String']['output'];
};


/** Basic information about a user on Hashnode. */
export type UserFollowersArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/** Basic information about a user on Hashnode. */
export type UserFollowsArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


/** Basic information about a user on Hashnode. */
export type UserPostsArgs = {
  filter?: InputMaybe<UserPostConnectionFilter>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  sortBy?: InputMaybe<UserPostsSort>;
};


/** Basic information about a user on Hashnode. */
export type UserPublicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserPublicationsConnectionFilter>;
  first: Scalars['Int']['input'];
  sortBy?: InputMaybe<UserPublicationsSort>;
};


/** Basic information about a user on Hashnode. */
export type UserTechStackArgs = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};

/**
 * Connection for users to another user. Contains a list of nodes.
 * Each node is a user.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type UserConnection = PageConnection & {
  __typename?: 'UserConnection';
  /** A list of users */
  nodes: Array<User>;
  /** Information for page based pagination in users connection. */
  pageInfo: OffsetPageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** Drafts that belong to a user. */
export type UserDraftConnection = Connection & {
  __typename?: 'UserDraftConnection';
  /** A list of edges. */
  edges: Array<UserDraftEdge>;
  /** Generic information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** A generic type which holds a draft during pagination. */
export type UserDraftEdge = Edge & {
  __typename?: 'UserDraftEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of UserDraftEdge. */
  node: Draft;
};

/** Contains a node of type user and cursor for pagination. */
export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  /** The cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The node containing User information */
  node: User;
};

export type UserInviteInput = {
  /** The email of the user to invite to the publication. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The role to assign to the user in the publication. */
  role: UserPublicationInviteRole;
  /** Username of the user to invite to the publication. */
  username?: InputMaybe<Scalars['String']['input']>;
};

export enum UserInviteStatus {
  Invited = 'INVITED',
  NotInvited = 'NOT_INVITED'
}

/**
 * Connection for posts written by a single user. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type UserPostConnection = PageConnection & {
  __typename?: 'UserPostConnection';
  /** A list of edges containing Post information */
  edges: Array<UserPostEdge>;
  /** A list of posts */
  nodes: Array<Post>;
  /** Information for page based pagination in Post connection. */
  pageInfo: OffsetPageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** Filter for the posts of a user. */
export type UserPostConnectionFilter = {
  /** Filtering by author status. Either all posts the user has authored or co-authored are returned or the authored posts only. */
  authorType?: InputMaybe<UserPostsAuthorTypeFilter>;
  /** Filtering by publication IDs will return posts from the author within the publication. */
  publications?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Only include posts that reference the provided tag slugs.
   *
   * Filtering by `tags` and `tagSlugs` will filter posts that match either of those two filters.
   */
  tagSlugs?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Only include posts that reference the provided tag IDs.
   *
   *
   * Filtering by `tags` and `tagSlugs` will filter posts that match either of those two filters.
   */
  tags?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Contains a post and the author status. */
export type UserPostEdge = {
  __typename?: 'UserPostEdge';
  /** Indicates weather the user is the author or co-author of the post. */
  authorType: PostAuthorType;
  /** The node holding the Post information. */
  node: Post;
};

/** Filter for the posts of a user. */
export enum UserPostsAuthorTypeFilter {
  /** Only posts that are authored by the user. */
  AuthorOnly = 'AUTHOR_ONLY',
  /** Only posts that are co-authored by the user. */
  CoAuthorOnly = 'CO_AUTHOR_ONLY'
}

/** Sorting for the posts of a user. */
export enum UserPostsSort {
  /** Oldest posts first. */
  DatePublishedAsc = 'DATE_PUBLISHED_ASC',
  /** Newest posts first. */
  DatePublishedDesc = 'DATE_PUBLISHED_DESC'
}

/** The invited role of the user in the publication. */
export enum UserPublicationInviteRole {
  /** Contributors can join the publication and contribute an article. They cannot directly publish a new article. */
  Contributor = 'CONTRIBUTOR',
  /**
   * The editor has access to the publication dashboard to customize the blog and approve/reject posts.
   * They also have access to the member panel to add/modify/remove members. Editors cannot remove other editors or update their roles.
   */
  Editor = 'EDITOR'
}

/** The role of the user in the publication. */
export enum UserPublicationRole {
  /** Contributors can join the publication and contribute an article. They cannot directly publish a new article. */
  Contributor = 'CONTRIBUTOR',
  /**
   * The editor has access to the publication dashboard to customize the blog and approve/reject posts.
   * They also have access to the member panel to add/modify/remove members. Editors cannot remove other editors or update their roles.
   */
  Editor = 'EDITOR',
  /** The owner is the creator of the publication and can do all things, including delete publication. */
  Owner = 'OWNER'
}

/**
 * Connection to get list of publications.
 * Returns a list of edges which contains the publications and cursor to the last item of the previous page.
 */
export type UserPublicationsConnection = Connection & {
  __typename?: 'UserPublicationsConnection';
  /** A list of edges of publications connection. */
  edges: Array<UserPublicationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total amount of publications taking into account the filter. */
  totalDocuments: Scalars['Int']['output'];
};

/** Filter to apply to the publications. */
export type UserPublicationsConnectionFilter = {
  /** Only include publication in which the user has one of the provided roles. */
  roles?: InputMaybe<Array<UserPublicationRole>>;
};

/** An edge that contains a node of type publication and cursor to the node. */
export type UserPublicationsEdge = Edge & {
  __typename?: 'UserPublicationsEdge';
  /** The cursor to the node. */
  cursor: Scalars['String']['output'];
  /** Node containing the publication. */
  node: Publication;
  /** The role of the user in the publication. */
  role: UserPublicationRole;
};

/** Sorting for the publications of a user. */
export enum UserPublicationsSort {
  /** Oldest publication first. */
  DateCreatedAsc = 'DATE_CREATED_ASC',
  /** Newest publication first. */
  DateCreatedDesc = 'DATE_CREATED_DESC',
  /** Recently updated publication last. */
  DateUpdatedAsc = 'DATE_UPDATED_ASC',
  /** Recently updated publication first. */
  DateUpdatedDesc = 'DATE_UPDATED_DESC'
}

export type UserRecommendedPublicationEdge = {
  __typename?: 'UserRecommendedPublicationEdge';
  /** The publication that is recommended by the publication this connection originates from. */
  node: Publication;
  /** The amount of followers the publication referenced in `node` has gained by recommendations from the publication. */
  totalFollowersGained: Scalars['Int']['output'];
};

export type UserRecommendingPublicationEdge = {
  __typename?: 'UserRecommendingPublicationEdge';
  /** The publication that is recommending the publication this connection originates from. */
  node: Publication;
  /** The amount of followers the publication has gained by recommendations from the publication referenced in `node`. */
  totalFollowersGained: Scalars['Int']['output'];
};

/** Role of the user within Hashnode */
export enum UserRole {
  Moderator = 'MODERATOR',
  Superuser = 'SUPERUSER',
  User = 'USER'
}

export type UserTagsConnection = PageConnection & {
  __typename?: 'UserTagsConnection';
  /** A list of tags */
  nodes: Array<Tag>;
  /** Information for page based pagination in users connection. */
  pageInfo: OffsetPageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

export enum ValidationMethod {
  Id = 'ID'
}

export type VerifyDocumentationProjectCustomDomainInput = {
  projectId: Scalars['ID']['input'];
};

export type VerifyDocumentationProjectCustomDomainPayload = {
  __typename?: 'VerifyDocumentationProjectCustomDomainPayload';
  /**
   * Additional DNS entries required to verify the domain.
   * There are cases where additional records in the DNS config are required to successfully verify the domain.
   */
  dnsVerificationEntries: Array<DnsVerificationEntry>;
  /**
   * The documentation project where the custom domain should be verified.
   * Note, that the verification can also fail.
   */
  project?: Maybe<DocumentationProject>;
};

/** Contains the flag indicating if the Versioning feature is enabled or not. */
export type VersioningFeature = Feature & {
  __typename?: 'VersioningFeature';
  /** A flag indicating if the Versioning feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

/**
 * Contains the flag indicating if the view count feature is enabled or not.
 * User can enable or disable the view count feature from the publication settings.
 * Shows total views on blogs if enabled.
 */
export type ViewCountFeature = Feature & {
  __typename?: 'ViewCountFeature';
  /** A flag indicating if the view count feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

export type Views = {
  id: Scalars['ID']['output'];
  /** The aggregated views. */
  total: Scalars['Int']['output'];
};

export type Visitors = {
  id: Scalars['ID']['output'];
  /** The aggregated number of visitors. */
  total: Scalars['Int']['output'];
};

export type Webhook = Node & {
  __typename?: 'Webhook';
  createdAt: Scalars['DateTime']['output'];
  events: Array<WebhookEvent>;
  /** The ID of the post. Used to uniquely identify the post. */
  id: Scalars['ID']['output'];
  /**
   * Messages that has been sent via this webhook.
   * Messages include the request and eventual response.
   */
  messages: WebhookMessageConnection;
  publication: Publication;
  secret: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};


export type WebhookMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

export enum WebhookEvent {
  PostDeleted = 'POST_DELETED',
  PostPublished = 'POST_PUBLISHED',
  PostUpdated = 'POST_UPDATED',
  StaticPageDeleted = 'STATIC_PAGE_DELETED',
  StaticPageEdited = 'STATIC_PAGE_EDITED',
  StaticPagePublished = 'STATIC_PAGE_PUBLISHED'
}

export type WebhookMessage = Node & {
  __typename?: 'WebhookMessage';
  createdAt: Scalars['DateTime']['output'];
  event: WebhookEvent;
  id: Scalars['ID']['output'];
  /** True if either the request failed or the response status code was not 2xx. */
  isError: Scalars['Boolean']['output'];
  /** True if the message was resent. */
  isResent: Scalars['Boolean']['output'];
  /** True if the message was sent as a test. */
  isTest: Scalars['Boolean']['output'];
  request: WebhookMessageRequest;
  response?: Maybe<WebhookMessageResponse>;
  url: Scalars['String']['output'];
};

export type WebhookMessageConnection = Connection & {
  __typename?: 'WebhookMessageConnection';
  edges: Array<WebhookMessageEdge>;
  pageInfo: PageInfo;
};

export type WebhookMessageEdge = Edge & {
  __typename?: 'WebhookMessageEdge';
  cursor: Scalars['String']['output'];
  node: WebhookMessage;
};

export type WebhookMessageRequest = {
  __typename?: 'WebhookMessageRequest';
  body: Scalars['String']['output'];
  error?: Maybe<WebhookMessageRequestError>;
  headers: Scalars['String']['output'];
  /** Unique identifier of the request. Can be used to deduplicate requests. */
  uuid: Scalars['String']['output'];
};

export type WebhookMessageRequestError = {
  __typename?: 'WebhookMessageRequestError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type WebhookMessageResponse = {
  __typename?: 'WebhookMessageResponse';
  body?: Maybe<Scalars['String']['output']>;
  headers?: Maybe<Scalars['String']['output']>;
  httpStatus: Scalars['Int']['output'];
  /** The time it took from the moment the request has been send until the first byte of the response has been received. */
  timeToFirstByteMilliseconds?: Maybe<Scalars['Int']['output']>;
};

export type Widget = Node & {
  __typename?: 'Widget';
  /** Content of the widget, can be a simple string or HTML */
  content: Scalars['String']['output'];
  /** The date and time the widget was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the widget */
  id: Scalars['ID']['output'];
  pinSettings?: Maybe<WidgetPinSettings>;
  /** WidgetId, can be embedded as %%[widgetId] in the article */
  widgetId: Scalars['String']['output'];
};

export enum WidgetPinLocation {
  Bottom = 'BOTTOM',
  Top = 'TOP'
}

export type WidgetPinSettings = {
  __typename?: 'WidgetPinSettings';
  /** Signifies if pinning of widget on all the articles of publication is enabled or not */
  isPinned: Scalars['Boolean']['output'];
  /** Describes the location of the widget on the article, can be TOP or BOTTOM */
  location: WidgetPinLocation;
};

export type PageInfoFragment = { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null };

export type PostFragment = { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'PostCoverImage', url: string } | null };

export type PublicationFragment = { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url: string, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData: { __typename?: 'OpenGraphMetaData', image?: string | null }, preferences: { __typename?: 'Preferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: PublicationNavigationType, label?: string | null, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', umamiWebsiteUUID?: string | null, gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, gTagManagerID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null, koalaPublicKey?: string | null, msClarityID?: string | null } | null };

export type SubscribeToNewsletterMutationVariables = Exact<{
  input: SubscribeToNewsletterInput;
}>;


export type SubscribeToNewsletterMutation = { __typename?: 'Mutation', subscribeToNewsletter: { __typename?: 'SubscribeToNewsletterPayload', status?: NewsletterSubscribeStatus | null } };

export type DraftByIdQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type DraftByIdQuery = { __typename?: 'Query', draft?: { __typename?: 'Draft', id: string, title?: string | null, readTimeInMinutes: number, dateUpdated: string, content?: { __typename?: 'Content', markdown: string } | null, author: { __typename?: 'User', id: string, name: string, username: string, profilePicture?: string | null }, coverImage?: { __typename?: 'DraftCoverImage', url: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> } | null };

export type PageByPublicationQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  host: Scalars['String']['input'];
}>;


export type PageByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url: string, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PublicationPostConnection', totalDocuments: number }, staticPage?: { __typename?: 'StaticPage', id: string, title: string, slug: string, content: { __typename?: 'Content', markdown: string } } | null, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData: { __typename?: 'OpenGraphMetaData', image?: string | null }, preferences: { __typename?: 'Preferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: PublicationNavigationType, label?: string | null, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', umamiWebsiteUUID?: string | null, gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, gTagManagerID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null, koalaPublicKey?: string | null, msClarityID?: string | null } | null } | null };

export type StaticPageFragment = { __typename?: 'StaticPage', id: string, title: string, slug: string, content: { __typename?: 'Content', markdown: string } };

export type PostsByPublicationQueryVariables = Exact<{
  host: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type PostsByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url: string, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PublicationPostConnection', totalDocuments: number, edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'PostCoverImage', url: string } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData: { __typename?: 'OpenGraphMetaData', image?: string | null }, preferences: { __typename?: 'Preferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: PublicationNavigationType, label?: string | null, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', umamiWebsiteUUID?: string | null, gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, gTagManagerID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null, koalaPublicKey?: string | null, msClarityID?: string | null } | null } | null };

export type MorePostsByPublicationQueryVariables = Exact<{
  host: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type MorePostsByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', posts: { __typename?: 'PublicationPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, comments: { __typename?: 'PostCommentConnection', totalDocuments: number }, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'PostCoverImage', url: string } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } } } | null };

export type PublicationByHostQueryVariables = Exact<{
  host: Scalars['String']['input'];
}>;


export type PublicationByHostQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url: string, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PublicationPostConnection', totalDocuments: number }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData: { __typename?: 'OpenGraphMetaData', image?: string | null }, preferences: { __typename?: 'Preferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: PublicationNavigationType, label?: string | null, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', umamiWebsiteUUID?: string | null, gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, gTagManagerID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null, koalaPublicKey?: string | null, msClarityID?: string | null } | null } | null };

export type RssFeedQueryVariables = Exact<{
  host: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type RssFeedQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url: string, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PublicationPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, slug: string, content: { __typename?: 'Content', html: string }, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null, author: { __typename?: 'User', name: string, username: string } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData: { __typename?: 'OpenGraphMetaData', image?: string | null }, preferences: { __typename?: 'Preferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: PublicationNavigationType, label?: string | null, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', umamiWebsiteUUID?: string | null, gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, gTagManagerID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null, koalaPublicKey?: string | null, msClarityID?: string | null } | null } | null };

export type SearchPostsOfPublicationQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  filter: SearchPostsOfPublicationFilter;
}>;


export type SearchPostsOfPublicationQuery = { __typename?: 'Query', searchPostsOfPublication: { __typename?: 'SearchPostConnection', edges: Array<{ __typename?: 'PostEdge', cursor: string, node: { __typename?: 'Post', id: string, brief: string, title: string, cuid?: string | null, slug: string, coverImage?: { __typename?: 'PostCoverImage', url: string } | null, author: { __typename?: 'User', id: string, name: string }, publication?: { __typename?: 'Publication', title: string, url: string } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } } };

export type SeriesPostsByPublicationQueryVariables = Exact<{
  host: Scalars['String']['input'];
  seriesSlug: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type SeriesPostsByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url: string, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PublicationPostConnection', totalDocuments: number }, series?: { __typename?: 'Series', id: string, name: string, slug: string, coverImage?: string | null, description?: { __typename?: 'Content', html: string } | null, posts: { __typename?: 'SeriesPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'PostCoverImage', url: string } | null } }> } } | null, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData: { __typename?: 'OpenGraphMetaData', image?: string | null }, preferences: { __typename?: 'Preferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: PublicationNavigationType, label?: string | null, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', umamiWebsiteUUID?: string | null, gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, gTagManagerID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null, koalaPublicKey?: string | null, msClarityID?: string | null } | null } | null };

export type SeriesFragment = { __typename?: 'Series', id: string, name: string, slug: string, coverImage?: string | null, description?: { __typename?: 'Content', html: string } | null, posts: { __typename?: 'SeriesPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'PostCoverImage', url: string } | null } }> } };

export type SinglePostByPublicationQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  host: Scalars['String']['input'];
}>;


export type SinglePostByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url: string, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PublicationPostConnection', totalDocuments: number }, post?: { __typename?: 'Post', id: string, slug: string, url: string, brief: string, title: string, subtitle?: string | null, publishedAt: string, updatedAt?: string | null, readTimeInMinutes: number, reactionCount: number, responseCount: number, hasLatexInPost: boolean, publication?: { __typename?: 'Publication', id: string, isTeam: boolean, favicon?: string | null, title: string, about?: { __typename?: 'Content', html: string } | null } | null, series?: { __typename?: 'Series', id: string } | null, seo?: { __typename?: 'SEO', title?: string | null, description?: string | null } | null, coverImage?: { __typename?: 'PostCoverImage', url: string } | null, author: { __typename?: 'User', id: string, name: string, username: string, profilePicture?: string | null, socialMediaLinks?: { __typename?: 'SocialMediaLinks', twitter?: string | null } | null, bio?: { __typename?: 'Content', html: string } | null }, coAuthors?: Array<{ __typename?: 'User', username: string, id: string, name: string, profilePicture?: string | null, bio?: { __typename?: 'Content', html: string } | null }> | null, content: { __typename?: 'Content', markdown: string, html: string }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null, features: { __typename?: 'PostFeatures', tableOfContents: { __typename?: 'TableOfContentsFeature', isEnabled: boolean, items: Array<{ __typename?: 'TableOfContentsItem', id: string, level: number, parentId?: string | null, slug: string, title: string }> } }, preferences: { __typename?: 'PostPreferences', disableComments: boolean }, comments: { __typename?: 'PostCommentConnection', totalDocuments: number, edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, totalReactions: number, content: { __typename?: 'Content', markdown: string }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null } } }> } } | null, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData: { __typename?: 'OpenGraphMetaData', image?: string | null }, preferences: { __typename?: 'Preferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: PublicationNavigationType, label?: string | null, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', umamiWebsiteUUID?: string | null, gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, gTagManagerID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null, koalaPublicKey?: string | null, msClarityID?: string | null } | null } | null };

export type PostFullFragment = { __typename?: 'Post', id: string, slug: string, url: string, brief: string, title: string, subtitle?: string | null, publishedAt: string, updatedAt?: string | null, readTimeInMinutes: number, reactionCount: number, responseCount: number, hasLatexInPost: boolean, publication?: { __typename?: 'Publication', id: string, isTeam: boolean, favicon?: string | null, title: string, about?: { __typename?: 'Content', html: string } | null } | null, series?: { __typename?: 'Series', id: string } | null, seo?: { __typename?: 'SEO', title?: string | null, description?: string | null } | null, coverImage?: { __typename?: 'PostCoverImage', url: string } | null, author: { __typename?: 'User', id: string, name: string, username: string, profilePicture?: string | null, socialMediaLinks?: { __typename?: 'SocialMediaLinks', twitter?: string | null } | null, bio?: { __typename?: 'Content', html: string } | null }, coAuthors?: Array<{ __typename?: 'User', username: string, id: string, name: string, profilePicture?: string | null, bio?: { __typename?: 'Content', html: string } | null }> | null, content: { __typename?: 'Content', markdown: string, html: string }, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null, features: { __typename?: 'PostFeatures', tableOfContents: { __typename?: 'TableOfContentsFeature', isEnabled: boolean, items: Array<{ __typename?: 'TableOfContentsItem', id: string, level: number, parentId?: string | null, slug: string, title: string }> } }, preferences: { __typename?: 'PostPreferences', disableComments: boolean }, comments: { __typename?: 'PostCommentConnection', totalDocuments: number, edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, totalReactions: number, content: { __typename?: 'Content', markdown: string }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null } } }> } };

export type SitemapQueryVariables = Exact<{
  host: Scalars['String']['input'];
  postsCount: Scalars['Int']['input'];
  postsAfter?: InputMaybe<Scalars['String']['input']>;
  staticPagesCount: Scalars['Int']['input'];
}>;


export type SitemapQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, url: string, staticPages: { __typename?: 'StaticPageConnection', edges: Array<{ __typename?: 'StaticPageEdge', node: { __typename?: 'StaticPage', slug: string } }> }, posts: { __typename?: 'PublicationPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, url: string, slug: string, publishedAt: string, updatedAt?: string | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } } } | null };

export type MoreSitemapPostsQueryVariables = Exact<{
  host: Scalars['String']['input'];
  postsCount: Scalars['Int']['input'];
  postsAfter?: InputMaybe<Scalars['String']['input']>;
}>;


export type MoreSitemapPostsQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, posts: { __typename?: 'PublicationPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, url: string, slug: string, publishedAt: string, updatedAt?: string | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } } } | null };

export type RequiredSitemapPostFieldsFragment = { __typename?: 'Post', id: string, url: string, slug: string, publishedAt: string, updatedAt?: string | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, slug: string }> | null };

export type SlugPostsByPublicationQueryVariables = Exact<{
  host: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type SlugPostsByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url: string, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PublicationPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', slug: string } }> }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData: { __typename?: 'OpenGraphMetaData', image?: string | null }, preferences: { __typename?: 'Preferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: PublicationNavigationType, label?: string | null, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', umamiWebsiteUUID?: string | null, gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, gTagManagerID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null, koalaPublicKey?: string | null, msClarityID?: string | null } | null } | null };

export type TagPostsByPublicationQueryVariables = Exact<{
  host: Scalars['String']['input'];
  tagSlug: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type TagPostsByPublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string, displayTitle?: string | null, url: string, metaTags?: string | null, favicon?: string | null, isTeam: boolean, followersCount?: number | null, descriptionSEO?: string | null, posts: { __typename?: 'PublicationPostConnection', totalDocuments: number, edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, url: string, publishedAt: string, slug: string, brief: string, author: { __typename?: 'User', name: string, profilePicture?: string | null }, coverImage?: { __typename?: 'PostCoverImage', url: string } | null } }> }, author: { __typename?: 'User', name: string, username: string, profilePicture?: string | null, followersCount: number }, ogMetaData: { __typename?: 'OpenGraphMetaData', image?: string | null }, preferences: { __typename?: 'Preferences', logo?: string | null, darkMode?: { __typename?: 'DarkModePreferences', logo?: string | null } | null, navbarItems: Array<{ __typename?: 'PublicationNavbarItem', id: string, type: PublicationNavigationType, label?: string | null, url?: string | null }> }, links?: { __typename?: 'PublicationLinks', twitter?: string | null, github?: string | null, linkedin?: string | null, hashnode?: string | null } | null, integrations?: { __typename?: 'PublicationIntegrations', umamiWebsiteUUID?: string | null, gaTrackingID?: string | null, fbPixelID?: string | null, hotjarSiteID?: string | null, matomoURL?: string | null, matomoSiteID?: string | null, fathomSiteID?: string | null, gTagManagerID?: string | null, fathomCustomDomain?: string | null, fathomCustomDomainEnabled?: boolean | null, plausibleAnalyticsEnabled?: boolean | null, koalaPublicKey?: string | null, msClarityID?: string | null } | null } | null };

export const PageInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<PageInfoFragment, unknown>;
export const PublicationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"umamiWebsiteUUID"}},{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"gTagManagerID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"koalaPublicKey"}},{"kind":"Field","name":{"kind":"Name","value":"msClarityID"}}]}}]}}]} as unknown as DocumentNode<PublicationFragment, unknown>;
export const StaticPageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StaticPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StaticPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}}]}}]} as unknown as DocumentNode<StaticPageFragment, unknown>;
export const PostFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]} as unknown as DocumentNode<PostFragment, unknown>;
export const SeriesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Series"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Series"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]} as unknown as DocumentNode<SeriesFragment, unknown>;
export const PostFullFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFull"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readTimeInMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"responseCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasLatexInPost"}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"coAuthors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tableOfContents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disableComments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"25"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalReactions"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PostFullFragment, unknown>;
export const RequiredSitemapPostFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredSitemapPostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<RequiredSitemapPostFieldsFragment, unknown>;
export const SubscribeToNewsletterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubscribeToNewsletter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeToNewsletterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribeToNewsletter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SubscribeToNewsletterMutation, SubscribeToNewsletterMutationVariables>;
export const DraftByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DraftById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"draft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"readTimeInMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"dateUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<DraftByIdQuery, DraftByIdQueryVariables>;
export const PageByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staticPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StaticPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"umamiWebsiteUUID"}},{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"gTagManagerID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"koalaPublicKey"}},{"kind":"Field","name":{"kind":"Name","value":"msClarityID"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StaticPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StaticPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}}]}}]} as unknown as DocumentNode<PageByPublicationQuery, PageByPublicationQueryVariables>;
export const PostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"umamiWebsiteUUID"}},{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"gTagManagerID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"koalaPublicKey"}},{"kind":"Field","name":{"kind":"Name","value":"msClarityID"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<PostsByPublicationQuery, PostsByPublicationQueryVariables>;
export const MorePostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MorePostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<MorePostsByPublicationQuery, MorePostsByPublicationQueryVariables>;
export const PublicationByHostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublicationByHost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"umamiWebsiteUUID"}},{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"gTagManagerID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"koalaPublicKey"}},{"kind":"Field","name":{"kind":"Name","value":"msClarityID"}}]}}]}}]} as unknown as DocumentNode<PublicationByHostQuery, PublicationByHostQueryVariables>;
export const RssFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RSSFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"umamiWebsiteUUID"}},{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"gTagManagerID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"koalaPublicKey"}},{"kind":"Field","name":{"kind":"Name","value":"msClarityID"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<RssFeedQuery, RssFeedQueryVariables>;
export const SearchPostsOfPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchPostsOfPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPostsOfPublicationFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchPostsOfPublication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cuid"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<SearchPostsOfPublicationQuery, SearchPostsOfPublicationQueryVariables>;
export const SeriesPostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SeriesPostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seriesSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seriesSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Series"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"umamiWebsiteUUID"}},{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"gTagManagerID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"koalaPublicKey"}},{"kind":"Field","name":{"kind":"Name","value":"msClarityID"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Series"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Series"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SeriesPostsByPublicationQuery, SeriesPostsByPublicationQueryVariables>;
export const SinglePostByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SinglePostByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFull"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"umamiWebsiteUUID"}},{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"gTagManagerID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"koalaPublicKey"}},{"kind":"Field","name":{"kind":"Name","value":"msClarityID"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFull"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readTimeInMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"responseCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasLatexInPost"}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"coAuthors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tableOfContents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disableComments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"25"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalReactions"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SinglePostByPublicationQuery, SinglePostByPublicationQueryVariables>;
export const SitemapDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sitemap"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postsCount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postsAfter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"staticPagesCount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"staticPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"staticPagesCount"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postsCount"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postsAfter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredSitemapPostFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredSitemapPostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<SitemapQuery, SitemapQueryVariables>;
export const MoreSitemapPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MoreSitemapPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postsCount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postsAfter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postsCount"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postsAfter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredSitemapPostFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredSitemapPostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]} as unknown as DocumentNode<MoreSitemapPostsQuery, MoreSitemapPostsQueryVariables>;
export const SlugPostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SlugPostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"umamiWebsiteUUID"}},{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"gTagManagerID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"koalaPublicKey"}},{"kind":"Field","name":{"kind":"Name","value":"msClarityID"}}]}}]}}]} as unknown as DocumentNode<SlugPostsByPublicationQuery, SlugPostsByPublicationQueryVariables>;
export const TagPostsByPublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TagPostsByPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Publication"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tagSlugs"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Publication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSEO"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"darkMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navbarItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"hashnode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"umamiWebsiteUUID"}},{"kind":"Field","name":{"kind":"Name","value":"gaTrackingID"}},{"kind":"Field","name":{"kind":"Name","value":"fbPixelID"}},{"kind":"Field","name":{"kind":"Name","value":"hotjarSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"matomoURL"}},{"kind":"Field","name":{"kind":"Name","value":"matomoSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomSiteID"}},{"kind":"Field","name":{"kind":"Name","value":"gTagManagerID"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomain"}},{"kind":"Field","name":{"kind":"Name","value":"fathomCustomDomainEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"plausibleAnalyticsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"koalaPublicKey"}},{"kind":"Field","name":{"kind":"Name","value":"msClarityID"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}}]}}]} as unknown as DocumentNode<TagPostsByPublicationQuery, TagPostsByPublicationQueryVariables>;