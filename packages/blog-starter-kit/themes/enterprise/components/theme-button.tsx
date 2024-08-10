import { Button } from './button';
import { useThemeContext } from './contexts/themeContext';
import { MoonSVG, SunSVG } from './icons';

function ThemeButton() {
	const { theme, toggleTheme } = useThemeContext();

	return (
		<div>
			{theme === 'dark' ? (
				<Button
					type="outline"
					label=""
					icon={<SunSVG className="h-5 w-5 stroke-current" />}
					className="flex flex-row items-center justify-center rounded-full border border-slate-200 !px-2 !py-3 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
					onClick={toggleTheme}
				/>
			) : (
				<Button
					type="outline"
					label=""
					icon={<MoonSVG className="h-5 w-5 stroke-current" />}
					className="flex flex-row items-center justify-center rounded-full border border-slate-200 !px-2 !py-3 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
					onClick={toggleTheme}
				/>
			)}
		</div>
	);
}

export default ThemeButton;
