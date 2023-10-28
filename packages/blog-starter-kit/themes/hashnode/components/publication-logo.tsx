import CustomImage from './custom-image';

import { resizeImage, getBlurHash } from '../utils/image';
import { Preferences, User, Maybe, PublicationFragment } from '../generated/graphql';
import { twJoin } from 'tailwind-merge';
import { generateBlogTitleWithoutDisplayTitle } from '../utils/commonUtils';

type PublicationLogoProps = {
  publication: Pick<PublicationFragment, 'title' | 'isTeam'> & {
    author: Pick<User, 'username' | 'name' | 'profilePicture'>;
  } & {
    preferences: Pick<Preferences, 'logo' | 'darkMode'>;
  };
  size?: 'xs' | 'sm' | 'lg' | 'xl';
  withProfileImage?: boolean;
  isPostPage?: boolean | null;
};

const textStyles = {
  xs: 'text-base text-left',
  sm: 'text-lg md:text-xl text-left',
  lg: 'text-xl md:text-2xl text-left',
  xl: 'text-2xl text-center',
} as const;

const logoSizes = {
  xs: 'w-44',
  sm: 'w-44',
  lg: 'w-64',
  xl: 'w-64',
} as const;

const CustomLogo = ({
  publication,
  logoSrc,
  size = 'lg',
  isPostPage,
  isUserThemeDark,
}: {
  publication: Pick<PublicationFragment, 'title' | 'headerColor'> & {
    author: Pick<User, 'name'>;
  };
  isUserThemeDark?: boolean;
  logoSrc: Maybe<string> | undefined;
  size?: 'xs' | 'sm' | 'lg' | 'xl';
  isPostPage?: boolean | null;
}) => {
  const blogTitle = generateBlogTitleWithoutDisplayTitle(publication);

  return (
    <h1 className="blog-main-logo">
      <a
        className={twJoin(
          'blog-logo focus-ring-base flex flex-row items-center',
          isUserThemeDark
            ? 'focus-ring-colors-dark-header'
            : publication.headerColor
            ? 'focus-ring-colors-light-header'
            : 'focus-ring-colors-base',
          logoSizes[size],
        )}
        aria-label={`${blogTitle} home page`}
        href={`/${isPostPage ? '?source=top_nav_blog_home' : ''}`}
      >
        <CustomImage
          priority
          className="block w-full"
          src={resizeImage(logoSrc, { w: 1000, h: 250, c: 'thumb' })}
          originalSrc={logoSrc || ''}
          width={1000}
          height={250}
          alt={blogTitle}
        />
      </a>
    </h1>
  );
};

const DefaultLogo = ({
  publication,
  isUserThemeDark,
  size = 'lg',
  withProfileImage = false,
  isPostPage,
}: {
  publication: Pick<PublicationFragment, 'title' | 'isTeam' | 'headerColor'> & {
    author: Pick<User, 'username' | 'name' | 'profilePicture'>;
  } & {
    preferences: Pick<Preferences, 'logo' | 'darkMode'>;
  };
  isUserThemeDark?: boolean;
  size?: 'xs' | 'sm' | 'lg' | 'xl';
  withProfileImage?: boolean;
  isPostPage?: boolean | null;
}) => {
  const blogTitle = generateBlogTitleWithoutDisplayTitle(publication);

  return (
    <h1
      className={twJoin(
        'blog-title',
        textStyles[size],
        'break-words font-heading font-semibold leading-snug md:font-bold',
        isUserThemeDark ? 'text-white' : publication.headerColor ? 'text-black' : 'dark:text-white',
      )}
    >
      <a
        href={`/${isPostPage ? '?source=top_nav_blog_home' : ''}`}
        className={twJoin(
          'focus-ring-base flex flex-row items-center',
          isUserThemeDark
            ? 'focus-ring-colors-dark-header'
            : publication.headerColor
            ? 'focus-ring-colors-light-header'
            : 'focus-ring-colors-base',
        )}
        aria-label={`${blogTitle} home page`}
      >
        {!publication.isTeam && publication.author.profilePicture && withProfileImage && (
          <div className="mr-2 h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <CustomImage
              priority
              src={resizeImage(publication.author.profilePicture, { w: 400, h: 400, c: 'face' })}
              originalSrc={publication.author.profilePicture}
              blurDataURL={getBlurHash(resizeImage(publication.author.profilePicture, { w: 400, h: 400, c: 'face' }))}
              width={400}
              height={400}
              alt={publication.author.name}
            />
          </div>
        )}
        {blogTitle}
      </a>
    </h1>
  );
};

function PublicationLogo(props: PublicationLogoProps) {
  const { publication, size, withProfileImage, isPostPage } = props;
  const { preferences } = publication;

  if (!publication) {
    return null;
  }
  const useDarkLogo = preferences.darkMode?.logo;
  const useLogo = false || preferences.logo;
  const isUserThemeDark = true;
  if (useLogo) {
    const logoSrc = false ? preferences.darkMode?.logo : preferences.logo;
    return (
      <CustomLogo
        publication={publication}
        logoSrc={logoSrc}
        size={size}
        isPostPage={isPostPage}
        isUserThemeDark={isUserThemeDark}
      />
    );
  }
  return (
    <DefaultLogo
      publication={publication}
      size={size}
      withProfileImage={withProfileImage}
      isUserThemeDark={isUserThemeDark}
      isPostPage={isPostPage}
    />
  );
}

export default PublicationLogo;
