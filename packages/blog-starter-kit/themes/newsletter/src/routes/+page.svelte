<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { formatDate } from '$lib/utils/formatDate';

	export let data;

	const posts = data.props.posts.publication?.posts.edges;
	const firstPost = posts?.slice(0, 1)[0];
</script>

<Header />
<Hero />

<section class="grid justify-center max-w-5xl mx-auto">
	{#if firstPost}
		<div class="w-full flex rounded-2xl bg-zinc-900/30 p-6">
			<img
				src={firstPost.node.coverImage?.url}
				alt="Post"
				class="rounded-2xl w-[326px] h-[234px] object-cover"
			/>
			<div class="ml-10">
				<div class="gap-5">
					<a class="text-white text-3xl" href={`${firstPost.node.slug}`}>{firstPost.node.title}</a>
				</div>
				<div class="text-orange-400 text-sm py-2">{formatDate(firstPost.node.publishedAt)}</div>
				<div class="text-zinc-400 text-sm py-2">{firstPost.node.brief}</div>
				<a href={`${firstPost.node.slug}`} class="text-white pt-4">Read the article</a>
			</div>
		</div>
	{/if}
	<section class="grid grid-cols-3 gap-10 my-20">
		{#each posts?.slice(1) || [] as { node }}
			<div class="flex flex-col mb-10">
				<img src={node.coverImage?.url} alt="Post" class="rounded-2xl h-[200px] object-cover" />
				<div class="text-orange-400 text-sm py-2">{formatDate(node.publishedAt)}</div>
				<a href={`${node.slug}`} class="text-white text-xl">
					{node.title}
				</a>
			</div>
		{/each}
	</section>
</section>

<Footer />
