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
			<a
				href={`https://hashnode.com/@${username}`}
				className={
					size
						? `w-${size} h-${size} block overflow-hidden rounded-full`
						: 'block h-8 w-8 overflow-hidden rounded-full'
				}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					className="block h-full w-full"
					src={resizeImage(picture, { w: 160, h: 160, c: 'face' }, DEFAULT_AVATAR)}
					alt={name}
				/>
			</a>
			<div className="text-base font-bold text-slate-600 dark:text-neutral-300">
				<a href={`https://hashnode.com/@${username}`} target="_blank" rel="noopener noreferrer">
					{name}
				</a>
			</div>
		</div>
	);
};
