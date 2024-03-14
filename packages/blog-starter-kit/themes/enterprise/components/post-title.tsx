import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

export const PostTitle = ({ children }: Props) => {
	return (
		<div className="w-full md:prose-xl dark:prose-invert prose-h1:text-center mx-auto pb-8 font-['Outfit'] font-bold border-b border-neutral-200">
		  <h1 className="text-3xl md:text-5xl">{children}</h1>
		</div>
	  );	  
};
