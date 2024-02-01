import { Waypoint } from 'react-waypoint';
import { PostFragment } from '../generated/graphql';
import { PostPreview } from './post-preview';
import { useState } from 'react';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MorePosts = ({ posts, context }: Props) => {
	return (
		<section className="mb-10 flex flex-col items-start gap-10">
			{context === 'home' && (
				<h2 className="text-xl font-bold leading-tight text-center mx-auto tracking-tight text-slate-900 dark:text-neutral-50 lg:text-3xl">
					More Posts
				</h2>
			)}
			<div className='grid items-stretch mx-auto gap-5 grid-cols-1 md:grid-cols-2'>
				{posts.map((post) => (
					
						<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage?.url}
						date={post.publishedAt}
						author={{
							name: post.author.name,
							profilePicture: post.author.profilePicture,
						}}
						slug={post.slug}
						excerpt={post.brief}
					/>
					
				))}
			</div>
			
		</section>
	);
};
