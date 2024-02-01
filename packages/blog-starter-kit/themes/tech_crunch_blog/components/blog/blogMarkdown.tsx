'use client';

import MarkdownPreview from '@uiw/react-markdown-preview';

const BlogMarkdown = ({ src }: { src: string }) => {
	return (
		<div data-color-mode="light" className="col-span-8">
			<MarkdownPreview source={src} style={{ width: '100%' }} />
		</div>
	);
};

export default BlogMarkdown;
