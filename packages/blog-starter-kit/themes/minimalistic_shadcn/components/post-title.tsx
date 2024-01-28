import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

export const PostTitle = ({ children }: Props) => {
	return (
		<div className="max-w-screen-lg px-5 mx-auto text-5xl prose text-center md:prose-xl dark:prose-invert prose-h1:text-center font-satoshiBold">
			<h1 className="">{children}</h1>
		</div>
	);
};
