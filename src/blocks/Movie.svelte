<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import type { MovieStoryblok } from '../component-types-sb';

	export let blok: MovieStoryblok;
	export let data;
</script>

<div use:storyblokEditable={blok}>
	<p>test</p>
</div>
