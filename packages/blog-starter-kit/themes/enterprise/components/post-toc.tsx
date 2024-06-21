import { PostFullFragment } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';

import { useState } from 'react';
import { Button } from './button';
import HamburgerSVG from './icons/svgs/HamburgerSVG';


type TableOfContentsItem = PostFullFragment['features']['tableOfContents']['items'][number];

const mapTableOfContentItems = (toc: TableOfContentsItem[]) => {
	try {
		// `toc` is sometimes an array of arrays or an array of objects. Hashnode is trying to investigate this issue.
		// Meanwhile, we can use the following code to map the table of content items to handle both cases.
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

const Toc = ({
	data,
	parentId,
}: {
	data: TableOfContentsItem[];
	parentId: TableOfContentsItem['parentId'];
}) => {
	const children = data.filter((item) => item.parentId === parentId);
	if (children.length === 0) return null;
	return (
		<ul className="mt-5 flex flex-col gap-5 pl-5 font-medium text-slate-800 dark:text-neutral-200">
			{children.map((item) => (
				<li key={item.id}>
					<a
						href={`#heading-${item.slug}`}
						className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800"
					>
						{item.title}
					</a>

					<Toc data={data} parentId={item.id} />
				</li>
			))}
		</ul>
	);
};

export const PostTOC = () => {
	const { post } = useAppContext();

	const [isVisible, setIsVisible] = useState(false);

	if (!post) return null;

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className="fixed top-1/4 right-0 w-64 px-5 z-50">
			<div className="mx-auto w-full bg-primary-50 max-w-screen-md rounded-lg border border-b-4 border-r-4 p-5 text-base leading-snug dark:border-neutral-800 dark:text-neutral-50 md:p-8 md:text-lg">
				<Button
					type="outline"
					label="Table of Contents"
					onClick={toggleVisibility}
					className="mb-5 p-2 bg-primary-600 font-bold rounded-md hover:bg-primary-700"
				
					icon={<HamburgerSVG className="h-5 w-5 stroke-current" />}
				/>
				{isVisible && (
					<Toc parentId={null} data={mapTableOfContentItems(post.features.tableOfContents.items)} />
				)}
			</div>
		</div>
	);
};
