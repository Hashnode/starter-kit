import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "./interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex-row items-center justify-center hidden w-full gap-5 md:flex text-slate-700 dark:text-neutral-300">
        <Avatar name={author.name} size={10} picture={author.profilePicture} />
        <DateFormatter dateString={date} />
      </div>
      {coverImage && (
        <div className="w-full px-5 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}
    </>
  );
};

export default PostHeader;
