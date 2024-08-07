import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    title: string;
    src: string;
    slug?: string;
    priority?: boolean;
    onLoad?: () => void;
    className?: string;
};

const Skeleton = () => (
    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
        <div className="shimmer" />
    </div>
);

export const CoverImage = ({ title, src, slug, priority = false, onLoad, className }: Props) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const postURL = `/${slug}`;

    const handleImageLoad = () => {
        setImageLoaded(true);
        if (onLoad) onLoad();
    };

    const image = (
        <div className={`relative pt-[52.5%] select-none ${className || ''}`}>
            {imageLoaded && <Skeleton />}
            <Image
                src={src}
                alt={`Temizmama - ${title}`}
                className={`w-full rounded-md border object-cover hover:opacity-90 dark:border-neutral-800 transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                fill
                unoptimized
                priority={priority}
                onLoad={handleImageLoad}
            />
        </div>
    );

    return (
        <div className="relative w-full max-w-screen-lg sm:mx-0">
            {slug ? (
                <Link href={postURL} aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
            <style jsx global>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                .shimmer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0.3) 50%,
                        rgba(255, 255, 255, 0) 100%
                    );
                    animation: shimmer 1.5s infinite;
                }
                .dark .shimmer {
                    background: linear-gradient(
                        90deg,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0.1) 50%,
                        rgba(255, 255, 255, 0) 100%
                    );
                }
            `}</style>
        </div>
    );
};