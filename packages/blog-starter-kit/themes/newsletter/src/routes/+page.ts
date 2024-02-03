import { GraphQLClient } from 'graphql-request';
import {
	PublicationByHostDocument,
	type PublicationByHostQuery,
	type PublicationByHostQueryVariables,
    PostsByPublicationDocument,
    type PostsByPublicationQuery,
    type PostsByPublicationQueryVariables
} from '$lib/graphql/generated/graphql';

const GQL_ENDPOINT = import.meta.env.VITE_PUBLIC_HASHNODE_GQL_ENDPOINT as string;
const PUBLICATION_HOST = import.meta.env.VITE_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

const graphQLClient = new GraphQLClient(GQL_ENDPOINT);

export async function load() {
	const { publication } = await graphQLClient.request<
		PublicationByHostQuery,
		PublicationByHostQueryVariables
	>(PublicationByHostDocument, {
		host: PUBLICATION_HOST
	});

    const posts = await graphQLClient.request<
        PostsByPublicationQuery,
        PostsByPublicationQueryVariables
    >(PostsByPublicationDocument, {
       first: 10,
       host: PUBLICATION_HOST
    });

	return {
		props: {
			publication,
            posts,
		}
	};
}
