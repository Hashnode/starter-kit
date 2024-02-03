<script lang="ts">
	export let name: string = 'Technalitic';
	export let description: string =
		'Random thoughts about software engineering, programming, and the future of technology.';
</script>

<div class="flex flex-col justify-around h-[70vh] max-w-5xl items-center text-white m-auto pb-40">
	<h2 class="text-3xl lg:text-7xl uppercase">{name}</h2>
	<p class="text-2xl sm:text-4xl text-center">
		{description}
	</p>

	<slot />
</div>
