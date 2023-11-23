import { fail, redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient.ts';

export const load = async ({ locals: { getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/login');
	}
	return {};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const numOfTickets = parseInt(data.get('numOfTickets'));
		const user = data.get('user');
		const city = parseInt(data.get('city'));
		const movie = parseInt(data.get('movie'));

		for (let i = 0; i < numOfTickets; i++) {
			const { error } = await supabase
				.from('booked_tickets')
				.insert({ user: user, city: city, movie: movie });
			if (error) throw error;
		}

		throw redirect(301, '/confirm/1');
	}
};
