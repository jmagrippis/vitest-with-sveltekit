<script lang="ts">
	import '../app.css'

	import Header from '$lib/components/Header/Header.svelte'
</script>

<div id="theme-container">
	<div id="app-content">
		<Header />

		<main class="flex flex-grow flex-col items-center justify-center">
			<slot />
		</main>

		<footer class="text-center text-lg">
			<a class="decoration-2" href="https://magrippis.com/tube"
				>magrippis.com/tube</a
			>
			<p>🧑‍💻 ^ More tutorials from Johnny ^ 👩‍💻</p>
		</footer>
	</div>
</div>
