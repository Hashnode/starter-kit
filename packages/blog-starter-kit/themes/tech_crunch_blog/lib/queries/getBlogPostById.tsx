import { Post } from '@/generated/graphql';
import { gql, request } from 'graphql-request';

interface Data {
	post: Post;
}

export const getBlogPostById = async (id: string) => {
	let hashNodeUrl = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

	const data = (await request(
		hashNodeUrl,
		gql`
			query getBlogPostById($id: ID!) {
				post(id: $id) {
					id
					slug
					title
					seo {
						title
						description
					}
					author {
						name
						profilePicture
					}
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
		`,
		{
			id,
		},
	)) as Data;

	return data.post;
};
