'use client';

import LatestArticle from '@/components/latestArticles';
import LoadMore from '@/components/loadMore';
import useContext from '@/context/index';
import useGetBlogPosts, { BlogData } from '@/hooks/useGetBlogPosts';
import { useEffect, useState } from 'react';

const LandingPage = () => {
	let context = useContext();

	const { error, blogs, pageData, loading, setNextPage } = useGetBlogPosts({
		limit: 2,
	});

	let [blogList, setBlogData] = useState<BlogData[]>([]);

	useEffect(() => {
		// context.updatePublicationId(publicationId);

		if (blogs.length > 0) {
			setBlogData((...prev) => [...prev[0], ...blogs]);
		}
	}, [blogs]);

	const nextPage = () => {
		if (pageData.pageInfo.endCursor) {
			setNextPage(pageData.pageInfo.endCursor);
		}
	};

	return (
		<>
			<div className="flex flex-col pt-6">
				<div className="mb-4 text-lg">
					<span>Latest Posts</span>
				</div>
				<LatestArticle data={blogList} />
				<LoadMore nextPage={nextPage} loading={loading} />
			</div>
		</>
	);
};

export default LandingPage;
