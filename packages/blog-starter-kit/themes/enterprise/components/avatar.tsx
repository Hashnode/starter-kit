import { resizeImage } from '@starter-kit/utils/image';
import { DEFAULT_AVATAR } from '../utils/const';

type Props = {
	username: string;
	name: string;
	picture: string | null | undefined;
	size: number;
};

export const Avatar = ({ username, name, picture, size }: Props) => {
	return (
		<div className="flex items-center gap-2">
			<div className="text-base font-bold text-slate-600 dark:text-neutral-300">
			</div>
		</div>
	);
};
