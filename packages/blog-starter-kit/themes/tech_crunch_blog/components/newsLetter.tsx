'use client';

import useContext from '@/context/index';
import useSubscribeNewsLetter from '@/hooks/useSubscribeNewsLetter';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const NewsLetter = () => {
	let context = useContext();
	const [email, setEmail] = useState('');
	let { error, loading, setArgs, subscriptionStatus } = useSubscribeNewsLetter();

	return (
		<>
			{subscriptionStatus === 'PENDING' ? (
				<SubcriptionMessage />
			) : (
				<div className="mt-5 flex h-48 w-[360px] flex-col items-center justify-center gap-5 rounded-md bg-green-50 p-4 md:w-full">
					<h3 className="font-oswald text-wrap col-span-2 text-2xl font-semibold leading-6 tracking-wider">
						Sign up for Newsletters
					</h3>

					<div className="flex max-w-md items-center gap-2 border-r-2 ">
						<Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
						<Button
							type="submit"
							className="bg-gray-300"
							disabled={subscriptionStatus === 'PENDING' ? true : false}
							onClick={() => {
								setArgs((...prev) => {
									return {
										...prev,
										email: email,
										publicationId: context.publicationId!,
									};
								});
							}}
						>
							{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
							{loading && subscriptionStatus !== 'PENDING'
								? 'Hold on'
								: subscriptionStatus === 'PENDING'
								? 'Subscribed'
								: 'Subscribe'}
						</Button>
					</div>
				</div>
			)}
		</>
	);
};

const SubcriptionMessage = () => {
	return (
		<div className="col-span-6 mt-5 flex h-48 flex-col items-center justify-center gap-2 bg-green-50 p-4 ">
			<span className="font-montserrat font-bold text-blue-500">Almost there!</span>
			<span className="w-full text-center">
				Check your inbox for a confirmation email and click{' '}
				<span className="font-bold">{'Confirm and Subscribe '}</span>
				to complete your subscription. Thanks for joining us!
			</span>
		</div>
	);
};

export default NewsLetter;
