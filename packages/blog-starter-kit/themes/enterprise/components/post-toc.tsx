import { PostFullFragment } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';

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
		<ul className="flex flex-col gap-1 font-medium text-slate-800 dark:text-neutral-200">
			{children.map((item) => (
				<li key={item.id}>
					<a
						href={`#heading-${item.slug}`}
						className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 text-sm font-light dark:hover:bg-neutral-800"
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

	if (!post) return null;

	return (
		<div className="sticky top-20 w-full">
			<div className="mx-auto w-full max-w-screen-md rounded-lg text-base leading-snug dark:border-neutral-800 dark:text-neutral-50 md:text-lg">
				<h2 className="text-md font-bold md:text-lg">On this page</h2>
				<Toc parentId={null} data={mapTableOfContentItems(post.features.tableOfContents.items)} />
			</div>
		</div>
	);
};
