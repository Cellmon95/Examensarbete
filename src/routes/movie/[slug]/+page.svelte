<script lang="ts">
	import MovieShowcase from '../../../components/MovieShowcase.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	export let data;

	function onBook() {
		goto('/buy/' + data.slug);
	}
</script>

<MovieShowcase title={data.movieData?.name || ''} imgURL={data.movieData?.showcase_img || ''} />

<section class="button-section">
	<button on:click={onBook}> Boka </button>
</section>

<section class="carousel-section">
	<div class="carousel_wrapper">
		{#if browser}
			<Carousel autoplay autoplayDuration={5000} particlesToShow={2} infinite={false}>
				<img
					src="https://bsehhmxcpatkccvvrugo.supabase.co/storage/v1/object/sign/movie_carousel_img/spiderman_img1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3ZpZV9jYXJvdXNlbF9pbWcvc3BpZGVybWFuX2ltZzEuanBnIiwiaWF0IjoxNzAwNTAwNDYzLCJleHAiOjIwMTU4NjA0NjN9.MjMMdx2lrqW4kdKYRlGsYRNd92eqBpydshTNY4XYXZg"
					alt="spiderman"
				/>
				<img
					src="https://bsehhmxcpatkccvvrugo.supabase.co/storage/v1/object/sign/movie_carousel_img/spiderman_img1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3ZpZV9jYXJvdXNlbF9pbWcvc3BpZGVybWFuX2ltZzEuanBnIiwiaWF0IjoxNzAwNTAwNDYzLCJleHAiOjIwMTU4NjA0NjN9.MjMMdx2lrqW4kdKYRlGsYRNd92eqBpydshTNY4XYXZg"
					alt="spiderman"
				/>
				<img
					src="https://bsehhmxcpatkccvvrugo.supabase.co/storage/v1/object/sign/movie_carousel_img/spiderman_img1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3ZpZV9jYXJvdXNlbF9pbWcvc3BpZGVybWFuX2ltZzEuanBnIiwiaWF0IjoxNzAwNTAwNDYzLCJleHAiOjIwMTU4NjA0NjN9.MjMMdx2lrqW4kdKYRlGsYRNd92eqBpydshTNY4XYXZg"
					alt="spiderman"
				/>
			</Carousel>
		{/if}
	</div>
</section>

<section class="desc-section">
	<p>
		{data.movieData?.descr}
	</p>
</section>

<style>
	.carousel-section {
		margin-top: 30px;
	}

	.button-section {
		display: flex;
		justify-content: center;

		margin-top: 30px;
	}

	img {
		width: 80px;
		height: 150px;
	}
</style>
