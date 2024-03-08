'use client'; // Error components must be Client Components

import ExceptionLottie from '@/components/lottie/exceptionLottie';
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
		console.error(error.message);
	}, [error]);

	return (
		<div className="flex h-96 flex-col items-center justify-center gap-2">
			<ExceptionLottie />
			<h2>Something went wrong!</h2>
			<Link href={'/'} className="text-base underline" onClick={() => reset()}>
				Go Home
			</Link>
		</div>
	);
}
