import { gql } from 'graphql-request';
import { getClient } from '../graphQLClient';

interface SearchBlogParams {
	first: number;
	filter: {
		query: string;
		publicationId: string;
	};
}

export const searchBlog = async ({ first, filter: { query, publicationId } }: SearchBlogParams) => {
	const client = getClient();

	const data = await client.request(
		gql`
			query getBlogSearch($first, $query, $publicationId) {
                searchPostsOfPublication(
					first: $first
					filter: { query: $query, publicationId: $publicationId }
				) {
					edges {
						node {
							author {
								name
								profilePicture
							}
							title
							subtitle
							brief
							slug
							coverImage {
								url
							}
							tags {
								name
								slug
								id
							}
							publishedAt
							readTimeInMinutes
						}
					}
				}
            }
		`,
		{
			first,
			query,
			publicationId,
		},
	);

	return data;
};
