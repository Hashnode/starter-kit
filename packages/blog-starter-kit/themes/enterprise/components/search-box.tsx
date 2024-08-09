import { Grid, List } from 'react-feather';
import { ViewType } from 'types/ViewType';
import { usePostsContext } from './contexts/postsContext';
import { Search } from './searchbar';

const handleIcon = (view: ViewType) => {
	switch (view) {
		case ViewType.LIST:
			return <Grid size={20} />;
		case ViewType.GRID:
			return <List size={20} />;
		default:
			return;
	}
};

function SearchBox() {
	const { toggle, view } = usePostsContext();

	return (
		<div className="col-span-1 flex items-center gap-2">
			<div className="flex-1">
				<Search />
			</div>
			<div
				onClick={toggle}
				className="cursor-pointer rounded border bg-slate-50 p-2 text-slate-500 ring-slate-200 transition-all hover:ring-1"
			>
				{handleIcon(view)}
			</div>
		</div>
	);
}

export default SearchBox;
