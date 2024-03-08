'use client';

import useContext from '@/context/index';
import { getPublicationId } from '@/lib/queries/getPublicationId';
import { useEffect } from 'react';

const ContextProvider = ({ children }: any) => {
	let context = useContext();
	let host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;

	useEffect(() => {
		let isMounted = true;

		async function data() {
			try {
				if (!context.publicationId) {
					const data = await getPublicationId(host);

					if (isMounted) {
						if (!data.id) {
							throw new Error('publicationId could not be fetched');
						}
						context.updatePublicationId(data.id);
					}
				}
			} catch (e) {
				let error = e as Error;
				console.error('Error fetching data:', error);
			}
		}

		data();

		return () => {
			isMounted = false;
		};
	}, [context.publicationId, host]);

	return <div>{children}</div>;
};

export default ContextProvider;
