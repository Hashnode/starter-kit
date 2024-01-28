import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import { memo } from 'react';
import './markdown-styles.module.css'
type Props = {
	contentMarkdown: string;
};

const _MarkdownToHtml = ({ contentMarkdown }: Props) => {
	const content = markdownToHtml(contentMarkdown);
	useEmbeds({ enabled: true });

	return (
		<div
			className="w-full px-5 mx-auto hashnode-content-style md:max-w-screen-md"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

export const MarkdownToHtml = memo(_MarkdownToHtml);
