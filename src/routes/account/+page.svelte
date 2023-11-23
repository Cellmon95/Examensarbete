<script lang="ts">
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

	export let data;
	let { session, supabase, user } = data;
	$: ({ session, supabase, user } = data);

	let fullName = user?.first_name + ' ' + user?.last_name;

	async function logout() {
		const { error } = await supabase.auth.signOut();

		if (error) throw error;

		goto('/login');
	}
</script>

<h2>Ditt Konto</h2>

<p>
	<span>Ditt namn: </span>{user.first_name + ' ' + user.last_name} <br />
	adress: {user.city + ' ' + user.address + ' ' + user.zip}<br />
	Kontak: {user.phone + ' ' + user.email}
</p>

<button on:click={logout}>Logga ut</button>
