// src/routes/loadMorePosts.ts
import { GraphQLClient } from 'graphql-request';
import {
    MorePostsByPublicationDocument,
    type MorePostsByPublicationQuery,
    type MorePostsByPublicationQueryVariables,
    type PageInfo
} from '$lib/graphql/generated/graphql';

const graphQLClient = new GraphQLClient('https://gql.hashnode.com');

const pageInfo: PageInfo = {
    endCursor: '',
    hasNextPage: true
};

export async function morePosts() {
    console.log('pageInfo', pageInfo.endCursor);
    const data = await graphQLClient.request<
        MorePostsByPublicationQuery,
        MorePostsByPublicationQueryVariables
    >(MorePostsByPublicationDocument, {
        first: 10,
        host: 'engineering.hashnode.com',
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