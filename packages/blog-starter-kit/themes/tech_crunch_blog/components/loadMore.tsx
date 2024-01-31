import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const LoadMore = ({ nextPage, loading }: { nextPage: () => void; loading: boolean }) => {
	return (
		<div className="mt-12 w-full hover:bg-gray-100" onClick={() => nextPage()}>
			<Button
				type="submit"
				className="font-oswald w-full text-xl leading-3 text-green-600 hover:bg-gray-200 md:text-2xl"
			>
				{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
				{loading ? 'Loading...' : 'Load more'}
			</Button>
		</div>
	);
};

export default LoadMore;
