<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import type { User } from '../../types/types';

	const user: User = {
		email: '',
		firstName: '',
		lastName: '',
		adress: '',
		phone: '',
		city: '',
		zip: '',
		password: ''
	};

	let repetPassword: string = '';

	async function registerUser(): Promise<void> {
		if (user.password === repetPassword) {
			try {
				const { data, error } = await supabase.auth.signUp({
					email: user.email,
					password: user.password,
					options: {
						data: {
							first_name: user.firstName,
							last_name: user.lastName,
							phone: user.phone,
							adress: user.adress,
							city: user.city,
							zip: user.zip
						}
					}
				});

				if (error) throw error;
				alert('Success');
			} catch (error) {
				if (error instanceof Error) {
					alert(error.message);
				}
			}
		} else {
			alert('Lösenorden matchar inte!');
		}
	}
</script>

<div>
	<form>
		<label for="fname">Förnamn:</label><br />
		<input type="text" id="fname" name="fname" bind:value={user.firstName} /><br />

		<label for="lname">Efternamn:</label><br />
		<input type="text" id="lname" name="lname" bind:value={user.lastName} /><br />

		<label for="phone">Telefon:</label><br />
		<input type="text" id="phone" name="phone" bind:value={user.phone} /><br />

		<label for="email">Email:</label><br />
		<input type="text" id="email" name="email" bind:value={user.email} /><br />

		<label for="adress">Adress:</label><br />
		<input type="text" id="adress" name="adress" bind:value={user.adress} /><br />

		<label for="city">Stad:</label><br />
		<input type="text" id="city" name="city" bind:value={user.city} /><br />

		<label for="zip">Postnr:</label><br />
		<input type="text" id="zip" name="zip" bind:value={user.zip} /><br />

		<label for="zip">Lösenord:</label><br />
		<input type="password" id="password" name="password" bind:value={user.password} /><br />

		<label for="zip">Upreppa Lösendor:</label><br />
		<input
			type="password"
			id="repet-password"
			name="repet-password"
			bind:value={repetPassword}
		/><br />

		<input type="submit" value="Registrera" on:click={registerUser} />
	</form>
</div>
