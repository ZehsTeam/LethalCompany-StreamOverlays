<script module lang="ts">
	import { type StatPayload } from './Stat.svelte';

	export type AveragePerDayStatPayload = StatPayload & {
		averagePerDayValue: number;
	};

	export const defaultPayload = {
		template: 'Avg/Day: ${value}',
		averagePerDayValue: 0
	} satisfies AveragePerDayStatPayload;
</script>

<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		payload
	}: {
		payload: AveragePerDayStatPayload;
	} = $props();

	let text = $derived(getTextWithValues(payload.template, [payload.averagePerDayValue]));
	let preferredText = $derived(getTextWithValues(payload.template, [9999]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
