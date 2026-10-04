<script module lang="ts">
	import { type StatPayload } from './Stat.svelte';

	export type CrewStatPayload = StatPayload & {
		playerCount: number;
	};

	export const defaultPayload = {
		template: 'Crew: {value}',
		playerCount: 0
	} satisfies CrewStatPayload;
</script>

<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		payload
	}: {
		payload: CrewStatPayload;
	} = $props();

	let text = $derived(getTextWithValues(payload.template, [payload.playerCount]));
	let preferredText = $derived(getTextWithValues(payload.template, [99]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
