const endpoint =
  process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT || "https://gql.hashnode.com"; // Replace with your actual GraphQL endpoint URL
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST; // Replace with the desired host value
const first = 10;
const query = `

query Publication($host: String!, $first: Int!, $after: String) {
  publication(host:$host) {
    posts(first: $first, after: $after){
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          slug
          title
          subtitle
          coverImage {
            url
          }
          author {
            name
            profilePicture
          }
          readTimeInMinutes
        }
        
        cursor
        
        
      }
    }
    followersCount
    domainInfo {
      domain {
        host
      }
    }
    author {
        name
      profilePicture
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

export async function getMorePost({ after }: { after: string }) {
  const variables = (after: string) => ({
    after,
    host,
    first,
  });

  const requestOptions = (after: string) => ({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers as needed
    },
    body: JSON.stringify({ query, variables: variables(after) }),
  });
  try {
    const response = await fetch(endpoint, requestOptions(after));
    const data = await response.json();

    console.log("load more data", data);

    // Handle the data as needed
    return data;
  } catch (error) {
    console.error("Error during GraphQL request:", error);
  }
}
