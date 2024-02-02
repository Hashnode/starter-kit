const endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT || ""; // Replace with your actual GraphQL endpoint URL
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST || ""; // Replace with the desired host value
const first = 20;

const tagPostsByPublicationQuery = `
 query Publication($host: String!, $first: Int!, $tagSlug: String!) {
  publication(host:$host) {
    id
    title
    url
    displayTitle
    favicon
    descriptionSEO
    ogMetaData {
      image
    }
    preferences {
      logo
      
    }
    author {
      name
      profilePicture
    }
    followersCount
    metaTags
    
    
    posts(first: $first ,filter: {tagSlugs: [$tagSlug]} ){
      edges {
        node {
          id
          slug
          title
          subtitle
          coverImage {
            url
          }
          readTimeInMinutes
        }
      
        
      }
      pageInfo {
				endCursor
        hasNextPage}
      }
    followersCount
    domainInfo {
      domain {
        host
      }
    }
   
    links {
      github
      youtube
      instagram
      twitter
      hashnode
      linkedin
      dailydev
      website
      mastodon
      
    }
    
    about {
      markdown
    }
  }
}

`;

export async function getPostsByTags({
  after,
  tag,
}: {
  after: string;
  tag: string;
}) {
  const variables = (after: string, tag: string) => ({
    host: host,
    tagSlug: tag,
    first: 20, // or any other value for 'first'
    after, // or provide a cursor for 'after' if needed
  });

  const requestOptions = (after: string, tag: string) => ({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers as needed
    },
    body: JSON.stringify({
      query: tagPostsByPublicationQuery,
      variables: variables(after, tag),
    }),
  });
  try {
    const response = await fetch(endpoint, requestOptions(after, tag));
    const data = await response.json();

    // Handle the data as needed
    return data;
  } catch (error) {
    console.error("Error during GraphQL request:", error);
  }
}
