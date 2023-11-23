import { redirect } from '@sveltejs/kit';
import type { User } from '../../types/types';
import { supabase } from '$lib/supabaseClient.js';
import { darkThemes } from '@supabase/auth-ui-shared';

export const actions = {
	default: async ({ request }) => {
		const user: any = {
			id: '',
			email: '',
			firstName: '',
			lastName: '',
			address: '',
			phone: '',
			city: '',
			zip: '',
			password: ''
		};
		const data = await request.formData();

		user.firstName = data.get('fname') || '';
		user.lastName = data.get('lname') || '';
		user.email = data.get('email') || '';
		user.password = data.get('password') || '';
		user.address = data.get('address') || '';
		user.zip = data.get('zip') || '';
		user.phone = data.get('phone');
		user.city = data.get('city') || '';

		try {
			const { data, error } = await supabase.auth.signUp({
				email: user.email,
				password: user.password
			});

			if (error) throw error;
			user.id = data.user?.id;
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
			}
		}

		const { error } = await supabase.from('user').insert({
			id: user.id,
			first_name: user.firstName,
			last_name: user.lastName,
			adress: user.adress,
			city: user.city,
			email: user.email,
			phone: user.phone,
			zip: user.zip
		});
		if (error) throw error;
	}
};
