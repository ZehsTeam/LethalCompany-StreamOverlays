<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		format = 'Day: {value} ({value2}/{value3})',
		day,
		dayInQuota,
		maxDaysInQuota
	}: {
		format?: string;
		day: number;
		dayInQuota: number;
		maxDaysInQuota: number;
	} = $props();

	let text = $derived(getTextWithValues(format, [day, dayInQuota, maxDaysInQuota]));
	let preferredText = $derived(getTextWithValues(format, [99, 9, 9]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
