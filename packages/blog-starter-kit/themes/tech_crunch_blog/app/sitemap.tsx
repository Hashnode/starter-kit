import getAllBlogPosts from '@/util/index';

async function sitemap() {
	const allBlogPosts = await getAllBlogPosts();

	return allBlogPosts.map((blog) => {
		return {
			url: `${blog.node.slug}?id=${blog.node.id}`,
			lastModified: blog.node.updatedAt,
			changeFrequency: 'yearly',
			priority: 1,
		};
	});
}

export default sitemap;
