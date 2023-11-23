<script lang="ts">
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

	export let data;
	export let form;

	let selectedCity: string = '';
	let numOfTickets: number = 1;

	function onSubmit() {
		goto('/confirm/' + data.slug);
	}
</script>

<section>
	<form method="POST">
		<label for="city">Stad:</label><br />
		<select name="city" id="city" bind:value={selectedCity}>
			{#each data.cityData as city}
				<option value={city.id}>{city.name}</option>
			{/each}
		</select>
		<br />
		<label for="tickets">Antal Biljeter:</label><br />
		<input type="number" id="numOfTickets" name="numOfTickets" min="1" max="20" value="1" /><br />
		<input type="hidden" name="user" value={data.session?.user.id} />
		<input type="hidden" name="movie" value={data.slug} />
		<button type="submit" on:click={onSubmit}>Bekräfta</button>
	</form>
</section>
