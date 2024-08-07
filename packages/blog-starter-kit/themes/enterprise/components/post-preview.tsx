import React, { useState } from 'react';
import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { User } from '../generated/graphql';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name' | 'profilePicture'>;

type Props = {
    title: string;
    coverImage: string | null | undefined;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
};

const Skeleton = () => (
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md w-full h-full" />
);

export const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const postURL = `/${slug}`;

    return (
        <div className="grid grid-cols-1 gap-5 hover:opacity-90">
            <div className="col-span-1 relative aspect-[1600/840]">
                {!imageLoaded && <Skeleton />}
                <CoverImage
                    slug={slug}
                    title={title}
                    src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }, DEFAULT_COVER)}
                    // onLoad={() => setImageLoaded(true)}
                    className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
                <h1 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
                    <Link
                        href={postURL}
                        className="dark:hover:text-primary-500"
                    >
                        {title}
                    </Link>
                </h1>
                <Link href={postURL}>
                    <p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
                        {excerpt.length > 140 ? excerpt.substring(0, 140) + '…' : excerpt}
                    </p>
                </Link>
                <div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
                    <Link href={postURL}>
                        <DateFormatter dateString={date} />
                    </Link>
                </div>
            </div>
        </div>
    );
};