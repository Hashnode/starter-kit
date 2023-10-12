import RSS from 'rss';
import { getBaseUrl } from './consts';

const NON_ASCII_REGEX = /[\u{0080}-\u{FFFF}]/gu;

const constructRSSFeedFromPosts = (
	publication,
	posts,
	currentCursor: string,
	nextCursor: string,
) => {
	const baseUrl = getBaseUrl();

	const feedConfig = {
		title: `${publication.title || `${publication.author!.name}'s blog`}`,
		description: publication.about?.html,
		feed_url: `${baseUrl}/rss.xml${currentCursor ? `?after=${currentCursor}` : ''}`,
		site_url: baseUrl,
		image_url: publication.preferences!.logo,
		language: 'en',
		ttl: 60,
		custom_elements: [
			{
				'atom:link': {
					_attr: {
						rel: 'next',
						href: `${baseUrl}/rss.xml${nextCursor ? `?after=${nextCursor}` : ''}`,
					},
				},
			},
			{
				'atom:link': {
					_attr: {
						rel: 'first',
						href: `${baseUrl}/rss.xml`,
					},
				},
			},
		],
	};

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
};

exports.constructRSSFeedFromPosts = constructRSSFeedFromPosts;
export default constructRSSFeedFromPosts;
