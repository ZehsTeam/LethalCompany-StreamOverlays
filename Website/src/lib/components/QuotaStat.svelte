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
	import { fillTemplate } from '$lib/template';

	let {
		payload
	}: {
		payload: QuotaStatPayload;
	} = $props();

	let text = $derived(
		fillTemplate(payload.template, [payload.quotaValue, payload.quotaIndex])
	);
	let preferredText = $derived(fillTemplate(payload.template, [99999, 99]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
