import { type GetServerSideProps } from 'next';

const RobotsTxt = () => null;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { res } = ctx;
  const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
  if (!host) {
    throw new Error('Could not determine host');
  }

  const sitemapUrl = `https://${host}/sitemap.xml`;
  const robotsTxt = `
# www.robotstxt.org/

# Allow crawling of all content except admin, private and api
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /api/
# Allow Google AdsBot
User-agent: AdsBot-Google
Allow: /

# Block certain bots from specific directories
User-agent: Baiduspider
Disallow: /admin/
Disallow: /private/
Disallow: /api/

User-agent: Yandex
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Sitemap
Sitemap: ${sitemapUrl}

# Host
Host: ${host}
  `.trim();

  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  res.write(robotsTxt);
  res.end();

  return { props: {} };
};

export default RobotsTxt;
