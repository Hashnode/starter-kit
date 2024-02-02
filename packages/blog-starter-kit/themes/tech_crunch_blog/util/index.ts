import { getBlogPosts } from '@/lib/queries/getBlogPosts';

const getAllBlogPosts = async () => {
	const allPosts = [];

	let nextPage = ''; // Initial nextPage value
	let hasNextPage = true;

	while (hasNextPage) {
		const { publication } = await getBlogPosts({ limit: 20, nextPage });
		const { posts } = publication;

		allPosts.push(...posts.edges);

		// @ts-expect-error
		hasNextPage = posts.pageInfo.hasNextPage;
		//  @ts-expect-error
		nextPage = hasNextPage ? posts.pageInfo.endCursor : '';
	}

	return allPosts;
};

export default getAllBlogPosts;
