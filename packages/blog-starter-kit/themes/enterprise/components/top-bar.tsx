import Link from 'next/link';

function TopBar() {
	return (
		<Link href={'https://tally.so/r/w5vp8Z'} target="_blank">
			<section className="flex items-center justify-center gap-2 bg-violet-500 px-1 py-2 text-center text-sm text-white">
				<p>Doctor Droid is hosting a auto-investigation demo on 8th October.</p>
				<button className="rounded border bg-white p-1 text-violet-500 transition-all hover:bg-violet-500 hover:text-white">
					Register
				</button>
			</section>
		</Link>
	);
}

export default TopBar;
