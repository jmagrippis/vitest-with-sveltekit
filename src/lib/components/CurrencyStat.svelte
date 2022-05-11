<script lang="ts">
	import {formatCurrency} from '$lib/formatCurrency'

	export let title: string
	export let value: number
</script>

<h3>{title}</h3>
<div class="text-4xl">{formatCurrency(value)}</div>
