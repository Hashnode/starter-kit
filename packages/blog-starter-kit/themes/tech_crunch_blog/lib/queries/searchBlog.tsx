import { gql, request } from 'graphql-request';

interface SearchBlogParams {
	first: number;
	filter: {
		query: string;
		publicationId: string;
	};
}

type searchPostsOfPublication = {
	searchPostsOfPublication: {
		edges: Node[];
	};
};

type Node = {
	node: {
		id: string;
		slug: string;
		title: string;
		author: {
			name: string;
			profilePicture: string;
		};
		seo: {
			title: string;
			description: string;
		};
		content: {
			markdown: string;
			text: string;
			html: string;
		};
		brief: string;
		coverImage: {
			url: string;
		};
		tags: {
			id: string;
			name: string;
		}[];
		updatedAt: null;
		publishedAt: string;
		readTimeInMinutes: number;
	};
};

const searchBlog = async ({ first, filter: { query, publicationId } }: SearchBlogParams) => {
	let hashNodeUrl = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

	const data = (await request(
		hashNodeUrl,
		gql`
			query searchBlogPublication($first: Int!, $query: String!, $publicationId: ObjectId!) {
				searchPostsOfPublication(
					first: $first
					filter: { query: $query, publicationId: $publicationId }
				) {
					edges {
						node {
							id
							slug
							title
							author {
								name
								profilePicture
							}
							seo {
								title
								description
							}
							brief
							slug
							coverImage {
								url
							}
							content {
								markdown
								text
								html
							}
							tags {
								id
								name
							}
							updatedAt
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
	)) as searchPostsOfPublication;

	return data.searchPostsOfPublication;
};

export default searchBlog;
