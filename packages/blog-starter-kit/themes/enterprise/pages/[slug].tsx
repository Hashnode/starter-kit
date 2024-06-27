import { addArticleJsonLd } from '@starter-kit/utils/seo/addArticleJsonLd';
import { getAutogeneratedPostOG } from '@starter-kit/utils/social/og';
import request from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import CircularProgressBar from '../components/CircularProgressBar';
import Link from 'next/link';
import { Container } from '../components/container';
import { AppProvider } from '../components/contexts/appContext';
import { Footer } from '../components/footer';
import { Navbar } from "../components/navbar";
import { Layout } from '../components/layout';
import { MarkdownToHtml } from '../components/markdown-to-html';
import { PostHeader } from '../components/post-header';
import { PostTOC } from '../components/post-toc';
import {
	PageByPublicationDocument,
	PostFullFragment,
	PublicationFragment,
	SinglePostByPublicationDocument,
	SlugPostsByPublicationDocument,
	StaticPageFragment,
} from '../generated/graphql';
// @ts-ignore
import handleMathJax from '@starter-kit/utils/handle-math-jax';
import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { loadIframeResizer } from '@starter-kit/utils/renderer/services/embed';
import { useEffect, useState } from 'react';
// @ts-ignore
import { triggerCustomWidgetEmbed } from '@starter-kit/utils/trigger-custom-widget-embed';

const AboutAuthor = dynamic(() => import('../components/about-author'), { ssr: false });
const Subscribe = dynamic(() => import('../components/subscribe').then((mod) => mod.Subscribe));
const PostComments = dynamic(() =>
	import('../components/post-comments').then((mod) => mod.PostComments),
);

type PostProps = {
	type: 'post';
	post: PostFullFragment;
	publication: PublicationFragment;
};

type PageProps = {
	type: 'page';
	page: StaticPageFragment;
	publication: PublicationFragment;
};

type Props = PostProps | PageProps;

const Post = ({ publication, post }: PostProps) => {
	const highlightJsMonokaiTheme =
		'.hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}';

	const tagsList = (post.tags ?? []).map((tag) => (
		<li key={tag.id}>
			<Link
				href={`/tag/${tag.slug}`}
				className="block rounded-full border px-2 py-1 font-medium hover:bg-slate-50 dark:border-neutral-800 dark:hover:bg-neutral-800 md:px-4"
			>
				#{tag.slug}
			</Link>
		</li>
	));
	const [, setMobMount] = useState(false);
	const [canLoadEmbeds, setCanLoadEmbeds] = useState(false);
	useEmbeds({ enabled: canLoadEmbeds });
	if (post.hasLatexInPost) {
		setTimeout(() => {
			handleMathJax(true);
		}, 500);
	}

	useEffect(() => {
		if (screen.width <= 425) {
			setMobMount(true);
		}

		if (!post) {
			return;
		}

		// TODO:
		// More of an alert, did this below to wrap async funcs inside useEffect
		(async () => {
			await loadIframeResizer();
			triggerCustomWidgetEmbed(post.publication?.id.toString());
			setCanLoadEmbeds(true);
		})();
	}, []);

	const postTitle = post.seo?.title || post.title;
	const postDescription = post.seo?.description || post.subtitle || post.brief;
	const postImage = post.ogMetaData?.image || post.coverImage?.url || getAutogeneratedPostOG(post, publication);

	return (
		<>
			<Head>
				<title>{`${postTitle} | Temizmama Blog`}</title>
				<link rel="canonical" href={post.url} />
				<meta name="theme-color" content="rgba(203, 105, 0, 0.22)" />

				{/* Open Graph Meta Tags */}
				<meta property="og:title" content={`${postTitle} | Temizmama Blog`} />
				<meta property="og:site_name" content="Temizmama Blog" />
				<meta property="og:locale" content="tr_TR" />
				<meta property="og:url" content={post.url} />
				<meta property="og:type" content="article" />
				<meta property="og:image" content={postImage} />
				<meta property="og:image:alt" content={`${postTitle} görseli`} />
				<meta property="og:description" content={postDescription} />

				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@temizmamacom" />
				<meta name="twitter:title" content={`${postTitle} | Temizmama Blog`} />
				<meta name="twitter:description" content={postDescription} />
				<meta name="twitter:image" content={postImage} />
				<meta name="twitter:image:alt" content={`${postTitle} görseli`} />

				{/* Genel Meta Etiketleri */}
				<meta name="description" content={postDescription} />
				<meta name="keywords" content={post.seo?.keywords || `temizmama, blog, tazemama, kedi, köpek, mama ${post.tags?.join(', ')}`} />
				<meta name="author" content={post.author?.name || "Temizmama Blog"} />

				{/* Ek Meta Etiketleri */}
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="format-detection" content="telephone=no" />

				{/* Yapısal Veri İşaretlemesi */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(addArticleJsonLd(publication, post)),
					}}
				/>
				<style dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}></style>
			</Head>
			
			<PostHeader
				title={post.title}
				coverImage={post.coverImage?.url}
			/>
			{post.features.tableOfContents.isEnabled && <PostTOC />}
			<MarkdownToHtml contentMarkdown={post.content.markdown} />
		</>
	);
};

const Page = ({ page }: PageProps) => {
	const title = page.title;
	return (
		<>
			<Head>
				<title>{`${title} - Temizmama Blog`}</title>
			</Head>
			<MarkdownToHtml contentMarkdown={page.content.markdown} />
		</>
	);
};

export default function PostOrPage(props: Props) {
	const maybePost = props.type === 'post' ? props.post : null;
	const maybePage = props.type === 'page' ? props.page : null;
	const publication = props.publication;

	return (
		<AppProvider publication={publication} post={maybePost} page={maybePage}>
			<Layout>
				<Navbar />
				<Container className="pt-101">
					<article className="border-b-1-1/2 flex flex-col items-start gap-10 pb-10">
						{props.type === 'post' && <Post {...props} />}
						{props.type === 'page' && <Page {...props} />}
					</article>
				</Container>
				<CircularProgressBar />
				<Footer />
			</Layout>
		</AppProvider>
	);
}

type Params = {
	slug: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	if (!params) {
		throw new Error('No params');
	}

	const endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
	const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
	const slug = params.slug;

	const postData = await request(endpoint, SinglePostByPublicationDocument, { host, slug });

	if (postData.publication?.post) {
		return {
			props: {
				type: 'post',
				post: postData.publication.post,
				publication: postData.publication,
			},
			revalidate: 1,
		};
	}

	const pageData = await request(endpoint, PageByPublicationDocument, { host, slug });

	if (pageData.publication?.staticPage) {
		return {
			props: {
				type: 'page',
				page: pageData.publication.staticPage,
				publication: pageData.publication,
			},
			revalidate: 1,
		};
	}

	return {
		notFound: true,
		revalidate: 1,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await request(
		process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
		SlugPostsByPublicationDocument,
		{
			first: 10,
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
		},
	);

	const postSlugs = (data.publication?.posts.edges ?? []).map((edge) => edge.node.slug);

	return {
		paths: postSlugs.map((slug) => {
			return {
				params: {
					slug: slug,
				},
			};
		}),
		fallback: 'blocking',
	};
};
