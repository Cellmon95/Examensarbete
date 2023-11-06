<script lang="ts">
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
	import type { MovieCarouselStoryblok } from '../component-types-sb';

    

	export let blok: any;
</script>

<div use:storyblokEditable={blok} />
