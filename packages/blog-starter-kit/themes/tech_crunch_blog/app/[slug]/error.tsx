'use client'; // Error components must be Client Components

import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	const animationURL = 'https://lottie.host/f6ae6056-7a6f-4b94-9d68-f468f30eb225/1MqoTEf5DE.json';

	return (
		<div className="flex h-96 flex-col items-center justify-center gap-2">
			<Player autoplay loop src={animationURL} style={{ height: '300px', width: '300px' }} />
			<h2>Something went wrong!</h2>
			<Link href={'/'} className="text-base underline" onClick={() => reset()}>
				Go Home
			</Link>
		</div>
	);
}
