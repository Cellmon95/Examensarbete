<script lang="ts">
	// @ts-nocheck

	import { storyblokEditable, StoryblokComponent} from '@storyblok/svelte';
	import type { PageStoryblok } from '../component-types-sb';

	export let blok: PageStoryblok;
</script>

{#key blok}
	<div use:storyblokEditable={blok}>
		{#each blok.body as blok}
			<StoryblokComponent {blok} />
		{/each}
	</div>
{/key}
