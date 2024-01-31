import { useStore } from '@/context';
import useSubscribeNewsLetter from '@/hooks/useSubscribeNewsLetter';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const NewsLetter = () => {
	const [email, setEmail] = useState('');
	let { error, loading, setArgs, subscriptionStatus } = useSubscribeNewsLetter();
	let store = useStore();

	return (
		<div className="mt-5 grid h-48 items-center gap-5 bg-green-50 p-4 sm:grid-cols-6">
			<h3 className="font-oswald text-wrap col-span-2 text-2xl font-semibold leading-6 tracking-wider">
				Sign up for Newsletters
			</h3>

			<div className="col-span-4 flex w-full max-w-md items-center gap-2 border-r-2">
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
								publicationId: store.publicationId,
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
	);
};

export default NewsLetter;
