import { GraphQLClient } from 'graphql-request';
import {
    PublicationDocument,
    type PublicationQuery,
    type PublicationQueryVariables,
} from '$lib/graphql/generated/graphql';

const graphQLClient = new GraphQLClient('https://gql.hashnode.com');

export async function load() {
    const { publication } = await graphQLClient.request<
        PublicationQuery,
        PublicationQueryVariables
    >(PublicationDocument);

    return {
        props: {
            publication
        }
    };
}