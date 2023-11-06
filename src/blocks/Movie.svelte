<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import type { MovieStoryblok } from '../component-types-sb';
	import { supabase } from '$lib/supabaseClient.ts';
	import { onMount } from 'svelte';

	export let blok: MovieStoryblok;
	let movieData: any[] = [];

	onMount(async () => {
		console.log(blok.movieId);

		try {
			const { data, error } = await supabase.from('movie').select().eq('id', blok.movieId);
			if (error) {
				console.error('Error fetching data:', error);
			} else {
				movieData = data;
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
</script>

<div use:storyblokEditable={blok}>
	{#each movieData as movie}
		<img src={movie.img_poster} alt={movie.name} />
	{/each}
</div>

<style>
	img {
		width: 130px;
	}
</style>
