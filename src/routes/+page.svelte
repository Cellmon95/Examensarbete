<script lang="ts">
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import { supabase } from '$lib/supabaseClient.js';

	export let data;

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<div>
	<ul>
		{#each data.movies as movie}
			<li>{movie.name}</li>
		{/each}
	</ul>

	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</div>
