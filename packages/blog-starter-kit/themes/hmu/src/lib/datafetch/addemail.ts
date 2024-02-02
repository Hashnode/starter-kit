const graphqlEndpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT || ""; // Replace with your GraphQL endpoint URL
const apiToken = process.env.HASHNODE_API_KEY || ""; // Replace with your actual API token

export async function subscribeToNewsletter(
  email: string,
  publicationId: string
) {
  const mutation = `
      mutation subscribeToNewletter($email: String!, $id: ObjectId!) {
        subscribeToNewsletter(input: { publicationId: $id, email: $email }) {
          status
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
      email: email,
      id: publicationId,
    },
  };

  try {
    const response = await fetch(graphqlEndpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("GraphQL Request Error:", error);
    throw error;
  }
}
