import React, { useRef, useEffect, useCallback, RefObject } from 'react';
import { PostFullFragment } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { MarkdownToHtmlRef } from './markdown-to-html';

type TableOfContentsItem = PostFullFragment['features']['tableOfContents']['items'][number];

const mapTableOfContentItems = (toc: TableOfContentsItem[]) => {
    try {
        return (toc ?? []).map((tocItem) => {
            const item = Array.isArray(tocItem) ? tocItem[0] : tocItem;
            return {
                id: item.id,
                level: item.level,
                slug: item.slug,
                title: item.title,
                parentId: item.parentId ?? null,
            };
        });
    } catch (error) {
        console.error('Error while mapping table of content items', {
            error,
        });
        return [];
    }
};

const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        const offset = 20; // Ekranın üstünde bırakılacak boşluk (piksel cinsinden)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

const Toc = ({
    data,
    parentId,
    handleSmoothScroll,
}: {
    data: TableOfContentsItem[];
    parentId: TableOfContentsItem['parentId'];
    handleSmoothScroll: (e: React.MouseEvent, targetId: string) => void;
}) => {
    const children = data.filter((item) => item.parentId === parentId);
    if (children.length === 0) return null;
    return (
        <ul className="flex flex-col pl-5 font-medium text-slate-800 dark:text-neutral-200 select-none">
            {children.map((item) => (
                <li key={item.id}>
                    <a
                        href={`#heading-${item.slug}`}
                        className="hover:text-primary-650 dark:hover:text-primary-650 dark:hover:bg-neutral-800 transition-colors duration-200 ease-in-out"
                        style={{ fontFamily: 'PinkChicken, sans-serif' }}
                        onClick={(e) => handleSmoothScroll(e, `heading-${item.slug}`)}
                    >
                        {item.title}
                    </a>
                    <Toc data={data} parentId={item.id} handleSmoothScroll={handleSmoothScroll} />
                </li>
            ))}
        </ul>
    );
};

interface PostTOCProps {
    markdownRef: RefObject<MarkdownToHtmlRef>;
}


export const PostTOC: React.FC<PostTOCProps> = ({ markdownRef }) => {
    const { post } = useAppContext();
    const topRef = useRef<HTMLDivElement>(null);

    const handleSmoothScroll = useCallback((e: React.MouseEvent, targetId: string) => {
        e.preventDefault();
        scrollToElement(targetId);
    }, []);

    const scrollToTop = useCallback(() => {
        markdownRef.current?.scrollToTop();
    }, [markdownRef]);

    useEffect(() => {
        const handleSmoothScrollForAllLinks = (e: MouseEvent) => {
            const target = e.target as HTMLAnchorElement;
            if (target.tagName === 'A' && target.hash) {
                e.preventDefault();
                const targetId = target.hash.slice(1); // Remove the '#' from the hash
                scrollToElement(targetId);
            }
        };

        document.addEventListener('click', handleSmoothScrollForAllLinks);
        return () => document.removeEventListener('click', handleSmoothScrollForAllLinks);
    }, []);

    if (!post) return null;

    return (
        <div className="w-full px-5">
            <div ref={topRef} className="sticky-wrapper">
                <div className="sticky-toc select-none mx-auto w-full max-w-screen-md rounded-lg border border-b-4 border-r-4 p-5 text-base leading-snug dark:border-neutral-800 dark:text-neutral-50 md:p-8 md:text-lg"
                     style={{ borderColor: '#f3cbae' }}>
                    <h2 className="mb-5 text-lg font-bold md:text-xl">Konu Başlıkları</h2>
                    <button 
                        onClick={scrollToTop}
                        className="mb-5 text-lg font-bold md:text-xl hover:text-primary-650 dark:hover:text-primary-650 dark:hover:bg-neutral-800 cursor-pointer transition-colors duration-200 ease-in-out w-full text-left"
                        style={{ fontFamily: 'PinkChicken, sans-serif' }}
                    >
                        {post.title}
                    </button>
                    <Toc 
                        parentId={null} 
                        data={mapTableOfContentItems(post.features.tableOfContents.items)} 
                        handleSmoothScroll={handleSmoothScroll}
                    />
                </div>
            </div>
        </div>
    );
};