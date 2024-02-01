import { useTheme } from "./contexts/themeContext";

type Props = {
	children?: React.ReactNode;
	className?: string;
};

export const Container = ({ children, className }: Props) => {
	const {theme} = useTheme()
	return <div className={`${theme} ${className} `}>{children}</div>;
};
