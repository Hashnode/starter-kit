type PostType = {
  id: string;
  slug: string;
  title: string;
  publishedAt?: string;
  updatedAt?: string;
  readTimeInMinutes?: number;
  reactionCount?: number;
  responseCount?: number;
  coverImage?: {
    url: string;
  };
  author?: {
    username: string;
    name: string;
    profilePicture?: string;
    followersCount?: number;
  };
  ogMetaData?: {
    image?: string;
  };
  seo?: {
    title: string;
    description: string;
  }
  content?: {
    markdown?: string;
    html?: string;
  };
  tags?: {
    id: string;
    name: string;
    slug: string;
  }[];
  brief?: string;
  url?: string;
  features?: {
    tableOfContents?: {
      isEnabled: boolean;
      items: {
        id: string;
        level: number;
        parentId: string;
        slug: string;
        title: string;
      }
    }
  }
};

export default PostType;
