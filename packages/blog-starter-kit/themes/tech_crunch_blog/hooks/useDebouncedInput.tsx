'use client';

import useContext from '@/context/index';
import searchBlog from '@/lib/queries/searchBlog';
import debounce from 'lodash/debounce';
import { useCallback, useMemo, useState } from 'react';

/** This is more suitable for use for the cmd K search */
const useDebouncedInput = (initialValue: string, delay: number = 500) => {
	const context = useContext();
	const [value, setValue] = useState(initialValue);
	const [isMounted, setIsMounted] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [blogs, setBlogs] = useState<{ title: string; url: string }[]>([]);

	const sendBackendRequest = useCallback((inputValue: string) => {
		console.log('Changed value:', inputValue);
		console.log('pubId:', context.publicationId);

		const handleSearch = async () => {
			try {
				if (!isMounted || !inputValue) {
					return;
				}

				let data = await searchBlog({
					first: 5,
					filter: {
						query: inputValue,
						publicationId: context.publicationId!,
					},
				});

				if (!data) {
					throw new Error('Could not fetch search data');
				}

				let blogs = data.edges.map((i) => {
					return {
						title: `${i.node.slug}`,
						url: `/${i.node.slug}?id=${i.node.id}`,
					};
				});

				setBlogs(blogs);
			} catch (e) {
				let error = e as Error;
				setError(error);
			}
		};

		handleSearch();
	}, []);

	const debouncedSendRequest = useMemo(() => {
		return debounce(sendBackendRequest, delay);
	}, [sendBackendRequest, delay]);

	const onChange = (value: string) => {
		const inputValue = value;
		setValue(inputValue);
		debouncedSendRequest(inputValue);
	};

	return { value, error, onChange, blogs, setIsMounted } as const;
};

export default useDebouncedInput;
