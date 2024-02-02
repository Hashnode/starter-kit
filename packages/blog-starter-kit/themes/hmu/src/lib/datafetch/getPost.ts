const endpoint =
  process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT || "https://gql.hashnode.com"; // Replace with your actual GraphQL endpoint URL
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST; // Replace with the desired host value
const first = 10;
const query = `

query Publication($host: String!, $first: Int!) {
  publication(host:$host) {
    id
    title
    displayTitle
    favicon
    
    posts(first: $first){
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

const variables = {
  host,
  first,
};

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers as needed
  },
  body: JSON.stringify({ query, variables }),
};

export async function getPosts() {
  try {
    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();

    // Handle the data as needed
    return data;
  } catch (error) {
    console.error("Error during GraphQL request:", error);
  }
}
