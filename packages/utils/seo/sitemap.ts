export const getSitemap = (publication: any) => {
	let xml =
	  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">';
  
	const domain = publication.url;
	const staticPages = publication.staticPages.edges.map((edge: any) => edge.node);
	const posts = publication.posts;
	const categories = publication.seriesList?.edges?.map((edge: any) => edge.node) || [];
  
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
  
	// Statik sayfalar
	staticPages.forEach((page: any) => {
	  xml += '<url>';
	  xml += `<loc>${domain}/${page.slug}</loc>`;
	  xml += '</url>';
	});
  
	// Kategoriler (Series)
	categories.forEach((category: any) => {
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