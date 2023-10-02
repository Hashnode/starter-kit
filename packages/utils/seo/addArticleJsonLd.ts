import type PostType from "@starter-kit/interfaces/post";
import type PublicationType from "@starter-kit/interfaces/publication";

export const addArticleJsonLd = (publication: PublicationType, post: PostType) => {
    const tags = post.tags?.map((tag) => tag.name);
    const schema = {
        "@context": "https://schema.org/",
        "@type": "Blog",
        "@id": publication.url,
        mainEntityOfPage: publication.url,
        name: publication.title,
        description: publication.about?.markdown,
        publisher: {
            "@type": publication.isTeam ? "Organization" : "Person",
            "@id": publication.url,
            name: publication.title,
            image: {
                "@type": "ImageObject",
                url: publication.preferences?.logo || publication.preferences?.darkMode?.logo,
            },
        },
        blogPost: [
            {
                "@type": "BlogPosting",
                "@id": post.url,
                mainEntityOfPage: post.url,
                headline: post.title,
                name: post.title,
                description: post.brief,
                datePublished: post.publishedAt,
                dateModified: post.updatedAt,
                author: {
                    "@type": "Person",
                    "@id": `https://hashnode.com/@${post.author?.username}`,
                    name: post.author?.name,
                    url: `https://hashnode.com/@${post.author?.username}`,
                },
                image: {
                    "@type": "ImageObject",
                    url: post.coverImage?.url,
                },
                url: post.url,
                keywords: tags,
            },
        ],
    };
    return schema;
}
export default addArticleJsonLd;