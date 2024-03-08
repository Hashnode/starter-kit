import Link from 'next/link';
import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

/* eslint-disable no-nested-ternary */
import { getCommonBtnStyles } from './common-header-icon-btn';
import HeaderBlogSearch from './header-blog-search';
import HeaderLeftSidebar from './header-left-sidebar';
import HeaderTooltip from './header-tooltip';
import { ChevronLeftSVG } from './icons/svgs/';
import PublicationSocialLinks from './publication-social-links';
import useStickyNavScroll from './use-sticky-nav-scroll';

import {
	Preferences,
	PublicationNavbarItem,
	RequiredPublicationFieldsFragment,
	User,
} from '../generated/graphql';
import { Button } from './custom-button';
import PublicationLogo from './publication-logo';

type Props = {
	publication: Pick<
		RequiredPublicationFieldsFragment,
		'id' | 'title' | 'url' | 'links' | 'features' | 'isTeam'
	> & {
		author: Pick<User, 'id' | 'username' | 'name' | 'profilePicture'>;
	} & {
		preferences: Omit<Preferences, 'navbarItems'> & {
			navbarItems: Array<Omit<PublicationNavbarItem, 'series' | 'page'>>;
		};
	};
};

const PostPageNavbar = forwardRef<HTMLElement, Props>((props, ref) => {
	const { publication } = props;

	useStickyNavScroll({ elRef: ref });

	const commonIconBtnStyles = getCommonBtnStyles();

	return (
		<div className="container mx-auto px-2 md:px-4 md:py-1 2xl:px-10">
			<div className="relative z-40 flex flex-row items-center justify-between pb-2 pt-8 md:py-4">
				<div
					className={twJoin(
						'mb-2 flex flex-row items-center md:mb-0','dark:text-white',
					)}
				>
					<HeaderTooltip
						tooltipClassName="blog-home-tooltip"
						tooltipText="Home"
					>
						<Link
							href="/"
							aria-label="Back to blog home"
							className={twJoin('blog-back-to-home-button', commonIconBtnStyles, 'mr-2 p-3')}
						>
							<ChevronLeftSVG className="h-4 w-4 fill-current pr-1" />
						</Link>
					</HeaderTooltip>

					{/* Navigation for mobile view */}
					<div className="mr-2">
						<HeaderLeftSidebar publication={publication} />
					</div>

					<div className="hidden md:block">
						<PublicationLogo publication={publication} size="sm" withProfileImage isPostPage />
					</div>
				</div>

				<div
					className={twJoin(
						'flex flex-row items-center','dark:text-white',
					)}
				>
					<HeaderBlogSearch publication={publication} />
					<Button as="a" href="#" type="primary" label="Sign up" />
				</div>
			</div>

			{/* Logo for mobile view */}
			<div className="mx-auto my-5 flex w-2/3 flex-row items-center justify-center md:hidden">
				<PublicationLogo publication={publication} size="xl" isPostPage />
			</div>

			<div className="blog-sub-header mb-4 md:hidden" data-testid="blog-sub-header">
				{/* Social Links for mobile view */}
				<div className="mt-6">
					<PublicationSocialLinks links={publication.links} />
				</div>
			</div>
		</div>
	);
});

PostPageNavbar.displayName = 'PostPageNavbar';

export default PostPageNavbar;
