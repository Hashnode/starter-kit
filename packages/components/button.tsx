type Props = {
  label: string;
  type: string;
  icon?: React.ReactNode;
  className?: string;
  secondaryIcon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  as?: string;
};

const Button = ({ label, type, icon, className, secondaryIcon, href, as, onClick }: Props) => {
  let buttonClassName;

  switch (type) {
    case "outline":
      buttonClassName =
        "text-slate-950 bg-white dark:border-neutral-800 hover:bg-slate-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-white";
      break;

    case "primary":
      buttonClassName =
        "text-white bg-primary-600 hover:bg-primary-500 border-primary-600 dark:bg-primary-500 dark:text-white";
      break;

    case "outline-dark":
      buttonClassName =
        "text-white bg-transparent hover:bg-white hover:text-black dark:bg-neutral-900 dark:text-white";
      break;

    default:
      buttonClassName =
        "text-white bg-primary-600 hover:bg-primary-500 border-primary-600 dark:bg-primary-500 dark:text-white";
  }

  if (as === 'a') {
    return (
      <a
        href={href}
        className={`flex flex-row items-center justify-start gap-2 px-2 py-2 text-sm font-semibold transition-colors duration-200 rounded-full border md:text-base md:px-5 md:py-3 ${buttonClassName} ${
          secondaryIcon ? `md:justify-between` : `md:justify-center`
        }  ${className}`}
      >
        <div className="flex flex-row items-center gap-2">
          {icon && <div className="shrink-0">{icon}</div>}
          {label || null}
        </div>
        {secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center justify-start gap-2 px-2 py-2 text-sm font-semibold transition-colors duration-200 rounded-full border md:text-base md:px-5 md:py-3 ${buttonClassName} ${
        secondaryIcon ? `md:justify-between` : `md:justify-center`
      }  ${className}`}
    >
      <div className="flex flex-row items-center gap-2">
        {icon && <div className="shrink-0">{icon}</div>}
        {label || null}
      </div>
      {secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
    </button>
  );
};

export default Button;
