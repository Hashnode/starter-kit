import { format, parseISO } from 'date-fns';

type Props = {
	dateString: string;
};

export const DateFormatter = ({ dateString }: Props) => {
	if (!dateString) return <></>;
	const date = parseISO(dateString);

	return (
		<>
			{/* <span className="mx-3 hidden font-bold text-slate-500 md:block">&middot;</span> */}
			<time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
		</>
	);
};
