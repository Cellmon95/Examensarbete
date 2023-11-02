<script lang="ts">
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
	import type { MovieCarouselStoryblok } from '../component-types-sb';
	import Movie from './Movie.svelte';

	export let blok: MovieCarouselStoryblok;
</script>

<div use:storyblokEditable={blok}>
	<div>
		{#if blok.movies !== undefined}
			{#each blok.movies as movie}
				<StoryblokComponent blok={movie} />
			{/each}
		{/if}
	</div>
</div>
