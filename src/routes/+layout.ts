import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import MovieCarousel from '../blocks/MovieCarousel.svelte';
import Page from '../blocks/Page.svelte';
import Movie from '../blocks/Movie.svelte';
import Showcase from '../blocks/Showcase.svelte';
import AdBanner from '../blocks/AdBanner.svelte';

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
			movie: Movie,
			showcase: Showcase,
			adBanner: AdBanner 
		}
	});

	let storyblokApi = await useStoryblokApi();
	return {
		storyblokApi: storyblokApi
	};
}
