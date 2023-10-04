import { useAppContext } from "./contexts/appContext";

const Footer = () => {
  const { publication } = useAppContext();

  return (
    <footer className="pt-10 text-sm border-t text-neutral-500 dark:text-neutral-400 dark:border-neutral-800">
      &copy; {new Date().getFullYear()} {publication.title}
    </footer>
  );
};

export default Footer;
