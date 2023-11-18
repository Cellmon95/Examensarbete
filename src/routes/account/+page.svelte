<script lang="ts">
	export let data;
	let { session, supabase, user } = data;
	$: ({ session, supabase, user } = data);

	let fullName = user?.first_name + ' ' + user?.last_name;
</script>

<p>{fullName}</p>
