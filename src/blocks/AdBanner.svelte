<script lang="ts">
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
	import type { MovieCarouselStoryblok } from '../component-types-sb';

	export let blok: any;
</script>

<div use:storyblokEditable={blok}>
	<div class="add-banner">
		<h3>{blok.text}</h3>
	</div>
</div>

<style>
	.add-banner {
		height: 90px;
		background-color: red;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
