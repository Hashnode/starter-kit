import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import {
  Figma,
  Github,
  Onepassword,
  Instagram,
  Linkedin,
  Hashnode,
  Youtube,
  Twitter,
  Mastodon,
  DailyDev,
} from "@/assert/allicons";
import { cn } from "@/lib/utils";
import { ExternalLink, Globe } from "lucide-react";

const styles = {
  width: "24px",
  height: "24px",
};

// TODO :remove Bento Card default width and height and replace with tailwind css

export type BentoCardType = "small" | "large" | "medium" | "long" | "vertical";

interface BentoSizes {
  [key: string]: { width: string; height: string };
}

// similar to subtitle but multiline is allowed
export const BentoDescription = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-neutral-500 text-[12px] font-normal ">{children}</div>
  );
};

export const BentoBackground = ({
  classname,
  background,
}: {
  classname: string;
  background?: string;
}) => {
  return (
    <div
      style={{
        background: background,
      }}
      className={cn(
        " -z-10 pointer-events-none absolute bottom-0 left-0 right-0 top-0 ",
        classname
      )}
    ></div>
  );
};

export const BentoText = ({ children }: PropsWithChildren) => {
  return (
    <p className=" font-medium w-full h-full text-wrap overflow-scroll no-scrollbar">
      {children}
    </p>
  );
};

export const BentoButton = ({
  href,
  label,
  count,
  background,
}: {
  href: string;
  label: string;
  count: string;
  background: "blue" | "red" | "purple";
}) => {
  return (
    <a
      className=""
      href={href}
      style={{
        background,
      }}
    >
      {label + "  " + count}
    </a>
  );
};

export const BentoFlavicon = ({
  icon,
  color,
  type,
  src,
}: {
  icon?: keyof typeof Icons;
  color?: string;
  type?: BentoCardType;
  src?: string;
}) => {
  const Icons = {
    figma: <Figma style={styles} />,
    github: <Github style={styles} />,
    instagram: <Instagram style={styles} />,
    hashnode: <Hashnode style={styles} />,
    linkedin: <Linkedin style={styles} />,
    youtube: <Youtube style={styles} />,
    twitter: <Twitter style={styles} />,
    mastodon: <Mastodon style={styles} />,
    dailydev: <DailyDev style={styles} />,
    website: <Globe style={styles} />,
  };

  const colors = {
    twitter: "#1DA1F2",
    figma: "#F24E1E",
    github: "#1B1F23",
    instagram: "#E4405F",
    linkedin: "#0077B5",
    youtube: "#fff",
    website: "#777",

    mastodon: "#2C5282",
    dailydev: "#111",
    hashnode: "#fff",
  };

  const background = icon ? colors[icon] : "#fff";
  return (
    <div
      style={{
        width: "40px",
        height: "40px",

        padding: "6px",
        borderRadius: "10px",

        background: background,
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
      data-type={type}
      className="border hidden border-black/5 shadow data-[type=small]:inline"
    >
      {icon ? (
        Icons[icon]
      ) : (
        <img
          data-type={type}
          src={src || ""}
          alt=""
          className="hidden data-[type=small]:inline"
        />
      )}
    </div>
  );
};

const sizes = {
  small: {
    width: "160px",
    height: "160px",
  },
  long: {
    width: "360px",
    height: "80px",
  },
  large: {
    width: "360px",
    height: "360px",
  },
  medium: {
    width: "360px",
    height: "160px",
  },
  vertical: {
    width: "160px",
    height: "360px",
  },
};

const BentoSizes: BentoSizes = {
  small: {
    width: "160px",
    height: "160px",
  },
  long: {
    width: "360px",
    height: "80px",
  },
  large: {
    width: "360px",
    height: "360px",
  },
  medium: {
    width: "360px",
    height: "160px",
  },
  vertical: {
    width: "160px",
    height: "360px",
  },
};

const BentoImageSize: BentoSizes = {
  small: {
    width: "0px",
    height: "0px",
  },
  long: {
    width: "200px",
    height: "40px",
  },
  vertical: {
    width: "130px",
    height: "68px",
  },
  medium: {
    width: "120px",
    height: "80px",
  },
  large: {
    width: "332px",
    height: "174px",
  },
};

// line  clamp values long, vertical, => 3, short, medium, long => 2
export function BentoTitle({
  children,
  type,
  classname,
}: {
  children: ReactNode;
  type?: BentoCardType;
  classname?: string;
}) {
  return (
    <div
      data-type={type}
      className={cn(
        " line-clamp-3 text-lg data-[type=long]:text-md data-[type=long]:w-92 font-normal data-[type=medium]:line-clamp-2 data-[type=small]:line-clamp-2 data-[type=small]:text-sm ",
        classname
      )}
    >
      {children}
    </div>
  );
}

export function BentoSubtitle({
  children,
  type,
}: {
  children: ReactNode;
  type?: BentoCardType;
}) {
  return (
    <div
      data-type={type}
      className="text-neutral-500 text-[14px] font-normal line-clamp-3 data-[type=long]:hidden  data-[type=medium]:line-clamp-2 data-[type=small]:line-clamp-1  "
    >
      {children}
    </div>
  );
}

export function BentoImage({
  src,
  alt = "image",
  type,
  children,
}: {
  src: string;
  alt: string;
  type: BentoCardType;
  children?: ReactNode;
}) {
  const { width, height } = BentoImageSize[type];
  return (
    <div className="relative">
      {children}

      <img
        data-type={type}
        className=" object-cover  object-center data-[type=small]:hidden data-[type=vertical]:rounded-[10px] data-[type=medium]:rounded-[14px] data-[type=large]:rounded-[10px]"
        src={src}
        style={{
          width,
          height,
        }}
        alt={alt}
        width={Number(BentoImageSize[type].width.replace("px", ""))}
        height={Number(BentoImageSize[type].height.replace("px", ""))}
      />
    </div>
  );
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  rounded?: boolean;
  border?: string;
  background?: ReactNode;
  isLink?: boolean;
  href?: string;
  external?: boolean;
}

export function BentoToolTip({
  children,
  type,
}: {
  type: BentoCardType;
  children: ReactNode;
}) {
  return (
    <div
      data-type={type}
      className=" data-[type=large]:inline-block hidden z-20 absolute font-normal left-0 bottom-0 p-4 transition-opacity duration-200 ease-in"
    >
      <div
        className=" max-w-[200px] 
    bg-white/70 dark:bg-black/30 px-2 py-1.5 text-[14px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06)] backdrop-blur-[20px] rounded-[8px]
    "
      >
        <div className=" line-clamp-1">{children}</div>
      </div>
    </div>
  );
}

export function BentoContainer({
  type,
  children,
}: {
  type: BentoCardType;
  children: ReactNode;
}) {
  return (
    <div
      data-type={type}
      className=" w-full h-full flex flex-col data-[type=small]:flex-col data-[type=medium]:flex-row data-[type=long]:flex-row gap-3 justify-between  p-6 absolute top-0   font-semibold dark:text-white    "
    >
      {children}
    </div>
  );
}

export function BentoLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      aria-label={href}
      style={{
        zIndex: "20",
        position: "absolute",
        top: "0",
        right: "0",
        left: "0",
        bottom: "0",
        borderRadius: "inherit",
        borderWidth: 1,
        cursor: "pointer",
      }}
      className="hover:opacity-10 transition-all duration-300 ease-linear  opacity-0 bg-neutral-300"
      target="_blank"
      rel="noopener noreferrer"
    ></a>
  );
}

function BentoCard({
  type = "small",
  rounded = true,
  border = "none",
  children,
  background = <div></div>,
  isLink = false,
  href = "",
  external = false,

  ...props
}: BentoCardProps) {
  const { width, height } = BentoSizes[type];

  return (
    <div
      date-bento-card={type}
      style={{
        width,
        height,
        border: border,

        borderRadius: rounded ? "20px" : "0px",
        overflow: "hidden",
        position: "relative",
      }}
      {...props}
    >
      {children}

      <div
        style={{
          opacity: 1,
          position: "absolute",
          top: "0",
          right: "0",
          left: "0",
          bottom: "0",
          borderRadius: "inherit",
          borderWidth: 1,
          pointerEvents: "none",
        }}
        className=" border-[color:rgba(0,0,0,.08)] hover:border-opacity-60 dark:border-4  dark:border-[color:rgba(255,255,255,0.08)]"
      ></div>

      <div
        style={{
          top: "1px",
          right: "1px",
          bottom: "1px",

          opacity: 1,
          borderWidth: 1,
          transition: "border .2s ease-in-out,opacity .2s ease-in-out",
          pointerEvents: "none",
          borderRadius: "19px",
          zIndex: "30",

          maskImage: "linear-gradient(0deg,transparent,#000)",
        }}
        className=" border-[color:hsla(0,0%,100%,.22)]   dark:border-4  dark:border-[color:#292929]"
      ></div>

      {isLink && (
        <Link
          href={href}
          aria-label={href}
          target={external ? "_blank" : "_self"}
          style={{
            zIndex: "20",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            borderRadius: "inherit",
            borderWidth: 1,
            cursor: "pointer",
          }}
          className="hover:opacity-10 transition-all duration-300 ease-linear  opacity-0 bg-neutral-300"
        ></Link>
      )}
    </div>
  );
}

export default BentoCard;
