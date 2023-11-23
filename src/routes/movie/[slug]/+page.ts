import { supabase } from '$lib/supabaseClient.ts';
import { error } from '@sveltejs/kit';

export async function load({ params, data }) {
	const supaBaseResp = await supabase.from('movie').select().eq('id', params.slug);

	if (supaBaseResp.error) {
		console.error(error);
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		movieData: supaBaseResp.data.pop(),
		slug: params.slug
	};
}
