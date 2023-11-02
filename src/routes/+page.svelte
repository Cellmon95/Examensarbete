<script lang="ts">
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let data;

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<div>
	{#each data.movies as movie}
		<p>{movie.name}</p>
	{/each}

	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</div>
