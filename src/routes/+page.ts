import { supabase } from '$lib/supabaseClient.js';



export async function load({ parent }) {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories/home', {
		version: 'draft'
	});
	const moviesData = await supabase.from('movies').select();

	return {
		story: dataStory.data.story,
		movies: moviesData.data ?? []
	};
}
