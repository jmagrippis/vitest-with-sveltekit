<script lang="ts">
	import CurrencyStat from './CurrencyStat.svelte'
	import AccountBalance from '$lib/icons/account-balance.svg'
	import Revenue from '$lib/icons/revenue.svg'
	import Pending from '$lib/icons/pending.svg'

	export let balance: number
	export let revenue: number
	export let pending: number
</script>

<div class="container flex grow flex-col px-2 sm:px-0">
	<h1 class="mb-6 text-6xl">Dashboard</h1>

	<section class="grow">
		<h2 class="mb-6 text-4xl">Overview</h2>

		<ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<CurrencyStat title="Balance" value={balance}>
				<AccountBalance class="w-8 fill-copy-muted" slot="icon" />
			</CurrencyStat>
			<CurrencyStat title="Revenue" value={revenue}>
				<Revenue class="w-8 fill-copy-muted" slot="icon" />
			</CurrencyStat>
			<CurrencyStat title="Pending" value={pending}>
				<Pending class="w-8 fill-copy-muted" slot="icon" />
			</CurrencyStat>
		</ul>
	</section>
</div>
