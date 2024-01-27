import BookOpenSVG from './icons/svgs/BookOpenSVG';

type Props = { readTimeInMinutes: number };

export const ReadTimeInMinutes = ({ readTimeInMinutes }: Props) => {
	return (
		<>
			<p className="flex flex-row items-center">
				<BookOpenSVG className="mr-2 h-5 w-5 fill-current opacity-75" />
				<span>{readTimeInMinutes} min read</span>
			</p>
		</>
	);
};
