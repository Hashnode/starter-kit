<script>
	import Header from '$lib/components/Header.svelte';

	export let data;

	const post = data.props?.post.publication?.post?.content.html;
	const postTitle = data.props?.post.publication?.post?.title;
	const postCoverImage = data.props?.post.publication?.post?.coverImage?.url;
</script>

<Header />

<main class="max-w-5xl mx-auto">
	<article class="prose dark:prose-invert mx-auto">
		<h1 class="font-semibold font-sans">{postTitle}</h1>
		<img src={postCoverImage} alt="Post" class="rounded-2xl w-full h-[400px] object-cover" />
		{@html post}
	</article>
</main>
