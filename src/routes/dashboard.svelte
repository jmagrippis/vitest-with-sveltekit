<script lang="ts">
	import Dashboard from '$lib/components/Dashboard.svelte'

	const stats = {
		balance: 12_345,
		revenue: 1_678_900,
		pending: 10_000,
	}
</script>

<Dashboard {...stats} />
