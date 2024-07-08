import React, { useRef } from 'react';
import { PostTOC } from './post-toc';
import { MarkdownToHtml, MarkdownToHtmlRef } from './markdown-to-html';
import { useAppContext } from './contexts/appContext';

export const PostContent: React.FC = () => {
    const { post } = useAppContext();
    const markdownRef = useRef<MarkdownToHtmlRef>(null);

    if (!post) return null;

    // post.content objesinden doğru alanı alıyoruz
    const contentMarkdown = post.content.markdown;

    return (
        <>
            <PostTOC markdownRef={markdownRef} />
            <MarkdownToHtml ref={markdownRef} contentMarkdown={contentMarkdown} />
        </>
    );
};