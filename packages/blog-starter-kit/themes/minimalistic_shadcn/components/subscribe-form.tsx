import request from 'graphql-request';
import { useRef, useState } from 'react';
import {
	SubscribeToNewsletterDocument,
	SubscribeToNewsletterMutation,
	SubscribeToNewsletterMutationVariables,
	SubscribeToNewsletterPayload,
} from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter } from './ui/card';
import { Input } from './ui/input';

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
				<Card className="mt-3 border p-3">
					<CardDescription className="ml-5">
						Stay upto date by subscribing to my newsletter
					</CardDescription>
					<CardContent className="mt-3">
						<Input ref={inputRef} type="email" placeholder="john@doe.com" />
					</CardContent>
					<CardFooter className="pb-0">
						<Button onClick={subscribe} variant="ghost">
							Subscribe
						</Button>
					</CardFooter>
				</Card>
			)}
			{status === 'PENDING' && (
				<div className="relative w-full p-2 text-center">
					<p className="font-bold text-green-600 dark:text-green-500">Almost there!</p>
					<p className="font-medium text-slate-600 dark:text-neutral-300">
						Check your inbox for a confirmation email and click{' '}
						<strong>&quot;Confirm and Subscribe&quot;</strong> to complete your subscription. Thanks
						for joining us!
					</p>
				</div>
			)}
		</>
	);
};
