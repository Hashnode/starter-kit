import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

export const PostTitle = ({ children }: Props) => {
	return (
		<div className="prose md:prose-xl dark:prose-invert prose-h1:text-center font-satoshiBold mx-auto max-w-screen-lg px-5 text-center text-5xl">
			<h1 className="">{children}</h1>
		</div>
	);
};
