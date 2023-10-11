import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { User } from "../generated/graphql";
import { resizeImage } from "@starter-kit/utils/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: User;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex-row items-center justify-center hidden w-full gap-5 md:flex text-slate-700 dark:text-neutral-300">
        <Avatar
          username={author.username}
          name={author.name}
          size={10}
          picture={author.profilePicture}
        />
        <DateFormatter dateString={date} />
      </div>
      {coverImage && (
        <div className="w-full px-5 sm:mx-0">
          <CoverImage
            title={title}
            src={resizeImage(coverImage, { w: 1600, h: 840, c: "thumb" })}
            priority={true}
          />
        </div>
      )}
    </>
  );
};

export default PostHeader;
