export const addArticleJsonLd = (publication: any, post: any) => {
	const tags = (post.tags ?? []).map((tag: any) => tag.name);
	const schema = {
	  '@context': 'https://schema.org',
	  '@type': 'BlogPosting',
	  '@id': post.url,
	  'url': post.url,
	  'mainEntityOfPage': {
		'@type': 'WebPage',
		'@id': post.url
	  },
	  'headline': post.title,
	  'name': post.title,
	  'description': post.seo?.description || post.brief,
	  'datePublished': post.publishedAt,
	  'dateModified': post.updatedAt,
	  'author': {
		'@type': 'Organization',
		'name': 'Temizmama',
		'url': 'https://www.temizmama.com'
	  },
	  'publisher': {
		'@type': 'Organization',
		'name': 'Temizmama Blog',
		'url': 'https://blog.temizmama.com',
		'logo': {
		  '@type': 'ImageObject',
		  'url': 'https://blog.temizmama.com/_next/image?url=https%3A%2F%2F9kelt5xnesj2nkgz.public.blob.vercel-storage.com%2Ffile-eYpF3jWI7j8924LUC1AR51hcMjnVNp.png&w=1200&q=75'
		}
	  },
	  'image': [
		{
		  '@type': 'ImageObject',
		  'url': post.coverImage?.url,
		  'width': '1200',
		  'height': '630',
		  'caption': post.title
		}
	  ],
	  'thumbnailUrl': post.coverImage?.url,
	  'keywords': post.seo?.keywords || tags.join(', '),
	  'articleSection': tags[0] || 'General',
	  'wordCount': post.content?.markdown.split(/\s+/).length || 0,
	  'inLanguage': 'tr-TR'
	};
  
	return schema;
  };