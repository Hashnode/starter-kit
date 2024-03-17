import Link from 'next/link';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type SocialLink = {
	href: string;
	ariaLabel: string;
	icon: ElementType;
	className?: string;
	openInNewTab?: boolean;
};

export function SocialLink(props: SocialLink) {
	const { href, ariaLabel, icon: Icon, className, openInNewTab = true } = props;
	const iconStyles = twMerge(`
        transition
        group-hover:fill-zinc-600
        dark:fill-zinc-400
        dark:group-hover:fill-zinc-300
        ${className ?? ''}
    `);

	return (
		<Link href={href} aria-label={ariaLabel} target={openInNewTab ? '_blank' : '_self'}>
			<Icon className={iconStyles} />
		</Link>
	);
}
