import type PublicationType from "@starter-kit/interfaces/publication";
import type PostType from "@starter-kit/interfaces/post";
import RSS from 'rss';

const NON_ASCII_REGEX = /[\u{0080}-\u{FFFF}]/gu;

const constructRSSFeedFromPosts = (publication: PublicationType, posts: PostType[], page: number) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"}${process.env.NEXT_PUBLIC_BASE_URL}`;

    const feedConfig = {
        title: `${publication.title || `${publication.author!.name}'s blog`}`,
        description: publication.about!.html,
        feed_url: `${baseUrl}/rss.xml${page === 0 ? '' : `?page=${page}`}`,
        site_url: baseUrl,
        image_url: publication.preferences!.logo,
        language: 'en',
        ttl: 60,
        custom_elements: [
            {
                'atom:link': {
                    _attr: {
                        rel: 'next',
                        href: `${baseUrl}/rss.xml?page=${page + 1}`,
                    },
                },
            },
        ],
    };

    if (page > 0) {
        feedConfig.custom_elements.push({
            'atom:link': {
                _attr: {
                    rel: 'previous',
                    href: `${baseUrl}/rss.xml${page === 1 ? '' : `?page=${page - 1}`}`,
                },
            },
        });
    }

    const feed = new RSS(feedConfig);

    posts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.content!.html!.replace(NON_ASCII_REGEX, ''),
            url: `${baseUrl}/${post.slug}`,
            categories: post.tags!.map((tag) => tag.name),
            author: post.author!.name,
            date: post.publishedAt,
            ...(post.coverImage && { custom_elements: [{ cover_image: post.coverImage }] }),
        });
    });

    const xml = feed.xml();
    return xml;
}

exports.constructRSSFeedFromPosts = constructRSSFeedFromPosts;
export default constructRSSFeedFromPosts;