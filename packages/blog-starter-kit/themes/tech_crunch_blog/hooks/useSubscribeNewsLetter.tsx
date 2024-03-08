'use client';

import { subscribeNewsletter } from '@/lib/mutation/subscribeNewsletter';
import { useEffect, useState } from 'react';

const useSubscribeNewsLetter = () => {
	const [subscriptionStatus, setSubscriptionStatus] = useState<'PENDING' | undefined>(undefined);
	const [loading, setLoading] = useState(false);
	const [args, setArgs] = useState({
		email: '',
		publicationId: '',
	});
	const [error, setError] = useState<unknown>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!args.email || !args.publicationId) {
					return;
				}

				setLoading(true);
				const data = await subscribeNewsletter(args.email, args.publicationId);

				setSubscriptionStatus(data?.subscribeToNewsletter.status);
			} catch (e: unknown) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [args]);

	return { subscriptionStatus, loading, error, setArgs };
};

export default useSubscribeNewsLetter;
