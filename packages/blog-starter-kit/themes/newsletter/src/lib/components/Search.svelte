<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { request } from 'graphql-request';
	import {
		SearchPostsOfPublicationDocument,
		type SearchPostsOfPublicationQuery,
		type SearchPostsOfPublicationQueryVariables,
		type PublicationFragment
	} from '$lib/graphql/generated/graphql';

	const GQL_ENDPOINT = import.meta.env.VITE_PUBLIC_HASHNODE_GQL_ENDPOINT as string;

	const NO_OF_SEARCH_RESULTS = 5;

	type Post = SearchPostsOfPublicationQuery['searchPostsOfPublication']['edges'][0]['node'];

	export let publication: PublicationFragment;
	let searchInput: HTMLInputElement;
	let timer: NodeJS.Timeout;

	let query = '';
	let searchResults: Post[] = [];
	let isSearching = false;

	const resetInput = () => {
		searchInput.value = '';
		query = '';
	};

	const escapeSearchOnESC = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			resetInput();
		}
	};

	const updateSearchQuery = async (event: KeyboardEvent) => {
		query = (event.target as HTMLInputElement)?.value || '';
		await search(query);
	};

	const search = async (query: string) => {
		if (timer) clearTimeout(timer);

		if (!query) {
			searchResults = [];
			isSearching = false;
			return;
		}

		timer = setTimeout(async () => {
			isSearching = true;

			const data = await request<
				SearchPostsOfPublicationQuery,
				SearchPostsOfPublicationQueryVariables
			>(GQL_ENDPOINT, SearchPostsOfPublicationDocument, {
				first: NO_OF_SEARCH_RESULTS,
				filter: { query, publicationId: publication.id }
			});
			const posts = data.searchPostsOfPublication.edges.map((edge) => edge.node);
			searchResults = posts;
			isSearching = false;
		}, 500);
	};

	onMount(() => {
		search(query);
	});

	onDestroy(() => {
		if (timer) clearTimeout(timer);
	});
</script>

<input type="text" bind:value={query} on:keyup={updateSearchQuery} on:keydown={escapeSearchOnESC} />

{#if isSearching}
	<p>Searching...</p>
{:else if searchResults.length > 0}
	<ul>
		{#each searchResults as post}
			<li>
				<a href={`/posts/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>No results found</p>
{/if}
