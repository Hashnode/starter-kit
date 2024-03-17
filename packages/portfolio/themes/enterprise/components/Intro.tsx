import { FaLinkedin, FaStackOverflow } from 'react-icons/fa6';
import { SocialLink } from '.';

type Props = {};

const Intro = (props: Props) => {
	return (
		<div className="max-w-2xl">
			<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-transparent sm:text-5xl">
				Frontend software engineer who enjoys building beautiful and functional User Interfaces.
			</h1>
			<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
				Hi. I&apos;m <span className="font-bold">Praveen Kumar</span>, a Software Engineer based in
				Bangalore, India. I&apos;m currently working as a React Native developer for MakeMyTrip. I
				am passionate about personal growth and progressing in my career. This is my personal
				website where you can learn more about me, read articles I&apos;ve written.
			</p>
			<div className="mt-6 flex gap-4">
				<SocialLink
					className="m-0 h-8 w-8 text-zinc-950"
					href="https://www.linkedin.com/in/dec/"
					ariaLabel="Follow on LinkedIn"
					icon={FaLinkedin}
				/>

				<SocialLink
					className="m-0 h-8 w-8 text-zinc-950"
					href="https://stackoverflow.com/users/9153448/decpk"
					ariaLabel="Follow on LinkedIn"
					icon={FaStackOverflow}
				/>
			</div>
		</div>
	);
};

export default Intro;
