'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { Input } from './ui/input';

const CommandMenu = dynamic(() => import('./commandMenu'));

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleDropDownToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="fixed z-50 w-full bg-gray-50 px-3 shadow-md">
			<div className="grid w-full grid-cols-4 items-center">
				<div className="col-span-3">
					<div className="flex h-[70px] max-h-[80px] w-[130px] max-w-[132px] items-center p-3">
						<Image width={130} height={130} src={'/hashnode.svg'} alt="logo" priority />
					</div>
				</div>

				<div className="relative flex-col gap-2 lg:flex">
					<CommandMenu isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
					<ToggleBtn isOpen={isOpen} handleClick={handleDropDownToggle} />
					<SearchToggle handleClick={handleDropDownToggle} />
				</div>
			</div>
		</nav>
	);
};

const ToggleBtn = ({ isOpen, handleClick }: { isOpen: boolean; handleClick: () => void }) => {
	return (
		<div onClick={() => handleClick()} className="flex justify-end p-3 md:hidden">
			<span>{isOpen ? <BiX size={'1.7rem'} /> : <BiMenu size={'1.7rem'} />}</span>
		</div>
	);
};
const SearchToggle = ({ handleClick }: { handleClick: () => void }) => {
	return (
		<div onClick={() => handleClick()} className="hidden justify-end md:flex">
			<Input type="text" placeholder="Search blog" className="placeholder-gray-400" />
		</div>
	);
};

export default NavBar;
