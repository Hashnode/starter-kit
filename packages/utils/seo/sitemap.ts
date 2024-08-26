export const getSitemap = (publication: any) => {
	let xml =
	  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">';
  
	const domain = publication.url;
	const staticPages = publication.staticPages.edges.map((edge: any) => edge.node);
	const posts = publication.posts;
	const categories = publication.seriesList?.edges?.map((edge: any) => edge.node) || [];
  
	// Manuel olarak eklenecek kategoriler
	const manualCategories = [
	  { slug: 'kedi', publishedAt: '2024-08-05' },
	  { slug: 'kopek', publishedAt: '2024-08-05' },
	  { slug: 'kedi-bakimi', publishedAt: '2024-08-05' },
	  { slug: 'kedi-sagligi', publishedAt: '2024-08-05' },
	  { slug: 'kedi-irklari', publishedAt: '2024-08-05' },
	  { slug: 'kedi-beslenmesi', publishedAt: '2024-08-05' },
	  { slug: 'kedi-diger', publishedAt: '2024-08-05' },
	  { slug: 'kopek-sagligi', publishedAt: '2024-08-05' },
	  { slug: 'kopek-bakimi', publishedAt: '2024-08-05' },
	  { slug: 'kopek-irklari', publishedAt: '2024-08-05' },
	  { slug: 'kopek-beslenmesi', publishedAt: '2024-08-05' },
	  { slug: 'kopek-diger', publishedAt: '2024-08-05' },
	];
  
	// Manuel olarak eklenecek statik sayfalar
	const manualStaticPages = [
	  { slug: 'iletisim', publishedAt: '2024-08-05' },
	];
  
	// Ana sayfa
	xml += '<url>';
	xml += `<loc>${domain}</loc>`;
	if (posts.length > 0) {
	  xml += `<lastmod>${posts[0].publishedAt}</lastmod>`;
	}
	xml += '</url>';
  
	// Blog yazıları
	for (let i = 0; i < posts.length; i += 1) {
	  xml += '<url>';
	  xml += `<loc>${domain}/${posts[i].slug}</loc>`;
	  if (posts[i].publishedAt) {
		xml += `<lastmod>${posts[i].publishedAt}</lastmod>`;
	  }
	  xml += '</url>';
	}
  
	// Statik sayfalar (otomatik + manuel)
	[...staticPages, ...manualStaticPages].forEach((page: any) => {
	  xml += '<url>';
	  xml += `<loc>${domain}/${page.slug}</loc>`;
	  if (page.publishedAt) {
		xml += `<lastmod>${page.publishedAt}</lastmod>`;
	  }
	  xml += '</url>';
	});
  
	// Kategoriler (Series) (otomatik + manuel)
	[...categories, ...manualCategories].forEach((category: any) => {
	  xml += '<url>';
	  xml += `<loc>${domain}/${category.slug}</loc>`;
	  if (category.publishedAt) {
		xml += `<lastmod>${category.publishedAt}</lastmod>`;
	  }
	  xml += '</url>';
	});
  
	xml += '</urlset>';
	return xml;
  };