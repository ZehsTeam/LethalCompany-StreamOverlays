<script module lang="ts">
	import { type StatPayload } from './Stat.svelte';

	export type QuotaStatPayload = StatPayload & {
		quotaValue: number;
		quotaIndex: number;
	};

	export const defaultPayload = {
		template: 'Quota {value2}: ${value}',
		quotaValue: 130,
		quotaIndex: 1
	} satisfies QuotaStatPayload;
</script>

<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		payload
	}: {
		payload: QuotaStatPayload;
	} = $props();

	let text = $derived(
		getTextWithValues(payload.template, [payload.quotaValue, payload.quotaIndex])
	);
	let preferredText = $derived(getTextWithValues(payload.template, [99999, 99]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
