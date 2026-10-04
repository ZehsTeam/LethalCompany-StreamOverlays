<script module lang="ts">
	import { type StatPayload } from './Stat.svelte';

	export type LootStatPayload = StatPayload & {
		lootValue: number;
	};

	export const defaultPayload = {
		template: 'Ship Loot: ${value}',
		lootValue: 0
	} satisfies LootStatPayload;
</script>

<script lang="ts">
	import Stat from './Stat.svelte';
	import { fillTemplate } from '$lib/template';

	let {
		payload
	}: {
		payload: LootStatPayload;
	} = $props();

	let text = $derived(fillTemplate(payload.template, [payload.lootValue]));
	let preferredText = $derived(fillTemplate(payload.template, [99999]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
