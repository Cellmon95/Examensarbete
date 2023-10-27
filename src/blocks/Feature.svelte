<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import type { FeatureStoryblok } from '../component-types-sb';

	export let blok: FeatureStoryblok;
</script>

<div use:storyblokEditable={blok}>
	<h2>{blok.name}</h2>
</div>
