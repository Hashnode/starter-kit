type Props = {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  secondaryIcon?: React.ReactNode;
};

const Button = ({ label, icon, className, secondaryIcon }: Props) => {
  return (
    <button
      className={`flex flex-row items-center justify-start gap-2 px-4 py-2 text-white bg-primary-600 text-sm font-semibold transition-colors duration-200 rounded-full border md:text-base md:px-5 md:py-3 hover:bg-primary-500 border-primary-600 dark:bg-primary-500 dark:text-white ${
        secondaryIcon ? `md:justify-between` : `md:justify-center`
      } ${className}`}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="shrink-0">{icon}</div>
        {label}
      </div>
      <div className="shrink-0">{secondaryIcon}</div>
    </button>
  );
};

export default Button;
