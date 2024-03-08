'use client';
import { FC } from 'react';
import { BounceLoader } from 'react-spinners';

interface LoaderProps {
	description: string;
}

export const Loader: FC<LoaderProps> = ({ description }) => {
	return (
		<div className="w-fill ml-5 flex h-screen flex-col items-center justify-center gap-y-4 overflow-hidden p-3 md:ml-5">
			<div className="relative h-10 w-10">
				<BounceLoader color="#22c55e" size={40} />
			</div>
			<p className="text-muted-foreground text-sm">{description}</p>
		</div>
	);
};
