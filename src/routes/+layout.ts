import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import MovieCarousel from '../blocks/MovieCarousel.svelte';
import Feature from '../blocks/Feature.svelte';
import Page from '../blocks/Page.svelte';
import Movie from '../blocks/Movie.svelte';
import { supabase } from '$lib/supabaseClient';

export async function load() {
	storyblokInit({
		accessToken: 'D779cLlDOvQfcZP8YsPThAtt',
		use: [apiPlugin],
		apiOptions: {
			region: 'eu'
		},
		components: {
			page: Page,
			movieCarousel: MovieCarousel,
			feature: Feature,
			movie: Movie
		}
	});

	let storyblokApi = await useStoryblokApi();
	return {
		storyblokApi: storyblokApi
	};
}
