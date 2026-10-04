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
	import { fillTemplate } from '$lib/template';

	let {
		payload
	}: {
		payload: CrewStatPayload;
	} = $props();

	let text = $derived(fillTemplate(payload.template, [payload.playerCount]));
	let preferredText = $derived(fillTemplate(payload.template, [99]));
</script>

<Stat>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
