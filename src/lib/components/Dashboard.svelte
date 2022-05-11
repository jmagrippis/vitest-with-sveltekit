<script lang="ts">
	import CurrencyStat from './CurrencyStat.svelte'

	export let balance: number
	export let revenue: number
	export let pending: number
</script>

<h1 class="text-6xl">Dashboard</h1>

<section>
	<h2 class="text-4xl">Overview</h2>

	<CurrencyStat title="Balance" value={balance} />
	<CurrencyStat title="Revenue" value={revenue} />
	<CurrencyStat title="Pending" value={pending} />
</section>
