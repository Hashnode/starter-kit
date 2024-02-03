import type { QueryFunctionContext } from "@tanstack/react-query";

export type PublicationName = {
  publication: {
    title: string;
    displayTitle?: string;
    favicon?: string;
    author: {
      username: string;
    };
  };
};

export type PostMetadata = {
  title: string;
  subtitle?: string;
  slug: string;
  content: {
    text: string;
  };
  coverImage: {
    url: string;
  };
  author: {
    name: string;
    profilePicture?: string;
  };
  publishedAt: string;
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
};
export type AuthorData = {
  user: {
    id: string;
    username: string;
    name: string;
    bio: {
      markdown: string;
      html: string;
      text: string;
    };
    profilePicture: string;
    socialMediaLinks: {
      website: string;
      github: string;
      twitter: string;
      instagram: string;
      facebook: string;
      stackoverflow: string;
      linkedin: string;
      youtube: string;
    };
    badges: Array<{
      id: string;
      name: string;
      description: string;
      image: string;
      dateAssigned: string;
      infoURL: string | null;
      suppressed: string | null;
    }>;
    followersCount: number;
    followingsCount: number;
    tagline: string;
    dateJoined: string;
    location: string;
    availableFor: string;
  };
};

type GetPostsResponse = {
  publication: {
    posts: {
      edges: {
        node: PostMetadata;
        cursor: string;
      }[];
    };
  };
};

type GetPostsFunctionArgs = {
  first: number;
  after: string;
};

export type GetPostsArgs = QueryFunctionContext & GetPostsArgs;

export type SubscribeToNewsletterResponse = {
  data?: {
    subscribeToNewsletter: {
      status: string;
    };
  };

  errors?: { message: string }[];
};

export type GetPostBySlugResponse = {
  publication: {
    post: {
      id: string;
      title: string;
      subtitle?: string;
      publishedAt: string;
      readTimeInMinutes: number;
      coverImage: {
        url: string;
      };
      content: {
        html: string;
      };
      author: {
        name: string;
        profilePicture?: string;
      };
    };
  };
};

export type SeriesList = {
  publication: {
    seriesList: {
      edges: Array<{
        node: {
          id: string;
          name: string;
          slug: string;
        };
      }>;
    };
  };
};

export type SeriesPublication = {
  data: {
    publication: {
      series: {
        id: string;
        name: string;
        createdAt: string;
        description: {
          markdown: string;
        };
        coverImage: string;
        author: {
          id: string;
          username: string;
          name: string;
          profilePicture: string;
        };
        slug: string;
        posts: {
          edges: Array<{
            node: {
              id: string;
              slug: string;
              title: string;
              subtitle: string | null;
              url: string;
              coverImage: {
                url: string;
              };
              readTimeInMinutes: number;
              views: number;
            };
            cursor: string;
          }>;
        };
      };
    };
  };
};

export type SeriesDetails = {
  publication: {
    series: {
      id: string;
      name: string;
      createdAt: string;
      description: {
        markdown: string;
      };
      coverImage: string;
      author: {
        id: string;
        username: string;
        name: string;
        profilePicture: string;
      };
      slug: string;
    };
  };
};
export type SeriesBlogData = {
  publication: {
    series: {
      id: string;
      posts: {
        edges: {
          node: {
            id: string;
            slug: string;
            title: string;
            subtitle: string | null;
            url: string;
            content: {
              text: string;
            };
            author: {
              id: string;
              username: string;
              name: string;
              profilePicture: string;
            };
            coverImage: {
              url: string;
            };
            readTimeInMinutes: number;
            views: number;
          };
          cursor: string;
        }[];
      };
    };
  };
};

export type TableOfContents = {
  post: {
    publishedAt: string;
    reactionCount: number;
    readTimeInMinutes: number;
    features: {
      tableOfContents: {
        isEnabled: boolean;
        items: Array<{
          id: string;
          level: number;
          slug: string;
          title: string;
        }>;
      };
    };
    comments: {
      edges: Array<{
        node: {
          content: {
            markdown: string;
          };
          author: {
            username: string;
            name: string;
            profilePicture: string;
          };
          dateAdded: string;
        };
        cursor: string;
      }>;
    };
  };
};
