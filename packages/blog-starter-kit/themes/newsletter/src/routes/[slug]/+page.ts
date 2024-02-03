import { SinglePostByPublicationDocument } from '$lib/graphql/generated/graphql';

import { request } from 'graphql-request';

const GQL_ENDPOINT = import.meta.env.VITE_PUBLIC_HASHNODE_GQL_ENDPOINT as string;
const PUBLICATION_HOST = import.meta.env.VITE_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export async function load({ params }) {
	const { slug } = params;

	const post = await request(GQL_ENDPOINT, SinglePostByPublicationDocument, {
		slug,
		host: PUBLICATION_HOST
	});

	if (post.publication?.post) {
		return {
			props: {
				post
			}
		};
	}
}
