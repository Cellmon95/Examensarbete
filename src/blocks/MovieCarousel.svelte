<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import type { MovieCarouselStoryblok } from '../component-types-sb';

	export let blok: MovieCarouselStoryblok;
</script>

<div use:storyblokEditable={blok}>
	<div>
		{#if blok.movies !== undefined}
			{#each blok.movies as movie}
				<p>{movie.title}</p>
			{/each}
		{/if}
	</div>
</div>
