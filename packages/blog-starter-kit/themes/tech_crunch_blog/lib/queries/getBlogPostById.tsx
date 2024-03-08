import { Post } from '@/generated/graphql';

interface Data {
	data: {
		post: Post;
	};
}

export const getBlogPostById = async (id: string | null) => {
	if (!id) {
		throw new Error('No id argument passed');
	}
	let hashNodeUrl = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

	const query = `
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
			html
			text
		}
		tags {
			id
			name
		}
		publishedAt
		readTimeInMinutes
	}
}
	`;

	const variables = {
		id,
	};

	let req = await fetch(hashNodeUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
		next: {
			revalidate: 2,
		},
	});

	if (!req.ok) {
		throw new Error('Fetch request error: getBlogPostById');
	}

	let res: Data = await req.json();

	return res?.data?.post;
};
