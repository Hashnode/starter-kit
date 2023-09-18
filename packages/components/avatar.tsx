type Props = {
  name: string;
  picture: string;
  size: number;
};

const Avatar = ({ name, picture, size }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={picture}
        className={
          size ? `w-${size} h-${size} rounded-full` : "w-8 h-8 rounded-full"
        }
        alt={name}
      />
      <div className="text-base font-bold text-slate-600 dark:text-neutral-300">
        {name}
      </div>
    </div>
  );
};

export default Avatar;
