<script>
	import { useStoryblokApi } from '@storyblok/svelte';

	export let data;
</script>

<section class="confirm-section">
	<h2>Betalning genomförd</h2>
	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M18.9 35.7L7.69995 24.5L9.84995 22.35L18.9 31.4L38.0999 12.2L40.25 14.35L18.9 35.7Z"
			fill="#059102"
		/>
	</svg>
</section>

<section class="summary-section">
	<p>
		{data.user.first_name + ' ' + data.user.last_name} <br />
		{data.user.city + ' ' + data.user.address + ' ' + data.user.zip}<br />
		{data.user.phone + ' ' + data.user.email}
	</p>
	<p>Betalmetod: Betalkort</p>
</section>

<style>
	.confirm-section {
		display: flex;
	}

	.confirm-section svg {
		margin-top: 19px;
		margin-bottom: 24px;
	}
</style>
