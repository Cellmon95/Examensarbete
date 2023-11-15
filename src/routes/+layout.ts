import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import MovieCarousel from '../blocks/MovieCarousel.svelte';
import Page from '../blocks/Page.svelte';
import Movie from '../blocks/Movie.svelte';
import Showcase from '../blocks/Showcase.svelte';
import AdBanner from '../blocks/AdBanner.svelte';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { Database } from '../types/supabase.ts';

export async function load({ fetch, data, depends }) {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: data.session
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

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
		...data,
		storyblokApi: storyblokApi,
		supabase,
		session
	};
}
