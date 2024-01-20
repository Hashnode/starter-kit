import request from 'graphql-request';
import ErrorPage from 'next/error';
import Head from 'next/head';
import moment from 'dayjs';

import { Container } from '../../components/container';
import { AppProvider } from '../../components/contexts/appContext';
import PostPageNavbar from '../../components/post-page-navbar';
import { Layout } from '../../components/layout';

import {
	DraftByIdDocument,
	DraftByIdQuery,
	DraftByIdQueryVariables,
	DraftFragment,
	Post,
	PublicationByHostDocument,
	PublicationByHostQuery,
	PublicationByHostQueryVariables,
	PublicationFragment,
} from '../../generated/graphql';
import PublicationFooter from '../../components/publication-footer';
import { useRef } from 'react';
import { twJoin } from 'tailwind-merge';
import CustomImage from '../../components/custom-image';
import { getBlurHash, imageReplacer, resizeImage } from '../../utils/image';
import { blurImageDimensions } from '../../utils/const/images';
import ProfileImage from '../../components/profile-image';
import { BookOpenSVG } from '../../components/icons/svgs';
import getReadTime from '../../utils/getReadTime';
import Autolinker from "../../utils/autolinker";
import DraftFloatingMenu from '../../components/draft-floating-menu';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import TocRenderDesign from '../../components/toc-render-design';

type Props = {
	draft: DraftFragment; // TODO: to be fixed
	publication: PublicationFragment;
};

export default function Post({ publication, draft }: Props) {
	const headerRef = useRef<HTMLElement | null>(null);
	if (!draft) {
		return <ErrorPage statusCode={404} />;
	}
	const title = `${draft.title} - Hashnode`;
	const highlightJsMonokaiTheme =
		'.hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}';
	const navPositionStyles = 'relative transform-none md:sticky md:top-0 md:left-0 md:backdrop-blur-lg';
	const readTime = draft && getReadTime(draft.content?.markdown);
	const content = markdownToHtml(draft.content?.markdown || '');
	const postContent = Autolinker.link(content, {
		twitter: true,
		truncate: 45,
		className: 'autolinkedURL',
		replaceFn(_autolinker: any, match: any) {
		  // eslint-disable-next-line default-case
		  switch (match.getType()) {
			case 'twitter':
			  // eslint-disable-next-line no-unreachable,no-case-declarations
			  const username = match.getTwitterHandle();
			  return (
				// eslint-disable-next-line no-unreachable
				`<a href="https://hashnode.com/@${username}" class="user-mention" target="_blank" rel="noopener">@${username}</a>`
			  );
		  }
		},
	});

	const allTags = draft.tags;
	const toc = draft.features?.tableOfContents?.isEnabled ? draft.features?.tableOfContents?.items.flat() : [];
	return (
		<AppProvider publication={publication}>
			<Layout>
				<header
					ref={headerRef}
					className={twJoin(
						'blog-header',
						'z-50 w-full border-b',
						navPositionStyles,
						'border-black/10 bg-white bg-opacity-70 dark:border-white/10 dark:bg-slate-900 dark:bg-opacity-70',
					)}
					>
					<PostPageNavbar publication={publication} ref={headerRef} />
				</header>
				<Container>
					<Head>
						<title>{title}</title>
						<link rel="canonical" href={draft.canonicalUrl || ''} />
						<style dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}></style>
					</Head>
					<main className="blog-post-detail-card pb-24">
						<article className="blog-article-page">
							<div className="container relative mx-auto grid grid-cols-8">
								<div className="col-span-full lg:col-span-6 lg:col-start-2">
									{/* Top cover. StickCovertobottom use-case is not built yet */}
									{draft.coverImage?.url && (
									<div className="relative">
										<CustomImage
										className="mb-0 block w-full"
										placeholder="blur"
										originalSrc={draft.coverImage.url}
										src={resizeImage(draft.coverImage.url, {
											w: 1600,
											h: 840,
											...(false ? { c: 'thumb' } : { fill: 'blur' }),
										})}
										blurDataURL={getBlurHash(
											resizeImage(draft.coverImage.url, {
											...blurImageDimensions,
											...(false ? { c: 'thumb' } : { fill: 'blur' }),
											}),
										)}
										width={1600}
										height={840}
										alt={draft.title || ''}
										layout="responsive"
										priority
										/>
									</div>
									)}

									{/* Article title */}
									<div
									className={twJoin(
										`mt-6 break-words px-4 text-center font-heading text-3xl font-extrabold text-slate-900 dark:text-white md:mt-10 md:px-5 md:text-4xl lg:px-8 xl:px-20 xl:text-5xl`,
										draft.subtitle ? `mb-5` : `mb-8 md:mb-14`,
									)}
									>
									<h1 className="leading-snug" data-query="post-title">
										{draft.title}
									</h1>
									</div>

									 {/* Article subtitle */}
									 {draft.subtitle && (
									<div className="mb-8 px-4 text-center font-heading md:mb-14 md:px-5 lg:px-8 xl:px-20">
										<h2 className="text-2xl leading-snug text-slate-700 dark:text-slate-400 md:text-3xl xl:text-3xl">
										{draft.subtitle}
										</h2>
									</div>
									)}

									<div className="relative z-20 mb-8 flex flex-row flex-wrap items-center justify-center px-4 md:-mt-7 md:mb-14 md:text-lg">
										<div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
											<div className="mr-2 h-10 w-10 overflow-hidden rounded-full bg-slate-200 dark:bg-white/20 md:mr-3 md:h-12 md:w-12">
											<ProfileImage user={draft.author} width="200" height="200" hoverDisabled={true} />
											</div>
											<a
											href={`https://hashnode.com/@${draft.author.username}`}
											className="font-medium text-slate-900 dark:text-white"
											>
											<span>{draft.author.name}</span>
											</a>
										</div>
										<div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
											<span className="mx-3 hidden font-bold text-slate-500 md:block">&middot;</span>
											<a
											className="tooltip-handle text-slate-700 dark:text-slate-400"
											data-title={`${moment(draft.updatedAt).format('MMM D, YYYY HH:mm')}`}
											>
											<span>{moment(draft.updatedAt).format('MMM D, YYYY')}</span>
											</a>
											<span className="mx-3 block font-bold text-slate-500">&middot;</span>
											{publication.features?.readTime?.isEnabled && (
											<p className="flex flex-row items-center text-slate-700 dark:text-slate-400">
												<BookOpenSVG className="mr-2 h-5 w-5 fill-current opacity-75" />
												<span>{readTime} min read</span>
											</p>
											)}
										</div>
									</div>
								</div>
							</div>
							<div className="blog-content-wrapper article-main-wrapper container relative z-30 mx-auto grid grid-flow-row grid-cols-8 xl:gap-6 2xl:grid-cols-10">
								<section className="blog-content-main relative z-20 col-span-8 mb-10 px-4 md:z-10 lg:col-span-6 lg:col-start-2 lg:px-0 xl:col-span-6 xl:col-start-2 2xl:col-span-6 2xl:col-start-3">
									<div className="relative">
									{draft.features.tableOfContents.isEnabled && <TocRenderDesign list={toc} />}
									{postContent && (
										<div id="post-content-parent" className="relative mb-10 pb-14">
											<div
												id="post-content-wrapper"
												className="prose prose-lg mx-auto mb-10 min-h-30 break-words dark:prose-dark xl:prose-xl"
												// eslint-disable-next-line react/no-danger
												dangerouslySetInnerHTML={{
												__html: imageReplacer(postContent),
												}}
											/>

											<DraftFloatingMenu
												draft={draft}
												list={toc}
											/>
										</div>
									)}
									{allTags.length > 0 && (
										<div className="mb-5 flex w-full flex-row flex-wrap justify-center md:mb-0">
										{allTags.map((tag: any) => (
											<a
											className="mb-2 mr-3 rounded-lg border bg-slate-100 px-2 py-1 text-base font-medium text-slate-700 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
											key={tag._id?.toString()}
											href={`/tag/${tag.slug}`}
											>
											<span>{tag.name}</span>
											</a>
										))}
										</div>
									)}
									</div>
								</section>
							</div>
						</article>
					</main>
				</Container>
				<PublicationFooter
					authorName={publication.author.name}
					title={publication.title}
					imprint={publication.imprint}
					disableFooterBranding={publication.preferences.disableFooterBranding}
					isTeam={publication.isTeam}
					logo={publication.preferences.logo}
					darkMode={publication.preferences.darkMode}
				/>
			</Layout>
		</AppProvider>
	);
}

type Params = {
	params: {
		id: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const [dataDraft, dataPublication] = await Promise.all([
		request<DraftByIdQuery, DraftByIdQueryVariables>(
			process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
			DraftByIdDocument,
			{
				id: params.id,
			},
		),
		request<PublicationByHostQuery, PublicationByHostQueryVariables>(
			process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
			PublicationByHostDocument,
			{
				host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
			},
		),
	]);
	
	const publication = dataPublication.publication;
	const draft = dataDraft.draft;
	return {
		props: {
			draft,
			publication,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	};
}
