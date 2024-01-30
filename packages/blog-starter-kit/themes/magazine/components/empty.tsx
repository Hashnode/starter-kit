'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

interface EmptyProps {
	label: string;
}

export const Empty = ({ label }: EmptyProps) => {
	return (
		<div className="flex flex-col items-center justify-center h-full p-3 w-fill md:ml-5">
			<div className="relative h-72 w-72">
				<Image src="/images/empty.svg" fill alt="Empty" />
			</div>
			<p className="mt-10 text-sm text-center text-muted-foreground">{label}</p>
			<Link href="/">
				<Button variant="secondary" className="mt-10">
					Home
				</Button>
			</Link>
		</div>
	);
};
