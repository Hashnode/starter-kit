import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { twJoin } from 'tailwind-merge';
import { ChevronDownSVG_16x16, ChevronRightSVG_16x16, ChevronUpSVG_16x16 } from './icons/svgs';
import { useTocModalStore } from './toc-sheet';

interface TocRowProps {
  children: React.ReactNode;
  node: any;
  modal?: boolean;
}

interface TocTreeProps {
  list: any[];
  minHeaderLevel?: number;
  currentItem?: any;
  numItemsCompleted?: number;
  modal?: boolean;
}

interface TocRenderDesignProps {
  list: any[];
  hideShowMoreOption?: boolean;
  modal?: boolean;
}

function TocRow(props: TocRowProps) {
  const { children, node, modal } = props;
  const [childrenVisibility, setChildrenVisibility] = useState(false);
  const { hide: hideTocModal } = useTocModalStore();

  return (
    <li key={node.id} className="px-2 py-0.5 align-middle">
      <div
        className={twJoin(
          'flex items-center gap-2 rounded-lg',
          modal ? 'hover:bg-slate-100 dark:hover:bg-slate-800' : 'hover:underline',
        )}
      >
        {node.hasChildren && (
          <button
            type="button"
            className="pl-2.5 text-slate-400"
            onClick={() => {
              setChildrenVisibility((prevVisibility: boolean) => !prevVisibility);
            }}
          >
            {childrenVisibility ? (
              <ChevronDownSVG_16x16 className="h-4 w-4 stroke-current" />
            ) : (
              <ChevronRightSVG_16x16 className="h-4 w-4 stroke-current" />
            )}
          </button>
        )}
        <a
          id={node.id}
          className={twJoin(
            'w-full py-2.5 pr-2.5 text-sm font-medium text-slate-800 dark:text-slate-100',
            !node.hasChildren && 'pl-3',
          )}
          href={`#heading-${node.slug}`}
          onClick={() => {
            if (hideTocModal && modal) {
              // This rAF is required to prevent flickering of the navbar when the user clicks on a link in the TOC modal
              requestAnimationFrame(() => {
                hideTocModal();
              });
            }
          }}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: node.title,
          }}
          aria-label={node.title}
        />
      </div>
      {node.hasChildren ? <> {childrenVisibility && <div className="pl-5">{children}</div>} </> : <>{children}</>}
    </li>
  );
}

function TocTree(props: TocTreeProps) {
  const { list, minHeaderLevel, currentItem, numItemsCompleted = 0, modal } = props;

  if (!list || list.length === 0 || numItemsCompleted >= list.length) {
    return null;
  }
  let nodes: any[] = [];

  if (numItemsCompleted > 0) {
    nodes = list.filter((node) => {
      if (node.parentId && node.level === 3 && node.id === currentItem.parentId) {
        // eslint-disable-next-line no-param-reassign
        node.hasChildren = true;
      }
      return node.parentId === currentItem.id;
    });
  } else {
    // Find the largest header size and each of those headers
    const minHeader =
      minHeaderLevel || list.reduce((prevNode, currNode) => (prevNode.level < currNode.level ? prevNode : currNode));
    nodes = list.filter((header) => header.level === minHeader.level);

    // When the first heading is not the largest, capture previous suitable headings for top level nodes
    if (!nodes[0].parentId) {
      const temp: any[] = [];
      let curLevel = 0;

      for (let i = 0; i < list.indexOf(nodes[0]); i++) {
        if (!list[i].previousLevel || list[i].level <= curLevel) {
          // set a new initial level li
          curLevel = list[i].level;
          temp.push(list[i]);
        }
      }
      nodes = [...temp, ...nodes];
    }
  }

  if (!nodes || !nodes.length) {
    return null;
  }

  return (
    <ul className="list-inside font-semibold dark:border-slate-800">
      {nodes.map((node) => (
        <TocRow key={node.id} node={node} modal={modal}>
          <TocTree
            currentItem={node}
            list={list}
            numItemsCompleted={numItemsCompleted + nodes.length}
            minHeaderLevel={minHeaderLevel}
            modal={modal}
          />
        </TocRow>
      ))}
    </ul>
  );
}

const TocRenderDesign = (props: TocRenderDesignProps) => {
  const { list, hideShowMoreOption, modal } = props;
  const [tocFullVisibility, setTocFullVisibility] = useState<boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const isDraftPreview = pathname.indexOf('/preview') === 0;
  const tocContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasEnoughItems = list && list.length >= 12;
    const shouldShowMoreOption = hideShowMoreOption !== false && hasEnoughItems;

    setIsOverflowing(shouldShowMoreOption);
    setTocFullVisibility(!hasEnoughItems || hideShowMoreOption === true);
  }, []);
  return (
    <div
      className={twJoin(
        'relative mb-10 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 pt-0 dark:border-slate-800 dark:bg-slate-900',
        modal && 'mb-0 rounded-none border-none px-0 py-4',
      )}
      ref={tocContainerRef}
    >
      <div className={tocFullVisibility ? 'max-h-full' : 'max-h-[388px] overflow-hidden'}>
        {/* Header */}
        {modal || (
          <div className="pt-4">
            <h2 className="px-[18px] py-2 text-sm font-medium uppercase text-slate-500 dark:text-slate-400">
              <span>Table of contents</span>
            </h2>
          </div>
        )}
        {/* Body */}
        {list?.length === 0 ? (
          <div className="flex h-[388px] flex-col items-center justify-center gap-2">
            <div className="relative h-[110px] w-[110px]">
              <Image
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1686858363512/7ad376cf-1646-4bd4-b74c-25cf8f47238b.png"
                alt="No heading"
                layout="fill"
              />
            </div>
            <h3 className="text-center text-sm text-slate-700">
              No headings in the {isDraftPreview ? 'draft' : 'article'}.
            </h3>
          </div>
        ) : (
          <>
            <TocTree list={list} modal={modal} />
            {/* Overlay */}
            {!tocFullVisibility && isOverflowing && (
              <div className="absolute bottom-0 right-0 w-full">
                <div className="h-40 bg-gradient-to-t from-white to-transparent dark:from-slate-900" />
              </div>
            )}
          </>
        )}
      </div>

      {/* Show more toggle option */}
      {isOverflowing && !hideShowMoreOption && (
        <div className="relative z-20 flex items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-center gap-2"
            onClick={() => {
              setTocFullVisibility((prevVisibility: boolean) => !prevVisibility);
              tocContainerRef.current?.scrollIntoView();
            }}
          >
            {tocFullVisibility ? (
              <>
                <span className="text-sm text-slate-600 dark:text-slate-300">Show less</span>
                <ChevronUpSVG_16x16 className="h-4 w-4 stroke-current text-slate-500" />
              </>
            ) : (
              <>
                <span className="text-sm text-slate-600 dark:text-slate-300">Show more</span>
                <ChevronDownSVG_16x16 className="h-4 w-4 stroke-current text-slate-500" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default TocRenderDesign;
