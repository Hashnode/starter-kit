import { GraphQLClient } from 'graphql-request';

let blogUrl = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;

export const getClient = () => {
	if (!blogUrl) throw new Error('env NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT was not set');

	const client = new GraphQLClient(blogUrl); // TODO refactor later
	return client;
};
