import React from 'react';
import { useAppContext } from './contexts/appContext';

const mapTableOfContentItems = (toc) => {
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
        parentId: item.parentId ?? null
      };
    });
  } catch (error) {
    console.error('Error while mapping table of content items', {
      error
    });
    return [];
  }
};

const Toc = ({ data, parentId }) => {
  const children = data.filter(item => item.parentId === parentId);
  if (children.length === 0) return null;
  return (
    <ul className="flex flex-col gap-5 pl-5 mt-5 font-medium text-slate-800 dark:text-neutral-200">
      {children.map(item => (
        <li key={item.id}>
          <a
            href={`#heading-${item.slug}`}
            className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
          >
            {item.title}
          </a>

          <Toc 
              data={data}
              parentId={item.id}
            />
        </li>
      ))}
    </ul>
  );
}

const PostTOC = () => {
  const { post } = useAppContext();
  return (
    <div className="w-full px-5">
      <div className="w-full max-w-screen-md p-5 mx-auto text-base leading-snug border border-b-4 border-r-4 rounded-lg md:text-lg dark:border-neutral-800 md:p-8 dark:text-neutral-50">
        <h3 className="mb-5 text-lg font-bold md:text-xl">Table of contents</h3>
        <Toc parentId={null} data={mapTableOfContentItems(post.features.tableOfContents.items)} />
      </div>
    </div>
  );
};

export default PostTOC;
