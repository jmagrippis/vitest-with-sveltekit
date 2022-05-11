<script lang="ts">
	import {formatCurrency} from '$lib/formatCurrency'

	export let title: string
	export let value: number
</script>

<li class="flex gap-6 rounded bg-surface-1 py-4 px-6 shadow">
	<slot name="icon" />
	<div>
		<h3 class="text-2xl text-copy-muted">{title}</h3>
		<div class="text-4xl">{formatCurrency(value)}</div>
	</div>
</li>
