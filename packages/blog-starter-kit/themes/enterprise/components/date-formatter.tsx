import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

type Props = {
	dateString: string;
};

export const DateFormatter = ({ dateString }: Props) => {
	if (!dateString) return <></>;
	const date = parseISO(dateString);

	return (
		<>
			<time dateTime={dateString}>{format(date, 'd LLLL yyyy', { locale: tr })}</time>
		</>
	);
};
