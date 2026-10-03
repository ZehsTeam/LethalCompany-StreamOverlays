<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		format = 'Avg/Day: ${value}',
		averagePerDayValue
	}: {
		format?: string;
		averagePerDayValue: number;
	} = $props();

	let text = $derived(getTextWithValues(format, [averagePerDayValue]));
	let preferredText = $derived(getTextWithValues(format, [9999]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
