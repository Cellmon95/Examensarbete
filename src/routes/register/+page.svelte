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

	async function registerUser(): Promise<void> {}
</script>

<div>
	<form class="form-grid" method="POST">
		<div>
			<label for="fname">Förnamn:</label><br />
			<input type="text" id="fname" name="fname" bind:value={user.firstName} />
		</div>

		<div>
			<label for="lname">Efternamn:</label><br />
			<input type="text" id="lname" name="lname" bind:value={user.lastName} />
		</div>

		<div>
			<label for="phone">Telefon:</label><br />
			<input type="text" id="phone" name="phone" bind:value={user.phone} />
		</div>

		<div>
			<label for="email">Email:</label><br />
			<input type="text" id="email" name="email" bind:value={user.email} />
		</div>

		<div>
			<label for="adress">Adress:</label><br />
			<input type="text" id="address" name="address" bind:value={user.adress} />
		</div>

		<div>
			<label for="city">Stad:</label><br />
			<input type="text" id="city" name="city" bind:value={user.city} />
		</div>

		<div>
			<label for="zip">Postnr:</label><br />
			<input type="text" id="zip" name="zip" bind:value={user.zip} />
		</div>

		<div>
			<label for="zip">Lösenord:</label>
			<input type="password" id="password" name="password" bind:value={user.password} />
		</div>

		<div>
			<label for="zip">Upprepa Lösendordet:</label>
			<input
				type="password"
				id="repet-password"
				name="repet-password"
				bind:value={repetPassword}
			/><br />

			<input type="submit" value="Registrera" on:click={registerUser} />
		</div>
	</form>
</div>

<style>
	.form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.form-grid input[type='submit'] {
		margin-top: 40px;
	}
</style>
