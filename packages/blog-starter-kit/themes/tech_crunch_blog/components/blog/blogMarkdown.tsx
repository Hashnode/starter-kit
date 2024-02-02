'use client';

import MarkdownPreview from '@uiw/react-markdown-preview';

const BlogMarkdown = ({ src }: { src: string }) => {
	return (
		<div data-color-mode="light" className="col-span-8">
			<MarkdownPreview source={src} style={{ padding: '2.8px' }} />
		</div>
	);
};

export default BlogMarkdown;
