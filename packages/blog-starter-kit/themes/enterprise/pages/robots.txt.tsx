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

# Allow crawling of all content
User-agent: *
Allow: /

# Disallow admin and private pages
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Google adsbot ignores robots.txt unless specifically named!
User-agent: AdsBot-Google
Allow: /

# Block AI crawlers
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: Google-Extended
User-agent: CCBot
User-agent: anthropic-ai
Disallow: /

# Allow Googlebot
User-agent: Googlebot
Allow: /

# Block certain bots from specific directories
User-agent: Baiduspider
Disallow: /forums/

User-agent: Yandex
Disallow: /downloads/

# Delay between successive requests
Crawl-delay: 10

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