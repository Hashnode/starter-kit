import { resizeImage } from "@starter-kit/utils/image";

type Props = {
  username: string;
  name: string;
  picture: string;
  size: number;
};

const Avatar = ({ username, name, picture, size }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://hashnode.com/@${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={resizeImage(picture, { w: 160, h: 160, c: "face" })}
          className={
            size ? `w-${size} h-${size} rounded-full` : "w-8 h-8 rounded-full"
          }
          alt={name}
        />
      </a>
      <div className="text-base font-bold text-slate-600 dark:text-neutral-300">
        <a
          href={`https://hashnode.com/@${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </div>
    </div>
  );
};

export default Avatar;
