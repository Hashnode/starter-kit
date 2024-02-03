import { GraphQLClient } from 'graphql-request';
import {
    MorePostsByPublicationDocument,
    type MorePostsByPublicationQuery,
    type MorePostsByPublicationQueryVariables,
    type PageInfo
} from '$lib/graphql/generated/graphql';

const GQL_ENDPOINT = import.meta.env.VITE_PUBLIC_HASHNODE_GQL_ENDPOINT as string;
const PUBLICATION_HOST = import.meta.env.VITE_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

const graphQLClient = new GraphQLClient(GQL_ENDPOINT);

const pageInfo: PageInfo = {
    endCursor: '',
    hasNextPage: true
};

export async function morePosts() {
    const data = await graphQLClient.request<
        MorePostsByPublicationQuery,
        MorePostsByPublicationQueryVariables
    >(MorePostsByPublicationDocument, {
        first: 10,
        host: PUBLICATION_HOST,
        after: pageInfo.endCursor
    });

    if (!data.publication) {
        return
    }

    pageInfo.endCursor = data.publication?.posts.pageInfo.endCursor;
    pageInfo.hasNextPage = data.publication?.posts.pageInfo.hasNextPage;

    const newPosts = data.publication?.posts.edges.map((edge) => edge);

    return {
        newPosts,
        pageInfo
    };
}