import request, { gql } from "graphql-request";
import { env } from "./env";
import {
  AuthorData,
  GetPostBySlugResponse,
  GetPostsArgs,
  GetPostsResponse,
  PublicationName,
  SeriesBlogData,
  SeriesDetails,
  SeriesList,
  SeriesPublication,
  SubscribeToNewsletterResponse,
  TableOfContents,
} from "./types";

const endpoint = env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const publicationId = env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;
const host = env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;

export async function getAuthor(username: string) {
  const query = gql`
    query getAuthorName($userName: String!) {
      user(username: $userName) {
        id
        username
        name
        bio {
          markdown
          html
          text
        }
        profilePicture
        socialMediaLinks {
          website
          github
          twitter
          instagram
          facebook
          stackoverflow
          linkedin
          youtube
        }
        badges {
          id
          name
          description
          image
          dateAssigned
          infoURL
          suppressed
        }
        followersCount
        followingsCount
        tagline
        dateJoined
        location
        availableFor
      }
    }
  `;

  const response = await request<AuthorData>(endpoint, query, {
    userName: username,
  });
  return response.user;
}
export async function getBlogName() {
  const query = gql`
    query getBlogName($host: String!) {
      publication(host: $host) {
        title
        displayTitle
        favicon
        author {
          username
        }
      }
    }
  `;

  const response = await request<PublicationName>(endpoint, query, {
    host,
  });

  return {
    title: response.publication.title,
    displayTitle: response.publication.displayTitle,
    favicon: response.publication.favicon,
    userName: response.publication.author.username,
  };
}

export async function getPosts({ first = 5, pageParam = "" }: GetPostsArgs) {
  const query = gql`
    query getPosts($host: String!, $first: Int!, $after: String) {
      publication(host: $host) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              subtitle
              slug
              content {
                text
              }
              coverImage {
                url
              }
              author {
                name
                profilePicture
              }
              publishedAt
              tags {
                id
                name
                slug
              }
            }
            cursor
          }
        }
      }
    }
  `;

  const response = await request<GetPostsResponse>(endpoint, query, {
    host,
    first,
    after: pageParam,
  });

  return response.publication.posts.edges;
}
export async function getSeriesDetails(slug: string) {
  const query = gql`
    query getSeriesDetails($host: String!, $slug: String!) {
      publication(host: $host) {
        series(slug: $slug) {
          id
          name
          createdAt

          description {
            markdown
          }
          coverImage
          author {
            id
            username
            name
            profilePicture
          }
          slug
        }
      }
    }
  `;

  const response = await request<SeriesDetails>(endpoint, query, {
    host,
    slug,
  });

  return response.publication.series;
}

export async function getSeriesBlogs({ queryKey, pageParam = "" }: any) {
  const [_key, slug] = queryKey;
  const first = 5;

  const query = gql`
    query getSeriesBlogs(
      $host: String!
      $slug: String!
      $first: Int!
      $after: String
    ) {
      publication(host: $host) {
        series(slug: $slug) {
          posts(first: $first, after: $after) {
            edges {
              node {
                id
                slug
                title
                subtitle
                url
                content {
                  text
                }
                author {
                  id
                  username
                  name
                  profilePicture
                }
                coverImage {
                  url
                }
                readTimeInMinutes
                views
              }
              cursor
            }
          }
        }
      }
    }
  `;

  const response = await request<SeriesBlogData>(endpoint, query, {
    host,
    slug,
    first,
    after: pageParam,
  });

  return response.publication;
}

export async function getPostBySlug(slug: string) {
  const query = gql`
    query getPostBySlug($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id
          title
          subtitle
          publishedAt
          readTimeInMinutes
          coverImage {
            url
          }
          content {
            html
          }
          author {
            name
            profilePicture
          }
        }
      }
    }
  `;

  const response = await request<GetPostBySlugResponse>(endpoint, query, {
    host,
    slug,
  });

  return response.publication.post;
}

export async function getTableOfContents(id: string) {
  const query = gql`
    query getTableOfContents($id: ID!) {
      post(id: $id) {
        publishedAt
        reactionCount
        readTimeInMinutes
        features {
          tableOfContents {
            isEnabled
            items {
              id
              level
              slug
              title
            }
          }
        }
        comments(first: 5) {
          edges {
            node {
              content {
                markdown
              }
              author {
                username
                name
                profilePicture
              }
              dateAdded
            }
            cursor
          }
        }
      }
    }
  `;
  const response = await request<TableOfContents>(endpoint, query, {
    id,
  });
  return response.post;
}

export async function getSeriesList() {
  const query = gql`
    query getSeriesList($host: String!) {
      publication(host: $host) {
        seriesList(first: 5) {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    }
  `;

  const response = await request<SeriesList>(endpoint, query, {
    host,
  });

  return response.publication.seriesList.edges;
}

export async function subscribeToNewsletter(email: string) {
  const mutation = gql`
    mutation subscribeToNewsletter($publicationId: ObjectId!, $email: String!) {
      subscribeToNewsletter(
        input: { email: $email, publicationId: $publicationId }
      ) {
        status
      }
    }
  `;

  const response = await request<SubscribeToNewsletterResponse>(
    endpoint,
    mutation,
    {
      publicationId,
      email,
    }
  );

  return response;
}
