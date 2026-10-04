<script module lang="ts">
	import { type StatPayload } from './Stat.svelte';

	export type DayStatPayload = StatPayload & {
		day: number;
		dayInQuota: number;
		maxDaysInQuota: number;
	};

	export const defaultPayload = {
		template: 'Day: {value} ({value2}/{value3})',
		day: 1,
		dayInQuota: 1,
		maxDaysInQuota: 3
	} satisfies DayStatPayload;
</script>

<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		payload
	}: {
		payload: DayStatPayload;
	} = $props();

	let text = $derived(
		getTextWithValues(payload.template, [payload.day, payload.dayInQuota, payload.maxDaysInQuota])
	);
	let preferredText = $derived(getTextWithValues(payload.template, [99, 9, 9]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
