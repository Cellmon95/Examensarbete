import { supabase } from '$lib/supabaseClient.ts';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const citysResponse = await supabase.from('city').select();

	return {
		slug: params.slug,
		cityData: citysResponse.data || []
	};
}
