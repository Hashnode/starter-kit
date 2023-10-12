import getSitemap from '@starter-kit/utils/seo/sitemap';
import request from 'graphql-request';
import { SitemapDocument, SitemapQuery, SitemapQueryVariables } from '../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const Sitemap = () => null;

export async function getServerSideProps(ctx: { req: any; res: any; query: any }) {
	const { res } = ctx;

	const data = await request<SitemapQuery, SitemapQueryVariables>(GQL_ENDPOINT, SitemapDocument, {
		host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
		postsCount: 50,
		staticPagesCount: 50,
	});

	const publication = data.publication;
	const xml = getSitemap(publication);

	res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
	res.setHeader('content-type', 'text/xml');
	res.write(xml);
	res.end();

	return { props: {} };
}

export default Sitemap;
