import request from 'graphql-request';
import { useEffect, useRef, useState } from 'react';
import {
	SubscribeToNewsletterDocument,
	SubscribeToNewsletterMutation,
	SubscribeToNewsletterMutationVariables,
	SubscribeToNewsletterPayload,
} from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import GreenTickSVG from './icons/svgs/GreenTickSVG';

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

	useEffect(() =>{
		if(status === 'PENDING'){
			setTimeout(() => {
				setStatus(null)
			} , 4000)
		}
	} , [status])
	return (
		<>
			{!status && (
				<div className="relative w-[80%] fade-in  outline outline-1 dark:outline-black  mx-auto rounded-md flex items-center   bg-white dark:bg-gray-700 overflow-hidden">
					<input
						ref={inputRef}
						type="email"
						placeholder="name@email.com"
						className=" w-full py-2 px-4 text-base text-neutral-900 outline-none dark:placeholder:text-gray-400 dark:text-black focus: placeholder:text-gray-400 md:outline-none outline outline-1 outline-black "
					/>
					<button
						disabled={requestInProgress}
						onClick={subscribe}
						className="bg-black h-full   rounded-tr-md rounded-br-md px-3 py-2 text-white disabled:cursor-not-allowed disabled:opacity-80"
					>
						Subscribe
					</button>
				</div>
			)}
			{status === 'PENDING' && (
				<div className="relative max-w-full flex flex-col fade-in items-center gap-2 w-[80%] p-2 text-center">
					<span className=' text-green-700'><GreenTickSVG/></span>
					<p className="font-bold text-xl text-green-700 dark:text-white">Almost there!</p>
					<p className="font-medium text-green-700 dark:text-white">
						Check your inbox for a confirmation email and click{' '}
						<strong>&quot;Confirm and Subscribe&quot;</strong> to complete your subscription. Thanks
						for joining us!
					</p>
					
				</div>
			)}
		</>
	);
};
