import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/login');
	}

	const { data: user } = await supabase
		.from('user')
		.select(`first_name, last_name`)
		.eq('id', '0d4d9a29-a81f-4ebc-810c-e9ee25ea1097')
		.single();

	return { session, user };
};
