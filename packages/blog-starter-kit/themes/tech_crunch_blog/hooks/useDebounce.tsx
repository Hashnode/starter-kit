import { useEffect, useState } from 'react';

const useSearchDebounce = (initialValue: string, delay: number) => {
	const [value, setValue] = useState(initialValue);
	const [debouncedValue, setDebouncedValue] = useState(initialValue);

	useEffect(() => {
		const debounceTimer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(debounceTimer);
		};
	}, [value, delay]);

	return [debouncedValue, setValue] as const;
};

export default useSearchDebounce;
