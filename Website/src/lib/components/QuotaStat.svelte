<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		format = 'Quota {value2}: ${value}',
		quotaValue,
		quotaIndex
	}: {
		format?: string;
		quotaValue: number;
		quotaIndex: number;
	} = $props();

	let text = $derived(getTextWithValues(format, [quotaValue, quotaIndex]));
	let preferredText = $derived(getTextWithValues(format, [99999, 99]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
