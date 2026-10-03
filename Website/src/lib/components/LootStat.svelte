<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		format = 'Ship Loot: ${value}',
		lootValue
	}: {
		format?: string;
		lootValue: number;
	} = $props();

	let text = $derived(getTextWithValues(format, [lootValue]));
	let preferredText = $derived(getTextWithValues(format, [99999]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
