import { PostFullFragment } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { useState } from 'react';
import ListSVG from './icons/svgs/ListSVG';
import CloseSVG from './icons/svgs/CloseSVG';

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
    console.error('Error while mapping table of content items', { error });
    return [];
  }
};

const Toc = ({
  data,
  parentId,
  onClose,
}: {
  data: TableOfContentsItem[];
  parentId: TableOfContentsItem['parentId'];
  onClose: () => void;
}) => {
  const children = data.filter((item) => item.parentId === parentId);
  if (children.length === 0) return null;
  return (
    <ul className="mt-3 flex flex-col gap-2 pl-5 font-semibold text-slate-800 dark:text-neutral-200">
      {children.map((item) => (
        <li key={item.id}>
          <a
            href={`#heading-${item.slug}`}
            className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800 relative pl-5 before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:bg-primary-500 before:rounded-full before:transform before:-translate-y-1/2"
            onClick={onClose}
          >
            {item.title}
          </a>
          <Toc data={data} parentId={item.id} onClose={onClose} />
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

  const closeTOC = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={toggleVisibility}
          className="rounded-full p-3 bg-white dark:bg-neutral-950 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ListSVG className="w-6 h-6 fill-current text-primary-800" />
        </button>
      </div>

      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-screen-md bg-white dark:bg-neutral-900 p-5 rounded-lg shadow-lg overflow-y-auto max-h-full">
            <h2 className="mb-5 text-lg font-bold md:text-xl text-center">Table of Contents</h2>
            <Toc parentId={null} data={mapTableOfContentItems(post.features.tableOfContents.items)} onClose={closeTOC} />
            <button
              onClick={closeTOC}
              className="absolute top-4 right-4 text-primary-900 hover:text-primary-800 dark:hover:text-gray-300"
            >
              <CloseSVG className="w-6 h-6 fill-current" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
