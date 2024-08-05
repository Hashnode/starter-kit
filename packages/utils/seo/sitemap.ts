export const getSitemap = (publication: any) => {
	let xml =
	  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">';
  
	const domain = publication.url;
	const staticPages = publication.staticPages.edges.map((edge: any) => edge.node);
	const posts = publication.posts;
	const categories = publication.seriesList?.edges?.map((edge: any) => edge.node) || [];
  
	// Manuel olarak eklenecek kategoriler
	const manualCategories = [
	  { slug: 'kedi-bakimi', updatedAt: '2024-08-05' },
	  { slug: 'kedi-sagligi', updatedAt: '2024-08-05' },
	  { slug: 'kedi-irklari', updatedAt: '2024-08-05' },
	  { slug: 'kedi-beslenmesi', updatedAt: '2024-08-05' },
	  { slug: 'kedi-diger', updatedAt: '2024-08-05' },
	  { slug: 'kopek-sagligi', updatedAt: '2024-08-05' },
	  { slug: 'kopek-bakimi', updatedAt: '2024-08-05' },
	  { slug: 'kopek-irklari', updatedAt: '2024-08-05' },
	  { slug: 'kopek-beslenmesi', updatedAt: '2024-08-05' },
	  { slug: 'kopek-diger', updatedAt: '2024-08-05' },
	  // Daha fazla kategori ekleyebilirsiniz
	];
  
	// Manuel olarak eklenecek statik sayfalar
	const manualStaticPages = [
	  { slug: 'iletisim' },
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
	  if (posts[i].updatedAt) {
		xml += `<lastmod>${posts[i].updatedAt}</lastmod>`;
	  }
	  xml += '</url>';
	}
  
	// Statik sayfalar (otomatik + manuel)
	[...staticPages, ...manualStaticPages].forEach((page: any) => {
	  xml += '<url>';
	  xml += `<loc>${domain}/${page.slug}</loc>`;
	  if (page.updatedAt) {
		xml += `<lastmod>${page.updatedAt}</lastmod>`;
	  }
	  xml += '</url>';
	});
  
	// Kategoriler (Series) (otomatik + manuel)
	[...categories, ...manualCategories].forEach((category: any) => {
	  xml += '<url>';
	  xml += `<loc>${domain}/${category.slug}</loc>`;
	  if (category.updatedAt) {
		xml += `<lastmod>${category.updatedAt}</lastmod>`;
	  }
	  xml += '</url>';
	});
  
	xml += '</urlset>';
	return xml;
  };