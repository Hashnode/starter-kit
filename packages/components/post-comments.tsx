import Avatar from "./avatar";
import type Author from "./interfaces/author";
import Button from "./button";
import { ExternalArrowSVG, HashnodeSVG, PlusCircleSVG } from "./icons";

type Props = {
  author: Author;
};

const PostComments = ({ author }: Props) => {
  return (
    <div className="flex flex-col w-full max-w-screen-md gap-5 px-5 mx-auto">
      <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-neutral-100">
        Comments (20)
      </h3>
      <Button
        icon={<HashnodeSVG className="w-5 h-5 stroke-current" />}
        label="Discuss on Hashnode"
        secondaryIcon={<ExternalArrowSVG className="w-5 h-5 stroke-current" />}
      />
      <div className="flex flex-col gap-5 p-5 border rounded-lg bg-slate-50 dark:bg-neutral-900 dark:border-neutral-600 border-slate-200">
        <Avatar name={author.name} size={8} picture={author.profilePicture} />
        <div className="hashnode-content-style">
          <p>
            Esse fugiat anim minim non proident velit nisi proident aliqua. Ex
            laborum in elit et minim qui qui nisi labore dolore. Adipisicing
            pariatur sint et nostrud excepteur occaecat eiusmod eiusmod. Lorem
            ex fugiat magna irure aute duis duis laborum officia. Elit velit
            culpa culpa quis deserunt labore labore magna magna enim voluptate
            dolore.
          </p>
          <p>
            Esse fugiat anim minim non proident velit nisi proident aliqua. Ex
            laborum in elit et minim qui qui nisi labore dolore. Adipisicing
            pariatur sint et nostrud excepteur occaecat eiusmod eiusmod. Lorem
            ex fugiat magna irure aute duis duis laborum officia. Elit velit
            culpa culpa quis deserunt labore labore magna magna enim voluptate
            dolore.
          </p>
        </div>
        <div className="flex flex-row gap-5 font-medium text-slate-600 dark:text-neutral-400">
          <a href="#">23 likes</a>
          <a href="#">Reply</a>
        </div>
        <div className="flex flex-col gap-5 p-5 border rounded-lg bg-slate-50 dark:bg-neutral-900 dark:border-neutral-600 border-slate-200">
          <Avatar name={author.name} size={8} picture={author.profilePicture} />
          <div className="hashnode-content-style">
            <p>
              Esse fugiat anim minim non proident velit nisi proident aliqua. Ex
              laborum in elit et minim qui qui nisi labore dolore. Adipisicing
              pariatur sint et nostrud excepteur occaecat eiusmod eiusmod. Lorem
              ex fugiat magna irure aute duis duis laborum officia. Elit velit
              culpa culpa quis deserunt labore labore magna magna enim voluptate
              dolore.
            </p>
            <p>
              Esse fugiat anim minim non proident velit nisi proident aliqua. Ex
              laborum in elit et minim qui qui nisi labore dolore. Adipisicing
              pariatur sint et nostrud excepteur occaecat eiusmod eiusmod. Lorem
              ex fugiat magna irure aute duis duis laborum officia. Elit velit
              culpa culpa quis deserunt labore labore magna magna enim voluptate
              dolore.
            </p>
          </div>
          <div className="flex flex-row gap-5 font-medium text-slate-600 dark:text-neutral-400">
            <a href="#">23 likes</a>
            <a href="#">Reply</a>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 border rounded-lg bg-slate-50 dark:bg-neutral-900 dark:border-neutral-600 border-slate-200">
          <Avatar name={author.name} size={8} picture={author.profilePicture} />
          <div className="hashnode-content-style">
            <p>
              Esse fugiat anim minim non proident velit nisi proident aliqua. Ex
              laborum in elit et minim qui qui nisi labore dolore. Adipisicing
              pariatur sint et nostrud excepteur occaecat eiusmod eiusmod. Lorem
              ex fugiat magna irure aute duis duis laborum officia. Elit velit
              culpa culpa quis deserunt labore labore magna magna enim voluptate
              dolore.
            </p>
            <p>
              Esse fugiat anim minim non proident velit nisi proident aliqua. Ex
              laborum in elit et minim qui qui nisi labore dolore. Adipisicing
              pariatur sint et nostrud excepteur occaecat eiusmod eiusmod. Lorem
              ex fugiat magna irure aute duis duis laborum officia. Elit velit
              culpa culpa quis deserunt labore labore magna magna enim voluptate
              dolore.
            </p>
          </div>
          <div className="flex flex-row gap-5 font-medium text-slate-600 dark:text-neutral-400">
            <a href="#">23 likes</a>
            <a href="#">Reply</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-5 border rounded-lg bg-slate-50 dark:bg-neutral-900 dark:border-neutral-600 border-slate-200">
        <Avatar name={author.name} size={8} picture={author.profilePicture} />
        <div className="hashnode-content-style">
          <p>
            Esse fugiat anim minim non proident velit nisi proident aliqua. Ex
            laborum in elit et minim qui qui nisi labore dolore. Adipisicing
            pariatur sint et nostrud excepteur occaecat eiusmod eiusmod. Lorem
            ex fugiat magna irure aute duis duis laborum officia. Elit velit
            culpa culpa quis deserunt labore labore magna magna enim voluptate
            dolore.
          </p>
          <p>
            Esse fugiat anim minim non proident velit nisi proident aliqua. Ex
            laborum in elit et minim qui qui nisi labore dolore. Adipisicing
            pariatur sint et nostrud excepteur occaecat eiusmod eiusmod. Lorem
            ex fugiat magna irure aute duis duis laborum officia. Elit velit
            culpa culpa quis deserunt labore labore magna magna enim voluptate
            dolore.
          </p>
        </div>
        <div className="flex flex-row gap-5 font-medium text-slate-600 dark:text-slate-400">
          <a href="#">23 likes</a>
          <a href="#">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
