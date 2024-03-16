import request from 'graphql-request';
import { useRef, useState } from 'react';
import {
	SubscribeToNewsletterDocument,
	SubscribeToNewsletterMutation,
	SubscribeToNewsletterMutationVariables,
	SubscribeToNewsletterPayload,
} from '../generated/graphql';
import { useAppContext } from './contexts/appContext';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

export const SubscribeForm = () => {
	const [status, setStatus] = useState<SubscribeToNewsletterPayload['status']>();
	const [requestInProgress, setRequestInProgress] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const { publication } = useAppContext();

	const subscribe = async () => {
		const email = inputRef.current?.value;
		if (!email) return;

		setRequestInProgress(true);

		try {
			const data = await request<
				SubscribeToNewsletterMutation,
				SubscribeToNewsletterMutationVariables
			>(GQL_ENDPOINT, SubscribeToNewsletterDocument, {
				input: { publicationId: publication.id, email },
			});
			setRequestInProgress(false);
			setStatus(data.subscribeToNewsletter.status);
		} catch (error) {
			const message = (error as any).response?.errors?.[0]?.message;
			if (message) {
				window.alert(message);
			}
			setRequestInProgress(false);
		}
	};
	return (
		<>
			{!status && (
				<div className="relative w-full bg-white dark:bg-neutral-950">
					<input
						ref={inputRef}
						type="email"
						placeholder="email@gmail.com"
						className="focus:outline-primary-500 dark:focus:outline-primary-500 outline-1 outline-neutral-200 left-3 top-3 w-full pl-3 py-6 font-['Outfit'] text-base text-black outline-none dark:bg-neutral-950 dark:text-neutral-50 rounded-none"
					/>
					<button
						disabled={requestInProgress}
						onClick={subscribe}
						className="bg-primary-600 dark:bg-primary-500 absolute right-0 top-0 lg:px-10 lg:py-6 px-3 py-6 font-['Outfit'] text-white disabled:cursor-not-allowed disabled:opacity-80"
					>
						Subscribe
					</button>
				</div>
			)}
			{status === 'PENDING' && (
				<div className="relative w-full p-2 text-center">
					<p className="font-bold text-green-600 dark:text-green-500">Almost there!</p>
					<p className="font-semibold text-slate-600 dark:text-neutral-300">
						Check your inbox for a confirmation email and click{' '}
						<strong>&quot;Confirm and Subscribe&quot;</strong> to complete your subscription. Thanks
						for joining us!
					</p>
				</div>
			)}
		</>
	);
};
