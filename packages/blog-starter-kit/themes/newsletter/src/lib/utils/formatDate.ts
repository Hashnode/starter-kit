import { format } from 'date-fns';

export function formatDate(date: string) {
	return format(new Date(date), 'LLLL d, yyyy');
}
