import { FC } from "react";
import { BounceLoader } from "react-spinners";

interface LoaderProps {
  description: string;
}

export const Loader: FC<LoaderProps> = ({ description }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-3 ml-5 overflow-hidden w-fill gap-y-4 md:ml-5">
      <div className="relative w-10 h-10">
        <BounceLoader color="#22c55e" size={40} />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};