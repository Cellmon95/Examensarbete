<script lang="ts">
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
	import type { MovieCarouselStoryblok } from '../component-types-sb';
	import Movie from './Movie.svelte';
	import Color from './Color.svelte';

	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	let carousel: { goToNext: () => void }; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext();
	};

	export let blok: MovieCarouselStoryblok;
</script>

<div use:storyblokEditable={blok}>
	<h2>{blok.title}</h2>
	<div class="carousel_wrapper">
		{#if browser}
			<Carousel autoplay autoplayDuration={5000} particlesToShow={2} infinite={false}>
				{#if blok.movies !== undefined}
					{#each blok.movies as movie}
						<StoryblokComponent blok={movie} />
					{/each}
				{/if}
			</Carousel>
		{/if}
	</div>
</div>

<style>
	.carousel_wrapper {
		display: flex;
		align-items: center;
	}
</style>
