'use client';

import { PageInfo } from '@/generated/graphql';
import { getBlogPosts } from '@/lib/queries/getBlogPosts';
import { useEffect, useState } from 'react';

export interface BlogData {
	author: {
		name: string;
		profilePicture: string;
	};
	id: string;
	title: string;
	subtitle: string | null;
	brief: string;
	slug: string;
	seo: {
		title: string;
		description: string;
	};
	coverImage: {
		url: string;
	};
	content: {
		markdown: string;
		text: string;
		html: string;
	};
	tags: {
		name: string;
		id: string;
	}[];
	publishedAt: string;
	readTimeInMinutes: number;
}

export type PublicationData = {
	totalDocuments: number;
	pageInfo: PageInfo;
};

const useGetBlogPosts = ({ limit }: { limit: number }) => {
	const [pageData, setPageData] = useState<PublicationData>({
		totalDocuments: 0,
		pageInfo: {
			hasNextPage: false,
			endCursor: '',
		},
	});
	const [blogs, setBlog] = useState<BlogData[]>([]);
	const [loading, setLoading] = useState(false);
	const [nextPage, setNextPage] = useState<string>('');
	const [publicationId, setPublicationId] = useState<string>('');
	const [error, setError] = useState<unknown>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await getBlogPosts({ limit, nextPage });

				let { totalDocuments, pageInfo, edges } = response.publication.posts;

				setPublicationId(response.publication.id);

				setPageData((...prev) => {
					return {
						...prev,
						totalDocuments: totalDocuments,
						pageInfo: {
							hasNextPage: pageInfo.hasNextPage,
							endCursor: pageInfo.endCursor,
						},
					};
				});
				setBlog(edges.map((i) => i.node) as unknown as BlogData[]);
			} catch (e: unknown) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [nextPage, limit]);

	return { pageData, blogs, loading, error, publicationId, setNextPage };
};

export default useGetBlogPosts;
