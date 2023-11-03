import { supabase } from '$lib/supabaseClient.ts';

export async function load() {
	const moviesData = await supabase.from('movie').select();

	return {
		movies: moviesData.data ?? []
	};
}
