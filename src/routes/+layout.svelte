<script>
	import '../styles.css';
</script>

<header>
	<div class="auth-link">
		<span class="material-symbols-outlined"> login </span>
	</div>
</header>

<main>
	<slot />
</main>

<footer>
	<!--TODO:: Add a footer-->
</footer>

<style>
	.auth-link {
		display: flex;
		justify-content: right;
		align-items: center;

		height: 40px;
		background-color: red;
		padding: 20px;
	}

	.auth-link span {
		font-size: 40px;
	}
</style>
