export const addArticleJsonLd = (publication: any, post: any) => {
	const tags = (post.tags ?? []).map((tag: any) => tag.name);
	const schema = {
		'@context': 'https://schema.org/',
		'@type': 'BlogPosting',
		'@id': publication.url,
		mainEntityOfPage: publication.url,
		name: "Temizmama Blog",
		description: publication.about?.markdown,
		publisher: {
			'@type': "Organization",
			'@id': publication.url,
			url: `https://www.temizmama.com`,
			name: "Temizmama Blog",
			image: {
				'@type': 'ImageObject',
				url: publication.preferences?.logo || publication.preferences?.darkMode?.logo,
			},
		},
		blogPost: [
			{
				'@type': 'BlogPosting',
				'@id': post.url,
				mainEntityOfPage: post.url,
				headline: post.title,
				name: post.title,
				description: post.seo?.description || post.brief,
				datePublished: post.publishedAt,
				dateModified: post.updatedAt,
				author: {
					'@type': 'Organization',
					'@id': `https://hashnode.com/@${post.author?.username}`,
					'name': "Temizmama Blog",
				url: `https://www.temizmama.com`,
				},
				publisher: {
					'@type': "Organization",
					'name': "Temizmama Blog",
				logo: {
					'@type': "ImageObject",
					'url': "https://blog.temizmama.com/_next/image?url=https%3A%2F%2F9kelt5xnesj2nkgz.public.blob.vercel-storage.com%2Ffile-eYpF3jWI7j8924LUC1AR51hcMjnVNp.png&w=1200&q=75"
					},
				image: {
					'@type': 'ImageObject',
					url: post.coverImage?.url,
				},
				url: post.url,
				keywords: post.seo?.keywords || tags,
			},
		},
		],
	};
	return schema;
};
