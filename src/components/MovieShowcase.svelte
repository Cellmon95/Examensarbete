<script lang="ts">
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
	import type { MovieCarouselStoryblok } from '../component-types-sb';

	export let imgURL: string;
	export let title: string;
</script>

<div>
	<div class="showcase">
		<!--NOTE: alt dosen't work?-->
		<img src={imgURL} alt={title} />
		<h1>{title}</h1>
		<div class="shadow-overlay" />
	</div>
</div>

<style>
	.showcase {
		position: relative;
		text-align: center;
		color: white;
		height: 500px;
	}

	.shadow-overlay {
		width: 100%;
		height: 100%;
		z-index: 1;
		box-shadow: 0px -37px 40px 0px rgba(0, 0, 0, 0.78) inset;
		position: absolute;
		top: 0;
	}

	h1 {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
