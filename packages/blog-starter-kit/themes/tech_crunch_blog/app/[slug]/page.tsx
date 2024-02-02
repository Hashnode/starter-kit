import BlogPost from '@/components/blog';
import { type Post } from '@/generated/graphql';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
	params: { id: string };
	searchParams: { id: string; [key: string]: string | string[] | undefined };
};

type Response = {
	data: {
		post: Post;
	};
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	let id = searchParams.id;

	if (!id) {
		throw new Error('No blog id');
		// return {
		// 	title: '',
		// 	description: '',
		// };
	}

	const graphqlEndpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

	const query = `
	  query getBlogPostById($id: ID!) {
	    post(id: $id) {
	      id
	      slug
	      seo {
	        title
	        description
	      }
	      title
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
	`;

	const variables = {
		id,
	};

	let req = await fetch(graphqlEndpoint, {
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
		return {
			title: '',
			description: '',
		};
	}

	let res: Response = await req.json();

	let seo = res?.data?.post?.seo;

	const product = {
		title: seo?.title,
		description: seo?.description,
	};

	return product;
}

const ViewBlogPost = () => {
	return <BlogPost />;
};

export default ViewBlogPost;
