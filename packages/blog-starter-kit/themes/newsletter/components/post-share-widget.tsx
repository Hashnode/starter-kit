import { useState, useEffect } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import {
    Content as DropdownContent,
    Item as DropdownItem,
    Portal as DropdownPortal,
    Root as DropdownRoot,
    Trigger as DropdownTrigger,
} from '@radix-ui/react-dropdown-menu';
import { useCopyToClipboard } from 'react-use';

import Button from './hn-button';
import {
  FacebookSVGRound,
  HackernewsSVGV2,
  LinkSVGV2,
  LinkedInSVGV2,
  RedditSVGV2,
  ShareSVGV2,
  TwitterXSVG,
  WhatsappSVG,
} from './icons/svgs';
import { Post } from '../types';
import { dropdownMenu } from '../utils/const/styles';
import { showToast } from '../utils/toast';
import { createDraftPreviewUrl, createPostUrl } from '../utils/urls';

import PostFloatingBarTooltipWrapper from './post-floating-bar-tooltip-wrapper';
import { PostFullFragment } from '../generated/graphql';

type DraftType = Post & { pendingScheduledDateArrival: boolean };

type PostShareWidgetProps = {
  shareText: string;
  post?: PostFullFragment;
  draft?: DraftType;
};

/**
 * Can be used for both Draft preview page and Single post page
 */

const PostShareWidget = (props: PostShareWidgetProps) => {
  const { shareText, post, draft } = props;
  const [_, copyToClipboard] = useCopyToClipboard();
  const [isShareOpen, setIsShareOpen] = useState(false);

  if (post && draft) {
    throw new Error('You cannot provide both post and draft');
  }

  if (!post && !draft) {
    throw new Error('Provide at least Post or Draft');
  }

  const entity: PostFullFragment | DraftType = post! || draft!;

  const getAbsolutePostURL = (): string => {
    if (post) {
      return createPostUrl({...entity!, partOfPublication: true}, entity!.publication);
    }

    if (draft) {
      return createDraftPreviewUrl(entity.id.toString());
    }

    return '';
  };

  const absolutePostURL = getAbsolutePostURL();

  const copyPermalink = () => {
    copyToClipboard(absolutePostURL);
    showToast('success', `Copied ${post ? 'article permalink' : 'draft preview link'} `);
  };

  useEffect(() => {
    if (!isShareOpen) return;
  }, [isShareOpen]);

  return (
    <DropdownRoot open={isShareOpen} onOpenChange={setIsShareOpen}>
      <PostFloatingBarTooltipWrapper label="Share this article">
        <DropdownTrigger
          aria-label="Share this article"
          className="outline-none! cursor-pointer rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <ShareSVGV2 className="h-4 w-4 stroke-current text-slate-800 dark:text-slate-50 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
        </DropdownTrigger>
      </PostFloatingBarTooltipWrapper>
      <DropdownPortal>
        <DropdownContent
          sideOffset={16}
          className="z-50 w-40 rounded-xl border border-slate-200 bg-white px-1 py-2 text-sm font-semibold text-slate-700 shadow-xl dark:border-slate-700 dark:bg-slate-700 dark:text-slate-50"
        >
          <DropdownItem className="outline-none!" asChild>
            <Button
              variant="transparent"
              className={twJoin(
                dropdownMenu,
                'flex flex-wrap rounded px-2 text-sm font-normal dark:hover:bg-slate-800',
              )}
              onClick={copyPermalink}
              aria-label={`Copy ${post ? 'article permalink' : 'draft link'}`}
            >
              <span className="flex h-5 w-5 items-center justify-center">
                <LinkSVGV2 className="h-5 w-4 fill-current text-slate-600 dark:text-slate-200" />
              </span>
              {/* Draft link is technically not a permalink so changed the wording for draft preview links, toast message is also adjusted accordingly */}
              <span className="px-2 font-normal text-slate-700 dark:text-slate-100">
                {post ? 'Permalink' : 'Draft link'}
              </span>
            </Button>
          </DropdownItem>
          <DropdownItem className="outline-none!" asChild>
            <a
              href={`https://twitter.com/share?url=${encodeURIComponent(
                `${absolutePostURL}?ref=twitter-share`,
              )}&text=${encodeURIComponent(shareText)}`}
              onClick={() => {}}
              target="_blank"
              rel="noopener"
              className={twMerge(dropdownMenu, 'flex flex-wrap rounded px-2 font-normal dark:hover:bg-slate-800')}
            >
              <span className="flex h-5 w-5 items-center justify-center">
                <TwitterXSVG className="h-7 w-4 stroke-current text-slate-600 dark:text-slate-200" />
              </span>
              <span className="px-2 font-normal text-slate-700 dark:text-slate-100">Twitter</span>
            </a>
          </DropdownItem>
          <DropdownItem className="outline-none!" asChild>
            <a
              href={`http://www.reddit.com/submit?url=${encodeURIComponent(absolutePostURL)}&title=${encodeURIComponent(
                entity.title,
              )}`}
              onClick={() => {}}
              target="_blank"
              rel="noopener"
              className={twMerge(dropdownMenu, 'flex flex-wrap rounded px-2 font-normal dark:hover:bg-slate-800')}
            >
              <span className="flex h-5 w-5 items-center justify-center">
                <RedditSVGV2 className="h-7 w-4 fill-current text-slate-600 dark:text-slate-200" />
              </span>
              <span className="px-2 font-normal text-slate-700 dark:text-slate-100">Reddit</span>
            </a>
          </DropdownItem>
          <DropdownItem className="outline-none!" asChild>
            <a
              href={`https://www.linkedin.com/cws/share?url=${encodeURIComponent(absolutePostURL)}`}
              onClick={() => {}}
              target="_blank"
              rel="noopener"
              className={twMerge(dropdownMenu, 'flex flex-wrap rounded px-2 font-normal dark:hover:bg-slate-800')}
            >
              <span className="flex h-5 w-5 items-center justify-center">
                <LinkedInSVGV2 className="h-7 w-4 fill-current text-slate-600 dark:text-slate-200" />
              </span>
              <span className="px-2 font-normal text-slate-700 dark:text-slate-100">LinkedIn</span>
            </a>
          </DropdownItem>
          <DropdownItem className="outline-none!" asChild>
            <a
              href={`http://news.ycombinator.com/submitlink?u=${encodeURIComponent(
                absolutePostURL,
              )}&t=${encodeURIComponent(entity.title)}`}
              onClick={() => {}}
              target="_blank"
              rel="noopener"
              className={twMerge(dropdownMenu, 'flex flex-wrap rounded px-2 font-normal dark:hover:bg-slate-800')}
            >
              <span className="flex h-5 w-5 items-center justify-center">
                <HackernewsSVGV2 className="h-5 w-4 fill-current text-slate-600 dark:text-slate-200" />
              </span>
              <span className="px-2 font-normal text-slate-700 dark:text-slate-100">Hacker News</span>
            </a>
          </DropdownItem>
          <DropdownItem className="outline-none!" asChild>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(absolutePostURL)}`}
              onClick={() => {}}
              target="_blank"
              rel="noopener"
              className={twMerge(dropdownMenu, 'flex flex-wrap rounded px-2 font-normal dark:hover:bg-slate-800')}
            >
              <span className="flex h-5 w-5 items-center justify-center">
                <FacebookSVGRound className="h-5 w-4 fill-current stroke-current text-slate-600 dark:text-slate-200" />
              </span>
              <span className="px-2 font-normal text-slate-700 dark:text-slate-100">Facebook</span>
            </a>
          </DropdownItem>
          <DropdownItem className="outline-none!" asChild>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(entity.title)} ${encodeURIComponent(
                absolutePostURL,
              )}`}
              onClick={() => {}}
              target="_blank"
              rel="noopener"
              className={twMerge(dropdownMenu, 'flex flex-wrap rounded px-2 font-normal dark:hover:bg-slate-800')}
            >
              <span className="flex h-5 w-5 items-center justify-center">
                <WhatsappSVG className="h-5 w-4 fill-current stroke-current text-slate-600 dark:text-slate-200" />
              </span>
              <span className="px-2 font-normal text-slate-700 dark:text-slate-100">WhatsApp</span>
            </a>
          </DropdownItem>
        </DropdownContent>
      </DropdownPortal>
    </DropdownRoot>
  );
};

export default PostShareWidget;
