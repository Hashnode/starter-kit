<script lang="ts">
	import { request } from 'graphql-request';

	import {
		SubscribeToNewsletterDocument,
		type PublicationFragment,
		type SubscribeToNewsletterMutation,
		type SubscribeToNewsletterMutationVariables,
		type SubscribeToNewsletterPayload
	} from '$lib/graphql/generated/graphql';

	const GQL_ENDPOINT = import.meta.env.VITE_PUBLIC_HASHNODE_GQL_ENDPOINT as string;

	let status: SubscribeToNewsletterPayload['status'];
	let requestInProgress = false;
	let email = '';

	export let publication: PublicationFragment;

	const subscribe = async () => {
		if (!email) return;

		requestInProgress = true;

		try {
			const data = await request<
				SubscribeToNewsletterMutation,
				SubscribeToNewsletterMutationVariables
			>(GQL_ENDPOINT, SubscribeToNewsletterDocument, {
				input: { publicationId: publication.id, email }
			});
			requestInProgress = false;
			status = data.subscribeToNewsletter.status;
		} catch (error) {
			requestInProgress = false;
			console.error('Failed to subscribe:', error);
		}
	};
</script>

<section
	class="bg-zinc-900/20 px-20 h-52 py-40 rounded-3xl w-2/3 justify-center items-center flex flex-col gap-14 m-auto my-32"
>
	<h2 class="text-white text-lg text-center">
		Subscribe to {publication.title} newsletter to get the latest updates in your inbox
	</h2>
	<div class="flex gap-4">
		<input
			class="bg-zinc-900/60 py-4 px-4 w-96 rounded-2xl text-white"
			bind:value={email}
			placeholder="Enter your email"
		/>
		<button
			class="bg-orange-700 text-white text-sm py-4 px-8 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600 hover:shadow-lg"
			on:click={subscribe}
			disabled={requestInProgress}
		>
			{requestInProgress ? 'Subscribing...' : 'Subscribe'}
		</button>
	</div>

	{#if status === 'PENDING'}
		<p class="text-white text-sm">Please check your email to confirm your subscription</p>
	{/if}
</section>
