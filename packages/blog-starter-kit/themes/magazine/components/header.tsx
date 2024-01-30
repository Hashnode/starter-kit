import Link from 'next/link';

import { ModeToggle } from './mode-toggle';

export const Navbar = () => {
	return (
		<>
			{/* <div className="fixed top-0 z-50 flex items-center justify-between w-full px-4 border-b shadow-sm border-muted h-14 backdrop-blur-md">
				<div className="flex items-center justify-between w-full mx-auto md:max-w-screen-2xl">
					<div>
						<Link href="/">
							<h1 className="text-3xl font-semibold">Blog</h1>
						</Link>
					</div>
					<div className="flex items-center justify-between w-full space-x-4 md:block md:w-auto">
						<ModeToggle />
					</div>
				</div>
			</div> */}
			<div className="fixed top-0 z-50 flex items-center justify-between w-full px-4 border-b shadow-sm border-muted h-14 backdrop-blur-md">
				<div className="flex items-center justify-between w-full mx-auto md:max-w-screen-2xl">
					<div>
						<Link href="/">
							<h1 className="text-3xl font-semibold">Blog</h1>
						</Link>
					</div>
					<div className="flex items-center space-x-4">
						<ModeToggle />
					</div>
				</div>
			</div>
		</>
	);
};
