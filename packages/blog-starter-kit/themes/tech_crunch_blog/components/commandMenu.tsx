'use client';

import useDebouncedInput from '@/hooks/useDebouncedInput';
import { useEffect, useState } from 'react';
import CommandPalette, { useHandleOpenCommandPalette } from 'react-cmdk';
import 'react-cmdk/dist/cmdk.css';

const CommandMenu = (prop: { isOpen: boolean; setIsOpen: () => void }) => {
	const [page, _] = useState<'root'>('root');
	const { value, blogs, onChange, setIsMounted } = useDebouncedInput('');

	useHandleOpenCommandPalette(prop.setIsOpen);

	useEffect(() => {
		setIsMounted(true);

		return () => {
			setIsMounted(false);
		};
	}, [value]);

	return (
		<CommandPalette
			onChangeSearch={(value) => {
				onChange(value);
			}}
			onChangeOpen={prop.setIsOpen}
			search={value}
			isOpen={prop.isOpen}
			page={page}
		>
			<CommandPalette.Page id="root">
				<CommandPalette.List>
					{blogs && blogs.length > 0 ? (
						blogs.map(({ title, url }, index) => {
							return (
								<CommandPalette.ListItem key={crypto.randomUUID()} index={index} href={url}>
									{title}
								</CommandPalette.ListItem>
							);
						})
					) : (
						<CommandPalette.FreeSearchAction />
					)}
				</CommandPalette.List>
			</CommandPalette.Page>
		</CommandPalette>
	);
};

export default CommandMenu;
