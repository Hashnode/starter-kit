import { Post } from '@/generated/graphql';
import { getBlogPostById } from '@/lib/queries/getBlogPostById';
import { useEffect, useState } from 'react';

const useGetBlogById = () => {
	const [data, setData] = useState<Post | undefined>(undefined);
	const [postId, setPostId] = useState<string | null>('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!postId) {
					return;
				}
				setLoading(true);

				const data = await getBlogPostById(postId);

				setData(data);
			} catch (e: unknown) {
				setError(e as Error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [postId]);

	return { data, loading, error, setPostId };
};

export default useGetBlogById;
