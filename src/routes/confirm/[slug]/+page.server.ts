import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession }, params }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/login');
	}

	const { data: user } = await supabase.from('user').select().eq('id', session.user.id).single();

	return { session, user };
};
