'use client';

import LatestArticle from '@/components/latestArticles';
import LoadMore from '@/components/loadMore';
import MainPost from '@/components/mainPost';
import { useStore } from '@/context';
import useGetBlogPosts, { BlogData } from '@/hooks/useGetBlogPosts';
import { useEffect, useState } from 'react';

const LandingPage = () => {
	let store = useStore();

	const { error, blogs, pageData, loading, publicationId, setNextPage } = useGetBlogPosts({
		limit: 2,
	});

	let [blogList, setBlogData] = useState<BlogData[]>([]);
	let [mainPost, setMainPost] = useState<BlogData | undefined>(undefined);

	useEffect(() => {
		store.updatePublicationId(publicationId);

		if (blogs.length > 0) {
			let data = [...blogList, ...blogs];
			let firstItem = data.shift();

			setMainPost(firstItem);
			setBlogData(data);
		}
	}, [blogs]);

	const nextPage = () => {
		if (pageData.pageInfo.endCursor) {
			setNextPage(pageData.pageInfo.endCursor);
		}
	};

	// let data = await searchBlog({
	// 	first: 3,
	// 	filter: {
	// 		query: 'kinde',
	// 		publicationId: '642049023fa6f95ced3dcf3a',
	// 	},
	// });
	// console.log(data);

	return (
		<>
			<MainPost data={mainPost} />
			<div className="pt-6">
				<LatestComponent />
				<LatestArticle data={blogList} />
				<LoadMore nextPage={nextPage} loading={loading} />
			</div>
		</>
	);
};

const LatestComponent = () => {
	return (
		<div className="w-full border-b-2 pb-2">
			<span className="text-lg font-medium">The latest</span>
		</div>
	);
};

export default LandingPage;
