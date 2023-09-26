// pages/api/search.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const query = `
query SearchPostsOfPublication($first: Int!, $filter: SearchPostsOfPublicationFilter!) {
  searchPostsOfPublication(first: $first, filter: $filter) {
    edges {
      cursor
      node {
        id
        brief
        title
        cuid
        slug
        author {
          id
          name
        }
        publication {
          title
          url   
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor  
    }
  }
}
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { q, publication } = req.query;

    const variables = {
        first: 5,
        filter: {
            publicationId: publication,
            query: q
        }
    }

    const response = await fetch(process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables
        })
    })
    const data = await response.json();
    const posts = data.data.searchPostsOfPublication.edges.map((edge) => edge.node);
    return res.status(200).json(posts);
}