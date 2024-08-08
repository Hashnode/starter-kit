import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

export const PostTitle = ({ children }: Props) => {
	return (
		<div className="prose md:prose-xl dark:prose-invert prose-h1:text-left mb-4 max-w-screen-lg">
			<h1 className="">{children}</h1>
		</div>
	);
};
