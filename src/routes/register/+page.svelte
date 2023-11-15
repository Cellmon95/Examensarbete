<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import type { AuthError } from '@supabase/supabase-js';
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	type User = {
		email: string;
		firstName: string;
		lastName: string;
	};

	const user: User = {
		email: '',
		firstName: '',
		lastName: ''
	};

	let email: string = '';

	async function registerUser(): Promise<void> {
		try {
			console.log(email);
			const { data, error } = await supabase.auth.signUp({
				email: email,
				password: 'exampasxale-password',
				options: {
					data: {
						first_name: user.firstName,
						last_name: user.lastName
					}
				}
			});
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		}
	}
</script>

<div>
	<form>
		<label for="fname">Förnamn:</label><br />
		<input type="text" id="fname" name="fname"  value={user.firstName} /><br />
		<label for="lname">Efternamn:</label><br />
		<input type="text" id="lname" name="lname" value={user.lastName} /><br />
		<label for="phone">Telefon:</label><br />
		<input type="text" id="phone" name="phone" value="" /><br />
		<label for="email">Email:</label><br />
		<input type="text" id="email" name="email" value={email} /><br />
		<label for="adress">Adress:</label><br />
		<input type="text" id="adress" name="adress" value="" /><br />
		<label for="city">Stad:</label><br />
		<input type="text" id="city" name="city" value="" /><br />
		<label for="zip">Postnr:</label><br />
		<input type="text" id="zip" name="zip" value="" /><br /><br />
		<input type="submit" value="Registrera" on:click={registerUser} />
	</form>
</div>
