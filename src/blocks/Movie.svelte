<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import type { MovieStoryblok } from '../component-types-sb';

	export let blok: MovieStoryblok;
</script>

<div use:storyblokEditable={blok}>
	<h1>{blok.title}</h1>
</div>
