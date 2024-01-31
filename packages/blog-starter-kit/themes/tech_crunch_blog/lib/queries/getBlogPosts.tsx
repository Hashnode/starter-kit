import { Publication } from '@/generated/graphql';
import { gql, request } from 'graphql-request';

export const getBlogPosts = async ({
	host,
	limit,
	nextPage,
}: {
	host: string;
	limit: number;
	nextPage: string;
}) => {
	let hashNodeUrl = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

	const data = (await request(
		hashNodeUrl,
		gql`
			query getBlogPosts($host: String, $limit: Int!, $nextPage: String) {
				publication(host: $host) {
					id
					posts(first: $limit, after: $nextPage) {
						totalDocuments
						pageInfo {
							hasNextPage
							endCursor
						}
						edges {
							node {
								id
								seo {
									title
									description
								}
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
								content {
									markdown
								}
								tags {
									id
									name
								}
								publishedAt
								readTimeInMinutes
							}
						}
					}
				}
			}
		`,
		{
			host,
			limit,
			nextPage,
		},
	)) as { publication: Publication };

	return data;
};
