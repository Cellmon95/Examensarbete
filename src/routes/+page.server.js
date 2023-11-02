import { supabase } from '$lib/supabaseClient.js';

export async function load() {
	const moviesData = await supabase.from('movie').select();

	return {
		movies: moviesData.data ?? []
	};
}
