import React from 'react';
import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { User } from '../generated/graphql';
import { DEFAULT_COVER } from '../utils/const';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name' | 'profilePicture'>;

const CoverImage: React.FC<{ src: string; alt: string; style?: React.CSSProperties }> = ({ src, alt, style }) => {
    return <img src={src} alt={alt} style={style} />;
};

type Props = {
    title: string;
    coverImage: string | null | undefined;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
    className?: string; // Make className prop optional
};

export const PostPreview: React.FC<Props> = ({ title, coverImage, date, excerpt, slug, className }: Props) => {
    const postURL = `/${slug}`;

    return (
        <div className={`grid grid-cols-3 border-r border-b border-neutral-200 ${className || ''}`}>
            <div className="col-span-1">
                <div className="w-full h-full overflow-hidden">
                    <CoverImage
                        src={resizeImage(coverImage, { w: 400, h: 210, c: 'thumb' }, DEFAULT_COVER)}
                        alt={title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="col-span-2 flex flex-col gap-2 pb-8">
                <h1 className="text-lg font-['Outfit'] font-semibold leading-tight text-slate-800 dark:text-neutral-50 pt-4 px-8">
                    <Link
                        href={postURL}
                        className="hover:text-primary-500 dark:hover:text-primary-500 hover:underline"
                    >
                        {title}
                    </Link>
                </h1>
                <Link href={postURL}>
                    <p className="text-md font-['Outfit'] leading-snug text-slate-500 dark:text-neutral-400 px-8">
                        {excerpt.length > 140 ? excerpt.substring(0, 140) + '…' : excerpt}
                    </p>
                </Link>
                <div className="text-sm font-['Outfit'] font-semibold text-slate-500 dark:text-neutral-300 px-8">
                    <Link href={postURL}>
                        <DateFormatter dateString={date} />
                    </Link>
                </div>
            </div>
        </div>
    );
};
