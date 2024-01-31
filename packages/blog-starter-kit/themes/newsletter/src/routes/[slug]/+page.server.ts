import { SinglePostByPublicationDocument } from '$lib/graphql/generated/graphql';

import { request } from 'graphql-request';

export async function load({ params }) {
	const { slug } = params;

	const post = await request('https://gql.hashnode.com', SinglePostByPublicationDocument, {
		slug,
		host: 'engineering.hashnode.com'
	});

	if (post.publication?.post) {
		return {
			props: {
				post
			}
		};
	}
}
