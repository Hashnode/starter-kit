// Replace with your actual API token

export async function updateBlogPost(postId: string, contentMarkdown: string) {
  const graphqlEndpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT || ""; // Replace with your GraphQL endpoint URL
  const apiToken = process.env.HASHNODE_API_KEY || "";
  const mutation = `
  mutation updateBlogPost($postId:ID!, $contentMarkdown: String) {
    updatePost(input: {id:$postId, contentMarkdown: $contentMarkdown }) {
      post {
        id
        
      }
    }
  }
    `;

  const headers = {
    "Content-Type": "application/json",
    Authorization: apiToken,
  };

  const requestBody = {
    query: mutation,
    variables: {
      postId: postId,
      contentMarkdown: contentMarkdown,
    },
  };

  try {
    const response = await fetch(graphqlEndpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    console.log(response);

    return data;
  } catch (error) {
    console.error("GraphQL Request Error:", error);
    throw error;
  }
}
