import { Button } from './button';
import CloseSVG from './icons/svgs/CloseSVG';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import CustomScrollArea from './scroll-area';
import { DEFAULT_AVATAR } from '../utils/const';
import { ResizableImage } from './resizable-image';
import { useAppContext } from './contexts/appContext';
import { PostFullFragment } from '../generated/graphql';

type CoAuthorsModalProps = {
  closeModal: () => void;
};

const AuthorCard = ({ author }: { author: PostFullFragment['author']; }) => {

  return (
    <div className="flex flex-row items-center justify-between" key={author.id.toString()}>
      <div
        className="flex w-full flex-wrap items-center justify-between overflow-hidden px-0 py-2.5"
      >
        <div className="flex flex-wrap items-center overflow-hidden">
          <a href={`https://hashnode.com/@${author.username}`} title={author.name} className="mr-2 w-8">
            <ResizableImage
              src={author.profilePicture || DEFAULT_AVATAR}
              resize={{ w: 200, h: 200, c: 'face' }}
              className="mr-3 h-8 w-8 rounded-full"
            />
          </a>
          <div className="flex flex-row items-center text-clip">
            <a
              href={`https://hashnode.com/@${author.username}`}
              title={author.name}
              className="truncate font-sans text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              {author.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CoAuthorsModal({ closeModal }: CoAuthorsModalProps) {
  const { post } = useAppContext();
  const authors = [post?.author, ...(post?.coAuthors || [])];

  return (
    <DialogPrimitive.Root open>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-slate-900 opacity-50 transition-opacity duration-300 ease-out dark:bg-slate-600"
        />
        <DialogPrimitive.Content
          onEscapeKeyDown={closeModal}
          className="fixed bottom-0 left-0 right-0 z-50 flex w-full max-w-[1200px] flex-col items-center overflow-hidden rounded-b-none rounded-t-lg border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 md:bottom-50 md:left-50 md:w-96 md:-translate-x-1/2 md:translate-y-1/2 md:rounded-xl lg:w-108 xl:w-116"
        >
          <DialogPrimitive.DialogTitle className="w-full px-6 py-4 text-lg font-semibold">
            Authors in this article
          </DialogPrimitive.DialogTitle>
          <DialogPrimitive.Close className="absolute right-2 top-4 text-slate-900 dark:text-slate-50" asChild>
          <Button
                type="outline"
                label=""
                icon={<CloseSVG className="h-5 w-5 fill-current" />}
                className="rounded-xl !border-transparent !px-3 !py-2 hover:bg-neutral-800 dark:text-white"
                onClick={closeModal}
            />
          </DialogPrimitive.Close>
          <CustomScrollArea>
            <div className="px-6 pb-8">
              {authors.map((author) => {
                if (!author) {
                  return null;
                }
                return <AuthorCard author={author} key={author.id.toString()} />;
              })}
            </div>
          </CustomScrollArea>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}