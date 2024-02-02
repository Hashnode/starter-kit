import { GraphQLClient } from 'graphql-request';
import {
	PublicationByHostDocument,
	type PublicationByHostQuery,
	type PublicationByHostQueryVariables,
    PostsByPublicationDocument,
    type PostsByPublicationQuery,
    type PostsByPublicationQueryVariables
} from '$lib/graphql/generated/graphql';

const graphQLClient = new GraphQLClient('https://gql.hashnode.com');

export async function load() {
	const { publication } = await graphQLClient.request<
		PublicationByHostQuery,
		PublicationByHostQueryVariables
	>(PublicationByHostDocument, {
		host: 'engineering.hashnode.com'
	});

    const posts = await graphQLClient.request<
        PostsByPublicationQuery,
        PostsByPublicationQueryVariables
    >(PostsByPublicationDocument, {
       first: 10,
       host: 'engineering.hashnode.com'
    });

	return {
		props: {
			publication,
            posts,
		}
	};
}
