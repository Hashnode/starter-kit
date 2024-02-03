import { clsx, type ClassValue } from 'clsx';
import TimeAgo from 'javascript-time-ago';
import { twMerge } from 'tailwind-merge';

// English.
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const relativeTime = (time: string) => {
	return timeAgo.format(new Date(time));
};
