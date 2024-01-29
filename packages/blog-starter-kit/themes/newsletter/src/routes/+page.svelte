<script>
	export let data;

	const posts = data.props.publication?.posts.edges;
</script>

<ul>
	{#each posts ?? [] as { node: post }}
		<li>
			<a href={post.url}>{post.title}</a>
		</li>
	{/each}
</ul>
